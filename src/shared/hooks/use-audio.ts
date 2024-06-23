import { useEffect, useMemo } from "react";

export function useAudio(
  href: string,
  currentTime: number,
  isPlaying: boolean,
  setIsPlaying: (isPlaying: boolean) => void
) {
  const audio = useMemo(() => new Audio(href), [href]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    audio.currentTime = currentTime;
  }, [currentTime, audio]);

  const setNotPlaying = () => setIsPlaying(false);

  useEffect(() => {
    audio.addEventListener("ended", setNotPlaying);
    return () => audio.removeEventListener("ended", setNotPlaying);
  });
}
