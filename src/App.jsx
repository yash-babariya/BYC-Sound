import React, { Suspense } from 'react';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
