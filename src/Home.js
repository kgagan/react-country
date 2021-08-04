import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      search_redirect: false,
      redirect: false,
    };
    this.addForm = this.addForm.bind(this);
  }
  addForm(e) {
    this.setState({ search_redirect: true });
  }
  render() {
    return (
      <div>
        {(() => {
          if (this.state.search_redirect) {
            return (
              <div>
                <Search data={this.state.search} />
              </div>
            );
          } else {
            return (
              <div>
                <div
                  className="container"
                  style={{
                    height: 200,
                    marginTop: 200,
                    backgroundColor: "black",
                    textAlign: "center",
                  }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <h1 style={{ color: "white" }}>Enter Country</h1>
                      <br />
                      <form onSubmit={this.addForm}>
                        <div className="">
                          <input
                            class="form-control"
                            type="text"
                            name=""
                            value={this.state.search}
                            onChange={(e) =>
                              this.setState({ search: e.target.value })
                            }
                          />
                        </div>
                        <br />
                        <div style={{ textAlign: "center" }}>
                          <Link to={`/search-country/${this.state.search}`}>
                            <input
                              class="btn btn-primary"
                              type="submit"
                              name=""
                              value="Submit"
                            />
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
export default Header;
