import classes from '../information/Information';

export default function Time({ time }) {
  const times = () => {
    const r = new Date(time);
    let hours = r.getHours();
    if (hours < 10) {
      hours = `0${String(hours)}`;
    }
    let minutes = r.getMinutes();
    if (minutes < 10) {
      minutes = `0${String(minutes)}`;
    }
    return `${hours}:${minutes}`;
  };
  return <div className={classes.text_two}>{times()}</div>;
}
