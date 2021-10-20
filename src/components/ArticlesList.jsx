import ArticleSummary from "./ArticleSummary"
import TopicsFilter from "./TopicsFilter"
import {getTopics} from '../utils/api';
import {useState, useEffect} from 'react';

const ArticlesList = ()=>{

    const [topic, setTopic] = useState([]);
  
    useEffect(() =>{
        getTopics()
        .then((res) =>{
            setTopic(res)
        })
    },[])
    return  <section className="articles-list">
        <TopicsFilter topic={topic}/>
        <ArticleSummary/>
        <ArticleSummary/>
        <ArticleSummary/>
        <ArticleSummary/> 


    </section>
    
}
export default ArticlesList