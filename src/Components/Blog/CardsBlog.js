import React from 'react'
import cardImg from "../../img/cardImg.png";
import "./Blog.scss"

const CardsBlog = () => {
  return (
    <div>
         <div className="card">
            <img className="card-img-top" src={cardImg} alt="imagen de card" x="100px" y="100px" />
            <div className="card-body">
                <h2>Titulo</h2>
            </div>
        </div>
    </div>
  )
}

export default CardsBlog