var _ = _(_());
function _(_) {
  return _.COMMUNITY_BASE_URL + `linkfilter/?u=` + encodeURIComponent(_);
}
function _(_, _) {
  if (_.startsWith(`steam://`) || _.startsWith(`/`)) return !1;
  let _ = _(_).toLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
    _ = _(_.STORE_BASE_URL).toLowerCase(),
    _ = _(_.HELP_BASE_URL).toLowerCase(),
    _ = _(_.PARTNER_BASE_URL || ``).toLowerCase();
  return (
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== `support.steampowered.com` &&
    _ !== _ &&
    _ !== `www.dota2.com` &&
    (!_ || _.filter((_) => _ == _).length == 0)
  );
}
var _ = _();
function _(_, _) {
  let _;
  (_ = `currentTarget` in _ ? _.currentTarget.ownerDocument.defaultView : _),
    _.indexOf(`steam://`) == 0
      ? _(_, `URL.ExecuteSteamURL`)
        ? _.SteamClient.URL.ExecuteSteamURL(_)
        : (_.location.href = _)
      : _.open(
          _,
          void 0,
          `menubar,location,resizable,scrollbars,status,noopener`,
        );
}
function _(_) {
  let {
    bDisableContextMenu: _,
    onContextMenu: _,
    bForceExternal: _,
    href: _,
    bUseLinkFilter: _,
    getPIDFromEvent: _,
    ..._
  } = _;
  !_ && !_ && (_ = _), _ && _ && (_ = _(_)), (_ ||= () => 0);
  let _ = (_) => {
    _.preventDefault(),
      _ &&
        _(window, _, {
          bForceExternal: !!_,
          bUseLinkFilter: !!_,
          unPID: _(_),
        });
  };
  return (0, _.jsx)(`a`, {
    ..._,
    href: _,
    onClick: _,
    onContextMenu: _,
    rel: _ ? `noopener noreferrer` : void 0,
    children: _.children,
  });
}
function _(_) {
  let { strURL: _, opts: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onSelected: () => {
          _(_);
        },
        children: _(`#ContextMenu_CopyLinkURL`),
      }),
      (0, _.jsx)(_, {
        onSelected: (_) => {
          _(_, _, _);
        },
        children: _(`#ContextMenu_OpenLinkInNewWindow`),
      }),
    ],
  });
}
function _(_, _) {
  let _ = _.currentTarget;
  return _(
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        strURL: _.href,
        opts: _,
      }),
    }),
    _,
  );
}
function _(_, _, _ = {}) {
  let { bForceExternal: _, unPID: _, bUseLinkFilter: _ } = _,
    _;
  if (
    ((_ = `currentTarget` in _ ? _.currentTarget.ownerDocument.defaultView : _),
    _(`WebChat.OpenURLInClient`))
  ) {
    SteamClient.WebChat.OpenURLInClient(_, _ || 0, !!_);
    return;
  }
  _.indexOf(`steam://`) == 0 && _.indexOf(`steam://remoteplay/connect`) != 0
    ? (_.location.href = _)
    : _.open(
        _,
        void 0,
        `menubar,location,resizable,scrollbars,status,noopener` +
          (_ ? `,noreferrer` : ``),
      );
}
var _ = (_) =>
  (0, _.jsx)(_.Fragment, {
    children: _.condition ? _.wrap(_.children) : _.children,
  });
_(
  [_],
  class {
    m_Promise;
    m_Value = void 0;
    constructor(_) {
      _(this), (this.promise = _);
    }
    set promise(_) {
      (this.m_Promise = _),
        (this.m_Value = void 0),
        _?.then((_) => {
          this.m_Promise === _ && (this.m_Value = _);
        });
    }
    get promise() {
      return this.m_Promise;
    }
    get value() {
      return this.m_Value;
    }
  }.prototype,
  `m_Value`,
  void 0,
);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(`div`, {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_) {
  if (typeof _ != `string`) return NaN;
  let _ = !_.includes(`ms`) && _.includes(`s`),
    _ = Number.parseFloat(_);
  return _ && (_ *= 1e3), _;
}
export { _, _, _, _, _, _, _ };
