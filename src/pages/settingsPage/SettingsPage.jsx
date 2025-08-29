import { useContext } from "react";
import { ClickerContext } from "@context/context";
import Button from "../../components/UI/Button/Button";

export default function SettingsPage() {
  const { audioRef, isPlayingMusic, setIsPlayingMusic, resetAllProgress } =
    useContext(ClickerContext);

  // Переключение музыки
  const toggleMusic = () => {
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
      setIsPlayingMusic(true);
    }
  };

  const deleteProgress = () => {
    resetAllProgress();
    window.alert("Данные сессии очищены!");
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

          <Button
            className="btnLink"
            onClick={() => {
              window.open("https://github.com/ilyafltv", "_blank");
            }}
          >
            Перейти к авторам
          </Button>
        </div>
      </div>
    </div>
  );
}
