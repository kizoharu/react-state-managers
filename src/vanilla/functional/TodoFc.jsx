import React, { useCallback, useEffect, useState } from 'react';
import { deleteData, getAllData, postData, putData } from '../../api';
import Filter from '../../components/Filter';
import List from '../../components/List';
import { useFilters } from '../../hooks/useFilters';
import styles from '../../styles/Todo.module.scss'

const TodoFc = () => {
  const [todo, setTodo] = useState([])
  const [filter, setFilter] = useState({sort:'', query: ''})
  const sortedAndSearchedItems = useFilters(todo, filter.sort, filter.query)

  const refresh = useCallback(() => 
    getAllData().then(res => setTodo(res))
  , [])

  useEffect(() => {
    refresh()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addTodo = () => {
    // event.preventDefault();
    const data = postData({title: prompt(), completed: false})
    data.then(res => setTodo([...todo, res]))
  }

  const deleteTodo = id => {
    deleteData(id)
    setTodo(todo.filter(p => p.id !== id))
  } 

  const changeTodo = (put, row) => {
    let data
    if(row === 'title') {
      let pr = prompt()
      data = {...put, title: (pr === null ? '' : pr)}
    } else if (row === 'completed') {
      data = {...put, completed: !put.completed}
    }
    
    putData(data)
    setTodo(todo.map(p => {
      if(p.id === data.id) {
        p = data
        return p
      }
      return p
    }))
  }

  return (
    <div className={styles.todo}>
      <Filter filter={filter} setFilter={setFilter}/>

      <List 
        data={sortedAndSearchedItems} 
        deleteItem={deleteTodo} 
        changeItem={changeTodo} 
        refresh={refresh} 
        postTodo={addTodo}
      />

    </div>
  );
};

export default TodoFc;