import React from "react";
import "./index.css";

import BaseButton from "../../components/BaseButton/";

const WithButtonBgAndColor = (WrapComponent) => {
  return props => (
    <div className="btn-container-1">
      <WrapComponent />
    </div>
  );
};

export default WithButtonBgAndColor(BaseButton);

export const withButtonBgAndColor = (WrapComponent) => {
  return (props) => (
    <div className="btn-container-1">
      <WrapComponent />
    </div>
  );
};