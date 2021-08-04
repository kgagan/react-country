import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

class MainComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />

          <Route
            path="/search-country/:url"
            render={(props) => (
              <Search key={props.match.params.url} {...props} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default MainComponent;
