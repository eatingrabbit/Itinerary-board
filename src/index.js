import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/main-page';
import LocationPage from './pages/location-page';
import PostPage from './pages/post-page';
import LoginPage from './pages/login-page';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
}from "react-router-dom"
import { SelectedTagListContextProvider } from './context/selected-tag-list-context';


const router=createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/:locationId",
        element: <LocationPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/post/:postId",
        element: <PostPage />,
    },
], {basename: "/Itinerary-board"});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectedTagListContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </SelectedTagListContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
