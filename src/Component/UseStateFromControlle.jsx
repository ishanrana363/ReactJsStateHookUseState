// import {useState} from "react";
//
// const UseStateFromControlle = () => {
//     const [formObj,setFromObj] = useState({
//         fName : "",
//         lName : "",
//         city : "",
//         gender : ""
//     })
//     const {fName,lName,city,gender} = formObj;
//     const handleFromInput = (property,value) =>{
//         setFromObj(prevObj=>({
//             ...prevObj,
//             [property] : value
//
//         }))
//     }
//     const formSubmit = (e) =>{
//         e.preventDefault();
//         if (fName==="" || lName===""|| city===""|| city===""){
//             alert("please enter the value")
//         }else {
//             alert(JSON.stringify(formObj))
//         }
//
//     }
//     return (
//         <div>
//             <form action= "" onSubmit={formSubmit} >
//                 <input onChange={(e)=>{handleFromInput("fName",e.target.value)}} value={fName} type= "text" placeholder= "First Name" /> <br/>
//                 <input onChange={(e)=>{handleFromInput("lName",e.target.value)}} value={lName} type= "text" placeholder= "Last Name" /> <br/>
//                 <select onChange={(e)=>{handleFromInput("city",e.target.value)}} value={city} >
//                     <option value= "" >Chose city</option>
//                     <option value= "Dhaka" >Dhaka</option>
//                     <option value= "Rangpur" >Rangpur</option>
//                 </select> <br/>
//                 <input onChange={()=>{handleFromInput("gender","Male")}} checked={gender==="Male"} type= "radio" name= "gender" /> Male
//                 <input onChange={()=>{handleFromInput("gender","Female")}} checked={gender==="Female"} type = "radio" name= "gender" /> Female
//                 <br/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };
//
// export default UseStateFromControlle;


import {useState} from "react";

const UseStateFromControlle = () => {
    const [fromObj,setFromObj] = useState({
        fName : "",
        lName : "",
        city : "",
        gender : ""
    })
    const {fName,lName,city,gender} = fromObj;
    const handleInpurt = (property,value) =>{
        setFromObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        if (fName===""||lName===""||city===""||gender===""){
            alert("Please enter the  value")
        }else {
            alert(JSON.stringify(fromObj))
        }
    }
    return (
        <div>
            <form action= "" onSubmit={formSubmit} >
                <input onChange={(e)=>{
                    handleInpurt("fName",e.target.value)}}
                       type = "text" placeholder= "First Name" value={fName} /> <br/>
                <input onChange={(e)=>{
                    handleInpurt("lName",e.target.value)}}
                       type= "text" placeholder= "Last Name" value={lName} /> <br/>
                <select onChange={(e)=>{handleInpurt("city",e.target.value)}} value={city} >
                    <option value= "" >Chose the city</option>
                    <option value= "Dhaka" >Dhaka</option>
                    <option value= "Dinajpur" >Dinajpur</option>
                    <option value= "Rangpur" >Rangpur</option>
                </select> <br/>
                <input onChange={()=>{
                    handleInpurt("gender","Male")}}
                       checked={gender==="Male"} type= "radio" name= "gender"/> Male
                <input onChange={()=>{
                    handleInpurt("gender","Female")
                }}
                       checked={gender==="Female"} type= "radio" name= "gender" /> Female <br/>
                <button type= "submit" >Submit</button>
            </form>
        </div>
    );
};

export default UseStateFromControlle;