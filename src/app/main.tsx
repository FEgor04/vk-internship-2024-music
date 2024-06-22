import React from "react";
import ReactDOM from "react-dom/client";
import { AdaptivityProvider, ConfigProvider, AppRoot, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./main.css";
import { AudioCell } from "../entities/audio/ui/cell";
import icon from "../assets/vk-track.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Panel>
            <AudioCell
              audio={{
                author: "Исполнитель",
                name: "Трек",
                iconHref: icon,
                isPlaying: false,
                lengthSeconds: 123,
              }}
            />
          </Panel>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
