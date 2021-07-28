const withLess = require("next-with-less");
const path = require("path");
const pathToLessFileVariables = path.resolve("./styles/themes/dark-theme.less");

module.exports = withLess({
    lessLoaderOptions: {
        // it's possible to use additionalData or modifyVars for antd theming
        // read more @ https://ant.design/docs/react/customize-theme
        additionalData: (content) =>
            `${content}\n\n@import '${pathToLessFileVariables}';`,
    },
});
