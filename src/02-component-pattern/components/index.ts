import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductsButtons";
import { ProductImage } from "./ProductImage";

export { ProductButtons } from "./ProductsButtons";
// export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage,
});

export default ProductCard;
