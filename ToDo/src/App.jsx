
import './App.css'
import Form from './components/Form'
import Main from './components/Main'
import './index.css'
const style = {
  bg:`h-screen w-screen bg-gradient-to-r from-pink-300 to-blue-800 flex flex-col justify-center items-center`,
  container:`h-96 w-96 bg-gradient-to-b from-slate-300 to-slate-500 backdrop-blur-md rounded-lg flex justify-center items-center`,
}
const App = () => {
  return (
    <>
      <div className={style.bg}>
        <div className = 'form-container '>
          <Form/>
        </div>
        <div className={style.container}>
          <Main/>
        </div>
      </div>
    </>
  )
}

export default App
