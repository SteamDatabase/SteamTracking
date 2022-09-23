/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    2388: (e, r, t) => {
      t.d(r, { Gr: () => p, Jq: () => _, y$: () => g });
      var s = t(70655),
        o = t(9669),
        a = t.n(o),
        n = t(22188),
        i = t(67294),
        l = (t(26149), t(54698), t(43359)),
        u = t(3389),
        c = (t(82946), t(77520)),
        m = t(93976),
        d = t(90666);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0,
            c.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let t = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == t.length) return this.m_mapProfilesLoading.get(e[0]);
            let s = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              o = a().get(s, {
                params: { steamids: t.join(",") },
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
            t.forEach((e) => this.m_mapProfilesLoading.set(e, o));
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
            u.K.InitFromAccountID(e).ConvertTo64BitString()
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
            u.K.InitFromAccountID(e).ConvertTo64BitString()
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
      (0, s.gn)([n.LO], f.prototype, "m_mapProfiles", void 0);
      const g = new f();
      function p(e) {
        const r = i.useMemo(
            () => (e ? ("string" == typeof e ? new u.K(e) : e) : null),
            [e]
          ),
          [t, s] = (0, i.useState)(!!r && !g.BHasProfileBySteamID(r));
        (0, i.useEffect)(() => {
          const e = a().CancelToken.source();
          return (
            r &&
              !g.BHasProfileBySteamID(r) &&
              g
                .LoadProfiles([r.ConvertTo64BitString()])
                .catch((e) => {
                  const t = (0, m.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      r.ConvertTo64BitString() +
                      ": " +
                      t.strErrorMsg,
                    t
                  );
                })
                .finally(() => {
                  e.token.reason || s(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [t, !!r && g.GetProfileBySteamID(r)];
      }
      function _(e) {
        return p(i.useMemo(() => u.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = g;
    },
    93976: (e, r, t) => {
      t.d(r, { l: () => n });
      t(26149);
      var s = t(9669),
        o = t.n(s),
        a = t(58114);
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
    69761: (e, r, t) => {
      t.r(r), t.d(r, { QAndARoutes: () => l, default: () => u });
      var s = t(69382),
        o = t(67294),
        a = t(78587),
        n = t(74091),
        i = t(90666);
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, r) => `/questions/${e}/view/${r}`,
      };
      const u = function (e) {
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
                    return o.createElement(s.A, { vanity_str: r });
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
                    const { vanity_str: r, session_gid: t } = e.match.params;
                    return o.createElement(s.EI, { gidSession: t });
                  },
                },
              }),
          }),
          o.createElement(a.AW, { component: c })
        );
      };
      function c(e) {
        return "dev" !== i.De.WEB_UNIVERSE
          ? o.createElement(a.l_, { to: "/" })
          : o.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
    },
  },
]);
