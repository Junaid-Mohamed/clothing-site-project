import React from 'react'
import "./CollectionPage.scss"

import {selectCollection} from "../../redux/shop/Shop.selectors"
import {connect} from "react-redux"
import CollectionItem from "../../components/collection-item/CollectionItem"

function CollectionPage({collection}) {
   const {title,items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className="items">
                {items.map(item => (<CollectionItem key={item.id} item={item} />) )}
            </div>
        </div>
    )
}

// this mapStateToProps is little different because we are using dynamic routing, so this procedure can be followed
const mapStateToProps = (state,ownProps)=>({

    collection:selectCollection(ownProps.match.params.collectionId)(state)

})

export default connect(mapStateToProps)(CollectionPage)
