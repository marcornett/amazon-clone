import React from 'react'
import Product from "../Product/Product"
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div id="home__img">
                <ReactBootstrapCarousel
                    autoplay={true}
                    pauseOnVisibility={true}
                    slideshowSpeed={4000}
                    indicators={false}
                    version={4}
                    wrap={true}
                    animation={true}
                >
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-YTVlMmNiZTgt-w1500._CB418667451_.jpg"
                        alt=""
                    />
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/YjAyNjAxMmQt/YjAyNjAxMmQt-ZDczMDBiZmYt-w1500._CB402936604_.jpg"
                        alt=""
                    />
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-OTc3NDY4YmQt-w1500._CB418667791_.jpg"
                        alt=""
                    />
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-2884_SVOD_Halloween/Amazon_GW_DesktopTallHero_RB-2884_SVOD_V2_Halloween_1500x600._CB403043380_.jpg"
                        alt=""
                    />

                </ReactBootstrapCarousel>
            </div>
            <div className="home__productList">

                <Product
                    id="9482958"
                    title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
                    price={12.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-MTI3MjNkYjEt-w379._SY304_CB404645652_.jpg"
                />
                <Product
                    id="9482958"
                    title="Bluetooth Headphones,Tuinyo Wireless Headphones Over Ear with Microphone, Foldable & Lightweight Stereo Wireless Headset for Travel Work TV PC Cellphone- Rose Gold"
                    price={24.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61XxVwZ2x3L._AC_SL1500_.jpg"
                />

                <Product
                    id="9482958"
                    title="Delta Faucet 5-Spray H2Okinetic In2ition 2-in-1 Dual Hand Held Shower Head with Hose and Magnetic Docking, Matte Black 58480-BL-PK"
                    price={146.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51BMWWZx%2BNL._AC_SL1083_.jpg"
                />
                <Product
                    id="9482958"
                    title="Lexicon Fabric Accent Chair, Orange"
                    price={172.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81bJAsbLiFL._AC_SL1500_.jpg"
                />
                <Product
                    id="9482958"
                    title="Hydro Flask Standard Mouth Water Bottle, Flex Cap - Multiple Sizes & Colors"
                    price={29.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51WBbIS9z2L._AC_SL1500_.jpg"
                />

                <Product
                    id="9482958"
                    title="Serta RNE-3S-CC-SET Rane Collection Convertible Sofa, L66.1 x W33.1 x H29.5, Charcoal"
                    price={139.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91oJcjRUJ1L._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
