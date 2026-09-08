/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2606],
  {
    87100: (t) => {
      t.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
        BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
        NormalButton: "TLP9bd53vhNfYhUroF4Np",
      };
    },
    92690: (t, e, o) => {
      "use strict";
      o.r(e), o.d(e, { default: () => s });
      var n = o(7850),
        i = o(90626),
        r = o(58317);
      function s(t) {
        const [e, o] = (0, i.useState)(
            () => void 0 !== localStorage.floatingforumreportedsubjectslist,
          ),
          s = (0, i.useMemo)(() => {
            let e = window.location.href.split("#")[0];
            return null !== t.gidcomment && (e += "#c" + t.gidcomment), e;
          }, [t.gidcomment]);
        return (0, n.jsx)(r.A, { text: s, size: e ? "large" : "small" });
      }
    },
    58317: (t, e, o) => {
      "use strict";
      o.d(e, { A: () => l });
      var n = o(7850),
        i = o(90626),
        r = o(6336),
        s = o(87100),
        c = o(4869),
        u = o(52038);
      function l(t) {
        const [e, o] = (0, i.useState)(!1),
          l = (0, i.useRef)(null);
        return (0, n.jsx)("span", {
          children: (0, n.jsxs)("button", {
            onClick: (e) => (
              o(!0),
              e.stopPropagation(),
              navigator.clipboard.writeText(t.text),
              setTimeout(() => o(!1), 1e3),
              !1
            ),
            className: (0, u.A)(
              s.CopyButton,
              "large" === t.size ? s.BigButton : s.NormalButton,
            ),
            ref: l,
            title: t.text,
            children: [
              e &&
                l.current &&
                (0, n.jsx)(r.g, {
                  target: l.current,
                  direction: "bottom",
                  children: (0, n.jsx)("div", {
                    className: s.CopiedNotice,
                    children: "Copied.",
                  }),
                }),
              (0, n.jsx)(c.cKB, {}),
            ],
          }),
        });
      }
    },
  },
]);
