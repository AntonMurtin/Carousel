import './App.css'
import Carousel from './components/Carousel';
import data from './config/data'

function App() {

  console.log(data);
  return (
    <>
      <div className="app">
        <div className="content">
          <h1>image caruosel</h1>
          
            {<Carousel data={data} />}

          
        </div>
      </div>
    </>
  )
}

export default App
