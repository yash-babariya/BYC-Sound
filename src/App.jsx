import React, { Suspense } from 'react';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import Loader from './common/loader';

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
