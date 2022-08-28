import React from "react";
import { Btn, Container, InputWrapper, Wrapper } from "./style";
import { BiPhone } from "react-icons/bi";
import emailjs from "emailjs-com";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_8jnnvem", e.target, "dXpRQ82PWumQI-HhZ")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("sended");
  };
  return (
    <Wrapper id="contact">
      <Container>
        <Container.Title>
          <BiPhone style={{ marginRight: "5px" }} />
          Contact <span> me</span>
        </Container.Title>
        <InputWrapper>
          <form onSubmit={sendEmail}>
            <InputWrapper.Title>Your Name</InputWrapper.Title>
            <InputWrapper.Input
              name="from_name"
              type="text"
              placeholder="Enter your name..."
              required
            />
            <InputWrapper.Title>Your Number</InputWrapper.Title>
            <InputWrapper.Input
              name="number"
              type="number"
              placeholder="Enter your number..."
              required
            />
            <InputWrapper.Title>Your Email</InputWrapper.Title>
            <InputWrapper.Input
              name="email"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <InputWrapper.Title>Your Message</InputWrapper.Title>
            <InputWrapper.Area
              name="message"
              rows="15"
              placeholder="Enter your Message..."
              required
            />

            <Btn type="submit" value="Send">
              <TbSend
                style={{ marginRight: "10px", transform: "scale(1.5)" }}
              />
              Send
            </Btn>
          </form>
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default Contact;
