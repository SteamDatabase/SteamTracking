/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1677],
  {
    56420: (e) => {
      e.exports = {
        SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
        SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
        none: "T3Fb5KTXwIHM2B-ThTvEs",
        Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
        Large: "_3BESV4eFnr4EnaSaJSdk6T",
        Dim: "rpZ9bKyFXYvNQvgtKn5GV",
        Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
        Z2: "VmQTOrz5MPOWte5C9K7YS",
        Z3: "_29mtadjX8N6pRn5TX1nA0o",
        hoverParent: "_3-8cByP2koYzHwgZqjvFA",
        animating: "_2rXc7hLg6bohWZ-JpRcYEB",
        Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
      };
    },
    18828: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
        threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
        blocked: "VTxPkslK1CSpKNFMgKg7d",
        richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
        playerName: "nOdcT-MoOaXGePXLyPe0H",
        playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
        DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
        playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
        richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
        gameName: "_1cB0qtF0paHWWyj1XNcnbG",
        NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
        twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
        DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
        partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
        hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
        compactView: "_3bbRZyUiK-bfc5Qov6xukI",
        noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
        gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
        PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
      };
    },
    70342: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
        MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
        SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
        VRIcon: "_368tz9TSOLGiG2mNMLScMz",
      };
    },
    34181: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => F, D: () => w });
      var i = r(34629),
        a = r(90626),
        s = r(75844),
        n = r(61859),
        c = r(22837),
        l = r(10622),
        o = r(52038),
        m = r(56420),
        u = r.n(m);
      let d = class extends a.Component {
        static get hoverClass() {
          return u().hoverParent;
        }
        render() {
          const {
            persona: e,
            animating: t,
            className: r,
            size: i,
            dim: s,
            ...n
          } = this.props;
          let c = "";
          return (
            "medium" == i ? (c = u().Medium) : "large" == i && (c = u().Large),
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  u().SnoozeContainer,
                  e.online_state,
                  r,
                  t && u().animating,
                  c,
                  s && u().Dim,
                ),
                ...n,
              },
              a.createElement(
                "div",
                { "data-text": "Z", className: (0, o.A)(u().SnoozeZ, u().Z1) },
                "Z",
              ),
              a.createElement(
                "div",
                { "data-text": "Z", className: (0, o.A)(u().SnoozeZ, u().Z2) },
                "Z",
              ),
              a.createElement(
                "div",
                { "data-text": "Z", className: (0, o.A)(u().SnoozeZ, u().Z3) },
                "Z",
              ),
            )
          );
        }
      };
      d = (0, i.Cg)([s.PA], d);
      var g = r(12155),
        B = r(70342),
        y = r.n(B),
        M = r(97232);
      const f = (0, s.PA)((e) => {
        const { persona: t, className: r, ...i } = e;
        if (!t) return null;
        if (!t.is_online) return null;
        const s = t.HasStateFlag(512),
          c = t.HasStateFlag(2048),
          m = 544 == t.m_eGamingDeviceType,
          u = 545 == t.m_eGamingDeviceType,
          d = !m && !u && !c && t.HasStateFlag(1024);
        return a.createElement(
          a.Fragment,
          null,
          s &&
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  r,
                  y().PersonaStatusIcon,
                  y().MobilePhoneIcon,
                  (0, l.rO)(t),
                ),
                title: (0, n.we)("#Platform_Hint_Mobile"),
                ...i,
              },
              a.createElement(M.rf, null),
            ),
          c &&
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  r,
                  y().PersonaStatusIcon,
                  y().VRIcon,
                  (0, l.rO)(t),
                ),
                title: (0, n.we)("#Platform_Hint_VR"),
                ...i,
              },
              a.createElement(g.MUh, null),
            ),
          d &&
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  r,
                  y().PersonaStatusIcon,
                  y().BigPictureIcon,
                  (0, l.rO)(t),
                ),
                title: (0, n.we)("#Platform_Hint_BigPicture"),
                ...i,
              },
              a.createElement(g.bPr, null),
            ),
          m &&
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  r,
                  y().PersonaStatusIcon,
                  y().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, n.we)("#Platform_Hint_SteamDeck"),
                ...i,
              },
              a.createElement(g.DQe, null),
            ),
          u &&
            a.createElement(
              "div",
              {
                className: (0, o.A)(
                  r,
                  y().PersonaStatusIcon,
                  y().SteamDeckIcon,
                  (0, l.rO)(t),
                ),
                title: (0, n.we)("#Platform_Hint_LegionGoS"),
                ...i,
              },
              a.createElement(g.DQe, null),
            ),
        );
      });
      var b = r(18828),
        _ = r.n(b),
        p = r(78327);
      function z(e) {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "span",
            { className: _().partyBeaconJoin },
            (0, n.we)("#User_WantsToPlay"),
          ),
          " – ",
          e.persona.GetCurrentGameName(),
        );
      }
      let w = class extends a.Component {
        render() {
          const {
            className: e,
            onContextMenu: t,
            persona: r,
            eFriendRelationship: i,
            bIsSelf: s,
            bParenthesizeNicknames: m,
            strNickname: u,
            bCompactView: B,
            bHideGameName: y,
            bHideEnhancedRichPresenceLabel: M,
            bHideSnooze: b,
            bHideStatus: w,
            renderStatus: F,
            renderRichPresence: S,
            bHidePersona: h,
            bDNDSet: v,
            bHasPartyBeacon: R,
            bHasGamePrivacy: N,
            bNoMask: I,
            ...j
          } = this.props;
          let W = null,
            O = null,
            P = null,
            C = [
              e,
              _().personaNameAndStatusLabel,
              (0, l.rO)(r),
              B && _().compactView,
              I && _().NoMask,
            ];
          R || r.has_public_party_beacon
            ? (O = a.createElement(z, { persona: r }))
            : (0, c.aP)(i)
              ? ((O = (0, n.we)("#PersonaStateBlocked")), C.push(_().blocked))
              : r.is_ingame
                ? ((O =
                    !r.is_in_nonsteam_game || s || (0, c.S$)(i)
                      ? r.GetCurrentGameName()
                      : (0, n.we)("#PersonaStateInNonSteamGame")),
                  s || h
                    ? s &&
                      r.is_awayOrSnooze &&
                      (P = (0, n.we)("#PersonaStateAway"))
                    : (P = r.GetCurrentGameRichPresence()))
                : r.m_broadcastAccountId &&
                  (O = (0, n.we)("#PersonaStateWatchingBroadcast")),
            O || (O = r.GetLocalizedOnlineStatus()),
            F && (O = F());
          let T = !h && !b;
          !1 === b && (T = !0),
            r.is_awayOrSnooze && T && (W = a.createElement(d, { persona: r }));
          let E = null;
          t
            ? (E = a.createElement(
                "div",
                { className: "ContextMenuButton", onClick: t },
                a.createElement(g.GB9, null),
              ))
            : C.push(_().noContextMenu),
            h && C.push(_().hidePersona),
            S && (P = S()),
            (!y && P) || C.push(_().twoLine);
          const L = !r.is_ingame && !w,
            G = !M && P,
            q = O && (!y || !G),
            k = (0, c.ID)(p.TS.LAUNCHER_TYPE);
          let x = u && !m,
            A = x ? u : r.m_strPlayerName,
            U = !h && (q || L) && G;
          return a.createElement(
            "div",
            { ...j, className: (0, o.A)(...C), onContextMenu: t },
            a.createElement(
              "div",
              { className: (0, o.A)(_().statusAndName, U && _().threeLines) },
              a.createElement(
                "div",
                { className: _().playerName },
                A || " ",
                m &&
                  u &&
                  a.createElement(
                    "span",
                    { className: _().playerNickname },
                    "(",
                    u,
                    ")",
                  ),
              ),
              v &&
                a.createElement(
                  "div",
                  {
                    className: _().DNDContainer,
                    title: (0, n.we)("#User_ToggleDoNotDisturb"),
                  },
                  a.createElement(g.Aj0, null),
                ),
              x &&
                a.createElement(
                  "span",
                  {
                    className: _().playerNicknameBracket,
                    title: (0, n.we)("#isNickname"),
                  },
                  " *",
                ),
              a.createElement(f, { persona: r }),
              W,
              (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                k &&
                a.createElement(
                  "div",
                  {
                    className: _().PendingPersona,
                    title: (0, n.we)("#SteamChina_PendingPersonaName"),
                  },
                  a.createElement(g.zD7, null),
                ),
              E,
            ),
            !h &&
              a.createElement(
                "div",
                { className: _().richPresenceContainer },
                (q || L) &&
                  a.createElement(
                    "div",
                    {
                      className: (0, o.A)(
                        _().gameName,
                        U && _().threeLines,
                        _().richPresenceLabel,
                        "no-drag",
                      ),
                    },
                    N &&
                      a.createElement(
                        "div",
                        {
                          className: _().gameIsPrivateIcon,
                          title: (0, n.we)("#User_GameInfoHidden"),
                        },
                        a.createElement(g.jZl, null),
                      ),
                    O,
                  ),
                G &&
                  a.createElement(
                    "div",
                    { className: (0, o.A)(_().richPresenceLabel, "no-drag") },
                    P,
                    " ",
                  ),
              ),
          );
        }
      };
      w = (0, i.Cg)([s.PA], w);
      const F = (0, s.PA)((e) => {
        const {
          persona: t,
          bParenthesizeNicknames: r,
          strNickname: i,
          bIgnorePersonaStatus: s,
          bDisableColoring: n,
          className: c,
          ...m
        } = e;
        let u = i && !r ? i : t.m_strPlayerName;
        return a.createElement(
          "span",
          {
            ...m,
            className: (0, o.A)(
              c,
              n && _().DisableColoring,
              !s && (0, l.rO)(t),
            ),
          },
          a.createElement(
            "span",
            { className: _().playerName },
            u || " ",
            r &&
              i &&
              a.createElement(
                "span",
                { className: _().playerNickname },
                "(",
                i,
                ")",
              ),
          ),
        );
      });
    },
    26505: (e, t, r) => {
      "use strict";
      r.d(t, {
        M8: () => C,
        d0: () => I,
        Dv: () => j,
        Nd: () => L,
        EW: () => O,
      });
      var i,
        a,
        s = r(68950),
        n = r(23809),
        c = r(75233),
        l = r(20194),
        o = r(56545),
        m = r(17720),
        u = r(80613),
        d = r.n(u),
        g = r(89068);
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      class B extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.bincremental || g.Sg(B.M()),
            u.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  bincremental: { n: 1, br: g.qM.readBool, bw: g.gp.writeBool },
                  friends: { n: 2, c: y, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: g.qM.readBool,
                    bw: g.gp.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = g.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class y extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.ulfriendid || g.Sg(y.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: g.qM.readFixed64String,
                    bw: g.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = g.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      u.Message;
      class M extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.groupid || g.Sg(M.M()),
            u.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  groupid: { n: 1, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  name: { n: 2, br: g.qM.readString, bw: g.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: g.qM.readUint32,
                    pbr: g.qM.readPackedUint32,
                    bw: g.gp.writeRepeatedUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = g.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class f extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class b extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.categories || g.Sg(b.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { categories: { n: 1, c: M, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = g.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class _ extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.accountid || g.Sg(_.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  accountid: {
                    n: 1,
                    br: g.qM.readUint32,
                    bw: g.gp.writeUint32,
                  },
                  clanid: { n: 2, br: g.qM.readUint32, bw: g.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: g.qM.readUint64String,
                    bw: g.gp.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = g.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class p extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class z extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.favorites || g.Sg(z.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = g.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class w extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.favorites || g.Sg(w.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = g.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class F extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class S extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.favorites || g.Sg(S.M()),
            u.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { favorites: { n: 1, c: _, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = g.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class h extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class v extends u.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.friendslist || g.Sg(v.M()),
            u.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { friendslist: { n: 1, c: B } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = g.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return g.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return g.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, o.I8)(f, t), b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, o.I8)(h, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, o.I8)(p, t), z, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, o.I8)(w, t), F, {
              ePrivilege: 1,
            });
          });
      })(i || (i = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: S,
          };
        })(a || (a = {}));
      var R = r(37735),
        N = r(14336);
      function I(e) {
        const t = (0, n.KV)(),
          r = (0, s.LH)(),
          i = (0, N.tb)(),
          a = (0, c.jE)();
        let o = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, l.I)({
          queryKey: ["FriendsList", r, o],
          queryFn: async () => {
            const e = a.fetchQuery(W(t, r)),
              s = o.loadNicknames ? a.fetchQuery(P(t, r)) : void 0,
              n = o.loadFavorites ? a.fetchQuery(T(t, r)) : void 0,
              c = await e,
              l = new Map(c.map((e) => [e, a.fetchQuery((0, N.mK)(i, t, e))]));
            let u;
            if (s) {
              const e = (await s).nicknames;
              u = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (n ?? Promise.resolve([])));
            return (
              await Promise.all(
                c.map(async (e) => {
                  const t = new m.b(e).GetAccountID(),
                    r = { accountid: t, persona: await l.get(e) };
                  return (
                    d.has(t) && (r.is_favorite = !0),
                    u && u.has(t) && (r.nickname = u.get(t)),
                    r
                  );
                }),
              )
            ).filter((e) => !!e.persona);
          },
          staleTime: 12e4,
        });
      }
      function j() {
        const e = (0, n.KV)(),
          t = (0, s.LH)();
        return (0, l.I)(W(e, t));
      }
      function W(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = o.w.Init(h),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new m.b(e.ulfriendid());
                return (
                  (3 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        };
      }
      function O() {
        const e = (0, n.KV)(),
          t = (0, s.LH)();
        return (0, l.I)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = o.w.Init(h),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new m.b(e.ulfriendid());
                return (
                  (5 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        });
      }
      function P(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = o.w.Init(R.dN);
            return (await R.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function C(e = {}) {
        return (function (e = {}) {
          const t = (0, n.KV)(),
            r = (0, s.LH)();
          return (0, l.I)({ ...P(t, r), ...e });
        })({
          ...e,
          select: (e) =>
            new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
        });
      }
      function T(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = o.w.Init(p),
              r = (await i.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function E(e, t) {
        const r = o.w.Init(R.tl);
        r.Body().set_appid(t);
        const i = await R.xt.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function L(e, t = {}) {
        const r = (0, n.KV)(),
          i = (0, s.LH)();
        return (0, l.I)({
          queryKey: [`GameplayInfo_${i}_${e}`],
          queryFn: async () => await E(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      "use strict";
      r.d(t, { Jl: () => c, nl: () => o, rf: () => l });
      var i = r(90626),
        a = r(12155),
        s = r(4869),
        n = r(78327);
      function c(e) {
        return (0, n.Qn)()
          ? i.createElement(s.MGO, { ...e })
          : i.createElement(a.Jlk, { ...e });
      }
      function l() {
        return i.createElement(a.rfv, null);
      }
      function o() {
        return (0, n.Qn)()
          ? i.createElement(s.nl, null)
          : i.createElement(a.jZW, null);
      }
    },
  },
]);
