import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"ui/ux designer"}
            disc={`As a UI/UX designer, I am dedicated to understanding the needs and behaviors of users. I excel at translating complex ideas into intuitive, user-friendly interfaces that prioritize usability and delight. From wireframing and prototyping to crafting visually stunning designs, I strive to ensure that every pixel contributes to a coherent and engaging user experience.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"graphic designer"}
            disc={`My design approach revolves around the core principles of simplicity, elegance, and effective communication. I believe that good design should not only be visually appealing but also serve a purpose. By carefully balancing elements, colors, and typography, I create designs that resonate with audiences, evoke emotions, and convey powerful messages.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Full Stack Developer"}
            disc={`I am a skilled full stack developer proficient in a wide range of technologies. From front-end languages like HTML, CSS, and JavaScript to back-end frameworks such as Node.js and Django,  My expertise also extends to database management, API integration, and responsive web design, ensuring a seamless and optimized performance across devices.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
