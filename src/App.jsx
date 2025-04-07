import React from "react";
import HomePage from "./HomePage";
import SingleBoardPage from './SingleBoardPage'
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import BoardPage from './BoardPage'
import MainLayout from './Layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>     
      <Route index element={<HomePage/>}></Route>
      <Route path="/boards" element={<BoardPage/>}></Route>
      <Route path='/boards/:boardId' element={<SingleBoardPage/>}></Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />;
};



export default App;
