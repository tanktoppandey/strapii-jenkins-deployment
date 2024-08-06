const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async findByName(ctx) {
      try {
        const { blogid } = ctx.params;
        strapi.log.info(`Fetching blog post with blogid: ${blogid}`);

        const test = blogid.replace(/(\r\n|\n|\r)/gm, "");
        const populateFields = {
          FIELDSECTIONS: true,
          SUMMARY: true,
          METADATA: true,
          //   author: true,
          //   comments: {
          //     populate: {
          //       user: true,
          //     },
          //   },
          //   category: true,
          //   tags: true,
        };
        const blogPost = await strapi.db
          .query("api::blog-post.blog-post")
          .findOne({
            where: { blogid: test },
            populate: populateFields,
          });

        if (!blogPost) {
          strapi.log.warn(`Blog post with blogid: ${blogid} not found`);
          return ctx.notFound("Blog post not found");
        }

        const response = {
          //   id: blogPost.id,
          //   createdAt: blogPost.createdAt,
          //   updatedAt: blogPost.updatedAt,
          //   publishedAt: blogPost.publishedAt,
          blogid: blogPost.blogid,
          FIELDSECTIONS: blogPost.FIELDSECTIONS, // Assuming 'content' is a field in your blog-post content type
          SUMMARY: blogPost.SUMMARY,
          METADATA: blogPost.METADATA,
        };

        ctx.send(response);

        // ctx.send(blogPost);
      } catch (err) {
        strapi.log.error("Error fetching blog post:", err);
        ctx.throw(500, "An error occurred while fetching the blog post");
      }
      //   const test = ctx.params;
      //   console.log(test.blogid);
      //   ctx.send({ hello: test.blogid, blogid: test.blogid });
    },
  })
);
