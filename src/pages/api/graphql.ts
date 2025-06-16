import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@/graphql/schema";

const server = new ApolloServer({ schema });
const handler = startServerAndCreateNextHandler(server);

export default handler;
