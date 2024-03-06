import classes from '../information/information.module.scss';

export default function Time({ time, polet }) {
  const times = () => {
    const hoursPolet = Math.floor(polet / 60);
    const minutesPolet = polet % 60;

    const r = new Date(time);

    let hours = r.getHours();
    let minutes = r.getMinutes();

    let sumHours = hours + hoursPolet;
    let sumMinutes = minutes + minutesPolet;

    if (sumMinutes > 59) {
      sumHours += 1;
      sumMinutes -= 60;
    }

    if (sumHours > 23) {
      sumHours -= 24;
    }

    if (hours < 10) {
      hours = `0${String(hours)}`;
    }
    if (minutes < 10) {
      minutes = `0${String(minutes)}`;
    }

    if (sumHours < 10) {
      sumHours = `0${String(sumHours)}`;
    }
    if (sumMinutes < 10) {
      sumMinutes = `0${String(sumMinutes)}`;
    }
    return `${hours}:${minutes} - ${sumHours}:${sumMinutes}`;
  };
  return <div className={classes.text_two}>{times()}</div>;
}
