import styled from "styled-components";

const Guide = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  height: 80%;
  width: 80%;
  max-height: 450px;
  max-width: 250px;
  
  min-height: 300px;
  min-width: 150px;
`;

const GuideText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function FrameGuide() {

    return (
        <Container>
            <GuideText>Place test within zone & a take photo</GuideText>
            <Guide/>
        </Container>
    )
}

export default FrameGuide;
