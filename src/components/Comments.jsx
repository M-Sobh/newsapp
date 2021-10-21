import {useState, useEffect} from 'react';
import {  getCommentsByArticle } from "../utils/api";
import { useParams} from "react-router-dom";

export default function Comments() {

    const [commentCards, setCommentCards] = useState([]);
    const {article_id} = useParams();

    useEffect(() => {
        getCommentsByArticle(article_id).then((res) => {
            console.log(res,'<=====res from getComments')
            setCommentCards(res);
        })
    },[article_id])

    return (
        <section>
            <h2>Comments</h2>
            <section className="comment-sec">
                {commentCards.map((card) => {
                    return (
                    <section className='comment' key = {card.comment_id}>
                        <h3>{card.author} </h3>
                        <h4>{card.created_at}</h4>
                        <p>{card.body}</p>
                        <span>
                            <button>-</button>
                            <span>{card.votes}</span>
                            <button>+</button>
                        </span>
                    </section>
                )})
                }
             </section>
        </section>
    )
}
