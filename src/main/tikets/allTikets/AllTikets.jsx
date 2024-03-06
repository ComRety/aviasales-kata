import { useDispatch, useSelector } from 'react-redux';

import { upCount } from '../../../store/category';

import classes from './allTikets.module.scss';

export default function AllTikets() {
  const tickets = useSelector((state) => state.tickets.tikets);
  const dispatch = useDispatch();
  if (tickets.length) {
    return (
      <button type="button" className={classes.all} onClick={() => dispatch(upCount())}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    );
  }
}
