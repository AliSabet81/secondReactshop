import { Link } from "react-router-dom"
import { RouteType } from "../../../Routes"
import React from "react";
import { SubMenuSvg } from "../../../assets/svgs";

const Navmenu = (i:RouteType) =>{
    const [menuIsOpen, setMenuIsOpen] = React.useState<boolean>(false);
    const handleClick = () => {
      setMenuIsOpen(!menuIsOpen);
    };
    return (
      <div className="relative">
        <button onClick={handleClick} className="flex border-b border-white hover:border-b-primary items-center gap-2">
          {i.name}
          <SubMenuSvg/>
        <div className={menuIsOpen ? "flex absolute flex-col top-8 bg-white p-3 rounded-lg w-40 gap-2 shadow-lg" : "hidden"}>
            {i.children?.map((e)=><Link onClick={handleClick} to={e.path}>{e.name}</Link>)}
        </div>
        </button>
      </div>
    );
} 
export default Navmenu