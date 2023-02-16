import blogFetch from '../axios/config';

import React from 'react';

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import './newpost.css'

import ClipLoader from "react-spinners/ClipLoader";


const NewPost = () => {
  

  const[menu, setPosts] = useState([])
  
  const getPosts = async() =>  {

    try {

      const response = await blogFetch.get(
        "/menu"
        );

      const data = response.data;
      
      setPosts(data);
        console.log(data)
    } catch (error) {
      console.log(error);
    }

  }

useEffect(() =>{
 
  getPosts();  

}, [])

const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() =>{
  setLoading(false)
}, 1000)
}, [])

function deletePost(id) {

    fetch(`https://restaurantebiel.onrender.com/menu/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then(() =>{
        console.warn(resp)
       
      })
      getPosts();
    })


}

  return (
    <div className='home'>
       { 
      loading ?


   <ClipLoader
   color={'#dda3ff'}
   loading={loading}
   size={150}

 />
      :
      <div>
    <h1>Notícias do mundo Geek</h1>
    {menu.length === 0 ? <p>Carregando...</p> : (
      menu.map((menu) => (
    
        <div className="post" key={menu.id}>
          <h2>{menu.title}</h2>
          <p>{menu.body}</p>
          <Link to ={`menu/${menu.id}`} className='btn'>
             Ler mais
          </Link>
          <Link to={{ pathname: `/edit/${menu.id}` }}><button className='btnEdit'>Editar</button></Link>
          <button onClick={() =>deletePost(menu.id)} className='btnDelete'>Deletar</button>
       
        </div>
        

  ))
)}
</div>
      }
  </div>
);
};

export default NewPost