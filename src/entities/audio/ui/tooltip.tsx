import { ActionSheet, ActionSheetItem } from "@vkontakte/vkui";
import { Download, Heart, Share2, Trash } from "lucide-react";
import verticalDots from "@/assets/vertical-dots.svg";
import { useRef, useState } from "react";

type TooltipProps = {
  isDownloaded: boolean;
  isFavorite: boolean;
  onDownload: () => void;
  onFavorite: () => void;
  onRemoveFromFavorite: () => void;
  onRemoveFromDownloaded: () => void;
};

export function AudioTooltip(props: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  return (
    <>
      <img ref={ref} src={verticalDots} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ActionSheet toggleRef={ref} onClose={() => setIsOpen(false)}>
          <FavoriteItem {...props} />
          <DownloadItem {...props} />
          <ActionSheetItem before={<Share2 />}>Поделиться</ActionSheetItem>
        </ActionSheet>
      )}
    </>
  );
}

function FavoriteItem({
  isFavorite,
  onFavorite,
  onRemoveFromFavorite,
}: TooltipProps) {
  return (
    <ActionSheetItem
      before={<Heart fill={isFavorite ? "#2688EB" : "#ffffff"} />}
      onClick={isFavorite ? onRemoveFromFavorite : onFavorite}
    >
      Нравится
    </ActionSheetItem>
  );
}
function DownloadItem({
  isDownloaded,
  onDownload,
  onRemoveFromDownloaded,
}: TooltipProps) {
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
}
