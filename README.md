# Тестовое задание на стажировку ВКонтакте

## Задание

Необходимо реализовать виджет для воспроизведения аудиозаписи по макету.

Макет в Figma: https://www.figma.com/design/9d3ErSuSrLY1qCuSRPk80C/AudioCell?m=dev&node-id=0-1&t=iqVcRzScrwfGr94t-1

В качестве аудиозаписи можно использовать любую аудиозапись (как загруженную в репозиторий, так и из внешнего ресурса, на ваш выбор).

### Условия

- Минимальные версии браузеров https://caniuse.com/es6-module
- Использовать React и mobx
- Использовать VK UI (можно найти тут https://vkcom.github.io/VKUI/)

### Критерии оценки
- Результат должен быть рабочим (аудиозапись воспроизводится, ставится на паузу, UI реагирует на изменение состояния)
- Pixel Perfect
- Чистота кода

### Рекомендации:
- Можно использовать готовые шаблоны приложений
- Можно использовать библиотеки из npm
- Стоит уделить внимание принципам проектирования: KISS, SOLID и др.

В качестве результата необходимо предоставить репозиторий с исходным на GitHub и ссылку на тестовый стенд, для которого можно использовать https://pages.github.com/.

## Стэк

- React, TypeScript, mobx
- TailwindCSS, VK UI
- Vite, eslint, prettier

## Ссылка

https://vk-internship-2024-music.vercel.app/

## Запуск

```
pnpm install
pnpm run build
pnpm run preview
```
