import React, { useState } from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const Home = () => {
    const [input,setInput]=useState("");
    const [data,setData]=useState({});


    const shorter= (e)=>{

        e.preventDefault();
        if(!input){
          return toast.warning("You must enter an URL!"); 
        }

        fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then(res=>res.json())
        .then(data=>setData(data));
        console.log(data);
      }
      
    
  return (
    <div className="home">
      <ToastContainer/>
        <h1>Creattia - Premium URL Shortener By Burak Demir</h1>
        <p>We take your url to short. Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Corporis architecto facilis exercitationem, ut natus dolore.</p>
        <form className="form_container" onSubmit={shorter}>
          <div className="container_left">
          <InsertLinkIcon className="icon"/>
            <input type="text" placeholder='Enter Your Link' value={input} onChange={e=>setInput(e.target.value)} />
            </div>
            <button>Shorten!</button>
        </form>

     {Object.keys(data).length>0 && (
         <div className="result">
         <a href="#">{data.result.short_link}</a>
        
        
      <ContentCopyIcon className="copy_icon" onClick={() =>  {navigator.clipboard.writeText(`${data.result.short_link}`); toast.success("Link Copied")}} />
        </div>
     )}



    </div>
  )
}

export default Home