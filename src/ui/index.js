import React from 'react';
import {
  mainStyle,
  containerStyle,
  rowStyle,
  cardStyle,
  buttonGroup,
  container,
} from './style.js';
import Viewer from '../viewer/index.js';
import ImageUpload from '../fileuploader/index.js';

import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  UncontrolledCollapse,
  Card,
  CardTitle,
  CardImg,
  CardBody,
} from 'reactstrap';
import { ImageEdit } from 'material-ui/svg-icons';

class UI extends React.Component {
  state = {
    channel1Selected: false,
    channel2Selected: false,
    channel3Selected: false,
    annot1Selected: false,
    annot2Selected: false,
    annot3Selected: false,
    annot4Selected: false,
    image1Src: require('./assets/images/brom.jpeg'),
    image1Zoom: 0,
  };

  handleSliderChange = (e, key) => {
    e.persist();
  };

  render() {
    return (
      <div className="main" style={mainStyle}>
        {console.log(
          'Channels: ' +
            this.state.channel1Selected +
            ' ' +
            this.state.channel2Selected +
            ' ' +
            this.state.channel3Selected
        )}
        {console.log(
          'Annotations: ' +
            this.state.annot1Selected +
            ' ' +
            this.state.annot2Selected +
            ' ' +
            this.state.annot3Selected +
            ' ' +
            this.state.annot4Selected
        )}

        <ButtonGroup size={buttonGroup.size} vertical={buttonGroup.vertical}>
          <UncontrolledButtonDropdown>
            <DropdownToggle caret color="primary">
              File
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <ImageUpload> </ImageUpload>{' '}
              </DropdownItem>
              <DropdownItem> Export </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown>
            <DropdownToggle caret color="primary">
              Draw
            </DropdownToggle>
            <DropdownMenu>
              <UncontrolledButtonDropdown>
                <DropdownToggle caret color="none">
                  Rectangle
                </DropdownToggle>
                <DropdownMenu>
                  <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupAddon addonType="append">
                      <Button>Add a new annotation class (Rect)</Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 1{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 2{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 3{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 4{' '}
                  </Button>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown>
                <DropdownToggle caret color="none">
                  Freehand
                </DropdownToggle>
                <DropdownMenu>
                  <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupAddon addonType="append">
                      <Button>Add a new annotation class(Free)</Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 1{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 2{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 3{' '}
                  </Button>
                  <Button outline color="primary">
                    {' '}
                    Annotation Class 4{' '}
                  </Button>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          <UncontrolledButtonDropdown>
            <DropdownToggle caret color="primary">
              Edit
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem disabled> 1 </DropdownItem>
              <DropdownItem> 2 </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </ButtonGroup>

        <br></br>
        <br></br>
        <br></br>

        <Container style={container}>
          <div className="container" style={containerStyle}>
            <Row style={rowStyle}>
              <Col xs="3">
                <div className="card-axis-xy" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Axis XY </CardTitle>
                    </CardBody>
                    <CardImg
                      top
                      width="50%"
                      src={this.state.image1Src}
                      alt="AxisXY"
                    />
                    <br></br>
                    <div className="slider">
                      <label htmlFor="range1"> ExampleRange </label>
                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                      />
                    </div>
                  </Card>
                </div>

                <br></br>
                <div className="card-axis-yz" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Axis YZ </CardTitle>
                    </CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={this.state.image1Src}
                      alt="AxisYZ"
                    />
                    <br></br>
                    <div className="slider">
                      <label htmlFor="range1"> ExampleRange </label>
                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                      />
                    </div>
                  </Card>
                </div>

                <br></br>
                <div className="card-axis-xz" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Axis XZ </CardTitle>
                    </CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={this.state.image1Src}
                      alt="AxisXZ"
                    />
                    <br></br>
                    <div className="slider">
                      <label htmlFor="range1"> ExampleRange </label>
                      <input
                        type="range"
                        className="custom-range"
                        id="customRange1"
                      />
                    </div>
                  </Card>
                </div>
              </Col>

              <Col xs="6">
                <div className="card-axis-xz" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Image View </CardTitle>
                    </CardBody>
                    <Viewer imageSrc={this.state.image1Src} />
                    <br></br>
                  </Card>
                </div>
              </Col>

              <Col xs="3">
                <div className="card-axis-xz" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Annotated Class Selection </CardTitle>
                    </CardBody>
                    <Button
                      outline
                      color="primary"
                      id="ch1Btn"
                      onClick={() => {
                        this.setState({
                          annot1Selected: !this.state.annot1Selected,
                        });
                      }}
                      active={this.state.annot1Selected}
                    >
                      Annotation Class 1
                    </Button>
                    <Button
                      outline
                      color="primary"
                      id="ch1Btn"
                      onClick={() => {
                        this.setState({
                          annot2Selected: !this.state.annot2Selected,
                        });
                      }}
                      active={this.state.annot2Selected}
                    >
                      Annotation Class 2
                    </Button>
                    <Button
                      outline
                      color="primary"
                      id="ch1Btn"
                      onClick={() => {
                        this.setState({
                          annot3Selected: !this.state.annot3Selected,
                        });
                      }}
                      active={this.state.annot3Selected}
                    >
                      Annotation Class 3
                    </Button>
                    <Button
                      outline
                      color="primary"
                      id="ch1Btn"
                      onClick={() => {
                        this.setState({
                          annot4Selected: !this.state.annot4Selected,
                        });
                      }}
                      active={this.state.annot4Selected}
                    >
                      Annotation Class 4
                    </Button>
                  </Card>
                </div>

                <br></br>
                <div className="card-axis-xz" style={cardStyle}>
                  <Card>
                    <CardBody>
                      <CardTitle> Channel Selection </CardTitle>

                      <Button
                        outline
                        color="primary"
                        id="ch1Btn"
                        onClick={() => {
                          this.setState({
                            channel1Selected: !this.state.channel1Selected,
                          });
                        }}
                        active={this.state.channel1Selected}
                      >
                        Channel 1
                      </Button>
                      <Button outline color="secondary" id="viewCh1">
                        View
                      </Button>
                      <UncontrolledCollapse toggler="#viewCh1">
                        <Card>
                          <CardImg
                            src={this.state.image1Src}
                            alt="Ch1 Histogram"
                          />
                          <CardBody>
                            "Insert Look up table here"
                            <br></br>
                            <br></br>
                            <div className="slider">
                              <label htmlFor="range1"> Brightness </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Contrast </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Black Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> White Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>

                      <Button
                        outline
                        color="primary"
                        id="ch1Btn"
                        onClick={() => {
                          this.setState({
                            channel2Selected: !this.state.channel2Selected,
                          });
                        }}
                        active={this.state.channel2Selected}
                      >
                        Channel 2
                      </Button>
                      <Button outline color="secondary" id="viewCh2">
                        View
                      </Button>
                      <UncontrolledCollapse toggler="#viewCh2">
                        <Card>
                          <CardImg
                            src={this.state.image1Src}
                            alt="Ch2 Histogram"
                          />
                          <CardBody>
                            "Insert Look up table here"
                            <br></br>
                            <br></br>
                            <div className="slider">
                              <label htmlFor="range1"> Brightness </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Contrast </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Black Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> White Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>

                      <Button
                        outline
                        color="primary"
                        id="ch1Btn"
                        onClick={() => {
                          this.setState({
                            channel3Selected: !this.state.channel3Selected,
                          });
                        }}
                        active={this.state.channel3Selected}
                      >
                        Channel 3
                      </Button>
                      <Button outline color="secondary" id="viewCh3">
                        View
                      </Button>
                      <UncontrolledCollapse toggler="#viewCh3">
                        <Card>
                          <CardImg
                            src={this.state.image1Src}
                            alt="Ch1 Histogram"
                          />
                          <CardBody>
                            Channel 3 Expanded "Insert Look up table here"
                            <br></br>
                            <br></br>
                            <div className="slider">
                              <label htmlFor="range1"> Brightness </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Contrast </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> Black Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                            <div className="slider">
                              <label htmlFor="range1"> White Point </label>
                              <input
                                type="range"
                                className="custom-range"
                                id="customRange1"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default UI;
