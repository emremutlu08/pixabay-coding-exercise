/* React */
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

/* Styles */
import "./Base.css";
import styles from "./App.module.css";

/* Page Components */
import Main from "./pages/Main/Main";
import ImageDetail from "./pages/ImageDetail/ImageDetail";

/* We use react-router-dom to create pagenation system */

function App() {
  return (
    <div className={styles.App}>
      <Router history={history}>
        <header className={styles.Header}>
          <nav className={styles.Navbar}>
            <Link to={`/`} className={styles.link}>
              Grid Page
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path={`/`} exact component={Main} />
          <Route path={`/:imageid`} exact component={ImageDetail} />
        </Switch>
        <footer className={styles.Footer}>
          <a
            href={`https://tr.linkedin.com/in/emremutlu8`}
            className={styles.link}
            target={`_blank`}
          >
            Emre MUTLU - Grid Project
          </a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
