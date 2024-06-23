import React from "react";
import ReactDOM from "react-dom/client";
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  View,
  Panel,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./main.css";
import { AudioList } from "../entities/audio";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel="audio">
            <Panel id="audio">
              <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-white p-4 w-[360px]">
                  <AudioList />
                </div>
              </div>
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
