import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icon1 from "../assets/images/skill1.png";
import icon2 from "../assets/images/skill2.png";
import icon3 from "../assets/images/skill3.png";
import icon4 from "../assets/images/skill4.png";
import icon5 from "../assets/images/skill5.png";
import icon6 from "../assets/images/skill6.png";
import icon7 from "../assets/images/skill7.png";
import icon8 from "../assets/images/skill8.png";
import icon9 from "../assets/images/skill9.png";
import icon10 from "../assets/images/skill10.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const imgIcons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
];

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are skills that I have been practicing</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {imgIcons.map((imgUrl) => (
                  <div className="item">
                    <img src={imgUrl} alt="" />
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
