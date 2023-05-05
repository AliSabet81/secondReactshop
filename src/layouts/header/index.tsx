import { Link } from "react-router-dom";
import { BagSvg } from "../../assets/svgs";
import TextField from "../../components/textField";
import { menuRoutes } from "../../Routes";
import Navmenu from "./submenu";
const Header = () => {
    const Filter = () => {
        return menuRoutes.filter((route)=>route.variant?.includes('nav')).map((i)=> i.children ? Navmenu(i) : <Link className="border-b border-white hover:border-b-primary" to={i.path}>{i.name}</Link>)
    }
    return ( 
        <div className="shadow">
            <div className="bg-secondery h-9 flex gap-4 items-center justify-center text-sm font-normal text-white">
                <span className="opacity-70">LIMITED OFFER : 30% OFF. Use RABBIT30 at Checkout.</span>
                <span>23 : 15 : 00</span>
            </div>
            <div className="container m-auto">
                <div className="grid grid-cols-3 items-center py-3 px-16">
                    <Link to={"/"}><img src="Logo.png" alt="" /></Link>
                    <div className="justify-self-center"><TextField variant="search"/></div>
                    <div className="h-6 flex gap-6 items-center justify-self-end">
                        <button className="text-sm font-normal">Your Account</button>
                        <span className="border h-3 border-C8C9CB"></span>
                        <button><BagSvg/></button>
                    </div>
                </div>
                <div className="px-44 py-4 flex gap-16 border-y justify-center border-y-F4F4F4">
                    {Filter()}     
                </div>
            </div>
        </div>
     );
}
 
export default Header;