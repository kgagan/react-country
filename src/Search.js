import React from "react";
import "./style.css";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: this.props.data,
      search_data: [],
    };
  }
  componentDidMount() {
    //const data = this.state.s;
    const data = this.props.match.params.url;
    const fd = new FormData();
    fd.append("subregion", data);
    axios
      .get("https://restcountries.eu/rest/v2/name/India")
      .then((res) => {
        this.setState({ search_data: res.data });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
  render() {
    return (
      <div>
        {/* start here */}
        <div className="main-div">
          <div
            className="container"
            style={{
              height: 400,
              marginTop: 100,
              backgroundColor: "grey",
              textAlign: "center",
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="contact-us">
                  <h1 style={{ color: "white" }}>Country Details</h1>
                </div>
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>subregion</th>
                      <th>population</th>
                      <th>latlng</th>
                      <th>flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.search_data.map((result) => {
                      return (
                        <tr>
                          <td>{result.subregion}</td>
                          <td>{result.population}</td>
                          <td>{result.latlng}</td>
                          <td>
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={result.flag}
                              alt="no img"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* end here */}
      </div>
    );
  }
}

export default Search;
