import React from 'react';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
