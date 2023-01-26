import React from 'react'
import { useState,useEffect } from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import LeftArrow from '../Images/LeftArrow.png';
import RightArrow from '../Images/RightArrow.png';
const ImageSlider=()=> {

    const list=[{
      id:0,
      text:"Let the right people now you are open to work",
      text1:"with the open to work feature,you can privately tell recruiters or publicly share with the linkedin community that you are looking for new job oppertunity",
      image:image1
    },{
        id:1,
        text:"Conversation today could lead to opportunity tomorrow",
        text1:"sending message to people you know is a great way to strengthen relationship as you take the next step career",
        image:image2
    },{
      id:2,
      text:"Stay up to date on your industry",
      text1:"From live videos,to stories, to newsletters and more, Linkedin is full of ways to stay up to date on the latest discussion in industry",
      image:image3
    }];
    const [index,setIndex] = useState(0);
    const [path,setPath] = useState(list[0]);

    useEffect(() => {
      console.log("Loaded on component load");
    }, [path]);

    const next=()=>{
      console.log(index);
      setIndex(index+1);
      setPath(list[index+1]);
    }
    const prev=()=>{
      setIndex(index-1);
      setPath(list[index-1]);
    }
    
    
  return (
    <>
    
    <div className='row imageslider'>
    <div>
    <button className='preBtn' disabled={index===0}><img className='leftarrow' role="button" src={LeftArrow}  onClick={prev}/>Previous</button>
    <button className='nextBtn'  disabled ={list.length-1===index} onClick={next}>Next<img className='rightarrow'  src={RightArrow}/></button>
    </div>
        <div className='col-md-6'>
               <h1 className='text mt-5'>{path.text}</h1> 
               <h1 className='mt-2'>{path.text1}</h1>
        </div>
        <div className='col-md-6'>
        <img src= {path.image} className="image1 mt-5" />
        </div>
        
    </div>
        
    </>
  )
}

export default ImageSlider