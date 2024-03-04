import classes from '../information/information.module.scss';

export default function TimePolet({ polet }) {
  const time = () => {
    let hours = Math.floor(polet / 60);
    let minutes = polet % 60;
    if (hours < 10) {
      hours = `0${String(hours)}`;
    }
    if (minutes < 10) {
      minutes = `0${String(minutes)}`;
    }
    return `${hours}ч ${minutes}м`;
  };

  return <div className={classes.text_two}>{time()}</div>;
}
