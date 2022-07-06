import React, {  useEffect, useState } from 'react';
import styles from '../../styles/Todo.module.scss'
import { observer } from 'mobx-react-lite';
import todoStore from '../store/todo';
import List from '../../components/List';
import Filter from '../../components/Filter';
import { useFilters } from '../../hooks/useFilters';

const TodoFcMob = observer(() => {
  // const [filter, setFilter] = useState({sort: '', query: ''})
  // const sortedAndSearchedItems = useFilters(todoStore.todos, filter.sort, filter.query)

  useEffect(() => {
    todoStore.refresh()
  }, [])

  

  return (
    <div className={styles.todo}>
      {/* <Filter filter={filter} setFilter={setFilter}/> */}

      <List 
        data={todoStore.todos} 
        // data={sortedAndSearchedItems} 
        deleteItem={todoStore.deleteTodo} 
        changeItem={todoStore.changeTodo} 
        refresh={todoStore.refresh} 
        postTodo={todoStore.addTodo}
      />

    </div>
  );
});

export default TodoFcMob;

