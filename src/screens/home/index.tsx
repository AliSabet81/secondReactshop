import ProductCard from "../../components/Card/productCard/index"
import HomeBest from "../../components/homeBest";
import HowToOrderOnline from "../../components/howToOrderOnline";
import SwiperComponent from "../../components/swiper/homeBest";


const HomeScreen = () => {
    return ( 
        <div className="mb-96">
            <HomeBest/>
            <div className="grid items-center justify-center">
            
            <ProductCard img={"product1.png"} title={"asdfghjkjhgfds"} score={4.6} reviews={155} price={200} variant={"standard"}/>
            </div>
            <HowToOrderOnline/>
            <SwiperComponent/>
        </div>
     );
}
 
export default HomeScreen;