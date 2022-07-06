import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import styles from '../../styles/Todo.module.scss'
import { axiosAddTodo, axiosChangeTodo, axiosDeleteTodo, axiosRefresh} from '../store/actions/todos-action';
import { getTodos } from '../store/selectors/todos-selector';

const TodoFcRdxSaga = () => {
  const dispatch = useDispatch()
  const todos = useSelector(getTodos)

  // const [filter, setFilter] = useState({sort:'', query: ''})
  // const sortedAndSearchedItems = useFilters(todos, filter.sort, filter.query)

  useEffect(() => {
    dispatch(axiosRefresh())
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
    dispatch(axiosChangeTodo(data))
  }


  return (
    <div className={styles.todo}>
      {/* <Filter filter={filter} setFilter={setFilter}/> */}

      <List 
        data={todos} 
        deleteItem={(id) => dispatch(axiosDeleteTodo(id))} 
        changeItem={handleChange} 
        refresh={() => dispatch(axiosRefresh())} 
        postTodo={() => dispatch(axiosAddTodo())}
      />
    </div>
  );
};

export default TodoFcRdxSaga;