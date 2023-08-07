import {Component} from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 250px;
  background: #d9d9d9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const ResultCircle = styled.div`
  padding: 5px;
  border-radius: 1000000px;
  width: 100px;
  height: 100px;
  border: 10px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 50px;

  background: rgb(207,207,207);
  background: linear-gradient(120deg, rgba(207,207,207,1) 0%, rgba(179,179,179,1) 35%, rgba(149,149,149,1) 100%);
`;


class ResultHero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ResultCircle>
                    ?
                </ResultCircle>
            </Container>
        )
    }
}

export default ResultHero;
