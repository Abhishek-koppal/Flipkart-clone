import { Box,styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import Midslide from './Midslide'
import MidSection from "./MidSection";

const Component=styled(Box)`
    padding:10px 10px;
    background:#f2f2f2;
`

const Home=()=>{

    const {products}=useSelector(state=>state.getProducts)
    console.log(products);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
        <NavBar/>
        <Component>
            <Banner/>
            <Midslide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You"/>
            <Slide products={products} title="Suggesting Items"/>
            <Slide products={products} title="Top Selection"/>
            <Slide products={products} title="Trending Offers"/>
        </Component>
        </>
    )
}

export default Home;