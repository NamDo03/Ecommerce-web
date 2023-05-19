import React from 'react';
import Slider from '../components/Slider';
import FeatureProducts from '../components/FeatureProducts';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import { featureProducts, trendingProducts } from '../data';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts type="feature" data={featureProducts} />
      <Categories />
      <FeatureProducts type="trending" data={trendingProducts} />
      <Newsletter />
    </div>
  )
}

export default Home