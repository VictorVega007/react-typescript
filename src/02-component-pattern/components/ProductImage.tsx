import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

// eslint-disable-next-line react/prop-types
export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if ( img ) {
    imgToShow = img;
  } else if ( product.img ) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={ imgToShow } alt="Product Image" />
  );
};