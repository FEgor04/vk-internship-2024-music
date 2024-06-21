import React from "react";
import ReactDOM from "react-dom/client";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot></AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
