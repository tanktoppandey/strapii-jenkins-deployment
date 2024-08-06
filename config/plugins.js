module.exports = ({ env }) => ({
  // ...
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      hooks: {
        preResponseTransform: (response) => {
          const transformSummary = (summary) => {
            const transformed = {};
            summary.forEach((item) => {
              if (item.__component === "main-header.mainheader") {
                transformed.title = item.title;
              }
              if (item.__component === "name.name") {
                transformed.name = item.name;
              }
              if (
                item.__component === "image.heroimage" &&
                item.img &&
                item.img.data
              ) {
                transformed.img = {
                  name: item.img.data[0].attributes.name,
                  url: item.img.data[0].attributes.formats.thumbnail.url,
                };
              }
              if (item.__component === "para.para") {
                transformed.info = item.info;
              }
            });
            return transformed;
          };

          if (response.attributes && response.attributes.SUMMARY) {
            return {
              SUMMARY: transformSummary(response.attributes.SUMMARY),
            };
          }
          return response;
        },
      },
    },
  },
  // ...
});
