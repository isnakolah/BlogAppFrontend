import { QueryParam } from "../types/QueryParam";

const BASE =
  process.env.REACT_APP_BASE_URI || window.location.origin + "/api/v1";

const uris = {
  user: {
    getSingleUser: `{BASE}/user`,
    createUser: `{BASE}/user`,
  },

  blogPost: {
    getPaginatedBlogPosts: `${BASE}/blogPost`,
  },

  author: {
    getPaginatedAuthorBlogPosts: `{BASE}/blogPost`,
    createBlogPost: `{BASE}/blogPost`,
  },
  sex: {
    getAllSexes: `{BASE}/sex`,
  },

  addQueryParams(uri: string, queryParams: QueryParam[]): string {
    const query = new URLSearchParams(uri);

    queryParams.forEach((queryParam) =>
      query.append(queryParam.name, queryParam.value)
    );

    return query.toString();
  },
};

export default uris;
