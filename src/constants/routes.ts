const routes = {
  home: "/",
  explore: "/explore",

  posts: {
    all: "/posts",
    create: "/posts/create",
    bookmarked: "/posts/bookmarked",
    liked: {
      all: "/posts/liked",
    },
    readPosts: {
      all: "/read-posts",
    },
  },
  account: {
    view: "/account/view",
  },
};

export default routes;
