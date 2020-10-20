import React from 'react'
import Product from "./Product"
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img
                className="home__img"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020_PrimeDay/GW/RB-2817_PD2020_Channels_GW_Desktop_Tablet_Hero_Biz_EN_V2b_1x._CB403910725_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">

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
            </div>
            <div className="home__row">
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
            </div>
            <div className="home__row">
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
