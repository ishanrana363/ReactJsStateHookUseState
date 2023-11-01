import {useState} from "react";


const UseStateWithImmutableArray = () => {
    const [list,setList] = useState([]);
    const [item,setItem] = useState('')
    const addToList = () =>{
        list.push(item)
        setList([...list]);
    }
    const removeItem = (index) =>{
        list.splice(index,1)
        setList([...list])
    }
    return (
        <div>

            <table>
                <thead>
                {
                    list.length!==0 ? (
                        list.map((element,index)=>{
                            return(
                                <div key={index} >
                                    <tr>
                                        <td>{element}</td>
                                        <td> <button onClick={()=>{removeItem(index)}} >Remove</button> </td>
                                    </tr>
                                </div>
                            )
                        })
                    ) : (
                        <tr></tr>
                    )
                }
                </thead>
            </table>

            <input onChange={(e)=>setItem(e.target.value)} type= "text" />
            <button onClick={addToList} >Add</button>
        </div>
    );
};

export default UseStateWithImmutableArray;