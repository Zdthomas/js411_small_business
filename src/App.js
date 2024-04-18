import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation'
import { Provider } from 'react-redux'
import store from './redux/store'

// import Navigation from "./components/Navigation";
import Router from "./Router";

import "./App.css";

function App() {

  


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider> 
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
