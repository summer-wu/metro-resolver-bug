# metro-resolver-bug

**Bug description**
- In [metro documentation](https://facebook.github.io/metro/docs/configuration), it says using resolver.extraNodeModules, resolver.nodeModulesPaths can let metro search these directories.
- But actually, these directories will not be searched.
- The only way to let metro search directories outside projectRoot is using watchFolders.
- I create this repo to demonstrate this issue. see [metro.config.js](./rn_app_plain_js/metro.config.js)

**What is expectation**
- Remove those ineffective directives and correct the documentation related to watchFolders.
