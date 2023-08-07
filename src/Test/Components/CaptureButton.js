import {Component} from "react";
import styled from "styled-components";

const ResultCircle = styled.button`
  border-radius: 1000000px;
  border: 5px solid white;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
  transition: border-color 100ms;
  margin: 60px;
  width: 60px;
  height: 60px;
  max-width: 60px;
  min-width: 60px;
  max-height: 60px;
  min-height: 60px;
  display: block;
  background: transparent;

  &:hover {
    border-color: #bbbbbb;
  }

  &:active {
    border-color: #9a9a9a;
    background: rgba(255, 255, 255, 0.15);
  }
`;

class CaptureButton extends Component {

    API_URL = "http://localhost:3001/evaluate"

    constructor(props) {
        super(props);
        this.state = {
            timestamp: "1",
            file: "2"
        }
    }

    onSubmit(event) {
        event.preventDefault();

        this.setState({
            timestamp: Math.floor(Date.now() / 1000),
            file: ""
        });

        event.target.submit();
    }

    render() {
        return (
            <form action={this.API_URL} onSubmit={this.onSubmit.bind(this)} method={"post"}>
                <ResultCircle type={"submit"} />
                <input type="hidden" name={"timestamp"} value={this.state.timestamp} />
                <input type="hidden" name={"file"} value={this.state.file} />
            </form>
        )
    }
}

export default CaptureButton;
