import React from 'react';
import qs from 'qs';

const Info = ({location}) => {
    const query = qs.parse(location.search,{
        ignoreQueryPrefix: true     //문자열 맨 앞의 ? 생략
    });
    const showDetail = query.detail ==='true';
    return (
        <div>
            <h1>웹페이지 정보</h1>
            <p>리액트 라우터를 이용해보도록 합시다.</p>
            {showDetail && <p>세부 내용입니다.</p>}
        </div>
    )
}

export default Info;