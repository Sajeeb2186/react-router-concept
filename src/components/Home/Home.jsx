import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";



export default function Home() {
  return (

   <div>
     
     <Header></Header>
     
     <Outlet></Outlet>

     <Footer></Footer>
      
    


   </div>
   

    


  )
}
