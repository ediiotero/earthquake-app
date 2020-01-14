import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { EarthquakeContext } from "../contexts/EarthquakeContext";

const DetailModal = props => {
  const { earthquakeDetails } = useContext(EarthquakeContext);
  console.log("from modal: ", earthquakeDetails);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="earthquake-modal-detail"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="earthquake-modal-detail">
          {earthquakeDetails.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="quake-modal-content">
          <section className="quake-modal-column">
            <img
              src={props.img}
              alt={earthquakeDetails.place}
              width="300"
              height="300"
            />
          </section>
          <section className="quake-modal-column">
            <ul>
              <li>
                {" "}
                <span className="quake-detail-bold"> Type:</span>{" "}
                {earthquakeDetails.type}
              </li>
              <li>
                <span className="quake-detail-bold">Magnitude:</span>{" "}
                {earthquakeDetails.mag}
              </li>
              <li>
                <span className="quake-detail-bold">Location:</span>{" "}
                {earthquakeDetails.place}
              </li>
              <li>
                <span className="quake-detail-bold">Felt reports:</span>{" "}
                {earthquakeDetails.felt
                  ? earthquakeDetails.felt
                  : "None Reported"}
              </li>
              <li>
                <span className="quake-detail-bold">Alert:</span>{" "}
                {earthquakeDetails.alert
                  ? earthquakeDetails.alert
                  : "Not Alerts"}
              </li>
              <li>
                <a href={earthquakeDetails.url}>More detail at USGS</a>
              </li>
            </ul>
          </section>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
