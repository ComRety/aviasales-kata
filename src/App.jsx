import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './header/Header';
import Main from './main/Main';
import './reset.css';
import './style.scss';
import getTickets from './store/getTickets';
import { getKey } from './store/tickets';
import Progress from './progress/Progress';

export default function App() {
  const dispatsh = useDispatch();
  const key = useSelector((store) => store.tickets.key);
  const stop = useSelector((state) => state.tickets.stop);
  const tickets = useSelector((state) => state.tickets.tikets);
  const error = useSelector((state) => state.tickets.error);

  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => {
        dispatsh(getKey(res));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (key && stop === false) {
      dispatsh(getTickets(key));
    }
  }, [key, tickets, stop, error]);

  return (
    <>
      <Progress />
      <Header />
      <Main />
    </>
  );
}
