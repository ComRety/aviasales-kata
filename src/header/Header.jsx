import logo from '../images/Logoboing.png';

import classes from './header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt="logoPlane" />
      </div>
    </header>
  );
}
