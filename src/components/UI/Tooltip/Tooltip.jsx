import classes from "./tooltip.module.scss";
import { currency } from "@/constants.js";

export default function Tooltip({ products, position, isHovered }) {
  return (
    <div
      className={classes.tooltip}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {(() => {
        const item = products.find((item) => item.id === isHovered);
        return item ? (
          <>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {item.amountSpeed && (
              <span className={classes.tooltipPrice}>{item.amountSpeed}</span>
            )}

            {item.price && (
              <>
                {item.speedAmount ? (
                  <span className={classes.tooltipValue}>
                    +{item.speedAmount} в секунду
                  </span>
                ) : (
                  <span className={classes.tooltipValue}>
                    Клик x{2 ** Number(item.id)}
                  </span>
                )}

                <span className={classes.tooltipPrice}>
                  {item.price}
                  <img
                    className={classes.tooltipCurrency}
                    src={currency}
                    alt="Валюта"
                  />
                </span>
              </>
            )}
          </>
        ) : null;
      })()}
    </div>
  );
}
