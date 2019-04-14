# Neutrino Issue

- Chechout repo
- Run `yarn test`

See Error:

```shell
yarn run v1.15.2
$ karma start --single-run
15 04 2019 08:58:33.202:DEBUG [config]: Loading config /Users/colmbrady/development/neutrinojs-issue/karma.conf.js
15 04 2019 08:58:33.208:DEBUG [config]: autoWatch set to false, because of singleRun
15 04 2019 08:58:33.209:DEBUG [karma-server]: Final config [{"LOG_DISABLE":"1","LOG_ERROR":"2","LOG_WARN":"3","LOG_INFO":"4","LOG_DEBUG":"5","frameworks":"6","protocol":"7","port":9876,"listenAddress":"8","hostname":"9","httpsServerConfig":"10","basePath":"11","files":"12","browserConsoleLogOptions":"13","customContextFile":null,"customDebugFile":null,"customClientContextFile":null,"exclude":"14","logLevel":"15","colors":true,"autoWatch":false,"autoWatchBatchDelay":250,"restartOnFileChange":false,"usePolling":false,"reporters":"16","singleRun":true,"browsers":"17","captureTimeout":60000,"proxies":"18","proxyValidateSSL":true,"preprocessors":"19","urlRoot":"20","reportSlowerThan":0,"loggers":"21","transports":"22","forceJSONP":false,"plugins":"23","client":"24","defaultClient":"24","browserDisconnectTimeout":2000,"browserDisconnectTolerance":0,"browserNoActivityTimeout":30000,"processKillTimeout":2000,"concurrency":null,"failOnEmptyTestSuite":true,"retryLimit":2,"detached":false,"crossOriginAttribute":true,"browserSocketTimeout":20000,"cmd":"25","configFile":"26","customLaunchers":"27","webpackMiddleware":"28","webpack":"29","coverageReporter":"30"},"OFF","ERROR","WARN","INFO","DEBUG",["31"],"http:","0.0.0.0","localhost",{},"/Users/colmbrady/development/neutrinojs-issue",["32"],{"level":"15","format":"33","terminal":true},["26"],"debug",["31","34"],["35"],{},{"/Users/colmbrady/development/neutrinojs-issue/test/**/*_test.js":"36","/Users/colmbrady/development/neutrinojs-issue/src/**/*.js*":"37"},"/",["38"],["39","40"],["41","42","43","44","45","46"],{"args":"47","useIframe":true,"runInParent":false,"captureConsole":true,"clearContext":true},"start","/Users/colmbrady/development/neutrinojs-issue/karma.conf.js",{"ChromeCI":"48"},{"stats":"49"},{"mode":"50","devtool":"51","externals":"52","target":"53","context":"11","stats":"54","node":"55","output":"56","resolve":"57","module":"58","plugins":"59","optimization":"60"},{"dir":"61","reporters":"62"},"mocha",{"pattern":"63","served":true,"included":true,"watched":false,"nocache":false,"weight":"64"},"%b %T: %m","coverage","ChromeHeadless",["65"],["65"],{"type":"66","layout":"67"},"polling","websocket","/Users/colmbrady/development/neutrinojs-issue/node_modules/karma-webpack/lib/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/karma-chrome-launcher/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/karma-coverage/lib/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha/lib/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha-reporter/index.js",{"launcher:ChromeCI":"68"},[],{"base":"35","flags":"69"},{"all":false,"errors":true,"timings":true,"warnings":true},"development","source-map",[null],"web",{"children":false,"entrypoints":false,"modules":false},{"Buffer":false,"fs":"70","tls":"70"},{"path":"71","library":"72","libraryTarget":"73","umdNamedDefine":true},{"extensions":"74"},{"rules":"75"},["76"],{"splitChunks":false,"runtimeChunk":false},".coverage",["77","78"],"/Users/colmbrady/development/neutrinojs-issue/test/**/*_test.js",[1,1,1,0,0,0],"webpack","console",{"type":"79","pattern":"80"},["81",null],["82"],"empty","/Users/colmbrady/development/neutrinojs-issue/build","Test","umd",["83","84","85","86","87"],["88"],{"options":"89"},{"type":"90","subdir":"91"},{"type":"92","subdir":"93"},"pattern","%[%d{DATE}:%p [%c]: %]%m","factory","--no-sandbox",".wasm",".mjs",".jsx",".js",".json",{"test":"94","include":"95","use":"96"},{"banner":"97","test":"98","raw":true,"entryOnly":true},"html","report-html","lcov","report-lcov",{},["99","100"],["101"],"require('source-map-support').install();",{},"/Users/colmbrady/development/neutrinojs-issue/src","/Users/colmbrady/development/neutrinojs-issue/test",{"loader":"102","options":"103"},"/Users/colmbrady/development/neutrinojs-issue/node_modules/babel-loader/lib/index.js",{"presets":"104","plugins":"105","cacheDirectory":true,"babelrc":false,"configFile":false},["106"],["107","108"],["109","110"],"/Users/colmbrady/development/neutrinojs-issue/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/babel-plugin-istanbul/lib/index.js","/Users/colmbrady/development/neutrinojs-issue/node_modules/@babel/preset-env/lib/index.js",{"debug":false,"useBuiltIns":"111","targets":"112"},"entry",{"browsers":"113"},"ie 9"]
15 04 2019 08:58:33.210:DEBUG [plugin]: Loading plugin /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-webpack/lib/index.js.
15 04 2019 08:58:33.504:DEBUG [plugin]: Loading plugin /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-chrome-launcher/index.js.
15 04 2019 08:58:33.510:DEBUG [plugin]: Loading plugin /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-coverage/lib/index.js.
15 04 2019 08:58:33.667:DEBUG [plugin]: Loading plugin /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha/lib/index.js.
15 04 2019 08:58:33.669:DEBUG [plugin]: Loading plugin /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha-reporter/index.js.
15 04 2019 08:58:33.684:DEBUG [plugin]: Loading inlined plugin (defining launcher:ChromeCI).
15 04 2019 08:58:34.021:DEBUG [web-server]: Instantiating middleware
15 04 2019 08:58:34.022:DEBUG [reporter]: Trying to load reporter: mocha
15 04 2019 08:58:34.023:DEBUG [reporter]: Trying to load color-version of reporter: mocha (mocha_color)
15 04 2019 08:58:34.023:DEBUG [reporter]: Couldn't load color-version.
15 04 2019 08:58:34.023:DEBUG [reporter]: Trying to load reporter: coverage
15 04 2019 08:58:34.023:DEBUG [reporter]: Trying to load color-version of reporter: coverage (coverage_color)
15 04 2019 08:58:34.023:DEBUG [reporter]: Couldn't load color-version.

START:
ℹ ｢wdm｣: Time: 62ms
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...

WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

ℹ ｢wdm｣: Time: 673ms
ℹ ｢wdm｣: Compiled successfully.
15 04 2019 08:58:34.946:INFO [karma-server]: Karma v4.0.1 server started at http://0.0.0.0:9876/
15 04 2019 08:58:34.946:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
15 04 2019 08:58:34.953:INFO [launcher]: Starting browser ChromeHeadless
15 04 2019 08:58:34.953:DEBUG [temp-dir]: Creating temp dir at /var/folders/q8/rlbn5m293md0826kbpj8qhs80000gn/T/karma-36581779
15 04 2019 08:58:34.954:DEBUG [launcher]: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome --user-data-dir=/var/folders/q8/rlbn5m293md0826kbpj8qhs80000gn/T/karma-36581779 --no-default-browser-check --no-first-run --disable-default-apps --disable-popup-blocking --disable-translate --disable-background-timer-throttling --disable-renderer-backgrounding --disable-device-discovery-notifications http://localhost:9876/?id=36581779 --headless --disable-gpu --remote-debugging-port=9222
15 04 2019 08:58:35.163:DEBUG [web-server]: serving: /Users/colmbrady/development/neutrinojs-issue/node_modules/karma/static/client.html
15 04 2019 08:58:35.238:DEBUG [web-server]: serving: /Users/colmbrady/development/neutrinojs-issue/node_modules/karma/static/karma.js
15 04 2019 08:58:35.357:DEBUG [karma-server]: A browser has connected on socket g1ysj-A5a9u0ZeTuAAAA
15 04 2019 08:58:35.360:DEBUG [web-server]: upgrade /socket.io/?EIO=3&transport=websocket&sid=g1ysj-A5a9u0ZeTuAAAA
15 04 2019 08:58:35.378:DEBUG [HeadlessChrome 73.0.3683 (Mac OS X 10.13.6)]: undefined -> CONNECTED
15 04 2019 08:58:35.378:INFO [HeadlessChrome 73.0.3683 (Mac OS X 10.13.6)]: Connected on socket g1ysj-A5a9u0ZeTuAAAA with id 36581779
15 04 2019 08:58:35.379:DEBUG [launcher]: ChromeHeadless (id 36581779) captured in 0.432 secs
15 04 2019 08:58:35.379:DEBUG [HeadlessChrome 73.0.3683 (Mac OS X 10.13.6)]: CONNECTED -> CONFIGURING
15 04 2019 08:58:35.384:DEBUG [middleware:karma]: custom files null null null
15 04 2019 08:58:35.384:DEBUG [middleware:karma]: Serving static request /context.html
15 04 2019 08:58:35.385:DEBUG [web-server]: serving: /Users/colmbrady/development/neutrinojs-issue/node_modules/karma/static/context.html
15 04 2019 08:58:35.392:DEBUG [middleware:source-files]: Requesting /base/node_modules/mocha/mocha.js?6ecf8da85bfe110d0bd38e406f562822c75ff6a3
15 04 2019 08:58:35.392:DEBUG [middleware:source-files]: Fetching /Users/colmbrady/development/neutrinojs-issue/node_modules/mocha/mocha.js
15 04 2019 08:58:35.393:DEBUG [middleware:source-files]: Requesting /base/node_modules/karma-mocha/lib/adapter.js?e8826109cf50b958ee4bd667517729ffdd4de363
15 04 2019 08:58:35.393:DEBUG [middleware:source-files]: Fetching /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha/lib/adapter.js
15 04 2019 08:58:35.393:DEBUG [web-server]: serving (cached): /Users/colmbrady/development/neutrinojs-issue/node_modules/mocha/mocha.js
15 04 2019 08:58:35.397:DEBUG [web-server]: serving (cached): /Users/colmbrady/development/neutrinojs-issue/node_modules/karma-mocha/lib/adapter.js
15 04 2019 08:58:35.398:DEBUG [middleware:source-files]: Requesting /base/test/index_test.js?093ff3a2d1f16769f91791acdf31431abb7bb8ad
15 04 2019 08:58:35.398:DEBUG [middleware:source-files]: Fetching /Users/colmbrady/development/neutrinojs-issue/test/index_test.js
15 04 2019 08:58:35.398:DEBUG [web-server]: serving (cached): /Users/colmbrady/development/neutrinojs-issue/test/index_test.js
15 04 2019 08:58:35.399:DEBUG [web-server]: serving: /Users/colmbrady/development/neutrinojs-issue/node_modules/karma/static/context.js
HeadlessChrome 73.0.3683 (Mac OS X 10.13.6) ERROR
  {
    "message": "Uncaught ReferenceError: require is not defined\nat test/index_test.js:1:1\n\nReferenceError: require is not defined\n    at test/index_test.js:1:1",
    "str": "Uncaught ReferenceError: require is not defined\nat test/index_test.js:1:1\n\nReferenceError: require is not defined\n    at test/index_test.js:1:1"
  }
15 04 2019 08:58:35.489:DEBUG [HeadlessChrome 73.0.3683 (Mac OS X 10.13.6)]: CONFIGURING -> CONNECTED

Finished in 0.112 secs / 0 secs @ 08:58:35 GMT+1200 (New Zealand Standard Time)

SUMMARY:
✔ 0 tests completed
15 04 2019 08:58:35.492:DEBUG [karma-server]: Run complete, exiting.
15 04 2019 08:58:35.493:DEBUG [launcher]: Disconnecting all browsers
15 04 2019 08:58:35.500:DEBUG [launcher]: Process ChromeHeadless exited with code null and signal SIGTERM
15 04 2019 08:58:35.500:DEBUG [temp-dir]: Cleaning temp dir /var/folders/q8/rlbn5m293md0826kbpj8qhs80000gn/T/karma-36581779
15 04 2019 08:58:35.515:DEBUG [launcher]: Finished all browsers
error Command failed with exit code 1.

```

# Root Cause
Neutiono Banner gets added to the code when `source-map-support` is installed. This causes the followin gcode to be added:

```javascript
require(\'source-map-support\').install();
```

This code triggers "Uncaught ReferenceError: require is not defined\" error. 

*Removing this code from node_modules/@neutrinojs/banner/index.js fixes this issue* 