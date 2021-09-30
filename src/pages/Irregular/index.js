import { Row, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const { Title } = Typography;

const URL = "https://nikaws.cf/api/getdetaillythuyetby/10";
const Irregular = (props) => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getListDocument = async () => {
      await axios
        .get(URL)
        .then(({ data }) => {
          setData(data.detailLythuyet);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getListDocument();
  }, []);

  console.log(data);
  return (
    <div>
      <Row align="center">
        <Title>{data.ten_lythuyet}</Title>
      </Row>
      <Row align="center">
        <div dangerouslySetInnerHTML={{ __html: data.noidung_lythuyet }}></div>
      </Row>
    </div>
  );
};

Irregular.propTypes = {};

export default Irregular;
