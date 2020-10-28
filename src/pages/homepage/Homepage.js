import React from "react";

import Directory from "../../components/directory/Directory"
import {HomePageContainer} from "./HomePage.styles"


function Homepage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;
