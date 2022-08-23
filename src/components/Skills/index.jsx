import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "./style";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://udontnow.pythonanywhere.com/api/v4/image/")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <Container>
      {data.map((value) => {
        return (
          <Card data-aos="flip-left" key={value.id}>
            <Container.Img
              src={`http://udontnow.pythonanywhere.com/${value.icon}`}
              alt=""
            />
            <h3>{value.title}</h3>
          </Card>
        );
      })}
    </Container>
  );
};

export default Skills;
