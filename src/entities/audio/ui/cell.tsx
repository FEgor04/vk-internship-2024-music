import { Cell } from "@vkontakte/vkui";
import { Audio } from "../model/audio";
import { AudioTooltip } from "./tooltip";
import audioPlaying from "@/assets/audio-playing.svg";
import { formatDuration, intervalToDuration } from "date-fns";

type Props = {
  audio: Audio;
  onPlay: () => void;
  isPlaying: boolean;
} & React.ComponentProps<typeof AudioTooltip>;

export const AudioCell = ({ audio, isPlaying, onPlay, ...props }: Props) => {
  return (
    <Cell
      before={<AudioIcon iconHref={audio.iconHref} isPlaying={isPlaying} />}
      onClick={onPlay}
      subtitle={audio.author}
      indicator={<AudioLength lengthSeconds={audio.lengthSeconds} />}
      width="100%"
      after={<AudioTooltip {...props} />}
    >
      <h6 className="w-full text-primary">{audio.name}</h6>
    </Cell>
  );
};

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
