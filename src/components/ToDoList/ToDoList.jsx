import { Grid, GridItem, Text, Todo } from "components";
import { useSelector } from "react-redux";
import { selectTodosList } from "redux/selectors";

export const ToDoList = () => {
  const todos = useSelector(selectTodosList);

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&

          todos.map(({id, text, likes}, index) => (
            
            <GridItem key={id}>
              <Todo
                id={id}
                text={text}
                counter={index + 1}
                likes={likes}
                // onClick={this.deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
