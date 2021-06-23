import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return(
        <div>
            <h3>
                인물 목록 :
            </h3>
            <ul>
                <li>
                    <Link to="/profiles/sunsin">이순신 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/eehwang">이황 프로필</Link>
                </li>
            </ul>
            <Route path="/profiles" exact render={() => <div>인물을 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}

export default Profiles