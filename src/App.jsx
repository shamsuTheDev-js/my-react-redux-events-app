import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useState } from "react";
import Root from "./Components/Root";
import "./App.css";
import ErrorPage from "./Components/pages/ErrorPage";
import EventsPage from "./Components/pages/EventsPage";
import Home from "./Components/pages/Home";
import UpcomingEvents from "./Components/UpcomingEvents";
import EventDefaultPage from "./Components/pages/EventDefaultPage";
import AddEventPage from "./Components/pages/AddEventPage";
import EditEventPage from "./Components/pages/EditEventPage";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventDefaultPage />,
          children: [
            { path: "", element: <EventsPage /> },
            { path: "editEvent", element: <EditEventPage /> },
            { path: "addEvent", element: <AddEventPage /> },
            { path: "upcomingEvents", element: <UpcomingEvents /> },
          ],
        },
        { path: "upcomingEvents", element: <UpcomingEvents /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
