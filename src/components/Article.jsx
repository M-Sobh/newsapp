import ArticleInfo from "./ArticleInfo";
import Comments from "./Comments";
import {useState, useEffect} from 'react';
import { getArticleById, getCommentsByArticle } from "../utils/api";
import {Link, useParams} from "react-router-dom";


export default function Article() {
    const [articleInfoCard, setArticleInfoCard] = useState([]);
    const [commentsCard, setCommentsCard] = useState([]);
    const{article_id} = useParams();

    useEffect(()=>{
        getArticleById(article_id).then((res) => {
            setArticleInfoCard(res);
        })
    },[article_id])

    useEffect(() => {
        getCommentsByArticle(article_id).then((res) => {
            setCommentsCard(res);
        })
    },[article_id])

    return (
        <Link to = '/article'>
            <ArticleInfo articleInfoCard={articleInfoCard}/>
            <Comments commentsCard={commentsCard}/>
            
        </Link>
    )
}
