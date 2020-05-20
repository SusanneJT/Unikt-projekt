import React from "react";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'



export function ProductModal(props) {
    const ProductName = props.productName;
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Läs mer</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>{ProductName}</ModalTitle>
        </Modal.Header>
        <ModalBody>Produktbeskrivning</ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleClose}>
            Lägg i varukorg
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
  
