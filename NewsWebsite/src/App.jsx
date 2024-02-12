import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NewsList from './components/listNews/ListNews'
import Form from './components/form/Form'

function App() {
	return   (
    <GlobalProvider>
  	  	<BrowserRouter>
            <Header/>
		  		        <Routes>
			  		          <Route path="/" element={<Home />} />
                      <Route path="/list" element={<NewsList/>}/>
                      <Route path="/form" element={<Form/>}/>
				          </Routes>
            <Footer/>
		    </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
/*
<Route path="/task/:_id" element={<EditTask />} />
			<GlobalProvider>
			</GlobalProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/