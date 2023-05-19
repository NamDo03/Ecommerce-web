import React from 'react';
import '../styles/List.scss';
import Card from './Card';

const List = ({ data, sort }) => {
  let sortedData = [...data];
  if (sort === "asc") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    sortedData.sort((a, b) => b.price - a.price);
  }
  return (
    <div className='list'>
      {sortedData.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List