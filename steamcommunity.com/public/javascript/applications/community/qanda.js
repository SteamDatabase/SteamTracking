/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [122],
  {
    "3USw": function (e, t, n) {
      e.exports = {
        SectionTitleHeader: "collapseablesection_SectionTitleHeader_2g5oN",
        required_title: "collapseablesection_required_title_3yDPZ",
      };
    },
    DisI: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return d;
      }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return _;
        });
      var i = n("Mgs7"),
        r = n("TLQK"),
        a = n("6Y59"),
        o = n("q1tI"),
        s = n("exH9"),
        l = n("fpVW"),
        c = n("IjL/"),
        u = n("TyAF"),
        m = n("3USw");
      const d = Object(u.a)((e) =>
        o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            {
              className: Object(s.a)(
                e.className ? e.className : m.SectionTitleHeader,
                m.required_title
              ),
            },
            o.createElement(
              "div",
              {
                className: Object(s.a)(
                  l.EventEditorTextTitle,
                  "EventEditorTextTitle"
                ),
              },
              e.title,
              Boolean(e.tooltip) && o.createElement(_, { tooltip: e.tooltip })
            ),
            o.createElement(p, {
              bIsMinimized: e.getMinimized(),
              fnToggleMinimize: e.toggleMinimized,
            })
          ),
          !e.getMinimized() && o.createElement(c.a, null, e.children)
        )
      );
      function f(e) {
        const [t, n] = o.useState(Boolean(e.bStartMinimized));
        return o.createElement(
          d,
          Object.assign({}, e, {
            getMinimized: () => t,
            toggleMinimized: () => n(!t),
          }),
          e.children
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          s = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return o.createElement(
          i.e,
          { "data-tooltip-text": Object(r.f)(s), onClick: n },
          e.bIsMinimized
            ? o.createElement(a.P, null)
            : o.createElement(a.S, null)
        );
      }
      function _(e) {
        return o.createElement(
          "span",
          {
            "data-tooltip-text": e.tooltip,
            className: Object(s.a)(l.HelperTooltip, "HelperTooltip"),
          },
          " ",
          o.createElement(a.G, null)
        );
      }
    },
    KVeB: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "QAndARoutes", function () {
          return l;
        });
      var i = n("JCps"),
        r = n("q1tI"),
        a = n("EC67"),
        o = n("WplJ"),
        s = n("lkRc");
      const l = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      function c(e) {
        return "dev" !== s.c.WEB_UNIVERSE
          ? r.createElement(a.b, { to: "/" })
          : r.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/questions.tsx to see if this page has been added to the list of routes."
            );
      }
      t.default = function (e) {
        return r.createElement(
          a.e,
          null,
          r.createElement(a.c, {
            path: l.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(o.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(i.a, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(a.c, {
            path: l.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(o.a, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return r.createElement(i.b, { gidSession: n });
                  },
                },
              }),
          }),
          r.createElement(a.c, { component: c })
        );
      };
    },
    Qcoi: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return h;
        });
      var i = n("mrSG"),
        r = n("vDqi"),
        a = n.n(r),
        o = n("2vnA"),
        s = n("q1tI"),
        l = n.n(s),
        c = (n("mgoM"), n("65aj"), n("8H1D")),
        u = n("kLLr"),
        m = (n("AiWL"), n("r64O")),
        d = n("OS6B"),
        f = n("lkRc");
      class p {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            Object(m.a)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs"
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = f.c.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              r = a.a.get(i, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, r));
            let o = yield r;
            o.data &&
              200 == o.status &&
              o.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = Object(c.a)(e.avatar_url, "medium")),
                  (e.avatar_url_full = Object(c.a)(e.avatar_url, "full")),
                  (e.avatar_url = Object(c.a)(e.avatar_url)),
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
            u.a.InitFromAccountID(e).ConvertTo64BitString()
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
            u.a.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? f.c.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : f.c.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      Object(i.b)([o.C], p.prototype, "m_mapProfiles", void 0);
      const _ = new p();
      function g(e) {
        const t = l.a.useMemo(
            () => (e ? ("string" == typeof e ? new u.a(e) : e) : null),
            [e]
          ),
          [n, i] = Object(s.useState)(!!t && !_.BHasProfileBySteamID(t));
        Object(s.useEffect)(() => {
          const e = a.a.CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const n = Object(d.a)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      n.strErrorMsg,
                    n
                  );
                })
                .finally(() => {
                  e.token.reason || i(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [n, !!t && _.GetProfileBySteamID(t)];
      }
      function h(e) {
        return g(l.a.useMemo(() => u.a.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = _;
    },
  },
]);
