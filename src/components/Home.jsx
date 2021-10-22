import { Link } from "react-router-dom";


const Home = () => {
    return (
            <section>
                <Link to = '/articles'>
                    <button>Articles</button>
                </Link>
            </section>
    )
};

export default Home;