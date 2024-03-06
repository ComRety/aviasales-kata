import Price from './price/Price';
import Company from './company/Company';
import Time from './time/Time';
import Information from './information/Information';
import classes from './tiket.module.scss';
import TimePolet from './time/TimePolet';
import TransText from './trans/TransText';
import TransList from './trans/TransList';

export default function Tiket({ item }) {
  return (
    <article className={classes.tiket}>
      <div className={classes.ones}>
        <Price price={item.price} />
        <Company carrier={item.carrier} />
      </div>
      <div className={classes.twise}>
        <div className={classes.one}>
          <Information one={`${item.segments[0].origin}-${item.segments[0].destination}`} />
          <Time time={item.segments[0].date} polet={item.segments[0].duration} />
        </div>
        <div className={classes.two}>
          <Information one="В ПУТИ" />
          <TimePolet polet={item.segments[0].duration} />
        </div>
        <div className={classes.three}>
          <TransText text={item.segments[0].stops.length} />
          <TransList array={item.segments[0].stops} />
        </div>
        <div className={classes.four}>
          <Information one={`${item.segments[1].origin}-${item.segments[1].destination}`} />
          <Time time={item.segments[1].date} polet={item.segments[1].duration} />
        </div>
        <div className={classes.five}>
          <Information one="В ПУТИ" />
          <TimePolet polet={item.segments[1].duration} />
        </div>
        <div className={classes.six}>
          <TransText text={item.segments[1].stops.length} />
          <TransList array={item.segments[1].stops} />
        </div>
      </div>
    </article>
  );
}
