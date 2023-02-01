import './App.scss';
import React, { Suspense } from "react";
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import {Provider} from 'react-redux'
import store from "./store.js";
import LoadingBox from './Components/LoadingBox/LoadingBox';

function App() {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback={<LoadingBox />}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            </Routes>
          </Router>
        </Suspense>
      </React.StrictMode>
      </Provider>
  );
}

export default App;
