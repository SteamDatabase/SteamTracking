/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7311],
  {
    85397: (e, r, t) => {
      t.r(r), t.d(r, { default: () => A });
      var i = t(33940),
        n = t(90415),
        a = t(5615),
        s = t(54856),
        l = t(27070),
        o = t(45878),
        c = t(29063);
      const u = o.Message;
      class m extends u {
        constructor(e = null) {
          super(),
            m.prototype.gidshoppingcart || c.aR(m.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = c.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CreateNew_Response";
        }
      }
      class B extends u {
        constructor(e = null) {
          super(),
            B.prototype.amount || c.aR(B.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  amount: {
                    n: 1,
                    br: c.FE.readInt64String,
                    bw: c.Xc.writeInt64String,
                  },
                  currencycode: {
                    n: 2,
                    br: c.FE.readUint32,
                    bw: c.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Amount";
        }
      }
      class d extends u {
        constructor(e = null) {
          super(),
            d.prototype.packageid || c.aR(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  packageid: {
                    n: 1,
                    br: c.FE.readUint32,
                    bw: c.Xc.writeUint32,
                  },
                  costwhenadded: { n: 2, c: B },
                  is_gift: { n: 3, br: c.FE.readBool, bw: c.Xc.writeBool },
                  gidbundle: {
                    n: 4,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  quantity: { n: 5, br: c.FE.readUint32, bw: c.Xc.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_PackageItem";
        }
      }
      class y extends u {
        constructor(e = null) {
          super(),
            y.prototype.walletcredit || c.aR(y.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { walletcredit: { n: 1, c: B } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_WalletCreditItem";
        }
      }
      class b extends u {
        constructor(e = null) {
          super(),
            b.prototype.couponid || c.aR(b.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  couponid: { n: 1, br: c.FE.readUint32, bw: c.Xc.writeUint32 },
                  gidcoupontarget: {
                    n: 2,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  packageid: {
                    n: 3,
                    br: c.FE.readUint32,
                    bw: c.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_CouponItem";
        }
      }
      class g extends u {
        constructor(e = null) {
          super(),
            g.prototype.microtxnappid || c.aR(g.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  microtxnappid: {
                    n: 1,
                    br: c.FE.readUint32,
                    bw: c.Xc.writeUint32,
                  },
                  microtxnassetclassid: {
                    n: 2,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_MicroTxnAsset";
        }
      }
      class p extends u {
        constructor(e = null) {
          super(),
            p.prototype.bundleid || c.aR(p.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  bundleid: { n: 1, br: c.FE.readUint32, bw: c.Xc.writeUint32 },
                  quantity: { n: 2, br: c.FE.readUint32, bw: c.Xc.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_BundleItem";
        }
      }
      class z extends u {
        constructor(e = null) {
          super(),
            z.prototype.reward_id || c.aR(z.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  reward_id: { n: 1, br: c.FE.readInt32, bw: c.Xc.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = c.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_LoyaltyRewardItem";
        }
      }
      class M extends u {
        constructor(e = null) {
          super(),
            M.prototype.gidparent || c.aR(M.M()),
            u.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  gidparent: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  children: { n: 2, c: M, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RelationShip";
        }
      }
      class _ extends u {
        constructor(e = null) {
          super(),
            _.prototype.couponid || c.aR(_.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  couponid: { n: 1, br: c.FE.readUint32, bw: c.Xc.writeUint32 },
                  gidcoupon: {
                    n: 2,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  gidlineitem: {
                    n: 3,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AvailableCoupon";
        }
      }
      class w extends u {
        constructor(e = null) {
          super(),
            w.prototype.gidlineitem || c.aR(w.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gidlineitem: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  package_item: { n: 2, c: d },
                  wallet_credit_item: { n: 3, c: y },
                  coupon_item: { n: 4, c: b },
                  micro_item: { n: 5, c: g },
                  bundle_item: { n: 7, c: p },
                  loyalty_item: { n: 8, c: z },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Item";
        }
      }
      class f extends u {
        constructor(e = null) {
          super(),
            f.prototype.coupons || c.aR(f.M()),
            u.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { coupons: { n: 1, c: _, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Potentials";
        }
      }
      class h extends u {
        constructor(e = null) {
          super(),
            h.prototype.gidshoppingcart || c.aR(h.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Request";
        }
      }
      class R extends u {
        constructor(e = null) {
          super(),
            R.prototype.lineitems || c.aR(R.M()),
            u.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  lineitems: { n: 1, c: w, r: !0, q: !0 },
                  treeview: { n: 2, c: M, r: !0, q: !0 },
                  potentials: { n: 3, c: f },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = c.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_Contents";
        }
      }
      class F extends u {
        constructor(e = null) {
          super(),
            F.prototype.gidshoppingcart || c.aR(F.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  contents: { n: 2, c: R },
                  time_created: {
                    n: 3,
                    br: c.FE.readUint32,
                    bw: c.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = c.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_GetContents_Response";
        }
      }
      class S extends u {
        constructor(e = null) {
          super(),
            S.prototype.gidshoppingcart || c.aR(S.M()),
            u.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  gidshoppingcart: {
                    n: 1,
                    br: c.FE.readUint64String,
                    bw: c.Xc.writeUint64String,
                  },
                  contents: { n: 2, c: R },
                  result_details: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: c.FE.readUint32,
                    pbr: c.FE.readPackedUint32,
                    bw: c.Xc.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddPackages_Response";
        }
      }
      class W extends u {
        constructor(e = null) {
          super(),
            W.prototype.contents || c.aR(W.M()),
            u.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  contents: { n: 1, c: R },
                  result_details: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.FE.readUint32,
                    pbr: c.FE.readPackedUint32,
                    bw: c.Xc.writeRepeatedUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = c.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_AddBundle_Response";
        }
      }
      class C extends u {
        constructor(e = null) {
          super(),
            C.prototype.contents || c.aR(C.M()),
            u.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  contents: { n: 1, c: R },
                  result_details: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.FE.readUint32,
                    pbr: c.FE.readPackedUint32,
                    bw: c.Xc.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = c.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return c.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return c.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CShoppingCart_RemoveLineItems_Response";
        }
      }
      var O;
      !(function (e) {
        (e.CreateNewShoppingCart = function (e, r) {
          return e.SendMsg("ShoppingCart.CreateNewShoppingCart#1", r, m, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetShoppingCartContents = function (e, r) {
            return e.SendMsg("ShoppingCart.GetShoppingCartContents#1", r, F, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddPackages = function (e, r) {
            return e.SendMsg("ShoppingCart.AddPackages#1", r, S, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddBundle = function (e, r) {
            return e.SendMsg("ShoppingCart.AddBundle#1", r, W, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveLineItems = function (e, r) {
            return e.SendMsg("ShoppingCart.RemoveLineItems#1", r, C, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(O || (O = {}));
      var T = t(87361);
      const j = "shoppingCartGID";
      var v = t(89526),
        U = t(99307);
      function A(e) {
        var r;
        const { closeCart: t } = e,
          o = (function () {
            const e = (0, T.bG)(j),
              r = (0, l.bY)();
            return (0, a.useQuery)(
              ["shopping_cart", e],
              () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  const t = s.gA.Init(h);
                  return (
                    t.Body().set_gidshoppingcart(e),
                    (yield O.GetShoppingCartContents(r, t)).Body().toObject()
                  );
                }),
              {
                enabled: !!e && "-1" != e,
                initialData: () => {
                  var e;
                  return null === (e = (0, n.T)(!0)) || void 0 === e
                    ? void 0
                    : e.shoppingcart;
                },
              }
            );
          })();
        return v.createElement(
          U.On,
          { active: !0, onDismiss: t },
          v.createElement("h1", null, "Shopping Cart"),
          v.createElement(
            "div",
            { style: { whiteSpace: "pre-wrap" } },
            JSON.stringify(
              null === (r = o.data) || void 0 === r ? void 0 : r.contents
            )
          )
        );
      }
    },
  },
]);
