import React from 'react';
import history from "../../history";
import './index.scss';


const Article = ({article, setFavorites, addArticle, deleteBtn, removeFavorites}:any) => {
    return (
        <>
            <div className='title-wrapper' onClick={() => {history.push("/article");
                                            addArticle(article)
        }}>{article.title}</div>
            <small>{article.publishedAt.split('T')[0]}</small>
            <div>
                <img style={{width: "100%", height: "100%", marginTop: "10px", marginBottom: "10px"}} src={article.urlToImage} alt="article"/>
                <span>
                    <h3 style={{color: '#212121', fontFamily: 'Ubuntu'}}>{article.source.name}</h3>
                </span>
            </div>
            <div className='description-wrapper'>{article.description}</div>
            <div style={{position: 'absolute', marginTop:'20px'}}>
            {deleteBtn ? <button onClick={() => removeFavorites(article)}>Remove</button> : <button onClick={() => setFavorites(article)}>Add To Favorites</button>}
            </div>
            </>
    )
}

export default Article;
