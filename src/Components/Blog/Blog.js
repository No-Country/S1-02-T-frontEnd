import React from 'react'
import "./Blog.scss";
import blogImg from "../../img/logoImg.png"
import CardsBlog from './CardsBlog';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
        <div className='contenedor'>
            <div classname="contenedor1">
                <img classname="blogImg" src={blogImg} alt="imagen informativa"width="698px" height="698px" />
            </div>
            <div classname="contenedor2">
                <p className='fecha'> 22 de Abril de 2022</p>
                <h2 className='titulo'>La depresión y la ansiedad se disparan en los jovenes post pandemia</h2>

                <article>
                    El encierro, la desinformación que se vivía a diario y la falta de contacto social
                    han provocado un gran nivel de depresión y ansiedad en los jovenes de entre 18 y 25 años.
                    Especialistas afirman que solo se conoce una pequeña parte de este nuevo brote psicologico.
                    
                </article>
                <Link className='btn-light' to={`/article`}>Seguir leyendo....</Link>
                
            </div>

        </div>
        <div className='contenedor-card'>
            <CardsBlog />
            <CardsBlog />
            
        </div>

       
        
    </div>
  )
}

export default Blog