import { useDispatch } from 'react-redux';

import { upCount } from '../../../store/category';

import classes from './allTikets.module.scss';

export default function AllTikets() {
  const dispatch = useDispatch();
  return (
    <button type="button" className={classes.all} onClick={() => dispatch(upCount())}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}
