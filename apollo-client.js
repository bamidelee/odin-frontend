import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://odin-backend.vercel.app",
    cache: new InMemoryCache(),
});

export default client;