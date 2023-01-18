/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
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
    43044: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_rohJ-",
        IsBlur: "image_IsBlur_2lGtR",
        GameImage: "image_GameImage_2It5b",
        Legal: "image_Legal_zzC_W",
        MessageFooter: "image_MessageFooter_20RJ2",
        ButtonAndPriceCtn: "image_ButtonAndPriceCtn_2FwUG",
        NoButton: "image_NoButton_1FbSd",
        Btn: "image_Btn_3YohC",
        MessagePriceCtn: "image_MessagePriceCtn_ddVk7",
        Price: "image_Price_KtsI7",
        NoPrice: "image_NoPrice_3gtjP",
        PriceReal: "image_PriceReal_zlxx_",
        PriceRealShort: "image_PriceRealShort_1XB_w",
        PriceRegular: "image_PriceRegular_7m4i8",
        Strike: "image_Strike_3fFJl",
        ShareLinks: "image_ShareLinks_2FhhQ",
        All: "image_All_1WpMe",
        TextTop: "image_TextTop_3cnZM",
        TextBottom: "image_TextBottom_2pJeu",
        ButtonContainer: "image_ButtonContainer_3CVNg",
      };
    },
    23955: (e, t, s) => {
      "use strict";
      s.d(t, { Ke: () => M, N8: () => _, Q2: () => p });
      var a = s(70655),
        n = s(88767),
        r = s(67294),
        i = s(26149),
        l = s(58114),
        o = (s(46321), s(39722)),
        c = s(90666),
        m = s(32367),
        g = s(14146),
        u = (s(990), s(77520));
      class _ {
        constructor(e) {
          (this.m_setMessagesSeen = new Set()), (this.m_SteamInterface = e);
        }
        static Init(e) {
          _.sm_Instance = new _(e);
        }
        SetSteamInterfacePromotions(e) {
          this.m_SteamInterfacePromotions = e;
        }
        static Get() {
          return (
            (0, u.X)(_.sm_Instance, "MarketingMessages store not initialized"),
            _.sm_Instance
          );
        }
        GetMessageList(e, t = !1) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in) return [];
            const s = l.gA.Init(o.Pe);
            s.Body().set_country_code(c.De.COUNTRY),
              s.Body().set_elanguage((0, i.jM)(c.De.LANGUAGE)),
              s.Body().set_client_package_version(e.nClientPackageVersion),
              s.Body().set_operating_system(e.eOSType),
              t && s.Body().set_include_seen_messages(!0),
              (0, m.pA)(s),
              (0, m.De)(s, _.sm_DefaultDataRequest);
            const a = yield o.Bn.GetMarketingMessagesForUser(
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
        GetSingleMessage(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const s = l.gA.Init(o.F5);
            let a;
            if (
              (s.Body().set_gid(e),
              (0, m.pA)(s),
              (0, m.De)(s, _.sm_DefaultDataRequest),
              (a = t
                ? yield o.Bn.GetDisplayMarketingMessageAdmin(
                    this.m_SteamInterfacePromotions.GetServiceTransport(),
                    s
                  )
                : yield o.Bn.GetDisplayMarketingMessage(
                    this.m_SteamInterface.GetAnonymousServiceTransport(),
                    s
                  )),
              1 != a.GetEResult())
            )
              throw `Error loading marketing messages: ${a.GetEResult()}`;
            return a.Body().message();
          });
        }
        MarkMessageSeen(e) {
          if (this.m_setMessagesSeen.has(e)) return;
          const t = l.gA.Init(o.UD);
          t.Body().set_gid(e),
            o.Bn.MarkMessageSeen(
              this.m_SteamInterface.GetServiceTransport(),
              t
            ),
            this.m_setMessagesSeen.add(e);
        }
        BIsMessageSeen(e) {
          return this.m_setMessagesSeen.has(e);
        }
      }
      _.sm_DefaultDataRequest = { include_release: !0 };
      class d {
        constructor(e) {
          (this.m_message = e),
            e.associated_item() &&
              (this.m_item = new g.Z(
                e.associated_item(),
                _.sm_DefaultDataRequest
              )),
            (this.m_templateVars = (function (e) {
              try {
                const t = JSON.parse(e);
                return (
                  t.use_additional_fields &&
                    (t.use_additional_fields =
                      "true" === t.use_additional_fields),
                  t.use_custom_legal_text &&
                    (t.use_custom_legal_text =
                      "true" === t.use_custom_legal_text),
                  t.last_asset_mtime &&
                    (t.last_asset_mtime = parseInt(t.last_asset_mtime)),
                  (t.ll_image = t.ll_image || {}),
                  t
                );
              } catch (e) {
                "dev" == c.De.WEB_UNIVERSE &&
                  console.error(
                    "MarketingMessageReadAndParseTemplateVars: Failed to prase",
                    e
                  );
              }
              return null;
            })(e.template_vars_json()));
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
          let e = this.m_templateVars.ll_image[c.De.LANGUAGE];
          return (
            e || (e = this.m_templateVars.ll_image.english),
            null == e ? void 0 : e.path
          );
        }
        GetLegalHTML() {
          return this.GetTemplateVars().use_custom_legal_text
            ? this.GetTemplateVars().custom_legal_text
            : ((e = this.GetTemplateVars().partner),
              `© ${new Date().getFullYear()} Valve Corporation${
                e ? " and " + e : ""
              }. <br/>All trademarks are property of their respective owners in the US and other countries.`);
          var e;
        }
        get associated_item() {
          return this.m_item;
        }
      }
      function M(e, t, s) {
        const { bIncludeSeenMessages: i } = t,
          l = (0, a._T)(t, ["bIncludeSeenMessages"]),
          {
            data: o,
            isLoading: c,
            isError: m,
          } = (0, n.useQuery)(
            ["MarketingMessages", "List", l, { bIncludeSeenMessages: !!i }],
            () => e.GetMessageList(l, i),
            s
          ),
          g = r.useMemo(
            () => (null == o ? void 0 : o.map((e) => new d(e.message()))),
            [o]
          );
        return { rgMessages: c ? null : g, isError: m };
      }
      function p(e, t, s) {
        const { data: a, isError: i } = (0, n.useQuery)(
          ["MarketingMessages", s ? "SinglePreivew" : "Single", t],
          () => e.GetSingleMessage(t, s),
          { enabled: !!t }
        );
        return { message: r.useMemo(() => a && new d(a), [a]), isError: i };
      }
    },
    29866: (e, t, s) => {
      "use strict";
      s.d(t, { KY: () => i, Ks: () => o, li: () => l });
      var a = s(67294),
        n = s(26682);
      const r = a.createContext({ setLegalText: void 0 });
      function i() {
        return !!a.useContext(r).setLegalText;
      }
      function l() {
        return a.useContext(r).setLegalText || function (e) {};
      }
      function o(e) {
        const [t, s] = a.useState(),
          i = (0, n.U)("BrowserView.RegisterForMessageFromParent"),
          l = a.useMemo(() => ({ setLegalText: i ? s : void 0 }), [i, s]);
        return a.createElement(
          r.Provider,
          { value: l },
          i && a.createElement(c, { strLegalText: t }),
          e.children
        );
      }
      function c(e) {
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
    71198: (e, t, s) => {
      "use strict";
      s.d(t, { v: () => P, U: () => k });
      var a = s(67294),
        n = (s(23955), s(29866)),
        r = s(90666),
        i = s(35921),
        l = s(32548),
        o = s(44741),
        c = s(65924),
        m = (s(72258), s(53622)),
        g = s(43044),
        u = s(7573),
        _ = s(70655);
      function d(e) {
        var t;
        const { path: s, message: n } = e,
          i = (0, _._T)(e, ["path", "message"]);
        return a.createElement(
          "img",
          Object.assign({}, i, {
            src: `${r.De.MEDIA_CDN_URL}steam/marketing/${n.id}/${s}?t=${
              null === (t = n.GetTemplateVars()) || void 0 === t
                ? void 0
                : t.last_asset_mtime
            }`,
          })
        );
      }
      function M(e) {
        const { active: t } = e;
        return a.createElement(
          "div",
          { className: g.All },
          a.createElement(
            "div",
            { className: g.MessageContent },
            a.createElement(E, { isBackgroundBlur: !0 }),
            a.createElement(E, null),
            a.createElement(f, null),
            a.createElement("div", { style: { clear: "both" } })
          )
        );
      }
      function p(e, t) {
        const s = e.GetTemplateVars();
        let n = (0, c.YR)(s.linkurl, t);
        return (
          n.startsWith("steam://") || (n = `steam://openurl/${n}`),
          a.useCallback(
            (e) => {
              (0, m.RA)(e).location.href = n;
            },
            [n]
          )
        );
      }
      function E(e) {
        const t = k(),
          s = p(t, "image"),
          n = t.GetTemplateImage();
        return a.createElement(
          i.s,
          {
            focusable: !0,
            noFocusRing: !0,
            className: (0, u.Z)(g.GameImage, e.isBackgroundBlur && g.IsBlur),
            onActivate: s,
          },
          n && a.createElement(d, { message: t, path: n })
        );
      }
      function f(e) {
        const t = k(),
          s = p(t, "button"),
          n =
            t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return a.createElement(
          "div",
          { className: (0, u.Z)(g.MessageFooter, !1) },
          a.createElement(
            "div",
            { className: g.ButtonAndPriceCtn },
            a.createElement(
              i.s,
              {
                focusable: !0,
                noFocusRing: !0,
                className: g.Btn,
                onActivate: s,
              },
              n
            ),
            a.createElement(l.SV, null, a.createElement(v, null))
          ),
          a.createElement(S, null)
        );
      }
      function v() {
        const e = k().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          e.GetBestPurchaseOption();
          return a.createElement(
            "div",
            { className: g.MessagePriceCtn },
            a.createElement(o.nk, { storeItem: e })
          );
        }
        return a.createElement("div", { className: g.NoPrice });
      }
      function S(e) {
        const t = k();
        return (0, n.KY)()
          ? null
          : a.createElement("div", {
              className: g.Legal,
              dangerouslySetInnerHTML: { __html: t.GetLegalHTML() },
            });
      }
      const h = a.createContext(null);
      function k() {
        return a.useContext(h);
      }
      function P(e) {
        const { message: t } = e,
          s = !1 !== e.active,
          r = (0, n.li)();
        return (
          a.useEffect(() => {
            s && r(t.GetLegalHTML());
          }, [s, t, r]),
          a.createElement(
            h.Provider,
            { value: t },
            a.createElement(
              a.Suspense,
              { fallback: null },
              a.createElement(C, { message: t, active: s })
            )
          )
        );
      }
      const A = a.lazy(() => s.e(938).then(s.bind(s, 74368)));
      function C(e) {
        const { message: t, active: s } = e;
        if ("replay2022" === t.GetTemplateVars().custom_display)
          if (r.L7.logged_in) return a.createElement(A, { active: s });
        return "image" === t.GetTemplateType()
          ? a.createElement(M, { active: s })
          : null;
      }
    },
    11154: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MarketingMessageRoutes: () => G, default: () => I });
      var a = s(67294),
        n = s(9355),
        r = s(78587),
        i = s(65924),
        l = s(23955),
        o = s(48341),
        c = s(41311);
      function m(e) {
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
      var g = s(74992),
        u = s(95598),
        _ = s(7573),
        d = s(37723),
        M = s(57649),
        p = s(13596),
        E = s(71198);
      function f(e) {
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
          { rgMessages: n, isError: i } = (0, l.Ke)(t, s),
          [o, u] = a.useState(!1),
          [_, d] = a.useState(0);
        (0, M.h)(g.MarketingMessagePage);
        const p = (0, r.k6)();
        if (
          (a.useEffect(() => {
            !n ||
              n.length ||
              i ||
              (s.bIncludeSeenMessages
                ? u(!0)
                : p.replace(
                    Object.assign(Object.assign({}, p.location), {
                      search: m(
                        Object.assign(Object.assign({}, s), {
                          bIncludeSeenMessages: !0,
                        })
                      ),
                    })
                  ));
          }, [n, s, p, i]),
          i)
        )
          return a.createElement(
            P,
            null,
            (0, c.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (o)
          return a.createElement(
            P,
            null,
            (0, c.Xx)("#MarketingMessages_NoneAvailable")
          );
        const E = s.bIncludeSeenMessages
          ? n
          : null == n
          ? void 0
          : n.slice(0, 8);
        return a.createElement(
          "div",
          { className: g.MessageListPage },
          a.createElement(
            "div",
            { className: g.MessageListScroll },
            a.createElement(v, {
              MarketingMessagesStore: t,
              rgMessages: E,
              iActiveMessage: _,
            })
          ),
          a.createElement(S, {
            cMessages: null == E ? void 0 : E.length,
            iMessage: _,
            setMessage: d,
          })
        );
      }
      function v(e) {
        const {
          MarketingMessagesStore: t,
          rgMessages: s,
          iActiveMessage: n,
        } = e;
        return s
          ? a.createElement(
              "div",
              { className: g.MessageListContainer },
              null == s
                ? void 0
                : s.map((e, s) =>
                    a.createElement(A, {
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
              { className: (0, _.Z)(g.MessageListContainer, g.Loading) },
              a.createElement(p.V, { size: "xxlarge", msDelayAppear: 500 })
            );
      }
      function S(e) {
        const { cMessages: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s - 1), [n, s]),
          i = a.useCallback(() => n(s + 1), [n, s]),
          l = [];
        for (let e = 0; e < t; e++)
          l.push(
            a.createElement(h, {
              key: e,
              active: e == s,
              iMessage: e,
              setMessage: n,
            })
          );
        const o = s > 0 ? r : void 0,
          c = s < t - 1 ? i : void 0;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("div", { className: g.CarouselSpacer }),
          a.createElement(
            "div",
            { className: g.CarouselBar },
            a.createElement(
              "div",
              { className: g.Content },
              a.createElement(
                "div",
                { className: (0, _.Z)(g.LeftArrow, o && g.Active), onClick: o },
                a.createElement(u.BKy, { angle: 180 })
              ),
              a.createElement("div", { className: g.Spacer }),
              a.createElement(
                "div",
                { className: g.PipContainer },
                a.createElement("div", { className: g.Pips }, l)
              ),
              a.createElement("div", { className: g.Spacer }),
              a.createElement(
                "div",
                { className: (0, _.Z)(g.LeftArrow, c && g.Active), onClick: c },
                a.createElement(u.BKy, { angle: 0 })
              )
            )
          )
        );
      }
      function h(e) {
        const { active: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s), [n, s]);
        return a.createElement("div", {
          className: (0, _.Z)(g.Pip, t && g.Active),
          onClick: r,
        });
      }
      function k(e) {
        const { MarketingMessagesStore: t, preview: s } = e,
          n = (0, r.$B)(),
          { message: i, isError: o } = (0, l.Q2)(t, n.params.messageid, s);
        return (
          (0, M.h)(g.MarketingMessagePage),
          o
            ? a.createElement(
                P,
                null,
                (0, c.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            : n.params.messageid
            ? i
              ? a.createElement(E.v, { message: i })
              : null
            : a.createElement(
                P,
                null,
                (0, c.Xx)("#MarketingMessages_NoneAvailable")
              )
        );
      }
      function P(e) {
        return a.createElement(
          o.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          a.createElement(o.h4, null, (0, c.Xx)("#Error_Generic"), " "),
          a.createElement(o.uT, null, e.children)
        );
      }
      function A(e) {
        const { message: t, MarketingMessagesStore: s, active: n, next: r } = e,
          i = a.useRef(),
          l = a.useRef(n || r);
        if (
          ((function (e, t) {
            a.useEffect(() => {
              t && e.MarkMessageSeen(t.id);
            }, [t, e]);
          })(s, n ? t : null),
          (n || r) && (l.current = !0),
          !l.current)
        )
          return null;
        let o = {
          enter: g.Enter,
          enterActive: g.EnterActive,
          enterDone: g.EnterDone,
          exit: g.Exit,
          exitActive: g.ExitActive,
          exitDone: g.ExitDone,
        };
        return a.createElement(
          d.Z,
          {
            in: n,
            nodeRef: i,
            classNames: o,
            timeout: 300,
            mountOnEnter: !r,
            unmountOnExit: !r,
          },
          a.createElement(
            "div",
            { className: (0, _.Z)(g.MessageWrapper, n && g.Active), ref: i },
            a.createElement(E.v, { message: t, active: n })
          )
        );
      }
      var C = s(70695),
        L = s(65902),
        x = s(90666),
        B = s(29866);
      const y = a.createContext({});
      function T(e) {
        const [t, s] = a.useState(),
          n = (0, r.TH)(),
          i = a.useMemo(() => {
            new URLSearchParams(n.search);
            return {};
          }, [n.search]);
        return (
          a.useLayoutEffect(() => {
            (0, x.kQ)("marketingmessage_config", "application_config");
            s({});
          }, [i]),
          t ? a.createElement(y.Provider, { value: t }, e.children, " ") : null
        );
      }
      const G = {
        List: () => `${n.Z.MarketingMessages()}list/`,
        Message: (e) => `${n.Z.MarketingMessages()}${e}`,
        MessagePreview: (e) => `${n.Z.MarketingMessages()}preview/${e}`,
      };
      function I(e) {
        const t = (function () {
          const [e, t] = a.useState(null);
          return (
            a.useLayoutEffect(() => {
              e ||
                t(
                  (function () {
                    if (!N) {
                      const e = (0, C.T)(),
                        t = (0, x.kQ)(
                          "marketingmessage_config",
                          "application_config"
                        ),
                        s = new L.J(x.De.WEBAPI_BASE_URL, e.webapi_token);
                      if (
                        ((N = new l.N8(s)),
                        null == t ? void 0 : t.promotion_operation_token)
                      ) {
                        const e = new L.J(
                          x.De.WEBAPI_BASE_URL,
                          t.promotion_operation_token
                        );
                        N.SetSteamInterfacePromotions(e);
                      }
                    }
                    return N;
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
                T,
                null,
                a.createElement(
                  B.Ks,
                  null,
                  a.createElement(
                    r.rs,
                    null,
                    a.createElement(
                      r.AW,
                      { path: `${G.List()}` },
                      a.createElement(f, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      { path: `${G.MessagePreview(":messageid")}` },
                      a.createElement(k, {
                        MarketingMessagesStore: t,
                        preview: !0,
                      })
                    ),
                    a.createElement(
                      r.AW,
                      { path: `${G.Message(":messageid")}` },
                      a.createElement(k, { MarketingMessagesStore: t })
                    ),
                    a.createElement(
                      r.AW,
                      null,
                      a.createElement(r.l_, { to: `${G.List()}` })
                    )
                  )
                )
              )
            )
          : null;
      }
      let N;
    },
  },
]);
