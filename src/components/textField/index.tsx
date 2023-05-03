import { SearchSvg } from "../../assets/svgs";
import "./index.css"

const TextField = ({variant}:{variant : "search" | "email"}) => {
    switch (variant) {
        case "search":
            return ( 
                <div  className="w-456 flex gap-2 h-12">
                    <input className="w-96 h-12 rounded-full outline-none border py-3 px-6 border-F4F4F4 placeholder:text-C8C9CB" placeholder="Search" type="text" />
                    <button className="bg-primary flex items-center justify-center h-12 rounded-full w-12"><SearchSvg/></button>
                </div>
             );
        case "email" :
            return (
                <div className="w-full gap-8 flex">
                    <input className="h72 bg-secondery text-white flex-grow rounded-full outline-none border py-6 px-11 border-346654 placeholder:text-648A7C" placeholder="Email Address" type="email" />
                    <button className="bg-primary flex items-center py-6 px-11 justify-center h72 rounded-full w-52">Reveal coupon</button>
                </div>
            )
    }
}
 
export default TextField;