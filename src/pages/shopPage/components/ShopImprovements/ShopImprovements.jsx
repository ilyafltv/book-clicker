import { useContext, useState, useCallback, useMemo } from "react";
import { ClickerContext } from "@context/context.js";
import { setLocalStorage } from "@utils/storage.js";
import CardIcon from "@components/UI/CardIcon/CardIcon";
import Tooltip from "@components/UI/Tooltip/Tooltip";

export default function ShopImprovements() {
  const { gameState, updateGameState } = useContext(ClickerContext);

  const [isHovered, setIsHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const availableProducts = useMemo(
    () => gameState.productsImprovements.filter((item) => !item.isBought),
    [gameState.productsImprovements]
  );

  const handleBuyImprovements = useCallback(
    (item) => {
      if (item.isBought || gameState.exp < item.price) return;

      updateGameState((prev) => {
        const updatedProducts = prev.productsImprovements.map((prod) =>
          prod.id === item.id ? { ...prod, isBought: true } : prod
        );

        const newState = {
          ...prev,
          exp: +(prev.exp - item.price).toFixed(1),
          clickPower: prev.clickPower * 2,
          productsImprovements: updatedProducts,
        };

        setLocalStorage("progress", newState);

        return newState;
      });
    },
    [updateGameState]
  ); // Только необходимые зависимости

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  console.log("Отрисовал Секцию Improvements");

  return (
    <section className="shopSection shopImprovements">
      <h2>Улучшения</h2>
      <div className="improvementsCards">
        {availableProducts.length > 0 ? (
          availableProducts
            .filter((item) => !item.isBought)
            .map((item) => (
              <CardIcon
                className="сardIconImprovements"
                onClick={() => handleBuyImprovements(item)}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
                onMouseMove={handleMouseMove}
                key={item.id}
                image={item.image}
              />
            ))
        ) : (
          <h3>Нет доступных улучшений!</h3>
        )}

        {isHovered && (
          <Tooltip
            items={gameState.productsImprovements}
            position={position}
            isHovered={isHovered}
            type="improvement" // ← Просто передаем тип!
          />
        )}
      </div>
    </section>
  );
}
