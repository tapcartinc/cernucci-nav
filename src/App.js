import { loadWebbridge, WebbridgeProvider } from "@tapcart/webbridge-react";
import "./App.scss";
import "./index.css";
import Menu from "./MenuCernucci";
import { menuContentUK } from "./menuContentCernucciUK";
import { menuContentUSA } from "./menuContentCernucciUS";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/app/dC2ikU9C2O", //CERNUCCI APP UK
    element: <Menu menuContent={menuContentUK} />,
  },
  {
    path: "/app/VAtzjfQTB4", //CERNUCCI APP US
    element: <Menu menuContent={menuContentUSA} />,
  },
  {
    path: "/",
    element: <div>Home</div>,
  },
]);
function App() {
  const webbridgeClient = loadWebbridge({ test: false });

  return (
    <WebbridgeProvider webbridgeClient={webbridgeClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </WebbridgeProvider>
  );
}

export default App;
