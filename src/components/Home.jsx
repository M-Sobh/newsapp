import { Link } from "react-router-dom";
import landingImg from "../resources/landingImg.jpg";

const Home = () => {
    return (
        <section>
            <img src ={landingImg} alt= '' width='100%' height = '100% '/>
            <section>
                <Link to = '/articles'>
                    <button>Articles</button>
                </Link>
            </section>
        </section>

    )
};

export default Home;