import { observer } from "mobx-react";
import { audioStore } from "../model/store";
import { AudioCell } from "./cell";

export const AudioList = observer(() => {
    const audios = audioStore.audios;
    return <>
        {audios.map((audio) => (
            <AudioCell
                audio={audio}
                isDownloaded={audioStore.downloaded.includes(audio.id)}
                isFavorite={audioStore.favorites.includes(audio.id)}
            />
        ))}
    </>
});
