import CardIcon from "@components/UI/CardIcon/CardIcon.jsx";
import itemUnknown from "@images/icons/item-unknown.svg";
import { useContext } from "react";
import { ClickerContext } from "@context/context.js";

export default function AchievementsPage() {
  const { gameState } = useContext(ClickerContext);

  return (
    <div className="page pageAchievements">
      <div className="container-content">
        <h1>Достижения</h1>

        <h2 className="title-block title-block--white">Основные</h2>
        <p className="subtitle-block subtitle-block--white">
          Достигнуто достижений:
        </p>
        <div className="AchievementsList">
          {gameState.achievementsDefault.map((item) => {
            return (
              <CardIcon
                className="сardIconAchieveDefault"
                key={item.id}
                {...item}
              />
            );
          })}
        </div>

        <h2 className="title-block title-block--white">Особые</h2>
        <p className="subtitle-block subtitle-block--white">
          Достигнуто достижений:
        </p>
        <div className="AchievementsList AchievementsEpicList">
          <CardIcon className="сardIconAchieveEpic" image={itemUnknown} />
          <CardIcon className="сardIconAchieveEpic" image={itemUnknown} />
          <CardIcon className="сardIconAchieveEpic" image={itemUnknown} />
        </div>
      </div>
    </div>
  );
}
