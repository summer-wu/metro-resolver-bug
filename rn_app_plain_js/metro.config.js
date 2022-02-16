/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const transformer = {
    getTransformOptions: async () => ({
        transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
        },
    }),
}

const config1bad = {
    resolver: {
        extraNodeModules: {
            "formatter_lib": path.join(__dirname, "..", 'formatter_lib')
        },
    },
    transformer,
}

const config2bad = {
    resolver: {
        nodeModulesPaths: [path.join(__dirname, "..")]
    },
    transformer,
}


const config3bad = {
    resolver: {
        extraNodeModules: {
            "formatter_lib": path.join(__dirname, "..", 'formatter_lib')
        },
        nodeModulesPaths: [path.join(__dirname, "..")]
    },
    transformer,
}

const config4good = {
    watchFolders: [path.join(__dirname, "..", 'formatter_lib')],
    transformer,
}

// I want metro to search other folders beyond the projectRoot, but it doesn't search it and print a misleading error message.
// Actually, only watchFolders take effect. Other config directives: resolver.extraNodeModules, resolver.nodeModulesPaths don't take effect.
// What I recommend is that remove those ineffective directives and correct the documentation related to watchFolders.
module.exports = config3bad;
