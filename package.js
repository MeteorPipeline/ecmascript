Package.describe({
  name: 'pipeline:ecmascript',
  version: '0.0.1',
  summary: 'Ecmascript in the pipeline',
  git: 'https://github.com/MeteorPipeline/ecmascript',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'pipeline:ecmascript',
  use: ['pipeline:js', 'babel-compiler', 'ecmascript'],
  sources: [
    'plugin/plugin.js'
  ]
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.imply('babel-runtime@0.1.2');
  api.imply('promise@0.4.1');
  api.export('Compiler');
});

Package.onTest(function(api) {
  api.use(["tinytest", "underscore"]);
  api.use(["pipeline:ecmascript", "babel-compiler"]);
  api.addFiles("runtime-tests.js");
  api.addFiles("transpilation-tests.js", "server");
});
