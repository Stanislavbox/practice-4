import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, LikeButton } from './Todo.styled';
import { decrementLikes, deleteTodo, incrementLikes } from 'redux/todo-slice';
import { useDispatch } from 'react-redux';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

export const Todo = ({ text, counter, id, likes }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

const handleIncrementLikes = () => {
  dispatch(incrementLikes(id));
}

const handleDecrementLikes = () => {
  dispatch(decrementLikes(id));
}

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <Text>
          Likes: {likes}
          <LikeButton onClick={handleIncrementLikes}>
            <AiFillLike />
          </LikeButton>
          <LikeButton onClick={handleDecrementLikes}>
            <AiFillDislike />
          </LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => handleDeleteTodo(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
