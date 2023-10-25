/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4674],
  {
    14952: (e, t, r) => {
      r.d(t, { b2: () => o });
      var a = r(45878),
        i = r(43898),
        n = r(67328);
      const s = a.Message;
      var o, _, m, d, l;
      !(function (e) {
        (e[(e.k_ESteamAwardCategoryID_Invalid = 0)] =
          "k_ESteamAwardCategoryID_Invalid"),
          (e[(e.k_ESteamAwardCategoryID_2020_GameOfTheYear = 50)] =
            "k_ESteamAwardCategoryID_2020_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2020_VRGameOfTheYear = 51)] =
            "k_ESteamAwardCategoryID_2020_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2020_LaborOfLove = 52)] =
            "k_ESteamAwardCategoryID_2020_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2020_BetterWithFriends = 53)] =
            "k_ESteamAwardCategoryID_2020_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2020_OutstandingVisualStyle = 54)] =
            "k_ESteamAwardCategoryID_2020_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2020_MostInnovativeGameplay = 55)] =
            "k_ESteamAwardCategoryID_2020_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2020_BestGameYouSuckAt = 56)] =
            "k_ESteamAwardCategoryID_2020_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2020_BestSoundtrack = 57)] =
            "k_ESteamAwardCategoryID_2020_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2020_OutstandingStoryRichGame = 58)] =
            "k_ESteamAwardCategoryID_2020_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2020_SitBackAndRelax = 59)] =
            "k_ESteamAwardCategoryID_2020_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2020_MAX = 60)] =
            "k_ESteamAwardCategoryID_2020_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2021_GameOfTheYear = 61)] =
            "k_ESteamAwardCategoryID_2021_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2021_VRGameOfTheYear = 62)] =
            "k_ESteamAwardCategoryID_2021_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2021_LaborOfLove = 63)] =
            "k_ESteamAwardCategoryID_2021_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2021_BetterWithFriends = 64)] =
            "k_ESteamAwardCategoryID_2021_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2021_OutstandingVisualStyle = 65)] =
            "k_ESteamAwardCategoryID_2021_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2021_MostInnovativeGameplay = 66)] =
            "k_ESteamAwardCategoryID_2021_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2021_BestGameYouSuckAt = 67)] =
            "k_ESteamAwardCategoryID_2021_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2021_BestSoundtrack = 68)] =
            "k_ESteamAwardCategoryID_2021_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2021_OutstandingStoryRichGame = 69)] =
            "k_ESteamAwardCategoryID_2021_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2021_SitBackAndRelax = 70)] =
            "k_ESteamAwardCategoryID_2021_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2021_MAX = 71)] =
            "k_ESteamAwardCategoryID_2021_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2022_GameOfTheYear = 72)] =
            "k_ESteamAwardCategoryID_2022_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2022_VRGameOfTheYear = 73)] =
            "k_ESteamAwardCategoryID_2022_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2022_LaborOfLove = 74)] =
            "k_ESteamAwardCategoryID_2022_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2022_BetterWithFriends = 75)] =
            "k_ESteamAwardCategoryID_2022_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2022_OutstandingVisualStyle = 76)] =
            "k_ESteamAwardCategoryID_2022_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2022_MostInnovativeGameplay = 77)] =
            "k_ESteamAwardCategoryID_2022_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestGameYouSuckAt = 78)] =
            "k_ESteamAwardCategoryID_2022_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestSoundtrack = 79)] =
            "k_ESteamAwardCategoryID_2022_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2022_OutstandingStoryRichGame = 80)] =
            "k_ESteamAwardCategoryID_2022_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2022_SitBackAndRelax = 81)] =
            "k_ESteamAwardCategoryID_2022_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2022_BestGameOnTheGo = 82)] =
            "k_ESteamAwardCategoryID_2022_BestGameOnTheGo"),
          (e[(e.k_ESteamAwardCategoryID_2022_MAX = 83)] =
            "k_ESteamAwardCategoryID_2022_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2023_GameOfTheYear = 90)] =
            "k_ESteamAwardCategoryID_2023_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2023_VRGameOfTheYear = 91)] =
            "k_ESteamAwardCategoryID_2023_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2023_LaborOfLove = 92)] =
            "k_ESteamAwardCategoryID_2023_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestGameOnDeck = 93)] =
            "k_ESteamAwardCategoryID_2023_BestGameOnDeck"),
          (e[(e.k_ESteamAwardCategoryID_2023_BetterWithFriends = 94)] =
            "k_ESteamAwardCategoryID_2023_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2023_OutstandingVisualStyle = 95)] =
            "k_ESteamAwardCategoryID_2023_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2023_MostInnovativeGameplay = 96)] =
            "k_ESteamAwardCategoryID_2023_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestGameYouSuckAt = 97)] =
            "k_ESteamAwardCategoryID_2023_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2023_BestSoundtrack = 98)] =
            "k_ESteamAwardCategoryID_2023_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2023_OutstandingStoryRichGame = 99)] =
            "k_ESteamAwardCategoryID_2023_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2023_SitBackAndRelax = 100)] =
            "k_ESteamAwardCategoryID_2023_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2023_MAX = 101)] =
            "k_ESteamAwardCategoryID_2023_MAX");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_EVoteDefinitionFlag_None = 0)] =
            "k_EVoteDefinitionFlag_None"),
            (e[(e.k_EVoteDefinitionFlag_OnlyVR = 1)] =
              "k_EVoteDefinitionFlag_OnlyVR"),
            (e[(e.k_EVoteDefinitionFlag_SteamDeck = 2)] =
              "k_EVoteDefinitionFlag_SteamDeck"),
            (e[(e.k_EVoteDefinitionFlag_LaborOfLove = 3)] =
              "k_EVoteDefinitionFlag_LaborOfLove");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_ESteamAwardsNominationSource_Invalid = 0)] =
            "k_ESteamAwardsNominationSource_Invalid"),
            (e[(e.k_ESteamAwardsNominationSource_StorePage = 1)] =
              "k_ESteamAwardsNominationSource_StorePage"),
            (e[(e.k_ESteamAwardsNominationSource_Recommendation = 2)] =
              "k_ESteamAwardsNominationSource_Recommendation"),
            (e[(e.k_ESteamAwardsNominationSource_ModalSearch = 3)] =
              "k_ESteamAwardsNominationSource_ModalSearch"),
            (e[(e.k_ESteamAwardsNominationSource_PartnerEvent = 4)] =
              "k_ESteamAwardsNominationSource_PartnerEvent");
        })(m || (m = {}));
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.voteid || i.aR(c.M()),
            s.initialize(this, e, 0, -1, [5, 7], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  voteid: { n: 1, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  active: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                  start_time: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_time: { n: 4, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  app_discounts: { n: 5, c: u, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  groups: { n: 7, c: y, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  localization: { n: 9, c: S },
                  reveal_time: {
                    n: 10,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  flag: { n: 13, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || i.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  discount: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.groupid || i.aR(y.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  groupid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  group_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  app_discounts: { n: 3, c: u, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.title || i.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  title: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  title_linebreak: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || i.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  sale_appid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = i.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.votes || i.aR(g.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { votes: { n: 1, c, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || i.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  sale_appid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  language: { n: 3, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = i.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitionsForEvents_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.definitions || i.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { definitions: { n: 1, c, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitionsForEvents_Response";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.category_id || i.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  category_id: {
                    n: 1,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  category_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  appid: { n: 3, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  write_in_name: {
                    n: 4,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  store_appid: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  developer_id: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = i.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new a.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.nominations || i.aR(k.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { nominations: { n: 1, c: E, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, n.MD)(w, t),
            g,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetVoteDefinitionsForEvents = function (e, t) {
            return e.SendMsg(
              "StoreSales.GetVoteDefinitionsForEvents#1",
              (0, n.MD)(B, t),
              b,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          });
      })(d || (d = {})),
        (function (e) {
          e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, n.MD)(f, t),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(l || (l = {}));
    },
  },
]);
