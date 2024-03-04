import classes from '../information/information.module.scss';

export default function TransList({ array }) {
  const text = () => {
    if (array.length === 0) {
      return '-';
    }
    const str = array.join(',');
    return str;
  };

  return <div className={classes.text_two}>{text()}</div>;
}
