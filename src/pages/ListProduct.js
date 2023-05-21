import React, { useState } from 'react';
import '../styles/ListProduct.scss';
import List from '../components/List';
import { Products } from '../data';

const ListProduct = ({ filter }) => {
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState(Products);
    const [selectedCategory, setSelectedCategory] = useState(filter || 'all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const filterItem = (categItem) => {
        const updatedItems = Products.filter((curElem) => {
            return curElem.category === categItem;
        })
        setProducts(updatedItems);
        setSelectedCategory(categItem);
    }

    const filterByPrice = (range) => {
        let min = 0;
        let max = Infinity;

        if (range === 'under50') {
            max = 50;
        } else if (range === '50to100') {
            min = 50;
            max = 100;
        } else if (range === '100to250') {
            min = 100;
            max = 250;
        } else if (range === 'above250') {
            min = 250;
        }

        const updatedItems = Products.filter((curElem) => {
            return curElem.price >= min && curElem.price <= max;
        });

        setProducts(updatedItems);
        setSelectedCategory('price');
        setSelectedPriceRange(range);
    };

    if (selectedCategory !== 'all' && selectedCategory !== 'price') {
        const updatedItems = Products.filter((curElem) => {
            return curElem.category === selectedCategory;
        })
        if (JSON.stringify(products) !== JSON.stringify(updatedItems)) {
            setProducts(updatedItems);
        }
    }

    return (
        <div className='products'>
            <div className='products__left'>
                <div className='products__filterItem'>
                    <h2>Categories</h2>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'all' ? 'products__category--selected' : ''}
                            onClick={() => { setProducts(Products); setSelectedCategory('all'); setSelectedPriceRange('') }}
                        >All
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'kb' ? 'products__category--selected' : ''}
                            onClick={() => { filterItem('kb'); setSelectedPriceRange('') }}
                        >
                            Keyboards
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'kc' ? 'products__category--selected' : ''}
                            onClick={() => { filterItem('kc'); setSelectedPriceRange('') }}
                        >
                            Keycaps
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'hp' ? 'products__category--selected' : ''}
                            onClick={() => { filterItem('hp'); setSelectedPriceRange('') }}
                        >
                            Headphones
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'sw' ? 'products__category--selected' : ''}
                            onClick={() => { filterItem('sw'); setSelectedPriceRange('') }}
                        >
                            Switches
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'ac' ? 'products__category--selected' : ''}
                            onClick={() => { filterItem('ac'); setSelectedPriceRange('') }}
                        >
                            Accessories
                        </span>
                    </div>
                </div>
                <div className='products__filterItem'>
                    <h2>Shop by price</h2>
                    <div className='products__inputItem' >
                        <input
                            type='checkbox'
                            id='1'
                            value={1}
                            onChange={() => filterByPrice('under50')}
                            checked={selectedPriceRange === 'under50'}
                        />
                        <label htmlFor='1'>Under $50</label>
                    </div>
                    <div className='products__inputItem' >
                        <input
                            type='checkbox'
                            id='2'
                            value={1}
                            checked={selectedPriceRange === '50to100'}
                            onChange={() => filterByPrice('50to100')}
                        />
                        <label htmlFor='2'>$50-$100</label>
                    </div>
                    <div className='products__inputItem' >
                        <input
                            type='checkbox'
                            id='3'
                            value={1}
                            checked={selectedPriceRange === '100to250'}
                            onChange={() => filterByPrice('100to250')}
                        />
                        <label htmlFor='3'>$100-$250</label>
                    </div>
                    <div className='products__inputItem' >
                        <input
                            type='checkbox'
                            id='4'
                            value={1}
                            checked={selectedPriceRange === 'above250'}
                            onChange={() => filterByPrice('above250')}
                        />
                        <label htmlFor='4'>Above $250</label>
                    </div>
                </div>
            </div>
            <div className='products__right'>
                <div className='products__option'>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option >Recommended</option>
                        <option value='asc'>Price(ASC)</option>
                        <option value='desc'>Price(DESC)</option>
                    </select>
                </div>
                <List data={products} sort={sort} />
            </div>
        </div>
    )
}

export default ListProduct