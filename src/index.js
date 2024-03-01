import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/main-page';
import LocationPage from './pages/location-page';
import PostPage from './pages/post-page';
import LoginPage from './pages/login-page';
import JoinPage from './pages/join-page';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
}from "react-router-dom"
import { SelectedTagListContextProvider } from './context/selected-tag-list-context';
import { UserContextProvider } from './context/user-context';
import BookmarkPage from './pages/bookmark-page';
import UserPage from './pages/user-page';
import SearchPage from './pages/search-page';


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
        path: "/join",
        element: <JoinPage />,
    },
    {
        path: "/post/:postId",
        element: <PostPage />,
    },
    {
        path: "/bookmark",
        element: <BookmarkPage />,
    },
    {
        path: "/user",
        element: <UserPage />,
    },
    {
        path: "/create-post",
        element: <MainPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
], {basename: "/Itinerary-board"});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <SelectedTagListContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </SelectedTagListContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
