import React, { Suspense } from 'react';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import DelayedSuspense from './common/loader/DelayedSuspense/DelayedSuspense';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
