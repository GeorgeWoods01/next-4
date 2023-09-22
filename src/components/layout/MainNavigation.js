import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>hungry<span style={{color: '#2596be'}}>B</span>ook</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All <span style={{color: '#be2596'}}>R</span>ecipes</Link>
          </li>
          <li>
            <Link href='/new-recipe'>Add New <span style={{color: '#be2596'}}>R</span>ecipe</Link>
          </li>
          <li>
            <Link href='/inspiration'>Give Me <span style={{color: '#be2596'}}>I</span>nspiration!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
