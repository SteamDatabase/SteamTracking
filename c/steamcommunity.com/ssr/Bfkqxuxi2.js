var _ = _(_(), 1);
function _(_, _) {
  return _ === void 0 ? _[``] : _[_];
}
var _ = _(),
  _ = {
    _: {
      Constructor: _,
    },
    _: {
      Constructor: _,
    },
    _: {
      Constructor: _,
    },
    _: {
      Constructor: _,
    },
    strike: {
      Constructor: _,
    },
    color: {
      Constructor: _,
    },
  };
function _(_) {
  return (0, _.jsx)(`b`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`i`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`u`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`code`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`s`, {
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.args),
    _ = {};
  return (
    _ &&
      (_.match(/^#[a-fA-F0-9]+$/) || _.match(/rgba?\([0-9, ]+\)$/)) &&
      (_.color = _),
    (0, _.jsx)(`span`, {
      style: _,
      children: _.children,
    })
  );
}
var _ = `_4N-FE8tcFvI-`,
  _ = `omWCt14mxbU-`,
  _ = {
    _: {
      Constructor: _,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      skipFollowingNewline: !0,
    },
    code: {
      Constructor: _,
      skipFollowingNewline: !0,
    },
    quote: {
      Constructor: _,
      skipFollowingNewline: !0,
      skipInternalNewline: !0,
    },
    _: {
      Constructor: _,
      skipFollowingNewline: !0,
    },
  };
function _(_) {
  return (0, _.jsx)(`h1`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`h2`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`h3`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`pre`, {
    className: _,
    children: (0, _.jsx)(`code`, {
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`blockquote`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      _.children,
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [(0, _.jsx)(`hr`, {}), _.children],
  });
}
function _(_) {
  let _ = _.Children.toArray(_)[0];
  return typeof _ == `string` ? _ : void 0;
}
function _(_, _) {
  if (!_) return;
  let _ = _.startsWith(`steamcommunity.com/`) ? `https://` + _ : _;
  if (_.match(/^https?:\/\//))
    return {
      strURL: _,
      bFromBody: !1,
      bHasCustomText: !_?.match(/^https?:\/\//i),
    };
}
function _(_) {
  let _ = _(_.args) ?? _(_.args, `href`);
  if (_) return _(_, _(_.children));
  if (typeof _.children == `string`) {
    let _ = _.children.trim();
    if (_.exec(_)?.[0] == _)
      return {
        strURL: _,
        bFromBody: !0,
        bHasCustomText: !1,
      };
  }
}
function _(_) {
  let _ = _(_);
  return _
    ? _.bFromBody
      ? (0, _.jsx)(_, {
          strURL: _.strURL,
        })
      : (0, _.jsx)(_, {
          target: `_blank`,
          href: _(_.strURL) ? _(_.strURL) : _.strURL,
          underline: `auto`,
          contrast: `title`,
          children: _.children,
        })
    : _.children;
}
function _(_) {
  let _ = _.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
    ? _.strURL
    : `http://` + _.strURL;
  return (0, _.jsx)(_, {
    target: `_blank`,
    href: _(_) ? _(_) : _,
    underline: `auto`,
    contrast: `title`,
    children: _.strURL,
  });
}
var _ = {
  list: {
    Constructor: _,
    skipInternalNewline: !0,
    skipFollowingNewline: !0,
  },
  olist: {
    Constructor: _,
    skipInternalNewline: !0,
    skipFollowingNewline: !0,
  },
  "*": {
    Constructor: _,
    autocloses: !0,
  },
};
function _(_) {
  return (0, _.jsx)(`ul`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`ol`, {
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`li`, {
    children: _.children,
  });
}
export { _, _, _, _, _, _, _, _, _ };
