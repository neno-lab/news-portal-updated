import * as React from 'react'
import * as Redux from 'redux';
import {connect} from 'react-redux';
import { AppState } from '../../../redux/configureStore';
import './index.scss';
import history from "../../../history";

interface ArticlePageProps{
}

interface ArticlePageState{}

type Props=ArticlePageProps & LinkStateProp;

class ArticlePage extends React.Component<Props, ArticlePageState> {
    render(){
        let news=this.props.articleNews;
        return (
        <>
            <div className='main-div'>
                <div className='title' onClick={()=>history.push('/')}>{news.title}</div> {/* It gives me an error! */} {/* TypeError: this.props.news.filter is not a function */}
                <div>
                    <img src={news.urlToImage} alt="article"/>
                    <span>
                        <h3>{news.source.name}</h3>
                    </span>
                </div>
                <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae provident harum excepturi nostrum debitis officia tempora nulla doloremque! Nemo odit commodi facere dolorum recusandae nulla voluptas minima sequi. Repudiandae.Mollitia ad hic id ducimus quidem officiis eum velit illo nobis quas harum minus odio exercitationem, a architecto aspernatur nemo inventore, corrupti officia odit porro! Odio nihil explicabo dolorum dolorem?</p>
            </div>
        </>
        )
    }
}

interface LinkStateProp{
    articleNews: any
}

const mapStateToProps = (state: AppState, ownProps: ArticlePageProps): LinkStateProp=>({
    articleNews: state.articleNews
});



export default connect(mapStateToProps, null)(ArticlePage);