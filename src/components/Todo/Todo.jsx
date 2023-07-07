import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { deleteTodo } from 'redux/todo-slice';
import { useDispatch } from 'react-redux';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => handleDeleteTodo(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
