import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
    const pageSize =5;
    const apikey = process.env.REACT_APP_NEWS_API;

    const [progress, setProgress] = useState(0);
  
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#fff'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News apikey = {apikey} setProgress = {setProgress} key="general" pageSize={pageSize} country={"us"} category={"general"} />} />
            <Route exact path="/general" element={<News apikey = {apikey} setProgress = {setProgress} key="general" pageSize={pageSize} country={"us"} category={"general"} />} />
            <Route exact path="/entertainment" element={<News apikey = {apikey} setProgress = {setProgress} key="entertainment" pageSize={pageSize} country={"us"} category={"entertainment"} />} />
            <Route exact path="/business" element={<News apikey = {apikey} setProgress = {setProgress} key="business" pageSize={pageSize} country={"us"} category={"business"} />} />
            <Route exact path="/health" element={<News apikey = {apikey} setProgress = {setProgress} key="health" pageSize={pageSize} country={"us"} category={"health"} />} />
            <Route exact path="/science" element={<News apikey = {apikey} setProgress = {setProgress} key="science" pageSize={pageSize} country={"us"} category={"science"} />} />
            <Route exact path="/sports" element={<News apikey = {apikey} setProgress = {setProgress} key="sports" pageSize={pageSize} country={"us"} category={"sports"} />} />
            <Route exact path="/technology" element={<News apikey = {apikey} setProgress = {setProgress} key="technology" pageSize={pageSize} country={"us"} category={"technology"} />} />
          </Routes>
        </Router>
      </>
    )
}

export default App;
