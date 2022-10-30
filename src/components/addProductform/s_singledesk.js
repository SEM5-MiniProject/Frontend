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
import { Edit, RemoveRedEye, ViewAgenda, ViewArray } from "@material-ui/icons";
import { useUIContext } from "../../context/ui";
import Form from "./Form";
import { Link, Route } from "react-router-dom";
//SingleProductDesktop
export default function S_sdesk({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);
    const { setFirst } = useUIContext();
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
        
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
          <Link className="nav-item addbutton" to="/Edit Product">
            <ProductActionButton >
            
              <Tooltip placement="left" title="Edit this product">
                <Edit color="primary" />
              </Tooltip>
            </ProductActionButton>
            </Link>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="View Details">
                <RemoveRedEye color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <S_meta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}
