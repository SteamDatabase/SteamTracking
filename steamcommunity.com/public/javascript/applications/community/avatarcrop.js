/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [5278],
    {
      66185: (g, v, s) => {
        "use strict";
        s.r(v), s.d(v, { default: () => D });
        var m = s(7850),
          c = s(90626),
          M = s(44217),
          P = s.n(M),
          _ = s(82734),
          R = s(18210),
          f = s(35471),
          p = s.n(f),
          u = s(4111),
          x = s.n(u);
        const E = 184,
          L = 5,
          O = 1024 * 1024,
          D = c.forwardRef(function (o, t) {
            const {
              isLoading: a,
              imageRef: e,
              loaderRef: r,
              getBlob: l,
            } = C(o.imageData);
            return (
              c.useImperativeHandle(t, () => ({ getBlob: l })),
              (0, m.jsx)("div", {
                className: u.AvatarCrop,
                children: (0, m.jsxs)("div", {
                  className: u.AvatarCropBound,
                  children: [
                    (0, m.jsx)("img", { ref: e, className: u.AvatarCropImg }),
                    (0, m.jsx)("div", {
                      ref: r,
                      className: u.AvatarLoading,
                      style: { display: a ? "" : "none" },
                      children: (0, R.we)("#Loading"),
                    }),
                  ],
                }),
              })
            );
          });
        function C(n) {
          const [o, t] = c.useState(!0),
            a = c.useRef(void 0),
            e = c.useRef(void 0),
            r = c.useRef(null);
          return (
            c.useEffect(() => {
              t(!0),
                e.current &&
                  e.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  }),
                I(a.current, n).then(() => {
                  t(!1),
                    (r.current = new (P())(a.current, {
                      viewMode: 1,
                      background: !1,
                      dragMode: "move",
                      aspectRatio: 1,
                      preview: `.${f.AvatarCropPreview}`,
                      rotatable: !1,
                      checkOrientation: !1,
                      toggleDragModeOnDblclick: !1,
                      ready: () => {
                        const A = r.current,
                          d = A.getData(),
                          i = Math.min(d.x, d.y);
                        i > 0 &&
                          A.setData({
                            x: d.x - i,
                            y: d.y - i,
                            width: d.width + i + i,
                            height: d.height + i + i,
                          });
                      },
                    }));
                });
              const l = a.current;
              return () => {
                r.current.destroy(), URL.revokeObjectURL(l.src), (l.src = "");
              };
            }, [n]),
            {
              isLoading: o,
              imageRef: a,
              loaderRef: e,
              getBlob: () => U(r.current, a.current),
            }
          );
        }
        async function I(n, o) {
          const t = new Image(),
            a = (0, _.A2)(t, "load");
          (t.src = URL.createObjectURL(o)), await a;
          const e = document.createElement("canvas");
          (e.width = t.width), (e.height = t.height);
          const r = e.getContext("2d");
          r.rect(0, 0, e.width, e.height),
            (r.fillStyle = "black"),
            r.fill(),
            r.drawImage(t, 0, 0),
            URL.revokeObjectURL(t.src);
          const l = (0, _.A2)(n, "load");
          (n.src = URL.createObjectURL(await h(e))), await l;
        }
        async function U(n, o) {
          const t = n.getData();
          let a = L;
          for (;;) {
            const e = await h(
              B(o, { left: t.x, top: t.y, size: t.width, maxSize: E * a }),
            );
            if (a === 1 || e.size < O) return e;
            a--;
          }
        }
        function B(n, o) {
          const t = Math.min(Math.max(E, o.size), o.maxSize),
            a = document.createElement("canvas");
          (a.width = t), (a.height = t);
          const e = a.getContext("2d");
          return (
            (e.imageSmoothingEnabled = !0),
            (e.imageSmoothingQuality = "high"),
            e.rect(0, 0, t, t),
            (e.fillStyle = "black"),
            e.fill(),
            e.drawImage(n, o.left, o.top, o.size, o.size, 0, 0, t, t),
            a
          );
        }
        async function h(n, o, t) {
          return new Promise((a) => n.toBlob(a, o, t));
        }
      },
      4111: (g) => {
        g.exports = {
          AvatarCrop: "UVQKcPi5M7xfkxGQGiesv",
          AvatarCropBound: "t4p1Ec6lMuoroo13jMEgH",
          AvatarCropImg: "JxmP84JNqiT4jGVeYsQti",
          AvatarLoading: "_2HcWfCd15FR0zxzO3g4QQ9",
        };
      },
    },
  ]);
})();
