import { makeExecutableSchema } from "@graphql-tools/schema";
import { foodTypeDefs } from "./typeDefs/foodTypeDefs";
import { foodResolvers } from "./resolvers/foodResolvers";

export const schema = makeExecutableSchema({
  typeDefs: [foodTypeDefs],
  resolvers: [foodResolvers],
});
