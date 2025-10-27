const { getSvgrConfig } = require('@svgr/core');

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//       // Adiciona as transformações do SVGR para o Metro
//       svgrConfig: getSvgrConfig({
//         icon: true,
//         // Outras opções de configuração do SVGR podem ser adicionadas aqui
//       }),
//     }),
//   },
// };

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext: any) => ext !== 'svg');
config.resolver.sourceExts.push('svg');

module.exports = config;