import {useState, useEffect} from 'react';
import {getArticleById} from '../utils/api';
import { useParams, Link} from "react-router-dom";



export default function ArticleInfo() {

    const [articleInfoCard, setArticleInfoCard] = useState({});
    const {article_id} = useParams();

    useEffect(()=>{
        getArticleById(article_id).then((res) => {
            setArticleInfoCard(res);
        })
    },[article_id])

  

    return (<section >
            {
                <section className="article-info">
                    <h2>{articleInfoCard.title}</h2>
                    <h4>Written By: {articleInfoCard.author}</h4>
                    <h4>On :{articleInfoCard.created_at}</h4>
                    <h4>Topic: {articleInfoCard.topic}</h4>                  
                    <p>{articleInfoCard.body}</p>
                    <section>
                        <button>Vote</button>
                        <button>Comment</button>
                        <span>{articleInfoCard.votes} Votes</span>
                        <Link to = {`/articles/${article_id}/comments`}>
                            <span>{articleInfoCard.comment_count} Comments</span><br/>
                        </Link>
                        <input type = 'text'></input>
                    </section>
                </section>  
            }
        </section>
    )
}
 