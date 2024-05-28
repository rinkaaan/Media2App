import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import MainLayout from "./routes/MainLayout"
import MainLayoutError from "./routes/MainLayoutError"
import "@cloudscape-design/global-styles/index.css"
import "./app.css"
import { Fragment } from "react"

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <MainLayoutError />,
    // loader: async () => {
    //   OpenAPI.BASE = import.meta.env.VITE_API_URL
    //   return null
    // },
    children: [
      {
        path: "/login",
        children: [
          {
            path: "",
            lazy: () => import("./routes/login/LoginRoute.tsx"),
          },
        ],
      },
      {
        path: "/",
        Component: () => <Navigate to="/login" />,
      },
      {
        path: "*",
        Component: () => <Navigate to="/login" />,
      },
    ],
  },
])

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}
