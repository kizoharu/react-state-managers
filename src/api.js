import axios from 'axios'

export const getAllData = async () => {
  const {data} = await axios.get(`http://localhost:3001/todos`)
  return data
    
}

export const postData = async (post) => {
  const {data} = await axios.post(`http://localhost:3001/todos`, post)
  // console.log('data', data);
  // console.log('post', post);
  return  await data
    
}


export const putData = async (put) => {
  const {data} = await axios.put(`http://localhost:3001/todos/${put.id}`, put)
  // console.log('data', data);
  // console.log('put', put);
  return  await data
    
}


export const deleteData = async (id) => {
  // console.log('id',id);
  const {data} = await axios.delete(`http://localhost:3001/todos/${id}`)
  return  await data
    
}