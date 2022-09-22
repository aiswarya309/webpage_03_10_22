import Home from "../../component/Home/home"
import Details from '../../component/Description/description';
import Contact from '../../component/Contact/contact';
function PageHome(){
    return(
        <div>
            <Home/>
            <Details/>
            <Contact/>
        </div>
    )
}
export default PageHome