/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8502],
    {
      41326: (n, c, t) => {
        var e = { "./simpleWorker": 2555, "./simpleWorker.js": 2555 };
        function r(s) {
          return Promise.resolve().then(() => {
            if (!t.o(e, s)) {
              var o = new Error("Cannot find module '" + s + "'");
              throw ((o.code = "MODULE_NOT_FOUND"), o);
            }
            var i = e[s];
            return t(i);
          });
        }
        (r.keys = () => Object.keys(e)), (r.id = 41326), (n.exports = r);
      },
      83288: (n, c, t) => {
        var e = {
          "./editorBaseApi": [37241],
          "./editorBaseApi.js": [37241],
          "./editorSimpleWorker": [40928],
          "./editorSimpleWorker.js": [40928],
          "./editorWorker": [61726],
          "./editorWorker.js": [61726],
          "./editorWorkerHost": [24468],
          "./editorWorkerHost.js": [24468],
          "./findSectionHeaders": [43221],
          "./findSectionHeaders.js": [43221],
          "./getIconClasses": [81574],
          "./getIconClasses.js": [81574],
          "./languageFeatureDebounce": [67182],
          "./languageFeatureDebounce.js": [67182],
          "./languageFeatures": [98016],
          "./languageFeatures.js": [98016],
          "./languageFeaturesService": [64602],
          "./languageFeaturesService.js": [64602],
          "./languageService": [86756],
          "./languageService.js": [86756],
          "./languagesAssociations": [52742],
          "./languagesAssociations.js": [52742],
          "./languagesRegistry": [2457],
          "./languagesRegistry.js": [2457],
          "./markerDecorations": [99992],
          "./markerDecorations.js": [99992],
          "./markerDecorationsService": [73377],
          "./markerDecorationsService.js": [73377],
          "./model": [73512],
          "./model.js": [73512],
          "./modelService": [62257],
          "./modelService.js": [62257],
          "./resolverService": [19268],
          "./resolverService.js": [19268],
          "./semanticTokensDto": [97654],
          "./semanticTokensDto.js": [97654],
          "./semanticTokensProviderStyling": [2349],
          "./semanticTokensProviderStyling.js": [2349],
          "./semanticTokensStyling": [4961],
          "./semanticTokensStyling.js": [4961],
          "./semanticTokensStylingService": [32798],
          "./semanticTokensStylingService.js": [32798],
          "./textModelSync/textModelSync.impl": [82429],
          "./textModelSync/textModelSync.impl.js": [82429],
          "./textModelSync/textModelSync.protocol": [47082, 7082],
          "./textModelSync/textModelSync.protocol.js": [47082, 7082],
          "./textResourceConfiguration": [9906],
          "./textResourceConfiguration.js": [9906],
          "./treeSitterParserService": [41262],
          "./treeSitterParserService.js": [41262],
          "./treeViewsDnd": [44121],
          "./treeViewsDnd.js": [44121],
          "./treeViewsDndService": [77878],
          "./treeViewsDndService.js": [77878],
          "./unicodeTextModelHighlighter": [45953],
          "./unicodeTextModelHighlighter.js": [45953],
        };
        function r(s) {
          if (!t.o(e, s))
            return Promise.resolve().then(() => {
              var a = new Error("Cannot find module '" + s + "'");
              throw ((a.code = "MODULE_NOT_FOUND"), a);
            });
          var o = e[s],
            i = o[0];
          return Promise.all(o.slice(1).map(t.e)).then(() => t(i));
        }
        (r.keys = () => Object.keys(e)), (r.id = 83288), (n.exports = r);
      },
    },
  ]);
})();
