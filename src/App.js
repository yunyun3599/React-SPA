import React from 'react';
import {Route, Link} from 'react-router-dom';
import Info from './Info';
import Main from './Main';

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
      </ul>
      <hr/>
      <Route path="/" component={Main} exact={true}/>
      <Route path ={["/info", "/about"]} component={Info}/>
    </div>
  );
}

export default App;
