import { Image, Radio, Typography, Button, Col } from "antd";
import React from "react";
const { Title } = Typography;

const Part9 = ({ data, title, isAudio, currentTab, movingTab }) => {
  const dataQuestions = data.questions;
  const dataAnswers = data.answers;
  const [currentAnswers, setCurrentAnswers] = React.useState([]);
  const [valueCorrect, setValueCorrect] = React.useState({});
  const [point, setPoint] = React.useState(0);

  React.useEffect(() => {
    const valueIsCorrect = formatAnswer();
    setValueCorrect(valueIsCorrect);
  }, []);

  const formatAnswer = () => {
    const newAnswer = [];
    dataQuestions.map((question) => {
      dataAnswers.map((answer) => {
        if (question.id === answer.cauhoi_id && answer.dapan === 1) {
          newAnswer.push(answer.noidung_dapan);
        }
      });
    });
    return newAnswer;
  };

  const onChange = (e, index) => {
    console.log(e.target.value);
    const newValue = {
      [index]: e.target.value,
    };
    // 1: 111
    // 2: 123
    // 3: 134

    setCurrentAnswers((prevState) => Object.assign(prevState, newValue));
    // -> {
    // 1: 111
    // 2: 123
    // 3: 134
    // }
  };

  const handleSubmit = () => {
    const answersCheck = data.answers;
    const answerUserSubmit = Object.values(currentAnswers);
    const newAnswers = [];
    let newPoint = 0;

    for (let i = 0; i < answersCheck.length; i++) {
      if (answersCheck[i].dapan === 1) {
        // lưu id của nhưng answers có đáp án đúng
        newAnswers.push(answersCheck[i].id);
      }
    }

    for (let i = 0; i < 5; i++) {
      if (answerUserSubmit[i] === newAnswers[i]) {
        newPoint = newPoint + 1;
      }
    }
    setPoint(newPoint);
    if (point > 0) {
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
        src={`https://nikaws.cf/${data.listPartDocumentArray[1].url}`}
      />

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

      <ol>
        {[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [9, 10, 11],
          [12, 13, 14],
        ].map((elmKey, index) => {
          return (
            <li key={dataQuestions[index].id}>
              <div>{dataQuestions[index].noidung_cauhoi}</div>
              <ol
                type="A"
                style={{
                  padding: "20px 0",
                }}
              >
                <Radio.Group
                  onChange={(e) => onChange(e, index)}
                  style={{
                    display: "flex",
                  }}
                >
                  {elmKey.map((key, i) => (
                    <Col span={6}>
                      <div>
                        <Image
                          width="100%"
                          style={{ objectFit: "contain" }}
                          src={`https://nikaws.cf/${dataAnswers[key].url}`}
                        />
                      </div>
                      <Radio key={key} value={dataAnswers[key].id}>
                        {String.fromCharCode(65 + i)}
                      </Radio>
                    </Col>
                  ))}
                </Radio.Group>
              </ol>
            </li>
          );
        })}
      </ol>
      <Title level={5}>Total Point: {point}</Title>

      <Button type="primary" onClick={handleSubmit}>
        Next Part 
      </Button>
    </div>
  );
};

Part9.propTypes = {};

export default Part9;
