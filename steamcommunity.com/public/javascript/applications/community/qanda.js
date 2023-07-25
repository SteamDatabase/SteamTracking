/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [908],
  {
    4556: (e, r, t) => {
      t.d(r, { U: () => a, W: () => o });
      var s = t(32765);
      const o = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, r) {
        let t = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = o),
          44 == e.length && ((t = e.substr(-4)), (e = e.substr(0, 40)));
        let a = s.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = s.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          r && "small" != r && (a += "_" + r),
          (a += t),
          a
        );
      }
    },
    24448: (e, r, t) => {
      t.d(r, { Gr: () => p, Jq: () => _, y$: () => g });
      var s = t(33940),
        o = t(52868),
        a = t.n(o),
        n = t(50265),
        i = t(89526),
        l = t(4556),
        u = t(47165),
        c = t(23801),
        m = t(23217),
        d = t(32765);
      class f {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0, c.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let t = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
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
            u.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            u.K.InitFromAccountID(e).ConvertTo64BitString(),
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
            [e],
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
                    t,
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
    58218: (e, r, t) => {
      t.d(r, { T: () => n });
      var s = t(52868),
        o = t.n(s),
        a = t(89526);
      function n(e) {
        const r = a.useRef(o().CancelToken.source());
        return (
          a.useEffect(() => {
            const t = r.current;
            return () => t.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          r.current
        );
      }
    },
    23217: (e, r, t) => {
      t.d(r, { l: () => n });
      var s = t(52868),
        o = t.n(s),
        a = t(54856);
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
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
    57927: (e, r, t) => {
      t.r(r), t.d(r, { QAndARoutes: () => l, default: () => u });
      var s = t(50857),
        o = t(89526),
        a = t(59934),
        n = t(35993),
        i = t(71209);
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
          o.createElement(a.AW, { component: i.R }),
        );
      };
    },
  },
]);
