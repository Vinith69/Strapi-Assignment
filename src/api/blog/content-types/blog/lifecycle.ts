export default {
  async beforeUpdate(event: any) {
    const { data, where } = event.params;

    // Only when attempting to publish
    if ("publishedAt" in data && data.publishedAt !== null) {
      const blog = await strapi.documents("api::blog.blog").findOne({
        documentId: where.id,
        fields: ["blog_status"],
      });

      if (blog?.blog_status !== "reviewed") {
        throw new Error("Only reviewed blogs can be published.");
      }
    }
  },
};
