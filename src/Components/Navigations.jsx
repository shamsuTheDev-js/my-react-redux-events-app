import { NavLink } from "react-router-dom";
import styles from "./Navigations.module.css";

const Navigations = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>My Event App</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="events" end className={styles.active}>
              The Events Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigations;
