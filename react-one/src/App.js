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

 

  // update=(item,key)=>{
  //   console.log(item);
  //   const fruits=this.state.fruits;
  //   fruits.map(i=>{
  //     if(i.key===key){
  //       console.log(i.key+ " " +key)
  //       i.name=name;
  //     }
  //   })
  //   this.setState({
  //     fruits:fruits,
  //   })
  // }

  update=(name,key)=>{
    const fruits = this.state.fruits;
    fruits.map(item=>{      
      if(item.key===key){
        
        item.name= name;
      }
    })
    this.setState({
      fruits:fruits,
    })    
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
               deleteHandler={this.deleteHandler} 
               update={this.update}
                />
        </div>
      </div>
    );
  }
}

