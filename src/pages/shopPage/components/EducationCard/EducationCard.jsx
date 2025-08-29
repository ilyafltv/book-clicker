import { currency } from "@/constants.js";
import classes from "./educationCard.module.scss";

export default function EducationCard({
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...item
}) {
  return (
    <div
      className={classes.educationCard}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div className={classes.educationCardContent}>
        <img
          className={classes.educationCardContentImage}
          src={item.image}
          alt={item.title}
        />
        <div className={classes.educationCardInfo}>
          <h3>{item.title}</h3>
          <span>
            <img src={currency} alt="Опыт" />
            {item.price}
          </span>
        </div>
      </div>

      <span className={classes.educationCardCount}>{item.count}</span>
    </div>
  );
}
