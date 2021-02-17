import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import './Tryon.css'
import {
    IntializeEngine, IntializeThreejs
} from './render.js';

function Tryon(props) {
    //Addedd
    // useEffect(() => {

    //     async function init() {
    //         var video = document.getElementById('tryon-video');

    //         await navigator.mediaDevices.getUserMedia({
    //             'audio': false,
    //             'video': {
    //                 facingMode: 'user',
    //             }
    //         }).then(stream => {
    //             video.srcObject = stream;
    //         });

    //         video.oncanplay = (e) => {
    //             video.play();
    //             IntializeThreejs("purple1");
    //             IntializeEngine();
    //         }
    //     }

    //     init();

    //     return () => {

    //     };
    // }, []);

    // Added
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Heloooooooooooooooooooooooo</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
        </p>
                <div className="row arcomp">
                    <div id="threejsContainer">
                        <video id="tryon-video"></video>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Tryon