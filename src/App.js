
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Component/Route';
import './App.css';

function App() {
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
