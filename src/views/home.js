
import { Carousel } from "../components/carousel";
import { Video } from "../components/video";


const Home = props => {

    return (
        <>
            <div className="home">
                <Carousel />

                    <Video />

            </div>

        </>
    )
}

export default Home;