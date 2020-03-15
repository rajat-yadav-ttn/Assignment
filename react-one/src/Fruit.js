import React from "react";
import './App.css';


const Fruit =(props)=>{
    const items=props.item;
    
    return (
        <div className="fruitList">
            {
                props.items.map((item,index)=>{
                return(
                <div key={index} className="fruitListItem">
                    
                    <input 
                        type='text'
                        className="name"
                        value={item.name.split('-')[0]}
                        onChange={(event) => {
                            props.update(`${event.target.value}-${item.name.split('-')[1]}`, item.key);
                          }}
                    />

                    <input 
                        type='text'
                        className="name"
                        value={item.name.split('-')[1]}
                        onChange={(event) => {
                            props.update(`${item.name.split('-')[0]}-${event.target.value}`, item.key);
                          }}
                    />
     
                    {/* <span className="qty">{item.name.split('-')[1]}</span> */}
                    <button className='delBtn' onClick={()=>props.deleteHandler(item.key)}>Delete</button>
                </div>
                )
             })
            }
        </div>
    );
}

export default Fruit;