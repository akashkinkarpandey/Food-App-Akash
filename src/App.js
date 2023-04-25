import React,{lazy,Suspense,useState} from "react";
// import { createElement } from "react";
import ReactDOM from "react-dom/client";
// import Title from "./components/Title"
//default import
import Header from "./components/Header"
//named import
// import {Title} from "./components/Header"
// import * as Obj from "./components/Header.js"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";
const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart"
const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Namaste React",
    email:"hurrah@gmail.com",
  })
  return (
    <Provider store={store}>
      <Header />
      <UserContext.Provider value={{user:user,setUser:setUser
      }}>
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/about",
          element:(
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
          ),
          children:[
            {
              path:"profile",
              element: <Profile />,
            }
          ]
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/restaurant/:id",
          element:<RestaurantMenu/>
        },
        {
          path : "/instamart",
          element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>
          )
        },
        {
          path :"/cart",
          element: (
            <Cart/>
          )
        }
      ]
    },
  ]
)
if (process.env.NODE_ENV === 'production') {
  React.unstable_enableProfilerTracking();
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


// git remote add origin https://github.com/akashkinkarpandey/Food-App-Akash.git
// git branch -M main
// git push -u origin main