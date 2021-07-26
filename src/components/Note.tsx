import { Button } from 'react-bootstrap';
import { BsArchive, BsFillTrashFill, BsPencil, BsCheck } from 'react-icons/bs';
import { RootStateOrAny, useSelector } from 'react-redux';
import { TodoTask } from '../redux/actions/todoAction';

const Note = () => {
  const handleAddToDoneClick = (): void => console.log('work!!');
  const notes = useSelector((state: RootStateOrAny) => state.todo);
  return (
    <tbody>
      {notes.map((note: TodoTask) => {
        const { name, created, category, content, dates, id } = note;
        return (
          <tr key={`${id}--${name}`}>
            <td>{name}</td>
            <td>{created}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>
              <Button onClick={handleAddToDoneClick} variant='dark'>
                <BsCheck />
              </Button>
              <Button variant='dark'>
                <BsPencil />
              </Button>
              <Button variant='dark'>
                <BsArchive />
              </Button>
              <Button variant='dark'>
                <BsFillTrashFill />
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Note;
