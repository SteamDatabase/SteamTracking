/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    2388: (e, t, r) => {
      r.d(t, { Gr: () => _, Jq: () => P, y$: () => h });
      var a = r(70655),
        o = r(9669),
        n = r.n(o),
        s = r(22188),
        i = r(67294),
        l = (r(26149), r(54698), r(43359)),
        m = r(3389),
        u = (r(82946), r(77520)),
        c = r(93976),
        f = r(90666);
      class d {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            (0,
            u.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let a = f.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              o = n().get(a, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, o));
            let s = yield o;
            s.data &&
              200 == s.status &&
              s.data.forEach((e) => {
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
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? f.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : f.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, a.gn)([s.LO], d.prototype, "m_mapProfiles", void 0);
      const h = new d();
      function _(e) {
        const t = i.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e]
          ),
          [r, a] = (0, i.useState)(!!t && !h.BHasProfileBySteamID(t));
        (0, i.useEffect)(() => {
          const e = n().CancelToken.source();
          return (
            t &&
              !h.BHasProfileBySteamID(t) &&
              h
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = (0, c.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r
                  );
                })
                .finally(() => {
                  e.token.reason || a(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && h.GetProfileBySteamID(t)];
      }
      function P(e) {
        return _(i.useMemo(() => m.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = h;
    },
    69761: (e, t, r) => {
      r.r(t), r.d(t, { QAndARoutes: () => l, default: () => m });
      var a = r(69382),
        o = r(67294),
        n = r(78587),
        s = r(74091),
        i = r(90666);
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const m = function (e) {
        return o.createElement(
          n.rs,
          null,
          o.createElement(n.AW, {
            path: l.Dashboard(":vanity_str"),
            render: (e) =>
              o.createElement(s.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return o.createElement(a.A, { vanity_str: t });
                  },
                },
              }),
          }),
          o.createElement(n.AW, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              o.createElement(s.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: r } = e.match.params;
                    return o.createElement(a.EI, { gidSession: r });
                  },
                },
              }),
          }),
          o.createElement(n.AW, { component: u })
        );
      };
      function u(e) {
        return "dev" !== i.De.WEB_UNIVERSE
          ? o.createElement(n.l_, { to: "/" })
          : o.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
    },
  },
]);
