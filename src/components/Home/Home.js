import React from 'react'
import Product from '../Product/Product';

import './Home.css'

function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg"
          alt=""
        />

        {/* Product props= id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />

          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <Product
            id="123232"
            title="Get fit at home"
            price={25.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
        </div>
      </div>
    );
}

export default Home
