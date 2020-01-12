import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { EarthquakeContext } from "../contexts/EarthquakeContext";

const DetailModal = props => {
  const { earthquakeDetails } = useContext(EarthquakeContext);
  //   console.log("from modal: ", earthquakeDetails);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        {/* {earthquakeDetails.id}
        {earthquakeDetails.type} */}
        {earthquakeDetails.place}
        {/* <p>{earthquakeDetails.properties.mag}</p>
        <p>{earthquakeDetails.properties.url}</p>
        <p>{earthquakeDetails.properties.tsunami}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
