import { useState } from "react";

const UseStateImmutableObject = () => {
    let [myObj,setMyObj] = useState({
        key1 : "value1",
        key2 : "value2",
        key3 : "value3"
    })
    let {key1,key2,key3} = myObj
    const objValueChange = () =>{
        setMyObj(
            prevObj =>({
                ...prevObj,
                key1 : "new value key1",
                key2 : "new value key2",
            })
        )
    }
    return (
        <div>
            <h1>{key1}</h1>
            <h1>{key2}</h1>
            <h1>{key3}</h1>
            <button onClick={objValueChange} >changevalue</button>
        </div>
    );
};

export default UseStateImmutableObject;
