import classes from './price.module.scss';

export default function Price({ price }) {
  return <span className={classes.price}>{`${price.toLocaleString()} P`}</span>;
}
