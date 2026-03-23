import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '15b5989ae1db16ce19d27056234b9dbc4903d514', queries,  });
export default client;
  