import { CoinSvg, SafeHomeSvg, TruckSvg } from "../../assets/svgs";
import BestCard from "../Card/best";
import Button from "../button";
import "./index.css"

const HomeBest = () => {
    return ( 
        <>
        <div className=" homeBest flex justify-center">
            <div className="container max-w-7xl my-28 flex">
                <div>
                    <h4 className="text-F2BC1B text-base font-normal">BEST SELLER</h4>
                    <h1 className="text-6xl mt-4 max-w-2xl mb-6 font-semibold text-white">BEST DISPENSARY TO BUY WEED ONLINE </h1>
                    <h3 className="text-2xl font-normal text-F4F4F4">Vitamins & Supplements</h3>
                    <p className="flex gap-8 mb-10 mt-28 items-center">
                        <span className="text-2xl text-white font-medium">Get 25% off</span>
                        <span className="border h-3 border-C8C9CB"></span>
                        <span className="text-2xl text-white font-medium">Free Shipping</span>
                    </p>
                <Button className="py-5 px-14">Shop All</Button></div>
                <div className="h-full relative w-2/4">
                    <button><img className="absolute top-12 right-48" src="product1.png" alt="" /></button>
                    <button><img className="absolute bottom-4 left-10" src="product2.png" alt="" /></button>
                    <button><img className="absolute bottom-8 -right-4" src="product3.png" alt="" /></button>
                </div>
                
            </div>
        </div>
        <div className=" bg-F2F6F4">
            <div className="container m-auto p-20 grid grid-cols-3">
            <BestCard icone={<TruckSvg className="w-14 h-14"/>} title="Reliable Shipping" desc="Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!"/>
            <BestCard icone={<SafeHomeSvg className="w-14 h-14"/>} title="You’re Safe With Us" desc="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency."/>
            <BestCard icone={<CoinSvg className="w-14 h-14"/>} title="Best Quality & Pricing" desc="Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely"/>
            </div>
        </div>
        </>
     );
}
 
export default HomeBest;