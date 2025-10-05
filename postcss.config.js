const autoprefixer = require("autoprefixer");
const { plugins } = require("./webpack.common");

module.exports = {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {}
    },
};