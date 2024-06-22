import { Cell } from "@vkontakte/vkui";
import { Audio } from "../model/audio";
import { AudioTooltip } from "./tooltip";
import audioPlaying from "@/assets/audio-playing.svg";

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
      width="100%"
      after={
        <>
          <span className="text-secondary text-[13px] mr-4">
            {audio.lengthSeconds}
          </span>
          <AudioTooltip {...props} />
        </>
      }
    >
      <h6 className="w-full text-primary">
        {audio.name} {isPlaying ? "playing" : "not playng"}
      </h6>
    </Cell>
  );
};

export function AudioIcon({
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
