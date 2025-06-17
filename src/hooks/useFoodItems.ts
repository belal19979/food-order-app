import { gql, useQuery } from "@apollo/client";

import { GetFoodItemsResponse } from "@/types/food";

const GET_FOOD_ITEMS = gql`
  query GetFoodItems {
    foodItems {
      id
      name
      price
      description
      image
    }
  }
`;

export const useFoodItems = () => {
  const { data, loading, error } =
    useQuery<GetFoodItemsResponse>(GET_FOOD_ITEMS);

  return {
    foodItems: data?.foodItems ?? [],
    loading,
    error,
  };
};
