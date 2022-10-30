import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

import S_meta from "./S_meta";
import { Edit, RemoveRedEye } from "@material-ui/icons";
import { Link } from "react-router-dom";
//SingleProduct
export default function S_single({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <S_meta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
           
          <Link className="nav-item addbutton" to="/Edit Product">
            <ProductActionButton >
            
              <Tooltip placement="left" title="Edit this product">
                <Edit color="primary" />
              </Tooltip>
            </ProductActionButton>
            </Link>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="View this Product">
                <RemoveRedEye color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      
      <ProductDetailDialog product={product} />
    </>
  );
}
