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
      var a = r("mrSG"),
        n = r("q1tI"),
        c = r("urRO"),
        i = r.n(c),
        o = (r("YQfW"), r("X3Ds")),
        u = r("TLQK"),
        s = r("yJIw"),
        l = r("6Bc7");
      function d(e, t) {
        return Object(a.b)(this, void 0, void 0, function () {
          var r, n, c, i, u, s, l, d;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (r = new Image()),
                  (n = Object(o.w)(r, "load")),
                  (r.src = URL.createObjectURL(t)),
                  [4, n]
                );
              case 1:
                return (
                  a.sent(),
                  ((c = document.createElement("canvas")).width = r.width),
                  (c.height = r.height),
                  (i = c.getContext("2d")).rect(0, 0, c.width, c.height),
                  (i.fillStyle = "black"),
                  i.fill(),
                  i.drawImage(r, 0, 0),
                  URL.revokeObjectURL(r.src),
                  (u = Object(o.w)(e, "load")),
                  (s = e),
                  (d = (l = URL).createObjectURL),
                  [4, g(c)]
                );
              case 2:
                return (s.src = d.apply(l, [a.sent()])), [4, u];
              case 3:
                return a.sent(), [2];
            }
          });
        });
      }
      function f(e, t) {
        return Object(a.b)(this, void 0, void 0, function () {
          var r, n, c;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                (r = e.getData()), (n = 5), (a.label = 1);
              case 1:
                return [
                  4,
                  g(
                    v(t, {
                      left: r.x,
                      top: r.y,
                      size: r.width,
                      maxSize: 184 * n,
                    })
                  ),
                ];
              case 2:
                return (
                  (c = a.sent()),
                  1 === n || c.size < 1048576 ? [2, c] : (n--, [3, 1])
                );
              case 3:
                return [2];
            }
          });
        });
      }
      function v(e, t) {
        var r = Math.min(Math.max(184, t.size), t.maxSize),
          a = document.createElement("canvas");
        (a.width = r), (a.height = r);
        var n = a.getContext("2d");
        return (
          (n.imageSmoothingEnabled = !0),
          (n.imageSmoothingQuality = "high"),
          n.rect(0, 0, r, r),
          (n.fillStyle = "black"),
          n.fill(),
          n.drawImage(e, t.left, t.top, t.size, t.size, 0, 0, r, r),
          a
        );
      }
      function g(e, t, r) {
        return Object(a.b)(this, void 0, void 0, function () {
          return Object(a.e)(this, function (a) {
            return [
              2,
              new Promise(function (a) {
                return e.toBlob(a, t, r);
              }),
            ];
          });
        });
      }
      t.default = n.forwardRef(function (e, t) {
        var r = (function (e) {
            var t = n.useState(!0),
              r = t[0],
              a = t[1],
              c = n.useRef(),
              o = n.useRef(),
              u = n.useRef(null);
            return (
              n.useEffect(
                function () {
                  a(!0),
                    o.current &&
                      o.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      }),
                    d(c.current, e).then(function () {
                      a(!1),
                        (u.current = new i.a(c.current, {
                          viewMode: 1,
                          background: !1,
                          dragMode: "move",
                          aspectRatio: 1,
                          preview: "." + s.AvatarCropPreview,
                          rotatable: !1,
                          checkOrientation: !1,
                          toggleDragModeOnDblclick: !1,
                          ready: function () {
                            var e = u.current,
                              t = e.getData(),
                              r = Math.min(t.x, t.y);
                            r > 0 &&
                              e.setData({
                                x: t.x - r,
                                y: t.y - r,
                                width: t.width + r + r,
                                height: t.height + r + r,
                              });
                          },
                        }));
                    });
                  var t = c.current;
                  return function () {
                    u.current.destroy(),
                      URL.revokeObjectURL(t.src),
                      (t.src = "");
                  };
                },
                [e]
              ),
              {
                isLoading: r,
                imageRef: c,
                loaderRef: o,
                getBlob: function () {
                  return f(u.current, c.current);
                },
              }
            );
          })(e.imageData),
          a = r.isLoading,
          c = r.imageRef,
          o = r.loaderRef,
          v = r.getBlob;
        return (
          n.useImperativeHandle(t, function () {
            return { getBlob: v };
          }),
          n.createElement(
            "div",
            { className: l.AvatarCrop },
            n.createElement(
              "div",
              { className: l.AvatarCropBound },
              n.createElement("img", { ref: c, className: l.AvatarCropImg }),
              n.createElement(
                "div",
                {
                  ref: o,
                  className: l.AvatarLoading,
                  style: { display: a ? "" : "none" },
                },
                Object(u.f)("#Loading")
              )
            )
          )
        );
      });
    },
    YQfW: function (e, t, r) {},
  },
]);
