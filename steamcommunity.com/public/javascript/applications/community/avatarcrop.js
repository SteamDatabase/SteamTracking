/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "6Bc7": function (e, t, a) {
      e.exports = {
        AvatarCrop: "avatarcrop_AvatarCrop_UVQKc",
        AvatarCropBound: "avatarcrop_AvatarCropBound_t4p1E",
        AvatarCropImg: "avatarcrop_AvatarCropImg_JxmP8",
        AvatarLoading: "avatarcrop_AvatarLoading_2HcWf",
      };
    },
    AxZo: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a("mrSG"),
        n = a("q1tI"),
        o = a("urRO"),
        c = a.n(o),
        i = (a("YQfW"), a("X3Ds")),
        s = a("TLQK"),
        d = a("yJIw"),
        l = a("6Bc7");
      function u(e, t) {
        return Object(r.a)(this, void 0, void 0, function* () {
          const a = new Image(),
            r = Object(i.w)(a, "load");
          (a.src = URL.createObjectURL(t)), yield r;
          const n = document.createElement("canvas");
          (n.width = a.width), (n.height = a.height);
          const o = n.getContext("2d");
          o.rect(0, 0, n.width, n.height),
            (o.fillStyle = "black"),
            o.fill(),
            o.drawImage(a, 0, 0),
            URL.revokeObjectURL(a.src);
          const c = Object(i.w)(e, "load");
          (e.src = URL.createObjectURL(yield m(n))), yield c;
        });
      }
      function g(e, t) {
        return Object(r.a)(this, void 0, void 0, function* () {
          const a = e.getData();
          let r = 5;
          for (;;) {
            const e = yield m(
              f(t, { left: a.x, top: a.y, size: a.width, maxSize: 184 * r })
            );
            if (1 === r || e.size < 1048576) return e;
            r--;
          }
        });
      }
      function f(e, t) {
        const a = Math.min(Math.max(184, t.size), t.maxSize),
          r = document.createElement("canvas");
        (r.width = a), (r.height = a);
        const n = r.getContext("2d");
        return (
          (n.imageSmoothingEnabled = !0),
          (n.imageSmoothingQuality = "high"),
          n.rect(0, 0, a, a),
          (n.fillStyle = "black"),
          n.fill(),
          n.drawImage(e, t.left, t.top, t.size, t.size, 0, 0, a, a),
          r
        );
      }
      function m(e, t, a) {
        return Object(r.a)(this, void 0, void 0, function* () {
          return new Promise((r) => e.toBlob(r, t, a));
        });
      }
      t.default = n.forwardRef(function (e, t) {
        const {
          isLoading: a,
          imageRef: r,
          loaderRef: o,
          getBlob: i,
        } = (function (e) {
          const [t, a] = n.useState(!0),
            r = n.useRef(),
            o = n.useRef(),
            i = n.useRef(null);
          return (
            n.useEffect(() => {
              a(!0),
                o.current &&
                  o.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  }),
                u(r.current, e).then(() => {
                  a(!1),
                    (i.current = new c.a(r.current, {
                      viewMode: 1,
                      background: !1,
                      dragMode: "move",
                      aspectRatio: 1,
                      preview: `.${d.AvatarCropPreview}`,
                      rotatable: !1,
                      checkOrientation: !1,
                      toggleDragModeOnDblclick: !1,
                      ready: () => {
                        const e = i.current,
                          t = e.getData(),
                          a = Math.min(t.x, t.y);
                        a > 0 &&
                          e.setData({
                            x: t.x - a,
                            y: t.y - a,
                            width: t.width + a + a,
                            height: t.height + a + a,
                          });
                      },
                    }));
                });
              const t = r.current;
              return () => {
                i.current.destroy(), URL.revokeObjectURL(t.src), (t.src = "");
              };
            }, [e]),
            {
              isLoading: t,
              imageRef: r,
              loaderRef: o,
              getBlob: () => g(i.current, r.current),
            }
          );
        })(e.imageData);
        return (
          n.useImperativeHandle(t, () => ({ getBlob: i })),
          n.createElement(
            "div",
            { className: l.AvatarCrop },
            n.createElement(
              "div",
              { className: l.AvatarCropBound },
              n.createElement("img", { ref: r, className: l.AvatarCropImg }),
              n.createElement(
                "div",
                {
                  ref: o,
                  className: l.AvatarLoading,
                  style: { display: a ? "" : "none" },
                },
                Object(s.f)("#Loading")
              )
            )
          )
        );
      });
    },
    YQfW: function (e, t, a) {},
  },
]);
