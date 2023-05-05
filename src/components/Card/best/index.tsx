import { ReactElement } from "react";

interface IBestCard {
    title : string,
    desc : string,
    icone : ReactElement
}
const BestCard = (props : IBestCard) => {
    return ( 
        <div className="flex gap-6">
                <button className="w-24 h-24 flex justify-center items-center rounded-full bg-white">{props.icone}</button>
                <div className="flex flex-col gap-4 w-72">
                    <h2 className="font-medium text-4xl">{props.title}</h2>
                    <p className="text-base font-normal text-717378">{props.desc}</p>
                </div>
            </div>
     );
}
 
export default BestCard;
