export const PRODUCTS_QUERY = `
query {
  products {
		data {
      attributes {
        name
        description
        price
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!) {
    products(filters: {slug: {eq: $slug}}) {
      data {
        attributes {
          name
          description
          price
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY_QUERY = `
query getProductByCategory($category = String!){
  products(filters: {category: {eq: $category}}) {
		data {
      attributes {
        name
        description
        price
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;
