import React, { Component, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { nanoid } from '@reduxjs/toolkit';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todo-slice';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const todo = {
      id: nanoid(),
      text: query,
    };

    dispatch(addTodo(todo))
    setQuery('');
  };

  // const { query } = this.state;

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
