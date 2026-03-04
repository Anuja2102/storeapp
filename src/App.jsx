import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Header from './Componant/Templates/Header'
import AddProduct from './Componant/Products/AddProduct'
import ViewProduct from './Componant/Products/ViewProduct'
import EditProduct from './Componant/Products/EditProduct'


function App() {
  

  return (
    <>
    <BrowserRouter>
        <Header></Header>
           <Routes>
              <Route path='/addproduct' element ={<AddProduct></AddProduct>}></Route>
               <Route path='/viewproduct' element ={<ViewProduct></ViewProduct>}></Route>
               <Route path='/editProduct/:id' element={<EditProduct></EditProduct>}></Route>
           </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
