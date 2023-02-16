import blogFetch from '../axios/config';

import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import './edit.css';

const Editar = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const[title, setTitle] = useState()
    const[body, setBody] = useState()
    
    const createPost = async (e) =>{
        e.preventDefault();

        const post = { title, body, id: 1 };
        
        await axios.put(`https://restaurantebiel.onrender.com/menu/${id}`, {
            title: title,
            body: body,
        });
        navigate("/new");
    };


  return (
    <div className='new-post'>
        <h2>Editar Post:</h2>
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
            <input type="submit" value='Editar' className='btn'/>
        </form>
    </div>
  )
}

export default Editar