import { Link } from "react-router-dom";


const Home = () => {
    return (
            <section>
                <div  className='home'>
                    <h4>Welcome to The News App</h4>
                <Link to = '/articles'>
                    <button>Articles</button>
                </Link>
                </div>
            </section>
    )
};

export default Home;