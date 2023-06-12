import './App.scss';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home2 from "./components/Home2";
import School from "./components/school/School";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={ <Hero/>}/>
                <Route path={"/school"} element={ <School/>}/>
                <Route path={"/we"} element={ <Home2/>}/>
            </Routes>
            <Footer/>
        </div>
)
}
export default App;
