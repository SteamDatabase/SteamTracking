/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6757],
  {
    86244: (e) => {
      e.exports = {
        Container: "_2vGr9KsApU0s59_ZsZVxXY",
        SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
        ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
        ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
      };
    },
    36757: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => J });
      var n = a(34629),
        M = a(90626),
        s = a(22837),
        i = a(95695),
        r = a.n(i),
        l = a(82477),
        o = a(52038),
        N = a(61859),
        c = a(73745),
        L = a(78327);
      var A = a(10886),
        D = a(19654),
        T = a(3209),
        u = a(9154),
        E = a(32754),
        w = a(51272),
        S = a(14256),
        j = a.n(S),
        m = a(1909),
        C = a(41735),
        I = a.n(C),
        g = a(75844),
        y = a(79821),
        d = a(56545),
        z = a(51006),
        p = a(17720),
        x = a(37735),
        U = a(6205),
        k = a(68797),
        O = a(22797),
        h = a(68770),
        v = a(86244),
        B = a.n(v),
        b = a(14336);
      const Q = (0, g.PA)((e) => {
        const { appid: t, eventLink: a } = e,
          n = M.useRef(null),
          { data: s } = (0, b.js)(L.iA.steamid),
          [i, l] = M.useState(""),
          [c, A] = M.useState(!1),
          [D, T] = M.useState(""),
          [E, w] = M.useState(!1);
        M.useEffect(
          () => () =>
            n.current &&
            n.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const S = s ? s.avatar_url : null,
          j = p.b.InitFromAccountID(L.iA.accountid),
          m = async () => {
            n.current &&
              n.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const e = I().CancelToken.source();
            (n.current = e.cancel), A(!0);
            let M = i;
            0 != M.trim().length && (M += "\n\n"), (M += a);
            const s =
              L.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              j.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (L.TS.IN_STEAMUI) {
                let a = d.w.Init(x.kV);
                a.Body().set_appid(t), a.Body().set_status_text(M);
                let n = await x.xt.PostStatusToFriends(
                  z.Vw.CMInterface.GetServiceTransport(),
                  a,
                );
                if (1 != n.GetEResult()) {
                  const t =
                    (0, N.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    n.GetEResult();
                  return (
                    console.error(t, !e.token.reason),
                    void (e.token.reason || T(t))
                  );
                }
              } else {
                const a = new FormData();
                a.append("appid", "" + t),
                  a.append("status_text", M),
                  a.append("sessionid", L.TS.SESSIONID);
                const n = await I().post(s, a, { withCredentials: !0 });
                if (200 != n.status || 1 != n?.data?.success) {
                  const t =
                    (0, N.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    n?.data?.message;
                  return console.error(t), void (e.token.reason || T(t));
                }
              }
              e.token.reason ||
                (w(!0), T((0, N.we)("#EventDisplay_Share_Success")));
            } catch (t) {
              const a = (0, k.H)(t),
                n =
                  (0, N.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  a.strErrorMsg;
              e.token.reason || T(n), console.error(n);
            }
          };
        return c
          ? M.createElement(
              u.o0,
              {
                strDescription: "",
                strTitle: (0, N.we)("#Button_Share"),
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
                  (0, N.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  { className: B().Container },
                  0 == D?.length
                    ? M.createElement(O.t, { position: "center" })
                    : M.createElement("div", null, D),
                  Boolean(E) &&
                    M.createElement(
                      "a",
                      {
                        href:
                          L.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          j.ConvertTo64BitString() +
                          "/home",
                        target: L.TS.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, N.we)("#EventDisplay_Share_OpenActivityFeed"),
                    ),
                ),
              ),
            )
          : M.createElement(
              u.o0,
              {
                strDescription: "",
                strTitle: (0, N.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: m,
                strOKButtonText: (0, N.we)("#Button_Post"),
              },
              M.createElement(
                "div",
                { className: r().FlexColumnContainer },
                M.createElement(
                  "div",
                  null,
                  (0, N.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                M.createElement(
                  "div",
                  {
                    className: (0, o.A)(B().Container, r().FlexColumnContainer),
                  },
                  M.createElement(
                    "div",
                    null,
                    M.createElement("img", {
                      className: B().SmallAvatar,
                      src: S,
                      "data-miniprofile": "s" + L.iA.steamid,
                    }),
                    M.createElement(
                      "div",
                      { className: (0, o.A)(r().FlexColumnContainer) },
                      M.createElement(U.I, {
                        strPlaceholder: (0, N.we)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder",
                        ),
                        fnGetCurText: () => i,
                        fnOnTextChange: (e) => l(e.currentTarget.value),
                        fnSetText: l,
                        emoticonStore: e.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: y.iH,
                        classNameForTextArea: B().ShareDescription,
                        bEmbeddedInDialog: !0,
                      }),
                    ),
                  ),
                  M.createElement(
                    "div",
                    { className: B().ShareLink },
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
      var Y = a(16676),
        F = a(96715);
      const Z = (e) => {
        const t = M.createRef(),
          [a, n] = M.useState(""),
          s = M.createRef();
        return M.createElement(
          "div",
          null,
          M.createElement(
            "div",
            {
              className: (0, o.A)(r().FlexRowContainer, j().linkField),
              onClick: (e) => {
                t.current &&
                  t.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(t.current.value)
                    .then((e) => {
                      n((0, N.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((e) => {
                      n(
                        (0, N.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", e);
                    });
              },
            },
            M.createElement(
              "span",
              { className: j().LinkInputLabel },
              (0, N.we)(
                e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            M.createElement("textarea", {
              className: j().LinkInput,
              ref: t,
              value: e.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              M.createElement(
                "div",
                {
                  className: (0, o.A)(r().Button, r().Icon, j().LinkButton),
                  title: (0, N.we)("#ToolTip_CopyLinkToClipboard"),
                },
                M.createElement(
                  E.he,
                  { toolTipContent: (0, N.we)("#ToolTip_CopyLinkToClipboard") },
                  M.createElement("img", {
                    className: j().ClipboardIcon,
                    src: F.A,
                  }),
                ),
              ),
          ),
          M.createElement("div", { ref: s, className: j().ClipboardText }, a),
        );
      };
      class J extends M.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
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
            ? M.createElement(u.o0, {
                strTitle: (0, N.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, N.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, N.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, l.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? M.createElement(Q, {
                  eventLink: e,
                  appid: a,
                  emoticonStore: s,
                  partnerEventStore: i,
                  closeModal: n,
                })
              : M.createElement(
                  u.o0,
                  {
                    strDescription: "",
                    strTitle: (0, N.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  M.createElement(R, {
                    eventLink: e,
                    sharePageUrls: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, n.Cg)([c.oI], J.prototype, "ShareOnSteamActivityFeed", null);
      const R = (e) => {
        const {
            eventLink: t,
            sharePageUrls: a,
            fnShareOnSteamActivityFeed: n,
          } = e,
          i = (0, L.Y2)(),
          [l, c] = (0, M.useState)((0, s.sf)(L.TS.LANGUAGE)),
          u = (0, M.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, s.Lg)(l)), e.href;
          }, [l, t]);
        return M.createElement(
          "div",
          {
            className: (0, o.A)(
              r().FlexColumnContainer,
              j().share_controls_ctn,
            ),
          },
          !i &&
            M.createElement(
              M.Fragment,
              null,
              M.createElement(
                "div",
                { className: j().ShareLanguagePicker },
                M.createElement(
                  Y.JU,
                  { className: j().LanguageLabel },
                  (0, N.we)("#EventDisplay_Share_LanguageLabel"),
                ),
                M.createElement(
                  "div",
                  null,
                  M.createElement(m.Ng, {
                    selectedLang: l,
                    fnOnLanguageChanged: c,
                  }),
                ),
              ),
              M.createElement(
                "div",
                {
                  className: (0, o.A)(
                    r().FlexRowContainer,
                    j().ShareButtonContainer,
                  ),
                  style: { flexWrap: "wrap" },
                },
                M.createElement(
                  E.he,
                  { toolTipContent: (0, N.we)("#EventDisplay_Share_OnSteam") },
                  M.createElement(
                    "div",
                    {
                      onClick: n,
                      className: (0, o.A)(
                        r().Button,
                        j().ShareBtn,
                        j().ShareSteamBtn,
                      ),
                    },
                    M.createElement("img", {
                      className: j().SteamIcon,
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
                  E.he,
                  {
                    toolTipContent: (0, N.we)("#EventDisplay_Share_OnFaceBook"),
                  },
                  M.createElement(
                    w.uU,
                    { href: a.strFacebookUrl, className: j().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(r().Button),
                      src: A.A,
                    }),
                  ),
                ),
                M.createElement(
                  E.he,
                  {
                    toolTipContent: (0, N.we)("#EventDisplay_Share_OnTwitter"),
                  },
                  M.createElement(
                    w.uU,
                    { href: a.strTwitterUrl, className: j().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(r().Button),
                      src: T.A,
                    }),
                  ),
                ),
                M.createElement(
                  E.he,
                  { toolTipContent: (0, N.we)("#EventDisplay_Share_OnReddit") },
                  M.createElement(
                    w.uU,
                    { href: a.strRedditUrl, className: j().ShareBtn },
                    M.createElement("img", {
                      className: (0, o.A)(r().Button),
                      src: D.A,
                    }),
                  ),
                ),
              ),
              M.createElement("div", { className: r().Divider }),
            ),
          M.createElement(Z, { eventLink: u }),
        );
      };
    },
    96715: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        a.p +
        "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
