import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/Layout";
import { HomePage } from "./routes/homePage/HomePage";
import { ListPage } from "./routes/listPage/ListPage";
import { SinglePage } from "./routes/singlePage/SinglePage";
import { ProfilePage } from "./routes/profilePage/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
