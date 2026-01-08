export default {
  routes: [
    {
      method: "GET",
      path: "/stats",
      handler: "stats.index",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
