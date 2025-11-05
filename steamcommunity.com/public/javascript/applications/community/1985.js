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
    5618: (e, t, a) => {
      "use strict";
      a.d(t, { V: () => L });
      var n = a(90626),
        M = a(61859),
        s = a(52038),
        i = a(95695),
        r = a.n(i),
        l = a(14256),
        c = a.n(l),
        o = a(32754),
        N = a(96715);
      const L = (e) => {
        const t = n.createRef(),
          [a, i] = n.useState(""),
          l = n.createRef();
        return n.createElement(
          "div",
          null,
          n.createElement(
            "div",
            {
              className: (0, s.A)(r().FlexRowContainer, c().linkField),
              onClick: (e) => {
                t.current &&
                  t.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(t.current.value)
                    .then((e) => {
                      i((0, M.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((e) => {
                      i(
                        (0, M.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", e);
                    });
              },
            },
            n.createElement(
              "span",
              { className: c().LinkInputLabel },
              (0, M.we)(
                e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            n.createElement("textarea", {
              className: c().LinkInput,
              ref: t,
              value: e.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              n.createElement(
                "div",
                {
                  className: (0, s.A)(r().Button, r().Icon, c().LinkButton),
                  title: (0, M.we)("#ToolTip_CopyLinkToClipboard"),
                },
                n.createElement(
                  o.he,
                  { toolTipContent: (0, M.we)("#ToolTip_CopyLinkToClipboard") },
                  n.createElement("img", {
                    className: c().ClipboardIcon,
                    src: N.A,
                  }),
                ),
              ),
          ),
          n.createElement("div", { ref: l, className: c().ClipboardText }, a),
        );
      };
    },
    61985: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Z });
      var n = a(34629),
        M = a(90626),
        s = a(22837),
        i = a(95695),
        r = a.n(i),
        l = a(82477),
        c = a(52038),
        o = a(61859),
        N = a(73745),
        L = a(78327);
      var u = a(10886),
        T = a(19654),
        D = a(3209),
        E = a(9154),
        j = a(32754),
        w = a(51272),
        S = a(14256),
        y = a.n(S),
        m = a(1909),
        d = a(41735),
        z = a.n(d),
        C = a(75844),
        I = a(79821),
        g = a(56545),
        x = a(51006),
        p = a(17720),
        O = a(37735),
        v = a(9239),
        A = a(68797),
        k = a(22797),
        h = a(94429),
        U = a(86244),
        b = a.n(U),
        Q = a(41471);
      const _ = (0, C.PA)((e) => {
        const { appid: t, eventLink: a } = e,
          n = M.useRef(null),
          { data: s } = (0, Q.js)(L.iA.steamid),
          [i, l] = M.useState(""),
          [N, u] = M.useState(!1),
          [T, D] = M.useState(""),
          [j, w] = M.useState(!1);
        M.useEffect(
          () => () =>
            n.current &&
            n.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const S = s ? s.avatar_url : null,
          y = p.b.InitFromAccountID(L.iA.accountid),
          m = async () => {
            var e, M;
            n.current &&
              n.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const s = z().CancelToken.source();
            (n.current = s.cancel), u(!0);
            let r = i;
            0 != r.trim().length && (r += "\n\n"), (r += a);
            const l =
              L.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              y.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (L.TS.IN_STEAMUI) {
                let e = g.w.Init(O.kV);
                e.Body().set_appid(t), e.Body().set_status_text(r);
                let a = await O.xt.PostStatusToFriends(
                  x.Vw.CMInterface.GetServiceTransport(),
                  e,
                );
                if (1 != a.GetEResult()) {
                  const e =
                    (0, o.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    a.GetEResult();
                  return (
                    console.error(e, !s.token.reason),
                    void (s.token.reason || D(e))
                  );
                }
              } else {
                const a = new FormData();
                a.append("appid", "" + t),
                  a.append("status_text", r),
                  a.append("sessionid", L.TS.SESSIONID);
                const n = await z().post(l, a, { withCredentials: !0 });
                if (
                  200 != n.status ||
                  1 !=
                    (null === (e = null == n ? void 0 : n.data) || void 0 === e
                      ? void 0
                      : e.success)
                ) {
                  const e =
                    (0, o.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    (null === (M = null == n ? void 0 : n.data) || void 0 === M
                      ? void 0
                      : M.message);
                  return console.error(e), void (s.token.reason || D(e));
                }
              }
              s.token.reason ||
                (w(!0), D((0, o.we)("#EventDisplay_Share_Success")));
            } catch (e) {
              const t = (0, A.H)(e),
                a =
                  (0, o.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  t.strErrorMsg;
              s.token.reason || D(a), console.error(a);
            }
          };
        return N
          ? M.createElement(
              E.o0,
              {
                strDescription: "",
                strTitle: (0, o.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: e.closeModal,
                bAlertDialog: !0,
              },
              M.createElement(
                "div",
                { className: r().FlexColumnContainer },
                M.createElement(
                  "div",
                  null,
                  (0, o.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  { className: b().Container },
                  0 == (null == T ? void 0 : T.length)
                    ? M.createElement(k.t, { position: "center" })
                    : M.createElement("div", null, T),
                  Boolean(j) &&
                    M.createElement(
                      "a",
                      {
                        href:
                          L.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          y.ConvertTo64BitString() +
                          "/home",
                        target: L.TS.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, o.we)("#EventDisplay_Share_OpenActivityFeed"),
                    ),
                ),
              ),
            )
          : M.createElement(
              E.o0,
              {
                strDescription: "",
                strTitle: (0, o.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: m,
                strOKButtonText: (0, o.we)("#Button_Post"),
              },
              M.createElement(
                "div",
                { className: r().FlexColumnContainer },
                M.createElement(
                  "div",
                  null,
                  (0, o.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  {
                    className: (0, c.A)(b().Container, r().FlexColumnContainer),
                  },
                  M.createElement(
                    "div",
                    null,
                    M.createElement("img", {
                      className: b().SmallAvatar,
                      src: S,
                      "data-miniprofile": "s" + L.iA.steamid,
                    }),
                    M.createElement(
                      "div",
                      { className: (0, c.A)(r().FlexColumnContainer) },
                      M.createElement(v.I, {
                        strPlaceholder: (0, o.we)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder",
                        ),
                        fnGetCurText: () => i,
                        fnOnTextChange: (e) => l(e.currentTarget.value),
                        fnSetText: l,
                        emoticonStore: e.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: I.iH,
                        classNameForTextArea: b().ShareDescription,
                        bEmbeddedInDialog: !0,
                      }),
                    ),
                  ),
                  M.createElement(
                    "div",
                    { className: b().ShareLink },
                    M.createElement(h.fh, {
                      text: a,
                      event: null,
                      partnerEventStore: e.partnerEventStore,
                    }),
                  ),
                ),
              ),
            );
      });
      var Y = a(68255),
        B = a(5618);
      class Z extends M.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bShareOnSteamDialog: !1,
              bRequireLoginToShare: !1,
            });
        }
        ShareOnSteamActivityFeed() {
          L.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : L.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            sharePageUrls: t,
            appid: a,
            closeModal: n,
            emoticonStore: s,
            partnerEventStore: i,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? M.createElement(E.o0, {
                strTitle: (0, o.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, o.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, o.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, l.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? M.createElement(_, {
                  eventLink: e,
                  appid: a,
                  emoticonStore: s,
                  partnerEventStore: i,
                  closeModal: n,
                })
              : M.createElement(
                  E.o0,
                  {
                    strDescription: "",
                    strTitle: (0, o.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  M.createElement(G, {
                    eventLink: e,
                    sharePageUrls: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, n.Cg)([N.oI], Z.prototype, "ShareOnSteamActivityFeed", null);
      const G = (e) => {
        const {
            eventLink: t,
            sharePageUrls: a,
            fnShareOnSteamActivityFeed: n,
          } = e,
          i = (0, L.Y2)(),
          [l, N] = (0, M.useState)((0, s.sf)(L.TS.LANGUAGE)),
          E = (0, M.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, s.Lg)(l)), e.href;
          }, [l, t]);
        return M.createElement(
          "div",
          {
            className: (0, c.A)(
              r().FlexColumnContainer,
              y().share_controls_ctn,
            ),
          },
          !i &&
            M.createElement(
              M.Fragment,
              null,
              M.createElement(
                "div",
                { className: y().ShareLanguagePicker },
                M.createElement(
                  Y.JU,
                  { className: y().LanguageLabel },
                  (0, o.we)("#EventDisplay_Share_LanguageLabel"),
                ),
                M.createElement(
                  "div",
                  null,
                  M.createElement(m.Ng, {
                    selectedLang: l,
                    fnOnLanguageChanged: N,
                  }),
                ),
              ),
              M.createElement(
                "div",
                {
                  className: (0, c.A)(
                    r().FlexRowContainer,
                    y().ShareButtonContainer,
                  ),
                  style: { flexWrap: "wrap" },
                },
                M.createElement(
                  j.he,
                  { toolTipContent: (0, o.we)("#EventDisplay_Share_OnSteam") },
                  M.createElement(
                    "div",
                    {
                      onClick: n,
                      className: (0, c.A)(
                        r().Button,
                        y().ShareBtn,
                        y().ShareSteamBtn,
                      ),
                    },
                    M.createElement("img", {
                      className: y().SteamIcon,
                      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                    }),
                    M.createElement(
                      "span",
                      { style: { whiteSpace: "nowrap" } },
                      (0, o.we)("#EventDisplay_Share_OnMyStatus"),
                    ),
                  ),
                ),
                M.createElement(
                  j.he,
                  {
                    toolTipContent: (0, o.we)("#EventDisplay_Share_OnFaceBook"),
                  },
                  M.createElement(
                    w.uU,
                    { href: a.strFacebookUrl, className: y().ShareBtn },
                    M.createElement("img", {
                      className: (0, c.A)(r().Button),
                      src: u.A,
                    }),
                  ),
                ),
                M.createElement(
                  j.he,
                  {
                    toolTipContent: (0, o.we)("#EventDisplay_Share_OnTwitter"),
                  },
                  M.createElement(
                    w.uU,
                    { href: a.strTwitterUrl, className: y().ShareBtn },
                    M.createElement("img", {
                      className: (0, c.A)(r().Button),
                      src: D.A,
                    }),
                  ),
                ),
                M.createElement(
                  j.he,
                  { toolTipContent: (0, o.we)("#EventDisplay_Share_OnReddit") },
                  M.createElement(
                    w.uU,
                    { href: a.strRedditUrl, className: y().ShareBtn },
                    M.createElement("img", {
                      className: (0, c.A)(r().Button),
                      src: T.A,
                    }),
                  ),
                ),
              ),
              M.createElement("div", { className: r().Divider }),
            ),
          M.createElement(B.V, { eventLink: E }),
        );
      };
    },
    96715: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        a.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);
