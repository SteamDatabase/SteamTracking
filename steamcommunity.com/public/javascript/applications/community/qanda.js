/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    2388: (e, r, s) => {
      s.d(r, { Gr: () => p, Jq: () => _, y$: () => g });
      var t = s(70655),
        o = s(9669),
        a = s.n(o),
        n = s(22188),
        i = s(67294),
        l = (s(26149), s(92398), s(43359)),
        m = s(3389),
        u = (s(82946), s(77520)),
        c = s(93976),
        d = s(90666);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, r) {
          return (0, t.mG)(this, void 0, void 0, function* () {
            (0,
            u.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let s = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == s.length) return this.m_mapProfilesLoading.get(e[0]);
            let t = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              o = a().get(t, {
                params: { steamids: s.join(",") },
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
            s.forEach((e) => this.m_mapProfilesLoading.set(e, o));
            let n = yield o;
            n.data &&
              200 == n.status &&
              n.data.forEach((e) => {
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
          const r = this.GetProfileBySteamID(e);
          return r && r.profile_url
            ? d.De.COMMUNITY_BASE_URL + "id/" + r.profile_url
            : d.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const r = this.GetProfileBySteamID(e);
          return r && r.persona_name ? r.persona_name : "";
        }
      }
      (0, t.gn)([n.LO], f.prototype, "m_mapProfiles", void 0);
      const g = new f();
      function p(e) {
        const r = i.useMemo(
            () => (e ? ("string" == typeof e ? new m.K(e) : e) : null),
            [e]
          ),
          [s, t] = (0, i.useState)(!!r && !g.BHasProfileBySteamID(r));
        (0, i.useEffect)(() => {
          const e = a().CancelToken.source();
          return (
            r &&
              !g.BHasProfileBySteamID(r) &&
              g
                .LoadProfiles([r.ConvertTo64BitString()])
                .catch((e) => {
                  const s = (0, c.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      r.ConvertTo64BitString() +
                      ": " +
                      s.strErrorMsg,
                    s
                  );
                })
                .finally(() => {
                  e.token.reason || t(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [s, !!r && g.GetProfileBySteamID(r)];
      }
      function _(e) {
        return p(i.useMemo(() => m.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = g;
    },
    93976: (e, r, s) => {
      s.d(r, { l: () => n });
      s(26149);
      var t = s(9669),
        o = s.n(t),
        a = s(58114);
      function n(e) {
        if (o().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    69761: (e, r, s) => {
      s.r(r), s.d(r, { QAndARoutes: () => l, default: () => m });
      var t = s(69382),
        o = s(67294),
        a = s(78587),
        n = s(74091),
        i = s(92244);
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, r) => `/questions/${e}/view/${r}`,
      };
      const m = function (e) {
        return o.createElement(
          a.rs,
          null,
          o.createElement(a.AW, {
            path: l.Dashboard(":vanity_str"),
            render: (e) =>
              o.createElement(n.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: r } = e.match.params;
                    return o.createElement(t.A, { vanity_str: r });
                  },
                },
              }),
          }),
          o.createElement(a.AW, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              o.createElement(n.d, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: r, session_gid: s } = e.match.params;
                    return o.createElement(t.EI, { gidSession: s });
                  },
                },
              }),
          }),
          o.createElement(a.AW, { component: i.R })
        );
      };
    },
  },
]);
