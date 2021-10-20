
export default function TopicsFilter({topic}) {
   
    return (
        <div>
            <select className='topic-filter'>
                <option>--Please Select a Topic--</option>
                {
                    topic.map((topicName) => {
                       return <option key={topicName.slug}>
                           {topicName.slug}
                           </option>

                    })
                }
            </select>
        </div>
    )
}
