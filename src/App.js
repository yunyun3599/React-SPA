import React from 'react';
import {Route, Link} from 'react-router-dom';
import Info from './Info';
import Main from './Main';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인페이지</Link>
        </li>
        <li>
          <Link to="/info">정보</Link>
        </li>
        <li>
          <Link to="/profile/sunsin">이순신 프로필</Link>
        </li>
        <li>
          <Link to="/profile/eehwang">이황 프로필</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Main} exact={true}/>
      <Route path={["/info", "/about"]} component={Info}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;
