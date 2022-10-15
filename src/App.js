import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ReactBootstrapRegister from './components/ReactBootstrapRegister';
import Root from './layout/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Login></Login>
      },
      {
        path: "/home",
        element: <Login></Login>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <ReactBootstrapRegister></ReactBootstrapRegister>
      },
    ]
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
