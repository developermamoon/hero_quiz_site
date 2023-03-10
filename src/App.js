import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quizes from './components/Questions/Questions';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      { path: '/', element: <Home></Home>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
      { path: '/home', element: <Home></Home>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
      { path: '/topics', element: <Topics></Topics>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz') },
      { path: '/statistics', element: <Statistics></Statistics>, loader: () => fetch('https://openapi.programming-hero.com/api/quiz')},
      {path: '/blog', element: <Blog></Blog>},
      { path: '/topics/:id', element: <Questions> </Questions>, loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
    ]},
    {path: '*', element: <Error></Error>}
  ])
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
