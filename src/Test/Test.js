import styled from "styled-components";
import Camera from "./Components/Camera";
import FrameGuide from "./Components/FrameGuide";
import CaptureButton from "./Components/CaptureButton";
import "./Test.css";

const Body = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background: #f3f3f3;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;


const SnapOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

function Test() {
  return (
    <Body>
        <Camera />
        <SnapOverlay>
            <FrameGuide />
            <CaptureButton />
        </SnapOverlay>
    </Body>
  );
}

export default Test;
