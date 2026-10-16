/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [98656],
    {
      24118: (E, N, t) => {
        "use strict";
        t.d(N, { V: () => Q });
        var s = t(7850),
          x = t(19298),
          y = t(90626),
          U = t(14256),
          n = t.n(U),
          B = t(95695),
          D = t.n(B),
          w = t(71421),
          z = t(36707),
          a = t(18210),
          p = t(96715);
        function Q(M) {
          const { eventLink: I, labelOverride: C } = M,
            A = y.useRef(null),
            [L, e] = y.useState(""),
            m = () => {
              var h;
              const v =
                (h = A.current) == null ? void 0 : h.ownerDocument.defaultView;
              !A.current ||
                !v ||
                v.navigator.clipboard
                  .writeText(A.current.value)
                  .then(() =>
                    e((0, a.we)("#EventDisplay_Share_CopiedToClipboard")),
                  )
                  .catch((O) => {
                    e((0, a.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", O);
                  });
            };
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                className: (0, z.A)(D().FlexRowContainer, n().linkField),
                children: [
                  (0, s.jsx)("span", {
                    className: n().LinkInputLabel,
                    children: (0, a.we)(
                      C != null ? C : "#EventDisplay_Share_Link",
                    ),
                  }),
                  (0, s.jsx)("input", {
                    className: n().LinkInput,
                    ref: A,
                    value: I,
                    readOnly: !0,
                    onClick: m,
                  }),
                  (0, s.jsx)(x.Z, {
                    className: (0, z.A)(D().Button, D().Icon, n().LinkButton),
                    onActivate: m,
                    children: (0, s.jsx)(w.Gq, {
                      toolTipContent: (0, a.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, s.jsx)("img", {
                        className: n().ClipboardIcon,
                        src: p.A,
                        alt: (0, a.we)("#ToolTip_CopyLinkToClipboard"),
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: n().ClipboardText, children: L }),
            ],
          });
        }
      },
      88690: (E, N, t) => {
        "use strict";
        t.r(N), t.d(N, { ShareEventDialogBody: () => ns });
        var s = t(7850),
          x = t(99412),
          y = t(32093),
          U = t(19298),
          n = t(72609),
          B = t(89926),
          D = t(90626),
          w = t(58483),
          z = t(14256),
          a = t.n(z),
          p = t(24806),
          Q = t(95695),
          M = t.n(Q),
          I = t(1880),
          C = t(71421),
          A = t(53107),
          L = t(36707),
          e = t(18210),
          m = t(56492),
          h = t(24118),
          v = t(25518),
          O = t(72604),
          F = t(35038),
          k = t(75916),
          Y = t(61739),
          Z = t(85528),
          f = t(76559),
          J = t(35098),
          G = t(45638),
          W = t(84005),
          b = t(85599),
          H = t(67705),
          V = t(29981),
          S = t.n(V);
        function K(c, i) {
          return c.trim().length
            ? c +
                `

` +
                i
            : i;
        }
        async function X(c, i, o) {
          var T;
          if (n.TS.IN_STEAMUI) {
            const u = F.w.Init(k.kVt);
            u.Body().set_appid(i), u.Body().set_status_text(o);
            const g = await k.xtC.PostStatusToFriends(
              Z.Vw.CMInterface.GetServiceTransport(),
              u,
            );
            if (g.GetEResult() != O.R) throw new Error(String(g.GetEResult()));
            return;
          }
          const r = new FormData();
          r.append("appid", String(i != null ? i : 0)),
            r.append("status_text", o),
            r.append("sessionid", (0, H.KC)());
          const d = await fetch(c + "ajaxpostuserstatus", {
            method: "POST",
            body: r,
            credentials: "include",
          });
          let l;
          try {
            l = d.ok ? await d.json() : void 0;
          } catch {
            l = void 0;
          }
          if ((l == null ? void 0 : l.success) != O.R)
            throw new Error(
              (T = l == null ? void 0 : l.message) != null ? T : d.statusText,
            );
        }
        function $(c) {
          const { appid: i, eventLink: o, emoticonStore: T, closeModal: r } = c,
            { data: d } = (0, J.js)(n.iA.steamid),
            [l, u] = D.useState(""),
            g =
              n.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              f.b.InitFromAccountID(n.iA.accountid).ConvertTo64BitString() +
              "/",
            j = (0, Y.n)({ mutationFn: () => X(g, i, K(l, o)) });
          return j.isIdle
            ? (0, s.jsx)(I.o0, {
                strDescription: "",
                strTitle: (0, e.we)("#Button_Share"),
                onCancel: r,
                onOK: () => j.mutate(),
                strOKButtonText: (0, e.we)("#Button_Post"),
                children: (0, s.jsxs)("div", {
                  className: M().FlexColumnContainer,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, e.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, L.A)(
                        S().Container,
                        M().FlexColumnContainer,
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("img", {
                              className: S().SmallAvatar,
                              src: d == null ? void 0 : d.avatar_url,
                              alt: "",
                              "data-miniprofile": "s" + n.iA.steamid,
                            }),
                            (0, s.jsx)("div", {
                              className: (0, L.A)(M().FlexColumnContainer),
                              children: (0, s.jsx)(G.I, {
                                strPlaceholder: (0, e.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => l,
                                fnOnTextChange: (P) => u(P.currentTarget.value),
                                fnSetText: u,
                                emoticonStore: T,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: v.iH,
                                classNameForTextArea: S().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: S().ShareLink,
                          children: (0, s.jsx)(W.Zn, { text: o }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, s.jsx)(I.o0, {
                strDescription: "",
                strTitle: (0, e.we)("#Button_Share"),
                onCancel: r,
                onOK: r,
                bAlertDialog: !0,
                children: (0, s.jsxs)("div", {
                  className: M().FlexColumnContainer,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, e.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className: S().Container,
                      children: [
                        j.isPending && (0, s.jsx)(b.t, { position: "center" }),
                        j.isSuccess &&
                          (0, s.jsx)("div", {
                            children: (0, e.we)("#EventDisplay_Share_Success"),
                          }),
                        j.isError &&
                          (0, s.jsx)("div", {
                            children:
                              (0, e.we)("#EventDisplay_Share_Failure") +
                              `

` +
                              j.error.message,
                          }),
                        j.isSuccess &&
                          (0, s.jsx)("a", {
                            href: g + "home",
                            target: n.TS.IN_CLIENT ? void 0 : "_blank",
                            rel: "noreferrer",
                            children: (0, e.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
        const _ =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
        var q = t(10886),
          ss = t(19654),
          ts = t(3209);
        const es = "l";
        function ns(c) {
          const { emoticonStore: i, ...o } = c;
          return (0, s.jsx)(w.rq, {
            store: i,
            children: (0, s.jsx)(as, { ...o }),
          });
        }
        function as(c) {
          const { eventModel: i, strEventLink: o, closeModal: T } = c,
            r = (0, m.JP)(i),
            d = (0, w.LJ)(),
            [l, u] = D.useState(() => (0, x.sfN)(n.TS.LANGUAGE)),
            [g, j] = D.useState(!1),
            { elDialogElement: P, fnShowLogonDialog: Ms } = (0, B.l)(
              (0, e.we)("#EventDisplay_Share_NotLoggedIn_Description"),
            ),
            is = D.useMemo(() => {
              if (!o) return "";
              const R = new URL(o);
              return R.searchParams.set(es, (0, x.LgB)(l)), R.href;
            }, [l, o]),
            os = n.TS.EREALM === y.TU.k_ESteamRealmChina,
            ls = () => {
              n.iA.logged_in ? j(!0) : Ms();
            };
          return g
            ? (0, s.jsx)($, {
                eventLink: o,
                appid: i.appid,
                emoticonStore: d,
                closeModal: T,
              })
            : (0, s.jsxs)(I.o0, {
                strDescription: "",
                strTitle: (0, e.we)("#Button_Share"),
                onCancel: T,
                onOK: T,
                bAlertDialog: !0,
                modalClassName: "EventDisplay_Share_Dialog",
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, L.A)(
                      M().FlexColumnContainer,
                      a().share_controls_ctn,
                    ),
                    children: [
                      !os &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsxs)("div", {
                              className: a().ShareLanguagePicker,
                              children: [
                                (0, s.jsx)("div", {
                                  className: a().LanguageLabel,
                                  children: (0, e.we)(
                                    "#EventDisplay_Share_LanguageLabel",
                                  ),
                                }),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)(p.Ng, {
                                    selectedLang: l,
                                    fnOnLanguageChanged: u,
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, L.A)(
                                M().FlexRowContainer,
                                a().ShareButtonContainer,
                              ),
                              style: { flexWrap: "wrap" },
                              children: [
                                (0, s.jsx)(C.he, {
                                  toolTipContent: (0, e.we)(
                                    "#EventDisplay_Share_OnSteam",
                                  ),
                                  children: (0, s.jsxs)(U.Z, {
                                    onClick: ls,
                                    className: (0, L.A)(
                                      M().Button,
                                      a().ShareBtn,
                                      a().ShareSteamBtn,
                                    ),
                                    children: [
                                      (0, s.jsx)("img", {
                                        className: a().SteamIcon,
                                        src: _,
                                        alt: (0, e.we)(
                                          "#EventDisplay_Share_OnSteam",
                                        ),
                                      }),
                                      (0, s.jsx)("span", {
                                        style: { whiteSpace: "nowrap" },
                                        children: (0, e.we)(
                                          "#EventDisplay_Share_OnMyStatus",
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, s.jsx)(C.he, {
                                  toolTipContent: (0, e.we)(
                                    "#EventDisplay_Share_OnFaceBook",
                                  ),
                                  children: (0, s.jsx)(A.uU, {
                                    href: r.strFacebookUrl,
                                    className: a().ShareBtn,
                                    children: (0, s.jsx)("img", {
                                      className: (0, L.A)(M().Button),
                                      src: q.A,
                                      alt: (0, e.we)(
                                        "#EventDisplay_Share_OnFaceBook",
                                      ),
                                    }),
                                  }),
                                }),
                                (0, s.jsx)(C.he, {
                                  toolTipContent: (0, e.we)(
                                    "#EventDisplay_Share_OnTwitter",
                                  ),
                                  children: (0, s.jsx)(A.uU, {
                                    href: r.strTwitterUrl,
                                    className: a().ShareBtn,
                                    children: (0, s.jsx)("img", {
                                      className: (0, L.A)(M().Button),
                                      src: ts.A,
                                      alt: (0, e.we)(
                                        "#EventDisplay_Share_OnTwitter",
                                      ),
                                    }),
                                  }),
                                }),
                                (0, s.jsx)(C.he, {
                                  toolTipContent: (0, e.we)(
                                    "#EventDisplay_Share_OnReddit",
                                  ),
                                  children: (0, s.jsx)(A.uU, {
                                    href: r.strRedditUrl,
                                    className: a().ShareBtn,
                                    children: (0, s.jsx)("img", {
                                      className: (0, L.A)(M().Button),
                                      src: ss.A,
                                      alt: (0, e.we)(
                                        "#EventDisplay_Share_OnReddit",
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", { className: M().Divider }),
                          ],
                        }),
                      (0, s.jsx)(h.V, { eventLink: is }),
                    ],
                  }),
                  P,
                ],
              });
        }
      },
      29981: (E) => {
        E.exports = {
          Container: "_340f4eUQ6g1wEP6XkvOi2m",
          SmallAvatar: "ZcSEHEBy6UFM8ApdYw48V",
          ShareDescription: "tGyGdizK9jd1VLqtQkToE",
          ShareLink: "_2hGcij8WDcw-rJXIjWEBu",
        };
      },
      96715: (E, N, t) => {
        "use strict";
        t.d(N, { A: () => s });
        const s =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      10886: (E, N, t) => {
        "use strict";
        t.d(N, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
      },
      19654: (E, N, t) => {
        "use strict";
        t.d(N, { A: () => s });
        const s =
          t.p +
          "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
      },
      3209: (E, N, t) => {
        "use strict";
        t.d(N, { A: () => s });
        const s =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
      },
    },
  ]);
})();
