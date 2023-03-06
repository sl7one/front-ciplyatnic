import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { OrderList } from '../components/Order/OrderList';
import { fetchOrders } from '../redux/slices/ordersOperations';
import { Footer } from '../components/Footer/Footer';
import Loader from 'react-loaders';

export const Orders = () => {
  const dispatch = useDispatch();

  const order = useSelector(state => state.order);
  const { orders, isLoading } = order;
  const { items } = orders;

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Header title="Заказы" id="orders" />
      <main>
        <div className="container">
          <OrderList id="orders" items={items} />
          {isLoading && (
            <Loader type="ball-scale-multiple" active={isLoading} />
          )}
        </div>
      </main>
      <Footer id="orders" items={items} />
    </>
  );
};
