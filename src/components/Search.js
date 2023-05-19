import React, { useState } from 'react';
import '../styles/Search.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Products } from '../data';

const Search = ({ setShowSearch }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    return (
        <div className='search'>
            <div className='search__form'>
                <input
                    type='text'
                    autoFocus
                    placeholder='Search for products.'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <CloseIcon onClick={() => setShowSearch(false)} />
            </div>
            <div className='search__resultContent'>
                <div className='search__results'>
                    {Products.filter((item) => {
                        if (search === '') {
                            return item;
                        } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                        }
                        return false;
                    }).map(item => (
                        <div className='search__item' key={item.id} onClick={() => {
                            navigate('/product/' + item.id);
                            setShowSearch(false);
                        }}>
                            <div className='search__item-img'>
                                <img src={item.img} alt='' />
                            </div>
                            <h1>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search