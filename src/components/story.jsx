import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Story() {

    const [item, setItem] = useState(localStorage.getItem("objId") || "");
    const [title, setTitle] = useState(localStorage.getItem("objTitle") || "" );
    const [itemData, setItemData] = useState([]);
    const [childrenComment, setChildrenComment] = useState([]);

    console.log(item);
    useEffect(function(){
        axios.get(` http://hn.algolia.com/api/v1/items/${item}`)
        .then((res)=>{
            setItemData(res.data);
        })
    }, [item])
    
    // function sol(parent){
    //     if(parent.children == undefined){
    //         return;
    //     }
    //     let newData = [];

    //     for(let i=0; i<parent.length; i++){
    //         newData[i] = parent.text
    //     }
    //     // let newData = parent.map((comment)=>(
    //     //     comment.text
    //     // ))

    //     if(parent.children != undefined && parent.children.length > 0){
    //         sol(parent.children)
    //     }

    //     setChildrenComment([...newData]);
    //     console.log("from sol")
    //     console.log(childrenComment);
        
    // }

    console.log(itemData);
  return (
    <>
        <Link to="/">
            <div style={{fontFamily:'Cursive'}} className="mt-5 ml-5 p-2 border text-center w-20 rounded-md bg-stone-400">Back</div>
        </Link>

        <div className='flex justify-center' >
            <h1 className='mt-3 text-center bg-neutral-200 font-serif font-bold bg-cyan-200 p-3 rounded-md w-9/12' >Title : {title}</h1>           
        </div>

        <div className='flex justify-center m-3'>
        <div className='flex flex-col justify-center items-center bg-green-300 rounded-md w-9/12' >
        <div className='m-3 w-9/12 text-center '>Comments :  {itemData.text}</div>
        
        { 
            itemData.children === undefined ? <div></div> : 
            <div className='m-3 w-9/12 text-center' >{
                itemData.text
            }
            </div>
        }

        {
            itemData.points === null ? <div className='m-3 w-9/12 text-center font-bold' >No Points Given</div> : 
            <div className='m-3 w-9/12 text-center' >{itemData.points}</div>
        }

        </div>
        </div>
    </>
  )
}

export default Story 