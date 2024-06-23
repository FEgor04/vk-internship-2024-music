import { ActionSheet, ActionSheetItem } from "@vkontakte/vkui";
import { Download, Heart, Share2, Trash } from "lucide-react";
import verticalDots from "@/assets/vertical-dots.svg";
import { useRef, useState } from "react";
import { audioStore } from "../model/store";
import { observer } from "mobx-react";

type TooltipProps = {
  id: number;
};

export function AudioTooltip(props: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  return (
    <>
      <img
        ref={ref}
        src={verticalDots}
        onClick={(e) => {
          setIsOpen(true);
          e.preventDefault();
        }}
      />
      {isOpen && (
        <ActionSheet
          mode="sheet"
          toggleRef={ref}
          onClose={() => setIsOpen(false)}
        >
          <FavoriteItem {...props} />
          <DownloadItem {...props} />
          <ActionSheetItem before={<Share2 />}>Поделиться</ActionSheetItem>
        </ActionSheet>
      )}
    </>
  );
}

function FavoriteItem({ id }: TooltipProps) {
  const isFavorite = audioStore.favorites.includes(id);
  const onRemoveFromFavorite = () => audioStore.removeFromFavorites(id);
  const onFavorite = () => audioStore.addToFavorites(id);
  return (
    <ActionSheetItem
      before={<Heart fill={isFavorite ? "#2688EB" : "#ffffff"} />}
      onClick={isFavorite ? onRemoveFromFavorite : onFavorite}
    >
      Нравится
    </ActionSheetItem>
  );
}
const DownloadItem = observer(({ id }: TooltipProps) => {
  const isDownloaded = audioStore.downloaded.includes(id);
  const onRemoveFromDownloaded = () => audioStore.removeFromDownloaded(id);
  const onDownload = () => audioStore.addToDownloaded(id);
  if (isDownloaded) {
    return (
      <ActionSheetItem onClick={onRemoveFromDownloaded} before={<Trash />}>
        Удалить с устройства
      </ActionSheetItem>
    );
  }
  return (
    <ActionSheetItem onClick={onDownload} before={<Download />}>
      Скачать
    </ActionSheetItem>
  );
});
