import React from "react";
import { Link } from "react-router";

import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

export default class App extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
               {this.props.children}
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    );
  }
}
