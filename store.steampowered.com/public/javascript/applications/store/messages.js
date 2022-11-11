/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    76197: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_1N2Wd",
        GameImage: "image_GameImage_2imw0",
        Legal: "image_Legal_7NnVB",
        MessageFooter: "image_MessageFooter_2h7_p",
        ButtonAndPriceCtn: "image_ButtonAndPriceCtn_39vPn",
        NoButton: "image_NoButton_2FsuD",
        Btn: "image_Btn_2utr-",
        MessagePriceCtn: "image_MessagePriceCtn_uhCE2",
        Price: "image_Price_3TzbJ",
        NoPrice: "image_NoPrice_1oXJH",
        PriceReal: "image_PriceReal_1IET-",
        PriceRealShort: "image_PriceRealShort_2fteu",
        PriceRegular: "image_PriceRegular_2Mki7",
        Strike: "image_Strike_2hlJo",
        ShareLinks: "image_ShareLinks_2_buK",
        All: "image_All_2A3DH",
        TextTop: "image_TextTop_76FjT",
        TextBottom: "image_TextBottom_otBhX",
        ButtonContainer: "image_ButtonContainer_2sWLp",
      };
    },
    74992: (e) => {
      e.exports = {
        MarketingMessagePage: "messagelist_MarketingMessagePage_1HVoK",
        MessageListPage: "messagelist_MessageListPage_1N7O3",
        MessageListScroll: "messagelist_MessageListScroll_2RW7G",
        CarouselBar: "messagelist_CarouselBar_O7VJK",
        Content: "messagelist_Content_1qtg3",
        LeftArrow: "messagelist_LeftArrow_3ZyZU",
        RightArrow: "messagelist_RightArrow_2WuPu",
        Active: "messagelist_Active_cwA5j",
        Spacer: "messagelist_Spacer_COvXC",
        PipContainer: "messagelist_PipContainer_3ASpk",
        Pips: "messagelist_Pips_1rpuG",
        Pip: "messagelist_Pip_ZQrtM",
        MessageListContainer: "messagelist_MessageListContainer_33cf4",
        Loading: "messagelist_Loading_1xSKZ",
        MessageWrapper: "messagelist_MessageWrapper_152h7",
        Enter: "messagelist_Enter_DZICE",
        EnterActive: "messagelist_EnterActive_RU-xm",
        EnterDone: "messagelist_EnterDone_3AP2Y",
        Exit: "messagelist_Exit_2xmDI",
        ExitActive: "messagelist_ExitActive_32DFH",
        ExitDone: "messagelist_ExitDone_3cFXR",
      };
    },
    57649: (e, t, s) => {
      "use strict";
      s.d(t, { P: () => n, h: () => r });
      var a = s(67294);
      function n(e) {
        const { title: t, bodyClassName: s, children: n } = e;
        return (
          a.useEffect(() => {
            const e = document.title;
            return (
              (document.title = t),
              () => {
                document.title = e;
              }
            );
          }, [t]),
          r(s),
          n
        );
      }
      function r(e) {
        a.useEffect(() => {
          if (!e) return;
          const t = [];
          for (const s of e.split(/ /))
            document.body.classList.contains(s) || t.push(s);
          return (
            document.body.classList.add(...t),
            () => document.body.classList.remove(...t)
          );
        }, [e]);
      }
    },
    70695: (e, t, s) => {
      "use strict";
      s.d(t, { T: () => n });
      var a = s(90666);
      function n() {
        return (0, a.kQ)("store_user_config", "application_config");
      }
    },
    47412: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MarketingMessageRoutes: () => re, default: () => ie });
      var a = s(67294),
        n = s(9355),
        r = s(78587),
        i = s(65924),
        o = s(70655),
        l = s(88767),
        c = s(26149),
        m = s(58114),
        g = (s(46321), s(39722)),
        u = s(90666),
        _ = s(32367),
        d = s(14146),
        M = (s(990), s(77520));
      class E {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        static Init(e) {
          E.sm_Instance = new E(e);
        }
        static Get() {
          return (
            (0, M.X)(E.sm_Instance, "MarketingMessages store not initialized"),
            E.sm_Instance
          );
        }
        GetMessageList(e, t = !1) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (!u.L7.logged_in) return [];
            const s = m.gA.Init(g.Pe);
            s.Body().set_country_code(u.De.COUNTRY),
              s.Body().set_elanguage((0, c.jM)(u.De.LANGUAGE)),
              s.Body().set_client_package_version(e.nClientPackageVersion),
              s.Body().set_operating_system(e.eOSType),
              t && s.Body().set_include_seen_messages(!0),
              (0, _.pA)(s),
              (0, _.De)(s, E.sm_DefaultDataRequest);
            const a = yield g.Bn.GetMarketingMessagesForUser(
              this.m_SteamInterface.GetServiceTransport(),
              s
            );
            if (1 != a.GetEResult())
              throw `Error loading marketing messages: ${a.GetEResult()}`;
            if (t)
              for (const e of a.Body().messages())
                e.already_seen() &&
                  this.m_setMessagesSeen.add(e.message().gid());
            return a.Body().messages();
          });
        }
        GetSingleMessage(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const t = m.gA.Init(g.F5);
            t.Body().set_gid(e),
              (0, _.pA)(t),
              (0, _.De)(t, E.sm_DefaultDataRequest);
            const s = yield g.Bn.GetDisplayMarketingMessage(
              this.m_SteamInterface.GetAnonymousServiceTransport(),
              t
            );
            if (1 != s.GetEResult())
              throw `Error loading marketing messages: ${s.GetEResult()}`;
            return s.Body().message();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = m.gA.Init(g.UD);
          t.Body().set_gid(e),
            g.Bn.MarkMessageSeen(
              this.m_SteamInterface.GetServiceTransport(),
              t
            ),
            this.m_setMessagesSeen.add(e);
        }
        BIsMessageSeen(e) {
          return this.m_setMessagesSeen.has(e);
        }
      }
      E.sm_DefaultDataRequest = { include_release: !0 };
      class p {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new d.Z(
                e.associated_item(),
                E.sm_DefaultDataRequest
              ));
          try {
            const t = JSON.parse(e.template_vars_json());
            t.use_additional_fields &&
              (t.use_additional_fields = "true" === t.use_additional_fields),
              t.use_custom_legal_text &&
                (t.use_custom_legal_text = "true" === t.use_custom_legal_text),
              t.last_asset_mtime &&
                (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
              (t.ll_image = t.ll_image || {}),
              (this.m_templateVars = t);
          } catch (e) {}
        }
        get id() {
          return this.m_message.gid();
        }
        GetTemplateType() {
          return this.m_message.template_type();
        }
        GetTemplateVars() {
          return this.m_templateVars;
        }
        GetTemplateImage() {
          let e = this.m_templateVars.ll_image[u.De.LANGUAGE];
          return (
            e || (e = this.m_templateVars.ll_image.english),
            null == e ? void 0 : e.path
          );
        }
        GetLegalHTML() {
          return this.GetTemplateVars().use_custom_legal_text
            ? this.GetTemplateVars().custom_legal_text
            : `© ${new Date().getFullYear()} Valve Corporation and ${
                this.GetTemplateVars().partner
              }. <br/>All trademarks are property of their respective owners in the US and other countries.`;
        }
        get associated_item() {
          return this.m_item;
        }
      }
      function f(e, t, s) {
        const { bIncludeSeenMessages: n } = t,
          r = (0, o._T)(t, ["bIncludeSeenMessages"]),
          {
            data: i,
            isLoading: c,
            isError: m,
          } = (0, l.useQuery)(
            ["MarketingMessages", "List", r, { bIncludeSeenMessages: !!n }],
            () => e.GetMessageList(r, n),
            s
          ),
          g = a.useMemo(
            () => (null == i ? void 0 : i.map((e) => new p(e.message()))),
            [i]
          );
        return { rgMessages: c ? null : g, isError: m };
      }
      var h = s(48341),
        v = s(41311),
        S = s(26682);
      const k = a.createContext({ setLegalText: void 0 });
      function P(e) {
        const [t, s] = a.useState(),
          n = (0, S.U)("BrowserView.RegisterForMessageFromParent"),
          r = a.useMemo(() => ({ setLegalText: n ? s : void 0 }), [n, s]);
        return a.createElement(
          k.Provider,
          { value: r },
          n && a.createElement(C, { strLegalText: t }),
          e.children
        );
      }
      function C(e) {
        const { strLegalText: t } = e,
          s = a.useRef();
        return (
          a.useEffect(() => {
            (s.current = t),
              SteamClient.BrowserView.PostMessageToParent(
                "MarketingMessageLegal",
                t || ""
              );
          }, [t]),
          a.useEffect(
            () =>
              SteamClient.BrowserView.RegisterForMessageFromParent((e) => {
                "MarketingMessageDialogReady" == e &&
                  SteamClient.BrowserView.PostMessageToParent(
                    "MarketingMessageLegal",
                    s.current
                  );
              }).unregister,
            []
          ),
          null
        );
      }
      var L = s(35921),
        x = s(32548),
        A = s(44741);
      function T(e) {
        var t;
        const { path: s, message: n } = e,
          r = (0, o._T)(e, ["path", "message"]);
        return a.createElement(
          "img",
          Object.assign({}, r, {
            src: `${u.De.MEDIA_CDN_URL}steam/marketing/${n.id}/${s}?t=${
              null === (t = n.GetTemplateVars()) || void 0 === t
                ? void 0
                : t.last_asset_mtime
            }`,
          })
        );
      }
      s(72258);
      var b = s(53622),
        y = s(76197),
        w = s(7573);
      const B = a.createContext({ show_button: !1 });
      function G(e) {
        const [t, s] = a.useState(),
          n = (0, r.TH)(),
          i = a.useMemo(() => {
            const e = new URLSearchParams(n.search);
            return {
              show_button: e.has("exp_show_button")
                ? "1" === e.get("exp_show_button")
                : void 0,
            };
          }, [n.search]);
        return (
          a.useLayoutEffect(() => {
            const e = (0, u.kQ)(
              "marketingmessage_config",
              "application_config"
            );
            let t;
            (t =
              e && void 0 !== e.button_cohort
                ? 1 === e.button_cohort
                : 1 == Math.floor(2 * Math.random())),
              void 0 !== i.show_button && (t = i.show_button),
              s({ show_button: t });
          }, [i]),
          t ? a.createElement(B.Provider, { value: t }, e.children, " ") : null
        );
      }
      function N() {
        return a.useContext(B).show_button;
      }
      const R = a.createContext(null);
      function D() {
        return a.useContext(R);
      }
      function I(e) {
        const { message: t, active: s } = e,
          n = N();
        return a.createElement(
          R.Provider,
          { value: t },
          a.createElement(
            i.ZP,
            { submethod: n ? "image_with_button" : "image_no_button" },
            a.createElement(
              "div",
              { className: y.All },
              a.createElement(
                "div",
                { className: y.MessageContent },
                a.createElement(O, null),
                a.createElement(F, null),
                a.createElement("div", { style: { clear: "both" } })
              )
            )
          )
        );
      }
      function V(e, t) {
        const s = e.GetTemplateVars();
        let n = (0, i.YR)(s.linkurl, t);
        return (
          n.startsWith("steam://") || (n = `steam://openurl/${n}`),
          a.useCallback(
            (e) => {
              (0, b.RA)(e).location.href = n;
            },
            [n]
          )
        );
      }
      function O(e) {
        const t = D(),
          s = V(t, "image"),
          n = t.GetTemplateImage();
        return a.createElement(
          L.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: y.GameImage,
            onActivate: s,
          },
          n && a.createElement(T, { message: t, path: n })
        );
      }
      function F(e) {
        const t = D(),
          s = V(t, "button"),
          n = N(),
          r =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return a.createElement(
          "div",
          { className: (0, w.Z)(y.MessageFooter, !n && y.NoButton) },
          a.createElement(
            "div",
            { className: y.ButtonAndPriceCtn },
            n &&
              a.createElement(
                L.s,
                {
                  focusable: !0,
                  noFocusRing: !0,
                  className: y.Btn,
                  onActivate: s,
                },
                r
              ),
            a.createElement(x.S, null, a.createElement(Z, null))
          ),
          a.createElement($, null)
        );
      }
      function Z() {
        const e = D().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          e.GetBestPurchaseOption();
          return a.createElement(
            "div",
            { className: y.MessagePriceCtn },
            a.createElement(A.nk, { storeItem: e })
          );
        }
        return a.createElement("div", { className: y.NoPrice });
      }
      function $(e) {
        const t = D();
        return !!a.useContext(k).setLegalText
          ? null
          : a.createElement("div", {
              className: y.Legal,
              dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
            });
      }
      function W(e) {
        const { message: t } = e,
          s = !1 !== e.active,
          n = a.useContext(k).setLegalText || function (e) {};
        return (
          a.useEffect(() => {
            s && n(t.GetLegalHTML());
          }, [s, t, n]),
          "image" === t.GetTemplateType()
            ? a.createElement(I, { message: t, active: s })
            : null
        );
      }
      function U(e) {
        const t = new URLSearchParams();
        return (
          e.bIncludeSeenMessages && t.append("include_seen", "1"),
          e.nClientPackageVersion &&
            t.append(
              "client_package_version",
              e.nClientPackageVersion.toString()
            ),
          e.eOSType && t.append("os_type", e.eOSType.toString()),
          t.toString()
        );
      }
      var H = s(74992),
        X = s(95598),
        j = s(37723),
        J = s(57649),
        K = s(13596);
      function q(e) {
        const { MarketingMessagesStore: t } = e,
          s = (function () {
            const e = (0, r.TH)();
            return a.useMemo(() => {
              const t = new URLSearchParams(e.search);
              return {
                bIncludeSeenMessages: !!t.get("include_seen"),
                nClientPackageVersion: parseInt(
                  t.get("client_package_version") || "0"
                ),
                eOSType: parseInt(t.get("os_type") || "0"),
              };
            }, [e.search]);
          })(),
          { rgMessages: n, isError: i } = f(t, s),
          [o, l] = a.useState(!1),
          [c, m] = a.useState(0);
        (0, J.h)(H.MarketingMessagePage);
        const g = (0, r.k6)();
        if (
          (a.useEffect(() => {
            !n ||
              n.length ||
              i ||
              (s.bIncludeSeenMessages
                ? l(!0)
                : g.replace(
                    Object.assign(Object.assign({}, g.location), {
                      search: U(
                        Object.assign(Object.assign({}, s), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [n, s, g, i]),
          i)
        )
          return a.createElement(
            te,
            null,
            (0, v.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (o)
          return a.createElement(
            te,
            null,
            (0, v.Xx)("#MarketingMessages_NoneAvailable")
          );
        const u = s.bIncludeSeenMessages
          ? n
          : null == n
          ? void 0
          : n.slice(0, 8);
        return a.createElement(
          "div",
          { className: H.MessageListPage },
          a.createElement(
            "div",
            { className: H.MessageListScroll },
            a.createElement(Q, {
              MarketingMessagesStore: t,
              rgMessages: u,
              iActiveMessage: c,
            })
          ),
          a.createElement(Y, {
            cMessages: null == u ? void 0 : u.length,
            iMessage: c,
            setMessage: m,
          })
        );
      }
      function Q(e) {
        const {
          MarketingMessagesStore: t,
          rgMessages: s,
          iActiveMessage: n,
        } = e;
        return s
          ? a.createElement(
              "div",
              { className: H.MessageListContainer },
              null == s
                ? void 0
                : s.map((e, s) =>
                    a.createElement(se, {
                      key: e.id,
                      message: e,
                      MarketingMessagesStore: t,
                      active: s == n,
                      next: s == n + 1 || s == n - 1,
                    })
                  )
            )
          : a.createElement(
              "div",
              { className: (0, w.Z)(H.MessageListContainer, H.Loading) },
              a.createElement(K.V, { size: "xxlarge", msDelayAppear: 500 })
            );
      }
      function Y(e) {
        const { cMessages: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s - 1), [n, s]),
          i = a.useCallback(() => n(s + 1), [n, s]),
          o = [];
        for (let e = 0; e < t; e++)
          o.push(
            a.createElement(z, {
              key: e,
              active: e == s,
              iMessage: e,
              setMessage: n,
            })
          );
        const l = s > 0 ? r : void 0,
          c = s < t - 1 ? i : void 0;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("div", { className: H.CarouselSpacer }),
          a.createElement(
            "div",
            { className: H.CarouselBar },
            a.createElement(
              "div",
              { className: H.Content },
              a.createElement(
                "div",
                { className: (0, w.Z)(H.LeftArrow, l && H.Active), onClick: l },
                a.createElement(X.BKy, { angle: 180 })
              ),
              a.createElement("div", { className: H.Spacer }),
              a.createElement(
                "div",
                { className: H.PipContainer },
                a.createElement("div", { className: H.Pips }, o)
              ),
              a.createElement("div", { className: H.Spacer }),
              a.createElement(
                "div",
                { className: (0, w.Z)(H.LeftArrow, c && H.Active), onClick: c },
                a.createElement(X.BKy, { angle: 0 })
              )
            )
          )
        );
      }
      function z(e) {
        const { active: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s), [n, s]);
        return a.createElement("div", {
          className: (0, w.Z)(H.Pip, t && H.Active),
          onClick: r,
        });
      }
      function ee(e) {
        const { MarketingMessagesStore: t } = e,
          s = (0, r.$B)(),
          { message: n, isError: i } = (function (e, t) {
            const { data: s, isError: n } = (0, l.useQuery)(
              ["MarketingMessages", "Single", t],
              () => e.GetSingleMessage(t),
              { enabled: !!t }
            );
            return { message: a.useMemo(() => s && new p(s), [s]), isError: n };
          })(t, s.params.messageid);
        return (
          (0, J.h)(H.MarketingMessagePage),
          i
            ? a.createElement(
                te,
                null,
                (0, v.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            : s.params.messageid
            ? n
              ? a.createElement(W, { message: n })
              : null
            : a.createElement(
                te,
                null,
                (0, v.Xx)("#MarketingMessages_NoneAvailable")
              )
        );
      }
      function te(e) {
        return a.createElement(
          h.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          a.createElement(h.h4, null, (0, v.Xx)("#Error_Generic"), " "),
          a.createElement(h.uT, null, e.children)
        );
      }
      function se(e) {
        const { message: t, MarketingMessagesStore: s, active: n, next: r } = e,
          i = a.useRef(),
          o = a.useRef(n || r);
        if (
          ((function (e, t) {
            a.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(s, n ? t : null),
          (n || r) && (o.current = !0),
          !o.current)
        )
          return null;
        let l = {
          enter: H.Enter,
          enterActive: H.EnterActive,
          enterDone: H.EnterDone,
          exit: H.Exit,
          exitActive: H.ExitActive,
          exitDone: H.ExitDone,
        };
        return a.createElement(
          j.Z,
          {
            in: n,
            nodeRef: i,
            classNames: l,
            timeout: 300,
            mountOnEnter: !r,
            unmountOnExit: !r,
          },
          a.createElement(
            "div",
            { className: (0, w.Z)(H.MessageWrapper, n && H.Active), ref: i },
            a.createElement(W, { message: t, active: n })
          )
        );
      }
      var ae = s(70695),
        ne = s(65902);
      const re = {
        List: () => `${n.Z.MarketingMessages()}list/`,
        Message: (e) => `${n.Z.MarketingMessages()}${e}`,
      };
      function ie(e) {
        const t = (function () {
          const [e, t] = a.useState(null);
          return (
            a.useLayoutEffect(() => {
              e ||
                t(
                  (function () {
                    if (!oe) {
                      const e = (0, ae.T)(),
                        t = new ne.J(u.De.WEBAPI_BASE_URL, e.webapi_token);
                      oe = new E(t);
                    }
                    return oe;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? a.createElement(
              i.ZP,
              {
                domain: "store.steampowered.com",
                controller: "message",
                method: "default",
              },
              a.createElement(
                G,
                null,
                a.createElement(
                  P,
                  null,
                  a.createElement(
                    r.rs,
                    null,
                    a.createElement(
                      r.AW,
                      { path: `${re.List()}` },
                      a.createElement(q, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      { path: `${re.Message(":messageid")}` },
                      a.createElement(ee, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      null,
                      a.createElement(r.l_, { to: `${re.List()}` })
                    )
                  )
                )
              )
            )
          : null;
      }
      let oe;
    },
  },
]);
