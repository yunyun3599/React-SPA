import React from 'react';

const data = {
    sunsin:{
        name:'이순신',
        description:'장군, 500원'
    },
    eehwang:{
        name:'이황',
        description:'학자, 1000원'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return(
            <div>
                존재하지 않는 인물입니다.
            </div>
        );
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;