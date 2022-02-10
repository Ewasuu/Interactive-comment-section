import React  from "react"
import data from '../data/data.json'
import { SubComment } from "./subcomment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import store from "../redux/store"


export function Comment(){
    const currentUser = store.getState()

    const comments = data.comments

    return(
        <>
            { comments.map( ({ content, createdAt, id, score, user, replies }) => { return(
                <div key={id} >
                    <div className="comentario" >
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
                                        { currentUser.userReducer === user.username? <p className="currentuser__tag" >ypu</p>:'' }
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
                                <p>{ content }</p>
                            </div>
                        </div>
                    </div>
                    { replies.length !== 0 ?(
                        <div className="respuesta__container" >
                            <div className="box" ></div>
                            <SubComment replies={replies}/>
                        </div>
                    ):'' }
                </div>                        
            )} ) }
        </>
    )

}