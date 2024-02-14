/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2329],
  {
    3524: (e) => {
      e.exports = {
        AvatarCrop: "UVQKcPi5M7xfkxGQGiesv",
        AvatarCropBound: "t4p1Ec6lMuoroo13jMEgH",
        AvatarCropImg: "JxmP84JNqiT4jGVeYsQti",
        AvatarLoading: "_2HcWfCd15FR0zxzO3g4QQ9",
      };
    },
    98682: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => f });
      var a = r(85556),
        n = r(47427),
        o = r(89868),
        i = r.n(o),
        c = r(50423),
        s = r(31846),
        l = r(75371),
        d = r(3524);
      const u = 184,
        m = 5,
        g = 1048576,
        f = n.forwardRef(function (e, t) {
          const {
            isLoading: r,
            imageRef: a,
            loaderRef: o,
            getBlob: c,
          } = (function (e) {
            const [t, r] = n.useState(!0),
              a = n.useRef(),
              o = n.useRef(),
              c = n.useRef(null);
            return (
              n.useEffect(() => {
                r(!0),
                  o.current &&
                    o.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  h(a.current, e).then(() => {
                    r(!1),
                      (c.current = new (i())(a.current, {
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
                const t = a.current;
                return () => {
                  c.current.destroy(), URL.revokeObjectURL(t.src), (t.src = "");
                };
              }, [e]),
              {
                isLoading: t,
                imageRef: a,
                loaderRef: o,
                getBlob: () => v(c.current, a.current),
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
                n.createElement("img", { ref: a, className: d.AvatarCropImg }),
                n.createElement(
                  "div",
                  {
                    ref: o,
                    className: d.AvatarLoading,
                    style: { display: r ? "" : "none" },
                  },
                  (0, s.Xx)("#Loading"),
                ),
              ),
            )
          );
        });
      function h(e, t) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          const r = new Image(),
            a = (0, c.f4)(r, "load");
          (r.src = URL.createObjectURL(t)), yield a;
          const n = document.createElement("canvas");
          (n.width = r.width), (n.height = r.height);
          const o = n.getContext("2d");
          o.rect(0, 0, n.width, n.height),
            (o.fillStyle = "black"),
            o.fill(),
            o.drawImage(r, 0, 0),
            URL.revokeObjectURL(r.src);
          const i = (0, c.f4)(e, "load");
          (e.src = URL.createObjectURL(yield b(n))), yield i;
        });
      }
      function v(e, t) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          const r = e.getData();
          let a = m;
          for (;;) {
            const e = yield b(
              w(t, { left: r.x, top: r.y, size: r.width, maxSize: u * a }),
            );
            if (1 === a || e.size < g) return e;
            a--;
          }
        });
      }
      function w(e, t) {
        const r = Math.min(Math.max(u, t.size), t.maxSize),
          a = document.createElement("canvas");
        (a.width = r), (a.height = r);
        const n = a.getContext("2d");
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
      function b(e, t, r) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          return new Promise((a) => e.toBlob(a, t, r));
        });
      }
    },
  },
]);
