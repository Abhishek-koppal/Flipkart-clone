import { InputBase,Box,styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer=styled(Box)`
    background: #fff;
    width:38%;
    margin-left:10px;
    border-radius:2px;
    display:flex;
`
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:parent;
`
const SearchIconWrapper=styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const Search=()=>{
    const [ text, setText ] = useState();
    const [  setOpen ] = useState(true)

    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    return(
        <SearchContainer>
        <InputSearchBase placeholder="Search for products,brands and more" onChange={(e)=>getText(e.target.value)}value={text}/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text && 
                <ListWrapper>
                    {
                        products.filter(products=>products.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link
                                to={`/product/${product.id}`}
                                onClick={()=>setText('')}
                                style={{textDecoration:'none',color:'inherit'}}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
        }
        </SearchContainer>
    )
}

export default Search;