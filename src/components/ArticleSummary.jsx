import {Link} from 'react-router-dom';

export default function ArticleSummary({articlesList}) {
    return (      
        <section >
           
            {
                articlesList.map((article) => {
                    return(
                    <section className='article-summary' key ={article.title}>
                        <h3>{article.title}</h3>
                        <h4>Author: {article.author}</h4>
                        <h4>Written on: {article.created_at}</h4>
                        <Link to ="/article" >
                            <button>More</button>
                        </Link>
                    </section>)
                })
            }
        </section>
            
    )
}
