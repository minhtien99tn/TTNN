import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import fakeJson from "../../config/data.json";

const Document = (props) => {
  return (
    <div className="container">
      <div className="row mt-3">
        {fakeJson.map((data) => (
          <div className="col-4">
            <div className="card-deck">
              <div className="card">
                <Link to={`/Document/${data.id}`}>
                  <img alt="" className="card-img-top" src={data.anh} />
                </Link>

                <div className="card-body">
                  <h4 className="card-title">
                    <Link to={`/documen/${data.id}`}>
                    {data.tieuDe}
                    </Link>
                  </h4>
                  <p className="card-text">{data.noiDung}</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

Document.propTypes = {};

export default Document;
