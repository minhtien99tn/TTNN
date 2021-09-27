import React from "react";
import { Form, Typography, Image, Row, Col, Input, Button } from "antd";
const { Title } = Typography;

const Part1 = ({ data, currentTab, title, isText, isAudio, movingTab }) => {
  const [point, setPoint] = React.useState(0);

  const onFinish = (values) => {
    const answersCheck = data.answers;
    const answerUserSubmit = Object.values(values);
    let newPoint = 0;

    const newAnswers = [];
    let defaultCharCode = 65;

    for (let i = 0; i < answersCheck.length; i++) {
      if (answersCheck[i].dapan === 1) {
        newAnswers.push(String.fromCharCode(defaultCharCode));
      }
      defaultCharCode++;
    }

    for (let i = 0; i < 5; i++) {
      if (String(answerUserSubmit[i]).toUpperCase() === newAnswers[i]) {
        newPoint = newPoint + 1;
      }
    }
    // a, e, f, g, h
    setPoint(newPoint);
    if(point > 0) {
      movingTab(currentTab + 1, point);
    }


  };

  return (
    <div>
      <Title level={3}>{title}</Title>
      <Title level={5}>Description part</Title>
      <Image
        width="100%"
        height={400}
        src={`https://nikaws.cf/${
          data.listPartDocumentArray[isAudio ? 1 : 0].url
        }`}
      />

      {isAudio && (
        <audio
          controls
          style={{
            padding: "5px 17px",
            margin: 10,
          }}
        >
          <source
            src={`https://nikaws.cf/${data.listPartDocumentArray[0].url}`}
            type="audio/mpeg"
          />
        </audio>
      )}

      <Row gutter={[16, 32]} justify="space-between">
        <Col span={12}>
          <ol>
            {data.questions.map((question) => (
              <li
                key={question.id}
                style={{
                  paddingBottom: 40,
                }}
              >
                {question.noidung_cauhoi}
              </li>
            ))}
          </ol>
        </Col>
        <Col span={12}>
          <ol type="A">
            {data.answers.map((elm) => (
              <li
                key={elm.id}
                style={{
                  paddingTop: 10,
                }}
              >
                {!isText ? (
                  <Image
                    height="100%"
                    src={`https://nikaws.cf/${elm.url}`}
                    alt=""
                    className="w-100 h-100"
                  />
                ) : (
                  <div style={{ paddingTop: 10 }}>{elm.noidung_dapan}</div>
                )}
              </li>
            ))}
          </ol>
        </Col>
      </Row>

      {/* https://ant.design/components/form/#Form */}
      <Form
        name="basic"
        // labelCol={{ span: 1 }}
        // wrapperCol={{ span: 3 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {data.questions.map((question, index) => (
            <Form.Item
              label={index + 1}
              name={question.id}
              rules={[{ required: true, message: "Bạn cần nhập field này !" }]}
            >
              <Input />
            </Form.Item>
          ))}
        </div>

        <Title level={5}>Total Point: {point}</Title>
        <Form.Item
          style={{
            marginTop: 20,
          }}
        >
          <Button type="primary" htmlType="submit">
            Next Part 
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Part1;
