import blogFetch from '../axios/config';


import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import './criarPost.css';

const criarPost = () => {
    const navigate = useNavigate()

    const[title, setTitle] = useState()
    const[body, setBody] = useState()
    
    const createPost = async (e) =>{
        e.preventDefault();

        const post = { title, body, id: 1 };
        
        await blogFetch.post("/menu", {
            title: title,
            body: body,
        });
        navigate("/new");
    };

  return (
    <div className='new-post'>
        <h2>Inserir novo Post:</h2>
        <form onSubmit={(e) => createPost(e)} className='formu'>
            <div className='form-control'>
                <label htmlFor='title'>Título:</label>
                <input 
                type='text' 
                name='title'
                id='title'
                placeholder='Digite o título'
                onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='body'>Conteúdo:</label>
               <textarea 
               name="body" 
               id="body"
               placeholder='Digite conteúdo'
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
            </div>
            <input type="submit" value='Criar Post' className='btn'/>
        </form>
    </div>
  )
}

export default criarPost