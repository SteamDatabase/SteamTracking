const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ || (_._ = ["./assets/BryW0eKn.css"]),
) => _.map((_) => _[_]);
var _ = class extends Error {
  eResult;
  constructor(_, _) {
    super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _);
  }
};
function _(_, _) {
  return _.filter((_) => !_.includes(_));
}
function _(_, _, _) {
  let _ = _.slice(0);
  return (_[_] = _), _;
}
var _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(_, _, _) {
      super(),
        (this.#e = _),
        (this.#r = _),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(_);
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((_) => {
          _.subscribe((_) => {
            this.#d(_, _);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      (this.listeners = new Set()),
        this.#i.forEach((_) => {
          _.destroy();
        });
    }
    setQueries(_, _, _) {
      (this.#n = _),
        (this.#r = _),
        _.batch(() => {
          let _ = this.#i,
            _ = this.#u(this.#n);
          _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
          let _ = _.map((_) => _.observer),
            _ = _.map((_) => _.getCurrentResult()),
            _ = _.some((_, _) => _ !== _[_]);
          (_.length === _.length && !_) ||
            ((this.#i = _),
            (this.#t = _),
            this.hasListeners() &&
              (_(_, _).forEach((_) => {
                _.destroy();
              }),
              _(_, _).forEach((_) => {
                _.subscribe((_) => {
                  this.#d(_, _);
                });
              }),
              this.#f()));
        });
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((_) => _.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(_, _) {
      let _ = this.#u(_).map((_) =>
        _.observer.getOptimisticResult(_.defaultedQueryOptions),
      );
      return [_, (_) => this.#l(_ ?? _, _), () => this.#c(_, _)];
    }
    #c(_, _) {
      let _ = this.#u(_);
      return _.map((_, _) => {
        let _ = _[_];
        return _.defaultedQueryOptions.notifyOnChangeProps
          ? _
          : _.observer.trackResult(_, (_) => {
              _.forEach((_) => {
                _.observer.trackProp(_);
              });
            });
      });
    }
    #l(_, _) {
      return _
        ? ((!this.#a || this.#t !== this.#s || _ !== this.#o) &&
            ((this.#o = _), (this.#s = this.#t), (this.#a = _(this.#a, _(_)))),
          this.#a)
        : _;
    }
    #u(_) {
      let _ = new Map(this.#i.map((_) => [_.options.queryHash, _])),
        _ = [];
      return (
        _.forEach((_) => {
          let _ = this.#e.defaultQueryOptions(_),
            _ = _.get(_.queryHash);
          _
            ? _.push({
                defaultedQueryOptions: _,
                observer: _,
              })
            : _.push({
                defaultedQueryOptions: _,
                observer: new _(this.#e, _),
              });
        }),
        _
      );
    }
    #d(_, _) {
      let _ = this.#i.indexOf(_);
      _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        _.batch(() => {
          this.listeners.forEach((_) => {
            _(this.#t);
          });
        });
    }
  },
  _ = _(_(), 1);
function _({ queries: _, ..._ }, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useMemo(
      () =>
        _.map((_) => {
          let _ = _.defaultQueryOptions(_);
          return (_._optimisticResults = _ ? `isRestoring` : `optimistic`), _;
        }),
      [_, _, _],
    );
  _.forEach((_) => {
    _(_), _(_, _);
  }),
    _(_);
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  _.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]);
  let _ = _.some((_, _) => _(_[_], _))
    ? _.flatMap((_, _) => {
        let _ = _[_];
        if (_) {
          let _ = new _(_, _);
          if (_(_, _)) return _(_, _, _);
          _(_, _) && _(_, _, _);
        }
        return [];
      })
    : [];
  if (_.length > 0) throw Promise.all(_);
  let _ = _.find((_, _) => {
    let _ = _[_];
    return (
      _ &&
      _({
        result: _,
        errorResetBoundary: _,
        throwOnError: _.throwOnError,
        query: _.getQueryCache().get(_.queryHash),
      })
    );
  });
  if (_?.error) throw _.error;
  return _(_());
}
var _ = _(),
  _ = _.lazy(() =>
    _(() => import(`./Xuq0e2Jy2.js`), __vite__mapDeps([0]), import.meta.url),
  );
function _(_) {
  return _().metrics
    ? (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
var _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmRiYTNkYTNiNSwgMjAyMy8xMi8xNS0xMDo0MjozNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTUyNEM0ODNFQjFCMTFFRkFCQzRBQTJBRDI5MTEzNTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTUyNEM0ODJFQjFCMTFFRkFCQzRBQTJBRDI5MTEzNTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkU3NDVCRDc5MkQ0MTFFRThGODBFNEY1QjUxNDhFQzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkU3NDVCRDg5MkQ0MTFFRThGODBFNEY1QjUxNDhFQzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/ZWWhAAABeklEQVR42mIUl1X1ZGBgmAvEkgykgedAnMwINOAZGZrhhjCBNKclJzAcP7SbobqimIGbmwunapAcSA1ILUgP2GKgC/4fOXr8PwxcunL1v46h5X+QODIGiYHkYACkByQOcgHD12/f4LboamsxrFgyj4GHhxsuBmKDxEByMADTAzbg9eu3KE7V1tJgmNjbCeeD2CAxZADTwwIOiRcvMPzr7enGEB4aBGdjhB5UD9iAm7fuYA202qpSnAEK1wMKCGlFjf979h74TywAqQXpAellgIWyhJza/5SMvP+PHj/BqREkB1IDUgvTxwg2BQjEREUZDu/bxsDPz4835Xz8+JHB1smL4dXr14hYAAF5OVkMzZevXAVjZABSA1ILA3ADzp6/wHDk2AkUxdNnzQNjZABSA1ILA8w8/MINIAbQiwybt+5gEODnYxAUFGSYO38xGF+/cYuBkZGRQVpKkmHDxi0M+cWVDL9//4YbQGlmegHyQgqIQYbmp6DsDBBgAIIy8Bcm3TCOAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4xIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RTc0NUJENzkyRDQxMUVFOEY4MEU0RjVCNTE0OEVDOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RTc0NUJEODkyRDQxMUVFOEY4MEU0RjVCNTE0OEVDOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFNzQ1QkQ1OTJENDExRUU4RjgwRTRGNUI1MTQ4RUM5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFNzQ1QkQ2OTJENDExRUU4RjgwRTRGNUI1MTQ4RUM5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e0tM3wAAAgVJREFUeNpiFJdV9WRgYJgLxJIMpIHnQJzMCDTgGRma4YYwwTTPnTmF4cWjW2D88PZlBjVVFQzVNlYWDEf372QQFhaCCUkyAF3wH4S1DMz/P3ny9L+9i/f/1Mz8/xcuXv4vo6j5Hybv4Or9//GTJ/8tbF3gYiDMBDPq7dt3DNX1LQyTJ3QxbN+5m+HuvfsM+bmZYDmQjbOmTWQoKK5kuP/gIYqrmJA5O3btYbh69TpDSWEuQ2VtE0NEWBCDuZkJw+J5MxlmzJ7HcOTYCQxvgQLxP7IALw8Pw54dGxmy8ooZ+Hh5GRbOnc4wa+4Chpb2HqyhyIQu8PnLF4aismqGSX1dDCdPn2FYtmI1AxsbG85oYMImeBTo1GvXrzPUVZUxNLV1MTg7OjBYA2OAaAOMDPUZ9HR1GGysLRnMTU0Y8orKGPq6WsHeIxgGigryDKuXL2BISstlYGJiZJgzYxKDs0cAQ1Z6MoO4mChDQUkligHMPPzCDTAOKNCWLZrD0NzWzXDs+EmGFy9fMfDx8TGEhwQy1Da0MhQX5DC8evWa4c7de5guYGZmZli5dD7DwUNHGSZPmwlXwMrCwrBlwyqGqTPmMNy6fYdh6YJZDG4+QeB0g2JAR2sDAxsrKzgG0AEoWe/etp6BnZ0dzN+6fRdDcnoO3ABKMtMLUCykgBhkaH4Kys4AAQYAyba1Gunsux8AAAAASUVORK5CYII=`,
  _ = `` + new URL(`assets/B9IALK1_.svg`, import.meta.url).href,
  _ = `` + new URL(`assets/BDtgl3DZ.png`, import.meta.url).href,
  _ = `` + new URL(`assets/B5jZML_B.png`, import.meta.url).href,
  _ = {};
(_.arabic = () => _(() => import(`./DemPkwQC2.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./DWq0mK7n2.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./DcH0tKDt2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CRv2FS3j2.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./BRZqezSw2.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./M3ukMf8C2.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./CUVJyTNM2.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./BhUD0B4I2.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./CVe8qN7K2.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./Qoj0RCMO2.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./C6OQ4oA92.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./BK2tcBr82.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./BCNlEzKu2.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./DVHWolP62.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./DvLsXZny2.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./DfvWqURd2.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./B4UTLTQl2.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./Bhyr3CEy2.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./D4s0Ap7j.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./CSYqOdSG.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./T0kEMo0j.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./DVmMZYGA.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./BYX4S7Ey.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./C00lIPSl.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./R9UKP9U0.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./DZ4b0U0t.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./DPaEN0ny.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./BkMc6kF0.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./D7CjOdNI.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./CYZRD8zy.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./DuihlA4R.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = `EwwURYQoMuo-`,
  _ = `f7w-RgOE2T4-`,
  _ = `hmnPK-36gZM-`,
  _ = `ZEPSzqteVb8-`,
  _ = `-mS-pHi5xiA-`,
  _ = `G1-Nn6ppVKQ-`,
  _ = `B-0SoNIpO84-`,
  _ = `SMsbq-L3oBk-`,
  _ = `oUG4HtjNf7s-`;
function _(_) {
  return (0, _.jsxs)(`footer`, {
    className: _,
    children: [
      !_.bSuppressConfidentialityWarning &&
        (0, _.jsxs)(`div`, {
          className: `KOq2xS8Wj-M-`,
          children: [
            (0, _.jsx)(`h2`, {
              children: _.Localize(`#Valve_Confidential`),
            }),
            (0, _.jsx)(`p`, {
              children: _.Localize(`#Valve_Confidential_Description`),
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`img`, {
                src: _(_),
                className: _,
                alt: ``,
              }),
              (0, _.jsx)(`div`, {
                children: _(
                  _.Localize(`#Footer_Description`),
                  (0, _.jsx)(`a`, {
                    href: `https://www.valvesoftware.com`,
                  }),
                  (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL,
                  }),
                ),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`a`, {
                    href: `https://www.valvesoftware.com`,
                    children: (0, _.jsx)(`img`, {
                      src: _(_),
                      alt: ``,
                    }),
                  }),
                  (0, _.jsx)(`span`, {
                    className: _,
                  }),
                  (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL,
                    children: (0, _.jsx)(`img`, {
                      src: _(_),
                      alt: ``,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`ul`, {
                children: [
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`em`, {
                      children: _.Localize(`#Header_Global_Documentation`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/`,
                      children: _.Localize(`#Header_Global_Documentation_Home`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/gettingstarted`,
                      children: _.Localize(
                        `#Header_Global_Documentation_GettingStarted`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/store`,
                      children: _.Localize(
                        `#Header_Global_Documentation_StorePresence`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/features`,
                      children: _.Localize(
                        `#Header_Global_Documentation_Features`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/finance`,
                      children: _.Localize(
                        `#Header_Global_Documentation_Finance`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/marketing`,
                      children: _.Localize(
                        `#Header_Global_Documentation_SalesMarketing`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/sdk`,
                      children: _.Localize(
                        `#Header_Global_Documentation_SteamworksSDK`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/pccafe`,
                      children: _.Localize(
                        `#Header_Global_Documentation_PCCafe`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/doc/features/steamvr/info`,
                      children: _.Localize(
                        `#Header_Global_Documentation_SteamVR`,
                      ),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`ul`, {
                children: [
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`em`, {
                      children: _.Localize(`#Header_Global_Resources`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/vrlicensing`,
                      children: _.Localize(`#Header_Global_Resources_SteamVR`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      href: `${_.PARTNER_BASE_URL}/pccafe`,
                      children: _.Localize(`#Header_Global_Resources_PCCafe`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.COMMUNITY_BASE_URL}groups/steamworks/discussions`,
                      children: [
                        _.Localize(`#Header_Global_Resources_Discussions`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                  _.bShowVideo &&
                    (0, _.jsx)(`li`, {
                      children: (0, _.jsxs)(`a`, {
                        href: `https://www.youtube.com/user/SteamworksDev`,
                        children: [
                          _.Localize(`#Header_Global_Resources_VideoTutorials`),
                          ` `,
                          (0, _.jsx)(`span`, {
                            className: `oUG4HtjNf7s-`,
                          }),
                        ],
                      }),
                    }),
                  (0, _.jsxs)(`li`, {
                    children: [
                      (0, _.jsx)(`a`, {
                        target: `_blank`,
                        rel: `noreferrer`,
                        href: `https://twitter.com/Steamworks`,
                        children: (0, _.jsx)(`img`, {
                          src: _(_),
                          alt: `X: @Steamworks`,
                        }),
                      }),
                      (0, _.jsx)(`span`, {
                        "aria-hidden": `true`,
                        children: `|`,
                      }),
                      (0, _.jsx)(`a`, {
                        target: `_blank`,
                        rel: `noreferrer`,
                        href: `https://bsky.app/profile/partner.steamgames.com`,
                        children: (0, _.jsx)(`img`, {
                          src: _(_),
                          alt: `Bluesky: Steamworks`,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`a`, {
                      className: _,
                      href: `${_.HELP_BASE_URL + _().strISOCode + `/`}wizard/HelpWithPublishing`,
                      children: (0, _.jsx)(`span`, {
                        children: _.Localize(`#Footer_Sitemap_ContactSupport`),
                      }),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`ul`, {
                children: [
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(`em`, {
                      children: _.Localize(`#Header_Global_News`),
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.STORE_BASE_URL}news/group/4145017`,
                      children: [
                        _.Localize(`#Header_Global_News_Steamworks`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.STORE_BASE_URL}news/app/593110`,
                      children: [
                        _.Localize(`#Header_Global_News_Steam`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.STORE_BASE_URL}news/app/250820`,
                      children: [
                        _.Localize(`#Header_Global_News_SteamVR`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.STORE_BASE_URL}news/app/1675200`,
                      children: [
                        _.Localize(`#Header_Global_News_SteamDeck`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsxs)(`a`, {
                      href: `${_.STORE_BASE_URL}news/app/4165890`,
                      children: [
                        _.Localize(`#Header_Global_News_SteamFrame`),
                        ` `,
                        (0, _.jsx)(`span`, {
                          className: _,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var _ = `BvATwcUCrt0-`,
  _ = (0, _.createContext)({}),
  _ = (0, _.createContext)(() => {});
function _(_) {
  let [_, _] = (0, _.useState)({});
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _(_(), 1),
  _ = _.memo(function (_) {
    let {
        defaultTextSize: _,
        accentColor: _ = `blue`,
        dullColor: _ = `greyneutral`,
        successColor: _ = `green`,
        warningColor: _ = `yellow`,
        errorColor: _ = `red`,
        bodyTextColor: _ = `text-light`,
        successTextColor: _ = `text-green`,
        warningTextColor: _ = `text-red`,
        errorTextColor: _ = `text-red`,
        breakpoints: _,
        variants: _,
        children: _,
        zoo: _,
      } = _,
      _;
    return (
      _ &&
        (_ = {
          "--default-font-size": `var(--text-size-${_})`,
          "--default-line-height": `var(--line-height-${_})`,
          "--default-letter-spacing": `var(--letter-spacing-${_})`,
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          breakpoints: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(`div`, {
              className: (0, _.default)(_, `noOpinionatedGlobalStyles`),
              style: _,
              children: (0, _.jsxs)(_, {
                accentColor: _,
                dullColor: _,
                successColor: _,
                warningColor: _,
                errorColor: _,
                bodyTextColor: _,
                successTextColor: _,
                warningTextColor: _,
                errorTextColor: _,
                variants: _,
                children: [_, !1],
              }),
            }),
          }),
        }),
      })
    );
  });
function _(_) {
  let { children: _ } = _,
    { formFactorOverride: _ } = _();
  return (0, _.jsx)(_, {
    formFactor: _,
    children: _,
  });
}
var _ = 2048,
  _ = 8192,
  _ = 65536;
function _(_, ..._) {
  let [_, _] = _.useState([]),
    _ = _.useRef(void 0);
  (0, _.useEffect)(() => {
    (!_.current || !_(_.current, _)) &&
      ((_.current = _), _((_) => [..._, _(..._)]));
  });
  let [_, _] = _({
    queries: _,
    combine: (_) => {
      for (let _ = _.length - 1; _ >= 0; _--)
        if (!_[_].isLoading) return [_, _[_]];
      return [void 0, void 0];
    },
  });
  return (
    (0, _.useEffect)(() => {
      _ && _ > 0 && _((_) => _.slice(_));
    }, [_]),
    _
  );
}
function _(_, _ = {}) {
  let {
      nTimeoutMS: _ = 350,
      nTimeoutExtensionMS: _ = 125,
      nMaxTimeoutExtensions: _ = 3,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      let _ = performance.now();
      _.current
        ? _ - _.current.tsLastChange < _ * _ &&
          (_.current.tsScheduledTimeout = Math.max(
            performance.now() + _,
            _.current.tsScheduledTimeout,
          ))
        : (_.current = {
            tsLastChange: _,
            tsScheduledTimeout: performance.now() + _,
          });
      let _ = _.current.tsScheduledTimeout - performance.now(),
        _ = window.setTimeout(() => {
          (_.current = void 0), _(_);
        }, _);
      return () => window.clearTimeout(_);
    }, [_, _, _, _]),
    _
  );
}
var _ = `BlYyHj76z2o-`,
  _ = `LMMvBxfhWVA-`,
  _ = `_8DYZsysnGb8-`,
  _ = `gt4JgLCti1g-`,
  _ = `_8pm1FG-fP0Y-`,
  _ = `Xk-n4oaeFY4-`,
  _ = `CETz9kRNQpU-`,
  _ = `KUxONl08s6g-`,
  _ = `_4qNDwnTeOPM-`;
function _(_) {
  let { term: _, inputRef: _, fnDismiss: _, firstItemRef: _, ref: _ } = _;
  function _(_) {
    return {
      queryKey: [`AppSearch`, _],
      async queryFn() {
        let _ = await (
          await fetch(
            `${_.PARTNER_BASE_URL}/appsearch/suggestapps?json=1&apptype=1&term=${_}`,
          )
        ).json();
        if (!_.success) throw new _(_.success);
        return _.matches;
      },
    };
  }
  let _ = _(_, _(_)),
    _ = _(`clientWidth`),
    _ = _?.data?.length,
    _ = _.useRef(null);
  return (
    (0, _.useLayoutEffect)(() => {
      if (!_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect();
      (_.current.style.top = `${_.bottom}px`),
        (_.current.style.right = `${_ - _.right}px`);
    }, [_, _, _]),
    _
      ? (0, _.jsx)(`dialog`, {
          className: _,
          open: !0,
          ref: _(_, _),
          onKeyDown: (_) => {
            if (_.key === `Escape`) {
              _();
              return;
            }
            if (_.key === `ArrowDown`) {
              let _ = document.activeElement;
              if (_.dataset.index !== void 0) {
                let _ = parseInt(_.dataset.index) + 1,
                  _ = _.current?.querySelector(`[data-index="${_}"]`);
                if (_) {
                  _.focus(), _.preventDefault();
                  return;
                }
              }
              _.current?.querySelector(`[data-index="0"]`)?.focus(),
                _.preventDefault();
            }
            if (_.key === `ArrowUp`) {
              let _ = document.activeElement;
              if (_.dataset.index !== void 0) {
                let _ = parseInt(_.dataset.index) - 1,
                  _ = _.current?.querySelector(`[data-index="${_}"]`);
                if (_) {
                  _.focus(), _.preventDefault();
                  return;
                }
              }
              _.current
                ?.querySelector(`[data-index="${(_?.data?.length ?? 0) - 1}"]`)
                ?.focus(),
                _.preventDefault();
            }
          },
          onBlur: (_) => {
            (_.relatedTarget && _.current?.contains(_.relatedTarget)) || _();
          },
          children: (0, _.jsx)(`ul`, {
            children: _?.data?.map((_, _) =>
              (0, _.jsx)(
                `li`,
                {
                  children: (0, _.jsx)(_, {
                    suggestion: _,
                    index: _,
                    itemRef: _ === 0 ? _ : void 0,
                  }),
                },
                _._,
              ),
            ),
          }),
        })
      : null
  );
}
function _(_, _) {
  switch (_) {
    case 1:
      return _.Localize(`#AppType_TitleCase_Game`);
    case 2:
      return _.Localize(`#AppType_TitleCase_Application`);
    case 4:
      return _.Localize(`#AppType_TitleCase_Tool`);
    case 8:
      return _.Localize(`#AppType_TitleCase_Demo`);
    case 32:
      return _
        ? _.Localize(`#AppType_TitleCase_DLC_SeasonPass`)
        : _.Localize(`#AppType_TitleCase_DLC`);
    case 256:
      return _.Localize(`#AppType_TitleCase_Config`);
    case _:
      return _.Localize(`#AppType_TitleCase_Video`);
    case _:
      return _.Localize(`#AppType_TitleCase_Music`);
    case _:
      return _.Localize(`#AppType_TitleCase_Beta`);
    case 512:
      return _.Localize(`#AppType_TitleCase_Hardware`);
  }
}
function _(_) {
  let { suggestion: _, index: _, itemRef: _ } = _,
    _ = _(_.app_type, _.is_season_pass);
  return (0, _.jsxs)(`a`, {
    href: `${_.PARTNER_BASE_URL}apps/landing/${_._}`,
    "data-index": _,
    className: (0, _.default)({
      [_]: _.app_type === 1,
      [_]: _.app_type === 8,
      [_]: _.app_type === 32,
      [_]: _.app_type === _,
      [_]: _.app_type === _,
      [_]: _.app_type === _,
      [_]: _.app_type === 512,
    }),
    ref: _,
    children: [_ ? `[${_}] ` : ``, ` `, _.match],
  });
}
function _(_) {
  let [_, _] = _.useState(``),
    [_, _] = _.useState(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`input`, {
        type: `text`,
        _: `appHeaderFindInput`,
        ref: _,
        className: _,
        value: _,
        onChange: (_) => {
          _(_.target.value), _(!0);
        },
        placeholder: _.Localize(`#Header_Search_By_Appid`),
        autoComplete: `off`,
        onFocus: () => _(!0),
        onBlur: (_) => {
          (_.relatedTarget && _.current?.contains(_.relatedTarget)) || _(!1);
        },
        onKeyDown: (_) => {
          if (_.key === `Escape`) {
            _(!1);
            return;
          }
          _.key === `ArrowDown` && (_.current?.focus(), _.preventDefault());
        },
      }),
      _ &&
        (0, _.jsx)(_, {
          term: _,
          inputRef: _,
          fnDismiss: () => {
            _.current?.focus(), _(!1);
          },
          firstItemRef: _,
          ref: _,
        }),
    ],
  });
}
var _ = `Fmv95Ta-OoI-`,
  _ = `_6hAYQ4ex8K4-`,
  _ = `Ntl2YT9FCTw-`,
  _ = `i7dA47Hzs8I-`,
  _ = `nX9cH3agMVk-`,
  _ = `sSxftyZLpVM-`;
async function _(_) {
  location.href = `${_.PARTNER_BASE_URL}/dashboard/?requestedPrimaryPublisher=${_}`;
}
function _(_) {
  let { open: _, menuAction: _, onDismiss: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _ ? _.current?.showModal() : _.current?.close();
  }, [_]);
  async function _(_) {
    _(!0), _(_);
  }
  let _ = Object.entries(_.action_parameters?.affiliatedPublishers ?? {});
  return (0, _.jsx)(`dialog`, {
    ref: _,
    className: _,
    onMouseDown: (_) => _.target === _.current && _(),
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`hr`, {
          className: _,
        }),
        (0, _.jsxs)(`form`, {
          method: `dialog`,
          className: _,
          onSubmit: (_) => _(_.target.elements.namedItem(`publisher`)?.value),
          children: [
            (0, _.jsx)(`h2`, {
              children: _.Localize(`#change_partner_dialog_title`),
            }),
            (0, _.jsxs)(`p`, {
              children: [
                _.Localize(`#change_partner_dialog_desc_part1`),
                (0, _.jsx)(`br`, {}),
                _.Localize(`#change_partner_dialog_desc_part2`),
                (0, _.jsx)(`br`, {}),
                _.Localize(`#change_partner_dialog_desc_part3`),
              ],
            }),
            (0, _.jsx)(`select`, {
              disabled: _,
              name: `publisher`,
              defaultValue: _.action_parameters?.primaryPublisherId,
              children: _.map(([_, _]) =>
                (0, _.jsx)(
                  `option`,
                  {
                    value: _,
                    children: _,
                  },
                  _,
                ),
              ),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`input`, {
                  type: `submit`,
                  value: _.Localize(`#change_partner_dialog_submit`),
                  className: _,
                }),
                (0, _.jsx)(`input`, {
                  type: `button`,
                  value: _.Localize(`#change_partner_dialog_cancel`),
                  className: _,
                  onClick: _,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `data:image/png;base64,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`,
  _ = `` + new URL(`assets/B9IALK1_.svg`, import.meta.url).href,
  _ = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=`,
  _ = `data:image/jpeg;base64,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`,
  _ = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==`;
function _(_) {
  let { rgSources: _, onIncrementalError: _, alt: _, ..._ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _[_];
  return (0, _.jsx)(`img`, {
    onError: (_) => {
      _((_) => _ + 1), _?.(_, _, _);
    },
    alt: _,
    ..._,
    src: _,
  });
}
var _ = `jaUFLgHnJNs-`,
  _ = `cFn3BDbAK-g-`,
  _ = `hMka8STEycI-`,
  _ = `H3NNmSoIJ0E-`,
  _ = `mpKocPQdcN4-`,
  _ = `-Ga7mUEOfu4-`,
  _ = `lKaOyRYMeHU-`,
  _ = `sPCbtRPGIR4-`,
  _ = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function _(_, _) {
  let _ = `0000000000000000000000000000000000000000`;
  typeof _ == `string` ? (_ = _) : _ && (_ = _(_) || _);
  let _ = `.jpg`;
  _ === `0000000000000000000000000000000000000000` && (_ = _),
    _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  switch (
    (_ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (_ += _.slice(0, 2) + `/`)),
    (_ += _),
    _)
  ) {
    case `X-Small`:
    case `Small`:
      break;
    case `Medium`:
    case `MediumLarge`:
      _ += `_medium`;
      break;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      _ += `_full`;
      break;
  }
  return (_ += _), _;
}
function _(_) {
  return _
    ? (typeof _[Symbol.iterator] == `function`
        ? Array.from(_)
        : Object.values(_).filter((_) => typeof _ == `number`)
      )
        .map((_) => _.toString(16).padStart(2, `0`))
        .join(``)
    : ``;
}
function _(_) {
  let {
      avatarURL: _,
      size: _,
      statusStyle: _,
      statusPosition: _,
      className: _,
      children: _,
      isOnline: _,
      isInGame: _,
      isWatchingBroadcast: _,
      isAwayOrSnooze: _,
      alt: _,
    } = _,
    _ = [];
  return (
    _ && _.push(_),
    _.push(_(_ ?? `Medium`)),
    (0, _.jsxs)(`div`, {
      className: (0, _.default)(
        _,
        {
          [_]: !_,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
        },
        _,
      ),
      "data-size": _,
      "data-status-position": _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: _,
        }),
        (0, _.jsx)(_, {
          className: (0, _.default)(_),
          rgSources: _,
          draggable: !1,
          alt: _,
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let {
      playerLinkDetails: _,
      animatedAvatar: _,
      avatarFrame: _,
      size: _,
      ..._
    } = _,
    _ = _(_.public_data?.sha_digest_avatar, _);
  return (
    _?.image_small?.length &&
      (_ = _.MEDIA_CDN_COMMUNITY_URL + `images/` + _.image_small),
    (0, _.jsx)(_, {
      avatarURL: _,
      size: _,
      isOnline: _.private_data?.persona_state === 1,
      isInGame: _.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        _.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        _.private_data?.persona_state === 3 ||
        _.private_data?.persona_state === 4,
      ..._,
    })
  );
}
function _(_) {
  switch (_) {
    case `X-Small`:
    case `Small`:
      return _(_);
    case `Medium`:
    case `MediumLarge`:
      return _(_);
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      return _(_);
  }
}
function _(_, _) {
  return _?.public_data?.profile_url
    ? `${_.COMMUNITY_BASE_URL}id/${_.public_data.profile_url}`
    : _(_?.public_data?.steamid || _);
}
function _(_) {
  return _ ? `${_.COMMUNITY_BASE_URL}profiles/${_}` : ``;
}
var _ = {};
(_.arabic = () => _(() => import(`./CXRh2for.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./DhfZpnGN.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Db6QlCmU.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CxYWAkLH.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./D8WlaMGZ.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./CwS32Wby.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./Dpu__Y30.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./DLyCHUL7.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./DlB92d_O.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CB-Znb8_.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./CbjTV9P9.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Xxlh2u6E.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./nVv36xvQ.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./CTp5PEot.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./dmz8d30T.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./BNgmGbLG.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./D3FXvwLL.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DTbQR3hC.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./DKME1Jev.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./DkoXIs9D.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./CN1YlgzX.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./DirR0TcY.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./B6pNkZl-.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./CldGdb6E2.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./W3xbhZ1a2.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./CK6YAZUQ2.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./CoipiwE-2.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./lCCmLfi-2.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./CtxCBZGM2.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Be-JwR2a2.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./BVB0fHBN2.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./CZi0kN3X2.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAPBJREFUOMutk2FtwzAQhb+rCiAQMgYLA4dByyBjUAiDMgaFkDFYGSwMagZvf55Vz2qUSJslK/HlXe7ee2dYWZJmPdbM1pLUS3qXlCR1Trx4y7FkTP8s+e4tSd+S5G9dHatwPcDB/5j8fAFGYAHOABGRgTfHRmPqHHBrkpR2UP2FjdIm8AUsETH6fG1yzxGRLWgPDBGRW7VPlQOpqnoqTvj94U5Ru7Xwma3N+SJJhxWqec3qrYGZdlCYagp7RMxAtyriX20sGiRXuhkwF0eqtgutm7HpX0b56HFdJA0ez09XuTf2DsCrK39ExLLFddd1/gHUJ44xwhOaggAAAABJRU5ErkJggg==`,
  _ = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='56'%20height='15.965'%20viewBox='0%200%2056%2015.965'%3e%3cg%20id='Valve_logo'%20transform='translate(0%201.1)'%3e%3cpath%20id='polygon8'%20d='M136.917,40.923l-1.084-3.973h0l-.993,3.973Z'%20transform='translate(-117.521%20-33.163)'%20fill='%23e6674d'/%3e%3cg%20id='g10'%20transform='translate(0%20-1.1)'%3e%3cpath%20id='path12'%20d='M6.05,2.2,7.861,9.3,9.633,2.2h1.952L8.721,11.6H7L4.2,2.2H6.05Zm10.956,0h2.53l2.672,9.415h-1.9l-.629-2.35H16.864s-.488,1.888-.591,2.312c-.565.039-1.939,0-1.939,0L17.006,2.2Zm9.761,0h1.85v7.822H32.56V11.6H26.767V2.2Zm9.954,0,1.811,7.013L40.292,2.2h1.9l-2.851,9.415h-1.67L34.82,2.2h1.9Zm13.306,0v1.22H47.5V4.783h2.312V6H47.5V7.4h2.53v1.22H46.084V2.2ZM0,14.865H56V-1.1H0'%20transform='translate(0%201.1)'%20fill='%23e6674d'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,
  _ = `utyBpRH27s8-`,
  _ = `kPHkmO8SDEo-`,
  _ = `Pzo4HTbU2ww-`,
  _ = `hUI9zwlLnj4-`,
  _ = `P-yphO92zf0-`,
  _ = `ErOE6QMJikI-`,
  _ = `koi9cH-uhOw-`,
  _ = `_8vD2zrD5lSs-`,
  _ = `Be-rd5K88Cw-`,
  _ = `u8r5Q15VzXA-`,
  _ = `_-2dCJWDcaoQ-`,
  _ = `USDyb53meAE-`,
  _ = `M6Pai7xYxtg-`,
  _ = `_84yL92kXlzo-`,
  _ = `-QcLqQWGg4g-`,
  _ = `e-j9Y1J8-N8-`;
async function _(_, _) {
  let _ = new FormData();
  _.set(`language`, _);
  let _ = await fetch(_, {
    method: `POST`,
    credentials: `same-origin`,
    body: _,
  });
  if (!_._) throw _;
}
function _(_) {
  let {
      open: _,
      menuAction: _,
      changeLanguagePath: _,
      bLoggedIn: _,
      bSkipLanguagePrefs: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _ ? _.current?.showModal() : _.current?.close();
  }, [_]);
  async function _(_) {
    _(!0);
    try {
      await _(_, _);
    } catch (_) {
      console.error(_), _(!1);
      return;
    }
    _ && !_
      ? (location.href = _.STORE_BASE_URL + `account/languagepreferences/`)
      : _.href
        ? (location.href = _.href)
        : location.reload();
  }
  return (0, _.jsx)(`dialog`, {
    ref: _,
    className: _,
    onMouseDown: (_) => _.target === _.current && _(),
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`hr`, {
          className: _,
        }),
        (0, _.jsxs)(`form`, {
          method: `dialog`,
          className: _,
          onSubmit: (_) => _(_.target.elements.namedItem(`language`)?.value),
          children: [
            (0, _.jsx)(`select`, {
              disabled: _,
              name: `language`,
              onChange: (_) => _(_.target.value),
              defaultValue: _().strLanguage,
              children: _.menuAction.children?.map((_) =>
                (0, _.jsx)(
                  `option`,
                  {
                    value: _.action_parameters?.language,
                    children: _.label,
                  },
                  _.label,
                ),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`input`, {
                type: `submit`,
                value: `OK`,
                className: _,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_ = `/logout/`) {
  let _ = document.createElement(`form`);
  (_.action = _), (_.method = `POST`), document.body.appendChild(_), _.submit();
}
function _(_) {
  let { action: _ } = _,
    _ = (0, _.useContext)(_),
    _ = `span`,
    _ = {};
  return (
    _.href && ((_ = _), (_._ = _.href), (_.external = !_.ssr)),
    _.action &&
      (_.href || (_ = `button`),
      (_.onClick = async function (_) {
        switch ((_.preventDefault(), _.action)) {
          case 1:
            _(`/login/logout/`);
            return;
          case 2:
            if (_.action_parameters?.language === void 0)
              throw `Missing language`;
            try {
              await _(_.action_parameters.language, `/actions/setlanguage/`);
            } catch (_) {
              console.error(_);
              return;
            }
            _.href ? (location.href = _.href) : location.reload();
            return;
          case 3:
            _.showChangePrimaryPublisher?.();
            return;
        }
      })),
    (0, _.use)(_.Ready()),
    (0, _.jsx)(_, {
      menuTarget: (0, _.jsxs)(_, {
        ..._,
        tabIndex: 0,
        className: _,
        children: [
          _(
            _.label,
            (0, _.jsx)(`span`, {
              className: _,
            }),
          ),
          _.beta &&
            (0, _.jsx)(`span`, {
              className: `psuyf3BLnAU-`,
              children: _.Localize(`#beta_tag`),
            }),
        ],
      }),
      direction: `left`,
      className: _,
      children: _.children?.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            action: _,
          },
          _,
        ),
      ),
    })
  );
}
var _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.globalActions.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          direction: `down-left`,
          menuTarget: (0, _.jsx)(`button`, {
            className: _,
            children: (0, _.jsx)(`span`, {
              children: _.label,
            }),
          }),
          className: _,
          interactionMode: 1,
          children: (0, _.jsx)(_.Suspense, {
            children: _.children?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  action: _,
                },
                _,
              ),
            ),
          }),
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let {
    isAdmin: _,
    changePublisherAction: _,
    primaryPublisherName: _,
    showChangePrimaryPublisher: _,
  } = _;
  return _
    ? (0, _.jsxs)(`span`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _(_),
            alt: `Valve`,
          }),
          ` Admin`,
        ],
      })
    : _ && _.action_parameters?.primaryPublisherId
      ? (0, _.jsx)(`button`, {
          className: (0, _.default)(_, _),
          onClick: _,
          children: (0, _.jsxs)(`span`, {
            children: [
              _.action_parameters.affiliatedPublishers?.[
                _.action_parameters?.primaryPublisherId
              ],
              (0, _.jsx)(`img`, {
                src: _(_),
                alt: _.label,
              }),
            ],
          }),
        })
      : _
        ? (0, _.jsx)(`span`, {
            className: _,
            children: _,
          })
        : null;
}
function _(_) {
  let {
    userDetails: _,
    isAdmin: _,
    primaryPublisherName: _,
    showChangePrimaryPublisher: _,
    disableLogin: _,
  } = _;
  if (!_)
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            userDetails: _,
            globalActions: _.partnerActions,
          }),
        }),
        !_ &&
          (0, _.jsx)(_, {
            className: `FPtglKnEHLg-`,
            _: _.PARTNER_BASE_URL,
            children: _.Localize(`#global_menu_sign_in`),
          }),
      ],
    });
  let _ = _.partnerActions[0]?.children?.find((_) => _.action === 3);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              isAdmin: _,
              changePublisherAction: _,
              primaryPublisherName: _,
              showChangePrimaryPublisher: _,
            }),
          }),
          (0, _.jsx)(_, {
            userDetails: _,
            globalActions: _.partnerActions,
            showChangePrimaryPublisher: _,
          }),
        ],
      }),
      (0, _.jsx)(`a`, {
        className: _,
        href: _(_),
        children: (0, _.jsx)(_, {
          playerLinkDetails: _,
          statusPosition: `border`,
          alt: ``,
          role: `presentation`,
          size: `Small`,
        }),
      }),
    ],
  });
}
var _ = `se-ZqoSVb5g-`,
  _ = `_3D317yV5pgs-`,
  _ = `_8Vxbob9zGFE-`,
  _ = `u1dHrmLSONE-`,
  _ = `xFeV0n18Rpk-`,
  _ = `_7Z-yNozFLAA-`,
  _ = `-yw9edbtneI-`,
  _ = `vuLwb86et6k-`,
  _ = `lmB2yRgxQIY-`,
  _ = `IdSDaNJ8oJQ-`,
  _ = `ueR2m2rmU3U-`,
  _ = `QxbQUvVFHg8-`,
  _ = `_8DNUMf-zqBo-`,
  _ = `UX63Z4w8-ZI-`,
  _ = `_1F31DJHdJV8-`,
  _ = `eCzUEcZ53iM-`,
  _ = `indJGiftSCA-`,
  _ = `NG2I1oQnk14-`,
  _ = `YGLlYfMk-MQ-`,
  _ = `Qgqu3llYQ7g-`,
  _ = `pfAYXai5tng-`,
  _ = `bdkp86qC6Ew-`,
  _ = `ptN5Yk4eGpo-`,
  _ = `_0NHIHHtg-Nc-`,
  _ = `lpTo-J5cxcc-`,
  _ = `_5tNguSDCocs-`;
function _(_) {
  let { navContent: _, children: _, labelAddition: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  if (!_ && (!_.children || _.children.length === 0))
    return (0, _.jsx)(_, {
      item: _,
      className: _,
      responsive: !0,
    });
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight}px`,
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )));
  }
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
            `${_.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )),
      _.current.addEventListener(`finish`, () => {
        _.current && (_.current.open = !1);
      }));
  }
  function _() {
    _.current?.open ? _() : _.current && _();
  }
  return (0, _.jsxs)(`details`, {
    name: `responsive-menu`,
    className: _,
    ref: _,
    onToggle: _,
    children: [
      (0, _.jsxs)(`summary`, {
        className: _,
        ref: _,
        children: [
          _.label_responsive ?? _.label,
          ` `,
          _,
          ` `,
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        ref: _,
        children: [
          _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                className: _,
                responsive: !0,
              },
              _,
            ),
          ),
          _,
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      userDetails: _,
      menuItems: _,
      globalActions: _,
      isAdmin: _,
      primaryPublisherName: _,
      showChangePrimaryPublisher: _,
      open: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    _.current &&
      (_
        ? (_.current?.showModal(),
          _.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(-280px)`, `translateX(0)`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )))
        : _.current &&
          (_.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(0)`, `translateX(-280px)`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )),
          _.current.addEventListener(`finish`, () => _.current?.close())));
  }, [_]);
  let _ =
      _.find((_) => _._ === `language`) ??
      _[0]?.children?.find((_) => _.action === 2),
    _ = _[0]?.children?.find((_) => _.action === 3);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`dialog`, {
        className: (0, _.default)(_, _(_.EREALM) && `_25BsuQ-nkkQ-`),
        ref: _,
        onMouseDown: (_) => _.target === _.current && _(),
        onKeyDown: (_) => _.key === `Escape` && _(),
        inert: !_,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !_ &&
              (0, _.jsx)(_, {
                className: (0, _.default)(`_0NHIHHtg-Nc-`),
                item: {
                  href: _.PARTNER_BASE_URL,
                  label: _.Localize(`#global_menu_sign_in`),
                },
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `_6UMWg0ooQVE-`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `_6UW7jNsGi-c-`,
                    children: (0, _.jsx)(_, {
                      isAdmin: _,
                      changePublisherAction: _,
                      primaryPublisherName: _,
                      showChangePrimaryPublisher: _,
                    }),
                  }),
                  (0, _.jsx)(`a`, {
                    className: `GgQpfOUzJRw-`,
                    href: _(_),
                    children: _.public_data?.persona_name,
                  }),
                ],
              }),
            _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  navContent: _,
                },
                _,
              ),
            ),
            (0, _.jsxs)(`div`, {
              className: `minor_menu_items`,
              children: [
                !_(_.EREALM) &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsx)(`button`, {
                      className: (0, _.default)(
                        `_0NHIHHtg-Nc-`,
                        `rD-xbz5iioE-`,
                      ),
                      onClick: () => _(!0),
                      children: _.Localize(`#global_menu_change_language`),
                    }),
                  }),
                _ &&
                  (0, _.jsx)(`button`, {
                    className: (0, _.default)(`_0NHIHHtg-Nc-`, `rD-xbz5iioE-`),
                    onClick: () => _(`/login/logout/`),
                    children: _.Localize(`#global_menu_sign_out`),
                  }),
              ],
            }),
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          open: _,
          onDismiss: () => _(!1),
          menuAction: _,
          changeLanguagePath: `${_.PARTNER_BASE_URL}actions/setlanguage/`,
          bLoggedIn: _ != null,
          bSkipLanguagePrefs: !0,
        }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`span`, {
          className: _,
          children: [
            `You are spoofing `,
            (0, _.jsx)(`a`, {
              href: `${_.COMMUNITY_BASE_URL}${_.spoofProfileUrl}`,
              children: _.spoofUsername,
            }),
          ],
        }),
        (0, _.jsx)(`button`, {
          className: void 0,
          onClick: () => {
            _(_), window.location.reload();
          },
          children: `End Spoofing`,
        }),
      ],
    }),
  });
}
var _ = (0, _.forwardRef)(function (_, _) {
  let { item: _, responsive: _, className: _, ..._ } = _,
    _ = _.href && location.href.startsWith(_.href),
    _ = _.label;
  if ((_ && (_ = _.label_responsive ?? _.label), _.separator))
    return (0, _.jsx)(`hr`, {});
  let _ = _.href && !_.href.startsWith(_.PARTNER_BASE_URL);
  return _.href
    ? (0, _.jsx)(_, {
        className: (0, _.default)(
          _,
          _,
          _.trusted_user_only && `NatQlFH7tfE-`,
          _ && `EEKCA86Fdxk-`,
          _.active && `dAA2MVOKUJk-`,
        ),
        _: _.href ?? ``,
        "aria-current": _ ? `page` : void 0,
        ref: _,
        ..._,
        children: _,
      })
    : (0, _.jsx)(`button`, {
        className: (0, _.default)(_, _.active && `dAA2MVOKUJk-`),
        ref: _,
        ..._,
        type: `button`,
        children: _,
      });
});
function _(_) {
  let _ = _();
  return (0, _.jsxs)(`nav`, {
    className: _,
    children: [
      (0, _.jsx)(`a`, {
        href: _.PARTNER_BASE_URL,
        children: (0, _.jsx)(`img`, {
          src: _(_),
          alt: _ ? _.Localize(`#Steamworks_Logo_Label`) : ``,
          className: _,
        }),
      }),
      (0, _.jsx)(`ul`, {
        className: _,
        children: _.navContent.map((_, _) =>
          (0, _.jsx)(
            `li`,
            {
              children: (0, _.jsx)(_, {
                menuTarget: (0, _.jsx)(_, {
                  item: _,
                  className: _,
                }),
                direction: `down`,
                className: _,
                _: `ul`,
                children: _.children?.map((_, _) =>
                  (0, _.jsx)(
                    `li`,
                    {
                      children: (0, _.jsx)(_, {
                        item: _,
                        className: _,
                      }),
                    },
                    _,
                  ),
                ),
              }),
            },
            _,
          ),
        ),
      }),
      (0, _.jsx)(_, {
        userDetails: _.userDetails,
        partnerActions: _.globalActions,
        isAdmin: _.isAdmin,
        primaryPublisherName: _.primaryPublisherName,
        showChangePrimaryPublisher: _.showChangePrimaryPublisher,
        disableLogin: _.disableLogin,
      }),
    ],
  });
}
function _() {
  let [_, _] = (0, _.useState)(_.IsReady());
  return (
    (0, _.useEffect)(() => {
      let _ = !0;
      return (
        _.Ready().then(() => {
          _ && _(!0);
        }),
        () => {
          _ = !1;
        }
      );
    }, []),
    _
  );
}
function _(_) {
  let _ = _();
  return (0, _.jsxs)(`nav`, {
    className: _,
    children: [
      (0, _.jsx)(`ul`, {
        className: _,
        children: _.navContent.map((_, _) =>
          (0, _.jsx)(
            `li`,
            {
              children: (0, _.jsx)(_, {
                menuTarget: (0, _.jsx)(_, {
                  item: _,
                  className: _,
                }),
                direction: `down`,
                className: _,
                _: `ul`,
                children: _.children?.map((_, _) =>
                  (0, _.jsx)(
                    `li`,
                    {
                      children: (0, _.jsx)(_, {
                        item: _,
                        className: _,
                      }),
                    },
                    _,
                  ),
                ),
              }),
            },
            _,
          ),
        ),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _ && (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _.globalActions[0]?.children?.find((_) => _.action === 3),
    _ = () => {
      _(!0);
    },
    [_, _] = (0, _.useState)(!1),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              navContent: _.menuItems,
              userDetails: _.userDetails,
              globalActions: _.globalActions,
              isAdmin: _.isAdmin,
              primaryPublisherName: _.primaryPublisherName,
              showChangePrimaryPublisher: _,
              disableLogin: _.disableLogin,
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`button`, {
                className: _,
                onClick: () => _(!0),
                "aria-expanded": _,
                children: (0, _.jsx)(`img`, {
                  src: _(_),
                  alt: _ ? _.Localize(`#Aria_Navigation`) : ``,
                  className: _,
                }),
              }),
              (0, _.jsx)(`a`, {
                href: _.PARTNER_BASE_URL,
                className: _,
                children: (0, _.jsx)(`img`, {
                  src: _(_),
                  alt: _ ? _.Localize(`#Steamworks_Logo_Label`) : ``,
                }),
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              navContent: _.partnerMenuItems,
            }),
          }),
          _.spoof &&
            (0, _.jsx)(_, {
              spoofProfileUrl: _.spoof.profileUrl,
              spoofUsername: _.spoof.username,
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              open: _,
              onDismiss: () => _(!1),
              menuAction: _,
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          ..._,
          showChangePrimaryPublisher: _,
          open: _,
          onDismiss: () => _(!1),
        }),
    ],
  });
}
var _ = (0, _.createContext)(void 0).Provider;
function _(_) {
  let { steamid: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        useActiveAccount: () => (!_ || _ == `0` ? `` : _),
      }),
      [_],
    );
  return (0, _.createElement)(
    _,
    {
      value: _,
    },
    _,
  );
}
var _ = class {
    async GetObject(_) {
      try {
        let _ = await this.GetString(_);
        return _ ? JSON.parse(_) : null;
      } catch {
        return null;
      }
    }
    async StoreObject(_, _) {
      return this.StoreString(_, JSON.stringify(_));
    }
  },
  _ = class extends _ {
    GetString(_) {
      return Promise.resolve(localStorage.getItem(_));
    }
    StoreString(_, _) {
      return localStorage.setItem(_, _), Promise.resolve();
    }
    RemoveObject(_) {
      return localStorage.removeItem(_), Promise.resolve();
    }
  };
function _(_) {
  let { steamid: _, children: _ } = _,
    _ = _.useRef(`steamInterface` in _ ? _.steamInterface : void 0),
    _ = _.useRef(void 0),
    _ = `strWebAPIToken` in _ ? _.strWebAPIToken : void 0;
  return (0, _.jsx)(_, {
    useActiveSteamInterface: _.useCallback(
      () => ((_.current ||= new _(_.WEBAPI_BASE_URL, _, !1, _)), _.current),
      [_],
    ),
    useStorage: _.useCallback(() => ((_.current ||= new _()), _.current), []),
    children: (0, _.jsx)(_, {
      steamid: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
async function _(_) {
  try {
    let _ = await (
      await fetch(`${_.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
        method: `POST`,
        body: new URLSearchParams({
          redir: window.location.href,
        }),
        credentials: `include`,
        mode: `cors`,
      })
    ).json();
    if (!_ || !_.success)
      return console.error(`ajaxrefresh failed: "${_.error}"`), ``;
    if (_.success) {
      let _ = await (
        await fetch(_.login_url, {
          method: `POST`,
          body: new URLSearchParams({
            ..._,
            prior: _,
          }),
        })
      ).json();
      return !_ || _.result !== 1
        ? (console.error(`Token refresh: failed to set token: ${_.result}`), ``)
        : _.token;
    }
  } catch (_) {
    console.error(`Failed to refresh token: ${_}`);
  }
  return ``;
}
var _ = _({
    Arrow: () => _,
    BackgroundAnimation: () => _,
    BasicContextMenuContainer: () => _,
    BasicContextMenuHeader: () => _,
    BasicContextMenuHeaderShrinkableSpacing: () => _,
    BasicContextMenuModal: () => _,
    Capitalized: () => _,
    ContextMenuSeparator: () => _,
    Destructive: () => _,
    Emphasis: () => _,
    Focused: () => _,
    "ItemFocusAnim-darkGrey": () => _,
    "ItemFocusAnim-darkGreySettings": () => _,
    "ItemFocusAnim-darkerGrey": () => _,
    "ItemFocusAnim-darkerGrey-nocolor": () => _,
    "ItemFocusAnim-green": () => _,
    "ItemFocusAnim-grey": () => _,
    "ItemFocusAnim-translucent-white-10": () => _,
    "ItemFocusAnim-translucent-white-20": () => _,
    "ItemFocusAnimBorder-darkGrey": () => _,
    Label: () => _,
    MenuSectionHeader: () => _,
    Positive: () => _,
    Selected: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuFade: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    focusAnimation: () => _,
    hasSubMenu: () => _,
    hoverAnimation: () => _,
    slideInAnimation: () => _,
  }),
  _ = `800ms`,
  _ = `zIqKYLyjLDE-`,
  _ = `QEqisB3QH6Y-`,
  _ = `_10VZDl1S08Y-`,
  _ = `l55Qe9TRfWE-`,
  _ = `P4ZPME0FQ0Q-`,
  _ = `J49QvnbmR4o-`,
  _ = `UsMszraE8Ts-`,
  _ = `_4opXG7WIDiM-`,
  _ = `SY8HeIZAWTY-`,
  _ = `ifEDAYoKQZA-`,
  _ = `c9cBCqvRKIo-`,
  _ = `N94BC56I6uk-`,
  _ = `_4-FaJ3cVKd8-`,
  _ = `_4Z62LmEDnlc-`,
  _ = `Ot2l8QCFbYw-`,
  _ = `O10dnuCtwuk-`,
  _ = `_9kFtKJpEINs-`,
  _ = `Ajs9PcIe9Ak-`,
  _ = `fj-p9B7Ar2Q-`,
  _ = `mZXAxtt8FmM-`,
  _ = `cPv4Xc7IDnQ-`,
  _ = `InE8BB-Fxp8-`,
  _ = `xJCVpcgk4LA-`,
  _ = `m93aoWJlOCE-`,
  _ = `YvNC8luwtfc-`,
  _ = `_5A0hah79ug8-`,
  _ = `Mal6k7DjPUQ-`,
  _ = `CT39We8M7uI-`,
  _ = `bESapfyiJAQ-`,
  _ = `YeVMYyR0HhM-`,
  _ = `_3h1WS4g7IRM-`,
  _ = `UDD33NXGwZo-`,
  _ = `mMTi3RvNMbc-`,
  _ = `HPrMq1RsxVs-`,
  _ = `D0Bepl124b8-`,
  _ = {
    "duration-app-launch": `800ms`,
    BasicContextMenuModal: _,
    BasicContextMenuHeader: _,
    BasicContextMenuHeaderShrinkableSpacing: _,
    BasicContextMenuContainer: _,
    slideInAnimation: _,
    contextMenu: _,
    contextMenuContents: _,
    hasSubMenu: _,
    contextMenuFade: _,
    contextMenuItem: _,
    Destructive: _,
    Positive: _,
    Emphasis: _,
    active: _,
    Selected: _,
    Focused: _,
    Capitalized: _,
    MenuSectionHeader: _,
    UpperCase: _,
    SubMenu: _,
    ContextMenuSeparator: _,
    Label: _,
    Arrow: _,
    BackgroundAnimation: _,
    "ItemFocusAnim-darkerGrey-nocolor": `YvNC8luwtfc-`,
    "ItemFocusAnim-darkerGrey": `_5A0hah79ug8-`,
    "ItemFocusAnim-darkGreySettings": `Mal6k7DjPUQ-`,
    "ItemFocusAnim-darkGrey": `CT39We8M7uI-`,
    "ItemFocusAnim-grey": `bESapfyiJAQ-`,
    "ItemFocusAnim-translucent-white-10": `YeVMYyR0HhM-`,
    "ItemFocusAnim-translucent-white-20": `_3h1WS4g7IRM-`,
    "ItemFocusAnimBorder-darkGrey": `UDD33NXGwZo-`,
    "ItemFocusAnim-green": `mMTi3RvNMbc-`,
    focusAnimation: _,
    hoverAnimation: _,
  };
function _(_) {
  let { managerOverride: _ } = _,
    _ = _(),
    _ = _ ?? _,
    _ = _();
  return (
    _(_.OnMenusChanged, _),
    (0, _.jsx)(_, {
      active: !!_.ActiveMenu,
      children: (0, _.jsx)(_, {
        ActiveMenu: _.ActiveMenu,
      }),
    })
  );
}
function _(_) {
  let { ActiveMenu: _ } = _,
    _ = _.useCallback(() => {
      _?.OnCancel();
    }, [_]);
  _.useEffect(() => () => _?.Hide(), [_]);
  let _ = [],
    _ = null;
  _(() => {
    for (let _ = _; _ && _.visible; _ = _.submenu)
      _.push(
        (0, _.jsx)(
          _,
          {
            instance: _,
          },
          _.key,
        ),
      ),
        (_ = _.label);
  });
  let _ = _.useCallback(
    (_) => {
      _.currentTarget == _.target && _();
    },
    [_],
  );
  return (0, _.jsx)(_, {
    padding: `none`,
    children: (0, _.jsxs)(`div`, {
      onClick: _,
      className: _(`BasicUIContextMenu`, _),
      children: [
        _ &&
          (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(`div`, {
              className: `QEqisB3QH6Y-`,
              children: _,
            }),
          }),
        (0, _.jsx)(_, {
          className: _,
          onCancelButton: _,
          onClick: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { instance: _ } = _,
    _ = _(),
    _ = _.useCallback(() => {
      _ && _.PlayNavSound(_.FailedNav);
    }, [_]),
    _ = _.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 1,
        callbacks: {
          onDisabledItemSelected: _,
        },
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.ReactElement,
    }),
  });
}
function _() {
  return _.useMemo(() => _(), []);
}
function _() {
  return function (_) {
    let {
        refNavTree: _,
        className: _,
        active: _,
        children: _,
        modalKey: _,
      } = _,
      _ = _.useRef(void 0);
    return (
      _(_, _, !0),
      (0, _.jsx)(_, {
        className: _,
        navTreeRef: _(_, _),
        modal: !0,
        enabled: _,
        navID: `ModalDialogOverlay_${_}`,
        children: _,
      })
    );
  };
}
function _(_) {
  let {
    className: _,
    onEscKeypress: _,
    padding: _ = `standard`,
    bGamepadUIScrollWithin: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    className: _(_, _ == `standard` && `OaiXfc-WlaQ-`, _ && `dz-Wyy2Ybkc-`, _),
    onCancelButton: _,
    focusableIfEmpty: !0,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _.useMemo(
    () => ({
      ModalPosition: _,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () => ({
        DropDownMenu: _,
        Content: _,
      }),
      [],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bUseDialogElement: !1,
        DialogWrapper: _,
        ContextMenuComponent: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = {
      bRenderOverlayAtRoot: !0,
      bUsePopups: !1,
      ..._,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = `egPOgs7Fr6c-`,
  _ = `t-LlQicBZjE-`,
  _ = `zTCd-h-95L8-`,
  _ = `gIVmM0slMaI-`,
  _ = _({
    Component: _,
  });
function _({ children: _ }) {
  let _ = _.useLoaderData(),
    _ = _();
  return (0, _.jsx)(_, {
    storeBrowseContext: _.storeBrowseContext,
    strWebAPIToken: _.strWebAPIToken,
    steamid: _.steamid,
    children: (0, _.jsxs)(`html`, {
      lang: _().strISOCode,
      children: [
        (0, _.jsx)(`head`, {
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(`body`, {
          children: (0, _.jsx)(_, {
            navID: `PartnerTemplate`,
            disabledRoot: !_,
            historyMode: `navigationapi`,
            children: (0, _.jsx)(`div`, {
              children: (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      menuItems: _.mainNav,
                      partnerMenuItems: _.partnerNav,
                      globalActions: _.globalActions,
                      userDetails: _.userDetails,
                      isAdmin: _.bIsAdmin,
                      primaryPublisherName: _.primaryPublisherName,
                      spoof: _.spoof,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _(_, _.bWidePage && `PuT1U9sg3Rc-`),
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _,
                        }),
                        (0, _.jsx)(_, {
                          children: (0, _.jsx)(_, {
                            children: _,
                          }),
                        }),
                      ],
                    }),
                    _.bShowFooter &&
                      (0, _.jsx)(_, {
                        bSuppressConfidentialityWarning:
                          _.bSuppressConfidentialityWarning,
                        bShowVideo: _.bShowVideo,
                      }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        buttonClassName: _,
                        buttonText: `Performance data`,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { children: _, strWebAPIToken: _, steamid: _, storeBrowseContext: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      strWebAPIToken: _,
      steamid: _,
      children: (0, _.jsx)(_, {
        context: _,
        msDelayBatch: 250,
        children: _,
      }),
    }),
  });
}
export { _ as route };
