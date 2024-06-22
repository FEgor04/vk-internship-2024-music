import { makeAutoObservable } from "mobx";
import { Audio } from "./audio";
import defaultIcon from "@/assets/vk-track.png";

class AudioStore {
  favorites: Array<number>;
  downloaded: Array<number>;
  audios: Array<Audio>;
  playingAudioId: number | undefined;

  constructor() {
    makeAutoObservable(this);
    this.favorites = [];
    this.downloaded = [];
    this.playingAudioId = undefined;
    this.audios = [
      {
        id: 1,
        name: "Трек",
        author: "Исполнитель",
        iconHref: defaultIcon,
        lengthSeconds: 123,
      },
    ];
  }

  addToFavorites(id: number) {
    this.favorites.push(id);
  }

  removeFromFavorites(id: number) {
    this.favorites = this.favorites.filter((item) => item !== id);
  }

  addToDownloaded(id: number) {
    this.downloaded.push(id);
  }

  removeFromDownloaded(id: number) {
    this.downloaded = this.downloaded.filter((item) => item !== id);
  }
}

export const audioStore = new AudioStore();
