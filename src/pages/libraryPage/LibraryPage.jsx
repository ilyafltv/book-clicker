import { useContext, useCallback } from "react";
import ButtonBook from "./components/ButtonBook/ButtonBook";
import StatsLibrary from "./components/StatsLibrary/StatsLibrary";
import "@pages/libraryPage/libraryPage.scss";
import { ClickerContext } from "@context/context";
import { setLocalStorage } from "@utils/storage.js";

export default function LibraryPage() {
  const { gameState, updateGameState } = useContext(ClickerContext);

  const handleBookClick = useCallback(() => {
    updateGameState((prev) => {
      const newValue = Number(prev.exp || 0) + Number(prev.clickPower || 1);

      setLocalStorage("progress", {
        ...prev,
        exp: newValue,
      });

      return { exp: newValue };
    });
  }, [updateGameState]);

  return (
    <div className="page pageLibrary">
      <div className="container-content">
        <h1>Библиотека</h1>
        <StatsLibrary exp={gameState.exp} speed={gameState.speed} />
        <ButtonBook onClick={handleBookClick} />
      </div>
    </div>
  );
}
