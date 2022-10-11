import React from 'react'
import articleImg3 from "../../img/articleImg3.png"
import articleImg1 from "../../img/articleImg1.png"
import articleImg2 from "../../img/articleImg2.png"
import "./BlogArticle.scss"


const BlogArticle = () => {
  return (
    <div>
        <div>
            <div className='pageArticle'>
                <h2 className='fechaArticle'>22 de Abril de 2022</h2>
                <img className='imgArticle' src={articleImg3} alt=''/>
            </div>
            <div className='pageArticle2'>
                <p className='parrafo'>Consectetur ipsum quis magna nostrud Lorem velit eiusmod labore qui do. Do sunt nisi qui sunt dolore sint eu aliqua fugiat. Aliquip ad excepteur dolore do do voluptate. Est officia exercitation aliquip amet ullamco cillum magna veniam adipisicing.</p>
                <h2>Miedo a viajar  </h2>

            </div>
            <div>
                <img src={articleImg1} alt='' />
                <p className='parrafo'>Excepteur dolor ad ad pariatur Lorem pariatur ipsum cillum. Deserunt esse dolor ad laboris id labore proident ad ullamco ipsum. Proident non magna Lorem ullamco et labore et ea qui.</p>
                <h2>¿Qué pasa con la tristeza y el teletrabajo?</h2>
                <img src={articleImg2} alt='' />
                <p className='parrafo'>Elit sint ut nisi dolore aliquip consectetur reprehenderit adipisicing anim ut sint excepteur. Veniam qui ullamco qui non laboris exercitation. Commodo nulla dolor incididunt proident in consectetur dolore quis deserunt mollit excepteur quis reprehenderit. Nisi sit anim non laboris ad eu sint est nostrud. Do sit tempor aliquip occaecat veniam. Officia deserunt tempor id elit amet id exercitation non laboris nisi.</p>
            </div>

           
            
        </div>
        <div className='share'>
            
            <h6>Compartí</h6>
            <h6>Facebook, twitter, instagram</h6>
            
        </div>
        

        
    </div>
  )
}

export default BlogArticle