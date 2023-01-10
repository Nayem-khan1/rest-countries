
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import { router } from './routes/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
