import { useContext, useState } from "react";
import { ClickerContext } from "@context/context";
import EducationCard from "../EducationCard/EducationCard";
import { setLocalStorage } from "@utils/storage.js";
import Tooltip from "@components/UI/Tooltip/Tooltip";

export default function ShopEducation() {
  const { gameState, updateGameState } = useContext(ClickerContext);
  const productsEducation = [...gameState.productsEducation];

  const [isHovered, setIsHovered] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleBuyEducation = (item) => {
    if (item.price > gameState.exp) return;

    updateGameState((prev) => {
      const updatedProducts = prev.productsEducation.map((prod) =>
        prod.id === item.id
          ? {
              ...prod,
              price: Math.floor(prod.price * 2),
              count: prod.count + 1,
              speedAmount: prod.speedAmount * 2,
            }
          : prod
      );

      const newState = {
        ...prev,
        speed: parseFloat((prev.speed + item.speedAmount).toFixed(1)),
        exp: parseFloat((prev.exp - item.price).toFixed(1)),
        productsEducation: updatedProducts,
      };

      setLocalStorage("progress", newState);

      return newState;
    });
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  console.log("Отрисовал Секцию Education");

  return (
    <section className="shopSection shopEducation">
      <h2>Образование</h2>
      <div className="educationCards">
        {productsEducation.map((item) => {
          return (
            <EducationCard
              onClick={() => handleBuyEducation(item)}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
              onMouseMove={handleMouseMove}
              key={item.id}
              {...item}
            />
          );
        })}

        {isHovered && (
          <Tooltip
            products={productsEducation}
            position={position}
            isHovered={isHovered}
          />
        )}
      </div>
    </section>
  );
}
