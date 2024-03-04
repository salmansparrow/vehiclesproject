import FooterPage from "@/components/Footer/Footer";
import MainNavbar from "@/components/MainNavbar/Navbar";
import AboutUs from "@/components/about/About";
import KeepUpdate from "@/components/keepupdate/keepupdate";
import ServicesPage from "@/components/services/Services";



function HomePage(){
  return <>
  
    <MainNavbar/>

  <ServicesPage/>

  <AboutUs/>
  

  <KeepUpdate/>
    
  <FooterPage />
  </>
}

export default HomePage;