import { Link } from "react-router-dom"
import { RouteType } from "../../../Routes"
import { SubMenuSvg } from "../../../assets/svgs";
import "./index.css"
const Navmenu = (i:RouteType) =>{
    return (
      <div className="relative">
        <button className="flex border-b menu py-4 border-white hover:border-b-primary items-center gap-2">
          {i.name}
          <SubMenuSvg/>
          <div className="absolute submenu flex-col top-8 bg-white p-3 rounded-lg w-40 gap-2 shadow-lg hidden">
              {i.children?.map((e)=><Link key={e.path} to={e.path}>{e.name}</Link>)}
          </div>
        </button>
      </div>
    );
} 
export default Navmenu