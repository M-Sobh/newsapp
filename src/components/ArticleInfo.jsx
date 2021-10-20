export default function ArticleInfo({articleInfoCard}) {
    return (<section className="article-info">
            {articleInfoCard.map((card) => {   
            return(
                <section key ={card.article_id}>           
                    <h2>{card.title}</h2>
                    <h4>{card.author}</h4>
                    <h4>{card.topic}</h4>
                    <h4>{card.created_at}</h4>
                    <p>{card.body}</p>
                    <section>
                        <button>Vote</button>
                        <button>Comment</button>
                        <span>{card.votes}</span>
                        <span>{card.comment_count}</span><br/>
                        <input type = 'text'></input>
                    </section>
                </section>
            )})
        }
        </section>
    )
}
 