import { useDispatch, useSelector } from 'react-redux';

import { change } from '../../store/category';

import classes from './options.module.scss';

export default function Options() {
  const value = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.options}>
      <button
        type="button"
        className={value ? `${classes.button} ${classes.click}` : classes.button}
        onClick={() => dispatch(change())}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={!value ? `${classes.button} ${classes.click}` : classes.button}
        onClick={() => dispatch(change())}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
}
