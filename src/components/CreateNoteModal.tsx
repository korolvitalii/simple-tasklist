import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { uniqueId } from 'lodash';

import Modal from 'react-bootstrap/Modal';
import { addNote, TodoNote } from '../redux/actions/todoActions';
import { useDispatch } from 'react-redux';
import { generateDate } from '../helpers/helpers';

type ModalPropsType = {
  showModal: boolean;
  onClickCloseForm: () => void;
  currentNote?: TodoNote;
};

type FormData = {
  id: number;
  created: string;
  name: string;
  category: string;
  content: string;
  dates: Array<string>;
};

const CreateNoteModal: React.FC<ModalPropsType> = (props) => {
  const { showModal, onClickCloseForm, currentNote } = props;
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  if (currentNote) {
    const { name, created, category, content, dates, id } = currentNote;
    setValue('name', name);
    setValue('created', created);
    setValue('category', category);
    setValue('content', content);
    setValue('dates', dates);
    setValue('id', id);
  } else {
    setValue('id', Number(uniqueId()));
    setValue('created', generateDate());
  }

  const onSubmit = handleSubmit((data: TodoNote) => {
    onClickCloseForm();
    console.log(data);
    dispatch(addNote(data));
  });

  return (
    <Modal show={showModal} onHide={onClickCloseForm} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Creact new note!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='name' placeholder='Enter name' {...register('name')} />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Content</Form.Label>
            <Form.Control type='name' placeholder='Add content' {...register('content')} />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Dates</Form.Label>
            <Form.Control type='name' placeholder='Add dates' {...register('dates')} />
          </Form.Group>

          <Form.Group>
            <Form.Label column sm={10}>
              Category
              <Form.Select aria-label='choose category' {...register('category')}>
                <option>Choose category</option>
                <option value='Task'>Task</option>
                <option value='Idea'>Idea</option>
                <option value='Quote'>Quote</option>
                <option value='Random Thougth'>Random Thougth</option>
              </Form.Select>
            </Form.Label>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CreateNoteModal;
