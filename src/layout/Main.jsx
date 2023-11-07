import { Outlet } from "react-router-dom";
import Nabvar from "../share/navbar/Nabvar";
import Footer from "../share/footer/Footer";

const Main = () => {
    return (
        <div className="bg-white w-full lg:w-11/12 m-auto">
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;