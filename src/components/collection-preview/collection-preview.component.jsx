import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) =>  (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
        .filter((item, idx) => idx < 4)
        .map( ({id, name, price, imageUrl }) => (
          <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} /> 
        /*
        .map( ({id, ...otherCollectionProps }) => (
          <CollectionItem key={id} { ...otherCollectionProps } /> 
        */
       ))
      }
    </div>
  </div>
)

export default CollectionPreview;