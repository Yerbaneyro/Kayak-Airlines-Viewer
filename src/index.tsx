import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalCss from "./global.css";

ReactDOM.render(
    <React.StrictMode>
        <GlobalCss />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
