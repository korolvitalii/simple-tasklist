import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';

type ModalProps = {
  showModal: boolean;
  onClickCloseForm: () => void;
};

type FormData = {
  name: string;
  category: string;
  content: string;
  dates: number;
};

const CreateNoteModal = (props: ModalProps) => {
  const { showModal, onClickCloseForm } = props;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Modal show={showModal} onHide={onClickCloseForm} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Creact new note!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='Name' placeholder='Name' {...register('name')} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Dates
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='Dates' placeholder='Dates' {...register('dates')} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
              Content
            </Form.Label>
            <Col>
              <Form.Control type='Content' placeholder='Content' {...register('content')} />
            </Col>
          </Form.Group>

          <Form.Label column sm={10}>
            Category
            <Form.Select aria-label='Default select example'>
              <option>Choose category</option>
              <option value='1'>Task</option>
              <option value='2'>Idea</option>
              <option value='3'>Quote</option>
              <option value='4'>Random Thougth</option>
            </Form.Select>
          </Form.Label>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClickCloseForm}>
          Close
        </Button>
        <Button variant='primary' type='submit'>
          Add note
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNoteModal;
