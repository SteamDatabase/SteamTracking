/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8101],
  {
    20482: (e, M, t) => {
      t.r(M), t.d(M, { default: () => d });
      var N = t(34629),
        a = t(90626),
        L = t(22837),
        n = t(75113),
        i = t(95695),
        c = t.n(i),
        s = t(82477),
        T = t(52038),
        j = t(61859),
        l = t(73745),
        D = t(78327);
      var o = t(10886),
        r = t(19654),
        w = t(3209),
        z = t(51706),
        E = t(32754),
        u = t(51272),
        y = t(14256),
        I = t.n(y),
        S = t(1909),
        g = t(73067),
        C = t(10981),
        x = t(96715);
      const m = (e) => {
        const M = a.createRef(),
          [t, N] = a.useState(""),
          L = a.createRef();
        return a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            {
              className: (0, T.A)(c().FlexRowContainer, I().linkField),
              onClick: (e) => {
                M.current &&
                  M.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(M.current.value)
                    .then((e) => {
                      N((0, j.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((e) => {
                      N(
                        (0, j.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", e);
                    });
              },
            },
            a.createElement(
              "span",
              { className: I().LinkInputLabel },
              (0, j.we)(
                e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            a.createElement("textarea", {
              className: I().LinkInput,
              ref: M,
              value: e.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              a.createElement(
                "div",
                {
                  className: (0, T.A)(c().Button, c().Icon, I().LinkButton),
                  title: (0, j.we)("#ToolTip_CopyLinkToClipboard"),
                },
                a.createElement(
                  E.he,
                  { toolTipContent: (0, j.we)("#ToolTip_CopyLinkToClipboard") },
                  a.createElement("img", {
                    className: I().ClipboardIcon,
                    src: x.A,
                  }),
                ),
              ),
          ),
          a.createElement("div", { ref: L, className: I().ClipboardText }, t),
        );
      };
      class d extends a.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
        ShareOnSteamActivityFeed() {
          D.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : D.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            fnGetSharePageUrl: M,
            appid: t,
            closeModal: N,
            emoticonStore: L,
            partnerEventStore: n,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? a.createElement(z.o0, {
                strTitle: (0, j.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, j.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, j.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, s.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? a.createElement(g.J, {
                  eventLink: e,
                  appid: t,
                  emoticonStore: L,
                  partnerEventStore: n,
                  closeModal: N,
                })
              : a.createElement(
                  z.o0,
                  {
                    strDescription: "",
                    strTitle: (0, j.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  a.createElement(O, {
                    eventLink: e,
                    fnGetSharePageUrl: M,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, N.Cg)([l.oI], d.prototype, "ShareOnSteamActivityFeed", null);
      const O = (e) => {
        const {
            eventLink: M,
            fnGetSharePageUrl: t,
            fnShareOnSteamActivityFeed: N,
          } = e,
          i = (0, D.Y2)(),
          [s, l] = (0, a.useState)((0, L.sf)(D.TS.LANGUAGE)),
          z = (0, a.useMemo)(() => {
            const e = new URL(M);
            return e.searchParams.set("l", (0, L.Lg)(s)), e.href;
          }, [s, M]);
        return a.createElement(
          "div",
          {
            className: (0, T.A)(
              c().FlexColumnContainer,
              I().share_controls_ctn,
            ),
          },
          !i &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                "div",
                { className: I().ShareLanguagePicker },
                a.createElement(
                  C.JU,
                  { className: I().LanguageLabel },
                  (0, j.we)("#EventDisplay_Share_LanguageLabel"),
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement(S.Ng, {
                    selectedLang: s,
                    fnOnLanguageChanged: l,
                  }),
                ),
              ),
              a.createElement(
                "div",
                {
                  className: (0, T.A)(
                    c().FlexRowContainer,
                    I().ShareButtonContainer,
                  ),
                  style: { flexWrap: "wrap" },
                },
                a.createElement(
                  E.he,
                  { toolTipContent: (0, j.we)("#EventDisplay_Share_OnSteam") },
                  a.createElement(
                    "div",
                    {
                      onClick: N,
                      className: (0, T.A)(
                        c().Button,
                        I().ShareBtn,
                        I().ShareSteamBtn,
                      ),
                    },
                    a.createElement("img", {
                      className: I().SteamIcon,
                      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                    }),
                    a.createElement(
                      "span",
                      { style: { whiteSpace: "nowrap" } },
                      (0, j.we)("#EventDisplay_Share_OnMyStatus"),
                    ),
                  ),
                ),
                a.createElement(
                  E.he,
                  {
                    toolTipContent: (0, j.we)("#EventDisplay_Share_OnFaceBook"),
                  },
                  a.createElement(
                    u.uU,
                    { href: t(n._.k_eFacebook), className: I().ShareBtn },
                    a.createElement("img", {
                      className: (0, T.A)(c().Button),
                      src: o.A,
                    }),
                  ),
                ),
                a.createElement(
                  E.he,
                  {
                    toolTipContent: (0, j.we)("#EventDisplay_Share_OnTwitter"),
                  },
                  a.createElement(
                    u.uU,
                    { href: t(n._.k_eTwitter), className: I().ShareBtn },
                    a.createElement("img", {
                      className: (0, T.A)(c().Button),
                      src: w.A,
                    }),
                  ),
                ),
                a.createElement(
                  E.he,
                  { toolTipContent: (0, j.we)("#EventDisplay_Share_OnReddit") },
                  a.createElement(
                    u.uU,
                    { href: t(n._.k_eReddit), className: I().ShareBtn },
                    a.createElement("img", {
                      className: (0, T.A)(c().Button),
                      src: r.A,
                    }),
                  ),
                ),
              ),
              a.createElement("div", { className: c().Divider }),
            ),
          a.createElement(m, { eventLink: z }),
        );
      };
    },
    96715: (e, M, t) => {
      t.d(M, { A: () => N });
      const N =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, M, t) => {
      t.d(M, { A: () => N });
      const N =
        t.p +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);
