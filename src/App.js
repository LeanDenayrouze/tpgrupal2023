import './App.css'
import Form from './componentes/Form';
import Page from './componentes/page';
import Register from './componentes/register';

import { BrowserRouter , Route , Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Form />}/>
      <Route path='/register' element={<Register/>}/> 
      <Route path='/page' element={<Page/>}/> 
     </Routes>
    </BrowserRouter>
  )
}
export default App;
