import { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children}:{children:ReactElement}) => {
    return ( 
        <div>
            <Header/>
            <main>{children}</main>
            <Footer></Footer>
        </div>
     );
}
 
export default Layout;