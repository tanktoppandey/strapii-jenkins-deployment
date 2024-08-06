module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-posts/blogid/:blogid",
      handler: "custom.findByName",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
