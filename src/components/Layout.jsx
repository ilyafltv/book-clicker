import { Outlet } from "react-router-dom";
import HeaderNavbar from "@components/UI/HeaderNavbar/HeaderNavbar";
import { useState, useMemo, useEffect, useRef } from "react";
import { ClickerContext } from "@context/context";
import { loadInitialProgress } from "@/constants.js";
import { getLocalStorage, setLocalStorage } from "@utils/storage.js";
import musicFile from "@music/Mozart.mp3";

export default function Layout() {
  const [gameState, setGameState] = useState(() => {
    const storedData = getLocalStorage("progress", null);
    return storedData ? storedData : loadInitialProgress();
  });

  const audioRef = useRef(null);

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Эффект для управления музыкой
  useEffect(() => {
    if (!isPlayingMusic && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  useEffect(() => {
    const intervalSpeed = setInterval(() => {
      const storageData = getLocalStorage("progress", null);

      if (!storageData) {
        setGameState(loadInitialProgress());
        clearInterval(intervalSpeed);
        return;
      }

      if (gameState.speed !== 0) {
        setGameState((prev) => {
          const newValue = (
            (Number(prev.exp) || 0) + (Number(prev.speed) || 0)
          ).toFixed(1);

          const parsedProgress = getLocalStorage("progress", {
            exp: 0,
            speed: 0,
          });

          setLocalStorage("progress", {
            ...parsedProgress,
            exp: newValue,
          });

          return { ...prev, exp: parseFloat(newValue) };
        });
      }
    }, 1000);

    return () => clearInterval(intervalSpeed);
  }, [gameState.speed, gameState.exp]);

  const updateGameState = (updates) => {
    setGameState((prev) => {
      const resolvedUpdates =
        typeof updates === "function" ? updates(prev) : updates;

      return { ...prev, ...resolvedUpdates };
    });
  };

  // Сброс прогресса
  const resetAllProgress = () => {
    const initialProgress = loadInitialProgress();
    setGameState(initialProgress);
    setLocalStorage("progress", initialProgress);

    setIsPlayingMusic(false);

    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const contextValue = useMemo(
    () => ({
      gameState,
      updateGameState,
      audioRef,
      isPlayingMusic,
      setIsPlayingMusic,
      resetAllProgress,
    }),
    [gameState, isPlayingMusic]
  );

  return (
    <ClickerContext.Provider value={contextValue}>
      <HeaderNavbar />
      <main>
        <Outlet />
        <audio ref={audioRef} src={musicFile} preload="auto" loop />
      </main>
    </ClickerContext.Provider>
  );
}
