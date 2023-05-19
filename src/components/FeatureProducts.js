import React from 'react';
import '../styles/FeatureProducts.scss';
import Card from './Card';

const FeatureProducts = ({ type, data }) => {
    return (
        <div className='featureProduct'>
            <div className='featureProduct__top'>
                <h1>{type} products</h1>
            </div>
            <div className='featureProduct__bottom'>
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeatureProducts