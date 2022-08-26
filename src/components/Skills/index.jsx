// import axios from "axios";
import React, { useEffect } from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import { FaLaptopMedical } from "react-icons/fa";
import Aos from "aos";
import { Languages } from "../../mock/skills";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // const [data, setData] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://udontnow.pythonanywhere.com/api/v4/image/")
  //     .then((res) => setData(res.data));
  //   setLoading(false);
  // }, []);

  // if (isLoading) {
  //   return <h1 style={{ color: "white" }}>Loading...</h1>;
  // }

  return (
    <Wrapper id="skills">
      <Container>
        <Container.Title>
          <FaLaptopMedical style={{ marginRight: "5px" }} />
          Skills & <span>Abilities</span>
        </Container.Title>
        <CardWrapper>
          {Languages.map((value) => {
            return (
              <Card data-aos="zoom-in" key={value.id}>
                <Card.Img src={value.icon} alt="" />
                <Card.Title>{value.title}</Card.Title>
              </Card>
            );
          })}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Skills;
