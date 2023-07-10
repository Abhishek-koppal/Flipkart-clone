import { Box, styled } from "@mui/material"
import Slide from "./Slide"

const Component = styled(Box)`
    display: flex;
`
const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 5,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const Midslide=({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer}/>

            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{width:250,height:333}} />
            </RightComponent>
        </Component>
    )
}

export default Midslide;