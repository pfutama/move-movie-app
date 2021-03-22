import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

export const publicRoutes = [
  {
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    component: Detail,
    path: "/detail/:id",
  },
];
