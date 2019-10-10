import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections  // this returns objects
)

/* return collections in an array */
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
