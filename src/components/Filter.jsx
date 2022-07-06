import React from 'react';
import Input from './Input';
import Selector from './Selector';
import styles from '../styles/Filter.module.scss'

const Filter = ({filter, setFilter}) => {
  // console.log(filter);
  return (
    <div className={styles.listHeader}>
      <Input 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder=' find...' 
      />
      <Selector
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Sort'
        options={[
          {value: 'title', name: 'By name'},
          {value: 'completed', name: 'By checkbox'},
        ]}
      />
    </div>
  );
};

export default Filter;