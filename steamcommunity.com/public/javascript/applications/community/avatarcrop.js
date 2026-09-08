/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5278],
  {
    4111: (e) => {
      e.exports = {
        AvatarCrop: "UVQKcPi5M7xfkxGQGiesv",
        AvatarCropBound: "t4p1Ec6lMuoroo13jMEgH",
        AvatarCropImg: "JxmP84JNqiT4jGVeYsQti",
        AvatarLoading: "_2HcWfCd15FR0zxzO3g4QQ9",
      };
    },
    66884: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => u });
      var r = a(7850),
        n = a(90626),
        o = a(44217),
        i = a.n(o),
        c = a(56011),
        s = a(61859),
        l = a(35471),
        d = a(4111);
      const u = n.forwardRef(function (e, t) {
        const {
          isLoading: a,
          imageRef: o,
          loaderRef: c,
          getBlob: u,
        } = (function (e) {
          const [t, a] = n.useState(!0),
            r = n.useRef(void 0),
            o = n.useRef(void 0),
            c = n.useRef(null);
          return (
            n.useEffect(() => {
              a(!0),
                o.current &&
                  o.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  }),
                g(r.current, e).then(() => {
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
          n.useImperativeHandle(t, () => ({ getBlob: u })),
          (0, r.jsx)("div", {
            className: d.AvatarCrop,
            children: (0, r.jsxs)("div", {
              className: d.AvatarCropBound,
              children: [
                (0, r.jsx)("img", { ref: o, className: d.AvatarCropImg }),
                (0, r.jsx)("div", {
                  ref: c,
                  className: d.AvatarLoading,
                  style: { display: a ? "" : "none" },
                  children: (0, s.we)("#Loading"),
                }),
              ],
            }),
          })
        );
      });
      async function g(e, t) {
        const a = new Image(),
          r = (0, c.A2)(a, "load");
        (a.src = URL.createObjectURL(t)), await r;
        const n = document.createElement("canvas");
        (n.width = a.width), (n.height = a.height);
        const o = n.getContext("2d");
        o.rect(0, 0, n.width, n.height),
          (o.fillStyle = "black"),
          o.fill(),
          o.drawImage(a, 0, 0),
          URL.revokeObjectURL(a.src);
        const i = (0, c.A2)(e, "load");
        (e.src = URL.createObjectURL(await f(n))), await i;
      }
      async function h(e, t) {
        const a = e.getData();
        let r = 5;
        for (;;) {
          const e = await f(
            m(t, { left: a.x, top: a.y, size: a.width, maxSize: 184 * r }),
          );
          if (1 === r || e.size < 1048576) return e;
          r--;
        }
      }
      function m(e, t) {
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
      async function f(e, t, a) {
        return new Promise((r) => e.toBlob(r, t, a));
      }
    },
  },
]);
