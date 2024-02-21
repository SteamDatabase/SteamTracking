/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5875],
  {
    55215: (t) => {
      t.exports = {
        DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
        DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
        DashTitle: "_1FK58fndqHlADYEX-58V0C",
        ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
        Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
        ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
        ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
      };
    },
    69727: (t) => {
      t.exports = {
        EventDetails: "_3LMXjfy-EuA2ZWoW660vuc",
        Active: "_2BLece8YI3va6GD9JEUxjL",
        RestrictedEligibility: "_2lxTisamKtJUowDlNKSrzG",
        CollisionFreeDiscountEvent: "_15fBcZwmM-nap1QbkpRc2G",
        EventName: "_2bJFFj7RfHL_P4P-MJlzK4",
        EditEventLink: "_1XHd3t0XU1SfpsraST5Ovy",
        EventDates: "_2kY09NU8R-tjOVYmIwZ98B",
        EventDateRange: "_312igBJXB0MifodN4IBq1i",
        EventNumDays: "OAAVWKvssJLy0QM6mVcw6",
        EventLink: "VZ3pVxXbvFNzdGOkOrNGU",
        EventParticipationCtn: "_2iuUu1K5b1e71DnJKkBtHH",
        ParticipationDetails: "_2tr5XTQIvHNQiu4IZKMi7Z",
        Title: "_3mO71T0Q_migmtLfYRFb-6",
        Count: "_1pDZ1lHiN5RohGZxcDAyCK",
        Selected: "_36G76FOe3fZ8csab26PcL8",
        ParticipationToolTip: "_36hxaHrRvc7ct9bb0Aeza3",
        AppLink: "_3RF-6YnSS_2OpJmOo0BV6_",
        DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
        RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
        BasePrice: "_1a_LwvXaB11PNusz9GPz98",
        GridRowLoadingThrobber: "r2FLR3ukmK3cVbBV-j8Aa",
        CurrencyPicker: "_2Z65Kc_3FxlP0E15rMFuVC",
        RelatedInfoPicker: "O-95g3EzyTgFwNJ8ATC-e",
        RelatedInfoPickerCtn: "_2nnB1eMYflFLLmMAi7_jJV",
        CurrencyDropDown: "_2gGuz_TA8axLQOqAtwurFU",
        RelatedInfoDropDown: "_1jj2uEuCns_K_cIfGZcKl6",
        CurrencyDropDownItem: "_3wPHxQWhohHATqjvN6B2l3",
        RelatedInfoDropDownItem: "_1ORamDcYtEN8wS1voTsWE",
      };
    },
    9953: (t) => {
      t.exports = {
        UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
        PackageName: "t8fSjo20nSXqky8aCgQwm",
        PackageType: "_3LZvjdGD8NF2mke6oav-MK",
        LastRow: "_18dUcjzcI8gjV1xagLSWI6",
        AppCount: "_2J3kNbz7o9Fd161kGxFARG",
        PackageID: "_1E3TVBOn6hjLXBLwqCPV4J",
        PackageNameColumn: "_2pjx8S7EGnMJcmc9CzX9UK",
        PackagePricesBelowMin: "_2x4be2ySvHHrfL_FaOtZPm",
      };
    },
    28738: (t, e, n) => {
      "use strict";
      n.d(e, { Jq: () => D, y$: () => m });
      var a = n(85556),
        i = n(80751),
        s = n.n(i),
        o = n(54842),
        r = n(47427),
        c = n(48760),
        l = n(35427),
        u = n(62210),
        d = n(16649),
        p = n(37563);
      class g {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, o.rC)(this);
        }
        LoadProfiles(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              t.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = t.filter(
              (t) =>
                !this.m_mapProfiles.has(t) && !this.m_mapProfilesLoading.has(t),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(t[0]);
            let a = p.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              i = s().get(a, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
            n.forEach((t) => this.m_mapProfilesLoading.set(t, i));
            let o = yield i;
            o.data &&
              200 == o.status &&
              o.data.forEach((t) => {
                (t.avatar_hash = t.avatar_url),
                  (t.avatar_url_medium = (0, c.U)(t.avatar_url, "medium")),
                  (t.avatar_url_full = (0, c.U)(t.avatar_url, "full")),
                  (t.avatar_url = (0, c.U)(t.avatar_url)),
                  this.m_mapProfiles.set(t.steamid, t),
                  this.m_mapProfilesLoading.delete(t.steamid);
              });
          });
        }
        GetProfile(t) {
          return this.m_mapProfiles.get(t);
        }
        GetProfileByAccountID(t) {
          return this.m_mapProfiles.get(
            l.K.InitFromAccountID(t).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(t) {
          return this.m_mapProfiles.get(t.ConvertTo64BitString());
        }
        BHasProfile(t) {
          return this.m_mapProfiles.has(t);
        }
        BHasProfileByAccountID(t) {
          return this.m_mapProfiles.has(
            l.K.InitFromAccountID(t).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(t) {
          return this.m_mapProfiles.has(t.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(t) {
          return !t.some((t) => !this.BHasProfileBySteamID(t));
        }
        GetProfileURLBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.profile_url
            ? p.De.COMMUNITY_BASE_URL + "id/" + e.profile_url
            : p.De.COMMUNITY_BASE_URL + "profiles/" + t.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.persona_name ? e.persona_name : "";
        }
      }
      (0, a.gn)([o.LO], g.prototype, "m_mapProfiles", void 0);
      const m = new g();
      function D(t) {
        return (function (t) {
          const e = r.useMemo(
              () => (t ? ("string" == typeof t ? new l.K(t) : t) : null),
              [t],
            ),
            [n, a] = (0, r.useState)(!!e && !m.BHasProfileBySteamID(e));
          return (
            (0, r.useEffect)(() => {
              const t = s().CancelToken.source();
              return (
                e &&
                  !m.BHasProfileBySteamID(e) &&
                  m
                    .LoadProfiles([e.ConvertTo64BitString()])
                    .catch((t) => {
                      const n = (0, d.l)(t);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          e.ConvertTo64BitString() +
                          ": " +
                          n.strErrorMsg,
                        n,
                      );
                    })
                    .finally(() => {
                      t.token.reason || a(!1);
                    }),
                () => t.cancel("unmounting useUserProfile")
              );
            }, [t]),
            [n, !!e && m.GetProfileBySteamID(e)]
          );
        })(r.useMemo(() => (t ? l.K.InitFromAccountID(t) : null), [t]));
      }
    },
    10095: (t, e, n) => {
      "use strict";
      n.d(e, {
        A0: () => _,
        Cy: () => P,
        PV: () => f,
        QQ: () => k,
        Rz: () => C,
        V7: () => E,
        ZW: () => I,
        _l: () => b,
        dS: () => R,
        du: () => y,
        lQ: () => A,
        nw: () => G,
        py: () => S,
        qh: () => v,
      });
      var a = n(85556),
        i = n(80751),
        s = n.n(i),
        o = n(54842),
        r = n(47427),
        c = n(42718),
        l = n(83999),
        u = n(62210),
        d = n(16649),
        p = n(16997),
        g = n(45492),
        m = n(20417),
        D = n(37563),
        h = n(29480);
      class v {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map()),
            (this.m_loadCountChangeCallback = new g.pB()),
            (0, o.rC)(this);
        }
        BHasOptInRegistration(t, e) {
          var n;
          return Boolean(
            null === (n = this.m_mapRegistrations.get(t)) || void 0 === n
              ? void 0
              : n.has(e),
          );
        }
        GetOptInRegistrationPromise(t, e) {
          var n;
          return null === (n = this.m_mapRequestedAppIDs.get(e)) || void 0 === n
            ? void 0
            : n.get(t);
        }
        GetOptInRegistrationAndEligibilityForApp(t) {
          return this.m_mapRegistrations.get(t);
        }
        GetSingleAppRegistrationKey(t, e) {
          return `single_${t}_${e}`;
        }
        GetSingleAppRegistrationChange(t, e) {
          const n = this.GetSingleAppRegistrationKey(t, e);
          return (
            this.m_mapSingleAppRegistrationChange.has(n) ||
              this.m_mapSingleAppRegistrationChange.set(n, new g.pB()),
            this.m_mapSingleAppRegistrationChange.get(n)
          );
        }
        GetExistingOptInRegistartion(t, e) {
          return this.m_mapRegistrations.has(t)
            ? this.m_mapRegistrations.get(t).get(e)
            : null;
        }
        GetLoadCountChange() {
          return this.m_loadCountChangeCallback;
        }
        GetLoadCount() {
          return this.m_mapRegistrations.size;
        }
        GetOptInRegistrationAndEligibilityForApps(t) {
          if (0 == t.length) return null;
          let e = new Map();
          for (let n of t) {
            let t = this.m_mapRegistrations.get(n);
            if (t)
              for (let n of t.keys()) {
                let t = e.get(n);
                t || (t = 0), e.set(n, t + 1);
              }
          }
          let n = new Map(),
            a = t[0];
          return (
            e.forEach((e, i) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(a).get(i);
                (0, u.X)(t, "Missing OptIn Restration"), n.set(i, t);
              }
            }),
            n.size > 0 ? n : null
          );
        }
        BHasOptionOnRegistration(t, e, n) {
          var a, i;
          const s = this.GetRegistration(t, e);
          return (
            !(!s || !s.opt_in) &&
            (!n ||
              (null ===
                (i =
                  null === (a = null == s ? void 0 : s.jsondata) || void 0 === a
                    ? void 0
                    : a.dynamic_selection) || void 0 === i
                ? void 0
                : i.some((t) => {
                    var e;
                    return (
                      t &&
                      t.section_id == n.section_id &&
                      (null === (e = t.list_selection) || void 0 === e
                        ? void 0
                        : e.some((t) => {
                            var e;
                            return (
                              t &&
                              t.list_id == n.list_id &&
                              (null === (e = t.selected_item_id) || void 0 === e
                                ? void 0
                                : e.includes(n.option_id))
                            );
                          }))
                    );
                  })))
          );
        }
        BHasOptInTrailer(t, e) {
          var n;
          const a = this.GetRegistration(t, e);
          return Boolean(
            a &&
              a.opt_in &&
              (null === (n = a.jsondata) || void 0 === n
                ? void 0
                : n.trailer_permission) &&
              a.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(t, e) {
          var n;
          const a = this.GetRegistration(t, e);
          return Boolean(
            a &&
              a.opt_in &&
              (null === (n = a.jsondata) || void 0 === n
                ? void 0
                : n.demo_permission) &&
              a.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(t, e) {
          var n;
          const a = this.GetRegistration(t, e);
          return Boolean(
            a &&
              a.opt_in &&
              (null === (n = a.jsondata) || void 0 === n
                ? void 0
                : n.game_profile_intent) &&
              a.jsondata.rtime_granting_profile,
          );
        }
        CreateRegistrationNotSaved(t, e) {
          console.log("CreateOrGetRegistration: Creating new registration");
          return {
            opt_in_name: e,
            opt_in: !1,
            appid: t,
            jsondata: { opt_in_name: e, opt_in: !1 },
          };
        }
        CreateOrGetRegistration(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let a = n.get(e);
          return (
            a
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  a,
                )
              : (a = this.CreateRegistrationNotSaved(t, e)),
            a
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let a = n.get(e);
          return (
            a
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  a,
                )
              : ((a = this.CreateRegistrationNotSaved(t, e)), n.set(e, a)),
            a
          );
        }
        GetRegistration(t, e) {
          return this.m_mapRegistrations.has(t) &&
            this.m_mapRegistrations.get(t).has(e)
            ? this.m_mapRegistrations.get(t).get(e)
            : null;
        }
        GetAllOptInRegistrations(t) {
          const e = this.m_mapRequestedAppIDs.get(t) || new Map();
          return Array.from(e.keys())
            .map((e) => {
              var n;
              return null === (n = this.m_mapRegistrations.get(e)) ||
                void 0 === n
                ? void 0
                : n.get(t);
            })
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(t) {
          return t
            ? (this.m_mapOptInNameCallback.has(t) ||
                this.m_mapOptInNameCallback.set(t, new g.pB()),
              this.m_mapOptInNameCallback.get(t))
            : null;
        }
        UpdateRegAndTrackInStore(t, e) {
          const n = e.map((e) =>
            e.jsondata && "" !== e.jsondata
              ? Object.assign(Object.assign({}, e), {
                  jsondata: JSON.parse(e.jsondata),
                })
              : Object.assign(Object.assign({}, e), {
                  jsondata: { opt_in_name: t },
                }),
          );
          return (
            n.forEach((e) => {
              this.m_mapRegistrations.has(e.appid) ||
                (this.m_mapRegistrations.set(e.appid, new Map()),
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                )),
                this.m_mapRegistrations.get(e.appid).set(t, e);
            }),
            n
          );
        }
        FetchOptInRegistrationForOptIn(t, e) {
          var n, i;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a =
                D.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: D.De.SESSIONID, opt_in_name: t, opt_in_only: e },
              r = yield s().get(a, { params: o, withCredentials: !0 });
            return (
              null === (n = null == r ? void 0 : r.data) || void 0 === n
                ? void 0
                : n.data
            )
              ? this.UpdateRegAndTrackInStore(t, r.data.data)
              : null === (i = null == r ? void 0 : r.data) || void 0 === i
              ? void 0
              : i.data;
          });
        }
        FetchPendingReviewOptInRegistrationn(t) {
          var e, n;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a =
                D.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              i = { sessionid: D.De.SESSIONID, opt_in_name: t },
              o = yield s().get(a, { params: i, withCredentials: !0 });
            return (
              null === (e = null == o ? void 0 : o.data) || void 0 === e
                ? void 0
                : e.data
            )
              ? this.UpdateRegAndTrackInStore(t, o.data.data)
              : null === (n = null == o ? void 0 : o.data) || void 0 === n
              ? void 0
              : n.data;
          });
        }
        LoadOptInRegistration(t, e, n) {
          var i, o;
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (this.GetRegistration(e, t)) return !0;
            const a =
              null === (i = this.m_mapRequestedAppIDs.get(t)) || void 0 === i
                ? void 0
                : i.get(e);
            if (a) return a;
            try {
              const a = D.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                i = { sessionid: D.De.SESSIONID, appid: e, opt_in_name: t },
                r = yield s().get(a, {
                  params: i,
                  withCredentials: !0,
                  cancelToken: null == n ? void 0 : n.token,
                });
              if (
                1 ==
                  (null === (o = null == r ? void 0 : r.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                r.data.optin_registration
              ) {
                if (
                  ("string" == typeof r.data.optin_registration.jsondata &&
                    (r.data.optin_registration.jsondata = JSON.parse(
                      r.data.optin_registration.jsondata,
                    )),
                  this.m_mapRegistrations.has(e))
                )
                  this.m_mapRegistrations
                    .get(e)
                    .set(t, r.data.optin_registration);
                else {
                  const n = new Map();
                  n.set(t, r.data.optin_registration),
                    this.m_mapRegistrations.set(e, n),
                    this.GetLoadCountChange().Dispatch(
                      this.m_mapRegistrations.size,
                    );
                }
                return !0;
              }
              {
                const t = (0, d.l)(r);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    t.strErrorMsg,
                  t,
                );
              }
            } catch (t) {
              const e = (0, d.l)(t);
              console.error(
                "LoadOptInRegistration : failed with " + e.strErrorMsg,
                e,
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(t, e, n, i) {
          var o, r;
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (0 == e.length || 0 == t.length) return !1;
            let a = null;
            const c = new Promise((t, e) => {
              a = t;
            });
            (t = l.kp(t).sort()),
              (e = l.kp(e).sort()),
              t.forEach((t) => {
                this.m_mapRequestedAppIDs.has(t) ||
                  this.m_mapRequestedAppIDs.set(t, new Map());
              });
            let u = new Array();
            if (
              (e.forEach((e) => {
                t.some(
                  (t) =>
                    !this.BHasOptInRegistration(e, t) &&
                    !this.GetOptInRegistrationPromise(e, t),
                ) &&
                  (u.push(e),
                  t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, c)));
              }),
              0 == u.length)
            )
              return !0;
            const p =
              D.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let g = null;
            try {
              for (; u.length > 0; ) {
                let e = 0;
                const a = [];
                for (; u.length > 0 && e < 5; ) {
                  const i = u.splice(0, 50),
                    o = {
                      rgOptInNames: t.join(","),
                      rgAppIDs: i.join(","),
                      origin: self.origin,
                    };
                  a.push(
                    s().get(p, {
                      params: o,
                      withCredentials: !0,
                      cancelToken: null == n ? void 0 : n.token,
                    }),
                  ),
                    (e += 1);
                }
                const c = yield Promise.all(a);
                for (const t of c) {
                  if (
                    200 != (null == t ? void 0 : t.status) ||
                    1 !=
                      (null === (o = t.data) || void 0 === o
                        ? void 0
                        : o.success) ||
                    !(null === (r = t.data.optin_registrations) || void 0 === r
                      ? void 0
                      : r.length)
                  ) {
                    g = { response: t };
                    break;
                  }
                  this.InternalAddRegistrations(t.data.optin_registrations, i);
                }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (t) {
              g = t;
            }
            if (null == g) a(!0);
            else {
              const n = (0, d.l)(g);
              console.error(
                "Could not load OptIn for Apps",
                e,
                t,
                n.strErrorMsg,
                n,
              ),
                a(!1);
            }
            return c;
          });
        }
        RegisterAppForOptIn(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const n = {
              opt_in_name: e.startsWith("sale_") ? e : "sale_" + e,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(t, n);
          });
        }
        UpdateOptInRegistration(t, e) {
          var n;
          return (0, a.mG)(this, void 0, void 0, function* () {
            let a = null;
            try {
              const i = new FormData();
              i.append("sessionid", D.De.SESSIONID),
                Object.keys(e).forEach((t) => i.append(t, e[t]));
              const o =
                  D.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  t,
                r = yield s().post(o, i, { withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (n = r.data) || void 0 === n ? void 0 : n.success)
              )
                return null;
              a = (0, d.l)(r);
            } catch (t) {
              a = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistration error " +
                  a.strErrorMsg,
                a,
              ),
              a.strErrorMsg
            );
          });
        }
        UpdateOptInRegistrationJson(t, e, n = !1) {
          var i;
          return (0, a.mG)(this, void 0, void 0, function* () {
            let a = null;
            try {
              const o = new FormData();
              o.append("sessionid", D.De.SESSIONID),
                o.append("appid", "" + t),
                o.append("opt_in_name", e.opt_in_name),
                o.append("jsondata", JSON.stringify(e)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  D.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  t,
                c = yield s().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (i = c.data) || void 0 === i ? void 0 : i.success)
              ) {
                const n = e.opt_in_name.startsWith("sale_")
                    ? e.opt_in_name
                    : "sale_" + e.opt_in_name,
                  a = this.m_mapRegistrations.get(t).get(n);
                a.jsondata = e;
                const i = Object.assign({}, a);
                return (
                  this.m_mapRegistrations.get(t).set(e.opt_in_name, i),
                  this.GetSingleAppRegistrationChange(
                    t,
                    e.opt_in_name,
                  ).Dispatch(i),
                  null
                );
              }
              a = (0, d.l)(c);
            } catch (t) {
              a = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistrationJson error " +
                  a.strErrorMsg,
                a,
              ),
              a.strErrorMsg
            );
          });
        }
        UpdateAppealState(t, e, n) {
          var i;
          return (0, a.mG)(this, void 0, void 0, function* () {
            let a = null;
            try {
              const o = e.jsondata.opt_in_name,
                r = new FormData();
              r.append("sessionid", D.De.SESSIONID),
                r.append("appid", "" + t),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const c =
                  D.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
                l = yield s().post(c, r, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (i = l.data) || void 0 === i ? void 0 : i.success)
              ) {
                const e = Object.assign(
                  {},
                  this.m_mapRegistrations.get(t).get(o),
                );
                return (
                  (e.accountid_appeal = D.L7.accountid),
                  (e.appeal_state = n ? 1 : 2),
                  this.m_mapRegistrations.get(t).set(o, e),
                  this.GetSingleAppRegistrationChange(t, o).Dispatch(e),
                  !0
                );
              }
              a = (0, d.l)(l);
            } catch (t) {
              a = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateAppealState error " + a.strErrorMsg,
                a,
              ),
              !1
            );
          });
        }
        static Get() {
          return (
            v.s_OptInRegs ||
              ((v.s_OptInRegs = new v()),
              (window.COptInRegistrations = v.s_OptInRegs),
              v.s_OptInRegs.Init()),
            v.s_OptInRegs
          );
        }
        InternalAddRegistrations(t, e) {
          const n = new Set();
          t.forEach((t) => {
            if (!Number.isNaN(t.appid)) {
              let a = this.m_mapRegistrations.get(t.appid);
              if (
                (a ||
                  ((a = new Map()), this.m_mapRegistrations.set(t.appid, a)),
                t.jsondata && "string" == typeof t.jsondata)
              ) {
                const e = t.jsondata;
                0 == e.trim().length
                  ? (t.jsondata = {})
                  : (t.jsondata = JSON.parse(e));
              }
              a.set(t.opt_in_name, t), e && e.Increment(), n.add(t.opt_in_name);
            }
          }),
            Array.from(n).forEach((t) => {
              this.GetOptInNameRegistrationsCallbackList(t).Dispatch(
                this.GetAllOptInRegistrations(t),
              );
            });
        }
        Init() {
          let t = JSON.parse(
            JSON.stringify(
              (0, D.kQ)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == D.De.WEB_UNIVERSE &&
              console.log("COptInRegistrations: " + t.length, t));
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].appid &&
            "string" == typeof e[0].opt_in_name
          );
        }
      }
      function _(t, e) {
        var n;
        const a =
          null === (n = t.jsondata) || void 0 === n
            ? void 0
            : n.dynamic_selection;
        try {
          if (a) {
            const t = a
              .filter((t) => t.section_id == e.section_id)
              .map((t) => t.list_selection);
            if (t.length > 0 && t[0]) {
              const n = t[0]
                .filter((t) => t.list_id == e.list_id)
                .map((t) => t.selected_item_id);
              if (n.length > 0) return n[0];
            }
          }
        } catch (e) {
          console.log("error: dynamic section", a, t, e);
        }
        return [];
      }
      function f() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: v.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function k(t, e, n) {
        const [a, i] = r.useState(null),
          s = (0, h.T)("useMultiLoadOptInAppReg");
        return (
          (0, r.useEffect)(() => {
            const a = e.filter(Boolean);
            a.length > 0
              ? v
                  .Get()
                  .LoadMultiOptInRegistration(
                    a.map(() => t),
                    a,
                    s,
                    n,
                  )
                  .then(() => {
                    const e = new Map();
                    a.forEach((n) => {
                      const a = v.Get().GetRegistration(n, t);
                      a && e.set(n, a);
                    }),
                      i(e);
                  })
              : i(new Map());
          }, [t, e, s, n]),
          a
        );
      }
      function I(t) {
        const [e, n] = r.useState(v.Get().GetAllOptInRegistrations(t));
        return (
          (0, m.Qg)(v.Get().GetOptInNameRegistrationsCallbackList(t), n), e
        );
      }
      function E(t) {
        const e = I(t),
          [n, a] = r.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          r.useEffect(() => {
            if ((null == e ? void 0 : e.length) > 0) {
              const t = {
                nAppOptedIn: 0,
                nAppEligible: 0,
                nAppOptedOut: 0,
                nAppIneligible: 0,
              };
              e.forEach((e) => {
                e.restricted || e.pruned
                  ? (t.nAppIneligible += 1)
                  : e.opt_in
                  ? ((t.nAppOptedIn += 1), (t.nAppEligible += 1))
                  : !e.time_opted_in || e.invited
                  ? (t.nAppEligible += 1)
                  : (t.nAppOptedOut += 1);
              }),
                JSON.stringify(t) != JSON.stringify(n) && a(t);
            }
          }, [e, n]),
          n
        );
      }
      function P(t, e) {
        const n = (0, c.useQuery)(
          ["useAllOptInRegistrationByName", t, Boolean(e)],
          () => v.Get().FetchOptInRegistrationForOptIn(t, e),
          { staleTime: 36e5 },
        );
        return n.isLoading ? null : n.data;
      }
      function G(t) {
        const e = (0, c.useQuery)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => v.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: (null == t ? void 0 : t.length) > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function S(t, e) {
        const n = P(t, !1),
          [a, i] = (0, r.useState)(
            null == n ? void 0 : n.find((t) => t.appid == e),
          );
        return (0, m.Qg)(v.Get().GetSingleAppRegistrationChange(e, t), i), a;
      }
      function C(t, e) {
        const [n, a] = (0, r.useState)(
          v.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, m.Qg)(v.Get().GetSingleAppRegistrationChange(t, e), a), n;
      }
      function b(t, e) {
        const [n, a] = (0, r.useState)(
          v.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, m.Qg)(v.Get().GetSingleAppRegistrationChange(t, e), a), n;
      }
      function R() {
        return {
          fnUpdateOptInRegistrationJson: v.Get().UpdateOptInRegistrationJson,
        };
      }
      function y() {
        return { fnUpdateAppealState: v.Get().UpdateAppealState };
      }
      function A() {
        const [t, e] = (0, r.useState)(v.Get().GetLoadCount());
        return (
          (0, m.Qg)(v.Get().GetLoadCountChange(), e), v.Get().GetLoadCount()
        );
      }
      (0, a.gn)(
        [p.a],
        v.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, a.gn)(
          [p.a],
          v.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, a.gn)([p.a], v.prototype, "LoadMultiOptInRegistration", null),
        (0, a.gn)([p.a], v.prototype, "UpdateOptInRegistrationJson", null),
        (0, a.gn)([p.a], v.prototype, "UpdateAppealState", null),
        (0, a.gn)([o.aD], v.prototype, "Init", null);
    },
    7073: (t, e, n) => {
      "use strict";
      n.d(e, {
        EV: () => M,
        Fi: () => R,
        ID: () => b,
        L1: () => L,
        LT: () => I,
        Qy: () => B,
        Su: () => G,
        U8: () => D,
        XM: () => P,
        Xj: () => N,
        _J: () => k,
        b2: () => y,
        co: () => E,
        dE: () => h,
        hd: () => O,
        k1: () => w,
        kk: () => f,
        ls: () => A,
        v6: () => S,
        yI: () => C,
      });
      var a = n(85556),
        i = n(80751),
        s = n.n(i),
        o = n(47427),
        r = n(64936),
        c = n(16649),
        l = n(45492),
        u = n(20417),
        d = n(45284),
        p = n(37563),
        g = n(83999),
        m = n(46984);
      const D = 95,
        h = 10;
      class v {
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackageDiscountsById = new Map()),
            (this.m_mapDiscountCallbackList = new Map()),
            (this.m_mapPackageDiscountsByPackageId = new Map()),
            (this.m_mapPackageCallbackList = new Map()),
            (this.m_mapPackageDiscountsByDiscountEventId = new Map()),
            (this.m_mapDiscountEventCallbackList = new Map()),
            (this.m_allDiscountCallbackList = new l.pB()),
            (this.m_mapMaxDiscountPercentageByPackageId = new Map()),
            (this.m_mapExistingPackageRequests = new Map()),
            "dev" == p.De.WEB_UNIVERSE &&
              (window.g_PackageDiscountStore = this);
        }
        Init() {
          const t = (0, p.kQ)("package_discounts", "application_config");
          ("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              t,
            ),
            this.BIsDiscountPayloadValid(t)
              ? this.InternalAddDiscounts(t)
              : "dev" == p.De.WEB_UNIVERSE &&
                t &&
                console.error("Invalid discount payload");
          const e = (0, p.kQ)("max_discount_percentages", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                e,
              ),
            this.BIsMaxDiscountPayloadValid(e))
          )
            for (let t in e)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(t), e[t]);
          else
            "dev" == p.De.WEB_UNIVERSE &&
              e &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(t, e) {
          var n;
          const a = new Set(),
            i = new Set();
          for (const e of t)
            (null === (n = e.discountEventID) || void 0 === n
              ? void 0
              : n.length) || (e.discountEventID = _(e)),
              this.m_mapPackageDiscountsById.set(e.nDiscountID, e),
              this.GetCallbackListForDiscount(e.nDiscountID).Dispatch(e),
              this.m_mapPackageDiscountsByPackageId.has(e.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  e.packageID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(e.packageID)
                .set(e.nDiscountID, e),
              a.add(e.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                e.discountEventID,
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  e.discountEventID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByDiscountEventId
                .get(e.discountEventID)
                .set(e.nDiscountID, e),
              i.add(e.discountEventID);
          for (const t of null != e ? e : [])
            this.m_mapPackageDiscountsByPackageId.has(t) ||
              this.m_mapPackageDiscountsByPackageId.set(t, new Map()),
              a.add(t);
          a.forEach((t) =>
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t),
            ),
          ),
            i.forEach((t) =>
              this.GetCallbackListForDiscountEvent(t).Dispatch(
                this.GetAllDiscountsForDiscountEvent(t),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(t, e, n) {
          var a, i;
          this.m_mapPackageDiscountsById.delete(t),
            null === (a = this.m_mapPackageDiscountsByPackageId.get(e)) ||
              void 0 === a ||
              a.delete(t),
            null === (i = this.m_mapPackageDiscountsByDiscountEventId.get(n)) ||
              void 0 === i ||
              i.delete(t),
            this.GetCallbackListForDiscount(t).Dispatch(null),
            this.GetCallbackListForPackage(e).Dispatch(
              this.GetAllDiscountsForPackage(e),
            ),
            this.GetCallbackListForDiscountEvent(n).Dispatch(
              this.GetAllDiscountsForDiscountEvent(n),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        BIsDiscountPayloadValid(t) {
          const e = t;
          if (e && Array.isArray(e)) {
            if (0 == e.length) return !0;
            const t = e[0];
            if (
              t.nDiscountID &&
              "number" == typeof t.nDiscountID &&
              t.packageID &&
              "number" == typeof t.packageID
            )
              return !0;
          }
          return !1;
        }
        BIsMaxDiscountPayloadValid(t) {
          const e = t;
          if (e && "object" == typeof e) {
            for (let t in e)
              if (
                isNaN(parseInt(t)) ||
                (null !== e[t] && "number" != typeof e[t])
              )
                return !1;
            return !0;
          }
          return !1;
        }
        LoadPackageDiscounts(t, e, n = 0) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = g.kp(t).sort().join(",");
            return (
              this.m_mapExistingPackageRequests.has(a) ||
                this.m_mapExistingPackageRequests.set(
                  a,
                  this.InternalLoadPackageDiscounts(t, e, n),
                ),
              this.m_mapExistingPackageRequests.get(a)
            );
          });
        }
        InternalLoadPackageDiscounts(t, e, n = 0) {
          var i, o, r, l;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = new Set();
            for (const e of t)
              this.m_mapPackageDiscountsByPackageId.has(e) ||
                0 == e ||
                a.add(e);
            const u = Array.from(a).sort();
            if (0 == u.length) return 1;
            let d = null;
            const g = new Promise((t, e) => {
                d = t;
              }),
              m = (0, p.kQ)("publisherid", "application_config"),
              D =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                m;
            let h = null,
              v = null;
            try {
              const t = [],
                o = new Array();
              for (; u.length > 0; ) {
                const a = u.splice(0, 50);
                o.push(a);
                const i = { packageids: a.join(","), origin: self.origin };
                t.push(
                  s().get(D, {
                    params: i,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                    timeout: n,
                  }),
                );
              }
              const r = yield Promise.all(t),
                c = [];
              for (const t of r) {
                if (
                  ((v = o.unshift()),
                  200 != (null == t ? void 0 : t.status) ||
                    1 !=
                      (null === (i = t.data) || void 0 === i
                        ? void 0
                        : i.success) ||
                    !t.data.discounts)
                ) {
                  h = { response: t };
                  break;
                }
                t.data.discounts.forEach((t) => c.push(t));
              }
              null == h && this.InternalAddDiscounts(c, Array.from(a));
            } catch (t) {
              h = t;
            }
            if (null == h) d(1);
            else {
              const t = (0, c.l)(h);
              console.error(
                "Could not load Discounts for packages",
                v,
                t.strErrorMsg,
                t,
              ),
                d(
                  null !==
                    (l =
                      null ===
                        (r =
                          null === (o = null == h ? void 0 : h.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === r
                        ? void 0
                        : r.success) && void 0 !== l
                    ? l
                    : 2,
                );
            }
            return g;
          });
        }
        SaveDiscountToServer(t, e) {
          var n, i, o, r;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a =
                p.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                t.packageID,
              l = new FormData();
            l.append("sessionid", p.De.SESSIONID),
              t.nDiscountID && l.append("id", t.nDiscountID.toString()),
              l.append("name", t.strDiscountName),
              l.append("description", t.strDiscountDescription),
              t.discountEventID &&
                !f(t.discountEventID) &&
                l.append("type", t.discountEventID),
              l.append("percent", t.nDiscountPct.toString()),
              l.append(
                "start_date",
                new Date(1e3 * t.rtStartDate).toISOString(),
              ),
              l.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
            let u = null;
            try {
              const o = yield s().post(a, l, {
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                ((o.data.msg =
                  null !== (n = o.data.msg) && void 0 !== n
                    ? n
                    : o.data.message),
                200 == (null == o ? void 0 : o.status) &&
                  1 ==
                    (null === (i = o.data) || void 0 === i
                      ? void 0
                      : i.success) &&
                  o.data.discountid)
              )
                return (
                  (t.bChangedLocally = !1),
                  (t.nDiscountID = o.data.discountid),
                  (t.nDiscountPct = o.data.percentage),
                  this.InternalAddDiscounts([t]),
                  o.data
                );
              u = { response: o };
            } catch (t) {
              u = t;
            }
            const d = (0, c.l)(u);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                d.strErrorMsg,
                d,
              ),
              null !==
                (r =
                  null === (o = null == u ? void 0 : u.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== r
                ? r
                : { success: 2 }
            );
          });
        }
        DeleteDiscountOnServer(t, e, n, i) {
          var o, r, l;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a =
                p.De.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
              u = new FormData();
            u.append("sessionid", p.De.SESSIONID),
              u.append("discountid", t.toString());
            let d = null;
            try {
              const r = yield s().post(a, u, {
                withCredentials: !0,
                cancelToken: null == i ? void 0 : i.token,
              });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (o = r.data) || void 0 === o ? void 0 : o.success)
              )
                return this.InternalDeleteDiscount(t, e, n), r.data;
              d = { response: r };
            } catch (t) {
              d = t;
            }
            const g = (0, c.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                g.strErrorMsg,
                g,
              ),
              null !==
                (l =
                  null === (r = null == d ? void 0 : d.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== l
                ? l
                : { success: 2 }
            );
          });
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new l.pB()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new l.pB()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new l.pB()),
            this.m_mapDiscountEventCallbackList.get(t)
          );
        }
        GetGlobalCallbackList() {
          return this.m_allDiscountCallbackList;
        }
        GetDiscountByID(t) {
          return this.m_mapPackageDiscountsById.get(t);
        }
        GetAllDiscountsForPackage(t) {
          var e, n;
          return this.m_mapPackageDiscountsByPackageId.has(t)
            ? Array.from(
                null !==
                  (n =
                    null ===
                      (e = this.m_mapPackageDiscountsByPackageId.get(t)) ||
                    void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== n
                  ? n
                  : [],
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(t) {
          var e, n;
          return Array.from(
            null !==
              (n =
                null ===
                  (e = this.m_mapPackageDiscountsByDiscountEventId.get(t)) ||
                void 0 === e
                  ? void 0
                  : e.values()) && void 0 !== n
              ? n
              : [],
          );
        }
        GetMaxDiscountPercentage(t) {
          var e;
          const n = D;
          return null !==
            (e = this.m_mapMaxDiscountPercentageByPackageId.get(t)) &&
            void 0 !== e
            ? e
            : n;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function _(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, d.JD)(
          t.strDiscountName,
        )}`;
      }
      function f(t) {
        return t.startsWith("custom-event-");
      }
      function k(t) {
        return v.Get().GetDiscountByID(t);
      }
      function I(t) {
        return v.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function E(t) {
        return v.Get().GetAllDiscountsForPackage(t);
      }
      function P(t) {
        return v.Get().GetCallbackListForPackage(t);
      }
      function G() {
        return v.Get().GetAllDiscountsForAllPackages();
      }
      function S() {
        return v.Get().GetGlobalCallbackList();
      }
      function C() {
        return o.useCallback(
          (t, e, n) => v.Get().LoadPackageDiscounts(t, e, n),
          [],
        );
      }
      function b() {
        const t = (t) => v.Get().SaveDiscountToServer(t),
          e = (t, e, n) => v.Get().DeleteDiscountOnServer(t, e, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function R(t) {
        return new Map(
          Array.from(t.map((t) => [t, v.Get().GetDiscountByID(t)])),
        );
      }
      function y(t) {
        const e = (0, r.zD)(),
          [n, a] = o.useState(v.Get().GetAllDiscountsForPackage(t));
        return (
          (0, u.Qg)(v.Get().GetCallbackListForPackage(t), a),
          o.useMemo(() => {
            let t = null;
            if (null == n) return { deepestDiscount: t, bLoading: !0 };
            if ((null == n ? void 0 : n.length) > 0)
              for (const a of n)
                a.rtEndDate > e ||
                  a.nDiscountPct <= 0 ||
                  ((null == t ||
                    a.nDiscountPct > t.nDiscountPct ||
                    (a.nDiscountPct == t.nDiscountPct &&
                      a.rtEndDate > t.rtEndDate)) &&
                    (t = a));
            return { deepestDiscount: t, bLoading: !1 };
          }, [t, e, n])
        );
      }
      function A(t) {
        const e = (0, r.zD)();
        if (!t) return null;
        let n = null;
        return (
          t.forEach((t) => {
            const a = v.Get().GetAllDiscountsForPackage(t);
            if ((null == a ? void 0 : a.length) > 0)
              for (const t of a)
                t.rtEndDate > e ||
                  t.nDiscountPct <= 0 ||
                  ((null == n ||
                    t.nDiscountPct > n.nDiscountPct ||
                    (t.nDiscountPct == n.nDiscountPct &&
                      t.rtEndDate > n.rtEndDate)) &&
                    (n = t));
          }),
          n
        );
      }
      function L(t, e, n) {
        const [a, i] = (0, o.useState)(),
          [s, r] = (0, o.useState)([]);
        return (
          (0, o.useEffect)(() => {
            if (e < n && (null == t ? void 0 : t.length) > 0) {
              let a = new Array(),
                s = new Array(),
                o = new Array();
              for (let t = e; t < n; t += m._H.PerDay) a.push(t), s.push(!1);
              t.forEach((t) => {
                const i = v.Get().GetAllDiscountsForPackage(t);
                if ((null == i ? void 0 : i.length) > 0)
                  for (const t of i)
                    t.rtStartDate > n ||
                      t.rtEndDate < e ||
                      (o.push(t),
                      a.forEach((e, n) => {
                        e < t.rtEndDate &&
                          t.rtStartDate < e + m._H.PerDay &&
                          (s[n] = !0);
                      }));
              }),
                r(o),
                i(s.filter((t) => !0 === t).length);
            } else i(0);
          }, [t, e, n]),
          { nDaysInDiscount: a, rgDiscountWithOverlap: s }
        );
      }
      function w(t) {
        const e = (0, r.zD)(),
          [n, a] = o.useState(v.Get().GetAllDiscountsForAllPackages());
        return (
          (0, u.Qg)(v.Get().GetGlobalCallbackList(), a),
          o.useMemo(() => {
            var a;
            let i = null;
            if (null == n) return { mostRecentDiscount: i, bLoading: !0 };
            for (const n of t) {
              const t =
                null !== (a = v.Get().GetAllDiscountsForPackage(n)) &&
                void 0 !== a
                  ? a
                  : [];
              for (const n of t)
                n.rtStartDate < e &&
                  (!i || i.rtEndDate < n.rtEndDate) &&
                  (i = n);
            }
            return { mostRecentDiscount: i, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function O(t) {
        const [e, n] = o.useState(v.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.Qg)(v.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function B(t) {
        return v.Get().GetMaxDiscountPercentage(t);
      }
      function M(t) {
        return t.some(
          (t) => t.nDiscountPct > v.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function N(t) {
        return v.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    95518: (t, e, n) => {
      "use strict";
      n.d(e, {
        B6: () => A,
        E5: () => T,
        E_: () => N,
        Eh: () => k,
        HU: () => B,
        JW: () => F,
        LX: () => I,
        TB: () => O,
        _9: () => L,
        dy: () => V,
        ho: () => H,
        hr: () => R,
        k: () => x,
        pl: () => y,
        s$: () => w,
        yn: () => M,
        z$: () => j,
      });
      var a = n(81033),
        i = n(10095),
        s = n(7073),
        o = n(98061),
        r = n(87813),
        c = n(37047),
        l = n(47427),
        u = n(64936),
        d = n(15690),
        p = n(45492),
        g = n(20417),
        m = n(45284),
        D = n(46984),
        h = n(37563),
        v = n(70044);
      function _(t, e) {
        var n, a;
        return (
          !!t == !!e &&
          (null == t ? void 0 : t.packageID) ==
            (null == e ? void 0 : e.packageID) &&
          (null == t ? void 0 : t.discountEventID) ==
            (null == e ? void 0 : e.discountEventID) &&
          (null == t ? void 0 : t.eState) == (null == e ? void 0 : e.eState) &&
          (null === (n = null == t ? void 0 : t.rgConflictDetails) ||
          void 0 === n
            ? void 0
            : n.length) ==
            (null === (a = null == e ? void 0 : e.rgConflictDetails) ||
            void 0 === a
              ? void 0
              : a.length) &&
          (null == t ? void 0 : t.optInReg) ==
            (null == e ? void 0 : e.optInReg) &&
          f(null == t ? void 0 : t.discount, null == e ? void 0 : e.discount) &&
          (null == t ? void 0 : t.nBaseAppID) ==
            (null == e ? void 0 : e.nBaseAppID) &&
          (null == t ? void 0 : t.bChangedLocally) ==
            (null == e ? void 0 : e.bChangedLocally)
        );
      }
      function f(t, e) {
        var n;
        return (
          (!e &&
            0 ==
              (null !== (n = null == t ? void 0 : t.nDiscountPct) &&
              void 0 !== n
                ? n
                : 0)) ||
          (!!e && e.nDiscountPct == (null == t ? void 0 : t.nDiscountPct))
        );
      }
      const k = 30,
        I = k * D._H.PerDay - 1.5 * D._H.PerHour,
        E = 10 * D._H.PerMinute;
      class P {
        static Get() {
          return (
            P.s_Singleton || ((P.s_Singleton = new P()), P.s_Singleton.Init()),
            P.s_Singleton
          );
        }
        static IsInitialized() {
          return !!P.s_Singleton;
        }
        constructor() {
          (this.m_mapPackageStateForDiscountEvents = new Map()),
            (this.m_mapLocalPackageDiscountOverrides = new Map()),
            (this.m_mapDiscountPackageCallbackList = new Map()),
            (this.m_mapDiscountGridCellCallbackList = new Map()),
            (this.m_mapDiscountEventColumnCallbackList = new Map()),
            (this.m_localPackageDiscountOverrideCallbackList = new p.pB()),
            "dev" == h.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, o.MQ)())
            P.Get().ComputePackageState(t),
              (0, s.XM)(t).Register(() => {
                P.Get().ComputePackageState(t);
              });
          (0, v.ix)().Register(() => {
            for (const t of (0, o.MQ)()) P.Get().ComputePackageState(t, !0);
          }),
            P.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, n) {
          var a;
          const i =
            null === (a = P.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === a
              ? void 0
              : a.get(e);
          if (1 != (null == i ? void 0 : i.eState))
            return (
              console.error(
                "Cannot change discount in current state:",
                i.eState,
              ),
              null
            );
          const s = i.discount,
            o = (0, v.f0)(e),
            r = {
              nDiscountID: null == s ? void 0 : s.nDiscountID,
              packageID: t,
              nDiscountPct: n,
              strDiscountName: o.name,
              strDiscountDescription: o.description,
              rtStartDate: o.start_date,
              rtEndDate: o.end_date,
              discountEventID: o.id,
              bChangedLocally: !0,
            };
          return f(r, s)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
                this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(t).set(e, r),
              this.ComputePackageState(t),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              r);
        }
        GetHighestPackageDiscount(t) {
          let e = this.m_mapPackageStateForDiscountEvents.get(t);
          if (!e) return 0;
          let n = 0;
          return (
            e.forEach((t, e) => {
              var a;
              1 == t.eState &&
                (n = Math.max(
                  n,
                  (null === (a = t.discount) || void 0 === a
                    ? void 0
                    : a.nDiscountPct) || 0,
                ));
            }),
            n
          );
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                f(e, e.nDiscountID && (0, s._J)(e.nDiscountID)) || t.push(e);
              }),
            ),
            t.sort(b),
            t
          );
        }
        DiscardAllLocalPackageDiscountOverrides(t) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const e of t) this.ComputePackageState(e);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(t, e) {
          var n;
          null === (n = this.m_mapLocalPackageDiscountOverrides.get(t)) ||
            void 0 === n ||
            n.delete(e),
            this.ComputePackageState(t),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides(),
            );
        }
        OptInRegistrationUpdatedForApp(t, e) {
          const n = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((t) => t.get(e))
            .filter((e) => (null == e ? void 0 : e.nBaseAppID) == t)
            .map((t) => t.packageID);
          null == n || n.forEach((t) => this.ComputePackageState(t));
        }
        GetPackageDiscountsIncludingOverrides(t) {
          var e;
          const n = (0, u.kl)() - I,
            a = (0, s.co)(t);
          if (!a) return null;
          const i = new Map(
            a.filter((t) => t.rtEndDate > n).map((t) => [t.discountEventID, t]),
          );
          return (
            null === (e = this.m_mapLocalPackageDiscountOverrides.get(t)) ||
              void 0 === e ||
              e.forEach((t, e) => {
                f(t, i.get(e)) || i.set(e, t);
              }),
            i
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const n = this.m_mapDiscountGridCellCallbackList.get(t);
          return n.has(e) || n.set(e, new p.pB()), n.get(e);
        }
        GetDiscountPackageCallbackList(t) {
          if (!t) return null;
          let e = this.m_mapDiscountPackageCallbackList.get(t);
          return (
            e ||
              ((e = new p.pB()),
              this.m_mapDiscountPackageCallbackList.set(t, e)),
            e
          );
        }
        GetDiscountEventColumnCallbackList(t) {
          return t
            ? (this.m_mapDiscountEventColumnCallbackList.has(t) ||
                this.m_mapDiscountEventColumnCallbackList.set(t, new p.pB()),
              this.m_mapDiscountEventColumnCallbackList.get(t))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(t) {
          const e = [];
          return (
            P.Get().m_mapPackageStateForDiscountEvents.forEach((n, a) =>
              e.push(n.get(t)),
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          var n, s;
          const o = d.Z.Get().GetPackage(t);
          if (!o) return;
          const c = (0, v.wQ)(),
            l = (0, r.R1)(o),
            u = l.nBaseAppID;
          let p = u && i.qh.Get().GetOptInRegistrationAndEligibilityForApp(u);
          u ||
            p ||
            (p = i.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                o.GetIncludedAppIDs(),
              ));
          const g = this.GetPackageDiscountsIncludingOverrides(t),
            m = !g,
            D = m
              ? null
              : Array.from(g.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const h = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const i of c) {
            if (e && h.has(i.id)) continue;
            const r = { packageID: t, discountEventID: i.id, nBaseAppID: u };
            if (
              ((r.discount = null == g ? void 0 : g.get(i.id)),
              (r.bChangedLocally = !!(null === (n = r.discount) || void 0 === n
                ? void 0
                : n.bChangedLocally)),
              m)
            )
              r.eState = 0;
            else if (
              (null === (s = r.discount) || void 0 === s
                ? void 0
                : s.nDiscountPct) > 0
            ) {
              r.eState = 1;
              const t =
                i.opt_in_name && (null == p ? void 0 : p.get(i.opt_in_name));
              t && (r.optInReg = t);
            } else {
              if (((r.eState = 1), C(i, o))) r.eState = 10;
              else if (i.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = S(
                  i.opt_in_name,
                  p,
                  o,
                  l,
                  i,
                );
                (r.eState = t), (r.optInReg = e);
              }
              if (10 != r.eState && 4 != r.eState && 5 != r.eState) {
                const e = G(t, i, D);
                1 != e.ePackageDiscountState &&
                  ((r.eState = e.ePackageDiscountState),
                  (r.rgConflictDetails = e.rgConflictingDiscounts.map((t) => {
                    var e, n;
                    return null !==
                      (n =
                        null === (e = (0, a.fH)(t.discountEventID)) ||
                        void 0 === e
                          ? void 0
                          : e.name) && void 0 !== n
                      ? n
                      : t.strDiscountName;
                  })));
              }
            }
            _(r, h.get(i.id)) ||
              (h.set(i.id, r),
              this.GetDiscountPackageCallbackList(t).Dispatch(),
              this.GetDiscountGridCellCallbackList(t, i.id).Dispatch(r),
              this.GetDiscountEventColumnCallbackList(i.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(i.id),
              ));
          }
        }
        GetAvailableDiscountEventsInRange(t, e, n) {
          const a = this.m_mapPackageStateForDiscountEvents.get(t),
            i = new Set([1, 11, 2, 3]);
          return (0, v.wQ)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= n &&
                i.has(a.get(t.id).eState),
            )
            .map((t) => t.id);
        }
        GetFutureDiscountRanges(t) {
          const e = d.Z.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const i = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            s = (0, u.kl)(),
            o = Math.max(s, e.GetReleaseDateRTime() + I, (0, v.QM)(t) + I),
            r = [],
            l = new Set();
          let p = o;
          for (let e = 0; e < i.length; e++) {
            const n = i[e];
            if (0 == n.nDiscountPct) continue;
            if (n.rtStartDate < o) continue;
            const s = (0, a.fH)(n.discountEventID);
            let u = n.rtStartDate - I;
            const d = "unique" == (null == s ? void 0 : s.collision_type);
            if (d && ((u = n.rtStartDate + E), e + 1 < i.length)) {
              const t = i[e + 1],
                n = (0, v.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (u = Math.min(u, t.rtStartDate - I));
            }
            if (p + D._H.PerDay < u) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: p,
                rtEndDate: u,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  p,
                  u,
                ),
              };
              r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
            }
            const g = {
              bIsAvailable: !1,
              rtStartDate: n.rtStartDate,
              rtEndDate: n.rtEndDate,
              discount: n,
              rgDiscountEventIDs: [n.discountEventID],
            };
            if (
              (r.push(g),
              l.add(n.discountEventID),
              (p = n.rtEndDate + I),
              d && ((p = n.rtEndDate - E), e - 1 >= 0))
            ) {
              const t = i[e - 1],
                n = (0, v.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (p = Math.max(p, t.rtEndDate + I));
            }
            const m = (0, c._)(p);
            m - p <= 2 * D._H.PerHour && (p = m);
          }
          const g = (0, c._)(s + D._H.PerYear / 2);
          if (p + D._H.PerDay < g) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: p,
              rtEndDate: g,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                p,
                g,
              ),
            };
            r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
          }
          const m = (0, v.wQ)().filter(
            (e) =>
              "unique" == e.collision_type &&
              !l.has(e.id) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState,
          );
          for (const t of m)
            for (let e = 0; e < r.length; e++)
              if (
                r[e].rtStartDate <= t.start_date &&
                (e == r.length - 1 || t.start_date < r[e + 1].rtStartDate)
              ) {
                const n = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: t.start_date,
                  rtEndDate: t.end_date,
                  rgDiscountEventIDs: [t.id],
                };
                r.splice(e + 1, 0, n);
                break;
              }
          return r;
        }
      }
      function G(t, e, n) {
        let i = 1;
        const s = [];
        let o = !1;
        const r = d.Z.Get().GetPackage(t);
        if ((null == r ? void 0 : r.GetReleaseDateRTime()) > e.start_date - I)
          return (
            (i = 6),
            {
              ePackageDiscountState: i,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        if ((0, v.QM)(t) > e.start_date - I)
          return (
            (i = 7),
            {
              ePackageDiscountState: i,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        for (const t of n) {
          if (e.id == t.discountEventID) continue;
          const n = (0, a.fH)(t.discountEventID),
            r =
              "unique" == e.collision_type ||
              "unique" == (null == n ? void 0 : n.collision_type),
            c = r ? e.start_date + E : e.start_date - I,
            l = r ? e.end_date - E : e.end_date + I;
          if (t.rtEndDate > c && l > t.rtStartDate) {
            if (((o = o || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            s.push(t), (i = r ? 9 : 8);
          }
        }
        return {
          ePackageDiscountState: i,
          rgConflictingDiscounts: s,
          bChangedLocally: o,
        };
      }
      function S(t, e, n, a, s) {
        let o,
          r = 5;
        if (e)
          (o = e.get(t)),
            !o || o.restricted || o.pruned
              ? ((r = 4), (o = { restricted: !0 }))
              : (r = o.opt_in ? 1 : o.invited || !o.time_opted_in ? 2 : 3);
        else if (!a.nBaseAppID) {
          const t = n
            .GetIncludedAppIDs()
            .map((t) => {
              var e;
              return null ===
                (e = i.qh.Get().GetOptInRegistrationAndEligibilityForApp(t)) ||
                void 0 === e
                ? void 0
                : e.get(s.opt_in_name);
            })
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (r = 1)
            : t.some((t) => !t.restricted && !t.pruned) && (r = 11);
        }
        return { ePackageDiscountState: r, optInRegistration: o };
      }
      function C(t, e) {
        var n, a, i;
        if ((null === (n = t.appids) || void 0 === n ? void 0 : n.length) > 0) {
          if (
            null === (a = null == e ? void 0 : e.GetIncludedAppIDs()) ||
            void 0 === a
              ? void 0
              : a.length
          ) {
            const n = new Set(t.appids);
            for (const t of e.GetIncludedAppIDs()) {
              if (n.has(t)) return !1;
              const e =
                null === (i = d.Z.Get().GetApp(t)) || void 0 === i
                  ? void 0
                  : i.GetParentAppID();
              if (e && n.has(e)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function b(t, e) {
        var n, a;
        if (t.packageID != e.packageID) {
          const i =
              null === (n = d.Z.Get().GetPackage(t.packageID)) || void 0 === n
                ? void 0
                : n.GetName(),
            s =
              null === (a = d.Z.Get().GetPackage(e.packageID)) || void 0 === a
                ? void 0
                : a.GetName();
          return (0, m.eT)(i, s);
        }
        {
          const n = 0 == t.nDiscountPct;
          return n != (0 == e.nDiscountPct)
            ? n
              ? -1
              : 1
            : t.rtStartDate - e.rtStartDate;
        }
      }
      function R() {
        return l.useCallback(() => {
          P.Get();
        }, []);
      }
      function y() {
        const [t, e] = l.useState(P.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.Qg)(P.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function A() {
        return l.useCallback(() => {
          var t;
          return (
            (null === (t = P.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === t
              ? void 0
              : t.length) > 0
          );
        }, []);
      }
      function L() {
        return l.useCallback(
          (t) => P.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function w() {
        return l.useCallback(
          (t, e) => P.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function O() {
        return l.useCallback(
          (t, e) => P.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function B(t, e) {
        var n, a, i;
        const s =
          null === (n = P.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
          void 0 === n
            ? void 0
            : n.get(e);
        return 1 == (null == s ? void 0 : s.eState)
          ? null !==
              (i =
                null === (a = null == s ? void 0 : s.discount) || void 0 === a
                  ? void 0
                  : a.nDiscountPct) && void 0 !== i
            ? i
            : 0
          : null;
      }
      function M(t, e) {
        const [n, a] = l.useState(() => {
          var n;
          return null ===
            (n = P.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === n
            ? void 0
            : n.get(e);
        });
        (0, g.Qg)(P.Get().GetDiscountGridCellCallbackList(t, e), a);
        return {
          packageState: n,
          fnSetDiscountPct: l.useCallback(
            (n) => {
              P.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e],
          ),
        };
      }
      function N() {
        return l.useCallback((t, e, n) => {
          const a = [];
          for (const i of n) {
            const n = P.Get().OverridePackageDiscountPct(i, e, t);
            n && a.push(n);
          }
          return a;
        }, []);
      }
      function F(t) {
        const e = T(t);
        return l.useMemo(
          () => ({
            nAlreadySet: e.alreadySet.size,
            nAvailable: e.available.size,
            nConflicts: e.conflicts.size,
            nNeedRegistration: e.needRegistration.size,
            nIneligibile: e.ineligibile.size,
          }),
          [e],
        );
      }
      function T(t) {
        const [e, n] = l.useState(() => U(t)),
          a = l.useCallback(() => {
            n(U(t));
          }, [t]);
        return (
          l.useEffect(a, [t, a]),
          (0, g.Qg)(P.Get().GetDiscountEventColumnCallbackList(t), a),
          e
        );
      }
      function U(t) {
        var e, n;
        const a = P.Get().GetAllPackageStatesForDiscountEvent(t),
          i = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of a)
          switch (null == t ? void 0 : t.eState) {
            case 0:
              break;
            case 1:
              (null !==
                (n =
                  null === (e = t.discount) || void 0 === e
                    ? void 0
                    : e.nDiscountPct) && void 0 !== n
                ? n
                : 0) > 0
                ? i.alreadySet.add(t.packageID)
                : i.available.add(t.packageID);
              break;
            case 6:
            case 7:
            case 8:
            case 9:
              i.conflicts.add(t.packageID);
              break;
            case 2:
            case 3:
              i.needRegistration.add(t.packageID);
              break;
            case 4:
            case 5:
            case 10:
              i.ineligibile.add(t.packageID);
          }
        return i;
      }
      function V(t) {
        return (
          !!(0, s.LT)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !P.IsInitialized() ||
            !P.Get()
              .GetAllPackageStatesForDiscountEvent(t)
              .some((t) => {
                var e, n;
                return (
                  (null !==
                    (n =
                      null === (e = t.discount) || void 0 === e
                        ? void 0
                        : e.nDiscountPct) && void 0 !== n
                    ? n
                    : 0) > 0
                );
              })
          )
        );
      }
      function x(t) {
        if ((0, s.kk)(t)) return !0;
        const e = (0, a.fH)(t);
        if (!(null == e ? void 0 : e.opt_in_name)) return !0;
        const n = i.qh.Get().GetAllOptInRegistrations(e.opt_in_name);
        return (
          !!(null == n ? void 0 : n.length) &&
          n.some((t) => !t.restricted && !t.pruned)
        );
      }
      function j(t) {
        const e = (function () {
            const [t, e] = l.useState(P.IsInitialized());
            return (0, g.Qg)(P.s_initializationCallbackList, e), t;
          })(),
          [n, a] = l.useState(e ? P.Get().GetFutureDiscountRanges(t) : []),
          i = l.useCallback(
            () => a(e ? P.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.Qg)(
            e && P.Get().GetLocalPackageDiscountOverrideCallbackList(),
            i,
          ),
          (0, g.Qg)(e && (0, s.XM)(t), i),
          l.useEffect(i, [t, e, i]),
          n
        );
      }
      function H(t) {
        let [e, n] = l.useState(() => P.Get().GetHighestPackageDiscount(t)),
          a = l.useCallback(() => {
            n(P.Get().GetHighestPackageDiscount(t));
          }, [t, n]);
        return (0, g.Qg)(P.Get().GetDiscountPackageCallbackList(t), a), e;
      }
      P.s_initializationCallbackList = new p.pB();
    },
    70044: (t, e, n) => {
      "use strict";
      n.d(e, {
        $f: () => f,
        D_: () => P,
        P6: () => E,
        QM: () => g,
        Zq: () => k,
        f0: () => D,
        im: () => v,
        ix: () => h,
        wQ: () => m,
        x9: () => _,
        y4: () => I,
      });
      var a = n(47427),
        i = n(64936),
        s = n(45492),
        o = n(20417),
        r = n(37563),
        c = n(81033),
        l = n(7073),
        u = n(95518);
      const d = "related-discount-view";
      class p {
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEventsByID = new Map()),
            (this.m_discountEventsCallbackList = new s.pB()),
            (this.m_mapLastTimeRaisedPrices = new Map()),
            (this.m_strSelectedDiscountEventID = null),
            (this.m_bIncludeWeeklongEvents = !1),
            (this.m_bIncludeCustomEvents = !0),
            (this.m_bIncludeIneligibleEvents = !1),
            (this.m_bIncludeConflictsInSingleEventView = !0),
            (this.m_bEditingDailyDealDiscount = !1),
            (this.m_eRelatedDiscountView = "deepest-past"),
            (this.m_RelatedDiscountViewCallbackList = new s.pB()),
            (this.m_gridEventSelectionParametersCallbackList = new s.pB()),
            (this.m_setVisibleDiscountEventIDs = new Set()),
            (this.m_visibleDiscountEventIDsCallbackList = new s.pB()),
            "dev" == r.De.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          var t;
          const e = (0, r.kQ)("price_increase_times", "application_config");
          if (
            (("dev" != r.De.WEB_UNIVERSE && "beta" != r.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", e),
            this.BIsPriceIncreasePayloadValid(e))
          )
            for (let t in e)
              this.m_mapLastTimeRaisedPrices.set(Number(t), e[t]);
          else
            "dev" == r.De.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            null !== (t = window.localStorage.getItem(d)) && void 0 !== t
              ? t
              : "deepest-past"),
            this.UpdateDiscountEventsForGrid(),
            (0, c.U8)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, l.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, c.o)(),
            e = (0, l.Su)(),
            n = new Set(t.map((t) => t.id)),
            a = [],
            s = (0, i.kl)();
          for (const t of e)
            t.rtEndDate > s &&
              (n.has(t.discountEventID) ||
                (a.push({
                  id: t.discountEventID,
                  name: t.strDiscountName,
                  start_date: t.rtStartDate,
                  end_date: t.rtEndDate,
                  description: t.strDiscountDescription,
                }),
                n.add(t.discountEventID)));
          (this.m_rgDiscountEvents &&
            n.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some((t) => !n.has(t.id))) ||
            ((this.m_rgDiscountEvents = a.concat(t)),
            this.m_rgDiscountEvents.sort((t, e) =>
              t.start_date == e.start_date
                ? t.end_date - e.end_date
                : t.start_date - e.start_date,
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((t) => [t.id, t]),
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents,
            ));
        }
        UpdateVisibleDiscountEventIDs() {
          this.SetEventSelectionParametersFromURL(),
            (this.m_setVisibleDiscountEventIDs = new Set());
          for (const t of this.m_rgDiscountEvents) {
            let e = null == this.m_strSelectedDiscountEventID;
            e && !this.m_bIncludeCustomEvents && (0, l.kk)(t.id) && (e = !1),
              e &&
                !this.m_bIncludeWeeklongEvents &&
                t.id.startsWith("weeklongdeal_") &&
                !(0, u.dy)(t.id) &&
                (e = !1),
              !e ||
                this.m_bIncludeIneligibleEvents ||
                (0, u.k)(t.id) ||
                (e = !1),
              this.m_strSelectedDiscountEventID == t.id && (e = !0),
              e && this.m_setVisibleDiscountEventIDs.add(t.id);
          }
          this.m_visibleDiscountEventIDsCallbackList.Dispatch(
            this.m_setVisibleDiscountEventIDs,
          );
        }
        BIsPriceIncreasePayloadValid(t) {
          const e = t;
          if (e && "object" == typeof e) {
            for (let t in e)
              if (isNaN(parseInt(t)) || "number" != typeof e[t]) return !1;
            return !0;
          }
          return !1;
        }
        SetEventSelectionParametersFromURL() {
          const t = new URLSearchParams(window.location.search);
          if (t.has("de")) {
            const e = decodeURIComponent(t.get("de"));
            this.m_mapDiscountEventsByID.has(e) &&
              (this.m_strSelectedDiscountEventID = e);
          }
          if (t.has("wd")) {
            const e = t.get("wd");
            this.m_bIncludeWeeklongEvents = "0" != e;
          }
          if (t.has("cd")) {
            const e = t.get("cd");
            this.m_bIncludeCustomEvents = "0" != e;
          }
          if (t.has("cf")) {
            const e = t.get("cf");
            this.m_bIncludeConflictsInSingleEventView = "0" != e;
          }
          if (t.has("dd")) {
            const e = t.get("dd");
            this.m_bEditingDailyDealDiscount = "0" != e;
          }
        }
        HandleEventSelectionChangeAndNotifyListeners() {
          const t = new URL(window.location.href);
          this.m_strSelectedDiscountEventID
            ? t.searchParams.set(
                "de",
                encodeURIComponent(this.m_strSelectedDiscountEventID),
              )
            : t.searchParams.delete("de"),
            this.m_bIncludeWeeklongEvents
              ? t.searchParams.set("wd", "1")
              : t.searchParams.delete("wd"),
            this.m_bIncludeCustomEvents
              ? t.searchParams.delete("cd")
              : t.searchParams.set("cd", "0"),
            this.m_bIncludeConflictsInSingleEventView
              ? t.searchParams.delete("cf")
              : t.searchParams.set("cf", "0"),
            this.m_bEditingDailyDealDiscount &&
              ((this.m_bEditingDailyDealDiscount = !1),
              t.searchParams.delete("dd")),
            window.history.replaceState({}, "", t.toString()),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_gridEventSelectionParametersCallbackList.Dispatch(
              this.GetEventSelectionParameters(),
            );
        }
        GetEventSelectionParameters() {
          return {
            bSingleDiscountEventView: null != this.m_strSelectedDiscountEventID,
            strSelectedEvent: this.m_strSelectedDiscountEventID,
            bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
            fnSelectEvent: (t) => {
              (this.m_strSelectedDiscountEventID = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
            fnSetIncludeWeeklongEvents: (t) => {
              (this.m_bIncludeWeeklongEvents = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeCustomEvents: this.m_bIncludeCustomEvents,
            fnSetIncludeCustomEvents: (t) => {
              (this.m_bIncludeCustomEvents = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeConflictsInSingleEventView:
              this.m_bIncludeConflictsInSingleEventView,
            fnSetIncludeConflictsInSingleEventView: (t) => {
              (this.m_bIncludeConflictsInSingleEventView = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
          };
        }
      }
      function g(t) {
        var e;
        return null !== (e = p.Get().m_mapLastTimeRaisedPrices.get(t)) &&
          void 0 !== e
          ? e
          : 0;
      }
      function m() {
        return p.Get().m_rgDiscountEvents;
      }
      function D(t) {
        return p.Get().m_mapDiscountEventsByID.get(t);
      }
      function h() {
        return p.Get().m_discountEventsCallbackList;
      }
      function v() {
        const [t, e] = a.useState(p.Get().m_rgDiscountEvents);
        return (0, o.Qg)(p.Get().m_discountEventsCallbackList, e), t;
      }
      function _() {
        const [t, e] = a.useState(p.Get().m_setVisibleDiscountEventIDs);
        return (0, o.Qg)(p.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function f(t = !0) {
        return p.Get().m_setVisibleDiscountEventIDs;
      }
      function k(t) {
        const [e, n] = a.useState(p.Get().m_mapDiscountEventsByID.get(t)),
          i = a.useCallback(
            () => n(p.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, o.Qg)(p.Get().m_discountEventsCallbackList, i),
          a.useEffect(i, [t, i]),
          e
        );
      }
      function I(t = !0) {
        const [e, n] = a.useState(p.Get().GetEventSelectionParameters()),
          i = t ? p.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, o.Qg)(i, n), e;
      }
      function E() {
        const [t, e] = a.useState(p.Get().m_eRelatedDiscountView);
        (0, o.Qg)(p.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          a.useCallback((t) => {
            (p.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(d, t),
              p.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function P() {
        return a.useCallback(() => {
          p.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    23121: (t, e, n) => {
      "use strict";
      n.d(e, {
        A$: () => G,
        Eg: () => R,
        Ii: () => C,
        JP: () => b,
        O7: () => P,
        UA: () => I,
        zQ: () => f,
        zV: () => E,
      });
      var a = n(47427),
        i = n(59728),
        s = n(37563),
        o = n(31846),
        r = n(9953),
        c = n.n(r),
        l = n(6683),
        u = n(42006),
        d = n(66263),
        p = n(47316),
        g = n.n(p),
        m = n(7073),
        D = n(95518);
      function h(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          i = (0, D.ho)(n);
        let s = (0, m.Qy)(n) < i,
          r = g()(c().PackageNameColumn, s && c().PackagePricesBelowMin),
          l = s
            ? (0, o.Xx)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return a.createElement(
          _,
          Object.assign({ className: r, toolTip: l }, t),
        );
      }
      function v(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          i = (0, d.qH)(n);
        let s = g()(c().PackageNameColumn, i && c().PackagePricesBelowMin),
          r = i
            ? (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return a.createElement(
          _,
          Object.assign({ className: s, toolTip: r }, t),
        );
      }
      function _(t) {
        var e;
        const {
            fnBLocalChangesExist: n,
            fnWarnUser: i,
            cell: r,
            className: l,
            toolTip: u,
          } = t,
          d = r.getRow().getData().packageID,
          p =
            null !== (e = r.getValue()) && void 0 !== e
              ? e
              : a.createElement(
                  "span",
                  { className: c().UnknownValue },
                  (0, o.Xx)("#PackageGrid_PackageID", d),
                );
        return a.createElement(
          R,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: i,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: u,
            strClassName: l,
          },
          p,
        );
      }
      function f(t) {
        return a.useMemo(
          () => ({
            visible: !0,
            title: (0, o.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              a.createElement(_, Object.assign({}, t)),
            ),
            cssClass: c().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [t],
        );
      }
      function k(t, e, n, a) {
        return (
          !!(
            /^\d+$/.test(t) &&
            n.packageID &&
            n.packageID.toString().startsWith(t)
          ) || e.toLowerCase().includes(t.toLowerCase())
        );
      }
      function I(t, e) {
        return a.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              e
                ? a.createElement(h, Object.assign({}, t))
                : a.createElement(v, Object.assign({}, t)),
            ),
            cssClass: c().PackageName,
            width: 300,
            frozen: !0,
            variableHeight: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageName_ttip"),
            headerFilter: "input",
            headerFilterPlaceholder: (0, o.Xx)(
              "#PackageGrid_PackageNameFilterInputPrompt",
            ),
            headerFilterFunc: k,
          }),
          [t, e],
        );
      }
      function E(t) {
        return a.useMemo(
          () => ({
            visible: !1,
            title: "App IDs - hidden column",
            field: "appids",
            headerSort: !1,
            frozen: !0,
          }),
          [],
        );
      }
      function P(t) {
        return a.useMemo(
          () => ({
            visible: !1,
            title: (0, o.Xx)("#PackageGrid_Column_PackageType"),
            field: "packageType",
            headerSort: !1,
            cssClass: c().PackageType,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageType_ttip"),
            frozen: !0,
          }),
          [],
        );
      }
      function G(t) {
        const e = t.getCell("packageType"),
          n = e && "function" == typeof e.getValue && e.getValue();
        n && t.getElement().classList.add(n),
          t.getNextRow() || t.getElement().classList.add(c().LastRow);
      }
      function S(t) {
        var e;
        const { fnBLocalChangesExist: n, fnWarnUser: i, cell: r } = t,
          c = r.getRow().getData().appids,
          l =
            null !== (e = null == c ? void 0 : c.length) && void 0 !== e
              ? e
              : 0,
          u = r.getRow().getData().packageID;
        return a.createElement(
          R,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: i,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == l ? "1 appid" : l + " appids",
        );
      }
      function C(t) {
        return a.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: u.yh,
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              a.createElement(S, Object.assign({}, t)),
            ),
            cssClass: c().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [t],
        );
      }
      function b(t, e, n, a) {
        return t == (0, o.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, o.Xx)(
              "#PackageGrid_NoBaseGameExplanation",
            )}' >${t} (?) <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e,
            )})</span></div>`
          : `<div>${t} <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e,
            )})</span></div>`;
      }
      function R(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: n,
          href: s,
          children: o,
          strToolTip: r,
          strClassName: c,
        } = t;
        return a.createElement(
          i.HP,
          { toolTipContent: r, className: c },
          a.createElement(
            "a",
            {
              onClick: (t) => {
                e() && (t.preventDefault(), n(t, s));
              },
              href: s,
            },
            o,
          ),
        );
      }
    },
    82416: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => s });
      var a = n(47427),
        i = n(31846);
      function s(t) {
        const e = a.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, i.Xx)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                e.returnValue
              );
          },
          [t],
        );
        a.useEffect(
          () => (
            window.addEventListener("beforeunload", e),
            () => window.removeEventListener("beforeunload", e)
          ),
          [e],
        );
      }
    },
    87813: (t, e, n) => {
      "use strict";
      n.d(e, { R1: () => c, Sx: () => o, xs: () => u });
      var a = n(85556),
        i = n(15690),
        s = n(31846);
      const o = new Set([0, 2, 6, 13]),
        r = new Set([4, 7, 11]);
      function c(t) {
        var e, n;
        let a,
          c = !1,
          l = !1;
        const u = new Set();
        for (const n of null !==
          (e = null == t ? void 0 : t.GetIncludedAppIDs()) && void 0 !== e
          ? e
          : []) {
          const t = i.Z.Get().GetApp(n);
          if (t && o.has(t.GetAppType())) (c = !0), u.add(t.GetID());
          else if (t && r.has(t.GetAppType())) {
            l = !0;
            const e = t.GetParentAppID();
            e && u.add(e);
          }
        }
        let d = null;
        1 == u.size
          ? ((a = Array.from(u)[0]),
            (d =
              null === (n = i.Z.Get().GetApp(a)) || void 0 === n
                ? void 0
                : n.GetName()))
          : u.size > 1 &&
            (d = (0, s.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          d || (d = (0, s.Xx)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: d,
          contents: c && l ? "BOTH" : c ? "GAME" : l ? "DLC" : null,
          nBaseAppID: a,
        };
      }
      const l = { include_release: !0 };
      function u(t, e) {
        return (0, a.mG)(this, void 0, void 0, function* () {
          if (
            1 != (yield i.Z.Get().HintLoadStorePackages(t, l)) ||
            e.token.reason
          )
            return null;
          const n = [];
          t.map((t) => i.Z.Get().GetPackage(t))
            .filter((t) => !!t)
            .forEach((t) => n.push(...t.GetIncludedAppIDs()));
          const a = Array.from(new Set(n));
          if (1 != (yield i.Z.Get().HintLoadStoreApps(a, l)) || e.token.reason)
            return null;
          const s = a
              .map((t) => i.Z.Get().GetApp(t))
              .filter((t) => !!(null == t ? void 0 : t.GetParentAppID()))
              .map((t) => t.GetParentAppID()),
            o = Array.from(new Set(s));
          if (1 != (yield i.Z.Get().HintLoadStoreApps(o, l)) || e.token.reason)
            return null;
          return Array.from(new Set(a.concat(o)));
        });
      }
    },
  },
]);
