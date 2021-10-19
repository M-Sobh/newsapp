import ArticleSummary from "./ArticleSummary"
import TopicsFilter from "./TopicsFilter"


const ArticlesList = ()=>{
    return  <section className="articles-list">
        <TopicsFilter/>
        <ArticleSummary/>
        <ArticleSummary/>
        <ArticleSummary/>
        <ArticleSummary/>


    </section>
    
}
export default ArticlesList