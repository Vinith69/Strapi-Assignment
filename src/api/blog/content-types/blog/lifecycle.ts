import { errors } from "@strapi/utils";

const { ApplicationError } = errors;

export default {
  async beforeCreate(event) {
    event.params.data.blog_status = "draft";
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;
    const user = event.state?.user;

    if (!data.blog_status || !user) return;

    const blog = await strapi.documents("api::blog.blog").findOne({
      documentId: where.id,
      fields: ["blog_status"],
    });

    if (!blog) return;

    const role = user.role?.name;

    // Bloggers can never change status
    if (role === "Blogger") {
      throw new ApplicationError("Bloggers cannot change blog status");
    }

    // Reviewers can only move draft → reviewed
    if (
      role === "Blog Reviewer" &&
      !(blog.blog_status === "draft" && data.blog_status === "reviewed")
    ) {
      throw new ApplicationError("Reviewers can only mark blog as reviewed");
    }
  },

  async beforePublish(event) {
    const blog = await strapi.documents("api::blog.blog").findOne({
      documentId: event.params.where.id,
      fields: ["blog_status"],
    });

    if (blog?.blog_status !== "reviewed") {
      throw new ApplicationError("Only reviewed blogs can be published");
    }
  },
};
