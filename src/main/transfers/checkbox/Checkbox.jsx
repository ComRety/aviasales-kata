import { useDispatch } from 'react-redux';

import classes from './checkbox.module.scss';

export default function Checkbox({ id, label, checked, fun }) {
  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <label htmlFor={id} className={classes.text}>
        <input type="checkbox" id={id} className={classes.check} checked={checked} onClick={() => dispatch(fun(id))} />
        <span className={classes.checkbox} />
        {label}
      </label>
    </li>
  );
}
