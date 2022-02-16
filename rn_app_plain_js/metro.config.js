/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  watchFolders:['/Users/n/00work/03test_projs/03RN-projects/node_modules'],
  // resolver:{
  //   // extraNodeModules:{
  //   //   "react-native-tds": "/Users/n/00work/03test_projs/03RN-projects/"
  //   // },
  //   disableHierarchicalLookup:false,
  //   nodeModulesPaths:['/Users/n/00work/03test_projs/03RN-projects/node_modules','/Users/n/00work/03test_projs/03RN-projects/']
  // },
  reporter:{
    update:(...args)=>{
      console.log('reporter',...args)
    }
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
