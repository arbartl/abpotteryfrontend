import styled from "styled-components";
import { ProductStyles } from "../styles/ProductStyle";
import Link from "next/link";

function Product({ product }) {
  const { name, description, price, slug, image } = product.attributes;
  const urlRegex = /(\/upload)(\/)[\w]+(\/)/;
  const imgUrl = image.data.attributes.formats.small.url;

  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <h2>{name}</h2>
      <h3>${price.toFixed(2)}</h3>
    </ProductStyles>
  );
}

export default Product;
