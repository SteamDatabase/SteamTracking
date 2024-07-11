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
      a.r(t), a.d(t, { default: () => m });
      var r = a(90626),
        n = a(44217),
        o = a.n(n),
        c = a(56011),
        i = a(61859),
        s = a(35471),
        l = a(4111);
      const u = 184,
        d = 5,
        g = 1048576,
        m = r.forwardRef(function (e, t) {
          const {
            isLoading: a,
            imageRef: n,
            loaderRef: c,
            getBlob: u,
          } = (function (e) {
            const [t, a] = r.useState(!0),
              n = r.useRef(),
              c = r.useRef(),
              i = r.useRef(null);
            return (
              r.useEffect(() => {
                a(!0),
                  c.current &&
                    c.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  h(n.current, e).then(() => {
                    a(!1),
                      (i.current = new (o())(n.current, {
                        viewMode: 1,
                        background: !1,
                        dragMode: "move",
                        aspectRatio: 1,
                        preview: `.${s.AvatarCropPreview}`,
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
                const t = n.current;
                return () => {
                  i.current.destroy(), URL.revokeObjectURL(t.src), (t.src = "");
                };
              }, [e]),
              {
                isLoading: t,
                imageRef: n,
                loaderRef: c,
                getBlob: () => f(i.current, n.current),
              }
            );
          })(e.imageData);
          return (
            r.useImperativeHandle(t, () => ({ getBlob: u })),
            r.createElement(
              "div",
              { className: l.AvatarCrop },
              r.createElement(
                "div",
                { className: l.AvatarCropBound },
                r.createElement("img", { ref: n, className: l.AvatarCropImg }),
                r.createElement(
                  "div",
                  {
                    ref: c,
                    className: l.AvatarLoading,
                    style: { display: a ? "" : "none" },
                  },
                  (0, i.we)("#Loading"),
                ),
              ),
            )
          );
        });
      async function h(e, t) {
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
        (e.src = URL.createObjectURL(await w(n))), await i;
      }
      async function f(e, t) {
        const a = e.getData();
        let r = d;
        for (;;) {
          const e = await w(
            v(t, { left: a.x, top: a.y, size: a.width, maxSize: u * r }),
          );
          if (1 === r || e.size < g) return e;
          r--;
        }
      }
      function v(e, t) {
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
      async function w(e, t, a) {
        return new Promise((r) => e.toBlob(r, t, a));
      }
    },
  },
]);
