import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

export const MyModal: React.FC = () => {
  return (
    <Modal show={true}>
      <Modal.Header>Hi</Modal.Header>

      <Modal.Body>asdfasdf</Modal.Body>

      <Modal.Footer>This is the footer</Modal.Footer>
    </Modal>
  );
};
