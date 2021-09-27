import { Image, Radio, Typography, Button } from "antd";
import React from "react";
const { Title } = Typography;

const Part2 = ({ data, title, isAudio, currentTab, movingTab }) => {
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
    const newValue = {
      [index]: e.target.value,
    };
    setCurrentAnswers((prevState) => Object.assign(prevState, newValue));
  };

  const handleSubmit = () => {
    console.log(currentAnswers)
    let newPoint = 0;
    for (let i = 0; i < 5; i++) {
      if (
        String(currentAnswers[i]).toUpperCase() ===
        String(valueCorrect[i]).toUpperCase()
      ) {
        newPoint = newPoint + 1;
      }
    }
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

      <ol>
        {[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [9, 10, 11],
          [12, 13, 14],
        ].map((elmKey, index) => (
          <li key={dataQuestions[index].id}>
            <div>{dataQuestions[index].noidung_cauhoi}</div>
            <ol
              type="A"
              style={{
                padding: "20px 0",
              }}
            >
              <Radio.Group onChange={(e) => onChange(e, index)}>
                {elmKey.map((key) => (
                  <Radio key={key} value={dataAnswers[key].noidung_dapan}>
                    {dataAnswers[key].noidung_dapan}
                  </Radio>
                ))}
              </Radio.Group>
            </ol>
          </li>
        ))}
      </ol>
      <Title level={5}>Total Point: {point}</Title>

      <Button type="primary" onClick={handleSubmit}>
      Next Part 
      </Button>
    </div>
  );
};

Part2.propTypes = {};

export default Part2;
