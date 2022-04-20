import React from 'react'
import "./Blog.scss";
import blogImg from "../../img/logoImg.png"
import CardsBlog from './CardsBlog';

const Blog = () => {
  return (
    <div>
        <div className='contenedor'>
            <div classname="contenedor1">
                <img src={blogImg} alt="imagen informativa"width="500px" height="500px" />
            </div>
            <div classname="contenedor2">
                <p className='fecha'> 22 de Abril de 2022</p>
                <h2 className='titulo'>La depresión y la ansiedad se disparan en los jovenes post pandemia</h2>

                <article>
                    El encierro, la desinformación que se vivía a diario y la falta de contacto social
                    han provocado un gran nivel de depresión y ansiedad en los jovenes de entre 18 y 25 años.
                    Especialistas afirman que solo se conoce una pequeña parte de este nuevo brote psicologico
                </article>
            </div>

        </div>

        <CardsBlog />
        <CardsBlog />
        
    </div>
  )
}

export default Blog