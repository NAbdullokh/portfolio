import React from "react";
import { Container, InputWrapper, Wrapper } from "./style";
import { BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Container.Title>
          <BiPhone style={{ marginRight: "5px" }} />
          Contact <span> me</span>
        </Container.Title>
        <InputWrapper>
          <InputWrapper.Title>Your Name</InputWrapper.Title>
          <InputWrapper.Input type="text" placeholder="Enter your name..." />
          <InputWrapper.Title>Your Email</InputWrapper.Title>
          <InputWrapper.Input type="email" placeholder="Enter your email..." />
          <InputWrapper.Title>Your Message</InputWrapper.Title>
          <InputWrapper.Area rows="15" placeholder="Enter your Message..." />
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default Contact;
