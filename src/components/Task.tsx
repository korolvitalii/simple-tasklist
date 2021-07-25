import * as Bootstrap from 'react-bootstrap';

interface Props {
  onClickModal: () => void;
}
const Task = (props: Props) => {
  const { onClickModal } = props;
  const handleNoteOnClick = (): void => console.log('work!!');

  return <></>;
};

export default Task;
