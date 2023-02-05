import './App.scss';
import Home from './Components/Home';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/Registration';
import { LoginedIn, RequireAuth } from "./utils";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";

import initialState from "./Reducer/AdminDashboard/initialState";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";






const composeEnhancers = composeWithDevTools({});
// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, promise)));
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, promise, logger))
);

function App() {
  return (
      // <Router>
      //   <Routes>
      //   <Route path="/" element={ <LoginedIn>
      //           <Login />
      //         </LoginedIn>} />
      //   <Route path="Registration" element={<Registration />} />
      //     <Route exact path="Home" element={<RequireAuth><Home /></RequireAuth>}>
      //       {/* <Route index path="Home" element={<Home />} /> */}
      //     </Route>
      //   </Routes>
      // </Router>




      <Provider store={store}>
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              <LoginedIn>
                <Login />
              </LoginedIn>
            }
          />
          
         
          
          

          <Route
            exact
            path="Home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          >
            
          </Route>

         

         
        </Routes>
      </Router>
    </Provider>













  );
}

export default App;
