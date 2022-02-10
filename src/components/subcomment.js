import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import store from "../redux/store";

export function SubComment( replies ) {
    
    const currentUser = store.getState()

    let res = replies.replies

    return(
        <>
            { res.map( ({ content, id, score, user, createdAt, replyingTo }) => { return( 
                <div className="subcomentario" key={id}>
                       {/* comment votes */} 
                <div className="comentario__botones" >
                    <button className="comentario__boton" >
                        +
                    </button>
                    <p className="comentario__cantidad" > { score } </p>
                    <button className="comentario__boton" >
                        -
                    </button>
                </div>
                   {/* comment data */} 
                <div className="comentarios__datos" >
                    <div className="comentario__header">
                        <div className="hsr">
                            <img className="foto__perfil-comentario" alt={ user.username } src={ user.image.png } />
                            <h4 className="usuario__nombre" > { user.username } </h4>
                            { currentUser.userReducer === user.username? <p className="currentuser__tag" >you</p>:'' }
                            <time> {createdAt} </time>
                        </div>
                        <div className="options" >
                        { currentUser.userReducer !== user.username?(
                                            <button className="reply__button">
                                                <FontAwesomeIcon icon={faReply} /> Reply
                                            </button>
                                        ):(
                                            <div className="options__subcontainer" >
                                                <button className="reply__button">
                                                    <FontAwesomeIcon icon={faPen} /> Edit
                                                </button>
                                                <button className="delete__button">
                                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                                </button>
                                            </div>
                                            
                                        ) }
                        </div>
                    </div>
                    <div className="comentario__content" >
                    <p><span className="respuesta__a">@${replyingTo}`</span>{ content }</p>
                    </div>
                </div>
            </div>) })}
        </>
    )

}