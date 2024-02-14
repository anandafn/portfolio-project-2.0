import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import headerImage from "../assets/images/header-img.svg";

const Banner = () => {
  const [loopTitleNum, setLoopTitleNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("F");
  const [timeToChangeTitle, setTimeToChangeTitle] = useState(
    300 - Math.random() * 100
  );
  const title = ["Full Stack Engineer", "Frontend Engineer"];
  const timeToTypeTitle = 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      time();
    }, timeToChangeTitle);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  const time = () => {
    let i = loopTitleNum % title.length;
    let fullText = title[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTimeToChangeTitle((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeToChangeTitle(timeToTypeTitle);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopTitleNum(loopTitleNum + 1);
      setTimeToChangeTitle(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio Website</span>
            <h1>
              Hi, I'm Ananda Fitri Namira <br />
              <span className="wrap">{text}</span>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
