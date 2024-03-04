import classes from '../information/information.module.scss';

export default function TransText({ text }) {
  let name = '';
  const count = () => {
    if (text === 1) {
      name = 'ПЕРЕСАДКА';
    }
    if (text > 1 && text < 5) {
      name = 'ПЕРЕСАДКИ';
    }
    if (text === 0) {
      name = 'ПЕРЕСАДОК';
    }
    return `${text} ${name}`;
  };

  return <div className={classes.text_one}>{count()}</div>;
}
