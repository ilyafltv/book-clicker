import classes from "./statsLibrary.module.scss";
import { currency } from "@/constants.js";

export default function StatsLibrary({ exp, speed }) {
  return (
    <div className={classes.libraryStats}>
      <h2 className={classes.libraryStat}>
        <img src={currency} /> Опыт: {exp}
      </h2>
      <h2 className={classes.libraryStat}>Скорость: {speed} с.</h2>
    </div>
  );
}
