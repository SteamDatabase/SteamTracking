/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1985],
  {
    86244: (e) => {
      e.exports = {
        Container: "_2vGr9KsApU0s59_ZsZVxXY",
        SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
        ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
        ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
      };
    },
    5618: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => L });
      var a = n(90626),
        M = n(61859),
        i = n(52038),
        s = n(95695),
        r = n.n(s),
        l = n(14256),
        c = n.n(l),
        o = n(32754),
        N = n(96715);
      const L = (e) => {
        const t = a.createRef(),
          [n, s] = a.useState(""),
          l = a.createRef();
        return a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            {
              className: (0, i.A)(r().FlexRowContainer, c().linkField),
              onClick: (e) => {
                t.current &&
                  t.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(t.current.value)
                    .then((e) => {
                      s((0, M.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((e) => {
                      s(
                        (0, M.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", e);
                    });
              },
            },
            a.createElement(
              "span",
              { className: c().LinkInputLabel },
              (0, M.we)(
                e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            a.createElement("textarea", {
              className: c().LinkInput,
              ref: t,
              value: e.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              a.createElement(
                "div",
                {
                  className: (0, i.A)(r().Button, r().Icon, c().LinkButton),
                  title: (0, M.we)("#ToolTip_CopyLinkToClipboard"),
                },
                a.createElement(
                  o.he,
                  { toolTipContent: (0, M.we)("#ToolTip_CopyLinkToClipboard") },
                  a.createElement("img", {
                    className: c().ClipboardIcon,
                    src: N.A,
                  }),
                ),
              ),
          ),
          a.createElement("div", { ref: l, className: c().ClipboardText }, n),
        );
      };
    },
    61985: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Z });
      var a = n(34629),
        M = n(90626),
        i = n(22837),
        s = n(3919),
        r = n(95695),
        l = n.n(r),
        c = n(82477),
        o = n(52038),
        N = n(61859),
        L = n(73745),
        u = n(78327);
      var T = n(10886),
        D = n(19654),
        E = n(3209),
        j = n(9154),
        S = n(32754),
        w = n(51272),
        y = n(14256),
        m = n.n(y),
        d = n(1909),
        z = n(41735),
        C = n.n(z),
        I = n(75844),
        g = n(79821),
        x = n(56545),
        p = n(51006),
        O = n(17720),
        v = n(37735),
        k = n(9239),
        A = n(68797),
        h = n(22797),
        U = n(84106),
        b = n(86244),
        _ = n.n(b),
        Q = n(14336);
      const Y = (0, I.PA)((e) => {
        const { appid: t, eventLink: n } = e,
          a = M.useRef(null),
          { data: i } = (0, Q.js)(u.iA.steamid),
          [s, r] = M.useState(""),
          [c, L] = M.useState(!1),
          [T, D] = M.useState(""),
          [E, S] = M.useState(!1);
        M.useEffect(
          () => () =>
            a.current &&
            a.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const w = i ? i.avatar_url : null,
          y = O.b.InitFromAccountID(u.iA.accountid),
          m = async () => {
            var e, M;
            a.current &&
              a.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const i = C().CancelToken.source();
            (a.current = i.cancel), L(!0);
            let r = s;
            0 != r.trim().length && (r += "\n\n"), (r += n);
            const l =
              u.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              y.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (u.TS.IN_STEAMUI) {
                let e = x.w.Init(v.kV);
                e.Body().set_appid(t), e.Body().set_status_text(r);
                let n = await v.xt.PostStatusToFriends(
                  p.Vw.CMInterface.GetServiceTransport(),
                  e,
                );
                if (1 != n.GetEResult()) {
                  const e =
                    (0, N.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    n.GetEResult();
                  return (
                    console.error(e, !i.token.reason),
                    void (i.token.reason || D(e))
                  );
                }
              } else {
                const n = new FormData();
                n.append("appid", "" + t),
                  n.append("status_text", r),
                  n.append("sessionid", u.TS.SESSIONID);
                const a = await C().post(l, n, { withCredentials: !0 });
                if (
                  200 != a.status ||
                  1 !=
                    (null === (e = null == a ? void 0 : a.data) || void 0 === e
                      ? void 0
                      : e.success)
                ) {
                  const e =
                    (0, N.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    (null === (M = null == a ? void 0 : a.data) || void 0 === M
                      ? void 0
                      : M.message);
                  return console.error(e), void (i.token.reason || D(e));
                }
              }
              i.token.reason ||
                (S(!0), D((0, N.we)("#EventDisplay_Share_Success")));
            } catch (e) {
              const t = (0, A.H)(e),
                n =
                  (0, N.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  t.strErrorMsg;
              i.token.reason || D(n), console.error(n);
            }
          };
        return c
          ? M.createElement(
              j.o0,
              {
                strDescription: "",
                strTitle: (0, N.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: e.closeModal,
                bAlertDialog: !0,
              },
              M.createElement(
                "div",
                { className: l().FlexColumnContainer },
                M.createElement(
                  "div",
                  null,
                  (0, N.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  { className: _().Container },
                  0 == (null == T ? void 0 : T.length)
                    ? M.createElement(h.t, { position: "center" })
                    : M.createElement("div", null, T),
                  Boolean(E) &&
                    M.createElement(
                      "a",
                      {
                        href:
                          u.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          y.ConvertTo64BitString() +
                          "/home",
                        target: u.TS.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, N.we)("#EventDisplay_Share_OpenActivityFeed"),
                    ),
                ),
              ),
            )
          : M.createElement(
              j.o0,
              {
                strDescription: "",
                strTitle: (0, N.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: m,
                strOKButtonText: (0, N.we)("#Button_Post"),
              },
              M.createElement(
                "div",
                { className: l().FlexColumnContainer },
                M.createElement(
                  "div",
                  null,
                  (0, N.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  {
                    className: (0, o.A)(_().Container, l().FlexColumnContainer),
                  },
                  M.createElement(
                    "div",
                    null,
                    M.createElement("img", {
                      className: _().SmallAvatar,
                      src: w,
                      "data-miniprofile": "s" + u.iA.steamid,
                    }),
                    M.createElement(
                      "div",
                      { className: (0, o.A)(l().FlexColumnContainer) },
                      M.createElement(k.I, {
                        strPlaceholder: (0, N.we)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder",
                        ),
                        fnGetCurText: () => s,
                        fnOnTextChange: (e) => r(e.currentTarget.value),
                        fnSetText: r,
                        emoticonStore: e.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: g.iH,
                        classNameForTextArea: _().ShareDescription,
                        bEmbeddedInDialog: !0,
                      }),
                    ),
                  ),
                  M.createElement(
                    "div",
                    { className: _().ShareLink },
                    M.createElement(U.f, {
                      text: n,
                      event: null,
                      partnerEventStore: e.partnerEventStore,
                    }),
                  ),
                ),
              ),
            );
      });
      var B = n(33737),
        G = n(5618);
      class Z extends M.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShareOnSteamDialog: !1,
              bRequireLoginToShare: !1,
            });
        }
        ShareOnSteamActivityFeed() {
          u.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : u.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            fnGetSharePageUrl: t,
            appid: n,
            closeModal: a,
            emoticonStore: i,
            partnerEventStore: s,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? M.createElement(j.o0, {
                strTitle: (0, N.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, N.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, N.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, c.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? M.createElement(Y, {
                  eventLink: e,
                  appid: n,
                  emoticonStore: i,
                  partnerEventStore: s,
                  closeModal: a,
                })
              : M.createElement(
                  j.o0,
                  {
                    strDescription: "",
                    strTitle: (0, N.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  M.createElement(F, {
                    eventLink: e,
                    fnGetSharePageUrl: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, a.Cg)([L.oI], Z.prototype, "ShareOnSteamActivityFeed", null);
      const F = (e) => {
        const {
            eventLink: t,
            fnGetSharePageUrl: n,
            fnShareOnSteamActivityFeed: a,
          } = e,
          r = (0, u.Y2)(),
          [c, L] = (0, M.useState)((0, i.sf)(u.TS.LANGUAGE)),
          j = (0, M.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, i.Lg)(c)), e.href;
          }, [c, t]);
        return M.createElement(
          "div",
          {
            className: (0, o.A)(
              l().FlexColumnContainer,
              m().share_controls_ctn,
            ),
          },
          !r &&
            M.createElement(
              M.Fragment,
              null,
              M.createElement(
                "div",
                { className: m().ShareLanguagePicker },
                M.createElement(
                  B.JU,
                  { className: m().LanguageLabel },
                  (0, N.we)("#EventDisplay_Share_LanguageLabel"),
                ),
                M.createElement(
                  "div",
                  null,
                  M.createElement(d.Ng, {
                    selectedLang: c,
                    fnOnLanguageChanged: L,
                  }),
                ),
              ),
              M.createElement(
                "div",
                {
                  className: (0, o.A)(
                    l().FlexRowContainer,
                    m().ShareButtonContainer,
                  ),
                  style: { flexWrap: "wrap" },
                },
                M.createElement(
                  S.he,
                  { toolTipContent: (0, N.we)("#EventDisplay_Share_OnSteam") },
                  M.createElement(
                    "div",
                    {
                      onClick: a,
                      className: (0, o.A)(
                        l().Button,
                        m().ShareBtn,
                        m().ShareSteamBtn,
                      ),
                    },
                    M.createElement("img", {
                      className: m().SteamIcon,
                      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                    }),
                    M.createElement(
                      "span",
                      { style: { whiteSpace: "nowrap" } },
                      (0, N.we)("#EventDisplay_Share_OnMyStatus"),
                    ),
                  ),
                ),
                M.createElement(
                  S.he,
                  {
                    toolTipContent: (0, N.we)("#EventDisplay_Share_OnFaceBook"),
                  },
                  M.createElement(
                    w.uU,
                    { href: n(s._.k_eFacebook), className: m().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(l().Button),
                      src: T.A,
                    }),
                  ),
                ),
                M.createElement(
                  S.he,
                  {
                    toolTipContent: (0, N.we)("#EventDisplay_Share_OnTwitter"),
                  },
                  M.createElement(
                    w.uU,
                    { href: n(s._.k_eTwitter), className: m().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(l().Button),
                      src: E.A,
                    }),
                  ),
                ),
                M.createElement(
                  S.he,
                  { toolTipContent: (0, N.we)("#EventDisplay_Share_OnReddit") },
                  M.createElement(
                    w.uU,
                    { href: n(s._.k_eReddit), className: m().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(l().Button),
                      src: D.A,
                    }),
                  ),
                ),
              ),
              M.createElement("div", { className: l().Divider }),
            ),
          M.createElement(G.V, { eventLink: j }),
        );
      };
    },
    96715: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        n.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);
