import { Cell } from "@vkontakte/vkui";
import { Audio } from "../model/audio";

type Props = {
  audio: Audio;
};
export function AudioCell({ audio }: Props) {
  return (
    <Cell
      className="w-[360px] p-2 flex flex-row"
      before={<img src={audio.iconHref} className="size-[40px] rounded" />}
    >
      <div className="flex flex-col space-y-1">
        <h6 className="text-primary">{audio.name}</h6>
        <p className="text-secondary text-[13px]">{audio.author}</p>
      </div>
    </Cell>
  );
}
