/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7382],
  {
    12247: (e) => {
      e.exports = {
        SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
        InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
        SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
        SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
        SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
        SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
        SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
        SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
        SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
        BottomRight: "zr64QF0O74AQ9RMG-dGnw",
        SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
        LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
        SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
        SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
        SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
        VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
        SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
        SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
        SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
        SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
        SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
        NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
        SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
        Nominated: "_1No9r92B3LLgMOaSMSC9vE",
        SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
        SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
        SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
        ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
        AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
        SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
        NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
      };
    },
    36148: (e, t, r) => {
      "use strict";
      r.d(t, {
        RZ: () => H,
        Fq: () => K,
        _C: () => ne,
        Mn: () => me,
        PV: () => le,
        ed: () => Z,
        jT: () => ee,
        np: () => ae,
        Jo: () => Y,
        cO: () => X,
        Vz: () => J,
        a8: () => oe,
        $d: () => te,
        ZB: () => se,
        lE: () => re,
      });
      var i = r(2160),
        a = r(56545),
        n = r(37735),
        s = r(80613),
        o = r(89068);
      const m = s.Message;
      class l extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.voteid || o.Sg(l.M()),
            m.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  voteid: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  active: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                  start_time: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  end_time: { n: 4, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  app_discounts: { n: 5, c, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  groups: { n: 7, c: d, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  localization: { n: 9, c: u },
                  reveal_time: {
                    n: 10,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  flag: { n: 13, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = o.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class c extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || o.Sg(c.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  discount: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = o.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class d extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.groupid || o.Sg(d.M()),
            m.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  groupid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  group_name: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  app_discounts: { n: 3, c, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class u extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.title || o.Sg(u.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  title: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  title_linebreak: {
                    n: 2,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = o.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class g extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.language || o.Sg(g.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  language: { n: 1, br: o.qM.readString, bw: o.gp.writeString },
                  sale_appid: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class p extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.votes || o.Sg(p.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { votes: { n: 1, c: l, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class _ extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.voteid || o.Sg(_.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  voteid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class B extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.sale_appid || o.Sg(B.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = o.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class w extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.user_votes || o.Sg(w.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { user_votes: { n: 1, c: _, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = o.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class y extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.voteid || o.Sg(y.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  voteid: { n: 1, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class S extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.user_votes || o.Sg(S.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { user_votes: { n: 1, c: _, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = o.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class b extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.category_id || o.Sg(b.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  category_id: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  appid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class f extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
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
          let t = new s.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class M extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.nominations || o.Sg(M.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { nominations: { n: 1, c: b, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = o.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || o.Sg(z.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = o.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class h extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.category_id || o.Sg(h.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  category_id: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  source: { n: 3, br: o.qM.readEnum, bw: o.gp.writeEnum },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class v extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.nominations || o.Sg(v.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { nominations: { n: 1, c: b, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = o.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class A extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.category_id || o.Sg(A.M()),
            m.initialize(this, e, 0, -1, void 0, null);
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
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = o.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class T extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.played_app || o.Sg(T.M()),
            m.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  played_app: { n: 1, c: R, r: !0, q: !0 },
                  suggested_events: { n: 2, c: C, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: E, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = o.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class R extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || o.Sg(R.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  playtime: { n: 2, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = o.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class C extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.clanid || o.Sg(C.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  clanid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  appid: { n: 3, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = o.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class E extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || o.Sg(E.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = o.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class F extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.generate_new || o.Sg(F.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  generate_new: { n: 1, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = o.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class N extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.code || o.Sg(N.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  code: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = o.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var I, O;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, a.I8)(g, t),
            p,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t) {
            return e.SendMsg("StoreSales.SetVote#1", (0, a.I8)(y, t), S, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t) {
            return e.SendMsg("StoreSales.GetUserVotes#1", (0, a.I8)(B, t), w, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(I || (I = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, a.I8)(f, t),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, a.I8)(z, t),
                M,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t) {
              return e.SendMsg("SteamAwards.Nominate#1", (0, a.I8)(h, t), v, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (e.GetNominationRecommendations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, a.I8)(A, t),
                T,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, a.I8)(F, t),
                N,
                { ePrivilege: 1 },
              );
            });
        })(O || (O = {}));
      var j = r(20194),
        W = r(75233),
        U = r(51614),
        q = r(23809),
        D = r(30470),
        G = r(24484),
        V = r(30894),
        x = r(41735),
        L = r.n(x),
        k = r(90626),
        P = r(58222);
      const H = 2640290,
        K = 2215130;
      let $;
      function Q() {
        return (
          $ || ($ = (0, G.Fd)("steam_awards_config", "application_config")), $
        );
      }
      function Y(e) {
        const t = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`SteamAwardDefs_${e}`],
          queryFn: async () => {
            const r = a.w.Init(g);
            r.Body().set_sale_appid(e), r.Body().set_language(D.TS.LANGUAGE);
            return (await I.GetVoteDefinitions(t, r)).Body().toObject();
          },
          initialData: () => Q()?.definitions,
          enabled: e > 0,
        });
      }
      function X() {
        const e = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`SteamAwardNominations_${D.iA.accountid}`],
          queryFn: async () => {
            const t = a.w.Init(f),
              r = await O.GetUserNominations(e, t);
            return r.Body().toObject()?.nominations;
          },
          initialData: () => Q()?.user_nominations?.nominations,
          enabled: D.iA.logged_in,
        });
      }
      function J(e) {
        const t = X();
        return t.isLoading
          ? { bLoadingNominationForCategory: !0 }
          : {
              currentNomination: t.data?.find((t) => t.category_id == e),
              bLoadingNominationForCategory: !1,
            };
      }
      function Z(e) {
        const t = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`SteamAwardBadgeProgress_${e}`],
          queryFn: async () => {
            const r = a.w.Init(n.jn);
            r.Body().set_badgeid(e), r.Body().set_steamid(D.iA.steamid);
            return (await n.xt.GetCommunityBadgeProgress(t, r))
              .Body()
              .toObject();
          },
          initialData: () => Q()?.badge_progress,
          enabled: D.iA.logged_in,
        });
      }
      function ee(e) {
        const t = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`SteamAwardSuggestions_${e}`],
          queryFn: async () => {
            const r = a.w.Init(A);
            r.Body().set_category_id(e);
            return (await O.GetNominationRecommendations(t, r))
              .Body()
              .toObject();
          },
          staleTime: 1 / 0,
        });
      }
      function te(e, t, r, i) {
        const n = (0, q.KV)(),
          s = (0, W.jE)();
        return (0, U.n)({
          mutationFn: () =>
            (async function (e, t, r, i) {
              const n = a.w.Init(h);
              n.Body().set_category_id(r),
                n.Body().set_source(i),
                n.Body().set_nominated_id(t);
              const s = await O.Nominate(e, n);
              return (
                s.BSuccess() ||
                  console.warn(`Failed to nominate app: ${s.GetEResult()}`),
                [s.GetEResult(), s.Body().toObject()]
              );
            })(n, e, t, r),
          onSuccess: ([e, t]) => {
            1 == e
              ? (function (e, t) {
                  e.setQueryData(
                    [`SteamAwardNominations_${D.iA.accountid}`],
                    t,
                  );
                })(s, t.nominations)
              : i && i(e);
          },
          onError: () => {
            i && i();
          },
        });
      }
      function re(e, t) {
        return (0, j.I)({
          queryKey: [e, t.voteid],
          queryFn: () =>
            (async function (e, t) {
              let r = {
                cc: D.TS.COUNTRY,
                l: D.TS.LANGUAGE,
                realm: i.TU.k_ESteamRealmGlobal,
                origin: self.origin,
                f: "jsonfull",
                term: e.replace(" ", "+"),
                require_type: "game",
                is_released_somewhere: 1,
                excluded_tags: V.Fm.Get().GetExcludedTagsSortedByID(),
                excluded_content_descriptors:
                  V.Fm.Get().ExcludedContentDescriptor,
                excluded_apps: [230410, 271590, 730, 105600, 1091500],
              };
              t.release_date_max &&
                (r.release_date_max = new Date(
                  1e3 * t.release_date_max,
                ).toISOString()),
                t.release_date_min &&
                  (r.release_date_min = new Date(
                    1e3 * t.release_date_min,
                  ).toISOString()),
                1 == t.flag && (r.vrsupport = 1),
                2 == t.flag && (r.steam_deck_compat_categories = [0, 2, 3]);
              const a = `${D.TS.STORE_BASE_URL}search/suggest`;
              return (
                (await L().get(a, { params: r, withCredentials: !0 })).data ??
                []
              );
            })(e, t),
          staleTime: 1 / 0,
        });
      }
      async function ie(e, t) {
        const r = a.w.Init(F);
        r.Body().set_generate_new(t);
        const i = await O.GetNominationShareLink(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to GetNominationShareLink: ${i.GetEResult()}`),
          [i.GetEResult(), i.Body().toObject()]
        );
      }
      function ae() {
        const e = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`GetNominationShareLink_${D.iA.accountid}`],
          queryFn: async () => ie(e, !1),
          initialData: () => [1, Q()?.share_link],
          staleTime: 1 / 0,
          enabled: D.iA.logged_in,
        });
      }
      function ne() {
        const e = (0, q.KV)(),
          t = (0, W.jE)();
        return (0, U.n)({
          mutationFn: () => ie(e, !0),
          onSuccess: ([e, r]) => {
            1 == e &&
              t.setQueryData(
                [`GetNominationShareLink_${D.iA.accountid}`],
                [e, r],
              );
          },
        });
      }
      function se(e, t, r) {
        const i = (0, q.KV)(),
          n = (0, W.jE)();
        return (0, U.n)({
          mutationFn: () =>
            (async function (e, t, r, i) {
              const n = a.w.Init(y);
              n.Body().set_voteid(r),
                n.Body().set_appid(t),
                n.Body().set_sale_appid(i);
              const s = await I.SetVote(e, n);
              return (
                s.BSuccess() ||
                  console.warn(
                    `Failed to set vote for app (${t}): ${s.GetEResult()}`,
                  ),
                [s.GetEResult(), s.Body().toObject()]
              );
            })(i, e, t, r),
          onSuccess: ([e, t]) => {
            1 == e &&
              n.setQueryData(
                [`SteamAwardUserVotes_${D.iA.accountid}`],
                t.user_votes,
              );
          },
        });
      }
      function oe(e) {
        const t = (0, q.KV)();
        return (0, j.I)({
          queryKey: [`SteamAwardUserVotes_${D.iA.accountid}`],
          queryFn: () =>
            (async function (e, t) {
              const r = a.w.Init(B);
              r.Body().set_sale_appid(t);
              const i = await I.GetUserVotes(e, r);
              return (
                i.BSuccess() ||
                  console.warn(
                    `Failed to get votes for user: ${i.GetEResult()}`,
                  ),
                i.Body().toObject()?.user_votes
              );
            })(t, e),
          initialData: () => Q()?.user_votes,
          enabled: D.iA.logged_in,
        });
      }
      function me(e, t) {
        const r = oe(e);
        return (0, k.useMemo)(
          () => r.data?.find((e) => e.voteid == t)?.appid,
          [t, r.data],
        );
      }
      function le(e, t) {
        const r = (function (e) {
            const t = (0, q.KV)();
            return (0, j.I)({
              queryKey: [`SteamAwardItemDefs_${e}`],
              queryFn: async () => {
                const r = a.w.Init(P.RG);
                return (
                  r.Body().set_appid(e),
                  r.Body().set_language(D.TS.LANGUAGE),
                  (await P.uy.GetCommunityItemDefinitions(t, r))
                    .Body()
                    .toObject()
                );
              },
              staleTime: 1 / 0,
              initialData: () => Q()?.item_definitions,
            });
          })(e),
          i = Y(e);
        if (!r.data || !i.data) return null;
        const n = i.data.votes.find((e) => e.voteid == t);
        return r.data.item_definitions?.find((e) => e.item_type == n.item_type);
      }
    },
    64940: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ConfirmOverwriteVoteOrNominationDialog: () => W,
          EventDisplaySteamAwardNomination: () => O,
          EventDisplaySteamAwardVote: () => U,
          UserEligibleToNominateOrVote: () => F,
          WinterSaleSteamAwardVoteWrapper: () => D,
          default: () => q,
        });
      var i = r(34629),
        a = r(41735),
        n = r.n(a),
        s = r(14947),
        o = r(65946),
        m = r(75844),
        l = r(90626),
        c = r(44165),
        d = r(36148),
        u = r(16021),
        g = r(55263),
        p = r(7068),
        _ = r(95695),
        B = r.n(_),
        w = r(4434),
        y = r(68797),
        S = r(52038),
        b = r(61859),
        f = r(56093),
        M = r(61336),
        z = r(78327),
        h = r(44325),
        v = r(738),
        A = r(22797),
        T = r(86090),
        R = r(12247),
        C = r.n(R),
        E = r(82477);
      function F(e) {
        return z.iA.logged_in
          ? !z.iA.is_limited ||
              ((0, v.pg)(
                l.createElement(T.g, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window,
              ),
              !1)
          : ((0, v.pg)(
              l.createElement(h.o0, {
                strTitle: (0, b.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, b.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, b.we)("#MobileLogin_SignIn"),
                onOK: E.vg,
              }),
              window,
            ),
            !1);
      }
      async function N(e, t) {
        const r =
            z.TS.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
          i = {
            rgCategories: e,
            t:
              ((a = c.HD.GetTimeNowWithOverride()),
              new Date(1e3 * a).toISOString().slice(0, 19).replace("T", " ")),
          };
        var a;
        try {
          const e = await n().get(r, {
            params: i,
            withCredentials: !1,
            cancelToken: t.token,
          });
          if (t.token.reason) return null;
          if (1 == e?.data?.success && e?.data?.event_details)
            return e.data.event_details;
        } catch (e) {
          const t = (0, y.H)(e);
          console.error(
            "Could not fetch award event details:" + t.strErrorMsg,
            t,
          );
        }
        return null;
      }
      const I = { include_assets: !0 };
      function O(e) {
        const { event: t, lang: r, previewMode: i } = e,
          [a] = (0, o.q3)(() => [t.GetSteamAwardCategory()]),
          n = (0, w.m)("EventDisplaySteamAwardNomination"),
          [s, m] = (0, l.useState)(null),
          { currentNomination: u, bLoadingNominationForCategory: g } = (0,
          d.Vz)(a);
        if (
          ((0, l.useEffect)(() => {
            N([a], n).then((e) => {
              m(e);
            });
          }, [n, a]),
          !s || !s.rgAwardCategoryDetails?.length || g)
        )
          return l.createElement(A.t, {
            size: "small",
            position: "center",
            string: (0, b.we)("#Loading"),
          });
        const p = c.HD.GetTimeNowWithOverride();
        if (!i && !s.bIsAutumnSaleActive)
          return l.createElement(
            "div",
            { className: C().ExpiredEventHeader },
            " ",
            (0, b.we)("#SteamAwards_ExpiredEvent"),
            " ",
          );
        let _ = {};
        s.strBackgroundCSS.length && (_.backgroundColor = s.strBackgroundCSS),
          s.strBackgroundImage.length &&
            (_.backgroundImage = `url( ${s.strBackgroundImage} )`);
        const y = 1 == s.rgAwardCategoryDetails?.length,
          f =
            t.BIsEventActionEnabled() || p < t.GetStartTimeAndDateUnixSeconds(),
          h = new Date().getFullYear();
        return l.createElement(
          "div",
          {
            style: _,
            className: (0, S.A)(C().SteamAwardContainer, B().PartnerEventFont),
          },
          l.createElement(
            "div",
            { className: C().SteamAwardHeader },
            l.createElement("img", {
              className: C().SteamAwardHeaderImage,
              src: `${s.strTrophyImg}`,
            }),
            l.createElement(
              "div",
              { className: C().SteamAwardMainCtn },
              l.createElement(
                "div",
                { className: C().SteamAwardMainTitle },
                (0, b.we)("#SteamAwards_EventMainTitle"),
              ),
              l.createElement(
                "div",
                { className: C().SteamAwardSubTitle },
                f
                  ? (0, b.we)("#SteamAwards_EventCallToAction")
                  : (0, b.we)("#SteamAwards_EventVotingDateTeaser", h),
                f &&
                  l.createElement(
                    "a",
                    {
                      href: (0, M.NT)(
                        z.TS.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                      className: C().SteamAwardLearnMore,
                    },
                    "(",
                    (0, b.we)("#EventDisplay_CallToAction_LearnMore"),
                    ")",
                  ),
              ),
              l.createElement(
                "div",
                { className: C().SteamAwardHeaderText },
                f
                  ? y
                    ? (0, b.we)(
                        "#SteamAwards_EventNominateGamePrompt_Long",
                        t.GetGameTitle(r),
                      )
                    : l.createElement(
                        "a",
                        {
                          className: C().LinkText,
                          href: (0, M.NT)(
                            z.TS.STORE_BASE_URL + "steamawards/nominations/",
                          ),
                        },
                        (0, b.we)(
                          "#SteamAwards_EventNominateGamePrompt_NoCategory",
                          t.GetGameTitle(r),
                        ),
                      )
                  : (0, b.we)("#SteamAwards_Event_NominationsClosed"),
              ),
            ),
          ),
          l.createElement(j, {
            event: t,
            nominationEventDetails: s,
            currentNomination: u,
          }),
        );
      }
      function j(e) {
        const { event: t, nominationEventDetails: r, currentNomination: i } = e,
          [a, n] = (0, o.q3)(() => [t.GetSteamAwardCategory(), t.appid]),
          s = i?.appid,
          m = (0, d.$d)(n, a, 0),
          u = Boolean(i?.appid == n && i?.category_id == a),
          g = (0, l.useCallback)(
            async (e) => {
              if (!e)
                return void console.log(
                  "EventDisplaySteamAwardNomination: ignore turning off the checkbox",
                );
              if (!F(!1))
                return void console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
              s && s != n
                ? (0, v.pg)(
                    l.createElement(W, {
                      strLocTokenInfix: "Nomination",
                      newAppID: n,
                      curNominatedAppID: s,
                      fnOnConfirm: m.mutate,
                    }),
                    window,
                  )
                : m.mutate();
            },
            [s, n, m],
          ),
          _ = c.HD.GetTimeNowWithOverride(),
          B = 1 == r.rgAwardCategoryDetails?.length,
          w =
            t.BIsEventActionEnabled() || _ < t.GetStartTimeAndDateUnixSeconds();
        return B && (w || u)
          ? l.createElement(
              "div",
              { className: C().SteamAwardVoteWidget },
              l.createElement(
                "div",
                { className: C().NominateCtn },
                l.createElement(
                  "div",
                  {
                    style: { background: r?.strNominateButtonBGColor },
                    className: (0, S.A)(
                      C().SteamAwardNominateButton,
                      u && C().Nominated,
                    ),
                  },
                  l.createElement(p.Yh, {
                    controlled: !0,
                    className: (0, S.A)(
                      C().SteamAwardVoteCheckBox,
                      u && C().Nominated,
                    ),
                    checked: u,
                    onChange: g,
                    disabled: u,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "div",
                        { className: C().SteamAwardCategoryTitle },
                        u
                          ? (0, b.PP)(
                              "#SteamAwards_NominateWidget_CTA_PastTense",
                              r.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            )
                          : (0, b.PP)(
                              "#SteamAwards_NominateWidget_CTA",
                              r.rgAwardCategoryDetails[0]
                                .strSuggestedCategoryTitle,
                            ),
                      ),
                    ),
                  }),
                ),
                l.createElement(
                  "span",
                  { className: C().SteamAwardCategoryDesc },
                  r.rgAwardCategoryDetails[0].strSuggestedCategoryDesc,
                ),
              ),
              Boolean(w && a != r.eLaborOfLove) &&
                l.createElement(
                  "div",
                  { className: C().SteamAwardLinkToNominationPage },
                  l.createElement(
                    "a",
                    {
                      href: (0, M.NT)(
                        z.TS.STORE_BASE_URL + "steamawards/nominations/",
                      ),
                    },
                    (0, b.we)(
                      "#SteamAwards_EventNominationAlternativeLinkText",
                    ),
                  ),
                ),
            )
          : null;
      }
      function W(e) {
        const {
            curNominatedAppID: t,
            newAppID: r,
            strLocTokenInfix: i,
            fnOnConfirm: a,
            fnOnCancel: n,
            closeModal: s,
          } = e,
          [o] = (0, g.t7)(t, I),
          [m] = (0, g.t7)(r, I);
        return l.createElement(
          h.o0,
          {
            modalClassName: C().SteamAwardConflictModal,
            strTitle: (0, b.we)(`#SteamAward_${i}ConflictWarning_Title`),
            strDescription: (0, b.PP)(
              `#SteamAward_${e.strLocTokenInfix}ConflictWarning_Explanation`,
              l.createElement(
                "span",
                { className: C().SteamAwardModalGameTitle },
                o?.GetName(),
              ),
              l.createElement(
                "span",
                { className: C().SteamAwardModalGameTitle },
                m?.GetName(),
              ),
            ),
            closeModal: s,
            onOK: a,
            onCancel: n,
          },
          Boolean(!o || !m)
            ? l.createElement(A.t, {
                size: "small",
                position: "center",
                string: (0, b.we)("#Loading"),
              })
            : l.createElement(
                "div",
                { className: C().NominationSwitchCtn },
                l.createElement("img", {
                  src: o.GetAssets().GetSmallCapsuleURL(),
                }),
                "→",
                l.createElement("img", {
                  src: m.GetAssets().GetSmallCapsuleURL(),
                }),
              ),
        );
      }
      let U = class extends l.Component {
        constructor(e) {
          super(e), (0, s.Gn)(this);
        }
        state = { eCategoryLoaded: null, votedForAppID: null };
        m_strPreviousVotedForAppTitle = null;
        m_cancelSignal = n().CancelToken.source();
        componentDidMount() {
          this.FetchVoteState();
        }
        componentDidUpdate() {
          this.props.eVoteCategory != this.state.eCategoryLoaded &&
            this.FetchVoteState();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventDisplaySteamAwardVote is being unmounted",
          );
        }
        async FetchVoteState() {
          const e = z.TS.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
          if (z.iA.logged_in)
            try {
              const t = await n().get(e, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              1 == t?.data?.success &&
                t.data.votes &&
                this.UpdateVoteState(t.data.votes);
            } catch (e) {
              const t = (0, y.H)(e);
              console.error(
                "Could not fetch previous votes:" + t.strErrorMsg,
                t,
              );
            }
          else this.UpdateVoteState([]);
        }
        async UpdateVoteState(e) {
          const t = this.props.eVoteCategory,
            r = e[t];
          if (
            (this.setState({ eCategoryLoaded: t, votedForAppID: r }),
            r && r != this.props.appID)
          ) {
            if (
              (await u.A.Get().QueueAppRequest(r, {}),
              this.m_cancelSignal.token.reason)
            )
              return;
            this.props.eVoteCategory == t &&
              (this.m_strPreviousVotedForAppTitle = u.A.Get()
                .GetApp(r)
                ?.GetName());
          }
        }
        async OnVoteClick() {
          const e = this.props.eVoteCategory;
          if (e != this.state.eCategoryLoaded) return;
          if (!F(!0)) return;
          const t = this.props.appID;
          this.state.votedForAppID && this.state.votedForAppID != t
            ? this.HandleConflict(() => this.SaveVote(e, t))
            : this.SaveVote(e, t);
        }
        HandleConflict(e) {
          const t = u.A.Get().GetApp(this.props.appID);
          (0, v.pg)(
            l.createElement(W, {
              strLocTokenInfix: "Vote",
              newAppID: t?.GetAppID(),
              curNominatedAppID: this.state.votedForAppID,
              fnOnConfirm: e,
              fnOnCancel: () => {},
            }),
            window,
          );
        }
        async SaveVote(e, t) {
          if (
            (this.setState({ eCategoryLoaded: e, votedForAppID: t }),
            this.props.previewMode && 1 == z.TS.EUNIVERSE)
          )
            return;
          const r = z.TS.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
            i = new URLSearchParams();
          i.append("sessionid", z.TS.SESSIONID),
            i.append("categoryid", e.toString()),
            i.append("appid", t.toString());
          try {
            const e = await n().post(r, i, {
              withCredentials: !0,
              cancelToken: this.m_cancelSignal.token,
            });
            if (this.m_cancelSignal.token.reason) return;
            (e && 200 == e.status && 1 == e.data.success) ||
              console.error("Vote request failed.", e && (0, y.H)(e));
          } catch (e) {
            const t = (0, y.H)(e);
            console.error("SaveVote failed: " + t.strErrorMsg, t);
          }
        }
        render() {
          const e = this.props.eVoteCategory,
            t =
              this.state.eCategoryLoaded == e &&
              this.state.votedForAppID == this.props.appID;
          return this.props.bIsEventActionEnabled || this.props.previewMode || t
            ? l.createElement(
                "div",
                { className: (0, S.A)(C().SteamAwardVoteWidget) },
                l.createElement("div", { className: C().SteamAwardVotePrompt }),
                l.createElement(
                  "div",
                  { className: C().SteamAwardVoteButtonArea },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.A)(
                        C().SteamAwardCategoryTitle,
                        C().VotingTitle,
                      ),
                    },
                    this.props.strCategoryTitle,
                  ),
                  !this.props.bRenderFromStorePage &&
                    l.createElement(
                      "span",
                      { className: C().SteamAwardCategoryDesc },
                      this.props.strCategoryDesc,
                    ),
                  t
                    ? l.createElement(
                        "div",
                        { className: C().SteamAwardVoteButtonSubmitted },
                        l.createElement(
                          "span",
                          { className: C().SteamAwardVoteButtonText },
                          (0, b.we)("#SteamAward_VoteButton_VotedText"),
                        ),
                      )
                    : l.createElement(
                        "button",
                        {
                          className: C().SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        l.createElement(
                          "span",
                          { className: C().SteamAwardVoteButtonText },
                          (0, b.we)("#SteamAward_VoteButton_PromptText"),
                        ),
                      ),
                ),
              )
            : null;
        }
      };
      (0, i.Cg)([s.sH], U.prototype, "m_strPreviousVotedForAppTitle", void 0),
        (0, i.Cg)([f.oI], U.prototype, "OnVoteClick", null),
        (0, i.Cg)([f.oI], U.prototype, "SaveVote", null),
        (U = (0, i.Cg)([m.PA], U));
      class q extends l.Component {
        m_voteCategories;
        constructor(e) {
          super(e);
          let t = (0, z.Tc)("steamwawards", "application_config");
          this.m_voteCategories = t?.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? l.createElement(D, {
                appID: this.props.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: this.m_voteCategories,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${this.props.appID}`,
              ),
              null);
        }
      }
      let D = class extends l.Component {
        m_cancelSignal = n().CancelToken.source();
        m_awardEventDetails = null;
        constructor(e) {
          super(e), (0, s.Gn)(this), (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          u.A.Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              u.A.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            N(this.props.voteCategories, this.m_cancelSignal).then((e) => {
              this.m_awardEventDetails = e;
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "WinterSaleSteamAwardVoteWrapper is being unmounted",
          );
        }
        GetNominatedAwardCategories() {
          let e = [];
          return (
            this.m_awardEventDetails.rgAwardCategoryDetails?.forEach((t) => {
              e.push(
                l.createElement(U, {
                  key: t.eSteamAwardCategoryID,
                  eVoteCategory: t.eSteamAwardCategoryID,
                  strCategoryDesc: t.strSuggestedCategoryDesc,
                  strCategoryTitle: t.strSuggestedCategoryTitle,
                  ...this.props,
                }),
              );
            }),
            e
          );
        }
        render() {
          if (!this.state.bAppInfoLoaded || !this.props.voteCategories)
            return null;
          if (!this.m_awardEventDetails) return null;
          let e = {};
          return (
            this.m_awardEventDetails.strBackgroundCSS.length &&
              (e.backgroundColor = this.m_awardEventDetails.strBackgroundCSS),
            this.m_awardEventDetails.strBackgroundImage.length &&
              (e.backgroundImage = `url( ${this.m_awardEventDetails.strBackgroundImage} )`),
            l.createElement(
              "div",
              {
                style: e,
                className: (0, S.A)(
                  C().SteamAwardContainer,
                  B().PartnerEventFont,
                ),
              },
              l.createElement(
                "div",
                { className: C().SteamAwardHeader },
                l.createElement("img", {
                  className: C().SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                l.createElement(
                  "div",
                  { className: C().SteamAwardMainCtn },
                  l.createElement(
                    "div",
                    { className: C().SteamAwardMainTitle },
                    " ",
                    (0, b.we)("#SteamAwards_EventMainTitleCombined"),
                    " ",
                  ),
                  l.createElement(
                    "div",
                    { className: C().SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? l.createElement(
                          l.Fragment,
                          null,
                          (0, b.we)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            u.A.Get().GetApp(this.props.appID)?.GetName(),
                          ),
                          l.createElement(
                            "a",
                            {
                              href: (0, M.NT)(
                                z.TS.STORE_BASE_URL + "steamawards/",
                              ),
                              className: (0, S.A)(
                                C().SteamAwardLearnMore,
                                C().BottomRight,
                              ),
                            },
                            (0, b.we)("#EventDisplay_CallToAction_LearnMore"),
                          ),
                        )
                      : l.createElement(
                          "a",
                          {
                            href: (0, M.NT)(
                              z.TS.STORE_BASE_URL + "steamawards/",
                            ),
                            className: C().LinkText,
                          },
                          (0, b.we)("#SteamAwards_Event_VotesClosed"),
                        ),
                  ),
                  l.createElement(
                    "div",
                    { className: C().AwardCategoriesCtn },
                    this.GetNominatedAwardCategories(),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, i.Cg)([s.sH], D.prototype, "m_awardEventDetails", void 0),
        (D = (0, i.Cg)([m.PA], D));
    },
  },
]);
