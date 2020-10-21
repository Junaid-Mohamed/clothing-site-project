import React from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/CollectonPage";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;
