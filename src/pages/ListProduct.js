import React, { useState } from 'react';
import '../styles/ListProduct.scss';
import List from '../components/List';
import { Products } from '../data';

const ListProduct = ({ filter }) => {
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState(Products);
    const [selectedCategory, setSelectedCategory] = useState(filter || 'all');
    const filterItem = (categItem) => {
        const updatedItems = Products.filter((curElem) => {
            return curElem.category === categItem;
        })
        setProducts(updatedItems);
        setSelectedCategory(categItem);
    }

    if (selectedCategory !== 'all') {
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
                            onClick={() => { setProducts(Products); setSelectedCategory('all') }}
                        >All
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'kb' ? 'products__category--selected' : ''}
                            onClick={() => filterItem('kb')}
                        >
                            Keyboards
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'kc' ? 'products__category--selected' : ''}
                            onClick={() => filterItem('kc')}
                        >
                            Keycaps
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'hp' ? 'products__category--selected' : ''}
                            onClick={() => filterItem('hp')}
                        >
                            Headphones
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'sw' ? 'products__category--selected' : ''}
                            onClick={() => filterItem('sw')}
                        >
                            Switches
                        </span>
                    </div>
                    <div className='products__category' >
                        <span
                            className={selectedCategory === 'ac' ? 'products__category--selected' : ''}
                            onClick={() => filterItem('ac')}
                        >
                            Accessories
                        </span>
                    </div>
                </div>
                <div className='products__filterItem'>
                    <h2>Shop by price</h2>
                    <div className='products__inputItem' >
                        <input type='radio' id='1' value={1} />
                        <label htmlFor='1'>Under $50</label>
                    </div>
                    <div className='products__inputItem' >
                        <input type='radio' id='2' value={1} />
                        <label htmlFor='1'>$50-$100</label>
                    </div>
                    <div className='products__inputItem' >
                        <input type='radio' id='2' value={1} />
                        <label htmlFor='1'>$100-$250</label>
                    </div>
                    <div className='products__inputItem' >
                        <input type='radio' id='2' value={1} />
                        <label htmlFor='1'>Above $250</label>
                    </div>
                </div>
            </div>
            <div className='products__right'>
                <div className='products__option'>
                    <select onChange={(e) => setSort(e.target.value)}>
                        {/* <option disabled selected>Sort by:</option> */}
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