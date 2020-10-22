import {createSelector} from "reselect"
import memoize from "lodash.memoize";

// const COLLECTION_ID_MAP = {
//     hats : 1,
//     sneakers : 2,
//     jackets : 3,
//     womens : 4,
//     mens : 5
// } // we are using this map object because our url is string where as collection items have id, hence the use


const selectShop = state=> state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopCollections],
    collections=> collections[collectionUrlParam]
    // the above is done with the help of data normalization.storing data in form of objects.
    // collections.find(
    //     collections=>collections.id===COLLECTION_ID_MAP[collectionUrlParam]
    // )
)
)

// since data normaization is implemented, we have to convert the call of array function
//to a object call.
export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collectoins=>Object.keys(collectoins).map(key=>collectoins[key]) //same as pulling out the array item.
)