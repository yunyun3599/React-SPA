import React, {useEffect} from 'react';

const HistorySample = ({history}) => {
    const handleGoBack = () => {
        history.goBack();
    };
    const handleGoHome = () => {
        history.push('/');
    };
    useEffect(() => {
        const unblock = history.block('나가시겠습니까?');
        return() => {
            if(unblock){
                unblock();
            }
        }
    },[]);
    return(
        <div>
            <button onClick = {handleGoBack}>뒤로</button>
            <button onClick = {handleGoHome}>홈으로</button>
        </div>
    )
}

export default HistorySample;