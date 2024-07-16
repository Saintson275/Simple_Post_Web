import AddPostForm from "./components/AddPost";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create-post' element={<AddPostForm/>}/>
      </Routes>
    </Router>
  )
}

export default App;
