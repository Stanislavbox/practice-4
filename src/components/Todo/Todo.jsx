import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import {
  DeleteButton,
  TodoWrapper,
  LikeButton,
  EditButton,
  EditInput,
} from './Todo.styled';
import { decrementLikes, deleteTodo, editToDo, incrementLikes } from 'redux/todo-slice';
import { useDispatch } from 'react-redux';
import {
  AiFillDislike,
  AiFillLike,
  AiFillEdit,
  AiFillSave,
} from 'react-icons/ai';
import { useState } from 'react';

export const Todo = ({ text, counter, id, likes }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();
  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleIncrementLikes = () => {
    dispatch(incrementLikes(id));
  };

  const handleDecrementLikes = () => {
    dispatch(decrementLikes(id));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    dispatch(editToDo({id, query}))
    setIsEdit(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{isEdit ? <EditInput onChange={handleChange} defaultValue={text}/>:<>{text}</> }</Text>
        {isEdit ? (
          <EditButton onClick={handleSave}>
            <AiFillSave size={24} />
          </EditButton>
        ) : (
          <EditButton onClick={handleEdit}>
            <AiFillEdit size={24} />
          </EditButton>
        )}

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
