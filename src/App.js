import styles from "./Style";
import { Navbar, Intro, Portfolio, Services, Footer, Contact } from "./Components"
import useNavbarVisibility from "./function/useNavbarVisibility";

const App = () => 
{
  const scrolling = useNavbarVisibility();
  return (
    <div className="bg-gradient-to-br from-teal-200 to-cyan-200 w-full overflow-hidden">
      <div className={`${styles.flexCenter} h-16`}>
        <div className={`${styles.navContainer} ${styles.flexCenter} ${styles.NavPadding} ${scrolling ? "bg-teal-300 " : "bg-transparent "} transition-all duration-1000 `}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Intro />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Portfolio />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default App;
