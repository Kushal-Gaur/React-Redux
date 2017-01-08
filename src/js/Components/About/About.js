import React from "react";

import Articles from "../Articles/Articles";

export default class About extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const AllArticles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Articles key={i} title={title}/> );

    return (
      <div>
        <h1>About</h1>       
        <div class="row">{AllArticles}</div>
      </div>
    );
  }
}
