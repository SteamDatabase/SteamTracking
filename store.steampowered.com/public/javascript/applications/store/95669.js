/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [95669],
  {
    5618: (M, e, N) => {
      N.d(e, { V: () => o });
      var s = N(7850),
        L = N(90626),
        i = N(61859),
        t = N(52038),
        A = N(95695),
        j = N.n(A),
        n = N(14256),
        a = N.n(n),
        D = N(32754),
        T = N(96715),
        c = N(76217);
      const o = (M) => {
        const e = L.createRef(),
          [N, A] = L.useState(""),
          n = L.createRef(),
          o = () => {
            const M = e.current?.ownerDocument.defaultView;
            e.current &&
              M &&
              M.navigator.clipboard
                .writeText(e.current.value)
                .then((M) => {
                  A((0, i.we)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((M) => {
                  A((0, i.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", M);
                });
          };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsxs)("div", {
              className: (0, t.A)(j().FlexRowContainer, a().linkField),
              onClick: o,
              children: [
                (0, s.jsx)("span", {
                  className: a().LinkInputLabel,
                  children: (0, i.we)(
                    M.labelOverride
                      ? M.labelOverride
                      : "#EventDisplay_Share_Link",
                  ),
                }),
                (0, s.jsx)("input", {
                  className: a().LinkInput,
                  ref: e,
                  value: M.eventLink,
                  readOnly: !0,
                }),
                document.queryCommandSupported("copy") &&
                  (0, s.jsx)(c.Z, {
                    className: (0, t.A)(j().Button, j().Icon, a().LinkButton),
                    onActivate: o,
                    children: (0, s.jsx)(D.Gq, {
                      toolTipContent: (0, i.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, s.jsx)("img", {
                        className: a().ClipboardIcon,
                        src: T.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              ref: n,
              className: a().ClipboardText,
              children: N,
            }),
          ],
        });
      };
    },
    94446: (M, e, N) => {
      N.r(e), N.d(e, { default: () => U });
      var s = N(34629),
        L = N(7850),
        i = N(90626),
        t = N(22837),
        A = N(76217),
        j = N(95695),
        n = N.n(j),
        a = N(71420),
        D = N(52038),
        T = N(61859),
        c = N(84933),
        o = N(78327),
        w = N(96264),
        l = N(10886),
        I = N(19654),
        z = N(3209),
        g = N(74568),
        u = N(32754),
        C = N(51272),
        r = N(14256),
        S = N.n(r),
        y = N(1909),
        x = N(73067),
        E = N(56283),
        d = N(5618);
      class U extends i.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
        ShareOnSteamActivityFeed() {
          o.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : o.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: M,
            sharePageUrls: e,
            appid: N,
            closeModal: s,
            emoticonStore: i,
            partnerEventStore: t,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, L.jsx)(g.o0, {
                strTitle: (0, T.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, T.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, T.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, a.l)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, L.jsx)(x.J, {
                  eventLink: M,
                  appid: N,
                  emoticonStore: i,
                  partnerEventStore: t,
                  closeModal: s,
                })
              : (0, L.jsx)(g.o0, {
                  strDescription: "",
                  strTitle: (0, T.we)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, L.jsx)(k, {
                    eventLink: M,
                    sharePageUrls: e,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, s.Cg)([c.oI], U.prototype, "ShareOnSteamActivityFeed", null);
      const k = (M) => {
        const {
            eventLink: e,
            sharePageUrls: N,
            fnShareOnSteamActivityFeed: s,
          } = M,
          j = (0, o.Y2)(),
          [a, c] = (0, i.useState)((0, t.sfN)(o.TS.LANGUAGE)),
          g = (0, i.useMemo)(() => {
            const M = new URL(e);
            return M.searchParams.set("l", (0, t.LgB)(a)), M.href;
          }, [a, e]);
        return (0, L.jsxs)("div", {
          className: (0, D.A)(n().FlexColumnContainer, S().share_controls_ctn),
          children: [
            !j &&
              (0, L.jsxs)(L.Fragment, {
                children: [
                  (0, L.jsxs)("div", {
                    className: S().ShareLanguagePicker,
                    children: [
                      (0, L.jsx)(E.JU, {
                        className: S().LanguageLabel,
                        children: (0, T.we)(
                          "#EventDisplay_Share_LanguageLabel",
                        ),
                      }),
                      (0, L.jsx)("div", {
                        children: (0, L.jsx)(y.Ng, {
                          selectedLang: a,
                          fnOnLanguageChanged: c,
                        }),
                      }),
                    ],
                  }),
                  (0, L.jsxs)("div", {
                    className: (0, D.A)(
                      n().FlexRowContainer,
                      S().ShareButtonContainer,
                    ),
                    style: { flexWrap: "wrap" },
                    children: [
                      (0, L.jsx)(u.he, {
                        toolTipContent: (0, T.we)(
                          "#EventDisplay_Share_OnSteam",
                        ),
                        children: (0, L.jsxs)(A.Z, {
                          onClick: s,
                          className: (0, D.A)(
                            n().Button,
                            S().ShareBtn,
                            S().ShareSteamBtn,
                          ),
                          children: [
                            (0, L.jsx)("img", {
                              className: S().SteamIcon,
                              src: w.A,
                            }),
                            (0, L.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: (0, T.we)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsx)(u.he, {
                        toolTipContent: (0, T.we)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, L.jsx)(C.uU, {
                          href: N.strFacebookUrl,
                          className: S().ShareBtn,
                          children: (0, L.jsx)("img", {
                            className: (0, D.A)(n().Button),
                            src: l.A,
                          }),
                        }),
                      }),
                      (0, L.jsx)(u.he, {
                        toolTipContent: (0, T.we)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, L.jsx)(C.uU, {
                          href: N.strTwitterUrl,
                          className: S().ShareBtn,
                          children: (0, L.jsx)("img", {
                            className: (0, D.A)(n().Button),
                            src: z.A,
                          }),
                        }),
                      }),
                      (0, L.jsx)(u.he, {
                        toolTipContent: (0, T.we)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, L.jsx)(C.uU, {
                          href: N.strRedditUrl,
                          className: S().ShareBtn,
                          children: (0, L.jsx)("img", {
                            className: (0, D.A)(n().Button),
                            src: I.A,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, L.jsx)("div", { className: n().Divider }),
                ],
              }),
            (0, L.jsx)(d.V, { eventLink: g }),
          ],
        });
      };
    },
    96715: (M, e, N) => {
      N.d(e, { A: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    96264: (M, e, N) => {
      N.d(e, { A: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
    },
    10886: (M, e, N) => {
      N.d(e, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (M, e, N) => {
      N.d(e, { A: () => s });
      const s =
        N.p +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (M, e, N) => {
      N.d(e, { A: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
