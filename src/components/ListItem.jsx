import React from 'react';
import styles from '../styles/ListItem.module.scss'

const ListItem =  ({item, deleteItem, changeItem}) => {
  // console.log(deleteItem);
  // console.log(item);

  return (
    <div className={styles.listItem}>

        {item.id}. {item.title} 
        <input type="checkbox" defaultChecked={item.completed} onChange={() => changeItem(item, 'completed')}></input>
        <button onClick={() => changeItem(item, 'title')} className={styles.edit}>Edit</button>
        <button onClick={() => deleteItem(item.id)} className={styles.del}>Del</button>
        
    </div>
  );
};

export default ListItem;