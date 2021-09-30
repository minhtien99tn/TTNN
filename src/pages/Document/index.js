import { Card, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const URL = "https://nikaws.cf/api/getlistlythuyet";

const Document = (props) => {
  const [documentList, setDocumentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getListDocument = async () => {
      // await promise ?
      // asynchronous : callback - promise - async-await
      await axios
        .get(URL)
        .then(({ data }) => {
          setDocumentList(data);
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

  return (
    <div className="container">
      {isLoading ? (
        <div> Loading ...</div>
      ) : (
        <Row  className="mt-3">
          {documentList.map((data) => (
            <div key={data.id} className="col-3 mb-4">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Link to={`/document/${data.id}`}>
                  <Meta title={data.ten_lythuyet} description="More" />
                </Link>
              </Card>
            </div>
          ))}
        </Row>
      )}
    </div>
  );
};

Document.propTypes = {};

export default Document;
