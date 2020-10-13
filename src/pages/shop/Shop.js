import React, { Component } from 'react'
import Shop_Data from "./shop.data"
import PreviewCollection from "../../components/preview-collection/PreviewCollection"


export default class Shop extends Component {
   constructor(props){
       super(props);
       this.state = {
           collections : Shop_Data
       };
   }
    render() {
        const {collections} = this.state; 
        return (
            <div className="shop-page">
               {collections.map(({id,...otherCollectionProps})=>(
                <PreviewCollection key={id} {...otherCollectionProps} />
               ))}
            </div>
        )
    }
}
