import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      { path: '/', element: <Home></Home>},
      { path: '/home', element: <Home></Home>},
      { path: '/topics', element: <Topics></Topics>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
      {path: '/statistics', element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>},
    ]},
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
