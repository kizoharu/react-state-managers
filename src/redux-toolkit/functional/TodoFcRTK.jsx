import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import styles from '../../styles/Todo.module.scss'
import { delTodo, loadTodo, postTodo, putTodo } from '../store/reducers/todos-action-thunk';
import { getTodos } from '../store/selectors/todos-selector';

const TodoFcRTK = () => {
  const dispatch = useDispatch()
  const todos = useSelector(getTodos)

  // const [filter, setFilter] = useState({sort:'', query: ''})
  // const sortedAndSearchedItems = useFilters(todos, filter.sort, filter.query)

  useEffect(() => {
    dispatch(loadTodo())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleChange = (todo, row) => {
    let data
    if(row === 'title') {
      let pr = prompt()
      data = {...todo, title: (pr === null ? '' : pr)}
    } else if (row === 'completed') {
      data = {...todo, completed: !todo.completed}
    }
    dispatch(putTodo(data))
  }


  return (
    <div className={styles.todo}>
      {/* <Filter filter={filter} setFilter={setFilter}/> */}

      <List 
        data={todos} 
        deleteItem={(id) => dispatch(delTodo(id))} 
        changeItem={handleChange} 
        refresh={() => dispatch(loadTodo())} 
        postTodo={() => dispatch(postTodo())}
      />
    </div>
  );
};

export default TodoFcRTK;