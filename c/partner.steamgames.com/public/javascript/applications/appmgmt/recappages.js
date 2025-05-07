"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5136],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          RecapHubRoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        NextFestRecapListPartner: (_) => `/nextfest/${_}`,
        NextFestRecapList: () => "/nextfest",
        NextFestRecap: (_, _) => `/nextfest/${_}/${_}`,
      };
      function _(_) {
        return _.createElement(
          _._,
          {
            basename: (0, _._)() + "recap/",
          },
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              path: _.NextFestRecap(":postfix", ":partnerid(\\d+)"),
              render: (_) =>
                _.createElement(_._, {
                  pagePostFix: _.match.params.postfix,
                  nPartnerID: Number.parseInt(_.match.params.partnerid),
                }),
            }),
            _.createElement(_._, {
              path: _.NextFestRecapListPartner(":partnerid(\\d+)"),
              render: (_) =>
                _.createElement(_._, {
                  nPartnerID: Number.parseInt(_.match.params.partnerid),
                }),
            }),
            _.createElement(_._, {
              path: _.NextFestRecapList(),
              render: (_) =>
                _.createElement(_._, {
                  nPartnerID: void 0,
                }),
            }),
            _.createElement(_._, {
              component: _._,
            }),
          ),
        );
      }
    },
  },
]);
