import React from "react";
import { ButtonToggle,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  UncontrolledCollapse,
  CardDeck,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  Label
} from 'reactstrap';

class UI extends React.Component {

  state = {
    channel1Selected: false,
    channel2Selected: false,
    channel3Selected: false,
    annot1Selected: false,
    annot2Selected: false,
    annot3Selected: false,
    annot4Selected: false
  };

  render() {
    return (
      <div>
        {console.log("Channels: " + this.state.channel1Selected
          + " " + this.state.channel2Selected + " " + this.state.channel3Selected
        )}
        {console.log("Annotations: " + this.state.annot1Selected
          + " " + this.state.annot2Selected + " " + this.state.annot3Selected + " " + this.state.annot4Selected
        )}

        <ButtonGroup>
          <UncontrolledButtonDropdown>
            <DropdownToggle caret color="primary">
              File
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem disabled> Import </DropdownItem>
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
                  <InputGroupAddon addonType="append"><Button>Add a new annotation class (Rect)</Button></InputGroupAddon>
                  </InputGroup>
                  <Button outline color="primary"> Annotation Class 1 </Button>
                  <Button outline color="primary"> Annotation Class 2 </Button>
                  <Button outline color="primary"> Annotation Class 3 </Button>
                  <Button outline color="primary"> Annotation Class 4 </Button>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown>
                <DropdownToggle caret color="none">
                  Freehand
                </DropdownToggle>
                <DropdownMenu>
                  <InputGroup>
                    <Input placeholder="username" />
                  <InputGroupAddon addonType="append"><Button>Add a new annotation class(Free)</Button></InputGroupAddon>
                  </InputGroup>
                  <Button outline color="primary"> Annotation Class 1 </Button>
                  <Button outline color="primary"> Annotation Class 2 </Button>
                  <Button outline color="primary"> Annotation Class 3 </Button>
                  <Button outline color="primary"> Annotation Class 4 </Button>
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

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

        <Container>
          <Row>
            <Col xs="3">
              <Card>
                <CardBody>
                  <CardTitle> Axis XY </CardTitle>
                </CardBody>
                <CardImg top width="100%" src="assets/images/brom.jpeg" alt="AxisXY" />
                <br>
                </br>
                <div className="slider">
                  <label htmlFor="range1"> ExampleRange </label>
                  <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Card>

              <br></br>
              <Card>
                <CardBody>
                  <CardTitle> Axis YZ </CardTitle>
                </CardBody>
                <CardImg top width="100%" src="assets/images/brom.jpeg" alt="AxisYZ" />
                <br>
                </br>
                <div className="slider">
                  <label htmlFor="range1"> ExampleRange </label>
                  <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Card>

              <br></br>
              <Card>
                <CardBody>
                  <CardTitle> Axis XZ </CardTitle>
                </CardBody>
                <CardImg top width="100%" src="assets/images/brom.jpeg" alt="AxisXZ" />
                <br>
                </br>
                <div className="slider">
                  <label htmlFor="range1"> ExampleRange </label>
                  <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Card>
            </Col>

            <Col xs="6">
              <Card>
                <CardBody>
                  <CardTitle> Image View </CardTitle>
                </CardBody>
                <CardImg top width="100%" src="assets/images/brom.jpeg" alt="Img1" />
                <br>
                </br>
                <div className="slider">
                  <label htmlFor="range1"> Zoom </label>
                  <input type="range" className="custom-range" id="customRange1" />
                </div>
              </Card>
            </Col>

            <Col xs="3">
              <Card>
                <CardBody>
                  <CardTitle> Annotated Class Selection </CardTitle>
                </CardBody>
                <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ annot1Selected: !this.state.annot1Selected }); }} active={this.state.annot1Selected}>
                  Annotation Class 1
                </Button>
                <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ annot2Selected: !this.state.annot2Selected }); }} active={this.state.annot2Selected}>
                  Annotation Class 2
                </Button>
                <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ annot3Selected: !this.state.annot3Selected }); }} active={this.state.annot3Selected}>
                  Annotation Class 3
                </Button>
                <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ annot4Selected: !this.state.annot4Selected }); }} active={this.state.annot4Selected}>
                  Annotation Class 4
                </Button>
              </Card>

              <br></br>
              <Card>
                <CardBody>
                  <CardTitle> Channel Selection </CardTitle>

                  <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ channel1Selected: !this.state.channel1Selected }); }} active={this.state.channel1Selected}>
                    Channel 1
                  </Button>
                  <Button outline color="secondary" id="viewCh1">
                    View
                  </Button>
                  <UncontrolledCollapse toggler="#viewCh1">
                    <Card>
                      <CardImg src="assets/images/brom.jpeg" alt="Ch1 Histogram" />
                      <CardBody>
                        "Insert Look up table here"
                        <br>
                        </br>
                        <br>
                        </br>
                          <div className="slider">
                            <label htmlFor="range1"> Brightness </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> Contrast </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> Black Point </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> White Point </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>

                  <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ channel2Selected: !this.state.channel2Selected }); }} active={this.state.channel2Selected}>
                    Channel 2
                  </Button>
                  <Button outline color="secondary" id="viewCh2">
                    View
                  </Button>
                  <UncontrolledCollapse toggler="#viewCh2">
                    <Card>
                      <CardImg src="assets/images/brom.jpeg" alt="Ch2 Histogram" />
                      <CardBody>
                        "Insert Look up table here"
                        <br>
                        </br>
                        <br>
                        </br>
                          <div className="slider">
                            <label htmlFor="range1"> Brightness </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> Contrast </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> Black Point </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                          <div className="slider">
                            <label htmlFor="range1"> White Point </label>
                            <input type="range" className="custom-range" id="customRange1" />
                          </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>

                  <Button outline color="primary" id="ch1Btn" onClick={() => {this.setState({ channel3Selected: !this.state.channel3Selected }); }} active={this.state.channel3Selected}>
                    Channel 3
                  </Button>
                  <Button outline color="secondary" id="viewCh3">
                    View
                  </Button>
                  <UncontrolledCollapse toggler="#viewCh3">
                    <Card>
                      <CardImg src="assets/images/brom.jpeg" alt="Ch1 Histogram" />
                      <CardBody>
                        Channel 3 Expanded
                        "Insert Look up table here"
                        <br>
                        </br>
                        <br>
                        </br>
                        <div className="slider">
                          <label htmlFor="range1"> Brightness </label>
                          <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="slider">
                          <label htmlFor="range1"> Contrast </label>
                          <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="slider">
                          <label htmlFor="range1"> Black Point </label>
                          <input type="range" className="custom-range" id="customRange1" />
                        </div>
                        <div className="slider">
                          <label htmlFor="range1"> White Point </label>
                          <input type="range" className="custom-range" id="customRange1" />
                        </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UI;
