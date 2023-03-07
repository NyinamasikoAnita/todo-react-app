import {BrowserRouter,Routes,Route}from "react-router-dom"
import MyForm from './forms/input';
import './App.css';
import MyTextarea from './forms/textarea';
import MySelect from './forms/select';
import Layout from './forms/layout';
import Todolist from './To-do-list-app/todo';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}> 
      
        <Route index element={<MyForm/>}/> 
        <Route path="textarea" element={<MyTextarea/>}/>
        <Route path="myselect" element={<MySelect/>}/>
        <Route path="todolist" element={<Todolist/>}/>
      
      </Route >
      </Routes>
      </BrowserRouter>
       
    </div>
    
  );

  
}

export default App;
