/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2606],
    {
      38409: (r, a, t) => {
        "use strict";
        t.r(a), t.d(a, { default: () => s });
        var o = t(7850),
          n = t(90626),
          _ = t(23980);
        function s(i) {
          const c = "floatingforumreportedsubjectslist",
            [u, E] = (0, n.useState)(() => localStorage[c] !== void 0),
            e = (0, n.useMemo)(() => {
              let l = window.location.href.split("#")[0];
              return i.gidcomment !== null && (l += "#c" + i.gidcomment), l;
            }, [i.gidcomment]);
          return (0, o.jsx)(_.A, { text: e, size: u ? "large" : "small" });
        }
      },
      23980: (r, a, t) => {
        "use strict";
        t.d(a, { A: () => E });
        var o = t(7850),
          n = t(90626),
          _ = t(561),
          s = t(87100),
          i = t.n(s),
          c = t(56718),
          u = t(36707);
        function E(e) {
          const [l, m] = (0, n.useState)(!1),
            d = (0, n.useRef)(null),
            C = (M) => (
              m(!0),
              M.stopPropagation(),
              navigator.clipboard.writeText(e.text),
              setTimeout(() => m(!1), 1e3),
              !1
            );
          return (0, o.jsx)("span", {
            children: (0, o.jsxs)("button", {
              onClick: C,
              className: (0, u.A)(
                s.CopyButton,
                e.size === "large" ? s.BigButton : s.NormalButton,
              ),
              ref: d,
              title: e.text,
              children: [
                l &&
                  d.current &&
                  (0, o.jsx)(_.g, {
                    target: d.current,
                    direction: "bottom",
                    children: (0, o.jsx)("div", {
                      className: s.CopiedNotice,
                      children: "Copied.",
                    }),
                  }),
                (0, o.jsx)(c.cKB, {}),
              ],
            }),
          });
        }
      },
      87100: (r) => {
        r.exports = {
          CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
          CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
          BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
          NormalButton: "TLP9bd53vhNfYhUroF4Np",
        };
      },
    },
  ]);
})();
