import {Component} from "react";
import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
  object-fit: cover;
`;


class Camera extends Component {

    CONSTRAINTS = {video: {facingMode: "environment"}, audio: false};

    constructor(props) {
        super(props);
        this.track = null;
        this.cameraView = null;
    }

    componentDidMount() {
        this.cameraView = document.querySelector("#camera-view");

        try {
            navigator.mediaDevices
                .getUserMedia(this.CONSTRAINTS)
                .then(this.withStream.bind(this))
                .catch(this.withStreamError.bind(this));
        } catch (ex) {

        }

    }

    withStream(stream) {
        this.track = stream.getTracks()[0];
        this.cameraView.srcObject = stream;
    }

    withStreamError(error) {
        console.log('Oops. Something is broken,', error)
    }

    render() {
        return (
            <Video id="camera-view" autoPlay={true} playsInline={true} ></Video>
        )
    }
}

export default Camera;
