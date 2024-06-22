import { Cell } from "@vkontakte/vkui";
import { Audio } from "../model/audio";
import { AudioTooltip } from "./tooltip";

type Props = {
  audio: Audio;
  isDownloaded: boolean;
  isFavorite: boolean;
};

export const AudioCell = ({ audio, ...props }: Props) => {
  return (
    <Cell
      before={<img src={audio.iconHref} className="size-[40px] rounded" />}
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
      <h6 className="w-full text-primary">{audio.name}</h6>
    </Cell>
  );
};
