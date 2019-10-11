import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import PageNotFound from '../page-not-found/page-not-found.component';

const ShopPage = ({ match }) => {
  if (process.env.NODE_ENV === 'development') { console.log(match); }
  
  return(
    <div className='shop-page'>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        <Route component={PageNotFound} /> 
      </Switch>
    </div>
  );
} 

export default ShopPage;