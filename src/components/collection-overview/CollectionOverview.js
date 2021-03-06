import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectoinOverview.scss";

import PreviewCollection from "../preview-collection/PreviewCollection";
import { selectCollectionForPreview } from "../../redux/shop/Shop.selectors";

function CollectionOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
