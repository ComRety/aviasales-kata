import Transfers from './transfers/Transfers';
import Options from './options/Options';
import Tickets from './tikets/Tikets';
import classes from './main.module.scss';

export default function Main() {
  return (
    <main className={classes.main}>
      <Transfers />
      <div className={classes.tiket_block}>
        <Options />
        <Tickets />
      </div>
    </main>
  );
}
