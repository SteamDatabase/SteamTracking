(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    chunkid: (module) => {
      module.exports = {
        _: "_2LxgdMcpWJRjkxZKbmeEEb",
        SubText: "vg0EOhKTLB3tLvshHMr7l",
        AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
        GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
        AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
        STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
        ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
        EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
        Small: "_3M4j828iWSVEZZAkypcBi1",
        FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
        ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
        MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
        SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
        RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ContentHubRoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.createElement(_._, {
          message: (_) => !(0, _._)() || (0, _._)("#Generel_Discard_Warning"),
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        ContentHubCategories: () => "/categories/",
      };
      function _(_) {
        return _.createElement(
          _._,
          {
            basename: (0, _._)() + "admin/store/contenthub/",
          },
          _.createElement(_, null),
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              path: _.ContentHubCategories(),
              component: _._,
            }),
            _.createElement(_._, {
              component: _._,
            }),
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      class _ {
        static ParseCSVFile(_) {
          return new Promise((_, _) => {
            const _ = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: _,
              error: (_) =>
                __webpack_require__({
                  errors: [_],
                }),
            };
            _().parse(_, _);
          });
        }
        static ReadFile(_) {
          return new Promise((_, _) => {
            const _ = new FileReader();
            (_.onload = (_) => _(_.result)), _.readAsText(_);
          });
        }
        static WriteFile(_, _) {
          let _ = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(_, _);
          else {
            const _ = window.URL.createObjectURL(_);
            _.href = _;
          }
          __webpack_require__.setAttribute("download", _),
            __webpack_require__.click();
          try {
            document.removeChild(_);
          } catch (_) {}
        }
        static WriteCSVToFile(_, _) {
          const _ = _().unparse(_, {
            header: !0,
          });
          _.WriteFile(
            new Blob([_], {
              type: "text/csv:charset=utf-8;",
            }),
            _,
          );
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(_, _) {
          const _ = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let _ =
            "<" +
            __webpack_require__() +
            'xml version="1.0" encoding="UTF-8" ' +
            __webpack_require__() +
            ">\n";
          (_ += new XMLSerializer().serializeToString(_)),
            _.WriteFile(
              new Blob([_], {
                type: "application/xml:charset=utf-8;",
              }),
              _,
            );
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
