import { BagSvg } from "../../assets/svgs";
import TextField from "../../components/textField";

const Header = () => {
    return ( 
        <div>
            <div className="bg-secondery h-9 flex gap-4 items-center justify-center text-sm font-normal text-white">
                <span className="opacity-70">LIMITED OFFER : 30% OFF. Use RABBIT30 at Checkout.</span>
                <span>23 : 15 : 00</span>
            </div>
            <div className="container m-auto">
                <div className="grid grid-cols-3 items-center py-3 px-16">
                    <img src="Logo.png" alt="" />
                    <div className="justify-self-center"><TextField variant="search"/></div>
                    <div className="h-6 flex gap-6 items-center justify-self-end">
                        <button className="text-sm font-normal">Your Account</button>
                        <span className="border h-3 border-C8C9CB"></span>
                        <button><BagSvg/></button>
                    </div>
                </div>
                <div className="px-44 py-4 flex gap-10 border-y border-y-F4F4F4">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
     );
}
 
export default Header;