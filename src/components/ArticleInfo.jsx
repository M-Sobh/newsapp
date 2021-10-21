import {useState, useEffect} from 'react';
import {getArticleById} from '../utils/api';
import { useParams} from "react-router-dom";



export default function ArticleInfo() {

    const [articleInfoCard, setArticleInfoCard] = useState({});
    const {article_id} = useParams();

    useEffect(()=>{
        getArticleById(article_id).then((res) => {
            console.log(res,'<====res from Article');
            setArticleInfoCard(res);
        })
    },[article_id])

    console.log(articleInfoCard, '<=======articleInfoCard');

    return (<section >
            {
                <section className="article-info">
                    <h2>{articleInfoCard.title}</h2>
                    <h4>{articleInfoCard.author}</h4>
                    <h4>{articleInfoCard.topic}</h4>
                    <h4>{articleInfoCard.created_at}</h4>
                    <p>{articleInfoCard.body}</p>
                    <section>
                        <button>Vote</button>
                        <button>Comment</button>
                        <span>{articleInfoCard.votes}</span>
                        <span>{articleInfoCard.comment_count}</span><br/>
                        <input type = 'text'></input>
                    </section>
                </section>  
            }
        </section>
    )
}
 