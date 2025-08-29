import { useContext } from "react";
import { ClickerContext } from "@context/context";
import { currency } from "@/constants.js";
import classes from "./statsShop.module.scss";

export default function StatsShop() {
  const { gameState } = useContext(ClickerContext);

  return (
    <h2 className={classes.shopStat}>
      <img src={currency} /> {gameState.exp}
    </h2>
  );
}
