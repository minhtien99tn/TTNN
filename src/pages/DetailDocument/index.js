import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import fakeJson from "../../config/data.json";

import { Typography } from "antd";

const { Title } = Typography;

const DetailDocument = (props) => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const newData = fakeJson.filter((data) => +data.id === +id);
    setData(...Object.values(newData));
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        <Title>{data.tieuDe}</Title>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={data.anh} className="img-fluid " alt="banner" />
            <hr className="my-2" />
            <p>
              {data?.noiDung}
            </p>
          </div>
        </div>
        <div className="container">
          <h4 style={{}} className="card-title text-center">
            Bài học liên quan{" "}
          </h4>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                <div className="card">
                  <a href="chiTietTin.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt
                    />
                  </a>
                  <div className="card-body">
                    <a href="chiTietTin.html">
                      {" "}
                      <h4 className="card-title">Tin 1</h4>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laboriosam eos laudantium molestiae, placeat fugit
                      molestias autem nemo temporibus tenetur dolor ut culpa
                      dolorem aspernatur illo neque itaque explicabo! Fugit,
                      earum!
                    </p>
                  </div>
                </div>
                <div className="card">
                  <a href="chiTietTin.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt
                    />
                  </a>
                  <div className="card-body">
                    <a href="chiTietTin.html">
                      {" "}
                      <h4 className="card-title">Tin 2</h4>
                    </a>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum quaerat dolores ducimus numquam praesentium
                      debitis, similique dolore esse nihil repudiandae sint,
                      cupiditate, aperiam fuga nisi corrupti a optio voluptatum
                      vero?
                    </p>
                  </div>
                </div>
                <div className="card">
                  <a href="chiTietTin.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt
                    />
                  </a>
                  <div className="card-body">
                    <a href="chiTietTin.html">
                      {" "}
                      <h4 className="card-title">Tin 3</h4>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum itaque, ad ex animi quibusdam odio quas qui totam,
                      temporibus omnis natus beatae corporis magnam eveniet aut
                      optio voluptates consectetur doloremque.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <a href="chiTietTin.html">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/500x300/"
                      alt
                    />
                  </a>
                  <div className="card-body">
                    <a href="chiTietTin.html">
                      <h4 className="card-title">Tin 4</h4>
                    </a>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident vero debitis mollitia labore earum totam tenetur
                      recusandae, architecto consectetur excepturi laudantium
                      sapiente veniam dicta cumque unde laboriosam quos aliquam
                      ratione!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailDocument.propTypes = {};

export default DetailDocument;
