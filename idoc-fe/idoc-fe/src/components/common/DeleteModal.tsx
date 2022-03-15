import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({
  isOpen,
  toggleModal,
  handleSelectDelete
}: {
  isOpen: boolean;
  toggleModal: any;
  handleSelectDelete: any;
}) => {
  return (
    <Modal show={isOpen} onHide={toggleModal}>
      <Modal.Header style={{ color: "#FF0000" }}>
        <h5>Delete User</h5>
      </Modal.Header>
      <Modal.Body>
        <div>Are you sure you want to delete this user?</div>
        <div className="text-end">
          <Button
            className="me-2"
            style={{ backgroundColor: "#FF0000", border: "#FF0000" }}
            onClick={handleSelectDelete}
          >
            YES
          </Button>
          <Button
            onClick={toggleModal}
            style={{ backgroundColor: "#00B0FF", border: "#00B0FF" }}
          >
            NO
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
