import ArticleSummary from "./ArticleSummary"
import TopicsFilter from "./TopicsFilter"
import {getTopics, getArticlesByTopic} from '../utils/api';
import {useState, useEffect} from 'react';


const ArticlesList = ()=>{

    const [topics, setTopics] = useState([]);
    const [articlesList, setArticlesList] = useState([]);
    const [topic, setTopic] = useState('')

    useEffect(() =>{
        getTopics()
        .then((res) =>{
            setTopics(res);
        })
    },[])
    useEffect(() =>{
        getArticlesByTopic(topic)
        .then((res) =>{
            setArticlesList(res)
        })
        .catch((err) => {
            console.log(err,'<=========');
        })
    
    },[topic])
    return  <section className="articles-list">
        <section>
        <TopicsFilter topics={topics} setTopic={setTopic}/>
        <h2>Articles about : {topic}</h2>
        </section>
        <ArticleSummary articlesList={articlesList}/>
    </section>
    
}
export default ArticlesList