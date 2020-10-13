import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem"



function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id,...otherCollectionItemProps}) => (
            <CollectionItem key={id} {...otherCollectionItemProps} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;