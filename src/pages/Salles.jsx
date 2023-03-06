import { useEffect } from 'react';
import Loader from 'react-loaders';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { OrderList } from '../components/Order/OrderList';
import { fetchSalles } from '../redux/slices/sallesOperations';

export const Salles = () => {
  const dispatch = useDispatch();

  const salles = useSelector(state => state.salles);

  const { orders, isLoading } = salles;
  const { items } = orders;

  useEffect(() => {
    dispatch(fetchSalles());
  }, [dispatch]);

  return (
    <>
      <Header title="Продажи" id="salles" />
      <main>
        <div className="container">
          <OrderList id="salles" items={items} />
          {isLoading && (
            <Loader type="ball-scale-multiple" active={isLoading} />
          )}
        </div>
      </main>
      <Footer id="salles" items={items} />
    </>
  );
};
