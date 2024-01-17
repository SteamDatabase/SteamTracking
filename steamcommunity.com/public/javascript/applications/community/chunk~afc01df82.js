/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8610],
  {
    5167: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    90366: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "eventrow_OtherEventsCtn_1qNsZ",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_1_8oy",
        OtherEvents: "eventrow_OtherEvents_2ioeM",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_17gGs",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3xf4A",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_3rp-l",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_3QaFW",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_2AVL1",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_3Zufl",
        UpcomingCtn: "eventrow_UpcomingCtn_--lM7",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_2UUNj",
        HoversEnabled: "eventrow_HoversEnabled_34Nxj",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_2bZBn",
        EventSummaryContainer: "eventrow_EventSummaryContainer_3PdWg",
        EventSummaryText: "eventrow_EventSummaryText_h5tE8",
        EventSummaryType: "eventrow_EventSummaryType_1Fp_l",
        HorizontalEvent: "eventrow_HorizontalEvent_1RS0b",
        HorizontalSummary: "eventrow_HorizontalSummary_3_1Qo",
        HorizontalTitle: "eventrow_HorizontalTitle_1m9zE",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_2s9cB",
        HorizontalDescription: "eventrow_HorizontalDescription_Dc9KC",
        AppCapsuleImage: "eventrow_AppCapsuleImage_2vo-l",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_1kYha",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_rcwMf",
        AppCapsulePrice: "eventrow_AppCapsulePrice_Jq75m",
      };
    },
    38605: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => E, vV: () => p });
      var a = n(85556),
        r = n(47427),
        i = n(27605),
        s = n(42411),
        o = n(13129),
        l = n(37563),
        m = n(28918);
      const c =
        n.p +
        "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
      var A = n(5167),
        v = n.n(A);
      class E extends r.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: n,
              className: i,
              statusStyle: s,
              statusPosition: l,
              children: A,
            } = e,
            E = (0, a._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            p = [];
          return (
            t && p.push(t),
            p.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return c;
                }
              })(n),
            ),
            r.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    v().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    n || "Medium",
                    i,
                  ),
                },
                E,
              ),
              r.createElement("div", {
                className: (0, o.Z)(v().avatarStatus, "avatarStatus", l),
                style: s,
              }),
              r.createElement(m.j, {
                className: (0, o.Z)(v().avatar, "avatar"),
                rgSources: p,
                draggable: !1,
              }),
              A,
            )
          );
        }
      }
      let p = class extends r.Component {
        render() {
          const e = this.props,
            { persona: t, size: n, animatedAvatar: i, className: m } = e,
            c = (0, a._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let A = "";
          return (
            i && i.image_small && 0 != i.image_small.length
              ? (A = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + i.image_small)
              : t &&
                ((A = t.avatar_url_medium),
                "Small" == n || "X-Small" == n
                  ? (A = t.avatar_url)
                  : ("Large" != n && "X-Large" != n && "FillArea" != n) ||
                    (A = t.avatar_url_full)),
            r.createElement(
              E,
              Object.assign(
                {
                  strAvatarURL: A,
                  size: n,
                  className: (0, o.Z)((0, s.sB)(t), m),
                },
                c,
              ),
            )
          );
        }
      };
      p = (0, a.gn)([i.Pi], p);
      const u = (0, i.Pi)((e) => {
        const { profileItem: t, className: n, bDisableAnimation: i } = e,
          s = (0, a._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let m = i ? t.image_large : t.image_small;
        return (
          m || (m = t.image_small),
          m.startsWith("https://") ||
            (m = l.De.MEDIA_CDN_COMMUNITY_URL + "images/" + m),
          r.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(v().avatarFrame, n, "avatarFrame") },
              s,
            ),
            r.createElement("img", { className: v().avatarFrameImg, src: m }),
          )
        );
      });
      let d = class extends r.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
            )));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        onHover() {
          this.SetupAnimationTimer();
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
              ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
              : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: n,
              avatarFrame: i,
              children: s,
              style: o,
              bLimitProfileFrameAnimationTime: l,
              bParentHovered: m,
            } = e,
            c = (0, a._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
              "bLimitProfileFrameAnimationTime",
              "bParentHovered",
            ]);
          return (
            c.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (n = null),
            r.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              r.createElement(
                p,
                Object.assign({ animatedAvatar: n }, c),
                s,
                r.createElement(u, {
                  profileItem: i,
                  bDisableAnimation: l && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      d = (0, a.gn)([i.Pi], d);
    },
    32144: (e, t, n) => {
      "use strict";
      n.d(t, { KE: () => W, T4: () => L, _G: () => R, zY: () => K });
      var a = n(85556),
        r = n(80751),
        i = n.n(r),
        s = n(27605),
        o = n(30750),
        l = n(47427),
        m = n(77936),
        c = n(16610),
        A = n(91618),
        v = n(3783),
        E = n(86878),
        p = n(35427),
        u = n(68985),
        d = n(93243),
        g = n(30851),
        C = n(42855),
        h = n(80886),
        B = n(27784),
        _ = n(81913),
        S = n(71741),
        Q = n.n(S),
        D = n(91552),
        I = n(24827),
        T = n(62613),
        N = n(25006),
        f = n(83999),
        w = n(13129),
        U = n(31846),
        H = n(37563),
        b = n(10162),
        F = n(46882),
        G = n(90366),
        M = n.n(G),
        O = n(85305),
        k = n(7769),
        P = n.n(k);
      const R = (0, s.Pi)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: n,
              partnerEventStore: r,
              trackingLocation: s,
              bViewAllShowInfiniteScroll: o,
            } = e,
            m = p.K.InitFromClanID(t),
            c = (0, l.useRef)(null),
            [E, u] = (0, l.useState)(null),
            [g, h] = (0, l.useState)(!0),
            [S, D] = (0, l.useState)(!1);
          if (
            ((0, l.useEffect)(
              () => (
                (0, a.mG)(void 0, void 0, void 0, function* () {
                  c.current &&
                    c.current("PartnerEventRow Initializng new mount");
                  const e = i().CancelToken.source();
                  c.current = e.cancel;
                  const a = p.K.InitFromClanID(t);
                  yield d.sV.LoadClanInfoForClanSteamID(a);
                  let o = yield r.LoadAdjacentPartnerEventsByAnnouncement(
                    n,
                    a,
                    null,
                    4,
                    4,
                    void 0,
                    e,
                  );
                  if (!e.token.reason) {
                    o = o || [];
                    let e = o
                      .filter((e) => e.GetAnnouncementGID() != n)
                      .map((e) => e.AnnouncementGID);
                    f.LQ(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => r.GetClanEventFromAnnouncementGID(e));
                    if ((u(t), h(!1), s)) {
                      let e = C.cb.Get().GetTracker(),
                        a = !1;
                      if (r.BHasClanAnnouncementGID(n)) {
                        let t = r.GetClanEventFromAnnouncementGID(n);
                        t &&
                          t.BIsPartnerEvent() &&
                          t.BIsVisibleEvent() &&
                          (e.MarkEventRead(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            s,
                          ),
                          (a = !0));
                      }
                      t.length > 0 &&
                        (o
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((t) =>
                            e.MarkEventShown(
                              t.GID,
                              t.clanSteamID.GetAccountID(),
                              s,
                            ),
                          ),
                        (a = !0)),
                        a && e.Flush();
                    }
                  }
                }),
                () => {
                  c.current && c.current("PartnerEventRow: unmounting");
                }
              ),
              [t, n, r, s],
            ),
            g)
          )
            return l.createElement(F.V, { position: "center", size: "medium" });
          if (0 == E.length) return l.createElement("div", null);
          const I = d.sV.GetClanInfoByClanAccountID(t);
          return l.createElement(
            b.SV,
            null,
            l.createElement(
              "div",
              { className: (0, w.Z)(M().OtherEventsCtn, "OtherEventsCtn") },
              l.createElement(
                "div",
                { className: Q().EventSectionTitleCtn },
                l.createElement(
                  "div",
                  {
                    className: (0, w.Z)(
                      Q().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, U.kQ)("#EventBrowse_MoreEventsTitle", I.group_name),
                  " ",
                ),
                l.createElement(
                  "div",
                  { className: Q().EventSectionSpacer },
                  " ",
                ),
                o
                  ? l.createElement(
                      "div",
                      {
                        className: Q().EventSectionMoreBtn,
                        onClick: () => D(!0),
                      },
                      (0, U.Xx)("#EventBrowse_MoreEventsBtn"),
                    )
                  : l.createElement(
                      _.JW,
                      {
                        eventModel: E[0],
                        route: _.Ue.k_eViewWebSiteHub,
                        className: Q().EventSectionMoreBtn,
                      },
                      (0, U.Xx)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              l.createElement(
                A.s,
                {
                  className: M().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: v.c4.PREFERRED_CHILD,
                },
                E.map((e) =>
                  l.createElement(L, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(S) &&
                l.createElement(B.x, {
                  appid: E[0].appid,
                  clanSteamID: m,
                  announcementGID: E[0].AnnouncementGID,
                  closeModal: () => D(!1),
                  partnerEventStore: r,
                }),
            ),
          );
        }),
        y = 30;
      function L(e) {
        const {
            event: t,
            imageURLOverride: n,
            bShowAssociatedApp: a,
            langOverride: r,
            onClick: i,
            eEventRount: s,
            bHidePrices: c,
          } = e,
          [A, v, p, d, C, B, S, Q] = (0, o.SZ)(() => {
            const e = r || (0, m.jM)(H.De.LANGUAGE),
              a = Boolean(void 0 !== n)
                ? n
                : t.GetImageURLWithFallback("capsule", e, u.FN.capsule_main);
            return [
              e,
              t.appid,
              a,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              (0, E.ax)(a),
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          [D, T] = (0, h.vs)(v, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return l.createElement("div", {
            className: M().OtherEvents_EventCtn,
          });
        if (!D && v)
          return l.createElement(F.V, {
            className: M().OtherEvents_EventCtn,
            size: "small",
            position: "center",
            string: (0, U.Xx)("#Loading"),
          });
        const N = (0, g.vY)().GetStoreInitializationTimestamp().getTime() / 1e3,
          f = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let b = Q;
        return (
          Q && (Q.length > y || d.length > y) && (b = void 0),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              _.JW,
              {
                className: (0, w.Z)(
                  M().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  M().HoversEnabled,
                ),
                eventModel: t,
                route: s || _.Ue.k_eView,
                onClick: i,
                preferredFocus: !0,
              },
              l.createElement(
                "div",
                { className: M().EventSummaryContainer },
                l.createElement("div", { className: M().EventSummaryType }, C),
                l.createElement("div", { className: M().EventSummaryText }, B),
              ),
              l.createElement("div", {
                className: M().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${S})`,
                },
              }),
              l.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                l.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  l.createElement("img", {
                    src: p,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
                l.createElement(
                  "div",
                  { className: M().OtherEvents_TextCtn },
                  l.createElement(
                    "div",
                    { className: M().OtherEvents_TextTitle },
                    d,
                  ),
                  Boolean(b) &&
                    l.createElement(
                      "div",
                      { className: M().OtherEvents_SubTitle },
                      b,
                    ),
                  Boolean(f > N)
                    ? l.createElement(
                        "div",
                        { className: (0, w.Z)(M().UpcomingCtn, "UpcomingCtn") },
                        l.createElement(I.H6, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : l.createElement(I.H6, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(a && t.appid) &&
              l.createElement(K, { appid: t.appid, bHidePrice: c }),
          )
        );
      }
      function K(e) {
        const { appid: t, bHidePrice: n } = e,
          [a] = (0, h.vs)(t, c.bk),
          r = (0, N.bJ)(),
          i = (0, H.id)();
        if (!a) return null;
        const s = a.GetBestPurchaseOption(),
          o = (null == s ? void 0 : s.hide_discount_pct_for_compliance) && !0;
        return l.createElement(
          A.s,
          Object.assign(
            { className: (0, w.Z)(M().AppCapsuleCtn, "AppCapsuleCtn") },
            (0, D.h)(a, r, i),
          ),
          l.createElement(
            O.ll,
            {
              item: { type: "game", id: t },
              hoverProps: {
                direction: "overlay",
                style: { minWidth: "320px" },
              },
            },
            l.createElement("img", {
              className: M().AppCapsuleImage,
              src: a.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
          Boolean(!n && !a.BIsFree()) &&
            l.createElement(
              "span",
              {
                className: (0, w.Z)(
                  M().AppCapsulePrice,
                  Boolean(null == s ? void 0 : s.discount_pct)
                    ? P().Discounted
                    : "",
                ),
              },
              Boolean((null == s ? void 0 : s.discount_pct) && o) &&
                l.createElement(
                  "div",
                  { className: P().DiscountIconCtn },
                  l.createElement(T.dCe, null),
                ),
              Boolean((null == s ? void 0 : s.discount_pct) && !o) &&
                l.createElement(
                  "span",
                  { className: P().StoreSaleDiscountBox },
                  `-${null == s ? void 0 : s.discount_pct}%`,
                ),
              Boolean(s.final_price_in_cents) &&
                l.createElement(
                  "span",
                  { className: P().StoreSalePriceBox },
                  s.formatted_final_price,
                ),
            ),
        );
      }
      function W(e) {
        const { event: t, imageURLOverride: n, onClick: a } = e,
          r = (0, m.jM)(H.De.LANGUAGE),
          [i, s, c] = (0, o.SZ)(() =>
            t
              ? [
                  void 0 !== n
                    ? n
                    : t.GetImageURLWithFallback(
                        "capsule",
                        r,
                        u.FN.capsule_main,
                      ),
                  t.GetNameWithFallback(r),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? l.createElement(
              _.JW,
              {
                className: M().OtherEvents_EventCtn + " " + M().HorizontalEvent,
                eventModel: t,
                route: _.Ue.k_eView,
                onClick: a,
              },
              l.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                l.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  l.createElement("img", {
                    src: i,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: M().OtherEvents_TextCtn },
                l.createElement(
                  "div",
                  { className: M().HorizontalDescriptionCtn },
                  l.createElement(
                    "div",
                    { className: M().HorizontalDescription },
                    c,
                  ),
                  l.createElement(I.H6, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                l.createElement("div", { className: M().HorizontalTitle }, s),
              ),
            )
          : l.createElement("div", { className: M().OtherEvents_EventCtn });
      }
    },
  },
]);
