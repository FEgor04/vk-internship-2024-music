import { useEffect, useMemo } from "react";

export function useAudio(
  href: string,
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

  const setNotPlaying = () => setIsPlaying(false);

  useEffect(() => {
    audio.addEventListener("ended", setNotPlaying);
    return () => audio.removeEventListener("ended", setNotPlaying);
  });
}
