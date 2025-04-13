import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomeSection from '../components/WelcomeSection'
import CarouselWrapper from '../components/CarouselWrapper'

function Home() {

    return (
      <div className="container main-layout min-h-screen ">
        <Header />
        <WelcomeSection />
        <Navbar />
        <CarouselWrapper />
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home