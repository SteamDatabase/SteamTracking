/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2329],
  {
    56575: (e) => {
      e.exports = {
        AvatarCrop: "avatarcrop_AvatarCrop_UVQKc",
        AvatarCropBound: "avatarcrop_AvatarCropBound_t4p1E",
        AvatarCropImg: "avatarcrop_AvatarCropImg_JxmP8",
        AvatarLoading: "avatarcrop_AvatarLoading_2HcWf",
      };
    },
    39573: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => v });
      var r = a(33940),
        n = a(89526),
        o = a(83873),
        i = a.n(o),
        c = a(81052),
        s = a(31587),
        l = a(16952),
        d = a(56575);
      const u = 184,
        m = 5,
        g = 1048576,
        v = n.forwardRef(function (e, t) {
          const {
            isLoading: a,
            imageRef: r,
            loaderRef: o,
            getBlob: c,
          } = (function (e) {
            const [t, a] = n.useState(!0),
              r = n.useRef(),
              o = n.useRef(),
              c = n.useRef(null);
            return (
              n.useEffect(() => {
                a(!0),
                  o.current &&
                    o.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  f(r.current, e).then(() => {
                    a(!1),
                      (c.current = new (i())(r.current, {
                        viewMode: 1,
                        background: !1,
                        dragMode: "move",
                        aspectRatio: 1,
                        preview: `.${l.AvatarCropPreview}`,
                        rotatable: !1,
                        checkOrientation: !1,
                        toggleDragModeOnDblclick: !1,
                        ready: () => {
                          const e = c.current,
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
                  c.current.destroy(), URL.revokeObjectURL(t.src), (t.src = "");
                };
              }, [e]),
              {
                isLoading: t,
                imageRef: r,
                loaderRef: o,
                getBlob: () => h(c.current, r.current),
              }
            );
          })(e.imageData);
          return (
            n.useImperativeHandle(t, () => ({ getBlob: c })),
            n.createElement(
              "div",
              { className: d.AvatarCrop },
              n.createElement(
                "div",
                { className: d.AvatarCropBound },
                n.createElement("img", { ref: r, className: d.AvatarCropImg }),
                n.createElement(
                  "div",
                  {
                    ref: o,
                    className: d.AvatarLoading,
                    style: { display: a ? "" : "none" },
                  },
                  (0, s.Xx)("#Loading")
                )
              )
            )
          );
        });
      function f(e, t) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const a = new Image(),
            r = (0, c.f4)(a, "load");
          (a.src = URL.createObjectURL(t)), yield r;
          const n = document.createElement("canvas");
          (n.width = a.width), (n.height = a.height);
          const o = n.getContext("2d");
          o.rect(0, 0, n.width, n.height),
            (o.fillStyle = "black"),
            o.fill(),
            o.drawImage(a, 0, 0),
            URL.revokeObjectURL(a.src);
          const i = (0, c.f4)(e, "load");
          (e.src = URL.createObjectURL(yield w(n))), yield i;
        });
      }
      function h(e, t) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          const a = e.getData();
          let r = m;
          for (;;) {
            const e = yield w(
              p(t, { left: a.x, top: a.y, size: a.width, maxSize: u * r })
            );
            if (1 === r || e.size < g) return e;
            r--;
          }
        });
      }
      function p(e, t) {
        const a = Math.min(Math.max(u, t.size), t.maxSize),
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
      function w(e, t, a) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          return new Promise((r) => e.toBlob(r, t, a));
        });
      }
    },
  },
]);
