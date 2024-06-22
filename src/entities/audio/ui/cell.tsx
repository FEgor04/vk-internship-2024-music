import { Cell, Popover } from "@vkontakte/vkui";
import { Audio } from "../model/audio";
import verticalDots from "@/assets/vertical-dots.svg";

type Props = {
  audio: Audio;
};
export function AudioCell({ audio }: Props) {
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
          <AudioTooltip audio={audio} />
        </>
      }
    >
      <h6 className="w-full text-primary">{audio.name}</h6>
    </Cell>
  );
}

function AudioTooltip({ audio }: Props) {
  return (
    <Popover trigger="click" role="tooltip">
      <img src={verticalDots} />
    </Popover>
  );
}
