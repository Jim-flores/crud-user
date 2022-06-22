import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'
import axios from 'axios'
import CardMovie from './components/CardMovie'
import Form from './components/Form'

const URL = `https://users-crud1.herokuapp.com/users/`
function App() {

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()
  const { register, handleSubmit, reset } = useForm();
  const getAllusers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getAllusers()
  }, [])
  const createMovie = newMovie => {
    axios.post(URL, newMovie)
      .then(res => {
        console.log(res.data)
        getAllusers()
      })
      .catch(err => console.log(err))
  }
  const updateMovieById = (id, updateMovie) => {
    axios.patch(`${URL}${id}/`, updateMovie)
      .then(res => {
        console.log(res.data)
        getAllusers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }
  const showForm = () => {
    const obj = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }
  return (
    <div className="App">
      <div>
        <button onClick={showForm}>{isShowForm ? 'Ocultar' : 'Crear'}</button>
      </div>
      <div>
        {
          isShowForm && 
          <Form 
            createMovie = {createMovie}
            updateMovieById = {updateMovieById}    
            objectUpdate = {objectUpdate}
            handleSubmit = {handleSubmit}
            reset = {reset}
            register = {register}
          />
        }
      </div>
      {
        users?.map(user => (
          <CardMovie
            key={user?.id}
            user = {user}
            getAllusers = {getAllusers}
            URL = {URL}
            setObjectUpdate = {setObjectUpdate}
            setIsShowForm = {setIsShowForm}
            reset = {reset}
          />
        ))
      }
    </div>
  )
}

export default App
