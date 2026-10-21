/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [55050],
    {
      25518: (ce, W, d) => {
        d.d(W, { Kl: () => g, Yj: () => $, iH: () => b, zV: () => te });
        const g = [
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
          b = [
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
          c = [
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
          ],
          u = g.filter((x) => !c.includes(x)),
          l = null;
        function r(x) {
          const { bIncludeMedia: D = !1, bIncludeValveOnly: re = !1 } = x,
            B = new Set();
          return (
            D || c.forEach((f) => B.add(f)),
            re || l.forEach((f) => B.add(f)),
            g.filter((f) => !B.has(f))
          );
        }
        let v;
        function p(x) {
          return x
            ? x.map((D) => (D == "*" ? "\\*" : D)).join("|")
            : (v || (v = p(g)), v);
        }
        function $(x, D = null, re = " ") {
          const B = new RegExp(
            "\\[(" + p(D) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return x.replace(B, re);
        }
        function te(x, D = null, re = "") {
          const B = "\\[\\/?(?:" + p(D) + "){1,}.*?]";
          return x.replace(new RegExp(B, "gi"), re);
        }
      },
      29630: (ce, W, d) => {
        d.d(W, { zU: () => he, z5: () => pe });
        var g = d(38340),
          b = d(9046),
          c = d(99412),
          u = d(72604),
          l = d(7742),
          r = d(72849),
          v = d(76559),
          p = d(71742),
          $ = d(34592),
          te = d(51746),
          x = d(72609),
          D = d(7850),
          re = d(90626);
        function B(m, M) {
          return `${m}/${M}`;
        }
        const f = {},
          E = re.createContext(f);
        function L(m) {
          const { resolutions: M, children: w } = m;
          return jsx(E.Provider, { value: M, children: w });
        }
        function ae() {
          return re.useContext(E);
        }
        const ye = new RegExp(
          `${g.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function Me(m) {
          const M = [],
            w = new Set();
          for (const O of m.matchAll(ye)) {
            const S = Number.parseInt(O[1]),
              ee = O[2],
              se = B(S, ee);
            S > 0 &&
              !w.has(se) &&
              (w.add(se), M.push({ clanAccountID: S, hashAndExt: ee }));
          }
          return M;
        }
        function pe(m, M, w = 0) {
          const O = ae();
          return Be(m, M, w, O);
        }
        async function Te(m, M, w = 0) {
          return Be(m, M, w);
        }
        function Be(m, M, w = 0, O) {
          if (!m || m.length == 0) return null;
          if (m?.startsWith(g.lw)) return he.ReplacementTokenToClanImageURL(m);
          if (m?.startsWith(g.eg)) {
            const S = he.GetBaseURL(),
              ee = m.substring(g.eg.length + 1),
              se = parseInt(ee.substring(0, ee.indexOf("/"))),
              ie = ee.substring(ee.indexOf("/") + 1),
              z = he.GenerateURLFromHashAndExt(se, ie);
            if (O?.[B(se, ie)] === !1) return z;
            const oe = he
              .GetLocalizedClanImageFileNames(ie, M)
              .map((ve) => S + se + "/" + ve + "?t=" + w);
            return oe.push(z), oe;
          }
          return m;
        }
        const he = {
          GetBaseURL() {
            return `${x.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${x.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(m) {
            return (
              (m = m.replace(g.lw, this.GetBaseURL())),
              m.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(m) {
            const w =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                m,
              );
            return w?.groups
              ? [w.groups.filename, parseInt(w.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(m) {
            return (
              (m.file_type != null ? (0, te.EG)(m.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(m) {
            return m ? m.image_hash + this.GetExtensionString(m) : null;
          },
          GetThumbHashAndExt(m) {
            return m ? m.thumbnail_hash + this.GetExtensionString(m) : null;
          },
          GetHashFromHashAndExt(m) {
            let M = m.substring(m.lastIndexOf("."));
            return m.substring(0, m.length - M.length);
          },
          GetExtStringFromHashAndExt(m) {
            return m.substring(m.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(m, M) {
            if (M == null) return [];
            const w = this.GetHashFromHashAndExt(m),
              O = this.GetExtStringFromHashAndExt(m),
              S = [w + "/" + (0, c.LgB)(M) + O];
            return (
              M == c.Pn1 && S.push(w + "/" + (0, c.x6o)((0, c.LgB)(M)) + O), S
            );
          },
          GenerateURLFromHashAndExt(m, M, w = b.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              m,
              M,
              w,
              c.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(m, M, w = b.wI.full, O, S) {
            m instanceof v.b && (m = m.GetAccountID());
            let ee = this.GetBaseURL();
            const se = O != null && O != c.xPp;
            if (w == b.wI.full && !se) return ee + m + "/" + M;
            {
              let ie = M.substring(M.lastIndexOf(".")),
                z = M.substring(0, M.length - ie.length);
              return !se || O == c.Bhc || S != "localized_image_group"
                ? ee + m + "/" + z + w + ie
                : ee + m + "/" + z + "/" + (0, c.x6o)((0, c.LgB)(O)) + ie;
            }
          },
          GetHashAndExtFromURL(m) {
            let M = this.GetBaseURL();
            return !m?.startsWith(M) ||
              ((m = m.substring(M.length)), m.indexOf("/") == -1)
              ? null
              : ((m = m.substring(m.indexOf("/") + 1)), m);
          },
          GenerateEditableURLFromHashAndExt(m, M, w) {
            let O =
              x.TS.COMMUNITY_BASE_URL +
              "gid/" +
              m.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              M;
            return w && (O += "&lang=" + w), O;
          },
          GetMimeType(m) {
            return (0, te.ab)(m);
          },
          async AsyncGetImageResolution(m, M, w, O, S) {
            const ee = M + this.GetExtensionString({ file_type: w }),
              se = this.GenerateEditableURLFromHashAndExt(m, ee);
            return await this.AsyncGetImageResolutionInternal(se, O, S);
          },
          async AsyncGetImageResolutionInternal(m, M, w) {
            const O = (0, l.x0)();
            let S = new Image();
            (S.crossOrigin = "anonymous"),
              (S.onerror = (z) => {
                const oe = { success: u.zi };
                w ||
                  ((oe.err_msg =
                    "Load fail on url " +
                    m +
                    " with error: " +
                    (0, $.H)(z).strErrorMsg),
                  console.error(oe.err_msg)),
                  (oe.success = u.zi),
                  O.resolve(oe);
              }),
              (S.onload = () => {
                const z = { success: u.zi };
                if (
                  ((z.width = S.width),
                  (z.height = S.height),
                  !(S.width > 0) || !(S.height > 0))
                ) {
                  (0, p.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + m,
                  ),
                    (z.err_msg = "No resolution reported for url " + m),
                    O.resolve(z);
                  return;
                }
                (z.success = u.R), O.resolve(z);
              }),
              (S.src = m),
              M.token.promise.catch(() => {
                (S.onload = () => {}),
                  (S.onerror = () => {}),
                  O.resolve({ success: u.e9 });
              });
            let ee;
            const se = new Promise((z, oe) => {
              ee = setTimeout(() => oe(), 1e4);
            });
            let ie;
            try {
              ie = await Promise.race([se, O.promise]);
            } catch {
              ie = { success: u._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(ee);
            }
            return ie;
          },
          BIsClanImageVideo(m) {
            return m.file_type == r.bg.nn || m.file_type == r.bg.pJ;
          },
        };
      },
      9046: (ce, W, d) => {
        d.d(W, { pb: () => c, wI: () => b });
        class g {
          imageid;
          image_hash;
          thumbnail_hash;
          file_type;
          file_name;
          clanAccountID;
          url;
          thumb_url;
          uploaded_time;
          loc_group_id;
        }
        var b = ((u) => (
          (u.full = ""),
          (u.background_main = "_960x311"),
          (u.background_mini = "_480x156"),
          (u.capsule_main = "_400x225"),
          (u.spotlight_main = "_1054x230"),
          u
        ))(b || {});
        const c = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      50974: (ce, W, d) => {
        d.d(W, {
          GU: () => c,
          Kd: () => p,
          Ro: () => v,
          bv: () => l,
          gt: () => u,
          mW: () => $,
          wv: () => te,
          yT: () => x,
        });
        const g = 4145017,
          b = 35143931,
          c = 39049601,
          u = 45479024,
          l = 41316928,
          r = 45784768,
          v = 4397053,
          p = 4,
          $ = 20,
          te = 45559995,
          x = 45902273,
          D = [g, b, c, p, l],
          re = [g, b, c, u, l, r, v, p, $, te, x];
      },
      7742: (ce, W, d) => {
        d.d(W, { x0: () => b });
        async function g(u) {
          try {
            return await u;
          } catch (l) {
            console.error(l);
            return;
          }
        }
        function b() {
          let u, l;
          return {
            promise: new Promise((v, p) => {
              (u = v), (l = p);
            }),
            resolve: u,
            reject: l,
          };
        }
        function c(u) {
          return new Promise((l) => setTimeout(l, u));
        }
      },
      64165: (ce, W, d) => {
        d.d(W, { n: () => b, s: () => c });
        var g = d(50974);
        function b(u, l, r) {
          return u == g.wv
            ? `charts/topnewreleases/${l}`
            : u == g.yT
              ? `charts/bestofyear/${l}`
              : r
                ? `sale/${l}`
                : `curator/${u}/sale/${l}`;
        }
        function c(u, l) {
          return b(u, "", l).startsWith("curator/");
        }
      },
      59432: (ce, W, d) => {
        d.d(W, { Gw: () => l, Lk: () => r, ai: () => u, mm: () => c });
        var g = d(14947);
        const b = g.sH.box(void 0);
        function c() {
          return b.get();
        }
        function u(v) {
          (0, g.h5)(() => b.set(v));
        }
        function l() {
          const v = b.get();
          return v || Math.floor(Date.now() / 1e3);
        }
        function r() {
          const v = b.get();
          return v ? new Date(v * 1e3) : new Date();
        }
      },
      34041: (ce, W, d) => {
        d.d(W, {
          $N: () => Y,
          CX: () => K,
          Dp: () => ue,
          wz: () => A,
          qX: () => H,
          cD: () => j,
          yX: () => P,
          Q5: () => g,
          Ji: () => c,
          Xs: () => b,
          AH: () => Qe,
          zF: () => Xe,
        });
        var g = {};
        d.r(g), d.d(g, { qZ: () => p });
        var b = {};
        d.r(b), d.d(b, { bV: () => Ge, O8: () => Pe, x1: () => Ue });
        var c = {};
        d.r(c),
          d.d(c, {
            HW: () => Ae,
            MU: () => $e,
            qP: () => Je,
            RU: () => Ye,
            mP: () => Ke,
          });
        var u = d(80613),
          l = d.n(u),
          r = d(75245),
          v = d(35038);
        const p = 0,
          $ = 50,
          te = 51,
          x = 52,
          D = 53,
          re = 54,
          B = 55,
          f = 56,
          E = 57,
          L = 58,
          ae = 59,
          ye = 60,
          Me = 61,
          pe = 62,
          Te = 63,
          Be = 64,
          he = 65,
          m = 66,
          M = 67,
          w = 68,
          O = 69,
          S = 70,
          ee = 71,
          se = 72,
          ie = 73,
          z = 74,
          oe = 75,
          ve = 76,
          _ = 77,
          Ze = 78,
          qe = 79,
          Re = 80,
          Ce = 81,
          Ne = 82,
          zt = 83,
          Ve = 90,
          et = 91,
          jt = 92,
          _e = 93,
          tt = 94,
          rt = 95,
          kt = 96,
          Ot = 97,
          at = 98,
          it = 99,
          st = 100,
          nt = 101,
          Ee = 110,
          we = 111,
          lt = 112,
          ct = 113,
          ze = 114,
          je = 115,
          ke = 116,
          Oe = 117,
          Fe = 118,
          We = 119,
          Ft = 120,
          ot = 130,
          ut = 131,
          dt = 132,
          mt = 133,
          gt = 134,
          Ie = 135,
          ht = 136,
          ft = 137,
          Se = 138,
          bt = 139,
          xe = 140,
          yt = 150,
          De = 151,
          Bt = 152,
          pt = 153,
          vt = 154,
          Wt = 155,
          Le = 156,
          It = 157,
          St = 158,
          He = 159,
          Mt = 160,
          xt = 161,
          Dt = 162,
          Tt = 163,
          Lt = 0,
          Pe = 1,
          Ue = 2,
          Ge = 3,
          _t = 4,
          Ae = 0,
          Et = 1,
          wt = 2,
          Ye = 3,
          Ke = 4,
          T = 5,
          $e = 6,
          Je = 7;
        function n(ne) {
          return "unknown ESteamAwardVoteCategoryID ( " + ne + " )";
        }
        function t(ne) {
          return "unknown EVoteDefinitionFlag ( " + ne + " )";
        }
        function a(ne) {
          return "unknown ESteamAwardsNominationSource ( " + ne + " )";
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              s.prototype.voteid || r.Sg(s.M()),
              u.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    voteid: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    active: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                    start_time: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    end_time: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    app_discounts: { n: 5, c: o, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    groups: { n: 7, c: h, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localization: { n: 9, c: I },
                    reveal_time: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    release_date_min: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    winner_appid: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    flag: { n: 13, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    release_date_max: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    item_type: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(e = !1) {
            return s.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(s.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(s.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new s();
            return s.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(s.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(s.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition";
          }
        }
        class o extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.appid || r.Sg(o.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(o.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new o();
            return o.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(o.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(o.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class h extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              h.prototype.groupid || r.Sg(h.M()),
              u.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    groupid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    group_name: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    app_discounts: { n: 3, c: o, r: !0, q: !0 },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(e = !1) {
            return h.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(h.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(h.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new h();
            return h.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(h.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(h.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class I extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.title || r.Sg(I.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    title: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    title_linebreak: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    title_award: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    award_description: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(I.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new I();
            return I.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(I.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(I.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_Localization";
          }
        }
        class j extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.language || r.Sg(j.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    sale_appid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(j.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new j();
            return j.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(j.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(j.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class F extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.votes || r.Sg(F.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    votes: { n: 1, c: s, r: !0, q: !0 },
                    labor_of_love_winners: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = r.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(F.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new F();
            return F.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(F.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(F.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class k extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.voteid || r.Sg(k.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    voteid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(k.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new k();
            return k.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(k.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(k.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAwardsUserVote";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.sale_appid || r.Sg(H.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = r.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(H.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new H();
            return H.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(H.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(H.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Request";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.user_votes || r.Sg(J.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: { user_votes: { n: 1, c: k, r: !0, q: !0 } },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(J.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new J();
            return J.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(J.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(J.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Response";
          }
        }
        class P extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.voteid || r.Sg(P.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    voteid: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    sale_appid: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(P.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new P();
            return P.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(P.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(P.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Request";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.user_votes || r.Sg(X.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { user_votes: { n: 1, c: k, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(X.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new X();
            return X.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(X.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(X.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Response";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.category_id || r.Sg(U.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    last_updated: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(U.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new U();
            return U.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(U.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(U.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwardsNomination";
          }
        }
        class ue extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ue();
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new ue();
            return ue.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class G extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.nominations || r.Sg(G.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { nominations: { n: 1, c: U, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new G();
            return G.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class Q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.steamid || r.Sg(Q.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    code: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Q.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new Q();
            return Q.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class A extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.category_id || r.Sg(A.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    nominated_id: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    source: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = r.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(A.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new A();
            return A.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(A.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(A.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.nominations || r.Sg(Z.M()),
              u.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { nominations: { n: 1, c: U, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Z.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new Z();
            return Z.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Z.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Z.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.category_id || r.Sg(Y.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    category_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new Y();
            return Y.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.played_app || r.Sg(q.M()),
              u.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    played_app: { n: 1, c: R, r: !0, q: !0 },
                    suggested_events: { n: 2, c: C, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: N, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(q.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new q();
            return q.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class R extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.appid || r.Sg(R.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    playtime: { n: 2, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(R.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new R();
            return R.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(R.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(R.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class C extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.clanid || r.Sg(C.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    clanid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(C.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new C();
            return C.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(C.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(C.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.appid || r.Sg(N.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(N.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new N();
            return N.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(N.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(N.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class K extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.generate_new || r.Sg(K.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    generate_new: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(K.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new K();
            return K.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(K.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(K.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.code || r.Sg(V.M()),
              u.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    code: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(V.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (l().BinaryReader)(e),
              y = new V();
            return V.deserializeBinaryFromReader(y, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(V.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(V.M(), e, i);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Xe;
        ((ne) => {
          function e(fe, be, le) {
            return fe.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, v.I8)(j, be, le),
              F,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          ne.GetVoteDefinitions = e;
          function i(fe, be, le) {
            return fe.SendMsg("StoreSales.SetVote#1", (0, v.I8)(P, be, le), X, {
              ePrivilege: 1,
            });
          }
          ne.SetVote = i;
          function y(fe, be, le) {
            return fe.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, v.I8)(H, be, le),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ne.GetUserVotes = y;
        })(Xe || (Xe = {}));
        var Qe;
        ((ne) => {
          function e(le, de, me) {
            return le.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, v.I8)(ue, de, me),
              G,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ne.GetUserNominations = e;
          function i(le, de, me) {
            return le.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, v.I8)(Q, de, me),
              G,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          ne.GetOtherUserNominations = i;
          function y(le, de, me) {
            return le.SendMsg(
              "SteamAwards.Nominate#1",
              (0, v.I8)(A, de, me),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ne.Nominate = y;
          function fe(le, de, me) {
            return le.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, v.I8)(Y, de, me),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          ne.GetNominationRecommendations = fe;
          function be(le, de, me) {
            return le.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, v.I8)(K, de, me),
              V,
              { ePrivilege: 1 },
            );
          }
          ne.GetNominationShareLink = be;
        })(Qe || (Qe = {}));
      },
      39829: (ce, W, d) => {
        d.d(W, {
          $m: () => u,
          ML: () => x,
          Sn: () => B,
          Wn: () => v,
          a4: () => D,
          f_: () => re,
          jD: () => r,
          mj: () => l,
          rp: () => te,
        });
        var g = d(33902),
          b = d(90626),
          c = d(73259);
        const u = "100% 0px 100% 0px",
          l = "SaleSection_",
          r = "tab",
          v = 940,
          p = 1920;
        function $() {
          return window.innerWidth ?? p;
        }
        function te() {
          return $() >= v;
        }
        function x() {
          const f = (0, g.d)(),
            [E, L] = (0, b.useState)(() => $());
          return (
            (0, b.useEffect)(() => {
              const ae = () => {
                L($());
              };
              return (
                ae(),
                window.addEventListener("resize", ae),
                () => window.removeEventListener("resize", ae)
              );
            }, []),
            E
          );
        }
        function D(f = v) {
          return x() >= f;
        }
        function re(f) {
          const E = x(),
            L = E >= v,
            ae = (0, c._B)(f);
          return L
            ? { nMaxCapsulesPerRow: ae.nMaxItemsPerRow, bScreenIsWide: L }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor(E / ae.nItemMinimumWidth), 1),
                  ae.nMaxItemsPerRow,
                ),
                bScreenIsWide: L,
              };
        }
        function B(f) {
          const E = (0, c._B)(f);
          return te()
            ? E.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / E.nItemMinimumWidth),
                  1,
                ),
                E.nMaxItemsPerRow,
              );
        }
      },
      38340: (ce, W, d) => {
        d.d(W, { eg: () => b, lw: () => g, qR: () => c });
        const g = "{STEAM_CLAN_IMAGE}",
          b = "{STEAM_CLAN_LOC_IMAGE}",
          c = "{STEAM_APP_IMAGE}";
      },
      73259: (ce, W, d) => {
        d.d(W, {
          FZ: () => Ue,
          gr: () => Bt,
          A4: () => Ce,
          iy: () => qe,
          ZA: () => st,
          Dn: () => nt,
          CU: () => Se,
          Ay: () => ht,
          ye: () => Ie,
          Fo: () => De,
          G$: () => pt,
          Xx: () => Ee,
          DJ: () => He,
          G6: () => vt,
          zv: () => we,
          IS: () => Oe,
          GE: () => je,
          yX: () => ke,
          w: () => Le,
          EE: () => ze,
          Zf: () => Fe,
          jR: () => We,
          Ac: () => Ge,
          lh: () => $e,
          Hc: () => It,
          UR: () => xe,
          mz: () => mt,
          qQ: () => ut,
          MW: () => dt,
          W2: () => ot,
          Pm: () => bt,
          qR: () => gt,
          _B: () => lt,
          j3: () => Je,
          Yw: () => ct,
          zK: () => at,
          DU: () => _e,
          ld: () => yt,
          cB: () => Mt,
        });
        var g = d(25518),
          b = d(32093),
          c = d(99412),
          u = d(34041),
          l = d(14947);
        const r = null,
          v = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(c.bP9),
            localized_broadcast_left_image: new Array(c.bP9),
            localized_broadcast_right_image: new Array(c.bP9),
            broadcast_whitelist: [],
          };
        var p = d(76559),
          $ = d(29630),
          te = d(9046),
          x = d(50974),
          D = d(59432),
          re = d(64165),
          B = d(71742),
          f = d(18210),
          E = d(13854),
          L = d(71684),
          ae = d(48473),
          ye = d(36174),
          Me = d(27066),
          pe = Object.defineProperty,
          Te = Object.getOwnPropertyDescriptor,
          Be = (n, t, a, s) => {
            for (
              var o = s > 1 ? void 0 : s ? Te(t, a) : t, h = n.length - 1, I;
              h >= 0;
              h--
            )
              (I = n[h]) && (o = (s ? I(t, a, o) : I(o)) || o);
            return s && o && pe(t, a, o), o;
          };
        const he = null,
          m = { bScheduleEnabled: !1, scheduleEntries: [] },
          M = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class w {
          m_eventModel;
          constructor(t) {
            this.m_eventModel = t;
          }
          BHasScheduleEnabled() {
            return this.m_eventModel.jsondata.bScheduleEnabled;
          }
          GetScheduleEntries() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries
              : [];
          }
          GetScheduleEntriesCount() {
            return this.m_eventModel.jsondata.bScheduleEnabled &&
              this.m_eventModel.jsondata.scheduleEntries
              ? this.m_eventModel.jsondata.scheduleEntries.length
              : 0;
          }
        }
        class O {
          m_eventModel;
          m_entry;
          constructor(t, a) {
            (this.m_eventModel = t), (this.m_entry = a);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        Be([Me.o], O.prototype, "GetEventStartTime", 1);
        const S = 1e4,
          ee = 99999;
        function se() {
          return Math.floor(S + Math.random() * (ee - S + 1));
        }
        var ie = d(18994),
          z = d(72609),
          oe = Object.defineProperty,
          ve = Object.getOwnPropertyDescriptor,
          _ = (n, t, a, s) => {
            for (
              var o = s > 1 ? void 0 : s ? ve(t, a) : t, h = n.length - 1, I;
              h >= 0;
              h--
            )
              (I = n[h]) && (o = (s ? I(t, a, o) : I(o)) || o);
            return s && o && oe(t, a, o), o;
          };
        const Ze = [
          c.u0,
          c.zeJ,
          c.Fa4,
          c.Aav,
          c.SRb,
          c.zA,
          c.y6,
          c.hGl,
          c.WNR,
          c.pIh,
          c.izQ,
          c.uYK,
          c.f4X,
          c.zcX,
          c.yhO,
        ];
        function qe(n) {
          return (
            Ze.some((t) => t == n.GetEventType()) &&
            !n.BHasTag("steam_award_nomination_request") &&
            !n.BHasTag("curator")
          );
        }
        const Re = [c.HRy, c.LOv, c.HFK];
        function Ce(n) {
          return (
            !Re.some((t) => t == n.GetEventType()) && !n.BHasTag("curator")
          );
        }
        const Ne = [c.Fwr, c.HFK];
        function zt(n) {
          return (
            !Ne.some((t) => t == n.GetEventType()) && !n.BHasTag("curator")
          );
        }
        const Ve = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          et = new Set(Ve);
        function jt(n) {
          return !!n.endTime && et.has(n.type);
        }
        const _e = 593110,
          tt = 766,
          rt = 221410,
          kt = 1675200,
          Ot = 4165890,
          at = [_e, tt, rt],
          it = [c.Fwr, c.HFK];
        function st(n) {
          return (
            !it.some((t) => t == n.GetEventType()) && !n.BHasTag("curator")
          );
        }
        function nt(n, t = (0, D.Gw)()) {
          const a = 60 * ye.Kp.PerDay;
          return (
            n.BIsVisibleEvent(t) &&
            n.BIsOGGEvent() &&
            (n.rtime32_last_modified ?? 0) > t - a &&
            !Ee(n)
          );
        }
        function Ee(n) {
          return (
            n.BHasTag("mod_reviewed") && !n.BHasTag("mod_require_rereview")
          );
        }
        var we = ((n) => (
          (n[(n.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (n[(n.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (n[(n.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (n[(n.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          n
        ))(we || {});
        function lt(n) {
          switch (n) {
            case "links":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "itemdef":
              return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
            case "contenthubspecials":
              return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
            default:
              return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
          }
        }
        const ct = "bordered";
        var ze = ((n) => (
            (n[(n.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (n[(n.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (n[(n.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (n[(n.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (n[(n.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (n[(n.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (n[(n.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (n[(n.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            (n[(n.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            n
          ))(ze || {}),
          je = ((n) => (
            (n[(n.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (n[(n.k_ELanguage = 1)] = "k_ELanguage"),
            (n[(n.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (n[(n.k_EUserPreference = 3)] = "k_EUserPreference"),
            (n[(n.k_EPrice = 4)] = "k_EPrice"),
            (n[(n.k_EAppType = 5)] = "k_EAppType"),
            n
          ))(je || {}),
          ke = ((n) => (
            (n[(n.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (n[(n.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (n[(n.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            n
          ))(ke || {}),
          Oe = ((n) => (
            (n[(n.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (n[(n.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (n[(n.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            n
          ))(Oe || {}),
          Fe = ((n) => (
            (n.Steam = "Steam"),
            (n.Facebook = "Facebook"),
            (n.Twitter = "Twitter"),
            (n.Reddit = "Reddit"),
            n
          ))(Fe || {}),
          We = ((n) => (
            (n.Summary = "summary"),
            (n.SummaryLargeImage = "summary_large_image"),
            n
          ))(We || {});
        const Ft = null;
        function ot(n) {
          return n && !!n.show_as_carousel && !n.enable_faceted_browsing;
        }
        function ut(n) {
          return n.carousel_rows || 1;
        }
        function dt(n) {
          return n.cap_item_count || 0;
        }
        function mt(n) {
          return n.cap_section_row_count && n.cap_section_row_count > 0
            ? n.cap_section_row_count
            : n.section_type == "trailercarousel"
              ? 1
              : n.cap_section_content
                ? 4
                : 0;
        }
        function gt(n) {
          return n?.store_filter ? JSON.stringify(n.store_filter) : void 0;
        }
        function Ie(n) {
          switch (n) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function ht(n) {
          switch (n) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function ft(n) {
          switch (n) {
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
        }
        function Se(n, t = !1) {
          return !n || !ft(n.section_type)
            ? !1
            : t
              ? n.sale_tag_filter?.clauses?.length
                ? !0
                : !!n.smart_section
              : !!n.smart_section && n.smart_section_type != null;
        }
        function bt(n) {
          return Se(n) ? n?.smart_section_type : void 0;
        }
        function xe(n) {
          return (
            (n.jsondata.sale_ml_recommender_delay_hours &&
              (n.startTime ?? 0) +
                n.jsondata.sale_ml_recommender_delay_hours * ye.Kp.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        const yt = 2.5;
        function De(n, t, a) {
          return !n.BIsNextFest() || !Ie(t.section_type)
            ? !1
            : a == ie.sQ.Random
              ? !0
              : xe(n) > 0;
        }
        function Bt(n, t, a, s) {
          if (!t.next_fest_exploration_visibility || !n.BIsNextFest())
            return !1;
          switch (t.next_fest_exploration_visibility) {
            case "show-only-personalized":
              return s != ie.sQ.Personalized;
            case "show-only-personalized-available":
              return !a;
            case "show-only-personalized-unavailable":
              return a;
          }
          return !1;
        }
        function pt(n, t, a) {
          return !!(t.use_random_order || De(n, t, a));
        }
        const vt = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(c.bP9),
            localized_label_image: new Array(c.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          Wt = { internal_type: "subscription_pricing" };
        var Le = ((n) => (
          (n[(n.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (n[(n.k_EContentHub = 1)] = "k_EContentHub"),
          n
        ))(Le || {});
        function It(n) {
          return {
            arrowFill: n?.sale_carousel_arrow_color,
            arrowStyle: n?.sale_carousel_arrow_style,
            breadcrumbActiveColor: n?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: n?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: n?.sale_carousel_breadcrumb_style,
          };
        }
        function St(n, t, a) {
          (t.library_spotlight = void 0),
            t.email_setting &&
              ((t.email_setting.locked = void 0),
              (t.email_setting.force_feature_id = void 0)),
            (t.steam_award_category_suggestion = void 0),
            (t.steam_award_category_voteids = void 0),
            (t.action_end_time = void 0),
            (t.ownership_requirement_info = void 0),
            (t.sale_use_subscription_layout = void 0),
            (t.app_right_requirement_info = void 0),
            (t.clone_from_event_gid = a),
            (t.clone_from_sale_enabled = t.bSaleEnabled),
            (t.bSaleEnabled = n == k_EClanEventType_CreatorHome),
            (t.sale_discount_event_id = void 0),
            (t.valve_access_log = []),
            (t.bInvisibleGameOptIn = void 0),
            (t.rt_migrated_time = void 0),
            (t.optin_tagid || t.sale_opt_in_page_name) &&
              ((t.tagged_items = void 0),
              (t.tagged_item_filter = void 0),
              (t.auto_item_tags = void 0)),
            (t.optin_prune_tagid = void 0),
            (t.optin_tagid = void 0),
            (t.sale_opt_in_page_name = void 0),
            (t.prune_list_optin_name = void 0),
            (t.optin_only = void 0),
            (t.child_demo_appid_for_repost = void 0),
            (t.sale_vanity_id = void 0),
            (t.sale_update_landing_page_vanity_id = void 0),
            (t.automatically_push_updated_source = void 0),
            (t.country_restriction = void 0);
        }
        const He = {
            localized_subtitle: new Array(c.bP9),
            localized_summary: new Array(c.bP9),
            localized_title_image: new Array(c.bP9),
            localized_capsule_image: new Array(c.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(c.bP9),
            localized_sale_overlay: new Array(c.bP9),
            localized_sale_product_banner: new Array(c.bP9),
            localized_sale_product_mobile_banner: new Array(c.bP9),
            localized_sale_logo: new Array(c.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ...v,
            ...m,
          },
          Mt = "old_announce_",
          xt = 80,
          Dt = 120,
          Tt = 180,
          Lt = "hide_from_events_and_discount",
          Pe = [
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
          Ue = [
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
          Ge = [
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
          _t = [c.HRy, c.LOv, c.HFK],
          Ae = [
            c.L0X,
            c.KDJ,
            c.HRy,
            c.C$4,
            c.zA,
            c.y6,
            c.hGl,
            c.pIh,
            c.izQ,
            c.I5b,
            c.LOv,
            c.WNR,
          ],
          Et = [b.TU.k_ESteamRealmGlobal],
          wt = [b.TU.k_ESteamRealmChina],
          Ye = [b.TU.k_ESteamRealmGlobal, b.TU.k_ESteamRealmChina],
          Ke = [],
          T = class ge {
            constructor() {
              (0, l.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new p.b();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
            type = c.DRF;
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
            visibility_state = 0;
            broadcaster = void 0;
            jsondata = He;
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
              return !this.bOldAnnouncement && !!this.GID;
            }
            static FromJSON(t) {
              let a = new ge(),
                s = JSON.parse(t);
              return (
                Object.assign(a, s),
                (a.name = new Map(s.name)),
                (a.description = new Map(s.description)),
                (a.vecTags = [...(s.vecTags ?? s.tags ?? [])]),
                (a.clanSteamID = new p.b(s.clanSteamID)),
                (0, B.wT)(
                  a.clanSteamID && a.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    a.clanSteamID.ConvertTo64BitString(),
                ),
                s.broadcaster &&
                  ((a.broadcaster = new p.b(s.broadcaster)),
                  (0, B.wT)(
                    a.broadcaster && a.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      a.broadcaster.ConvertTo64BitString(),
                  )),
                a
              );
            }
            static FromCClanEventData(t, a) {
              let s = new ge();
              (s.GID = t.gid),
                (s.clanSteamID = new p.b(t.clan_steamid)),
                s.name.set(a, t.event_name ?? ""),
                (s.type = t.event_type),
                (s.appid = t.appid ?? 0),
                (s.startTime = t.rtime32_start_time),
                (s.endTime = t.rtime32_end_time),
                (s.nCommentCount = t.comment_count ?? 0),
                (s.creator_steamid = t.creator_steamid),
                (s.last_update_steamid = t.last_update_steamid),
                (s.jsondata = JSON.parse(t.jsondata ?? "{}")),
                (s.rtime32_last_local_modification = t.rtime32_last_modified),
                t.published
                  ? t.hidden
                    ? (s.visibility_state = t.unlisted ? 3 : 1)
                    : (s.visibility_state = 2)
                  : (s.visibility_state = 0),
                (s.createTime = t.rtime_created),
                (s.m_nBuildID = t.build_id),
                (s.m_strBuildBranch = t.build_branch),
                (s.visibilityStartTime = t.rtime32_visibility_start),
                (s.visibilityEndTime = t.rtime32_visibility_end),
                (s.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
                (s.featured_app_tagid = t.featured_app_tagid),
                t.broadcaster_accountid &&
                  (s.broadcaster = p.b.InitFromAccountID(
                    t.broadcaster_accountid,
                  )),
                (s.AnnouncementGID = t.announcement_body?.gid ?? "0");
              const o = t.clan_steamid_original;
              return (
                o
                  ? (s.clanSteamIDOriginal = new p.b(o))
                  : t.announcement_body?.clanid &&
                    (s.clanSteamIDOriginal = p.b.InitFromClanID(
                      Number(t.announcement_body.clanid),
                    )),
                (s.postTime = t.announcement_body?.posttime),
                (s.forumTopicGID = t.forum_topic_id),
                s.name.set(a, t.announcement_body?.headline ?? ""),
                s.description.set(a, t.announcement_body?.body ?? ""),
                (s.nCommentCount = t.comment_count ?? 0),
                (s.vecTags = [...(t.announcement_body?.tags ?? [])]),
                (s.forumTopicGID = t.announcement_body?.forum_topic_id),
                (s.nVotesUp = t.announcement_body?.voteupcount ?? 0),
                (s.nVotesDown = t.announcement_body?.votedowncount ?? 0),
                s
              );
            }
            toJSON(t) {
              let a = new Object();
              return (
                Object.assign(a, this),
                (a.name = Array.from(this.name)),
                (a.description = Array.from(this.description)),
                (a.vecTags = Array.from(this.vecTags)),
                (a.tags = a.vecTags),
                (a.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
                this.broadcaster &&
                  (a.broadcaster = this.broadcaster.ConvertTo64BitString()),
                a
              );
            }
            clone(t = !1) {
              let a = new ge();
              if (
                ((a.GID = this.GID),
                (a.AnnouncementGID = this.AnnouncementGID),
                (a.clanSteamID = this.clanSteamID),
                (a.clanSteamIDOriginal = this.clanSteamIDOriginal),
                (a.bOldAnnouncement = this.bOldAnnouncement),
                (a.nCommentCount = this.nCommentCount),
                (a.nVotesUp = this.nVotesUp),
                (a.nVotesDown = this.nVotesDown),
                (a.forumTopicGID = this.forumTopicGID),
                (a.comment_type = this.comment_type),
                (a.gidfeature = this.gidfeature),
                (a.gidfeature2 = this.gidfeature2),
                (a.featured_app_tagid = this.featured_app_tagid),
                (a.creator_steamid = this.creator_steamid),
                (a.last_update_steamid = this.last_update_steamid),
                (a.rtime32_last_modified = this.rtime32_last_modified),
                (a.rtime32_last_solr_search_col_updated =
                  this.rtime32_last_solr_search_col_updated),
                (a.rtime32_moderator_reviewed =
                  this.rtime32_moderator_reviewed),
                (a.type = this.type),
                (a.appid = this.appid),
                (a.name = new Map()),
                this.name.forEach((s, o) => {
                  a.name.set(o, s);
                }),
                (a.description = new Map()),
                this.description.forEach((s, o) => {
                  a.description.set(o, s);
                }),
                (a.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((s, o) => {
                  a.timestamp_loc_updated.set(o, s);
                }),
                (a.createTime = this.createTime ?? 0),
                (a.startTime = this.startTime),
                (a.endTime = this.endTime),
                (a.visibilityStartTime = this.visibilityStartTime),
                (a.visibilityEndTime = this.visibilityEndTime),
                (a.postTime = this.postTime),
                (a.visibility_state = this.visibility_state),
                (a.loadedAllLanguages = this.loadedAllLanguages),
                (a.bLoaded = this.bLoaded),
                (a.broadcaster = this.broadcaster
                  ? new p.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (a.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (a.vecTags = new Array()),
                t
                  ? ((a.m_nBuildID = this.m_nBuildID),
                    (a.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((s) => a.vecTags.push(s)))
                  : this.vecTags.forEach((s) => {
                      Pe.includes(s) && a.vecTags.push(s);
                    }),
                a.jsondata.email_setting)
              ) {
                let s = 100;
                for (let o of a.jsondata.email_setting.sections)
                  o.unique_id || ((o.unique_id = `email_section_${s}`), s++);
              }
              return a;
            }
            GetLastReferencedSaleDayFromCapsules(t, a) {
              let s = a;
              return (
                t?.forEach((o) => {
                  o.visibility_index !== void 0 &&
                    (s =
                      s === void 0
                        ? o.visibility_index
                        : Math.max(s, o.visibility_index));
                }),
                s
              );
            }
            GetLastReferencedSaleDay() {
              let t;
              for (const a of this.GetSaleSections())
                if (a.section_type === "tabs") {
                  if ((a.tabs?.length ?? 0) > 0)
                    for (const s of a.tabs ?? [])
                      t = this.GetLastReferencedSaleDayFromCapsules(
                        s.capsules,
                        t,
                      );
                } else
                  t = this.GetLastReferencedSaleDayFromCapsules(a.capsules, t);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (t == null || t < (this.jsondata.sale_num_headers ?? 0)) &&
                  (t = this.jsondata.sale_num_headers),
                t
              );
            }
            GetDayIndexFromEventStart(t = (0, D.Gw)()) {
              let a = 0;
              this.startTime !== void 0 &&
                t >= this.startTime &&
                (a = Math.floor((t - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (a = this.m_overrideCurrentDay);
              const s = this.GetLastReferencedSaleDay() || 0;
              return Math.min(a, s);
            }
            GetNameWithFallback(t) {
              const a = f.A0.GetELanguageFallback(t);
              return this.name.get(t) || this.name.get(a);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(t) {
              return !!(
                (this.BInRealmGlobal() &&
                  f.A0.IsELanguageValidInRealm(t, b.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  f.A0.IsELanguageValidInRealm(t, b.TU.k_ESteamRealmChina))
              );
            }
            GetImgArray(t) {
              let a = [];
              if (
                ((t === "background" || t == "localized_title_image") &&
                  (a = this.jsondata.localized_title_image),
                t === "capsule")
              )
                a = this.jsondata.localized_capsule_image;
              else if (t === "spotlight")
                a = this.jsondata.localized_spotlight_image;
              else if (t === "email_full" || t === "email_centered")
                a = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (t === "broadcast_left")
                a = this.jsondata.localized_broadcast_left_image;
              else if (t === "broadcast_right")
                a = this.jsondata.localized_broadcast_right_image;
              else if (t === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const s = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  a = this.jsondata.localized_per_day_sales_header?.[s];
                } else a = this.jsondata.localized_sale_header;
              else
                t === "sale_logo"
                  ? (a = this.jsondata.localized_sale_logo)
                  : t === "sale_overlay"
                    ? (a = this.jsondata.localized_sale_overlay)
                    : te.pb.includes(t)
                      ? (a = this.fnGetLocalizedGroupImages?.())
                      : t === "product_banner"
                        ? (a = this.jsondata.localized_sale_product_banner)
                        : t === "product_mobile_banner"
                          ? (a =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : t === "bestofyear_banner"
                            ? (a = this.jsondata.localized_bestofyear_banner)
                            : t === "bestofyear_banner_mobile"
                              ? (a =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : t === "localized_store_app_spotlight"
                                ? (a =
                                    this.jsondata.localized_store_app_spotlight)
                                : t ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (a =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return a;
            }
            GetImageURL(t, a = c.Bhc, s = te.wI.full) {
              const o = this.GetImgArray(t),
                h = o && o.length > a && o[a] != null;
              return h && o[a]?.startsWith("http")
                ? o[a]
                : h
                  ? $.zU.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      o[a] ?? "",
                      s,
                    )
                  : void 0;
            }
            GetImageHash(t, a = c.Bhc) {
              let s = this.GetImgArray(t);
              return s && s.length > a && s[a] != null
                ? s[a].substr(0, s[a].length - 4)
                : null;
            }
            GetImageHashAndExt(t, a = c.Bhc) {
              let s = this.GetImgArray(t);
              return s && s.length > a && s[a] != null ? s[a] : null;
            }
            BHasSomeImage(t) {
              let a = this.GetImgArray(t);
              return !!a && a.some((s) => s != null && s.length > 0);
            }
            BHasImage(t, a) {
              let s = this.GetImgArray(t);
              return !!s && s.length > a && s[a] != null;
            }
            BHasAnnouncementGID() {
              return (
                this.AnnouncementGID !== null &&
                this.AnnouncementGID !== void 0 &&
                this.AnnouncementGID.length > 1
              );
            }
            GetAnnouncementGID() {
              return this.AnnouncementGID;
            }
            BHasForumTopicGID() {
              return (
                this.forumTopicGID !== null &&
                this.forumTopicGID !== void 0 &&
                this.forumTopicGID.length > 1
              );
            }
            GetForumTopicURL(t) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? z.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : t
                    ? z.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      t +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : z.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(t) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(t)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const t = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !t || !t.BIsValid()
                ? ""
                : z.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    t.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(t = (0, D.Gw)()) {
              return t < (this.startTime ?? 0);
            }
            BHasEventEnded(t = (0, D.Gw)()) {
              return (this.endTime ?? 0) < t;
            }
            UpdateVoteCount(t, a) {
              t == "up"
                ? (this.nVotesUp = (0, E.OQ)(
                    this.nVotesUp + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : t == "down" &&
                  (this.nVotesDown = (0, E.OQ)(
                    this.nVotesDown + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(t, a) {
              let s = this.GetDescriptionWithFallback(t);
              if (s) {
                let o = s.indexOf("[img]");
                if (o !== -1 && o < a) {
                  o += 5;
                  let h = s.indexOf("[/img]", o);
                  if (h != -1) {
                    let I = s.substring(o, h).trim();
                    if (I.length != 0)
                      return $.zU.ReplacementTokenToClanImageURL(I);
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
            BImageNeedScreenshotFallback(t, a) {
              let s = this.GetImageURL(t, a);
              if (!s || s.length == 0) {
                const o = f.A0.GetELanguageFallback(a);
                a != o && (s = this.GetImageURL(t, o));
              }
              return !s || s.length == 0;
            }
            GetDescriptionWithFallback(t) {
              const a = f.A0.GetELanguageFallback(t);
              return this.description.get(t) || this.description.get(a);
            }
            BIsImageSafeForAllAges(t, a, s = {}) {
              const o = f.A0.GetELanguageFallback(a);
              return (
                this.GetImageURL(t, a) != null ||
                (a != o && this.GetImageURL(t, o) != null) ||
                (this.appid && s.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  s.clanInfo &&
                  ((s.clanInfo.is_creator_home && !s.clanInfo.is_ogg) ||
                    s.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(t = (0, D.Gw)()) {
              let a = Math.floor(t);
              return (
                this.visibility_state == 3 ||
                (this.visibility_state == 2 &&
                  a > (this.visibilityStartTime ?? 0) &&
                  ((this.visibilityEndTime ?? 0) < 10 ||
                    a < (this.visibilityEndTime ?? 0)))
              );
            }
            BIsStagedEvent() {
              return this.visibility_state == 1;
            }
            BIsUnlistedEvent() {
              return this.visibility_state == 3;
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
            BIsEventActionEnabled(t = (0, D.Gw)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > t ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > t))
              );
            }
            BHasSubTitle(t) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                t >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let a = this.jsondata.localized_subtitle[t];
              return a != null && a != "";
            }
            GetSubTitle(t) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                t >= this.jsondata.localized_subtitle.length
              )
                return "";
              let a = this.jsondata.localized_subtitle[t];
              return a || "";
            }
            GetSubTitleWithLanguageFallback(t) {
              return this.jsondata
                ? f.NT.GetWithFallback(this.jsondata.localized_subtitle, t)
                : "";
            }
            GetSubTitleWithSummaryFallback(t) {
              return (
                f.NT.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
                ge.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
              );
            }
            GetSummaryWithFallback(t, a) {
              return (
                f.NT.GetWithFallback(this.jsondata?.localized_summary, t) ||
                ge.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(t),
                  a,
                )
              );
            }
            GetSummary(t) {
              return f.NT.Get(this.jsondata?.localized_summary ?? [], t);
            }
            BHasSummary(t) {
              return !!this.GetSummary(t);
            }
            static GenerateSummaryFromText(t, a) {
              return !t || t.trim().length == 0
                ? ""
                : ((t = (0, g.Yj)(t, [
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
                  (t = (0, g.zV)(t, ["p"], " ")),
                  (t = (0, g.zV)(t)),
                  (t = (0, ae.aX)(t)),
                  (0, ae.bC)(t, a || Tt));
            }
            BHasTag(t) {
              return this.vecTags.indexOf(t) != -1;
            }
            BHasTagStartingWith(t) {
              return this.vecTags.some((a) => a?.startsWith(t));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(t) {
              if (!t) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || _t.includes(this.type))
                return !1;
              const a = new Date().getTime() / 1e3;
              return !(
                (Ae.includes(this.type) && this.endTime && a > this.endTime) ||
                (this.startTime && a > this.startTime + ye.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(t, a = (0, D.Gw)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const s = this.endTime ? this.endTime : a + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (t || ((this.startTime ?? 0) - 600 <= a && a < s))
              );
            }
            BHasBroadcastForceBanner() {
              return !!this.jsondata.broadcast_force_banner;
            }
            BSaleShowBroadcastAtTopOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (a) => a.section_type == "broadcast",
                )
              );
            }
            BSaleShowCuratorRecommendationAtBottomOfPage() {
              return !(
                this.jsondata.sale_sections &&
                this.jsondata.sale_sections.some(
                  (a) => a.section_type == "curator_recommendation",
                )
              );
            }
            GetBroadcastChatVisibility() {
              return this.jsondata.broadcastChatSetting || "hide";
            }
            GetBroadcastTitle(t) {
              return (
                f.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  t,
                ) ||
                (0, f.we)(
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
                this.jsondata.broadcast_whitelist?.map((t) =>
                  p.b.InitFromAccountID(t).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(t) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(t),
              );
            }
            BHasSaleEnabled() {
              return !!this.jsondata.bSaleEnabled;
            }
            BHasSaleVanity() {
              return (
                !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id
              );
            }
            GetSaleVanity() {
              return this.jsondata.sale_vanity_id ?? "";
            }
            BHasSaleUpdateLandingPageVanity() {
              return (
                !!this.jsondata.bSaleEnabled &&
                !!this.jsondata.sale_update_landing_page_vanity_id
              );
            }
            GetSaleUpdateLandingPageVanity() {
              return this.jsondata.sale_update_landing_page_vanity_id ?? "";
            }
            GetSaleURL(t) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  z.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  z.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const h = this.jsondata.source_content_hub;
                return h
                  ? typeof h == "string"
                    ? z.TS.STORE_BASE_URL + "category/" + h
                    : h.type == "category"
                      ? z.TS.STORE_BASE_URL + "category/" + h.category
                      : h.type == "tags"
                        ? z.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, f.l4)() || "en") +
                          "/" +
                          h.tagid
                        : h.type == "freetoplay"
                          ? z.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : h.type == "earlyaccess"
                            ? z.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : z.TS.STORE_BASE_URL + h.type
                  : z.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              const a = this.clanSteamID.GetAccountID(),
                s =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                o = this.GetSaleVanity();
              return t && (0, re.s)(a, s)
                ? t + "sale/" + o
                : z.TS.STORE_BASE_URL + (0, re.n)(a, o, s);
            }
            BHasEmailEnabled() {
              return (
                !!this.jsondata.email_setting &&
                this.jsondata.email_setting.bEnable
              );
            }
            GetSaleSections() {
              return this.jsondata.sale_sections ?? [];
            }
            GenerateDynamicSaleSections(t, a, s, o, h, I) {
              const j = [],
                F = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let k = ee + 10;
              return (
                t &&
                  j.push({
                    ...F,
                    section_type: "footer_self_creator_home",
                    unique_id: k++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                a &&
                  j.push({
                    ...F,
                    section_type: "footer_browse_more",
                    unique_id: k++,
                  }),
                o &&
                  j.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      k++,
                      F,
                      I,
                    ),
                  ),
                s &&
                  j.push({
                    ...F,
                    section_type: "footer_default_social_share",
                    unique_id: k++,
                  }),
                h &&
                  j.push({
                    ...F,
                    section_type: "nextfest_header",
                    unique_id: k++,
                  }),
                j
              );
            }
            GetSaleSectionIncludingFooterSections(t = 0) {
              const a = this.jsondata?.sale_show_creator,
                s = this.jsondata.sale_browse_more_button,
                o =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                h = this.GetEventType() == c.ajI,
                I = this.BShowNextFestHeader(!0);
              return a || s || o || h || I
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, I, t),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!a, !!s, o, h, !1, t),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(t, a = 0) {
              return t > ee
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, a).find(
                    (o) => o.unique_id == t,
                  )
                : this.jsondata.sale_sections?.find((s) => s.unique_id == t);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(t) {
              return (
                this.jsondata.sale_sections?.filter(
                  (a) => a.section_type == t,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(t) {
              const a = this.jsondata.sale_sections?.length ?? 0;
              if (a != 0) {
                for (let s = 0; s < a; ++s)
                  if (this.jsondata.sale_sections[s].section_type === t)
                    return this.jsondata.sale_sections[s];
              }
            }
            static AccumulateCapsuleListIDs(t, a, s, o) {
              t &&
                t.forEach((h) => {
                  h &&
                    h.type &&
                    a.has(h.type) &&
                    (!o || o(h.id)) &&
                    s.add(h.id);
                });
            }
            GetSaleItemOfType(t, a) {
              if (!this.jsondata.sale_sections) return new Set();
              const s = new Set(t),
                o = new Set();
              return (
                (0, B.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((h) => {
                  ge.AccumulateCapsuleListIDs([h.capsule], s, o, a);
                }),
                this.jsondata.sale_sections.forEach((h) => {
                  if (Ie(h.section_type))
                    ge.AccumulateCapsuleListIDs(h.capsules, s, o, a);
                  else if (h.section_type === "tabs" && h.tabs)
                    for (const I of h.tabs)
                      ge.AccumulateCapsuleListIDs(I.capsules, s, o, a);
                }),
                o
              );
            }
            GetSaleItemCountOfType(t, a) {
              return this.GetSaleItemOfType(t, a).size;
            }
            GetSaleFeaturedAppsCount(t) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                t,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(t) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                t,
              );
            }
            GetSaleFeaturedBundlesCount(t) {
              return this.GetSaleItemCountOfType(["bundle"], t);
            }
            GetSaleFeaturedPackagesCount(t) {
              return this.GetSaleItemCountOfType(["sub"], t);
            }
            GetSaleFeaturedApps(t) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                t,
              );
            }
            GetSaleFeaturedAppsAndDemos(t) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                t,
              );
            }
            GetSaleFeaturedBundles(t) {
              return this.GetSaleItemOfType(["bundle"], t);
            }
            GetSaleFeaturedPackages(t) {
              return this.GetSaleItemOfType(["sub"], t);
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
              return (0, L.rG)(this.type);
            }
            GetCategoryAsString(t) {
              return this.BHasTag("steam_award_nomination_request")
                ? (0, f.we)("#PartnerEvent_SteamAwardNominations")
                : this.BHasTag("steam_award_vote_request")
                  ? (0, f.we)("#PartnerEvent_SteamAwardVoteRequest")
                  : this.BHasTag("steam_game_festival_artist_statement")
                    ? (0, f.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                    : this.BHasTag("steam_game_festival_office_hour")
                      ? (0, f.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                      : this.BHasTag("steam_game_festival_broadcast") ||
                          (this.BHasTagStartingWith("sale_nextfest_") &&
                            this.type == c.KDJ)
                        ? (0, f.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && t
                          ? (0, f.we)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(t) {
              let a = !0;
              return (
                t?.forEach((s) => {
                  this.vecTags.includes(s) || (a = !1);
                }),
                a
              );
            }
            BAllowedSteamStoreSpotlight() {
              return !!this.jsondata.store_spotlight;
            }
            BHasLibaryHomeSpotlight() {
              return !!this.jsondata.library_home_spotlight;
            }
            BHasSaleProductBanners() {
              return (
                !!this.jsondata.bSaleEnabled &&
                (this.BHasSomeImage("product_banner") ||
                  this.BHasSomeImage("product_banner_override"))
              );
            }
            GetSteamAwardCategory() {
              return this.jsondata.steam_award_category_suggestion ?? u.Q5.qZ;
            }
            GetSteamAwardNomineeCategories() {
              return this.jsondata.steam_award_category_voteids ?? [];
            }
            BIsLockedToGameOwners() {
              return !!this.jsondata.ownership_requirement_info
                ?.bLockedToAppOwners;
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
              return !!this.jsondata.app_right_requirement_info
                ?.bLockedToPartnerAppRights;
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
                this.jsondata.item_source_type === 1 &&
                !!this.jsondata.source_content_hub
              );
            }
            GetContentHubType() {
              if (this.BUsesContentHubForItemSource())
                return this.jsondata.source_content_hub == null
                  ? "games"
                  : typeof this.jsondata.source_content_hub == "string"
                    ? "category"
                    : this.jsondata.source_content_hub.type;
            }
            GetContentHubCategory() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? this.jsondata.source_content_hub
                  : this.jsondata.source_content_hub.category;
            }
            GetContentHubTag() {
              if (this.jsondata.source_content_hub != null)
                return typeof this.jsondata.source_content_hub == "string"
                  ? 0
                  : this.jsondata.source_content_hub.tagid;
            }
            GetContentHub() {
              return typeof this.jsondata.source_content_hub == "string"
                ? {
                    type: "category",
                    category: this.jsondata.source_content_hub,
                  }
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
            GetSalePageBackgroundGroup(t) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[t]
                : void 0;
            }
            GetIncludedRealmList() {
              const t = this.BInRealmGlobal(),
                a = this.BInRealmChina();
              return (
                (0, B.wT)(
                  t || a,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                t && a ? Ye : t ? Et : a ? wt : Ke
              );
            }
            BIsValidForRealm(t) {
              return this.GetIncludedRealmList().includes(t);
            }
            BIsNextFest(t = !1) {
              const a = "nextfest",
                s = this.jsondata.sale_vanity_id?.toLowerCase(),
                o = new p.b(this.clanSteamID).GetAccountID();
              return !(
                !s ||
                o != x.GU ||
                !s.startsWith(a) ||
                (t && (s.endsWith("preview") || s.endsWith("press")))
              );
            }
            BShowNextFestHeader(t) {
              return t && z.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(t, a, s) {
              const h = s >= 7;
              return {
                ...a,
                section_type: "sale_item_browser",
                unique_id: t,
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
                enable_faceted_browsing: h,
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
          };
        _([l.sH], T.prototype, "GID", 2),
          _([l.sH], T.prototype, "AnnouncementGID", 2),
          _([l.sH], T.prototype, "forumTopicGID", 2),
          _([l.sH], T.prototype, "type", 2),
          _([l.sH], T.prototype, "appid", 2),
          _([l.sH], T.prototype, "name", 2),
          _([l.sH], T.prototype, "description", 2),
          _([l.sH], T.prototype, "timestamp_loc_updated", 2),
          _([l.sH], T.prototype, "startTime", 2),
          _([l.sH], T.prototype, "endTime", 2),
          _([l.sH], T.prototype, "visibilityStartTime", 2),
          _([l.sH], T.prototype, "visibilityEndTime", 2),
          _([l.sH], T.prototype, "m_nBuildID", 2),
          _([l.sH], T.prototype, "m_strBuildBranch", 2),
          _([l.sH], T.prototype, "postTime", 2),
          _([l.sH], T.prototype, "visibility_state", 2),
          _([l.sH], T.prototype, "broadcaster", 2),
          _([l.sH], T.prototype, "jsondata", 2),
          _([l.sH], T.prototype, "nCommentCount", 2),
          _([l.sH], T.prototype, "nVotesUp", 2),
          _([l.sH], T.prototype, "nVotesDown", 2),
          _([l.sH], T.prototype, "bOldAnnouncement", 2),
          _([l.sH], T.prototype, "announcementClanSteamID", 2),
          _([l.sH], T.prototype, "loadedAllLanguages", 2),
          _([l.sH], T.prototype, "bLoaded", 2),
          _([l.sH], T.prototype, "deleteInProgress", 2),
          _([l.sH], T.prototype, "vecTags", 2),
          _([l.sH], T.prototype, "last_update_steamid", 2),
          _([l.sH], T.prototype, "rtime32_last_modified", 2),
          _([l.sH], T.prototype, "rtime32_last_solr_search_col_updated", 2),
          _([l.sH], T.prototype, "rtime32_last_local_modification", 2),
          _([l.sH], T.prototype, "rtime32_moderator_reviewed", 2),
          _([l.sH], T.prototype, "video_preview_type", 2),
          _([l.sH], T.prototype, "video_preview_id", 2),
          _([l.sH], T.prototype, "m_overrideCurrentDay", 2);
        let $e = T;
        function Je(n) {
          if (n) return n?.replace(/[()]/g, "\\$&");
        }
      },
      18994: (ce, W, d) => {
        d.d(W, {
          $m: () => c.$m,
          QS: () => u,
          Sn: () => c.Sn,
          Wn: () => c.Wn,
          ZI: () => v,
          a4: () => c.a4,
          f_: () => c.f_,
          jD: () => c.jD,
          jn: () => r,
          mj: () => c.mj,
          rp: () => c.rp,
          sQ: () => l,
        });
        var g = d(99412),
          b = d(53906),
          c = d(39829);
        const u = "exploration";
        var l = ((p) => ((p.Random = "r"), (p.Personalized = "p"), p))(l || {});
        function r(p) {
          switch (p) {
            case b.Oh:
              return g.mv5;
            case b._X:
              return g.KH9;
            case b.HD:
              return g.hmR;
            case b.rb:
              return g.R2g;
            default:
              return;
          }
        }
        function v(p) {
          switch (p) {
            case g.mv5:
              return b.Oh;
            case g.KH9:
              return b._X;
            case g.hmR:
              return b.HD;
            default:
              return;
          }
        }
      },
      51746: (ce, W, d) => {
        d.d(W, {
          EG: () => l,
          II: () => D,
          Uz: () => $,
          aL: () => p,
          ab: () => c,
          zB: () => x,
        });
        var g = d(7742),
          b = d(72849);
        function c(B) {
          const f = B.toLowerCase();
          if (f.endsWith(".jpg") || f.endsWith(".jpeg")) return "image/jpeg";
          if (f.endsWith(".png")) return "image/png";
          if (f.endsWith(".gif")) return "image/gif";
          if (f.endsWith(".mp4")) return "video/mp4";
          if (f.endsWith(".webm")) return "video/webm";
          if (f.endsWith(".srt")) return "text/srt";
          if (f.endsWith(".vtt")) return "text/vtt";
          if (f.endsWith(".webp")) return "image/webp";
        }
        function u(B) {
          switch (B) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              B,
            ),
            ".jpg"
          );
        }
        function l(B) {
          switch (B) {
            case b.bg.iS:
              return ".jpg";
            case b.bg.CK:
              return ".gif";
            case b.bg.dU:
              return ".png";
            case b.bg.pJ:
              return ".webm";
            case b.bg.nn:
              return ".mp4";
            case b.bg.pi:
              return ".srt";
            case b.bg.k7:
              return ".vtt";
            case b.bg.wD:
              return ".webp";
          }
        }
        function r(B) {
          const f = (0, g.x0)(),
            E = new Image();
          return (
            (E.onload = () => f.resolve(E)),
            (E.onerror = (L) => {
              console.error("LoadImage failed to load the image, details", L),
                f.resolve(void 0);
            }),
            (E.src = B),
            f.promise
          );
        }
        function v(B) {
          const f = (0, g.x0)(),
            E = document.createElement("video");
          return (
            (E.preload = "metadata"),
            E.addEventListener("loadedmetadata", () => f.resolve(E)),
            (E.onerror = (L) => {
              console.error("LoadVideo failed to load the video, details", L),
                f.resolve(void 0);
            }),
            (E.src = B),
            f.promise
          );
        }
        function p(B) {
          return B.startsWith("image/");
        }
        function $(B) {
          return B.startsWith("video/");
        }
        function te(B, f) {
          return f ? v(B) : r(B);
        }
        async function x(B, f) {
          if (f) return v(URL.createObjectURL(B));
          {
            const E = (0, g.x0)(),
              L = new FileReader();
            (L.onload = () => E.resolve(L.result ?? void 0)),
              (L.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  L.error,
                ),
                  E.resolve(void 0);
              }),
              L.readAsDataURL(B);
            const ae = await E.promise;
            return ae ? r(ae.toString()) : void 0;
          }
        }
        function D(B) {
          return B
            ? B instanceof HTMLVideoElement
              ? { width: B.videoWidth, height: B.videoHeight }
              : { width: B.width, height: B.height }
            : { width: 0, height: 0 };
        }
        function re(B, f) {
          if (!f) return B;
          const E = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const L of f)
            E.has(L.name.toLowerCase()) || (B[L.name] = L.value);
          return B;
        }
      },
      71684: (ce, W, d) => {
        d.d(W, { JS: () => u, rG: () => v });
        var g = d(99412),
          b = d(39905);
        function c(p) {
          return p !== k_EClanEventType_NewsEvent;
        }
        function u(p) {
          switch (p) {
            case g.Aqr:
            case g.I5b:
            case g.jO6:
            case g.Y3j:
            case g.Bb7:
            case g.TiP:
            case g.EPt:
            case g.E3D:
            case g.L0X:
            case g.KDJ:
            case g.Fa4:
            case g.Aav:
            case g.SRb:
            case g.HRy:
            case g.C$4:
            case g.zA:
            case g.y6:
            case g.hGl:
            case g.WNR:
            case g.pIh:
            case g.izQ:
            case g.LOv:
            case g.zcX:
            case g.DRF:
            case g.HFK:
              return !0;
          }
          return !1;
        }
        function l(p, $) {
          return !(
            p == k_EClanEventType_SmallUpdateEvent ||
            p == k_EClanEventType_CreatorHome ||
            ($ && $.indexOf("curator") != -1)
          );
        }
        function r(p) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(p);
        }
        function v(p) {
          let $ = "#PartnerEvent_" + p,
            te = b.Z.Localize($);
          return te != $ ? te : b.Z.Localize("#PartnerEvent_Other");
        }
      },
    },
  ]);
})();
