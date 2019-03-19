import React, { Component } from "react";
import { Header, Footer } from "../components/layouts";

class CustomLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default CustomLayout;
