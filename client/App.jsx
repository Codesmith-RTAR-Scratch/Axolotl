import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PicturePage from './containers/PictureContainer';
import HomePage from './containers/HomeContainer';
// import HistoryPage from './containers/HistoryContainer';
// import AccountPage from './containers/AccountContainer';
import TabBar from './components/TabBar';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/account' Component={AccountPage} /> */}
        {/* <Route path='/history' Component={HistoryPage} /> */}
        <Route path='/receipt' Component={HomePage} />
        <Route path='/' Component={PicturePage} />
      </Routes>
      <TabBar />
    </Router>
  );
};

export default App;