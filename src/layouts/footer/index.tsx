import Cta from "./Cta";
import Foter from "./foter";
import "./index.css"
const Footer = () => {
    return ( 
        <div className="relative mt-80 footer flex flex-col items-center">
            <Cta/>
            <Foter/>
        </div>
     );
}
 
export default Footer;