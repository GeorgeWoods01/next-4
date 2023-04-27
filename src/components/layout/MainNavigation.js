import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>hungry<span style={{color: '#2596be'}}>B</span>ook</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Recipes</Link>
          </li>
          <li>
            <Link href='/new-recipe'>Add New Recipe</Link>
          </li>
          <li>
            <Link href='/inspiration'>Give Me Inspiration!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
