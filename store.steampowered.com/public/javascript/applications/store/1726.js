/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1726],
  {
    81315: (e) => {
      e.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    50666: (e) => {
      e.exports = {
        CropImage: "_3qfqTaQ35U6AO3FNeijcFV",
        CropPreviewGroup: "_1RI-QM2ZjK9MaVjeCLE_LF",
        CropPreviewLabel: "_3_zyLDUyxZNyexfX3kNOPv",
      };
    },
    79821: (e, t, a) => {
      "use strict";
      a.d(t, { Kl: () => i, Yj: () => l, iH: () => n, zV: () => m });
      const i = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        n = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        r = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      i.filter((e) => !r.includes(e));
      let s;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (s || (s = o(i)), s);
      }
      function l(e, t = null, a = " ") {
        const i = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(i, a);
      }
      function m(e, t = null, a = "") {
        const i = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), a);
      }
    },
    3577: (e, t, a) => {
      "use strict";
      function i() {
        let e, t;
        return {
          promise: new Promise((a, i) => {
            (e = a), (t = i);
          }),
          resolve: e,
          reject: t,
        };
      }
      a.d(t, { x0: () => i });
    },
    57881: (e, t, a) => {
      "use strict";
      a.d(t, {
        $N: () => T,
        AH: () => o,
        CX: () => R,
        Dp: () => w,
        Ji: () => r,
        Q5: () => i,
        Xs: () => n,
        cD: () => h,
        qX: () => E,
        wz: () => k,
        yX: () => I,
        zF: () => s,
      });
      var i,
        n,
        r,
        s,
        o,
        l = a(80613),
        m = a.n(l),
        c = a(89068),
        d = a(56545);
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
            "k_ESteamAwardCategoryID_2023_MAX"),
          (e[(e.k_ESteamAwardCategoryID_2024_GameOfTheYear = 110)] =
            "k_ESteamAwardCategoryID_2024_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2024_VRGameOfTheYear = 111)] =
            "k_ESteamAwardCategoryID_2024_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2024_LaborOfLove = 112)] =
            "k_ESteamAwardCategoryID_2024_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2024_BestGameOnDeck = 113)] =
            "k_ESteamAwardCategoryID_2024_BestGameOnDeck"),
          (e[(e.k_ESteamAwardCategoryID_2024_BetterWithFriends = 114)] =
            "k_ESteamAwardCategoryID_2024_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2024_OutstandingVisualStyle = 115)] =
            "k_ESteamAwardCategoryID_2024_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2024_MostInnovativeGameplay = 116)] =
            "k_ESteamAwardCategoryID_2024_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2024_BestGameYouSuckAt = 117)] =
            "k_ESteamAwardCategoryID_2024_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2024_BestSoundtrack = 118)] =
            "k_ESteamAwardCategoryID_2024_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2024_OutstandingStoryRichGame = 119)] =
            "k_ESteamAwardCategoryID_2024_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2024_SitBackAndRelax = 120)] =
            "k_ESteamAwardCategoryID_2024_SitBackAndRelax"),
          (e[(e.k_ESteamAwardCategoryID_2025_GameOfTheYear = 130)] =
            "k_ESteamAwardCategoryID_2025_GameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2025_VRGameOfTheYear = 131)] =
            "k_ESteamAwardCategoryID_2025_VRGameOfTheYear"),
          (e[(e.k_ESteamAwardCategoryID_2025_LaborOfLove = 132)] =
            "k_ESteamAwardCategoryID_2025_LaborOfLove"),
          (e[(e.k_ESteamAwardCategoryID_2025_BestGameOnDeck = 133)] =
            "k_ESteamAwardCategoryID_2025_BestGameOnDeck"),
          (e[(e.k_ESteamAwardCategoryID_2025_BetterWithFriends = 134)] =
            "k_ESteamAwardCategoryID_2025_BetterWithFriends"),
          (e[(e.k_ESteamAwardCategoryID_2025_OutstandingVisualStyle = 135)] =
            "k_ESteamAwardCategoryID_2025_OutstandingVisualStyle"),
          (e[(e.k_ESteamAwardCategoryID_2025_MostInnovativeGameplay = 136)] =
            "k_ESteamAwardCategoryID_2025_MostInnovativeGameplay"),
          (e[(e.k_ESteamAwardCategoryID_2025_BestGameYouSuckAt = 137)] =
            "k_ESteamAwardCategoryID_2025_BestGameYouSuckAt"),
          (e[(e.k_ESteamAwardCategoryID_2025_BestSoundtrack = 138)] =
            "k_ESteamAwardCategoryID_2025_BestSoundtrack"),
          (e[(e.k_ESteamAwardCategoryID_2025_OutstandingStoryRichGame = 139)] =
            "k_ESteamAwardCategoryID_2025_OutstandingStoryRichGame"),
          (e[(e.k_ESteamAwardCategoryID_2025_SitBackAndRelax = 140)] =
            "k_ESteamAwardCategoryID_2025_SitBackAndRelax");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_EVoteDefinitionFlag_None = 0)] =
            "k_EVoteDefinitionFlag_None"),
            (e[(e.k_EVoteDefinitionFlag_OnlyVR = 1)] =
              "k_EVoteDefinitionFlag_OnlyVR"),
            (e[(e.k_EVoteDefinitionFlag_SteamDeck = 2)] =
              "k_EVoteDefinitionFlag_SteamDeck"),
            (e[(e.k_EVoteDefinitionFlag_LaborOfLove = 3)] =
              "k_EVoteDefinitionFlag_LaborOfLove");
        })(n || (n = {})),
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
              "k_ESteamAwardsNominationSource_PartnerEvent"),
            (e[(e.k_ESteamAwardsNominationSource_ModalPartnerEvent = 5)] =
              "k_ESteamAwardsNominationSource_ModalPartnerEvent"),
            (e[(e.k_ESteamAwardsNominationSource_ModalPlaytime = 6)] =
              "k_ESteamAwardsNominationSource_ModalPlaytime"),
            (e[(e.k_ESteamAwardsNominationSource_ModalRecommendation = 7)] =
              "k_ESteamAwardsNominationSource_ModalRecommendation");
        })(r || (r = {}));
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.voteid || c.Sg(_.M()),
            l.Message.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  voteid: { n: 1, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  active: { n: 2, br: c.qM.readBool, bw: c.gp.writeBool },
                  start_time: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  end_time: { n: 4, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  app_discounts: { n: 5, c: u, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  groups: { n: 7, c: g, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  localization: { n: 9, c: p },
                  reveal_time: {
                    n: 10,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  flag: { n: 13, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new _();
          return _.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || c.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  discount: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new u();
          return u.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.groupid || c.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  groupid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  group_name: {
                    n: 2,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  app_discounts: { n: 3, c: u, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new g();
          return g.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.title || c.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  title: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                  title_linebreak: {
                    n: 2,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new p();
          return p.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.language || c.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  language: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                  sale_appid: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new h();
          return h.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.votes || c.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  votes: { n: 1, c: _, r: !0, q: !0 },
                  labor_of_love_winners: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new y();
          return y.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.voteid || c.Sg(v.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  voteid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = c.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new v();
          return v.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class E extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.sale_appid || c.Sg(E.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = c.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new E();
          return E.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.user_votes || c.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { user_votes: { n: 1, c: v, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new b();
          return b.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class I extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.voteid || c.Sg(I.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  voteid: { n: 1, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = c.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new I();
          return I.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.user_votes || c.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { user_votes: { n: 1, c: v, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new S();
          return S.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.category_id || c.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  category_id: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new f();
          return f.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new w();
          return w.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class C extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.nominations || c.Sg(C.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { nominations: { n: 1, c: f, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = c.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new C();
          return C.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class A extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || c.Sg(A.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = c.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new A();
          return A.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class k extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.category_id || c.Sg(k.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  category_id: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  source: { n: 3, br: c.qM.readEnum, bw: c.gp.writeEnum },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = c.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new k();
          return k.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.nominations || c.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { nominations: { n: 1, c: f, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new B();
          return B.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class T extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.category_id || c.Sg(T.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  category_id: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = c.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new T();
          return T.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class G extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.played_app || c.Sg(G.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  played_app: { n: 1, c: D, r: !0, q: !0 },
                  suggested_events: { n: 2, c: M, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: L, r: !0, q: !0 },
                  debug_query: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = c.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class D extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || c.Sg(D.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  playtime: { n: 2, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = c.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.clanid || c.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  clanid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  appid: { n: 3, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new M();
          return M.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class L extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || c.Sg(L.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = c.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new L();
          return L.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class R extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.generate_new || c.Sg(R.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  generate_new: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = c.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new R();
          return R.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class F extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.code || c.Sg(F.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  code: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = c.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            a = new F();
          return F.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, d.I8)(h, t),
            y,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t) {
            return e.SendMsg("StoreSales.SetVote#1", (0, d.I8)(I, t), S, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t) {
            return e.SendMsg("StoreSales.GetUserVotes#1", (0, d.I8)(E, t), b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(s || (s = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, d.I8)(w, t),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, d.I8)(A, t),
                C,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t) {
              return e.SendMsg("SteamAwards.Nominate#1", (0, d.I8)(k, t), B, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (e.GetNominationRecommendations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, d.I8)(T, t),
                G,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, d.I8)(R, t),
                F,
                { ePrivilege: 1 },
              );
            });
        })(o || (o = {}));
    },
    12611: (e, t, a) => {
      "use strict";
      a.d(t, { eg: () => n, lw: () => i, qR: () => r });
      const i = "{STEAM_CLAN_IMAGE}",
        n = "{STEAM_CLAN_LOC_IMAGE}",
        r = "{STEAM_APP_IMAGE}";
    },
    73744: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ek: () => u,
        Fj: () => _,
        Ho: () => c,
        Kf: () => s,
        N_: () => v,
        XY: () => h,
        dM: () => r,
        qj: () => n,
        s4: () => p,
        vz: () => y,
        yu: () => g,
      });
      var i = a(37403);
      function n(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      function r(e) {
        const t = Array.isArray(e) ? e : [e];
        return Math.min(...t);
      }
      function s(e, t) {
        return void 0 === t ? n(e) : Array.isArray(e) ? e[t] : e;
      }
      const o = [
          i.bg.k_EClanImageFileType_JPEG,
          i.bg.k_EClanImageFileType_PNG,
          i.bg.k_EClanImageFileType_GIF,
          i.bg.k_EClanImageFileType_WEBP,
        ],
        l = [
          i.bg.k_EClanImageFileType_JPEG,
          i.bg.k_EClanImageFileType_PNG,
          i.bg.k_EClanImageFileType_GIF,
        ],
        m = [i.bg.k_EClanImageFileType_JPEG, i.bg.k_EClanImageFileType_PNG],
        c = [i.bg.k_EClanImageFileType_WEBM, i.bg.k_EClanImageFileType_MP4],
        d =
          (i.bg.k_EClanImageFileType_SRT,
          i.bg.k_EClanImageFileType_VTT,
          [
            i.bg.k_EClanImageFileType_JPEG,
            i.bg.k_EClanImageFileType_PNG,
            i.bg.k_EClanImageFileType_GIF,
            i.bg.k_EClanImageFileType_WEBP,
            i.bg.k_EClanImageFileType_WEBM,
            i.bg.k_EClanImageFileType_MP4,
          ]),
        _ = {
          capsule: { width: 800, height: 450, rgAcceptableTypes: m },
          marketingmessage_art_2_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: m,
          },
          marketingmessage_art_eventcapsule: {
            width: 800,
            height: 450,
            rgAcceptableTypes: m,
          },
          spotlight: { width: 2108, height: 460, rgAcceptableTypes: m },
          localized_store_app_spotlight: {
            width: 1200,
            height: 260,
            rgAcceptableTypes: m,
          },
          localized_store_app_spotlight_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          localized_title_image: {
            width: 1920,
            height: 622,
            rgAcceptableTypes: m,
          },
          background: { width: 1920, height: 622, rgAcceptableTypes: m },
          hero: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          email_full: { width: 800, height: 300, rgAcceptableTypes: m },
          email_centered: { width: 644, height: 300, rgAcceptableTypes: m },
          broadcast_left: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: m,
          },
          broadcast_right: {
            width: [199, 155],
            height: [433, 337],
            rgAcceptableTypes: m,
          },
          sale_header: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: l,
          },
          sale_overlay: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: l,
          },
          localized_image_group: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          localized_background_art: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          sale_section_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: l,
          },
          sale_section_title: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: l,
          },
          link_capsule: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          product_banner: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: m,
          },
          product_mobile_banner: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          product_banner_override: {
            width: [1200, 1100],
            height: [175, 160],
            rgAcceptableTypes: m,
          },
          product_mobile_banner_override: {
            width: 500,
            height: 160,
            rgAcceptableTypes: m,
          },
          schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: m },
          tab_bar_background: {
            width: 1500,
            height: 100,
            rgAcceptableTypes: m,
          },
          sale_logo: {
            width: [1200, 940],
            height: [460, 460],
            rgAcceptableTypes: m,
          },
          bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: l },
          bestofyear_banner_mobile: {
            width: 500,
            height: 160,
            rgAcceptableTypes: l,
          },
          localized_marketing_message: {
            width: 570,
            height: 600,
            rgAcceptableTypes: o,
          },
          localized_optin_banner: {
            width: 1e3,
            height: 150,
            rgAcceptableTypes: m,
          },
          localized_marketingmessage_webm: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_WEBM],
          },
          localized_marketingmessage_mp4: {
            width: 570,
            height: 600,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_MP4],
          },
          localized_partnerevent_webm: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_WEBM],
          },
          localized_partnerevent_mp4: {
            width: 800,
            height: 450,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_MP4],
          },
          localized_subtitles: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: [
              i.bg.k_EClanImageFileType_VTT,
              i.bg.k_EClanImageFileType_SRT,
            ],
          },
          localized_marketingmessage_poster: {
            width: 528,
            height: 297,
            rgAcceptableTypes: [
              i.bg.k_EClanImageFileType_JPEG,
              i.bg.k_EClanImageFileType_PNG,
            ],
          },
          localized_marketingmessage_background: {
            width: 570,
            height: 600,
            rgAcceptableTypes: m,
          },
          localized_email_image: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          template_asset: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: d,
          },
          user_poll_background: {
            width: 0,
            height: 0,
            bDisableEnforceDimensions: !0,
            rgAcceptableTypes: m,
          },
          spotlight_art: {
            width: [306, 374],
            height: [260, 448],
            rgAcceptableTypes: l,
          },
          old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: l },
          marketingmessage_art: {
            width: 570,
            height: 600,
            rgAcceptableTypes: l,
          },
          marketingmessage_art_2: {
            width: 570,
            height: 600,
            rgAcceptableTypes: l,
          },
          takeover_art: { width: 1850, height: 450, rgAcceptableTypes: l },
          takeover_webm_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_WEBM],
          },
          takeover_mp4_art: {
            width: 1850,
            height: 450,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_MP4],
          },
          takeover_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: l,
          },
          takeover_webm_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_WEBM],
          },
          takeover_mp4_mobile_art: {
            width: 500,
            height: 350,
            rgAcceptableTypes: [i.bg.k_EClanImageFileType_MP4],
          },
          takeunder_art: { width: 940, height: 150, rgAcceptableTypes: l },
          takeunder_mobile_art: {
            width: 500,
            height: 160,
            rgAcceptableTypes: l,
          },
          app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: m },
          app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: m },
        };
      function u(e, t, a, i) {
        let n = null;
        if (Array.isArray(a)) {
          if (
            ((n = a
              .map((t, a) => (e === t ? a : void 0))
              .filter((e) => void 0 !== e)),
            n.length <= 0)
          )
            return !1;
        } else if (e !== a) return !1;
        if (Array.isArray(i)) {
          const e = i
            .map((e, a) => (t === e ? a : void 0))
            .filter((e) => void 0 !== e);
          if (e.length <= 0) return !1;
          if (n?.length && !e.some((e) => n.includes(e))) return !1;
        } else if (t !== i) return !1;
        return !0;
      }
      function g(e, t, a, i) {
        const n = _[a];
        return (
          !!n &&
          (n.bDisableEnforceDimensions ? !!i : u(e, t, n.width, n.height))
        );
      }
      function p(e, t, a) {
        const i = _[a];
        if (!i) return !1;
        if (i.bDisableEnforceDimensions) return !0;
        if (Array.isArray(i.width)) {
          if (i.width.filter((t) => e < t).length == i.width.length) return !1;
        } else if (e < i.width) return !1;
        if (Array.isArray(i.height)) {
          if (i.height.filter((e) => t < e).length == i.height.length)
            return !1;
        } else if (t < i.height) return !1;
        return !0;
      }
      function h(e) {
        const t = _[e];
        return (
          t.rgAcceptableTypes.includes(i.bg.k_EClanImageFileType_VTT) ||
          t.rgAcceptableTypes.includes(i.bg.k_EClanImageFileType_SRT)
        );
      }
      function y(e, t) {
        return t.filter((t) => v(e, t));
      }
      function v(e, t) {
        return _[t].rgAcceptableTypes.includes(e);
      }
    },
    89128: (e, t, a) => {
      "use strict";
      a.d(t, {
        FZ: () => ye,
        A4: () => D,
        iy: () => T,
        ZA: () => H,
        Dn: () => W,
        CU: () => oe,
        Ay: () => se,
        ye: () => re,
        Fo: () => me,
        G$: () => ce,
        Xx: () => N,
        DJ: () => ge,
        G6: () => de,
        zv: () => q,
        IS: () => Q,
        GE: () => $,
        yX: () => K,
        w: () => _e,
        EE: () => Y,
        Zf: () => J,
        jR: () => Z,
        Ac: () => ve,
        lh: () => Ie,
        Hc: () => ue,
        mz: () => ie,
        qQ: () => te,
        MW: () => ae,
        W2: () => ee,
        Pm: () => le,
        qR: () => ne,
        _B: () => V,
        j3: () => Se,
        Yw: () => X,
        zK: () => R,
        DU: () => L,
        mW: () => j,
        wv: () => U,
        Ro: () => O,
        GU: () => F,
        bv: () => P,
        Kd: () => z,
        cB: () => pe,
      });
      var i = a(34629),
        n = a(79821),
        r = a(2160),
        s = a(22837),
        o = a(57881),
        l = a(14947);
      const m = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(s.gS.k_Lang_MAX),
        localized_broadcast_left_image: new Array(s.gS.k_Lang_MAX),
        localized_broadcast_right_image: new Array(s.gS.k_Lang_MAX),
        broadcast_whitelist: [],
      };
      var c = a(17720),
        d = a(27666),
        _ = a(86355),
        u = a(68359),
        g = a(4796),
        p = a(67165),
        h = a(44165),
        y = a(82097),
        v = a(81393),
        E = a(61859),
        b = a(25489),
        I = a(27543),
        S = (a(41735), a(90626), a(68797), a(78327));
      var f = a(41338),
        w = a(14771),
        C = a(6419);
      (0, i.Cg)(
        [C.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      var A = a(61336);
      const k = 99999;
      const B = [
        s.Mv.k_ERegularUpdateEvent,
        s.Mv.k_EMajorUpdateEvent,
        s.Mv.k_EESportTournamentStreamEvent,
        s.Mv.k_EDevStreamEvent,
        s.Mv.k_EFamousStreamEvent,
        s.Mv.k_EInGameBonusXPEvent,
        s.Mv.k_EInGameLootEvent,
        s.Mv.k_EInGamePerksEvent,
        s.Mv.k_EInGameEventGeneral,
        s.Mv.k_EInGameChallengeEvent,
        s.Mv.k_EInGameContestEvent,
        s.Mv.k_ENewsEvent,
        s.Mv.k_EDLCReleaseEvent,
        s.Mv.k_ESeasonRelease,
        s.Mv.k_EGameReleaseEvent,
      ];
      function T(e) {
        return (
          B.some((t) => t == e.GetEventType()) &&
          !e.BHasTag("steam_award_nomination_request") &&
          !e.BHasTag("curator")
        );
      }
      const G = [
        s.Mv.k_EGameSalesEvent,
        s.Mv.k_EFreeTrial,
        s.Mv.k_ECrosspostEvent,
      ];
      function D(e) {
        return !G.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      s.Mv.k_ESmallUpdateEvent, s.Mv.k_ECrosspostEvent;
      const M = [
        s.Mv.k_EChatEvent,
        s.Mv.k_EBroadcastEvent,
        s.Mv.k_EGameSalesEvent,
        s.Mv.k_EGameItemSalesEvent,
        s.Mv.k_EInGameBonusXPEvent,
        s.Mv.k_EInGameLootEvent,
        s.Mv.k_EInGamePerksEvent,
        s.Mv.k_EInGameChallengeEvent,
        s.Mv.k_EInGameContestEvent,
        s.Mv.k_EIRLEvent,
        s.Mv.k_EFreeTrial,
        s.Mv.k_EInGameEventGeneral,
      ];
      new Set(M);
      const L = 593110,
        R = [L, 766, 221410],
        F = 39049601,
        P = 41316928,
        O = 4397053,
        z = 4,
        j = 20,
        U = 45559995,
        x = [s.Mv.k_ESmallUpdateEvent, s.Mv.k_ECrosspostEvent];
      function H(e) {
        return !x.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      function W(e) {
        const t = 60 * w.Kp.PerDay;
        return (
          e.BIsVisibleEvent() &&
          e.BIsOGGEvent() &&
          (e.rtime32_last_modified ?? 0) > h.HD.GetTimeNowWithOverride() - t &&
          !N(e)
        );
      }
      function N(e) {
        return e.BHasTag("mod_reviewed") && !e.BHasTag("mod_require_rereview");
      }
      var q;
      function V(e) {
        switch (e) {
          case "links":
          case "itemdef":
            return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
          case "contenthubspecials":
            return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
          default:
            return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
        }
      }
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (e[(e.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(q || (q = {}));
      const X = "bordered";
      var Y, $, K, Q, J, Z;
      function ee(e) {
        return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
      }
      function te(e) {
        return e.carousel_rows || 1;
      }
      function ae(e) {
        return e.cap_item_count || 0;
      }
      function ie(e) {
        return e.cap_section_row_count && e.cap_section_row_count > 0
          ? e.cap_section_row_count
          : "trailercarousel" == e.section_type
            ? 1
            : e.cap_section_content
              ? 4
              : 0;
      }
      function ne(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function re(e) {
        switch (e) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function se(e) {
        switch (e) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function oe(e) {
        return Boolean(
          e &&
            (function (e) {
              switch (e) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(e.section_type) &&
            e.smart_section &&
            null != e.smart_section_type,
        );
      }
      function le(e) {
        return oe(e) ? e?.smart_section_type : void 0;
      }
      function me(e, t) {
        if (!e.BIsNextFest() || re(t.section_type) || oe(t)) return !1;
        return (
          ((e.jsondata.sale_ml_recommender_delay_hours &&
            (e.startTime ?? 0) +
              e.jsondata.sale_ml_recommender_delay_hours * w.Kp.PerHour -
              new Date().getTime() / 1e3) ??
            0) > 0
        );
      }
      function ce(e, t) {
        return !!t.use_random_order || !!me(e, t);
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(Y || (Y = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })($ || ($ = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(K || (K = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(Q || (Q = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(J || (J = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(Z || (Z = {}));
      const de = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(s.gS.k_Lang_MAX),
        localized_label_image: new Array(s.gS.k_Lang_MAX),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var _e;
      function ue(e) {
        return {
          arrowFill: e?.sale_carousel_arrow_color,
          arrowStyle: e?.sale_carousel_arrow_style,
          breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
          breadcrumbColor: e?.sale_carousel_breadcrumb_color,
          breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
        };
      }
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(_e || (_e = {}));
      const ge = {
          localized_subtitle: new Array(s.gS.k_Lang_MAX),
          localized_summary: new Array(s.gS.k_Lang_MAX),
          localized_title_image: new Array(s.gS.k_Lang_MAX),
          localized_capsule_image: new Array(s.gS.k_Lang_MAX),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(s.gS.k_Lang_MAX),
          localized_sale_overlay: new Array(s.gS.k_Lang_MAX),
          localized_sale_product_banner: new Array(s.gS.k_Lang_MAX),
          localized_sale_product_mobile_banner: new Array(s.gS.k_Lang_MAX),
          localized_sale_logo: new Array(s.gS.k_Lang_MAX),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...m,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        pe = "old_announce_",
        he = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        ye = [
          "steam_blog_featured",
          "workshop",
          "steam_blog",
          "blog",
          "audience_followers",
          "steamvr",
          "patchnotes",
          "steam_library_beta",
          "hide_library_overview",
          "mod_hide_library_overview",
          "hide_library_detail",
          "mod_hide_library_detail",
          "hide_store",
          "mod_hide_store",
          "halloween2019candidate",
          "halloween2019",
          "halloween2019reviewed",
          "horror",
          "cute",
          "halloween",
          "mod_reviewed",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "curator",
          "curator_group_members",
          "curator_public",
          "mod_require_rereview",
          "auto_rssfeed",
          "auto_migrated",
          "enable_steam_china",
          "disable_steam_global",
          "skip_megaphone",
          "seasonal_sale_featuring",
          "show_library_demo_detail",
          "clear_library_demo_detail",
          "repost_source_possible",
          "autocreate_promotools",
          "vo_marketing_message",
        ],
        ve = [
          "patchnotes",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "mod_hide_library_overview",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "halloween",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
        ],
        Ee = [
          s.Mv.k_EGameSalesEvent,
          s.Mv.k_EFreeTrial,
          s.Mv.k_ECrosspostEvent,
        ],
        be = [
          s.Mv.k_EChatEvent,
          s.Mv.k_EBroadcastEvent,
          s.Mv.k_EGameSalesEvent,
          s.Mv.k_EGameItemSalesEvent,
          s.Mv.k_EInGameBonusXPEvent,
          s.Mv.k_EInGameLootEvent,
          s.Mv.k_EInGamePerksEvent,
          s.Mv.k_EInGameChallengeEvent,
          s.Mv.k_EInGameContestEvent,
          s.Mv.k_EIRLEvent,
          s.Mv.k_EFreeTrial,
          s.Mv.k_EInGameEventGeneral,
        ];
      class Ie {
        constructor() {
          (0, l.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new c.b();
        forumTopicGID = void 0;
        type = s.Mv.k_EOtherEvent;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = q.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = ge;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new Ie(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new c.b(a.clanSteamID)),
            (0, v.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new c.b(a.broadcaster)),
              (0, v.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new Ie();
          if (
            ((t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new c.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  he.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let a of t.jsondata.email_setting.sections)
              a.unique_id || ((a.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (a =
                  void 0 === a
                    ? e.visibility_index
                    : Math.max(a, e.visibility_index));
            }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const a of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(a.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = h.HD.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = E.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          return y.A.Get().GetApp(this.appid)?.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !E.A0.IsELanguageValidInRealm(e, r.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !E.A0.IsELanguageValidInRealm(e, r.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const e = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header?.[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : _.pb.includes(e)
                  ? (t = u.R.GetAllLocalizedGroupImageHashAndExts())
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = s.gS.k_Lang_English, a = _.wI.full) {
          const i = this.GetImgArray(e),
            n = i && i.length > t && null != i[t];
          return n && i[t]?.startsWith("http")
            ? i[t]
            : n
              ? d.z.GenerateURLFromHashAndExt(this.clanSteamID, i[t] ?? "", a)
              : void 0;
        }
        GetImageHash(e, t = s.gS.k_Lang_English) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = s.gS.k_Lang_English) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t] ? a[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return !!a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              S.TS.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                S.TS.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            S.TS.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return h.HD.GetTimeNowWithOverride() < (this.startTime ?? 0);
        }
        BHasEventEnded() {
          return (this.endTime ?? 0) < h.HD.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, b.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, b.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let i = a.substring(e, t).trim();
                if (0 != i.length) return d.z.ReplacementTokenToClanImageURL(i);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        GetImageURLWithFallback(e, t, a = _.wI.full, i = !0) {
          const n = this.GetImageURL(e, t, a);
          if (n && n.trim().length > 0) return n;
          const r = E.A0.GetELanguageFallback(t);
          if (t != r) {
            const t = this.GetImageURL(e, r, a);
            if (t && t.trim().length > 0) return t;
          }
          const s = g.ac.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e && (i || (0, A.ZF)(e))) return e;
            let a = this.appid;
            if (!a && s && ((s.is_creator_home && !s.is_ogg) || s.is_curator)) {
              if (!this.jsondata?.referenced_appids?.length)
                return s.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            const n = y.A.Get().GetApp(a);
            return n && n.GetAssets()
              ? n.GetAssets()?.GetMainCapsuleURL()
              : s?.avatar_full_url
                ? s.avatar_full_url
                : S.TS.STORE_ICON_BASE_URL + a + "/header.jpg";
          }
          return "background" == e &&
            s &&
            ((s.is_creator_home && !s.is_ogg) || s.is_curator)
            ? s.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          if (this.appid) {
            y.A.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const e = y.A.Get().GetApp(this.appid);
            let t = Number(
                this.bOldAnnouncement
                  ? this.AnnouncementGID
                  : null == this.GID
                    ? 0
                    : this.GID,
              ),
              a = e?.GetScreenshots(e.BHasAgeSafeScreenshots());
            return a && a.length > 1 ? ((t %= a.length), a[t]) : "";
          }
          if (this.clanSteamID && this.GetEventType() != s.Mv.k_ECreatorHome) {
            const e = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const i = E.A0.GetELanguageFallback(t);
            t != i && (a = this.GetImageURL(e, i));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, i) {
          let n = new Array();
          if (!this.BImageNeedScreenshotFallback(e, t)) {
            const i = this.GetImageURLWithFallback(e, t, a);
            if ((i && n.push(i), a != _.wI.full)) {
              const a = this.GetImageURLWithFallback(e, t, _.wI.full);
              a && n.push(a);
            }
          }
          const r = this.GetFallbackArtworkScreenshot();
          return r && !i && n.push(r), n;
        }
        GetDescriptionWithFallback(e) {
          const t = E.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          const a = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            i = E.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != i && null != this.GetImageURL(e, i)) ||
            (this.appid &&
              y.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
            (!this.appid &&
              a &&
              ((a.is_creator_home && !a.is_ogg) || a.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(h.HD.GetTimeNowWithOverride());
          return (
            this.visibility_state == q.k_EEventStateUnlisted ||
            (this.visibility_state == q.k_EEventStateVisible &&
              e > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                e < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == q.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == q.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > h.HD.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > h.HD.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? E.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            E.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            Ie.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            E.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            Ie.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return E.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, n.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, n.zV)(e, ["p"], " ")),
              (e = (0, n.zV)(e)),
              (e = (0, f.aX)(e)),
              (0, f.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t?.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(e) {
          if (!e) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (Ee.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(be.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * w.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = h.HD.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            E.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, E.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((e) =>
              c.b.InitFromAccountID(e).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL() {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              S.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              S.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? S.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? S.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? S.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, E.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? S.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? S.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : S.TS.STORE_BASE_URL + e.type
              : S.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (p.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
              const e = p.pF.GetCreatorHome(this.clanSteamID);
              return (
                e?.GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              S.TS.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return S.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, a, i) {
          const n = [],
            r = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let s = 100009;
          return (
            e &&
              n.push({
                ...r,
                section_type: "footer_self_creator_home",
                unique_id: s++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              n.push({
                ...r,
                section_type: "footer_browse_more",
                unique_id: s++,
              }),
            i &&
              n.push(this.GenerateDynamicCreatorHomeItemBrowserSection(s++, r)),
            a &&
              n.push({
                ...r,
                section_type: "footer_default_social_share",
                unique_id: s++,
              }),
            n
          );
        }
        GetSaleSectionIncludingFooterSections() {
          const e = this.jsondata?.sale_show_creator,
            t = this.jsondata.sale_browse_more_button,
            a =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            i = this.GetEventType() == s.Mv.k_ECreatorHome;
          return e || t || a || i
            ? [
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!e, !!t, a, i),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e) {
          if (e > k) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(e) {
          return (
            this.jsondata.sale_sections?.filter((t) => t.section_type == e) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(e) {
          const t = this.jsondata.sale_sections?.length ?? 0;
          if (0 != t)
            for (let a = 0; a < t; ++a)
              if (this.jsondata.sale_sections[a].section_type === e)
                return this.jsondata.sale_sections[a];
        }
        static AccumulateCapsuleListIDs(e, t, a, i) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((i && !i(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const a = new Set(e),
            i = new Set();
          if (
            ((0, v.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == S.TS.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            this.jsondata.tagged_items?.forEach((e) => {
              Ie.AccumulateCapsuleListIDs([e.capsule], a, i, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (re(e.section_type))
                Ie.AccumulateCapsuleListIDs(e.capsules, a, i, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const n of e.tabs)
                  Ie.AccumulateCapsuleListIDs(n.capsules, a, i, t);
            }),
            i
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, I.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, E.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, E.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, E.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, E.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        this.type == s.Mv.k_EBroadcastEvent)
                    ? (0, E.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, E.we)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return (
            this.jsondata.steam_award_category_suggestion ??
            o.Q5.k_ESteamAwardCategoryID_Invalid
          );
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === _e.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[e]
            : void 0;
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.BInRealmGlobal() && e.push(r.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(r.TU.k_ESteamRealmChina),
            (0, v.wT)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest() {
          const e = this.jsondata.sale_vanity_id;
          return (
            new c.b(this.clanSteamID).GetAccountID() == F &&
            e &&
            e.toLowerCase().startsWith("nextfest")
          );
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t) {
          return {
            ...t,
            section_type: "sale_item_browser",
            unique_id: e,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
            },
            enable_faceted_browsing:
              (p.pF.GetCreatorHome(this.clanSteamID)?.GetAppIDList().length ??
                0) >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            facet_sort_order: 1,
            facet_auto_generate_options: {
              only_facets: [
                { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      (0, i.Cg)([l.sH], Ie.prototype, "GID", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "AnnouncementGID", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "forumTopicGID", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "type", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "appid", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "name", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "description", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "timestamp_loc_updated", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "startTime", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "endTime", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "visibilityStartTime", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "visibilityEndTime", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "m_nBuildID", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "m_strBuildBranch", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "postTime", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "visibility_state", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "broadcaster", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "jsondata", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "nCommentCount", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "nVotesUp", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "nVotesDown", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "bOldAnnouncement", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "announcementClanSteamID", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "loadedAllLanguages", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "bLoaded", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "deleteInProgress", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "vecTags", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "last_update_steamid", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "rtime32_last_modified", void 0),
        (0, i.Cg)(
          [l.sH],
          Ie.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, i.Cg)(
          [l.sH],
          Ie.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, i.Cg)([l.sH], Ie.prototype, "rtime32_moderator_reviewed", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "video_preview_type", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "video_preview_id", void 0),
        (0, i.Cg)([l.sH], Ie.prototype, "m_overrideCurrentDay", void 0);
      function Se(e) {
        return e?.replace(/[()]/g, "\\$&");
      }
    },
    38390: (e, t, a) => {
      "use strict";
      a.d(t, { B9: () => _, G4: () => c, RR: () => d, hE: () => u });
      var i = a(90626),
        n = a(37085),
        r = a(6379),
        s = a(4434),
        o = a(17720),
        l = a(78327),
        m = (a(17690), a(61859));
      a(41735), a(68797);
      function c(e, t = 0, a) {
        const [n, m] = (0, i.useState)(r.O3.GetClanEventFromAnnouncementGID(e)),
          c = (0, s.m)("usePartnerEventByAnnouncementGID");
        return (
          (0, i.useEffect)(() => {
            if (n?.AnnouncementGID != e) {
              r.O3.Init();
              const i = new o.b(l.UF.CLANSTEAMID);
              r.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                i,
                e,
                t,
                a,
              ).then((e) => {
                e && !c.token.reason && m(e);
              });
            }
          }, [e, t, a, n, c]),
          n
        );
      }
      function d(e) {
        const [t, a] = (0, i.useState)(() => r.O3.GetClanEventModel(e)),
          n = (0, s.m)("usePartnerEventByEventGID");
        return (
          (0, i.useEffect)(() => {
            e &&
              t?.GID != e &&
              (r.O3.Init(),
              r.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                n,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || n.token.reason || a(t[0]);
              }));
          }, [e, t, n]),
          t
        );
      }
      function _(e, t, a) {
        const [l, m] = (0, i.useState)(t ? r.O3.GetClanEventModel(t) : void 0),
          [c, d] = (0, i.useState)(!!e && !!t),
          [_, u] = (0, i.useState)(),
          [g, p] = (0, i.useState)(n.d.k_EResultOK),
          h = (0, s.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, i.useEffect)(() => {
            (async () => {
              try {
                if (l?.GID != t && t && e) {
                  r.O3.Init();
                  const i = o.b.InitFromClanID(e);
                  let s;
                  try {
                    s =
                      await r.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        i,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    u(e?.response?.data?.err_msg),
                      p(e?.response?.data?.success || n.d.k_EResultFail);
                  }
                  h.token.reason || m(s);
                }
              } finally {
                d(!1);
              }
            })();
          }, [e, t, l, a, h]),
          { eventModel: l, bLoading: c, sErrorMessage: _, eResult: g }
        );
      }
      function u(e) {
        let t = "" + e;
        const a = m.A0.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
    },
    78511: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => o, q: () => l });
      var i = a(34629),
        n = a(14947),
        r = a(37403),
        s = a(82705);
      function o(e) {
        return "waiting" == e || "uploading" == e || "processing" == e;
      }
      class l {
        m_originalSize = { width: 0, height: 0 };
        m_originalDataUrl = "";
        dataUrl = void 0;
        width = 0;
        height = 0;
        status = "pending";
        message = "";
        language = void 0;
        file;
        filename;
        uploadTime;
        fileType;
        constructor(e, t, a, i, o) {
          (0, n.Gn)(this),
            (this.file = e),
            (this.filename = t),
            (this.fileType = (0, s.yh)(t) ?? r.bg.k_EClanImageFileType_Unknown),
            (this.language = a),
            (this.uploadTime = Date.now()),
            (this.status = "pending"),
            (this.m_originalSize = o),
            (this.height = o.height),
            (this.width = o.width),
            (this.m_originalDataUrl = i),
            (this.dataUrl = i);
        }
        ResetImage() {
          (this.height = this.m_originalSize.height),
            (this.width = this.m_originalSize.width),
            (this.dataUrl = this.m_originalDataUrl);
        }
        GetImageOptionLabel() {}
      }
      (0, i.Cg)([n.sH], l.prototype, "dataUrl", void 0),
        (0, i.Cg)([n.sH], l.prototype, "width", void 0),
        (0, i.Cg)([n.sH], l.prototype, "height", void 0),
        (0, i.Cg)([n.sH], l.prototype, "status", void 0),
        (0, i.Cg)([n.sH.ref], l.prototype, "message", void 0),
        (0, i.Cg)([n.sH], l.prototype, "language", void 0);
    },
    28954: (e, t, a) => {
      "use strict";
      a.d(t, { VE: () => w, bT: () => C, zO: () => A });
      var i = a(34629),
        n = a(22837),
        r = a(81393),
        s = a(64753),
        o = a(41735),
        l = a.n(o),
        m = a(14947),
        c = a(90626),
        d = a(73744),
        _ = a(68797),
        u = a(6419),
        g = a(56011),
        p = a(61859),
        h = a(78327),
        y = a(86355),
        v = a(82817),
        E = a(27666),
        b = a(64953),
        I = a(69343);
      function S(e, t, a) {
        const i = (0, d.Kf)(t.width, a),
          n = (0, d.Kf)(t.height, a);
        return {
          sKey: `${e}_${i}x${n}`,
          width: i,
          height: n,
          bEnforceDimensions: !t.bDisableEnforceDimensions,
          artworkType: e,
          bHiddenFromDropdown: "hero" === e,
          bDeprecated: (a ?? 0) >= 1,
          fnGetLabelText() {
            return "spotlight" == this.artworkType
              ? (0, p.we)("#EventEditor_ArtworkType_store_spotlight")
              : (0, p.we)("#EventEditor_ArtworkType_" + this.artworkType);
          },
        };
      }
      class f extends I.Vr {
        m_filesToUpload = m.sH.array();
        m_filesCompleted = m.sH.array();
        m_clanImagesV2;
        m_clanSteamID;
        m_rgImageOptions;
        m_localizedImageGroupPrimaryImage;
        m_lastError = void 0;
        constructor(e, t, a, i) {
          var n;
          super(),
            (0, m.Gn)(this),
            (this.m_clanSteamID = e),
            (this.m_rgImageOptions =
              ((n = t),
              n?.flatMap((e) => {
                const t = d.Fj[e];
                if (
                  ((0, r.wT)(Boolean(t), `Artwork Type not in Map ${e}`),
                  "number" == typeof t.width && "number" == typeof t.height)
                )
                  return [S(e, t)];
                {
                  let a = Math.max(
                    Array.isArray(t.width) ? t.width.length : 1,
                    Array.isArray(t.height) ? t.height.length : 1,
                  );
                  return Array.from({ length: a }, (a, i) => S(e, t, i));
                }
              }))),
            (this.m_localizedImageGroupPrimaryImage = a),
            (this.m_clanImagesV2 = i ?? !1);
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        async AddImage(e, t = n.gS.k_Lang_English) {
          const { language: a } = (0, I.jj)(e.name, t);
          return this.AddImageForLanguage(e, a);
        }
        async AddImageForLanguage(e, t) {
          if (!((0, v.aL)(e.type) || (h.iA.is_support && (0, v.Uz)(e.type))))
            return !1;
          const a = await (0, v.zB)(e, (0, v.Uz)(e.type));
          if (!a) return !1;
          const i = new b.M7(
            e,
            e.name,
            t,
            this.m_rgImageOptions,
            a.src,
            (0, v.II)(a),
            a,
            this.m_localizedImageGroupPrimaryImage,
          );
          return (this.m_filesToUpload = [...this.m_filesToUpload, i]), !0;
        }
        async AddExistingClanImage(e, t = n.gS.k_Lang_English) {
          const a = E.z.GetHashAndExt(e);
          if (!a) return !1;
          const i = E.z.GenerateEditableURLFromHashAndExt(
              this.m_clanSteamID,
              a,
            ),
            r = await l()({ url: i, method: "GET", responseType: "blob" }),
            s = (0, g.pE)(r.data, e.file_name);
          return await this.AddImage(s, t);
        }
        DeleteUploadImageByIndex(e) {
          this.m_filesToUpload.splice(e, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]);
        }
        DeleteUploadImage(e) {
          let t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime,
          );
          t >= 0 && this.DeleteUploadImageByIndex(t);
        }
        ClearImages() {
          this.m_filesToUpload = m.sH.array();
        }
        GetFilesUploaded() {
          return this.m_filesCompleted;
        }
        GetLastErrorFile() {
          return this.m_lastError;
        }
        GetCompletedFiles() {
          return this.m_filesCompleted.length;
        }
        GetTotalFiles() {
          return this.m_filesToUpload.length;
        }
        GetFilesToUpload() {
          return this.m_filesToUpload.map((e) => e.file);
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        BHasError() {
          return null != this.m_lastError;
        }
        BAllDone() {
          return (
            this.m_filesCompleted.length > 0 &&
            this.m_filesCompleted.length == this.m_filesToUpload.length
          );
        }
        BIsFileCompleted(e) {
          return -1 != this.m_filesCompleted.indexOf(e);
        }
        RetryAllFailedUploads() {
          this.CancelAllUploads(), this.UploadAllImages();
        }
        async handleUploadRefresh(e) {
          await y.pU.LoadClanImages(this.m_clanSteamID, !0, e);
        }
        BGetUploadsAreInSerial() {
          return !1;
        }
        async UploadSingleImage(e, t, a, i) {
          const n = e.file,
            r = e.GetCurrentImageOption(),
            s = e.GetResizeDimension(),
            o = new FormData();
          o.append("clanimage", n, t),
            o.append("sessionid", h.TS.SESSIONID),
            this.m_clanImagesV2 && o.append("clan_images_v2", "1"),
            r?.artworkType && o.append("arttype", r.artworkType),
            s &&
              s.length > 0 &&
              o.append(
                "resize",
                s.map((e) => e.width + "x" + e.height).join(","),
              );
          let m = "/uploadimage/";
          const c = this.m_localizedImageGroupPrimaryImage;
          c &&
            ((m = "/ajaxuploadlocalizedimage/"),
            o.append("origimagehash", c.image_hash),
            c.thumbnail_hash && o.append("thumbhash", c.thumbnail_hash),
            o.append("extension", "" + c.file_type),
            o.append("language", "" + a));
          const d = t.split(".").pop()?.toLocaleLowerCase();
          ("webm" != d && "mp4" != d) ||
            (o.append("video_width", "" + e.width),
            o.append("video_height", "" + e.height));
          let u,
            g =
              h.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              this.m_clanSteamID.ConvertTo64BitString() +
              m,
            p = {
              cancelToken: i,
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            },
            y = !0;
          try {
            (u = await l().post(g, o, p)), this.m_filesCompleted.push(n);
          } catch (e) {
            (y = !1),
              (this.m_lastError = {
                file: n,
                status: e.response ? e.response.status : 500,
                message: (0, _.H)(e).strErrorMsg,
              }),
              (u = e.response);
          }
          return (
            c || (await this.handleUploadRefresh(i)),
            { bSuccess: y, result: u.data }
          );
        }
      }
      (0, i.Cg)([m.sH], f.prototype, "m_filesToUpload", void 0),
        (0, i.Cg)([m.sH], f.prototype, "m_filesCompleted", void 0),
        (0, i.Cg)([m.sH], f.prototype, "m_lastError", void 0),
        (0, i.Cg)([u.o], f.prototype, "AddImage", null),
        (0, i.Cg)([u.o], f.prototype, "AddExistingClanImage", null),
        (0, i.Cg)([u.o], f.prototype, "DeleteUploadImageByIndex", null),
        (0, i.Cg)([u.o], f.prototype, "DeleteUploadImage", null),
        (0, i.Cg)([u.o], f.prototype, "ClearImages", null);
      class w extends f {
        constructor(e, t, a) {
          super(e, t, a, !1);
        }
      }
      async function C(e, t, a, i, n) {
        let r =
            h.TS.COMMUNITY_BASE_URL +
            "/gid/" +
            t.ConvertTo64BitString() +
            "/resizeimage/",
          s = new FormData();
        return (
          s.append("imagehash", a),
          s.append("extension", i),
          s.append("resize", n.map((e) => e.width + "x" + e.height).join(",")),
          s.append("sessionid", h.TS.SESSIONID),
          (await l().post(r, s, { cancelToken: e })).data.count
        );
      }
      function A(e, t, a) {
        const i = (0, s.wm)(t instanceof Array ? t : [t]),
          n = e.ConvertTo64BitString();
        return c.useMemo(() => new w(e, i, a), [n, i]);
      }
    },
    27666: (e, t, a) => {
      "use strict";
      a.d(t, { z: () => y });
      var i = a(12611),
        n = a(30470),
        r = a(22837),
        s = a(37085),
        o = a(37403),
        l = a(17720),
        m = a(28954),
        c = a(81393),
        d = a(68797),
        _ = a(14771),
        u = a(82817),
        g = a(86355),
        p = a(64953),
        h = a(3577);
      const y = {
        GetBaseURL: () => `${n.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${n.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(i.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, u.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, t, a = g.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(
            e,
            t,
            a,
            r.gS.k_Lang_None,
            void 0,
          );
        },
        GenerateURLFromHashAndExtAndLang(e, t, a = g.wI.full, i, n) {
          e instanceof l.b && (e = e.GetAccountID());
          let s = this.GetBaseURL();
          const o = null != i && i != r.gS.k_Lang_None;
          if (a != g.wI.full || o) {
            let l = t.substring(t.lastIndexOf(".")),
              m = t.substring(0, t.length - l.length);
            return o && i != r.gS.k_Lang_English && "localized_image_group" == n
              ? s + e + "/" + m + "/" + (0, r.x6)((0, r.Lg)(i)) + l
              : s + e + "/" + m + a + l;
          }
          return s + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, a) {
          let i =
            n.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (i += "&lang=" + a), i;
        },
        GetMimeType: (e) => (0, u.ab)(e),
        async AsyncGetImageResolution(e, t, a, i, n) {
          const r = t + this.GetExtensionString({ file_type: a }),
            s = this.GenerateEditableURLFromHashAndExt(e, r);
          return await this.AsyncGetImageResolutionInternal(s, i, n);
        },
        async AsyncGetImageResolutionInternal(e, t, a) {
          const i = (0, h.x0)();
          let n = new Image();
          (n.crossOrigin = "anonymous"),
            (n.onerror = (t) => {
              const n = { success: s.d.k_EResultFail };
              a ||
                ((n.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, d.H)(t).strErrorMsg),
                console.error(n.err_msg)),
                (n.success = s.d.k_EResultFail),
                i.resolve(n);
            }),
            (n.onload = () => {
              const t = { success: s.d.k_EResultFail };
              (t.width = n.width),
                (t.height = n.height),
                (0, c.wT)(
                  t.width > 0 && t.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (t.success = s.d.k_EResultOK),
                i.resolve(t);
            }),
            (n.src = e),
            t.token.promise.catch(() => {
              const e = { success: s.d.k_EResultFail };
              return (
                (n.onload = () => {}), (e.success = s.d.k_EResultCancelled), e
              );
            });
          const r = new Promise((e, t) => setTimeout(() => t(), 1e4));
          let o;
          try {
            o = await Promise.race([r, i.promise]);
          } catch {
            o = {
              success: s.d.k_EResultTimeout,
              err_msg: "We timed out processing images",
            };
          }
          return o;
        },
        async OverlayClanImage(e, t, a, i, n, o) {
          let l,
            c = null,
            u = new Image();
          (u.crossOrigin = "anonymous"),
            (u.onerror = (e) => {
              (l =
                "Load fail on url " +
                a +
                " with error: " +
                (0, d.H)(e).strErrorMsg),
                console.error(l);
            }),
            (u.onload = () => {
              let e = new Image();
              (e.crossOrigin = "anonymous"),
                (e.onerror = (e) => {
                  (l =
                    "Load fail on url " +
                    t +
                    " with error: " +
                    (0, d.H)(e).strErrorMsg),
                    console.error(l);
                }),
                (e.onload = () => {
                  try {
                    let t = document.createElement("canvas"),
                      a = t.getContext("2d");
                    (t.width = n), (t.height = o), a?.drawImage(e, 0, 0, n, o);
                    let i = (n - u.width) / 2,
                      r = (o - u.height) / 2;
                    a?.drawImage(u, i, r),
                      t.toBlob((e) => (c = e), "image/jpeg");
                  } catch (e) {
                    l =
                      "Failed during image processing for " + i + " with " + e;
                  }
                }),
                (e.src = t);
            }),
            (u.src = a);
          let g = 0;
          for (; void 0 === c && g < 100; ) await (0, _.IP)(100), (g += 1);
          if (
            (g >= 100 &&
              void 0 === c &&
              (l = "AsyncOverlay - We timed out processing images"),
            l)
          )
            throw (console.log(l), { success: s.d.k_EResultFail, err_msg: l });
          const h = new m.VE(e, void 0),
            y = new p.M7(
              c,
              i,
              r.gS.k_Lang_None,
              void 0,
              "",
              { width: n, height: o },
              void 0,
              void 0,
            ),
            v = await h.UploadSingleImage(y, i, r.gS.k_Lang_None, void 0);
          return v.bSuccess && v.result
            ? v.result.image_hash +
                this.GetExtensionString({ file_type: y.fileType })
            : void 0;
        },
        BIsClanImageVideo: (e) =>
          e.file_type == o.bg.k_EClanImageFileType_MP4 ||
          e.file_type == o.bg.k_EClanImageFileType_WEBM,
      };
    },
    64953: (e, t, a) => {
      "use strict";
      a.d(t, { K_: () => h, M7: () => p });
      var i = a(34629),
        n = a(14947),
        r = a(73744),
        s = a(61859),
        o = a(78511),
        l = a(66331),
        m = a(82817);
      const c = 960,
        d = 311,
        _ = 480,
        u = 156;
      class g extends o.q {
        m_rgImageOptions;
        m_currentImageOption = void 0;
        m_currentImageOptionKey = void 0;
        constructor(e, t, a, i, r, s) {
          super(e, t, a, r, s), (0, n.Gn)(this), (this.m_rgImageOptions = i);
        }
        IsValidAssetType(e, t) {
          let a = 0,
            i = 0,
            n = !1,
            o =
              !this.m_rgImageOptions ||
              0 === this.m_rgImageOptions.length ||
              this.m_rgImageOptions.some(
                (e) => e.sKey == this.GetCurrentImageOption()?.sKey,
              );
          if (e) (a = e.width), (i = e.height), (n = !0);
          else if (this.GetCurrentImageOption()) {
            const e = r.Fj[this.GetCurrentImageOption().artworkType];
            e &&
              ((a = e.width),
              (i = e.height),
              (n = !e.bDisableEnforceDimensions));
          }
          const c = this.width >= (0, r.dM)(a) && this.height >= (0, r.dM)(i),
            d = n ? (0, r.Ek)(this.width, this.height, a, i) : c,
            _ = t && t != this.fileType,
            u =
              !!(this.m_rgImageOptions && this.m_rgImageOptions.length > 0) &&
              0 ==
                (0, r.vz)(
                  this.fileType,
                  this.m_rgImageOptions?.map((e) => e.artworkType) || [],
                ).length,
            g = Boolean((0, l.t)(this.fileType));
          let p,
            h = "",
            y = !1;
          return (
            o
              ? u
                ? (h = (0, s.we)("#ImageUpload_InvalidFileType"))
                : _
                  ? (h = (0, s.we)(
                      "#ImageUpload_InvalidFormat",
                      (0, m.EG)(t) ?? "",
                    ))
                  : d || g
                    ? c
                      ? !d && g
                        ? ((h = (0, s.we)(
                            "#ImageUpload_InvalidDimensions",
                            (0, r.qj)(a),
                            (0, r.qj)(i),
                          )),
                          (y = !0))
                        : ((Array.isArray(a) && this.width != (0, r.qj)(a)) ||
                            (Array.isArray(i) &&
                              this.height != (0, r.qj)(i))) &&
                          ((p = p ?? []),
                          p.push(
                            (0, s.we)(
                              "#ImageUpload_PreferredDimension",
                              (0, r.qj)(a),
                              (0, r.qj)(i),
                            ),
                          ))
                      : (h = (0, s.we)(
                          "#ImageUpload_TooSmall",
                          (0, r.qj)(a),
                          (0, r.qj)(i),
                        ))
                    : (h = (0, s.we)(
                        "#ImageUpload_InvalidResolution",
                        (0, r.qj)(a),
                        (0, r.qj)(i),
                      ))
              : (h = (0, s.we)("#ImageUpload_InvalidFormatSelected")),
            {
              error: h,
              warnings: p,
              needsCrop: y,
              match: this.GetCurrentImageOption(),
            }
          );
        }
        BSupportsLanguages() {
          return !0;
        }
        ComputeDefaultImageOption() {
          if (!this.m_rgImageOptions || 0 == this.m_rgImageOptions.length)
            return;
          const e = (0, r.vz)(
            this.fileType,
            this.m_rgImageOptions?.map((e) => e.artworkType),
          );
          let t = y(this.width, this.height, e, !1);
          if ((void 0 === t && (t = y(this.width, this.height, e, !0)), t)) {
            const e = this.m_rgImageOptions.find(
              (e) =>
                e.artworkType == t &&
                (!e.bEnforceDimensions ||
                  (e.width == this.width && e.height == this.height)),
            );
            if (e) return e;
          }
          return this.m_rgImageOptions[0];
        }
        get ImageOptions() {
          return this.m_rgImageOptions;
        }
        GetCurrentImageOptionKey() {
          return this.m_currentImageOptionKey;
        }
        GetCurrentImageOption() {
          return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
        }
        SetCurrentImageOption(e) {
          (this.m_currentImageOption = e),
            (this.m_currentImageOptionKey = e?.sKey);
        }
      }
      (0, i.Cg)([n.sH], g.prototype, "m_currentImageOption", void 0),
        (0, i.Cg)([n.sH], g.prototype, "m_currentImageOptionKey", void 0);
      class p extends g {
        bCropped = !1;
        localizedImageGroupPrimaryImage;
        media;
        constructor(e, t, a, i, r, s, o, l) {
          super(e, t, a, i, r, s),
            (0, n.Gn)(this),
            (this.media = o),
            (this.localizedImageGroupPrimaryImage = l);
        }
        IsValidAssetType(e, t) {
          return (
            (t = t ?? this.localizedImageGroupPrimaryImage?.file_type),
            super.IsValidAssetType(e, t)
          );
        }
        GetCanvasImageSource() {
          return this.media;
        }
        BIsOriginalMinimumDimensions(e) {
          return (0, r.s4)(
            this.media?.width ?? 0,
            this.media?.height ?? 0,
            e.artworkType,
          );
        }
        FileTypeMatchesImageTypes(e) {
          return (0, r.N_)(this.fileType, e.artworkType);
        }
        BIsVideo() {
          return r.Ho.includes(this.fileType);
        }
        GetResizeDimension() {
          return h(this.GetCurrentImageOption()?.artworkType);
        }
      }
      function h(e) {
        return "background" === e
          ? [
              { width: c, height: d },
              { width: _, height: u },
            ]
          : "capsule" === e || "spotlight" === e
            ? [
                {
                  width: (0, r.qj)(r.Fj[e].width) / 2,
                  height: (0, r.qj)(r.Fj[e].height) / 2,
                },
              ]
            : void 0;
      }
      function y(e, t, a, i = !1) {
        if (a)
          for (let n of a) {
            if (i ? (0, r.s4)(e, t, n) : (0, r.yu)(e, t, n)) return n;
          }
      }
      (0, i.Cg)([n.sH], p.prototype, "bCropped", void 0);
    },
    69343: (e, t, a) => {
      "use strict";
      a.d(t, { PD: () => _, Vr: () => d, jj: () => u });
      var i = a(2160),
        n = a(22837),
        r = a(61859),
        s = a(41735),
        o = a.n(s);
      class l {}
      function m(e, t, a) {
        const i = e.filter((e) => {
          const i = e.IsValidAssetType(t, a);
          return "pending" === e.status && !i.error && !i.needsCrop;
        });
        return (
          i.forEach((e) => {
            (e.status = "waiting"), (e.message = "");
          }),
          i
        );
      }
      async function c(e, t, a, i, r, s) {
        const o = m(e, i, r),
          l = [];
        let c = 0;
        const d = Array.from({ length: Math.floor(t) }, () =>
          (async () => {
            for (; c < o.length; ) {
              const e = c++,
                t = o[e];
              t.status = "uploading";
              const i = await a(
                t,
                t.filename,
                t.language ?? n.gS.k_Lang_None,
                s,
              );
              (t.status = i.bSuccess ? "success" : "failed"),
                (t.message =
                  !i.bSuccess && i.elErrorMessage ? i.elErrorMessage : ""),
                (l[e] = { image: t, uploadResult: i });
            }
          })(),
        );
        return (
          await Promise.all(d),
          l.map((e) => ({
            bSuccess: e.uploadResult.bSuccess,
            image: e.image,
            uploadResult: e.uploadResult.result,
          }))
        );
      }
      class d extends l {
        m_cancel = void 0;
        async UploadAllImages(e, t) {
          this.m_cancel = o().CancelToken.source();
          const a = this.BGetUploadsAreInSerial() ? 1 : 4;
          let i;
          const r = this.UploadSingleImage.bind(this);
          return (
            (i =
              a > 1
                ? await c(
                    this.GetUploadImages(),
                    a,
                    r,
                    e,
                    t,
                    this.m_cancel.token,
                  )
                : await (async function (e, t, a, i, r) {
                    const s = m(e, a, i),
                      o = [];
                    for (const e of s) {
                      e.status = "uploading";
                      const a = await t(
                        e,
                        e.filename,
                        e.language ?? n.gS.k_Lang_None,
                        r,
                      );
                      (e.status = a.bSuccess ? "success" : "failed"),
                        (e.message =
                          !a.bSuccess && a.elErrorMessage
                            ? a.elErrorMessage
                            : ""),
                        o.push({
                          bSuccess: a.bSuccess,
                          image: e,
                          uploadResult: a.result,
                        });
                    }
                    return o;
                  })(this.GetUploadImages(), r, e, t, this.m_cancel.token)),
            i
          );
        }
        CancelAllUploads() {
          this.m_cancel?.cancel((0, r.we)("#ImageUpload_CancelRequest"));
        }
      }
      function _(e, t, a) {
        if (((null != e && null != e) || (e = t), !a || 0 === a.length))
          return e;
        for (const t of a) if (r.A0.IsELanguageValidInRealm(e, t)) return e;
        for (const e of a) if (r.A0.IsELanguageValidInRealm(t, e)) return t;
        return a.includes(i.TU.k_ESteamRealmGlobal)
          ? n.gS.k_Lang_English
          : n.gS.k_Lang_SteamChina_SChinese;
      }
      function u(e, t = n.gS.k_Lang_English) {
        let a = e.lastIndexOf(".");
        -1 != a && (e = e.slice(0, a).toLowerCase());
        let i = null,
          r = 0;
        e.endsWith("korean") && ((i = n.gS.k_Lang_Korean), (r = 6));
        for (let t = n.gS.k_Lang_English; t < n.gS.k_Lang_MAX; ++t) {
          const a = (0, n.ww)(t);
          if (a.length <= r) continue;
          if (e.endsWith(a) && e.length > a.length + 2) {
            const n = e[e.length - a.length - 1];
            /\p{Alphabetic}|\p{Number}/u.test(n) || ((i = t), (r = a.length));
          }
          const s = (0, n.Lg)(t);
          s.length <= r || (e.endsWith(s) && ((i = t), (r = s.length)));
        }
        return {
          language: i ?? t,
          baseFilename:
            r > 0
              ? ((s = e.substring(0, e.length - r)), s.replace(/[\s_-]+$/g, ""))
              : e,
        };
        var s;
      }
    },
    68359: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => p });
      var i = a(34629),
        n = a(37085),
        r = a(22837),
        s = a(41735),
        o = a.n(s),
        l = a(14947),
        m = a(17720),
        c = a(62490),
        d = a(78327),
        _ = a(86355),
        u = a(27666);
      class g {
        m_curLocImageGroup = null;
        m_curLocImageGroupType = null;
        constructor() {
          (0, l.Gn)(this),
            "dev" == d.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, i) {
          let r =
              d.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/hasclanimagefile",
            s = { image_hash_and_ext: a, lang: "" + i };
          return (
            (await o().get(r, { params: s, cancelToken: e && e.token })).data
              .success == n.d.k_EResultOK
          );
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, c.$Y)(
              this.m_curLocImageGroup.localized_images,
              r.gS.k_Lang_MAX,
              null,
            )));
        }
        GetPrimaryImageForImageGroup() {
          return this.m_curLocImageGroup?.primaryImage;
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          if (this.m_curLocImageGroup) {
            let a = this.m_curLocImageGroup.primaryImage;
            return this.m_curLocImageGroup.localized_images[t]
              ? this.m_curLocImageGroup.localized_images[t]
              : u.z.GenerateURLFromHashAndExt(e, u.z.GetHashAndExt(a) ?? "");
          }
          return null;
        }
        async DetermineAvailableLocalizationForGroup(e) {
          if (!this.m_curLocImageGroup) return;
          const t = this.m_curLocImageGroup.primaryImage,
            a = m.b.InitFromClanID(t.clanAccountID),
            i = u.z.GetHashAndExt(t) ?? "",
            n = [];
          for (let t = r.gS.k_Lang_English; t < r.gS.k_Lang_MAX; ++t)
            n.push(g.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, i, t));
          const s = await Promise.all(n);
          (0, l.h5)(() => {
            for (let e = r.gS.k_Lang_English; e < r.gS.k_Lang_MAX; ++e)
              s[e] &&
                (this.m_curLocImageGroup.localized_images[e] =
                  u.z.GenerateURLFromHashAndExtAndLang(
                    a,
                    i,
                    _.wI.full,
                    e,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? u.z.GenerateURLFromHashAndExtAndLang(
                  t,
                  a,
                  _.wI.full,
                  e,
                  this.m_curLocImageGroupType ?? void 0,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          if (!this.m_curLocImageGroup) return;
          let a = this.m_curLocImageGroup.primaryImage;
          if (a?.image_hash == e) {
            const e = m.b.InitFromClanID(a.clanAccountID),
              i = u.z.GetHashAndExt(a);
            i &&
              (this.m_curLocImageGroup.localized_images[t] =
                u.z.GenerateURLFromHashAndExtAndLang(
                  e,
                  i,
                  _.wI.full,
                  t,
                  this.m_curLocImageGroupType ?? void 0,
                ));
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
        GetAllLocalizedGroupImageHashAndExts() {
          return this.GetAllLocalizedGroupImages()
            .filter(Boolean)
            .map((e) => u.z.GetHashAndExtFromURL(e));
        }
      }
      (0, i.Cg)([l.sH], g.prototype, "m_curLocImageGroup", void 0);
      const p = new g();
    },
    86355: (e, t, a) => {
      "use strict";
      a.d(t, {
        mr: () => b,
        n9: () => E,
        pU: () => v,
        pb: () => h,
        wI: () => i,
      });
      var i,
        n = a(34629),
        r = a(37085),
        s = a(41735),
        o = a.n(s),
        l = a(14947),
        m = a(90626),
        c = a(17720),
        d = a(4434),
        _ = a(81393),
        u = a(6144),
        g = a(84933),
        p = a(78327);
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(i || (i = {}));
      const h = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
      class y {
        constructor() {
          (0, l.Gn)(this),
            "dev" == p.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        m_mapClanToImages = new Map();
        m_mapClanImageLoadPromises = new Map();
        m_imageListChangeCallback = new Map();
        m_mapClanImageLoadState = new Map();
        m_mapImageIDToResolution = new Map();
        BHasImageResolution(e) {
          return this.m_mapImageIDToResolution.has(e.imageid);
        }
        GetImageResolution(e) {
          return this.m_mapImageIDToResolution.get(e.imageid);
        }
        SetImageResolution(e, t) {
          this.m_mapImageIDToResolution.set(e.imageid, t);
        }
        GetImageListCallbackForClanAccountIDInternal(e) {
          return (
            this.m_imageListChangeCallback.has(e) ||
              this.m_imageListChangeCallback.set(e, new u.lu()),
            this.m_imageListChangeCallback.get(e)
          );
        }
        GetImageListCallbackForClanAccountID(e) {
          return this.GetImageListCallbackForClanAccountIDInternal(e);
        }
        m_vecClanImageDragListener = new Array();
        AddClanImageDragListener(e) {
          -1 == this.m_vecClanImageDragListener.indexOf(e) &&
            this.m_vecClanImageDragListener.push(e);
        }
        RemoveClanImageDragListener(e) {
          let t = this.m_vecClanImageDragListener.indexOf(e);
          -1 != t && this.m_vecClanImageDragListener.splice(t, 1);
        }
        GetClanImageDragListener() {
          return this.m_vecClanImageDragListener;
        }
        BHasLoadedClanImages(e) {
          return this.m_mapClanToImages.has(e.GetAccountID());
        }
        async LoadClanImages(e, t, a) {
          const i = e.GetAccountID();
          if (t || !this.m_mapClanImageLoadPromises.has(i)) {
            const n = this.InternalLoadClanImages(e, t, a);
            this.m_mapClanImageLoadPromises.set(i, n);
          }
          return this.m_mapClanImageLoadPromises.get(i);
        }
        async InternalLoadClanImages(e, t, a) {
          let i = e.GetAccountID();
          if (
            ((0, _.wT)(e && 0 != i, "ClanSteamID missing:" + e),
            e && (!this.m_mapClanToImages.has(i) || t))
          ) {
            let t,
              n = {};
            const r =
              p.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/getimages/";
            if (
              ((t = await o().get(r, {
                params: n,
                withCredentials: !0,
                cancelToken: a,
              })),
              t)
            ) {
              for (let e of t.data.images) e.clanAccountID = i;
              (0, l.h5)(() => {
                this.m_mapClanImageLoadState.set(i, { loaded: !0 }),
                  this.m_mapClanToImages.set(i, t.data.images),
                  this.GetImageListCallbackForClanAccountIDInternal(i).Dispatch(
                    t.data.images,
                  );
              });
            }
          }
          return this.m_mapClanToImages.get(i);
        }
        GetLoadState(e) {
          return this.m_mapClanImageLoadState.get(e.GetAccountID());
        }
        GetClanImages(e) {
          return this.GetClanImagesByAccount(e.GetAccountID());
        }
        GetClanImagesByAccount(e) {
          let t = this.m_mapClanToImages.get(e);
          return t || new Array();
        }
        GetFilteredClanImages(e, t) {
          let a = v.GetClanImages(e);
          return this.GetFilteredClanImagesList(a, t);
        }
        GetFilteredClanImagesList(e, t) {
          if (t && t.trim().length > 0) {
            t = t.trim().toLowerCase();
            let a = new Array();
            for (let i of e)
              i.file_name &&
                i.file_name.toLowerCase().indexOf(t) >= 0 &&
                a.push(i);
            return a;
          }
          return e;
        }
        GetClanImageByID(e, t) {
          let a = e.GetAccountID(),
            i = this.m_mapClanToImages.get(a);
          return i ? i.find((e) => e.imageid == t) : void 0;
        }
        GetClanImageByURL(e, t) {
          let a = e.GetAccountID(),
            i = this.m_mapClanToImages.get(a);
          return i ? i.find((e) => e.thumb_url == t || e.url == t) : void 0;
        }
        GetClanImageByFile(e, t) {
          let a = e.GetAccountID(),
            i = this.m_mapClanToImages.get(a);
          return i ? i.find((e) => e.file_name == t.name) : void 0;
        }
        GetClanImageByImageHash(e, t) {
          let a = e.GetAccountID(),
            i = this.m_mapClanToImages.get(a);
          return i ? i.find((e) => e.image_hash == t) : void 0;
        }
        async DeleteClanImageByID(e, t) {
          let a = { sessionid: p.TS.SESSIONID, imageid: t },
            i = e.GetAccountID(),
            n = await o().get(
              p.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                e.ConvertTo64BitString() +
                "/deleteimage/",
              { params: a },
            );
          if (!n || 200 != n.status || n.data.success != r.d.k_EResultOK)
            return n.data;
          let s = this.m_mapClanToImages.get(i);
          if (s) {
            let e = s.findIndex((e, a, i) => e.imageid == t);
            e >= 0 &&
              (s.splice(e, 1),
              this.GetImageListCallbackForClanAccountIDInternal(i).Dispatch([
                ...s,
              ]));
          }
          return n.data;
        }
        async DeleteClanImage(e, t) {
          return this.DeleteClanImageByID(e, t.imageid);
        }
      }
      (0, n.Cg)([l.sH], y.prototype, "m_mapClanToImages", void 0),
        (0, n.Cg)([l.sH], y.prototype, "m_mapClanImageLoadState", void 0);
      const v = new y();
      function E(e) {
        const [t, a] = (0, m.useState)(v.GetClanImagesByAccount(e));
        return (0, g.hL)(v.GetImageListCallbackForClanAccountID(e), a), t;
      }
      function b(e) {
        const t = c.b.InitFromClanID(e),
          a = (0, d.m)("useLoadClanImages"),
          [i, n] = (0, m.useState)(() => v.BHasLoadedClanImages(t));
        return (
          (0, m.useEffect)(() => {
            const t = c.b.InitFromClanID(e);
            return (
              v.BHasLoadedClanImages(t) ||
                v.LoadClanImages(t, !1, a.token).then(() => n(!0)),
              () => a.cancel()
            );
          }, [e, a]),
          i
        );
      }
    },
    82705: (e, t, a) => {
      "use strict";
      a.d(t, { yh: () => n });
      a(90626);
      var i = a(37403);
      function n(e) {
        return (
          e.indexOf("?") > 0 && (e = e.split("?")[0]),
          e.endsWith(".jpg") || e.endsWith(".jpeg")
            ? i.bg.k_EClanImageFileType_JPEG
            : e.endsWith(".png")
              ? i.bg.k_EClanImageFileType_PNG
              : e.endsWith(".gif")
                ? i.bg.k_EClanImageFileType_GIF
                : e.endsWith(".mp4")
                  ? i.bg.k_EClanImageFileType_MP4
                  : e.endsWith(".webm")
                    ? i.bg.k_EClanImageFileType_WEBM
                    : e.endsWith(".vtt")
                      ? i.bg.k_EClanImageFileType_VTT
                      : e.endsWith(".srt")
                        ? i.bg.k_EClanImageFileType_SRT
                        : e.endsWith(".webp")
                          ? i.bg.k_EClanImageFileType_WEBP
                          : void 0
        );
      }
    },
    6379: (e, t, a) => {
      "use strict";
      a.d(t, { ZQ: () => C, O3: () => A, MX: () => k, dB: () => B });
      var i = a(34629),
        n = a(41735),
        r = a.n(n),
        s = a(14947),
        o = a(31561),
        l = a(22837),
        m = a(37085),
        c = a(89128),
        d = a(17720),
        _ = a(55563),
        u = a(62490),
        g = a(81393),
        p = a(68797),
        h = a(6144),
        y = a(41338),
        v = a(78327),
        E = a(90626),
        b = a(84933),
        I = a(38390);
      function S(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function f(e) {
        return S(e) ? c.cB + e.announcement_body?.gid : e.gid;
      }
      class w {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, g.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class C {
        constructor(e = !1) {
          (0, s.Gn)(this), (this.m_bOnlySummary = e);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new h.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, _.v)("PartnerEventStore");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                if (e) {
                  let t = new d.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      c.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let t = (0, v.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new d.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      c.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      c.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, v.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(a) &&
              (("dev" != v.TS.WEB_UNIVERSE && "beta" != v.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    a.length,
                ),
              a.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == v.TS.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new h.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, y.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = f(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new d.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            i = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!i || 0 == i.length) return a;
          for (let e of i) {
            let t = this.GetClanEventModel(e);
            t && a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        InsertEventModelFromClanEventData(e, t) {
          const a = (function (e, t) {
            let a = new c.lh();
            if (
              ((a.clanSteamID = e),
              (0, g.wT)(
                a.clanSteamID && a.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  a.clanSteamID.ConvertTo64BitString() +
                  " " +
                  v.TS.EUNIVERSE,
              ),
              (a.GID = f(t)),
              (a.bOldAnnouncement = S(t)),
              (a.appid = t.appid ?? 0),
              (a.startTime = t.rtime32_start_time),
              (a.endTime = t.rtime32_end_time),
              (a.visibilityStartTime = t.rtime32_visibility_start),
              (a.visibilityEndTime = t.rtime32_visibility_end),
              (a.loadedAllLanguages = !1),
              (a.type = t.event_type ?? l.Mv.k_EOtherEvent),
              (a.nVotesUp = t.votes_up ?? 0),
              (a.nVotesDown = t.votes_down ?? 0),
              (a.comment_type = t.comment_type),
              (a.gidfeature = t.gidfeature),
              (a.gidfeature2 = t.gidfeature2),
              (a.featured_app_tagid = t.featured_app_tagid),
              (a.vecTags = new Array()),
              (a.creator_steamid = t.creator_steamid),
              (a.last_update_steamid = t.last_update_steamid),
              (a.rtime32_last_modified = t.rtime32_last_modified),
              (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
              (a.video_preview_type = t.video_preview_type),
              (a.video_preview_id = t.video_preview_id),
              (a.has_live_stream = t.has_live_stream),
              (a.live_stream_viewer_count = t.live_stream_viewer_count),
              (a.m_nBuildID = t.build_id),
              (a.m_strBuildBranch = t.build_branch),
              t.announcement_body)
            ) {
              let e = t.announcement_body;
              (a.AnnouncementGID = e.gid),
                a.name.set(e.language, e.headline),
                a.description.set(e.language, e.body),
                a.timestamp_loc_updated.clear(),
                (a.forumTopicGID = e.forum_topic_id),
                (a.nCommentCount = e.commentcount),
                (a.postTime = e.posttime),
                a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
                (a.announcementClanSteamID = new d.b(e.clanid)),
                e.tags &&
                  e.tags.length > 0 &&
                  e.tags.forEach((e) => a.vecTags.push(e)),
                !a.rtime32_last_solr_search_col_updated &&
                  a.rtime32_last_modified &&
                  ((a.rtime32_last_solr_search_col_updated =
                    a.rtime32_last_modified),
                  (a.rtime32_last_modified = e.updatetime));
            } else
              (a.AnnouncementGID = "0"),
                (a.forumTopicGID = t.forum_topic_id),
                a.name.clear(),
                a.description.clear(),
                a.timestamp_loc_updated.clear(),
                (a.postTime = t.rtime32_start_time),
                (a.nCommentCount = t.comment_count ?? 0),
                a.name.set(l.gS.k_Lang_English, t.event_name ?? ""),
                a.description.set(l.gS.k_Lang_English, t.event_notes ?? "");
            t.broadcaster_accountid &&
              (a.broadcaster = new d.b(t.broadcaster_accountid));
            const i = c.DJ;
            try {
              a.jsondata = {
                ...i,
                ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
              };
            } catch (e) {
              const t = (0, p.H)(e);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    t.strErrorMsg,
                  t,
                ),
                e)
              );
            }
            if (
              ((a.jsondata.localized_capsule_image = (0, u.$Y)(
                a.jsondata.localized_capsule_image || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_title_image = (0, u.$Y)(
                a.jsondata.localized_title_image || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_subtitle = (0, u.$Y)(
                a.jsondata.localized_subtitle || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_summary = (0, u.$Y)(
                a.jsondata.localized_summary || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_broadcast_title = (0, u.$Y)(
                a.jsondata.localized_broadcast_title || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_broadcast_left_image = (0, u.$Y)(
                a.jsondata.localized_broadcast_left_image || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_broadcast_right_image = (0, u.$Y)(
                a.jsondata.localized_broadcast_right_image || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_sale_header = (0, u.$Y)(
                a.jsondata.localized_sale_header || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_sale_overlay = (0, u.$Y)(
                a.jsondata.localized_sale_overlay || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_sale_product_banner = (0, u.$Y)(
                a.jsondata.localized_sale_product_banner || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_sale_product_mobile_banner = (0, u.$Y)(
                a.jsondata.localized_sale_product_mobile_banner || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              (a.jsondata.localized_sale_logo = (0, u.$Y)(
                a.jsondata.localized_sale_logo || [],
                l.gS.k_Lang_MAX,
                null,
              )),
              void 0 !== a.jsondata.sale_num_headers &&
                a.jsondata.localized_per_day_sales_header)
            )
              for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
                a.jsondata.localized_per_day_sales_header[e] = (0, u.$Y)(
                  a.jsondata.localized_per_day_sales_header[e],
                  l.gS.k_Lang_MAX,
                  null,
                );
            return (
              a.jsondata.sale_sections &&
                a.jsondata.sale_sections.forEach((e, t) => {
                  e.localized_label &&
                    (e.localized_label = (0, u.$Y)(
                      e.localized_label,
                      l.gS.k_Lang_MAX,
                      null,
                    )),
                    "trailercarousel" === e.section_type &&
                      (e.show_as_carousel = !1),
                    (a.jsondata.sale_sections[t] = { ...c.G6, ...e });
                }),
              a.jsondata.email_setting &&
                a.jsondata.email_setting.sections &&
                a.jsondata.email_setting.sections.forEach((e) => {
                  void 0 !== e.localized_headline &&
                    null !== e.localized_headline &&
                    (e.localized_headline = (0, u.$Y)(
                      e.localized_headline,
                      l.gS.k_Lang_MAX,
                      null,
                    )),
                    void 0 !== e.localized_body &&
                      null !== e.localized_body &&
                      (e.localized_body = (0, u.$Y)(
                        e.localized_body,
                        l.gS.k_Lang_MAX,
                        null,
                      )),
                    void 0 !== e.localized_image &&
                      null !== e.localized_image &&
                      (e.localized_image = (0, u.$Y)(
                        e.localized_image,
                        l.gS.k_Lang_MAX,
                        null,
                      ));
                }),
              a.jsondata.localized_title_image.forEach((e, t) => {
                if (null != e && "http" == e.substr(0, 4)) {
                  let i = e.lastIndexOf("/"),
                    n = e.substr(i + 1);
                  a.jsondata.localized_title_image[t] = n;
                }
              }),
              t.published
                ? t.unlisted
                  ? (a.visibility_state = c.zv.k_EEventStateUnlisted)
                  : t.hidden
                    ? (a.visibility_state = c.zv.k_EEventStateStaged)
                    : (a.visibility_state = c.zv.k_EEventStateVisible)
                : (a.visibility_state = c.zv.k_EEventStateUnpublished),
              a
            );
          })(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, u.$Y)([], l.gS.k_Lang_MAX, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, a) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const i = this.m_PendingInfoPromise,
            n = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                a = this.m_rgQueuedEventsUniqueIDs,
                i = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, a, i).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), n();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, n);
          }
          return i;
        }
        async InternalLoadPartnerEventList(e, t, a) {
          let i = a.some((e) => e);
          const n =
              v.TS.STORE_BASE_URL +
              (i
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            s = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: s,
              origin: self.origin,
            };
          try {
            const e = await r().get(n, { params: o, withCredentials: i });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, p.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, a, i, n, r, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            a,
            i,
            n,
            r,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, a, i, n, r, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            a,
            i,
            n,
            r,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, a, i, n, r, s) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                a,
                i,
                n,
                r,
                s,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                a,
                i,
                n,
                r,
                s,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, a, i, n, o, c, _) {
          let u = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              a = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    u.push(this.m_mapExistingEvents.get(t));
                } else a.push(e);
              }),
              a.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  a,
                  _,
                )
              ).forEach((e) => u.push(e));
            }
          } else {
            let h =
              v.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const y = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE));
            c?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, g.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (c.only_summaries = void 0));
            let E = {
              clan_accountid: a ? a.GetAccountID() : void 0,
              appid: i,
              count_before: n,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: y,
              rtime_oldestevent: c ? c.rtime_oldestevent : void 0,
              require_tags:
                c && c.require_tags ? c.require_tags.join(",") : void 0,
              exclude_tags:
                c && c.exclude_tags ? c.exclude_tags.join(",") : void 0,
              require_no_tags: c ? c.require_no_tags : void 0,
              event_type_filter:
                c && c.event_type_filter
                  ? c.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                c && c.exclude_event_types
                  ? c.exclude_event_types.join(",")
                  : void 0,
              only_summaries: c && !!c.only_summaries,
              origin: self.origin,
            };
            try {
              let n = await r().get(h, { params: E, cancelToken: _?.token });
              if (n?.data?.success == m.d.k_EResultOK)
                (0, s.h5)(() => {
                  for (let e of n.data.events) {
                    let t = f(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new d.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(a || t, e);
                    }
                    u.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == u.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        u.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && u.push(e);
                    }
                });
              else {
                let e = (0, p.H)(n?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    i +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, p.H)(e);
              t.errorCode != m.d.k_EResultCancelled &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    i +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return u;
        }
        async LoadPartnerEventsPageable(e, t, a = 0, i = 0) {
          let n = new Array(),
            o = v.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            l = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: a,
              count: i,
              l: v.TS.LANGUAGE,
              origin: self.origin,
            };
          try {
            let e = await r().get(o, { params: l });
            (0, s.h5)(() => {
              for (let t of e.data.events) {
                let e = f(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new d.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                n.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, p.H)(e).strErrorMsg,
            );
          }
          return n;
        }
        async GetBestEventsForCurrentUser(e, t, a) {
          let i = new Array(),
            n = {
              l: v.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = v.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await r().get(o, {
              params: n,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, s.h5)(() => {
              for (let e of l.data.events) {
                let t = f(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new d.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let a = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                i.push(a);
              }
            }),
            i
          );
        }
        async LoadImportantEventsAroundToday(e, t, a, i, n, o) {
          let l = new Array(),
            m = new Array();
          m.push({ priority: 0, appids: t }),
            a && m.push({ priority: 1, appids: a }),
            i && m.push({ priority: 2, appids: i });
          let c = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: m }),
              filterToEventTypes: o ? o.toString() : "",
              l: v.TS.LANGUAGE,
            },
            _ = v.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            u = await r().get(_, {
              params: c,
              withCredentials: !0,
              cancelToken: n.token,
            });
          return (
            (0, s.h5)(() => {
              for (let e of u.data.events) {
                let t = f(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new d.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, a) {
          let i = this.m_mapClanToGIDs.get(e);
          i ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (i = this.m_mapClanToGIDs.get(e)));
          let n = this.m_mapAppIDToGIDs.get(t);
          n ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (n = this.m_mapAppIDToGIDs.get(t))),
            -1 == i.indexOf(a) && (i.push(a), n.push(a));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let a = new URLSearchParams();
          a.append("sessionid", v.TS.SESSIONID),
            a.append("bDelete", "1"),
            a.append("gid", t);
          const i = await r().post(
            v.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            a,
          );
          return this.RemoveGIDFromList(e, t), i.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              i = a.indexOf(t);
            i >= 0 && a.splice(i, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(c.cB + t) &&
              this.m_mapExistingEvents.delete(c.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          i,
          n,
          s = !1,
        ) {
          let o = (0, I.hE)(s ? l.gS.k_Lang_English : (0, l.sf)(v.TS.LANGUAGE)),
            m = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: i,
              event_gid: a,
              lang_list: o,
              last_modified_time: n || 0,
              origin: self.origin,
              for_edit: s,
              only_summary: this.m_bOnlySummary,
            },
            c = null,
            _ = null;
          if (s) {
            const a = (0, v.yK)();
            "community" === a
              ? ((_ = v.TS.COMMUNITY_BASE_URL),
                (_ += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (_ += "/"))
              : (_ =
                  "partnerweb" === a
                    ? v.TS.PARTNER_BASE_URL + "sales/"
                    : v.TS.STORE_BASE_URL + "events/"),
              (_ += "ajaxgetpartnereventforedit"),
              (c = { params: m, withCredentials: !0 });
          } else
            (_ = v.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (c = { params: m, withCredentials: !1 });
          let u = (await r().get(_, c)).data.event,
            p = f(u);
          if (
            !this.m_mapExistingEvents.has(p) ||
            (this.m_mapExistingEvents.get(p).rtime32_last_modified ?? 0) <
              (u.rtime32_last_modified ?? 0) ||
            (this.m_mapExistingEvents.get(p).rtime32_moderator_reviewed ?? 0) <
              (u.rtime_mod_reviewed ?? 0)
          ) {
            (0, g.wT)(
              u.clan_steamid,
              "ClanSteamID is missing from data we received",
            );
            let e = new d.b(u.clan_steamid);
            this.InsertEventModelFromClanEventData(e, u);
          }
          return this.m_mapExistingEvents.get(p);
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          i,
          n,
          r,
        ) {
          if (a && this.m_mapExistingEvents.has(a))
            return this.m_mapExistingEvents.get(a);
          if (i) {
            if (this.m_mapExistingEvents.has(c.cB + i))
              return this.m_mapExistingEvents.get(c.cB + i);
            if (this.m_mapAnnouncementBodyToEvent.has(i)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(i);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            a,
            i,
            n,
            r,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            a,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, i) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            a,
            i,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, a) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            a,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, i) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            a,
            i,
          );
        }
        async LoadPartnerEventGeneric(e, t, a, i, n) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            a,
            i,
            n,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              a = v.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              i = await r().get(a, { params: t, withCredentials: !0 });
            i.data.apps &&
              i.data.apps.length > 0 &&
              (0, s.h5)(() => {
                const e = new Map(i.data.apps?.map((e) => [e.appid, new w(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let a =
            v.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await r().get(a)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          const i = new Array(),
            n = v.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = (0, I.hE)((0, l.sf)(v.TS.LANGUAGE));
          let m = null,
            c = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? i.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (m = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && i.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (c = e);
          }
          if (!m && !c) return i;
          const _ = new Array();
          for (; (m?.length ?? 0) > 0 || (c?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (m?.length ?? 0) > 0 ? m?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            _.push(
              r().get(n, { params: e, cancelToken: a ? a.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([..._]);
            let t = 0;
            (0, s.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = f(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new d.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    i.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, p.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, p.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return i;
        }
        async SavePartnerEventSaleAssets(e, t, a) {
          let i = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const n = `${v.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              s = new FormData();
            s.append("sessionid", v.TS.SESSIONID),
              s.append("gidclanevent", t),
              s.append("json", JSON.stringify(a));
            const o = await r().post(n, s, { withCredentials: !0 });
            if (o?.data?.success == m.d.k_EResultOK) {
              const e = this.m_mapExistingEvents.get(t);
              for (const t in a)
                a.hasOwnProperty(t) && a[t] && (e.jsondata[t] = a[t]);
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            i = (0, p.H)(o);
          } catch (e) {
            i = (0, p.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                i?.strErrorMsg,
              i,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, i.Cg)([s.sH], C.prototype, "m_mapExistingEvents", void 0),
        (0, i.Cg)([s.sH], C.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, i.Cg)([s.sH], C.prototype, "m_mapClanToGIDs", void 0),
        (0, i.Cg)([s.sH], C.prototype, "m_mapAppIDToGIDs", void 0),
        (0, i.Cg)([s.sH], C.prototype, "m_mapUpdatedApps", void 0),
        (0, i.Cg)([s.XI], C.prototype, "Init", null),
        (0, i.Cg)([b.oI], C.prototype, "GetPartnerEventChangeCallback", null),
        (0, i.Cg)([s.XI], C.prototype, "RegisterClanEvents", null),
        (0, i.Cg)(
          [s.XI],
          C.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, i.Cg)([s.XI], C.prototype, "DeleteClanEvent", null),
        (0, i.Cg)([s.XI], C.prototype, "RemoveGIDFromList", null),
        (0, i.Cg)([s.XI], C.prototype, "FlushEventFromCache", null),
        (0, i.Cg)([b.oI], C.prototype, "SavePartnerEventSaleAssets", null);
      const A = new C();
      window.g_PartnerEventStore = A;
      const k = new C(!0);
      function B(e, t, a = !1) {
        const [i, n] = (0, E.useState)(() => A.GetClanEventModel(t)),
          r = (0, E.useMemo)(() => d.b.InitFromClanID(e), [e]);
        return (
          (0, E.useEffect)(() => {
            !i &&
              e > 0 &&
              (A.Init(),
              A.LoadPartnerEventFromClanEventGIDAndClanSteamID(r, t, 0, a).then(
                n,
              ));
          }, [r, t, i, e, a]),
          (0, b.hL)(a ? A.GetPartnerEventChangeCallback(t) : void 0, n),
          i
        );
      }
      window.g_PartnerEventSummaryStore = k;
    },
    55563: (e, t, a) => {
      "use strict";
      function i(e) {
        return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
      }
      a.d(t, { v: () => i });
    },
    82817: (e, t, a) => {
      "use strict";
      a.d(t, {
        EG: () => s,
        II: () => _,
        Uz: () => c,
        aL: () => m,
        ab: () => r,
        zB: () => d,
      });
      var i = a(3577),
        n = a(37403);
      function r(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function s(e) {
        switch (e) {
          case n.bg.k_EClanImageFileType_JPEG:
            return ".jpg";
          case n.bg.k_EClanImageFileType_GIF:
            return ".gif";
          case n.bg.k_EClanImageFileType_PNG:
            return ".png";
          case n.bg.k_EClanImageFileType_WEBM:
            return ".webm";
          case n.bg.k_EClanImageFileType_MP4:
            return ".mp4";
          case n.bg.k_EClanImageFileType_SRT:
            return ".srt";
          case n.bg.k_EClanImageFileType_VTT:
            return ".vtt";
          case n.bg.k_EClanImageFileType_WEBP:
            return ".webp";
        }
      }
      function o(e) {
        const t = (0, i.x0)(),
          a = new Image();
        return (
          (a.onload = () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function l(e) {
        const t = (0, i.x0)(),
          a = document.createElement("video");
        return (
          (a.preload = "metadata"),
          a.addEventListener("loadedmetadata", () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function m(e) {
        return e.startsWith("image/");
      }
      function c(e) {
        return e.startsWith("video/");
      }
      async function d(e, t) {
        if (t) return l(URL.createObjectURL(e));
        {
          const t = (0, i.x0)(),
            a = new FileReader();
          (a.onload = () => t.resolve(a.result ?? void 0)),
            (a.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                a.error,
              ),
                t.resolve(void 0);
            }),
            a.readAsDataURL(e);
          const n = await t.promise;
          if (!n) return;
          return o(n.toString());
        }
      }
      function _(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    75113: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bw: () => A,
        EX: () => b,
        Hx: () => T,
        JP: () => E,
        LJ: () => f,
        OG: () => B,
        PH: () => i,
        T7: () => I,
        qT: () => k,
        tj: () => G,
        yh: () => C,
      });
      var i,
        n = a(90626),
        r = a(92757),
        s = a(89128),
        o = a(45699),
        l = a(81393),
        m = a(78327),
        c = a(16180),
        d = a(55963),
        _ = a(61336),
        u = a(60014),
        g = a(26161),
        p = a(55263),
        h = a(22837);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(i || (i = {}));
      const y =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function v(e, t) {
        if (!t) return !1;
        const a = "store" === (0, m.yK)(),
          n = (function (e) {
            const t = e.match(y);
            return t?.[1];
          })(window.location.href),
          r = a && "news" == n,
          s = t.GetEventType() == h.Mv.k_ECreatorHome,
          o = "community" === (0, m.yK)(),
          c = t.appid ? "games" : "groups",
          d =
            o &&
            c == n &&
            ((t.appid && t.appid === m.UF.APPID) ||
              (!t.appid &&
                t.clanSteamID.GetAccountID() === m.UF.CLANACCOUNTID));
        switch (e) {
          case i.k_eView:
            return d || r;
          case i.k_eCommunityView:
          case i.k_eCommunityEdit:
          case i.k_eCommunityEditBroadcast:
          case i.k_eCommunityPublish:
          case i.k_eCommunityMigrate:
          case i.k_eCommunityPreview:
          case i.k_eCommunityPreviewSale:
          case i.k_eCommunityAnnouncementHub:
            return d;
          case i.k_eCommunityAdminPage:
            return !s && d;
          case i.k_eViewWebSiteHub:
            return d || r;
          case i.k_eStoreView:
          case i.k_eStoreNewsHub:
          case i.k_eStoreOwnerPage:
          case i.k_eStoreUsersNewsHub:
            return r;
          case i.k_eStoreSalePage:
            return !1;
          default:
            return (0, l.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function E(e) {
        const t =
          m.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID;
        return {
          strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: t + "?site=twitter",
          strRedditUrl: t + "?site=reddit",
        };
      }
      function b(e) {
        return w(e, i.k_eStoreSalePage, "absolute");
      }
      function I(e) {
        return w(e, i.k_eStoreView, "absolute");
      }
      function S(e, t, a) {
        if (a)
          return (
            (e ? "/games/" + m.UF.VANITY_ID : "/groups/" + m.UF.VANITY_ID) + "/"
          );
        const i = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return m.TS.COMMUNITY_BASE_URL + i + "/";
      }
      function f() {
        return "news";
      }
      function w(e, t, a) {
        const [i] = (0, p.t7)(e?.appid, { include_basic_info: !0 });
        if (e) return C(e, i, t, a);
      }
      function C(e, t, a, n) {
        const r = "relative" === n,
          o = "community" === (0, m.yK)(),
          c = r ? "/" : m.TS.STORE_BASE_URL,
          d = S(e.appid, e.clanSteamID, r);
        a === i.k_eView
          ? (a = o ? i.k_eCommunityView : i.k_eStoreView)
          : a === i.k_eViewWebSiteHub &&
            (a = o ? i.k_eCommunityAnnouncementHub : i.k_eStoreNewsHub);
        const _ = e.GID ? e.GID : "",
          u = e.AnnouncementGID ? e.AnnouncementGID : "",
          p =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          y = e.GetEventType() == h.Mv.k_ECreatorHome;
        switch (a) {
          case i.k_eCommunityPublish:
            return (
              d +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + u
                : "partnerevents/publish/" + _ + "?tab=publishing")
            );
          case i.k_eCommunityEdit:
            return (
              d +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + u
                : "partnerevents/edit/" + _)
            );
          case i.k_eCommunityEditBroadcast:
            return (
              d +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + u
                : "partnerevents/edit/" + _) +
              "?tab=broadcast"
            );
          case i.k_eCommunityMigrate:
            return d + "partnerevents/migrate_announcement/" + u;
          case i.k_eCommunityPreview:
            return y
              ? d + "partnerevents/previewsale/" + _
              : d +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + u
                    : "partnerevents/preview/" + _);
          case i.k_eCommunityPreviewSale:
            return d + "partnerevents/previewsale/" + _;
          case i.k_eCommunityAdminPage:
            return y
              ? `${c}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : d + "partnerevents";
          case i.k_eCommunityAnnouncementHub:
            return d + "announcements";
          case i.k_eStoreNewsHub:
            return (
              c +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case i.k_eStoreOwnerPage:
            return (
              c +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case i.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == s.wv
                ? `${c}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : p
                  ? `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`
                  : y
                    ? `${c}curator/${e.clanSteamID.GetAccountID()}`
                    : c +
                      (e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
                        ? "sale/"
                        : "curator/" +
                          e.clanSteamID.GetAccountID() +
                          "/sale/") +
                      e.jsondata.sale_vanity_id
              : c;
          case i.k_eCommunityView:
            return d + "announcements/detail/" + u;
          case i.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, g.H)())
              return `${m.TS.STORE_BASE_URL}meetsteam/${_}`;
            if (p)
              return `${t.GetStorePageURL()}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (y) return `${c}curator/${e.clanSteamID.GetAccountID()}`;
            return `${c}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${u}` : `view/${_}`}`;
          case i.k_eStoreUsersNewsHub:
            return `${c}news/`;
          default:
            return (0, l.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function A(e, t, a) {
        return w(
          e,
          t,
          "forceAbsolute" === a || !v(t, e) ? "absolute" : "relative",
        );
      }
      function k(e, t, a, i) {
        return C(
          e,
          t,
          a,
          "forceAbsolute" === i || !v(a, e) ? "absolute" : "relative",
        );
      }
      function B(e) {
        const { eventModel: t, route: a, bPopup: i = !0 } = e,
          s = v(a, t),
          o = w(t, a, s ? "relative" : "absolute");
        return (
          n.useEffect(() => {
            i ? window.open(o) : window.location.assign(o);
          }, [i, o]),
          s ? n.createElement(r.rd, { push: !0, to: o }) : null
        );
      }
      function T(e, t, a) {
        const i = S(e, t, !1);
        return "admin" === a ? i + "partnerevents" : "";
      }
      function G(e) {
        const { eventModel: t, preferredFocus: a } = e,
          { bCanUseLink: i } = n.useContext(c.I),
          s = (0, u.n9)(),
          l = (0, r.W6)(),
          m = i && v(e.route, t),
          g = w(t, e.route, m ? "relative" : "absolute"),
          p = !m && g ? (0, _.NT)(g) : g,
          h = m || !p ? p : (0, d.wJ)(p, s);
        return t
          ? m
            ? n.createElement(
                o.Ii,
                {
                  style: e.style,
                  className: e.className,
                  href: l.createHref({ pathname: h }),
                  onClick: (t) => {
                    e.onClick?.(t), l.push(h), t.preventDefault();
                  },
                  preferredFocus: a,
                },
                e.children,
              )
            : n.createElement(
                o.Ii,
                {
                  href: h,
                  style: e.style,
                  className: e.className,
                  onClick: e.onClick,
                  preferredFocus: a,
                },
                e.children,
              )
          : null;
      }
    },
    81416: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => p });
      var i,
        n = a(34629),
        r = a(90626),
        s = a(84933),
        o = a(75844),
        l = a(6144),
        m = a(61859),
        c = a(53835),
        d = a(12155),
        _ = a(81315),
        u = a.n(_),
        g = a(25489);
      !(function (e) {
        (e.topleft = "topleft"),
          (e.top = "top"),
          (e.topright = "topright"),
          (e.left = "left"),
          (e.middle = "middle"),
          (e.right = "right"),
          (e.bottomleft = "bottomleft"),
          (e.bottom = "bottom"),
          (e.bottomright = "bottomright");
      })(i || (i = {}));
      let p = class extends r.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new l.Ji();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(e) {
          super(e),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: void 0,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description ?? ""),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(e) {
          this.m_elLinkRegionBox = e;
        }
        OnMouseDown(e, t) {
          this.m_elLinkRegionBox?.parentElement &&
            this.m_elLinkRegionBox.ownerDocument.defaultView &&
            ((this.m_fnMouseUp = (e) => {
              this.OnMouseUp(e, t);
            }),
            (this.m_fnMouseMove = (e) => {
              this.OnMouseMove(e, t);
            }),
            this.setState({ EdgeDown: t }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((e.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((e.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            )),
            e.preventDefault(),
            e.stopPropagation();
        }
        OnMouseMove(e, t) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
              case i.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case i.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case i.top:
                this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
                break;
              case i.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(e.clientY),
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                });
                break;
              case i.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(e.clientY),
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                });
                break;
              case i.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(e.clientX),
                  curBottomPosPct: this.CalcBottomEdge(e.clientY),
                });
                break;
              case i.middle: {
                const t = (0, g.OQ)(
                    this.CalcLeftEdge(e.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  a = 100 - (t + this.state.curWidthPct),
                  i = (0, g.OQ)(
                    this.CalcTopEdge(e.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  n = {
                    curLeftPosPct: t,
                    curRightPosPct: a,
                    curTopPosPct: i,
                    curBottomPosPct: 100 - (i + this.state.curHeightPct),
                  };
                this.setState(n);
                break;
              }
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        IsValidPct(e) {
          return e >= 0 && e <= 100;
        }
        UpdateState(e) {
          let t =
              void 0 !== e.curTopPosPct
                ? e.curTopPosPct
                : this.state.curTopPosPct,
            a =
              void 0 !== e.curBottomPosPct
                ? e.curBottomPosPct
                : this.state.curBottomPosPct,
            i =
              void 0 !== e.curLeftPosPct
                ? e.curLeftPosPct
                : this.state.curLeftPosPct,
            n =
              void 0 !== e.curRightPosPct
                ? e.curRightPosPct
                : this.state.curRightPosPct,
            r = (0, g.OQ)(
              100 - n - i,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            s = (0, g.OQ)(
              100 - a - t,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== e.curLeftPosPct || void 0 !== e.curRightPosPct
              ? (s = r / this.m_aspectRatio)
              : (r = s * this.m_aspectRatio)),
            void 0 !== e.curLeftPosPct
              ? (i = 100 - n - r)
              : (n = 100 - (i + r)),
            void 0 !== e.curTopPosPct ? (t = 100 - a - s) : (a = 100 - (t + s));
          const o = 100 - n - i,
            l = 100 - a - t;
          this.IsValidPct(i) &&
            this.IsValidPct(n) &&
            this.IsValidPct(t) &&
            this.IsValidPct(a) &&
            this.IsValidPct(o) &&
            this.IsValidPct(l) &&
            this.setState({
              curLeftPosPct: i,
              curRightPosPct: n,
              curTopPosPct: t,
              curBottomPosPct: a,
            });
        }
        GetXPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
                (this.m_nLocalOffsetXPct ?? 0)
            : 0;
        }
        GetYPercent(e) {
          return this.m_rectLinkRegion
            ? ((e - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
                (this.m_nLocalOffsetYPct ?? 0)
            : 0;
        }
        CalcLeftEdge(e) {
          return (0, g.OQ)(this.GetXPercent(e), 0, 100);
        }
        CalcRightEdge(e) {
          return (0, g.OQ)(
            100 - (this.GetXPercent(e) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(e) {
          return (0, g.OQ)(this.GetYPercent(e), 0, 100);
        }
        CalcBottomEdge(e) {
          return (0, g.OQ)(
            100 - (this.GetYPercent(e) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(e, t) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({ EdgeDown: void 0 }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(e) {
          this.setState({
            text_link_url: e.target.value,
            valid_link: this.validateUrl(e.target.value),
          });
        }
        OnSetLinkDescriptionChange(e) {
          this.setState({ text_link_description: e.target.value });
        }
        validateUrl(e) {
          return (
            null != e &&
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e,
            )
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description ?? ""),
            this.setState({ bEditingLink: !this.state.bEditingLink }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({ bEditingLink: !this.state.bEditingLink });
        }
        render() {
          let e = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            t = u().LinkRegionDragBox;
          return (
            null != this.state.EdgeDown &&
              (t += ` ${u().EdgeDown} ` + u()[this.state.EdgeDown]),
            r.createElement(
              "div",
              {
                className: t,
                style: e,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              r.createElement(
                "div",
                { className: u().LinkRegionGridBox },
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().TopLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.topleft);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Top}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.top);
                  },
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().TopRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.topright);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Left}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.left);
                  },
                  draggable: !1,
                }),
                r.createElement(
                  "div",
                  {
                    className: `${u().LinkRegionEdge} ${u().Middle}`,
                    onMouseDown: (e) => {
                      this.OnMouseDown(e, i.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    r.createElement(
                      "div",
                      {
                        className: u().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      r.createElement(d.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    r.createElement(
                      "div",
                      {
                        className: u().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      r.createElement(d.xv8, null),
                    ),
                  r.createElement(
                    "div",
                    { className: u().LinkText },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Right}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.right);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().BottomLeft}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.bottomleft);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().Bottom}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.bottom);
                  },
                  draggable: !1,
                }),
                r.createElement("div", {
                  className: `${u().LinkRegionEdge} ${u().BottomRight}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, i.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                r.createElement(
                  "div",
                  { className: u().LinkRegionInfo },
                  r.createElement(c.pd, {
                    className: u().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, m.we)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  r.createElement(c.pd, {
                    className: u().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, m.we)("#SteamTV_LinkDescription"),
                    placeholder: (0, m.we)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  r.createElement(
                    "div",
                    { className: u().LinkRegionButtonContainer },
                    r.createElement(
                      c.$n,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, m.we)("#Button_OK"),
                      " ",
                    ),
                    r.createElement(
                      c.$n,
                      { onClick: this.OnEditLink },
                      " ",
                      (0, m.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, n.Cg)([s.oI], p.prototype, "LinkRegionBoxRef", null),
        (0, n.Cg)([s.oI], p.prototype, "OnMouseDown", null),
        (0, n.Cg)([s.oI], p.prototype, "OnMouseMove", null),
        (0, n.Cg)([s.oI], p.prototype, "OnMouseUp", null),
        (0, n.Cg)([s.oI], p.prototype, "HandleDelete", null),
        (0, n.Cg)([s.oI], p.prototype, "OnSetLinkURLChange", null),
        (0, n.Cg)([s.oI], p.prototype, "OnSetLinkDescriptionChange", null),
        (0, n.Cg)([s.oI], p.prototype, "OnSaveLink", null),
        (0, n.Cg)([s.oI], p.prototype, "OnEditLink", null),
        (p = (0, n.Cg)([o.PA], p));
    },
    66331: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => p, t: () => h });
      var i = a(34629),
        n = a(90626),
        r = a(73744),
        s = a(37403),
        o = a(53835),
        l = a(81416),
        m = a(51706),
        c = a(52038),
        d = a(61859),
        _ = a(84933),
        u = a(50666),
        g = a(56011);
      class p extends n.Component {
        state = {
          region: {
            xPosPct: 0,
            yPosPct: 0,
            widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            heightPct:
              (this.GetDestHeight() / this.props.uploadFile.height) * 100,
          },
        };
        async OnCrop() {
          const e = this.props.uploadFile.GetCanvasImageSource();
          e &&
            (await (async function (e, t, a, i, n, r, o, l, m) {
              return new Promise((c, d) => {
                const _ = h(m);
                if (!_) return void d("Invalid format provided");
                const u = document.createElement("canvas");
                (u.width = o), (u.height = l);
                const p = 0,
                  y = 0,
                  v = u.getContext("2d");
                v?.drawImage(t, a, i, n, r, p, y, o, l),
                  u.toBlob((t) => {
                    const a = u.toDataURL(_);
                    m !== s.bg.k_EClanImageFileType_PNG &&
                    a.startsWith("data:image/png")
                      ? d("Unable to encode into the requested file format")
                      : t
                        ? ((e.file = (0, g.pE)(t, e.filename)),
                          (e.width = o),
                          (e.height = l),
                          (e.dataUrl = a),
                          (e.uploadTime = Date.now()),
                          (e.bCropped = !0),
                          c())
                        : d("Unable to apply crop into image");
                  });
              });
            })(
              this.props.uploadFile,
              e,
              (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
              (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
              (this.state.region.widthPct / 100) * this.props.uploadFile.width,
              (this.state.region.heightPct / 100) *
                this.props.uploadFile.height,
              this.GetDestWidth(),
              this.GetDestHeight(),
              this.props.fileType,
            )),
            this.props.closeModal?.();
        }
        UpdateCrop(e, t) {
          this.setState({ region: t });
        }
        GetDestWidth() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const a = e.GetCurrentImageOption();
          if (!a) return 0;
          const i = r.Fj[a.artworkType].width;
          return a ? (0, r.qj)(i) : 0;
        }
        GetDestHeight() {
          const { uploadFile: e, forceResolution: t } = this.props;
          if (t) return t.width;
          const a = e.GetCurrentImageOption();
          if (!a) return 0;
          const i = r.Fj[a.artworkType].height;
          return a ? (0, r.qj)(i) : 0;
        }
        GetLargestBoxThatFits(e, t, a, i) {
          let n = a,
            r = (n * t) / Math.max(e, 1);
          return (
            r > i && ((r = i), (n = (r * e) / Math.max(t, 1))),
            { width: n, height: r }
          );
        }
        GetPreviewWindowStyle() {
          const { region: e } = this.state,
            t = this.GetLargestBoxThatFits(
              this.GetDestWidth(),
              this.GetDestHeight(),
              500,
              150,
            ),
            a = t.width,
            i = t.height,
            n = 1 / Math.max(e.widthPct / 100, 1e-4),
            r = 1 / Math.max(e.heightPct / 100, 1e-4),
            s = (this.props.uploadFile.width * e.xPosPct) / 100,
            o = (this.props.uploadFile.height * e.yPosPct) / 100;
          return {
            width: a,
            height: i,
            backgroundPosition: `${-s * ((a * n) / this.props.uploadFile.width)}px ${-o * ((i * r) / this.props.uploadFile.height)}px`,
            backgroundSize: `${100 * n}% ${100 * r}%`,
            backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
          };
        }
        render() {
          const e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
            t = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
            a = this.GetLargestBoxThatFits(
              this.props.uploadFile.width,
              this.props.uploadFile.height,
              800,
              500,
            );
          return n.createElement(
            m.x_,
            {
              onEscKeypress: this.props.closeModal,
              bDisableBackgroundDismiss: !0,
            },
            n.createElement(
              "div",
              {
                className: (0, c.A)("DialogContent", "_DialogCenterVertically"),
              },
              n.createElement(
                o.iK,
                null,
                (0, d.we)(
                  "#ImageUpload_CropModalTitleDims",
                  this.GetDestWidth(),
                  this.GetDestHeight(),
                ),
              ),
              n.createElement(
                "div",
                { className: (0, c.A)("DialogBodyText") },
                (0, d.we)("#ImageUpload_CropModalDescription"),
              ),
              n.createElement(
                "div",
                {
                  className: u.CropImage,
                  style: { width: a.width, height: a.height },
                },
                n.createElement("img", {
                  style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                n.createElement(l.I, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: t,
                  widthPct: e,
                  heightPct: t,
                }),
              ),
              n.createElement(
                "div",
                { className: u.CropPreviewGroup },
                n.createElement(
                  "div",
                  { className: u.CropPreviewLabel },
                  (0, d.we)("#ImageUpload_CropPreview"),
                ),
                n.createElement("div", { style: this.GetPreviewWindowStyle() }),
              ),
              n.createElement(
                o.jn,
                { onClick: this.OnCrop },
                (0, d.we)("#ImageUpload_CropAndContinue"),
              ),
            ),
          );
        }
      }
      function h(e) {
        switch (e) {
          case s.bg.k_EClanImageFileType_PNG:
            return "image/png";
          case s.bg.k_EClanImageFileType_JPEG:
            return "image/jpeg";
        }
      }
      (0, i.Cg)([_.oI], p.prototype, "OnCrop", null),
        (0, i.Cg)([_.oI], p.prototype, "UpdateCrop", null);
    },
    27543: (e, t, a) => {
      "use strict";
      a.d(t, { JS: () => r, rG: () => s });
      var i = a(22837),
        n = a(61859);
      function r(e) {
        switch (e) {
          case i.Mv.k_EBetaReleaseEvent:
          case i.Mv.k_EIRLEvent:
          case i.Mv.k_EGameEvent:
          case i.Mv.k_EMeetingEvent:
          case i.Mv.k_ESpecialCauseEvent:
          case i.Mv.k_EMusicAndArtsEvent:
          case i.Mv.k_ETripEvent:
          case i.Mv.k_ESportsEvent:
          case i.Mv.k_EChatEvent:
          case i.Mv.k_EBroadcastEvent:
          case i.Mv.k_EESportTournamentStreamEvent:
          case i.Mv.k_EDevStreamEvent:
          case i.Mv.k_EFamousStreamEvent:
          case i.Mv.k_EGameSalesEvent:
          case i.Mv.k_EGameItemSalesEvent:
          case i.Mv.k_EInGameBonusXPEvent:
          case i.Mv.k_EInGameLootEvent:
          case i.Mv.k_EInGamePerksEvent:
          case i.Mv.k_EInGameEventGeneral:
          case i.Mv.k_EInGameChallengeEvent:
          case i.Mv.k_EInGameContestEvent:
          case i.Mv.k_EFreeTrial:
          case i.Mv.k_ESeasonRelease:
          case i.Mv.k_EOtherEvent:
          case i.Mv.k_ECrosspostEvent:
            return !0;
        }
        return !1;
      }
      function s(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, n.we)(t);
        return a != t ? a : (0, n.we)("#PartnerEvent_Other");
      }
    },
  },
]);
