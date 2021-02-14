/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "6Bc7": function (e, t, r) {
      e.exports = {
        AvatarCrop: "avatarcrop_AvatarCrop_UVQKc",
        AvatarCropBound: "avatarcrop_AvatarCropBound_t4p1E",
        AvatarCropImg: "avatarcrop_AvatarCropImg_JxmP8",
        AvatarLoading: "avatarcrop_AvatarLoading_2HcWf",
      };
    },
    AxZo: function (e, t, r) {
      "use strict";
      r.r(t);
      var g = r("mrSG"),
        h = r("q1tI"),
        a = r("urRO"),
        m = r.n(a),
        b = (r("YQfW"), r("X3Ds")),
        p = r("TLQK"),
        w = r("yJIw"),
        R = r("6Bc7"),
        O = 184,
        L = 5,
        A = 1048576;
      function j(t, r, a) {
        return Object(g.b)(this, void 0, void 0, function () {
          return Object(g.e)(this, function (e) {
            return [
              2,
              new Promise(function (e) {
                return t.toBlob(e, r, a);
              }),
            ];
          });
        });
      }
      t.default = h.forwardRef(function (e, t) {
        var r,
          a,
          n,
          c,
          i,
          o,
          u,
          s =
            ((r = e.imageData),
            (a = h.useState(!0)),
            (n = a[0]),
            (c = a[1]),
            (i = h.useRef()),
            (o = h.useRef()),
            (u = h.useRef(null)),
            h.useEffect(
              function () {
                c(!0),
                  o.current &&
                    o.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  (function (s, l) {
                    return Object(g.b)(this, void 0, void 0, function () {
                      var t, r, a, n, c, i, o, u;
                      return Object(g.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (
                              (t = new Image()),
                              (r = Object(b.p)(t, "load")),
                              (t.src = URL.createObjectURL(l)),
                              [4, r]
                            );
                          case 1:
                            return (
                              e.sent(),
                              ((a = document.createElement("canvas")).width =
                                t.width),
                              (a.height = t.height),
                              (n = a.getContext("2d")).rect(
                                0,
                                0,
                                a.width,
                                a.height
                              ),
                              (n.fillStyle = "black"),
                              n.fill(),
                              n.drawImage(t, 0, 0),
                              URL.revokeObjectURL(t.src),
                              (c = Object(b.p)(s, "load")),
                              (i = s),
                              (u = (o = URL).createObjectURL),
                              [4, j(a)]
                            );
                          case 2:
                            return (i.src = u.apply(o, [e.sent()])), [4, c];
                          case 3:
                            return e.sent(), [2];
                        }
                      });
                    });
                  })(i.current, r).then(function () {
                    c(!1),
                      (u.current = new m.a(i.current, {
                        viewMode: 1,
                        background: !1,
                        dragMode: "move",
                        aspectRatio: 1,
                        preview: "." + w.AvatarCropPreview,
                        rotatable: !1,
                        checkOrientation: !1,
                        toggleDragModeOnDblclick: !1,
                        ready: function () {
                          var e = u.current,
                            t = e.getData(),
                            r = Math.min(t.x, t.y);
                          0 < r &&
                            e.setData({
                              x: t.x - r,
                              y: t.y - r,
                              width: t.width + r + r,
                              height: t.height + r + r,
                            });
                        },
                      }));
                  });
                var e = i.current;
                return function () {
                  u.current.destroy(), URL.revokeObjectURL(e.src), (e.src = "");
                };
              },
              [r]
            ),
            {
              isLoading: n,
              imageRef: i,
              loaderRef: o,
              getBlob: function () {
                return (function (n, c) {
                  return Object(g.b)(this, void 0, void 0, function () {
                    var t, r, a;
                    return Object(g.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          (t = n.getData()), (r = L), (e.label = 1);
                        case 1:
                          return [
                            4,
                            j(
                              (function (e, t) {
                                var r = Math.min(
                                    Math.max(O, t.size),
                                    t.maxSize
                                  ),
                                  a = document.createElement("canvas");
                                (a.width = r), (a.height = r);
                                var n = a.getContext("2d");
                                return (
                                  (n.imageSmoothingEnabled = !0),
                                  (n.imageSmoothingQuality = "high"),
                                  n.rect(0, 0, r, r),
                                  (n.fillStyle = "black"),
                                  n.fill(),
                                  n.drawImage(
                                    e,
                                    t.left,
                                    t.top,
                                    t.size,
                                    t.size,
                                    0,
                                    0,
                                    r,
                                    r
                                  ),
                                  a
                                );
                              })(c, {
                                left: t.x,
                                top: t.y,
                                size: t.width,
                                maxSize: O * r,
                              })
                            ),
                          ];
                        case 2:
                          return (
                            (a = e.sent()),
                            1 === r || a.size < A ? [2, a] : (r--, [3, 1])
                          );
                        case 3:
                          return [2];
                      }
                    });
                  });
                })(u.current, i.current);
              },
            }),
          l = s.isLoading,
          d = s.imageRef,
          f = s.loaderRef,
          v = s.getBlob;
        return (
          h.useImperativeHandle(t, function () {
            return { getBlob: v };
          }),
          h.createElement(
            "div",
            { className: R.AvatarCrop },
            h.createElement(
              "div",
              { className: R.AvatarCropBound },
              h.createElement("img", { ref: d, className: R.AvatarCropImg }),
              h.createElement(
                "div",
                {
                  ref: f,
                  className: R.AvatarLoading,
                  style: { display: l ? "" : "none" },
                },
                Object(p.f)("#Loading")
              )
            )
          )
        );
      });
    },
    YQfW: function (e, t, r) {},
  },
]);
