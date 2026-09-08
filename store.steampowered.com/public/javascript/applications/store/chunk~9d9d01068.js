/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [63089],
  {
    79821: (e, t, r) => {
      r.d(t, { Kl: () => i, Yj: () => l, iH: () => a, zV: () => c });
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
        a = [
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
        s = [
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
      i.filter((e) => !s.includes(e));
      let n;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (n || (n = o(i)), n);
      }
      function l(e, t = null, r = " ") {
        const i = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(i, r);
      }
      function c(e, t = null, r = "") {
        const i = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), r);
      }
    },
    75682: (e, t, r) => {
      r.d(t, {
        $N: () => U,
        CX: () => H,
        Dp: () => E,
        wz: () => A,
        qX: () => z,
        cD: () => v,
        yX: () => I,
        Q5: () => i,
        Ji: () => s,
        Xs: () => a,
        AH: () => N,
        zF: () => x,
      });
      var i = {};
      r.r(i), r.d(i, { qZ: () => d });
      var a = {};
      r.r(a), r.d(a, { bV: () => _, O8: () => m, x1: () => u });
      var s = {};
      r.r(s),
        r.d(s, {
          HW: () => p,
          MU: () => b,
          qP: () => y,
          RU: () => g,
          mP: () => h,
        });
      var n = r(80613),
        o = r.n(n),
        l = r(89068),
        c = r(56545);
      const d = 0,
        m = 1,
        u = 2,
        _ = 3,
        p = 0,
        g = 3,
        h = 4,
        b = 6,
        y = 7;
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.voteid || l.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  active: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  start_time: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_time: { n: 4, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  app_discounts: { n: 5, c: f, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  groups: { n: 7, c: S, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localization: { n: 9, c: w },
                  reveal_time: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  flag: { n: 13, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || l.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  discount: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.groupid || l.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  group_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  app_discounts: { n: 3, c: f, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.title || l.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  title: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  title_linebreak: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.language || l.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  sale_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.votes || l.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  votes: { n: 1, c: B, r: !0, q: !0 },
                  labor_of_love_winners: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.voteid || l.Sg(T.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  voteid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.sale_appid || l.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.user_votes || l.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { user_votes: { n: 1, c: T, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.voteid || l.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.user_votes || l.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { user_votes: { n: 1, c: T, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.category_id || l.Sg(G.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = l.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.nominations || l.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { nominations: { n: 1, c: G, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class C extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || l.Sg(C.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = l.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.category_id || l.Sg(A.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.nominations || l.Sg(O.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { nominations: { n: 1, c: G, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = l.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.category_id || l.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.played_app || l.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  played_app: { n: 1, c: D, r: !0, q: !0 },
                  suggested_events: { n: 2, c: k, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: q, r: !0, q: !0 },
                  debug_query: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || l.Sg(D.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  playtime: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = l.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.clanid || l.Sg(k.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  clanid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = l.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appid || l.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.generate_new || l.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  generate_new: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = l.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.code || l.Sg(L.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  code: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = l.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var x, N;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t, r) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, c.I8)(v, t, r),
            M,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t, r) {
            return e.SendMsg("StoreSales.SetVote#1", (0, c.I8)(I, t, r), R, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t, r) {
            return e.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, c.I8)(z, t, r),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(x || (x = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t, r) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, c.I8)(E, t, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t, r) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, c.I8)(C, t, r),
                F,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t, r) {
              return e.SendMsg(
                "SteamAwards.Nominate#1",
                (0, c.I8)(A, t, r),
                O,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationRecommendations = function (e, t, r) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, c.I8)(U, t, r),
                W,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t, r) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, c.I8)(H, t, r),
                L,
                { ePrivilege: 1 },
              );
            });
        })(N || (N = {}));
    },
    83085: (e, t, r) => {
      r.d(t, { Gw: () => o, Lk: () => l, ai: () => n, mm: () => s });
      var i = r(14947);
      const a = i.sH.box(void 0);
      function s() {
        return a.get();
      }
      function n(e) {
        (0, i.h5)(() => a.set(e));
      }
      function o() {
        const e = a.get();
        return e || Math.floor(Date.now() / 1e3);
      }
      function l() {
        const e = a.get();
        return e ? new Date(1e3 * e) : new Date();
      }
    },
    62641: (e, t, r) => {
      r.d(t, {
        FZ: () => ce,
        A4: () => I,
        iy: () => z,
        ZA: () => C,
        Dn: () => A,
        CU: () => Y,
        Ay: () => $,
        ye: () => Q,
        Fo: () => te,
        G$: () => re,
        Xx: () => O,
        DJ: () => ne,
        G6: () => ie,
        zv: () => U,
        IS: () => L,
        GE: () => q,
        yX: () => H,
        w: () => ae,
        EE: () => k,
        Zf: () => x,
        jR: () => N,
        Ac: () => de,
        lh: () => _e,
        Hc: () => se,
        UR: () => ee,
        mz: () => X,
        qQ: () => V,
        MW: () => K,
        W2: () => P,
        Pm: () => Z,
        qR: () => J,
        _B: () => W,
        j3: () => pe,
        Yw: () => D,
        zK: () => E,
        DU: () => G,
        cB: () => oe,
      });
      var i = r(34629),
        a = r(79821),
        s = r(2160),
        n = r(22837),
        o = r(75682),
        l = r(14947);
      const c = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(n.bP9),
        localized_broadcast_left_image: new Array(n.bP9),
        localized_broadcast_right_image: new Array(n.bP9),
        broadcast_whitelist: [],
      };
      var d = r(17720),
        m = r(17267),
        u = r(7221),
        _ = r(27939),
        p = r(83085),
        g = r(81393),
        h = r(61859),
        b = r(25489),
        y = r(27543),
        B = r(41338),
        f = r(14771),
        S = r(6419);
      (0, i.Cg)(
        [S.o],
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
      const w = 99999;
      var v = r(75933),
        M = r(66418);
      const T = [
        n.u0,
        n.zeJ,
        n.Fa4,
        n.Aav,
        n.SRb,
        n.zA,
        n.y6,
        n.hGl,
        n.WNR,
        n.pIh,
        n.izQ,
        n.uYK,
        n.f4X,
        n.zcX,
        n.yhO,
      ];
      function z(e) {
        return (
          T.some((t) => t == e.GetEventType()) &&
          !e.BHasTag("steam_award_nomination_request") &&
          !e.BHasTag("curator")
        );
      }
      const j = [n.HRy, n.LOv, n.HFK];
      function I(e) {
        return !j.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      n.Fwr, n.HFK;
      const R = [
        n.L0X,
        n.KDJ,
        n.HRy,
        n.C$4,
        n.zA,
        n.y6,
        n.hGl,
        n.pIh,
        n.izQ,
        n.I5b,
        n.LOv,
        n.WNR,
      ];
      new Set(R);
      const G = 593110,
        E = [G, 766, 221410],
        F = [n.Fwr, n.HFK];
      function C(e) {
        return !F.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      function A(e, t = (0, p.Gw)()) {
        const r = 60 * f.Kp.PerDay;
        return (
          e.BIsVisibleEvent(t) &&
          e.BIsOGGEvent() &&
          (e.rtime32_last_modified ?? 0) > t - r &&
          !O(e)
        );
      }
      function O(e) {
        return e.BHasTag("mod_reviewed") && !e.BHasTag("mod_require_rereview");
      }
      var U;
      function W(e) {
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
      })(U || (U = {}));
      const D = "bordered";
      var k, q, H, L, x, N;
      function P(e) {
        return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
      }
      function V(e) {
        return e.carousel_rows || 1;
      }
      function K(e) {
        return e.cap_item_count || 0;
      }
      function X(e) {
        return e.cap_section_row_count && e.cap_section_row_count > 0
          ? e.cap_section_row_count
          : "trailercarousel" == e.section_type
            ? 1
            : e.cap_section_content
              ? 4
              : 0;
      }
      function J(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function Q(e) {
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
      function $(e) {
        switch (e) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function Y(e, t = !1) {
        return (
          !(
            !e ||
            !(function (e) {
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
            })(e.section_type)
          ) &&
          (t
            ? !!e.sale_tag_filter?.clauses?.length || !!e.smart_section
            : !!e.smart_section && null != e.smart_section_type)
        );
      }
      function Z(e) {
        return Y(e) ? e?.smart_section_type : void 0;
      }
      function ee(e) {
        return (
          (e.jsondata.sale_ml_recommender_delay_hours &&
            (e.startTime ?? 0) +
              e.jsondata.sale_ml_recommender_delay_hours * f.Kp.PerHour -
              new Date().getTime() / 1e3) ??
          0
        );
      }
      function te(e, t, r) {
        return (
          !!e.BIsNextFest() &&
          !!Q(t.section_type) &&
          (r == v.sQ.Random || ee(e) > 0)
        );
      }
      function re(e, t, r) {
        return !!t.use_random_order || !!te(e, t, r);
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
      })(k || (k = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(q || (q = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(H || (H = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(L || (L = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(x || (x = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })(N || (N = {}));
      const ie = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(n.bP9),
        localized_label_image: new Array(n.bP9),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var ae;
      function se(e) {
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
      })(ae || (ae = {}));
      const ne = {
          localized_subtitle: new Array(n.bP9),
          localized_summary: new Array(n.bP9),
          localized_title_image: new Array(n.bP9),
          localized_capsule_image: new Array(n.bP9),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(n.bP9),
          localized_sale_overlay: new Array(n.bP9),
          localized_sale_product_banner: new Array(n.bP9),
          localized_sale_product_mobile_banner: new Array(n.bP9),
          localized_sale_logo: new Array(n.bP9),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...c,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        oe = "old_announce_",
        le = [
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
        ce = [
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
        de = [
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
        me = [n.HRy, n.LOv, n.HFK],
        ue = [
          n.L0X,
          n.KDJ,
          n.HRy,
          n.C$4,
          n.zA,
          n.y6,
          n.hGl,
          n.pIh,
          n.izQ,
          n.I5b,
          n.LOv,
          n.WNR,
        ];
      class _e {
        constructor() {
          (0, l.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new d.b();
        forumTopicGID = void 0;
        type = n.DRF;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        createTime = void 0;
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = U.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = ne;
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
        fnGetLocalizedGroupImages;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new _e(),
            r = JSON.parse(e);
          return (
            Object.assign(t, r),
            (t.name = new Map(r.name)),
            (t.description = new Map(r.description)),
            (t.vecTags = [...(r.vecTags ?? r.tags ?? [])]),
            (t.clanSteamID = new d.b(r.clanSteamID)),
            (0, g.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            r.broadcaster &&
              ((t.broadcaster = new d.b(r.broadcaster)),
              (0, g.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        static FromCClanEventData(e, t) {
          let r = new _e();
          return (
            (r.GID = e.gid),
            (r.clanSteamID = new d.b(e.clan_steamid)),
            r.name.set(t, e.event_name ?? ""),
            (r.type = e.event_type),
            (r.appid = e.appid ?? 0),
            (r.startTime = e.rtime32_start_time),
            (r.endTime = e.rtime32_end_time),
            (r.nCommentCount = e.comment_count ?? 0),
            (r.creator_steamid = e.creator_steamid),
            (r.last_update_steamid = e.last_update_steamid),
            (r.jsondata = JSON.parse(e.jsondata ?? "{}")),
            (r.rtime32_last_local_modification = e.rtime32_last_modified),
            e.published
              ? e.hidden
                ? (r.visibility_state = e.unlisted
                    ? U.k_EEventStateUnlisted
                    : U.k_EEventStateStaged)
                : (r.visibility_state = U.k_EEventStateVisible)
              : (r.visibility_state = U.k_EEventStateUnpublished),
            (r.createTime = e.rtime_created),
            (r.m_nBuildID = e.build_id),
            (r.m_strBuildBranch = e.build_branch),
            (r.visibilityStartTime = e.rtime32_visibility_start),
            (r.visibilityEndTime = e.rtime32_visibility_end),
            (r.rtime32_moderator_reviewed = e.rtime_mod_reviewed),
            (r.featured_app_tagid = e.featured_app_tagid),
            e.broadcaster_accountid &&
              (r.broadcaster = d.b.InitFromAccountID(e.broadcaster_accountid)),
            (r.AnnouncementGID = e.announcement_body?.gid ?? "0"),
            (r.postTime = e.announcement_body?.posttime),
            (r.forumTopicGID = e.forum_topic_id),
            r.name.set(t, e.announcement_body?.headline ?? ""),
            r.description.set(t, e.announcement_body?.body ?? ""),
            (r.nCommentCount = e.comment_count ?? 0),
            (r.vecTags = [...(e.announcement_body?.tags ?? [])]),
            (r.forumTopicGID = e.announcement_body?.forum_topic_id),
            (r.nVotesUp = e.announcement_body?.voteupcount ?? 0),
            (r.nVotesDown = e.announcement_body?.votedowncount ?? 0),
            r
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.vecTags = Array.from(this.vecTags)),
            (t.tags = t.vecTags),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new _e();
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
            this.name.forEach((e, r) => {
              t.name.set(r, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, r) => {
              t.description.set(r, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, r) => {
              t.timestamp_loc_updated.set(r, e);
            }),
            (t.createTime = this.createTime ?? 0),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new d.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  le.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let r of t.jsondata.email_setting.sections)
              r.unique_id || ((r.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let r = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (r =
                  void 0 === r
                    ? e.visibility_index
                    : Math.max(r, e.visibility_index));
            }),
            r
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const r of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(r.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart(e = (0, p.Gw)()) {
          let t = 0;
          void 0 !== this.startTime &&
            e >= this.startTime &&
            (t = Math.floor((e - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (t = this.m_overrideCurrentDay);
          const r = this.GetLastReferencedSaleDay() || 0;
          return Math.min(t, r);
        }
        GetNameWithFallback(e) {
          const t = h.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
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
              !h.A0.IsELanguageValidInRealm(e, s.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !h.A0.IsELanguageValidInRealm(e, s.TU.k_ESteamRealmChina)
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
                : u.pb.includes(e)
                  ? (t = this.fnGetLocalizedGroupImages?.())
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
        GetImageURL(e, t = n.Bhc, r = u.wI.full) {
          const i = this.GetImgArray(e),
            a = i && i.length > t && null != i[t];
          return a && i[t]?.startsWith("http")
            ? i[t]
            : a
              ? m.zU.GenerateURLFromHashAndExt(this.clanSteamID, i[t] ?? "", r)
              : void 0;
        }
        GetImageHash(e, t = n.Bhc) {
          let r = this.GetImgArray(e);
          return r && r.length > t && null != r[t]
            ? r[t].substr(0, r[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = n.Bhc) {
          let r = this.GetImgArray(e);
          return r && r.length > t && null != r[t] ? r[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let r = this.GetImgArray(e);
          return !!r && r.length > t && null != r[t];
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
        GetForumTopicURL(e) {
          return this.BHasForumTopicGID()
            ? this.appid
              ? M.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.appid +
                "/eventcomments/" +
                this.forumTopicGID
              : e
                ? M.TS.COMMUNITY_BASE_URL +
                  "groups/" +
                  e +
                  "/eventcomments/" +
                  this.forumTopicGID
                : M.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  this.clanSteamID.ConvertTo64BitString() +
                  "/eventcomments/" +
                  this.forumTopicGID
            : "";
        }
        BIsEventInFuture(e = (0, p.Gw)()) {
          return e < (this.startTime ?? 0);
        }
        BHasEventEnded(e = (0, p.Gw)()) {
          return (this.endTime ?? 0) < e;
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
          let r = this.GetDescriptionWithFallback(e);
          if (r) {
            let e = r.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = r.indexOf("[/img]", e);
              if (-1 != t) {
                let i = r.substring(e, t).trim();
                if (0 != i.length)
                  return m.zU.ReplacementTokenToClanImageURL(i);
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
        BImageNeedScreenshotFallback(e, t) {
          let r = this.GetImageURL(e, t);
          if (!r || 0 == r.length) {
            const i = h.A0.GetELanguageFallback(t);
            t != i && (r = this.GetImageURL(e, i));
          }
          return !r || 0 == r.length;
        }
        GetDescriptionWithFallback(e) {
          const t = h.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t, r = {}) {
          const i = h.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != i && null != this.GetImageURL(e, i)) ||
            (this.appid && r.bAppHasAgeSafeScreenshots) ||
            (!this.appid &&
              r.clanInfo &&
              ((r.clanInfo.is_creator_home && !r.clanInfo.is_ogg) ||
                r.clanInfo.is_curator))
          );
        }
        BIsVisibleEvent(e = (0, p.Gw)()) {
          let t = Math.floor(e);
          return (
            this.visibility_state == U.k_EEventStateUnlisted ||
            (this.visibility_state == U.k_EEventStateVisible &&
              t > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                t < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == U.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == U.k_EEventStateUnlisted;
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
        BIsEventActionEnabled(e = (0, p.Gw)()) {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > e ||
              (1575396e3 == this.jsondata.action_end_time && 1606845600 > e))
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
            ? h.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            h.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            _e.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            h.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            _e.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return h.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, a.Yj)(e, [
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
              (e = (0, a.zV)(e, ["p"], " ")),
              (e = (0, a.zV)(e)),
              (e = (0, B.aX)(e)),
              (0, B.bC)(e, t || 180))
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
          if (me.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(ue.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * f.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e, t = (0, p.Gw)()) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const r = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < r))
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
            h.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, h.we)(
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
              d.b.InitFromAccountID(e).ConvertTo64BitString(),
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
        GetSaleURL(e) {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              M.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              M.TS.STORE_BASE_URL +
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
                ? M.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? M.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? M.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, h.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? M.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? M.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : M.TS.STORE_BASE_URL + e.type
              : M.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          return this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
            ? M.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id
            : e
              ? e + "sale/" + this.jsondata.sale_vanity_id
              : M.TS.STORE_BASE_URL +
                "curator/" +
                this.clanSteamID.GetAccountID() +
                "/sale/" +
                this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, r, i, a, s) {
          const n = [],
            o = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let l = 100009;
          return (
            e &&
              n.push({
                ...o,
                section_type: "footer_self_creator_home",
                unique_id: l++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              n.push({
                ...o,
                section_type: "footer_browse_more",
                unique_id: l++,
              }),
            i &&
              n.push(
                this.GenerateDynamicCreatorHomeItemBrowserSection(l++, o, s),
              ),
            r &&
              n.push({
                ...o,
                section_type: "footer_default_social_share",
                unique_id: l++,
              }),
            a &&
              n.push({ ...o, section_type: "nextfest_header", unique_id: l++ }),
            n
          );
        }
        GetSaleSectionIncludingFooterSections(e = 0) {
          const t = this.jsondata?.sale_show_creator,
            r = this.jsondata.sale_browse_more_button,
            i =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            a = this.GetEventType() == n.ajI,
            s = this.BShowNextFestHeader(!0);
          return t || r || i || a || s
            ? [
                ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, s, e),
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!t, !!r, i, a, !1, e),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e, t = 0) {
          if (e > w) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
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
            for (let r = 0; r < t; ++r)
              if (this.jsondata.sale_sections[r].section_type === e)
                return this.jsondata.sale_sections[r];
        }
        static AccumulateCapsuleListIDs(e, t, r, i) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((i && !i(e.id)) || r.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const r = new Set(e),
            i = new Set();
          return (
            (0, g.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize,
            this.jsondata.tagged_items?.forEach((e) => {
              _e.AccumulateCapsuleListIDs([e.capsule], r, i, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (Q(e.section_type))
                _e.AccumulateCapsuleListIDs(e.capsules, r, i, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const a of e.tabs)
                  _e.AccumulateCapsuleListIDs(a.capsules, r, i, t);
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
          return (0, y.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, h.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, h.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, h.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, h.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        this.type == n.KDJ)
                    ? (0, h.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, h.we)("#PartnerEvent_MM_MajorUpdate")
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
          return this.jsondata.steam_award_category_suggestion ?? o.Q5.qZ;
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
            this.jsondata.item_source_type === ae.k_EContentHub &&
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
            this.BInRealmGlobal() && e.push(s.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(s.TU.k_ESteamRealmChina),
            (0, g.wT)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest(e = !1) {
          const t = this.jsondata.sale_vanity_id?.toLowerCase(),
            r = new d.b(this.clanSteamID).GetAccountID();
          return (
            !(!t || r != _.GU) &&
            !!t.startsWith("nextfest") &&
            (!e || (!t.endsWith("preview") && !t.endsWith("press")))
          );
        }
        BShowNextFestHeader(e) {
          return e && M.iA.is_valve_email
            ? this.BIsNextFest(!1)
            : this.BIsNextFest(!0) &&
                !!this.startTime &&
                this.startTime > new Date("2026-03-01").getTime() / 1e3;
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t, r) {
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
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing: r >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            cap_item_count: 24,
            show_more_count: 48,
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
                { loc_token: "#Sale_Preferences" },
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
      function pe(e) {
        if (e) return e?.replace(/[()]/g, "\\$&");
      }
      (0, i.Cg)([l.sH], _e.prototype, "GID", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "AnnouncementGID", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "forumTopicGID", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "type", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "appid", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "name", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "description", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "timestamp_loc_updated", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "startTime", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "endTime", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "visibilityStartTime", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "visibilityEndTime", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "m_nBuildID", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "m_strBuildBranch", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "postTime", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "visibility_state", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "broadcaster", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "jsondata", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "nCommentCount", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "nVotesUp", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "nVotesDown", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "bOldAnnouncement", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "announcementClanSteamID", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "loadedAllLanguages", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "bLoaded", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "deleteInProgress", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "vecTags", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "last_update_steamid", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "rtime32_last_modified", void 0),
        (0, i.Cg)(
          [l.sH],
          _e.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, i.Cg)(
          [l.sH],
          _e.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, i.Cg)([l.sH], _e.prototype, "rtime32_moderator_reviewed", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "video_preview_type", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "video_preview_id", void 0),
        (0, i.Cg)([l.sH], _e.prototype, "m_overrideCurrentDay", void 0);
    },
    75933: (e, t, r) => {
      r.d(t, {
        $m: () => l,
        ML: () => b,
        QS: () => m,
        Sn: () => f,
        Wn: () => _,
        ZI: () => w,
        a4: () => y,
        f_: () => B,
        jD: () => c,
        jn: () => S,
        mj: () => d,
        rp: () => h,
        sQ: () => u,
      });
      var i = r(9646),
        a = r(22837),
        s = r(62641),
        n = r(90626),
        o = r(24864);
      const l = "100% 0px 100% 0px",
        c = "tab",
        d = "SaleSection_",
        m = "exploration";
      var u;
      !(function (e) {
        (e.Random = "r"), (e.Personalized = "p");
      })(u || (u = {}));
      const _ = 940,
        p = 1920;
      function g() {
        return window.innerWidth ?? p;
      }
      function h() {
        return g() >= _;
      }
      function b() {
        (0, i.d)();
        const [e, t] = (0, n.useState)(() => g());
        return (
          (0, n.useEffect)(() => {
            const e = () => {
              t(g());
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      }
      function y(e = _) {
        return b() >= e;
      }
      function B(e) {
        const t = y(_),
          r = (0, s._B)(e);
        return t
          ? { nMaxCapsulesPerRow: r.nMaxItemsPerRow, bScreenIsWide: t }
          : {
              nMaxCapsulesPerRow: Math.min(
                Math.max(
                  Math.floor(window.innerWidth / r.nItemMinimumWidth),
                  1,
                ),
                r.nMaxItemsPerRow,
              ),
              bScreenIsWide: t,
            };
      }
      function f(e) {
        const t = (0, s._B)(e);
        return h()
          ? t.nMaxItemsPerRow
          : Math.min(
              Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
              t.nMaxItemsPerRow,
            );
      }
      function S(e) {
        switch (e) {
          case o.Oh:
            return a.mv5;
          case o._X:
            return a.KH9;
          case o.HD:
            return a.hmR;
          case o.rb:
            return a.R2g;
          default:
            return;
        }
      }
      function w(e) {
        switch (e) {
          case a.mv5:
            return o.Oh;
          case a.KH9:
            return o._X;
          case a.hmR:
            return o.HD;
          default:
            return;
        }
      }
    },
    27543: (e, t, r) => {
      r.d(t, { JS: () => s, rG: () => n });
      var i = r(22837),
        a = r(78686);
      function s(e) {
        switch (e) {
          case i.Aqr:
          case i.I5b:
          case i.jO6:
          case i.Y3j:
          case i.Bb7:
          case i.TiP:
          case i.EPt:
          case i.E3D:
          case i.L0X:
          case i.KDJ:
          case i.Fa4:
          case i.Aav:
          case i.SRb:
          case i.HRy:
          case i.C$4:
          case i.zA:
          case i.y6:
          case i.hGl:
          case i.WNR:
          case i.pIh:
          case i.izQ:
          case i.LOv:
          case i.zcX:
          case i.DRF:
          case i.HFK:
            return !0;
        }
        return !1;
      }
      function n(e) {
        let t = "#PartnerEvent_" + e,
          r = a.Z.Localize(t);
        return r != t ? r : a.Z.Localize("#PartnerEvent_Other");
      }
    },
  },
]);
