import React from "react";


export default class Footer extends React.Component {
  render() {
     const containerStyle = {
      marginTop: "60px"
    };
    return (
      <footer class={containerStyle}>
        <div class="row">
          <div class="col-lg-12">
            <p>Developed by Kushal</p>
          </div>
        </div>
      </footer>
    );
  }
}
