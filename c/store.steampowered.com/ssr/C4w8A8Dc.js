var _ = _(_(), 1),
  _ = {};
(_.arabic = () => _(() => import(`./OQyxh8vK.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./Y3YrLOr0.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./_2Ti4aHj.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./Y6YX6ZWT.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./CeA3ppfQ.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./CpQvK7QT.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./BubpEp46.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./DDxDB1Ha.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./BeihdlO3.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./BUjGlod-.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./C1D2yOWb.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./D8G9Wlxj.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./DM9EBDYN.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./De0NHDCZ.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./BGcakV3h.js`), [], import.meta.url)),
  (_.korean = () => _(() => import(`./C9JTf6fi.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./DdvF32E7.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./CslnHwOs.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./C3sBz_HX.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./CWMkxTXo.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./UrxA8yvx.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./WR_cUivp.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./Bn39wRvi.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./B5_7-iFs.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./B0dBieCS.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./D181i8PU.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./Y6XFa73K.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./BTObMtPJ.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./CG_enuSa.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./BfLb_p5m.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./B4eDS75t.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./91OVgSpq.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _(),
  _ = (0, _.createContext)(-1),
  _ = class extends _.Component {
    state = {};
    static getDerivedStateFromError(_) {
      return _ instanceof Error
        ? {
            error: {
              message: _.message,
            },
          }
        : {
            error: JSON.parse(JSON.stringify(_)),
          };
    }
    static getDerivedStateFromProps(_, _) {
      return _.renderContext == _.renderContext
        ? null
        : {
            renderContext: _.renderContext,
            error: void 0,
          };
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : (0, _.jsx)(this.props.RenderErrorComponent, {
            error: this.state.error,
            className: this.props.errorClassName,
          });
    }
  };
function _(_) {
  let _ = _(),
    _ = (0, _.useContext)(_) + 1;
  (_.deepestRenderedErrorBoundaryId ?? -1) < _ &&
    (_.deepestRenderedErrorBoundaryId = _);
  let _ = _.RenderErrorComponent ?? _;
  return _.error && _ === _.deepestRenderedErrorBoundaryId
    ? (0, _.jsx)(_, {
        error: _.error,
        className: _.errorClassName,
      })
    : (0, _.jsx)(_.Provider, {
        value: _,
        children: (0, _.jsx)(_, {
          RenderErrorComponent: _,
          errorClassName: _.errorClassName,
          renderContext: _,
          children: _.children,
        }),
      });
}
function _(_) {
  let _ = _.error;
  return typeof _ != `object` || !_
    ? (0, _.jsx)(`div`, {
        className: _.className,
        children: (0, _.jsx)(_, {
          hasDetails: !1,
        }),
      })
    : `localizedErrorMessage` in _ && typeof _.localizedErrorMessage == `string`
      ? (0, _.jsxs)(`div`, {
          className: _.className,
          children: [
            (0, _.jsx)(_, {
              hasDetails: !0,
            }),
            (0, _.jsx)(`span`, {
              children: _.localizedErrorMessage,
            }),
          ],
        })
      : `stack` in _ && typeof _.stack == `string`
        ? (0, _.jsxs)(`div`, {
            className: _.className,
            children: [
              (0, _.jsx)(_, {
                hasDetails: !0,
              }),
              (0, _.jsx)(`pre`, {
                children: _.stack,
              }),
            ],
          })
        : (0, _.jsx)(`div`, {
            className: _.className,
            children: (0, _.jsx)(_, {
              hasDetails: !1,
            }),
          });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        children: _.Localize(`#SomethingWentWrong_title`),
      }),
      _.hasDetails
        ? (0, _.jsx)(`p`, {
            children: _.Localize(`#SomethingWentWrong_subtitle_withDetails`),
          })
        : (0, _.jsx)(`p`, {
            children: _.Localize(`#SomethingWentWrong_subtitle_noDetails`),
          }),
    ],
  });
}
export { _ };
