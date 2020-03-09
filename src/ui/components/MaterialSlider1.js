import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Slider } from "material-ui-slider";

function MaterialSlider1(props) {
  return (
    <Container {...props}>
      <Slider defaultValue={50} style={{}} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  flex-direction: column;
`;

export default MaterialSlider1;
