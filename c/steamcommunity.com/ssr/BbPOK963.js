var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `FekZSwYnr1c-`,
  _ = `gnz9d4vMotk-`,
  _ = `_2rWVHOBfiqk-`,
  _ = `IkG-QGVb-sQ-`,
  _ = `WmyUpASx6iA-`,
  _ = `BarCJB1FCA4-`,
  _ = `eXJaoCIQubs-`,
  _ = `ZfuTb5z2GO0-`,
  _ = `OpRXBl2jZlk-`,
  _ = `BjmsfqrdIWY-`,
  _ = _(),
  _ = 740;
function _(_) {
  return _({
    queryKey: [`sketchfab_oembed`, _],
    queryFn: async () => {
      let _ = await fetch(
        `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(_ ?? ``)}`,
      );
      if (!_._) throw Error(`sketchfab oembed returned ${_.status}`);
      return await _.json();
    },
    enabled: !!_?.length,
    staleTime: 3600 * 1e3,
    retry: !1,
  });
}
function _(_) {
  let { preview: _ } = _,
    _ = `https://sketchfab.com/models/${_.external_reference}/embed`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`iframe`, {
      className: _,
      title: _.external_reference,
      src: _,
      allowFullScreen: !0,
      frameBorder: 0,
    }),
  });
}
function _(_) {
  let { preview: _, bActive: _, onSelect: _, ref: _ } = _,
    _ = _(_.external_reference);
  return (0, _.jsxs)(_, {
    ref: _,
    className: (0, _.default)(_, _ && `Lmu0WjZ9ob4-`),
    onActivate: _,
    onMouseEnter: _,
    onFocus: _,
    children: [
      _.data?.thumbnail_url &&
        (0, _.jsx)(_, {
          src: _.data.thumbnail_url,
          alt: _.data.title ?? ``,
          loading: `lazy`,
        }),
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { preview: _, bActive: _, onSelect: _, ref: _ } = _;
  switch (_.preview_type) {
    case 0:
      {
        let _ = `${_.url}${_(160, 90)}`;
        return (0, _.jsx)(_, {
          ref: _,
          className: (0, _.default)(_, _ && `Lmu0WjZ9ob4-`),
          onActivate: _,
          onMouseEnter: _,
          onFocus: _,
          children: (0, _.jsx)(_, {
            src: _,
            alt: _.filename ?? ``,
            loading: `lazy`,
          }),
        });
      }
      break;
    case 1:
      {
        let _ = `https://img.youtube.com/vi/${_.youtubevideoid}/default.jpg`;
        return (0, _.jsxs)(_, {
          ref: _,
          className: (0, _.default)(_, _ && `Lmu0WjZ9ob4-`),
          onActivate: _,
          onMouseEnter: _,
          onFocus: _,
          children: [
            (0, _.jsx)(_, {
              src: _,
              className: _,
              alt: _.filename ?? ``,
              loading: `lazy`,
            }),
            (0, _.jsx)(_, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        });
      }
      break;
    case 2:
      return (0, _.jsx)(_, {
        ref: _,
        preview: _,
        bActive: _,
        onSelect: _,
      });
  }
  return null;
}
function _(_) {
  let { preview: _, width: _, height: _, bAutoPlay: _, nStartSeconds: _ } = _,
    _ =
      `https://www.youtube-nocookie.com/embed/` +
      _.youtubevideoid +
      `?fs=1&modestbranding=1&rel=0&playsinline=1` +
      (_ ? `&autoplay=1` : ``) +
      (_ ? `&t=` + _ : ``);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`iframe`, {
      className: _,
      title: _.youtubevideoid,
      src: _,
      allowFullScreen: !0,
      width: _,
      height: _,
      frameBorder: 0,
    }),
  });
}
function _(_) {
  let { preview: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      _(!1);
    }, [_.url]),
    (0, _.useEffect)(() => {
      _.current?.complete &&
        (_(),
        (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
    }, [_, _]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          ref: _,
          className: (0, _.default)(!_ && `_2M3xIxqLmX8-`),
          src: _.url,
          alt: _.filename ?? ``,
          onLoad: _,
          onError: _,
        }),
        !_ &&
          (0, _.jsx)(`div`, {
            className: `gThommZo0i8-`,
            children: (0, _.jsx)(_, {
              size: `5`,
            }),
          }),
      ],
    })
  );
}
function _(_) {
  switch (_.preview_type) {
    case 0:
      return (0, _.jsx)(_, {
        preview: _,
      });
    case 1:
      return (0, _.jsx)(_, {
        preview: _,
        width: 1280,
        height: 720,
      });
    case 2:
      return (0, _.jsx)(_, {
        preview: _,
      });
  }
}
function _(_) {
  let {
      details: _,
      previews: _,
      previewIndex: _,
      numPreviews: _,
      onPrevious: _,
      onNext: _,
      enlargedImageWidth: _,
    } = _,
    _ = _[_],
    _ = _((0, _.useContext)(_), _.file_type),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _.current?.complete &&
      (_(),
      (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
  }, [_, _]),
    (0, _.useEffect)(() => {
      _.preview_type == 0
        ? _.current?.complete
          ? _()
          : (_(!1), _(!1))
        : _(!0);
    }, [_, _.preview_type, _.url]);
  let _ = _ ?? _,
    _ = _ / _,
    _ = `${_.url}${_(_, _, !1)}`,
    _ = () => {
      _(!0);
    },
    _,
    _ = _(_),
    _ = _ > 0 ? _(_) : void 0,
    _ = _ < _.length - 1 ? _(_) : void 0;
  switch (_.preview_type) {
    case 0:
      _ = (0, _.jsx)(_, {
        ref: _,
        src: _,
        alt: _.filename ?? _,
        onLoad: _,
        onError: _,
      });
      break;
    case 1:
      _ = (0, _.jsx)(_, {
        preview: _,
        width: 288,
        height: 116,
      });
      break;
    case 2:
      _ = (0, _.jsx)(_, {
        preview: _,
      });
      break;
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        className: (0, _.default)(_, !_ && `_2M3xIxqLmX8-`),
        onActivate: _,
        children: [
          _,
          !_ &&
            (0, _.jsx)(`div`, {
              className: `gThommZo0i8-`,
              children: (0, _.jsx)(_, {
                size: `5`,
              }),
            }),
        ],
      }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          imageTitle: ``,
          prevSrc: _,
          mainSrc: _,
          nextSrc: _,
          onMoveNextRequest: () => _ && _(),
          onMovePrevRequest: () => _ && _(),
          onCloseRequest: () => _(!1),
          toolbarButtons: [
            (0, _.jsxs)(
              `div`,
              {
                children: [_(_ + 1), ` / `, _(_)],
              },
              `preview_index`,
            ),
          ],
        }),
    ],
  });
}
function _(_) {
  switch (_.preview_type) {
    case 1:
      return 0;
    case 2:
      return 1;
  }
  return 2;
}
function _(_) {
  let { details: _, className: _, enlargedImageWidth: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _((0, _.useContext)(_), _.file_type),
    _ = (0, _.useMemo)(() => {
      let _ = {
          previewid: ``,
          url: _.preview_url,
          filename: _.title,
          preview_type: 0,
        },
        _ = [...(_.previews ?? [])];
      return (
        _.url?.length != 0 && _.unshift(_),
        (_ =
          _.filter(
            (_) =>
              _.preview_type == 0 || _.preview_type == 1 || _.preview_type == 2,
          ).sort((_, _) => {
            let _ = _(_) - _(_);
            return _ == 0 ? (_.sortorder ?? 0) - (_.sortorder ?? 0) : _;
          }) ?? []),
        _.forEach((_) => {
          if (_.preview_type !== 0) return;
          let _ = _ ?? _,
            _ = _ / _;
          (0, _.preload)(`${_.url}${_(_, _, !1)}`, {
            _: `image`,
            fetchPriority: `low`,
          });
        }),
        _
      );
    }, [_.preview_url, _.title, _.previews, _, _]),
    _ = _.findIndex((_) => _.preview_type == 0),
    [_, _] = (0, _.useState)(_ >= 0 ? _ : 0),
    _ = (0, _.useRef)([]);
  (0, _.useEffect)(() => {
    let _ = _.current[_];
    _ &&
      _.scrollIntoView({
        behavior: `smooth`,
        block: `nearest`,
        inline: `nearest`,
      });
  }, [_]);
  let [_, _] = (0, _.useState)(!1),
    _ = _(
      (0, _.useCallback)((_) => {
        _(_.isIntersecting);
      }, []),
      {
        rootMargin: `0px`,
      },
    );
  (0, _.useEffect)(() => {
    if (_ || !_) return;
    let _ = setInterval(() => {
      let _ = _[_];
      if (_.preview_type != 0) return;
      let _ = _ === _.length - 1 ? 0 : _ + 1;
      for (_ = _[_]; _.preview_type != 0 && _ != _; )
        (_ = _ === _.length - 1 ? 0 : _ + 1), (_ = _[_]);
      _(_);
    }, 3e3);
    return () => clearInterval(_);
  }, [_, _, _, _]);
  let _ = () => {
      _(Math.max(_ - 1, 0));
    },
    _ = () => {
      _(Math.min(_ + 1, _.length - 1));
    },
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (_) => {
      if (!_.current) return;
      let _ = _ === `left` ? -_.current.clientWidth : _.current.clientWidth;
      _.current.scrollBy({
        left: _,
        behavior: `smooth`,
      });
    };
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      if (!_) return;
      let _ = () => {
        _(_.scrollLeft > 0);
        let _ = _.scrollWidth - (_.scrollLeft + _.clientWidth);
        _(_ > 1);
      };
      return (
        _(),
        _.addEventListener(`scroll`, _, {
          passive: !0,
        }),
        _.addEventListener(`scrollend`, _),
        () => {
          _.removeEventListener(`scroll`, _),
            _.removeEventListener(`scrollend`, _);
        }
      );
    }, []),
    _.length == 0
      ? (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
          direction: `column`,
          gap: `2`,
          children: (0, _.jsx)(_, {
            details: _,
          }),
        })
      : (0, _.jsxs)(_, {
          className: (0, _.default)(_, _),
          direction: `column`,
          gap: `2`,
          ref: _,
          onMouseEnter: () => _(!0),
          onMouseLeave: () => _(!1),
          onFocus: () => _(!0),
          onBlur: () => _(!1),
          children: [
            (0, _.jsx)(_, {
              details: _,
              enlargedImageWidth: _,
              previews: _,
              previewIndex: _,
              numPreviews: _.length,
              onPrevious: _ == 0 ? void 0 : _,
              onNext: _ < _.length - 1 ? _ : void 0,
            }),
            _.length > 1 &&
              (0, _.jsxs)(`div`, {
                className: `x8orf3DM730-`,
                children: [
                  (0, _.jsx)(_, {
                    className: (0, _.default)(
                      `Qi-UgM4WsRo-`,
                      `_2i9InboilFc-`,
                      _ && `KTGtVqzbnVU-`,
                    ),
                    onActivate: () => _(`left`),
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    className: `-V6vKn-OSdA-`,
                    gap: `2`,
                    marginBottom: `1`,
                    flexShrink: `0`,
                    ref: _,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          ref: (_) => {
                            _.current[_] = _;
                          },
                          preview: _,
                          bActive: _ == _,
                          onSelect: () => _(_),
                        },
                        _.previewid,
                      ),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    className: (0, _.default)(
                      `Qi-UgM4WsRo-`,
                      `qdGGKLZFJX4-`,
                      _ && `KTGtVqzbnVU-`,
                    ),
                    onActivate: () => _(`right`),
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
          ],
        })
  );
}
export { _, _ };
