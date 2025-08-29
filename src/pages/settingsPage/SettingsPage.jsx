import { useContext } from "react";
import { ClickerContext } from "@context/context";
import { setLocalStorage } from "@utils/storage.js";
import Button from "../../components/UI/Button/Button";
import { loadInitialProgress } from "../../constants";

export default function SettingsPage() {
  const { audioRef, isPlayingMusic, setIsPlayingMusic, setGameState } =
    useContext(ClickerContext);

  const toggleMusic = () => {
    if (isPlayingMusic) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    }
    setIsPlayingMusic(!isPlayingMusic);
    setLocalStorage("isPlayingMusic", !isPlayingMusic);
  };

  const deleteProgress = () => {
    localStorage.clear();
    setGameState(() => loadInitialProgress());
    alert("Данные сессии очищены!");
  };

  return (
    <div className="page pageSettings">
      <div className="container-content">
        <h1>Настройки</h1>
        <div className="settingsContent">
          <Button onClick={toggleMusic}>
            {isPlayingMusic ? "Выключить музыку" : "Включить музыку"}
          </Button>

          <Button className="btnDelete" onClick={deleteProgress}>
            Удалить прогресс
          </Button>
          <a className="btnLink" href="https://github.com/ilyafltv">
            Перейти к авторам
          </a>
        </div>
      </div>
    </div>
  );
}
