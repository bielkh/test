import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./routes/Home";
import Pink from "./routes/pink";
import Rose from "./routes/rose";
import Menu from "./routes/menu";
import NewPost from "./routes/NewPost";
import Login from "./routes/login";
import Criar from './routes/criarPost';
import Cakes from './routes/pokebolo';
import Editar from './routes/edit';

import "./index.css";
import SobreNos from './components/SobreNos';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/quemsomos",
        element: <SobreNos />,
      },
      {
        path: "/pink",
        element: <Pink />,
      },
      {
        path: "/rose",
        element: <Rose />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/criar",
        element: <Criar />
      },
      {
        path: "/pokebolos",
        element: <Cakes />
      },
      {
        path: "/edit/:id",
        element: <Editar />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
