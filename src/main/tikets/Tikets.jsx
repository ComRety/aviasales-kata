import { useSelector } from 'react-redux';
import { Alert, Space } from 'antd';

import Tiket from './tiket/Tiket';
import AllTikets from './allTikets/AllTikets';
import classes from './tikets.module.scss';

export default function Tickets() {
  const tickets = useSelector((state) => state.tickets.tikets);
  const count = useSelector((state) => state.category.count);
  const { oneS1, twoS2, threeS3, dontS0, all } = useSelector((state) => state.transfer);
  const sort = useSelector((state) => state.category.value);
  const trip = [];

  const transfer = () => {
    const obj = { oneS1, twoS2, threeS3, dontS0 };
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if (obj[key]) {
        const spl = key.split('S');
        trip.push(Number(spl[1]));
      }
    });
    const array = tickets.filter((item) => {
      let i = false;
      if (all) {
        i = true;
        return i;
      }
      if (trip.length > 0) {
        const oneFly = item.segments[0].stops.length;
        const twoFly = item.segments[1].stops.length;
        if (trip.includes(oneFly) && trip.includes(twoFly)) {
          i = true;
          return i;
        }
      }
      return i;
    });
    if (sort) {
      array.sort((a, b) => a.price - b.price);
    } else if (!sort) {
      array.sort((a, b) => {
        const oneNum = a.segments[0].duration + a.segments[1].duration;
        const twoNum = b.segments[0].duration + b.segments[1].duration;
        return oneNum - twoNum;
      });
    }
    return array;
  };
  const removeArray = transfer().slice(0, count * 5);

  if (trip.length === 0) {
    return (
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" className={classes.info} type="info" />
      </Space>
    );
  }

  return (
    <div className={classes.tikets}>
      {removeArray.map((item, id) => {
        const key = id * count;
        return <Tiket item={item} key={key} />;
      })}
      <AllTikets />
    </div>
  );
}
