/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    41609: (e) => {
      e.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    64641: (e) => {
      e.exports = {
        v6: "_2LxgdMcpWJRjkxZKbmeEEb",
        SubText: "vg0EOhKTLB3tLvshHMr7l",
        AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
        GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
        AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
        STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
        ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
        EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
        Small: "_3M4j828iWSVEZZAkypcBi1",
        FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
        ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
        MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
        SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
        RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
      };
    },
    80159: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ContentHubRoutes: () => d, default: () => u });
      var a = n(90626),
        r = n(97058),
        i = n(17083),
        l = n(92757),
        s = n(562),
        o = n(61859);
      function c(e) {
        return a.createElement(l.XG, {
          message: (e) => !(0, s.tV)() || (0, o.we)("#Generel_Discard_Warning"),
        });
      }
      var m = n(43527),
        A = n(65213);
      const d = { ContentHubCategories: () => "/categories/" };
      function u(e) {
        return a.createElement(
          i.Kd,
          { basename: (0, m.C)() + "admin/store/contenthub/" },
          a.createElement(c, null),
          a.createElement(
            l.dO,
            null,
            a.createElement(l.qh, {
              path: d.ContentHubCategories(),
              component: A.A,
            }),
            a.createElement(l.qh, { component: r.a }),
          ),
        );
      }
    },
    56654: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => p });
      var a = n(90626),
        r = n(73745);
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var l = n(44894),
        s = n(62490),
        o = n(41609),
        c = n.n(o),
        m = n(64641),
        A = n.n(m),
        d = n(12155),
        u = n(41735),
        g = n.n(u),
        h = n(25489),
        E = n(52038);
      function p(e) {
        const {
            items: t,
            render: n,
            onDelete: o,
            onEdit: m,
            onReorder: u,
            onMove: p,
            bDisabled: C,
            rowClassName: b,
          } = e,
          [B, S] = a.useState(!1),
          [R, f] = a.useState(void 0),
          [w, W] = a.useState(void 0),
          [y, D] = a.useState(-1),
          [N, G] = a.useState(void 0),
          [F, I] = a.useState(0),
          [Y, k] = a.useState(0),
          [x, M] = a.useState(void 0),
          [V, X] = a.useState(""),
          _ = a.useRef(),
          H = a.useMemo(() => new Array(), []),
          Q = a.useMemo(() => new Array(), []),
          J = a.useMemo(() => g().CancelToken.source(), []),
          L = () => {
            _.current?.firstElementChild &&
              (I(_.current.firstElementChild.getBoundingClientRect().height),
              k(_.current.firstElementChild.getBoundingClientRect().width));
          };
        a.useEffect(() => {
          L();
        }, []),
          a.useEffect(() => () => J.cancel("ReorderableList unmounting"), [J]);
        const T = (e, t) => {
            J.token.reason ||
              (_.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                F !=
                  _.current.firstElementChild.getBoundingClientRect().height &&
                L(),
              ((e, t) => {
                const n = H[e]?.current;
                if (!n)
                  return void console.error(
                    "start element grab missing element at index " + e,
                  );
                S(!0), D(e), M(void 0), G(e);
                const a = t.clientX - n.getBoundingClientRect().left;
                f(a);
                const r = t.clientY - n.getBoundingClientRect().top;
                W(r),
                  (n.style.position = "fixed"),
                  (n.style.left = t.clientX - a + "px"),
                  (n.style.top = t.clientY - r + "px"),
                  (n.style.zIndex = "1");
              })(t, e),
              e.preventDefault());
          },
          j = (e, n) => {
            const a = h.OQ(n > e ? n - 1 : n, 0, t.length - 1);
            e != a && (p ? p(e, a) : (0, s.yY)(t, e, a), q(a), u && u(t));
          },
          U = (e) => {
            B &&
              !J.token.reason &&
              ((() => {
                const e = H[y]?.current;
                e
                  ? ((e.style.position = ""), (e.style.zIndex = ""))
                  : console.error("end element drag missing element"),
                  S(!1),
                  D(-1),
                  M(void 0),
                  G(void 0);
              })(),
              j(y, N));
          },
          Z = (e) => {
            if (!B || J.token.reason) return;
            const n = e.clientY;
            let a;
            for (let e = 0; e < t.length; e++) {
              if (
                n <
                (Q[e].current.getBoundingClientRect().top +
                  2 * Q[e].current.getBoundingClientRect().bottom) /
                  3
              ) {
                a = e;
                break;
              }
            }
            G(a ?? t.length),
              ((e) => {
                const t = H[y]?.current;
                t
                  ? ((t.style.left = e.clientX - R + "px"),
                    (t.style.top = e.clientY - w + "px"))
                  : console.error("update grab element missing element");
              })(e);
          };
        (0, r.l6)(window, "mousemove", (e) => Z(e)),
          (0, r.l6)(window, "mouseup", (e) => U()),
          a.useEffect(() => {
            for (let e = H.length; e < t.length; e++)
              H.push(a.createRef()), Q.push(a.createRef());
          }, [t.length, H, Q]);
        const P = (e) => {
            M(void 0);
            const t = V?.trim(),
              n = Number.parseInt(t);
            if (0 == t.length || isNaN(n)) return;
            const a = n - 1;
            e != a && j(e, a);
          },
          [z, q] = a.useState(void 0);
        return a.createElement(
          "div",
          { className: c().WhitelistCtn, ref: _ },
          t.map((e, r) =>
            a.createElement(
              "div",
              { key: r, ref: Q[r] },
              r == N && a.createElement(v, { width: Y }),
              a.createElement(
                "div",
                { ref: H[r], className: c().DragGhost },
                r == y &&
                  a.createElement(
                    "div",
                    { className: (0, E.A)(c().WhitelistRow, b) },
                    a.createElement("img", {
                      className: (0, E.A)(c().WhitelistAvatar, c().Grabbing),
                      src: i,
                    }),
                    a.createElement("input", {
                      className: (0, E.A)(
                        c().WhitelistNumber,
                        c().Disabled,
                        c().Grabbing,
                      ),
                      type: "text",
                      value: (N > r ? N - 1 : N) + 1,
                      disabled: !0,
                    }),
                    n(e, r),
                  ),
              ),
              a.createElement(
                "div",
                {
                  className: (0, E.A)(
                    c().WhitelistRow,
                    b,
                    B && c().DragActive,
                    r == y && c().BeingDragged,
                    z == r && c().Dropped,
                  ),
                  onAnimationEnd: () => q(void 0),
                },
                a.createElement("img", {
                  className: (0, E.A)(
                    c().WhitelistAvatar,
                    c().Grabbable,
                    C && c().DisabledGrab,
                  ),
                  src: i,
                  onMouseDown: Boolean(C) ? void 0 : (e) => T(e, r),
                }),
                a.createElement("input", {
                  className: (0, E.A)(c().WhitelistNumber, C && c().Disabled),
                  type: "text",
                  value: x == r ? V : r + 1,
                  disabled: C || r == y,
                  onChange: (e) => X(e.target.value),
                  onKeyDown: (e) =>
                    ((e, t) => {
                      "Enter" === e.key && (P(t), e.currentTarget.blur());
                    })(e, r),
                  onFocus: (e) => {
                    M(r), X(e.target.value);
                  },
                  onBlur: () => P(r),
                }),
                n(e, r),
                Boolean(r != y) &&
                  Boolean(m || o) &&
                  a.createElement(
                    "div",
                    { className: c().ButtonCtn },
                    Boolean(m) &&
                      a.createElement(
                        "div",
                        { className: A().RemoveIcon, onClick: (e) => m(r, e) },
                        a.createElement(d.ffu, null),
                      ),
                    Boolean(o) &&
                      a.createElement("img", {
                        className: A().RemoveIcon,
                        src: l.A,
                        onClick: (e) => o(r, e),
                      }),
                  ),
              ),
              N == t.length &&
                r == t.length - 1 &&
                a.createElement(v, { width: Y }),
            ),
          ),
        );
      }
      function v(e) {
        const { width: t } = e;
        return a.createElement(
          "div",
          { className: c().DragHighlightContainer },
          a.createElement("div", {
            className: c().DragHighlight,
            style: { width: t },
          }),
        );
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var a = n(94649),
        r = n.n(a);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const a = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            r().parse(e, a);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const a = new FileReader();
            (a.onload = (e) => t(a.result)), a.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const n = r().unparse(e, { header: !0 });
          i.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let a =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (a += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([a], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
