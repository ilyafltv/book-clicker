import classes from "./tooltip.module.scss";
import { currency } from "@/constants.js";

export default function Tooltip({ items, position, isHovered, type }) {
  const item = items.find((item) => item.id === isHovered);

  if (!item) return null;

  const renderContent = () => {
    switch (type) {
      case "education":
        return (
          <>
            <span className={classes.tooltipValue}>
              +{item.speedAmount} в секунду
            </span>
            <span className={classes.tooltipPrice}>
              {item.price}
              <img
                className={classes.tooltipCurrency}
                src={currency}
                alt="Валюта"
              />
            </span>
          </>
        );

      case "improvement":
        return (
          <>
            {/* Множитель клика */}
            <span className={classes.tooltipValue}>
              Клик x{2 ** Number(item.id)}
            </span>

            {/* Цена */}
            <span className={classes.tooltipPrice}>
              {item.price}
              <img
                className={classes.tooltipCurrency}
                src={currency}
                alt="Валюта"
              />
            </span>
          </>
        );

      case "achievement_default":
      case "achievement_epic":
        return (
          <span className={classes.tooltipStatus}>
            {item.isDone ? "Получено" : "Не получено"}
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={classes.tooltip}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <h4>{item.title}</h4>
      <p className={classes.tooltipDescription}>{item.description}</p>
      {renderContent()}
    </div>
  );
}
