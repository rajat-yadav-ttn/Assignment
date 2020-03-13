import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit'

export default class App extends Component {
    state = {
      fruits:[],
      fruitObj:{
        name:'',
        key:''
      },
      editMode:0,
    }
   


  addFruit=(event)=>{
    event.preventDefault();

    const fruitItem=this.state.fruitObj;
    // console.log(fruitItem);
    
    if(fruitItem.name!==''){
      const fruits=[...this.state.fruits,fruitItem]
      this.setState({fruits:fruits,fruitObj:{name:''}});
      // console.log(fruits);  
    }
  }


  changeHandler=(event)=>{
    this.setState({
      fruitObj:{
        name: event.target.value,
        key: Date.now()
      }
    })
  }
  
  deleteHandler=(key)=>{
    const filteredfruits= this.state.fruits.filter(i =>
      i.key!==key);
    this.setState({
      fruits: filteredfruits
    })

  }

  editHandler=(item,key)=>{
      this.setState({editMode:1})
      // console.log(item);
  }



  render(){
    return (
      <div className="container">
        <div className="wrap">
        <form  onSubmit={this.addFruit}>
          <input type="text" placeholder="Enter Fruits" value={this.state.fruitObj.name} onChange={this.changeHandler}/>
          <button className="addButton" type="submit">Add</button>
        </form>
        <Fruit items={this.state.fruits} 
        editMode={this.state.editMode}
               deleteHandler={this.deleteHandler} 
               editHandler={this.editHandler}
               update={this.update}
                />
        </div>
      </div>
    );
  }
}

