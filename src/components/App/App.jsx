// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
// import { useLocalStorage } from '../../hooks/useLocalStorage';

export const App = () => {
  // const [todos, setTodos] = useLocalStorage('todos', []);
  const todos = useSelector(state => state.todos);
  // const addTodo = text => {
  //   const todo = {
  //     // id: nanoid(),
  //     text,
  //   };

  //   setTodos(state => [...state, todo]);
  // };

  // const handleSubmit = data => {
  //   addTodo(data);
  // };

  // const deleteTodo = id => {
  //   setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
