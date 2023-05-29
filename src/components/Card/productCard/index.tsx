import { Button } from "@mui/material"
import { FillStarSvg } from "../../../assets/svgs"

interface IProductCard {
    img : string
    category ?: string
    title : string 
    score : number
    reviews : number
    price : number
    discount ?: number 
    variant : "standard" | "outOfStock" | "discount"
}

const ProductCard = (props : IProductCard) => {
    const Price = () =>{
        switch (props.variant) {
            case "standard":
                return (
                    <div>
                        <span className="text-base font-normal text-EB2606">{`$${props.price}`}</span>
                        <span className="text-sm font-light text-C8C9CB">/grap</span>
                    </div>
                )
            default:
                return (
                    <div>
                        <span className="text-sm line-through font-light text-C8C9CB">{props.price}</span>
                        <span className="text-base font-normal text-EB2606">{props.price}</span>
                    </div>
                );
        }
    }
    return ( 
        <div className="w-72 flex flex-col gap-6">
            <img src={props.img} alt="" />
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-light text-9D9EA2">{props.category}</span>
                    <h3 className="text-lg font-normal text-opacity-90">{props.title}</h3>
                    <div>
                        <FillStarSvg/>
                        <span className="text-sm font-normal">{`${props.score}/5`}</span>
                        <span className="text-sm font-normal">{props.reviews}</span>
                        <span className="text-sm font-normal text-C8C9CB">Reviews</span>
                    </div>
                </div>
                <div>
                    {Price()}
                </div>
                <div>
                    <input type="radio" value="28g" name="weight" id="" />
                    <input type="radio" value="1/2lb" name="weight" id="" />
                    <input type="radio" value="1/4lb" name="weight" id="" />
                </div>
                {/* <Button className="">Add to Cart</Button> */}
                <Button color="success" variant="contained">Add to Cart</Button>
            </div>
        </div>
     );
}
 
export default ProductCard;