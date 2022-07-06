import ListItem from './ListItem';
import styles from '../styles/List.module.scss'

const List = ({data, deleteItem, changeItem, refresh, postTodo}) => {

  return (
    <div className={styles.list}>
      {/* <Filter /> */}
      
      {data.length 
        ? data.map(item => 
          <ListItem  
            key={item.id} 
            item={item} 
            deleteItem={deleteItem}
            changeItem={changeItem}
          />
        )
        : <div>Not found...</div>
      }
      <div className={styles.btn}>
        <button onClick={() => refresh()}>Refresh</button>
        <button onClick={() => postTodo()}>Add</button>
      </div>
    </div>
  );
};

export default List;