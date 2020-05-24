import React from "react";
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';



export function ProductModal(props) {
    const name = props.product.name;
    const description = props.product.description;
    const img = props.product.picName;
    const price = props.product.price;

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>Läs mer</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>{name}</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <img src={'./img/productImages/' + img} />
          <p>{description}</p>
          <h6>{price} :-</h6>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline-secondary" onClick={handleClose}>
            Lägg i varukorg
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
  
