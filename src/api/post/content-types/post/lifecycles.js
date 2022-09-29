const readingTime = require("reading-time");
/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
module.exports = {
    async beforeCreate(event) {
        const { data } = event.params;
        if(data.readingTime !== undefined) data.readingTime = readingTime(data.content)?.text || null;
    },
    async beforeUpdate(event) {
        const { data } = event.params;
        if(data.readingTime !== undefined) data.readingTime = readingTime(data.content)?.text || null;
    },
};