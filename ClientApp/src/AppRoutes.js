import { Counter } from "./components/Counter.tsx";
import { FetchData } from "./components/FetchData.tsx";
import { Home } from "./components/Home.tsx";
import {Philippines} from "./components/Philippines.tsx";
import {Sydney} from "./components/Sydney.tsx";
import {About} from "./components/About.tsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path:'/sydney',
    element: <Sydney />
  },
  {
    path: '/philippines',
    element: <Philippines />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;
