/**
 * A set of functions called "actions" for `stats`
 */

export default {
  async index(ctx) {
    const [products, customers, technology, blogs] = await Promise.all([
      strapi.documents("api::product.product").count({}),
      strapi.documents("api::customer.customer").count({}),
      strapi.documents("api::technology.technology").count({}),
      strapi.documents("api::blog.blog").count({
        filters: { publishedAt: { $notNull: true } },
      }),
    ]);

    ctx.body = {
      products,
      customers,
      technology,
      blogs,
    };
  },
};
