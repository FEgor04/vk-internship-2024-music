import { Cell } from "@vkontakte/vkui";
import { Audio } from "../model/audio";
import { AudioTooltip } from "./tooltip";
import audioPlaying from "@/assets/audio-playing.svg";
import { useAudio } from "../../../shared/hooks/use-audio";
import { audioStore } from "../model/store";
import { observer } from "mobx-react";

type Props = {
  audio: Audio;
};

export const AudioCell = observer(({ audio }: Props) => {
  const isPlaying =
    audioStore.selectedAudio?.id == audio.id &&
    audioStore.selectedAudio.isPlaying;
  useAudio(
    audio.href,
    audioStore.selectedAudio?.curentTime ?? 0,
    isPlaying,
    audioStore.pause
  );
  return (
    <Cell
      before={<AudioIcon iconHref={audio.iconHref} isPlaying={isPlaying} />}
      onClick={() => audioStore.play(audio.id)}
      subtitle={audio.author}
      indicator={<AudioLength lengthSeconds={audio.lengthSeconds} />}
      width="100%"
      after={<AudioTooltip id={audio.id} />}
    >
      <h6 className="w-full text-primary">{audio.name}</h6>
    </Cell>
  );
});

function AudioIcon({
  isPlaying,
  iconHref,
}: {
  isPlaying: boolean;
  iconHref: string;
}) {
  if (isPlaying) {
    return (
      <div className="relative rounded overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full rounded bg-black opacity-60" />
        <img src={audioPlaying} className="size-4 inset-3 rounded absolute" />
        <img src={iconHref} className="size-[40px] rounded" />
      </div>
    );
  }
  return <img src={iconHref} className="size-[40px] rounded" />;
}

function AudioLength({ lengthSeconds }: { lengthSeconds: number }) {
  const minutes = Math.floor(lengthSeconds / 60);
  const seconds = lengthSeconds % 60;
  return (
    <span className="mr-2">
      {minutes}:{seconds.toString().padStart(2, "0")}
    </span>
  );
}
