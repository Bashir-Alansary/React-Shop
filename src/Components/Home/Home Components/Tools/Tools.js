import React, { useState } from 'react';
import Tool from './Tool';
import data from "../../../../Data/toolsData";
import "./style.css";

function Tools() {
    const[tools, setTools] = useState(data);
    return (
        <div className='tools'>
            <div className='container'>
                <Tool tools = {tools}/>
            </div>
        </div>
    )
}

export default Tools;