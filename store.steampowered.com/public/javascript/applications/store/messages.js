/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4158],
  {
    76197: (e) => {
      e.exports = {
        MessageContent: "image_MessageContent_1N2Wd",
        GameImage: "image_GameImage_2imw0",
        TextTop: "image_TextTop_76FjT",
        TextBottom: "image_TextBottom_otBhX",
        Legal: "image_Legal_7NnVB",
        MessageFooter: "image_MessageFooter_2h7_p",
        Btn: "image_Btn_2utr-",
        Price: "image_Price_3TzbJ",
        NoPrice: "image_NoPrice_1oXJH",
        PriceReal: "image_PriceReal_1IET-",
        PriceRealShort: "image_PriceRealShort_2fteu",
        PriceRegular: "image_PriceRegular_2Mki7",
        Strike: "image_Strike_2hlJo",
        ShareLinks: "image_ShareLinks_2_buK",
        All: "image_All_2A3DH",
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
    53546: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { MarketingMessageRoutes: () => Q, default: () => Y });
      var a = s(67294),
        n = s(9355),
        r = s(78587),
        i = s(65924),
        l = s(70655),
        c = s(88767),
        o = s(26149),
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            if (!u.L7.logged_in) return [];
            const s = m.gA.Init(g.Pe);
            s.Body().set_country_code(u.De.COUNTRY),
              s.Body().set_elanguage((0, o.jM)(u.De.LANGUAGE)),
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
          return (0, l.mG)(this, void 0, void 0, function* () {
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
        get associated_item() {
          return this.m_item;
        }
      }
      function f(e, t, s) {
        const { bIncludeSeenMessages: n } = t,
          r = (0, l._T)(t, ["bIncludeSeenMessages"]),
          {
            data: i,
            isLoading: o,
            isError: m,
          } = (0, c.useQuery)(
            ["MarketingMessages", "List", r, { bIncludeSeenMessages: !!n }],
            () => e.GetMessageList(r, n),
            s
          ),
          g = a.useMemo(
            () => (null == i ? void 0 : i.map((e) => new p(e.message()))),
            [i]
          );
        return { rgMessages: o ? null : g, isError: m };
      }
      var v = s(48341),
        h = s(41311),
        S = s(67833),
        k = s(32548),
        A = s(44741);
      function C(e) {
        var t;
        const { path: s, message: n } = e,
          r = (0, l._T)(e, ["path", "message"]);
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
      var P = s(76197);
      const x = a.createContext(null);
      function y() {
        return a.useContext(x);
      }
      function G(e) {
        const { message: t } = e;
        return a.createElement(
          x.Provider,
          { value: t },
          a.createElement(
            "div",
            { className: P.All },
            a.createElement(
              "div",
              { className: P.MessageContent },
              a.createElement(N, null),
              a.createElement(T, null),
              a.createElement("div", { style: { clear: "both" } })
            )
          )
        );
      }
      function L(e) {
        const t = (0, i.bJ)(),
          s = e.GetTemplateVars();
        let n = (0, S.OL)(s.linkurl, t);
        return (
          n.startsWith("steam://") || (n = `steam://openurl/${n}`),
          a.useCallback(
            (e) => {
              window.location.href = n;
            },
            [n]
          )
        );
      }
      function N(e) {
        const t = y(),
          s = L(t),
          n = t.GetTemplateImage();
        return a.createElement(
          "div",
          { className: P.GameImage, onClick: s },
          n && a.createElement(C, { message: t, path: n })
        );
      }
      function T(e) {
        const t = y();
        L(t),
          t.GetTemplateVars().button_text_custom ||
            t.GetTemplateVars().button_text;
        return a.createElement(
          "div",
          { className: P.MessageFooter },
          a.createElement(I, null),
          a.createElement(k.S, null, a.createElement(b, null))
        );
      }
      function b() {
        const e = y().associated_item;
        if (
          e &&
          e.GetBestPurchaseOption() &&
          e.GetBestPurchaseOption().formatted_final_price
        ) {
          e.GetBestPurchaseOption();
          return a.createElement(A.nk, { storeItem: e });
        }
        return a.createElement("div", { className: P.NoPrice });
      }
      function I(e) {
        const t = y();
        let s = a.createElement(
          a.Fragment,
          null,
          `© ${new Date().getFullYear()} Valve Corporation and ${
            t.GetTemplateVars().partner
          }.`,
          a.createElement("br", null),
          "All trademarks are property of their respective owners in the US and other countries."
        );
        return (
          t.GetTemplateVars().use_custom_legal_text &&
            (s = a.createElement(
              a.Fragment,
              null,
              t.GetTemplateVars().custom_legal_text
            )),
          a.createElement("div", { className: P.Legal }, s)
        );
      }
      function B(e) {
        const { message: t } = e;
        return "image" === t.GetTemplateType()
          ? a.createElement(G, { message: t })
          : null;
      }
      function D(e) {
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
      var w = s(74992),
        R = s(95598),
        V = s(7573),
        O = s(37723),
        $ = s(57649),
        W = s(13596);
      function Z(e) {
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
          [l, c] = a.useState(!1),
          [o, m] = a.useState(0);
        (0, $.h)(w.MarketingMessagePage);
        const g = (0, r.k6)();
        if (
          (a.useEffect(() => {
            !n ||
              n.length ||
              i ||
              (s.bIncludeSeenMessages
                ? c(!0)
                : g.replace(
                    Object.assign(Object.assign({}, g.location), {
                      search: D(
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
            J,
            null,
            (0, h.Xx)("#Error_ErrorCommunicatingWithNetwork")
          );
        if (l)
          return a.createElement(
            J,
            null,
            (0, h.Xx)("#MarketingMessages_NoneAvailable")
          );
        const u = s.bIncludeSeenMessages
          ? n
          : null == n
          ? void 0
          : n.slice(0, 8);
        return a.createElement(
          "div",
          { className: w.MessageListPage },
          a.createElement(
            "div",
            { className: w.MessageListScroll },
            a.createElement(F, {
              MarketingMessagesStore: t,
              rgMessages: u,
              iActiveMessage: o,
            })
          ),
          a.createElement(U, {
            cMessages: null == u ? void 0 : u.length,
            iMessage: o,
            setMessage: m,
          })
        );
      }
      function F(e) {
        const {
          MarketingMessagesStore: t,
          rgMessages: s,
          iActiveMessage: n,
        } = e;
        return s
          ? a.createElement(
              "div",
              { className: w.MessageListContainer },
              null == s
                ? void 0
                : s.map((e, s) =>
                    a.createElement(K, {
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
              { className: (0, V.Z)(w.MessageListContainer, w.Loading) },
              a.createElement(W.V, { size: "xxlarge", msDelayAppear: 500 })
            );
      }
      function U(e) {
        const { cMessages: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s - 1), [n, s]),
          i = a.useCallback(() => n(s + 1), [n, s]),
          l = [];
        for (let e = 0; e < t; e++)
          l.push(
            a.createElement(X, {
              key: e,
              active: e == s,
              iMessage: e,
              setMessage: n,
            })
          );
        const c = s > 0 ? r : void 0,
          o = s < t - 1 ? i : void 0;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("div", { className: w.CarouselSpacer }),
          a.createElement(
            "div",
            { className: w.CarouselBar },
            a.createElement(
              "div",
              { className: w.Content },
              a.createElement(
                "div",
                { className: (0, V.Z)(w.LeftArrow, c && w.Active), onClick: c },
                a.createElement(R.BKy, { angle: 180 })
              ),
              a.createElement("div", { className: w.Spacer }),
              a.createElement(
                "div",
                { className: w.PipContainer },
                a.createElement("div", { className: w.Pips }, l)
              ),
              a.createElement("div", { className: w.Spacer }),
              a.createElement(
                "div",
                { className: (0, V.Z)(w.LeftArrow, o && w.Active), onClick: o },
                a.createElement(R.BKy, { angle: 0 })
              )
            )
          )
        );
      }
      function X(e) {
        const { active: t, iMessage: s, setMessage: n } = e,
          r = a.useCallback(() => n(s), [n, s]);
        return a.createElement("div", {
          className: (0, V.Z)(w.Pip, t && w.Active),
          onClick: r,
        });
      }
      function j(e) {
        const { MarketingMessagesStore: t } = e,
          s = (0, r.$B)(),
          { message: n, isError: i } = (function (e, t) {
            const { data: s, isError: n } = (0, c.useQuery)(
              ["MarketingMessages", "Single", t],
              () => e.GetSingleMessage(t),
              { enabled: !!t }
            );
            return { message: a.useMemo(() => s && new p(s), [s]), isError: n };
          })(t, s.params.messageid);
        return (
          (0, $.h)(w.MarketingMessagePage),
          i
            ? a.createElement(
                J,
                null,
                (0, h.Xx)("#Error_ErrorCommunicatingWithNetwork")
              )
            : s.params.messageid
            ? n
              ? a.createElement(B, { message: n })
              : null
            : a.createElement(
                J,
                null,
                (0, h.Xx)("#MarketingMessages_NoneAvailable")
              )
        );
      }
      function J(e) {
        return a.createElement(
          v.VY,
          { style: { maxWidth: "400px", margin: "0 auto" } },
          a.createElement(v.h4, null, (0, h.Xx)("#Error_Generic"), " "),
          a.createElement(v.uT, null, e.children)
        );
      }
      function K(e) {
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
        let c = {
          enter: w.Enter,
          enterActive: w.EnterActive,
          enterDone: w.EnterDone,
          exit: w.Exit,
          exitActive: w.ExitActive,
          exitDone: w.ExitDone,
        };
        return a.createElement(
          O.Z,
          {
            in: n,
            nodeRef: i,
            classNames: c,
            timeout: 300,
            mountOnEnter: !r,
            unmountOnExit: !r,
          },
          a.createElement(
            "div",
            { className: (0, V.Z)(w.MessageWrapper, n && w.Active), ref: i },
            a.createElement(B, { message: t })
          )
        );
      }
      var q = s(70695),
        H = s(65902);
      const Q = {
        List: () => `${n.Z.MarketingMessages()}list/`,
        Message: (e) => `${n.Z.MarketingMessages()}${e}`,
      };
      function Y(e) {
        const t = (function () {
          const [e, t] = a.useState(null);
          return (
            a.useEffect(() => {
              e ||
                t(
                  (function () {
                    if (!z) {
                      const e = (0, q.T)(),
                        t = new H.J(u.De.WEBAPI_BASE_URL, e.webapi_token);
                      z = new E(t);
                    }
                    return z;
                  })()
                );
            }, [e]),
            e
          );
        })();
        return t
          ? a.createElement(
              i.ZP,
              { domain: "store.steampowered.com", controller: "messages" },
              a.createElement(
                r.rs,
                null,
                a.createElement(
                  r.AW,
                  { path: `${Q.List()}` },
                  a.createElement(Z, { MarketingMessagesStore: t })
                ),
                a.createElement(
                  r.AW,
                  { path: `${Q.Message(":messageid")}` },
                  a.createElement(j, { MarketingMessagesStore: t })
                ),
                a.createElement(
                  r.AW,
                  null,
                  a.createElement(r.l_, { to: `${Q.List()}` })
                )
              )
            )
          : null;
      }
      let z;
    },
  },
]);
