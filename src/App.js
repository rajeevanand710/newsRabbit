import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar"

const App = () => {

  const[progress, setProgress] = useState(0)



    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={5} categories="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} categories="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} categories="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} categories="general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} categories="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} categories="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} categories="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} categories="technology"/>} />
          </Routes>
        </Router>
      </div>
    )

}

export default App;