/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [59352],
    {
      55298: (ae, H, n) => {
        "use strict";
        n.d(H, { YA: () => M, p: () => E, qh: () => t });
        var p = n(72604),
          L = n(20194),
          l = n(41735),
          f = n.n(l),
          s = n(3166);
        function t() {
          const w = (0, L.I)({
            queryKey: ["useValveAccounts"],
            queryFn: async () => {
              const z = `${s.TS.PARTNER_BASE_URL}actions/ajaxgetadminusers`,
                S = await f().get(z);
              return S?.status == 200 && S.data?.success == p.R
                ? S.data.admins
                : (console.error("ValveAccounts:", S?.status), []);
            },
          });
          return w.isLoading ? null : w.data;
        }
        function E(w) {
          return t()?.find((S) => S.id == w);
        }
        function M(w, z) {
          return w.getQueryData(["useValveAccounts"])?.find((T) => T.id === z);
        }
      },
      65532: (ae, H, n) => {
        "use strict";
        n.d(H, { DP: () => t, Gb: () => s, iS: () => M, sM: () => E });
        var p = n(7850),
          L = n(78430),
          l = n.n(L),
          f = n(24642);
        function s(w) {
          const z = w.getValue();
          return z?.length > 0
            ? (0, p.jsx)(t, { text: z, regExp: /\r\n|\r|\n/ })
            : "";
        }
        function t(w) {
          const { text: z, regExp: S } = w;
          if (!z) return (0, p.jsx)(p.Fragment, {});
          const T = z.split(S);
          return (0, p.jsx)("div", {
            className: l().FeedbackText,
            children: T.map((g, R) =>
              (0, p.jsxs)(
                "span",
                { children: [g, R < T.length - 1 && (0, p.jsx)("br", {})] },
                R,
              ),
            ),
          });
        }
        function E(w) {
          return Number.parseInt(w.getValue()) ? "yes" : "no";
        }
        function M(w) {
          const z = Number.parseInt(w.getValue());
          return (0, f.D)(z);
        }
      },
      40299: (ae, H, n) => {
        "use strict";
        n.d(H, { K: () => L });
        var p = n(22880);
        function L(l, f, s) {
          const t = [],
            E = s.map((M) => M.header);
          t.push(E);
          for (const M of f) {
            const w = [];
            for (const z of s) {
              const S = M[z.accessorKey];
              w.push(S != null ? S.toString() : "");
            }
            t.push(w);
          }
          p.g.WriteCSVToFile(t, l);
        }
      },
      91916: (ae, H, n) => {
        "use strict";
        n.d(H, {
          MY: () => T,
          UA: () => K,
          Yd: () => A,
          qG: () => U,
          rN: () => X,
          vh: () => h,
        });
        var p = n(41735),
          L = n.n(p),
          l = n(90626),
          f = n(99412),
          s = n(72604),
          t = n(34592),
          E = n(3166),
          M = n(27066),
          w = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          S = (C, j, x, v) => {
            for (
              var I = v > 1 ? void 0 : v ? z(j, x) : j, m = C.length - 1, P;
              m >= 0;
              m--
            )
              (P = C[m]) && (I = (v ? P(j, x, I) : P(I)) || I);
            return v && I && w(j, x, I), I;
          };
        function T() {
          return E.TS.EUNIVERSE == f.Rv ? 12 : 1;
        }
        const g = class xe {
          m_mapOptInToPartners = new Map();
          m_mapPromises = new Map();
          GetPartnerInfo(j) {
            return this.m_mapOptInToPartners.get(j);
          }
          BHasPartnerInfoLoad(j) {
            return this.m_mapOptInToPartners.has(j);
          }
          async FindPartnerByName(j) {
            return (
              this.m_mapPromises.has(j) ||
                this.m_mapPromises.set(j, this.InternalFindPartnerByName(j)),
              this.m_mapPromises.get(j)
            );
          }
          async InternalFindPartnerByName(j) {
            const x = new Array();
            try {
              const v = E.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
                I = {
                  sessionid: (0, E.KC)(),
                  searchtext: j,
                  origin: self.origin,
                },
                m = await L().get(v, { params: I });
              m?.status == 200 && m?.data?.success == s.R
                ? m.data.publishers.forEach((P) => {
                    const y = {
                      partnerid: P.publisherid,
                      name: P.publishername,
                      partner_url:
                        E.TS.PARTNER_BASE_URL +
                        `pub/publisher/${P.publisherid}/`,
                      contacts: P.contacts,
                    };
                    this.m_mapOptInToPartners.set(P.publisherid, y), x.push(y);
                  })
                : console.log(
                    `CPartnerInfoStore.FindPartnerByName failed with status ${m?.status} eresult ${m?.data?.success} and msg ${m?.data?.msg}`,
                  );
            } catch (v) {
              const I = (0, t.H)(v);
              console.error(
                "CPartnerInfoStore.FindPartnerByName failed add: " +
                  I.strErrorMsg,
                I,
              );
            }
            return x;
          }
          async LoadPartnerInfo(j) {
            if (this.m_mapOptInToPartners.has(j))
              return this.m_mapOptInToPartners.get(j);
            const x = await this.FindPartnerByName("" + j);
            return (
              this.BHasPartnerInfoLoad(j) ||
                this.m_mapOptInToPartners.set(j, null),
              this.m_mapOptInToPartners.get(j)
            );
          }
          async LoadMultiplePartnerInfo(j) {
            if (!j || j.length == 0) return [];
            const x = j.filter((v) => !this.m_mapOptInToPartners.has(v));
            return (
              x.length > 0 && (await this.FindPartnerByName("" + x.join(","))),
              j.map((v) => this.m_mapOptInToPartners.get(v)).filter(Boolean)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              xe.s_Singleton || (xe.s_Singleton = new xe()), xe.s_Singleton
            );
          }
          constructor() {
            let j = JSON.parse(
              JSON.stringify((0, E.Tc)("partner_info", "application_config")),
            );
            this.ValidateStoreDefault(j) &&
              j.forEach((x) => this.m_mapOptInToPartners.set(x.partnerid, x));
          }
          ValidateStoreDefault(j) {
            const x = j;
            return x &&
              Array.isArray(x) &&
              x.length > 0 &&
              typeof x[0] == "object"
              ? typeof x[0].partnerid == "number" &&
                  typeof x[0].name == "string"
              : !1;
          }
        };
        S([M.o], g.prototype, "FindPartnerByName", 1);
        let R = g;
        function h(C) {
          const [j, x] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              !j &&
                C?.length > 0 &&
                R.Get()
                  .LoadMultiplePartnerInfo(C)
                  .then(() => x(!0));
            }, [C, j]),
            j
          );
        }
        function K(C) {
          const [j, x] = l.useState(() => R.Get().GetPartnerInfo(C));
          return (
            l.useEffect(() => {
              !R.Get().BHasPartnerInfoLoad(C) && C > 0
                ? R.Get()
                    .LoadPartnerInfo(C)
                    .then((v) => x(v))
                : R.Get().BHasPartnerInfoLoad(C) &&
                  j?.partnerid != C &&
                  x(R.Get().GetPartnerInfo(C));
            }, [C, j]),
            [j]
          );
        }
        function X() {
          return { fnFindPartnerByName: R.Get().FindPartnerByName };
        }
        function A(C) {
          return R.Get().GetPartnerInfo(C);
        }
        function U(C) {
          return R.Get().LoadPartnerInfo(C);
        }
      },
      40772: (ae, H, n) => {
        "use strict";
        n.d(H, {
          Gl: () => R,
          N6: () => h,
          PQ: () => g,
          Z4: () => K,
          fI: () => X,
        });
        var p = n(41735),
          L = n.n(p),
          l = n(90626),
          f = n(20194),
          s = n(75233),
          t = n(72604),
          E = n(3166),
          M = n(20117),
          w = n(41635);
        class z {
          m_mapPartnerToContactInfo = new Map();
          m_mapPromisePartnerLoading = new Map();
          async FetchValvePartnerContacts(U) {
            const C =
                E.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
              j = { sessionid: (0, E.KC)(), strPartnerIDs: U.join(",") },
              x = await L().get(C, { params: j, withCredentials: !0 });
            return x?.status == 200 && x?.data.success == t.R
              ? (x.data.contacts.forEach((v) => {
                  this.m_mapPartnerToContactInfo.has(v.partnerid) ||
                    this.m_mapPartnerToContactInfo.set(v.partnerid, []),
                    this.m_mapPartnerToContactInfo.get(v.partnerid).push(v);
                }),
                x.data.contacts)
              : [];
          }
          async LoadValvePartnerContact(U) {
            return U
              ? this.m_mapPartnerToContactInfo.has(U)
                ? this.m_mapPartnerToContactInfo.get(U)
                : (this.m_mapPromisePartnerLoading.has(U) ||
                    this.m_mapPromisePartnerLoading.set(
                      U,
                      this.InternalLoadValvePartnerContact(U),
                    ),
                  this.m_mapPromisePartnerLoading.get(U))
              : [];
          }
          async InternalLoadValvePartnerContact(U) {
            return this.FetchValvePartnerContacts([U]);
          }
          async InternalLoadMultiplePartnerContact(U) {
            return this.FetchValvePartnerContacts(U);
          }
          GetPartnerContact(U) {
            return this.m_mapPartnerToContactInfo.get(U);
          }
          GetPartnerContactAccountsByFilter(U, C, j) {
            const x = this.m_mapPartnerToContactInfo.get(U);
            if (x?.length > 0) {
              const v = x
                .filter((I) => !I.appid || I.appid == C)
                .filter(
                  (I) =>
                    !j ||
                    j == "any" ||
                    (j == "business" && I.is_business_contact) ||
                    (j == "tech" && I.is_tech_contact),
                )
                .map((I) => new M.b2(I.steamid).GetAccountID());
              return w.Ew(v);
            }
            return [];
          }
          static s_Singleton;
          static Get() {
            return (
              z.s_Singleton ||
                ((z.s_Singleton = new z()), z.s_Singleton.Init()),
              z.s_Singleton
            );
          }
          Init() {
            const U = (0, E.Fd)(
              "partner_valve_contact_list",
              "application_config",
            );
            U &&
              U.forEach((C) => {
                this.m_mapPartnerToContactInfo.has(C.partnerid)
                  ? this.m_mapPartnerToContactInfo.get(C.partnerid).push(C)
                  : this.m_mapPartnerToContactInfo.set(C.partnerid, [C]);
              });
          }
        }
        function S(A) {
          return ["PartnerValveContactByPartnerID", A];
        }
        function T(A) {
          const { data: U, isLoading: C } = (0, f.I)({
            queryKey: S(A),
            queryFn: async () => z.Get().LoadValvePartnerContact(A),
          });
          return C ? null : U;
        }
        function g(A, U) {
          return A.prefetchQuery({
            queryKey: S(U),
            queryFn: async () => z.Get().LoadValvePartnerContact(U),
          });
        }
        function R(A) {
          return z.Get().GetPartnerContact(A);
        }
        function h(A, U, C) {
          return z.Get().GetPartnerContactAccountsByFilter(A, U, C);
        }
        function K(A, U, C) {
          const [j, x] = (0, l.useState)(null),
            v = T(A);
          return (
            (0, l.useEffect)(() => {
              v && x(z.Get().GetPartnerContactAccountsByFilter(A, U, C));
            }, [v, U, C, A]),
            j
          );
        }
        function X(A) {
          const U = (0, s.jE)();
          return (0, f.I)({
            queryKey: ["multiloadpartnerconatact", ...(A || [])],
            queryFn: async () => {
              const C = await z.Get().InternalLoadMultiplePartnerContact(A);
              return (
                A.forEach((j) => {
                  const x = C.filter((v) => v.partnerid == j);
                  U.setQueryData(S(j), x);
                }),
                C
              );
            },
            enabled: !!(A && A.length > 0),
          });
        }
      },
      25518: (ae, H, n) => {
        "use strict";
        n.d(H, { Kl: () => p, Yj: () => w, iH: () => L, zV: () => z });
        const p = [
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
          L = [
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
          l = [
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
          f = p.filter((S) => !l.includes(S)),
          s = null;
        function t(S) {
          const { bIncludeMedia: T = !1, bIncludeValveOnly: g = !1 } = S,
            R = new Set();
          return (
            T || l.forEach((h) => R.add(h)),
            g || s.forEach((h) => R.add(h)),
            p.filter((h) => !R.has(h))
          );
        }
        let E;
        function M(S) {
          return S
            ? S.map((T) => (T == "*" ? "\\*" : T)).join("|")
            : (E || (E = M(p)), E);
        }
        function w(S, T = null, g = " ") {
          const R = new RegExp(
            "\\[(" + M(T) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
            "gi",
          );
          return S.replace(R, g);
        }
        function z(S, T = null, g = "") {
          const R = "\\[\\/?(?:" + M(T) + "){1,}.*?]";
          return S.replace(new RegExp(R, "gi"), g);
        }
      },
      29630: (ae, H, n) => {
        "use strict";
        n.d(H, { zU: () => I, z5: () => j });
        var p = n(38340),
          L = n(9046),
          l = n(99412),
          f = n(72604),
          s = n(7742),
          t = n(72849),
          E = n(76559),
          M = n(71742),
          w = n(34592),
          z = n(51746),
          S = n(72609),
          T = n(7850),
          g = n(90626);
        function R(m, P) {
          return `${m}/${P}`;
        }
        const h = {},
          K = g.createContext(h);
        function X(m) {
          const { resolutions: P, children: y } = m;
          return jsx(K.Provider, { value: P, children: y });
        }
        function A() {
          return g.useContext(K);
        }
        const U = new RegExp(
          `${p.eg.replace(/[{}]/g, "\\$&")}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`,
          "gi",
        );
        function C(m) {
          const P = [],
            y = new Set();
          for (const b of m.matchAll(U)) {
            const O = Number.parseInt(b[1]),
              G = b[2],
              J = R(O, G);
            O > 0 &&
              !y.has(J) &&
              (y.add(J), P.push({ clanAccountID: O, hashAndExt: G }));
          }
          return P;
        }
        function j(m, P, y = 0) {
          const b = A();
          return v(m, P, y, b);
        }
        async function x(m, P, y = 0) {
          return v(m, P, y);
        }
        function v(m, P, y = 0, b) {
          if (!m || m.length == 0) return null;
          if (m?.startsWith(p.lw)) return I.ReplacementTokenToClanImageURL(m);
          if (m?.startsWith(p.eg)) {
            const O = I.GetBaseURL(),
              G = m.substring(p.eg.length + 1),
              J = parseInt(G.substring(0, G.indexOf("/"))),
              ee = G.substring(G.indexOf("/") + 1),
              Y = I.GenerateURLFromHashAndExt(J, ee);
            if (b?.[R(J, ee)] === !1) return Y;
            const u = I.GetLocalizedClanImageFileNames(ee, P).map(
              (d) => O + J + "/" + d + "?t=" + y,
            );
            return u.push(Y), u;
          }
          return m;
        }
        const I = {
          GetBaseURL() {
            return `${S.TS.CLAN_CDN_ASSET_URL}images/`;
          },
          GetBaseURLV2() {
            return `${S.TS.CLAN_CDN_ASSET_URL}locimages/`;
          },
          ReplacementTokenToClanImageURL(m) {
            return (
              (m = m.replace(p.lw, this.GetBaseURL())),
              m.replace("http://", "https://")
            );
          },
          ExtractHashFromBBCodeURL(m) {
            const y =
              /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
                m,
              );
            return y?.groups
              ? [y.groups.filename, parseInt(y.groups.clanid)]
              : [void 0, void 0];
          },
          GetExtensionString(m) {
            return (
              (m.file_type != null ? (0, z.EG)(m.file_type) : null) ?? ".jpg"
            );
          },
          GetHashAndExt(m) {
            return m ? m.image_hash + this.GetExtensionString(m) : null;
          },
          GetThumbHashAndExt(m) {
            return m ? m.thumbnail_hash + this.GetExtensionString(m) : null;
          },
          GetHashFromHashAndExt(m) {
            let P = m.substring(m.lastIndexOf("."));
            return m.substring(0, m.length - P.length);
          },
          GetExtStringFromHashAndExt(m) {
            return m.substring(m.lastIndexOf("."));
          },
          GetLocalizedClanImageFileNames(m, P) {
            if (P == null) return [];
            const y = this.GetHashFromHashAndExt(m),
              b = this.GetExtStringFromHashAndExt(m),
              O = [y + "/" + (0, l.LgB)(P) + b];
            return (
              P == l.Pn1 && O.push(y + "/" + (0, l.x6o)((0, l.LgB)(P)) + b), O
            );
          },
          GenerateURLFromHashAndExt(m, P, y = L.wI.full) {
            return this.GenerateURLFromHashAndExtAndLang(
              m,
              P,
              y,
              l.xPp,
              void 0,
            );
          },
          GenerateURLFromHashAndExtAndLang(m, P, y = L.wI.full, b, O) {
            m instanceof E.b && (m = m.GetAccountID());
            let G = this.GetBaseURL();
            const J = b != null && b != l.xPp;
            if (y == L.wI.full && !J) return G + m + "/" + P;
            {
              let ee = P.substring(P.lastIndexOf(".")),
                Y = P.substring(0, P.length - ee.length);
              return !J || b == l.Bhc || O != "localized_image_group"
                ? G + m + "/" + Y + y + ee
                : G + m + "/" + Y + "/" + (0, l.x6o)((0, l.LgB)(b)) + ee;
            }
          },
          GetHashAndExtFromURL(m) {
            let P = this.GetBaseURL();
            return !m?.startsWith(P) ||
              ((m = m.substring(P.length)), m.indexOf("/") == -1)
              ? null
              : ((m = m.substring(m.indexOf("/") + 1)), m);
          },
          GenerateEditableURLFromHashAndExt(m, P, y) {
            let b =
              S.TS.COMMUNITY_BASE_URL +
              "gid/" +
              m.ConvertTo64BitString() +
              "/showclanimage/?image_hash_and_ext=" +
              P;
            return y && (b += "&lang=" + y), b;
          },
          GetMimeType(m) {
            return (0, z.ab)(m);
          },
          async AsyncGetImageResolution(m, P, y, b, O) {
            const G = P + this.GetExtensionString({ file_type: y }),
              J = this.GenerateEditableURLFromHashAndExt(m, G);
            return await this.AsyncGetImageResolutionInternal(J, b, O);
          },
          async AsyncGetImageResolutionInternal(m, P, y) {
            const b = (0, s.x0)();
            let O = new Image();
            (O.crossOrigin = "anonymous"),
              (O.onerror = (Y) => {
                const u = { success: f.zi };
                y ||
                  ((u.err_msg =
                    "Load fail on url " +
                    m +
                    " with error: " +
                    (0, w.H)(Y).strErrorMsg),
                  console.error(u.err_msg)),
                  (u.success = f.zi),
                  b.resolve(u);
              }),
              (O.onload = () => {
                const Y = { success: f.zi };
                if (
                  ((Y.width = O.width),
                  (Y.height = O.height),
                  !(O.width > 0) || !(O.height > 0))
                ) {
                  (0, M.wT)(
                    !1,
                    "unexpected image resolution discovered for strURL: " + m,
                  ),
                    (Y.err_msg = "No resolution reported for url " + m),
                    b.resolve(Y);
                  return;
                }
                (Y.success = f.R), b.resolve(Y);
              }),
              (O.src = m),
              P.token.promise.catch(() => {
                (O.onload = () => {}),
                  (O.onerror = () => {}),
                  b.resolve({ success: f.e9 });
              });
            let G;
            const J = new Promise((Y, u) => {
              G = setTimeout(() => u(), 1e4);
            });
            let ee;
            try {
              ee = await Promise.race([J, b.promise]);
            } catch {
              ee = { success: f._3, err_msg: "We timed out processing images" };
            } finally {
              clearTimeout(G);
            }
            return ee;
          },
          BIsClanImageVideo(m) {
            return m.file_type == t.bg.nn || m.file_type == t.bg.pJ;
          },
        };
      },
      9046: (ae, H, n) => {
        "use strict";
        n.d(H, { pb: () => l, wI: () => L });
        class p {
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
        var L = ((f) => (
          (f.full = ""),
          (f.background_main = "_960x311"),
          (f.background_mini = "_480x156"),
          (f.capsule_main = "_400x225"),
          (f.spotlight_main = "_1054x230"),
          f
        ))(L || {});
        const l = [
          "localized_image_group",
          "link_capsule",
          "product_mobile_banner_override",
          "product_banner_override",
          "sale_section_title",
          "schedule_track_art",
          "localized_background_art",
        ];
      },
      50974: (ae, H, n) => {
        "use strict";
        n.d(H, {
          GU: () => l,
          Kd: () => M,
          bv: () => s,
          gt: () => f,
          mW: () => w,
          wv: () => z,
          yT: () => S,
        });
        const p = 4145017,
          L = 35143931,
          l = 39049601,
          f = 45479024,
          s = 41316928,
          t = 45784768,
          E = 4397053,
          M = 4,
          w = 20,
          z = 45559995,
          S = 45902273,
          T = [p, L, l, M, s];
      },
      54357: (ae, H, n) => {
        "use strict";
        n.d(H, { B: () => w });
        var p = n(7850),
          L = n(90626);
        function l(S) {
          const [T, g] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => g(!0));
            }, []),
            jsx(f.Provider, { value: T, children: S.children })
          );
        }
        const f = (0, L.createContext)(!1);
        function s() {
          return (0, L.useContext)(f);
        }
        const t = Intl.DateTimeFormat().resolvedOptions().timeZone,
          E =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((S) => S.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          M = E && decodeURIComponent(E);
        function w() {
          return s() ? t : (M ?? t);
        }
        function z() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${t};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        z();
      },
      64165: (ae, H, n) => {
        "use strict";
        n.d(H, { n: () => L, s: () => l });
        var p = n(50974);
        function L(f, s, t) {
          return f == p.wv
            ? `charts/topnewreleases/${s}`
            : f == p.yT
              ? `charts/bestofyear/${s}`
              : t
                ? `sale/${s}`
                : `curator/${f}/sale/${s}`;
        }
        function l(f, s) {
          return L(f, "", s).startsWith("curator/");
        }
      },
      16369: (ae, H, n) => {
        "use strict";
        n.d(H, { H: () => l });
        var p = n(99412),
          L = n(72609);
        const l = () => (L.TS.EUNIVERSE === p.Rv ? 2581 : 45267781);
      },
      69909: (ae, H, n) => {
        "use strict";
        n.d(H, {
          Lc: () => C,
          Mr: () => P,
          _t: () => x,
          ee: () => A,
          hh: () => z,
          mG: () => h,
          my: () => T,
          rF: () => I,
        });
        var p = n(16936),
          L = n(54357),
          l = n(20194),
          f = n(16369),
          s = n(36174),
          t = n(65946),
          E = n(92264),
          M = n(87937),
          w = n.n(M);
        const z = "America/Los_Angeles";
        function S(y, b) {
          return {
            queryKey: g(y, b),
            queryFn: () => (0, p.t3)(b),
            enabled: (0, f.H)() == y,
            staleTime: s.Kp.PerMinute * 10,
          };
        }
        function T(y, b) {
          return (0, l.I)(S(y, b));
        }
        const g = (y, b) => ["useMeetSteamGetAvailability", y, b];
        function R(y, b, O) {
          return {
            queryKey: K(y, b, O),
            queryFn: async () => {
              const G = await (0, p.vd)(b);
              return G ? JSON.parse(G) : {};
            },
            enabled: (0, f.H)() == y && !!O,
          };
        }
        function h(y, b, O) {
          return (0, l.I)(R(y, b, O));
        }
        const K = (y, b, O) => ["useMeetSteamGetRegistrationDetails", y, b, O];
        function X(y) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", y],
            queryFn: () => (0, p.Nc)(),
            enabled: !!y,
            staleTime: s.Kp.PerMinute * 10,
          };
        }
        function A(y) {
          return (0, l.I)(X(y));
        }
        function U(y, b) {
          return {
            queryKey: ["useMeetSteamQRCode", y, b],
            queryFn: () => (0, p.EI)(y, b),
            enabled: !!b && !0,
            staleTime: s.Kp.PerMinute * 10,
          };
        }
        function C(y, b) {
          return (0, l.I)(U(y, b)).data?.qrcode;
        }
        function j(y, b = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return y.location_type === "in_person"
            ? (y.in_person_time_zone ?? z)
            : b;
        }
        function x(y) {
          const b = (0, L.B)();
          return (0, t.q3)(() => ({
            rtime_start: y.rtime_start,
            rtime_end: y.rtime_end,
            sDisplayTimeZone: j(y, b),
          }));
        }
        function v(y, b) {
          const O = w().unix(y),
            J = w().unix(y).tz(b).utcOffset() - O.utcOffset();
          return new Date((y + J * 60) * 1e3);
        }
        function I(y, b) {
          const O = v(y, b),
            G = new Date();
          return O.getFullYear() == G.getFullYear()
            ? (0, E.$w)(O)
            : (0, E._9)(O);
        }
        function m(y, b) {
          const O = moment.unix(y),
            J = moment.unix(y).tz(b).utcOffset() - O.utcOffset();
          return LocalizeRTimeToHourAndMinutes(y + J * 60);
        }
        function P(y, b, O, G) {
          const J = w().unix(y),
            Y = w().unix(y).tz(O).utcOffset() - J.utcOffset(),
            u = w().unix(b),
            d = w().unix(b).tz(O),
            _ = d.utcOffset() - u.utcOffset();
          return (
            (0, E.Vx)(y + Y * 60, b + _ * 60, !0) +
            (G ? "" : " " + d.format("z"))
          );
        }
      },
      16936: (ae, H, n) => {
        "use strict";
        n.d(H, {
          t3: () => w,
          EI: () => g,
          Nc: () => T,
          vd: () => S,
          _V: () => z,
          kR: () => R,
        });
        var p = n(72609);
        const L = "meetsteam/availability",
          l = "meetsteam/registrations",
          f = "meetsteam/registrationdetails",
          s = "meetsteam/updateregistration",
          t = "meetsteam/registrantinfo",
          E = "meetsteam/attendance_qrcode";
        async function M(h, K) {
          const X = new URL(p.TS.STORE_BASE_URL + h);
          for (const [U, C] of Object.entries(K)) X.searchParams.set(U, C);
          const A = await fetch(X, { credentials: "include" });
          if (!A.ok) throw new Error(`${X} answered ${A.status}`);
          return await A.json();
        }
        async function w(h) {
          return (await M(L, { gid: h })).availability ?? [];
        }
        async function z(h) {
          return (await M(l, { gid: h })).registrations ?? [];
        }
        async function S(h) {
          return (await M(f, { gid: h })).strJSONData ?? "";
        }
        async function T() {
          return (
            (await M(t, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function g(h, K) {
          return await M(E, { gid: h, accountid: String(K) });
        }
        async function R(h) {
          const K = p.TS.STORE_BASE_URL + s,
            X = new URLSearchParams({
              gid: h.gid,
              group_id: String(h.group_id),
              session_id: String(h.session_id),
              guest_count: String(h.guest_count),
              jsondata: h.jsondata,
              skip_email: h.skip_email ? "1" : "0",
            }),
            A = await fetch(K, {
              method: "POST",
              credentials: "include",
              body: X,
            });
          if (!A.ok) throw new Error(`${K} answered ${A.status}`);
          return (await A.json()).success;
        }
      },
      34041: (ae, H, n) => {
        "use strict";
        n.d(H, {
          Dp: () => Pe,
          wz: () => ge,
          qX: () => ce,
          cD: () => N,
          yX: () => ue,
          Q5: () => p,
          Ji: () => l,
          Xs: () => L,
          AH: () => Qe,
          zF: () => Ye,
        });
        var p = {};
        n.r(p), n.d(p, { qZ: () => M });
        var L = {};
        n.r(L), n.d(L, { bV: () => lt });
        var l = {};
        n.r(l), n.d(l, { mP: () => $e });
        var f = n(80613),
          s = n.n(f),
          t = n(75245),
          E = n(35038);
        const M = 0,
          w = 50,
          z = 51,
          S = 52,
          T = 53,
          g = 54,
          R = 55,
          h = 56,
          K = 57,
          X = 58,
          A = 59,
          U = 60,
          C = 61,
          j = 62,
          x = 63,
          v = 64,
          I = 65,
          m = 66,
          P = 67,
          y = 68,
          b = 69,
          O = 70,
          G = 71,
          J = 72,
          ee = 73,
          Y = 74,
          u = 75,
          d = 76,
          _ = 77,
          B = 78,
          k = 79,
          Q = 80,
          F = 81,
          Z = 82,
          re = 83,
          ne = 90,
          V = 91,
          q = 92,
          se = 93,
          ie = 94,
          je = 95,
          Ae = 96,
          ht = 97,
          ft = 98,
          Je = 99,
          pt = 100,
          yt = 101,
          Xe = 110,
          We = 111,
          vt = 112,
          Et = 113,
          Ue = 114,
          Ce = 115,
          Ge = 116,
          ke = 117,
          Ze = 118,
          Ne = 119,
          Bt = 120,
          bt = 130,
          It = 131,
          Mt = 132,
          Tt = 133,
          Ve = 134,
          Fe = 135,
          Ot = 136,
          qe = 137,
          He = 138,
          et = 139,
          tt = 140,
          Pt = 150,
          rt = 151,
          Dt = 152,
          St = 153,
          at = 154,
          Lt = 155,
          Re = 156,
          jt = 157,
          wt = 158,
          Ke = 159,
          nt = 160,
          st = 161,
          zt = 162,
          it = 163,
          At = 0,
          ot = 1,
          xt = 2,
          lt = 3,
          ct = 0,
          ut = 1,
          dt = 2,
          mt = 3,
          $e = 4,
          gt = 5,
          te = 6,
          _t = 7;
        function Ft(Te) {
          return "unknown ESteamAwardVoteCategoryID ( " + Te + " )";
        }
        function c(Te) {
          return "unknown EVoteDefinitionFlag ( " + Te + " )";
        }
        function r(Te) {
          return "unknown ESteamAwardsNominationSource ( " + Te + " )";
        }
        class a extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              a.prototype.voteid || t.Sg(a.M()),
              f.Message.initialize(this, e, 0, -1, [5, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    active: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    start_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_discounts: { n: 5, c: o, r: !0, q: !0 },
                    grouped_vote_options: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    groups: { n: 7, c: D, r: !0, q: !0 },
                    internal_name: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localization: { n: 9, c: W },
                    reveal_time: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    release_date_min: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    winner_appid: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    flag: { n: 13, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    release_date_max: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    item_type: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = t.w0(a.M())), a.sm_mbf;
          }
          toObject(e = !1) {
            return a.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(a.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(a.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new a();
            return a.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(a.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(a.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition";
          }
        }
        class o extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.appid || t.Sg(o.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    discount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = t.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(o.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new o();
            return o.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(o.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(o.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_AppDefinition";
          }
        }
        class D extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.groupid || t.Sg(D.M()),
              f.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    groupid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    group_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    app_discounts: { n: 3, c: o, r: !0, q: !0 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(D.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new D();
            return D.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(D.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(D.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_GroupDefinition";
          }
        }
        class W extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.title || t.Sg(W.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    title_linebreak: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title_award: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    award_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(W.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new W();
            return W.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(W.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(W.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_VoteDefinition_Localization";
          }
        }
        class N extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.language || t.Sg(N.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sale_appid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(N.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new N();
            return N.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(N.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(N.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Request";
          }
        }
        class oe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.votes || t.Sg(oe.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    votes: { n: 1, c: a, r: !0, q: !0 },
                    labor_of_love_winners: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new oe();
            return oe.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetVoteDefinitions_Response";
          }
        }
        class le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.voteid || t.Sg(le.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    voteid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    communityitemid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(le.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new le();
            return le.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(le.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(le.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamAwardsUserVote";
          }
        }
        class ce extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.sale_appid || t.Sg(ce.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    sale_appid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ce.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new ce();
            return ce.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ce.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ce.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Request";
          }
        }
        class _e extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.user_votes || t.Sg(_e.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: { user_votes: { n: 1, c: le, r: !0, q: !0 } },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(_e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new _e();
            return _e.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(_e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(_e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserVotes_Response";
          }
        }
        class ue extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.voteid || t.Sg(ue.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    voteid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    sale_appid: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ue.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new ue();
            return ue.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ue.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ue.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Request";
          }
        }
        class he extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.user_votes || t.Sg(he.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { user_votes: { n: 1, c: le, r: !0, q: !0 } },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(he.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new he();
            return he.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(he.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(he.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetVote_Response";
          }
        }
        class de extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.category_id || t.Sg(de.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    last_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(de.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new de();
            return de.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(de.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(de.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwardsNomination";
          }
        }
        class Pe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Pe();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new Pe();
            return Pe.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Request";
          }
        }
        class me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.nominations || t.Sg(me.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: { nominations: { n: 1, c: de, r: !0, q: !0 } },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new me();
            return me.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetUserNominations_Response";
          }
        }
        class fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.steamid || t.Sg(fe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    code: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new fe();
            return fe.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetOtherUserNominations_Request";
          }
        }
        class ge extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.category_id || t.Sg(ge.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    nominated_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    source: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new ge();
            return ge.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Request";
          }
        }
        class pe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.nominations || t.Sg(pe.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { nominations: { n: 1, c: de, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new pe();
            return pe.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_Nominate_Response";
          }
        }
        class ye extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.category_id || t.Sg(ye.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    category_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new ye();
            return ye.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Request";
          }
        }
        class ve extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.played_app || t.Sg(ve.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    played_app: { n: 1, c: Ee, r: !0, q: !0 },
                    suggested_events: { n: 2, c: Be, r: !0, q: !0 },
                    suggested_apps: { n: 3, c: be, r: !0, q: !0 },
                    debug_query: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new ve();
            return ve.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response";
          }
        }
        class Ee extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.appid || t.Sg(Ee.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    playtime: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new Ee();
            return Ee.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
          }
        }
        class Be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.clanid || t.Sg(Be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    clanid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    event_gid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Be.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new Be();
            return Be.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
          }
        }
        class be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.appid || t.Sg(be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(be.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new be();
            return be.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
          }
        }
        class Ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.generate_new || t.Sg(Ie.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    generate_new: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new Ie();
            return Ie.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Request";
          }
        }
        class Me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.code || t.Sg(Me.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    code: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Me.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              $ = new Me();
            return Me.deserializeBinaryFromReader($, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Me.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Me.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamAwards_GetNominationShareLink_Response";
          }
        }
        var Ye;
        ((Te) => {
          function e(we, ze, Oe) {
            return we.SendMsg(
              "StoreSales.GetVoteDefinitions#1",
              (0, E.I8)(N, ze, Oe),
              oe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Te.GetVoteDefinitions = e;
          function i(we, ze, Oe) {
            return we.SendMsg(
              "StoreSales.SetVote#1",
              (0, E.I8)(ue, ze, Oe),
              he,
              { ePrivilege: 1 },
            );
          }
          Te.SetVote = i;
          function $(we, ze, Oe) {
            return we.SendMsg(
              "StoreSales.GetUserVotes#1",
              (0, E.I8)(ce, ze, Oe),
              _e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Te.GetUserVotes = $;
        })(Ye || (Ye = {}));
        var Qe;
        ((Te) => {
          function e(Oe, De, Se) {
            return Oe.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, E.I8)(Pe, De, Se),
              me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Te.GetUserNominations = e;
          function i(Oe, De, Se) {
            return Oe.SendMsg(
              "SteamAwards.GetOtherUserNominations#1",
              (0, E.I8)(fe, De, Se),
              me,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          Te.GetOtherUserNominations = i;
          function $(Oe, De, Se) {
            return Oe.SendMsg(
              "SteamAwards.Nominate#1",
              (0, E.I8)(ge, De, Se),
              pe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Te.Nominate = $;
          function we(Oe, De, Se) {
            return Oe.SendMsg(
              "SteamAwards.GetNominationRecommendations#1",
              (0, E.I8)(ye, De, Se),
              ve,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Te.GetNominationRecommendations = we;
          function ze(Oe, De, Se) {
            return Oe.SendMsg(
              "SteamAwards.GetNominationShareLink#1",
              (0, E.I8)(Ie, De, Se),
              Me,
              { ePrivilege: 1 },
            );
          }
          Te.GetNominationShareLink = ze;
        })(Qe || (Qe = {}));
      },
      39829: (ae, H, n) => {
        "use strict";
        n.d(H, { Wn: () => E, a4: () => T });
        var p = n(33902),
          L = n(90626),
          l = n(73259);
        const f = "100% 0px 100% 0px",
          s = "SaleSection_",
          t = "tab",
          E = 940,
          M = 1920;
        function w() {
          return window.innerWidth ?? M;
        }
        function z() {
          return w() >= E;
        }
        function S() {
          const h = (0, p.d)(),
            [K, X] = (0, L.useState)(() => w());
          return (
            (0, L.useEffect)(() => {
              const A = () => {
                X(w());
              };
              return (
                A(),
                window.addEventListener("resize", A),
                () => window.removeEventListener("resize", A)
              );
            }, []),
            K
          );
        }
        function T(h = E) {
          return S() >= h;
        }
        function g(h) {
          const K = S(),
            X = K >= E,
            A = GetSectionTypeLayoutSizes(h);
          return X
            ? { nMaxCapsulesPerRow: A.nMaxItemsPerRow, bScreenIsWide: X }
            : {
                nMaxCapsulesPerRow: Math.min(
                  Math.max(Math.floor(K / A.nItemMinimumWidth), 1),
                  A.nMaxItemsPerRow,
                ),
                bScreenIsWide: X,
              };
        }
        function R(h) {
          const K = GetSectionTypeLayoutSizes(h);
          return z()
            ? K.nMaxItemsPerRow
            : Math.min(
                Math.max(
                  Math.floor(window.innerWidth / K.nItemMinimumWidth),
                  1,
                ),
                K.nMaxItemsPerRow,
              );
        }
      },
      38340: (ae, H, n) => {
        "use strict";
        n.d(H, { eg: () => L, lw: () => p });
        const p = "{STEAM_CLAN_IMAGE}",
          L = "{STEAM_CLAN_LOC_IMAGE}",
          l = "{STEAM_APP_IMAGE}";
      },
      73259: (ae, H, n) => {
        "use strict";
        n.d(H, {
          CU: () => He,
          ye: () => Fe,
          DJ: () => Ke,
          G6: () => at,
          zv: () => We,
          IS: () => ke,
          GE: () => Ce,
          yX: () => Ge,
          w: () => Re,
          EE: () => Ue,
          lh: () => _t,
          Pm: () => et,
          qR: () => Ve,
          dm: () => st,
          DU: () => se,
          cB: () => nt,
        });
        var p = n(25518),
          L = n(32093),
          l = n(99412),
          f = n(34041),
          s = n(14947);
        const t = null,
          E = {
            bBroadcastEnabled: !1,
            broadcastChatSetting: "hide",
            default_broadcast_title: "#Broadcast_default_title_dev",
            localized_broadcast_title: new Array(l.bP9),
            localized_broadcast_left_image: new Array(l.bP9),
            localized_broadcast_right_image: new Array(l.bP9),
            broadcast_whitelist: [],
          };
        var M = n(76559),
          w = n(29630),
          z = n(9046),
          S = n(50974),
          T = n(59432),
          g = n(64165),
          R = n(71742),
          h = n(18210),
          K = n(13854),
          X = n(71684),
          A = n(48473),
          U = n(36174),
          C = n(27066),
          j = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          v = (c, r, a, o) => {
            for (
              var D = o > 1 ? void 0 : o ? x(r, a) : r, W = c.length - 1, N;
              W >= 0;
              W--
            )
              (N = c[W]) && (D = (o ? N(r, a, D) : N(D)) || D);
            return o && D && j(r, a, D), D;
          };
        const I = null,
          m = { bScheduleEnabled: !1, scheduleEntries: [] },
          P = {
            localized_name: [],
            type: "broadcast",
            delta_from_event_start_seconds: 0,
            duration_seconds: 3600,
          };
        class y {
          m_eventModel;
          constructor(r) {
            this.m_eventModel = r;
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
        class b {
          m_eventModel;
          m_entry;
          constructor(r, a) {
            (this.m_eventModel = r), (this.m_entry = a);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }
        v([C.o], b.prototype, "GetEventStartTime", 1);
        const O = 1e4,
          G = 99999;
        function J() {
          return Math.floor(O + Math.random() * (G - O + 1));
        }
        var ee = n(18994),
          Y = n(72609),
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          _ = (c, r, a, o) => {
            for (
              var D = o > 1 ? void 0 : o ? d(r, a) : r, W = c.length - 1, N;
              W >= 0;
              W--
            )
              (N = c[W]) && (D = (o ? N(r, a, D) : N(D)) || D);
            return o && D && u(r, a, D), D;
          };
        const B = [
          l.u0,
          l.zeJ,
          l.Fa4,
          l.Aav,
          l.SRb,
          l.zA,
          l.y6,
          l.hGl,
          l.WNR,
          l.pIh,
          l.izQ,
          l.uYK,
          l.f4X,
          l.zcX,
          l.yhO,
        ];
        function k(c) {
          return (
            B.some((r) => r == c.GetEventType()) &&
            !c.BHasTag("steam_award_nomination_request") &&
            !c.BHasTag("curator")
          );
        }
        const Q = [l.HRy, l.LOv, l.HFK];
        function F(c) {
          return !Q.some((r) => r == c.GetEventType()) && !c.BHasTag("curator");
        }
        const Z = [l.Fwr, l.HFK];
        function re(c) {
          return !Z.some((r) => r == c.GetEventType()) && !c.BHasTag("curator");
        }
        const ne = [
            l.L0X,
            l.KDJ,
            l.HRy,
            l.C$4,
            l.zA,
            l.y6,
            l.hGl,
            l.pIh,
            l.izQ,
            l.I5b,
            l.LOv,
            l.WNR,
          ],
          V = new Set(ne);
        function q(c) {
          return !!c.endTime && V.has(c.type);
        }
        const se = 593110,
          ie = 766,
          je = 221410,
          Ae = 1675200,
          ht = 4165890,
          ft = [se, ie, je],
          Je = [l.Fwr, l.HFK];
        function pt(c) {
          return (
            !Je.some((r) => r == c.GetEventType()) && !c.BHasTag("curator")
          );
        }
        function yt(c, r = GetEventRTimeNow()) {
          const a = 60 * Seconds.PerDay;
          return (
            c.BIsVisibleEvent(r) &&
            c.BIsOGGEvent() &&
            (c.rtime32_last_modified ?? 0) > r - a &&
            !Xe(c)
          );
        }
        function Xe(c) {
          return (
            c.BHasTag("mod_reviewed") && !c.BHasTag("mod_require_rereview")
          );
        }
        var We = ((c) => (
          (c[(c.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (c[(c.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (c[(c.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (c[(c.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted"),
          c
        ))(We || {});
        function vt(c) {
          switch (c) {
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
        const Et = "bordered";
        var Ue = ((c) => (
            (c[(c.k_EStoreFilterClauseTypeOr = 0)] =
              "k_EStoreFilterClauseTypeOr"),
            (c[(c.k_EStoreFilterClauseTypeAnd = 1)] =
              "k_EStoreFilterClauseTypeAnd"),
            (c[(c.k_EStoreFilterClauseTypeStoreTag = 2)] =
              "k_EStoreFilterClauseTypeStoreTag"),
            (c[(c.k_EStoreFilterClauseTypeFeatureTag = 3)] =
              "k_EStoreFilterClauseTypeFeatureTag"),
            (c[(c.k_EStoreFilterClauseTypeLanguage = 4)] =
              "k_EStoreFilterClauseTypeLanguage"),
            (c[(c.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
              "k_EStoreFilterClauseTypeContentDescriptor"),
            (c[(c.k_EStoreFilterClauseTypePrice = 6)] =
              "k_EStoreFilterClauseTypePrice"),
            (c[(c.k_EStoreFilterClauseTypeAppType = 7)] =
              "k_EStoreFilterClauseTypeAppType"),
            (c[(c.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
              "k_EStoreFilterClauseTypeOptInRegistrationTag"),
            c
          ))(Ue || {}),
          Ce = ((c) => (
            (c[(c.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (c[(c.k_ELanguage = 1)] = "k_ELanguage"),
            (c[(c.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (c[(c.k_EUserPreference = 3)] = "k_EUserPreference"),
            (c[(c.k_EPrice = 4)] = "k_EPrice"),
            (c[(c.k_EAppType = 5)] = "k_EAppType"),
            c
          ))(Ce || {}),
          Ge = ((c) => (
            (c[(c.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (c[(c.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (c[(c.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems"),
            c
          ))(Ge || {}),
          ke = ((c) => (
            (c[(c.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (c[(c.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (c[(c.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually"),
            c
          ))(ke || {}),
          Ze = ((c) => (
            (c.Steam = "Steam"),
            (c.Facebook = "Facebook"),
            (c.Twitter = "Twitter"),
            (c.Reddit = "Reddit"),
            c
          ))(Ze || {}),
          Ne = ((c) => (
            (c.Summary = "summary"),
            (c.SummaryLargeImage = "summary_large_image"),
            c
          ))(Ne || {});
        const Bt = null;
        function bt(c) {
          return c && !!c.show_as_carousel && !c.enable_faceted_browsing;
        }
        function It(c) {
          return c.carousel_rows || 1;
        }
        function Mt(c) {
          return c.cap_item_count || 0;
        }
        function Tt(c) {
          return c.cap_section_row_count && c.cap_section_row_count > 0
            ? c.cap_section_row_count
            : c.section_type == "trailercarousel"
              ? 1
              : c.cap_section_content
                ? 4
                : 0;
        }
        function Ve(c) {
          return c?.store_filter ? JSON.stringify(c.store_filter) : void 0;
        }
        function Fe(c) {
          switch (c) {
            case "items":
            case "trailercarousel":
            case "crosspromotesalepage":
            case "creator_list":
            case "calendar":
              return !0;
          }
          return !1;
        }
        function Ot(c) {
          switch (c) {
            case "items":
            case "crosspromotesalepage":
            case "creator_list":
              return !0;
          }
          return !1;
        }
        function qe(c) {
          switch (c) {
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
        function He(c, r = !1) {
          return !c || !qe(c.section_type)
            ? !1
            : r
              ? c.sale_tag_filter?.clauses?.length
                ? !0
                : !!c.smart_section
              : !!c.smart_section && c.smart_section_type != null;
        }
        function et(c) {
          return He(c) ? c?.smart_section_type : void 0;
        }
        function tt(c) {
          return (
            (c.jsondata.sale_ml_recommender_delay_hours &&
              (c.startTime ?? 0) +
                c.jsondata.sale_ml_recommender_delay_hours * Seconds.PerHour -
                new Date().getTime() / 1e3) ??
            0
          );
        }
        const Pt = 2.5;
        function rt(c, r, a) {
          return !c.BIsNextFest() || !Fe(r.section_type)
            ? !1
            : a == EExplorationMode.Random
              ? !0
              : tt(c) > 0;
        }
        function Dt(c, r, a, o) {
          if (!r.next_fest_exploration_visibility || !c.BIsNextFest())
            return !1;
          switch (r.next_fest_exploration_visibility) {
            case "show-only-personalized":
              return o != EExplorationMode.Personalized;
            case "show-only-personalized-available":
              return !a;
            case "show-only-personalized-unavailable":
              return a;
          }
          return !1;
        }
        function St(c, r, a) {
          return !!(r.use_random_order || rt(c, r, a));
        }
        const at = {
            capsules: [],
            events: [],
            links: [],
            localized_label: new Array(l.bP9),
            localized_label_image: new Array(l.bP9),
            default_label: "#Sale_default_label",
            section_type: "unselected_empty",
          },
          Lt = { internal_type: "subscription_pricing" };
        var Re = ((c) => (
          (c[(c.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (c[(c.k_EContentHub = 1)] = "k_EContentHub"),
          c
        ))(Re || {});
        function jt(c) {
          return {
            arrowFill: c?.sale_carousel_arrow_color,
            arrowStyle: c?.sale_carousel_arrow_style,
            breadcrumbActiveColor: c?.sale_carousel_active_breadcrumb_color,
            breadcrumbColor: c?.sale_carousel_breadcrumb_color,
            breadcrumbStyle: c?.sale_carousel_breadcrumb_style,
          };
        }
        function wt(c, r, a) {
          (r.library_spotlight = void 0),
            r.email_setting &&
              ((r.email_setting.locked = void 0),
              (r.email_setting.force_feature_id = void 0)),
            (r.steam_award_category_suggestion = void 0),
            (r.steam_award_category_voteids = void 0),
            (r.action_end_time = void 0),
            (r.ownership_requirement_info = void 0),
            (r.sale_use_subscription_layout = void 0),
            (r.app_right_requirement_info = void 0),
            (r.clone_from_event_gid = a),
            (r.clone_from_sale_enabled = r.bSaleEnabled),
            (r.bSaleEnabled = c == k_EClanEventType_CreatorHome),
            (r.sale_discount_event_id = void 0),
            (r.valve_access_log = []),
            (r.bInvisibleGameOptIn = void 0),
            (r.rt_migrated_time = void 0),
            (r.optin_tagid || r.sale_opt_in_page_name) &&
              ((r.tagged_items = void 0),
              (r.tagged_item_filter = void 0),
              (r.auto_item_tags = void 0)),
            (r.optin_prune_tagid = void 0),
            (r.optin_tagid = void 0),
            (r.sale_opt_in_page_name = void 0),
            (r.prune_list_optin_name = void 0),
            (r.optin_only = void 0),
            (r.child_demo_appid_for_repost = void 0),
            (r.sale_vanity_id = void 0),
            (r.sale_update_landing_page_vanity_id = void 0),
            (r.automatically_push_updated_source = void 0),
            (r.country_restriction = void 0);
        }
        const Ke = {
            localized_subtitle: new Array(l.bP9),
            localized_summary: new Array(l.bP9),
            localized_title_image: new Array(l.bP9),
            localized_capsule_image: new Array(l.bP9),
            bSaleEnabled: !1,
            sale_show_creator: !1,
            sale_sections: [],
            sale_browsemore_text: "",
            sale_browsemore_url: "",
            sale_browsemore_color: "",
            sale_browsemore_bgcolor: "",
            localized_sale_header: new Array(l.bP9),
            localized_sale_overlay: new Array(l.bP9),
            localized_sale_product_banner: new Array(l.bP9),
            localized_sale_product_mobile_banner: new Array(l.bP9),
            localized_sale_logo: new Array(l.bP9),
            sale_font: "",
            sale_background_color: "",
            sale_header_offset: 530,
            referenced_appids: [],
            ...E,
            ...m,
          },
          nt = "old_announce_",
          st = 80,
          zt = 120,
          it = 180,
          At = "hide_from_events_and_discount",
          ot = [
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
          xt = null,
          lt = null,
          ct = [l.HRy, l.LOv, l.HFK],
          ut = [
            l.L0X,
            l.KDJ,
            l.HRy,
            l.C$4,
            l.zA,
            l.y6,
            l.hGl,
            l.pIh,
            l.izQ,
            l.I5b,
            l.LOv,
            l.WNR,
          ],
          dt = [L.TU.k_ESteamRealmGlobal],
          mt = [L.TU.k_ESteamRealmChina],
          $e = [L.TU.k_ESteamRealmGlobal, L.TU.k_ESteamRealmChina],
          gt = [],
          te = class Le {
            constructor() {
              (0, s.Gn)(this);
            }
            GID = void 0;
            AnnouncementGID = void 0;
            clanSteamID = new M.b();
            forumTopicGID = void 0;
            clanSteamIDOriginal = void 0;
            type = l.DRF;
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
            jsondata = Ke;
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
            static FromJSON(r) {
              let a = new Le(),
                o = JSON.parse(r);
              return (
                Object.assign(a, o),
                (a.name = new Map(o.name)),
                (a.description = new Map(o.description)),
                (a.vecTags = [...(o.vecTags ?? o.tags ?? [])]),
                (a.clanSteamID = new M.b(o.clanSteamID)),
                (0, R.wT)(
                  a.clanSteamID && a.clanSteamID.BIsValid(),
                  "Invalid Clan SteamID: " +
                    a.clanSteamID.ConvertTo64BitString(),
                ),
                o.broadcaster &&
                  ((a.broadcaster = new M.b(o.broadcaster)),
                  (0, R.wT)(
                    a.broadcaster && a.broadcaster.BIsValid(),
                    "Invalid Broadcast SteamID: " +
                      a.broadcaster.ConvertTo64BitString(),
                  )),
                a
              );
            }
            static FromCClanEventData(r, a) {
              let o = new Le();
              (o.GID = r.gid),
                (o.clanSteamID = new M.b(r.clan_steamid)),
                o.name.set(a, r.event_name ?? ""),
                (o.type = r.event_type),
                (o.appid = r.appid ?? 0),
                (o.startTime = r.rtime32_start_time),
                (o.endTime = r.rtime32_end_time),
                (o.nCommentCount = r.comment_count ?? 0),
                (o.creator_steamid = r.creator_steamid),
                (o.last_update_steamid = r.last_update_steamid),
                (o.jsondata = JSON.parse(r.jsondata ?? "{}")),
                (o.rtime32_last_local_modification = r.rtime32_last_modified),
                r.published
                  ? r.hidden
                    ? (o.visibility_state = r.unlisted ? 3 : 1)
                    : (o.visibility_state = 2)
                  : (o.visibility_state = 0),
                (o.createTime = r.rtime_created),
                (o.m_nBuildID = r.build_id),
                (o.m_strBuildBranch = r.build_branch),
                (o.visibilityStartTime = r.rtime32_visibility_start),
                (o.visibilityEndTime = r.rtime32_visibility_end),
                (o.rtime32_moderator_reviewed = r.rtime_mod_reviewed),
                (o.featured_app_tagid = r.featured_app_tagid),
                r.broadcaster_accountid &&
                  (o.broadcaster = M.b.InitFromAccountID(
                    r.broadcaster_accountid,
                  )),
                (o.AnnouncementGID = r.announcement_body?.gid ?? "0");
              const D = r.clan_steamid_original;
              return (
                D
                  ? (o.clanSteamIDOriginal = new M.b(D))
                  : r.announcement_body?.clanid &&
                    (o.clanSteamIDOriginal = M.b.InitFromClanID(
                      Number(r.announcement_body.clanid),
                    )),
                (o.postTime = r.announcement_body?.posttime),
                (o.forumTopicGID = r.forum_topic_id),
                o.name.set(a, r.announcement_body?.headline ?? ""),
                o.description.set(a, r.announcement_body?.body ?? ""),
                (o.nCommentCount = r.comment_count ?? 0),
                (o.vecTags = [...(r.announcement_body?.tags ?? [])]),
                (o.forumTopicGID = r.announcement_body?.forum_topic_id),
                (o.nVotesUp = r.announcement_body?.voteupcount ?? 0),
                (o.nVotesDown = r.announcement_body?.votedowncount ?? 0),
                o
              );
            }
            toJSON(r) {
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
            clone(r = !1) {
              let a = new Le();
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
                this.name.forEach((o, D) => {
                  a.name.set(D, o);
                }),
                (a.description = new Map()),
                this.description.forEach((o, D) => {
                  a.description.set(D, o);
                }),
                (a.timestamp_loc_updated = new Map()),
                this.timestamp_loc_updated.forEach((o, D) => {
                  a.timestamp_loc_updated.set(D, o);
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
                  ? new M.b(this.broadcaster.ConvertTo64BitString())
                  : void 0),
                (a.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
                (a.vecTags = new Array()),
                r
                  ? ((a.m_nBuildID = this.m_nBuildID),
                    (a.m_strBuildBranch = this.m_strBuildBranch),
                    this.vecTags.forEach((o) => a.vecTags.push(o)))
                  : this.vecTags.forEach((o) => {
                      ot.includes(o) && a.vecTags.push(o);
                    }),
                a.jsondata.email_setting)
              ) {
                let o = 100;
                for (let D of a.jsondata.email_setting.sections)
                  D.unique_id || ((D.unique_id = `email_section_${o}`), o++);
              }
              return a;
            }
            GetLastReferencedSaleDayFromCapsules(r, a) {
              let o = a;
              return (
                r?.forEach((D) => {
                  D.visibility_index !== void 0 &&
                    (o =
                      o === void 0
                        ? D.visibility_index
                        : Math.max(o, D.visibility_index));
                }),
                o
              );
            }
            GetLastReferencedSaleDay() {
              let r;
              for (const a of this.GetSaleSections())
                if (a.section_type === "tabs") {
                  if ((a.tabs?.length ?? 0) > 0)
                    for (const o of a.tabs ?? [])
                      r = this.GetLastReferencedSaleDayFromCapsules(
                        o.capsules,
                        r,
                      );
                } else
                  r = this.GetLastReferencedSaleDayFromCapsules(a.capsules, r);
              return (
                (this.jsondata.sale_num_headers ?? 0) > 1 &&
                  (r == null || r < (this.jsondata.sale_num_headers ?? 0)) &&
                  (r = this.jsondata.sale_num_headers),
                r
              );
            }
            GetDayIndexFromEventStart(r = (0, T.Gw)()) {
              let a = 0;
              this.startTime !== void 0 &&
                r >= this.startTime &&
                (a = Math.floor((r - this.startTime) / (3600 * 24))),
                this.m_overrideCurrentDay !== void 0 &&
                  this.m_overrideCurrentDay >= 0 &&
                  (a = this.m_overrideCurrentDay);
              const o = this.GetLastReferencedSaleDay() || 0;
              return Math.min(a, o);
            }
            GetNameWithFallback(r) {
              const a = h.A0.GetELanguageFallback(r);
              return this.name.get(r) || this.name.get(a);
            }
            BInRealmGlobal() {
              return !this.BHasTag("disable_steam_global");
            }
            BInRealmChina() {
              return this.BHasTag("enable_steam_china");
            }
            BIsLanguageValidForRealms(r) {
              return !!(
                (this.BInRealmGlobal() &&
                  h.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmGlobal)) ||
                (this.BInRealmChina() &&
                  h.A0.IsELanguageValidInRealm(r, L.TU.k_ESteamRealmChina))
              );
            }
            GetImgArray(r) {
              let a = [];
              if (
                ((r === "background" || r == "localized_title_image") &&
                  (a = this.jsondata.localized_title_image),
                r === "capsule")
              )
                a = this.jsondata.localized_capsule_image;
              else if (r === "spotlight")
                a = this.jsondata.localized_spotlight_image;
              else if (r === "email_full" || r === "email_centered")
                a = this.jsondata.email_setting
                  ? this.jsondata.email_setting.sections[0].localized_image
                  : [];
              else if (r === "broadcast_left")
                a = this.jsondata.localized_broadcast_left_image;
              else if (r === "broadcast_right")
                a = this.jsondata.localized_broadcast_right_image;
              else if (r === "sale_header")
                if ((this.jsondata.sale_num_headers ?? 0) > 1) {
                  const o = Math.min(
                    (this.jsondata.sale_num_headers ?? 0) - 1,
                    this.GetDayIndexFromEventStart(),
                  );
                  a = this.jsondata.localized_per_day_sales_header?.[o];
                } else a = this.jsondata.localized_sale_header;
              else
                r === "sale_logo"
                  ? (a = this.jsondata.localized_sale_logo)
                  : r === "sale_overlay"
                    ? (a = this.jsondata.localized_sale_overlay)
                    : z.pb.includes(r)
                      ? (a = this.fnGetLocalizedGroupImages?.())
                      : r === "product_banner"
                        ? (a = this.jsondata.localized_sale_product_banner)
                        : r === "product_mobile_banner"
                          ? (a =
                              this.jsondata
                                .localized_sale_product_mobile_banner)
                          : r === "bestofyear_banner"
                            ? (a = this.jsondata.localized_bestofyear_banner)
                            : r === "bestofyear_banner_mobile"
                              ? (a =
                                  this.jsondata
                                    .localized_bestofyear_banner_mobile)
                              : r === "localized_store_app_spotlight"
                                ? (a =
                                    this.jsondata.localized_store_app_spotlight)
                                : r ===
                                    "localized_store_app_spotlight_mobile" &&
                                  (a =
                                    this.jsondata
                                      .localized_store_app_spotlight_mobile);
              return a;
            }
            GetImageURL(r, a = l.Bhc, o = z.wI.full) {
              const D = this.GetImgArray(r),
                W = D && D.length > a && D[a] != null;
              return W && D[a]?.startsWith("http")
                ? D[a]
                : W
                  ? w.zU.GenerateURLFromHashAndExt(
                      this.clanSteamID,
                      D[a] ?? "",
                      o,
                    )
                  : void 0;
            }
            GetImageHash(r, a = l.Bhc) {
              let o = this.GetImgArray(r);
              return o && o.length > a && o[a] != null
                ? o[a].substr(0, o[a].length - 4)
                : null;
            }
            GetImageHashAndExt(r, a = l.Bhc) {
              let o = this.GetImgArray(r);
              return o && o.length > a && o[a] != null ? o[a] : null;
            }
            BHasSomeImage(r) {
              let a = this.GetImgArray(r);
              return !!a && a.some((o) => o != null && o.length > 0);
            }
            BHasImage(r, a) {
              let o = this.GetImgArray(r);
              return !!o && o.length > a && o[a] != null;
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
            GetForumTopicURL(r) {
              return this.BHasForumTopicGID()
                ? this.appid
                  ? Y.TS.COMMUNITY_BASE_URL +
                    "app/" +
                    this.appid +
                    "/eventcomments/" +
                    this.forumTopicGID
                  : r
                    ? Y.TS.COMMUNITY_BASE_URL +
                      "groups/" +
                      r +
                      "/eventcomments/" +
                      this.forumTopicGID
                    : Y.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.clanSteamID.ConvertTo64BitString() +
                      "/eventcomments/" +
                      this.forumTopicGID
                : "";
            }
            GetDiscussionURL(r) {
              return this.BHasForumTopicGID()
                ? this.GetForumTopicURL(r)
                : this.GetLegacyAnnouncementCommentsURL();
            }
            GetLegacyAnnouncementCommentsURL() {
              const r = this.clanSteamIDOriginal ?? this.clanSteamID;
              return !this.BHasAnnouncementGID() || !r || !r.BIsValid()
                ? ""
                : Y.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    r.ConvertTo64BitString() +
                    "/announcements/old_detail/" +
                    this.AnnouncementGID;
            }
            BIsEventInFuture(r = (0, T.Gw)()) {
              return r < (this.startTime ?? 0);
            }
            BHasEventEnded(r = (0, T.Gw)()) {
              return (this.endTime ?? 0) < r;
            }
            UpdateVoteCount(r, a) {
              r == "up"
                ? (this.nVotesUp = (0, K.OQ)(
                    this.nVotesUp + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ))
                : r == "down" &&
                  (this.nVotesDown = (0, K.OQ)(
                    this.nVotesDown + a,
                    0,
                    Number.MAX_SAFE_INTEGER,
                  ));
            }
            GetImageFromBeginningOfDescription(r, a) {
              let o = this.GetDescriptionWithFallback(r);
              if (o) {
                let D = o.indexOf("[img]");
                if (D !== -1 && D < a) {
                  D += 5;
                  let W = o.indexOf("[/img]", D);
                  if (W != -1) {
                    let N = o.substring(D, W).trim();
                    if (N.length != 0)
                      return w.zU.ReplacementTokenToClanImageURL(N);
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
            BImageNeedScreenshotFallback(r, a) {
              let o = this.GetImageURL(r, a);
              if (!o || o.length == 0) {
                const D = h.A0.GetELanguageFallback(a);
                a != D && (o = this.GetImageURL(r, D));
              }
              return !o || o.length == 0;
            }
            GetDescriptionWithFallback(r) {
              const a = h.A0.GetELanguageFallback(r);
              return this.description.get(r) || this.description.get(a);
            }
            BIsImageSafeForAllAges(r, a, o = {}) {
              const D = h.A0.GetELanguageFallback(a);
              return (
                this.GetImageURL(r, a) != null ||
                (a != D && this.GetImageURL(r, D) != null) ||
                (this.appid && o.bAppHasAgeSafeScreenshots) ||
                (!this.appid &&
                  o.clanInfo &&
                  ((o.clanInfo.is_creator_home && !o.clanInfo.is_ogg) ||
                    o.clanInfo.is_curator))
              );
            }
            BIsVisibleEvent(r = (0, T.Gw)()) {
              let a = Math.floor(r);
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
            BIsEventActionEnabled(r = (0, T.Gw)()) {
              return (
                !!this.jsondata.action_end_time &&
                (this.jsondata.action_end_time > r ||
                  (this.jsondata.action_end_time == 1575396e3 &&
                    1606845600 > r))
              );
            }
            BHasSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return !1;
              let a = this.jsondata.localized_subtitle[r];
              return a != null && a != "";
            }
            GetSubTitle(r) {
              if (
                !this.jsondata ||
                !this.jsondata.localized_subtitle ||
                r >= this.jsondata.localized_subtitle.length
              )
                return "";
              let a = this.jsondata.localized_subtitle[r];
              return a || "";
            }
            GetSubTitleWithLanguageFallback(r) {
              return this.jsondata
                ? h.NT.GetWithFallback(this.jsondata.localized_subtitle, r)
                : "";
            }
            GetSubTitleWithSummaryFallback(r) {
              return (
                h.NT.GetWithFallback(this.jsondata?.localized_subtitle, r) ||
                Le.GenerateSummaryFromText(this.GetDescriptionWithFallback(r))
              );
            }
            GetSummaryWithFallback(r, a) {
              return (
                h.NT.GetWithFallback(this.jsondata?.localized_summary, r) ||
                Le.GenerateSummaryFromText(
                  this.GetDescriptionWithFallback(r),
                  a,
                )
              );
            }
            GetSummary(r) {
              return h.NT.Get(this.jsondata?.localized_summary ?? [], r);
            }
            BHasSummary(r) {
              return !!this.GetSummary(r);
            }
            static GenerateSummaryFromText(r, a) {
              return !r || r.trim().length == 0
                ? ""
                : ((r = (0, p.Yj)(r, [
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
                  (r = (0, p.zV)(r, ["p"], " ")),
                  (r = (0, p.zV)(r)),
                  (r = (0, A.aX)(r)),
                  (0, A.bC)(r, a || it));
            }
            BHasTag(r) {
              return this.vecTags.indexOf(r) != -1;
            }
            BHasTagStartingWith(r) {
              return this.vecTags.some((a) => a?.startsWith(r));
            }
            BIsOGGEvent() {
              return !!this.appid && this.appid > 0;
            }
            BShowLibrarySpotlight(r) {
              if (!r) return !!this.jsondata.library_spotlight;
              if (!this.jsondata.library_spotlight || ct.includes(this.type))
                return !1;
              const a = new Date().getTime() / 1e3;
              return !(
                (ut.includes(this.type) && this.endTime && a > this.endTime) ||
                (this.startTime && a > this.startTime + U.Kp.PerDay * 60)
              );
            }
            BShowLibrarySpotlightText() {
              return !!this.jsondata.library_spotlight_text;
            }
            BHasBroadcastEnabled() {
              return !!this.jsondata.bBroadcastEnabled;
            }
            BEventCanShowBroadcastWidget(r, a = (0, T.Gw)()) {
              if (this.jsondata.bSaleEnabled)
                return this.BHasBroadcastEnabled();
              const o = this.endTime ? this.endTime : a + 3600;
              return (
                this.BHasBroadcastEnabled() &&
                !!this.jsondata.broadcast_whitelist &&
                this.jsondata.broadcast_whitelist.length > 0 &&
                (r || ((this.startTime ?? 0) - 600 <= a && a < o))
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
            GetBroadcastTitle(r) {
              return (
                h.NT.GetWithFallback(
                  this.jsondata.localized_broadcast_title,
                  r,
                ) ||
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
                this.jsondata.broadcast_whitelist?.map((r) =>
                  M.b.InitFromAccountID(r).ConvertTo64BitString(),
                ) ?? []
              );
            }
            BIsBroadcastAccountIDWhiteListed(r) {
              return (this.jsondata.broadcast_whitelist || []).includes(
                Number(r),
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
            GetSaleURL(r) {
              if (!this.jsondata.bSaleEnabled) return null;
              if (this.jsondata.sale_update_landing_page_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
                );
              if (!this.jsondata.sale_vanity_id)
                return (
                  Y.TS.STORE_BASE_URL +
                  "newshub/" +
                  (this.appid
                    ? "app/" + this.appid
                    : "group/" + this.clanSteamID.GetAccountID()) +
                  "/view/" +
                  this.GID
                );
              if (this.BUsesContentHubForItemSource()) {
                const W = this.jsondata.source_content_hub;
                return W
                  ? typeof W == "string"
                    ? Y.TS.STORE_BASE_URL + "category/" + W
                    : W.type == "category"
                      ? Y.TS.STORE_BASE_URL + "category/" + W.category
                      : W.type == "tags"
                        ? Y.TS.STORE_BASE_URL +
                          "tags/" +
                          ((0, h.l4)() || "en") +
                          "/" +
                          W.tagid
                        : W.type == "freetoplay"
                          ? Y.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                          : W.type == "earlyaccess"
                            ? Y.TS.STORE_BASE_URL + "genre/Early%20Access/"
                            : Y.TS.STORE_BASE_URL + W.type
                  : Y.TS.STORE_BASE_URL +
                      "sale/" +
                      this.jsondata.sale_vanity_id;
              }
              const a = this.clanSteamID.GetAccountID(),
                o =
                  !!this.jsondata
                    .sale_vanity_id_valve_approved_for_sale_subpath,
                D = this.GetSaleVanity();
              return r && (0, g.s)(a, o)
                ? r + "sale/" + D
                : Y.TS.STORE_BASE_URL + (0, g.n)(a, D, o);
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
            GenerateDynamicSaleSections(r, a, o, D, W, N) {
              const oe = [],
                le = {
                  section_type: "unselected_empty",
                  capsules: [],
                  events: [],
                  links: [],
                  localized_label: [],
                  default_label: "",
                };
              let ce = G + 10;
              return (
                r &&
                  oe.push({
                    ...le,
                    section_type: "footer_self_creator_home",
                    unique_id: ce++,
                    curator_clan_id: this.clanSteamID.GetAccountID(),
                  }),
                a &&
                  oe.push({
                    ...le,
                    section_type: "footer_browse_more",
                    unique_id: ce++,
                  }),
                D &&
                  oe.push(
                    this.GenerateDynamicCreatorHomeItemBrowserSection(
                      ce++,
                      le,
                      N,
                    ),
                  ),
                o &&
                  oe.push({
                    ...le,
                    section_type: "footer_default_social_share",
                    unique_id: ce++,
                  }),
                W &&
                  oe.push({
                    ...le,
                    section_type: "nextfest_header",
                    unique_id: ce++,
                  }),
                oe
              );
            }
            GetSaleSectionIncludingFooterSections(r = 0) {
              const a = this.jsondata?.sale_show_creator,
                o = this.jsondata.sale_browse_more_button,
                D =
                  this.GetSaleSectionsByType("social_share").length == 0 &&
                  !this.jsondata.sale_default_social_media_disabled,
                W = this.GetEventType() == l.ajI,
                N = this.BShowNextFestHeader(!0);
              return a || o || D || W || N
                ? [
                    ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, N, r),
                    ...this.GetSaleSections(),
                    ...this.GenerateDynamicSaleSections(!!a, !!o, D, W, !1, r),
                  ]
                : this.GetSaleSections();
            }
            GetSaleSectionByID(r, a = 0) {
              return r > G
                ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, a).find(
                    (D) => D.unique_id == r,
                  )
                : this.jsondata.sale_sections?.find((o) => o.unique_id == r);
            }
            GetSaleSectionCount() {
              return this.jsondata.sale_sections?.length ?? 0;
            }
            GetSaleSectionsByType(r) {
              return (
                this.jsondata.sale_sections?.filter(
                  (a) => a.section_type == r,
                ) ?? []
              );
            }
            GetLastUpdateTime() {
              return this.rtime32_last_modified ?? 0;
            }
            GetLastUpdaterSteamIDStr() {
              return this.last_update_steamid ?? "";
            }
            GetSaleSectionFirstMatchByType(r) {
              const a = this.jsondata.sale_sections?.length ?? 0;
              if (a != 0) {
                for (let o = 0; o < a; ++o)
                  if (this.jsondata.sale_sections[o].section_type === r)
                    return this.jsondata.sale_sections[o];
              }
            }
            static AccumulateCapsuleListIDs(r, a, o, D) {
              r &&
                r.forEach((W) => {
                  W &&
                    W.type &&
                    a.has(W.type) &&
                    (!D || D(W.id)) &&
                    o.add(W.id);
                });
            }
            GetSaleItemOfType(r, a) {
              if (!this.jsondata.sale_sections) return new Set();
              const o = new Set(r),
                D = new Set();
              return (
                (0, R.wT)(
                  !this.jsondata.bOptimizedForSize,
                  "Cannot find all items in optimized json",
                ),
                this.jsondata.bOptimizedForSize,
                this.jsondata.tagged_items?.forEach((W) => {
                  Le.AccumulateCapsuleListIDs([W.capsule], o, D, a);
                }),
                this.jsondata.sale_sections.forEach((W) => {
                  if (Fe(W.section_type))
                    Le.AccumulateCapsuleListIDs(W.capsules, o, D, a);
                  else if (W.section_type === "tabs" && W.tabs)
                    for (const N of W.tabs)
                      Le.AccumulateCapsuleListIDs(N.capsules, o, D, a);
                }),
                D
              );
            }
            GetSaleItemCountOfType(r, a) {
              return this.GetSaleItemOfType(r, a).size;
            }
            GetSaleFeaturedAppsCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemosCount(r) {
              return this.GetSaleItemCountOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundlesCount(r) {
              return this.GetSaleItemCountOfType(["bundle"], r);
            }
            GetSaleFeaturedPackagesCount(r) {
              return this.GetSaleItemCountOfType(["sub"], r);
            }
            GetSaleFeaturedApps(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music"],
                r,
              );
            }
            GetSaleFeaturedAppsAndDemos(r) {
              return this.GetSaleItemOfType(
                ["game", "application", "software", "dlc", "music", "demo"],
                r,
              );
            }
            GetSaleFeaturedBundles(r) {
              return this.GetSaleItemOfType(["bundle"], r);
            }
            GetSaleFeaturedPackages(r) {
              return this.GetSaleItemOfType(["sub"], r);
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
              return (0, X.rG)(this.type);
            }
            GetCategoryAsString(r) {
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
                            this.type == l.KDJ)
                        ? (0, h.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                        : this.BHasTag("vo_marketing_message") && r
                          ? (0, h.we)("#PartnerEvent_MM_MajorUpdate")
                          : this.GetEventTypeAsString();
            }
            GetAllTags() {
              return this.vecTags;
            }
            BMatchesAllTags(r) {
              let a = !0;
              return (
                r?.forEach((o) => {
                  this.vecTags.includes(o) || (a = !1);
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
              return this.jsondata.steam_award_category_suggestion ?? f.Q5.qZ;
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
            GetSalePageBackgroundGroup(r) {
              return this.jsondata.sale_background_img_groups?.enabled
                ? this.jsondata.sale_background_img_groups.groups?.[r]
                : void 0;
            }
            GetIncludedRealmList() {
              const r = this.BInRealmGlobal(),
                a = this.BInRealmChina();
              return (
                (0, R.wT)(
                  r || a,
                  `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
                ),
                r && a ? $e : r ? dt : a ? mt : gt
              );
            }
            BIsValidForRealm(r) {
              return this.GetIncludedRealmList().includes(r);
            }
            BIsNextFest(r = !1) {
              const a = "nextfest",
                o = this.jsondata.sale_vanity_id?.toLowerCase(),
                D = new M.b(this.clanSteamID).GetAccountID();
              return !(
                !o ||
                D != S.GU ||
                !o.startsWith(a) ||
                (r && (o.endsWith("preview") || o.endsWith("press")))
              );
            }
            BShowNextFestHeader(r) {
              return r && Y.iA.is_valve_email
                ? this.BIsNextFest(!1)
                : this.BIsNextFest(!0) &&
                    !!this.startTime &&
                    this.startTime > new Date("2026-03-01").getTime() / 1e3;
            }
            GenerateDynamicCreatorHomeItemBrowserSection(r, a, o) {
              const W = o >= 7;
              return {
                ...a,
                section_type: "sale_item_browser",
                unique_id: r,
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
                enable_faceted_browsing: W,
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
        _([s.sH], te.prototype, "GID", 2),
          _([s.sH], te.prototype, "AnnouncementGID", 2),
          _([s.sH], te.prototype, "forumTopicGID", 2),
          _([s.sH], te.prototype, "type", 2),
          _([s.sH], te.prototype, "appid", 2),
          _([s.sH], te.prototype, "name", 2),
          _([s.sH], te.prototype, "description", 2),
          _([s.sH], te.prototype, "timestamp_loc_updated", 2),
          _([s.sH], te.prototype, "startTime", 2),
          _([s.sH], te.prototype, "endTime", 2),
          _([s.sH], te.prototype, "visibilityStartTime", 2),
          _([s.sH], te.prototype, "visibilityEndTime", 2),
          _([s.sH], te.prototype, "m_nBuildID", 2),
          _([s.sH], te.prototype, "m_strBuildBranch", 2),
          _([s.sH], te.prototype, "postTime", 2),
          _([s.sH], te.prototype, "visibility_state", 2),
          _([s.sH], te.prototype, "broadcaster", 2),
          _([s.sH], te.prototype, "jsondata", 2),
          _([s.sH], te.prototype, "nCommentCount", 2),
          _([s.sH], te.prototype, "nVotesUp", 2),
          _([s.sH], te.prototype, "nVotesDown", 2),
          _([s.sH], te.prototype, "bOldAnnouncement", 2),
          _([s.sH], te.prototype, "announcementClanSteamID", 2),
          _([s.sH], te.prototype, "loadedAllLanguages", 2),
          _([s.sH], te.prototype, "bLoaded", 2),
          _([s.sH], te.prototype, "deleteInProgress", 2),
          _([s.sH], te.prototype, "vecTags", 2),
          _([s.sH], te.prototype, "last_update_steamid", 2),
          _([s.sH], te.prototype, "rtime32_last_modified", 2),
          _([s.sH], te.prototype, "rtime32_last_solr_search_col_updated", 2),
          _([s.sH], te.prototype, "rtime32_last_local_modification", 2),
          _([s.sH], te.prototype, "rtime32_moderator_reviewed", 2),
          _([s.sH], te.prototype, "video_preview_type", 2),
          _([s.sH], te.prototype, "video_preview_id", 2),
          _([s.sH], te.prototype, "m_overrideCurrentDay", 2);
        let _t = te;
        function Ft(c) {
          if (c) return c?.replace(/[()]/g, "\\$&");
        }
      },
      48421: (ae, H, n) => {
        "use strict";
        n.d(H, { B9: () => X, PB: () => K, RR: () => h, hE: () => C });
        var p = n(90626),
          L = n(72604),
          l = n(65804),
          f = n(47689),
          s = n(76559),
          t = n(3166),
          E = n(69561),
          M = n(20194),
          w = n(18210),
          z = n(41735),
          S = n.n(z),
          T = n(34592);
        function g(v) {
          return useObserver(() => [v.m_nBuildID, v.m_strBuildBranch]);
        }
        function R(v, I = 0, m) {
          const [P, y] = useState(
              g_PartnerEventStore.GetClanEventFromAnnouncementGID(v),
            ),
            b = useCancelTokenSource("usePartnerEventByAnnouncementGID");
          return (
            useEffect(() => {
              if (P?.AnnouncementGID != v) {
                g_PartnerEventStore.Init();
                const O = new CSteamID(CommunityConfig.CLANSTEAMID);
                g_PartnerEventStore
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(O, v, I, m)
                  .then((G) => {
                    G && !b.token.reason && y(G);
                  });
              }
            }, [v, I, m, P, b]),
            P
          );
        }
        function h(v) {
          const [I, m] = (0, p.useState)(() => l.O3.GetClanEventModel(v)),
            P = (0, f.m)("usePartnerEventByEventGID");
          return (
            (0, p.useEffect)(() => {
              v &&
                I?.GID != v &&
                (l.O3.Init(),
                l.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  [v],
                  [],
                  P,
                ).then((y) => {
                  y?.length == 1 && y[0].GID == v && !P.token.reason && m(y[0]);
                }));
            }, [v, I, P]),
            I
          );
        }
        function K(v) {
          const I = (0, f.m)("usePreloadPartnerEventsByEventGID"),
            m = (0, M.I)({
              queryKey: ["PreloadPartnerEventsByEventGID"],
              queryFn: () => (
                l.O3.Init(),
                l.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  v,
                  [],
                  I,
                )
              ),
            });
          return { bIsLoading: m.isLoading, events: m.data };
        }
        function X(v, I, m) {
          const [P, y] = (0, p.useState)(
              I ? l.O3.GetClanEventModel(I) : void 0,
            ),
            [b, O] = (0, p.useState)(!!v && !!I),
            [G, J] = (0, p.useState)(),
            [ee, Y] = (0, p.useState)(L.R),
            u = (0, f.m)("usePartnerEventByClanAccountAndEventGID");
          return (
            (0, p.useEffect)(() => {
              (async () => {
                try {
                  if (P?.GID != I && I && v) {
                    l.O3.Init();
                    const _ = s.b.InitFromClanID(v);
                    let B;
                    try {
                      B =
                        await l.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                          _,
                          I,
                          0,
                          m,
                        );
                    } catch (k) {
                      J(k?.response?.data?.err_msg),
                        Y(k?.response?.data?.success || L.zi);
                    }
                    u.token.reason || y(B);
                  }
                } finally {
                  O(!1);
                }
              })();
            }, [v, I, P, m, u]),
            { eventModel: P, bLoading: b, sErrorMessage: G, eResult: ee }
          );
        }
        function A(v, I = []) {
          const [m, P] = useState(void 0),
            y = useCancelTokenSource("useLatestPatchNoteForApp");
          return (
            useEffect(() => {
              v &&
                (!m || m?.appid != v) &&
                (g_PartnerEventStore.Init(),
                g_PartnerEventStore
                  .LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    v,
                    0,
                    1,
                    { require_tags: ["patchnotes", ...I] },
                    y,
                  )
                  .then((b) => {
                    b?.length && !y.token.reason && P(b[0]);
                  }));
            }, [v, y, I, m]),
            m
          );
        }
        function U(v, I = []) {
          const m = useCancelTokenSource("useLatestPatchNoteForSource"),
            P = typeof v == "number" ? v : k_nAppIdInvalid,
            y = typeof v == "object" ? v : void 0,
            b = useCallback(async () => {
              if (!I?.length) return null;
              g_PartnerEventStore.Init();
              const G = await g_PartnerEventStore.LoadAdjacentPartnerEvents(
                void 0,
                y,
                P,
                0,
                1,
                { require_tags: ["patchnotes", ...I] },
                m,
              );
              return G?.length ? G[0] : null;
            }, [P, m, y, I]),
            O = ["LatestPatchNote2", P, y, I, m];
          return useQuery({ queryKey: O, queryFn: b });
        }
        function C(v) {
          let I = "" + v;
          const m = w.A0.GetELanguageFallback(v);
          return v != m && (I += "_" + m), I;
        }
        async function j(v, I, m, P) {
          const y = new Array(),
            b = {
              clan_accountid: v ? v.GetAccountID() : void 0,
              gidevent: I,
              count_before: 0,
              count_after: m,
              lang_list: C(PchLanguageToELanguage(Config.LANGUAGE)),
              origin: self.origin,
              only_summaries: !0,
            },
            O = Config.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/",
            G = await axios.get(O, { params: b, cancelToken: P?.token });
          if (G?.data?.success == k_EResultOK) {
            const J = I == null ? G.data.events : G.data.events.slice(1);
            for (let ee of J)
              !ee.gid || !((ee.jsondata?.length ?? 0) > 0) || y.push(ee);
          } else {
            const J = GetMsgAndErrorCodeFromResponse(G?.data);
            throw (
              (console.error(
                "LoadAdjacentPartnerEvents Success but empty response: clanAccount:" +
                  (v ? v.GetAccountID() : 0) +
                  " " +
                  J.strErrorMsg,
                J,
              ),
              G?.data)
            );
          }
          return y;
        }
        function x(v, I, m) {
          const {
            data: P,
            error: y,
            fetchNextPage: b,
            hasNextPage: O,
            isFetching: G,
            isFetchingNextPage: J,
            status: ee,
            refetch: Y,
          } = useInfiniteQuery({
            queryKey: ["ClanEventSummaries", v, I],
            queryFn: ({ pageParam: u }) => j(v, u, I, m),
            initialPageParam: void 0,
            getNextPageParam: (u) =>
              u.length > 0 ? u[u.length - 1].gid : void 0,
          });
          return {
            rgClanEventData: P,
            bHasNextPage: O,
            fnFetchNextPage: b,
            bIsFetching: G,
            bIsFetchingNextPage: J,
            clanEventSummaryStatus: ee,
            clanEventSummaryLoadError: y,
            fnRefetch: Y,
          };
        }
      },
      38884: (ae, H, n) => {
        "use strict";
        n.d(H, { E0: () => w, oE: () => z });
        var p = n(71742),
          L = n(3166),
          l = n(76559),
          f = n(73259),
          s = n(34592),
          t = n(99412),
          E = n(41635);
        function M(S) {
          return (
            (S.gid == null || S.gid == null || S.gid == "0") &&
            !!S.announcement_body &&
            S.announcement_body.gid != "0"
          );
        }
        function w(S) {
          return M(S) ? f.cB + S.announcement_body?.gid : S.gid;
        }
        function z(S, T) {
          let g = new f.lh();
          if (
            ((g.clanSteamID = S),
            (0, p.wT)(
              g.clanSteamID && g.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                g.clanSteamID.ConvertTo64BitString() +
                " " +
                L.TS.EUNIVERSE,
            ),
            (g.GID = w(T)),
            (g.bOldAnnouncement = M(T)),
            (g.appid = T.appid ?? 0),
            (g.createTime = T.rtime_created),
            (g.startTime = T.rtime32_start_time),
            (g.endTime = T.rtime32_end_time),
            (g.visibilityStartTime = T.rtime32_visibility_start),
            (g.visibilityEndTime = T.rtime32_visibility_end),
            (g.loadedAllLanguages = !1),
            (g.type = T.event_type ?? t.DRF),
            (g.nVotesUp = T.votes_up ?? 0),
            (g.nVotesDown = T.votes_down ?? 0),
            (g.comment_type = T.comment_type),
            (g.gidfeature = T.gidfeature),
            (g.gidfeature2 = T.gidfeature2),
            (g.featured_app_tagid = T.featured_app_tagid),
            (g.vecTags = new Array()),
            (g.creator_steamid = T.creator_steamid),
            (g.last_update_steamid = T.last_update_steamid),
            (g.rtime32_last_modified = T.rtime32_last_modified),
            (g.rtime32_moderator_reviewed = T.rtime_mod_reviewed),
            (g.video_preview_type = T.video_preview_type),
            (g.video_preview_id = T.video_preview_id),
            (g.has_live_stream = T.has_live_stream),
            (g.live_stream_viewer_count = T.live_stream_viewer_count),
            (g.m_nBuildID = T.build_id),
            (g.m_strBuildBranch = T.build_branch),
            T.announcement_body)
          ) {
            let h = T.announcement_body;
            (g.AnnouncementGID = h.gid),
              g.name.set(h.language, h.headline),
              g.description.set(h.language, h.body),
              g.timestamp_loc_updated.clear(),
              (g.forumTopicGID = h.forum_topic_id),
              (g.nCommentCount = h.commentcount),
              (g.postTime = h.posttime),
              g.bOldAnnouncement && !h.hidden && (g.startTime = h.posttime),
              (g.announcementClanSteamID = new l.b(h.clanid)),
              h.tags &&
                h.tags.length > 0 &&
                h.tags.forEach((K) => g.vecTags.push(K)),
              !g.rtime32_last_solr_search_col_updated &&
                g.rtime32_last_modified &&
                ((g.rtime32_last_solr_search_col_updated =
                  g.rtime32_last_modified),
                (g.rtime32_last_modified = h.updatetime));
          } else
            (g.AnnouncementGID = "0"),
              (g.forumTopicGID = T.forum_topic_id),
              g.name.clear(),
              g.description.clear(),
              g.timestamp_loc_updated.clear(),
              (g.postTime = T.rtime32_start_time),
              (g.nCommentCount = T.comment_count ?? 0),
              g.name.set(t.Bhc, T.event_name ?? ""),
              g.description.set(t.Bhc, T.event_notes ?? "");
          T.broadcaster_accountid &&
            (g.broadcaster = new l.b(T.broadcaster_accountid));
          const R = f.DJ;
          try {
            g.jsondata = {
              ...R,
              ...(T.jsondata ? JSON.parse(T.jsondata) : void 0),
            };
          } catch (h) {
            const K = (0, s.H)(h);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  K.strErrorMsg,
                K,
              ),
              h)
            );
          }
          if (
            ((g.jsondata.localized_capsule_image = (0, E.$Y)(
              g.jsondata.localized_capsule_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_title_image = (0, E.$Y)(
              g.jsondata.localized_title_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_subtitle = (0, E.$Y)(
              g.jsondata.localized_subtitle || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_summary = (0, E.$Y)(
              g.jsondata.localized_summary || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_title = (0, E.$Y)(
              g.jsondata.localized_broadcast_title || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_left_image = (0, E.$Y)(
              g.jsondata.localized_broadcast_left_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_broadcast_right_image = (0, E.$Y)(
              g.jsondata.localized_broadcast_right_image || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_header = (0, E.$Y)(
              g.jsondata.localized_sale_header || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_overlay = (0, E.$Y)(
              g.jsondata.localized_sale_overlay || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_banner = (0, E.$Y)(
              g.jsondata.localized_sale_product_banner || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_product_mobile_banner = (0, E.$Y)(
              g.jsondata.localized_sale_product_mobile_banner || [],
              t.bP9,
              null,
            )),
            (g.jsondata.localized_sale_logo = (0, E.$Y)(
              g.jsondata.localized_sale_logo || [],
              t.bP9,
              null,
            )),
            g.jsondata.sale_num_headers !== void 0 &&
              g.jsondata.localized_per_day_sales_header)
          )
            for (let h = 0; h < g.jsondata.sale_num_headers; ++h)
              g.jsondata.localized_per_day_sales_header[h] = (0, E.$Y)(
                g.jsondata.localized_per_day_sales_header[h],
                t.bP9,
                null,
              );
          return (
            g.jsondata.sale_sections &&
              g.jsondata.sale_sections.forEach((h, K) => {
                h.localized_label &&
                  (h.localized_label = (0, E.$Y)(
                    h.localized_label,
                    t.bP9,
                    null,
                  )),
                  h.section_type === "trailercarousel" &&
                    (h.show_as_carousel = !1),
                  (g.jsondata.sale_sections[K] = { ...f.G6, ...h });
              }),
            g.jsondata.email_setting &&
              g.jsondata.email_setting.sections &&
              g.jsondata.email_setting.sections.forEach((h) => {
                h.localized_headline !== void 0 &&
                  h.localized_headline !== null &&
                  (h.localized_headline = (0, E.$Y)(
                    h.localized_headline,
                    t.bP9,
                    null,
                  )),
                  h.localized_body !== void 0 &&
                    h.localized_body !== null &&
                    (h.localized_body = (0, E.$Y)(
                      h.localized_body,
                      t.bP9,
                      null,
                    )),
                  h.localized_image !== void 0 &&
                    h.localized_image !== null &&
                    (h.localized_image = (0, E.$Y)(
                      h.localized_image,
                      t.bP9,
                      null,
                    ));
              }),
            g.jsondata.localized_title_image.forEach((h, K) => {
              if (h != null && h.substr(0, 4) == "http") {
                let X = h.lastIndexOf("/"),
                  A = h.substr(X + 1);
                g.jsondata.localized_title_image[K] = A;
              }
            }),
            (g.bLoaded = !0),
            T.published
              ? T.unlisted
                ? (g.visibility_state = f.zv.k_EEventStateUnlisted)
                : T.hidden
                  ? (g.visibility_state = f.zv.k_EEventStateStaged)
                  : (g.visibility_state = f.zv.k_EEventStateVisible)
              : (g.visibility_state = f.zv.k_EEventStateUnpublished),
            g
          );
        }
      },
      18994: (ae, H, n) => {
        "use strict";
        n.d(H, { Wn: () => p.Wn, a4: () => p.a4 });
        var p = n(39829);
        const L = "exploration";
        var l = ((t) => ((t.Random = "r"), (t.Personalized = "p"), t))(l || {});
        function f(t) {
          switch (t) {
            case k_EControllerType_XBoxOneController:
              return k_EStoreCategoryFullController;
            case k_EControllerType_PS4Controller:
              return k_EStoreCategoryPS4Controller;
            case k_EControllerType_PS5Controller:
              return k_EStoreCategoryPS5Controller;
            case k_EControllerType_SteamController:
              return k_EStoreCategorySteamInputAPI;
            default:
              return;
          }
        }
        function s(t) {
          switch (t) {
            case k_EStoreCategoryFullController:
              return k_EControllerType_XBoxOneController;
            case k_EStoreCategoryPS4Controller:
              return k_EControllerType_PS4Controller;
            case k_EStoreCategoryPS5Controller:
              return k_EControllerType_PS5Controller;
            default:
              return;
          }
        }
      },
      65804: (ae, H, n) => {
        "use strict";
        n.d(H, { ZQ: () => b, O3: () => O, dB: () => J, CO: () => ee });
        var p = n(41735),
          L = n.n(p),
          l = n(14947),
          f = n(31561),
          s = n(99412),
          t = n(72604),
          E = n(73259),
          M = n(76559);
        function w(Y) {
          return window.StoreDefaults ? window.StoreDefaults[Y] : void 0;
        }
        var z = n(41635),
          S = n(71742),
          T = n(34592),
          g = n(8323),
          R = n(48473),
          h = n(3166),
          K = n(90626),
          X = n(54963),
          A = n(48421),
          U = n(38884),
          C = n(77291),
          j = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          v = (Y, u, d, _) => {
            for (
              var B = _ > 1 ? void 0 : _ ? x(u, d) : u, k = Y.length - 1, Q;
              k >= 0;
              k--
            )
              (Q = Y[k]) && (B = (_ ? Q(u, d, B) : Q(B)) || B);
            return _ && B && j(u, d, B), B;
          };
        const I = null;
        class m {
          appid;
          date;
          can_play;
          playtime;
          announcementid;
          constructor(u) {
            (0, S.wT)(
              typeof u.appid == "number",
              "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
            ),
              (this.appid = u.appid),
              (this.date = u.date),
              (this.can_play = u.can_play),
              (this.playtime = u.playtime),
              (this.announcementid = u.announcementid);
          }
        }
        const P = null,
          y = null;
        class b {
          constructor(u = !1) {
            (0, l.Gn)(this), (this.m_bOnlySummary = u);
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
          m_QueuedEventTimeout = new g.LU();
          m_PendingInfoPromise;
          m_PendingInfoResolve;
          m_bLoadedFromConfig = !1;
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let u = w("PartnerEventStore");
              this.ValidateStoreDefault(u) &&
                u.forEach((B) => {
                  if (B) {
                    let k = new M.b(B.clan_steamid);
                    const Q = this.InsertEventModelFromClanEventData(k, B);
                    B.announcement_body &&
                      this.m_mapExistingEvents.set(
                        E.cB + B.announcement_body.gid,
                        Q,
                      );
                  }
                });
              let d = (0, h.Fd)("partnereventstore", "application_config");
              this.ValidateStoreDefault(d) &&
                d.forEach((B) => {
                  if (B) {
                    let k = new M.b(B.clan_steamid);
                    const Q = this.InsertEventModelFromClanEventData(k, B);
                    B.announcement_body &&
                      !this.m_mapExistingEvents.has(
                        E.cB + B.announcement_body.gid,
                      ) &&
                      this.m_mapExistingEvents.set(
                        E.cB + B.announcement_body.gid,
                        Q,
                      );
                  }
                });
              let _ = (0, h.Fd)("partnereventadjacents", "application_config");
              this.ValidateAdjacentEvent(_) &&
                _.forEach((B) => {
                  B &&
                    this.m_mapAdjacentAnnouncementGIDs.set(
                      B.announcementGID,
                      B.adjacents,
                    );
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          ValidateStoreDefault(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              d[0] &&
              typeof d[0] == "object"
              ? typeof d[0].gid == "string" ||
                  (typeof d[0].announcement_body == "object" &&
                    typeof d[0].announcement_body.gid == "string")
              : !1;
          }
          ValidateAdjacentEvent(u) {
            const d = u;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              typeof d[0] == "object"
              ? typeof d[0].announcementGID == "string" &&
                  Array.isArray(d[0].adjacents) &&
                  (d[0].adjacents.length == 0 ||
                    typeof d[0].adjacents[0] == "string")
              : !1;
          }
          GetPartnerEventChangeCallback(u) {
            let d = this.m_mapEventUpdateCallback.get(u);
            return (
              d ||
                (this.m_mapEventUpdateCallback.set(u, new g.lu()),
                (d = this.m_mapEventUpdateCallback.get(u))),
              d
            );
          }
          GetClanEventGIDs(u) {
            let d = this.m_mapClanToGIDs.get(u.GetAccountID());
            return d || [];
          }
          GetClanEventGIDsForApp(u) {
            let d = this.m_mapAppIDToGIDs.get(u);
            return d || [];
          }
          GetClanEventModel(u) {
            return this.m_mapExistingEvents.get(u);
          }
          BHasClanEventModel(u) {
            return this.m_mapExistingEvents.has(u);
          }
          BHasClanAnnouncementGID(u) {
            if (this.m_mapAnnouncementBodyToEvent.has(u)) {
              const d = this.m_mapAnnouncementBodyToEvent.get(u);
              return !!d && this.BHasClanEventModel(d);
            }
            return !1;
          }
          GetClanEventGIDFromAnnouncementGID(u) {
            return this.m_mapAnnouncementBodyToEvent.get(u);
          }
          GetClanEventFromAnnouncementGID(u) {
            const d = this.m_mapAnnouncementBodyToEvent.get(u);
            return d ? this.m_mapExistingEvents.get(d) : void 0;
          }
          DefaultEventSortFunction(u, d) {
            return u.startTime == d.startTime
              ? (0, R.kd)(u.GID ?? "", d.GID ?? "")
              : (d.startTime ?? 0) - (u.startTime ?? 0);
          }
          RegisterClanEvents(u) {
            if (u)
              for (const d of u) {
                const _ = (0, U.E0)(d);
                if (!this.m_mapExistingEvents.has(_)) {
                  const B = new M.b(d.clan_steamid);
                  this.InsertEventModelFromClanEventData(B, d);
                }
              }
          }
          GetRankedClanEvents(u, d) {
            let _ = [],
              B = u
                ? this.GetClanEventGIDs(u)
                : d
                  ? this.GetClanEventGIDsForApp(d)
                  : void 0;
            if (!B || B.length == 0) return _;
            for (let k of B) {
              let Q = this.GetClanEventModel(k);
              Q && _.push(Q);
            }
            return _.sort(this.DefaultEventSortFunction), _;
          }
          InsertEventModelFromClanEventData(u, d) {
            const _ = (0, U.oE)(u, d);
            return (
              this.InsertUniqueEventGID(u.GetAccountID(), _.appid, _.GID),
              this.m_mapExistingEvents.set(_.GID, _),
              _.AnnouncementGID &&
                _.AnnouncementGID.length > 1 &&
                this.m_mapAnnouncementBodyToEvent.set(_.AnnouncementGID, _.GID),
              _
            );
          }
          HelperInitializeNumSalesHeaderArray(u) {
            if ((u.jsondata.sale_num_headers ?? 0) > 1) {
              u.jsondata.localized_per_day_sales_header = [];
              for (let d = 0; d < (u.jsondata.sale_num_headers ?? 0); ++d)
                u.jsondata.localized_per_day_sales_header.push(
                  (0, z.$Y)([], s.bP9, null),
                );
              u.m_overrideCurrentDay = 0;
            } else u.m_overrideCurrentDay = void 0;
          }
          GetAllClanEvents(u) {
            let d = new Array();
            return (
              this.m_mapClanToGIDs.has(u.GetAccountID()) &&
                this.m_mapClanToGIDs.get(u.GetAccountID()).forEach((_) => {
                  let B = this.m_mapExistingEvents.get(_);
                  B && d.push(B);
                }),
              d
            );
          }
          async QueueLoadPartnerEvent(u, d, _) {
            if (this.m_mapExistingEvents.has(d)) return;
            this.m_rgQueuedEventsClanIDs.push(u),
              this.m_rgQueuedEventsUniqueIDs.push(d),
              this.m_rgQueuedEventsForEditFlags.push(!!_),
              this.m_PendingInfoPromise ||
                (this.m_PendingInfoPromise = new Promise(
                  (F) => (this.m_PendingInfoResolve = F),
                ));
            const B = this.m_PendingInfoPromise,
              k = () => {
                const F = this.m_PendingInfoResolve,
                  Z = this.m_rgQueuedEventsClanIDs,
                  re = this.m_rgQueuedEventsUniqueIDs,
                  ne = this.m_rgQueuedEventsForEditFlags;
                (this.m_PendingInfoPromise = void 0),
                  (this.m_rgQueuedEventsClanIDs = new Array()),
                  (this.m_rgQueuedEventsUniqueIDs = new Array()),
                  (this.m_rgQueuedEventsForEditFlags = new Array()),
                  this.InternalLoadPartnerEventList(Z, re, ne).then(() =>
                    F?.(),
                  );
              };
            return (
              this.m_rgQueuedEventsClanIDs.length >= 30
                ? (this.m_QueuedEventTimeout.Cancel(), k())
                : this.m_QueuedEventTimeout.IsScheduled() ||
                  this.m_QueuedEventTimeout.Schedule(50, k),
              B
            );
          }
          async InternalLoadPartnerEventList(u, d, _) {
            let B = _.some((Z) => Z);
            const k =
                h.TS.STORE_BASE_URL +
                (B
                  ? "events/ajaxgeteventdetailsforedit/"
                  : "events/ajaxgeteventdetails/"),
              Q = (0, A.hE)((0, s.sfN)(h.TS.LANGUAGE)),
              F = {
                clanid_list: u.join(","),
                uniqueid_list: d.join(","),
                lang_list: Q,
                origin: self.origin,
              };
            try {
              const Z = await L().get(k, { params: F, withCredentials: B });
              this.RegisterClanEvents(Z.data.events);
            } catch (Z) {
              let re = (0, T.H)(Z);
              console.error("GetEventDetails hit error " + re.strErrorMsg, re);
            }
          }
          async LoadAdjacentPartnerEvents(u, d, _, B, k, Q, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              u,
              void 0,
              d,
              _,
              B,
              k,
              Q,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByAnnouncement(u, d, _, B, k, Q, F) {
            return this.InternalLoadAdjacentPartnerEvents(
              void 0,
              u,
              d,
              _,
              B,
              k,
              Q,
              F,
            );
          }
          async LoadAdjacentPartnerEventsByEvent(u, d, _, B, k, Q, F) {
            const Z = d || u.clanSteamID;
            return u.bOldAnnouncement
              ? this.InternalLoadAdjacentPartnerEvents(
                  void 0,
                  u.AnnouncementGID,
                  Z,
                  _,
                  B,
                  k,
                  Q,
                  F,
                )
              : this.InternalLoadAdjacentPartnerEvents(
                  u.GID,
                  u.AnnouncementGID,
                  Z,
                  _,
                  B,
                  k,
                  Q,
                  F,
                );
          }
          async InternalLoadAdjacentPartnerEvents(u, d, _, B, k, Q, F, Z) {
            let re = new Array();
            if (!d || !this.m_mapAdjacentAnnouncementGIDs.has(d)) {
              let ne =
                h.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
              const V = (0, A.hE)((0, s.sfN)(h.TS.LANGUAGE));
              F?.only_summaries &&
                !this.m_bOnlySummary &&
                ((0, S.wT)(
                  this.m_bOnlySummary,
                  "Only Summary: Incorrect parameter passed in, unsetting",
                ),
                (F.only_summaries = void 0));
              let q = {
                clan_accountid: _ ? _.GetAccountID() : void 0,
                appid: B,
                count_before: k,
                count_after: Q,
                gidevent: u,
                gidannouncement: d,
                lang_list: V,
                rtime_oldestevent: F ? F.rtime_oldestevent : void 0,
                require_tags:
                  F && F.require_tags ? F.require_tags.join(",") : void 0,
                exclude_tags:
                  F && F.exclude_tags ? F.exclude_tags.join(",") : void 0,
                require_no_tags: F ? F.require_no_tags : void 0,
                event_type_filter:
                  F && F.event_type_filter
                    ? F.event_type_filter.join(",")
                    : void 0,
                exclude_event_types:
                  F && F.exclude_event_types
                    ? F.exclude_event_types.join(",")
                    : void 0,
                only_summaries: F && !!F.only_summaries,
                origin: self.origin,
              };
              try {
                let se = await L().get(ne, {
                  params: q,
                  cancelToken: Z?.token,
                });
                if (se?.data?.success == t.R)
                  (0, l.h5)(() => {
                    for (let ie of se.data.events) {
                      let je = (0, U.E0)(ie);
                      if (!this.m_mapExistingEvents.has(je)) {
                        let Ae = new M.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(_ || Ae, ie);
                      }
                      re.push(this.m_mapExistingEvents.get(je));
                    }
                    if (re.length == 0) {
                      if (u && this.BHasClanEventModel(u))
                        this.m_mapExistingEvents.get(u) &&
                          re.push(this.m_mapExistingEvents.get(u));
                      else if (d && this.BHasClanAnnouncementGID(d)) {
                        const ie = this.GetClanEventFromAnnouncementGID(d);
                        ie && re.push(ie);
                      }
                    }
                  });
                else {
                  let ie = (0, T.H)(se?.data);
                  console.error(
                    "LoadAdjacentPartnerEvents Success but empty response:" +
                      B +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
                }
              } catch (se) {
                let ie = (0, T.H)(se);
                ie.errorCode != t.e9 &&
                  console.error(
                    "LoadAdjacentPartnerEvents hit error on appid:" +
                      B +
                      " clanAccount:" +
                      (_ ? _.GetAccountID() : 0) +
                      " " +
                      ie.strErrorMsg,
                    ie,
                  );
              }
            } else {
              let ne = this.m_mapAdjacentAnnouncementGIDs.get(d),
                V = new Array();
              ne?.forEach((q) => {
                if (this.m_mapAnnouncementBodyToEvent.has(q)) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(q);
                  se &&
                    this.m_mapExistingEvents.get(se) &&
                    re.push(this.m_mapExistingEvents.get(se));
                } else V.push(q);
              }),
                V.length > 0 &&
                  (
                    await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                      void 0,
                      V,
                      Z,
                    )
                  ).forEach((se) => re.push(se));
            }
            return re;
          }
          async LoadPartnerEventsPageable(u, d, _ = 0, B = 0, k) {
            let Q = new Array(),
              F = h.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
              Z = {
                clan_accountid: u ? u.GetAccountID() : void 0,
                appid: d,
                offset: _,
                count: B,
                l: h.TS.LANGUAGE,
                origin: self.origin,
                exclude_tags: k && k.length > 0 ? k?.join(",") : void 0,
              };
            try {
              let re = await L().get(F, { params: Z });
              (0, l.h5)(() => {
                for (let ne of re.data.events) {
                  let V = (0, U.E0)(ne);
                  if (!this.m_mapExistingEvents.has(V)) {
                    let q = new M.b(ne.clan_steamid);
                    this.InsertEventModelFromClanEventData(q, ne);
                  }
                  Q.push(this.m_mapExistingEvents.get(V));
                }
              });
            } catch (re) {
              console.error(
                "LoadClanEventInDateRange hit error " +
                  (0, T.H)(re).strErrorMsg,
              );
            }
            return Q;
          }
          async GetBestEventsForCurrentUser(u, d, _) {
            let B = new Array(),
              k = {
                l: h.TS.LANGUAGE,
                include_steam_blog: !0,
                filter_to_played_within_days: u,
                include_only_game_updates: d,
              },
              Q = h.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
              F = await L().get(Q, {
                params: k,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
            if (!F.data?.events) {
              let Z = F.data?.err_msg || "";
              throw new Error(
                `GetBestEventsForCurrentUser request failed (${Z})`,
              );
            }
            return (
              (0, l.h5)(() => {
                for (let Z of F.data.events) {
                  let re = (0, U.E0)(Z);
                  if (!this.m_mapExistingEvents.has(re)) {
                    let V = new M.b(Z.clan_steamid);
                    this.InsertEventModelFromClanEventData(V, Z);
                  }
                  let ne = {
                    nAppPriority: Z.nAppPriority,
                    bPossibleTakeOver: Z.bPossibleTakeOver,
                    event: this.m_mapExistingEvents.get(re),
                  };
                  B.push(ne);
                }
              }),
              B
            );
          }
          async LoadImportantEventsAroundToday(u, d, _, B, k, Q) {
            let F = new Array(),
              Z = new Array();
            Z.push({ priority: 0, appids: d }),
              _ && Z.push({ priority: 1, appids: _ }),
              B && Z.push({ priority: 2, appids: B });
            let re = {
                count: u,
                strAppIDPriority: JSON.stringify({ prioritized_apps: Z }),
                filterToEventTypes: Q ? Q.toString() : "",
                l: h.TS.LANGUAGE,
              },
              ne = h.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
              V = await L().get(ne, {
                params: re,
                withCredentials: !0,
                cancelToken: k.token,
              });
            return (
              (0, l.h5)(() => {
                for (let q of V.data.events) {
                  let se = (0, U.E0)(q);
                  if (!this.m_mapExistingEvents.has(se)) {
                    let ie = new M.b(q.clan_steamid);
                    this.InsertEventModelFromClanEventData(ie, q);
                  }
                  F.push(this.m_mapExistingEvents.get(se));
                }
              }),
              F
            );
          }
          InsertUniqueEventGID(u, d, _) {
            let B = this.m_mapClanToGIDs.get(u);
            B ||
              (this.m_mapClanToGIDs.set(u, new Array()),
              (B = this.m_mapClanToGIDs.get(u)));
            let k = this.m_mapAppIDToGIDs.get(d);
            k ||
              (this.m_mapAppIDToGIDs.set(d, new Array()),
              (k = this.m_mapAppIDToGIDs.get(d))),
              B.indexOf(_) == -1 && (B.push(_), k.push(_));
          }
          ResetModel() {}
          async DeleteClanEvent(u, d) {
            this.m_mapExistingEvents.has(d) &&
              (this.m_mapExistingEvents.get(d).deleteInProgress = !0);
            let _ = new URLSearchParams();
            _.append("sessionid", (0, h.KC)()),
              _.append("bDelete", "1"),
              _.append("gid", d);
            const B = await L().post(
              h.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                u.ConvertTo64BitString() +
                "/ajaxcreateupdatedeletepartnerevents/",
              _,
            );
            return this.RemoveGIDFromList(u, d), B.data;
          }
          RemoveGIDFromList(u, d) {
            if (
              (this.m_mapExistingEvents.delete(d),
              this.m_mapClanToGIDs.has(u.GetAccountID()))
            ) {
              let _ = this.m_mapClanToGIDs.get(u.GetAccountID()),
                B = _.indexOf(d);
              B >= 0 && _.splice(B, 1);
            }
          }
          FlushEventFromCache(u, d) {
            if (
              (u &&
                this.m_mapExistingEvents.has(u) &&
                (d || (d = this.m_mapExistingEvents.get(u).AnnouncementGID),
                this.m_mapExistingEvents.delete(u)),
              d &&
                (this.m_mapExistingEvents.has(E.cB + d) &&
                  this.m_mapExistingEvents.delete(E.cB + d),
                this.m_mapAnnouncementBodyToEvent.has(d)))
            ) {
              const _ = this.m_mapAnnouncementBodyToEvent.get(d);
              _ &&
                this.m_mapExistingEvents.has(_) &&
                this.m_mapExistingEvents.delete(_),
                this.m_mapAnnouncementBodyToEvent.delete(d);
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            u,
            d,
            _,
            B,
            k,
            Q = !1,
          ) {
            let F = (0, A.hE)(Q ? s.Bhc : (0, s.sfN)(h.TS.LANGUAGE)),
              Z = {
                appid: d,
                clan_accountid: u ? u.GetAccountID() : void 0,
                announcement_gid: B,
                event_gid: _,
                lang_list: F,
                last_modified_time: k || 0,
                origin: self.origin,
                for_edit: Q,
                only_summary: this.m_bOnlySummary,
              },
              re = null,
              ne = null;
            if (Q) {
              const V = (0, h.yK)();
              V === "community"
                ? ((ne = h.TS.COMMUNITY_BASE_URL),
                  (ne += u ? "gid/" + u.ConvertTo64BitString() : "ogg/" + d),
                  (ne += "/"))
                : V === "partner"
                  ? (ne = h.TS.PARTNER_BASE_URL + "sales/")
                  : (ne = h.TS.STORE_BASE_URL + "events/"),
                (ne += "ajaxgetpartnereventforedit"),
                (re = { params: Z, withCredentials: !0 });
            } else
              (ne = h.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
                (re = { params: Z, withCredentials: !1 });
            try {
              let V = await L().get(ne, re);
              if (V.data.success !== t.R) return;
              let q = V.data.event,
                se = (0, U.E0)(q);
              if (
                !this.m_mapExistingEvents.has(se) ||
                (this.m_mapExistingEvents.get(se).rtime32_last_modified ?? 0) <
                  (q.rtime32_last_modified ?? 0) ||
                (this.m_mapExistingEvents.get(se).rtime32_moderator_reviewed ??
                  0) < (q.rtime_mod_reviewed ?? 0)
              ) {
                (0, S.wT)(
                  q.clan_steamid,
                  "ClanSteamID is missing from data we received",
                );
                let ie = new M.b(q.clan_steamid);
                this.InsertEventModelFromClanEventData(ie, q);
              }
              return this.m_mapExistingEvents.get(se);
            } catch {
              return;
            }
          }
          async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            u,
            d,
            _,
            B,
            k,
            Q,
          ) {
            if (_ && this.m_mapExistingEvents.has(_))
              return this.m_mapExistingEvents.get(_);
            if (B) {
              if (this.m_mapExistingEvents.has(E.cB + B))
                return this.m_mapExistingEvents.get(E.cB + B);
              if (this.m_mapAnnouncementBodyToEvent.has(B)) {
                const F = this.m_mapAnnouncementBodyToEvent.get(B);
                if (F && this.m_mapExistingEvents.has(F))
                  return this.m_mapExistingEvents.get(F);
              }
            }
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              d,
              _,
              B,
              k,
              Q,
            );
          }
          async LoadPartnerEventFromAnnoucementGID(u, d, _, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              void 0,
              d,
              _,
              B,
            );
          }
          async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(u, d, _, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              void 0,
              d,
              _,
              B,
            );
          }
          async LoadPartnerEventFromClanEventGID(u, d, _, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              void 0,
              u,
              d,
              void 0,
              _,
              B,
            );
          }
          async LoadPartnerEventFromClanEventGIDAndClanSteamID(u, d, _, B) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              void 0,
              d,
              void 0,
              _,
              B,
            );
          }
          async LoadPartnerEventGeneric(u, d, _, B, k) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
              u,
              d,
              _,
              B,
              k,
            );
          }
          async LoadHiddenPartnerEvent(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              d,
              void 0,
              0,
              !0,
            );
          }
          async LoadHiddenPartnerEventByAnnouncementGID(u, d) {
            return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
              u,
              void 0,
              void 0,
              d,
              0,
              !0,
            );
          }
          async HintLoadImportantUpdates() {
            const d = (0, f.tB)(36e5);
            if (d != this.m_tsUpdatedAppsQueryTime) {
              this.m_tsUpdatedAppsQueryTime = d;
              const _ = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
                B = h.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
                k = await L().get(B, { params: _, withCredentials: !0 });
              k.data.apps &&
                k.data.apps.length > 0 &&
                (0, l.h5)(() => {
                  const Q = new Map(
                    k.data.apps?.map((F) => [F.appid, new m(F)]),
                  );
                  this.m_mapUpdatedApps = Q;
                });
            }
            return this.m_mapUpdatedApps;
          }
          GetAppImportantUpdate(u) {
            return (
              this.HintLoadImportantUpdates().catch((d) => {
                console.log("UpdatedApps failed to load: ", d.response?.data);
              }),
              this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(u)
            );
          }
          async LoadClanEventLocalizationFromAnnouncementGID(u, d) {
            let _ =
              h.TS.COMMUNITY_BASE_URL +
              "gid/" +
              u.ConvertTo64BitString() +
              "/announcements/ajaxgetlocalization/" +
              d;
            return (await L().get(_)).data.localization;
          }
          async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(u, d, _) {
            const B = new Array(),
              k = h.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
              Q = (0, A.hE)((0, s.sfN)(h.TS.LANGUAGE));
            let F = null,
              Z = null;
            if (u) {
              let V = new Array();
              u.forEach((q) => {
                this.m_mapExistingEvents.has(q)
                  ? B.push(this.m_mapExistingEvents.get(q))
                  : V.push(q);
              }),
                V.sort(),
                (F = V);
            }
            if (d) {
              let V = new Array();
              d.forEach((q) => {
                if (
                  this.m_mapAnnouncementBodyToEvent.has(q) &&
                  this.m_mapAnnouncementBodyToEvent.get(q) &&
                  this.m_mapExistingEvents.has(
                    this.m_mapAnnouncementBodyToEvent.get(q),
                  )
                ) {
                  let se = this.m_mapAnnouncementBodyToEvent.get(q);
                  if (se) {
                    const ie = this.m_mapExistingEvents.get(se);
                    ie && B.push(ie);
                  }
                } else V.push(q);
              }),
                V.sort(),
                (Z = V);
            }
            if (!F && !Z) return B;
            const re = new Array(),
              ne = 100;
            for (; (F?.length ?? 0) > 0 || (Z?.length ?? 0) > 0; ) {
              let V = {
                event_gids:
                  (F?.length ?? 0) > 0 ? F?.splice(0, ne).join(",") : void 0,
                announcement_gids:
                  (Z?.length ?? 0) > 0 ? Z?.splice(0, ne).join(",") : void 0,
                lang_list: Q,
                origin: self.origin,
              };
              re.push(
                L().get(k, { params: V, cancelToken: _ ? _.token : void 0 }),
              );
            }
            try {
              const V = await Promise.all([...re]);
              let q = 0;
              (0, l.h5)(() =>
                V.forEach((se) => {
                  if (se && se.data && se.data.events)
                    for (let ie of se.data.events) {
                      let je = (0, U.E0)(ie);
                      if (!this.m_mapExistingEvents.has(je)) {
                        let Ae = new M.b(ie.clan_steamid);
                        this.InsertEventModelFromClanEventData(Ae, ie);
                      }
                      B.push(this.m_mapExistingEvents.get(je));
                    }
                  else {
                    const ie = (0, T.H)(se);
                    console.error(
                      "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                        ie.strErrorMsg,
                      ie,
                    );
                  }
                  q += 1;
                }),
              );
            } catch (V) {
              const q = (0, T.H)(V);
              console.error(
                "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                  q.strErrorMsg,
                q,
              );
            }
            return B;
          }
          async SavePartnerEventSaleAssets(u, d, _, B) {
            let k = null;
            if (!this.m_mapExistingEvents.has(d)) return !1;
            try {
              const Q = `${h.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${u}`,
                F = new FormData();
              F.append("sessionid", (0, h.KC)()),
                F.append("gidclanevent", d),
                F.append("json", JSON.stringify(_)),
                F.append("pageStyles", JSON.stringify(B));
              const Z = await L().post(Q, F, { withCredentials: !0 });
              if (Z?.data?.success == t.R) {
                const re = this.m_mapExistingEvents.get(d);
                if (re && re.jsondata) {
                  for (const ne in _)
                    if (_.hasOwnProperty(ne) && _[ne]) {
                      const V = ne,
                        q = _[V];
                      q !== void 0 && V !== void 0 && (re.jsondata[V] = q);
                    }
                }
                return this.GetPartnerEventChangeCallback(d).Dispatch(re), !0;
              }
              k = (0, T.H)(Z);
            } catch (Q) {
              k = (0, T.H)(Q);
            }
            return (
              console.error(
                "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                  k?.strErrorMsg,
                k,
              ),
              !1
            );
          }
          BIsSummaryOnlyStore() {
            return this.m_bOnlySummary;
          }
        }
        v([l.sH], b.prototype, "m_mapExistingEvents", 2),
          v([l.sH], b.prototype, "m_mapAnnouncementBodyToEvent", 2),
          v([l.sH], b.prototype, "m_mapClanToGIDs", 2),
          v([l.sH], b.prototype, "m_mapAppIDToGIDs", 2),
          v([l.sH], b.prototype, "m_mapUpdatedApps", 2),
          v([l.XI], b.prototype, "Init", 1),
          v([X.oI], b.prototype, "GetPartnerEventChangeCallback", 1),
          v([l.XI], b.prototype, "RegisterClanEvents", 1),
          v([l.XI], b.prototype, "InsertEventModelFromClanEventData", 1),
          v([l.XI], b.prototype, "DeleteClanEvent", 1),
          v([l.XI], b.prototype, "RemoveGIDFromList", 1),
          v([l.XI], b.prototype, "FlushEventFromCache", 1),
          v([X.oI], b.prototype, "SavePartnerEventSaleAssets", 1);
        const O = new b();
        (0, C.V)("g_PartnerEventStore", O);
        const G = new b(!0);
        (0, C.V)("g_PartnerEventSummaryStore", G);
        function J(Y, u, d = !1) {
          const [_, B] = (0, K.useState)(() => O.GetClanEventModel(u)),
            [k, Q] = (0, K.useState)(!0),
            F = (0, K.useMemo)(() => M.b.InitFromClanID(Y), [Y]);
          return (
            (0, K.useEffect)(() => {
              !_ &&
                Y > 0 &&
                (O.Init(),
                O.LoadPartnerEventFromClanEventGIDAndClanSteamID(F, u, 0, d)
                  .then(B)
                  .finally(() => Q(!1)));
            }, [F, u, _, Y, d]),
            (0, X.hL)(d ? O.GetPartnerEventChangeCallback(u) : void 0, B),
            { eventModel: _, bLoading: k }
          );
        }
        function ee() {
          return { fnSaveSaleAssets: O.SavePartnerEventSaleAssets };
        }
      },
      63854: (ae, H, n) => {
        "use strict";
        n.d(H, { a: () => t, z: () => s });
        var p = n(77008),
          L = n(60298),
          l = n(98609),
          f = n(67705);
        class s {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              s.s_Singleton ||
                ((s.s_Singleton = new s()), s.s_Singleton.Init()),
              s.s_Singleton
            );
          }
          Init() {
            const M = (0, f.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            this.m_steamInterface = (0, L.p)(new p.D(l.TS.WEBAPI_BASE_URL, M));
          }
        }
        function t() {
          return s.Get().GetPromotionTransport().GetServiceTransport();
        }
      },
      54407: (ae, H, n) => {
        "use strict";
        n.d(H, { B3: () => x, CF: () => v, KM: () => X, KT: () => j });
        var p = n(41735),
          L = n.n(p),
          l = n(58632),
          f = n.n(l),
          s = n(90626),
          t = n(20194),
          E = n(75233),
          M = n(72604),
          w = n(76559),
          z = n(34592),
          S = n(3166),
          T = n(35038),
          g = n(27386),
          R = n(68312),
          h = n(40497);
        const K = "nicknames";
        function X(I) {
          const m = (0, R.KV)(),
            { data: P, isLoading: y } = (0, t.I)({
              queryKey: [K],
              queryFn: async () => {
                const b = new Map();
                if (S.iA.logged_in) {
                  const O = T.w.Init(g.w_T),
                    J = (await g.xtC.GetNicknameList(m, O)).Body().toObject();
                  J?.nicknames &&
                    J.nicknames.length > 0 &&
                    J.nicknames.forEach((ee) => {
                      ee.accountid &&
                        ee.nickname &&
                        b.set(ee.accountid, ee.nickname);
                    });
                }
                return b;
              },
            });
          return P ? P.get(I) : null;
        }
        async function A(I) {
          if (!I || I.length == 0) return [];
          const m =
            (0, S.yK)() == "community"
              ? S.TS.COMMUNITY_BASE_URL
              : S.TS.STORE_BASE_URL;
          if (I.length == 1) {
            const P = { accountid: I[0], origin: self.origin },
              y = await L().get(`${m}actions/ajaxgetavatarpersona`, {
                params: P,
              });
            if (
              !y ||
              y.status != 200 ||
              y.data?.success != M.R ||
              !y.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, z.H))(y).strErrorMsg}`;
            return [y.data.userinfo];
          } else {
            const P = { accountids: I.join(","), origin: self.origin },
              y = await L().get(`${m}actions/ajaxgetmultiavatarpersona`, {
                params: P,
              });
            if (
              !y ||
              y.status != 200 ||
              y.data?.success != M.R ||
              !y.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, z.H))(y).strErrorMsg}`;
            const b = new Map();
            return (
              y.data.userinfos.forEach((O) =>
                b.set(new w.b(O.steamid).GetAccountID(), O),
              ),
              I.map((O) => b.get(O))
            );
          }
        }
        const U = new (f())((I) => A(I), { cache: !1 }),
          C = "avatarandpersonas";
        function j(I) {
          const { data: m, isLoading: P } = (0, t.I)({
            queryKey: [C, I],
            queryFn: () => U.load(I),
          });
          return [m, P];
        }
        function x(I) {
          const m = (0, E.jE)(),
            { data: P, isLoading: y } = (0, t.I)({
              queryKey: [C, I],
              queryFn: async () => {
                const O = await U.loadMany(I);
                return (
                  O.forEach((G) => {
                    if (G instanceof Error) return;
                    const J = [C, new w.b(G.steamid).GetAccountID()];
                    m.setQueryData(J, G);
                  }),
                  O
                );
              },
              enabled: I?.length > 0,
            }),
            b = (0, s.useMemo)(() => {
              const O = new Array();
              return (
                P?.forEach((G) => {
                  G instanceof Error || O.push(G);
                }),
                O
              );
            }, [P]);
          return y ? null : b;
        }
        function v(I) {
          return h.L.getQueryData([C, I]);
        }
      },
      19324: (ae, H, n) => {
        "use strict";
        n.d(H, { S: () => z, c: () => w });
        var p = n(72604),
          L = n(41735),
          l = n.n(L),
          f = n(20194),
          s = n(34592),
          t = n(98609),
          E = n(3166);
        async function M(S) {
          const T = { accountid: S, origin: self.origin };
          let g = `${t.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
          (0, E.yK)() == "partner" &&
            (g = `${t.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
          const R = await l().get(g, { params: T, withCredentials: !0 });
          if (
            !R ||
            R.status != 200 ||
            R.data?.success != p.R ||
            !R.data?.partners
          )
            throw `Load single user partner info failed ${((0, s.H))(R).strErrorMsg}`;
          return R.data.partners;
        }
        function w(S) {
          const { data: T, isLoading: g } = (0, f.I)({
            queryKey: ["PartnerInfoList", S],
            queryFn: () => M(S),
          });
          return g ? null : T;
        }
        function z(S, T) {
          return w(S)?.find((R) => R.partnerid === T);
        }
      },
      24806: (ae, H, n) => {
        "use strict";
        n.d(H, { Ng: () => A, iN: () => U, yk: () => C });
        var p = n(7850),
          L = n(75844),
          l = n(65946),
          f = n(90626),
          s = n(99412),
          t = n(32093),
          E = n(50109),
          M = n(95695),
          w = n.n(M),
          z = n(36707),
          S = n(18210),
          T = n(92264),
          g = n(54963),
          R = n(71421),
          h = Object.defineProperty,
          K = Object.getOwnPropertyDescriptor,
          X = (j, x, v, I) => {
            for (
              var m = I > 1 ? void 0 : I ? K(x, v) : x, P = j.length - 1, y;
              P >= 0;
              P--
            )
              (y = j[P]) && (m = (I ? y(x, v, m) : y(m)) || m);
            return I && m && h(x, v, m), m;
          };
        let A = class extends f.Component {
          GenerateLanguageOptions() {
            let j = [];
            const {
              fnFilterLanguage: x,
              fnLangHasData: v,
              fnLastUpdateRTime: I,
              fnIsLangSupported: m,
            } = this.props;
            this.props.bAllowUnsetOption &&
              j.push(
                (0, p.jsx)(
                  "option",
                  {
                    value: s.xPp,
                    children: (0, S.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let P = new Array();
            const y = this.props.realms || [t.TU.k_ESteamRealmGlobal];
            for (const O of S.A0.GetLanguageListForRealms(y)) {
              if (x && !x(O)) continue;
              const G = (0, s.LgB)(O),
                J = (0, S.we)("#Language_" + G),
                ee = !!(m && m(O));
              P.push({ eLang: O, sLocName: J, bSupported: ee });
            }
            P.sort((O, G) =>
              O.bSupported != G.bSupported
                ? O.bSupported
                  ? -1
                  : 1
                : O.sLocName.localeCompare(G.sLocName),
            );
            let b = !1;
            for (const O of P) {
              O.bSupported != b &&
                (j.push(
                  (0, p.jsx)(
                    "option",
                    {
                      className: w().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, S.we)(
                        O.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    O.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (b = O.bSupported));
              const G = v && v(O.eLang),
                J = I && I(O.eLang);
              let ee = O.sLocName;
              J &&
                J !== 0 &&
                ((ee += " "),
                (ee += (0, S.we)(
                  "#Language_Last_Update",
                  (0, S.$z)(J) +
                    " @ " +
                    (0, T.KC)(J, { bForce24HourClock: !1 }),
                ))),
                j.push(
                  (0, p.jsx)(
                    "option",
                    {
                      value: O.eLang,
                      className: (0, z.A)(
                        { [w().LanguageWithContent]: G },
                        O.bSupported
                          ? w().SupportedLanguage
                          : w().UnsupportedLanguage,
                      ),
                      children: ee,
                    },
                    "langpicker" + O.eLang + (G ? "_hasdata" : ""),
                  ),
                );
            }
            return j;
          }
          OnLanguageChange(j) {
            const { fnOnLanguageChanged: x, selectedLang: v } = this.props;
            let I = Number.parseInt(j.currentTarget.value);
            I != v && x && x(I);
          }
          render() {
            const { selectedLang: j, bDisabled: x, strTooltip: v } = this.props;
            let I = this.GenerateLanguageOptions();
            return (0, p.jsx)(R.he, {
              toolTipContent: v,
              children: (0, p.jsx)("select", {
                value: j,
                onChange: this.OnLanguageChange,
                disabled: x,
                children: I,
              }),
            });
          }
        };
        X([g.oI], A.prototype, "OnLanguageChange", 1), (A = X([L.PA], A));
        function U(j) {
          const [x, v] = (0, l.q3)(() => [
            E.O.Get().GetHasLocalizationContext(),
            E.O.Get().GetCurEditLanguage(),
          ]);
          return (0, p.jsx)(A, {
            selectedLang: v,
            fnLangHasData: E.O.Get().BHasLanguageData,
            fnOnLanguageChanged: E.O.Get().SetCurEditLanguage,
            bDisabled: !x,
            strTooltip: x
              ? void 0
              : (0, S.we)("#Localization_EditorNotInFocus"),
          });
        }
        function C(j) {
          const { fnLangHasData: x } = j;
          f.useEffect(
            () => (
              E.O.Get().SetHasLocalizationContext(!0),
              () => E.O.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const v = (0, l.q3)(() => {
            const I = [];
            for (let m = s.Bhc; m < s.bP9; ++m) I[m] = !!(x && x(m));
            return I;
          });
          return (
            f.useEffect(() => E.O.Get().SetHasLanguage(v), [v]),
            (0, p.jsx)(p.Fragment, {})
          );
        }
      },
      12932: (ae, H, n) => {
        "use strict";
        n.d(H, { AQ: () => R, pn: () => K, qx: () => h });
        var p = n(7850),
          L = n(58534),
          l = n(18210),
          f = n(36118),
          s = n(90626),
          t = n(36707),
          E = n(95695),
          M = n.n(E),
          w = n(25792),
          z = n(64734),
          S = n.n(z),
          T = n(65946),
          g = n(11243);
        function R(X) {
          const {
              title: A,
              tooltip: U,
              getMinimized: C,
              toggleMinimized: j,
              className: x,
              children: v,
              elAdditionalButtons: I,
            } = X,
            m = (0, T.q3)(() => C());
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsxs)("div", {
                className: (0, t.A)(
                  x,
                  z.SectionTitleHeader,
                  z.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, p.jsxs)("div", {
                    className: (0, t.A)(
                      E.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [A, !!U && (0, p.jsx)(g.o, { tooltip: U })],
                  }),
                  (0, p.jsxs)("div", {
                    className: z.SectionTitleButtons,
                    children: [
                      I,
                      (0, p.jsx)(K, { bIsMinimized: m, fnToggleMinimize: j }),
                    ],
                  }),
                ],
              }),
              !m && (0, p.jsx)(w.tH, { children: v }),
            ],
          });
        }
        function h(X) {
          const [A, U] = s.useState(!!X.bStartMinimized);
          return (0, p.jsx)(R, {
            ...X,
            getMinimized: () => A,
            toggleMinimized: () => U(!A),
            children: X.children,
          });
        }
        function K(X) {
          const { bIsMinimized: A, fnToggleMinimize: U } = X,
            C = A ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, p.jsx)(L.$n, {
            "data-tooltip-text": (0, l.we)(C),
            onClick: U,
            children: X.bIsMinimized
              ? (0, p.jsx)(f.hz4, {})
              : (0, p.jsx)(f.Xjb, {}),
          });
        }
      },
      41502: (ae, H, n) => {
        "use strict";
        n.d(H, { J2: () => L, bv: () => f, kO: () => l, xi: () => p });
        function p(s) {
          const t = new Date(s.getTime());
          return t.setHours(0, 0, 0, 0), t;
        }
        function L(s) {
          const t = new Date(s.getTime());
          return t.setDate(1), t.setHours(0, 0, 0, 0), t;
        }
        function l(s, t) {
          const E = new Date(s);
          return E.setDate(s.getDate() + t), E;
        }
        function f(s, t) {
          return s.reduce((E, M) => {
            const w = t(M),
              z = Math.floor(w.getTime() / 1e3),
              S = E.get(z) || [];
            return E.set(z, [...S, M]), E;
          }, new Map());
        }
      },
      22880: (ae, H, n) => {
        "use strict";
        n.d(H, { g: () => l });
        var p = n(40323),
          L = n.n(p);
        class l {
          static ParseCSVFile(s, t) {
            return new Promise((E, M) => {
              const z = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: E,
                error: (S) => M({ errors: [S] }),
                transformHeader: t,
              };
              L().parse(s, z);
            });
          }
          static ReadFile(s) {
            return new Promise((t, E) => {
              const M = new FileReader();
              (M.onload = () => t(M.result ?? "")), M.readAsText(s);
            });
          }
          static WriteFile(s, t) {
            let E = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(s, t);
            else {
              const M = window.URL.createObjectURL(s);
              E.href = M;
            }
            E.setAttribute("download", t), E.click();
            try {
              document.removeChild(E);
            } catch {}
          }
          static WriteCSVToFile(s, t, E, M) {
            const w = M
                ? L().unparse({ fields: M, data: s }, { header: !0 })
                : L().unparse(s, { header: !0 }),
              z = E == !0 ? ["\uFEFF" + w] : [w];
            l.WriteFile(new Blob(z, { type: "text/csv:charset=utf-8;" }), t);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(s, t) {
            const E = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let M =
              "<" +
              E() +
              'xml version="1.0" encoding="UTF-8" ' +
              E() +
              `>
`;
            (M += new XMLSerializer().serializeToString(s)),
              l.WriteFile(
                new Blob([M], { type: "application/xml:charset=utf-8;" }),
                t,
              );
          }
        }
      },
      71684: (ae, H, n) => {
        "use strict";
        n.d(H, { JS: () => f, rG: () => E });
        var p = n(99412),
          L = n(39905);
        function l(M) {
          return M !== k_EClanEventType_NewsEvent;
        }
        function f(M) {
          switch (M) {
            case p.Aqr:
            case p.I5b:
            case p.jO6:
            case p.Y3j:
            case p.Bb7:
            case p.TiP:
            case p.EPt:
            case p.E3D:
            case p.L0X:
            case p.KDJ:
            case p.Fa4:
            case p.Aav:
            case p.SRb:
            case p.HRy:
            case p.C$4:
            case p.zA:
            case p.y6:
            case p.hGl:
            case p.WNR:
            case p.pIh:
            case p.izQ:
            case p.LOv:
            case p.zcX:
            case p.DRF:
            case p.HFK:
              return !0;
          }
          return !1;
        }
        function s(M, w) {
          return !(
            M == k_EClanEventType_SmallUpdateEvent ||
            M == k_EClanEventType_CreatorHome ||
            (w && w.indexOf("curator") != -1)
          );
        }
        function t(M) {
          return [
            k_EClanEventType_MajorUpdateEvent,
            k_EClanEventType_GameReleaseEvent,
            k_EClanEventType_DLCReleaseEvent,
            k_EClanEventType_SeasonRelease,
          ].includes(M);
        }
        function E(M) {
          let w = "#PartnerEvent_" + M,
            z = L.Z.Localize(w);
          return z != w ? z : L.Z.Localize("#PartnerEvent_Other");
        }
      },
      78430: (ae) => {
        ae.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
      },
      64734: (ae) => {
        ae.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
