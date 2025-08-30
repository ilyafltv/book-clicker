import CardIcon from "@components/UI/CardIcon/CardIcon.jsx";
import Tooltip from "@components/UI/Tooltip/Tooltip";
import { useState, useContext } from "react";
import { ClickerContext } from "@context/context.js";

export default function AchievementsPage() {
  const { gameState } = useContext(ClickerContext);

  const [hoveredDefault, setHoveredDefault] = useState(null);
  const [hoveredEpic, setHoveredEpic] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

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
                onMouseEnter={() => setHoveredDefault(item.id)}
                onMouseLeave={() => setHoveredDefault(null)}
                onMouseMove={handleMouseMove}
                key={item.id}
                image={item.image} // ← только нужные пропсы
                title={item.title}
              />
            );
          })}

          {hoveredDefault && (
            <Tooltip
              items={gameState.achievementsDefault}
              position={position}
              isHovered={hoveredDefault}
              type="achievement_default"
            />
          )}
        </div>

        <h2 className="title-block title-block--white">Особые</h2>
        <p className="subtitle-block subtitle-block--white">
          Достигнуто достижений:
        </p>
        <div className="AchievementsList AchievementsEpicList">
          {gameState.achievementsEpic?.map((item) => {
            return (
              <CardIcon
                className="сardIconAchieveEpic"
                onMouseEnter={() => setHoveredEpic(item.id)}
                onMouseLeave={() => setHoveredEpic(null)}
                onMouseMove={handleMouseMove}
                key={item.id}
                image={item.image} // ← только нужные пропсы
                title={item.title}
              />
            );
          })}

          {hoveredEpic && (
            <Tooltip
              items={gameState.achievementsEpic}
              position={position}
              isHovered={hoveredEpic}
              type="achievement_epic"
            />
          )}
        </div>
      </div>
    </div>
  );
}
