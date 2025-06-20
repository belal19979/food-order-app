import { gql } from "graphql-tag";

export const foodTypeDefs = gql`
  type FoodItem {
    id: String!
    name: String!
    slug: String!
    description: String!
    price: Float!
    category: String!
    image: String!
  }

  type Query {
    foodItems: [FoodItem!]!
  }
`;
