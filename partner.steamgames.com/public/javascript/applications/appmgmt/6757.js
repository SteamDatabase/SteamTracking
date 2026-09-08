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
    36757: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => _ });
      var n = s(34629),
        M = s(7850),
        i = s(90626),
        a = s(22837),
        N = s(76217),
        o = s(95695),
        r = s.n(o),
        c = s(71420),
        l = s(52038),
        L = s(61859),
        j = s(73745),
        A = s(78327);
      var D = s(10886),
        T = s(19654),
        u = s(3209),
        w = s(9154),
        d = s(32754),
        S = s(51272),
        C = s(14256),
        x = s.n(C),
        I = s(1909),
        g = s(41735),
        y = s.n(g),
        E = s(75844),
        z = s(79821),
        h = s(37085),
        m = s(56545),
        p = s(51006),
        U = s(17720),
        k = s(76176),
        O = s(83309),
        v = s(68797),
        B = s(22797),
        b = s(69131),
        Q = s(36556),
        Y = s(72967),
        F = s(86244),
        Z = s.n(F),
        J = s(44419);
      const R = (0, E.PA)((e) => {
        const { appid: t, eventLink: s } = e,
          n = i.useRef(null),
          { data: a } = (0, J.js)(A.iA.steamid),
          [N, o] = i.useState(""),
          [c, j] = i.useState(!1),
          [D, T] = i.useState(""),
          [u, d] = i.useState(!1);
        i.useEffect(
          () => () => {
            n.current?.("ShareEventOnFriendsActivityFeed: unmounting");
          },
          [],
        );
        const S = a?.avatar_url,
          C = U.b.InitFromAccountID(A.iA.accountid),
          x = async () => {
            n.current &&
              n.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const e = y().CancelToken.source();
            (n.current = e.cancel), j(!0);
            let M = N;
            0 != M.trim().length && (M += "\n\n"), (M += s);
            const i =
              A.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              C.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (A.TS.IN_STEAMUI) {
                let s = m.w.Init(k.kVt);
                s.Body().set_appid(t), s.Body().set_status_text(M);
                let n = await k.xtC.PostStatusToFriends(
                  p.Vw.CMInterface.GetServiceTransport(),
                  s,
                );
                if (n.GetEResult() != h.R) {
                  const t =
                    (0, L.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    n.GetEResult();
                  return (
                    console.error(t, !e.token.reason),
                    void (e.token.reason || T(t))
                  );
                }
              } else {
                const s = new FormData();
                s.append("appid", "" + t),
                  s.append("status_text", M),
                  s.append("sessionid", (0, A.KC)());
                const n = await y().post(i, s, { withCredentials: !0 });
                if (200 != n.status || n?.data?.success != h.R) {
                  const t =
                    (0, L.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    n?.data?.message;
                  return console.error(t), void (e.token.reason || T(t));
                }
              }
              e.token.reason ||
                (d(!0), T((0, L.we)("#EventDisplay_Share_Success")));
            } catch (t) {
              const s = (0, v.H)(t),
                n =
                  (0, L.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  s.strErrorMsg;
              e.token.reason || T(n), console.error(n);
            }
          };
        return c
          ? (0, M.jsx)(w.o0, {
              strDescription: "",
              strTitle: (0, L.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: e.closeModal,
              bAlertDialog: !0,
              children: (0, M.jsxs)("div", {
                className: r().FlexColumnContainer,
                children: [
                  (0, M.jsx)("div", {
                    children: (0, L.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, M.jsxs)("div", {
                    className: Z().Container,
                    children: [
                      0 == D?.length
                        ? (0, M.jsx)(B.t, { position: "center" })
                        : (0, M.jsx)("div", { children: D }),
                      Boolean(u) &&
                        (0, M.jsx)("a", {
                          href:
                            A.TS.COMMUNITY_BASE_URL +
                            "profiles/" +
                            C.ConvertTo64BitString() +
                            "/home",
                          target: A.TS.IN_CLIENT ? void 0 : "_blank",
                          children: (0, L.we)(
                            "#EventDisplay_Share_OpenActivityFeed",
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            })
          : (0, M.jsx)(w.o0, {
              strDescription: "",
              strTitle: (0, L.we)("#Button_Share"),
              onCancel: e.closeModal,
              onOK: x,
              strOKButtonText: (0, L.we)("#Button_Post"),
              children: (0, M.jsxs)("div", {
                className: r().FlexColumnContainer,
                children: [
                  (0, M.jsx)("div", {
                    children: (0, L.we)(
                      "#EventDisplay_Share_OnMyStatus_Details",
                    ),
                  }),
                  (0, M.jsxs)("div", {
                    className: (0, l.A)(Z().Container, r().FlexColumnContainer),
                    children: [
                      (0, M.jsxs)("div", {
                        children: [
                          (0, M.jsx)("img", {
                            className: Z().SmallAvatar,
                            src: S,
                            "data-miniprofile": "s" + A.iA.steamid,
                          }),
                          (0, M.jsx)("div", {
                            className: (0, l.A)(r().FlexColumnContainer),
                            children: (0, M.jsx)(O.I, {
                              strPlaceholder: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus_Placeholder",
                              ),
                              fnGetCurText: () => N,
                              fnOnTextChange: (e) => o(e.currentTarget.value),
                              fnSetText: o,
                              emoticonStore: e.emoticonStore,
                              bSupportHTMLImport: !1,
                              showFormatHelp: "UserStatusPublished",
                              limitBBCode: z.iH,
                              classNameForTextArea: Z().ShareDescription,
                              bEmbeddedInDialog: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, M.jsx)("div", {
                        className: Z().ShareLink,
                        children: (0, M.jsx)(Y.Rh, {
                          linkWidgets: (0, Q.rx)(),
                          children: (0, M.jsx)(b.Zn, {
                            text: s,
                            partnerEventStore: e.partnerEventStore,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
      });
      var G = s(16676),
        H = s(96715);
      const P = (e) => {
        const t = i.createRef(),
          [s, n] = i.useState(""),
          a = i.createRef(),
          o = () => {
            const e = t.current?.ownerDocument.defaultView;
            t.current &&
              e &&
              e.navigator.clipboard
                .writeText(t.current.value)
                .then((e) => {
                  n((0, L.we)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((e) => {
                  n((0, L.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", e);
                });
          };
        return (0, M.jsxs)("div", {
          children: [
            (0, M.jsxs)("div", {
              className: (0, l.A)(r().FlexRowContainer, x().linkField),
              onClick: o,
              children: [
                (0, M.jsx)("span", {
                  className: x().LinkInputLabel,
                  children: (0, L.we)(
                    e.labelOverride
                      ? e.labelOverride
                      : "#EventDisplay_Share_Link",
                  ),
                }),
                (0, M.jsx)("input", {
                  className: x().LinkInput,
                  ref: t,
                  value: e.eventLink,
                  readOnly: !0,
                }),
                document.queryCommandSupported("copy") &&
                  (0, M.jsx)(N.Z, {
                    className: (0, l.A)(r().Button, r().Icon, x().LinkButton),
                    onActivate: o,
                    children: (0, M.jsx)(d.Gq, {
                      toolTipContent: (0, L.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, M.jsx)("img", {
                        className: x().ClipboardIcon,
                        src: H.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, M.jsx)("div", {
              ref: a,
              className: x().ClipboardText,
              children: s,
            }),
          ],
        });
      };
      class _ extends i.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
        ShareOnSteamActivityFeed() {
          A.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : A.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            sharePageUrls: t,
            appid: s,
            closeModal: n,
            emoticonStore: i,
            partnerEventStore: a,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, M.jsx)(w.o0, {
                strTitle: (0, L.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, L.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, L.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, c.l)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, M.jsx)(R, {
                  eventLink: e,
                  appid: s,
                  emoticonStore: i,
                  partnerEventStore: a,
                  closeModal: n,
                })
              : (0, M.jsx)(w.o0, {
                  strDescription: "",
                  strTitle: (0, L.we)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, M.jsx)(V, {
                    eventLink: e,
                    sharePageUrls: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, n.Cg)([j.oI], _.prototype, "ShareOnSteamActivityFeed", null);
      const V = (e) => {
        const {
            eventLink: t,
            sharePageUrls: s,
            fnShareOnSteamActivityFeed: n,
          } = e,
          o = (0, A.Y2)(),
          [c, j] = (0, i.useState)((0, a.sfN)(A.TS.LANGUAGE)),
          w = (0, i.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, a.LgB)(c)), e.href;
          }, [c, t]);
        return (0, M.jsxs)("div", {
          className: (0, l.A)(r().FlexColumnContainer, x().share_controls_ctn),
          children: [
            !o &&
              (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsxs)("div", {
                    className: x().ShareLanguagePicker,
                    children: [
                      (0, M.jsx)(G.JU, {
                        className: x().LanguageLabel,
                        children: (0, L.we)(
                          "#EventDisplay_Share_LanguageLabel",
                        ),
                      }),
                      (0, M.jsx)("div", {
                        children: (0, M.jsx)(I.Ng, {
                          selectedLang: c,
                          fnOnLanguageChanged: j,
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsxs)("div", {
                    className: (0, l.A)(
                      r().FlexRowContainer,
                      x().ShareButtonContainer,
                    ),
                    style: { flexWrap: "wrap" },
                    children: [
                      (0, M.jsx)(d.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnSteam",
                        ),
                        children: (0, M.jsxs)(N.Z, {
                          onClick: n,
                          className: (0, l.A)(
                            r().Button,
                            x().ShareBtn,
                            x().ShareSteamBtn,
                          ),
                          children: [
                            (0, M.jsx)("img", {
                              className: x().SteamIcon,
                              src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                            }),
                            (0, M.jsx)("span", {
                              style: { whiteSpace: "nowrap" },
                              children: (0, L.we)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)(d.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strFacebookUrl,
                          className: x().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(r().Button),
                            src: D.A,
                          }),
                        }),
                      }),
                      (0, M.jsx)(d.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strTwitterUrl,
                          className: x().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(r().Button),
                            src: u.A,
                          }),
                        }),
                      }),
                      (0, M.jsx)(d.he, {
                        toolTipContent: (0, L.we)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, M.jsx)(S.uU, {
                          href: s.strRedditUrl,
                          className: x().ShareBtn,
                          children: (0, M.jsx)("img", {
                            className: (0, l.A)(r().Button),
                            src: T.A,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsx)("div", { className: r().Divider }),
                ],
              }),
            (0, M.jsx)(P, { eventLink: w }),
          ],
        });
      };
    },
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        s.p +
        "images/applications/appmgmt/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
