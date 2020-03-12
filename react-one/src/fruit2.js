import React from 'react';

// const ListItem = ({ value, onClick }) => (
//     <li onClick={onClick}>{value}</li>
//   );
  
//   const List = ({ items}) => (
//     <ul>
//       {
//         items.map((item, i) => <ListItem key={i} value={item}/>)
//       }
//     </ul>
//   );


// const FruitItem=(props)=>{
// <li>{props}</li>
// }

// const Fruit =(props)=>{
//     return(
//         <ul>
//             {
//                 props.map((item,i)=><FruitItem key={i} value={item} />)
//             }
//         </ul>
//     )
// }




const Fruit=(props)=>{
    return(
    <div>
        <p>{props.name}</p>
        <p>{props.quant}</p>
        <p>{props.key}</p>
    </div>
    );
}

  export default Fruit;