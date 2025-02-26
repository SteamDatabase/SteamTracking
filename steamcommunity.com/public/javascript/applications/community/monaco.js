/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8502],
  {
    5890: (e, o, s) => {
      var r = {
        "./simpleWorker": 78015,
        "./simpleWorker.js": 78015,
        "monaco-editor/esm/vs/base/common/worker/simpleWorker": 78015,
        "monaco-editor/esm/vs/base/common/worker/simpleWorker.js": 78015,
      };
      function i(e) {
        return Promise.resolve().then(() => {
          if (!s.o(r, e)) {
            var o = new Error("Cannot find module '" + e + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          }
          return s(r[e]);
        });
      }
      (i.keys = () => Object.keys(r)), (i.id = 5890), (e.exports = i);
    },
    9204: (e, o, s) => {
      var r = {
        "./editorBaseApi": [91365],
        "./editorBaseApi.js": [91365],
        "./editorSimpleWorker": [12159],
        "./editorSimpleWorker.js": [12159],
        "./editorWorker": [75250],
        "./editorWorker.js": [75250],
        "./editorWorkerHost": [51352],
        "./editorWorkerHost.js": [51352],
        "./findSectionHeaders": [66561],
        "./findSectionHeaders.js": [66561],
        "./getIconClasses": [51397, 1397],
        "./getIconClasses.js": [51397, 1397],
        "./languageFeatureDebounce": [41242],
        "./languageFeatureDebounce.js": [41242],
        "./languageFeatures": [65092],
        "./languageFeatures.js": [65092],
        "./languageFeaturesService": [34589],
        "./languageFeaturesService.js": [34589],
        "./languageService": [81312],
        "./languageService.js": [81312],
        "./languagesAssociations": [86010],
        "./languagesAssociations.js": [86010],
        "./languagesRegistry": [45077],
        "./languagesRegistry.js": [45077],
        "./markerDecorations": [26636],
        "./markerDecorations.js": [26636],
        "./markerDecorationsService": [80485],
        "./markerDecorationsService.js": [80485],
        "./model": [79220],
        "./model.js": [79220],
        "./modelService": [21997],
        "./modelService.js": [21997],
        "./resolverService": [4648],
        "./resolverService.js": [4648],
        "./semanticTokensDto": [20770, 770],
        "./semanticTokensDto.js": [20770, 770],
        "./semanticTokensProviderStyling": [92783],
        "./semanticTokensProviderStyling.js": [92783],
        "./semanticTokensStyling": [51781],
        "./semanticTokensStyling.js": [51781],
        "./semanticTokensStylingService": [32274],
        "./semanticTokensStylingService.js": [32274],
        "./textModelSync/textModelSync.impl": [53097],
        "./textModelSync/textModelSync.impl.js": [53097],
        "./textModelSync/textModelSync.protocol": [28622, 8622],
        "./textModelSync/textModelSync.protocol.js": [28622, 8622],
        "./textResourceConfiguration": [88574],
        "./textResourceConfiguration.js": [88574],
        "./treeSitterParserService": [90162],
        "./treeSitterParserService.js": [90162],
        "./treeViewsDnd": [10861, 861],
        "./treeViewsDnd.js": [10861, 861],
        "./treeViewsDndService": [21466, 1466],
        "./treeViewsDndService.js": [21466, 1466],
        "./unicodeTextModelHighlighter": [37157],
        "./unicodeTextModelHighlighter.js": [37157],
        "monaco-editor/esm/vs/editor/common/services/editorBaseApi": [91365],
        "monaco-editor/esm/vs/editor/common/services/editorBaseApi.js": [91365],
        "monaco-editor/esm/vs/editor/common/services/editorSimpleWorker": [
          12159,
        ],
        "monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js": [
          12159,
        ],
        "monaco-editor/esm/vs/editor/common/services/editorWorker": [75250],
        "monaco-editor/esm/vs/editor/common/services/editorWorker.js": [75250],
        "monaco-editor/esm/vs/editor/common/services/editorWorkerHost": [51352],
        "monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js": [
          51352,
        ],
        "monaco-editor/esm/vs/editor/common/services/findSectionHeaders": [
          66561,
        ],
        "monaco-editor/esm/vs/editor/common/services/findSectionHeaders.js": [
          66561,
        ],
        "monaco-editor/esm/vs/editor/common/services/getIconClasses": [
          51397, 1397,
        ],
        "monaco-editor/esm/vs/editor/common/services/getIconClasses.js": [
          51397, 1397,
        ],
        "monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce": [
          41242,
        ],
        "monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js":
          [41242],
        "monaco-editor/esm/vs/editor/common/services/languageFeatures": [65092],
        "monaco-editor/esm/vs/editor/common/services/languageFeatures.js": [
          65092,
        ],
        "monaco-editor/esm/vs/editor/common/services/languageFeaturesService": [
          34589,
        ],
        "monaco-editor/esm/vs/editor/common/services/languageFeaturesService.js":
          [34589],
        "monaco-editor/esm/vs/editor/common/services/languageService": [81312],
        "monaco-editor/esm/vs/editor/common/services/languageService.js": [
          81312,
        ],
        "monaco-editor/esm/vs/editor/common/services/languagesAssociations": [
          86010,
        ],
        "monaco-editor/esm/vs/editor/common/services/languagesAssociations.js":
          [86010],
        "monaco-editor/esm/vs/editor/common/services/languagesRegistry": [
          45077,
        ],
        "monaco-editor/esm/vs/editor/common/services/languagesRegistry.js": [
          45077,
        ],
        "monaco-editor/esm/vs/editor/common/services/markerDecorations": [
          26636,
        ],
        "monaco-editor/esm/vs/editor/common/services/markerDecorations.js": [
          26636,
        ],
        "monaco-editor/esm/vs/editor/common/services/markerDecorationsService":
          [80485],
        "monaco-editor/esm/vs/editor/common/services/markerDecorationsService.js":
          [80485],
        "monaco-editor/esm/vs/editor/common/services/model": [79220],
        "monaco-editor/esm/vs/editor/common/services/model.js": [79220],
        "monaco-editor/esm/vs/editor/common/services/modelService": [21997],
        "monaco-editor/esm/vs/editor/common/services/modelService.js": [21997],
        "monaco-editor/esm/vs/editor/common/services/resolverService": [4648],
        "monaco-editor/esm/vs/editor/common/services/resolverService.js": [
          4648,
        ],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensDto": [
          20770, 770,
        ],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensDto.js": [
          20770, 770,
        ],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling":
          [92783],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling.js":
          [92783],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensStyling": [
          51781,
        ],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensStyling.js":
          [51781],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService":
          [32274],
        "monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService.js":
          [32274],
        "monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl":
          [53097],
        "monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js":
          [53097],
        "monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol":
          [28622, 8622],
        "monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol.js":
          [28622, 8622],
        "monaco-editor/esm/vs/editor/common/services/textResourceConfiguration":
          [88574],
        "monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js":
          [88574],
        "monaco-editor/esm/vs/editor/common/services/treeSitterParserService": [
          90162,
        ],
        "monaco-editor/esm/vs/editor/common/services/treeSitterParserService.js":
          [90162],
        "monaco-editor/esm/vs/editor/common/services/treeViewsDnd": [
          10861, 861,
        ],
        "monaco-editor/esm/vs/editor/common/services/treeViewsDnd.js": [
          10861, 861,
        ],
        "monaco-editor/esm/vs/editor/common/services/treeViewsDndService": [
          21466, 1466,
        ],
        "monaco-editor/esm/vs/editor/common/services/treeViewsDndService.js": [
          21466, 1466,
        ],
        "monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter":
          [37157],
        "monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js":
          [37157],
      };
      function i(e) {
        if (!s.o(r, e))
          return Promise.resolve().then(() => {
            var o = new Error("Cannot find module '" + e + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          });
        var o = r[e],
          i = o[0];
        return Promise.all(o.slice(1).map(s.e)).then(() => s(i));
      }
      (i.keys = () => Object.keys(r)), (i.id = 9204), (e.exports = i);
    },
  },
]);
