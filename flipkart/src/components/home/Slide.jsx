import { Box, Button, Divider, styled, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Component=styled(Box)`
    margin-top:10px;
    background:#fff;
  `
  const Deal=styled(Box)`
    padding:15px 20px;
    display:flex;
  `
  const TImer=styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f;
  `
  const DealText=styled(Box)`
    font-size:22px;
    margin-right:25px;
    font-weigth:600;
    line-height:32px;
  `
  const ViewAll=styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weigth:600;
  `
  const Image=styled('img')({
    width:'auto',
    height:150
  })

  const Text=styled(Typography)`
    font-size:14px;
    margin-top:5px;
  `



const Slide=({products,title,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds}Left</Box>
    }

    return(
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                  timer&&
                    <TImer>
                      <img src={timerURL} style={{width:24}} alt="timer" />
                      <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                    </TImer>
                }
                <ViewAll variant='contained' color='primary'>View All</ViewAll>
            </Deal>
            <Divider/>
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                centerMode={true}
              >
                {
                    products.map(product=>(
                      <Link to={`product/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
                        <Box textAlign='center' style={{padding:'25px 15px'}}>
                            <Image src={product.url} alt="product" />
                            <Text style={{color:'212121',fontWeight:600}}>{product.title.shortTitle}</Text>
                            <Text style={{color:'green'}}>{product.discount}</Text>
                            <Text style={{color:'212121',opacity:.6}}>{product.tagline}</Text>
                        </Box>
                      </Link>  
                    ))
                }

            </Carousel>
        </Component>    
    )
}

export default Slide;