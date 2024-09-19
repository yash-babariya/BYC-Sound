import React from 'react';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'react-hot-toast';
import { LanguageProvider } from './utils/LanguageContext';


function App() {
  return (
    <div>
      <LanguageProvider>
        <Toaster />
        <RouterProvider router={router} />
      </LanguageProvider>
    </div>
  )
}

export default App
