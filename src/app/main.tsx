import React from "react";
import ReactDOM from "react-dom/client";
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  Group,
  View,
  Panel,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./main.css";
import { AudioCell } from "@/entities/audio";
import icon from "@/assets/vk-track.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel="audio">
            <Panel id="audio">
              <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-white p-4 w-[360px]">
                  <Group>
                    <AudioCell
                      audio={{
                        author: "Исполнитель",
                        name: "Трек",
                        iconHref: icon,
                        isPlaying: false,
                        lengthSeconds: 123,
                      }}
                    />
                  </Group>
                </div>
              </div>
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
