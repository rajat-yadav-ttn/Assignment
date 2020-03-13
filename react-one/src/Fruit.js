import React from "react";
import './App.css';


const Fruit =(props)=>{
    return (
        <div className="fruitList">
            {
                props.items.map((item,index)=>{
                return(
                <div key={index} className="fruitListItem">
                {
                    props.editMode===1?
                    <input value={item.name} onChange={(e)=> props.update(item.name, item.key)}/>:
                    <span className="name">{item.name.split('-')[0]}</span>
                }
                    <span className="qty">{item.name.split('-')[1]}</span>
                    <button className='delBtn' onClick={()=>props.deleteHandler(item.key)}>Delete</button>
                    <button className='editBtn' onClick={()=>props.editHandler(item.key)}>Edit</button>
                </div>
                )
             })
            }
        </div>
    );
}

export default Fruit;