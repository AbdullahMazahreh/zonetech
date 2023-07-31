import React, { Fragment, useContext } from "react";
import { allData } from "../../context/Context";
import "./landingpage.css";
import { Hero, HotCategories } from "../../components/Index";

function LandingPage() {
  const { currentUser } = useContext(allData);

  return (
    <Fragment>
      <Hero />
      <HotCategories />
    </Fragment>
  );
}

export default LandingPage;
