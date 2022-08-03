/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    82860: (e) => {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_1K5gA",
        required_title: "collapseablesection_required_title_29VCz",
      };
    },
    2388: (e, t, i) => {
      "use strict";
      i.d(t, { Gr: () => p, Jq: () => g, y$: () => _ });
      var r = i(70655),
        n = i(9669),
        o = i.n(n),
        a = i(22188),
        s = i(67294),
        l = (i(26149), i(92398), i(43359)),
        m = i(3389),
        c = (i(82946), i(77520)),
        u = i(93976),
        d = i(90666);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            (0,
            c.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let i = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == i.length) return this.m_mapProfilesLoading.get(e[0]);
            let r = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = o().get(r, {
                params: { steamids: i.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            i.forEach((e) => this.m_mapProfilesLoading.set(e, n));
            let a = yield n;
            a.data &&
              200 == a.status &&
              a.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, l.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, l.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, l.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            m.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            m.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? d.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : d.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, r.gn)([a.LO], f.prototype, "m_mapProfiles", void 0);
      const _ = new f();
      function p(e) {
        const t = s.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e]
          ),
          [i, r] = (0, s.useState)(!!t && !_.BHasProfileBySteamID(t));
        (0, s.useEffect)(() => {
          const e = o().CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const i = (0, u.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      i.strErrorMsg,
                    i
                  );
                })
                .finally(() => {
                  e.token.reason || r(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [i, !!t && _.GetProfileBySteamID(t)];
      }
      function g(e) {
        return p(s.useMemo(() => m.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = _;
    },
    98300: (e, t, i) => {
      "use strict";
      i.d(t, { bC: () => p, fU: () => _, mY: () => d, ug: () => f });
      var r = i(48341),
        n = i(41311),
        o = i(95598),
        a = i(67294),
        s = i(7573),
        l = i(34133),
        m = i(32548),
        c = i(29323),
        u = i(82860);
      const d = (0, c.Pi)((e) =>
        a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            {
              className: (0, s.Z)(
                e.className ? e.className : u.SectionTitleHeader,
                u.required_title
              ),
            },
            a.createElement(
              "div",
              {
                className: (0, s.Z)(
                  l.EventEditorTextTitle,
                  "EventEditorTextTitle"
                ),
              },
              e.title,
              Boolean(e.tooltip) && a.createElement(p, { tooltip: e.tooltip })
            ),
            a.createElement(_, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            })
          ),
          !e.getMinimized() && a.createElement(m.S, null, e.children)
        )
      );
      function f(e) {
        const [t, i] = a.useState(Boolean(e.bStartMinimized));
        return a.createElement(
          d,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => i(!t),
          }),
          e.children
        );
      }
      function _(e) {
        const { bIsMinimized: t, fnToggleMinimize: i } = e,
          s = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return a.createElement(
          r.zx,
          { "data-tooltip-text": (0, n.Xx)(s), onClick: i },
          e.bIsMinimized
            ? a.createElement(o.YqJ, null)
            : a.createElement(o.gR, null)
        );
      }
      function p(e) {
        return a.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: (0, s.Z)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          a.createElement(o.WWB, null)
        );
      }
    },
    69761: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { QAndARoutes: () => l, default: () => m });
      var r = i(69382),
        n = i(67294),
        o = i(78587),
        a = i(74091),
        s = i(90666);
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const m = function (e) {
        return n.createElement(
          o.rs,
          null,
          n.createElement(o.AW, {
            path: l.Dashboard(":vanity_str"),
            render: (e) =>
              n.createElement(a.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return n.createElement(r.A, { vanity_str: t });
                  },
                },
              }),
          }),
          n.createElement(o.AW, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              n.createElement(a.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: i } = e.match.params;
                    return n.createElement(r.EI, { gidSession: i });
                  },
                },
              }),
          }),
          n.createElement(o.AW, { component: c })
        );
      };
      function c(e) {
        return "dev" !== s.De.WEB_UNIVERSE
          ? n.createElement(o.l_, { to: "/" })
          : n.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
    },
  },
]);
