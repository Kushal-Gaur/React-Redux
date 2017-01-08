import React from "react";

export default class Articles extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>The Internet of Things is the key driver that is transforming businesses and orchestrating new consumer experiences. We help unlock the future using IoT & Cloud to gain a significant advantage and chart a new future with enhanced productivity, decision making and design.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
