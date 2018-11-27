import React from 'react';
import DisplayPageContainer from '../container/DisplayPageContainer';
import AddRow from './AddRow';


export const Dashboard=()=>{
    return(<div>
    <div style={{paddingLeft:200,width:900}}>
        <DisplayPageContainer /><br />
    </div>
    <div style={{paddingLeft:570}}>
        <AddRow />
    </div>
    </div>)
}