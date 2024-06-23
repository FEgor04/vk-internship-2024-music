import { observer } from "mobx-react";
import { audioStore } from "../model/store";
import { AudioCell } from "./cell";

export const AudioList = observer(() => {
  const audios = audioStore.audios;
  return (
    <>
      {audios.map((audio) => (
        <AudioCell key={audio.id} audio={audio} />
      ))}
    </>
  );
});
