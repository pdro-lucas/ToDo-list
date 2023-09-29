import styles from './Header.module.css';

import Logo from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="to.do" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
