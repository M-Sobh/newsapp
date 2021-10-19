import {getTopics} from '../utils/api';
import {useState, useEffect} from 'react';


export default function TopicsFilter() {
    const [topic, setTopic] = useState([]);
  
    useEffect(() =>{
        getTopics()
        .then((res) =>{
            setTopic(res)
        })
    },[])
    return (
        <div>
            <select className='topic-filter'>
                <option>--Please Select a Topic--</option>
                {
                    topic.map((topicName) => {
                       return <option key={topicName.slug}>{topicName.slug}</option>

                    })
                }
            </select>
        </div>
    )
}
