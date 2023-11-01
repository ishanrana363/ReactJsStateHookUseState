import {useState} from "react";

const UseStateImmutableObject = () => {
    const [myObj,setMyObj] = useState({
        key1 : "value1",
        key2 : "value2",
        key3 : "value3",
        key4 : "value4"
    })
    const {key1,key2,key3,key4} = myObj;
    const changeObjValue = () =>{
        setMyObj(prevObject=>({
            ...prevObject,
            key1: "new value for key1",
            key2 : "new value for key2",
            key3: "new value for key3"
        }))
    }
    return (
        <div>
            <h1>{key1}</h1>
            <h1>{key2}</h1>
            <h1>{key3}</h1>
            <h1>{key4}</h1>
            <button onClick={changeObjValue} >ChangeValue</button>
        </div>
    );
};

export default UseStateImmutableObject;