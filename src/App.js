import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Component/Header';
import Footer from './Component/Footer';
import {Routes,Route,Navigate} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import HomeComponent from './pages/HomeComponent';
import ProductDetails from './pages/ProductDetails';
import ProductForm from './pages/ProductForm';
import ProductTable from './pages/ProductTable';
import MainNavBar from './Component/MainNavBar';
function App() {
  return (
   <div>
     <Header></Header>
        <MainNavBar></MainNavBar>
        <Routes>
           <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
           <Route path="/home" element={<HomeComponent/>}></Route>
           <Route path="/table" element={<ProductTable/>}>
               <Route path=":id" element={<ProductDetails/>}></Route>
           </Route>
           <Route path="/form" element={<ProductForm/>}></Route>
           <Route path="/aboutus" element={<AboutUs/>}></Route>
           <Route path="**" element={<Navigate replace to="/home"></Navigate>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
