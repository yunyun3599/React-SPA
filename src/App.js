import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Info from './Info';
import Main from './Main';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Main} exact={true}/>
        <Route path={["/info", "/about"]} component={Info}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route render={({location}) => (
          <div>
            <h2>존재하지 않는 페이지입니다. </h2>
            <p>{location.pathname} is not valid</p>
          </div>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
