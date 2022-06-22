import React from 'react'
import axios from 'axios'
const CardMovie = ({user, getAllusers, URL, setObjectUpdate, setIsShowForm, reset}) => {
  const deleteMovie = id => {
    axios.delete(`${URL}${id}/`)
        .then(res => {
            console.log(res.data)
            getAllusers()
        })
        .catch(err => console.log(err))
  }
  const updateMovie = () => {
    setIsShowForm(true)
    const obj = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        birthday: user.birthday
    }
    reset(obj)
    setObjectUpdate(user)
  }
  return (
    <article className='card'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><b>Email: </b>{user.email}</li>
            <li><b>Birthday: </b>{user.birthday}</li>
        </ul>
        <button onClick={() => deleteMovie(user.id)}>❌ Delete</button>
        <button onClick={() => updateMovie(user.id)}>🔄 Update</button>
    </article>
  )
}

export default CardMovie