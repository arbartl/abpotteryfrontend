import Head from "next/head";
import Link from "next/link";
import { useQuery } from "urql";
import { GET_PRODUCTS_BY_CATEGORY_QUERY, PRODUCTS_QUERY } from "../lib/query";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";
import { useState, useEffect } from "react";

function Store() {
  const [category, setCategory] = useState("All");
  const [results, reexecuteQuery] = useQuery({ query: PRODUCTS_QUERY });
  const { data, error, fetching } = results;

  if (error) return <p>Error fetching products: {error.message}</p>;
  if (fetching) return <p>Loading...</p>;

  const products = data.products.data;

  if (!products) return <p>No products currently available!</p>;

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </>
  );
}

export default Store;
