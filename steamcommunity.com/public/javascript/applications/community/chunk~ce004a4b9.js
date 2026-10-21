/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [58024],
    {
      55483: (ir, p, F) => {
        F.d(p, {
          yT: () => h,
          MR: () => r,
          AB: () => s,
          Rc: () => Y,
          Gt: () => X,
          ko: () => D,
          fy: () => S,
          ec: () => I,
          aA: () => W,
          TB: () => o,
          W$: () => f,
        });
        var j = F(99412),
          b = F(76559),
          i = F(29385),
          u = F(88942),
          n = F(72604),
          a = F(72609);
        async function K(z) {
          const E = `${a.TS.COMMUNITY_BASE_URL}ogg/${z}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return d(E);
        }
        async function $(z) {
          const E = b.b.InitFromClanID(z),
            k = `${a.TS.COMMUNITY_BASE_URL}gid/${E.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return d(k);
        }
        async function N(z) {
          const E = `${a.TS.COMMUNITY_BASE_URL}groups/${z}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return d(E);
        }
        async function B(z) {
          const E = `${a.TS.COMMUNITY_BASE_URL}games/${z}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return d(E);
        }
        async function d(z) {
          const E = await fetch(z, { method: "GET" });
          if (E.status == 404) return null;
          if (!E.ok) throw new Error(`Server returned ${E.status}`);
          const k = await E.json();
          return k.success != n.R ? null : k;
        }
        function O(z) {
          return ["clantoclaninfo", z];
        }
        function H(z) {
          return ["apptoclanid", z];
        }
        function V(z, E = "group") {
          return ["vanitytoclanid", E, z?.toLocaleLowerCase()];
        }
        function h(z) {
          const E = z?.[0];
          return (
            E == "clantoclaninfo" || E == "apptoclanid" || E == "vanitytoclanid"
          );
        }
        const Z = new WeakSet();
        function U(z) {
          if (!Z.has(z)) {
            Z.add(z);
            for (const E of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              z.setQueryDefaults(E, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const T = new WeakMap();
        function w(z) {
          if (!z) return null;
          let E = T.get(z);
          return (
            E ||
              ((E = {
                ...z,
                clanSteamID: z.clanSteamIDString
                  ? new b.b(z.clanSteamIDString)
                  : b.b.InitFromClanID(z.clanAccountID),
              }),
              T.set(z, E)),
            E
          );
        }
        function y(z) {
          const { msg: E, success: k, ..._ } = z;
          return {
            ..._,
            rss_language: z.rss_language ? z.rss_language : j.Bhc,
          };
        }
        function M(z, E) {
          if (!E) return null;
          U(z);
          const k = y(E);
          return (
            z.setQueryData(O(k.clanAccountID), k),
            k.appid && z.setQueryData(H(k.appid), k.clanAccountID),
            k.vanity_url &&
              z.setQueryData(V(k.vanity_url, "group"), k.clanAccountID),
            k
          );
        }
        function W(z, E) {
          for (const k of E) M(z, k);
        }
        function o(z) {
          const E = (0, i.jE)();
          return (0, u.I)(I(z, E));
        }
        function I(z, E) {
          return (
            U(E),
            {
              queryKey: O(z ?? null),
              queryFn: async () => (z ? M(E, await $(z)) : null),
              enabled: z !== void 0,
              select: w,
            }
          );
        }
        function J(z, E) {
          return (
            U(E),
            {
              queryKey: H(z),
              queryFn: async () => M(E, await K(z))?.clanAccountID ?? null,
              enabled: !!z,
            }
          );
        }
        function v(z, E, k = "group") {
          return (
            U(E),
            {
              queryKey: V(z, k),
              queryFn: async () => {
                if (k == "store") {
                  const L = E.getQueryData(V(z, "group"));
                  if (L) return L;
                }
                const _ = k == "store" ? await B(z) : await N(z);
                return M(E, _)?.clanAccountID ?? null;
              },
              enabled: !!z,
            }
          );
        }
        function l(z) {
          return z.isPending ? void 0 : (z.data ?? null);
        }
        function e(z) {
          return o(z.BIsClanAccount() ? z.GetAccountID() : void 0);
        }
        function c(z) {
          const E = useQueryClient(),
            k = useQuery(J(z, E));
          return o(z ? l(k) : void 0);
        }
        function f(z, E = "group") {
          const k = (0, i.jE)(),
            _ = (0, u.I)(v(z, k, E));
          return o(z ? l(_) : void 0);
        }
        function X(z, E) {
          if (z) return w(E.getQueryData(O(z))) ?? void 0;
        }
        function D(z, E) {
          if (z) return X(E.getQueryData(H(z)), E);
        }
        function S(z, E, k) {
          if (!z) return;
          const _ = k ? [k] : ["store", "group"];
          for (const L of _) {
            const G = X(E.getQueryData(V(z, L)), E);
            if (G) return G;
          }
        }
        async function r(z, E) {
          return z ? w(await E.fetchQuery(I(z, E))) : null;
        }
        async function s(z, E) {
          return z ? r(await E.fetchQuery(J(z, E)), E) : null;
        }
        async function Y(z, E, k = "group") {
          return z ? r(await E.fetchQuery(v(z, E, k)), E) : null;
        }
      },
      16369: (ir, p, F) => {
        F.d(p, { H: () => i });
        var j = F(99412),
          b = F(72609);
        const i = () => (b.TS.EUNIVERSE === j.Rv ? 2581 : 45267781);
      },
      18025: (ir, p, F) => {
        F.d(p, { $z: () => n, HX: () => $, Hi: () => K });
        var j = F(80613),
          b = F.n(j),
          i = F(75245);
        function u(N) {
          return "unknown ELineItemPurchaseNotice ( " + N + " )";
        }
        class n extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              n.prototype.accountid_giftee || i.Sg(n.M()),
              j.Message.initialize(this, B, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: a },
                    time_scheduled_send: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = i.w0(n.M())), n.sm_mbf;
          }
          toObject(B = !1) {
            return n.toObject(B, this);
          }
          static toObject(B, d) {
            return i.BT(n.M(), B, d);
          }
          static fromObject(B) {
            return i.Uq(n.M(), B);
          }
          static deserializeBinary(B) {
            let d = new (b().BinaryReader)(B),
              O = new n();
            return n.deserializeBinaryFromReader(O, d);
          }
          static deserializeBinaryFromReader(B, d) {
            return i.zj(n.MBF(), B, d);
          }
          serializeBinary() {
            var B = new (b().BinaryWriter)();
            return n.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, d) {
            i.i0(n.M(), B, d);
          }
          serializeBase64String() {
            var B = new (b().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class a extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              a.prototype.gifteename || i.Sg(a.M()),
              j.Message.initialize(this, B, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(B = !1) {
            return a.toObject(B, this);
          }
          static toObject(B, d) {
            return i.BT(a.M(), B, d);
          }
          static fromObject(B) {
            return i.Uq(a.M(), B);
          }
          static deserializeBinary(B) {
            let d = new (b().BinaryReader)(B),
              O = new a();
            return a.deserializeBinaryFromReader(O, d);
          }
          static deserializeBinaryFromReader(B, d) {
            return i.zj(a.MBF(), B, d);
          }
          serializeBinary() {
            var B = new (b().BinaryWriter)();
            return a.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, d) {
            i.i0(a.M(), B, d);
          }
          serializeBase64String() {
            var B = new (b().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class K extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              K.prototype.amount_in_cents || i.Sg(K.M()),
              j.Message.initialize(this, B, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(B = !1) {
            return K.toObject(B, this);
          }
          static toObject(B, d) {
            return i.BT(K.M(), B, d);
          }
          static fromObject(B) {
            return i.Uq(K.M(), B);
          }
          static deserializeBinary(B) {
            let d = new (b().BinaryReader)(B),
              O = new K();
            return K.deserializeBinaryFromReader(O, d);
          }
          static deserializeBinaryFromReader(B, d) {
            return i.zj(K.MBF(), B, d);
          }
          serializeBinary() {
            var B = new (b().BinaryWriter)();
            return K.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, d) {
            i.i0(K.M(), B, d);
          }
          serializeBase64String() {
            var B = new (b().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class $ extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              $.prototype.couponid || i.Sg($.M()),
              j.Message.initialize(this, B, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    couponid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    title: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(B = !1) {
            return $.toObject(B, this);
          }
          static toObject(B, d) {
            return i.BT($.M(), B, d);
          }
          static fromObject(B) {
            return i.Uq($.M(), B);
          }
          static deserializeBinary(B) {
            let d = new (b().BinaryReader)(B),
              O = new $();
            return $.deserializeBinaryFromReader(O, d);
          }
          static deserializeBinaryFromReader(B, d) {
            return i.zj($.MBF(), B, d);
          }
          serializeBinary() {
            var B = new (b().BinaryWriter)();
            return $.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, d) {
            i.i0($.M(), B, d);
          }
          serializeBase64String() {
            var B = new (b().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
      },
      33512: (ir, p, F) => {
        F.d(p, { Wv: () => j });
        var j = {};
        F.r(j),
          F.d(j, {
            bM: () => $,
            Nq: () => d,
            xc: () => V,
            GH: () => B,
            Jb: () => N,
            Jn: () => O,
            Mv: () => H,
            yl: () => h,
            _x: () => K,
          });
        var b = F(80613),
          i = F.n(b),
          u = F(75245),
          n = F(35038);
        const a = 0,
          K = 1,
          $ = 2,
          N = 4,
          B = 8,
          d = 16,
          O = 32,
          H = 64,
          V = 128,
          h = 256;
        function Z(l) {
          return "unknown EClanAccountFlags ( " + l + " )";
        }
        class U extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.steamid || u.Sg(U.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = u.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(U.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new U();
            return U.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(U.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(U.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        }
        class T extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, c) {
            return e ? { $jspbMessageInstance: c } : {};
          }
          static fromObject(e) {
            return new T();
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new T();
            return T.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        class w extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.steamid || u.Sg(w.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    rtime_oldest_date: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = u.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(w.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new w();
            return w.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(w.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(w.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        }
        class y extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.snippets || u.Sg(y.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: { snippets: { n: 1, c: M, r: !0, q: !0 } },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = u.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(y.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new y();
            return y.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(y.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(y.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        }
        class M extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.gid || u.Sg(M.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    gid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    hidden: { n: 3, br: u.qM.readBool, bw: u.gp.writeBool },
                    published: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                    rtime32_start_time: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    event_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    event_type: { n: 7, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = u.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(M.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new M();
            return M.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(M.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(M.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        }
        class W extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.requests || u.Sg(W.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    requests: { n: 1, c: o, r: !0, q: !0 },
                    cursor: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = u.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(W.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new W();
            return W.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(W.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(W.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        }
        class o extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.appid || u.Sg(o.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    start_build_id: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    end_build_id: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    branch: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = u.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(o.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new o();
            return o.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(o.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(o.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        }
        class I extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.matches || u.Sg(I.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    matches: { n: 1, c: J, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    next_cursor: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = u.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(I.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new I();
            return I.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(I.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(I.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        }
        class J extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.appid || u.Sg(J.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    build_id: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    branch: { n: 3, br: u.qM.readString, bw: u.gp.writeString },
                    clan_event_gid: {
                      n: 4,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    clan_account_id: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = u.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, c) {
            return u.BT(J.M(), e, c);
          }
          static fromObject(e) {
            return u.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let c = new (i().BinaryReader)(e),
              f = new J();
            return J.deserializeBinaryFromReader(f, c);
          }
          static deserializeBinaryFromReader(e, c) {
            return u.zj(J.MBF(), e, c);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, c) {
            u.i0(J.M(), e, c);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        }
        var v;
        ((l) => {
          function e(X, D, S) {
            return X.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, n.I8)(U, D, S),
              T,
              { ePrivilege: 1 },
            );
          }
          l.RespondToClanInvite = e;
          function c(X, D, S) {
            return X.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, n.I8)(w, D, S),
              y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          l.GetDraftAndRecentPartnerEventSnippet = c;
          function f(X, D, S) {
            return X.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, n.I8)(W, D, S),
              I,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          l.GetPartnerEventsByBuildIDRange = f;
        })(v || (v = {}));
      },
      36053: (ir, p, F) => {
        var j = F(80613),
          b = F.n(j),
          i = F(75245),
          u = F(35038),
          n = F(18025);
        class a extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.steamid_requester || i.Sg(a.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(a.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new a();
            return a.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(a.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(a.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class K extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.gidshoppingcart || i.Sg(K.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(K.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new K();
            return K.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(K.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(K.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class $ extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.amount || i.Sg($.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    amount: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT($.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new $();
            return $.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj($.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0($.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class N extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.packageid || i.Sg(N.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    packageid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: $ },
                    is_gift: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: n.$z },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(N.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new N();
            return N.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(N.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(N.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class B extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.walletcredit || i.Sg(B.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { walletcredit: { n: 1, c: $ } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(B.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new B();
            return B.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(B.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(B.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class d extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.couponid || i.Sg(d.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    couponid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(d.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new d();
            return d.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(d.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(d.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class O extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.microtxnappid || i.Sg(O.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(O.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new O();
            return O.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(O.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(O.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class H extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.bundleid || i.Sg(H.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    gift_info: { n: 4, c: n.$z },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(H.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new H();
            return H.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(H.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(H.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class V extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.reward_id || i.Sg(V.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(V.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new V();
            return V.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(V.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(V.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class h extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.gidparent || i.Sg(h.M()),
              j.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    children: { n: 2, c: h, r: !0, q: !0 },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(h.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new h();
            return h.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(h.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(h.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class Z extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.couponid || i.Sg(Z.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    couponid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(Z.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new Z();
            return Z.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(Z.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(Z.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class U extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.gidlineitem || i.Sg(U.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: N },
                    wallet_credit_item: { n: 3, c: B },
                    coupon_item: { n: 4, c: d },
                    micro_item: { n: 5, c: O },
                    bundle_item: { n: 7, c: H },
                    loyalty_item: { n: 8, c: V },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(U.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new U();
            return U.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(U.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(U.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class T extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.coupons || i.Sg(T.M()),
              j.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { coupons: { n: 1, c: Z, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(T.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new T();
            return T.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(T.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(T.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class w extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.gidshoppingcart || i.Sg(w.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(w.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new w();
            return w.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(w.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(w.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class y extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.lineitems || i.Sg(y.M()),
              j.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    lineitems: { n: 1, c: U, r: !0, q: !0 },
                    treeview: { n: 2, c: h, r: !0, q: !0 },
                    potentials: { n: 3, c: T },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(y.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new y();
            return y.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(y.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(y.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class M extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.gidshoppingcart || i.Sg(M.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    contents: { n: 2, c: y },
                    time_created: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(M.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new M();
            return M.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(M.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(M.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class W extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.gidshoppingcart || i.Sg(W.M()),
              j.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: N, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(W.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new W();
            return W.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(W.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(W.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class o extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.gidshoppingcart || i.Sg(o.M()),
              j.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    contents: { n: 2, c: y },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(o.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new o();
            return o.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(o.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(o.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class I extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.gidshoppingcart || i.Sg(I.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(I.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new I();
            return I.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(I.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(I.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class J extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.gidshoppingcart || i.Sg(J.M()),
              j.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    contents: { n: 2, c: y },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(J.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new J();
            return J.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(J.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(J.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class v extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.gidshoppingcart || i.Sg(v.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    gift_info: { n: 8, c: n.$z },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(v.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new v();
            return v.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(v.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(v.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class l extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.contents || i.Sg(l.M()),
              j.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    contents: { n: 1, c: y },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(l.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new l();
            return l.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(l.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(l.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class e extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.gidshoppingcart || i.Sg(e.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: n.$z },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = i.w0(e.M())), e.sm_mbf;
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(e.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new e();
            return e.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(e.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(e.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class c extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.contents || i.Sg(c.M()),
              j.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = { proto: c, fields: { contents: { n: 1, c: y } } }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(c.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new c();
            return c.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(c.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(c.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class f extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.gidshoppingcart || i.Sg(f.M()),
              j.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(f.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new f();
            return f.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(f.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(f.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class X extends j.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.contents || i.Sg(X.M()),
              j.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    contents: { n: 1, c: y },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, s) {
            return i.BT(X.M(), r, s);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (b().BinaryReader)(r),
              Y = new X();
            return X.deserializeBinaryFromReader(Y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return i.zj(X.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            i.i0(X.M(), r, s);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var D;
        ((S) => {
          function r(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, u.I8)(a, G, C),
              K,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          S.CreateNewShoppingCart = r;
          function s(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, u.I8)(w, G, C),
              M,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.GetShoppingCartContents = s;
          function Y(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, u.I8)(W, G, C),
              o,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          S.AddPackages = Y;
          function z(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, u.I8)(I, G, C),
              J,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          S.UpdatePackageQuantity = z;
          function E(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, u.I8)(v, G, C),
              l,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          S.AddBundle = E;
          function k(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, u.I8)(e, G, C),
              c,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          S.ModifyLineItem = k;
          function _(L, G, C) {
            return L.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, u.I8)(f, G, C),
              X,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          S.RemoveLineItems = _;
        })(D || (D = {}));
      },
      60001: (ir, p, F) => {
        F.d(p, {
          dU: () => o,
          eh: () => M,
          eb: () => b,
          tV: () => j,
          K_: () => J,
        });
        var j = {};
        F.r(j), F.d(j, { $D: () => $ });
        var b = {};
        F.r(b), F.d(b, { N0: () => O });
        var i = F(80613),
          u = F.n(i),
          n = F(75245),
          a = F(35038),
          K = F(40164);
        const $ = 0,
          N = 1,
          B = 2,
          d = 3,
          O = 0,
          H = 1,
          V = 2;
        function h(v) {
          return "unknown EStoreCuratorRecommendationState ( " + v + " )";
        }
        function Z(v) {
          return "unknown EStoreCuratorListType ( " + v + " )";
        }
        function U(v) {
          return "unknown EStoreCuratorListState ( " + v + " )";
        }
        class T extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              T.prototype.appid || n.Sg(T.M()),
              i.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    clanid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    link_url: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    link_text: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    blurb: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                    time_recommended: {
                      n: 6,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    comment_count: {
                      n: 7,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    upvote_count: {
                      n: 8,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    accountid_creator: {
                      n: 9,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    recommendation_state: {
                      n: 10,
                      br: n.qM.readEnum,
                      bw: n.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 11,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    received_for_free: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
          }
          toObject(l = !1) {
            return T.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(T.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(T.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new T();
            return T.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(T.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return T.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(T.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_RecommendedApp";
          }
        }
        class w extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              w.prototype.listid || n.Sg(w.M()),
              i.Message.initialize(this, l, 0, -1, [10, 12, 13, 14], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    listid: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    blurb: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    link: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                    list_state: { n: 5, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    sort_order: {
                      n: 6,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    time_created: {
                      n: 7,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    accountid: {
                      n: 9,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    apps: { n: 10, c: y, r: !0, q: !0 },
                    list_type: { n: 11, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    title_localization: { n: 12, c: K.O2, r: !0, q: !0 },
                    blurb_localization: { n: 13, c: K.O2, r: !0, q: !0 },
                    link_localization: { n: 14, c: K.O2, r: !0, q: !0 },
                    sale_clan_steamid: {
                      n: 15,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      n: 16,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    list_jsondata: {
                      n: 17,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    clan_account_id: {
                      n: 18,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
          }
          toObject(l = !1) {
            return w.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(w.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(w.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new w();
            return w.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(w.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return w.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(w.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails";
          }
        }
        class y extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              y.prototype.recommended_app || n.Sg(y.M()),
              i.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    recommended_app: { n: 1, c: T },
                    blurb: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                    sort_order: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(l = !1) {
            return y.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(y.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(y.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new y();
            return y.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(y.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return y.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(y.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails_ListItem";
          }
        }
        class M extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              M.prototype.steamid || n.Sg(M.M()),
              i.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    list_state: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                    start: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    count: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    return_total_only: {
                      n: 5,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    return_metadata_only: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    max_apps: { n: 7, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                    sale_clan_event_gid: {
                      n: 8,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
          }
          toObject(l = !1) {
            return M.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(M.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(M.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new M();
            return M.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(M.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return M.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(M.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Request";
          }
        }
        class W extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              W.prototype.list_details || n.Sg(W.M()),
              i.Message.initialize(this, l, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    list_details: { n: 1, c: w, r: !0, q: !0 },
                    total: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = n.w0(W.M())), W.sm_mbf;
          }
          toObject(l = !1) {
            return W.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(W.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(W.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new W();
            return W.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(W.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return W.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(W.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Response";
          }
        }
        class o extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              o.prototype.steamid || n.Sg(o.M()),
              i.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    steamid: {
                      n: 1,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    listid: {
                      n: 2,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
          }
          toObject(l = !1) {
            return o.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(o.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(o.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new o();
            return o.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(o.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return o.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(o.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Request";
          }
        }
        class I extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              I.prototype.list_details || n.Sg(I.M()),
              i.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { list_details: { n: 1, c: w } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
          }
          toObject(l = !1) {
            return I.toObject(l, this);
          }
          static toObject(l, e) {
            return n.BT(I.M(), l, e);
          }
          static fromObject(l) {
            return n.Uq(I.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (u().BinaryReader)(l),
              c = new I();
            return I.deserializeBinaryFromReader(c, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return n.zj(I.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (u().BinaryWriter)();
            return I.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            n.i0(I.M(), l, e);
          }
          serializeBase64String() {
            var l = new (u().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Response";
          }
        }
        var J;
        ((v) => {
          function l(c, f, X) {
            return c.SendMsg(
              "StoreCuration.GetLists#1",
              (0, a.I8)(M, f, X),
              W,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          v.GetLists = l;
          function e(c, f, X) {
            return c.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, a.I8)(o, f, X),
              I,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          v.GetListDetails = e;
        })(J || (J = {}));
      },
      21721: (ir, p, F) => {
        F.d(p, {
          DT: () => K,
          ZD: () => N,
          b0: () => n,
          bu: () => a,
          pd: () => $,
        });
        var j = F(72609),
          b = F(40358),
          i = F(71742),
          u = F(41032);
        function n(d, O) {
          if (d[O]) {
            if (O == "community_icon") {
              const H = d.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${d[O]}.jpg`)
                .replace(/\?.*$/, "");
              return `${j.TS.MEDIA_CDN_COMMUNITY_URL}${H}`;
            } else if (typeof d[O] == "string") {
              const H = d.asset_url_format.replace("${FILENAME}", d[O]);
              return `${j.TS.STORE_ITEM_BASE_URL}${H}`;
            }
          }
        }
        function a(d, O = "full") {
          let H = "";
          switch (O) {
            case "thumb":
              H = ".116x65";
              break;
            case "600x338":
              H = ".600x338";
              break;
            case "1920x1080":
              H = ".1920x1080";
              break;
            case "full":
              H = "";
              break;
            default:
              (0, i.z_)(O, `Invalid size: ${O}`);
              break;
          }
          return (
            j.TS.STORE_ITEM_BASE_URL +
            d.filename.replace(/\.([^.]+)(\?.*)?$/, `${H}.$1$2`)
          );
        }
        function K(d) {
          const { data: O } = (0, b.j4)(d),
            H = (0, u.dy)();
          if (O)
            return [
              ...(O.all_ages_screenshots || []),
              ...(!H && O.mature_content_screenshots
                ? O.mature_content_screenshots
                : []),
            ].sort((V, h) => V.ordinal - h.ordinal);
        }
        function $(d, O = !1) {
          const { data: H } = (0, b.lv)({ appid: d });
          if (H !== void 0)
            return H === null
              ? null
              : O && H.library_capsule_2x
                ? n(H, "library_capsule_2x")
                : H.library_capsule
                  ? n(H, "library_capsule")
                  : `${j.TS.STORE_ITEM_BASE_URL}steam/apps/${d}/portrait.png`;
        }
        function N(d, ...O) {
          const { data: H } = (0, b.lv)(d);
          return B(H, ...O);
        }
        function B(d, ...O) {
          if (!d?.asset_url_format) return;
          const H = O.find((V) => {
            const h = d[V];
            return typeof h == "string" && h.trim() !== "";
          });
          return H && n(d, H);
        }
      },
      813: (ir, p, F) => {
        F.d(p, {
          $5: () => o,
          Ao: () => e,
          TB: () => W,
          W$: () => I,
          Yp: () => v,
          _5: () => l,
          ac: () => y,
        });
        var j = F(99412),
          b = F(40497),
          i = F(29385),
          u = F(14947),
          n = F(90626),
          a = F(76559),
          K = F(71742),
          $ = F(3166),
          N = F(60480),
          B = F(16369),
          d = F(33512),
          O = F(55483),
          H = F(77291);
        const V = new WeakSet();
        function h(c = b.L) {
          if (typeof window > "u" || typeof document > "u" || V.has(c)) return;
          const f = (0, $.Fd)("groupvanityinfo", "application_config");
          (f === void 0 && document.readyState != "complete") ||
            (V.add(c), Z(f) && (0, O.aA)(c, f));
        }
        function Z(c) {
          const f = c;
          return f &&
            Array.isArray(f) &&
            f.length > 0 &&
            typeof f[0] == "object"
            ? typeof f[0].clanAccountID == "number" &&
                (typeof f[0].appid == "number" ||
                  typeof f[0].vanity_url == "string")
            : !1;
        }
        function U(c) {
          return typeof c == "string" ? parseInt(c) : c;
        }
        function T(c) {
          return typeof c == "string" ? Number.parseInt(c) : c;
        }
        class w {
          m_queryClient = b.L;
          m_boxCacheVersion = u.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            h(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((f) => {
                  (f?.type != "added" &&
                    f?.type != "updated" &&
                    f?.type != "removed") ||
                    ((0, O.yT)(f.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, u.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(f) {
            this.LazyInit(), Z(f) && (0, O.aA)(this.m_queryClient, f);
          }
          BHasClanInfoLoaded(f) {
            return (
              (0, K.wT)(
                f.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, K.wT)(
                f.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(f.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(f) {
            return !!(0, O.Gt)(T(f), this.ReadCache());
          }
          RegisterClanData(f) {
            this.LazyInit(), (0, O.aA)(this.m_queryClient, f);
          }
          async LoadOGGClanInfoForAppID(f) {
            return (
              this.LazyInit(),
              (f = U(f)),
              (0, K.wT)(
                f != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              f == 0 ? null : (0, O.AB)(f, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(f) {
            return this.LazyInit(), (0, O.Rc)(f, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(f) {
            return this.LazyInit(), (0, O.Rc)(f, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(f) {
            return this.LoadClanInfoForClanAccountID(f.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(f) {
            return this.LazyInit(), (0, O.MR)(T(f), this.m_queryClient);
          }
          GetOGGClanInfo(f) {
            const X = this.ReadCache();
            return typeof f == "string" ? (0, O.fy)(f, X) : (0, O.ko)(f, X);
          }
          GetClanSteamIDForAppID(f) {
            const X = (0, O.ko)(U(f), this.ReadCache());
            return X ? a.b.InitFromClanID(X.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(f) {
            return (0, O.ko)(U(f), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(f) {
            return (0, O.Gt)(f.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(f) {
            return this.BHasClanInfoLoadedByAccountID(f);
          }
          GetClanMemberCount(f) {
            return (0, O.ko)(U(f), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(f) {
            return (
              (0, K.wT)(
                !!f,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, O.Gt)(T(f), this.ReadCache())
            );
          }
          GetCreatorStoreURL(f) {
            let X = N.pF.GetCreatorHome(f);
            if (X) return X.GetCreatorHomeURL("developer");
            let D = this.GetClanInfoByClanAccountID(f.GetAccountID());
            return (
              $.TS.COMMUNITY_BASE_URL +
              (D.vanity_url
                ? "groups/" + D.vanity_url
                : "gid/" + f.ConvertTo64BitString())
            );
          }
        }
        const y = new w();
        (0, H.V)("g_ClanStore", y);
        function M() {
          const c = (0, i.jE)();
          return h(c), c;
        }
        function W(c) {
          M();
          const { data: f, isPending: X } = (0, O.TB)(c ? T(c) : void 0);
          return [!!c && X, f ?? void 0];
        }
        function o(c) {
          const f = M();
          (0, n.useEffect)(() => {
            c &&
              (0, O.MR)(T(c), f).catch((X) =>
                console.error(`Failed to hint load clan info ${c}`, X),
              );
          }, [c, f]);
        }
        function I(c) {
          return M(), (0, O.W$)(c).data ?? null;
        }
        function J(c) {
          M();
          const f = c ? U(c) : void 0,
            { data: X, isPending: D } = useClanInfoByAppIDQuery(f);
          return { bLoadingClanInfo: !!f && D, clanInfo: X ?? null };
        }
        function v(c, f) {
          if (c.BIsOGGEvent()) return { bVisible: !1 };
          if (c.GetEventType() == j.ajI) return { bVisible: !1 };
          if (c.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            c.jsondata.clone_from_event_gid &&
            c.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (c.clanSteamID.GetAccountID() == (0, B.H)())
            return { bVisible: !1 };
          const D = N.pF.GetCreatorHome(c.clanSteamID);
          return D && D.BHasClanAccountFlagSet(d.Wv.Jn)
            ? { bVisible: !0 }
            : f
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function l(c, f) {
          return c.BIsOGGEvent()
            ? c.BHasSaleEnabled()
              ? { bVisible: !0 }
              : $.TS.EUNIVERSE == j.wLO
                ? { bVisible: !1 }
                : f
                  ? c.GetEventType() == j.zeJ
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function e(c) {
          return c.BIsOGGEvent()
            ? { bVisible: !1 }
            : c.GetEventType() != j.ajI
              ? { bVisible: !1 }
              : c.BHasSaleEnabled()
                ? { bVisible: !0 }
                : c.clanSteamID.GetAccountID() == (0, B.H)()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      60480: (ir, p, F) => {
        F.d(p, {
          mD: () => nr,
          ie: () => ar,
          GT: () => sr,
          eL: () => fr,
          bW: () => Br,
          io: () => ur,
          A2: () => er,
          n4: () => lr,
          pF: () => rr,
          FV: () => br,
          $$: () => Mr,
          FX: () => dr,
        });
        var j = F(72604),
          b = F(99412),
          i = F(35038),
          u = F(80613),
          n = F.n(u),
          a = F(75245);
        function K(Q) {
          return "unknown EAppDevsRelationship ( " + Q + " )";
        }
        function $(Q) {
          return "unknown ECreatorHomeLinkRole ( " + Q + " )";
        }
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.appid || a.Sg(N.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    json: { n: 5, br: a.qM.readString, bw: a.gp.writeString },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = a.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(N.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new N();
            return N.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(N.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(N.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        }
        class B extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.clan_account_id || a.Sg(B.M()),
              u.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(B.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new B();
            return B.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(B.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(B.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        }
        class d extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              d.prototype.appid || a.Sg(d.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    link: { n: 2, c: N },
                    remove: {
                      n: 3,
                      d: !1,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
          }
          toObject(t = !1) {
            return d.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(d.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(d.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new d();
            return d.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(d.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(d.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        }
        class O extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new O();
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new O();
            return O.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.appid || a.Sg(H.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(H.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new H();
            return H.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(H.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(H.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.links || a.Sg(V.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { links: { n: 1, c: N, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = a.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(V.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new V();
            return V.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(V.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(V.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        }
        class h extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              h.prototype.clan_account_ids || a.Sg(h.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
          }
          toObject(t = !1) {
            return h.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(h.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(h.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new h();
            return h.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(h.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(h.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.results || a.Sg(Z.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { results: { n: 1, c: B, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = a.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(Z.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new Z();
            return Z.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(Z.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(Z.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.clan_account_id || a.Sg(U.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = a.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(U.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new U();
            return U.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(U.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(U.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        }
        class T extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.apps || a.Sg(T.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { apps: { n: 1, c: w, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = a.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(T.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new T();
            return T.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(T.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(T.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        }
        class w extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.appid || a.Sg(w.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(w.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new w();
            return w.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(w.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(w.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        }
        class y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.partnerid || a.Sg(y.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
          }
          toObject(t = !1) {
            return y.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(y.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new y();
            return y.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(y.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(y.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        }
        class M extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.results || a.Sg(M.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(M.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new M();
            return M.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(M.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(M.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        }
        class W extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.clan_accountid || a.Sg(W.M()),
              u.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: a.qM.readString,
                      bw: a.gp.writeRepeatedString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, m) {
            return a.BT(W.M(), t, m);
          }
          static fromObject(t) {
            return a.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (n().BinaryReader)(t),
              x = new W();
            return W.deserializeBinaryFromReader(x, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return a.zj(W.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (n().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            a.i0(W.M(), t, m);
          }
          serializeBase64String() {
            var t = new (n().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        }
        var o;
        ((Q) => {
          function t(A, P, R) {
            return A.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, i.I8)(d, P, R),
              O,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          Q.SetDevPageLink = t;
          function m(A, P, R) {
            return A.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, i.I8)(H, P, R),
              V,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          Q.GetDevPageLinks = m;
          function x(A, P, R) {
            return A.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, i.I8)(h, P, R),
              Z,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          Q.GetDevPageAllAppsLinked = x;
          function g(A, P, R) {
            return A.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, i.I8)(U, P, R),
              T,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          Q.GetDevPageListApps = g;
          function q(A, P, R) {
            return A.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, i.I8)(y, P, R),
              M,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          Q.GetDevPagesForPartner = q;
        })(o || (o = {}));
        var I = F(60001),
          J = F(88942),
          v = F(41735),
          l = F.n(v),
          e = F(14947),
          c = F(33512),
          f = F(3166),
          X = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          S = (Q, t, m, x) => {
            for (
              var g = x > 1 ? void 0 : x ? D(t, m) : t, q = Q.length - 1, A;
              q >= 0;
              q--
            )
              (A = Q[q]) && (g = (x ? A(t, m, g) : A(g)) || g);
            return x && g && X(t, m, g), g;
          };
        class r {
          m_clanSteamID;
          m_appidList = new Array();
          m_strName = "";
          m_strAvatarURLFullSize = "";
          m_strTagLineLoc = "";
          m_nFollowers = 0;
          m_strVanity = "";
          m_webLink = void 0;
          m_linkedEvent = void 0;
          m_mapListInfo = new Map();
          m_promise;
          m_bIsLoaded = !1;
          m_bIsHidden = !1;
          m_clanAccountFlags = 0;
          constructor(t) {
            (0, e.Gn)(this), (this.m_clanSteamID = t);
          }
          Initialize(t) {
            (this.m_strName = t.name || ""),
              (this.m_strAvatarURLFullSize =
                t.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = t.tag_line_localized || ""),
              (this.m_nFollowers = t.followers || 0),
              (this.m_strVanity = t.vanity || void 0),
              (this.m_webLink = t.weblink),
              (this.m_bIsHidden = t.hidden || !1),
              (this.m_clanAccountFlags = t.clan_account_flags ?? 0),
              (this.m_linkedEvent = t.linked_event),
              (this.m_mapListInfo = new Map(Object.entries(t.list_info ?? {}))),
              t.appids && t.appids.forEach((m) => this.m_appidList.push(m)),
              (this.m_bIsLoaded = !0);
          }
          GetCreatorHomeIdentifier() {
            return {
              name: this.m_strName,
              clan_account_id: this.m_clanSteamID.GetAccountID(),
              type: "developer",
              hidden: this.m_bIsHidden,
            };
          }
          BIsPartnerEventEditorEnabled() {
            return !!(this.m_clanAccountFlags & c.Wv.GH);
          }
          BHasClanAccountFlagSet(t) {
            return !!(this.m_clanAccountFlags & t);
          }
          BIsLoaded() {
            return this.m_bIsLoaded;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanSteamID.GetAccountID();
          }
          GetAppIDList() {
            return this.m_appidList;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURLFullSize() {
            return this.m_strAvatarURLFullSize;
          }
          GetTagLine() {
            return this.m_strTagLineLoc;
          }
          GetNumFollowers() {
            return this.m_nFollowers;
          }
          BIsHidden() {
            return this.m_bIsHidden;
          }
          GetCreatorHomeURL(t) {
            if (this.m_strVanity) {
              switch (t) {
                case "publisher":
                  return (
                    f.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    f.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                f.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              f.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanSteamID.GetAccountID() +
              "/"
            );
          }
          BHasWebLink() {
            return this.m_webLink !== void 0;
          }
          GetWebLink() {
            return this.m_webLink;
          }
          GetVanityString() {
            return this.m_strVanity;
          }
          GetLinkedEventGID() {
            return this.m_linkedEvent;
          }
          GetListInfo() {
            return this.m_mapListInfo;
          }
          AdjustFollower(t) {
            this.m_nFollowers += t;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([c.Wv.bM, c.Wv.GH], !0));
          }
          async UpdateGroupFlagsFeature(t, m) {
            let x = f.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              g = this.m_clanAccountFlags;
            if (
              (t.forEach((R) => {
                m ? (g |= R) : (g &= ~R);
              }),
              g == this.m_clanAccountFlags)
            )
              return;
            let q = new Array();
            g & c.Wv._x && q.push(c.Wv._x),
              g & c.Wv.GH && q.push(c.Wv.GH),
              g & c.Wv.bM && q.push(c.Wv.bM),
              g & c.Wv.Jb && q.push(c.Wv.Jb),
              g & c.Wv.Nq && q.push(c.Wv.Nq),
              g & c.Wv.Jn && q.push(c.Wv.Jn),
              g & c.Wv.Mv && q.push(c.Wv.Mv),
              g & c.Wv.xc && q.push(c.Wv.xc),
              g & c.Wv.yl && q.push(c.Wv.yl);
            let A = new FormData();
            A.append("sessionid", (0, f.KC)()),
              A.append("clan_account_id", this.GetClanAccountID().toString()),
              A.append("accountflags", JSON.stringify(q));
            let P = await l().post(x, A);
            P &&
              P.status == 200 &&
              P.data.success == j.R &&
              (this.m_clanAccountFlags = g);
          }
        }
        S([e.sH], r.prototype, "m_appidList", 2),
          S([e.sH], r.prototype, "m_nFollowers", 2),
          S([e.sH], r.prototype, "m_clanAccountFlags", 2);
        var s = F(77008),
          Y = F(60298),
          z = F(76559),
          E = F(77291),
          k = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          L = (Q, t, m, x) => {
            for (
              var g = x > 1 ? void 0 : x ? _(t, m) : t, q = Q.length - 1, A;
              q >= 0;
              q--
            )
              (A = Q[q]) && (g = (x ? A(t, m, g) : A(g)) || g);
            return x && g && k(t, m, g), g;
          };
        const G = class mr {
          constructor() {
            (0, e.Gn)(this);
          }
          m_mapClanToCreatorHome = new Map();
          m_mapAppToCreatorIDList = new Map();
          m_bLoadedFromConfig = !1;
          m_serviceTransport = void 0;
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const t = (0, f.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((x) => {
                  const g = Number(x.creator_clan_id),
                    q = z.b.InitFromClanID(g),
                    A = new r(q);
                  A.Initialize(x),
                    (A.m_promise = mr.GetAsPromise(A)),
                    this.m_mapClanToCreatorHome.set(g, A);
                });
              const m = (0, f.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(m) &&
                m.forEach((x) => {
                  x.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(x.appid) ||
                      this.m_mapAppToCreatorIDList.set(x.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(x.appid).push(x));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const t = (0, f.Tc)("loyalty_webapi_token", "application_config"),
                m = (0, Y.p)(new s.D(f.TS.WEBAPI_BASE_URL, t || void 0));
              this.m_serviceTransport = m.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(t) {
            return t;
          }
          ValidateStoreDefault(t) {
            const m = t;
            return m &&
              Array.isArray(m) &&
              m.length > 0 &&
              typeof m[0] == "object"
              ? typeof m[0].name == "string" &&
                  (typeof m[0].creator_clan_id == "string" ||
                    typeof m[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(t) {
            const m = t;
            return m &&
              Array.isArray(m) &&
              m.length > 0 &&
              typeof m[0] == "object"
              ? typeof m[0].clan_account_id == "number" &&
                  m[0].clan_account_id > 0 &&
                  typeof m[0].appid == "number" &&
                  m[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(t) {
            return (
              this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(t) {
            return this.m_mapClanToCreatorHome.get(t.GetAccountID());
          }
          GetCreatorHomeByID(t) {
            return this.m_mapClanToCreatorHome.get(t.clan_account_id);
          }
          async LoadCreatorHome(t, m = !1, x) {
            if (
              (this.LazyInit(),
              m || !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let g = new r(t);
              (g.m_promise = this.InternalCreatorHome(g, x)),
                await g.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), g);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(t, m) {
            let x = { get_appids: !0, l: f.TS.LANGUAGE },
              g =
                f.TS.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              q = await l().get(g, { params: x, cancelToken: m && m.token });
            return t.Initialize(q.data), t;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(t, m) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let x = { appid: t },
                g = f.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                q = await l().get(g, {
                  params: x,
                  cancelToken: m && m.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, q.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          }
          async SearchCreatorHomeStore(t, m, x) {
            let g = `${f.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              q = {
                term: t.replace(" ", "+"),
                require_creator: m,
                cc: f.TS.COUNTRY,
                l: f.TS.LANGUAGE,
                origin: self.origin,
              },
              A = new Array();
            const P = await l().get(g, { params: q, cancelToken: x.token });
            return (
              P.data.curators &&
                (0, e.h5)(() => {
                  P.data.curators.forEach((R) => {
                    if (!this.m_mapClanToCreatorHome.has(R.creator_clan_id)) {
                      let yr = z.b.InitFromClanID(R.creator_clan_id),
                        cr = new r(yr);
                      cr.Initialize(R),
                        this.m_mapClanToCreatorHome.set(R.creator_clan_id, cr);
                    }
                    A.push(this.m_mapClanToCreatorHome.get(R.creator_clan_id));
                  });
                }),
              A
            );
          }
          GetCreatorHomeListForAppIncludeHidden(t) {
            return this.m_mapAppToCreatorIDList.has(t)
              ? this.m_mapAppToCreatorIDList.get(t)
              : [];
          }
        };
        L([e.sH], G.prototype, "m_mapClanToCreatorHome", 2),
          L([e.sH], G.prototype, "m_mapAppToCreatorIDList", 2),
          L([e.XI], G.prototype, "LazyInit", 1);
        let C = G;
        const rr = new C();
        (0, E.V)("g_CreatorHomeStore", rr);
        function lr(Q) {
          if (!Q) return null;
          const t = rr.BHasCreatorHomeLoaded(Q.clanSteamID)
            ? rr.GetCreatorHome(Q.clanSteamID)
            : void 0;
          return Q.GetSaleURL(t?.GetCreatorHomeURL("developer"));
        }
        function tr(Q) {
          if (!Q) return;
          const t = (0, f.Tc)("creator_home_list_info", "application_config");
          if (t == null || typeof t != "object" || Array.isArray(t)) return;
          const m = t[Q];
          if (!(!m || !m.title))
            return {
              title: m.title,
              description: m.description?.length ? m.description : void 0,
              imageUrl: m.listtileimage?.length ? m.listtileimage : void 0,
            };
        }
        function ur(Q) {
          return tr(Q)?.title;
        }
        function fr(Q) {
          return tr(Q)?.description;
        }
        function Br(Q) {
          return tr(Q)?.imageUrl;
        }
        function er(Q) {
          const t = z.b.InitFromClanID(Q);
          return {
            queryKey: ["CreatorHome", Q],
            initialData: () => rr.GetCreatorHome(t),
            queryFn: async () => {
              const m = z.b.InitFromClanID(Q);
              return await rr.LoadCreatorHome(m, !0);
            },
          };
        }
        function br(Q) {
          const { data: t, isFetching: m, refetch: x } = (0, J.I)(er(Q));
          return { creatorHome: t, isFetching: m, refetch: x };
        }
        function wr(Q, t, m) {
          const x = useQuery({
            queryKey: ["useCreateHomeLinkedApps", t, m],
            queryFn: async () => {
              const g = CProtoBufMsg.Init(
                CStoreCatalog_GetDevPageAllAppsLinked_Request,
              );
              g.Body().add_clan_account_ids(t),
                m && g.Body().set_ignore_dlc(!0);
              const q = await StoreCatalogService.GetDevPageAllAppsLinked(Q, g);
              if (q.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${q.GetEResult()}`,
                );
              return q.Body().results().length == 0
                ? []
                : q.Body().results()[0].appid_list();
            },
            enabled: !!(t > 0 && Q),
          });
          return x?.isLoading ? null : x.data;
        }
        function sr(Q, t, m) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", Q, t, m],
            queryFn: async () => {
              const x = rr.GetServiceTransport(),
                g = i.w.Init(U);
              g.Body().set_clan_account_id(Q),
                g.Body().set_listid(t),
                m && g.Body().set_ignore_dlc(!0);
              const q = await o.GetDevPageListApps(x, g);
              if (q.GetEResult() != j.R)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${q.GetEResult()}`,
                );
              return q
                .Body()
                .apps()
                .slice()
                .sort((A, P) => (A.sort_order() ?? 0) - (P.sort_order() ?? 0))
                .map((A) => A.appid() ?? 0)
                .filter((A) => A > 0);
            },
            enabled: !!(Q > 0 && t),
          };
        }
        function dr(Q, t, m) {
          const x = (0, J.I)(sr(Q, t, m));
          return x?.isLoading ? null : x.data;
        }
        function nr(Q, t) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", Q, t],
            queryFn: async () => {
              const m = rr.GetServiceTransport(),
                x = i.w.Init(I.eh);
              x
                .Body()
                .set_steamid(
                  new z.b(Q, f.TS.EUNIVERSE, b.P3F, 0).ConvertTo64BitString(),
                ),
                x.Body().set_count(100);
              const g = await I.K_.GetLists(m, x);
              return g.BSuccess()
                ? g
                    .Body()
                    .list_details()
                    .filter((q) => t || q.list_state() != I.eb.N0)
                : null;
            },
            enabled: Q > 0,
          };
        }
        function Mr(Q, t) {
          const { data: m, isFetching: x, refetch: g } = (0, J.I)(nr(Q, t));
          return { lists: m, isFetching: x, refetch: g };
        }
        function ar(Q, t) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", Q, t],
            queryFn: async () => {
              const m = rr.GetServiceTransport(),
                x = i.w.Init(I.dU);
              x
                .Body()
                .set_steamid(
                  new z.b(Q, f.TS.EUNIVERSE, b.P3F, 0).ConvertTo64BitString(),
                ),
                x.Body().set_listid(t);
              const g = await I.K_.GetListDetails(m, x);
              return g.BSuccess() ? (g.Body().list_details() ?? null) : null;
            },
            enabled: Q > 0,
          };
        }
        function zr(Q, t) {
          const { data: m, isFetching: x, refetch: g } = useQuery(ar(Q, t));
          return { list: m, isFetching: x, refetch: g };
        }
      },
    },
  ]);
})();
