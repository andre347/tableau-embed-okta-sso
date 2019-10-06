import React, { useState } from "react";

// Bootstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import Tableau from "../content/Tableau";

function Example({ viz }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const random = Math.floor(Math.random() * 7) + 1;

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>{viz.name}</Card.Title>
          <Card.Text>{viz.descriptions}</Card.Text>
          <Button variant="outline-secondary" onClick={handleShow}>
            {viz.name}
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last updated {random} {random > 1 ? "mins" : "min"} ago
          </small>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>{viz.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Tableau url={viz.url} />
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
