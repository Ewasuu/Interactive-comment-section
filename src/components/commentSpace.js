import React from 'react'
import data from '../data/data.json'

export function CommentSpace(){
    let user = data.currentUser
    return(
        <div className='espacio__comentario' >
            <form className='comentario__form' >
                <div><img src={user.image.png} alt={user.username} className='foto__perfil-texto' /></div>
                <div className='textarea__container'><textarea placeholder='Add a comment...' type='text' className='comentario__texto' /></div>
                <div>
                    <button className='form__btn'>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )
}