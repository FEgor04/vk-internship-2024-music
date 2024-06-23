import { makeAutoObservable } from "mobx";
import { Audio } from "./audio";
import defaultIcon from "@/assets/vk-track.png";
import pirat from "@/assets/pirat.mp3";

class AudioStore {
  favorites: Array<number>;
  downloaded: Array<number>;
  audios: Array<Audio>;
  selectedAudio:
    | {
        id: number;
        isPlaying: boolean;
        curentTime: number;
      }
    | undefined;

  constructor() {
    makeAutoObservable(this);
    this.favorites = [];
    this.downloaded = [];
    this.selectedAudio = undefined;
    this.audios = [
      {
        id: 1,
        name: "Трек",
        author: "Исполнитель",
        iconHref: defaultIcon,
        lengthSeconds: 123,
        href: pirat,
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

  play(id: number) {
    if (this.selectedAudio?.id == id) {
      this.selectedAudio.isPlaying = !this.selectedAudio.isPlaying;
      return;
    }
    this.selectedAudio = {
      id,
      isPlaying: true,
      curentTime: 0,
    };
  }

  pause() {
    if (!this.selectedAudio) return;
    this.selectedAudio.isPlaying = false;
  }
}

export const audioStore = new AudioStore();
