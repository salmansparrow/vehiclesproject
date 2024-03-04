import FooterPage from "@/components/Footer/Footer";
import MainNavbar from "@/components/MainNavbar/Navbar";
import AboutUs from "@/components/about/About";
import ServicesPage from "@/components/services/Services";



function HomePage(){
  return <>
  
    <MainNavbar/>

  <ServicesPage/>

  <AboutUs/>
    
  <FooterPage />

    

  </>
}

export default HomePage;