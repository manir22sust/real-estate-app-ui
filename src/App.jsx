import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/Layout";
import { HomePage } from "./routes/homePage/HomePage";
import { ListPage } from "./routes/listPage/ListPage";
import { SinglePage } from "./routes/singlePage/SinglePage";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
