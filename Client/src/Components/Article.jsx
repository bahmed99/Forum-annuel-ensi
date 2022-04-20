import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import "../Assets/css/article.css"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, FacebookIcon,LinkedinIcon, TwitterIcon
} from "react-share";
import Axios from 'axios'
import ArticleCard from './ArticleCard';

export default function Article() {
    let { articleId } = useParams();
        const [article, setArticle] = useState({})
        const [isloaded,setIsLoaded]= useState(false)

    useEffect(() => {
        if (!isloaded) {
        Axios.get(`http://127.0.0.1:3001/blogs/${articleId}`).then((data) => {
            setArticle(data.data)
            setIsLoaded(true)
        }).catch(console.log('error'))}


    },[])
    
    const img = `/uploads/${article.image}`

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <div className="article-header">
                <img src={img} alt=""/>
            </div>
        
            <div className="article-content">
                <h2 className="articleTitle">{article.title}</h2>
                <div  dangerouslySetInnerHTML={{ __html: article.content}} className="articleText"></div>
            </div>
            
            <div className="articleArrow"><i className="fa fa-arrow-up fa-3x" onClick={scrollToTop}> </i></div>
        </div>
    )
}