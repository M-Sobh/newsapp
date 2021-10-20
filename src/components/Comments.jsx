export default function Comments({commentsCard}) {
    return (
        <section>
            <h2>Comments</h2>
            <section className="comment-sec">
                {commentsCard.map((card) => {
                    return (
                    <section key = {card.comment_id}>
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
