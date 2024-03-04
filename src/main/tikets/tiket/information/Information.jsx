import classes from './information.module.scss';

export default function Information({ one }) {
  return <div className={classes.text_one}>{one}</div>;
}
