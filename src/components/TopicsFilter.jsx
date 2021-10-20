
export default function TopicsFilter({ topics, setTopic}) {

   const topicHandler = (e) =>{
       setTopic(e.target.value)
   }

    return (
        <div>
            <select className='topic-filter' onChange = {topicHandler} >
                <option value =''>--Please Select a Topic--</option>
                {
                    topics.map((topicName) => {
                       return (
                            <option key={topicName.slug} value ={topicName.slug}>
                                {topicName.slug}
                            </option>
                            )
                    })
                }
            </select>
        </div>
    )
}
