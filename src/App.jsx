import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//import Grocery from "./components/Grocery";


// // const heading = React.createElement(
// //     "h1",
// //     {id : "heading" },
// //     "Hello from React"
// //     );


// // const parent = React.createElement(
// //     "div",
// //     {id : "parent" },
// //    [
// //     React.createElement("div",{id : "child" },[
// //     React.createElement("h1",{}, "I'm an h1 tag"),
// //     React.createElement("h2",{}, "I'm an h2 tag"), 
// // ] ),
// //     React.createElement("div",{id : "child2" },[
// //     React.createElement("h1",{}, "I'm an h1 tag"),
// //     React.createElement("h2",{}, "I'm an h2 tag"), 
// // ] ),
// // ]);


// // //JSX

 
// // console.log(parent)  //object  
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(parent); //this converts the object to h1 tag and renders on our website



// //3rd class

// const heading = React.createElement("h1",
// {id: "heading"}, 
// "Namaste React"
// );

// const jsxHeading = () => (<h1 className="head">Namaste React using JSX</h1>);

// const Title = ()=> (
//   <h1 className="header" tabIndex="5">Namaste using ReactJSX</h1>
// );

// // React Component
// //   Class
// //   Functional
//  //Component Composition - Passing a react component inside othr is called component composition.
// const HeadingComponent = () => (
// <div>
//   <Title/>
//   <h1 className="heading">Hello</h1>
// </div>);

// // const trailor =(
// //   <div>
// //     <h1>Hello Trailor</h1>
// //     <HeadingComponent/>

// //   </div>
  
// // )


// const styleCard = {
//   backgroundColor : "#f0f0f0"
// }











const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

 const [userName,setUserName] = useState();

 //authentication

 useEffect(()=>{
  const data ={
    name : "Vikram Singh"
  };
  setUserName(data.name);
 },[])
  return (
    <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser : userName}}>
    <div className="app">
     <Header />
     <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
   
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading About...</h1>}><About /></Suspense> 
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> 
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error /> 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


//4th class
