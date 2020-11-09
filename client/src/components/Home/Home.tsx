import * as React from 'react'
import * as Redux from 'redux';
import './index.scss';
import {connect} from 'react-redux';
import { AppState } from '../../redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions} from '../../redux/actions/actionTypes';
import {bindActionCreators} from 'redux';
import {addArticle, loadCategoryNews, loadNews} from '../../redux/actions/newsActions';
import Article from '../Article';


interface HomeProps{}

interface HomeState{}

type Props=HomeProps & LinkStateProp & LinkDispatchProps;

class Home extends React.Component<Props, HomeState> {
    state={
        isLoading: true,
        selectedCategory: 'hottest',
        favorites: [],
        search: ''
    }

    _handleChange=(e:any)=>{
        this.setState({
            selectedCategory: e.target.value
        })
    }

    componentDidMount():void{
        if(this.state.selectedCategory==='hottest'){
            this.props.loadNews();
            this.setState({
                isLoading: false,
            });
        }else{
            const param=this.state.selectedCategory
            this.props.loadCategoryNews(param);
            this.setState({
                isLoading: false,
            });
        }
    }

    componentDidUpdate(prevProp: any, prevState: any):void{
        if(prevState.selectedCategory!==this.state.selectedCategory){
            if(this.state.selectedCategory==='hottest'){
                this.props.loadNews();
            }else{
                this.props.loadCategoryNews(this.state.selectedCategory);
            }
        }
    }


    addFavorites = (article:any) => {
        if(this.state.favorites.length===0){
            this.setState({favorites: [...this.state.favorites, article]});
        }else {
            if(this.state.favorites.some((it:any)=> it.title.split(' ').join('')===article.title.split(' ').join(''))){ // comparing according to title
                alert('You have already added that item to favorites.');
            }else{
                this.setState({favorites: [...this.state.favorites, article]});
            }
        }
    }

    
    removeFavorites=(article:any)=>{
        const arr = [...this.state.favorites];
        for (let i=0; i<arr.length ; i++){
            if(arr[i]===article){
                console.log(i);
                arr.splice(i, 1);
            }
        }
        this.setState({favorites: [...arr]});
    }

    updateSearch=(e:any)=>{
        this.setState({
            search: e.target.value.substr(0,20)
        })
    }        
    
    render(){
        
        if(this.state.isLoading || this.props.news === undefined) return <h1>Loading...</h1>

        else {
            if(this.state.selectedCategory==='hottest' || this.state.selectedCategory!=='hottest'){
                let filteredNews = (this.props.news as Array<string>).filter((filter:any)=>{ // It gives me an error! 'TypeError: this.props.news.filter is not a function'
                    return filter.title.toLowerCase().includes(this.state.search.toLowerCase()); // search by title
                });
                return(
                    <> 
                        <div className='select-wrapper'> 
                            <select name="category" id="category" onChange={this._handleChange}>
                                <option value="hottest">hottest</option>
                                <option value="business">business</option>
                                <option value="entertainment">entertainment</option>
                                <option value="general">general</option>
                                <option value="health">health</option>
                                <option value="science">science</option>
                                <option value="sport">sport</option>
                                <option value="technology">technology</option>
                            </select>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <div className='search-box'>
                                <input className='search-text' type="text" placeholder='Search News By Title...' value={this.state.search} onChange={this.updateSearch} />
                                <div className='search-btn'><i className="fas fa-search"></i></div>
                            </div>
                            <div>
                            {
                                filteredNews.map((it:any)=>(
                                <div key={Math.random().toString(36).substr(2,9)}>
                                    <div className='article-wrapper'><Article setFavorites={this.addFavorites} addArticle={this.props.addArticle} article={it}/></div>
                                </div>  
                                ))
                            }
                            </div>
                            <div className='favorites-list'><p>List of Favorites</p></div>
                            <div className='favorites-wrapper'> {
                                this.state.favorites.map((it:any)=>(
                                <div key={Math.random().toString(36).substr(2,9)}>
                                    <div className='article-wrapper'><Article article={it} deleteBtn={true}  removeFavorites={this.removeFavorites}/></div>
                                </div>  
                                ))
                            }</div>
                        </div>
                    </>
                )
            } 
        }
    }
}

interface LinkStateProp{
    news: [],
    categoryNews: [],
    articleNews: []
}

interface LinkDispatchProps{
    loadNews: ()=>void;
    loadCategoryNews: (category:any)=>void;
    addArticle: (article: any)=>void;
}

const mapStateToProps = (state: AppState, ownProps: HomeProps): LinkStateProp=>({
    news: state.news,
    categoryNews: state.categoryNews,
    articleNews: state.articleNews
});



const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: HomeProps) : LinkDispatchProps=>({
    loadNews: bindActionCreators(loadNews, dispatch),
    loadCategoryNews: bindActionCreators(loadCategoryNews, dispatch),
    addArticle: bindActionCreators(addArticle, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);