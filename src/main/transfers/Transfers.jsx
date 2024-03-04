import { useSelector } from 'react-redux';

import { dontAll, ones } from '../../store/transferReducer';

import Checkbox from './checkbox/Checkbox';
import classes from './transfers.module.scss';

export default function Transfers() {
  const transfer = useSelector((state) => state.transfer);

  return (
    <ul className={classes.transfers}>
      <h2 className={classes.text}>Количество пересадок</h2>
      <Checkbox id="All" label="Все" checked={transfer.all} fun={dontAll} />
      <Checkbox id="dontS0" label="Без пересадок" checked={transfer.dontS0} fun={ones} />
      <Checkbox id="oneS1" label="1 пересадка" checked={transfer.oneS1} fun={ones} />
      <Checkbox id="twoS2" label="2 пересадки" checked={transfer.twoS2} fun={ones} />
      <Checkbox id="threeS3" label="3 пересадки" checked={transfer.threeS3} fun={ones} />
    </ul>
  );
}
