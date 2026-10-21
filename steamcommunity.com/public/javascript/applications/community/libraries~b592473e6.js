/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  var Hh = (D, V) => () => {
    try {
      return V || D((V = { exports: {} }).exports, V), V.exports;
    } catch (d) {
      throw ((V = 0), d);
    }
  };
  var jh = Hh((sn, ln) => {
    (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
      [2667],
      {
        45772: () => {},
        74763: () => {},
        83478: (D, V, d) => {
          "use strict";
          var s;
          s = { value: !0 };
          var g =
              Object.assign ||
              function (I) {
                for (var G = 1; G < arguments.length; G++) {
                  var se = arguments[G];
                  for (var pe in se)
                    Object.prototype.hasOwnProperty.call(se, pe) &&
                      (I[pe] = se[pe]);
                }
                return I;
              },
            M = d(90626),
            _ = T(M);
          function T(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function K(I, G) {
            var se = {};
            for (var pe in I)
              G.indexOf(pe) >= 0 ||
                (Object.prototype.hasOwnProperty.call(I, pe) &&
                  (se[pe] = I[pe]));
            return se;
          }
          var U = 24;
          V.A = function (I) {
            var G = I.fill,
              se = G === void 0 ? "currentColor" : G,
              pe = I.width,
              ve = pe === void 0 ? U : pe,
              je = I.height,
              We = je === void 0 ? U : je,
              Me = I.style,
              Q = Me === void 0 ? {} : Me,
              ge = K(I, ["fill", "width", "height", "style"]);
            return _.default.createElement(
              "svg",
              g(
                {
                  viewBox: "0 0 " + U + " " + U,
                  style: g({ fill: se, width: ve, height: We }, Q),
                },
                ge,
              ),
              _.default.createElement("path", {
                d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
              }),
            );
          };
        },
        50283: (D, V, d) => {
          "use strict";
          var s;
          s = { value: !0 };
          var g =
              Object.assign ||
              function (I) {
                for (var G = 1; G < arguments.length; G++) {
                  var se = arguments[G];
                  for (var pe in se)
                    Object.prototype.hasOwnProperty.call(se, pe) &&
                      (I[pe] = se[pe]);
                }
                return I;
              },
            M = d(90626),
            _ = T(M);
          function T(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function K(I, G) {
            var se = {};
            for (var pe in I)
              G.indexOf(pe) >= 0 ||
                (Object.prototype.hasOwnProperty.call(I, pe) &&
                  (se[pe] = I[pe]));
            return se;
          }
          var U = 24;
          V.A = function (I) {
            var G = I.fill,
              se = G === void 0 ? "currentColor" : G,
              pe = I.width,
              ve = pe === void 0 ? U : pe,
              je = I.height,
              We = je === void 0 ? U : je,
              Me = I.style,
              Q = Me === void 0 ? {} : Me,
              ge = K(I, ["fill", "width", "height", "style"]);
            return _.default.createElement(
              "svg",
              g(
                {
                  viewBox: "0 0 " + U + " " + U,
                  style: g({ fill: se, width: ve, height: We }, Q),
                },
                ge,
              ),
              _.default.createElement("path", {
                d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
              }),
            );
          };
        },
        30878: (D, V, d) => {
          var s = d(73904),
            g = d(26467),
            M = s(g, "DataView");
          D.exports = M;
        },
        72987: (D, V, d) => {
          var s = d(98138),
            g = d(85596),
            M = d(82095),
            _ = d(38163),
            T = d(86955);
          function K(U) {
            var I = -1,
              G = U == null ? 0 : U.length;
            for (this.clear(); ++I < G; ) {
              var se = U[I];
              this.set(se[0], se[1]);
            }
          }
          (K.prototype.clear = s),
            (K.prototype.delete = g),
            (K.prototype.get = M),
            (K.prototype.has = _),
            (K.prototype.set = T),
            (D.exports = K);
        },
        63937: (D, V, d) => {
          var s = d(4316),
            g = d(63770),
            M = d(34869),
            _ = d(17977),
            T = d(52209);
          function K(U) {
            var I = -1,
              G = U == null ? 0 : U.length;
            for (this.clear(); ++I < G; ) {
              var se = U[I];
              this.set(se[0], se[1]);
            }
          }
          (K.prototype.clear = s),
            (K.prototype.delete = g),
            (K.prototype.get = M),
            (K.prototype.has = _),
            (K.prototype.set = T),
            (D.exports = K);
        },
        44925: (D, V, d) => {
          var s = d(73904),
            g = d(26467),
            M = s(g, "Map");
          D.exports = M;
        },
        44023: (D, V, d) => {
          var s = d(14366),
            g = d(60856),
            M = d(29435),
            _ = d(12375),
            T = d(55103);
          function K(U) {
            var I = -1,
              G = U == null ? 0 : U.length;
            for (this.clear(); ++I < G; ) {
              var se = U[I];
              this.set(se[0], se[1]);
            }
          }
          (K.prototype.clear = s),
            (K.prototype.delete = g),
            (K.prototype.get = M),
            (K.prototype.has = _),
            (K.prototype.set = T),
            (D.exports = K);
        },
        97438: (D, V, d) => {
          var s = d(73904),
            g = d(26467),
            M = s(g, "Promise");
          D.exports = M;
        },
        64507: (D, V, d) => {
          var s = d(73904),
            g = d(26467),
            M = s(g, "Set");
          D.exports = M;
        },
        99177: (D, V, d) => {
          var s = d(44023),
            g = d(98726),
            M = d(12961);
          function _(T) {
            var K = -1,
              U = T == null ? 0 : T.length;
            for (this.__data__ = new s(); ++K < U; ) this.add(T[K]);
          }
          (_.prototype.add = _.prototype.push = g),
            (_.prototype.has = M),
            (D.exports = _);
        },
        56643: (D, V, d) => {
          var s = d(63937),
            g = d(2242),
            M = d(91668),
            _ = d(41159),
            T = d(20411),
            K = d(11427);
          function U(I) {
            var G = (this.__data__ = new s(I));
            this.size = G.size;
          }
          (U.prototype.clear = g),
            (U.prototype.delete = M),
            (U.prototype.get = _),
            (U.prototype.has = T),
            (U.prototype.set = K),
            (D.exports = U);
        },
        38039: (D, V, d) => {
          var s = d(26467),
            g = s.Symbol;
          D.exports = g;
        },
        15490: (D, V, d) => {
          var s = d(26467),
            g = s.Uint8Array;
          D.exports = g;
        },
        47285: (D, V, d) => {
          var s = d(73904),
            g = d(26467),
            M = s(g, "WeakMap");
          D.exports = M;
        },
        76155: (D) => {
          function V(d, s) {
            for (
              var g = -1, M = d == null ? 0 : d.length;
              ++g < M && s(d[g], g, d) !== !1;
            );
            return d;
          }
          D.exports = V;
        },
        2152: (D) => {
          function V(d, s) {
            for (
              var g = -1, M = d == null ? 0 : d.length, _ = 0, T = [];
              ++g < M;
            ) {
              var K = d[g];
              s(K, g, d) && (T[_++] = K);
            }
            return T;
          }
          D.exports = V;
        },
        48353: (D, V, d) => {
          var s = d(10098),
            g = d(69214),
            M = d(83491),
            _ = d(33934),
            T = d(62439),
            K = d(8053),
            U = Object.prototype,
            I = U.hasOwnProperty;
          function G(se, pe) {
            var ve = M(se),
              je = !ve && g(se),
              We = !ve && !je && _(se),
              Me = !ve && !je && !We && K(se),
              Q = ve || je || We || Me,
              ge = Q ? s(se.length, String) : [],
              Ae = ge.length;
            for (var ae in se)
              (pe || I.call(se, ae)) &&
                !(
                  Q &&
                  (ae == "length" ||
                    (We && (ae == "offset" || ae == "parent")) ||
                    (Me &&
                      (ae == "buffer" ||
                        ae == "byteLength" ||
                        ae == "byteOffset")) ||
                    T(ae, Ae))
                ) &&
                ge.push(ae);
            return ge;
          }
          D.exports = G;
        },
        27742: (D) => {
          function V(d, s) {
            for (
              var g = -1, M = d == null ? 0 : d.length, _ = Array(M);
              ++g < M;
            )
              _[g] = s(d[g], g, d);
            return _;
          }
          D.exports = V;
        },
        49666: (D) => {
          function V(d, s) {
            for (var g = -1, M = s.length, _ = d.length; ++g < M; )
              d[_ + g] = s[g];
            return d;
          }
          D.exports = V;
        },
        17214: (D) => {
          function V(d, s) {
            for (var g = -1, M = d == null ? 0 : d.length; ++g < M; )
              if (s(d[g], g, d)) return !0;
            return !1;
          }
          D.exports = V;
        },
        24261: (D, V, d) => {
          var s = d(51458),
            g = d(31722),
            M = Object.prototype,
            _ = M.hasOwnProperty;
          function T(K, U, I) {
            var G = K[U];
            (!(_.call(K, U) && g(G, I)) || (I === void 0 && !(U in K))) &&
              s(K, U, I);
          }
          D.exports = T;
        },
        85775: (D, V, d) => {
          var s = d(31722);
          function g(M, _) {
            for (var T = M.length; T--; ) if (s(M[T][0], _)) return T;
            return -1;
          }
          D.exports = g;
        },
        41199: (D, V, d) => {
          var s = d(41905),
            g = d(33640);
          function M(_, T) {
            return _ && s(T, g(T), _);
          }
          D.exports = M;
        },
        54900: (D, V, d) => {
          var s = d(41905),
            g = d(73591);
          function M(_, T) {
            return _ && s(T, g(T), _);
          }
          D.exports = M;
        },
        51458: (D, V, d) => {
          var s = d(47489);
          function g(M, _, T) {
            _ == "__proto__" && s
              ? s(M, _, {
                  configurable: !0,
                  enumerable: !0,
                  value: T,
                  writable: !0,
                })
              : (M[_] = T);
          }
          D.exports = g;
        },
        40289: (D, V, d) => {
          var s = d(56643),
            g = d(76155),
            M = d(24261),
            _ = d(41199),
            T = d(54900),
            K = d(71236),
            U = d(10149),
            I = d(31285),
            G = d(55366),
            se = d(68240),
            pe = d(68767),
            ve = d(88599),
            je = d(6247),
            We = d(85353),
            Me = d(41927),
            Q = d(83491),
            ge = d(33934),
            Ae = d(82052),
            ae = d(97827),
            me = d(64406),
            fe = d(33640),
            Pe = d(73591),
            he = 1,
            Le = 2,
            Je = 4,
            Ye = "[object Arguments]",
            nt = "[object Array]",
            Xe = "[object Boolean]",
            tt = "[object Date]",
            Ne = "[object Error]",
            B = "[object Function]",
            ne = "[object GeneratorFunction]",
            $ = "[object Map]",
            X = "[object Number]",
            ie = "[object Object]",
            xe = "[object RegExp]",
            Ce = "[object Set]",
            Ve = "[object String]",
            Ee = "[object Symbol]",
            rt = "[object WeakMap]",
            ct = "[object ArrayBuffer]",
            vt = "[object DataView]",
            wt = "[object Float32Array]",
            yt = "[object Float64Array]",
            Ct = "[object Int8Array]",
            Rt = "[object Int16Array]",
            Bt = "[object Int32Array]",
            be = "[object Uint8Array]",
            ye = "[object Uint8ClampedArray]",
            Te = "[object Uint16Array]",
            Re = "[object Uint32Array]",
            we = {};
          (we[Ye] =
            we[nt] =
            we[ct] =
            we[vt] =
            we[Xe] =
            we[tt] =
            we[wt] =
            we[yt] =
            we[Ct] =
            we[Rt] =
            we[Bt] =
            we[$] =
            we[X] =
            we[ie] =
            we[xe] =
            we[Ce] =
            we[Ve] =
            we[Ee] =
            we[be] =
            we[ye] =
            we[Te] =
            we[Re] =
              !0),
            (we[Ne] = we[B] = we[rt] = !1);
          function Be(ze, qe, ft, gt, mt, ht) {
            var dt,
              Et = qe & he,
              Ot = qe & Le,
              kt = qe & Je;
            if ((ft && (dt = mt ? ft(ze, gt, mt, ht) : ft(ze)), dt !== void 0))
              return dt;
            if (!ae(ze)) return ze;
            var It = Q(ze);
            if (It) {
              if (((dt = je(ze)), !Et)) return U(ze, dt);
            } else {
              var Dt = ve(ze),
                jt = Dt == B || Dt == ne;
              if (ge(ze)) return K(ze, Et);
              if (Dt == ie || Dt == Ye || (jt && !mt)) {
                if (((dt = Ot || jt ? {} : Me(ze)), !Et))
                  return Ot ? G(ze, T(dt, ze)) : I(ze, _(dt, ze));
              } else {
                if (!we[Dt]) return mt ? ze : {};
                dt = We(ze, Dt, Et);
              }
            }
            ht || (ht = new s());
            var an = ht.get(ze);
            if (an) return an;
            ht.set(ze, dt),
              me(ze)
                ? ze.forEach(function (y) {
                    dt.add(Be(y, qe, ft, y, ze, ht));
                  })
                : Ae(ze) &&
                  ze.forEach(function (y, P) {
                    dt.set(P, Be(y, qe, ft, P, ze, ht));
                  });
            var ce = kt ? (Ot ? pe : se) : Ot ? Pe : fe,
              b = It ? void 0 : ce(ze);
            return (
              g(b || ze, function (y, P) {
                b && ((P = y), (y = ze[P])), M(dt, P, Be(y, qe, ft, P, ze, ht));
              }),
              dt
            );
          }
          D.exports = Be;
        },
        35898: (D, V, d) => {
          var s = d(97827),
            g = Object.create,
            M = (function () {
              function _() {}
              return function (T) {
                if (!s(T)) return {};
                if (g) return g(T);
                _.prototype = T;
                var K = new _();
                return (_.prototype = void 0), K;
              };
            })();
          D.exports = M;
        },
        39155: (D, V, d) => {
          var s = d(17707),
            g = d(31951),
            M = g(s);
          D.exports = M;
        },
        155: (D, V, d) => {
          var s = d(26007),
            g = s();
          D.exports = g;
        },
        17707: (D, V, d) => {
          var s = d(155),
            g = d(33640);
          function M(_, T) {
            return _ && s(_, T, g);
          }
          D.exports = M;
        },
        93328: (D, V, d) => {
          var s = d(83763),
            g = d(66507);
          function M(_, T) {
            T = s(T, _);
            for (var K = 0, U = T.length; _ != null && K < U; )
              _ = _[g(T[K++])];
            return K && K == U ? _ : void 0;
          }
          D.exports = M;
        },
        26533: (D, V, d) => {
          var s = d(49666),
            g = d(83491);
          function M(_, T, K) {
            var U = T(_);
            return g(_) ? U : s(U, K(_));
          }
          D.exports = M;
        },
        78714: (D, V, d) => {
          var s = d(38039),
            g = d(89257),
            M = d(3660),
            _ = "[object Null]",
            T = "[object Undefined]",
            K = s ? s.toStringTag : void 0;
          function U(I) {
            return I == null
              ? I === void 0
                ? T
                : _
              : K && K in Object(I)
                ? g(I)
                : M(I);
          }
          D.exports = U;
        },
        58299: (D) => {
          function V(d, s) {
            return d != null && s in Object(d);
          }
          D.exports = V;
        },
        59016: (D, V, d) => {
          var s = d(78714),
            g = d(34172),
            M = "[object Arguments]";
          function _(T) {
            return g(T) && s(T) == M;
          }
          D.exports = _;
        },
        16536: (D, V, d) => {
          var s = d(58742),
            g = d(34172);
          function M(_, T, K, U, I) {
            return _ === T
              ? !0
              : _ == null || T == null || (!g(_) && !g(T))
                ? _ !== _ && T !== T
                : s(_, T, K, U, M, I);
          }
          D.exports = M;
        },
        58742: (D, V, d) => {
          var s = d(56643),
            g = d(57457),
            M = d(57908),
            _ = d(11671),
            T = d(88599),
            K = d(83491),
            U = d(33934),
            I = d(8053),
            G = 1,
            se = "[object Arguments]",
            pe = "[object Array]",
            ve = "[object Object]",
            je = Object.prototype,
            We = je.hasOwnProperty;
          function Me(Q, ge, Ae, ae, me, fe) {
            var Pe = K(Q),
              he = K(ge),
              Le = Pe ? pe : T(Q),
              Je = he ? pe : T(ge);
            (Le = Le == se ? ve : Le), (Je = Je == se ? ve : Je);
            var Ye = Le == ve,
              nt = Je == ve,
              Xe = Le == Je;
            if (Xe && U(Q)) {
              if (!U(ge)) return !1;
              (Pe = !0), (Ye = !1);
            }
            if (Xe && !Ye)
              return (
                fe || (fe = new s()),
                Pe || I(Q)
                  ? g(Q, ge, Ae, ae, me, fe)
                  : M(Q, ge, Le, Ae, ae, me, fe)
              );
            if (!(Ae & G)) {
              var tt = Ye && We.call(Q, "__wrapped__"),
                Ne = nt && We.call(ge, "__wrapped__");
              if (tt || Ne) {
                var B = tt ? Q.value() : Q,
                  ne = Ne ? ge.value() : ge;
                return fe || (fe = new s()), me(B, ne, Ae, ae, fe);
              }
            }
            return Xe ? (fe || (fe = new s()), _(Q, ge, Ae, ae, me, fe)) : !1;
          }
          D.exports = Me;
        },
        39062: (D, V, d) => {
          var s = d(88599),
            g = d(34172),
            M = "[object Map]";
          function _(T) {
            return g(T) && s(T) == M;
          }
          D.exports = _;
        },
        46029: (D, V, d) => {
          var s = d(56643),
            g = d(16536),
            M = 1,
            _ = 2;
          function T(K, U, I, G) {
            var se = I.length,
              pe = se,
              ve = !G;
            if (K == null) return !pe;
            for (K = Object(K); se--; ) {
              var je = I[se];
              if (ve && je[2] ? je[1] !== K[je[0]] : !(je[0] in K)) return !1;
            }
            for (; ++se < pe; ) {
              je = I[se];
              var We = je[0],
                Me = K[We],
                Q = je[1];
              if (ve && je[2]) {
                if (Me === void 0 && !(We in K)) return !1;
              } else {
                var ge = new s();
                if (G) var Ae = G(Me, Q, We, K, U, ge);
                if (!(Ae === void 0 ? g(Q, Me, M | _, G, ge) : Ae)) return !1;
              }
            }
            return !0;
          }
          D.exports = T;
        },
        15673: (D, V, d) => {
          var s = d(3316),
            g = d(54454),
            M = d(97827),
            _ = d(32279),
            T = /[\\^$.*+?()[\]{}|]/g,
            K = /^\[object .+?Constructor\]$/,
            U = Function.prototype,
            I = Object.prototype,
            G = U.toString,
            se = I.hasOwnProperty,
            pe = RegExp(
              "^" +
                G.call(se)
                  .replace(T, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?",
                  ) +
                "$",
            );
          function ve(je) {
            if (!M(je) || g(je)) return !1;
            var We = s(je) ? pe : K;
            return We.test(_(je));
          }
          D.exports = ve;
        },
        64356: (D, V, d) => {
          var s = d(88599),
            g = d(34172),
            M = "[object Set]";
          function _(T) {
            return g(T) && s(T) == M;
          }
          D.exports = _;
        },
        27: (D, V, d) => {
          var s = d(78714),
            g = d(19516),
            M = d(34172),
            _ = "[object Arguments]",
            T = "[object Array]",
            K = "[object Boolean]",
            U = "[object Date]",
            I = "[object Error]",
            G = "[object Function]",
            se = "[object Map]",
            pe = "[object Number]",
            ve = "[object Object]",
            je = "[object RegExp]",
            We = "[object Set]",
            Me = "[object String]",
            Q = "[object WeakMap]",
            ge = "[object ArrayBuffer]",
            Ae = "[object DataView]",
            ae = "[object Float32Array]",
            me = "[object Float64Array]",
            fe = "[object Int8Array]",
            Pe = "[object Int16Array]",
            he = "[object Int32Array]",
            Le = "[object Uint8Array]",
            Je = "[object Uint8ClampedArray]",
            Ye = "[object Uint16Array]",
            nt = "[object Uint32Array]",
            Xe = {};
          (Xe[ae] =
            Xe[me] =
            Xe[fe] =
            Xe[Pe] =
            Xe[he] =
            Xe[Le] =
            Xe[Je] =
            Xe[Ye] =
            Xe[nt] =
              !0),
            (Xe[_] =
              Xe[T] =
              Xe[ge] =
              Xe[K] =
              Xe[Ae] =
              Xe[U] =
              Xe[I] =
              Xe[G] =
              Xe[se] =
              Xe[pe] =
              Xe[ve] =
              Xe[je] =
              Xe[We] =
              Xe[Me] =
              Xe[Q] =
                !1);
          function tt(Ne) {
            return M(Ne) && g(Ne.length) && !!Xe[s(Ne)];
          }
          D.exports = tt;
        },
        12507: (D, V, d) => {
          var s = d(58069),
            g = d(42092),
            M = d(91398),
            _ = d(83491),
            T = d(39989);
          function K(U) {
            return typeof U == "function"
              ? U
              : U == null
                ? M
                : typeof U == "object"
                  ? _(U)
                    ? g(U[0], U[1])
                    : s(U)
                  : T(U);
          }
          D.exports = K;
        },
        49354: (D, V, d) => {
          var s = d(34149),
            g = d(9716),
            M = Object.prototype,
            _ = M.hasOwnProperty;
          function T(K) {
            if (!s(K)) return g(K);
            var U = [];
            for (var I in Object(K))
              _.call(K, I) && I != "constructor" && U.push(I);
            return U;
          }
          D.exports = T;
        },
        73101: (D, V, d) => {
          var s = d(97827),
            g = d(34149),
            M = d(86651),
            _ = Object.prototype,
            T = _.hasOwnProperty;
          function K(U) {
            if (!s(U)) return M(U);
            var I = g(U),
              G = [];
            for (var se in U)
              (se == "constructor" && (I || !T.call(U, se))) || G.push(se);
            return G;
          }
          D.exports = K;
        },
        47014: (D, V, d) => {
          var s = d(39155),
            g = d(97244);
          function M(_, T) {
            var K = -1,
              U = g(_) ? Array(_.length) : [];
            return (
              s(_, function (I, G, se) {
                U[++K] = T(I, G, se);
              }),
              U
            );
          }
          D.exports = M;
        },
        58069: (D, V, d) => {
          var s = d(46029),
            g = d(30818),
            M = d(77031);
          function _(T) {
            var K = g(T);
            return K.length == 1 && K[0][2]
              ? M(K[0][0], K[0][1])
              : function (U) {
                  return U === T || s(U, T, K);
                };
          }
          D.exports = _;
        },
        42092: (D, V, d) => {
          var s = d(16536),
            g = d(52686),
            M = d(72989),
            _ = d(90544),
            T = d(49462),
            K = d(77031),
            U = d(66507),
            I = 1,
            G = 2;
          function se(pe, ve) {
            return _(pe) && T(ve)
              ? K(U(pe), ve)
              : function (je) {
                  var We = g(je, pe);
                  return We === void 0 && We === ve
                    ? M(je, pe)
                    : s(ve, We, I | G);
                };
          }
          D.exports = se;
        },
        33171: (D) => {
          function V(d) {
            return function (s) {
              return s?.[d];
            };
          }
          D.exports = V;
        },
        60477: (D, V, d) => {
          var s = d(93328);
          function g(M) {
            return function (_) {
              return s(_, M);
            };
          }
          D.exports = g;
        },
        10098: (D) => {
          function V(d, s) {
            for (var g = -1, M = Array(d); ++g < d; ) M[g] = s(g);
            return M;
          }
          D.exports = V;
        },
        15746: (D, V, d) => {
          var s = d(38039),
            g = d(27742),
            M = d(83491),
            _ = d(4036),
            T = 1 / 0,
            K = s ? s.prototype : void 0,
            U = K ? K.toString : void 0;
          function I(G) {
            if (typeof G == "string") return G;
            if (M(G)) return g(G, I) + "";
            if (_(G)) return U ? U.call(G) : "";
            var se = G + "";
            return se == "0" && 1 / G == -T ? "-0" : se;
          }
          D.exports = I;
        },
        97371: (D) => {
          function V(d) {
            return function (s) {
              return d(s);
            };
          }
          D.exports = V;
        },
        5713: (D) => {
          function V(d, s) {
            return d.has(s);
          }
          D.exports = V;
        },
        77768: (D, V, d) => {
          var s = d(91398);
          function g(M) {
            return typeof M == "function" ? M : s;
          }
          D.exports = g;
        },
        83763: (D, V, d) => {
          var s = d(83491),
            g = d(90544),
            M = d(20136),
            _ = d(6468);
          function T(K, U) {
            return s(K) ? K : g(K, U) ? [K] : M(_(K));
          }
          D.exports = T;
        },
        43603: (D, V, d) => {
          var s = d(15490);
          function g(M) {
            var _ = new M.constructor(M.byteLength);
            return new s(_).set(new s(M)), _;
          }
          D.exports = g;
        },
        71236: (D, V, d) => {
          D = d.nmd(D);
          var s = d(26467),
            g = V && !V.nodeType && V,
            M = g && !0 && D && !D.nodeType && D,
            _ = M && M.exports === g,
            T = _ ? s.Buffer : void 0,
            K = T ? T.allocUnsafe : void 0;
          function U(I, G) {
            if (G) return I.slice();
            var se = I.length,
              pe = K ? K(se) : new I.constructor(se);
            return I.copy(pe), pe;
          }
          D.exports = U;
        },
        57803: (D, V, d) => {
          var s = d(43603);
          function g(M, _) {
            var T = _ ? s(M.buffer) : M.buffer;
            return new M.constructor(T, M.byteOffset, M.byteLength);
          }
          D.exports = g;
        },
        90955: (D) => {
          var V = /\w*$/;
          function d(s) {
            var g = new s.constructor(s.source, V.exec(s));
            return (g.lastIndex = s.lastIndex), g;
          }
          D.exports = d;
        },
        61342: (D, V, d) => {
          var s = d(38039),
            g = s ? s.prototype : void 0,
            M = g ? g.valueOf : void 0;
          function _(T) {
            return M ? Object(M.call(T)) : {};
          }
          D.exports = _;
        },
        89763: (D, V, d) => {
          var s = d(43603);
          function g(M, _) {
            var T = _ ? s(M.buffer) : M.buffer;
            return new M.constructor(T, M.byteOffset, M.length);
          }
          D.exports = g;
        },
        10149: (D) => {
          function V(d, s) {
            var g = -1,
              M = d.length;
            for (s || (s = Array(M)); ++g < M; ) s[g] = d[g];
            return s;
          }
          D.exports = V;
        },
        41905: (D, V, d) => {
          var s = d(24261),
            g = d(51458);
          function M(_, T, K, U) {
            var I = !K;
            K || (K = {});
            for (var G = -1, se = T.length; ++G < se; ) {
              var pe = T[G],
                ve = U ? U(K[pe], _[pe], pe, K, _) : void 0;
              ve === void 0 && (ve = _[pe]), I ? g(K, pe, ve) : s(K, pe, ve);
            }
            return K;
          }
          D.exports = M;
        },
        31285: (D, V, d) => {
          var s = d(41905),
            g = d(28230);
          function M(_, T) {
            return s(_, g(_), T);
          }
          D.exports = M;
        },
        55366: (D, V, d) => {
          var s = d(41905),
            g = d(51633);
          function M(_, T) {
            return s(_, g(_), T);
          }
          D.exports = M;
        },
        25551: (D, V, d) => {
          var s = d(26467),
            g = s["__core-js_shared__"];
          D.exports = g;
        },
        31951: (D, V, d) => {
          var s = d(97244);
          function g(M, _) {
            return function (T, K) {
              if (T == null) return T;
              if (!s(T)) return M(T, K);
              for (
                var U = T.length, I = _ ? U : -1, G = Object(T);
                (_ ? I-- : ++I < U) && K(G[I], I, G) !== !1;
              );
              return T;
            };
          }
          D.exports = g;
        },
        26007: (D) => {
          function V(d) {
            return function (s, g, M) {
              for (var _ = -1, T = Object(s), K = M(s), U = K.length; U--; ) {
                var I = K[d ? U : ++_];
                if (g(T[I], I, T) === !1) break;
              }
              return s;
            };
          }
          D.exports = V;
        },
        47489: (D, V, d) => {
          var s = d(73904),
            g = (function () {
              try {
                var M = s(Object, "defineProperty");
                return M({}, "", {}), M;
              } catch {}
            })();
          D.exports = g;
        },
        57457: (D, V, d) => {
          var s = d(99177),
            g = d(17214),
            M = d(5713),
            _ = 1,
            T = 2;
          function K(U, I, G, se, pe, ve) {
            var je = G & _,
              We = U.length,
              Me = I.length;
            if (We != Me && !(je && Me > We)) return !1;
            var Q = ve.get(U),
              ge = ve.get(I);
            if (Q && ge) return Q == I && ge == U;
            var Ae = -1,
              ae = !0,
              me = G & T ? new s() : void 0;
            for (ve.set(U, I), ve.set(I, U); ++Ae < We; ) {
              var fe = U[Ae],
                Pe = I[Ae];
              if (se)
                var he = je
                  ? se(Pe, fe, Ae, I, U, ve)
                  : se(fe, Pe, Ae, U, I, ve);
              if (he !== void 0) {
                if (he) continue;
                ae = !1;
                break;
              }
              if (me) {
                if (
                  !g(I, function (Le, Je) {
                    if (!M(me, Je) && (fe === Le || pe(fe, Le, G, se, ve)))
                      return me.push(Je);
                  })
                ) {
                  ae = !1;
                  break;
                }
              } else if (!(fe === Pe || pe(fe, Pe, G, se, ve))) {
                ae = !1;
                break;
              }
            }
            return ve.delete(U), ve.delete(I), ae;
          }
          D.exports = K;
        },
        57908: (D, V, d) => {
          var s = d(38039),
            g = d(15490),
            M = d(31722),
            _ = d(57457),
            T = d(74059),
            K = d(73697),
            U = 1,
            I = 2,
            G = "[object Boolean]",
            se = "[object Date]",
            pe = "[object Error]",
            ve = "[object Map]",
            je = "[object Number]",
            We = "[object RegExp]",
            Me = "[object Set]",
            Q = "[object String]",
            ge = "[object Symbol]",
            Ae = "[object ArrayBuffer]",
            ae = "[object DataView]",
            me = s ? s.prototype : void 0,
            fe = me ? me.valueOf : void 0;
          function Pe(he, Le, Je, Ye, nt, Xe, tt) {
            switch (Je) {
              case ae:
                if (
                  he.byteLength != Le.byteLength ||
                  he.byteOffset != Le.byteOffset
                )
                  return !1;
                (he = he.buffer), (Le = Le.buffer);
              case Ae:
                return !(
                  he.byteLength != Le.byteLength || !Xe(new g(he), new g(Le))
                );
              case G:
              case se:
              case je:
                return M(+he, +Le);
              case pe:
                return he.name == Le.name && he.message == Le.message;
              case We:
              case Q:
                return he == Le + "";
              case ve:
                var Ne = T;
              case Me:
                var B = Ye & U;
                if ((Ne || (Ne = K), he.size != Le.size && !B)) return !1;
                var ne = tt.get(he);
                if (ne) return ne == Le;
                (Ye |= I), tt.set(he, Le);
                var $ = _(Ne(he), Ne(Le), Ye, nt, Xe, tt);
                return tt.delete(he), $;
              case ge:
                if (fe) return fe.call(he) == fe.call(Le);
            }
            return !1;
          }
          D.exports = Pe;
        },
        11671: (D, V, d) => {
          var s = d(68240),
            g = 1,
            M = Object.prototype,
            _ = M.hasOwnProperty;
          function T(K, U, I, G, se, pe) {
            var ve = I & g,
              je = s(K),
              We = je.length,
              Me = s(U),
              Q = Me.length;
            if (We != Q && !ve) return !1;
            for (var ge = We; ge--; ) {
              var Ae = je[ge];
              if (!(ve ? Ae in U : _.call(U, Ae))) return !1;
            }
            var ae = pe.get(K),
              me = pe.get(U);
            if (ae && me) return ae == U && me == K;
            var fe = !0;
            pe.set(K, U), pe.set(U, K);
            for (var Pe = ve; ++ge < We; ) {
              Ae = je[ge];
              var he = K[Ae],
                Le = U[Ae];
              if (G)
                var Je = ve ? G(Le, he, Ae, U, K, pe) : G(he, Le, Ae, K, U, pe);
              if (!(Je === void 0 ? he === Le || se(he, Le, I, G, pe) : Je)) {
                fe = !1;
                break;
              }
              Pe || (Pe = Ae == "constructor");
            }
            if (fe && !Pe) {
              var Ye = K.constructor,
                nt = U.constructor;
              Ye != nt &&
                "constructor" in K &&
                "constructor" in U &&
                !(
                  typeof Ye == "function" &&
                  Ye instanceof Ye &&
                  typeof nt == "function" &&
                  nt instanceof nt
                ) &&
                (fe = !1);
            }
            return pe.delete(K), pe.delete(U), fe;
          }
          D.exports = T;
        },
        2286: (D, V, d) => {
          var s = typeof d.g == "object" && d.g && d.g.Object === Object && d.g;
          D.exports = s;
        },
        68240: (D, V, d) => {
          var s = d(26533),
            g = d(28230),
            M = d(33640);
          function _(T) {
            return s(T, M, g);
          }
          D.exports = _;
        },
        68767: (D, V, d) => {
          var s = d(26533),
            g = d(51633),
            M = d(73591);
          function _(T) {
            return s(T, M, g);
          }
          D.exports = _;
        },
        5073: (D, V, d) => {
          var s = d(32132);
          function g(M, _) {
            var T = M.__data__;
            return s(_) ? T[typeof _ == "string" ? "string" : "hash"] : T.map;
          }
          D.exports = g;
        },
        30818: (D, V, d) => {
          var s = d(49462),
            g = d(33640);
          function M(_) {
            for (var T = g(_), K = T.length; K--; ) {
              var U = T[K],
                I = _[U];
              T[K] = [U, I, s(I)];
            }
            return T;
          }
          D.exports = M;
        },
        73904: (D, V, d) => {
          var s = d(15673),
            g = d(49490);
          function M(_, T) {
            var K = g(_, T);
            return s(K) ? K : void 0;
          }
          D.exports = M;
        },
        89553: (D, V, d) => {
          var s = d(48697),
            g = s(Object.getPrototypeOf, Object);
          D.exports = g;
        },
        89257: (D, V, d) => {
          var s = d(38039),
            g = Object.prototype,
            M = g.hasOwnProperty,
            _ = g.toString,
            T = s ? s.toStringTag : void 0;
          function K(U) {
            var I = M.call(U, T),
              G = U[T];
            try {
              U[T] = void 0;
              var se = !0;
            } catch {}
            var pe = _.call(U);
            return se && (I ? (U[T] = G) : delete U[T]), pe;
          }
          D.exports = K;
        },
        28230: (D, V, d) => {
          var s = d(2152),
            g = d(16199),
            M = Object.prototype,
            _ = M.propertyIsEnumerable,
            T = Object.getOwnPropertySymbols,
            K = T
              ? function (U) {
                  return U == null
                    ? []
                    : ((U = Object(U)),
                      s(T(U), function (I) {
                        return _.call(U, I);
                      }));
                }
              : g;
          D.exports = K;
        },
        51633: (D, V, d) => {
          var s = d(49666),
            g = d(89553),
            M = d(28230),
            _ = d(16199),
            T = Object.getOwnPropertySymbols,
            K = T
              ? function (U) {
                  for (var I = []; U; ) s(I, M(U)), (U = g(U));
                  return I;
                }
              : _;
          D.exports = K;
        },
        88599: (D, V, d) => {
          var s = d(30878),
            g = d(44925),
            M = d(97438),
            _ = d(64507),
            T = d(47285),
            K = d(78714),
            U = d(32279),
            I = "[object Map]",
            G = "[object Object]",
            se = "[object Promise]",
            pe = "[object Set]",
            ve = "[object WeakMap]",
            je = "[object DataView]",
            We = U(s),
            Me = U(g),
            Q = U(M),
            ge = U(_),
            Ae = U(T),
            ae = K;
          ((s && ae(new s(new ArrayBuffer(1))) != je) ||
            (g && ae(new g()) != I) ||
            (M && ae(M.resolve()) != se) ||
            (_ && ae(new _()) != pe) ||
            (T && ae(new T()) != ve)) &&
            (ae = function (me) {
              var fe = K(me),
                Pe = fe == G ? me.constructor : void 0,
                he = Pe ? U(Pe) : "";
              if (he)
                switch (he) {
                  case We:
                    return je;
                  case Me:
                    return I;
                  case Q:
                    return se;
                  case ge:
                    return pe;
                  case Ae:
                    return ve;
                }
              return fe;
            }),
            (D.exports = ae);
        },
        49490: (D) => {
          function V(d, s) {
            return d?.[s];
          }
          D.exports = V;
        },
        15720: (D, V, d) => {
          var s = d(83763),
            g = d(69214),
            M = d(83491),
            _ = d(62439),
            T = d(19516),
            K = d(66507);
          function U(I, G, se) {
            G = s(G, I);
            for (var pe = -1, ve = G.length, je = !1; ++pe < ve; ) {
              var We = K(G[pe]);
              if (!(je = I != null && se(I, We))) break;
              I = I[We];
            }
            return je || ++pe != ve
              ? je
              : ((ve = I == null ? 0 : I.length),
                !!ve && T(ve) && _(We, ve) && (M(I) || g(I)));
          }
          D.exports = U;
        },
        98138: (D, V, d) => {
          var s = d(60316);
          function g() {
            (this.__data__ = s ? s(null) : {}), (this.size = 0);
          }
          D.exports = g;
        },
        85596: (D) => {
          function V(d) {
            var s = this.has(d) && delete this.__data__[d];
            return (this.size -= s ? 1 : 0), s;
          }
          D.exports = V;
        },
        82095: (D, V, d) => {
          var s = d(60316),
            g = "__lodash_hash_undefined__",
            M = Object.prototype,
            _ = M.hasOwnProperty;
          function T(K) {
            var U = this.__data__;
            if (s) {
              var I = U[K];
              return I === g ? void 0 : I;
            }
            return _.call(U, K) ? U[K] : void 0;
          }
          D.exports = T;
        },
        38163: (D, V, d) => {
          var s = d(60316),
            g = Object.prototype,
            M = g.hasOwnProperty;
          function _(T) {
            var K = this.__data__;
            return s ? K[T] !== void 0 : M.call(K, T);
          }
          D.exports = _;
        },
        86955: (D, V, d) => {
          var s = d(60316),
            g = "__lodash_hash_undefined__";
          function M(_, T) {
            var K = this.__data__;
            return (
              (this.size += this.has(_) ? 0 : 1),
              (K[_] = s && T === void 0 ? g : T),
              this
            );
          }
          D.exports = M;
        },
        6247: (D) => {
          var V = Object.prototype,
            d = V.hasOwnProperty;
          function s(g) {
            var M = g.length,
              _ = new g.constructor(M);
            return (
              M &&
                typeof g[0] == "string" &&
                d.call(g, "index") &&
                ((_.index = g.index), (_.input = g.input)),
              _
            );
          }
          D.exports = s;
        },
        85353: (D, V, d) => {
          var s = d(43603),
            g = d(57803),
            M = d(90955),
            _ = d(61342),
            T = d(89763),
            K = "[object Boolean]",
            U = "[object Date]",
            I = "[object Map]",
            G = "[object Number]",
            se = "[object RegExp]",
            pe = "[object Set]",
            ve = "[object String]",
            je = "[object Symbol]",
            We = "[object ArrayBuffer]",
            Me = "[object DataView]",
            Q = "[object Float32Array]",
            ge = "[object Float64Array]",
            Ae = "[object Int8Array]",
            ae = "[object Int16Array]",
            me = "[object Int32Array]",
            fe = "[object Uint8Array]",
            Pe = "[object Uint8ClampedArray]",
            he = "[object Uint16Array]",
            Le = "[object Uint32Array]";
          function Je(Ye, nt, Xe) {
            var tt = Ye.constructor;
            switch (nt) {
              case We:
                return s(Ye);
              case K:
              case U:
                return new tt(+Ye);
              case Me:
                return g(Ye, Xe);
              case Q:
              case ge:
              case Ae:
              case ae:
              case me:
              case fe:
              case Pe:
              case he:
              case Le:
                return T(Ye, Xe);
              case I:
                return new tt();
              case G:
              case ve:
                return new tt(Ye);
              case se:
                return M(Ye);
              case pe:
                return new tt();
              case je:
                return _(Ye);
            }
          }
          D.exports = Je;
        },
        41927: (D, V, d) => {
          var s = d(35898),
            g = d(89553),
            M = d(34149);
          function _(T) {
            return typeof T.constructor == "function" && !M(T) ? s(g(T)) : {};
          }
          D.exports = _;
        },
        62439: (D) => {
          var V = 9007199254740991,
            d = /^(?:0|[1-9]\d*)$/;
          function s(g, M) {
            var _ = typeof g;
            return (
              (M = M ?? V),
              !!M &&
                (_ == "number" || (_ != "symbol" && d.test(g))) &&
                g > -1 &&
                g % 1 == 0 &&
                g < M
            );
          }
          D.exports = s;
        },
        90544: (D, V, d) => {
          var s = d(83491),
            g = d(4036),
            M = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            _ = /^\w*$/;
          function T(K, U) {
            if (s(K)) return !1;
            var I = typeof K;
            return I == "number" ||
              I == "symbol" ||
              I == "boolean" ||
              K == null ||
              g(K)
              ? !0
              : _.test(K) || !M.test(K) || (U != null && K in Object(U));
          }
          D.exports = T;
        },
        32132: (D) => {
          function V(d) {
            var s = typeof d;
            return s == "string" ||
              s == "number" ||
              s == "symbol" ||
              s == "boolean"
              ? d !== "__proto__"
              : d === null;
          }
          D.exports = V;
        },
        54454: (D, V, d) => {
          var s = d(25551),
            g = (function () {
              var _ = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || "");
              return _ ? "Symbol(src)_1." + _ : "";
            })();
          function M(_) {
            return !!g && g in _;
          }
          D.exports = M;
        },
        34149: (D) => {
          var V = Object.prototype;
          function d(s) {
            var g = s && s.constructor,
              M = (typeof g == "function" && g.prototype) || V;
            return s === M;
          }
          D.exports = d;
        },
        49462: (D, V, d) => {
          var s = d(97827);
          function g(M) {
            return M === M && !s(M);
          }
          D.exports = g;
        },
        4316: (D) => {
          function V() {
            (this.__data__ = []), (this.size = 0);
          }
          D.exports = V;
        },
        63770: (D, V, d) => {
          var s = d(85775),
            g = Array.prototype,
            M = g.splice;
          function _(T) {
            var K = this.__data__,
              U = s(K, T);
            if (U < 0) return !1;
            var I = K.length - 1;
            return U == I ? K.pop() : M.call(K, U, 1), --this.size, !0;
          }
          D.exports = _;
        },
        34869: (D, V, d) => {
          var s = d(85775);
          function g(M) {
            var _ = this.__data__,
              T = s(_, M);
            return T < 0 ? void 0 : _[T][1];
          }
          D.exports = g;
        },
        17977: (D, V, d) => {
          var s = d(85775);
          function g(M) {
            return s(this.__data__, M) > -1;
          }
          D.exports = g;
        },
        52209: (D, V, d) => {
          var s = d(85775);
          function g(M, _) {
            var T = this.__data__,
              K = s(T, M);
            return K < 0 ? (++this.size, T.push([M, _])) : (T[K][1] = _), this;
          }
          D.exports = g;
        },
        14366: (D, V, d) => {
          var s = d(72987),
            g = d(63937),
            M = d(44925);
          function _() {
            (this.size = 0),
              (this.__data__ = {
                hash: new s(),
                map: new (M || g)(),
                string: new s(),
              });
          }
          D.exports = _;
        },
        60856: (D, V, d) => {
          var s = d(5073);
          function g(M) {
            var _ = s(this, M).delete(M);
            return (this.size -= _ ? 1 : 0), _;
          }
          D.exports = g;
        },
        29435: (D, V, d) => {
          var s = d(5073);
          function g(M) {
            return s(this, M).get(M);
          }
          D.exports = g;
        },
        12375: (D, V, d) => {
          var s = d(5073);
          function g(M) {
            return s(this, M).has(M);
          }
          D.exports = g;
        },
        55103: (D, V, d) => {
          var s = d(5073);
          function g(M, _) {
            var T = s(this, M),
              K = T.size;
            return T.set(M, _), (this.size += T.size == K ? 0 : 1), this;
          }
          D.exports = g;
        },
        74059: (D) => {
          function V(d) {
            var s = -1,
              g = Array(d.size);
            return (
              d.forEach(function (M, _) {
                g[++s] = [_, M];
              }),
              g
            );
          }
          D.exports = V;
        },
        77031: (D) => {
          function V(d, s) {
            return function (g) {
              return g == null
                ? !1
                : g[d] === s && (s !== void 0 || d in Object(g));
            };
          }
          D.exports = V;
        },
        85610: (D, V, d) => {
          var s = d(81334),
            g = 500;
          function M(_) {
            var T = s(_, function (U) {
                return K.size === g && K.clear(), U;
              }),
              K = T.cache;
            return T;
          }
          D.exports = M;
        },
        60316: (D, V, d) => {
          var s = d(73904),
            g = s(Object, "create");
          D.exports = g;
        },
        9716: (D, V, d) => {
          var s = d(48697),
            g = s(Object.keys, Object);
          D.exports = g;
        },
        86651: (D) => {
          function V(d) {
            var s = [];
            if (d != null) for (var g in Object(d)) s.push(g);
            return s;
          }
          D.exports = V;
        },
        25627: (D, V, d) => {
          D = d.nmd(D);
          var s = d(2286),
            g = V && !V.nodeType && V,
            M = g && !0 && D && !D.nodeType && D,
            _ = M && M.exports === g,
            T = _ && s.process,
            K = (function () {
              try {
                var U = M && M.require && M.require("util").types;
                return U || (T && T.binding && T.binding("util"));
              } catch {}
            })();
          D.exports = K;
        },
        3660: (D) => {
          var V = Object.prototype,
            d = V.toString;
          function s(g) {
            return d.call(g);
          }
          D.exports = s;
        },
        48697: (D) => {
          function V(d, s) {
            return function (g) {
              return d(s(g));
            };
          }
          D.exports = V;
        },
        26467: (D, V, d) => {
          var s = d(2286),
            g =
              typeof self == "object" && self && self.Object === Object && self,
            M = s || g || Function("return this")();
          D.exports = M;
        },
        98726: (D) => {
          var V = "__lodash_hash_undefined__";
          function d(s) {
            return this.__data__.set(s, V), this;
          }
          D.exports = d;
        },
        12961: (D) => {
          function V(d) {
            return this.__data__.has(d);
          }
          D.exports = V;
        },
        73697: (D) => {
          function V(d) {
            var s = -1,
              g = Array(d.size);
            return (
              d.forEach(function (M) {
                g[++s] = M;
              }),
              g
            );
          }
          D.exports = V;
        },
        2242: (D, V, d) => {
          var s = d(63937);
          function g() {
            (this.__data__ = new s()), (this.size = 0);
          }
          D.exports = g;
        },
        91668: (D) => {
          function V(d) {
            var s = this.__data__,
              g = s.delete(d);
            return (this.size = s.size), g;
          }
          D.exports = V;
        },
        41159: (D) => {
          function V(d) {
            return this.__data__.get(d);
          }
          D.exports = V;
        },
        20411: (D) => {
          function V(d) {
            return this.__data__.has(d);
          }
          D.exports = V;
        },
        11427: (D, V, d) => {
          var s = d(63937),
            g = d(44925),
            M = d(44023),
            _ = 200;
          function T(K, U) {
            var I = this.__data__;
            if (I instanceof s) {
              var G = I.__data__;
              if (!g || G.length < _ - 1)
                return G.push([K, U]), (this.size = ++I.size), this;
              I = this.__data__ = new M(G);
            }
            return I.set(K, U), (this.size = I.size), this;
          }
          D.exports = T;
        },
        20136: (D, V, d) => {
          var s = d(85610),
            g =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            M = /\\(\\)?/g,
            _ = s(function (T) {
              var K = [];
              return (
                T.charCodeAt(0) === 46 && K.push(""),
                T.replace(g, function (U, I, G, se) {
                  K.push(G ? se.replace(M, "$1") : I || U);
                }),
                K
              );
            });
          D.exports = _;
        },
        66507: (D, V, d) => {
          var s = d(4036),
            g = 1 / 0;
          function M(_) {
            if (typeof _ == "string" || s(_)) return _;
            var T = _ + "";
            return T == "0" && 1 / _ == -g ? "-0" : T;
          }
          D.exports = M;
        },
        32279: (D) => {
          var V = Function.prototype,
            d = V.toString;
          function s(g) {
            if (g != null) {
              try {
                return d.call(g);
              } catch {}
              try {
                return g + "";
              } catch {}
            }
            return "";
          }
          D.exports = s;
        },
        52305: (D, V, d) => {
          var s = d(40289),
            g = 1,
            M = 4;
          function _(T) {
            return s(T, g | M);
          }
          D.exports = _;
        },
        31722: (D) => {
          function V(d, s) {
            return d === s || (d !== d && s !== s);
          }
          D.exports = V;
        },
        62369: (D, V, d) => {
          var s = d(17707),
            g = d(77768);
          function M(_, T) {
            return _ && s(_, g(T));
          }
          D.exports = M;
        },
        52686: (D, V, d) => {
          var s = d(93328);
          function g(M, _, T) {
            var K = M == null ? void 0 : s(M, _);
            return K === void 0 ? T : K;
          }
          D.exports = g;
        },
        72989: (D, V, d) => {
          var s = d(58299),
            g = d(15720);
          function M(_, T) {
            return _ != null && g(_, T, s);
          }
          D.exports = M;
        },
        91398: (D) => {
          function V(d) {
            return d;
          }
          D.exports = V;
        },
        69214: (D, V, d) => {
          var s = d(59016),
            g = d(34172),
            M = Object.prototype,
            _ = M.hasOwnProperty,
            T = M.propertyIsEnumerable,
            K = s(
              (function () {
                return arguments;
              })(),
            )
              ? s
              : function (U) {
                  return g(U) && _.call(U, "callee") && !T.call(U, "callee");
                };
          D.exports = K;
        },
        83491: (D) => {
          var V = Array.isArray;
          D.exports = V;
        },
        97244: (D, V, d) => {
          var s = d(3316),
            g = d(19516);
          function M(_) {
            return _ != null && g(_.length) && !s(_);
          }
          D.exports = M;
        },
        33934: (D, V, d) => {
          D = d.nmd(D);
          var s = d(26467),
            g = d(77037),
            M = V && !V.nodeType && V,
            _ = M && !0 && D && !D.nodeType && D,
            T = _ && _.exports === M,
            K = T ? s.Buffer : void 0,
            U = K ? K.isBuffer : void 0,
            I = U || g;
          D.exports = I;
        },
        3316: (D, V, d) => {
          var s = d(78714),
            g = d(97827),
            M = "[object AsyncFunction]",
            _ = "[object Function]",
            T = "[object GeneratorFunction]",
            K = "[object Proxy]";
          function U(I) {
            if (!g(I)) return !1;
            var G = s(I);
            return G == _ || G == T || G == M || G == K;
          }
          D.exports = U;
        },
        19516: (D) => {
          var V = 9007199254740991;
          function d(s) {
            return typeof s == "number" && s > -1 && s % 1 == 0 && s <= V;
          }
          D.exports = d;
        },
        82052: (D, V, d) => {
          var s = d(39062),
            g = d(97371),
            M = d(25627),
            _ = M && M.isMap,
            T = _ ? g(_) : s;
          D.exports = T;
        },
        97827: (D) => {
          function V(d) {
            var s = typeof d;
            return d != null && (s == "object" || s == "function");
          }
          D.exports = V;
        },
        34172: (D) => {
          function V(d) {
            return d != null && typeof d == "object";
          }
          D.exports = V;
        },
        23449: (D, V, d) => {
          var s = d(78714),
            g = d(89553),
            M = d(34172),
            _ = "[object Object]",
            T = Function.prototype,
            K = Object.prototype,
            U = T.toString,
            I = K.hasOwnProperty,
            G = U.call(Object);
          function se(pe) {
            if (!M(pe) || s(pe) != _) return !1;
            var ve = g(pe);
            if (ve === null) return !0;
            var je = I.call(ve, "constructor") && ve.constructor;
            return (
              typeof je == "function" && je instanceof je && U.call(je) == G
            );
          }
          D.exports = se;
        },
        64406: (D, V, d) => {
          var s = d(64356),
            g = d(97371),
            M = d(25627),
            _ = M && M.isSet,
            T = _ ? g(_) : s;
          D.exports = T;
        },
        77837: (D, V, d) => {
          var s = d(78714),
            g = d(83491),
            M = d(34172),
            _ = "[object String]";
          function T(K) {
            return typeof K == "string" || (!g(K) && M(K) && s(K) == _);
          }
          D.exports = T;
        },
        4036: (D, V, d) => {
          var s = d(78714),
            g = d(34172),
            M = "[object Symbol]";
          function _(T) {
            return typeof T == "symbol" || (g(T) && s(T) == M);
          }
          D.exports = _;
        },
        8053: (D, V, d) => {
          var s = d(27),
            g = d(97371),
            M = d(25627),
            _ = M && M.isTypedArray,
            T = _ ? g(_) : s;
          D.exports = T;
        },
        33640: (D, V, d) => {
          var s = d(48353),
            g = d(49354),
            M = d(97244);
          function _(T) {
            return M(T) ? s(T) : g(T);
          }
          D.exports = _;
        },
        73591: (D, V, d) => {
          var s = d(48353),
            g = d(73101),
            M = d(97244);
          function _(T) {
            return M(T) ? s(T, !0) : g(T);
          }
          D.exports = _;
        },
        67160: (D, V, d) => {
          var s = d(27742),
            g = d(12507),
            M = d(47014),
            _ = d(83491);
          function T(K, U) {
            var I = _(K) ? s : M;
            return I(K, g(U, 3));
          }
          D.exports = T;
        },
        81334: (D, V, d) => {
          var s = d(44023),
            g = "Expected a function";
          function M(_, T) {
            if (typeof _ != "function" || (T != null && typeof T != "function"))
              throw new TypeError(g);
            var K = function () {
              var U = arguments,
                I = T ? T.apply(this, U) : U[0],
                G = K.cache;
              if (G.has(I)) return G.get(I);
              var se = _.apply(this, U);
              return (K.cache = G.set(I, se) || G), se;
            };
            return (K.cache = new (M.Cache || s)()), K;
          }
          (M.Cache = s), (D.exports = M);
        },
        39989: (D, V, d) => {
          var s = d(33171),
            g = d(60477),
            M = d(90544),
            _ = d(66507);
          function T(K) {
            return M(K) ? s(_(K)) : g(K);
          }
          D.exports = T;
        },
        16199: (D) => {
          function V() {
            return [];
          }
          D.exports = V;
        },
        77037: (D) => {
          function V() {
            return !1;
          }
          D.exports = V;
        },
        6468: (D, V, d) => {
          var s = d(15746);
          function g(M) {
            return M == null ? "" : s(M);
          }
          D.exports = g;
        },
        61257: (D, V, d) => {
          "use strict";
          d.d(V, { xk: () => Zu });
          var s = d(90626),
            g = d(85341),
            M = function (t, a, u, p, R) {
              var j = R.clientWidth,
                Y = R.clientHeight,
                re = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
                ue = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
                Ie = re - (R.getBoundingClientRect().left + window.pageXOffset),
                Ue = ue - (R.getBoundingClientRect().top + window.pageYOffset);
              if (u === "vertical") {
                var Ge = void 0;
                if (
                  (Ue < 0
                    ? (Ge = 0)
                    : Ue > Y
                      ? (Ge = 1)
                      : (Ge = Math.round((Ue * 100) / Y) / 100),
                  a.a !== Ge)
                )
                  return { h: a.h, s: a.s, l: a.l, a: Ge, source: "rgb" };
              } else {
                var Qe = void 0;
                if (
                  (Ie < 0
                    ? (Qe = 0)
                    : Ie > j
                      ? (Qe = 1)
                      : (Qe = Math.round((Ie * 100) / j) / 100),
                  p !== Qe)
                )
                  return { h: a.h, s: a.s, l: a.l, a: Qe, source: "rgb" };
              }
              return null;
            },
            _ = {},
            T = function (t, a, u, p) {
              if (typeof document > "u" && !p) return null;
              var R = p ? new p() : document.createElement("canvas");
              (R.width = u * 2), (R.height = u * 2);
              var j = R.getContext("2d");
              return j
                ? ((j.fillStyle = t),
                  j.fillRect(0, 0, R.width, R.height),
                  (j.fillStyle = a),
                  j.fillRect(0, 0, u, u),
                  j.translate(u, u),
                  j.fillRect(0, 0, u, u),
                  R.toDataURL())
                : null;
            },
            K = function (t, a, u, p) {
              var R = t + "-" + a + "-" + u + (p ? "-server" : "");
              if (_[R]) return _[R];
              var j = T(t, a, u, p);
              return (_[R] = j), j;
            },
            U =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            I = function (t) {
              var a = t.white,
                u = t.grey,
                p = t.size,
                R = t.renderers,
                j = t.borderRadius,
                Y = t.boxShadow,
                re = t.children,
                ue = (0, g.Ay)({
                  default: {
                    grid: {
                      borderRadius: j,
                      boxShadow: Y,
                      absolute: "0px 0px 0px 0px",
                      background:
                        "url(" + K(a, u, p, R.canvas) + ") center left",
                    },
                  },
                });
              return (0, s.isValidElement)(re)
                ? s.cloneElement(
                    re,
                    U({}, re.props, { style: U({}, re.props.style, ue.grid) }),
                  )
                : s.createElement("div", { style: ue.grid });
            };
          I.defaultProps = {
            size: 8,
            white: "transparent",
            grey: "rgba(0,0,0,.08)",
            renderers: {},
          };
          const G = I;
          var se =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            pe = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function ve(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function je(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function We(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var Me = (function (i) {
            We(t, i);
            function t() {
              var a, u, p, R;
              ve(this, t);
              for (var j = arguments.length, Y = Array(j), re = 0; re < j; re++)
                Y[re] = arguments[re];
              return (
                (R =
                  ((u =
                    ((p = je(
                      this,
                      (a = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                        a,
                        [this].concat(Y),
                      ),
                    )),
                    p)),
                  (p.handleChange = function (ue) {
                    var Ie = M(
                      ue,
                      p.props.hsl,
                      p.props.direction,
                      p.props.a,
                      p.container,
                    );
                    Ie &&
                      typeof p.props.onChange == "function" &&
                      p.props.onChange(Ie, ue);
                  }),
                  (p.handleMouseDown = function (ue) {
                    p.handleChange(ue),
                      window.addEventListener("mousemove", p.handleChange),
                      window.addEventListener("mouseup", p.handleMouseUp);
                  }),
                  (p.handleMouseUp = function () {
                    p.unbindEventListeners();
                  }),
                  (p.unbindEventListeners = function () {
                    window.removeEventListener("mousemove", p.handleChange),
                      window.removeEventListener("mouseup", p.handleMouseUp);
                  }),
                  u)),
                je(p, R)
              );
            }
            return (
              pe(t, [
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.unbindEventListeners();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var u = this,
                      p = this.props.rgb,
                      R = (0, g.Ay)(
                        {
                          default: {
                            alpha: {
                              absolute: "0px 0px 0px 0px",
                              borderRadius: this.props.radius,
                            },
                            checkboard: {
                              absolute: "0px 0px 0px 0px",
                              overflow: "hidden",
                              borderRadius: this.props.radius,
                            },
                            gradient: {
                              absolute: "0px 0px 0px 0px",
                              background:
                                "linear-gradient(to right, rgba(" +
                                p.r +
                                "," +
                                p.g +
                                "," +
                                p.b +
                                `, 0) 0%,
           rgba(` +
                                p.r +
                                "," +
                                p.g +
                                "," +
                                p.b +
                                ", 1) 100%)",
                              boxShadow: this.props.shadow,
                              borderRadius: this.props.radius,
                            },
                            container: {
                              position: "relative",
                              height: "100%",
                              margin: "0 3px",
                            },
                            pointer: {
                              position: "absolute",
                              left: p.a * 100 + "%",
                            },
                            slider: {
                              width: "4px",
                              borderRadius: "1px",
                              height: "8px",
                              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                              background: "#fff",
                              marginTop: "1px",
                              transform: "translateX(-2px)",
                            },
                          },
                          vertical: {
                            gradient: {
                              background:
                                "linear-gradient(to bottom, rgba(" +
                                p.r +
                                "," +
                                p.g +
                                "," +
                                p.b +
                                `, 0) 0%,
           rgba(` +
                                p.r +
                                "," +
                                p.g +
                                "," +
                                p.b +
                                ", 1) 100%)",
                            },
                            pointer: { left: 0, top: p.a * 100 + "%" },
                          },
                          overwrite: se({}, this.props.style),
                        },
                        {
                          vertical: this.props.direction === "vertical",
                          overwrite: !0,
                        },
                      );
                    return s.createElement(
                      "div",
                      { style: R.alpha },
                      s.createElement(
                        "div",
                        { style: R.checkboard },
                        s.createElement(G, { renderers: this.props.renderers }),
                      ),
                      s.createElement("div", { style: R.gradient }),
                      s.createElement(
                        "div",
                        {
                          style: R.container,
                          ref: function (Y) {
                            return (u.container = Y);
                          },
                          onMouseDown: this.handleMouseDown,
                          onTouchMove: this.handleChange,
                          onTouchStart: this.handleChange,
                        },
                        s.createElement(
                          "div",
                          { style: R.pointer },
                          this.props.pointer
                            ? s.createElement(this.props.pointer, this.props)
                            : s.createElement("div", { style: R.slider }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(s.PureComponent || s.Component);
          const Q = Me;
          var ge = (function () {
            function i(t, a) {
              for (var u = 0; u < a.length; u++) {
                var p = a[u];
                (p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  "value" in p && (p.writable = !0),
                  Object.defineProperty(t, p.key, p);
              }
            }
            return function (t, a, u) {
              return a && i(t.prototype, a), u && i(t, u), t;
            };
          })();
          function Ae(i, t, a) {
            return (
              t in i
                ? Object.defineProperty(i, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (i[t] = a),
              i
            );
          }
          function ae(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function me(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function fe(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var Pe = 1,
            he = 38,
            Le = 40,
            Je = [he, Le],
            Ye = function (t) {
              return Je.indexOf(t) > -1;
            },
            nt = function (t) {
              return Number(String(t).replace(/%/g, ""));
            },
            Xe = 1,
            tt = (function (i) {
              fe(t, i);
              function t(a) {
                ae(this, t);
                var u = me(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this),
                );
                return (
                  (u.handleBlur = function () {
                    u.state.blurValue &&
                      u.setState({ value: u.state.blurValue, blurValue: null });
                  }),
                  (u.handleChange = function (p) {
                    u.setUpdatedValue(p.target.value, p);
                  }),
                  (u.handleKeyDown = function (p) {
                    var R = nt(p.target.value);
                    if (!isNaN(R) && Ye(p.keyCode)) {
                      var j = u.getArrowOffset(),
                        Y = p.keyCode === he ? R + j : R - j;
                      u.setUpdatedValue(Y, p);
                    }
                  }),
                  (u.handleDrag = function (p) {
                    if (u.props.dragLabel) {
                      var R = Math.round(u.props.value + p.movementX);
                      R >= 0 &&
                        R <= u.props.dragMax &&
                        u.props.onChange &&
                        u.props.onChange(u.getValueObjectWithLabel(R), p);
                    }
                  }),
                  (u.handleMouseDown = function (p) {
                    u.props.dragLabel &&
                      (p.preventDefault(),
                      u.handleDrag(p),
                      window.addEventListener("mousemove", u.handleDrag),
                      window.addEventListener("mouseup", u.handleMouseUp));
                  }),
                  (u.handleMouseUp = function () {
                    u.unbindEventListeners();
                  }),
                  (u.unbindEventListeners = function () {
                    window.removeEventListener("mousemove", u.handleDrag),
                      window.removeEventListener("mouseup", u.handleMouseUp);
                  }),
                  (u.state = {
                    value: String(a.value).toUpperCase(),
                    blurValue: String(a.value).toUpperCase(),
                  }),
                  (u.inputId = "rc-editable-input-" + Xe++),
                  u
                );
              }
              return (
                ge(t, [
                  {
                    key: "componentDidUpdate",
                    value: function (u, p) {
                      this.props.value !== this.state.value &&
                        (u.value !== this.props.value ||
                          p.value !== this.state.value) &&
                        (this.input === document.activeElement
                          ? this.setState({
                              blurValue: String(this.props.value).toUpperCase(),
                            })
                          : this.setState({
                              value: String(this.props.value).toUpperCase(),
                              blurValue:
                                !this.state.blurValue &&
                                String(this.props.value).toUpperCase(),
                            }));
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.unbindEventListeners();
                    },
                  },
                  {
                    key: "getValueObjectWithLabel",
                    value: function (u) {
                      return Ae({}, this.props.label, u);
                    },
                  },
                  {
                    key: "getArrowOffset",
                    value: function () {
                      return this.props.arrowOffset || Pe;
                    },
                  },
                  {
                    key: "setUpdatedValue",
                    value: function (u, p) {
                      var R = this.props.label
                        ? this.getValueObjectWithLabel(u)
                        : u;
                      this.props.onChange && this.props.onChange(R, p),
                        this.setState({ value: u });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var u = this,
                        p = (0, g.Ay)(
                          {
                            default: { wrap: { position: "relative" } },
                            "user-override": {
                              wrap:
                                this.props.style && this.props.style.wrap
                                  ? this.props.style.wrap
                                  : {},
                              input:
                                this.props.style && this.props.style.input
                                  ? this.props.style.input
                                  : {},
                              label:
                                this.props.style && this.props.style.label
                                  ? this.props.style.label
                                  : {},
                            },
                            "dragLabel-true": {
                              label: { cursor: "ew-resize" },
                            },
                          },
                          { "user-override": !0 },
                          this.props,
                        );
                      return s.createElement(
                        "div",
                        { style: p.wrap },
                        s.createElement("input", {
                          id: this.inputId,
                          style: p.input,
                          ref: function (j) {
                            return (u.input = j);
                          },
                          value: this.state.value,
                          onKeyDown: this.handleKeyDown,
                          onChange: this.handleChange,
                          onBlur: this.handleBlur,
                          placeholder: this.props.placeholder,
                          spellCheck: "false",
                        }),
                        this.props.label && !this.props.hideLabel
                          ? s.createElement(
                              "label",
                              {
                                htmlFor: this.inputId,
                                style: p.label,
                                onMouseDown: this.handleMouseDown,
                              },
                              this.props.label,
                            )
                          : null,
                      );
                    },
                  },
                ]),
                t
              );
            })(s.PureComponent || s.Component);
          const Ne = tt;
          var B = function (t, a, u, p) {
              var R = p.clientWidth,
                j = p.clientHeight,
                Y = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
                re = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
                ue = Y - (p.getBoundingClientRect().left + window.pageXOffset),
                Ie = re - (p.getBoundingClientRect().top + window.pageYOffset);
              if (a === "vertical") {
                var Ue = void 0;
                if (Ie < 0) Ue = 359;
                else if (Ie > j) Ue = 0;
                else {
                  var Ge = -((Ie * 100) / j) + 100;
                  Ue = (360 * Ge) / 100;
                }
                if (u.h !== Ue)
                  return { h: Ue, s: u.s, l: u.l, a: u.a, source: "hsl" };
              } else {
                var Qe = void 0;
                if (ue < 0) Qe = 0;
                else if (ue > R) Qe = 359;
                else {
                  var at = (ue * 100) / R;
                  Qe = (360 * at) / 100;
                }
                if (u.h !== Qe)
                  return { h: Qe, s: u.s, l: u.l, a: u.a, source: "hsl" };
              }
              return null;
            },
            ne = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function $(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function X(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function ie(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var xe = (function (i) {
            ie(t, i);
            function t() {
              var a, u, p, R;
              $(this, t);
              for (var j = arguments.length, Y = Array(j), re = 0; re < j; re++)
                Y[re] = arguments[re];
              return (
                (R =
                  ((u =
                    ((p = X(
                      this,
                      (a = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                        a,
                        [this].concat(Y),
                      ),
                    )),
                    p)),
                  (p.handleChange = function (ue) {
                    var Ie = B(ue, p.props.direction, p.props.hsl, p.container);
                    Ie &&
                      typeof p.props.onChange == "function" &&
                      p.props.onChange(Ie, ue);
                  }),
                  (p.handleMouseDown = function (ue) {
                    p.handleChange(ue),
                      window.addEventListener("mousemove", p.handleChange),
                      window.addEventListener("mouseup", p.handleMouseUp);
                  }),
                  (p.handleMouseUp = function () {
                    p.unbindEventListeners();
                  }),
                  u)),
                X(p, R)
              );
            }
            return (
              ne(t, [
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.unbindEventListeners();
                  },
                },
                {
                  key: "unbindEventListeners",
                  value: function () {
                    window.removeEventListener("mousemove", this.handleChange),
                      window.removeEventListener("mouseup", this.handleMouseUp);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var u = this,
                      p = this.props.direction,
                      R = p === void 0 ? "horizontal" : p,
                      j = (0, g.Ay)(
                        {
                          default: {
                            hue: {
                              absolute: "0px 0px 0px 0px",
                              borderRadius: this.props.radius,
                              boxShadow: this.props.shadow,
                            },
                            container: {
                              padding: "0 2px",
                              position: "relative",
                              height: "100%",
                              borderRadius: this.props.radius,
                            },
                            pointer: {
                              position: "absolute",
                              left: (this.props.hsl.h * 100) / 360 + "%",
                            },
                            slider: {
                              marginTop: "1px",
                              width: "4px",
                              borderRadius: "1px",
                              height: "8px",
                              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                              background: "#fff",
                              transform: "translateX(-2px)",
                            },
                          },
                          vertical: {
                            pointer: {
                              left: "0px",
                              top:
                                -((this.props.hsl.h * 100) / 360) + 100 + "%",
                            },
                          },
                        },
                        { vertical: R === "vertical" },
                      );
                    return s.createElement(
                      "div",
                      { style: j.hue },
                      s.createElement(
                        "div",
                        {
                          className: "hue-" + R,
                          style: j.container,
                          ref: function (re) {
                            return (u.container = re);
                          },
                          onMouseDown: this.handleMouseDown,
                          onTouchMove: this.handleChange,
                          onTouchStart: this.handleChange,
                        },
                        s.createElement(
                          "style",
                          null,
                          `
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `,
                        ),
                        s.createElement(
                          "div",
                          { style: j.pointer },
                          this.props.pointer
                            ? s.createElement(this.props.pointer, this.props)
                            : s.createElement("div", { style: j.slider }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(s.PureComponent || s.Component);
          const Ce = xe;
          var Ve = d(61410),
            Ee = d.n(Ve);
          function rt() {
            (this.__data__ = []), (this.size = 0);
          }
          const ct = rt;
          function vt(i, t) {
            return i === t || (i !== i && t !== t);
          }
          const wt = vt;
          function yt(i, t) {
            for (var a = i.length; a--; ) if (wt(i[a][0], t)) return a;
            return -1;
          }
          const Ct = yt;
          var Rt = Array.prototype,
            Bt = Rt.splice;
          function be(i) {
            var t = this.__data__,
              a = Ct(t, i);
            if (a < 0) return !1;
            var u = t.length - 1;
            return a == u ? t.pop() : Bt.call(t, a, 1), --this.size, !0;
          }
          const ye = be;
          function Te(i) {
            var t = this.__data__,
              a = Ct(t, i);
            return a < 0 ? void 0 : t[a][1];
          }
          const Re = Te;
          function we(i) {
            return Ct(this.__data__, i) > -1;
          }
          const Be = we;
          function ze(i, t) {
            var a = this.__data__,
              u = Ct(a, i);
            return u < 0 ? (++this.size, a.push([i, t])) : (a[u][1] = t), this;
          }
          const qe = ze;
          function ft(i) {
            var t = -1,
              a = i == null ? 0 : i.length;
            for (this.clear(); ++t < a; ) {
              var u = i[t];
              this.set(u[0], u[1]);
            }
          }
          (ft.prototype.clear = ct),
            (ft.prototype.delete = ye),
            (ft.prototype.get = Re),
            (ft.prototype.has = Be),
            (ft.prototype.set = qe);
          const gt = ft;
          function mt() {
            (this.__data__ = new gt()), (this.size = 0);
          }
          const ht = mt;
          function dt(i) {
            var t = this.__data__,
              a = t.delete(i);
            return (this.size = t.size), a;
          }
          const Et = dt;
          function Ot(i) {
            return this.__data__.get(i);
          }
          const kt = Ot;
          function It(i) {
            return this.__data__.has(i);
          }
          const Dt = It;
          var jt =
            typeof global == "object" &&
            global &&
            global.Object === Object &&
            global;
          const an = jt;
          var ce =
              typeof self == "object" && self && self.Object === Object && self,
            b = an || ce || Function("return this")();
          const y = b;
          var P = y.Symbol;
          const H = P;
          var oe = Object.prototype,
            de = oe.hasOwnProperty,
            _e = oe.toString,
            N = H ? H.toStringTag : void 0;
          function o(i) {
            var t = de.call(i, N),
              a = i[N];
            try {
              i[N] = void 0;
              var u = !0;
            } catch {}
            var p = _e.call(i);
            return u && (t ? (i[N] = a) : delete i[N]), p;
          }
          const c = o;
          var m = Object.prototype,
            S = m.toString;
          function A(i) {
            return S.call(i);
          }
          const F = A;
          var ee = "[object Null]",
            Se = "[object Undefined]",
            et = H ? H.toStringTag : void 0;
          function st(i) {
            return i == null
              ? i === void 0
                ? Se
                : ee
              : et && et in Object(i)
                ? c(i)
                : F(i);
          }
          const Mt = st;
          function Qt(i) {
            var t = typeof i;
            return i != null && (t == "object" || t == "function");
          }
          const Lt = Qt;
          var Vt = "[object AsyncFunction]",
            wr = "[object Function]",
            zn = "[object GeneratorFunction]",
            Sr = "[object Proxy]";
          function Pr(i) {
            if (!Lt(i)) return !1;
            var t = Mt(i);
            return t == wr || t == zn || t == Vt || t == Sr;
          }
          const Hn = Pr;
          var _r = y["__core-js_shared__"];
          const jn = _r;
          var Kn = (function () {
            var i = /[^.]+$/.exec((jn && jn.keys && jn.keys.IE_PROTO) || "");
            return i ? "Symbol(src)_1." + i : "";
          })();
          function Cr(i) {
            return !!Kn && Kn in i;
          }
          const Tn = Cr;
          var Vn = Function.prototype,
            Un = Vn.toString;
          function qt(i) {
            if (i != null) {
              try {
                return Un.call(i);
              } catch {}
              try {
                return i + "";
              } catch {}
            }
            return "";
          }
          const cn = qt;
          var Er = /[\\^$.*+?()[\]{}|]/g,
            w = /^\[object .+?Constructor\]$/,
            x = Function.prototype,
            E = Object.prototype,
            O = x.toString,
            k = E.hasOwnProperty,
            z = RegExp(
              "^" +
                O.call(k)
                  .replace(Er, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?",
                  ) +
                "$",
            );
          function J(i) {
            if (!Lt(i) || Tn(i)) return !1;
            var t = Hn(i) ? z : w;
            return t.test(cn(i));
          }
          const te = J;
          function q(i, t) {
            return i?.[t];
          }
          const le = q;
          function ke(i, t) {
            var a = le(i, t);
            return te(a) ? a : void 0;
          }
          const Oe = ke;
          var He = Oe(y, "Map");
          const $e = He;
          var it = Oe(Object, "create");
          const xt = it;
          function Nt() {
            (this.__data__ = xt ? xt(null) : {}), (this.size = 0);
          }
          const _t = Nt;
          function dn(i) {
            var t = this.has(i) && delete this.__data__[i];
            return (this.size -= t ? 1 : 0), t;
          }
          const wn = dn;
          var Wn = "__lodash_hash_undefined__",
            en = Object.prototype,
            Sn = en.hasOwnProperty;
          function pn(i) {
            var t = this.__data__;
            if (xt) {
              var a = t[i];
              return a === Wn ? void 0 : a;
            }
            return Sn.call(t, i) ? t[i] : void 0;
          }
          const kn = pn;
          var ni = Object.prototype,
            Fi = ni.hasOwnProperty;
          function Bi(i) {
            var t = this.__data__;
            return xt ? t[i] !== void 0 : Fi.call(t, i);
          }
          const Li = Bi;
          var ri = "__lodash_hash_undefined__";
          function ii(i, t) {
            var a = this.__data__;
            return (
              (this.size += this.has(i) ? 0 : 1),
              (a[i] = xt && t === void 0 ? ri : t),
              this
            );
          }
          const zi = ii;
          function Nn(i) {
            var t = -1,
              a = i == null ? 0 : i.length;
            for (this.clear(); ++t < a; ) {
              var u = i[t];
              this.set(u[0], u[1]);
            }
          }
          (Nn.prototype.clear = _t),
            (Nn.prototype.delete = wn),
            (Nn.prototype.get = kn),
            (Nn.prototype.has = Li),
            (Nn.prototype.set = zi);
          const Ir = Nn;
          function oi() {
            (this.size = 0),
              (this.__data__ = {
                hash: new Ir(),
                map: new ($e || gt)(),
                string: new Ir(),
              });
          }
          const si = oi;
          function Fr(i) {
            var t = typeof i;
            return t == "string" ||
              t == "number" ||
              t == "symbol" ||
              t == "boolean"
              ? i !== "__proto__"
              : i === null;
          }
          const li = Fr;
          function ai(i, t) {
            var a = i.__data__;
            return li(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
          }
          const Jn = ai;
          function ci(i) {
            var t = Jn(this, i).delete(i);
            return (this.size -= t ? 1 : 0), t;
          }
          const Hi = ci;
          function ji(i) {
            return Jn(this, i).get(i);
          }
          const Ki = ji;
          function Ut(i) {
            return Jn(this, i).has(i);
          }
          const Wt = Ut;
          function Vi(i, t) {
            var a = Jn(this, i),
              u = a.size;
            return a.set(i, t), (this.size += a.size == u ? 0 : 1), this;
          }
          const Ui = Vi;
          function Dn(i) {
            var t = -1,
              a = i == null ? 0 : i.length;
            for (this.clear(); ++t < a; ) {
              var u = i[t];
              this.set(u[0], u[1]);
            }
          }
          (Dn.prototype.clear = si),
            (Dn.prototype.delete = Hi),
            (Dn.prototype.get = Ki),
            (Dn.prototype.has = Wt),
            (Dn.prototype.set = Ui);
          const tn = Dn;
          var Wi = 200;
          function Br(i, t) {
            var a = this.__data__;
            if (a instanceof gt) {
              var u = a.__data__;
              if (!$e || u.length < Wi - 1)
                return u.push([i, t]), (this.size = ++a.size), this;
              a = this.__data__ = new tn(u);
            }
            return a.set(i, t), (this.size = a.size), this;
          }
          const Lr = Br;
          function Rn(i) {
            var t = (this.__data__ = new gt(i));
            this.size = t.size;
          }
          (Rn.prototype.clear = ht),
            (Rn.prototype.delete = Et),
            (Rn.prototype.get = kt),
            (Rn.prototype.has = Dt),
            (Rn.prototype.set = Lr);
          const Gn = Rn;
          var Or = (function () {
            try {
              var i = Oe(Object, "defineProperty");
              return i({}, "", {}), i;
            } catch {}
          })();
          const Mr = Or;
          function zr(i, t, a) {
            t == "__proto__" && Mr
              ? Mr(i, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: a,
                  writable: !0,
                })
              : (i[t] = a);
          }
          const gn = zr;
          function Ji(i, t, a) {
            ((a !== void 0 && !wt(i[t], a)) || (a === void 0 && !(t in i))) &&
              gn(i, t, a);
          }
          const Hr = Ji;
          function Gi(i) {
            return function (t, a, u) {
              for (var p = -1, R = Object(t), j = u(t), Y = j.length; Y--; ) {
                var re = j[i ? Y : ++p];
                if (a(R[re], re, R) === !1) break;
              }
              return t;
            };
          }
          var $i = Gi();
          const fi = $i;
          var Ar = typeof sn == "object" && sn && !sn.nodeType && sn,
            jr = Ar && typeof ln == "object" && ln && !ln.nodeType && ln,
            Xi = jr && jr.exports === Ar,
            Kr = Xi ? y.Buffer : void 0,
            ui = Kr ? Kr.allocUnsafe : void 0;
          function hi(i, t) {
            if (t) return i.slice();
            var a = i.length,
              u = ui ? ui(a) : new i.constructor(a);
            return i.copy(u), u;
          }
          const di = hi;
          var Yi = y.Uint8Array;
          const Tr = Yi;
          function kr(i) {
            var t = new i.constructor(i.byteLength);
            return new Tr(t).set(new Tr(i)), t;
          }
          const Zi = kr;
          function $n(i, t) {
            var a = t ? Zi(i.buffer) : i.buffer;
            return new i.constructor(a, i.byteOffset, i.length);
          }
          const Qi = $n;
          function qi(i, t) {
            var a = -1,
              u = i.length;
            for (t || (t = Array(u)); ++a < u; ) t[a] = i[a];
            return t;
          }
          const Xn = qi;
          var Vr = Object.create,
            pi = (function () {
              function i() {}
              return function (t) {
                if (!Lt(t)) return {};
                if (Vr) return Vr(t);
                i.prototype = t;
                var a = new i();
                return (i.prototype = void 0), a;
              };
            })();
          const gi = pi;
          function Yn(i, t) {
            return function (a) {
              return i(t(a));
            };
          }
          const Zn = Yn;
          var mn = Zn(Object.getPrototypeOf, Object);
          const Nr = mn;
          var Xt = Object.prototype;
          function Pn(i) {
            var t = i && i.constructor,
              a = (typeof t == "function" && t.prototype) || Xt;
            return i === a;
          }
          const fn = Pn;
          function zt(i) {
            return typeof i.constructor == "function" && !fn(i)
              ? gi(Nr(i))
              : {};
          }
          const Kt = zt;
          function bn(i) {
            return i != null && typeof i == "object";
          }
          const yn = bn;
          var mi = "[object Arguments]";
          function eo(i) {
            return yn(i) && Mt(i) == mi;
          }
          const Ur = eo;
          var Wr = Object.prototype,
            Dr = Wr.hasOwnProperty,
            Cn = Wr.propertyIsEnumerable,
            Jr = Ur(
              (function () {
                return arguments;
              })(),
            )
              ? Ur
              : function (i) {
                  return yn(i) && Dr.call(i, "callee") && !Cn.call(i, "callee");
                };
          const Qn = Jr;
          var Gr = Array.isArray;
          const Jt = Gr;
          var to = 9007199254740991;
          function no(i) {
            return typeof i == "number" && i > -1 && i % 1 == 0 && i <= to;
          }
          const $r = no;
          function bi(i) {
            return i != null && $r(i.length) && !Hn(i);
          }
          const En = bi;
          function ro(i) {
            return yn(i) && En(i);
          }
          const yi = ro;
          function io() {
            return !1;
          }
          const oo = io;
          var xi = typeof sn == "object" && sn && !sn.nodeType && sn,
            vi = xi && typeof ln == "object" && ln && !ln.nodeType && ln,
            so = vi && vi.exports === xi,
            Xr = so ? y.Buffer : void 0,
            lo = Xr ? Xr.isBuffer : void 0,
            ao = lo || oo;
          const _n = ao;
          var co = "[object Object]",
            wi = Function.prototype,
            $o = Object.prototype,
            fo = wi.toString,
            Xo = $o.hasOwnProperty,
            uo = fo.call(Object);
          function Si(i) {
            if (!yn(i) || Mt(i) != co) return !1;
            var t = Nr(i);
            if (t === null) return !0;
            var a = Xo.call(t, "constructor") && t.constructor;
            return typeof a == "function" && a instanceof a && fo.call(a) == uo;
          }
          const Ci = Si;
          var Ei = "[object Arguments]",
            ho = "[object Array]",
            Oi = "[object Boolean]",
            po = "[object Date]",
            Mi = "[object Error]",
            n = "[object Function]",
            e = "[object Map]",
            r = "[object Number]",
            l = "[object Object]",
            f = "[object RegExp]",
            h = "[object Set]",
            v = "[object String]",
            C = "[object WeakMap]",
            L = "[object ArrayBuffer]",
            W = "[object DataView]",
            Z = "[object Float32Array]",
            De = "[object Float64Array]",
            Ke = "[object Int8Array]",
            Ze = "[object Int16Array]",
            Fe = "[object Int32Array]",
            pt = "[object Uint8Array]",
            ot = "[object Uint8ClampedArray]",
            At = "[object Uint16Array]",
            Gt = "[object Uint32Array]",
            Tt = {};
          (Tt[Z] =
            Tt[De] =
            Tt[Ke] =
            Tt[Ze] =
            Tt[Fe] =
            Tt[pt] =
            Tt[ot] =
            Tt[At] =
            Tt[Gt] =
              !0),
            (Tt[Ei] =
              Tt[ho] =
              Tt[L] =
              Tt[Oi] =
              Tt[W] =
              Tt[po] =
              Tt[Mi] =
              Tt[n] =
              Tt[e] =
              Tt[r] =
              Tt[l] =
              Tt[f] =
              Tt[h] =
              Tt[v] =
              Tt[C] =
                !1);
          function xn(i) {
            return yn(i) && $r(i.length) && !!Tt[Mt(i)];
          }
          const On = xn;
          function $t(i) {
            return function (t) {
              return i(t);
            };
          }
          const Yr = $t;
          var qn = typeof sn == "object" && sn && !sn.nodeType && sn,
            St = qn && typeof ln == "object" && ln && !ln.nodeType && ln,
            vn = St && St.exports === qn,
            In = vn && an.process,
            go = (function () {
              try {
                var i = St && St.require && St.require("util").types;
                return i || (In && In.binding && In.binding("util"));
              } catch {}
            })();
          const Yo = go;
          var Zo = Yo && Yo.isTypedArray,
            Ys = Zo ? Yr(Zo) : On;
          const mo = Ys;
          function Zs(i, t) {
            if (
              !(t === "constructor" && typeof i[t] == "function") &&
              t != "__proto__"
            )
              return i[t];
          }
          const bo = Zs;
          var Qs = Object.prototype,
            qs = Qs.hasOwnProperty;
          function el(i, t, a) {
            var u = i[t];
            (!(qs.call(i, t) && wt(u, a)) || (a === void 0 && !(t in i))) &&
              gn(i, t, a);
          }
          const tl = el;
          function nl(i, t, a, u) {
            var p = !a;
            a || (a = {});
            for (var R = -1, j = t.length; ++R < j; ) {
              var Y = t[R],
                re = u ? u(a[Y], i[Y], Y, a, i) : void 0;
              re === void 0 && (re = i[Y]), p ? gn(a, Y, re) : tl(a, Y, re);
            }
            return a;
          }
          const rl = nl;
          function il(i, t) {
            for (var a = -1, u = Array(i); ++a < i; ) u[a] = t(a);
            return u;
          }
          const ol = il;
          var sl = 9007199254740991,
            ll = /^(?:0|[1-9]\d*)$/;
          function al(i, t) {
            var a = typeof i;
            return (
              (t = t ?? sl),
              !!t &&
                (a == "number" || (a != "symbol" && ll.test(i))) &&
                i > -1 &&
                i % 1 == 0 &&
                i < t
            );
          }
          const yo = al;
          var cl = Object.prototype,
            fl = cl.hasOwnProperty;
          function ul(i, t) {
            var a = Jt(i),
              u = !a && Qn(i),
              p = !a && !u && _n(i),
              R = !a && !u && !p && mo(i),
              j = a || u || p || R,
              Y = j ? ol(i.length, String) : [],
              re = Y.length;
            for (var ue in i)
              (t || fl.call(i, ue)) &&
                !(
                  j &&
                  (ue == "length" ||
                    (p && (ue == "offset" || ue == "parent")) ||
                    (R &&
                      (ue == "buffer" ||
                        ue == "byteLength" ||
                        ue == "byteOffset")) ||
                    yo(ue, re))
                ) &&
                Y.push(ue);
            return Y;
          }
          const Qo = ul;
          function hl(i) {
            var t = [];
            if (i != null) for (var a in Object(i)) t.push(a);
            return t;
          }
          const dl = hl;
          var pl = Object.prototype,
            gl = pl.hasOwnProperty;
          function ml(i) {
            if (!Lt(i)) return dl(i);
            var t = fn(i),
              a = [];
            for (var u in i)
              (u == "constructor" && (t || !gl.call(i, u))) || a.push(u);
            return a;
          }
          const bl = ml;
          function yl(i) {
            return En(i) ? Qo(i, !0) : bl(i);
          }
          const qo = yl;
          function xl(i) {
            return rl(i, qo(i));
          }
          const vl = xl;
          function wl(i, t, a, u, p, R, j) {
            var Y = bo(i, a),
              re = bo(t, a),
              ue = j.get(re);
            if (ue) {
              Hr(i, a, ue);
              return;
            }
            var Ie = R ? R(Y, re, a + "", i, t, j) : void 0,
              Ue = Ie === void 0;
            if (Ue) {
              var Ge = Jt(re),
                Qe = !Ge && _n(re),
                at = !Ge && !Qe && mo(re);
              (Ie = re),
                Ge || Qe || at
                  ? Jt(Y)
                    ? (Ie = Y)
                    : yi(Y)
                      ? (Ie = Xn(Y))
                      : Qe
                        ? ((Ue = !1), (Ie = di(re, !0)))
                        : at
                          ? ((Ue = !1), (Ie = Qi(re, !0)))
                          : (Ie = [])
                  : Ci(re) || Qn(re)
                    ? ((Ie = Y),
                      Qn(Y) ? (Ie = vl(Y)) : (!Lt(Y) || Hn(Y)) && (Ie = Kt(re)))
                    : (Ue = !1);
            }
            Ue && (j.set(re, Ie), p(Ie, re, u, R, j), j.delete(re)),
              Hr(i, a, Ie);
          }
          const Sl = wl;
          function es(i, t, a, u, p) {
            i !== t &&
              fi(
                t,
                function (R, j) {
                  if ((p || (p = new Gn()), Lt(R))) Sl(i, t, j, a, es, u, p);
                  else {
                    var Y = u ? u(bo(i, j), R, j + "", i, t, p) : void 0;
                    Y === void 0 && (Y = R), Hr(i, j, Y);
                  }
                },
                qo,
              );
          }
          const Cl = es;
          function El(i) {
            return i;
          }
          const Ai = El;
          function Ol(i, t, a) {
            switch (a.length) {
              case 0:
                return i.call(t);
              case 1:
                return i.call(t, a[0]);
              case 2:
                return i.call(t, a[0], a[1]);
              case 3:
                return i.call(t, a[0], a[1], a[2]);
            }
            return i.apply(t, a);
          }
          const Ml = Ol;
          var ts = Math.max;
          function Al(i, t, a) {
            return (
              (t = ts(t === void 0 ? i.length - 1 : t, 0)),
              function () {
                for (
                  var u = arguments,
                    p = -1,
                    R = ts(u.length - t, 0),
                    j = Array(R);
                  ++p < R;
                )
                  j[p] = u[t + p];
                p = -1;
                for (var Y = Array(t + 1); ++p < t; ) Y[p] = u[p];
                return (Y[t] = a(j)), Ml(i, this, Y);
              }
            );
          }
          const Tl = Al;
          function kl(i) {
            return function () {
              return i;
            };
          }
          const Nl = kl;
          var Dl = Mr
            ? function (i, t) {
                return Mr(i, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Nl(t),
                  writable: !0,
                });
              }
            : Ai;
          const Rl = Dl;
          var Pl = 800,
            _l = 16,
            Il = Date.now;
          function Fl(i) {
            var t = 0,
              a = 0;
            return function () {
              var u = Il(),
                p = _l - (u - a);
              if (((a = u), p > 0)) {
                if (++t >= Pl) return arguments[0];
              } else t = 0;
              return i.apply(void 0, arguments);
            };
          }
          var Bl = Fl(Rl);
          const Ll = Bl;
          function zl(i, t) {
            return Ll(Tl(i, t, Ai), i + "");
          }
          const Hl = zl;
          function jl(i, t, a) {
            if (!Lt(a)) return !1;
            var u = typeof t;
            return (
              u == "number"
                ? En(a) && yo(t, a.length)
                : u == "string" && t in a
            )
              ? wt(a[t], i)
              : !1;
          }
          const Kl = jl;
          function Vl(i) {
            return Hl(function (t, a) {
              var u = -1,
                p = a.length,
                R = p > 1 ? a[p - 1] : void 0,
                j = p > 2 ? a[2] : void 0;
              for (
                R = i.length > 3 && typeof R == "function" ? (p--, R) : void 0,
                  j && Kl(a[0], a[1], j) && ((R = p < 3 ? void 0 : R), (p = 1)),
                  t = Object(t);
                ++u < p;
              ) {
                var Y = a[u];
                Y && i(t, Y, u, R);
              }
              return t;
            });
          }
          var Ul = Vl(function (i, t, a) {
            Cl(i, t, a);
          });
          const Yt = Ul;
          var xo = function (t) {
            var a = t.zDepth,
              u = t.radius,
              p = t.background,
              R = t.children,
              j = t.styles,
              Y = j === void 0 ? {} : j,
              re = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      wrap: { position: "relative", display: "inline-block" },
                      content: { position: "relative" },
                      bg: {
                        absolute: "0px 0px 0px 0px",
                        boxShadow:
                          "0 " + a + "px " + a * 4 + "px rgba(0,0,0,.24)",
                        borderRadius: u,
                        background: p,
                      },
                    },
                    "zDepth-0": { bg: { boxShadow: "none" } },
                    "zDepth-1": {
                      bg: {
                        boxShadow:
                          "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)",
                      },
                    },
                    "zDepth-2": {
                      bg: {
                        boxShadow:
                          "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)",
                      },
                    },
                    "zDepth-3": {
                      bg: {
                        boxShadow:
                          "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)",
                      },
                    },
                    "zDepth-4": {
                      bg: {
                        boxShadow:
                          "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)",
                      },
                    },
                    "zDepth-5": {
                      bg: {
                        boxShadow:
                          "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)",
                      },
                    },
                    square: { bg: { borderRadius: "0" } },
                    circle: { bg: { borderRadius: "50%" } },
                  },
                  Y,
                ),
                { "zDepth-1": a === 1 },
              );
            return s.createElement(
              "div",
              { style: re.wrap },
              s.createElement("div", { style: re.bg }),
              s.createElement("div", { style: re.content }, R),
            );
          };
          (xo.propTypes = {
            background: Ee().string,
            zDepth: Ee().oneOf([0, 1, 2, 3, 4, 5]),
            radius: Ee().number,
            styles: Ee().object,
          }),
            (xo.defaultProps = {
              background: "#fff",
              zDepth: 1,
              radius: 2,
              styles: {},
            });
          const vo = xo;
          var Wl = function () {
            return y.Date.now();
          };
          const wo = Wl;
          var Jl = /\s/;
          function Gl(i) {
            for (var t = i.length; t-- && Jl.test(i.charAt(t)); );
            return t;
          }
          const $l = Gl;
          var Xl = /^\s+/;
          function Yl(i) {
            return i && i.slice(0, $l(i) + 1).replace(Xl, "");
          }
          const Zl = Yl;
          var Ql = "[object Symbol]";
          function ql(i) {
            return typeof i == "symbol" || (yn(i) && Mt(i) == Ql);
          }
          const Ti = ql;
          var ns = NaN,
            ea = /^[-+]0x[0-9a-f]+$/i,
            ta = /^0b[01]+$/i,
            na = /^0o[0-7]+$/i,
            ra = parseInt;
          function ia(i) {
            if (typeof i == "number") return i;
            if (Ti(i)) return ns;
            if (Lt(i)) {
              var t = typeof i.valueOf == "function" ? i.valueOf() : i;
              i = Lt(t) ? t + "" : t;
            }
            if (typeof i != "string") return i === 0 ? i : +i;
            i = Zl(i);
            var a = ta.test(i);
            return a || na.test(i)
              ? ra(i.slice(2), a ? 2 : 8)
              : ea.test(i)
                ? ns
                : +i;
          }
          const rs = ia;
          var oa = "Expected a function",
            sa = Math.max,
            la = Math.min;
          function aa(i, t, a) {
            var u,
              p,
              R,
              j,
              Y,
              re,
              ue = 0,
              Ie = !1,
              Ue = !1,
              Ge = !0;
            if (typeof i != "function") throw new TypeError(oa);
            (t = rs(t) || 0),
              Lt(a) &&
                ((Ie = !!a.leading),
                (Ue = "maxWait" in a),
                (R = Ue ? sa(rs(a.maxWait) || 0, t) : R),
                (Ge = "trailing" in a ? !!a.trailing : Ge));
            function Qe(Ht) {
              var Ln = u,
                ti = p;
              return (u = p = void 0), (ue = Ht), (j = i.apply(ti, Ln)), j;
            }
            function at(Ht) {
              return (ue = Ht), (Y = setTimeout(Pt, t)), Ie ? Qe(Ht) : j;
            }
            function ut(Ht) {
              var Ln = Ht - re,
                ti = Ht - ue,
                $s = t - Ln;
              return Ue ? la($s, R - ti) : $s;
            }
            function bt(Ht) {
              var Ln = Ht - re,
                ti = Ht - ue;
              return re === void 0 || Ln >= t || Ln < 0 || (Ue && ti >= R);
            }
            function Pt() {
              var Ht = wo();
              if (bt(Ht)) return rn(Ht);
              Y = setTimeout(Pt, ut(Ht));
            }
            function rn(Ht) {
              return (Y = void 0), Ge && u ? Qe(Ht) : ((u = p = void 0), j);
            }
            function vr() {
              Y !== void 0 && clearTimeout(Y),
                (ue = 0),
                (u = re = p = Y = void 0);
            }
            function on() {
              return Y === void 0 ? j : rn(wo());
            }
            function Bn() {
              var Ht = wo(),
                Ln = bt(Ht);
              if (((u = arguments), (p = this), (re = Ht), Ln)) {
                if (Y === void 0) return at(re);
                if (Ue) return clearTimeout(Y), (Y = setTimeout(Pt, t)), Qe(re);
              }
              return Y === void 0 && (Y = setTimeout(Pt, t)), j;
            }
            return (Bn.cancel = vr), (Bn.flush = on), Bn;
          }
          const is = aa;
          var ca = "Expected a function";
          function fa(i, t, a) {
            var u = !0,
              p = !0;
            if (typeof i != "function") throw new TypeError(ca);
            return (
              Lt(a) &&
                ((u = "leading" in a ? !!a.leading : u),
                (p = "trailing" in a ? !!a.trailing : p)),
              is(i, t, { leading: u, maxWait: t, trailing: p })
            );
          }
          const ua = fa;
          var ha = function (t, a, u) {
              var p = u.getBoundingClientRect(),
                R = p.width,
                j = p.height,
                Y = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
                re = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
                ue = Y - (u.getBoundingClientRect().left + window.pageXOffset),
                Ie = re - (u.getBoundingClientRect().top + window.pageYOffset);
              ue < 0 ? (ue = 0) : ue > R && (ue = R),
                Ie < 0 ? (Ie = 0) : Ie > j && (Ie = j);
              var Ue = ue / R,
                Ge = 1 - Ie / j;
              return { h: a.h, s: Ue, v: Ge, a: a.a, source: "hsv" };
            },
            da = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function pa(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function ga(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function ma(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var ba = (function (i) {
            ma(t, i);
            function t(a) {
              pa(this, t);
              var u = ga(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, a),
              );
              return (
                (u.handleChange = function (p) {
                  typeof u.props.onChange == "function" &&
                    u.throttle(
                      u.props.onChange,
                      ha(p, u.props.hsl, u.container),
                      p,
                    );
                }),
                (u.handleMouseDown = function (p) {
                  u.handleChange(p);
                  var R = u.getContainerRenderWindow();
                  R.addEventListener("mousemove", u.handleChange),
                    R.addEventListener("mouseup", u.handleMouseUp);
                }),
                (u.handleMouseUp = function () {
                  u.unbindEventListeners();
                }),
                (u.throttle = ua(function (p, R, j) {
                  p(R, j);
                }, 50)),
                u
              );
            }
            return (
              da(t, [
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.throttle.cancel(), this.unbindEventListeners();
                  },
                },
                {
                  key: "getContainerRenderWindow",
                  value: function () {
                    for (
                      var u = this.container, p = window;
                      !p.document.contains(u) && p.parent !== p;
                    )
                      p = p.parent;
                    return p;
                  },
                },
                {
                  key: "unbindEventListeners",
                  value: function () {
                    var u = this.getContainerRenderWindow();
                    u.removeEventListener("mousemove", this.handleChange),
                      u.removeEventListener("mouseup", this.handleMouseUp);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var u = this,
                      p = this.props.style || {},
                      R = p.color,
                      j = p.white,
                      Y = p.black,
                      re = p.pointer,
                      ue = p.circle,
                      Ie = (0, g.Ay)(
                        {
                          default: {
                            color: {
                              absolute: "0px 0px 0px 0px",
                              background:
                                "hsl(" + this.props.hsl.h + ",100%, 50%)",
                              borderRadius: this.props.radius,
                            },
                            white: {
                              absolute: "0px 0px 0px 0px",
                              borderRadius: this.props.radius,
                            },
                            black: {
                              absolute: "0px 0px 0px 0px",
                              boxShadow: this.props.shadow,
                              borderRadius: this.props.radius,
                            },
                            pointer: {
                              position: "absolute",
                              top: -(this.props.hsv.v * 100) + 100 + "%",
                              left: this.props.hsv.s * 100 + "%",
                              cursor: "default",
                            },
                            circle: {
                              width: "4px",
                              height: "4px",
                              boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
                              borderRadius: "50%",
                              cursor: "hand",
                              transform: "translate(-2px, -2px)",
                            },
                          },
                          custom: {
                            color: R,
                            white: j,
                            black: Y,
                            pointer: re,
                            circle: ue,
                          },
                        },
                        { custom: !!this.props.style },
                      );
                    return s.createElement(
                      "div",
                      {
                        style: Ie.color,
                        ref: function (Ge) {
                          return (u.container = Ge);
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange,
                      },
                      s.createElement(
                        "style",
                        null,
                        `
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `,
                      ),
                      s.createElement(
                        "div",
                        { style: Ie.white, className: "saturation-white" },
                        s.createElement("div", {
                          style: Ie.black,
                          className: "saturation-black",
                        }),
                        s.createElement(
                          "div",
                          { style: Ie.pointer },
                          this.props.pointer
                            ? s.createElement(this.props.pointer, this.props)
                            : s.createElement("div", { style: Ie.circle }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(s.PureComponent || s.Component);
          const ki = ba;
          function ya(i, t) {
            for (
              var a = -1, u = i == null ? 0 : i.length;
              ++a < u && t(i[a], a, i) !== !1;
            );
            return i;
          }
          const xa = ya;
          var va = Zn(Object.keys, Object);
          const wa = va;
          var Sa = Object.prototype,
            Ca = Sa.hasOwnProperty;
          function Ea(i) {
            if (!fn(i)) return wa(i);
            var t = [];
            for (var a in Object(i))
              Ca.call(i, a) && a != "constructor" && t.push(a);
            return t;
          }
          const Oa = Ea;
          function Ma(i) {
            return En(i) ? Qo(i) : Oa(i);
          }
          const So = Ma;
          function Aa(i, t) {
            return i && fi(i, t, So);
          }
          const Ta = Aa;
          function ka(i, t) {
            return function (a, u) {
              if (a == null) return a;
              if (!En(a)) return i(a, u);
              for (
                var p = a.length, R = t ? p : -1, j = Object(a);
                (t ? R-- : ++R < p) && u(j[R], R, j) !== !1;
              );
              return a;
            };
          }
          var Na = ka(Ta);
          const ss = Na;
          function Da(i) {
            return typeof i == "function" ? i : Ai;
          }
          const Ra = Da;
          function Pa(i, t) {
            var a = Jt(i) ? xa : ss;
            return a(i, Ra(t));
          }
          const _a = Pa;
          function Ni(i) {
            "@babel/helpers - typeof";
            return (
              (Ni =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        typeof Symbol == "function" &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              Ni(i)
            );
          }
          var Ia = /^\s+/,
            Fa = /\s+$/;
          function lt(i, t) {
            if (((i = i || ""), (t = t || {}), i instanceof lt)) return i;
            if (!(this instanceof lt)) return new lt(i, t);
            var a = Ba(i);
            (this._originalInput = i),
              (this._r = a.r),
              (this._g = a.g),
              (this._b = a.b),
              (this._a = a.a),
              (this._roundA = Math.round(100 * this._a) / 100),
              (this._format = t.format || a.format),
              (this._gradientType = t.gradientType),
              this._r < 1 && (this._r = Math.round(this._r)),
              this._g < 1 && (this._g = Math.round(this._g)),
              this._b < 1 && (this._b = Math.round(this._b)),
              (this._ok = a.ok);
          }
          (lt.prototype = {
            isDark: function () {
              return this.getBrightness() < 128;
            },
            isLight: function () {
              return !this.isDark();
            },
            isValid: function () {
              return this._ok;
            },
            getOriginalInput: function () {
              return this._originalInput;
            },
            getFormat: function () {
              return this._format;
            },
            getAlpha: function () {
              return this._a;
            },
            getBrightness: function () {
              var t = this.toRgb();
              return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
            },
            getLuminance: function () {
              var t = this.toRgb(),
                a,
                u,
                p,
                R,
                j,
                Y;
              return (
                (a = t.r / 255),
                (u = t.g / 255),
                (p = t.b / 255),
                a <= 0.03928
                  ? (R = a / 12.92)
                  : (R = Math.pow((a + 0.055) / 1.055, 2.4)),
                u <= 0.03928
                  ? (j = u / 12.92)
                  : (j = Math.pow((u + 0.055) / 1.055, 2.4)),
                p <= 0.03928
                  ? (Y = p / 12.92)
                  : (Y = Math.pow((p + 0.055) / 1.055, 2.4)),
                0.2126 * R + 0.7152 * j + 0.0722 * Y
              );
            },
            setAlpha: function (t) {
              return (
                (this._a = hs(t)),
                (this._roundA = Math.round(100 * this._a) / 100),
                this
              );
            },
            toHsv: function () {
              var t = as(this._r, this._g, this._b);
              return { h: t.h * 360, s: t.s, v: t.v, a: this._a };
            },
            toHsvString: function () {
              var t = as(this._r, this._g, this._b),
                a = Math.round(t.h * 360),
                u = Math.round(t.s * 100),
                p = Math.round(t.v * 100);
              return this._a == 1
                ? "hsv(" + a + ", " + u + "%, " + p + "%)"
                : "hsva(" +
                    a +
                    ", " +
                    u +
                    "%, " +
                    p +
                    "%, " +
                    this._roundA +
                    ")";
            },
            toHsl: function () {
              var t = ls(this._r, this._g, this._b);
              return { h: t.h * 360, s: t.s, l: t.l, a: this._a };
            },
            toHslString: function () {
              var t = ls(this._r, this._g, this._b),
                a = Math.round(t.h * 360),
                u = Math.round(t.s * 100),
                p = Math.round(t.l * 100);
              return this._a == 1
                ? "hsl(" + a + ", " + u + "%, " + p + "%)"
                : "hsla(" +
                    a +
                    ", " +
                    u +
                    "%, " +
                    p +
                    "%, " +
                    this._roundA +
                    ")";
            },
            toHex: function (t) {
              return cs(this._r, this._g, this._b, t);
            },
            toHexString: function (t) {
              return "#" + this.toHex(t);
            },
            toHex8: function (t) {
              return ja(this._r, this._g, this._b, this._a, t);
            },
            toHex8String: function (t) {
              return "#" + this.toHex8(t);
            },
            toRgb: function () {
              return {
                r: Math.round(this._r),
                g: Math.round(this._g),
                b: Math.round(this._b),
                a: this._a,
              };
            },
            toRgbString: function () {
              return this._a == 1
                ? "rgb(" +
                    Math.round(this._r) +
                    ", " +
                    Math.round(this._g) +
                    ", " +
                    Math.round(this._b) +
                    ")"
                : "rgba(" +
                    Math.round(this._r) +
                    ", " +
                    Math.round(this._g) +
                    ", " +
                    Math.round(this._b) +
                    ", " +
                    this._roundA +
                    ")";
            },
            toPercentageRgb: function () {
              return {
                r: Math.round(Ft(this._r, 255) * 100) + "%",
                g: Math.round(Ft(this._g, 255) * 100) + "%",
                b: Math.round(Ft(this._b, 255) * 100) + "%",
                a: this._a,
              };
            },
            toPercentageRgbString: function () {
              return this._a == 1
                ? "rgb(" +
                    Math.round(Ft(this._r, 255) * 100) +
                    "%, " +
                    Math.round(Ft(this._g, 255) * 100) +
                    "%, " +
                    Math.round(Ft(this._b, 255) * 100) +
                    "%)"
                : "rgba(" +
                    Math.round(Ft(this._r, 255) * 100) +
                    "%, " +
                    Math.round(Ft(this._g, 255) * 100) +
                    "%, " +
                    Math.round(Ft(this._b, 255) * 100) +
                    "%, " +
                    this._roundA +
                    ")";
            },
            toName: function () {
              return this._a === 0
                ? "transparent"
                : this._a < 1
                  ? !1
                  : qa[cs(this._r, this._g, this._b, !0)] || !1;
            },
            toFilter: function (t) {
              var a = "#" + fs(this._r, this._g, this._b, this._a),
                u = a,
                p = this._gradientType ? "GradientType = 1, " : "";
              if (t) {
                var R = lt(t);
                u = "#" + fs(R._r, R._g, R._b, R._a);
              }
              return (
                "progid:DXImageTransform.Microsoft.gradient(" +
                p +
                "startColorstr=" +
                a +
                ",endColorstr=" +
                u +
                ")"
              );
            },
            toString: function (t) {
              var a = !!t;
              t = t || this._format;
              var u = !1,
                p = this._a < 1 && this._a >= 0,
                R =
                  !a &&
                  p &&
                  (t === "hex" ||
                    t === "hex6" ||
                    t === "hex3" ||
                    t === "hex4" ||
                    t === "hex8" ||
                    t === "name");
              return R
                ? t === "name" && this._a === 0
                  ? this.toName()
                  : this.toRgbString()
                : (t === "rgb" && (u = this.toRgbString()),
                  t === "prgb" && (u = this.toPercentageRgbString()),
                  (t === "hex" || t === "hex6") && (u = this.toHexString()),
                  t === "hex3" && (u = this.toHexString(!0)),
                  t === "hex4" && (u = this.toHex8String(!0)),
                  t === "hex8" && (u = this.toHex8String()),
                  t === "name" && (u = this.toName()),
                  t === "hsl" && (u = this.toHslString()),
                  t === "hsv" && (u = this.toHsvString()),
                  u || this.toHexString());
            },
            clone: function () {
              return lt(this.toString());
            },
            _applyModification: function (t, a) {
              var u = t.apply(null, [this].concat([].slice.call(a)));
              return (
                (this._r = u._r),
                (this._g = u._g),
                (this._b = u._b),
                this.setAlpha(u._a),
                this
              );
            },
            lighten: function () {
              return this._applyModification(Wa, arguments);
            },
            brighten: function () {
              return this._applyModification(Ja, arguments);
            },
            darken: function () {
              return this._applyModification(Ga, arguments);
            },
            desaturate: function () {
              return this._applyModification(Ka, arguments);
            },
            saturate: function () {
              return this._applyModification(Va, arguments);
            },
            greyscale: function () {
              return this._applyModification(Ua, arguments);
            },
            spin: function () {
              return this._applyModification($a, arguments);
            },
            _applyCombination: function (t, a) {
              return t.apply(null, [this].concat([].slice.call(a)));
            },
            analogous: function () {
              return this._applyCombination(Za, arguments);
            },
            complement: function () {
              return this._applyCombination(Xa, arguments);
            },
            monochromatic: function () {
              return this._applyCombination(Qa, arguments);
            },
            splitcomplement: function () {
              return this._applyCombination(Ya, arguments);
            },
            triad: function () {
              return this._applyCombination(us, [3]);
            },
            tetrad: function () {
              return this._applyCombination(us, [4]);
            },
          }),
            (lt.fromRatio = function (i, t) {
              if (Ni(i) == "object") {
                var a = {};
                for (var u in i)
                  i.hasOwnProperty(u) &&
                    (u === "a" ? (a[u] = i[u]) : (a[u] = Zr(i[u])));
                i = a;
              }
              return lt(i, t);
            });
          function Ba(i) {
            var t = { r: 0, g: 0, b: 0 },
              a = 1,
              u = null,
              p = null,
              R = null,
              j = !1,
              Y = !1;
            return (
              typeof i == "string" && (i = rc(i)),
              Ni(i) == "object" &&
                (Mn(i.r) && Mn(i.g) && Mn(i.b)
                  ? ((t = La(i.r, i.g, i.b)),
                    (j = !0),
                    (Y = String(i.r).substr(-1) === "%" ? "prgb" : "rgb"))
                  : Mn(i.h) && Mn(i.s) && Mn(i.v)
                    ? ((u = Zr(i.s)),
                      (p = Zr(i.v)),
                      (t = Ha(i.h, u, p)),
                      (j = !0),
                      (Y = "hsv"))
                    : Mn(i.h) &&
                      Mn(i.s) &&
                      Mn(i.l) &&
                      ((u = Zr(i.s)),
                      (R = Zr(i.l)),
                      (t = za(i.h, u, R)),
                      (j = !0),
                      (Y = "hsl")),
                i.hasOwnProperty("a") && (a = i.a)),
              (a = hs(a)),
              {
                ok: j,
                format: i.format || Y,
                r: Math.min(255, Math.max(t.r, 0)),
                g: Math.min(255, Math.max(t.g, 0)),
                b: Math.min(255, Math.max(t.b, 0)),
                a,
              }
            );
          }
          function La(i, t, a) {
            return {
              r: Ft(i, 255) * 255,
              g: Ft(t, 255) * 255,
              b: Ft(a, 255) * 255,
            };
          }
          function ls(i, t, a) {
            (i = Ft(i, 255)), (t = Ft(t, 255)), (a = Ft(a, 255));
            var u = Math.max(i, t, a),
              p = Math.min(i, t, a),
              R,
              j,
              Y = (u + p) / 2;
            if (u == p) R = j = 0;
            else {
              var re = u - p;
              switch (((j = Y > 0.5 ? re / (2 - u - p) : re / (u + p)), u)) {
                case i:
                  R = (t - a) / re + (t < a ? 6 : 0);
                  break;
                case t:
                  R = (a - i) / re + 2;
                  break;
                case a:
                  R = (i - t) / re + 4;
                  break;
              }
              R /= 6;
            }
            return { h: R, s: j, l: Y };
          }
          function za(i, t, a) {
            var u, p, R;
            (i = Ft(i, 360)), (t = Ft(t, 100)), (a = Ft(a, 100));
            function j(ue, Ie, Ue) {
              return (
                Ue < 0 && (Ue += 1),
                Ue > 1 && (Ue -= 1),
                Ue < 1 / 6
                  ? ue + (Ie - ue) * 6 * Ue
                  : Ue < 1 / 2
                    ? Ie
                    : Ue < 2 / 3
                      ? ue + (Ie - ue) * (2 / 3 - Ue) * 6
                      : ue
              );
            }
            if (t === 0) u = p = R = a;
            else {
              var Y = a < 0.5 ? a * (1 + t) : a + t - a * t,
                re = 2 * a - Y;
              (u = j(re, Y, i + 1 / 3)),
                (p = j(re, Y, i)),
                (R = j(re, Y, i - 1 / 3));
            }
            return { r: u * 255, g: p * 255, b: R * 255 };
          }
          function as(i, t, a) {
            (i = Ft(i, 255)), (t = Ft(t, 255)), (a = Ft(a, 255));
            var u = Math.max(i, t, a),
              p = Math.min(i, t, a),
              R,
              j,
              Y = u,
              re = u - p;
            if (((j = u === 0 ? 0 : re / u), u == p)) R = 0;
            else {
              switch (u) {
                case i:
                  R = (t - a) / re + (t < a ? 6 : 0);
                  break;
                case t:
                  R = (a - i) / re + 2;
                  break;
                case a:
                  R = (i - t) / re + 4;
                  break;
              }
              R /= 6;
            }
            return { h: R, s: j, v: Y };
          }
          function Ha(i, t, a) {
            (i = Ft(i, 360) * 6), (t = Ft(t, 100)), (a = Ft(a, 100));
            var u = Math.floor(i),
              p = i - u,
              R = a * (1 - t),
              j = a * (1 - p * t),
              Y = a * (1 - (1 - p) * t),
              re = u % 6,
              ue = [a, j, R, R, Y, a][re],
              Ie = [Y, a, a, j, R, R][re],
              Ue = [R, R, Y, a, a, j][re];
            return { r: ue * 255, g: Ie * 255, b: Ue * 255 };
          }
          function cs(i, t, a, u) {
            var p = [
              un(Math.round(i).toString(16)),
              un(Math.round(t).toString(16)),
              un(Math.round(a).toString(16)),
            ];
            return u &&
              p[0].charAt(0) == p[0].charAt(1) &&
              p[1].charAt(0) == p[1].charAt(1) &&
              p[2].charAt(0) == p[2].charAt(1)
              ? p[0].charAt(0) + p[1].charAt(0) + p[2].charAt(0)
              : p.join("");
          }
          function ja(i, t, a, u, p) {
            var R = [
              un(Math.round(i).toString(16)),
              un(Math.round(t).toString(16)),
              un(Math.round(a).toString(16)),
              un(ds(u)),
            ];
            return p &&
              R[0].charAt(0) == R[0].charAt(1) &&
              R[1].charAt(0) == R[1].charAt(1) &&
              R[2].charAt(0) == R[2].charAt(1) &&
              R[3].charAt(0) == R[3].charAt(1)
              ? R[0].charAt(0) +
                  R[1].charAt(0) +
                  R[2].charAt(0) +
                  R[3].charAt(0)
              : R.join("");
          }
          function fs(i, t, a, u) {
            var p = [
              un(ds(u)),
              un(Math.round(i).toString(16)),
              un(Math.round(t).toString(16)),
              un(Math.round(a).toString(16)),
            ];
            return p.join("");
          }
          (lt.equals = function (i, t) {
            return !i || !t ? !1 : lt(i).toRgbString() == lt(t).toRgbString();
          }),
            (lt.random = function () {
              return lt.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
              });
            });
          function Ka(i, t) {
            t = t === 0 ? 0 : t || 10;
            var a = lt(i).toHsl();
            return (a.s -= t / 100), (a.s = Di(a.s)), lt(a);
          }
          function Va(i, t) {
            t = t === 0 ? 0 : t || 10;
            var a = lt(i).toHsl();
            return (a.s += t / 100), (a.s = Di(a.s)), lt(a);
          }
          function Ua(i) {
            return lt(i).desaturate(100);
          }
          function Wa(i, t) {
            t = t === 0 ? 0 : t || 10;
            var a = lt(i).toHsl();
            return (a.l += t / 100), (a.l = Di(a.l)), lt(a);
          }
          function Ja(i, t) {
            t = t === 0 ? 0 : t || 10;
            var a = lt(i).toRgb();
            return (
              (a.r = Math.max(
                0,
                Math.min(255, a.r - Math.round(255 * -(t / 100))),
              )),
              (a.g = Math.max(
                0,
                Math.min(255, a.g - Math.round(255 * -(t / 100))),
              )),
              (a.b = Math.max(
                0,
                Math.min(255, a.b - Math.round(255 * -(t / 100))),
              )),
              lt(a)
            );
          }
          function Ga(i, t) {
            t = t === 0 ? 0 : t || 10;
            var a = lt(i).toHsl();
            return (a.l -= t / 100), (a.l = Di(a.l)), lt(a);
          }
          function $a(i, t) {
            var a = lt(i).toHsl(),
              u = (a.h + t) % 360;
            return (a.h = u < 0 ? 360 + u : u), lt(a);
          }
          function Xa(i) {
            var t = lt(i).toHsl();
            return (t.h = (t.h + 180) % 360), lt(t);
          }
          function us(i, t) {
            if (isNaN(t) || t <= 0)
              throw new Error("Argument to polyad must be a positive number");
            for (
              var a = lt(i).toHsl(), u = [lt(i)], p = 360 / t, R = 1;
              R < t;
              R++
            )
              u.push(lt({ h: (a.h + R * p) % 360, s: a.s, l: a.l }));
            return u;
          }
          function Ya(i) {
            var t = lt(i).toHsl(),
              a = t.h;
            return [
              lt(i),
              lt({ h: (a + 72) % 360, s: t.s, l: t.l }),
              lt({ h: (a + 216) % 360, s: t.s, l: t.l }),
            ];
          }
          function Za(i, t, a) {
            (t = t || 6), (a = a || 30);
            var u = lt(i).toHsl(),
              p = 360 / a,
              R = [lt(i)];
            for (u.h = (u.h - ((p * t) >> 1) + 720) % 360; --t; )
              (u.h = (u.h + p) % 360), R.push(lt(u));
            return R;
          }
          function Qa(i, t) {
            t = t || 6;
            for (
              var a = lt(i).toHsv(),
                u = a.h,
                p = a.s,
                R = a.v,
                j = [],
                Y = 1 / t;
              t--;
            )
              j.push(lt({ h: u, s: p, v: R })), (R = (R + Y) % 1);
            return j;
          }
          (lt.mix = function (i, t, a) {
            a = a === 0 ? 0 : a || 50;
            var u = lt(i).toRgb(),
              p = lt(t).toRgb(),
              R = a / 100,
              j = {
                r: (p.r - u.r) * R + u.r,
                g: (p.g - u.g) * R + u.g,
                b: (p.b - u.b) * R + u.b,
                a: (p.a - u.a) * R + u.a,
              };
            return lt(j);
          }),
            (lt.readability = function (i, t) {
              var a = lt(i),
                u = lt(t);
              return (
                (Math.max(a.getLuminance(), u.getLuminance()) + 0.05) /
                (Math.min(a.getLuminance(), u.getLuminance()) + 0.05)
              );
            }),
            (lt.isReadable = function (i, t, a) {
              var u = lt.readability(i, t),
                p,
                R;
              switch (((R = !1), (p = ic(a)), p.level + p.size)) {
                case "AAsmall":
                case "AAAlarge":
                  R = u >= 4.5;
                  break;
                case "AAlarge":
                  R = u >= 3;
                  break;
                case "AAAsmall":
                  R = u >= 7;
                  break;
              }
              return R;
            }),
            (lt.mostReadable = function (i, t, a) {
              var u = null,
                p = 0,
                R,
                j,
                Y,
                re;
              (a = a || {}),
                (j = a.includeFallbackColors),
                (Y = a.level),
                (re = a.size);
              for (var ue = 0; ue < t.length; ue++)
                (R = lt.readability(i, t[ue])),
                  R > p && ((p = R), (u = lt(t[ue])));
              return lt.isReadable(i, u, { level: Y, size: re }) || !j
                ? u
                : ((a.includeFallbackColors = !1),
                  lt.mostReadable(i, ["#fff", "#000"], a));
            });
          var Co = (lt.names = {
              aliceblue: "f0f8ff",
              antiquewhite: "faebd7",
              aqua: "0ff",
              aquamarine: "7fffd4",
              azure: "f0ffff",
              beige: "f5f5dc",
              bisque: "ffe4c4",
              black: "000",
              blanchedalmond: "ffebcd",
              blue: "00f",
              blueviolet: "8a2be2",
              brown: "a52a2a",
              burlywood: "deb887",
              burntsienna: "ea7e5d",
              cadetblue: "5f9ea0",
              chartreuse: "7fff00",
              chocolate: "d2691e",
              coral: "ff7f50",
              cornflowerblue: "6495ed",
              cornsilk: "fff8dc",
              crimson: "dc143c",
              cyan: "0ff",
              darkblue: "00008b",
              darkcyan: "008b8b",
              darkgoldenrod: "b8860b",
              darkgray: "a9a9a9",
              darkgreen: "006400",
              darkgrey: "a9a9a9",
              darkkhaki: "bdb76b",
              darkmagenta: "8b008b",
              darkolivegreen: "556b2f",
              darkorange: "ff8c00",
              darkorchid: "9932cc",
              darkred: "8b0000",
              darksalmon: "e9967a",
              darkseagreen: "8fbc8f",
              darkslateblue: "483d8b",
              darkslategray: "2f4f4f",
              darkslategrey: "2f4f4f",
              darkturquoise: "00ced1",
              darkviolet: "9400d3",
              deeppink: "ff1493",
              deepskyblue: "00bfff",
              dimgray: "696969",
              dimgrey: "696969",
              dodgerblue: "1e90ff",
              firebrick: "b22222",
              floralwhite: "fffaf0",
              forestgreen: "228b22",
              fuchsia: "f0f",
              gainsboro: "dcdcdc",
              ghostwhite: "f8f8ff",
              gold: "ffd700",
              goldenrod: "daa520",
              gray: "808080",
              green: "008000",
              greenyellow: "adff2f",
              grey: "808080",
              honeydew: "f0fff0",
              hotpink: "ff69b4",
              indianred: "cd5c5c",
              indigo: "4b0082",
              ivory: "fffff0",
              khaki: "f0e68c",
              lavender: "e6e6fa",
              lavenderblush: "fff0f5",
              lawngreen: "7cfc00",
              lemonchiffon: "fffacd",
              lightblue: "add8e6",
              lightcoral: "f08080",
              lightcyan: "e0ffff",
              lightgoldenrodyellow: "fafad2",
              lightgray: "d3d3d3",
              lightgreen: "90ee90",
              lightgrey: "d3d3d3",
              lightpink: "ffb6c1",
              lightsalmon: "ffa07a",
              lightseagreen: "20b2aa",
              lightskyblue: "87cefa",
              lightslategray: "789",
              lightslategrey: "789",
              lightsteelblue: "b0c4de",
              lightyellow: "ffffe0",
              lime: "0f0",
              limegreen: "32cd32",
              linen: "faf0e6",
              magenta: "f0f",
              maroon: "800000",
              mediumaquamarine: "66cdaa",
              mediumblue: "0000cd",
              mediumorchid: "ba55d3",
              mediumpurple: "9370db",
              mediumseagreen: "3cb371",
              mediumslateblue: "7b68ee",
              mediumspringgreen: "00fa9a",
              mediumturquoise: "48d1cc",
              mediumvioletred: "c71585",
              midnightblue: "191970",
              mintcream: "f5fffa",
              mistyrose: "ffe4e1",
              moccasin: "ffe4b5",
              navajowhite: "ffdead",
              navy: "000080",
              oldlace: "fdf5e6",
              olive: "808000",
              olivedrab: "6b8e23",
              orange: "ffa500",
              orangered: "ff4500",
              orchid: "da70d6",
              palegoldenrod: "eee8aa",
              palegreen: "98fb98",
              paleturquoise: "afeeee",
              palevioletred: "db7093",
              papayawhip: "ffefd5",
              peachpuff: "ffdab9",
              peru: "cd853f",
              pink: "ffc0cb",
              plum: "dda0dd",
              powderblue: "b0e0e6",
              purple: "800080",
              rebeccapurple: "663399",
              red: "f00",
              rosybrown: "bc8f8f",
              royalblue: "4169e1",
              saddlebrown: "8b4513",
              salmon: "fa8072",
              sandybrown: "f4a460",
              seagreen: "2e8b57",
              seashell: "fff5ee",
              sienna: "a0522d",
              silver: "c0c0c0",
              skyblue: "87ceeb",
              slateblue: "6a5acd",
              slategray: "708090",
              slategrey: "708090",
              snow: "fffafa",
              springgreen: "00ff7f",
              steelblue: "4682b4",
              tan: "d2b48c",
              teal: "008080",
              thistle: "d8bfd8",
              tomato: "ff6347",
              turquoise: "40e0d0",
              violet: "ee82ee",
              wheat: "f5deb3",
              white: "fff",
              whitesmoke: "f5f5f5",
              yellow: "ff0",
              yellowgreen: "9acd32",
            }),
            qa = (lt.hexNames = ec(Co));
          function ec(i) {
            var t = {};
            for (var a in i) i.hasOwnProperty(a) && (t[i[a]] = a);
            return t;
          }
          function hs(i) {
            return (
              (i = parseFloat(i)), (isNaN(i) || i < 0 || i > 1) && (i = 1), i
            );
          }
          function Ft(i, t) {
            tc(i) && (i = "100%");
            var a = nc(i);
            return (
              (i = Math.min(t, Math.max(0, parseFloat(i)))),
              a && (i = parseInt(i * t, 10) / 100),
              Math.abs(i - t) < 1e-6 ? 1 : (i % t) / parseFloat(t)
            );
          }
          function Di(i) {
            return Math.min(1, Math.max(0, i));
          }
          function nn(i) {
            return parseInt(i, 16);
          }
          function tc(i) {
            return (
              typeof i == "string" &&
              i.indexOf(".") != -1 &&
              parseFloat(i) === 1
            );
          }
          function nc(i) {
            return typeof i == "string" && i.indexOf("%") != -1;
          }
          function un(i) {
            return i.length == 1 ? "0" + i : "" + i;
          }
          function Zr(i) {
            return i <= 1 && (i = i * 100 + "%"), i;
          }
          function ds(i) {
            return Math.round(parseFloat(i) * 255).toString(16);
          }
          function ps(i) {
            return nn(i) / 255;
          }
          var hn = (function () {
            var i = "[-\\+]?\\d+%?",
              t = "[-\\+]?\\d*\\.\\d+%?",
              a = "(?:" + t + ")|(?:" + i + ")",
              u =
                "[\\s|\\(]+(" +
                a +
                ")[,|\\s]+(" +
                a +
                ")[,|\\s]+(" +
                a +
                ")\\s*\\)?",
              p =
                "[\\s|\\(]+(" +
                a +
                ")[,|\\s]+(" +
                a +
                ")[,|\\s]+(" +
                a +
                ")[,|\\s]+(" +
                a +
                ")\\s*\\)?";
            return {
              CSS_UNIT: new RegExp(a),
              rgb: new RegExp("rgb" + u),
              rgba: new RegExp("rgba" + p),
              hsl: new RegExp("hsl" + u),
              hsla: new RegExp("hsla" + p),
              hsv: new RegExp("hsv" + u),
              hsva: new RegExp("hsva" + p),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            };
          })();
          function Mn(i) {
            return !!hn.CSS_UNIT.exec(i);
          }
          function rc(i) {
            i = i.replace(Ia, "").replace(Fa, "").toLowerCase();
            var t = !1;
            if (Co[i]) (i = Co[i]), (t = !0);
            else if (i == "transparent")
              return { r: 0, g: 0, b: 0, a: 0, format: "name" };
            var a;
            return (a = hn.rgb.exec(i))
              ? { r: a[1], g: a[2], b: a[3] }
              : (a = hn.rgba.exec(i))
                ? { r: a[1], g: a[2], b: a[3], a: a[4] }
                : (a = hn.hsl.exec(i))
                  ? { h: a[1], s: a[2], l: a[3] }
                  : (a = hn.hsla.exec(i))
                    ? { h: a[1], s: a[2], l: a[3], a: a[4] }
                    : (a = hn.hsv.exec(i))
                      ? { h: a[1], s: a[2], v: a[3] }
                      : (a = hn.hsva.exec(i))
                        ? { h: a[1], s: a[2], v: a[3], a: a[4] }
                        : (a = hn.hex8.exec(i))
                          ? {
                              r: nn(a[1]),
                              g: nn(a[2]),
                              b: nn(a[3]),
                              a: ps(a[4]),
                              format: t ? "name" : "hex8",
                            }
                          : (a = hn.hex6.exec(i))
                            ? {
                                r: nn(a[1]),
                                g: nn(a[2]),
                                b: nn(a[3]),
                                format: t ? "name" : "hex",
                              }
                            : (a = hn.hex4.exec(i))
                              ? {
                                  r: nn(a[1] + "" + a[1]),
                                  g: nn(a[2] + "" + a[2]),
                                  b: nn(a[3] + "" + a[3]),
                                  a: ps(a[4] + "" + a[4]),
                                  format: t ? "name" : "hex8",
                                }
                              : (a = hn.hex3.exec(i))
                                ? {
                                    r: nn(a[1] + "" + a[1]),
                                    g: nn(a[2] + "" + a[2]),
                                    b: nn(a[3] + "" + a[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : !1;
          }
          function ic(i) {
            var t, a;
            return (
              (i = i || { level: "AA", size: "small" }),
              (t = (i.level || "AA").toUpperCase()),
              (a = (i.size || "small").toLowerCase()),
              t !== "AA" && t !== "AAA" && (t = "AA"),
              a !== "small" && a !== "large" && (a = "small"),
              { level: t, size: a }
            );
          }
          var gs = function (t) {
              var a = ["r", "g", "b", "a", "h", "s", "l", "v"],
                u = 0,
                p = 0;
              return (
                _a(a, function (R) {
                  if (
                    t[R] &&
                    ((u += 1), isNaN(t[R]) || (p += 1), R === "s" || R === "l")
                  ) {
                    var j = /^\d+%$/;
                    j.test(t[R]) && (p += 1);
                  }
                }),
                u === p ? t : !1
              );
            },
            Qr = function (t, a) {
              var u = t.hex ? lt(t.hex) : lt(t),
                p = u.toHsl(),
                R = u.toHsv(),
                j = u.toRgb(),
                Y = u.toHex();
              p.s === 0 && ((p.h = a || 0), (R.h = a || 0));
              var re = Y === "000000" && j.a === 0;
              return {
                hsl: p,
                hex: re ? "transparent" : "#" + Y,
                rgb: j,
                hsv: R,
                oldHue: t.h || a || p.h,
                source: t.source,
              };
            },
            Fn = function (t) {
              if (t === "transparent") return !0;
              var a = String(t).charAt(0) === "#" ? 1 : 0;
              return t.length !== 4 + a && t.length < 7 + a && lt(t).isValid();
            },
            Eo = function (t) {
              if (!t) return "#fff";
              var a = Qr(t);
              if (a.hex === "transparent") return "rgba(0,0,0,0.4)";
              var u = (a.rgb.r * 299 + a.rgb.g * 587 + a.rgb.b * 114) / 1e3;
              return u >= 128 ? "#000" : "#fff";
            },
            Wh = {
              hsl: { a: 1, h: 0, l: 0.5, s: 1 },
              hex: "#ff0000",
              rgb: { r: 255, g: 0, b: 0, a: 1 },
              hsv: { h: 0, s: 1, v: 1, a: 1 },
            },
            Oo = function (t, a) {
              var u = t.replace("\xB0", "");
              return lt(a + " (" + u + ")")._ok;
            },
            qr =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            oc = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function sc(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function lc(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function ac(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var cc = function (t) {
            var a = (function (u) {
              ac(p, u);
              function p(R) {
                sc(this, p);
                var j = lc(
                  this,
                  (p.__proto__ || Object.getPrototypeOf(p)).call(this),
                );
                return (
                  (j.handleChange = function (Y, re) {
                    var ue = gs(Y);
                    if (ue) {
                      var Ie = Qr(Y, Y.h || j.state.oldHue);
                      j.setState(Ie),
                        j.props.onChangeComplete &&
                          j.debounce(j.props.onChangeComplete, Ie, re),
                        j.props.onChange && j.props.onChange(Ie, re);
                    }
                  }),
                  (j.handleSwatchHover = function (Y, re) {
                    var ue = gs(Y);
                    if (ue) {
                      var Ie = Qr(Y, Y.h || j.state.oldHue);
                      j.props.onSwatchHover && j.props.onSwatchHover(Ie, re);
                    }
                  }),
                  (j.state = qr({}, Qr(R.color, 0))),
                  (j.debounce = is(function (Y, re, ue) {
                    Y(re, ue);
                  }, 100)),
                  j
                );
              }
              return (
                oc(
                  p,
                  [
                    {
                      key: "render",
                      value: function () {
                        var j = {};
                        return (
                          this.props.onSwatchHover &&
                            (j.onSwatchHover = this.handleSwatchHover),
                          s.createElement(
                            t,
                            qr(
                              {},
                              this.props,
                              this.state,
                              { onChange: this.handleChange },
                              j,
                            ),
                          )
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "getDerivedStateFromProps",
                      value: function (j, Y) {
                        return qr({}, Qr(j.color, Y.oldHue));
                      },
                    },
                  ],
                ),
                p
              );
            })(s.PureComponent || s.Component);
            return (
              (a.propTypes = qr({}, t.propTypes)),
              (a.defaultProps = qr({}, t.defaultProps, {
                color: { h: 250, s: 0.5, l: 0.2, a: 1 },
              })),
              a
            );
          };
          const Zt = cc;
          var fc =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            uc = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function hc(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function ms(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function dc(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var pc = function (t) {
              var a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : "span";
              return (function (u) {
                dc(p, u);
                function p() {
                  var R, j, Y, re;
                  hc(this, p);
                  for (
                    var ue = arguments.length, Ie = Array(ue), Ue = 0;
                    Ue < ue;
                    Ue++
                  )
                    Ie[Ue] = arguments[Ue];
                  return (
                    (re =
                      ((j =
                        ((Y = ms(
                          this,
                          (R =
                            p.__proto__ || Object.getPrototypeOf(p)).call.apply(
                            R,
                            [this].concat(Ie),
                          ),
                        )),
                        Y)),
                      (Y.state = { focus: !1 }),
                      (Y.handleFocus = function () {
                        return Y.setState({ focus: !0 });
                      }),
                      (Y.handleBlur = function () {
                        return Y.setState({ focus: !1 });
                      }),
                      j)),
                    ms(Y, re)
                  );
                }
                return (
                  uc(p, [
                    {
                      key: "render",
                      value: function () {
                        return s.createElement(
                          a,
                          {
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                          },
                          s.createElement(t, fc({}, this.props, this.state)),
                        );
                      },
                    },
                  ]),
                  p
                );
              })(s.Component);
            },
            bs =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            gc = 13,
            mc = function (t) {
              var a = t.color,
                u = t.style,
                p = t.onClick,
                R = p === void 0 ? function () {} : p,
                j = t.onHover,
                Y = t.title,
                re = Y === void 0 ? a : Y,
                ue = t.children,
                Ie = t.focus,
                Ue = t.focusStyle,
                Ge = Ue === void 0 ? {} : Ue,
                Qe = a === "transparent",
                at = (0, g.Ay)({
                  default: {
                    swatch: bs(
                      {
                        background: a,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none",
                      },
                      u,
                      Ie ? Ge : {},
                    ),
                  },
                }),
                ut = function (on) {
                  return R(a, on);
                },
                bt = function (on) {
                  return on.keyCode === gc && R(a, on);
                },
                Pt = function (on) {
                  return j(a, on);
                },
                rn = {};
              return (
                j && (rn.onMouseOver = Pt),
                s.createElement(
                  "div",
                  bs(
                    {
                      style: at.swatch,
                      onClick: ut,
                      title: re,
                      tabIndex: 0,
                      onKeyDown: bt,
                    },
                    rn,
                  ),
                  ue,
                  Qe &&
                    s.createElement(G, {
                      borderRadius: at.swatch.borderRadius,
                      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                    }),
                )
              );
            };
          const er = pc(mc);
          var bc = function (t) {
            var a = t.direction,
              u = (0, g.Ay)(
                {
                  default: {
                    picker: {
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      transform: "translate(-9px, -1px)",
                      backgroundColor: "rgb(248, 248, 248)",
                      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                    },
                  },
                  vertical: { picker: { transform: "translate(-3px, -9px)" } },
                },
                { vertical: a === "vertical" },
              );
            return s.createElement("div", { style: u.picker });
          };
          const yc = bc;
          var xc =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            ys = function (t) {
              var a = t.rgb,
                u = t.hsl,
                p = t.width,
                R = t.height,
                j = t.onChange,
                Y = t.direction,
                re = t.style,
                ue = t.renderers,
                Ie = t.pointer,
                Ue = t.className,
                Ge = Ue === void 0 ? "" : Ue,
                Qe = (0, g.Ay)({
                  default: {
                    picker: { position: "relative", width: p, height: R },
                    alpha: { radius: "2px", style: re },
                  },
                });
              return s.createElement(
                "div",
                { style: Qe.picker, className: "alpha-picker " + Ge },
                s.createElement(
                  Q,
                  xc({}, Qe.alpha, {
                    rgb: a,
                    hsl: u,
                    pointer: Ie,
                    renderers: ue,
                    onChange: j,
                    direction: Y,
                  }),
                ),
              );
            };
          ys.defaultProps = {
            width: "316px",
            height: "16px",
            direction: "horizontal",
            pointer: yc,
          };
          const Jh = Zt(ys);
          function vc(i, t) {
            for (
              var a = -1, u = i == null ? 0 : i.length, p = Array(u);
              ++a < u;
            )
              p[a] = t(i[a], a, i);
            return p;
          }
          const xs = vc;
          var wc = "__lodash_hash_undefined__";
          function Sc(i) {
            return this.__data__.set(i, wc), this;
          }
          const Cc = Sc;
          function Ec(i) {
            return this.__data__.has(i);
          }
          const Oc = Ec;
          function Ri(i) {
            var t = -1,
              a = i == null ? 0 : i.length;
            for (this.__data__ = new tn(); ++t < a; ) this.add(i[t]);
          }
          (Ri.prototype.add = Ri.prototype.push = Cc), (Ri.prototype.has = Oc);
          const Mc = Ri;
          function Ac(i, t) {
            for (var a = -1, u = i == null ? 0 : i.length; ++a < u; )
              if (t(i[a], a, i)) return !0;
            return !1;
          }
          const Tc = Ac;
          function kc(i, t) {
            return i.has(t);
          }
          const Nc = kc;
          var Dc = 1,
            Rc = 2;
          function Pc(i, t, a, u, p, R) {
            var j = a & Dc,
              Y = i.length,
              re = t.length;
            if (Y != re && !(j && re > Y)) return !1;
            var ue = R.get(i),
              Ie = R.get(t);
            if (ue && Ie) return ue == t && Ie == i;
            var Ue = -1,
              Ge = !0,
              Qe = a & Rc ? new Mc() : void 0;
            for (R.set(i, t), R.set(t, i); ++Ue < Y; ) {
              var at = i[Ue],
                ut = t[Ue];
              if (u)
                var bt = j ? u(ut, at, Ue, t, i, R) : u(at, ut, Ue, i, t, R);
              if (bt !== void 0) {
                if (bt) continue;
                Ge = !1;
                break;
              }
              if (Qe) {
                if (
                  !Tc(t, function (Pt, rn) {
                    if (!Nc(Qe, rn) && (at === Pt || p(at, Pt, a, u, R)))
                      return Qe.push(rn);
                  })
                ) {
                  Ge = !1;
                  break;
                }
              } else if (!(at === ut || p(at, ut, a, u, R))) {
                Ge = !1;
                break;
              }
            }
            return R.delete(i), R.delete(t), Ge;
          }
          const vs = Pc;
          function _c(i) {
            var t = -1,
              a = Array(i.size);
            return (
              i.forEach(function (u, p) {
                a[++t] = [p, u];
              }),
              a
            );
          }
          const Ic = _c;
          function Fc(i) {
            var t = -1,
              a = Array(i.size);
            return (
              i.forEach(function (u) {
                a[++t] = u;
              }),
              a
            );
          }
          const Bc = Fc;
          var Lc = 1,
            zc = 2,
            Hc = "[object Boolean]",
            jc = "[object Date]",
            Kc = "[object Error]",
            Vc = "[object Map]",
            Uc = "[object Number]",
            Wc = "[object RegExp]",
            Jc = "[object Set]",
            Gc = "[object String]",
            $c = "[object Symbol]",
            Xc = "[object ArrayBuffer]",
            Yc = "[object DataView]",
            ws = H ? H.prototype : void 0,
            Mo = ws ? ws.valueOf : void 0;
          function Zc(i, t, a, u, p, R, j) {
            switch (a) {
              case Yc:
                if (
                  i.byteLength != t.byteLength ||
                  i.byteOffset != t.byteOffset
                )
                  return !1;
                (i = i.buffer), (t = t.buffer);
              case Xc:
                return !(
                  i.byteLength != t.byteLength || !R(new Tr(i), new Tr(t))
                );
              case Hc:
              case jc:
              case Uc:
                return wt(+i, +t);
              case Kc:
                return i.name == t.name && i.message == t.message;
              case Wc:
              case Gc:
                return i == t + "";
              case Vc:
                var Y = Ic;
              case Jc:
                var re = u & Lc;
                if ((Y || (Y = Bc), i.size != t.size && !re)) return !1;
                var ue = j.get(i);
                if (ue) return ue == t;
                (u |= zc), j.set(i, t);
                var Ie = vs(Y(i), Y(t), u, p, R, j);
                return j.delete(i), Ie;
              case $c:
                if (Mo) return Mo.call(i) == Mo.call(t);
            }
            return !1;
          }
          const Qc = Zc;
          function qc(i, t) {
            for (var a = -1, u = t.length, p = i.length; ++a < u; )
              i[p + a] = t[a];
            return i;
          }
          const ef = qc;
          function tf(i, t, a) {
            var u = t(i);
            return Jt(i) ? u : ef(u, a(i));
          }
          const nf = tf;
          function rf(i, t) {
            for (
              var a = -1, u = i == null ? 0 : i.length, p = 0, R = [];
              ++a < u;
            ) {
              var j = i[a];
              t(j, a, i) && (R[p++] = j);
            }
            return R;
          }
          const of = rf;
          function sf() {
            return [];
          }
          const lf = sf;
          var af = Object.prototype,
            cf = af.propertyIsEnumerable,
            Ss = Object.getOwnPropertySymbols,
            ff = Ss
              ? function (i) {
                  return i == null
                    ? []
                    : ((i = Object(i)),
                      of(Ss(i), function (t) {
                        return cf.call(i, t);
                      }));
                }
              : lf;
          const uf = ff;
          function hf(i) {
            return nf(i, So, uf);
          }
          const Cs = hf;
          var df = 1,
            pf = Object.prototype,
            gf = pf.hasOwnProperty;
          function mf(i, t, a, u, p, R) {
            var j = a & df,
              Y = Cs(i),
              re = Y.length,
              ue = Cs(t),
              Ie = ue.length;
            if (re != Ie && !j) return !1;
            for (var Ue = re; Ue--; ) {
              var Ge = Y[Ue];
              if (!(j ? Ge in t : gf.call(t, Ge))) return !1;
            }
            var Qe = R.get(i),
              at = R.get(t);
            if (Qe && at) return Qe == t && at == i;
            var ut = !0;
            R.set(i, t), R.set(t, i);
            for (var bt = j; ++Ue < re; ) {
              Ge = Y[Ue];
              var Pt = i[Ge],
                rn = t[Ge];
              if (u)
                var vr = j ? u(rn, Pt, Ge, t, i, R) : u(Pt, rn, Ge, i, t, R);
              if (!(vr === void 0 ? Pt === rn || p(Pt, rn, a, u, R) : vr)) {
                ut = !1;
                break;
              }
              bt || (bt = Ge == "constructor");
            }
            if (ut && !bt) {
              var on = i.constructor,
                Bn = t.constructor;
              on != Bn &&
                "constructor" in i &&
                "constructor" in t &&
                !(
                  typeof on == "function" &&
                  on instanceof on &&
                  typeof Bn == "function" &&
                  Bn instanceof Bn
                ) &&
                (ut = !1);
            }
            return R.delete(i), R.delete(t), ut;
          }
          const bf = mf;
          var yf = Oe(y, "DataView");
          const Ao = yf;
          var xf = Oe(y, "Promise");
          const To = xf;
          var vf = Oe(y, "Set");
          const ko = vf;
          var wf = Oe(y, "WeakMap");
          const No = wf;
          var Es = "[object Map]",
            Sf = "[object Object]",
            Os = "[object Promise]",
            Ms = "[object Set]",
            As = "[object WeakMap]",
            Ts = "[object DataView]",
            Cf = cn(Ao),
            Ef = cn($e),
            Of = cn(To),
            Mf = cn(ko),
            Af = cn(No),
            tr = Mt;
          ((Ao && tr(new Ao(new ArrayBuffer(1))) != Ts) ||
            ($e && tr(new $e()) != Es) ||
            (To && tr(To.resolve()) != Os) ||
            (ko && tr(new ko()) != Ms) ||
            (No && tr(new No()) != As)) &&
            (tr = function (i) {
              var t = Mt(i),
                a = t == Sf ? i.constructor : void 0,
                u = a ? cn(a) : "";
              if (u)
                switch (u) {
                  case Cf:
                    return Ts;
                  case Ef:
                    return Es;
                  case Of:
                    return Os;
                  case Mf:
                    return Ms;
                  case Af:
                    return As;
                }
              return t;
            });
          const ks = tr;
          var Tf = 1,
            Ns = "[object Arguments]",
            Ds = "[object Array]",
            Pi = "[object Object]",
            kf = Object.prototype,
            Rs = kf.hasOwnProperty;
          function Nf(i, t, a, u, p, R) {
            var j = Jt(i),
              Y = Jt(t),
              re = j ? Ds : ks(i),
              ue = Y ? Ds : ks(t);
            (re = re == Ns ? Pi : re), (ue = ue == Ns ? Pi : ue);
            var Ie = re == Pi,
              Ue = ue == Pi,
              Ge = re == ue;
            if (Ge && _n(i)) {
              if (!_n(t)) return !1;
              (j = !0), (Ie = !1);
            }
            if (Ge && !Ie)
              return (
                R || (R = new Gn()),
                j || mo(i) ? vs(i, t, a, u, p, R) : Qc(i, t, re, a, u, p, R)
              );
            if (!(a & Tf)) {
              var Qe = Ie && Rs.call(i, "__wrapped__"),
                at = Ue && Rs.call(t, "__wrapped__");
              if (Qe || at) {
                var ut = Qe ? i.value() : i,
                  bt = at ? t.value() : t;
                return R || (R = new Gn()), p(ut, bt, a, u, R);
              }
            }
            return Ge ? (R || (R = new Gn()), bf(i, t, a, u, p, R)) : !1;
          }
          const Df = Nf;
          function Ps(i, t, a, u, p) {
            return i === t
              ? !0
              : i == null || t == null || (!yn(i) && !yn(t))
                ? i !== i && t !== t
                : Df(i, t, a, u, Ps, p);
          }
          const _s = Ps;
          var Rf = 1,
            Pf = 2;
          function _f(i, t, a, u) {
            var p = a.length,
              R = p,
              j = !u;
            if (i == null) return !R;
            for (i = Object(i); p--; ) {
              var Y = a[p];
              if (j && Y[2] ? Y[1] !== i[Y[0]] : !(Y[0] in i)) return !1;
            }
            for (; ++p < R; ) {
              Y = a[p];
              var re = Y[0],
                ue = i[re],
                Ie = Y[1];
              if (j && Y[2]) {
                if (ue === void 0 && !(re in i)) return !1;
              } else {
                var Ue = new Gn();
                if (u) var Ge = u(ue, Ie, re, i, t, Ue);
                if (!(Ge === void 0 ? _s(Ie, ue, Rf | Pf, u, Ue) : Ge))
                  return !1;
              }
            }
            return !0;
          }
          const If = _f;
          function Ff(i) {
            return i === i && !Lt(i);
          }
          const Is = Ff;
          function Bf(i) {
            for (var t = So(i), a = t.length; a--; ) {
              var u = t[a],
                p = i[u];
              t[a] = [u, p, Is(p)];
            }
            return t;
          }
          const Lf = Bf;
          function zf(i, t) {
            return function (a) {
              return a == null
                ? !1
                : a[i] === t && (t !== void 0 || i in Object(a));
            };
          }
          const Fs = zf;
          function Hf(i) {
            var t = Lf(i);
            return t.length == 1 && t[0][2]
              ? Fs(t[0][0], t[0][1])
              : function (a) {
                  return a === i || If(a, i, t);
                };
          }
          const jf = Hf;
          var Kf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Vf = /^\w*$/;
          function Uf(i, t) {
            if (Jt(i)) return !1;
            var a = typeof i;
            return a == "number" ||
              a == "symbol" ||
              a == "boolean" ||
              i == null ||
              Ti(i)
              ? !0
              : Vf.test(i) || !Kf.test(i) || (t != null && i in Object(t));
          }
          const Do = Uf;
          var Wf = "Expected a function";
          function Ro(i, t) {
            if (typeof i != "function" || (t != null && typeof t != "function"))
              throw new TypeError(Wf);
            var a = function () {
              var u = arguments,
                p = t ? t.apply(this, u) : u[0],
                R = a.cache;
              if (R.has(p)) return R.get(p);
              var j = i.apply(this, u);
              return (a.cache = R.set(p, j) || R), j;
            };
            return (a.cache = new (Ro.Cache || tn)()), a;
          }
          Ro.Cache = tn;
          const Jf = Ro;
          var Gf = 500;
          function $f(i) {
            var t = Jf(i, function (u) {
                return a.size === Gf && a.clear(), u;
              }),
              a = t.cache;
            return t;
          }
          const Xf = $f;
          var Yf =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Zf = /\\(\\)?/g,
            Qf = Xf(function (i) {
              var t = [];
              return (
                i.charCodeAt(0) === 46 && t.push(""),
                i.replace(Yf, function (a, u, p, R) {
                  t.push(p ? R.replace(Zf, "$1") : u || a);
                }),
                t
              );
            });
          const qf = Qf;
          var eu = 1 / 0,
            Bs = H ? H.prototype : void 0,
            Ls = Bs ? Bs.toString : void 0;
          function zs(i) {
            if (typeof i == "string") return i;
            if (Jt(i)) return xs(i, zs) + "";
            if (Ti(i)) return Ls ? Ls.call(i) : "";
            var t = i + "";
            return t == "0" && 1 / i == -eu ? "-0" : t;
          }
          const tu = zs;
          function nu(i) {
            return i == null ? "" : tu(i);
          }
          const ru = nu;
          function iu(i, t) {
            return Jt(i) ? i : Do(i, t) ? [i] : qf(ru(i));
          }
          const Hs = iu;
          var ou = 1 / 0;
          function su(i) {
            if (typeof i == "string" || Ti(i)) return i;
            var t = i + "";
            return t == "0" && 1 / i == -ou ? "-0" : t;
          }
          const _i = su;
          function lu(i, t) {
            t = Hs(t, i);
            for (var a = 0, u = t.length; i != null && a < u; )
              i = i[_i(t[a++])];
            return a && a == u ? i : void 0;
          }
          const js = lu;
          function au(i, t, a) {
            var u = i == null ? void 0 : js(i, t);
            return u === void 0 ? a : u;
          }
          const cu = au;
          function fu(i, t) {
            return i != null && t in Object(i);
          }
          const uu = fu;
          function hu(i, t, a) {
            t = Hs(t, i);
            for (var u = -1, p = t.length, R = !1; ++u < p; ) {
              var j = _i(t[u]);
              if (!(R = i != null && a(i, j))) break;
              i = i[j];
            }
            return R || ++u != p
              ? R
              : ((p = i == null ? 0 : i.length),
                !!p && $r(p) && yo(j, p) && (Jt(i) || Qn(i)));
          }
          const du = hu;
          function pu(i, t) {
            return i != null && du(i, t, uu);
          }
          const gu = pu;
          var mu = 1,
            bu = 2;
          function yu(i, t) {
            return Do(i) && Is(t)
              ? Fs(_i(i), t)
              : function (a) {
                  var u = cu(a, i);
                  return u === void 0 && u === t ? gu(a, i) : _s(t, u, mu | bu);
                };
          }
          const xu = yu;
          function vu(i) {
            return function (t) {
              return t?.[i];
            };
          }
          const wu = vu;
          function Su(i) {
            return function (t) {
              return js(t, i);
            };
          }
          const Cu = Su;
          function Eu(i) {
            return Do(i) ? wu(_i(i)) : Cu(i);
          }
          const Ou = Eu;
          function Mu(i) {
            return typeof i == "function"
              ? i
              : i == null
                ? Ai
                : typeof i == "object"
                  ? Jt(i)
                    ? xu(i[0], i[1])
                    : jf(i)
                  : Ou(i);
          }
          const Au = Mu;
          function Tu(i, t) {
            var a = -1,
              u = En(i) ? Array(i.length) : [];
            return (
              ss(i, function (p, R, j) {
                u[++a] = t(p, R, j);
              }),
              u
            );
          }
          const ku = Tu;
          function Nu(i, t) {
            var a = Jt(i) ? xs : ku;
            return a(i, Au(t, 3));
          }
          const nr = Nu;
          var Du = function (t) {
            var a = t.colors,
              u = t.onClick,
              p = t.onSwatchHover,
              R = (0, g.Ay)({
                default: {
                  swatches: { marginRight: "-10px" },
                  swatch: {
                    width: "22px",
                    height: "22px",
                    float: "left",
                    marginRight: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                  },
                  clear: { clear: "both" },
                },
              });
            return s.createElement(
              "div",
              { style: R.swatches },
              nr(a, function (j) {
                return s.createElement(er, {
                  key: j,
                  color: j,
                  style: R.swatch,
                  onClick: u,
                  onHover: p,
                  focusStyle: { boxShadow: "0 0 4px " + j },
                });
              }),
              s.createElement("div", { style: R.clear }),
            );
          };
          const Ru = Du;
          var Po = function (t) {
            var a = t.onChange,
              u = t.onSwatchHover,
              p = t.hex,
              R = t.colors,
              j = t.width,
              Y = t.triangle,
              re = t.styles,
              ue = re === void 0 ? {} : re,
              Ie = t.className,
              Ue = Ie === void 0 ? "" : Ie,
              Ge = p === "transparent",
              Qe = function (bt, Pt) {
                Fn(bt) && a({ hex: bt, source: "hex" }, Pt);
              },
              at = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      card: {
                        width: j,
                        background: "#fff",
                        boxShadow: "0 1px rgba(0,0,0,.1)",
                        borderRadius: "6px",
                        position: "relative",
                      },
                      head: {
                        height: "110px",
                        background: p,
                        borderRadius: "6px 6px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      },
                      body: { padding: "10px" },
                      label: {
                        fontSize: "18px",
                        color: Eo(p),
                        position: "relative",
                      },
                      triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 10px 10px 10px",
                        borderColor:
                          "transparent transparent " + p + " transparent",
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        marginLeft: "-10px",
                      },
                      input: {
                        width: "100%",
                        fontSize: "12px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "22px",
                        boxShadow: "inset 0 0 0 1px #ddd",
                        borderRadius: "4px",
                        padding: "0 7px",
                        boxSizing: "border-box",
                      },
                    },
                    "hide-triangle": { triangle: { display: "none" } },
                  },
                  ue,
                ),
                { "hide-triangle": Y === "hide" },
              );
            return s.createElement(
              "div",
              { style: at.card, className: "block-picker " + Ue },
              s.createElement("div", { style: at.triangle }),
              s.createElement(
                "div",
                { style: at.head },
                Ge && s.createElement(G, { borderRadius: "6px 6px 0 0" }),
                s.createElement("div", { style: at.label }, p),
              ),
              s.createElement(
                "div",
                { style: at.body },
                s.createElement(Ru, {
                  colors: R,
                  onClick: Qe,
                  onSwatchHover: u,
                }),
                s.createElement(Ne, {
                  style: { input: at.input },
                  value: p,
                  onChange: Qe,
                }),
              ),
            );
          };
          (Po.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            colors: Ee().arrayOf(Ee().string),
            triangle: Ee().oneOf(["top", "hide"]),
            styles: Ee().object,
          }),
            (Po.defaultProps = {
              width: 170,
              colors: [
                "#D9E3F0",
                "#F47373",
                "#697689",
                "#37D67A",
                "#2CCCE4",
                "#555555",
                "#dce775",
                "#ff8a65",
                "#ba68c8",
              ],
              triangle: "top",
              styles: {},
            });
          const Gh = Zt(Po);
          var rr = {
              50: "#ffebee",
              100: "#ffcdd2",
              200: "#ef9a9a",
              300: "#e57373",
              400: "#ef5350",
              500: "#f44336",
              600: "#e53935",
              700: "#d32f2f",
              800: "#c62828",
              900: "#b71c1c",
              a100: "#ff8a80",
              a200: "#ff5252",
              a400: "#ff1744",
              a700: "#d50000",
            },
            ir = {
              50: "#fce4ec",
              100: "#f8bbd0",
              200: "#f48fb1",
              300: "#f06292",
              400: "#ec407a",
              500: "#e91e63",
              600: "#d81b60",
              700: "#c2185b",
              800: "#ad1457",
              900: "#880e4f",
              a100: "#ff80ab",
              a200: "#ff4081",
              a400: "#f50057",
              a700: "#c51162",
            },
            or = {
              50: "#f3e5f5",
              100: "#e1bee7",
              200: "#ce93d8",
              300: "#ba68c8",
              400: "#ab47bc",
              500: "#9c27b0",
              600: "#8e24aa",
              700: "#7b1fa2",
              800: "#6a1b9a",
              900: "#4a148c",
              a100: "#ea80fc",
              a200: "#e040fb",
              a400: "#d500f9",
              a700: "#aa00ff",
            },
            sr = {
              50: "#ede7f6",
              100: "#d1c4e9",
              200: "#b39ddb",
              300: "#9575cd",
              400: "#7e57c2",
              500: "#673ab7",
              600: "#5e35b1",
              700: "#512da8",
              800: "#4527a0",
              900: "#311b92",
              a100: "#b388ff",
              a200: "#7c4dff",
              a400: "#651fff",
              a700: "#6200ea",
            },
            lr = {
              50: "#e8eaf6",
              100: "#c5cae9",
              200: "#9fa8da",
              300: "#7986cb",
              400: "#5c6bc0",
              500: "#3f51b5",
              600: "#3949ab",
              700: "#303f9f",
              800: "#283593",
              900: "#1a237e",
              a100: "#8c9eff",
              a200: "#536dfe",
              a400: "#3d5afe",
              a700: "#304ffe",
            },
            ar = {
              50: "#e3f2fd",
              100: "#bbdefb",
              200: "#90caf9",
              300: "#64b5f6",
              400: "#42a5f5",
              500: "#2196f3",
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
              a100: "#82b1ff",
              a200: "#448aff",
              a400: "#2979ff",
              a700: "#2962ff",
            },
            cr = {
              50: "#e1f5fe",
              100: "#b3e5fc",
              200: "#81d4fa",
              300: "#4fc3f7",
              400: "#29b6f6",
              500: "#03a9f4",
              600: "#039be5",
              700: "#0288d1",
              800: "#0277bd",
              900: "#01579b",
              a100: "#80d8ff",
              a200: "#40c4ff",
              a400: "#00b0ff",
              a700: "#0091ea",
            },
            fr = {
              50: "#e0f7fa",
              100: "#b2ebf2",
              200: "#80deea",
              300: "#4dd0e1",
              400: "#26c6da",
              500: "#00bcd4",
              600: "#00acc1",
              700: "#0097a7",
              800: "#00838f",
              900: "#006064",
              a100: "#84ffff",
              a200: "#18ffff",
              a400: "#00e5ff",
              a700: "#00b8d4",
            },
            ur = {
              50: "#e0f2f1",
              100: "#b2dfdb",
              200: "#80cbc4",
              300: "#4db6ac",
              400: "#26a69a",
              500: "#009688",
              600: "#00897b",
              700: "#00796b",
              800: "#00695c",
              900: "#004d40",
              a100: "#a7ffeb",
              a200: "#64ffda",
              a400: "#1de9b6",
              a700: "#00bfa5",
            },
            Rr = {
              50: "#e8f5e9",
              100: "#c8e6c9",
              200: "#a5d6a7",
              300: "#81c784",
              400: "#66bb6a",
              500: "#4caf50",
              600: "#43a047",
              700: "#388e3c",
              800: "#2e7d32",
              900: "#1b5e20",
              a100: "#b9f6ca",
              a200: "#69f0ae",
              a400: "#00e676",
              a700: "#00c853",
            },
            hr = {
              50: "#f1f8e9",
              100: "#dcedc8",
              200: "#c5e1a5",
              300: "#aed581",
              400: "#9ccc65",
              500: "#8bc34a",
              600: "#7cb342",
              700: "#689f38",
              800: "#558b2f",
              900: "#33691e",
              a100: "#ccff90",
              a200: "#b2ff59",
              a400: "#76ff03",
              a700: "#64dd17",
            },
            dr = {
              50: "#f9fbe7",
              100: "#f0f4c3",
              200: "#e6ee9c",
              300: "#dce775",
              400: "#d4e157",
              500: "#cddc39",
              600: "#c0ca33",
              700: "#afb42b",
              800: "#9e9d24",
              900: "#827717",
              a100: "#f4ff81",
              a200: "#eeff41",
              a400: "#c6ff00",
              a700: "#aeea00",
            },
            pr = {
              50: "#fffde7",
              100: "#fff9c4",
              200: "#fff59d",
              300: "#fff176",
              400: "#ffee58",
              500: "#ffeb3b",
              600: "#fdd835",
              700: "#fbc02d",
              800: "#f9a825",
              900: "#f57f17",
              a100: "#ffff8d",
              a200: "#ffff00",
              a400: "#ffea00",
              a700: "#ffd600",
            },
            gr = {
              50: "#fff8e1",
              100: "#ffecb3",
              200: "#ffe082",
              300: "#ffd54f",
              400: "#ffca28",
              500: "#ffc107",
              600: "#ffb300",
              700: "#ffa000",
              800: "#ff8f00",
              900: "#ff6f00",
              a100: "#ffe57f",
              a200: "#ffd740",
              a400: "#ffc400",
              a700: "#ffab00",
            },
            mr = {
              50: "#fff3e0",
              100: "#ffe0b2",
              200: "#ffcc80",
              300: "#ffb74d",
              400: "#ffa726",
              500: "#ff9800",
              600: "#fb8c00",
              700: "#f57c00",
              800: "#ef6c00",
              900: "#e65100",
              a100: "#ffd180",
              a200: "#ffab40",
              a400: "#ff9100",
              a700: "#ff6d00",
            },
            br = {
              50: "#fbe9e7",
              100: "#ffccbc",
              200: "#ffab91",
              300: "#ff8a65",
              400: "#ff7043",
              500: "#ff5722",
              600: "#f4511e",
              700: "#e64a19",
              800: "#d84315",
              900: "#bf360c",
              a100: "#ff9e80",
              a200: "#ff6e40",
              a400: "#ff3d00",
              a700: "#dd2c00",
            },
            yr = {
              50: "#efebe9",
              100: "#d7ccc8",
              200: "#bcaaa4",
              300: "#a1887f",
              400: "#8d6e63",
              500: "#795548",
              600: "#6d4c41",
              700: "#5d4037",
              800: "#4e342e",
              900: "#3e2723",
            },
            Pu = {
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#eeeeee",
              300: "#e0e0e0",
              400: "#bdbdbd",
              500: "#9e9e9e",
              600: "#757575",
              700: "#616161",
              800: "#424242",
              900: "#212121",
            },
            xr = {
              50: "#eceff1",
              100: "#cfd8dc",
              200: "#b0bec5",
              300: "#90a4ae",
              400: "#78909c",
              500: "#607d8b",
              600: "#546e7a",
              700: "#455a64",
              800: "#37474f",
              900: "#263238",
            },
            _u = {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.54)",
              disabled: "rgba(0, 0, 0, 0.38)",
              dividers: "rgba(0, 0, 0, 0.12)",
            },
            Iu = {
              primary: "rgba(255, 255, 255, 1)",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              dividers: "rgba(255, 255, 255, 0.12)",
            },
            Fu = {
              active: "rgba(0, 0, 0, 0.54)",
              inactive: "rgba(0, 0, 0, 0.38)",
            },
            Bu = {
              active: "rgba(255, 255, 255, 1)",
              inactive: "rgba(255, 255, 255, 0.5)",
            },
            Lu = "#ffffff",
            zu = "#000000";
          const $h = {
            red: rr,
            pink: ir,
            purple: or,
            deepPurple: sr,
            indigo: lr,
            blue: ar,
            lightBlue: cr,
            cyan: fr,
            teal: ur,
            green: Rr,
            lightGreen: hr,
            lime: dr,
            yellow: pr,
            amber: gr,
            orange: mr,
            deepOrange: br,
            brown: yr,
            grey: Pu,
            blueGrey: xr,
            darkText: _u,
            lightText: Iu,
            darkIcons: Fu,
            lightIcons: Bu,
            white: Lu,
            black: zu,
          };
          var Ks = function (t) {
            var a = t.color,
              u = t.onClick,
              p = t.onSwatchHover,
              R = t.hover,
              j = t.active,
              Y = t.circleSize,
              re = t.circleSpacing,
              ue = (0, g.Ay)(
                {
                  default: {
                    swatch: {
                      width: Y,
                      height: Y,
                      marginRight: re,
                      marginBottom: re,
                      transform: "scale(1)",
                      transition: "100ms transform ease",
                    },
                    Swatch: {
                      borderRadius: "50%",
                      background: "transparent",
                      boxShadow: "inset 0 0 0 " + (Y / 2 + 1) + "px " + a,
                      transition: "100ms box-shadow ease",
                    },
                  },
                  hover: { swatch: { transform: "scale(1.2)" } },
                  active: { Swatch: { boxShadow: "inset 0 0 0 3px " + a } },
                },
                { hover: R, active: j },
              );
            return s.createElement(
              "div",
              { style: ue.swatch },
              s.createElement(er, {
                style: ue.Swatch,
                color: a,
                onClick: u,
                onHover: p,
                focusStyle: {
                  boxShadow: ue.Swatch.boxShadow + ", 0 0 5px " + a,
                },
              }),
            );
          };
          Ks.defaultProps = { circleSize: 28, circleSpacing: 14 };
          const Hu = (0, g.H8)(Ks);
          var _o = function (t) {
            var a = t.width,
              u = t.onChange,
              p = t.onSwatchHover,
              R = t.colors,
              j = t.hex,
              Y = t.circleSize,
              re = t.styles,
              ue = re === void 0 ? {} : re,
              Ie = t.circleSpacing,
              Ue = t.className,
              Ge = Ue === void 0 ? "" : Ue,
              Qe = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      card: {
                        width: a,
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: -Ie,
                        marginBottom: -Ie,
                      },
                    },
                  },
                  ue,
                ),
              ),
              at = function (bt, Pt) {
                return u({ hex: bt, source: "hex" }, Pt);
              };
            return s.createElement(
              "div",
              { style: Qe.card, className: "circle-picker " + Ge },
              nr(R, function (ut) {
                return s.createElement(Hu, {
                  key: ut,
                  color: ut,
                  onClick: at,
                  onSwatchHover: p,
                  active: j === ut.toLowerCase(),
                  circleSize: Y,
                  circleSpacing: Ie,
                });
              }),
            );
          };
          (_o.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            circleSize: Ee().number,
            circleSpacing: Ee().number,
            styles: Ee().object,
          }),
            (_o.defaultProps = {
              width: 252,
              circleSize: 28,
              circleSpacing: 14,
              colors: [
                rr[500],
                ir[500],
                or[500],
                sr[500],
                lr[500],
                ar[500],
                cr[500],
                fr[500],
                ur[500],
                Rr[500],
                hr[500],
                dr[500],
                pr[500],
                gr[500],
                mr[500],
                br[500],
                yr[500],
                xr[500],
              ],
              styles: {},
            });
          const Xh = Zt(_o);
          function ju(i) {
            return i === void 0;
          }
          const Vs = ju;
          var Ku = d(50283),
            Vu = (function () {
              function i(t, a) {
                for (var u = 0; u < a.length; u++) {
                  var p = a[u];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(t, p.key, p);
                }
              }
              return function (t, a, u) {
                return a && i(t.prototype, a), u && i(t, u), t;
              };
            })();
          function Uu(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function Wu(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function Ju(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var Us = (function (i) {
            Ju(t, i);
            function t(a) {
              Uu(this, t);
              var u = Wu(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this),
              );
              return (
                (u.toggleViews = function () {
                  u.state.view === "hex"
                    ? u.setState({ view: "rgb" })
                    : u.state.view === "rgb"
                      ? u.setState({ view: "hsl" })
                      : u.state.view === "hsl" &&
                        (u.props.hsl.a === 1
                          ? u.setState({ view: "hex" })
                          : u.setState({ view: "rgb" }));
                }),
                (u.handleChange = function (p, R) {
                  p.hex
                    ? Fn(p.hex) &&
                      u.props.onChange({ hex: p.hex, source: "hex" }, R)
                    : p.r || p.g || p.b
                      ? u.props.onChange(
                          {
                            r: p.r || u.props.rgb.r,
                            g: p.g || u.props.rgb.g,
                            b: p.b || u.props.rgb.b,
                            source: "rgb",
                          },
                          R,
                        )
                      : p.a
                        ? (p.a < 0 ? (p.a = 0) : p.a > 1 && (p.a = 1),
                          u.props.onChange(
                            {
                              h: u.props.hsl.h,
                              s: u.props.hsl.s,
                              l: u.props.hsl.l,
                              a: Math.round(p.a * 100) / 100,
                              source: "rgb",
                            },
                            R,
                          ))
                        : (p.h || p.s || p.l) &&
                          (typeof p.s == "string" &&
                            p.s.includes("%") &&
                            (p.s = p.s.replace("%", "")),
                          typeof p.l == "string" &&
                            p.l.includes("%") &&
                            (p.l = p.l.replace("%", "")),
                          p.s == 1 ? (p.s = 0.01) : p.l == 1 && (p.l = 0.01),
                          u.props.onChange(
                            {
                              h: p.h || u.props.hsl.h,
                              s: Number(Vs(p.s) ? u.props.hsl.s : p.s),
                              l: Number(Vs(p.l) ? u.props.hsl.l : p.l),
                              source: "hsl",
                            },
                            R,
                          ));
                }),
                (u.showHighlight = function (p) {
                  p.currentTarget.style.background = "#eee";
                }),
                (u.hideHighlight = function (p) {
                  p.currentTarget.style.background = "transparent";
                }),
                a.hsl.a !== 1 && a.view === "hex"
                  ? (u.state = { view: "rgb" })
                  : (u.state = { view: a.view }),
                u
              );
            }
            return (
              Vu(
                t,
                [
                  {
                    key: "render",
                    value: function () {
                      var u = this,
                        p = (0, g.Ay)(
                          {
                            default: {
                              wrap: { paddingTop: "16px", display: "flex" },
                              fields: {
                                flex: "1",
                                display: "flex",
                                marginLeft: "-6px",
                              },
                              field: { paddingLeft: "6px", width: "100%" },
                              alpha: { paddingLeft: "6px", width: "100%" },
                              toggle: {
                                width: "32px",
                                textAlign: "right",
                                position: "relative",
                              },
                              icon: {
                                marginRight: "-4px",
                                marginTop: "12px",
                                cursor: "pointer",
                                position: "relative",
                              },
                              iconHighlight: {
                                position: "absolute",
                                width: "24px",
                                height: "28px",
                                background: "#eee",
                                borderRadius: "4px",
                                top: "10px",
                                left: "12px",
                                display: "none",
                              },
                              input: {
                                fontSize: "11px",
                                color: "#333",
                                width: "100%",
                                borderRadius: "2px",
                                border: "none",
                                boxShadow: "inset 0 0 0 1px #dadada",
                                height: "21px",
                                textAlign: "center",
                              },
                              label: {
                                textTransform: "uppercase",
                                fontSize: "11px",
                                lineHeight: "11px",
                                color: "#969696",
                                textAlign: "center",
                                display: "block",
                                marginTop: "12px",
                              },
                              svg: {
                                fill: "#333",
                                width: "24px",
                                height: "24px",
                                border: "1px transparent solid",
                                borderRadius: "5px",
                              },
                            },
                            disableAlpha: { alpha: { display: "none" } },
                          },
                          this.props,
                          this.state,
                        ),
                        R = void 0;
                      return (
                        this.state.view === "hex"
                          ? (R = s.createElement(
                              "div",
                              { style: p.fields, className: "flexbox-fix" },
                              s.createElement(
                                "div",
                                { style: p.field },
                                s.createElement(Ne, {
                                  style: { input: p.input, label: p.label },
                                  label: "hex",
                                  value: this.props.hex,
                                  onChange: this.handleChange,
                                }),
                              ),
                            ))
                          : this.state.view === "rgb"
                            ? (R = s.createElement(
                                "div",
                                { style: p.fields, className: "flexbox-fix" },
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "r",
                                    value: this.props.rgb.r,
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "g",
                                    value: this.props.rgb.g,
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "b",
                                    value: this.props.rgb.b,
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.alpha },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "a",
                                    value: this.props.rgb.a,
                                    arrowOffset: 0.01,
                                    onChange: this.handleChange,
                                  }),
                                ),
                              ))
                            : this.state.view === "hsl" &&
                              (R = s.createElement(
                                "div",
                                { style: p.fields, className: "flexbox-fix" },
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "h",
                                    value: Math.round(this.props.hsl.h),
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "s",
                                    value:
                                      Math.round(this.props.hsl.s * 100) + "%",
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.field },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "l",
                                    value:
                                      Math.round(this.props.hsl.l * 100) + "%",
                                    onChange: this.handleChange,
                                  }),
                                ),
                                s.createElement(
                                  "div",
                                  { style: p.alpha },
                                  s.createElement(Ne, {
                                    style: { input: p.input, label: p.label },
                                    label: "a",
                                    value: this.props.hsl.a,
                                    arrowOffset: 0.01,
                                    onChange: this.handleChange,
                                  }),
                                ),
                              )),
                        s.createElement(
                          "div",
                          { style: p.wrap, className: "flexbox-fix" },
                          R,
                          s.createElement(
                            "div",
                            { style: p.toggle },
                            s.createElement(
                              "div",
                              {
                                style: p.icon,
                                onClick: this.toggleViews,
                                ref: function (Y) {
                                  return (u.icon = Y);
                                },
                              },
                              s.createElement(Ku.A, {
                                style: p.svg,
                                onMouseOver: this.showHighlight,
                                onMouseEnter: this.showHighlight,
                                onMouseOut: this.hideHighlight,
                              }),
                            ),
                          ),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (u, p) {
                      return u.hsl.a !== 1 && p.view === "hex"
                        ? { view: "rgb" }
                        : null;
                    },
                  },
                ],
              ),
              t
            );
          })(s.Component);
          Us.defaultProps = { view: "hex" };
          const Gu = Us;
          var $u = function () {
            var t = (0, g.Ay)({
              default: {
                picker: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "6px",
                  transform: "translate(-6px, -1px)",
                  backgroundColor: "rgb(248, 248, 248)",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                },
              },
            });
            return s.createElement("div", { style: t.picker });
          };
          const Ws = $u;
          var Xu = function () {
            var t = (0, g.Ay)({
              default: {
                picker: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "6px",
                  boxShadow: "inset 0 0 0 1px #fff",
                  transform: "translate(-6px, -6px)",
                },
              },
            });
            return s.createElement("div", { style: t.picker });
          };
          const Yu = Xu;
          var Io = function (t) {
            var a = t.width,
              u = t.onChange,
              p = t.disableAlpha,
              R = t.rgb,
              j = t.hsl,
              Y = t.hsv,
              re = t.hex,
              ue = t.renderers,
              Ie = t.styles,
              Ue = Ie === void 0 ? {} : Ie,
              Ge = t.className,
              Qe = Ge === void 0 ? "" : Ge,
              at = t.defaultView,
              ut = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      picker: {
                        width: a,
                        background: "#fff",
                        borderRadius: "2px",
                        boxShadow:
                          "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                        boxSizing: "initial",
                        fontFamily: "Menlo",
                      },
                      saturation: {
                        width: "100%",
                        paddingBottom: "55%",
                        position: "relative",
                        borderRadius: "2px 2px 0 0",
                        overflow: "hidden",
                      },
                      Saturation: { radius: "2px 2px 0 0" },
                      body: { padding: "16px 16px 12px" },
                      controls: { display: "flex" },
                      color: { width: "32px" },
                      swatch: {
                        marginTop: "6px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",
                      },
                      active: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "8px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                        background:
                          "rgba(" +
                          R.r +
                          ", " +
                          R.g +
                          ", " +
                          R.b +
                          ", " +
                          R.a +
                          ")",
                        zIndex: "2",
                      },
                      toggles: { flex: "1" },
                      hue: {
                        height: "10px",
                        position: "relative",
                        marginBottom: "8px",
                      },
                      Hue: { radius: "2px" },
                      alpha: { height: "10px", position: "relative" },
                      Alpha: { radius: "2px" },
                    },
                    disableAlpha: {
                      color: { width: "22px" },
                      alpha: { display: "none" },
                      hue: { marginBottom: "0px" },
                      swatch: {
                        width: "10px",
                        height: "10px",
                        marginTop: "0px",
                      },
                    },
                  },
                  Ue,
                ),
                { disableAlpha: p },
              );
            return s.createElement(
              "div",
              { style: ut.picker, className: "chrome-picker " + Qe },
              s.createElement(
                "div",
                { style: ut.saturation },
                s.createElement(ki, {
                  style: ut.Saturation,
                  hsl: j,
                  hsv: Y,
                  pointer: Yu,
                  onChange: u,
                }),
              ),
              s.createElement(
                "div",
                { style: ut.body },
                s.createElement(
                  "div",
                  { style: ut.controls, className: "flexbox-fix" },
                  s.createElement(
                    "div",
                    { style: ut.color },
                    s.createElement(
                      "div",
                      { style: ut.swatch },
                      s.createElement("div", { style: ut.active }),
                      s.createElement(G, { renderers: ue }),
                    ),
                  ),
                  s.createElement(
                    "div",
                    { style: ut.toggles },
                    s.createElement(
                      "div",
                      { style: ut.hue },
                      s.createElement(Ce, {
                        style: ut.Hue,
                        hsl: j,
                        pointer: Ws,
                        onChange: u,
                      }),
                    ),
                    s.createElement(
                      "div",
                      { style: ut.alpha },
                      s.createElement(Q, {
                        style: ut.Alpha,
                        rgb: R,
                        hsl: j,
                        pointer: Ws,
                        renderers: ue,
                        onChange: u,
                      }),
                    ),
                  ),
                ),
                s.createElement(Gu, {
                  rgb: R,
                  hsl: j,
                  hex: re,
                  view: at,
                  onChange: u,
                  disableAlpha: p,
                }),
              ),
            );
          };
          (Io.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            disableAlpha: Ee().bool,
            styles: Ee().object,
            defaultView: Ee().oneOf(["hex", "rgb", "hsl"]),
          }),
            (Io.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
          const Zu = Zt(Io);
          var Qu = function (t) {
            var a = t.color,
              u = t.onClick,
              p = u === void 0 ? function () {} : u,
              R = t.onSwatchHover,
              j = t.active,
              Y = (0, g.Ay)(
                {
                  default: {
                    color: {
                      background: a,
                      width: "15px",
                      height: "15px",
                      float: "left",
                      marginRight: "5px",
                      marginBottom: "5px",
                      position: "relative",
                      cursor: "pointer",
                    },
                    dot: {
                      absolute: "5px 5px 5px 5px",
                      background: Eo(a),
                      borderRadius: "50%",
                      opacity: "0",
                    },
                  },
                  active: { dot: { opacity: "1" } },
                  "color-#FFFFFF": {
                    color: { boxShadow: "inset 0 0 0 1px #ddd" },
                    dot: { background: "#000" },
                  },
                  transparent: { dot: { background: "#000" } },
                },
                {
                  active: j,
                  "color-#FFFFFF": a === "#FFFFFF",
                  transparent: a === "transparent",
                },
              );
            return s.createElement(
              er,
              {
                style: Y.color,
                color: a,
                onClick: p,
                onHover: R,
                focusStyle: { boxShadow: "0 0 4px " + a },
              },
              s.createElement("div", { style: Y.dot }),
            );
          };
          const qu = Qu;
          var eh = function (t) {
            var a = t.hex,
              u = t.rgb,
              p = t.onChange,
              R = (0, g.Ay)({
                default: {
                  fields: {
                    display: "flex",
                    paddingBottom: "6px",
                    paddingRight: "5px",
                    position: "relative",
                  },
                  active: {
                    position: "absolute",
                    top: "6px",
                    left: "5px",
                    height: "9px",
                    width: "9px",
                    background: a,
                  },
                  HEXwrap: { flex: "6", position: "relative" },
                  HEXinput: {
                    width: "80%",
                    padding: "0px",
                    paddingLeft: "20%",
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontSize: "12px",
                    color: "#333",
                    height: "16px",
                  },
                  HEXlabel: { display: "none" },
                  RGBwrap: { flex: "3", position: "relative" },
                  RGBinput: {
                    width: "70%",
                    padding: "0px",
                    paddingLeft: "30%",
                    border: "none",
                    outline: "none",
                    background: "none",
                    fontSize: "12px",
                    color: "#333",
                    height: "16px",
                  },
                  RGBlabel: {
                    position: "absolute",
                    top: "3px",
                    left: "0px",
                    lineHeight: "16px",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    color: "#999",
                  },
                },
              }),
              j = function (re, ue) {
                re.r || re.g || re.b
                  ? p(
                      {
                        r: re.r || u.r,
                        g: re.g || u.g,
                        b: re.b || u.b,
                        source: "rgb",
                      },
                      ue,
                    )
                  : p({ hex: re.hex, source: "hex" }, ue);
              };
            return s.createElement(
              "div",
              { style: R.fields, className: "flexbox-fix" },
              s.createElement("div", { style: R.active }),
              s.createElement(Ne, {
                style: {
                  wrap: R.HEXwrap,
                  input: R.HEXinput,
                  label: R.HEXlabel,
                },
                label: "hex",
                value: a,
                onChange: j,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: R.RGBwrap,
                  input: R.RGBinput,
                  label: R.RGBlabel,
                },
                label: "r",
                value: u.r,
                onChange: j,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: R.RGBwrap,
                  input: R.RGBinput,
                  label: R.RGBlabel,
                },
                label: "g",
                value: u.g,
                onChange: j,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: R.RGBwrap,
                  input: R.RGBinput,
                  label: R.RGBlabel,
                },
                label: "b",
                value: u.b,
                onChange: j,
              }),
            );
          };
          const th = eh;
          var Fo = function (t) {
            var a = t.onChange,
              u = t.onSwatchHover,
              p = t.colors,
              R = t.hex,
              j = t.rgb,
              Y = t.styles,
              re = Y === void 0 ? {} : Y,
              ue = t.className,
              Ie = ue === void 0 ? "" : ue,
              Ue = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      Compact: { background: "#f6f6f6", radius: "4px" },
                      compact: {
                        paddingTop: "5px",
                        paddingLeft: "5px",
                        boxSizing: "initial",
                        width: "240px",
                      },
                      clear: { clear: "both" },
                    },
                  },
                  re,
                ),
              ),
              Ge = function (at, ut) {
                at.hex
                  ? Fn(at.hex) && a({ hex: at.hex, source: "hex" }, ut)
                  : a(at, ut);
              };
            return s.createElement(
              vo,
              { style: Ue.Compact, styles: re },
              s.createElement(
                "div",
                { style: Ue.compact, className: "compact-picker " + Ie },
                s.createElement(
                  "div",
                  null,
                  nr(p, function (Qe) {
                    return s.createElement(qu, {
                      key: Qe,
                      color: Qe,
                      active: Qe.toLowerCase() === R,
                      onClick: Ge,
                      onSwatchHover: u,
                    });
                  }),
                  s.createElement("div", { style: Ue.clear }),
                ),
                s.createElement(th, { hex: R, rgb: j, onChange: Ge }),
              ),
            );
          };
          (Fo.propTypes = {
            colors: Ee().arrayOf(Ee().string),
            styles: Ee().object,
          }),
            (Fo.defaultProps = {
              colors: [
                "#4D4D4D",
                "#999999",
                "#FFFFFF",
                "#F44E3B",
                "#FE9200",
                "#FCDC00",
                "#DBDF00",
                "#A4DD00",
                "#68CCCA",
                "#73D8FF",
                "#AEA1FF",
                "#FDA1FF",
                "#333333",
                "#808080",
                "#cccccc",
                "#D33115",
                "#E27300",
                "#FCC400",
                "#B0BC00",
                "#68BC00",
                "#16A5A5",
                "#009CE0",
                "#7B64FF",
                "#FA28FF",
                "#000000",
                "#666666",
                "#B3B3B3",
                "#9F0500",
                "#C45100",
                "#FB9E00",
                "#808900",
                "#194D33",
                "#0C797D",
                "#0062B1",
                "#653294",
                "#AB149E",
              ],
              styles: {},
            });
          const Yh = Zt(Fo);
          var nh = function (t) {
            var a = t.hover,
              u = t.color,
              p = t.onClick,
              R = t.onSwatchHover,
              j = {
                position: "relative",
                zIndex: "2",
                outline: "2px solid #fff",
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
              },
              Y = (0, g.Ay)(
                {
                  default: {
                    swatch: { width: "25px", height: "25px", fontSize: "0" },
                  },
                  hover: { swatch: j },
                },
                { hover: a },
              );
            return s.createElement(
              "div",
              { style: Y.swatch },
              s.createElement(er, {
                color: u,
                onClick: p,
                onHover: R,
                focusStyle: j,
              }),
            );
          };
          const rh = (0, g.H8)(nh);
          var Bo = function (t) {
            var a = t.width,
              u = t.colors,
              p = t.onChange,
              R = t.onSwatchHover,
              j = t.triangle,
              Y = t.styles,
              re = Y === void 0 ? {} : Y,
              ue = t.className,
              Ie = ue === void 0 ? "" : ue,
              Ue = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      card: {
                        width: a,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.2)",
                        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                        borderRadius: "4px",
                        position: "relative",
                        padding: "5px",
                        display: "flex",
                        flexWrap: "wrap",
                      },
                      triangle: {
                        position: "absolute",
                        border: "7px solid transparent",
                        borderBottomColor: "#fff",
                      },
                      triangleShadow: {
                        position: "absolute",
                        border: "8px solid transparent",
                        borderBottomColor: "rgba(0,0,0,0.15)",
                      },
                    },
                    "hide-triangle": {
                      triangle: { display: "none" },
                      triangleShadow: { display: "none" },
                    },
                    "top-left-triangle": {
                      triangle: { top: "-14px", left: "10px" },
                      triangleShadow: { top: "-16px", left: "9px" },
                    },
                    "top-right-triangle": {
                      triangle: { top: "-14px", right: "10px" },
                      triangleShadow: { top: "-16px", right: "9px" },
                    },
                    "bottom-left-triangle": {
                      triangle: {
                        top: "35px",
                        left: "10px",
                        transform: "rotate(180deg)",
                      },
                      triangleShadow: {
                        top: "37px",
                        left: "9px",
                        transform: "rotate(180deg)",
                      },
                    },
                    "bottom-right-triangle": {
                      triangle: {
                        top: "35px",
                        right: "10px",
                        transform: "rotate(180deg)",
                      },
                      triangleShadow: {
                        top: "37px",
                        right: "9px",
                        transform: "rotate(180deg)",
                      },
                    },
                  },
                  re,
                ),
                {
                  "hide-triangle": j === "hide",
                  "top-left-triangle": j === "top-left",
                  "top-right-triangle": j === "top-right",
                  "bottom-left-triangle": j === "bottom-left",
                  "bottom-right-triangle": j === "bottom-right",
                },
              ),
              Ge = function (at, ut) {
                return p({ hex: at, source: "hex" }, ut);
              };
            return s.createElement(
              "div",
              { style: Ue.card, className: "github-picker " + Ie },
              s.createElement("div", { style: Ue.triangleShadow }),
              s.createElement("div", { style: Ue.triangle }),
              nr(u, function (Qe) {
                return s.createElement(rh, {
                  color: Qe,
                  key: Qe,
                  onClick: Ge,
                  onSwatchHover: R,
                });
              }),
            );
          };
          (Bo.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            colors: Ee().arrayOf(Ee().string),
            triangle: Ee().oneOf([
              "hide",
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
            ]),
            styles: Ee().object,
          }),
            (Bo.defaultProps = {
              width: 200,
              colors: [
                "#B80000",
                "#DB3E00",
                "#FCCB00",
                "#008B02",
                "#006B76",
                "#1273DE",
                "#004DCF",
                "#5300EB",
                "#EB9694",
                "#FAD0C3",
                "#FEF3BD",
                "#C1E1C5",
                "#BEDADC",
                "#C4DEF6",
                "#BED3F3",
                "#D4C4FB",
              ],
              triangle: "top-left",
              styles: {},
            });
          const Zh = Zt(Bo);
          var ih = function (t) {
            var a = t.direction,
              u = (0, g.Ay)(
                {
                  default: {
                    picker: {
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      transform: "translate(-9px, -1px)",
                      backgroundColor: "rgb(248, 248, 248)",
                      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                    },
                  },
                  vertical: { picker: { transform: "translate(-3px, -9px)" } },
                },
                { vertical: a === "vertical" },
              );
            return s.createElement("div", { style: u.picker });
          };
          const oh = ih;
          var sh =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            Lo = function (t) {
              var a = t.width,
                u = t.height,
                p = t.onChange,
                R = t.hsl,
                j = t.direction,
                Y = t.pointer,
                re = t.styles,
                ue = re === void 0 ? {} : re,
                Ie = t.className,
                Ue = Ie === void 0 ? "" : Ie,
                Ge = (0, g.Ay)(
                  Yt(
                    {
                      default: {
                        picker: { position: "relative", width: a, height: u },
                        hue: { radius: "2px" },
                      },
                    },
                    ue,
                  ),
                ),
                Qe = function (ut) {
                  return p({ a: 1, h: ut.h, l: 0.5, s: 1 });
                };
              return s.createElement(
                "div",
                { style: Ge.picker, className: "hue-picker " + Ue },
                s.createElement(
                  Ce,
                  sh({}, Ge.hue, {
                    hsl: R,
                    pointer: Y,
                    onChange: Qe,
                    direction: j,
                  }),
                ),
              );
            };
          (Lo.propTypes = { styles: Ee().object }),
            (Lo.defaultProps = {
              width: "316px",
              height: "16px",
              direction: "horizontal",
              pointer: oh,
              styles: {},
            });
          const Qh = Zt(Lo);
          var lh = function (t) {
            var a = t.onChange,
              u = t.hex,
              p = t.rgb,
              R = t.styles,
              j = R === void 0 ? {} : R,
              Y = t.className,
              re = Y === void 0 ? "" : Y,
              ue = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      material: {
                        width: "98px",
                        height: "98px",
                        padding: "16px",
                        fontFamily: "Roboto",
                      },
                      HEXwrap: { position: "relative" },
                      HEXinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "2px solid " + u,
                        outline: "none",
                        height: "30px",
                      },
                      HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize",
                      },
                      Hex: { style: {} },
                      RGBwrap: { position: "relative" },
                      RGBinput: {
                        width: "100%",
                        marginTop: "12px",
                        fontSize: "15px",
                        color: "#333",
                        padding: "0px",
                        border: "0px",
                        borderBottom: "1px solid #eee",
                        outline: "none",
                        height: "30px",
                      },
                      RGBlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        fontSize: "11px",
                        color: "#999999",
                        textTransform: "capitalize",
                      },
                      split: {
                        display: "flex",
                        marginRight: "-10px",
                        paddingTop: "11px",
                      },
                      third: { flex: "1", paddingRight: "10px" },
                    },
                  },
                  j,
                ),
              ),
              Ie = function (Ge, Qe) {
                Ge.hex
                  ? Fn(Ge.hex) && a({ hex: Ge.hex, source: "hex" }, Qe)
                  : (Ge.r || Ge.g || Ge.b) &&
                    a(
                      {
                        r: Ge.r || p.r,
                        g: Ge.g || p.g,
                        b: Ge.b || p.b,
                        source: "rgb",
                      },
                      Qe,
                    );
              };
            return s.createElement(
              vo,
              { styles: j },
              s.createElement(
                "div",
                { style: ue.material, className: "material-picker " + re },
                s.createElement(Ne, {
                  style: {
                    wrap: ue.HEXwrap,
                    input: ue.HEXinput,
                    label: ue.HEXlabel,
                  },
                  label: "hex",
                  value: u,
                  onChange: Ie,
                }),
                s.createElement(
                  "div",
                  { style: ue.split, className: "flexbox-fix" },
                  s.createElement(
                    "div",
                    { style: ue.third },
                    s.createElement(Ne, {
                      style: {
                        wrap: ue.RGBwrap,
                        input: ue.RGBinput,
                        label: ue.RGBlabel,
                      },
                      label: "r",
                      value: p.r,
                      onChange: Ie,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { style: ue.third },
                    s.createElement(Ne, {
                      style: {
                        wrap: ue.RGBwrap,
                        input: ue.RGBinput,
                        label: ue.RGBlabel,
                      },
                      label: "g",
                      value: p.g,
                      onChange: Ie,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { style: ue.third },
                    s.createElement(Ne, {
                      style: {
                        wrap: ue.RGBwrap,
                        input: ue.RGBinput,
                        label: ue.RGBlabel,
                      },
                      label: "b",
                      value: p.b,
                      onChange: Ie,
                    }),
                  ),
                ),
              ),
            );
          };
          const qh = Zt(lh);
          var ah = function (t) {
            var a = t.onChange,
              u = t.rgb,
              p = t.hsv,
              R = t.hex,
              j = (0, g.Ay)({
                default: {
                  fields: {
                    paddingTop: "5px",
                    paddingBottom: "9px",
                    width: "80px",
                    position: "relative",
                  },
                  divider: { height: "5px" },
                  RGBwrap: { position: "relative" },
                  RGBinput: {
                    marginLeft: "40%",
                    width: "40%",
                    height: "18px",
                    border: "1px solid #888888",
                    boxShadow:
                      "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                    marginBottom: "5px",
                    fontSize: "13px",
                    paddingLeft: "3px",
                    marginRight: "10px",
                  },
                  RGBlabel: {
                    left: "0px",
                    top: "0px",
                    width: "34px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    height: "18px",
                    lineHeight: "22px",
                    position: "absolute",
                  },
                  HEXwrap: { position: "relative" },
                  HEXinput: {
                    marginLeft: "20%",
                    width: "80%",
                    height: "18px",
                    border: "1px solid #888888",
                    boxShadow:
                      "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                    marginBottom: "6px",
                    fontSize: "13px",
                    paddingLeft: "3px",
                  },
                  HEXlabel: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "14px",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    height: "18px",
                    lineHeight: "22px",
                  },
                  fieldSymbols: {
                    position: "absolute",
                    top: "5px",
                    right: "-7px",
                    fontSize: "13px",
                  },
                  symbol: {
                    height: "20px",
                    lineHeight: "22px",
                    paddingBottom: "7px",
                  },
                },
              }),
              Y = function (ue, Ie) {
                ue["#"]
                  ? Fn(ue["#"]) && a({ hex: ue["#"], source: "hex" }, Ie)
                  : ue.r || ue.g || ue.b
                    ? a(
                        {
                          r: ue.r || u.r,
                          g: ue.g || u.g,
                          b: ue.b || u.b,
                          source: "rgb",
                        },
                        Ie,
                      )
                    : (ue.h || ue.s || ue.v) &&
                      a(
                        {
                          h: ue.h || p.h,
                          s: ue.s || p.s,
                          v: ue.v || p.v,
                          source: "hsv",
                        },
                        Ie,
                      );
              };
            return s.createElement(
              "div",
              { style: j.fields },
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "h",
                value: Math.round(p.h),
                onChange: Y,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "s",
                value: Math.round(p.s * 100),
                onChange: Y,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "v",
                value: Math.round(p.v * 100),
                onChange: Y,
              }),
              s.createElement("div", { style: j.divider }),
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "r",
                value: u.r,
                onChange: Y,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "g",
                value: u.g,
                onChange: Y,
              }),
              s.createElement(Ne, {
                style: {
                  wrap: j.RGBwrap,
                  input: j.RGBinput,
                  label: j.RGBlabel,
                },
                label: "b",
                value: u.b,
                onChange: Y,
              }),
              s.createElement("div", { style: j.divider }),
              s.createElement(Ne, {
                style: {
                  wrap: j.HEXwrap,
                  input: j.HEXinput,
                  label: j.HEXlabel,
                },
                label: "#",
                value: R.replace("#", ""),
                onChange: Y,
              }),
              s.createElement(
                "div",
                { style: j.fieldSymbols },
                s.createElement("div", { style: j.symbol }, "\xB0"),
                s.createElement("div", { style: j.symbol }, "%"),
                s.createElement("div", { style: j.symbol }, "%"),
              ),
            );
          };
          const ch = ah;
          var fh = function (t) {
            var a = t.hsl,
              u = (0, g.Ay)(
                {
                  default: {
                    picker: {
                      width: "12px",
                      height: "12px",
                      borderRadius: "6px",
                      boxShadow: "inset 0 0 0 1px #fff",
                      transform: "translate(-6px, -6px)",
                    },
                  },
                  "black-outline": {
                    picker: { boxShadow: "inset 0 0 0 1px #000" },
                  },
                },
                { "black-outline": a.l > 0.5 },
              );
            return s.createElement("div", { style: u.picker });
          };
          const uh = fh;
          var hh = function () {
            var t = (0, g.Ay)({
              default: {
                triangle: {
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "4px 0 4px 6px",
                  borderColor: "transparent transparent transparent #fff",
                  position: "absolute",
                  top: "1px",
                  left: "1px",
                },
                triangleBorder: {
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "5px 0 5px 8px",
                  borderColor: "transparent transparent transparent #555",
                },
                left: {
                  Extend: "triangleBorder",
                  transform: "translate(-13px, -4px)",
                },
                leftInside: {
                  Extend: "triangle",
                  transform: "translate(-8px, -5px)",
                },
                right: {
                  Extend: "triangleBorder",
                  transform: "translate(20px, -14px) rotate(180deg)",
                },
                rightInside: {
                  Extend: "triangle",
                  transform: "translate(-8px, -5px)",
                },
              },
            });
            return s.createElement(
              "div",
              { style: t.pointer },
              s.createElement(
                "div",
                { style: t.left },
                s.createElement("div", { style: t.leftInside }),
              ),
              s.createElement(
                "div",
                { style: t.right },
                s.createElement("div", { style: t.rightInside }),
              ),
            );
          };
          const dh = hh;
          var ph = function (t) {
            var a = t.onClick,
              u = t.label,
              p = t.children,
              R = t.active,
              j = (0, g.Ay)(
                {
                  default: {
                    button: {
                      backgroundImage:
                        "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                      border: "1px solid #878787",
                      borderRadius: "2px",
                      height: "20px",
                      boxShadow: "0 1px 0 0 #EAEAEA",
                      fontSize: "14px",
                      color: "#000",
                      lineHeight: "20px",
                      textAlign: "center",
                      marginBottom: "10px",
                      cursor: "pointer",
                    },
                  },
                  active: { button: { boxShadow: "0 0 0 1px #878787" } },
                },
                { active: R },
              );
            return s.createElement(
              "div",
              { style: j.button, onClick: a },
              u || p,
            );
          };
          const Js = ph;
          var gh = function (t) {
            var a = t.rgb,
              u = t.currentColor,
              p = (0, g.Ay)({
                default: {
                  swatches: {
                    border: "1px solid #B3B3B3",
                    borderBottom: "1px solid #F0F0F0",
                    marginBottom: "2px",
                    marginTop: "1px",
                  },
                  new: {
                    height: "34px",
                    background: "rgb(" + a.r + "," + a.g + ", " + a.b + ")",
                    boxShadow:
                      "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
                  },
                  current: {
                    height: "34px",
                    background: u,
                    boxShadow:
                      "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
                  },
                  label: {
                    fontSize: "14px",
                    color: "#000",
                    textAlign: "center",
                  },
                },
              });
            return s.createElement(
              "div",
              null,
              s.createElement("div", { style: p.label }, "new"),
              s.createElement(
                "div",
                { style: p.swatches },
                s.createElement("div", { style: p.new }),
                s.createElement("div", { style: p.current }),
              ),
              s.createElement("div", { style: p.label }, "current"),
            );
          };
          const mh = gh;
          var bh = (function () {
            function i(t, a) {
              for (var u = 0; u < a.length; u++) {
                var p = a[u];
                (p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  "value" in p && (p.writable = !0),
                  Object.defineProperty(t, p.key, p);
              }
            }
            return function (t, a, u) {
              return a && i(t.prototype, a), u && i(t, u), t;
            };
          })();
          function yh(i, t) {
            if (!(i instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function xh(i, t) {
            if (!i)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t && (typeof t == "object" || typeof t == "function")
              ? t
              : i;
          }
          function vh(i, t) {
            if (typeof t != "function" && t !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (i.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(i, t)
                  : (i.__proto__ = t));
          }
          var zo = (function (i) {
            vh(t, i);
            function t(a) {
              yh(this, t);
              var u = xh(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this),
              );
              return (u.state = { currentColor: a.hex }), u;
            }
            return (
              bh(t, [
                {
                  key: "render",
                  value: function () {
                    var u = this.props,
                      p = u.styles,
                      R = p === void 0 ? {} : p,
                      j = u.className,
                      Y = j === void 0 ? "" : j,
                      re = (0, g.Ay)(
                        Yt(
                          {
                            default: {
                              picker: {
                                background: "#DCDCDC",
                                borderRadius: "4px",
                                boxShadow:
                                  "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                                boxSizing: "initial",
                                width: "513px",
                              },
                              head: {
                                backgroundImage:
                                  "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                                borderBottom: "1px solid #B1B1B1",
                                boxShadow:
                                  "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                                height: "23px",
                                lineHeight: "24px",
                                borderRadius: "4px 4px 0 0",
                                fontSize: "13px",
                                color: "#4D4D4D",
                                textAlign: "center",
                              },
                              body: { padding: "15px 15px 0", display: "flex" },
                              saturation: {
                                width: "256px",
                                height: "256px",
                                position: "relative",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0",
                                overflow: "hidden",
                              },
                              hue: {
                                position: "relative",
                                height: "256px",
                                width: "19px",
                                marginLeft: "10px",
                                border: "2px solid #B3B3B3",
                                borderBottom: "2px solid #F0F0F0",
                              },
                              controls: { width: "180px", marginLeft: "10px" },
                              top: { display: "flex" },
                              previews: { width: "60px" },
                              actions: { flex: "1", marginLeft: "20px" },
                            },
                          },
                          R,
                        ),
                      );
                    return s.createElement(
                      "div",
                      { style: re.picker, className: "photoshop-picker " + Y },
                      s.createElement(
                        "div",
                        { style: re.head },
                        this.props.header,
                      ),
                      s.createElement(
                        "div",
                        { style: re.body, className: "flexbox-fix" },
                        s.createElement(
                          "div",
                          { style: re.saturation },
                          s.createElement(ki, {
                            hsl: this.props.hsl,
                            hsv: this.props.hsv,
                            pointer: uh,
                            onChange: this.props.onChange,
                          }),
                        ),
                        s.createElement(
                          "div",
                          { style: re.hue },
                          s.createElement(Ce, {
                            direction: "vertical",
                            hsl: this.props.hsl,
                            pointer: dh,
                            onChange: this.props.onChange,
                          }),
                        ),
                        s.createElement(
                          "div",
                          { style: re.controls },
                          s.createElement(
                            "div",
                            { style: re.top, className: "flexbox-fix" },
                            s.createElement(
                              "div",
                              { style: re.previews },
                              s.createElement(mh, {
                                rgb: this.props.rgb,
                                currentColor: this.state.currentColor,
                              }),
                            ),
                            s.createElement(
                              "div",
                              { style: re.actions },
                              s.createElement(Js, {
                                label: "OK",
                                onClick: this.props.onAccept,
                                active: !0,
                              }),
                              s.createElement(Js, {
                                label: "Cancel",
                                onClick: this.props.onCancel,
                              }),
                              s.createElement(ch, {
                                onChange: this.props.onChange,
                                rgb: this.props.rgb,
                                hsv: this.props.hsv,
                                hex: this.props.hex,
                              }),
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                },
              ]),
              t
            );
          })(s.Component);
          (zo.propTypes = { header: Ee().string, styles: Ee().object }),
            (zo.defaultProps = { header: "Color Picker", styles: {} });
          const ed = Zt(zo);
          var wh = function (t) {
            var a = t.onChange,
              u = t.rgb,
              p = t.hsl,
              R = t.hex,
              j = t.disableAlpha,
              Y = (0, g.Ay)(
                {
                  default: {
                    fields: { display: "flex", paddingTop: "4px" },
                    single: { flex: "1", paddingLeft: "6px" },
                    alpha: { flex: "1", paddingLeft: "6px" },
                    double: { flex: "2" },
                    input: {
                      width: "80%",
                      padding: "4px 10% 3px",
                      border: "none",
                      boxShadow: "inset 0 0 0 1px #ccc",
                      fontSize: "11px",
                    },
                    label: {
                      display: "block",
                      textAlign: "center",
                      fontSize: "11px",
                      color: "#222",
                      paddingTop: "3px",
                      paddingBottom: "4px",
                      textTransform: "capitalize",
                    },
                  },
                  disableAlpha: { alpha: { display: "none" } },
                },
                { disableAlpha: j },
              ),
              re = function (Ie, Ue) {
                Ie.hex
                  ? Fn(Ie.hex) && a({ hex: Ie.hex, source: "hex" }, Ue)
                  : Ie.r || Ie.g || Ie.b
                    ? a(
                        {
                          r: Ie.r || u.r,
                          g: Ie.g || u.g,
                          b: Ie.b || u.b,
                          a: u.a,
                          source: "rgb",
                        },
                        Ue,
                      )
                    : Ie.a &&
                      (Ie.a < 0 ? (Ie.a = 0) : Ie.a > 100 && (Ie.a = 100),
                      (Ie.a /= 100),
                      a(
                        { h: p.h, s: p.s, l: p.l, a: Ie.a, source: "rgb" },
                        Ue,
                      ));
              };
            return s.createElement(
              "div",
              { style: Y.fields, className: "flexbox-fix" },
              s.createElement(
                "div",
                { style: Y.double },
                s.createElement(Ne, {
                  style: { input: Y.input, label: Y.label },
                  label: "hex",
                  value: R.replace("#", ""),
                  onChange: re,
                }),
              ),
              s.createElement(
                "div",
                { style: Y.single },
                s.createElement(Ne, {
                  style: { input: Y.input, label: Y.label },
                  label: "r",
                  value: u.r,
                  onChange: re,
                  dragLabel: "true",
                  dragMax: "255",
                }),
              ),
              s.createElement(
                "div",
                { style: Y.single },
                s.createElement(Ne, {
                  style: { input: Y.input, label: Y.label },
                  label: "g",
                  value: u.g,
                  onChange: re,
                  dragLabel: "true",
                  dragMax: "255",
                }),
              ),
              s.createElement(
                "div",
                { style: Y.single },
                s.createElement(Ne, {
                  style: { input: Y.input, label: Y.label },
                  label: "b",
                  value: u.b,
                  onChange: re,
                  dragLabel: "true",
                  dragMax: "255",
                }),
              ),
              s.createElement(
                "div",
                { style: Y.alpha },
                s.createElement(Ne, {
                  style: { input: Y.input, label: Y.label },
                  label: "a",
                  value: Math.round(u.a * 100),
                  onChange: re,
                  dragLabel: "true",
                  dragMax: "100",
                }),
              ),
            );
          };
          const Sh = wh;
          var Ch =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            Gs = function (t) {
              var a = t.colors,
                u = t.onClick,
                p = u === void 0 ? function () {} : u,
                R = t.onSwatchHover,
                j = (0, g.Ay)(
                  {
                    default: {
                      colors: {
                        margin: "0 -10px",
                        padding: "10px 0 0 10px",
                        borderTop: "1px solid #eee",
                        display: "flex",
                        flexWrap: "wrap",
                        position: "relative",
                      },
                      swatchWrap: {
                        width: "16px",
                        height: "16px",
                        margin: "0 10px 10px 0",
                      },
                      swatch: {
                        borderRadius: "3px",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)",
                      },
                    },
                    "no-presets": { colors: { display: "none" } },
                  },
                  { "no-presets": !a || !a.length },
                ),
                Y = function (ue, Ie) {
                  p({ hex: ue, source: "hex" }, Ie);
                };
              return s.createElement(
                "div",
                { style: j.colors, className: "flexbox-fix" },
                a.map(function (re) {
                  var ue = typeof re == "string" ? { color: re } : re,
                    Ie = "" + ue.color + (ue.title || "");
                  return s.createElement(
                    "div",
                    { key: Ie, style: j.swatchWrap },
                    s.createElement(
                      er,
                      Ch({}, ue, {
                        style: j.swatch,
                        onClick: Y,
                        onHover: R,
                        focusStyle: {
                          boxShadow:
                            "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " +
                            ue.color,
                        },
                      }),
                    ),
                  );
                }),
              );
            };
          Gs.propTypes = {
            colors: Ee().arrayOf(
              Ee().oneOfType([
                Ee().string,
                Ee().shape({ color: Ee().string, title: Ee().string }),
              ]),
            ).isRequired,
          };
          const Eh = Gs;
          var Oh =
              Object.assign ||
              function (i) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var u in a)
                    Object.prototype.hasOwnProperty.call(a, u) && (i[u] = a[u]);
                }
                return i;
              },
            Ho = function (t) {
              var a = t.width,
                u = t.rgb,
                p = t.hex,
                R = t.hsv,
                j = t.hsl,
                Y = t.onChange,
                re = t.onSwatchHover,
                ue = t.disableAlpha,
                Ie = t.presetColors,
                Ue = t.renderers,
                Ge = t.styles,
                Qe = Ge === void 0 ? {} : Ge,
                at = t.className,
                ut = at === void 0 ? "" : at,
                bt = (0, g.Ay)(
                  Yt(
                    {
                      default: Oh(
                        {
                          picker: {
                            width: a,
                            padding: "10px 10px 0",
                            boxSizing: "initial",
                            background: "#fff",
                            borderRadius: "4px",
                            boxShadow:
                              "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                          },
                          saturation: {
                            width: "100%",
                            paddingBottom: "75%",
                            position: "relative",
                            overflow: "hidden",
                          },
                          Saturation: {
                            radius: "3px",
                            shadow:
                              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                          },
                          controls: { display: "flex" },
                          sliders: { padding: "4px 0", flex: "1" },
                          color: {
                            width: "24px",
                            height: "24px",
                            position: "relative",
                            marginTop: "4px",
                            marginLeft: "4px",
                            borderRadius: "3px",
                          },
                          activeColor: {
                            absolute: "0px 0px 0px 0px",
                            borderRadius: "2px",
                            background:
                              "rgba(" +
                              u.r +
                              "," +
                              u.g +
                              "," +
                              u.b +
                              "," +
                              u.a +
                              ")",
                            boxShadow:
                              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                          },
                          hue: {
                            position: "relative",
                            height: "10px",
                            overflow: "hidden",
                          },
                          Hue: {
                            radius: "2px",
                            shadow:
                              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                          },
                          alpha: {
                            position: "relative",
                            height: "10px",
                            marginTop: "4px",
                            overflow: "hidden",
                          },
                          Alpha: {
                            radius: "2px",
                            shadow:
                              "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                          },
                        },
                        Qe,
                      ),
                      disableAlpha: {
                        color: { height: "10px" },
                        hue: { height: "10px" },
                        alpha: { display: "none" },
                      },
                    },
                    Qe,
                  ),
                  { disableAlpha: ue },
                );
              return s.createElement(
                "div",
                { style: bt.picker, className: "sketch-picker " + ut },
                s.createElement(
                  "div",
                  { style: bt.saturation },
                  s.createElement(ki, {
                    style: bt.Saturation,
                    hsl: j,
                    hsv: R,
                    onChange: Y,
                  }),
                ),
                s.createElement(
                  "div",
                  { style: bt.controls, className: "flexbox-fix" },
                  s.createElement(
                    "div",
                    { style: bt.sliders },
                    s.createElement(
                      "div",
                      { style: bt.hue },
                      s.createElement(Ce, {
                        style: bt.Hue,
                        hsl: j,
                        onChange: Y,
                      }),
                    ),
                    s.createElement(
                      "div",
                      { style: bt.alpha },
                      s.createElement(Q, {
                        style: bt.Alpha,
                        rgb: u,
                        hsl: j,
                        renderers: Ue,
                        onChange: Y,
                      }),
                    ),
                  ),
                  s.createElement(
                    "div",
                    { style: bt.color },
                    s.createElement(G, null),
                    s.createElement("div", { style: bt.activeColor }),
                  ),
                ),
                s.createElement(Sh, {
                  rgb: u,
                  hsl: j,
                  hex: p,
                  onChange: Y,
                  disableAlpha: ue,
                }),
                s.createElement(Eh, {
                  colors: Ie,
                  onClick: Y,
                  onSwatchHover: re,
                }),
              );
            };
          (Ho.propTypes = {
            disableAlpha: Ee().bool,
            width: Ee().oneOfType([Ee().string, Ee().number]),
            styles: Ee().object,
          }),
            (Ho.defaultProps = {
              disableAlpha: !1,
              width: 200,
              styles: {},
              presetColors: [
                "#D0021B",
                "#F5A623",
                "#F8E71C",
                "#8B572A",
                "#7ED321",
                "#417505",
                "#BD10E0",
                "#9013FE",
                "#4A90E2",
                "#50E3C2",
                "#B8E986",
                "#000000",
                "#4A4A4A",
                "#9B9B9B",
                "#FFFFFF",
              ],
            });
          const td = Zt(Ho);
          var Mh = function (t) {
            var a = t.hsl,
              u = t.offset,
              p = t.onClick,
              R = p === void 0 ? function () {} : p,
              j = t.active,
              Y = t.first,
              re = t.last,
              ue = (0, g.Ay)(
                {
                  default: {
                    swatch: {
                      height: "12px",
                      background: "hsl(" + a.h + ", 50%, " + u * 100 + "%)",
                      cursor: "pointer",
                    },
                  },
                  first: { swatch: { borderRadius: "2px 0 0 2px" } },
                  last: { swatch: { borderRadius: "0 2px 2px 0" } },
                  active: {
                    swatch: {
                      transform: "scaleY(1.8)",
                      borderRadius: "3.6px/2px",
                    },
                  },
                },
                { active: j, first: Y, last: re },
              ),
              Ie = function (Ge) {
                return R({ h: a.h, s: 0.5, l: u, source: "hsl" }, Ge);
              };
            return s.createElement("div", { style: ue.swatch, onClick: Ie });
          };
          const ei = Mh;
          var Ah = function (t) {
            var a = t.onClick,
              u = t.hsl,
              p = (0, g.Ay)({
                default: {
                  swatches: { marginTop: "20px" },
                  swatch: {
                    boxSizing: "border-box",
                    width: "20%",
                    paddingRight: "1px",
                    float: "left",
                  },
                  clear: { clear: "both" },
                },
              }),
              R = 0.1;
            return s.createElement(
              "div",
              { style: p.swatches },
              s.createElement(
                "div",
                { style: p.swatch },
                s.createElement(ei, {
                  hsl: u,
                  offset: ".80",
                  active: Math.abs(u.l - 0.8) < R && Math.abs(u.s - 0.5) < R,
                  onClick: a,
                  first: !0,
                }),
              ),
              s.createElement(
                "div",
                { style: p.swatch },
                s.createElement(ei, {
                  hsl: u,
                  offset: ".65",
                  active: Math.abs(u.l - 0.65) < R && Math.abs(u.s - 0.5) < R,
                  onClick: a,
                }),
              ),
              s.createElement(
                "div",
                { style: p.swatch },
                s.createElement(ei, {
                  hsl: u,
                  offset: ".50",
                  active: Math.abs(u.l - 0.5) < R && Math.abs(u.s - 0.5) < R,
                  onClick: a,
                }),
              ),
              s.createElement(
                "div",
                { style: p.swatch },
                s.createElement(ei, {
                  hsl: u,
                  offset: ".35",
                  active: Math.abs(u.l - 0.35) < R && Math.abs(u.s - 0.5) < R,
                  onClick: a,
                }),
              ),
              s.createElement(
                "div",
                { style: p.swatch },
                s.createElement(ei, {
                  hsl: u,
                  offset: ".20",
                  active: Math.abs(u.l - 0.2) < R && Math.abs(u.s - 0.5) < R,
                  onClick: a,
                  last: !0,
                }),
              ),
              s.createElement("div", { style: p.clear }),
            );
          };
          const Th = Ah;
          var kh = function () {
            var t = (0, g.Ay)({
              default: {
                picker: {
                  width: "14px",
                  height: "14px",
                  borderRadius: "6px",
                  transform: "translate(-7px, -1px)",
                  backgroundColor: "rgb(248, 248, 248)",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                },
              },
            });
            return s.createElement("div", { style: t.picker });
          };
          const Nh = kh;
          var jo = function (t) {
            var a = t.hsl,
              u = t.onChange,
              p = t.pointer,
              R = t.styles,
              j = R === void 0 ? {} : R,
              Y = t.className,
              re = Y === void 0 ? "" : Y,
              ue = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      hue: { height: "12px", position: "relative" },
                      Hue: { radius: "2px" },
                    },
                  },
                  j,
                ),
              );
            return s.createElement(
              "div",
              { style: ue.wrap || {}, className: "slider-picker " + re },
              s.createElement(
                "div",
                { style: ue.hue },
                s.createElement(Ce, {
                  style: ue.Hue,
                  hsl: a,
                  pointer: p,
                  onChange: u,
                }),
              ),
              s.createElement(
                "div",
                { style: ue.swatches },
                s.createElement(Th, { hsl: a, onClick: u }),
              ),
            );
          };
          (jo.propTypes = { styles: Ee().object }),
            (jo.defaultProps = { pointer: Nh, styles: {} });
          const nd = Zt(jo);
          var Dh = d(83478),
            Rh = function (t) {
              var a = t.color,
                u = t.onClick,
                p = u === void 0 ? function () {} : u,
                R = t.onSwatchHover,
                j = t.first,
                Y = t.last,
                re = t.active,
                ue = (0, g.Ay)(
                  {
                    default: {
                      color: {
                        width: "40px",
                        height: "24px",
                        cursor: "pointer",
                        background: a,
                        marginBottom: "1px",
                      },
                      check: {
                        color: Eo(a),
                        marginLeft: "8px",
                        display: "none",
                      },
                    },
                    first: {
                      color: {
                        overflow: "hidden",
                        borderRadius: "2px 2px 0 0",
                      },
                    },
                    last: {
                      color: {
                        overflow: "hidden",
                        borderRadius: "0 0 2px 2px",
                      },
                    },
                    active: { check: { display: "block" } },
                    "color-#FFFFFF": {
                      color: { boxShadow: "inset 0 0 0 1px #ddd" },
                      check: { color: "#333" },
                    },
                    transparent: { check: { color: "#333" } },
                  },
                  {
                    first: j,
                    last: Y,
                    active: re,
                    "color-#FFFFFF": a === "#FFFFFF",
                    transparent: a === "transparent",
                  },
                );
              return s.createElement(
                er,
                {
                  color: a,
                  style: ue.color,
                  onClick: p,
                  onHover: R,
                  focusStyle: { boxShadow: "0 0 4px " + a },
                },
                s.createElement(
                  "div",
                  { style: ue.check },
                  s.createElement(Dh.A, null),
                ),
              );
            };
          const Ph = Rh;
          var _h = function (t) {
            var a = t.onClick,
              u = t.onSwatchHover,
              p = t.group,
              R = t.active,
              j = (0, g.Ay)({
                default: {
                  group: {
                    paddingBottom: "10px",
                    width: "40px",
                    float: "left",
                    marginRight: "10px",
                  },
                },
              });
            return s.createElement(
              "div",
              { style: j.group },
              nr(p, function (Y, re) {
                return s.createElement(Ph, {
                  key: Y,
                  color: Y,
                  active: Y.toLowerCase() === R,
                  first: re === 0,
                  last: re === p.length - 1,
                  onClick: a,
                  onSwatchHover: u,
                });
              }),
            );
          };
          const Ih = _h;
          var Ko = function (t) {
            var a = t.width,
              u = t.height,
              p = t.onChange,
              R = t.onSwatchHover,
              j = t.colors,
              Y = t.hex,
              re = t.styles,
              ue = re === void 0 ? {} : re,
              Ie = t.className,
              Ue = Ie === void 0 ? "" : Ie,
              Ge = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      picker: { width: a, height: u },
                      overflow: { height: u, overflowY: "scroll" },
                      body: { padding: "16px 0 6px 16px" },
                      clear: { clear: "both" },
                    },
                  },
                  ue,
                ),
              ),
              Qe = function (ut, bt) {
                return p({ hex: ut, source: "hex" }, bt);
              };
            return s.createElement(
              "div",
              { style: Ge.picker, className: "swatches-picker " + Ue },
              s.createElement(
                vo,
                null,
                s.createElement(
                  "div",
                  { style: Ge.overflow },
                  s.createElement(
                    "div",
                    { style: Ge.body },
                    nr(j, function (at) {
                      return s.createElement(Ih, {
                        key: at.toString(),
                        group: at,
                        active: Y,
                        onClick: Qe,
                        onSwatchHover: R,
                      });
                    }),
                    s.createElement("div", { style: Ge.clear }),
                  ),
                ),
              ),
            );
          };
          (Ko.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            height: Ee().oneOfType([Ee().string, Ee().number]),
            colors: Ee().arrayOf(Ee().arrayOf(Ee().string)),
            styles: Ee().object,
          }),
            (Ko.defaultProps = {
              width: 320,
              height: 240,
              colors: [
                [rr[900], rr[700], rr[500], rr[300], rr[100]],
                [ir[900], ir[700], ir[500], ir[300], ir[100]],
                [or[900], or[700], or[500], or[300], or[100]],
                [sr[900], sr[700], sr[500], sr[300], sr[100]],
                [lr[900], lr[700], lr[500], lr[300], lr[100]],
                [ar[900], ar[700], ar[500], ar[300], ar[100]],
                [cr[900], cr[700], cr[500], cr[300], cr[100]],
                [fr[900], fr[700], fr[500], fr[300], fr[100]],
                [ur[900], ur[700], ur[500], ur[300], ur[100]],
                ["#194D33", Rr[700], Rr[500], Rr[300], Rr[100]],
                [hr[900], hr[700], hr[500], hr[300], hr[100]],
                [dr[900], dr[700], dr[500], dr[300], dr[100]],
                [pr[900], pr[700], pr[500], pr[300], pr[100]],
                [gr[900], gr[700], gr[500], gr[300], gr[100]],
                [mr[900], mr[700], mr[500], mr[300], mr[100]],
                [br[900], br[700], br[500], br[300], br[100]],
                [yr[900], yr[700], yr[500], yr[300], yr[100]],
                [xr[900], xr[700], xr[500], xr[300], xr[100]],
                ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
              ],
              styles: {},
            });
          const rd = Zt(Ko);
          var Vo = function (t) {
            var a = t.onChange,
              u = t.onSwatchHover,
              p = t.hex,
              R = t.colors,
              j = t.width,
              Y = t.triangle,
              re = t.styles,
              ue = re === void 0 ? {} : re,
              Ie = t.className,
              Ue = Ie === void 0 ? "" : Ie,
              Ge = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      card: {
                        width: j,
                        background: "#fff",
                        border: "0 solid rgba(0,0,0,0.25)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        borderRadius: "4px",
                        position: "relative",
                      },
                      body: { padding: "15px 9px 9px 15px" },
                      label: { fontSize: "18px", color: "#fff" },
                      triangle: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor: "transparent transparent #fff transparent",
                        position: "absolute",
                      },
                      triangleShadow: {
                        width: "0px",
                        height: "0px",
                        borderStyle: "solid",
                        borderWidth: "0 9px 10px 9px",
                        borderColor:
                          "transparent transparent rgba(0,0,0,.1) transparent",
                        position: "absolute",
                      },
                      hash: {
                        background: "#F0F0F0",
                        height: "30px",
                        width: "30px",
                        borderRadius: "4px 0 0 4px",
                        float: "left",
                        color: "#98A1A4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      input: {
                        width: "100px",
                        fontSize: "14px",
                        color: "#666",
                        border: "0px",
                        outline: "none",
                        height: "28px",
                        boxShadow: "inset 0 0 0 1px #F0F0F0",
                        boxSizing: "content-box",
                        borderRadius: "0 4px 4px 0",
                        float: "left",
                        paddingLeft: "8px",
                      },
                      swatch: {
                        width: "30px",
                        height: "30px",
                        float: "left",
                        borderRadius: "4px",
                        margin: "0 6px 6px 0",
                      },
                      clear: { clear: "both" },
                    },
                    "hide-triangle": {
                      triangle: { display: "none" },
                      triangleShadow: { display: "none" },
                    },
                    "top-left-triangle": {
                      triangle: { top: "-10px", left: "12px" },
                      triangleShadow: { top: "-11px", left: "12px" },
                    },
                    "top-right-triangle": {
                      triangle: { top: "-10px", right: "12px" },
                      triangleShadow: { top: "-11px", right: "12px" },
                    },
                  },
                  ue,
                ),
                {
                  "hide-triangle": Y === "hide",
                  "top-left-triangle": Y === "top-left",
                  "top-right-triangle": Y === "top-right",
                },
              ),
              Qe = function (ut, bt) {
                Fn(ut) && a({ hex: ut, source: "hex" }, bt);
              };
            return s.createElement(
              "div",
              { style: Ge.card, className: "twitter-picker " + Ue },
              s.createElement("div", { style: Ge.triangleShadow }),
              s.createElement("div", { style: Ge.triangle }),
              s.createElement(
                "div",
                { style: Ge.body },
                nr(R, function (at, ut) {
                  return s.createElement(er, {
                    key: ut,
                    color: at,
                    hex: at,
                    style: Ge.swatch,
                    onClick: Qe,
                    onHover: u,
                    focusStyle: { boxShadow: "0 0 4px " + at },
                  });
                }),
                s.createElement("div", { style: Ge.hash }, "#"),
                s.createElement(Ne, {
                  label: null,
                  style: { input: Ge.input },
                  value: p.replace("#", ""),
                  onChange: Qe,
                }),
                s.createElement("div", { style: Ge.clear }),
              ),
            );
          };
          (Vo.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            triangle: Ee().oneOf(["hide", "top-left", "top-right"]),
            colors: Ee().arrayOf(Ee().string),
            styles: Ee().object,
          }),
            (Vo.defaultProps = {
              width: 276,
              colors: [
                "#FF6900",
                "#FCB900",
                "#7BDCB5",
                "#00D084",
                "#8ED1FC",
                "#0693E3",
                "#ABB8C3",
                "#EB144C",
                "#F78DA7",
                "#9900EF",
              ],
              triangle: "top-left",
              styles: {},
            });
          const id = Zt(Vo);
          var Uo = function (t) {
            var a = (0, g.Ay)({
              default: {
                picker: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "22px",
                  border: "2px #fff solid",
                  transform: "translate(-12px, -13px)",
                  background:
                    "hsl(" +
                    Math.round(t.hsl.h) +
                    ", " +
                    Math.round(t.hsl.s * 100) +
                    "%, " +
                    Math.round(t.hsl.l * 100) +
                    "%)",
                },
              },
            });
            return s.createElement("div", { style: a.picker });
          };
          (Uo.propTypes = {
            hsl: Ee().shape({
              h: Ee().number,
              s: Ee().number,
              l: Ee().number,
              a: Ee().number,
            }),
          }),
            (Uo.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
          const Fh = Uo;
          var Wo = function (t) {
            var a = (0, g.Ay)({
              default: {
                picker: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "22px",
                  transform: "translate(-10px, -7px)",
                  background: "hsl(" + Math.round(t.hsl.h) + ", 100%, 50%)",
                  border: "2px white solid",
                },
              },
            });
            return s.createElement("div", { style: a.picker });
          };
          (Wo.propTypes = {
            hsl: Ee().shape({
              h: Ee().number,
              s: Ee().number,
              l: Ee().number,
              a: Ee().number,
            }),
          }),
            (Wo.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
          const Bh = Wo;
          var Lh = function (t) {
            var a = t.onChange,
              u = t.rgb,
              p = t.hsl,
              R = t.hex,
              j = t.hsv,
              Y = function (Qe, at) {
                if (Qe.hex) Fn(Qe.hex) && a({ hex: Qe.hex, source: "hex" }, at);
                else if (Qe.rgb) {
                  var ut = Qe.rgb.split(",");
                  Oo(Qe.rgb, "rgb") &&
                    a(
                      { r: ut[0], g: ut[1], b: ut[2], a: 1, source: "rgb" },
                      at,
                    );
                } else if (Qe.hsv) {
                  var bt = Qe.hsv.split(",");
                  Oo(Qe.hsv, "hsv") &&
                    ((bt[2] = bt[2].replace("%", "")),
                    (bt[1] = bt[1].replace("%", "")),
                    (bt[0] = bt[0].replace("\xB0", "")),
                    bt[1] == 1 ? (bt[1] = 0.01) : bt[2] == 1 && (bt[2] = 0.01),
                    a(
                      {
                        h: Number(bt[0]),
                        s: Number(bt[1]),
                        v: Number(bt[2]),
                        source: "hsv",
                      },
                      at,
                    ));
                } else if (Qe.hsl) {
                  var Pt = Qe.hsl.split(",");
                  Oo(Qe.hsl, "hsl") &&
                    ((Pt[2] = Pt[2].replace("%", "")),
                    (Pt[1] = Pt[1].replace("%", "")),
                    (Pt[0] = Pt[0].replace("\xB0", "")),
                    Ue[1] == 1 ? (Ue[1] = 0.01) : Ue[2] == 1 && (Ue[2] = 0.01),
                    a(
                      {
                        h: Number(Pt[0]),
                        s: Number(Pt[1]),
                        v: Number(Pt[2]),
                        source: "hsl",
                      },
                      at,
                    ));
                }
              },
              re = (0, g.Ay)({
                default: {
                  wrap: { display: "flex", height: "100px", marginTop: "4px" },
                  fields: { width: "100%" },
                  column: {
                    paddingTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  },
                  double: { padding: "0px 4.4px", boxSizing: "border-box" },
                  input: {
                    width: "100%",
                    height: "38px",
                    boxSizing: "border-box",
                    padding: "4px 10% 3px",
                    textAlign: "center",
                    border: "1px solid #dadce0",
                    fontSize: "11px",
                    textTransform: "lowercase",
                    borderRadius: "5px",
                    outline: "none",
                    fontFamily: "Roboto,Arial,sans-serif",
                  },
                  input2: {
                    height: "38px",
                    width: "100%",
                    border: "1px solid #dadce0",
                    boxSizing: "border-box",
                    fontSize: "11px",
                    textTransform: "lowercase",
                    borderRadius: "5px",
                    outline: "none",
                    paddingLeft: "10px",
                    fontFamily: "Roboto,Arial,sans-serif",
                  },
                  label: {
                    textAlign: "center",
                    fontSize: "12px",
                    background: "#fff",
                    position: "absolute",
                    textTransform: "uppercase",
                    color: "#3c4043",
                    width: "35px",
                    top: "-6px",
                    left: "0",
                    right: "0",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontFamily: "Roboto,Arial,sans-serif",
                  },
                  label2: {
                    left: "10px",
                    textAlign: "center",
                    fontSize: "12px",
                    background: "#fff",
                    position: "absolute",
                    textTransform: "uppercase",
                    color: "#3c4043",
                    width: "32px",
                    top: "-6px",
                    fontFamily: "Roboto,Arial,sans-serif",
                  },
                  single: { flexGrow: "1", margin: "0px 4.4px" },
                },
              }),
              ue = u.r + ", " + u.g + ", " + u.b,
              Ie =
                Math.round(p.h) +
                "\xB0, " +
                Math.round(p.s * 100) +
                "%, " +
                Math.round(p.l * 100) +
                "%",
              Ue =
                Math.round(j.h) +
                "\xB0, " +
                Math.round(j.s * 100) +
                "%, " +
                Math.round(j.v * 100) +
                "%";
            return s.createElement(
              "div",
              { style: re.wrap, className: "flexbox-fix" },
              s.createElement(
                "div",
                { style: re.fields },
                s.createElement(
                  "div",
                  { style: re.double },
                  s.createElement(Ne, {
                    style: { input: re.input, label: re.label },
                    label: "hex",
                    value: R,
                    onChange: Y,
                  }),
                ),
                s.createElement(
                  "div",
                  { style: re.column },
                  s.createElement(
                    "div",
                    { style: re.single },
                    s.createElement(Ne, {
                      style: { input: re.input2, label: re.label2 },
                      label: "rgb",
                      value: ue,
                      onChange: Y,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { style: re.single },
                    s.createElement(Ne, {
                      style: { input: re.input2, label: re.label2 },
                      label: "hsv",
                      value: Ue,
                      onChange: Y,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { style: re.single },
                    s.createElement(Ne, {
                      style: { input: re.input2, label: re.label2 },
                      label: "hsl",
                      value: Ie,
                      onChange: Y,
                    }),
                  ),
                ),
              ),
            );
          };
          const zh = Lh;
          var Jo = function (t) {
            var a = t.width,
              u = t.onChange,
              p = t.rgb,
              R = t.hsl,
              j = t.hsv,
              Y = t.hex,
              re = t.header,
              ue = t.styles,
              Ie = ue === void 0 ? {} : ue,
              Ue = t.className,
              Ge = Ue === void 0 ? "" : Ue,
              Qe = (0, g.Ay)(
                Yt(
                  {
                    default: {
                      picker: {
                        width: a,
                        background: "#fff",
                        border: "1px solid #dfe1e5",
                        boxSizing: "initial",
                        display: "flex",
                        flexWrap: "wrap",
                        borderRadius: "8px 8px 0px 0px",
                      },
                      head: {
                        height: "57px",
                        width: "100%",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "16px",
                        fontSize: "20px",
                        boxSizing: "border-box",
                        fontFamily:
                          "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
                      },
                      saturation: {
                        width: "70%",
                        padding: "0px",
                        position: "relative",
                        overflow: "hidden",
                      },
                      swatch: {
                        width: "30%",
                        height: "228px",
                        padding: "0px",
                        background:
                          "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 1)",
                        position: "relative",
                        overflow: "hidden",
                      },
                      body: { margin: "auto", width: "95%" },
                      controls: {
                        display: "flex",
                        boxSizing: "border-box",
                        height: "52px",
                        paddingTop: "22px",
                      },
                      color: { width: "32px" },
                      hue: {
                        height: "8px",
                        position: "relative",
                        margin: "0px 16px 0px 16px",
                        width: "100%",
                      },
                      Hue: { radius: "2px" },
                    },
                  },
                  Ie,
                ),
              );
            return s.createElement(
              "div",
              { style: Qe.picker, className: "google-picker " + Ge },
              s.createElement("div", { style: Qe.head }, re),
              s.createElement("div", { style: Qe.swatch }),
              s.createElement(
                "div",
                { style: Qe.saturation },
                s.createElement(ki, {
                  hsl: R,
                  hsv: j,
                  pointer: Fh,
                  onChange: u,
                }),
              ),
              s.createElement(
                "div",
                { style: Qe.body },
                s.createElement(
                  "div",
                  { style: Qe.controls, className: "flexbox-fix" },
                  s.createElement(
                    "div",
                    { style: Qe.hue },
                    s.createElement(Ce, {
                      style: Qe.Hue,
                      hsl: R,
                      radius: "4px",
                      pointer: Bh,
                      onChange: u,
                    }),
                  ),
                ),
                s.createElement(zh, {
                  rgb: p,
                  hsl: R,
                  hex: Y,
                  hsv: j,
                  onChange: u,
                }),
              ),
            );
          };
          (Jo.propTypes = {
            width: Ee().oneOfType([Ee().string, Ee().number]),
            styles: Ee().object,
            header: Ee().string,
          }),
            (Jo.defaultProps = {
              width: 652,
              styles: {},
              header: "Color picker",
            });
          const od = Zt(Jo);
        },
        12838: (D, V, d) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 }),
            (V.autoprefix = void 0);
          var s = d(62369),
            g = _(s),
            M =
              Object.assign ||
              function (U) {
                for (var I = 1; I < arguments.length; I++) {
                  var G = arguments[I];
                  for (var se in G)
                    Object.prototype.hasOwnProperty.call(G, se) &&
                      (U[se] = G[se]);
                }
                return U;
              };
          function _(U) {
            return U && U.__esModule ? U : { default: U };
          }
          var T = {
              borderRadius: function (I) {
                return {
                  msBorderRadius: I,
                  MozBorderRadius: I,
                  OBorderRadius: I,
                  WebkitBorderRadius: I,
                  borderRadius: I,
                };
              },
              boxShadow: function (I) {
                return {
                  msBoxShadow: I,
                  MozBoxShadow: I,
                  OBoxShadow: I,
                  WebkitBoxShadow: I,
                  boxShadow: I,
                };
              },
              userSelect: function (I) {
                return {
                  WebkitTouchCallout: I,
                  KhtmlUserSelect: I,
                  MozUserSelect: I,
                  msUserSelect: I,
                  WebkitUserSelect: I,
                  userSelect: I,
                };
              },
              flex: function (I) {
                return {
                  WebkitBoxFlex: I,
                  MozBoxFlex: I,
                  WebkitFlex: I,
                  msFlex: I,
                  flex: I,
                };
              },
              flexBasis: function (I) {
                return { WebkitFlexBasis: I, flexBasis: I };
              },
              justifyContent: function (I) {
                return { WebkitJustifyContent: I, justifyContent: I };
              },
              transition: function (I) {
                return {
                  msTransition: I,
                  MozTransition: I,
                  OTransition: I,
                  WebkitTransition: I,
                  transition: I,
                };
              },
              transform: function (I) {
                return {
                  msTransform: I,
                  MozTransform: I,
                  OTransform: I,
                  WebkitTransform: I,
                  transform: I,
                };
              },
              absolute: function (I) {
                var G = I && I.split(" ");
                return {
                  position: "absolute",
                  top: G && G[0],
                  right: G && G[1],
                  bottom: G && G[2],
                  left: G && G[3],
                };
              },
              extend: function (I, G) {
                var se = G[I];
                return se || { extend: I };
              },
            },
            K = (V.autoprefix = function (I) {
              var G = {};
              return (
                (0, g.default)(I, function (se, pe) {
                  var ve = {};
                  (0, g.default)(se, function (je, We) {
                    var Me = T[We];
                    Me ? (ve = M({}, ve, Me(je))) : (ve[We] = je);
                  }),
                    (G[pe] = ve);
                }),
                G
              );
            });
          V.default = K;
        },
        72818: (D, V, d) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 }),
            (V.active = void 0);
          var s =
              Object.assign ||
              function (G) {
                for (var se = 1; se < arguments.length; se++) {
                  var pe = arguments[se];
                  for (var ve in pe)
                    Object.prototype.hasOwnProperty.call(pe, ve) &&
                      (G[ve] = pe[ve]);
                }
                return G;
              },
            g = d(90626),
            M = _(g);
          function _(G) {
            return G && G.__esModule ? G : { default: G };
          }
          function T(G, se) {
            if (!(G instanceof se))
              throw new TypeError("Cannot call a class as a function");
          }
          function K(G, se) {
            if (!G)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return se && (typeof se == "object" || typeof se == "function")
              ? se
              : G;
          }
          function U(G, se) {
            if (typeof se != "function" && se !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof se,
              );
            (G.prototype = Object.create(se && se.prototype, {
              constructor: {
                value: G,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              se &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(G, se)
                  : (G.__proto__ = se));
          }
          var I = (V.active = function (se) {
            var pe =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "span";
            return (function (ve) {
              U(je, ve);
              function je() {
                var We, Me, Q, ge;
                T(this, je);
                for (
                  var Ae = arguments.length, ae = Array(Ae), me = 0;
                  me < Ae;
                  me++
                )
                  ae[me] = arguments[me];
                return (
                  (ge =
                    ((Me =
                      ((Q = K(
                        this,
                        (We =
                          je.__proto__ || Object.getPrototypeOf(je)).call.apply(
                          We,
                          [this].concat(ae),
                        ),
                      )),
                      Q)),
                    (Q.state = { active: !1 }),
                    (Q.handleMouseDown = function () {
                      return Q.setState({ active: !0 });
                    }),
                    (Q.handleMouseUp = function () {
                      return Q.setState({ active: !1 });
                    }),
                    (Q.render = function () {
                      return M.default.createElement(
                        pe,
                        {
                          onMouseDown: Q.handleMouseDown,
                          onMouseUp: Q.handleMouseUp,
                        },
                        M.default.createElement(se, s({}, Q.props, Q.state)),
                      );
                    }),
                    Me)),
                  K(Q, ge)
                );
              }
              return je;
            })(M.default.Component);
          });
          V.default = I;
        },
        17516: (D, V, d) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 }),
            (V.hover = void 0);
          var s =
              Object.assign ||
              function (G) {
                for (var se = 1; se < arguments.length; se++) {
                  var pe = arguments[se];
                  for (var ve in pe)
                    Object.prototype.hasOwnProperty.call(pe, ve) &&
                      (G[ve] = pe[ve]);
                }
                return G;
              },
            g = d(90626),
            M = _(g);
          function _(G) {
            return G && G.__esModule ? G : { default: G };
          }
          function T(G, se) {
            if (!(G instanceof se))
              throw new TypeError("Cannot call a class as a function");
          }
          function K(G, se) {
            if (!G)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return se && (typeof se == "object" || typeof se == "function")
              ? se
              : G;
          }
          function U(G, se) {
            if (typeof se != "function" && se !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof se,
              );
            (G.prototype = Object.create(se && se.prototype, {
              constructor: {
                value: G,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              se &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(G, se)
                  : (G.__proto__ = se));
          }
          var I = (V.hover = function (se) {
            var pe =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "span";
            return (function (ve) {
              U(je, ve);
              function je() {
                var We, Me, Q, ge;
                T(this, je);
                for (
                  var Ae = arguments.length, ae = Array(Ae), me = 0;
                  me < Ae;
                  me++
                )
                  ae[me] = arguments[me];
                return (
                  (ge =
                    ((Me =
                      ((Q = K(
                        this,
                        (We =
                          je.__proto__ || Object.getPrototypeOf(je)).call.apply(
                          We,
                          [this].concat(ae),
                        ),
                      )),
                      Q)),
                    (Q.state = { hover: !1 }),
                    (Q.handleMouseOver = function () {
                      return Q.setState({ hover: !0 });
                    }),
                    (Q.handleMouseOut = function () {
                      return Q.setState({ hover: !1 });
                    }),
                    (Q.render = function () {
                      return M.default.createElement(
                        pe,
                        {
                          onMouseOver: Q.handleMouseOver,
                          onMouseOut: Q.handleMouseOut,
                        },
                        M.default.createElement(se, s({}, Q.props, Q.state)),
                      );
                    }),
                    Me)),
                  K(Q, ge)
                );
              }
              return je;
            })(M.default.Component);
          });
          V.default = I;
        },
        81335: (D, V, d) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 }),
            (V.flattenNames = void 0);
          var s = d(77837),
            g = G(s),
            M = d(62369),
            _ = G(M),
            T = d(23449),
            K = G(T),
            U = d(67160),
            I = G(U);
          function G(pe) {
            return pe && pe.__esModule ? pe : { default: pe };
          }
          var se = (V.flattenNames = function pe() {
            var ve =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : [],
              je = [];
            return (
              (0, I.default)(ve, function (We) {
                Array.isArray(We)
                  ? pe(We).map(function (Me) {
                      return je.push(Me);
                    })
                  : (0, K.default)(We)
                    ? (0, _.default)(We, function (Me, Q) {
                        Me === !0 && je.push(Q), je.push(Q + "-" + Me);
                      })
                    : (0, g.default)(We) && je.push(We);
              }),
              je
            );
          });
          V.default = se;
        },
        85341: (D, V, d) => {
          "use strict";
          var s;
          (s = { value: !0 }), (s = s = s = V.H8 = s = void 0);
          var g = d(81335),
            M = We(g),
            _ = d(89433),
            T = We(_),
            K = d(12838),
            U = We(K),
            I = d(17516),
            G = We(I),
            se = d(72818),
            pe = We(se),
            ve = d(60363),
            je = We(ve);
          function We(Q) {
            return Q && Q.__esModule ? Q : { default: Q };
          }
          (s = G.default),
            (V.H8 = G.default),
            (s = pe.default),
            (s = je.default);
          var Me = (s = function (ge) {
            for (
              var Ae = arguments.length,
                ae = Array(Ae > 1 ? Ae - 1 : 0),
                me = 1;
              me < Ae;
              me++
            )
              ae[me - 1] = arguments[me];
            var fe = (0, M.default)(ae),
              Pe = (0, T.default)(ge, fe);
            return (0, U.default)(Pe);
          });
          V.Ay = Me;
        },
        60363: (D, V) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 });
          var d = function (g, M) {
            var _ = {},
              T = function (U) {
                var I =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !0;
                _[U] = I;
              };
            return (
              g === 0 && T("first-child"),
              g === M - 1 && T("last-child"),
              (g === 0 || g % 2 === 0) && T("even"),
              Math.abs(g % 2) === 1 && T("odd"),
              T("nth-child", g),
              _
            );
          };
          V.default = d;
        },
        89433: (D, V, d) => {
          "use strict";
          Object.defineProperty(V, "__esModule", { value: !0 }),
            (V.mergeClasses = void 0);
          var s = d(62369),
            g = K(s),
            M = d(52305),
            _ = K(M),
            T =
              Object.assign ||
              function (I) {
                for (var G = 1; G < arguments.length; G++) {
                  var se = arguments[G];
                  for (var pe in se)
                    Object.prototype.hasOwnProperty.call(se, pe) &&
                      (I[pe] = se[pe]);
                }
                return I;
              };
          function K(I) {
            return I && I.__esModule ? I : { default: I };
          }
          var U = (V.mergeClasses = function (G) {
            var se =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : [],
              pe = (G.default && (0, _.default)(G.default)) || {};
            return (
              se.map(function (ve) {
                var je = G[ve];
                return (
                  je &&
                    (0, g.default)(je, function (We, Me) {
                      pe[Me] || (pe[Me] = {}), (pe[Me] = T({}, pe[Me], je[Me]));
                    }),
                  ve
                );
              }),
              pe
            );
          });
          V.default = U;
        },
        12362: (D, V, d) => {
          "use strict";
          d.d(V, {
            I$: () => Pe,
            RV: () => Bt,
            hy: () => Xe,
            st: () => ct,
            wh: () => Ve,
            y_: () => xe,
          });
          var s = d(63734),
            g = d(57053),
            M = d(52893);
          const _ = (be, ye) =>
            be.selection.empty
              ? !1
              : (ye && ye(be.tr.deleteSelection().scrollIntoView()), !0);
          function T(be, ye) {
            let { $cursor: Te } = be.selection;
            return !Te ||
              (ye ? !ye.endOfTextblock("backward", be) : Te.parentOffset > 0)
              ? null
              : Te;
          }
          const K = (be, ye, Te) => {
              let Re = T(be, Te);
              if (!Re) return !1;
              let we = ve(Re);
              if (!we) {
                let ze = Re.blockRange(),
                  qe = ze && (0, s.jP)(ze);
                return qe == null
                  ? !1
                  : (ye && ye(be.tr.lift(ze, qe).scrollIntoView()), !0);
              }
              let Be = we.nodeBefore;
              if (!Be.type.spec.isolating && B(be, we, ye)) return !0;
              if (
                Re.parent.content.size == 0 &&
                (se(Be, "end") || M.nh.isSelectable(Be))
              ) {
                let ze = (0, s.$L)(be.doc, Re.before(), Re.after(), g.Ji.empty);
                if (ze && ze.slice.size < ze.to - ze.from) {
                  if (ye) {
                    let qe = be.tr.step(ze);
                    qe.setSelection(
                      se(Be, "end")
                        ? M.LN.findFrom(
                            qe.doc.resolve(qe.mapping.map(we.pos, -1)),
                            -1,
                          )
                        : M.nh.create(qe.doc, we.pos - Be.nodeSize),
                    ),
                      ye(qe.scrollIntoView());
                  }
                  return !0;
                }
              }
              return Be.isAtom && we.depth == Re.depth - 1
                ? (ye &&
                    ye(
                      be.tr
                        .delete(we.pos - Be.nodeSize, we.pos)
                        .scrollIntoView(),
                    ),
                  !0)
                : !1;
            },
            U = (be, ye, Te) => {
              let Re = T(be, Te);
              if (!Re) return !1;
              let we = ve(Re);
              return we ? G(be, we, ye) : !1;
            },
            I = (be, ye, Te) => {
              let Re = je(be, Te);
              if (!Re) return !1;
              let we = Q(Re);
              return we ? G(be, we, ye) : !1;
            };
          function G(be, ye, Te) {
            let Re = ye.nodeBefore,
              we = Re,
              Be = ye.pos - 1;
            for (; !we.isTextblock; Be--) {
              if (we.type.spec.isolating) return !1;
              let mt = we.lastChild;
              if (!mt) return !1;
              we = mt;
            }
            let ze = ye.nodeAfter,
              qe = ze,
              ft = ye.pos + 1;
            for (; !qe.isTextblock; ft++) {
              if (qe.type.spec.isolating) return !1;
              let mt = qe.firstChild;
              if (!mt) return !1;
              qe = mt;
            }
            let gt = replaceStep(be.doc, Be, ft, Slice.empty);
            if (
              !gt ||
              gt.from != Be ||
              (gt instanceof ReplaceStep && gt.slice.size >= ft - Be)
            )
              return !1;
            if (Te) {
              let mt = be.tr.step(gt);
              mt.setSelection(TextSelection.create(mt.doc, Be)),
                Te(mt.scrollIntoView());
            }
            return !0;
          }
          function se(be, ye, Te = !1) {
            for (
              let Re = be;
              Re;
              Re = ye == "start" ? Re.firstChild : Re.lastChild
            ) {
              if (Re.isTextblock) return !0;
              if (Te && Re.childCount != 1) return !1;
            }
            return !1;
          }
          const pe = (be, ye, Te) => {
            let { $head: Re, empty: we } = be.selection,
              Be = Re;
            if (!we) return !1;
            if (Re.parent.isTextblock) {
              if (Te ? !Te.endOfTextblock("backward", be) : Re.parentOffset > 0)
                return !1;
              Be = ve(Re);
            }
            let ze = Be && Be.nodeBefore;
            return !ze || !M.nh.isSelectable(ze)
              ? !1
              : (ye &&
                  ye(
                    be.tr
                      .setSelection(M.nh.create(be.doc, Be.pos - ze.nodeSize))
                      .scrollIntoView(),
                  ),
                !0);
          };
          function ve(be) {
            if (!be.parent.type.spec.isolating)
              for (let ye = be.depth - 1; ye >= 0; ye--) {
                if (be.index(ye) > 0) return be.doc.resolve(be.before(ye + 1));
                if (be.node(ye).type.spec.isolating) break;
              }
            return null;
          }
          function je(be, ye) {
            let { $cursor: Te } = be.selection;
            return !Te ||
              (ye
                ? !ye.endOfTextblock("forward", be)
                : Te.parentOffset < Te.parent.content.size)
              ? null
              : Te;
          }
          const We = (be, ye, Te) => {
              let Re = je(be, Te);
              if (!Re) return !1;
              let we = Q(Re);
              if (!we) return !1;
              let Be = we.nodeAfter;
              if (B(be, we, ye)) return !0;
              if (
                Re.parent.content.size == 0 &&
                (se(Be, "start") || M.nh.isSelectable(Be))
              ) {
                let ze = (0, s.$L)(be.doc, Re.before(), Re.after(), g.Ji.empty);
                if (ze && ze.slice.size < ze.to - ze.from) {
                  if (ye) {
                    let qe = be.tr.step(ze);
                    qe.setSelection(
                      se(Be, "start")
                        ? M.LN.findFrom(
                            qe.doc.resolve(qe.mapping.map(we.pos)),
                            1,
                          )
                        : M.nh.create(qe.doc, qe.mapping.map(we.pos)),
                    ),
                      ye(qe.scrollIntoView());
                  }
                  return !0;
                }
              }
              return Be.isAtom && we.depth == Re.depth - 1
                ? (ye &&
                    ye(
                      be.tr
                        .delete(we.pos, we.pos + Be.nodeSize)
                        .scrollIntoView(),
                    ),
                  !0)
                : !1;
            },
            Me = (be, ye, Te) => {
              let { $head: Re, empty: we } = be.selection,
                Be = Re;
              if (!we) return !1;
              if (Re.parent.isTextblock) {
                if (
                  Te
                    ? !Te.endOfTextblock("forward", be)
                    : Re.parentOffset < Re.parent.content.size
                )
                  return !1;
                Be = Q(Re);
              }
              let ze = Be && Be.nodeAfter;
              return !ze || !M.nh.isSelectable(ze)
                ? !1
                : (ye &&
                    ye(
                      be.tr
                        .setSelection(M.nh.create(be.doc, Be.pos))
                        .scrollIntoView(),
                    ),
                  !0);
            };
          function Q(be) {
            if (!be.parent.type.spec.isolating)
              for (let ye = be.depth - 1; ye >= 0; ye--) {
                let Te = be.node(ye);
                if (be.index(ye) + 1 < Te.childCount)
                  return be.doc.resolve(be.after(ye + 1));
                if (Te.type.spec.isolating) break;
              }
            return null;
          }
          const ge = (be, ye) => {
              let Te = be.selection,
                Re = Te instanceof NodeSelection,
                we;
              if (Re) {
                if (Te.node.isTextblock || !canJoin(be.doc, Te.from)) return !1;
                we = Te.from;
              } else if (((we = joinPoint(be.doc, Te.from, -1)), we == null))
                return !1;
              if (ye) {
                let Be = be.tr.join(we);
                Re &&
                  Be.setSelection(
                    NodeSelection.create(
                      Be.doc,
                      we - be.doc.resolve(we).nodeBefore.nodeSize,
                    ),
                  ),
                  ye(Be.scrollIntoView());
              }
              return !0;
            },
            Ae = (be, ye) => {
              let Te = be.selection,
                Re;
              if (Te instanceof NodeSelection) {
                if (Te.node.isTextblock || !canJoin(be.doc, Te.to)) return !1;
                Re = Te.to;
              } else if (((Re = joinPoint(be.doc, Te.to, 1)), Re == null))
                return !1;
              return ye && ye(be.tr.join(Re).scrollIntoView()), !0;
            },
            ae = (be, ye) => {
              let { $from: Te, $to: Re } = be.selection,
                we = Te.blockRange(Re),
                Be = we && liftTarget(we);
              return Be == null
                ? !1
                : (ye && ye(be.tr.lift(we, Be).scrollIntoView()), !0);
            },
            me = (be, ye) => {
              let { $head: Te, $anchor: Re } = be.selection;
              return !Te.parent.type.spec.code || !Te.sameParent(Re)
                ? !1
                : (ye &&
                    ye(
                      be.tr
                        .insertText(`
`)
                        .scrollIntoView(),
                    ),
                  !0);
            };
          function fe(be) {
            for (let ye = 0; ye < be.edgeCount; ye++) {
              let { type: Te } = be.edge(ye);
              if (Te.isTextblock && !Te.hasRequiredAttrs()) return Te;
            }
            return null;
          }
          const Pe = (be, ye) => {
              let { $head: Te, $anchor: Re } = be.selection;
              if (!Te.parent.type.spec.code || !Te.sameParent(Re)) return !1;
              let we = Te.node(-1),
                Be = Te.indexAfter(-1),
                ze = fe(we.contentMatchAt(Be));
              if (!ze || !we.canReplaceWith(Be, Be, ze)) return !1;
              if (ye) {
                let qe = Te.after(),
                  ft = be.tr.replaceWith(qe, qe, ze.createAndFill());
                ft.setSelection(M.LN.near(ft.doc.resolve(qe), 1)),
                  ye(ft.scrollIntoView());
              }
              return !0;
            },
            he = (be, ye) => {
              let Te = be.selection,
                { $from: Re, $to: we } = Te;
              if (
                Te instanceof M.i5 ||
                Re.parent.inlineContent ||
                we.parent.inlineContent
              )
                return !1;
              let Be = fe(we.parent.contentMatchAt(we.indexAfter()));
              if (!Be || !Be.isTextblock) return !1;
              if (ye) {
                let ze = (
                    !Re.parentOffset && we.index() < we.parent.childCount
                      ? Re
                      : we
                  ).pos,
                  qe = be.tr.insert(ze, Be.createAndFill());
                qe.setSelection(M.U3.create(qe.doc, ze + 1)),
                  ye(qe.scrollIntoView());
              }
              return !0;
            },
            Le = (be, ye) => {
              let { $cursor: Te } = be.selection;
              if (!Te || Te.parent.content.size) return !1;
              if (Te.depth > 1 && Te.after() != Te.end(-1)) {
                let Be = Te.before();
                if ((0, s.zy)(be.doc, Be))
                  return ye && ye(be.tr.split(Be).scrollIntoView()), !0;
              }
              let Re = Te.blockRange(),
                we = Re && (0, s.jP)(Re);
              return we == null
                ? !1
                : (ye && ye(be.tr.lift(Re, we).scrollIntoView()), !0);
            };
          function Je(be) {
            return (ye, Te) => {
              let { $from: Re, $to: we } = ye.selection;
              if (ye.selection instanceof M.nh && ye.selection.node.isBlock)
                return !Re.parentOffset || !(0, s.zy)(ye.doc, Re.pos)
                  ? !1
                  : (Te && Te(ye.tr.split(Re.pos).scrollIntoView()), !0);
              if (!Re.parent.isBlock) return !1;
              if (Te) {
                let Be = we.parentOffset == we.parent.content.size,
                  ze = ye.tr;
                (ye.selection instanceof M.U3 ||
                  ye.selection instanceof M.i5) &&
                  ze.deleteSelection();
                let qe =
                    Re.depth == 0
                      ? null
                      : fe(Re.node(-1).contentMatchAt(Re.indexAfter(-1))),
                  ft = be && be(we.parent, Be),
                  gt = ft ? [ft] : Be && qe ? [{ type: qe }] : void 0,
                  mt = (0, s.zy)(ze.doc, ze.mapping.map(Re.pos), 1, gt);
                if (
                  (!gt &&
                    !mt &&
                    (0, s.zy)(
                      ze.doc,
                      ze.mapping.map(Re.pos),
                      1,
                      qe ? [{ type: qe }] : void 0,
                    ) &&
                    (qe && (gt = [{ type: qe }]), (mt = !0)),
                  mt &&
                    (ze.split(ze.mapping.map(Re.pos), 1, gt),
                    !Be && !Re.parentOffset && Re.parent.type != qe))
                ) {
                  let ht = ze.mapping.map(Re.before()),
                    dt = ze.doc.resolve(ht);
                  qe &&
                    Re.node(-1).canReplaceWith(
                      dt.index(),
                      dt.index() + 1,
                      qe,
                    ) &&
                    ze.setNodeMarkup(ze.mapping.map(Re.before()), qe);
                }
                Te(ze.scrollIntoView());
              }
              return !0;
            };
          }
          const Ye = Je(),
            nt = (be, ye) =>
              Ye(
                be,
                ye &&
                  ((Te) => {
                    let Re =
                      be.storedMarks ||
                      (be.selection.$to.parentOffset &&
                        be.selection.$from.marks());
                    Re && Te.ensureMarks(Re), ye(Te);
                  }),
              ),
            Xe = (be, ye) => {
              let { $from: Te, to: Re } = be.selection,
                we,
                Be = Te.sharedDepth(Re);
              return Be == 0
                ? !1
                : ((we = Te.before(Be)),
                  ye && ye(be.tr.setSelection(M.nh.create(be.doc, we))),
                  !0);
            },
            tt = (be, ye) => (
              ye && ye(be.tr.setSelection(new M.i5(be.doc))), !0
            );
          function Ne(be, ye, Te) {
            let Re = ye.nodeBefore,
              we = ye.nodeAfter,
              Be = ye.index();
            return !Re || !we || !Re.type.compatibleContent(we.type)
              ? !1
              : !Re.content.size && ye.parent.canReplace(Be - 1, Be)
                ? (Te &&
                    Te(
                      be.tr
                        .delete(ye.pos - Re.nodeSize, ye.pos)
                        .scrollIntoView(),
                    ),
                  !0)
                : !ye.parent.canReplace(Be, Be + 1) ||
                    !(we.isTextblock || (0, s.n9)(be.doc, ye.pos))
                  ? !1
                  : (Te &&
                      Te(
                        be.tr
                          .clearIncompatible(
                            ye.pos,
                            Re.type,
                            Re.contentMatchAt(Re.childCount),
                          )
                          .join(ye.pos)
                          .scrollIntoView(),
                      ),
                    !0);
          }
          function B(be, ye, Te) {
            let Re = ye.nodeBefore,
              we = ye.nodeAfter,
              Be,
              ze;
            if (Re.type.spec.isolating || we.type.spec.isolating) return !1;
            if (Ne(be, ye, Te)) return !0;
            let qe = ye.parent.canReplace(ye.index(), ye.index() + 1);
            if (
              qe &&
              (Be = (ze = Re.contentMatchAt(Re.childCount)).findWrapping(
                we.type,
              )) &&
              ze.matchType(Be[0] || we.type).validEnd
            ) {
              if (Te) {
                let ht = ye.pos + we.nodeSize,
                  dt = g.FK.empty;
                for (let kt = Be.length - 1; kt >= 0; kt--)
                  dt = g.FK.from(Be[kt].create(null, dt));
                dt = g.FK.from(Re.copy(dt));
                let Et = be.tr.step(
                    new s.Wg(
                      ye.pos - 1,
                      ht,
                      ye.pos,
                      ht,
                      new g.Ji(dt, 1, 0),
                      Be.length,
                      !0,
                    ),
                  ),
                  Ot = ht + 2 * Be.length;
                (0, s.n9)(Et.doc, Ot) && Et.join(Ot), Te(Et.scrollIntoView());
              }
              return !0;
            }
            let ft = M.LN.findFrom(ye, 1),
              gt = ft && ft.$from.blockRange(ft.$to),
              mt = gt && (0, s.jP)(gt);
            if (mt != null && mt >= ye.depth)
              return Te && Te(be.tr.lift(gt, mt).scrollIntoView()), !0;
            if (qe && se(we, "start", !0) && se(Re, "end")) {
              let ht = Re,
                dt = [];
              for (; dt.push(ht), !ht.isTextblock; ) ht = ht.lastChild;
              let Et = we,
                Ot = 1;
              for (; !Et.isTextblock; Et = Et.firstChild) Ot++;
              if (ht.canReplace(ht.childCount, ht.childCount, Et.content)) {
                if (Te) {
                  let kt = g.FK.empty;
                  for (let Dt = dt.length - 1; Dt >= 0; Dt--)
                    kt = g.FK.from(dt[Dt].copy(kt));
                  let It = be.tr.step(
                    new s.Wg(
                      ye.pos - dt.length,
                      ye.pos + we.nodeSize,
                      ye.pos + Ot,
                      ye.pos + we.nodeSize - Ot,
                      new g.Ji(kt, dt.length, 0),
                      0,
                      !0,
                    ),
                  );
                  Te(It.scrollIntoView());
                }
                return !0;
              }
            }
            return !1;
          }
          function ne(be) {
            return function (ye, Te) {
              let Re = ye.selection,
                we = be < 0 ? Re.$from : Re.$to,
                Be = we.depth;
              for (; we.node(Be).isInline; ) {
                if (!Be) return !1;
                Be--;
              }
              return we.node(Be).isTextblock
                ? (Te &&
                    Te(
                      ye.tr.setSelection(
                        M.U3.create(ye.doc, be < 0 ? we.start(Be) : we.end(Be)),
                      ),
                    ),
                  !0)
                : !1;
            };
          }
          const $ = ne(-1),
            X = ne(1);
          function ie(be, ye = null) {
            return function (Te, Re) {
              let { $from: we, $to: Be } = Te.selection,
                ze = we.blockRange(Be),
                qe = ze && findWrapping(ze, be, ye);
              return qe
                ? (Re && Re(Te.tr.wrap(ze, qe).scrollIntoView()), !0)
                : !1;
            };
          }
          function xe(be, ye = null) {
            return function (Te, Re) {
              let we = !1;
              for (let Be = 0; Be < Te.selection.ranges.length && !we; Be++) {
                let {
                  $from: { pos: ze },
                  $to: { pos: qe },
                } = Te.selection.ranges[Be];
                Te.doc.nodesBetween(ze, qe, (ft, gt) => {
                  if (we) return !1;
                  if (!(!ft.isTextblock || ft.hasMarkup(be, ye)))
                    if (ft.type == be) we = !0;
                    else {
                      let mt = Te.doc.resolve(gt),
                        ht = mt.index();
                      we = mt.parent.canReplaceWith(ht, ht + 1, be);
                    }
                });
              }
              if (!we) return !1;
              if (Re) {
                let Be = Te.tr;
                for (let ze = 0; ze < Te.selection.ranges.length; ze++) {
                  let {
                    $from: { pos: qe },
                    $to: { pos: ft },
                  } = Te.selection.ranges[ze];
                  Be.setBlockType(qe, ft, be, ye);
                }
                Re(Be.scrollIntoView());
              }
              return !0;
            };
          }
          function Ce(be, ye, Te) {
            for (let Re = 0; Re < ye.length; Re++) {
              let { $from: we, $to: Be } = ye[Re],
                ze =
                  we.depth == 0
                    ? be.inlineContent && be.type.allowsMarkType(Te)
                    : !1;
              if (
                (be.nodesBetween(we.pos, Be.pos, (qe) => {
                  if (ze) return !1;
                  ze = qe.inlineContent && qe.type.allowsMarkType(Te);
                }),
                ze)
              )
                return !0;
            }
            return !1;
          }
          function Ve(be, ye = null) {
            return function (Te, Re) {
              let { empty: we, $cursor: Be, ranges: ze } = Te.selection;
              if ((we && !Be) || !Ce(Te.doc, ze, be)) return !1;
              if (Re)
                if (Be)
                  be.isInSet(Te.storedMarks || Be.marks())
                    ? Re(Te.tr.removeStoredMark(be))
                    : Re(Te.tr.addStoredMark(be.create(ye)));
                else {
                  let qe = !1,
                    ft = Te.tr;
                  for (let gt = 0; !qe && gt < ze.length; gt++) {
                    let { $from: mt, $to: ht } = ze[gt];
                    qe = Te.doc.rangeHasMark(mt.pos, ht.pos, be);
                  }
                  for (let gt = 0; gt < ze.length; gt++) {
                    let { $from: mt, $to: ht } = ze[gt];
                    if (qe) ft.removeMark(mt.pos, ht.pos, be);
                    else {
                      let dt = mt.pos,
                        Et = ht.pos,
                        Ot = mt.nodeAfter,
                        kt = ht.nodeBefore,
                        It =
                          Ot && Ot.isText ? /^\s*/.exec(Ot.text)[0].length : 0,
                        Dt =
                          kt && kt.isText ? /\s*$/.exec(kt.text)[0].length : 0;
                      dt + It < Et && ((dt += It), (Et -= Dt)),
                        ft.addMark(dt, Et, be.create(ye));
                    }
                  }
                  Re(ft.scrollIntoView());
                }
              return !0;
            };
          }
          function Ee(be, ye) {
            return (Te) => {
              if (!Te.isGeneric) return be(Te);
              let Re = [];
              for (let Be = 0; Be < Te.mapping.maps.length; Be++) {
                let ze = Te.mapping.maps[Be];
                for (let qe = 0; qe < Re.length; qe++) Re[qe] = ze.map(Re[qe]);
                ze.forEach((qe, ft, gt, mt) => Re.push(gt, mt));
              }
              let we = [];
              for (let Be = 0; Be < Re.length; Be += 2) {
                let ze = Re[Be],
                  qe = Re[Be + 1],
                  ft = Te.doc.resolve(ze),
                  gt = ft.sharedDepth(qe),
                  mt = ft.node(gt);
                for (
                  let ht = ft.indexAfter(gt), dt = ft.after(gt + 1);
                  dt <= qe;
                  ++ht
                ) {
                  let Et = mt.maybeChild(ht);
                  if (!Et) break;
                  if (ht && we.indexOf(dt) == -1) {
                    let Ot = mt.child(ht - 1);
                    Ot.type == Et.type && ye(Ot, Et) && we.push(dt);
                  }
                  dt += Et.nodeSize;
                }
              }
              we.sort((Be, ze) => Be - ze);
              for (let Be = we.length - 1; Be >= 0; Be--)
                canJoin(Te.doc, we[Be]) && Te.join(we[Be]);
              be(Te);
            };
          }
          function rt(be, ye) {
            let Te = Array.isArray(ye)
              ? (Re) => ye.indexOf(Re.type.name) > -1
              : ye;
            return (Re, we, Be) => be(Re, we && Ee(we, Te), Be);
          }
          function ct(...be) {
            return function (ye, Te, Re) {
              for (let we = 0; we < be.length; we++)
                if (be[we](ye, Te, Re)) return !0;
              return !1;
            };
          }
          let vt = ct(_, K, pe),
            wt = ct(_, We, Me);
          const yt = {
              Enter: ct(me, he, Le, Ye),
              "Mod-Enter": Pe,
              Backspace: vt,
              "Mod-Backspace": vt,
              "Shift-Backspace": vt,
              Delete: wt,
              "Mod-Delete": wt,
              "Mod-a": tt,
            },
            Ct = {
              "Ctrl-h": yt.Backspace,
              "Alt-Backspace": yt["Mod-Backspace"],
              "Ctrl-d": yt.Delete,
              "Ctrl-Alt-Backspace": yt["Mod-Delete"],
              "Alt-Delete": yt["Mod-Delete"],
              "Alt-d": yt["Mod-Delete"],
              "Ctrl-a": $,
              "Ctrl-e": X,
            };
          for (let be in yt) Ct[be] = yt[be];
          const Bt = (
            typeof navigator < "u"
              ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
              : typeof os < "u" && os.platform
                ? os.platform() == "darwin"
                : !1
          )
            ? Ct
            : yt;
        },
        15024: (D, V, d) => {
          "use strict";
          d.d(V, { z: () => G });
          var s = d(7502),
            g = d(52893),
            M = d(57053),
            _ = d(29287);
          class T extends g.LN {
            constructor(Q) {
              super(Q, Q);
            }
            map(Q, ge) {
              let Ae = Q.resolve(ge.map(this.head));
              return T.valid(Ae) ? new T(Ae) : g.LN.near(Ae);
            }
            content() {
              return M.Ji.empty;
            }
            eq(Q) {
              return Q instanceof T && Q.head == this.head;
            }
            toJSON() {
              return { type: "gapcursor", pos: this.head };
            }
            static fromJSON(Q, ge) {
              if (typeof ge.pos != "number")
                throw new RangeError("Invalid input for GapCursor.fromJSON");
              return new T(Q.resolve(ge.pos));
            }
            getBookmark() {
              return new K(this.anchor);
            }
            static valid(Q) {
              let ge = Q.parent;
              if (ge.isTextblock || !U(Q) || !I(Q)) return !1;
              let Ae = ge.type.spec.allowGapCursor;
              if (Ae != null) return Ae;
              let ae = ge.contentMatchAt(Q.index()).defaultType;
              return ae && ae.isTextblock;
            }
            static findGapCursorFrom(Q, ge, Ae = !1) {
              e: for (;;) {
                if (!Ae && T.valid(Q)) return Q;
                let ae = Q.pos,
                  me = null;
                for (let fe = Q.depth; ; fe--) {
                  let Pe = Q.node(fe);
                  if (
                    ge > 0 ? Q.indexAfter(fe) < Pe.childCount : Q.index(fe) > 0
                  ) {
                    me = Pe.child(ge > 0 ? Q.indexAfter(fe) : Q.index(fe) - 1);
                    break;
                  } else if (fe == 0) return null;
                  ae += ge;
                  let he = Q.doc.resolve(ae);
                  if (T.valid(he)) return he;
                }
                for (;;) {
                  let fe = ge > 0 ? me.firstChild : me.lastChild;
                  if (!fe) {
                    if (me.isAtom && !me.isText && !g.nh.isSelectable(me)) {
                      (Q = Q.doc.resolve(ae + me.nodeSize * ge)), (Ae = !1);
                      continue e;
                    }
                    break;
                  }
                  (me = fe), (ae += ge);
                  let Pe = Q.doc.resolve(ae);
                  if (T.valid(Pe)) return Pe;
                }
                return null;
              }
            }
          }
          (T.prototype.visible = !1),
            (T.findFrom = T.findGapCursorFrom),
            g.LN.jsonID("gapcursor", T);
          class K {
            constructor(Q) {
              this.pos = Q;
            }
            map(Q) {
              return new K(Q.map(this.pos));
            }
            resolve(Q) {
              let ge = Q.resolve(this.pos);
              return T.valid(ge) ? new T(ge) : g.LN.near(ge);
            }
          }
          function U(Me) {
            for (let Q = Me.depth; Q >= 0; Q--) {
              let ge = Me.index(Q),
                Ae = Me.node(Q);
              if (ge == 0) {
                if (Ae.type.spec.isolating) return !0;
                continue;
              }
              for (let ae = Ae.child(ge - 1); ; ae = ae.lastChild) {
                if (
                  (ae.childCount == 0 && !ae.inlineContent) ||
                  ae.isAtom ||
                  ae.type.spec.isolating
                )
                  return !0;
                if (ae.inlineContent) return !1;
              }
            }
            return !0;
          }
          function I(Me) {
            for (let Q = Me.depth; Q >= 0; Q--) {
              let ge = Me.indexAfter(Q),
                Ae = Me.node(Q);
              if (ge == Ae.childCount) {
                if (Ae.type.spec.isolating) return !0;
                continue;
              }
              for (let ae = Ae.child(ge); ; ae = ae.firstChild) {
                if (
                  (ae.childCount == 0 && !ae.inlineContent) ||
                  ae.isAtom ||
                  ae.type.spec.isolating
                )
                  return !0;
                if (ae.inlineContent) return !1;
              }
            }
            return !0;
          }
          function G() {
            return new g.k_({
              props: {
                decorations: We,
                createSelectionBetween(Me, Q, ge) {
                  return Q.pos == ge.pos && T.valid(ge) ? new T(ge) : null;
                },
                handleClick: ve,
                handleKeyDown: se,
                handleDOMEvents: { beforeinput: je },
              },
            });
          }
          const se = (0, s.K)({
            ArrowLeft: pe("horiz", -1),
            ArrowRight: pe("horiz", 1),
            ArrowUp: pe("vert", -1),
            ArrowDown: pe("vert", 1),
          });
          function pe(Me, Q) {
            const ge =
              Me == "vert" ? (Q > 0 ? "down" : "up") : Q > 0 ? "right" : "left";
            return function (Ae, ae, me) {
              let fe = Ae.selection,
                Pe = Q > 0 ? fe.$to : fe.$from,
                he = fe.empty;
              if (fe instanceof g.U3) {
                if (!me.endOfTextblock(ge) || Pe.depth == 0) return !1;
                (he = !1),
                  (Pe = Ae.doc.resolve(Q > 0 ? Pe.after() : Pe.before()));
              }
              let Le = T.findGapCursorFrom(Pe, Q, he);
              return Le ? (ae && ae(Ae.tr.setSelection(new T(Le))), !0) : !1;
            };
          }
          function ve(Me, Q, ge) {
            if (!Me || !Me.editable) return !1;
            let Ae = Me.state.doc.resolve(Q);
            if (!T.valid(Ae)) return !1;
            let ae = Me.posAtCoords({ left: ge.clientX, top: ge.clientY });
            return ae &&
              ae.inside > -1 &&
              g.nh.isSelectable(Me.state.doc.nodeAt(ae.inside))
              ? !1
              : (Me.dispatch(Me.state.tr.setSelection(new T(Ae))), !0);
          }
          function je(Me, Q) {
            if (
              Q.inputType != "insertCompositionText" ||
              !(Me.state.selection instanceof T)
            )
              return !1;
            let { $from: ge } = Me.state.selection,
              Ae = ge.parent
                .contentMatchAt(ge.index())
                .findWrapping(Me.state.schema.nodes.text);
            if (!Ae) return !1;
            let ae = M.FK.empty;
            for (let fe = Ae.length - 1; fe >= 0; fe--)
              ae = M.FK.from(Ae[fe].createAndFill(null, ae));
            let me = Me.state.tr.replace(ge.pos, ge.pos, new M.Ji(ae, 0, 0));
            return (
              me.setSelection(g.U3.near(me.doc.resolve(ge.pos + 1))),
              Me.dispatch(me),
              !1
            );
          }
          function We(Me) {
            if (!(Me.selection instanceof T)) return null;
            let Q = document.createElement("div");
            return (
              (Q.className = "ProseMirror-gapcursor"),
              _.zF.create(Me.doc, [
                _.NZ.widget(Me.selection.head, Q, { key: "gapcursor" }),
              ])
            );
          }
        },
        7502: (D, V, d) => {
          "use strict";
          d.d(V, { K: () => We, w: () => je });
          for (
            var s = {
                8: "Backspace",
                9: "Tab",
                10: "Enter",
                12: "NumLock",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                44: "PrintScreen",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Meta",
                92: "Meta",
                106: "*",
                107: "+",
                108: ",",
                109: "-",
                110: ".",
                111: "/",
                144: "NumLock",
                145: "ScrollLock",
                160: "Shift",
                161: "Shift",
                162: "Control",
                163: "Control",
                164: "Alt",
                165: "Alt",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
              },
              g = {
                48: ")",
                49: "!",
                50: "@",
                51: "#",
                52: "$",
                53: "%",
                54: "^",
                55: "&",
                56: "*",
                57: "(",
                59: ":",
                61: "+",
                173: "_",
                186: ":",
                187: "+",
                188: "<",
                189: "_",
                190: ">",
                191: "?",
                192: "~",
                219: "{",
                220: "|",
                221: "}",
                222: '"',
              },
              M = typeof navigator < "u" && /Mac/.test(navigator.platform),
              _ =
                typeof navigator < "u" &&
                /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
                  navigator.userAgent,
                ),
              T = 0;
            T < 10;
            T++
          )
            s[48 + T] = s[96 + T] = String(T);
          for (var T = 1; T <= 24; T++) s[T + 111] = "F" + T;
          for (var T = 65; T <= 90; T++)
            (s[T] = String.fromCharCode(T + 32)),
              (g[T] = String.fromCharCode(T));
          for (var K in s) g.hasOwnProperty(K) || (g[K] = s[K]);
          function U(Me) {
            var Q =
                (M && Me.metaKey && Me.shiftKey && !Me.ctrlKey && !Me.altKey) ||
                (_ && Me.shiftKey && Me.key && Me.key.length == 1) ||
                Me.key == "Unidentified",
              ge =
                (!Q && Me.key) ||
                (Me.shiftKey ? g : s)[Me.keyCode] ||
                Me.key ||
                "Unidentified";
            return (
              ge == "Esc" && (ge = "Escape"),
              ge == "Del" && (ge = "Delete"),
              ge == "Left" && (ge = "ArrowLeft"),
              ge == "Up" && (ge = "ArrowUp"),
              ge == "Right" && (ge = "ArrowRight"),
              ge == "Down" && (ge = "ArrowDown"),
              ge
            );
          }
          var I = d(52893);
          const G =
            typeof navigator < "u"
              ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
              : !1;
          function se(Me) {
            let Q = Me.split(/-(?!$)/),
              ge = Q[Q.length - 1];
            ge == "Space" && (ge = " ");
            let Ae, ae, me, fe;
            for (let Pe = 0; Pe < Q.length - 1; Pe++) {
              let he = Q[Pe];
              if (/^(cmd|meta|m)$/i.test(he)) fe = !0;
              else if (/^a(lt)?$/i.test(he)) Ae = !0;
              else if (/^(c|ctrl|control)$/i.test(he)) ae = !0;
              else if (/^s(hift)?$/i.test(he)) me = !0;
              else if (/^mod$/i.test(he)) G ? (fe = !0) : (ae = !0);
              else throw new Error("Unrecognized modifier name: " + he);
            }
            return (
              Ae && (ge = "Alt-" + ge),
              ae && (ge = "Ctrl-" + ge),
              fe && (ge = "Meta-" + ge),
              me && (ge = "Shift-" + ge),
              ge
            );
          }
          function pe(Me) {
            let Q = Object.create(null);
            for (let ge in Me) Q[se(ge)] = Me[ge];
            return Q;
          }
          function ve(Me, Q, ge = !0) {
            return (
              Q.altKey && (Me = "Alt-" + Me),
              Q.ctrlKey && (Me = "Ctrl-" + Me),
              Q.metaKey && (Me = "Meta-" + Me),
              ge && Q.shiftKey && (Me = "Shift-" + Me),
              Me
            );
          }
          function je(Me) {
            return new I.k_({ props: { handleKeyDown: We(Me) } });
          }
          function We(Me) {
            let Q = pe(Me);
            return function (ge, Ae) {
              let ae = U(Ae),
                me,
                fe = Q[ve(ae, Ae)];
              if (fe && fe(ge.state, ge.dispatch, ge)) return !0;
              if (ae.length == 1 && ae != " ") {
                if (Ae.shiftKey) {
                  let Pe = Q[ve(ae, Ae, !1)];
                  if (Pe && Pe(ge.state, ge.dispatch, ge)) return !0;
                }
                if (
                  (Ae.shiftKey ||
                    Ae.altKey ||
                    Ae.metaKey ||
                    ae.charCodeAt(0) > 127) &&
                  (me = s[Ae.keyCode]) &&
                  me != ae
                ) {
                  let Pe = Q[ve(me, Ae)];
                  if (Pe && Pe(ge.state, ge.dispatch, ge)) return !0;
                }
              }
              return !1;
            };
          }
        },
        57053: (D, V, d) => {
          "use strict";
          d.d(V, {
            S4: () => gt,
            ZF: () => oe,
            FK: () => T,
            CU: () => G,
            sX: () => we,
            bP: () => Ne,
            u$: () => Xe,
            vI: () => se,
            Sj: () => Be,
            Ji: () => pe,
          });
          function s(N) {
            this.content = N;
          }
          (s.prototype = {
            constructor: s,
            find: function (N) {
              for (var o = 0; o < this.content.length; o += 2)
                if (this.content[o] === N) return o;
              return -1;
            },
            get: function (N) {
              var o = this.find(N);
              return o == -1 ? void 0 : this.content[o + 1];
            },
            update: function (N, o, c) {
              var m = c && c != N ? this.remove(c) : this,
                S = m.find(N),
                A = m.content.slice();
              return (
                S == -1 ? A.push(c || N, o) : ((A[S + 1] = o), c && (A[S] = c)),
                new s(A)
              );
            },
            remove: function (N) {
              var o = this.find(N);
              if (o == -1) return this;
              var c = this.content.slice();
              return c.splice(o, 2), new s(c);
            },
            addToStart: function (N, o) {
              return new s([N, o].concat(this.remove(N).content));
            },
            addToEnd: function (N, o) {
              var c = this.remove(N).content.slice();
              return c.push(N, o), new s(c);
            },
            addBefore: function (N, o, c) {
              var m = this.remove(o),
                S = m.content.slice(),
                A = m.find(N);
              return S.splice(A == -1 ? S.length : A, 0, o, c), new s(S);
            },
            forEach: function (N) {
              for (var o = 0; o < this.content.length; o += 2)
                N(this.content[o], this.content[o + 1]);
            },
            prepend: function (N) {
              return (
                (N = s.from(N)),
                N.size
                  ? new s(N.content.concat(this.subtract(N).content))
                  : this
              );
            },
            append: function (N) {
              return (
                (N = s.from(N)),
                N.size
                  ? new s(this.subtract(N).content.concat(N.content))
                  : this
              );
            },
            subtract: function (N) {
              var o = this;
              N = s.from(N);
              for (var c = 0; c < N.content.length; c += 2)
                o = o.remove(N.content[c]);
              return o;
            },
            toObject: function () {
              var N = {};
              return (
                this.forEach(function (o, c) {
                  N[o] = c;
                }),
                N
              );
            },
            get size() {
              return this.content.length >> 1;
            },
          }),
            (s.from = function (N) {
              if (N instanceof s) return N;
              var o = [];
              if (N) for (var c in N) o.push(c, N[c]);
              return new s(o);
            });
          const g = s;
          function M(N, o, c) {
            for (let m = 0; ; m++) {
              if (m == N.childCount || m == o.childCount)
                return N.childCount == o.childCount ? null : c;
              let S = N.child(m),
                A = o.child(m);
              if (S == A) {
                c += S.nodeSize;
                continue;
              }
              if (!S.sameMarkup(A)) return c;
              if (S.isText && S.text != A.text) {
                for (let F = 0; S.text[F] == A.text[F]; F++) c++;
                return c;
              }
              if (S.content.size || A.content.size) {
                let F = M(S.content, A.content, c + 1);
                if (F != null) return F;
              }
              c += S.nodeSize;
            }
          }
          function _(N, o, c, m) {
            for (let S = N.childCount, A = o.childCount; ; ) {
              if (S == 0 || A == 0) return S == A ? null : { a: c, b: m };
              let F = N.child(--S),
                ee = o.child(--A),
                Se = F.nodeSize;
              if (F == ee) {
                (c -= Se), (m -= Se);
                continue;
              }
              if (!F.sameMarkup(ee)) return { a: c, b: m };
              if (F.isText && F.text != ee.text) {
                let et = 0,
                  st = Math.min(F.text.length, ee.text.length);
                for (
                  ;
                  et < st &&
                  F.text[F.text.length - et - 1] ==
                    ee.text[ee.text.length - et - 1];
                )
                  et++, c--, m--;
                return { a: c, b: m };
              }
              if (F.content.size || ee.content.size) {
                let et = _(F.content, ee.content, c - 1, m - 1);
                if (et) return et;
              }
              (c -= Se), (m -= Se);
            }
          }
          class T {
            constructor(o, c) {
              if (((this.content = o), (this.size = c || 0), c == null))
                for (let m = 0; m < o.length; m++) this.size += o[m].nodeSize;
            }
            nodesBetween(o, c, m, S = 0, A) {
              for (let F = 0, ee = 0; ee < c; F++) {
                let Se = this.content[F],
                  et = ee + Se.nodeSize;
                if (
                  et > o &&
                  m(Se, S + ee, A || null, F) !== !1 &&
                  Se.content.size
                ) {
                  let st = ee + 1;
                  Se.nodesBetween(
                    Math.max(0, o - st),
                    Math.min(Se.content.size, c - st),
                    m,
                    S + st,
                  );
                }
                ee = et;
              }
            }
            descendants(o) {
              this.nodesBetween(0, this.size, o);
            }
            textBetween(o, c, m, S) {
              let A = "",
                F = !0;
              return (
                this.nodesBetween(
                  o,
                  c,
                  (ee, Se) => {
                    let et = ee.isText
                      ? ee.text.slice(Math.max(o, Se) - Se, c - Se)
                      : ee.isLeaf
                        ? S
                          ? typeof S == "function"
                            ? S(ee)
                            : S
                          : ee.type.spec.leafText
                            ? ee.type.spec.leafText(ee)
                            : ""
                        : "";
                    ee.isBlock &&
                      ((ee.isLeaf && et) || ee.isTextblock) &&
                      m &&
                      (F ? (F = !1) : (A += m)),
                      (A += et);
                  },
                  0,
                ),
                A
              );
            }
            append(o) {
              if (!o.size) return this;
              if (!this.size) return o;
              let c = this.lastChild,
                m = o.firstChild,
                S = this.content.slice(),
                A = 0;
              for (
                c.isText &&
                c.sameMarkup(m) &&
                ((S[S.length - 1] = c.withText(c.text + m.text)), (A = 1));
                A < o.content.length;
                A++
              )
                S.push(o.content[A]);
              return new T(S, this.size + o.size);
            }
            cut(o, c = this.size) {
              if (o == 0 && c == this.size) return this;
              let m = [],
                S = 0;
              if (c > o)
                for (let A = 0, F = 0; F < c; A++) {
                  let ee = this.content[A],
                    Se = F + ee.nodeSize;
                  Se > o &&
                    ((F < o || Se > c) &&
                      (ee.isText
                        ? (ee = ee.cut(
                            Math.max(0, o - F),
                            Math.min(ee.text.length, c - F),
                          ))
                        : (ee = ee.cut(
                            Math.max(0, o - F - 1),
                            Math.min(ee.content.size, c - F - 1),
                          ))),
                    m.push(ee),
                    (S += ee.nodeSize)),
                    (F = Se);
                }
              return new T(m, S);
            }
            cutByIndex(o, c) {
              return o == c
                ? T.empty
                : o == 0 && c == this.content.length
                  ? this
                  : new T(this.content.slice(o, c));
            }
            replaceChild(o, c) {
              let m = this.content[o];
              if (m == c) return this;
              let S = this.content.slice(),
                A = this.size + c.nodeSize - m.nodeSize;
              return (S[o] = c), new T(S, A);
            }
            addToStart(o) {
              return new T([o].concat(this.content), this.size + o.nodeSize);
            }
            addToEnd(o) {
              return new T(this.content.concat(o), this.size + o.nodeSize);
            }
            eq(o) {
              if (this.content.length != o.content.length) return !1;
              for (let c = 0; c < this.content.length; c++)
                if (!this.content[c].eq(o.content[c])) return !1;
              return !0;
            }
            get firstChild() {
              return this.content.length ? this.content[0] : null;
            }
            get lastChild() {
              return this.content.length
                ? this.content[this.content.length - 1]
                : null;
            }
            get childCount() {
              return this.content.length;
            }
            child(o) {
              let c = this.content[o];
              if (!c)
                throw new RangeError(
                  "Index " + o + " out of range for " + this,
                );
              return c;
            }
            maybeChild(o) {
              return this.content[o] || null;
            }
            forEach(o) {
              for (let c = 0, m = 0; c < this.content.length; c++) {
                let S = this.content[c];
                o(S, m, c), (m += S.nodeSize);
              }
            }
            findDiffStart(o, c = 0) {
              return M(this, o, c);
            }
            findDiffEnd(o, c = this.size, m = o.size) {
              return _(this, o, c, m);
            }
            findIndex(o, c = -1) {
              if (o == 0) return U(0, o);
              if (o == this.size) return U(this.content.length, o);
              if (o > this.size || o < 0)
                throw new RangeError(
                  `Position ${o} outside of fragment (${this})`,
                );
              for (let m = 0, S = 0; ; m++) {
                let A = this.child(m),
                  F = S + A.nodeSize;
                if (F >= o) return F == o || c > 0 ? U(m + 1, F) : U(m, S);
                S = F;
              }
            }
            toString() {
              return "<" + this.toStringInner() + ">";
            }
            toStringInner() {
              return this.content.join(", ");
            }
            toJSON() {
              return this.content.length
                ? this.content.map((o) => o.toJSON())
                : null;
            }
            static fromJSON(o, c) {
              if (!c) return T.empty;
              if (!Array.isArray(c))
                throw new RangeError("Invalid input for Fragment.fromJSON");
              return new T(c.map(o.nodeFromJSON));
            }
            static fromArray(o) {
              if (!o.length) return T.empty;
              let c,
                m = 0;
              for (let S = 0; S < o.length; S++) {
                let A = o[S];
                (m += A.nodeSize),
                  S && A.isText && o[S - 1].sameMarkup(A)
                    ? (c || (c = o.slice(0, S)),
                      (c[c.length - 1] = A.withText(
                        c[c.length - 1].text + A.text,
                      )))
                    : c && c.push(A);
              }
              return new T(c || o, m);
            }
            static from(o) {
              if (!o) return T.empty;
              if (o instanceof T) return o;
              if (Array.isArray(o)) return this.fromArray(o);
              if (o.attrs) return new T([o], o.nodeSize);
              throw new RangeError(
                "Can not convert " +
                  o +
                  " to a Fragment" +
                  (o.nodesBetween
                    ? " (looks like multiple versions of prosemirror-model were loaded)"
                    : ""),
              );
            }
          }
          T.empty = new T([], 0);
          const K = { index: 0, offset: 0 };
          function U(N, o) {
            return (K.index = N), (K.offset = o), K;
          }
          function I(N, o) {
            if (N === o) return !0;
            if (!(N && typeof N == "object") || !(o && typeof o == "object"))
              return !1;
            let c = Array.isArray(N);
            if (Array.isArray(o) != c) return !1;
            if (c) {
              if (N.length != o.length) return !1;
              for (let m = 0; m < N.length; m++) if (!I(N[m], o[m])) return !1;
            } else {
              for (let m in N) if (!(m in o) || !I(N[m], o[m])) return !1;
              for (let m in o) if (!(m in N)) return !1;
            }
            return !0;
          }
          class G {
            constructor(o, c) {
              (this.type = o), (this.attrs = c);
            }
            addToSet(o) {
              let c,
                m = !1;
              for (let S = 0; S < o.length; S++) {
                let A = o[S];
                if (this.eq(A)) return o;
                if (this.type.excludes(A.type)) c || (c = o.slice(0, S));
                else {
                  if (A.type.excludes(this.type)) return o;
                  !m &&
                    A.type.rank > this.type.rank &&
                    (c || (c = o.slice(0, S)), c.push(this), (m = !0)),
                    c && c.push(A);
                }
              }
              return c || (c = o.slice()), m || c.push(this), c;
            }
            removeFromSet(o) {
              for (let c = 0; c < o.length; c++)
                if (this.eq(o[c])) return o.slice(0, c).concat(o.slice(c + 1));
              return o;
            }
            isInSet(o) {
              for (let c = 0; c < o.length; c++) if (this.eq(o[c])) return !0;
              return !1;
            }
            eq(o) {
              return (
                this == o || (this.type == o.type && I(this.attrs, o.attrs))
              );
            }
            toJSON() {
              let o = { type: this.type.name };
              for (let c in this.attrs) {
                o.attrs = this.attrs;
                break;
              }
              return o;
            }
            static fromJSON(o, c) {
              if (!c) throw new RangeError("Invalid input for Mark.fromJSON");
              let m = o.marks[c.type];
              if (!m)
                throw new RangeError(
                  `There is no mark type ${c.type} in this schema`,
                );
              return m.create(c.attrs);
            }
            static sameSet(o, c) {
              if (o == c) return !0;
              if (o.length != c.length) return !1;
              for (let m = 0; m < o.length; m++) if (!o[m].eq(c[m])) return !1;
              return !0;
            }
            static setFrom(o) {
              if (!o || (Array.isArray(o) && o.length == 0)) return G.none;
              if (o instanceof G) return [o];
              let c = o.slice();
              return c.sort((m, S) => m.type.rank - S.type.rank), c;
            }
          }
          G.none = [];
          class se extends Error {}
          class pe {
            constructor(o, c, m) {
              (this.content = o), (this.openStart = c), (this.openEnd = m);
            }
            get size() {
              return this.content.size - this.openStart - this.openEnd;
            }
            insertAt(o, c) {
              let m = je(this.content, o + this.openStart, c);
              return m && new pe(m, this.openStart, this.openEnd);
            }
            removeBetween(o, c) {
              return new pe(
                ve(this.content, o + this.openStart, c + this.openStart),
                this.openStart,
                this.openEnd,
              );
            }
            eq(o) {
              return (
                this.content.eq(o.content) &&
                this.openStart == o.openStart &&
                this.openEnd == o.openEnd
              );
            }
            toString() {
              return (
                this.content + "(" + this.openStart + "," + this.openEnd + ")"
              );
            }
            toJSON() {
              if (!this.content.size) return null;
              let o = { content: this.content.toJSON() };
              return (
                this.openStart > 0 && (o.openStart = this.openStart),
                this.openEnd > 0 && (o.openEnd = this.openEnd),
                o
              );
            }
            static fromJSON(o, c) {
              if (!c) return pe.empty;
              let m = c.openStart || 0,
                S = c.openEnd || 0;
              if (typeof m != "number" || typeof S != "number")
                throw new RangeError("Invalid input for Slice.fromJSON");
              return new pe(T.fromJSON(o, c.content), m, S);
            }
            static maxOpen(o, c = !0) {
              let m = 0,
                S = 0;
              for (
                let A = o.firstChild;
                A && !A.isLeaf && (c || !A.type.spec.isolating);
                A = A.firstChild
              )
                m++;
              for (
                let A = o.lastChild;
                A && !A.isLeaf && (c || !A.type.spec.isolating);
                A = A.lastChild
              )
                S++;
              return new pe(o, m, S);
            }
          }
          pe.empty = new pe(T.empty, 0, 0);
          function ve(N, o, c) {
            let { index: m, offset: S } = N.findIndex(o),
              A = N.maybeChild(m),
              { index: F, offset: ee } = N.findIndex(c);
            if (S == o || A.isText) {
              if (ee != c && !N.child(F).isText)
                throw new RangeError("Removing non-flat range");
              return N.cut(0, o).append(N.cut(c));
            }
            if (m != F) throw new RangeError("Removing non-flat range");
            return N.replaceChild(
              m,
              A.copy(ve(A.content, o - S - 1, c - S - 1)),
            );
          }
          function je(N, o, c, m) {
            let { index: S, offset: A } = N.findIndex(o),
              F = N.maybeChild(S);
            if (A == o || F.isText)
              return m && !m.canReplace(S, S, c)
                ? null
                : N.cut(0, o).append(c).append(N.cut(o));
            let ee = je(F.content, o - A - 1, c);
            return ee && N.replaceChild(S, F.copy(ee));
          }
          function We(N, o, c) {
            if (c.openStart > N.depth)
              throw new se("Inserted content deeper than insertion position");
            if (N.depth - c.openStart != o.depth - c.openEnd)
              throw new se("Inconsistent open depths");
            return Me(N, o, c, 0);
          }
          function Me(N, o, c, m) {
            let S = N.index(m),
              A = N.node(m);
            if (S == o.index(m) && m < N.depth - c.openStart) {
              let F = Me(N, o, c, m + 1);
              return A.copy(A.content.replaceChild(S, F));
            } else if (c.content.size)
              if (!c.openStart && !c.openEnd && N.depth == m && o.depth == m) {
                let F = N.parent,
                  ee = F.content;
                return me(
                  F,
                  ee
                    .cut(0, N.parentOffset)
                    .append(c.content)
                    .append(ee.cut(o.parentOffset)),
                );
              } else {
                let { start: F, end: ee } = he(c, N);
                return me(A, fe(N, F, ee, o, m));
              }
            else return me(A, Pe(N, o, m));
          }
          function Q(N, o) {
            if (!o.type.compatibleContent(N.type))
              throw new se(
                "Cannot join " + o.type.name + " onto " + N.type.name,
              );
          }
          function ge(N, o, c) {
            let m = N.node(c);
            return Q(m, o.node(c)), m;
          }
          function Ae(N, o) {
            let c = o.length - 1;
            c >= 0 && N.isText && N.sameMarkup(o[c])
              ? (o[c] = N.withText(o[c].text + N.text))
              : o.push(N);
          }
          function ae(N, o, c, m) {
            let S = (o || N).node(c),
              A = 0,
              F = o ? o.index(c) : S.childCount;
            N &&
              ((A = N.index(c)),
              N.depth > c ? A++ : N.textOffset && (Ae(N.nodeAfter, m), A++));
            for (let ee = A; ee < F; ee++) Ae(S.child(ee), m);
            o && o.depth == c && o.textOffset && Ae(o.nodeBefore, m);
          }
          function me(N, o) {
            return N.type.checkContent(o), N.copy(o);
          }
          function fe(N, o, c, m, S) {
            let A = N.depth > S && ge(N, o, S + 1),
              F = m.depth > S && ge(c, m, S + 1),
              ee = [];
            return (
              ae(null, N, S, ee),
              A && F && o.index(S) == c.index(S)
                ? (Q(A, F), Ae(me(A, fe(N, o, c, m, S + 1)), ee))
                : (A && Ae(me(A, Pe(N, o, S + 1)), ee),
                  ae(o, c, S, ee),
                  F && Ae(me(F, Pe(c, m, S + 1)), ee)),
              ae(m, null, S, ee),
              new T(ee)
            );
          }
          function Pe(N, o, c) {
            let m = [];
            if ((ae(null, N, c, m), N.depth > c)) {
              let S = ge(N, o, c + 1);
              Ae(me(S, Pe(N, o, c + 1)), m);
            }
            return ae(o, null, c, m), new T(m);
          }
          function he(N, o) {
            let c = o.depth - N.openStart,
              S = o.node(c).copy(N.content);
            for (let A = c - 1; A >= 0; A--) S = o.node(A).copy(T.from(S));
            return {
              start: S.resolveNoCache(N.openStart + c),
              end: S.resolveNoCache(S.content.size - N.openEnd - c),
            };
          }
          class Le {
            constructor(o, c, m) {
              (this.pos = o),
                (this.path = c),
                (this.parentOffset = m),
                (this.depth = c.length / 3 - 1);
            }
            resolveDepth(o) {
              return o == null ? this.depth : o < 0 ? this.depth + o : o;
            }
            get parent() {
              return this.node(this.depth);
            }
            get doc() {
              return this.node(0);
            }
            node(o) {
              return this.path[this.resolveDepth(o) * 3];
            }
            index(o) {
              return this.path[this.resolveDepth(o) * 3 + 1];
            }
            indexAfter(o) {
              return (
                (o = this.resolveDepth(o)),
                this.index(o) + (o == this.depth && !this.textOffset ? 0 : 1)
              );
            }
            start(o) {
              return (
                (o = this.resolveDepth(o)),
                o == 0 ? 0 : this.path[o * 3 - 1] + 1
              );
            }
            end(o) {
              return (
                (o = this.resolveDepth(o)),
                this.start(o) + this.node(o).content.size
              );
            }
            before(o) {
              if (((o = this.resolveDepth(o)), !o))
                throw new RangeError(
                  "There is no position before the top-level node",
                );
              return o == this.depth + 1 ? this.pos : this.path[o * 3 - 1];
            }
            after(o) {
              if (((o = this.resolveDepth(o)), !o))
                throw new RangeError(
                  "There is no position after the top-level node",
                );
              return o == this.depth + 1
                ? this.pos
                : this.path[o * 3 - 1] + this.path[o * 3].nodeSize;
            }
            get textOffset() {
              return this.pos - this.path[this.path.length - 1];
            }
            get nodeAfter() {
              let o = this.parent,
                c = this.index(this.depth);
              if (c == o.childCount) return null;
              let m = this.pos - this.path[this.path.length - 1],
                S = o.child(c);
              return m ? o.child(c).cut(m) : S;
            }
            get nodeBefore() {
              let o = this.index(this.depth),
                c = this.pos - this.path[this.path.length - 1];
              return c
                ? this.parent.child(o).cut(0, c)
                : o == 0
                  ? null
                  : this.parent.child(o - 1);
            }
            posAtIndex(o, c) {
              c = this.resolveDepth(c);
              let m = this.path[c * 3],
                S = c == 0 ? 0 : this.path[c * 3 - 1] + 1;
              for (let A = 0; A < o; A++) S += m.child(A).nodeSize;
              return S;
            }
            marks() {
              let o = this.parent,
                c = this.index();
              if (o.content.size == 0) return G.none;
              if (this.textOffset) return o.child(c).marks;
              let m = o.maybeChild(c - 1),
                S = o.maybeChild(c);
              if (!m) {
                let ee = m;
                (m = S), (S = ee);
              }
              let A = m.marks;
              for (var F = 0; F < A.length; F++)
                A[F].type.spec.inclusive === !1 &&
                  (!S || !A[F].isInSet(S.marks)) &&
                  (A = A[F--].removeFromSet(A));
              return A;
            }
            marksAcross(o) {
              let c = this.parent.maybeChild(this.index());
              if (!c || !c.isInline) return null;
              let m = c.marks,
                S = o.parent.maybeChild(o.index());
              for (var A = 0; A < m.length; A++)
                m[A].type.spec.inclusive === !1 &&
                  (!S || !m[A].isInSet(S.marks)) &&
                  (m = m[A--].removeFromSet(m));
              return m;
            }
            sharedDepth(o) {
              for (let c = this.depth; c > 0; c--)
                if (this.start(c) <= o && this.end(c) >= o) return c;
              return 0;
            }
            blockRange(o = this, c) {
              if (o.pos < this.pos) return o.blockRange(this);
              for (
                let m =
                  this.depth -
                  (this.parent.inlineContent || this.pos == o.pos ? 1 : 0);
                m >= 0;
                m--
              )
                if (o.pos <= this.end(m) && (!c || c(this.node(m))))
                  return new Xe(this, o, m);
              return null;
            }
            sameParent(o) {
              return this.pos - this.parentOffset == o.pos - o.parentOffset;
            }
            max(o) {
              return o.pos > this.pos ? o : this;
            }
            min(o) {
              return o.pos < this.pos ? o : this;
            }
            toString() {
              let o = "";
              for (let c = 1; c <= this.depth; c++)
                o +=
                  (o ? "/" : "") +
                  this.node(c).type.name +
                  "_" +
                  this.index(c - 1);
              return o + ":" + this.parentOffset;
            }
            static resolve(o, c) {
              if (!(c >= 0 && c <= o.content.size))
                throw new RangeError("Position " + c + " out of range");
              let m = [],
                S = 0,
                A = c;
              for (let F = o; ; ) {
                let { index: ee, offset: Se } = F.content.findIndex(A),
                  et = A - Se;
                if (
                  (m.push(F, ee, S + Se), !et || ((F = F.child(ee)), F.isText))
                )
                  break;
                (A = et - 1), (S += Se + 1);
              }
              return new Le(c, m, A);
            }
            static resolveCached(o, c) {
              for (let S = 0; S < Je.length; S++) {
                let A = Je[S];
                if (A.pos == c && A.doc == o) return A;
              }
              let m = (Je[Ye] = Le.resolve(o, c));
              return (Ye = (Ye + 1) % nt), m;
            }
          }
          let Je = [],
            Ye = 0,
            nt = 12;
          class Xe {
            constructor(o, c, m) {
              (this.$from = o), (this.$to = c), (this.depth = m);
            }
            get start() {
              return this.$from.before(this.depth + 1);
            }
            get end() {
              return this.$to.after(this.depth + 1);
            }
            get parent() {
              return this.$from.node(this.depth);
            }
            get startIndex() {
              return this.$from.index(this.depth);
            }
            get endIndex() {
              return this.$to.indexAfter(this.depth);
            }
          }
          const tt = Object.create(null);
          class Ne {
            constructor(o, c, m, S = G.none) {
              (this.type = o),
                (this.attrs = c),
                (this.marks = S),
                (this.content = m || T.empty);
            }
            get nodeSize() {
              return this.isLeaf ? 1 : 2 + this.content.size;
            }
            get childCount() {
              return this.content.childCount;
            }
            child(o) {
              return this.content.child(o);
            }
            maybeChild(o) {
              return this.content.maybeChild(o);
            }
            forEach(o) {
              this.content.forEach(o);
            }
            nodesBetween(o, c, m, S = 0) {
              this.content.nodesBetween(o, c, m, S, this);
            }
            descendants(o) {
              this.nodesBetween(0, this.content.size, o);
            }
            get textContent() {
              return this.isLeaf && this.type.spec.leafText
                ? this.type.spec.leafText(this)
                : this.textBetween(0, this.content.size, "");
            }
            textBetween(o, c, m, S) {
              return this.content.textBetween(o, c, m, S);
            }
            get firstChild() {
              return this.content.firstChild;
            }
            get lastChild() {
              return this.content.lastChild;
            }
            eq(o) {
              return (
                this == o || (this.sameMarkup(o) && this.content.eq(o.content))
              );
            }
            sameMarkup(o) {
              return this.hasMarkup(o.type, o.attrs, o.marks);
            }
            hasMarkup(o, c, m) {
              return (
                this.type == o &&
                I(this.attrs, c || o.defaultAttrs || tt) &&
                G.sameSet(this.marks, m || G.none)
              );
            }
            copy(o = null) {
              return o == this.content
                ? this
                : new Ne(this.type, this.attrs, o, this.marks);
            }
            mark(o) {
              return o == this.marks
                ? this
                : new Ne(this.type, this.attrs, this.content, o);
            }
            cut(o, c = this.content.size) {
              return o == 0 && c == this.content.size
                ? this
                : this.copy(this.content.cut(o, c));
            }
            slice(o, c = this.content.size, m = !1) {
              if (o == c) return pe.empty;
              let S = this.resolve(o),
                A = this.resolve(c),
                F = m ? 0 : S.sharedDepth(c),
                ee = S.start(F),
                et = S.node(F).content.cut(S.pos - ee, A.pos - ee);
              return new pe(et, S.depth - F, A.depth - F);
            }
            replace(o, c, m) {
              return We(this.resolve(o), this.resolve(c), m);
            }
            nodeAt(o) {
              for (let c = this; ; ) {
                let { index: m, offset: S } = c.content.findIndex(o);
                if (((c = c.maybeChild(m)), !c)) return null;
                if (S == o || c.isText) return c;
                o -= S + 1;
              }
            }
            childAfter(o) {
              let { index: c, offset: m } = this.content.findIndex(o);
              return { node: this.content.maybeChild(c), index: c, offset: m };
            }
            childBefore(o) {
              if (o == 0) return { node: null, index: 0, offset: 0 };
              let { index: c, offset: m } = this.content.findIndex(o);
              if (m < o)
                return { node: this.content.child(c), index: c, offset: m };
              let S = this.content.child(c - 1);
              return { node: S, index: c - 1, offset: m - S.nodeSize };
            }
            resolve(o) {
              return Le.resolveCached(this, o);
            }
            resolveNoCache(o) {
              return Le.resolve(this, o);
            }
            rangeHasMark(o, c, m) {
              let S = !1;
              return (
                c > o &&
                  this.nodesBetween(
                    o,
                    c,
                    (A) => (m.isInSet(A.marks) && (S = !0), !S),
                  ),
                S
              );
            }
            get isBlock() {
              return this.type.isBlock;
            }
            get isTextblock() {
              return this.type.isTextblock;
            }
            get inlineContent() {
              return this.type.inlineContent;
            }
            get isInline() {
              return this.type.isInline;
            }
            get isText() {
              return this.type.isText;
            }
            get isLeaf() {
              return this.type.isLeaf;
            }
            get isAtom() {
              return this.type.isAtom;
            }
            toString() {
              if (this.type.spec.toDebugString)
                return this.type.spec.toDebugString(this);
              let o = this.type.name;
              return (
                this.content.size &&
                  (o += "(" + this.content.toStringInner() + ")"),
                ne(this.marks, o)
              );
            }
            contentMatchAt(o) {
              let c = this.type.contentMatch.matchFragment(this.content, 0, o);
              if (!c)
                throw new Error(
                  "Called contentMatchAt on a node with invalid content",
                );
              return c;
            }
            canReplace(o, c, m = T.empty, S = 0, A = m.childCount) {
              let F = this.contentMatchAt(o).matchFragment(m, S, A),
                ee = F && F.matchFragment(this.content, c);
              if (!ee || !ee.validEnd) return !1;
              for (let Se = S; Se < A; Se++)
                if (!this.type.allowsMarks(m.child(Se).marks)) return !1;
              return !0;
            }
            canReplaceWith(o, c, m, S) {
              if (S && !this.type.allowsMarks(S)) return !1;
              let A = this.contentMatchAt(o).matchType(m),
                F = A && A.matchFragment(this.content, c);
              return F ? F.validEnd : !1;
            }
            canAppend(o) {
              return o.content.size
                ? this.canReplace(this.childCount, this.childCount, o.content)
                : this.type.compatibleContent(o.type);
            }
            check() {
              this.type.checkContent(this.content);
              let o = G.none;
              for (let c = 0; c < this.marks.length; c++)
                o = this.marks[c].addToSet(o);
              if (!G.sameSet(o, this.marks))
                throw new RangeError(
                  `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((c) => c.type.name)}`,
                );
              this.content.forEach((c) => c.check());
            }
            toJSON() {
              let o = { type: this.type.name };
              for (let c in this.attrs) {
                o.attrs = this.attrs;
                break;
              }
              return (
                this.content.size && (o.content = this.content.toJSON()),
                this.marks.length &&
                  (o.marks = this.marks.map((c) => c.toJSON())),
                o
              );
            }
            static fromJSON(o, c) {
              if (!c) throw new RangeError("Invalid input for Node.fromJSON");
              let m = null;
              if (c.marks) {
                if (!Array.isArray(c.marks))
                  throw new RangeError("Invalid mark data for Node.fromJSON");
                m = c.marks.map(o.markFromJSON);
              }
              if (c.type == "text") {
                if (typeof c.text != "string")
                  throw new RangeError("Invalid text node in JSON");
                return o.text(c.text, m);
              }
              let S = T.fromJSON(o, c.content);
              return o.nodeType(c.type).create(c.attrs, S, m);
            }
          }
          Ne.prototype.text = void 0;
          class B extends Ne {
            constructor(o, c, m, S) {
              if ((super(o, c, null, S), !m))
                throw new RangeError("Empty text nodes are not allowed");
              this.text = m;
            }
            toString() {
              return this.type.spec.toDebugString
                ? this.type.spec.toDebugString(this)
                : ne(this.marks, JSON.stringify(this.text));
            }
            get textContent() {
              return this.text;
            }
            textBetween(o, c) {
              return this.text.slice(o, c);
            }
            get nodeSize() {
              return this.text.length;
            }
            mark(o) {
              return o == this.marks
                ? this
                : new B(this.type, this.attrs, this.text, o);
            }
            withText(o) {
              return o == this.text
                ? this
                : new B(this.type, this.attrs, o, this.marks);
            }
            cut(o = 0, c = this.text.length) {
              return o == 0 && c == this.text.length
                ? this
                : this.withText(this.text.slice(o, c));
            }
            eq(o) {
              return this.sameMarkup(o) && this.text == o.text;
            }
            toJSON() {
              let o = super.toJSON();
              return (o.text = this.text), o;
            }
          }
          function ne(N, o) {
            for (let c = N.length - 1; c >= 0; c--)
              o = N[c].type.name + "(" + o + ")";
            return o;
          }
          class $ {
            constructor(o) {
              (this.validEnd = o), (this.next = []), (this.wrapCache = []);
            }
            static parse(o, c) {
              let m = new X(o, c);
              if (m.next == null) return $.empty;
              let S = ie(m);
              m.next && m.err("Unexpected trailing text");
              let A = Ct(vt(S));
              return Rt(A, m), A;
            }
            matchType(o) {
              for (let c = 0; c < this.next.length; c++)
                if (this.next[c].type == o) return this.next[c].next;
              return null;
            }
            matchFragment(o, c = 0, m = o.childCount) {
              let S = this;
              for (let A = c; S && A < m; A++) S = S.matchType(o.child(A).type);
              return S;
            }
            get inlineContent() {
              return this.next.length != 0 && this.next[0].type.isInline;
            }
            get defaultType() {
              for (let o = 0; o < this.next.length; o++) {
                let { type: c } = this.next[o];
                if (!(c.isText || c.hasRequiredAttrs())) return c;
              }
              return null;
            }
            compatible(o) {
              for (let c = 0; c < this.next.length; c++)
                for (let m = 0; m < o.next.length; m++)
                  if (this.next[c].type == o.next[m].type) return !0;
              return !1;
            }
            fillBefore(o, c = !1, m = 0) {
              let S = [this];
              function A(F, ee) {
                let Se = F.matchFragment(o, m);
                if (Se && (!c || Se.validEnd))
                  return T.from(ee.map((et) => et.createAndFill()));
                for (let et = 0; et < F.next.length; et++) {
                  let { type: st, next: Mt } = F.next[et];
                  if (
                    !(st.isText || st.hasRequiredAttrs()) &&
                    S.indexOf(Mt) == -1
                  ) {
                    S.push(Mt);
                    let Qt = A(Mt, ee.concat(st));
                    if (Qt) return Qt;
                  }
                }
                return null;
              }
              return A(this, []);
            }
            findWrapping(o) {
              for (let m = 0; m < this.wrapCache.length; m += 2)
                if (this.wrapCache[m] == o) return this.wrapCache[m + 1];
              let c = this.computeWrapping(o);
              return this.wrapCache.push(o, c), c;
            }
            computeWrapping(o) {
              let c = Object.create(null),
                m = [{ match: this, type: null, via: null }];
              for (; m.length; ) {
                let S = m.shift(),
                  A = S.match;
                if (A.matchType(o)) {
                  let F = [];
                  for (let ee = S; ee.type; ee = ee.via) F.push(ee.type);
                  return F.reverse();
                }
                for (let F = 0; F < A.next.length; F++) {
                  let { type: ee, next: Se } = A.next[F];
                  !ee.isLeaf &&
                    !ee.hasRequiredAttrs() &&
                    !(ee.name in c) &&
                    (!S.type || Se.validEnd) &&
                    (m.push({ match: ee.contentMatch, type: ee, via: S }),
                    (c[ee.name] = !0));
                }
              }
              return null;
            }
            get edgeCount() {
              return this.next.length;
            }
            edge(o) {
              if (o >= this.next.length)
                throw new RangeError(
                  `There's no ${o}th edge in this content match`,
                );
              return this.next[o];
            }
            toString() {
              let o = [];
              function c(m) {
                o.push(m);
                for (let S = 0; S < m.next.length; S++)
                  o.indexOf(m.next[S].next) == -1 && c(m.next[S].next);
              }
              return (
                c(this),
                o
                  .map((m, S) => {
                    let A = S + (m.validEnd ? "*" : " ") + " ";
                    for (let F = 0; F < m.next.length; F++)
                      A +=
                        (F ? ", " : "") +
                        m.next[F].type.name +
                        "->" +
                        o.indexOf(m.next[F].next);
                    return A;
                  })
                  .join(`
`)
              );
            }
          }
          $.empty = new $(!0);
          class X {
            constructor(o, c) {
              (this.string = o),
                (this.nodeTypes = c),
                (this.inline = null),
                (this.pos = 0),
                (this.tokens = o.split(/\s*(?=\b|\W|$)/)),
                this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(),
                this.tokens[0] == "" && this.tokens.shift();
            }
            get next() {
              return this.tokens[this.pos];
            }
            eat(o) {
              return this.next == o && (this.pos++ || !0);
            }
            err(o) {
              throw new SyntaxError(
                o + " (in content expression '" + this.string + "')",
              );
            }
          }
          function ie(N) {
            let o = [];
            do o.push(xe(N));
            while (N.eat("|"));
            return o.length == 1 ? o[0] : { type: "choice", exprs: o };
          }
          function xe(N) {
            let o = [];
            do o.push(Ce(N));
            while (N.next && N.next != ")" && N.next != "|");
            return o.length == 1 ? o[0] : { type: "seq", exprs: o };
          }
          function Ce(N) {
            let o = ct(N);
            for (;;)
              if (N.eat("+")) o = { type: "plus", expr: o };
              else if (N.eat("*")) o = { type: "star", expr: o };
              else if (N.eat("?")) o = { type: "opt", expr: o };
              else if (N.eat("{")) o = Ee(N, o);
              else break;
            return o;
          }
          function Ve(N) {
            /\D/.test(N.next) && N.err("Expected number, got '" + N.next + "'");
            let o = Number(N.next);
            return N.pos++, o;
          }
          function Ee(N, o) {
            let c = Ve(N),
              m = c;
            return (
              N.eat(",") && (N.next != "}" ? (m = Ve(N)) : (m = -1)),
              N.eat("}") || N.err("Unclosed braced range"),
              { type: "range", min: c, max: m, expr: o }
            );
          }
          function rt(N, o) {
            let c = N.nodeTypes,
              m = c[o];
            if (m) return [m];
            let S = [];
            for (let A in c) {
              let F = c[A];
              F.groups.indexOf(o) > -1 && S.push(F);
            }
            return (
              S.length == 0 && N.err("No node type or group '" + o + "' found"),
              S
            );
          }
          function ct(N) {
            if (N.eat("(")) {
              let o = ie(N);
              return N.eat(")") || N.err("Missing closing paren"), o;
            } else if (/\W/.test(N.next))
              N.err("Unexpected token '" + N.next + "'");
            else {
              let o = rt(N, N.next).map(
                (c) => (
                  N.inline == null
                    ? (N.inline = c.isInline)
                    : N.inline != c.isInline &&
                      N.err("Mixing inline and block content"),
                  { type: "name", value: c }
                ),
              );
              return (
                N.pos++, o.length == 1 ? o[0] : { type: "choice", exprs: o }
              );
            }
          }
          function vt(N) {
            let o = [[]];
            return S(A(N, 0), c()), o;
            function c() {
              return o.push([]) - 1;
            }
            function m(F, ee, Se) {
              let et = { term: Se, to: ee };
              return o[F].push(et), et;
            }
            function S(F, ee) {
              F.forEach((Se) => (Se.to = ee));
            }
            function A(F, ee) {
              if (F.type == "choice")
                return F.exprs.reduce((Se, et) => Se.concat(A(et, ee)), []);
              if (F.type == "seq")
                for (let Se = 0; ; Se++) {
                  let et = A(F.exprs[Se], ee);
                  if (Se == F.exprs.length - 1) return et;
                  S(et, (ee = c()));
                }
              else if (F.type == "star") {
                let Se = c();
                return m(ee, Se), S(A(F.expr, Se), Se), [m(Se)];
              } else if (F.type == "plus") {
                let Se = c();
                return S(A(F.expr, ee), Se), S(A(F.expr, Se), Se), [m(Se)];
              } else {
                if (F.type == "opt") return [m(ee)].concat(A(F.expr, ee));
                if (F.type == "range") {
                  let Se = ee;
                  for (let et = 0; et < F.min; et++) {
                    let st = c();
                    S(A(F.expr, Se), st), (Se = st);
                  }
                  if (F.max == -1) S(A(F.expr, Se), Se);
                  else
                    for (let et = F.min; et < F.max; et++) {
                      let st = c();
                      m(Se, st), S(A(F.expr, Se), st), (Se = st);
                    }
                  return [m(Se)];
                } else {
                  if (F.type == "name") return [m(ee, void 0, F.value)];
                  throw new Error("Unknown expr type");
                }
              }
            }
          }
          function wt(N, o) {
            return o - N;
          }
          function yt(N, o) {
            let c = [];
            return m(o), c.sort(wt);
            function m(S) {
              let A = N[S];
              if (A.length == 1 && !A[0].term) return m(A[0].to);
              c.push(S);
              for (let F = 0; F < A.length; F++) {
                let { term: ee, to: Se } = A[F];
                !ee && c.indexOf(Se) == -1 && m(Se);
              }
            }
          }
          function Ct(N) {
            let o = Object.create(null);
            return c(yt(N, 0));
            function c(m) {
              let S = [];
              m.forEach((F) => {
                N[F].forEach(({ term: ee, to: Se }) => {
                  if (!ee) return;
                  let et;
                  for (let st = 0; st < S.length; st++)
                    S[st][0] == ee && (et = S[st][1]);
                  yt(N, Se).forEach((st) => {
                    et || S.push([ee, (et = [])]),
                      et.indexOf(st) == -1 && et.push(st);
                  });
                });
              });
              let A = (o[m.join(",")] = new $(m.indexOf(N.length - 1) > -1));
              for (let F = 0; F < S.length; F++) {
                let ee = S[F][1].sort(wt);
                A.next.push({ type: S[F][0], next: o[ee.join(",")] || c(ee) });
              }
              return A;
            }
          }
          function Rt(N, o) {
            for (let c = 0, m = [N]; c < m.length; c++) {
              let S = m[c],
                A = !S.validEnd,
                F = [];
              for (let ee = 0; ee < S.next.length; ee++) {
                let { type: Se, next: et } = S.next[ee];
                F.push(Se.name),
                  A && !(Se.isText || Se.hasRequiredAttrs()) && (A = !1),
                  m.indexOf(et) == -1 && m.push(et);
              }
              A &&
                o.err(
                  "Only non-generatable nodes (" +
                    F.join(", ") +
                    ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                );
            }
          }
          function Bt(N) {
            let o = Object.create(null);
            for (let c in N) {
              let m = N[c];
              if (!m.hasDefault) return null;
              o[c] = m.default;
            }
            return o;
          }
          function be(N, o) {
            let c = Object.create(null);
            for (let m in N) {
              let S = o && o[m];
              if (S === void 0) {
                let A = N[m];
                if (A.hasDefault) S = A.default;
                else
                  throw new RangeError("No value supplied for attribute " + m);
              }
              c[m] = S;
            }
            return c;
          }
          function ye(N) {
            let o = Object.create(null);
            if (N) for (let c in N) o[c] = new Re(N[c]);
            return o;
          }
          class Te {
            constructor(o, c, m) {
              (this.name = o),
                (this.schema = c),
                (this.spec = m),
                (this.markSet = null),
                (this.groups = m.group ? m.group.split(" ") : []),
                (this.attrs = ye(m.attrs)),
                (this.defaultAttrs = Bt(this.attrs)),
                (this.contentMatch = null),
                (this.inlineContent = null),
                (this.isBlock = !(m.inline || o == "text")),
                (this.isText = o == "text");
            }
            get isInline() {
              return !this.isBlock;
            }
            get isTextblock() {
              return this.isBlock && this.inlineContent;
            }
            get isLeaf() {
              return this.contentMatch == $.empty;
            }
            get isAtom() {
              return this.isLeaf || !!this.spec.atom;
            }
            get whitespace() {
              return (
                this.spec.whitespace || (this.spec.code ? "pre" : "normal")
              );
            }
            hasRequiredAttrs() {
              for (let o in this.attrs) if (this.attrs[o].isRequired) return !0;
              return !1;
            }
            compatibleContent(o) {
              return this == o || this.contentMatch.compatible(o.contentMatch);
            }
            computeAttrs(o) {
              return !o && this.defaultAttrs
                ? this.defaultAttrs
                : be(this.attrs, o);
            }
            create(o = null, c, m) {
              if (this.isText)
                throw new Error("NodeType.create can't construct text nodes");
              return new Ne(
                this,
                this.computeAttrs(o),
                T.from(c),
                G.setFrom(m),
              );
            }
            createChecked(o = null, c, m) {
              return (
                (c = T.from(c)),
                this.checkContent(c),
                new Ne(this, this.computeAttrs(o), c, G.setFrom(m))
              );
            }
            createAndFill(o = null, c, m) {
              if (((o = this.computeAttrs(o)), (c = T.from(c)), c.size)) {
                let F = this.contentMatch.fillBefore(c);
                if (!F) return null;
                c = F.append(c);
              }
              let S = this.contentMatch.matchFragment(c),
                A = S && S.fillBefore(T.empty, !0);
              return A ? new Ne(this, o, c.append(A), G.setFrom(m)) : null;
            }
            validContent(o) {
              let c = this.contentMatch.matchFragment(o);
              if (!c || !c.validEnd) return !1;
              for (let m = 0; m < o.childCount; m++)
                if (!this.allowsMarks(o.child(m).marks)) return !1;
              return !0;
            }
            checkContent(o) {
              if (!this.validContent(o))
                throw new RangeError(
                  `Invalid content for node ${this.name}: ${o.toString().slice(0, 50)}`,
                );
            }
            allowsMarkType(o) {
              return this.markSet == null || this.markSet.indexOf(o) > -1;
            }
            allowsMarks(o) {
              if (this.markSet == null) return !0;
              for (let c = 0; c < o.length; c++)
                if (!this.allowsMarkType(o[c].type)) return !1;
              return !0;
            }
            allowedMarks(o) {
              if (this.markSet == null) return o;
              let c;
              for (let m = 0; m < o.length; m++)
                this.allowsMarkType(o[m].type)
                  ? c && c.push(o[m])
                  : c || (c = o.slice(0, m));
              return c ? (c.length ? c : G.none) : o;
            }
            static compile(o, c) {
              let m = Object.create(null);
              o.forEach((A, F) => (m[A] = new Te(A, c, F)));
              let S = c.spec.topNode || "doc";
              if (!m[S])
                throw new RangeError(
                  "Schema is missing its top node type ('" + S + "')",
                );
              if (!m.text)
                throw new RangeError("Every schema needs a 'text' type");
              for (let A in m.text.attrs)
                throw new RangeError(
                  "The text node type should not have attributes",
                );
              return m;
            }
          }
          class Re {
            constructor(o) {
              (this.hasDefault = Object.prototype.hasOwnProperty.call(
                o,
                "default",
              )),
                (this.default = o.default);
            }
            get isRequired() {
              return !this.hasDefault;
            }
          }
          class we {
            constructor(o, c, m, S) {
              (this.name = o),
                (this.rank = c),
                (this.schema = m),
                (this.spec = S),
                (this.attrs = ye(S.attrs)),
                (this.excluded = null);
              let A = Bt(this.attrs);
              this.instance = A ? new G(this, A) : null;
            }
            create(o = null) {
              return !o && this.instance
                ? this.instance
                : new G(this, be(this.attrs, o));
            }
            static compile(o, c) {
              let m = Object.create(null),
                S = 0;
              return o.forEach((A, F) => (m[A] = new we(A, S++, c, F))), m;
            }
            removeFromSet(o) {
              for (var c = 0; c < o.length; c++)
                o[c].type == this &&
                  ((o = o.slice(0, c).concat(o.slice(c + 1))), c--);
              return o;
            }
            isInSet(o) {
              for (let c = 0; c < o.length; c++)
                if (o[c].type == this) return o[c];
            }
            excludes(o) {
              return this.excluded.indexOf(o) > -1;
            }
          }
          class Be {
            constructor(o) {
              (this.linebreakReplacement = null),
                (this.cached = Object.create(null));
              let c = (this.spec = {});
              for (let S in o) c[S] = o[S];
              (c.nodes = g.from(o.nodes)),
                (c.marks = g.from(o.marks || {})),
                (this.nodes = Te.compile(this.spec.nodes, this)),
                (this.marks = we.compile(this.spec.marks, this));
              let m = Object.create(null);
              for (let S in this.nodes) {
                if (S in this.marks)
                  throw new RangeError(
                    S + " can not be both a node and a mark",
                  );
                let A = this.nodes[S],
                  F = A.spec.content || "",
                  ee = A.spec.marks;
                if (
                  ((A.contentMatch = m[F] || (m[F] = $.parse(F, this.nodes))),
                  (A.inlineContent = A.contentMatch.inlineContent),
                  A.spec.linebreakReplacement)
                ) {
                  if (this.linebreakReplacement)
                    throw new RangeError("Multiple linebreak nodes defined");
                  if (!A.isInline || !A.isLeaf)
                    throw new RangeError(
                      "Linebreak replacement nodes must be inline leaf nodes",
                    );
                  this.linebreakReplacement = A;
                }
                A.markSet =
                  ee == "_"
                    ? null
                    : ee
                      ? ze(this, ee.split(" "))
                      : ee == "" || !A.inlineContent
                        ? []
                        : null;
              }
              for (let S in this.marks) {
                let A = this.marks[S],
                  F = A.spec.excludes;
                A.excluded =
                  F == null ? [A] : F == "" ? [] : ze(this, F.split(" "));
              }
              (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
                (this.markFromJSON = this.markFromJSON.bind(this)),
                (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
                (this.cached.wrappings = Object.create(null));
            }
            node(o, c = null, m, S) {
              if (typeof o == "string") o = this.nodeType(o);
              else if (o instanceof Te) {
                if (o.schema != this)
                  throw new RangeError(
                    "Node type from different schema used (" + o.name + ")",
                  );
              } else throw new RangeError("Invalid node type: " + o);
              return o.createChecked(c, m, S);
            }
            text(o, c) {
              let m = this.nodes.text;
              return new B(m, m.defaultAttrs, o, G.setFrom(c));
            }
            mark(o, c) {
              return typeof o == "string" && (o = this.marks[o]), o.create(c);
            }
            nodeFromJSON(o) {
              return Ne.fromJSON(this, o);
            }
            markFromJSON(o) {
              return G.fromJSON(this, o);
            }
            nodeType(o) {
              let c = this.nodes[o];
              if (!c) throw new RangeError("Unknown node type: " + o);
              return c;
            }
          }
          function ze(N, o) {
            let c = [];
            for (let m = 0; m < o.length; m++) {
              let S = o[m],
                A = N.marks[S],
                F = A;
              if (A) c.push(A);
              else
                for (let ee in N.marks) {
                  let Se = N.marks[ee];
                  (S == "_" ||
                    (Se.spec.group &&
                      Se.spec.group.split(" ").indexOf(S) > -1)) &&
                    c.push((F = Se));
                }
              if (!F)
                throw new SyntaxError("Unknown mark type: '" + o[m] + "'");
            }
            return c;
          }
          function qe(N) {
            return N.tag != null;
          }
          function ft(N) {
            return N.style != null;
          }
          class gt {
            constructor(o, c) {
              (this.schema = o),
                (this.rules = c),
                (this.tags = []),
                (this.styles = []),
                c.forEach((m) => {
                  qe(m) ? this.tags.push(m) : ft(m) && this.styles.push(m);
                }),
                (this.normalizeLists = !this.tags.some((m) => {
                  if (!/^(ul|ol)\b/.test(m.tag) || !m.node) return !1;
                  let S = o.nodes[m.node];
                  return S.contentMatch.matchType(S);
                }));
            }
            parse(o, c = {}) {
              let m = new jt(this, c, !1);
              return m.addAll(o, c.from, c.to), m.finish();
            }
            parseSlice(o, c = {}) {
              let m = new jt(this, c, !0);
              return m.addAll(o, c.from, c.to), pe.maxOpen(m.finish());
            }
            matchTag(o, c, m) {
              for (
                let S = m ? this.tags.indexOf(m) + 1 : 0;
                S < this.tags.length;
                S++
              ) {
                let A = this.tags[S];
                if (
                  ce(o, A.tag) &&
                  (A.namespace === void 0 || o.namespaceURI == A.namespace) &&
                  (!A.context || c.matchesContext(A.context))
                ) {
                  if (A.getAttrs) {
                    let F = A.getAttrs(o);
                    if (F === !1) continue;
                    A.attrs = F || void 0;
                  }
                  return A;
                }
              }
            }
            matchStyle(o, c, m, S) {
              for (
                let A = S ? this.styles.indexOf(S) + 1 : 0;
                A < this.styles.length;
                A++
              ) {
                let F = this.styles[A],
                  ee = F.style;
                if (
                  !(
                    ee.indexOf(o) != 0 ||
                    (F.context && !m.matchesContext(F.context)) ||
                    (ee.length > o.length &&
                      (ee.charCodeAt(o.length) != 61 ||
                        ee.slice(o.length + 1) != c))
                  )
                ) {
                  if (F.getAttrs) {
                    let Se = F.getAttrs(c);
                    if (Se === !1) continue;
                    F.attrs = Se || void 0;
                  }
                  return F;
                }
              }
            }
            static schemaRules(o) {
              let c = [];
              function m(S) {
                let A = S.priority == null ? 50 : S.priority,
                  F = 0;
                for (; F < c.length; F++) {
                  let ee = c[F];
                  if ((ee.priority == null ? 50 : ee.priority) < A) break;
                }
                c.splice(F, 0, S);
              }
              for (let S in o.marks) {
                let A = o.marks[S].spec.parseDOM;
                A &&
                  A.forEach((F) => {
                    m((F = y(F))),
                      F.mark || F.ignore || F.clearMark || (F.mark = S);
                  });
              }
              for (let S in o.nodes) {
                let A = o.nodes[S].spec.parseDOM;
                A &&
                  A.forEach((F) => {
                    m((F = y(F))), F.node || F.ignore || F.mark || (F.node = S);
                  });
              }
              return c;
            }
            static fromSchema(o) {
              return (
                o.cached.domParser ||
                (o.cached.domParser = new gt(o, gt.schemaRules(o)))
              );
            }
          }
          const mt = {
              address: !0,
              article: !0,
              aside: !0,
              blockquote: !0,
              canvas: !0,
              dd: !0,
              div: !0,
              dl: !0,
              fieldset: !0,
              figcaption: !0,
              figure: !0,
              footer: !0,
              form: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              header: !0,
              hgroup: !0,
              hr: !0,
              li: !0,
              noscript: !0,
              ol: !0,
              output: !0,
              p: !0,
              pre: !0,
              section: !0,
              table: !0,
              tfoot: !0,
              ul: !0,
            },
            ht = {
              head: !0,
              noscript: !0,
              object: !0,
              script: !0,
              style: !0,
              title: !0,
            },
            dt = { ol: !0, ul: !0 },
            Et = 1,
            Ot = 2,
            kt = 4;
          function It(N, o, c) {
            return o != null
              ? (o ? Et : 0) | (o === "full" ? Ot : 0)
              : N && N.whitespace == "pre"
                ? Et | Ot
                : c & ~kt;
          }
          class Dt {
            constructor(o, c, m, S, A, F, ee) {
              (this.type = o),
                (this.attrs = c),
                (this.marks = m),
                (this.pendingMarks = S),
                (this.solid = A),
                (this.options = ee),
                (this.content = []),
                (this.activeMarks = G.none),
                (this.stashMarks = []),
                (this.match = F || (ee & kt ? null : o.contentMatch));
            }
            findWrapping(o) {
              if (!this.match) {
                if (!this.type) return [];
                let c = this.type.contentMatch.fillBefore(T.from(o));
                if (c) this.match = this.type.contentMatch.matchFragment(c);
                else {
                  let m = this.type.contentMatch,
                    S;
                  return (S = m.findWrapping(o.type))
                    ? ((this.match = m), S)
                    : null;
                }
              }
              return this.match.findWrapping(o.type);
            }
            finish(o) {
              if (!(this.options & Et)) {
                let m = this.content[this.content.length - 1],
                  S;
                if (m && m.isText && (S = /[ \t\r\n\u000c]+$/.exec(m.text))) {
                  let A = m;
                  m.text.length == S[0].length
                    ? this.content.pop()
                    : (this.content[this.content.length - 1] = A.withText(
                        A.text.slice(0, A.text.length - S[0].length),
                      ));
                }
              }
              let c = T.from(this.content);
              return (
                !o &&
                  this.match &&
                  (c = c.append(this.match.fillBefore(T.empty, !0))),
                this.type ? this.type.create(this.attrs, c, this.marks) : c
              );
            }
            popFromStashMark(o) {
              for (let c = this.stashMarks.length - 1; c >= 0; c--)
                if (o.eq(this.stashMarks[c]))
                  return this.stashMarks.splice(c, 1)[0];
            }
            applyPending(o) {
              for (let c = 0, m = this.pendingMarks; c < m.length; c++) {
                let S = m[c];
                (this.type ? this.type.allowsMarkType(S.type) : P(S.type, o)) &&
                  !S.isInSet(this.activeMarks) &&
                  ((this.activeMarks = S.addToSet(this.activeMarks)),
                  (this.pendingMarks = S.removeFromSet(this.pendingMarks)));
              }
            }
            inlineContext(o) {
              return this.type
                ? this.type.inlineContent
                : this.content.length
                  ? this.content[0].isInline
                  : o.parentNode &&
                    !mt.hasOwnProperty(o.parentNode.nodeName.toLowerCase());
            }
          }
          class jt {
            constructor(o, c, m) {
              (this.parser = o),
                (this.options = c),
                (this.isOpen = m),
                (this.open = 0);
              let S = c.topNode,
                A,
                F = It(null, c.preserveWhitespace, 0) | (m ? kt : 0);
              S
                ? (A = new Dt(
                    S.type,
                    S.attrs,
                    G.none,
                    G.none,
                    !0,
                    c.topMatch || S.type.contentMatch,
                    F,
                  ))
                : m
                  ? (A = new Dt(null, null, G.none, G.none, !0, null, F))
                  : (A = new Dt(
                      o.schema.topNodeType,
                      null,
                      G.none,
                      G.none,
                      !0,
                      null,
                      F,
                    )),
                (this.nodes = [A]),
                (this.find = c.findPositions),
                (this.needsBlock = !1);
            }
            get top() {
              return this.nodes[this.open];
            }
            addDOM(o) {
              o.nodeType == 3
                ? this.addTextNode(o)
                : o.nodeType == 1 && this.addElement(o);
            }
            withStyleRules(o, c) {
              let m = o.getAttribute("style");
              if (!m) return c();
              let S = this.readStyles(b(m));
              if (!S) return;
              let [A, F] = S,
                ee = this.top;
              for (let Se = 0; Se < F.length; Se++)
                this.removePendingMark(F[Se], ee);
              for (let Se = 0; Se < A.length; Se++) this.addPendingMark(A[Se]);
              c();
              for (let Se = 0; Se < A.length; Se++)
                this.removePendingMark(A[Se], ee);
              for (let Se = 0; Se < F.length; Se++) this.addPendingMark(F[Se]);
            }
            addTextNode(o) {
              let c = o.nodeValue,
                m = this.top;
              if (
                m.options & Ot ||
                m.inlineContext(o) ||
                /[^ \t\r\n\u000c]/.test(c)
              ) {
                if (m.options & Et)
                  m.options & Ot
                    ? (c = c.replace(
                        /\r\n?/g,
                        `
`,
                      ))
                    : (c = c.replace(/\r?\n|\r/g, " "));
                else if (
                  ((c = c.replace(/[ \t\r\n\u000c]+/g, " ")),
                  /^[ \t\r\n\u000c]/.test(c) &&
                    this.open == this.nodes.length - 1)
                ) {
                  let S = m.content[m.content.length - 1],
                    A = o.previousSibling;
                  (!S ||
                    (A && A.nodeName == "BR") ||
                    (S.isText && /[ \t\r\n\u000c]$/.test(S.text))) &&
                    (c = c.slice(1));
                }
                c && this.insertNode(this.parser.schema.text(c)),
                  this.findInText(o);
              } else this.findInside(o);
            }
            addElement(o, c) {
              let m = o.nodeName.toLowerCase(),
                S;
              dt.hasOwnProperty(m) && this.parser.normalizeLists && an(o);
              let A =
                (this.options.ruleFromNode && this.options.ruleFromNode(o)) ||
                (S = this.parser.matchTag(o, this, c));
              if (A ? A.ignore : ht.hasOwnProperty(m))
                this.findInside(o), this.ignoreFallback(o);
              else if (!A || A.skip || A.closeParent) {
                A && A.closeParent
                  ? (this.open = Math.max(0, this.open - 1))
                  : A && A.skip.nodeType && (o = A.skip);
                let F,
                  ee = this.top,
                  Se = this.needsBlock;
                if (mt.hasOwnProperty(m))
                  ee.content.length &&
                    ee.content[0].isInline &&
                    this.open &&
                    (this.open--, (ee = this.top)),
                    (F = !0),
                    ee.type || (this.needsBlock = !0);
                else if (!o.firstChild) {
                  this.leafFallback(o);
                  return;
                }
                A && A.skip
                  ? this.addAll(o)
                  : this.withStyleRules(o, () => this.addAll(o)),
                  F && this.sync(ee),
                  (this.needsBlock = Se);
              } else
                this.withStyleRules(o, () => {
                  this.addElementByRule(o, A, A.consuming === !1 ? S : void 0);
                });
            }
            leafFallback(o) {
              o.nodeName == "BR" &&
                this.top.type &&
                this.top.type.inlineContent &&
                this.addTextNode(
                  o.ownerDocument.createTextNode(`
`),
                );
            }
            ignoreFallback(o) {
              o.nodeName == "BR" &&
                (!this.top.type || !this.top.type.inlineContent) &&
                this.findPlace(this.parser.schema.text("-"));
            }
            readStyles(o) {
              let c = G.none,
                m = G.none;
              for (let S = 0; S < o.length; S += 2)
                for (let A = void 0; ; ) {
                  let F = this.parser.matchStyle(o[S], o[S + 1], this, A);
                  if (!F) break;
                  if (F.ignore) return null;
                  if (
                    (F.clearMark
                      ? this.top.pendingMarks
                          .concat(this.top.activeMarks)
                          .forEach((ee) => {
                            F.clearMark(ee) && (m = ee.addToSet(m));
                          })
                      : (c = this.parser.schema.marks[F.mark]
                          .create(F.attrs)
                          .addToSet(c)),
                    F.consuming === !1)
                  )
                    A = F;
                  else break;
                }
              return [c, m];
            }
            addElementByRule(o, c, m) {
              let S, A, F;
              c.node
                ? ((A = this.parser.schema.nodes[c.node]),
                  A.isLeaf
                    ? this.insertNode(A.create(c.attrs)) || this.leafFallback(o)
                    : (S = this.enter(
                        A,
                        c.attrs || null,
                        c.preserveWhitespace,
                      )))
                : ((F = this.parser.schema.marks[c.mark].create(c.attrs)),
                  this.addPendingMark(F));
              let ee = this.top;
              if (A && A.isLeaf) this.findInside(o);
              else if (m) this.addElement(o, m);
              else if (c.getContent)
                this.findInside(o),
                  c
                    .getContent(o, this.parser.schema)
                    .forEach((Se) => this.insertNode(Se));
              else {
                let Se = o;
                typeof c.contentElement == "string"
                  ? (Se = o.querySelector(c.contentElement))
                  : typeof c.contentElement == "function"
                    ? (Se = c.contentElement(o))
                    : c.contentElement && (Se = c.contentElement),
                  this.findAround(o, Se, !0),
                  this.addAll(Se);
              }
              S && this.sync(ee) && this.open--,
                F && this.removePendingMark(F, ee);
            }
            addAll(o, c, m) {
              let S = c || 0;
              for (
                let A = c ? o.childNodes[c] : o.firstChild,
                  F = m == null ? null : o.childNodes[m];
                A != F;
                A = A.nextSibling, ++S
              )
                this.findAtPoint(o, S), this.addDOM(A);
              this.findAtPoint(o, S);
            }
            findPlace(o) {
              let c, m;
              for (let S = this.open; S >= 0; S--) {
                let A = this.nodes[S],
                  F = A.findWrapping(o);
                if (
                  (F &&
                    (!c || c.length > F.length) &&
                    ((c = F), (m = A), !F.length)) ||
                  A.solid
                )
                  break;
              }
              if (!c) return !1;
              this.sync(m);
              for (let S = 0; S < c.length; S++)
                this.enterInner(c[S], null, !1);
              return !0;
            }
            insertNode(o) {
              if (o.isInline && this.needsBlock && !this.top.type) {
                let c = this.textblockFromContext();
                c && this.enterInner(c);
              }
              if (this.findPlace(o)) {
                this.closeExtra();
                let c = this.top;
                c.applyPending(o.type),
                  c.match && (c.match = c.match.matchType(o.type));
                let m = c.activeMarks;
                for (let S = 0; S < o.marks.length; S++)
                  (!c.type || c.type.allowsMarkType(o.marks[S].type)) &&
                    (m = o.marks[S].addToSet(m));
                return c.content.push(o.mark(m)), !0;
              }
              return !1;
            }
            enter(o, c, m) {
              let S = this.findPlace(o.create(c));
              return S && this.enterInner(o, c, !0, m), S;
            }
            enterInner(o, c = null, m = !1, S) {
              this.closeExtra();
              let A = this.top;
              A.applyPending(o), (A.match = A.match && A.match.matchType(o));
              let F = It(o, S, A.options);
              A.options & kt && A.content.length == 0 && (F |= kt),
                this.nodes.push(
                  new Dt(o, c, A.activeMarks, A.pendingMarks, m, null, F),
                ),
                this.open++;
            }
            closeExtra(o = !1) {
              let c = this.nodes.length - 1;
              if (c > this.open) {
                for (; c > this.open; c--)
                  this.nodes[c - 1].content.push(this.nodes[c].finish(o));
                this.nodes.length = this.open + 1;
              }
            }
            finish() {
              return (
                (this.open = 0),
                this.closeExtra(this.isOpen),
                this.nodes[0].finish(this.isOpen || this.options.topOpen)
              );
            }
            sync(o) {
              for (let c = this.open; c >= 0; c--)
                if (this.nodes[c] == o) return (this.open = c), !0;
              return !1;
            }
            get currentPos() {
              this.closeExtra();
              let o = 0;
              for (let c = this.open; c >= 0; c--) {
                let m = this.nodes[c].content;
                for (let S = m.length - 1; S >= 0; S--) o += m[S].nodeSize;
                c && o++;
              }
              return o;
            }
            findAtPoint(o, c) {
              if (this.find)
                for (let m = 0; m < this.find.length; m++)
                  this.find[m].node == o &&
                    this.find[m].offset == c &&
                    (this.find[m].pos = this.currentPos);
            }
            findInside(o) {
              if (this.find)
                for (let c = 0; c < this.find.length; c++)
                  this.find[c].pos == null &&
                    o.nodeType == 1 &&
                    o.contains(this.find[c].node) &&
                    (this.find[c].pos = this.currentPos);
            }
            findAround(o, c, m) {
              if (o != c && this.find)
                for (let S = 0; S < this.find.length; S++)
                  this.find[S].pos == null &&
                    o.nodeType == 1 &&
                    o.contains(this.find[S].node) &&
                    c.compareDocumentPosition(this.find[S].node) &
                      (m ? 2 : 4) &&
                    (this.find[S].pos = this.currentPos);
            }
            findInText(o) {
              if (this.find)
                for (let c = 0; c < this.find.length; c++)
                  this.find[c].node == o &&
                    (this.find[c].pos =
                      this.currentPos -
                      (o.nodeValue.length - this.find[c].offset));
            }
            matchesContext(o) {
              if (o.indexOf("|") > -1)
                return o.split(/\s*\|\s*/).some(this.matchesContext, this);
              let c = o.split("/"),
                m = this.options.context,
                S = !this.isOpen && (!m || m.parent.type == this.nodes[0].type),
                A = -(m ? m.depth + 1 : 0) + (S ? 0 : 1),
                F = (ee, Se) => {
                  for (; ee >= 0; ee--) {
                    let et = c[ee];
                    if (et == "") {
                      if (ee == c.length - 1 || ee == 0) continue;
                      for (; Se >= A; Se--) if (F(ee - 1, Se)) return !0;
                      return !1;
                    } else {
                      let st =
                        Se > 0 || (Se == 0 && S)
                          ? this.nodes[Se].type
                          : m && Se >= A
                            ? m.node(Se - A).type
                            : null;
                      if (!st || (st.name != et && st.groups.indexOf(et) == -1))
                        return !1;
                      Se--;
                    }
                  }
                  return !0;
                };
              return F(c.length - 1, this.open);
            }
            textblockFromContext() {
              let o = this.options.context;
              if (o)
                for (let c = o.depth; c >= 0; c--) {
                  let m = o.node(c).contentMatchAt(o.indexAfter(c)).defaultType;
                  if (m && m.isTextblock && m.defaultAttrs) return m;
                }
              for (let c in this.parser.schema.nodes) {
                let m = this.parser.schema.nodes[c];
                if (m.isTextblock && m.defaultAttrs) return m;
              }
            }
            addPendingMark(o) {
              let c = H(o, this.top.pendingMarks);
              c && this.top.stashMarks.push(c),
                (this.top.pendingMarks = o.addToSet(this.top.pendingMarks));
            }
            removePendingMark(o, c) {
              for (let m = this.open; m >= 0; m--) {
                let S = this.nodes[m];
                if (S.pendingMarks.lastIndexOf(o) > -1)
                  S.pendingMarks = o.removeFromSet(S.pendingMarks);
                else {
                  S.activeMarks = o.removeFromSet(S.activeMarks);
                  let F = S.popFromStashMark(o);
                  F &&
                    S.type &&
                    S.type.allowsMarkType(F.type) &&
                    (S.activeMarks = F.addToSet(S.activeMarks));
                }
                if (S == c) break;
              }
            }
          }
          function an(N) {
            for (let o = N.firstChild, c = null; o; o = o.nextSibling) {
              let m = o.nodeType == 1 ? o.nodeName.toLowerCase() : null;
              m && dt.hasOwnProperty(m) && c
                ? (c.appendChild(o), (o = c))
                : m == "li"
                  ? (c = o)
                  : m && (c = null);
            }
          }
          function ce(N, o) {
            return (
              N.matches ||
              N.msMatchesSelector ||
              N.webkitMatchesSelector ||
              N.mozMatchesSelector
            ).call(N, o);
          }
          function b(N) {
            let o = /\s*([\w-]+)\s*:\s*([^;]+)/g,
              c,
              m = [];
            for (; (c = o.exec(N)); ) m.push(c[1], c[2].trim());
            return m;
          }
          function y(N) {
            let o = {};
            for (let c in N) o[c] = N[c];
            return o;
          }
          function P(N, o) {
            let c = o.schema.nodes;
            for (let m in c) {
              let S = c[m];
              if (!S.allowsMarkType(N)) continue;
              let A = [],
                F = (ee) => {
                  A.push(ee);
                  for (let Se = 0; Se < ee.edgeCount; Se++) {
                    let { type: et, next: st } = ee.edge(Se);
                    if (et == o || (A.indexOf(st) < 0 && F(st))) return !0;
                  }
                };
              if (F(S.contentMatch)) return !0;
            }
          }
          function H(N, o) {
            for (let c = 0; c < o.length; c++) if (N.eq(o[c])) return o[c];
          }
          class oe {
            constructor(o, c) {
              (this.nodes = o), (this.marks = c);
            }
            serializeFragment(o, c = {}, m) {
              m || (m = _e(c).createDocumentFragment());
              let S = m,
                A = [];
              return (
                o.forEach((F) => {
                  if (A.length || F.marks.length) {
                    let ee = 0,
                      Se = 0;
                    for (; ee < A.length && Se < F.marks.length; ) {
                      let et = F.marks[Se];
                      if (!this.marks[et.type.name]) {
                        Se++;
                        continue;
                      }
                      if (!et.eq(A[ee][0]) || et.type.spec.spanning === !1)
                        break;
                      ee++, Se++;
                    }
                    for (; ee < A.length; ) S = A.pop()[1];
                    for (; Se < F.marks.length; ) {
                      let et = F.marks[Se++],
                        st = this.serializeMark(et, F.isInline, c);
                      st &&
                        (A.push([et, S]),
                        S.appendChild(st.dom),
                        (S = st.contentDOM || st.dom));
                    }
                  }
                  S.appendChild(this.serializeNodeInner(F, c));
                }),
                m
              );
            }
            serializeNodeInner(o, c) {
              let { dom: m, contentDOM: S } = oe.renderSpec(
                _e(c),
                this.nodes[o.type.name](o),
              );
              if (S) {
                if (o.isLeaf)
                  throw new RangeError(
                    "Content hole not allowed in a leaf node spec",
                  );
                this.serializeFragment(o.content, c, S);
              }
              return m;
            }
            serializeNode(o, c = {}) {
              let m = this.serializeNodeInner(o, c);
              for (let S = o.marks.length - 1; S >= 0; S--) {
                let A = this.serializeMark(o.marks[S], o.isInline, c);
                A && ((A.contentDOM || A.dom).appendChild(m), (m = A.dom));
              }
              return m;
            }
            serializeMark(o, c, m = {}) {
              let S = this.marks[o.type.name];
              return S && oe.renderSpec(_e(m), S(o, c));
            }
            static renderSpec(o, c, m = null) {
              if (typeof c == "string") return { dom: o.createTextNode(c) };
              if (c.nodeType != null) return { dom: c };
              if (c.dom && c.dom.nodeType != null) return c;
              let S = c[0],
                A = S.indexOf(" ");
              A > 0 && ((m = S.slice(0, A)), (S = S.slice(A + 1)));
              let F,
                ee = m ? o.createElementNS(m, S) : o.createElement(S),
                Se = c[1],
                et = 1;
              if (
                Se &&
                typeof Se == "object" &&
                Se.nodeType == null &&
                !Array.isArray(Se)
              ) {
                et = 2;
                for (let st in Se)
                  if (Se[st] != null) {
                    let Mt = st.indexOf(" ");
                    Mt > 0
                      ? ee.setAttributeNS(
                          st.slice(0, Mt),
                          st.slice(Mt + 1),
                          Se[st],
                        )
                      : ee.setAttribute(st, Se[st]);
                  }
              }
              for (let st = et; st < c.length; st++) {
                let Mt = c[st];
                if (Mt === 0) {
                  if (st < c.length - 1 || st > et)
                    throw new RangeError(
                      "Content hole must be the only child of its parent node",
                    );
                  return { dom: ee, contentDOM: ee };
                } else {
                  let { dom: Qt, contentDOM: Lt } = oe.renderSpec(o, Mt, m);
                  if ((ee.appendChild(Qt), Lt)) {
                    if (F) throw new RangeError("Multiple content holes");
                    F = Lt;
                  }
                }
              }
              return { dom: ee, contentDOM: F };
            }
            static fromSchema(o) {
              return (
                o.cached.domSerializer ||
                (o.cached.domSerializer = new oe(
                  this.nodesFromSchema(o),
                  this.marksFromSchema(o),
                ))
              );
            }
            static nodesFromSchema(o) {
              let c = de(o.nodes);
              return c.text || (c.text = (m) => m.text), c;
            }
            static marksFromSchema(o) {
              return de(o.marks);
            }
          }
          function de(N) {
            let o = {};
            for (let c in N) {
              let m = N[c].spec.toDOM;
              m && (o[c] = m);
            }
            return o;
          }
          function _e(N) {
            return N.document || window.document;
          }
        },
        4188: (D, V, d) => {
          "use strict";
          d.d(V, {
            $B: () => Ae,
            Aw: () => G,
            Sd: () => ve,
            T2: () => Me,
            fF: () => I,
            o8: () => U,
            wn: () => We,
          });
          var s = d(63734),
            g = d(57053),
            M = d(52893);
          const _ = ["ol", 0],
            T = ["ul", 0],
            K = ["li", 0],
            U = {
              attrs: { order: { default: 1 } },
              parseDOM: [
                {
                  tag: "ol",
                  getAttrs(ae) {
                    return {
                      order: ae.hasAttribute("start")
                        ? +ae.getAttribute("start")
                        : 1,
                    };
                  },
                },
              ],
              toDOM(ae) {
                return ae.attrs.order == 1
                  ? _
                  : ["ol", { start: ae.attrs.order }, 0];
              },
            },
            I = {
              parseDOM: [{ tag: "ul" }],
              toDOM() {
                return T;
              },
            },
            G = {
              parseDOM: [{ tag: "li" }],
              toDOM() {
                return K;
              },
              defining: !0,
            };
          function se(ae, me) {
            let fe = {};
            for (let Pe in ae) fe[Pe] = ae[Pe];
            for (let Pe in me) fe[Pe] = me[Pe];
            return fe;
          }
          function pe(ae, me, fe) {
            return ae.append({
              ordered_list: se(U, { content: "list_item+", group: fe }),
              bullet_list: se(I, { content: "list_item+", group: fe }),
              list_item: se(G, { content: me }),
            });
          }
          function ve(ae, me = null) {
            return function (fe, Pe) {
              let { $from: he, $to: Le } = fe.selection,
                Je = he.blockRange(Le),
                Ye = !1,
                nt = Je;
              if (!Je) return !1;
              if (
                Je.depth >= 2 &&
                he.node(Je.depth - 1).type.compatibleContent(ae) &&
                Je.startIndex == 0
              ) {
                if (he.index(Je.depth - 1) == 0) return !1;
                let tt = fe.doc.resolve(Je.start - 2);
                (nt = new g.u$(tt, tt, Je.depth)),
                  Je.endIndex < Je.parent.childCount &&
                    (Je = new g.u$(
                      he,
                      fe.doc.resolve(Le.end(Je.depth)),
                      Je.depth,
                    )),
                  (Ye = !0);
              }
              let Xe = (0, s.oM)(nt, ae, me, Je);
              return Xe
                ? (Pe && Pe(je(fe.tr, Je, Xe, Ye, ae).scrollIntoView()), !0)
                : !1;
            };
          }
          function je(ae, me, fe, Pe, he) {
            let Le = g.FK.empty;
            for (let tt = fe.length - 1; tt >= 0; tt--)
              Le = g.FK.from(fe[tt].type.create(fe[tt].attrs, Le));
            ae.step(
              new s.Wg(
                me.start - (Pe ? 2 : 0),
                me.end,
                me.start,
                me.end,
                new g.Ji(Le, 0, 0),
                fe.length,
                !0,
              ),
            );
            let Je = 0;
            for (let tt = 0; tt < fe.length; tt++)
              fe[tt].type == he && (Je = tt + 1);
            let Ye = fe.length - Je,
              nt = me.start + fe.length - (Pe ? 2 : 0),
              Xe = me.parent;
            for (
              let tt = me.startIndex, Ne = me.endIndex, B = !0;
              tt < Ne;
              tt++, B = !1
            )
              !B &&
                (0, s.zy)(ae.doc, nt, Ye) &&
                (ae.split(nt, Ye), (nt += 2 * Ye)),
                (nt += Xe.child(tt).nodeSize);
            return ae;
          }
          function We(ae, me) {
            return function (fe, Pe) {
              let { $from: he, $to: Le, node: Je } = fe.selection;
              if ((Je && Je.isBlock) || he.depth < 2 || !he.sameParent(Le))
                return !1;
              let Ye = he.node(-1);
              if (Ye.type != ae) return !1;
              if (
                he.parent.content.size == 0 &&
                he.node(-1).childCount == he.indexAfter(-1)
              ) {
                if (
                  he.depth == 3 ||
                  he.node(-3).type != ae ||
                  he.index(-2) != he.node(-2).childCount - 1
                )
                  return !1;
                if (Pe) {
                  let Ne = g.FK.empty,
                    B = he.index(-1) ? 1 : he.index(-2) ? 2 : 3;
                  for (let xe = he.depth - B; xe >= he.depth - 3; xe--)
                    Ne = g.FK.from(he.node(xe).copy(Ne));
                  let ne =
                    he.indexAfter(-1) < he.node(-2).childCount
                      ? 1
                      : he.indexAfter(-2) < he.node(-3).childCount
                        ? 2
                        : 3;
                  Ne = Ne.append(g.FK.from(ae.createAndFill()));
                  let $ = he.before(he.depth - (B - 1)),
                    X = fe.tr.replace($, he.after(-ne), new g.Ji(Ne, 4 - B, 0)),
                    ie = -1;
                  X.doc.nodesBetween($, X.doc.content.size, (xe, Ce) => {
                    if (ie > -1) return !1;
                    xe.isTextblock && xe.content.size == 0 && (ie = Ce + 1);
                  }),
                    ie > -1 && X.setSelection(M.LN.near(X.doc.resolve(ie))),
                    Pe(X.scrollIntoView());
                }
                return !0;
              }
              let nt =
                  Le.pos == he.end() ? Ye.contentMatchAt(0).defaultType : null,
                Xe = fe.tr.delete(he.pos, Le.pos),
                tt = nt
                  ? [me ? { type: ae, attrs: me } : null, { type: nt }]
                  : void 0;
              return (0, s.zy)(Xe.doc, he.pos, 2, tt)
                ? (Pe && Pe(Xe.split(he.pos, 2, tt).scrollIntoView()), !0)
                : !1;
            };
          }
          function Me(ae) {
            return function (me, fe) {
              let { $from: Pe, $to: he } = me.selection,
                Le = Pe.blockRange(
                  he,
                  (Je) => Je.childCount > 0 && Je.firstChild.type == ae,
                );
              return Le
                ? fe
                  ? Pe.node(Le.depth - 1).type == ae
                    ? Q(me, fe, ae, Le)
                    : ge(me, fe, Le)
                  : !0
                : !1;
            };
          }
          function Q(ae, me, fe, Pe) {
            let he = ae.tr,
              Le = Pe.end,
              Je = Pe.$to.end(Pe.depth);
            Le < Je &&
              (he.step(
                new s.Wg(
                  Le - 1,
                  Je,
                  Le,
                  Je,
                  new g.Ji(g.FK.from(fe.create(null, Pe.parent.copy())), 1, 0),
                  1,
                  !0,
                ),
              ),
              (Pe = new g.u$(
                he.doc.resolve(Pe.$from.pos),
                he.doc.resolve(Je),
                Pe.depth,
              )));
            const Ye = (0, s.jP)(Pe);
            if (Ye == null) return !1;
            he.lift(Pe, Ye);
            let nt = he.mapping.map(Le, -1) - 1;
            return (
              (0, s.n9)(he.doc, nt) && he.join(nt), me(he.scrollIntoView()), !0
            );
          }
          function ge(ae, me, fe) {
            let Pe = ae.tr,
              he = fe.parent;
            for (
              let ne = fe.end, $ = fe.endIndex - 1, X = fe.startIndex;
              $ > X;
              $--
            )
              (ne -= he.child($).nodeSize), Pe.delete(ne - 1, ne + 1);
            let Le = Pe.doc.resolve(fe.start),
              Je = Le.nodeAfter;
            if (Pe.mapping.map(fe.end) != fe.start + Le.nodeAfter.nodeSize)
              return !1;
            let Ye = fe.startIndex == 0,
              nt = fe.endIndex == he.childCount,
              Xe = Le.node(-1),
              tt = Le.index(-1);
            if (
              !Xe.canReplace(
                tt + (Ye ? 0 : 1),
                tt + 1,
                Je.content.append(nt ? g.FK.empty : g.FK.from(he)),
              )
            )
              return !1;
            let Ne = Le.pos,
              B = Ne + Je.nodeSize;
            return (
              Pe.step(
                new s.Wg(
                  Ne - (Ye ? 1 : 0),
                  B + (nt ? 1 : 0),
                  Ne + 1,
                  B - 1,
                  new g.Ji(
                    (Ye ? g.FK.empty : g.FK.from(he.copy(g.FK.empty))).append(
                      nt ? g.FK.empty : g.FK.from(he.copy(g.FK.empty)),
                    ),
                    Ye ? 0 : 1,
                    nt ? 0 : 1,
                  ),
                  Ye ? 0 : 1,
                ),
              ),
              me(Pe.scrollIntoView()),
              !0
            );
          }
          function Ae(ae) {
            return function (me, fe) {
              let { $from: Pe, $to: he } = me.selection,
                Le = Pe.blockRange(
                  he,
                  (Xe) => Xe.childCount > 0 && Xe.firstChild.type == ae,
                );
              if (!Le) return !1;
              let Je = Le.startIndex;
              if (Je == 0) return !1;
              let Ye = Le.parent,
                nt = Ye.child(Je - 1);
              if (nt.type != ae) return !1;
              if (fe) {
                let Xe = nt.lastChild && nt.lastChild.type == Ye.type,
                  tt = g.FK.from(Xe ? ae.create() : null),
                  Ne = new g.Ji(
                    g.FK.from(
                      ae.create(null, g.FK.from(Ye.type.create(null, tt))),
                    ),
                    Xe ? 3 : 1,
                    0,
                  ),
                  B = Le.start,
                  ne = Le.end;
                fe(
                  me.tr
                    .step(new s.Wg(B - (Xe ? 3 : 1), ne, B, ne, Ne, 1, !0))
                    .scrollIntoView(),
                );
              }
              return !0;
            };
          }
        },
        52893: (D, V, d) => {
          "use strict";
          d.d(V, {
            $t: () => Le,
            LN: () => _,
            U3: () => I,
            hs: () => tt,
            i5: () => ve,
            k_: () => Ye,
            nh: () => se,
            yn: () => T,
          });
          var s = d(57053),
            g = d(63734);
          const M = Object.create(null);
          class _ {
            constructor(B, ne, $) {
              (this.$anchor = B),
                (this.$head = ne),
                (this.ranges = $ || [new T(B.min(ne), B.max(ne))]);
            }
            get anchor() {
              return this.$anchor.pos;
            }
            get head() {
              return this.$head.pos;
            }
            get from() {
              return this.$from.pos;
            }
            get to() {
              return this.$to.pos;
            }
            get $from() {
              return this.ranges[0].$from;
            }
            get $to() {
              return this.ranges[0].$to;
            }
            get empty() {
              let B = this.ranges;
              for (let ne = 0; ne < B.length; ne++)
                if (B[ne].$from.pos != B[ne].$to.pos) return !1;
              return !0;
            }
            content() {
              return this.$from.doc.slice(this.from, this.to, !0);
            }
            replace(B, ne = s.Ji.empty) {
              let $ = ne.content.lastChild,
                X = null;
              for (let Ce = 0; Ce < ne.openEnd; Ce++)
                (X = $), ($ = $.lastChild);
              let ie = B.steps.length,
                xe = this.ranges;
              for (let Ce = 0; Ce < xe.length; Ce++) {
                let { $from: Ve, $to: Ee } = xe[Ce],
                  rt = B.mapping.slice(ie);
                B.replaceRange(
                  rt.map(Ve.pos),
                  rt.map(Ee.pos),
                  Ce ? s.Ji.empty : ne,
                ),
                  Ce == 0 &&
                    Me(B, ie, ($ ? $.isInline : X && X.isTextblock) ? -1 : 1);
              }
            }
            replaceWith(B, ne) {
              let $ = B.steps.length,
                X = this.ranges;
              for (let ie = 0; ie < X.length; ie++) {
                let { $from: xe, $to: Ce } = X[ie],
                  Ve = B.mapping.slice($),
                  Ee = Ve.map(xe.pos),
                  rt = Ve.map(Ce.pos);
                ie
                  ? B.deleteRange(Ee, rt)
                  : (B.replaceRangeWith(Ee, rt, ne),
                    Me(B, $, ne.isInline ? -1 : 1));
              }
            }
            static findFrom(B, ne, $ = !1) {
              let X = B.parent.inlineContent
                ? new I(B)
                : We(B.node(0), B.parent, B.pos, B.index(), ne, $);
              if (X) return X;
              for (let ie = B.depth - 1; ie >= 0; ie--) {
                let xe =
                  ne < 0
                    ? We(
                        B.node(0),
                        B.node(ie),
                        B.before(ie + 1),
                        B.index(ie),
                        ne,
                        $,
                      )
                    : We(
                        B.node(0),
                        B.node(ie),
                        B.after(ie + 1),
                        B.index(ie) + 1,
                        ne,
                        $,
                      );
                if (xe) return xe;
              }
              return null;
            }
            static near(B, ne = 1) {
              return (
                this.findFrom(B, ne) ||
                this.findFrom(B, -ne) ||
                new ve(B.node(0))
              );
            }
            static atStart(B) {
              return We(B, B, 0, 0, 1) || new ve(B);
            }
            static atEnd(B) {
              return We(B, B, B.content.size, B.childCount, -1) || new ve(B);
            }
            static fromJSON(B, ne) {
              if (!ne || !ne.type)
                throw new RangeError("Invalid input for Selection.fromJSON");
              let $ = M[ne.type];
              if (!$)
                throw new RangeError(`No selection type ${ne.type} defined`);
              return $.fromJSON(B, ne);
            }
            static jsonID(B, ne) {
              if (B in M)
                throw new RangeError("Duplicate use of selection JSON ID " + B);
              return (M[B] = ne), (ne.prototype.jsonID = B), ne;
            }
            getBookmark() {
              return I.between(this.$anchor, this.$head).getBookmark();
            }
          }
          _.prototype.visible = !0;
          class T {
            constructor(B, ne) {
              (this.$from = B), (this.$to = ne);
            }
          }
          let K = !1;
          function U(Ne) {
            !K &&
              !Ne.parent.inlineContent &&
              ((K = !0),
              console.warn(
                "TextSelection endpoint not pointing into a node with inline content (" +
                  Ne.parent.type.name +
                  ")",
              ));
          }
          class I extends _ {
            constructor(B, ne = B) {
              U(B), U(ne), super(B, ne);
            }
            get $cursor() {
              return this.$anchor.pos == this.$head.pos ? this.$head : null;
            }
            map(B, ne) {
              let $ = B.resolve(ne.map(this.head));
              if (!$.parent.inlineContent) return _.near($);
              let X = B.resolve(ne.map(this.anchor));
              return new I(X.parent.inlineContent ? X : $, $);
            }
            replace(B, ne = s.Ji.empty) {
              if ((super.replace(B, ne), ne == s.Ji.empty)) {
                let $ = this.$from.marksAcross(this.$to);
                $ && B.ensureMarks($);
              }
            }
            eq(B) {
              return (
                B instanceof I && B.anchor == this.anchor && B.head == this.head
              );
            }
            getBookmark() {
              return new G(this.anchor, this.head);
            }
            toJSON() {
              return { type: "text", anchor: this.anchor, head: this.head };
            }
            static fromJSON(B, ne) {
              if (typeof ne.anchor != "number" || typeof ne.head != "number")
                throw new RangeError(
                  "Invalid input for TextSelection.fromJSON",
                );
              return new I(B.resolve(ne.anchor), B.resolve(ne.head));
            }
            static create(B, ne, $ = ne) {
              let X = B.resolve(ne);
              return new this(X, $ == ne ? X : B.resolve($));
            }
            static between(B, ne, $) {
              let X = B.pos - ne.pos;
              if (
                ((!$ || X) && ($ = X >= 0 ? 1 : -1), !ne.parent.inlineContent)
              ) {
                let ie = _.findFrom(ne, $, !0) || _.findFrom(ne, -$, !0);
                if (ie) ne = ie.$head;
                else return _.near(ne, $);
              }
              return (
                B.parent.inlineContent ||
                  (X == 0
                    ? (B = ne)
                    : ((B = (_.findFrom(B, -$, !0) || _.findFrom(B, $, !0))
                        .$anchor),
                      B.pos < ne.pos != X < 0 && (B = ne))),
                new I(B, ne)
              );
            }
          }
          _.jsonID("text", I);
          class G {
            constructor(B, ne) {
              (this.anchor = B), (this.head = ne);
            }
            map(B) {
              return new G(B.map(this.anchor), B.map(this.head));
            }
            resolve(B) {
              return I.between(B.resolve(this.anchor), B.resolve(this.head));
            }
          }
          class se extends _ {
            constructor(B) {
              let ne = B.nodeAfter,
                $ = B.node(0).resolve(B.pos + ne.nodeSize);
              super(B, $), (this.node = ne);
            }
            map(B, ne) {
              let { deleted: $, pos: X } = ne.mapResult(this.anchor),
                ie = B.resolve(X);
              return $ ? _.near(ie) : new se(ie);
            }
            content() {
              return new s.Ji(s.FK.from(this.node), 0, 0);
            }
            eq(B) {
              return B instanceof se && B.anchor == this.anchor;
            }
            toJSON() {
              return { type: "node", anchor: this.anchor };
            }
            getBookmark() {
              return new pe(this.anchor);
            }
            static fromJSON(B, ne) {
              if (typeof ne.anchor != "number")
                throw new RangeError(
                  "Invalid input for NodeSelection.fromJSON",
                );
              return new se(B.resolve(ne.anchor));
            }
            static create(B, ne) {
              return new se(B.resolve(ne));
            }
            static isSelectable(B) {
              return !B.isText && B.type.spec.selectable !== !1;
            }
          }
          (se.prototype.visible = !1), _.jsonID("node", se);
          class pe {
            constructor(B) {
              this.anchor = B;
            }
            map(B) {
              let { deleted: ne, pos: $ } = B.mapResult(this.anchor);
              return ne ? new G($, $) : new pe($);
            }
            resolve(B) {
              let ne = B.resolve(this.anchor),
                $ = ne.nodeAfter;
              return $ && se.isSelectable($) ? new se(ne) : _.near(ne);
            }
          }
          class ve extends _ {
            constructor(B) {
              super(B.resolve(0), B.resolve(B.content.size));
            }
            replace(B, ne = s.Ji.empty) {
              if (ne == s.Ji.empty) {
                B.delete(0, B.doc.content.size);
                let $ = _.atStart(B.doc);
                $.eq(B.selection) || B.setSelection($);
              } else super.replace(B, ne);
            }
            toJSON() {
              return { type: "all" };
            }
            static fromJSON(B) {
              return new ve(B);
            }
            map(B) {
              return new ve(B);
            }
            eq(B) {
              return B instanceof ve;
            }
            getBookmark() {
              return je;
            }
          }
          _.jsonID("all", ve);
          const je = {
            map() {
              return this;
            },
            resolve(Ne) {
              return new ve(Ne);
            },
          };
          function We(Ne, B, ne, $, X, ie = !1) {
            if (B.inlineContent) return I.create(Ne, ne);
            for (
              let xe = $ - (X > 0 ? 0 : 1);
              X > 0 ? xe < B.childCount : xe >= 0;
              xe += X
            ) {
              let Ce = B.child(xe);
              if (Ce.isAtom) {
                if (!ie && se.isSelectable(Ce))
                  return se.create(Ne, ne - (X < 0 ? Ce.nodeSize : 0));
              } else {
                let Ve = We(Ne, Ce, ne + X, X < 0 ? Ce.childCount : 0, X, ie);
                if (Ve) return Ve;
              }
              ne += Ce.nodeSize * X;
            }
            return null;
          }
          function Me(Ne, B, ne) {
            let $ = Ne.steps.length - 1;
            if ($ < B) return;
            let X = Ne.steps[$];
            if (!(X instanceof g.Ln || X instanceof g.Wg)) return;
            let ie = Ne.mapping.maps[$],
              xe;
            ie.forEach((Ce, Ve, Ee, rt) => {
              xe == null && (xe = rt);
            }),
              Ne.setSelection(_.near(Ne.doc.resolve(xe), ne));
          }
          const Q = 1,
            ge = 2,
            Ae = 4;
          class ae extends g.dL {
            constructor(B) {
              super(B.doc),
                (this.curSelectionFor = 0),
                (this.updated = 0),
                (this.meta = Object.create(null)),
                (this.time = Date.now()),
                (this.curSelection = B.selection),
                (this.storedMarks = B.storedMarks);
            }
            get selection() {
              return (
                this.curSelectionFor < this.steps.length &&
                  ((this.curSelection = this.curSelection.map(
                    this.doc,
                    this.mapping.slice(this.curSelectionFor),
                  )),
                  (this.curSelectionFor = this.steps.length)),
                this.curSelection
              );
            }
            setSelection(B) {
              if (B.$from.doc != this.doc)
                throw new RangeError(
                  "Selection passed to setSelection must point at the current document",
                );
              return (
                (this.curSelection = B),
                (this.curSelectionFor = this.steps.length),
                (this.updated = (this.updated | Q) & ~ge),
                (this.storedMarks = null),
                this
              );
            }
            get selectionSet() {
              return (this.updated & Q) > 0;
            }
            setStoredMarks(B) {
              return (this.storedMarks = B), (this.updated |= ge), this;
            }
            ensureMarks(B) {
              return (
                s.CU.sameSet(
                  this.storedMarks || this.selection.$from.marks(),
                  B,
                ) || this.setStoredMarks(B),
                this
              );
            }
            addStoredMark(B) {
              return this.ensureMarks(
                B.addToSet(this.storedMarks || this.selection.$head.marks()),
              );
            }
            removeStoredMark(B) {
              return this.ensureMarks(
                B.removeFromSet(
                  this.storedMarks || this.selection.$head.marks(),
                ),
              );
            }
            get storedMarksSet() {
              return (this.updated & ge) > 0;
            }
            addStep(B, ne) {
              super.addStep(B, ne),
                (this.updated = this.updated & ~ge),
                (this.storedMarks = null);
            }
            setTime(B) {
              return (this.time = B), this;
            }
            replaceSelection(B) {
              return this.selection.replace(this, B), this;
            }
            replaceSelectionWith(B, ne = !0) {
              let $ = this.selection;
              return (
                ne &&
                  (B = B.mark(
                    this.storedMarks ||
                      ($.empty
                        ? $.$from.marks()
                        : $.$from.marksAcross($.$to) || s.CU.none),
                  )),
                $.replaceWith(this, B),
                this
              );
            }
            deleteSelection() {
              return this.selection.replace(this), this;
            }
            insertText(B, ne, $) {
              let X = this.doc.type.schema;
              if (ne == null)
                return B
                  ? this.replaceSelectionWith(X.text(B), !0)
                  : this.deleteSelection();
              {
                if (($ == null && ($ = ne), ($ = $ ?? ne), !B))
                  return this.deleteRange(ne, $);
                let ie = this.storedMarks;
                if (!ie) {
                  let xe = this.doc.resolve(ne);
                  ie =
                    $ == ne ? xe.marks() : xe.marksAcross(this.doc.resolve($));
                }
                return (
                  this.replaceRangeWith(ne, $, X.text(B, ie)),
                  this.selection.empty ||
                    this.setSelection(_.near(this.selection.$to)),
                  this
                );
              }
            }
            setMeta(B, ne) {
              return (this.meta[typeof B == "string" ? B : B.key] = ne), this;
            }
            getMeta(B) {
              return this.meta[typeof B == "string" ? B : B.key];
            }
            get isGeneric() {
              for (let B in this.meta) return !1;
              return !0;
            }
            scrollIntoView() {
              return (this.updated |= Ae), this;
            }
            get scrolledIntoView() {
              return (this.updated & Ae) > 0;
            }
          }
          function me(Ne, B) {
            return !B || !Ne ? Ne : Ne.bind(B);
          }
          class fe {
            constructor(B, ne, $) {
              (this.name = B),
                (this.init = me(ne.init, $)),
                (this.apply = me(ne.apply, $));
            }
          }
          const Pe = [
            new fe("doc", {
              init(Ne) {
                return Ne.doc || Ne.schema.topNodeType.createAndFill();
              },
              apply(Ne) {
                return Ne.doc;
              },
            }),
            new fe("selection", {
              init(Ne, B) {
                return Ne.selection || _.atStart(B.doc);
              },
              apply(Ne) {
                return Ne.selection;
              },
            }),
            new fe("storedMarks", {
              init(Ne) {
                return Ne.storedMarks || null;
              },
              apply(Ne, B, ne, $) {
                return $.selection.$cursor ? Ne.storedMarks : null;
              },
            }),
            new fe("scrollToSelection", {
              init() {
                return 0;
              },
              apply(Ne, B) {
                return Ne.scrolledIntoView ? B + 1 : B;
              },
            }),
          ];
          class he {
            constructor(B, ne) {
              (this.schema = B),
                (this.plugins = []),
                (this.pluginsByKey = Object.create(null)),
                (this.fields = Pe.slice()),
                ne &&
                  ne.forEach(($) => {
                    if (this.pluginsByKey[$.key])
                      throw new RangeError(
                        "Adding different instances of a keyed plugin (" +
                          $.key +
                          ")",
                      );
                    this.plugins.push($),
                      (this.pluginsByKey[$.key] = $),
                      $.spec.state &&
                        this.fields.push(new fe($.key, $.spec.state, $));
                  });
            }
          }
          class Le {
            constructor(B) {
              this.config = B;
            }
            get schema() {
              return this.config.schema;
            }
            get plugins() {
              return this.config.plugins;
            }
            apply(B) {
              return this.applyTransaction(B).state;
            }
            filterTransaction(B, ne = -1) {
              for (let $ = 0; $ < this.config.plugins.length; $++)
                if ($ != ne) {
                  let X = this.config.plugins[$];
                  if (
                    X.spec.filterTransaction &&
                    !X.spec.filterTransaction.call(X, B, this)
                  )
                    return !1;
                }
              return !0;
            }
            applyTransaction(B) {
              if (!this.filterTransaction(B))
                return { state: this, transactions: [] };
              let ne = [B],
                $ = this.applyInner(B),
                X = null;
              for (;;) {
                let ie = !1;
                for (let xe = 0; xe < this.config.plugins.length; xe++) {
                  let Ce = this.config.plugins[xe];
                  if (Ce.spec.appendTransaction) {
                    let Ve = X ? X[xe].n : 0,
                      Ee = X ? X[xe].state : this,
                      rt =
                        Ve < ne.length &&
                        Ce.spec.appendTransaction.call(
                          Ce,
                          Ve ? ne.slice(Ve) : ne,
                          Ee,
                          $,
                        );
                    if (rt && $.filterTransaction(rt, xe)) {
                      if ((rt.setMeta("appendedTransaction", B), !X)) {
                        X = [];
                        for (let ct = 0; ct < this.config.plugins.length; ct++)
                          X.push(
                            ct < xe
                              ? { state: $, n: ne.length }
                              : { state: this, n: 0 },
                          );
                      }
                      ne.push(rt), ($ = $.applyInner(rt)), (ie = !0);
                    }
                    X && (X[xe] = { state: $, n: ne.length });
                  }
                }
                if (!ie) return { state: $, transactions: ne };
              }
            }
            applyInner(B) {
              if (!B.before.eq(this.doc))
                throw new RangeError("Applying a mismatched transaction");
              let ne = new Le(this.config),
                $ = this.config.fields;
              for (let X = 0; X < $.length; X++) {
                let ie = $[X];
                ne[ie.name] = ie.apply(B, this[ie.name], this, ne);
              }
              return ne;
            }
            get tr() {
              return new ae(this);
            }
            static create(B) {
              let ne = new he(B.doc ? B.doc.type.schema : B.schema, B.plugins),
                $ = new Le(ne);
              for (let X = 0; X < ne.fields.length; X++)
                $[ne.fields[X].name] = ne.fields[X].init(B, $);
              return $;
            }
            reconfigure(B) {
              let ne = new he(this.schema, B.plugins),
                $ = ne.fields,
                X = new Le(ne);
              for (let ie = 0; ie < $.length; ie++) {
                let xe = $[ie].name;
                X[xe] = this.hasOwnProperty(xe) ? this[xe] : $[ie].init(B, X);
              }
              return X;
            }
            toJSON(B) {
              let ne = {
                doc: this.doc.toJSON(),
                selection: this.selection.toJSON(),
              };
              if (
                (this.storedMarks &&
                  (ne.storedMarks = this.storedMarks.map(($) => $.toJSON())),
                B && typeof B == "object")
              )
                for (let $ in B) {
                  if ($ == "doc" || $ == "selection")
                    throw new RangeError(
                      "The JSON fields `doc` and `selection` are reserved",
                    );
                  let X = B[$],
                    ie = X.spec.state;
                  ie && ie.toJSON && (ne[$] = ie.toJSON.call(X, this[X.key]));
                }
              return ne;
            }
            static fromJSON(B, ne, $) {
              if (!ne)
                throw new RangeError("Invalid input for EditorState.fromJSON");
              if (!B.schema)
                throw new RangeError("Required config field 'schema' missing");
              let X = new he(B.schema, B.plugins),
                ie = new Le(X);
              return (
                X.fields.forEach((xe) => {
                  if (xe.name == "doc")
                    ie.doc = s.bP.fromJSON(B.schema, ne.doc);
                  else if (xe.name == "selection")
                    ie.selection = _.fromJSON(ie.doc, ne.selection);
                  else if (xe.name == "storedMarks")
                    ne.storedMarks &&
                      (ie.storedMarks = ne.storedMarks.map(
                        B.schema.markFromJSON,
                      ));
                  else {
                    if ($)
                      for (let Ce in $) {
                        let Ve = $[Ce],
                          Ee = Ve.spec.state;
                        if (
                          Ve.key == xe.name &&
                          Ee &&
                          Ee.fromJSON &&
                          Object.prototype.hasOwnProperty.call(ne, Ce)
                        ) {
                          ie[xe.name] = Ee.fromJSON.call(Ve, B, ne[Ce], ie);
                          return;
                        }
                      }
                    ie[xe.name] = xe.init(B, ie);
                  }
                }),
                ie
              );
            }
          }
          function Je(Ne, B, ne) {
            for (let $ in Ne) {
              let X = Ne[$];
              X instanceof Function
                ? (X = X.bind(B))
                : $ == "handleDOMEvents" && (X = Je(X, B, {})),
                (ne[$] = X);
            }
            return ne;
          }
          class Ye {
            constructor(B) {
              (this.spec = B),
                (this.props = {}),
                B.props && Je(B.props, this, this.props),
                (this.key = B.key ? B.key.key : Xe("plugin"));
            }
            getState(B) {
              return B[this.key];
            }
          }
          const nt = Object.create(null);
          function Xe(Ne) {
            return Ne in nt ? Ne + "$" + ++nt[Ne] : ((nt[Ne] = 0), Ne + "$");
          }
          class tt {
            constructor(B = "key") {
              this.key = Xe(B);
            }
            get(B) {
              return B.config.pluginsByKey[this.key];
            }
            getState(B) {
              return B[this.key];
            }
          }
        },
        38539: (D, V, d) => {
          "use strict";
          d.d(V, {
            AL: () => wr,
            GU: () => Ct,
            JD: () => Te,
            L0: () => gt,
            LF: () => Er,
            Qg: () => Qt,
            RC: () => yt,
            _G: () => Dt,
            aH: () => me,
            aR: () => Be,
            gC: () => Re,
            gR: () => Bt,
            of: () => Me,
            uC: () => kt,
            w7: () => ft,
            xV: () => It,
          });
          var s = d(52893),
            g = d(57053),
            M = d(29287),
            _ = d(7502),
            T = d(63734),
            K,
            U;
          if (typeof WeakMap < "u") {
            let w = new WeakMap();
            (K = (x) => w.get(x)), (U = (x, E) => (w.set(x, E), E));
          } else {
            const w = [];
            let E = 0;
            (K = (O) => {
              for (let k = 0; k < w.length; k += 2)
                if (w[k] == O) return w[k + 1];
            }),
              (U = (O, k) => (E == 10 && (E = 0), (w[E++] = O), (w[E++] = k)));
          }
          var I = class {
            constructor(w, x, E, O) {
              (this.width = w),
                (this.height = x),
                (this.map = E),
                (this.problems = O);
            }
            findCell(w) {
              for (let x = 0; x < this.map.length; x++) {
                const E = this.map[x];
                if (E != w) continue;
                const O = x % this.width,
                  k = (x / this.width) | 0;
                let z = O + 1,
                  J = k + 1;
                for (let te = 1; z < this.width && this.map[x + te] == E; te++)
                  z++;
                for (
                  let te = 1;
                  J < this.height && this.map[x + this.width * te] == E;
                  te++
                )
                  J++;
                return { left: O, top: k, right: z, bottom: J };
              }
              throw new RangeError(`No cell with offset ${w} found`);
            }
            colCount(w) {
              for (let x = 0; x < this.map.length; x++)
                if (this.map[x] == w) return x % this.width;
              throw new RangeError(`No cell with offset ${w} found`);
            }
            nextCell(w, x, E) {
              const { left: O, right: k, top: z, bottom: J } = this.findCell(w);
              return x == "horiz"
                ? (E < 0 ? O == 0 : k == this.width)
                  ? null
                  : this.map[z * this.width + (E < 0 ? O - 1 : k)]
                : (E < 0 ? z == 0 : J == this.height)
                  ? null
                  : this.map[O + this.width * (E < 0 ? z - 1 : J)];
            }
            rectBetween(w, x) {
              const { left: E, right: O, top: k, bottom: z } = this.findCell(w),
                { left: J, right: te, top: q, bottom: le } = this.findCell(x);
              return {
                left: Math.min(E, J),
                top: Math.min(k, q),
                right: Math.max(O, te),
                bottom: Math.max(z, le),
              };
            }
            cellsInRect(w) {
              const x = [],
                E = {};
              for (let O = w.top; O < w.bottom; O++)
                for (let k = w.left; k < w.right; k++) {
                  const z = O * this.width + k,
                    J = this.map[z];
                  E[J] ||
                    ((E[J] = !0),
                    !(
                      (k == w.left && k && this.map[z - 1] == J) ||
                      (O == w.top && O && this.map[z - this.width] == J)
                    ) && x.push(J));
                }
              return x;
            }
            positionAt(w, x, E) {
              for (let O = 0, k = 0; ; O++) {
                const z = k + E.child(O).nodeSize;
                if (O == w) {
                  let J = x + w * this.width;
                  const te = (w + 1) * this.width;
                  for (; J < te && this.map[J] < k; ) J++;
                  return J == te ? z - 1 : this.map[J];
                }
                k = z;
              }
            }
            static get(w) {
              return K(w) || U(w, G(w));
            }
          };
          function G(w) {
            if (w.type.spec.tableRole != "table")
              throw new RangeError("Not a table node: " + w.type.name);
            const x = se(w),
              E = w.childCount,
              O = [];
            let k = 0,
              z = null;
            const J = [];
            for (let le = 0, ke = x * E; le < ke; le++) O[le] = 0;
            for (let le = 0, ke = 0; le < E; le++) {
              const Oe = w.child(le);
              ke++;
              for (let it = 0; ; it++) {
                for (; k < O.length && O[k] != 0; ) k++;
                if (it == Oe.childCount) break;
                const xt = Oe.child(it),
                  { colspan: Nt, rowspan: _t, colwidth: dn } = xt.attrs;
                for (let wn = 0; wn < _t; wn++) {
                  if (wn + le >= E) {
                    (z || (z = [])).push({
                      type: "overlong_rowspan",
                      pos: ke,
                      n: _t - wn,
                    });
                    break;
                  }
                  const Wn = k + wn * x;
                  for (let en = 0; en < Nt; en++) {
                    O[Wn + en] == 0
                      ? (O[Wn + en] = ke)
                      : (z || (z = [])).push({
                          type: "collision",
                          row: le,
                          pos: ke,
                          n: Nt - en,
                        });
                    const Sn = dn && dn[en];
                    if (Sn) {
                      const pn = ((Wn + en) % x) * 2,
                        kn = J[pn];
                      kn == null || (kn != Sn && J[pn + 1] == 1)
                        ? ((J[pn] = Sn), (J[pn + 1] = 1))
                        : kn == Sn && J[pn + 1]++;
                    }
                  }
                }
                (k += Nt), (ke += xt.nodeSize);
              }
              const He = (le + 1) * x;
              let $e = 0;
              for (; k < He; ) O[k++] == 0 && $e++;
              $e && (z || (z = [])).push({ type: "missing", row: le, n: $e }),
                ke++;
            }
            const te = new I(x, E, O, z);
            let q = !1;
            for (let le = 0; !q && le < J.length; le += 2)
              J[le] != null && J[le + 1] < E && (q = !0);
            return q && pe(te, J, w), te;
          }
          function se(w) {
            let x = -1,
              E = !1;
            for (let O = 0; O < w.childCount; O++) {
              const k = w.child(O);
              let z = 0;
              if (E)
                for (let J = 0; J < O; J++) {
                  const te = w.child(J);
                  for (let q = 0; q < te.childCount; q++) {
                    const le = te.child(q);
                    J + le.attrs.rowspan > O && (z += le.attrs.colspan);
                  }
                }
              for (let J = 0; J < k.childCount; J++) {
                const te = k.child(J);
                (z += te.attrs.colspan), te.attrs.rowspan > 1 && (E = !0);
              }
              x == -1 ? (x = z) : x != z && (x = Math.max(x, z));
            }
            return x;
          }
          function pe(w, x, E) {
            w.problems || (w.problems = []);
            const O = {};
            for (let k = 0; k < w.map.length; k++) {
              const z = w.map[k];
              if (O[z]) continue;
              O[z] = !0;
              const J = E.nodeAt(z);
              if (!J) throw new RangeError(`No cell with offset ${z} found`);
              let te = null;
              const q = J.attrs;
              for (let le = 0; le < q.colspan; le++) {
                const ke = (k + le) % w.width,
                  Oe = x[ke * 2];
                Oe != null &&
                  (!q.colwidth || q.colwidth[le] != Oe) &&
                  ((te || (te = ve(q)))[le] = Oe);
              }
              te &&
                w.problems.unshift({
                  type: "colwidth mismatch",
                  pos: z,
                  colwidth: te,
                });
            }
          }
          function ve(w) {
            if (w.colwidth) return w.colwidth.slice();
            const x = [];
            for (let E = 0; E < w.colspan; E++) x.push(0);
            return x;
          }
          function je(w, x) {
            if (typeof w == "string") return {};
            const E = w.getAttribute("data-colwidth"),
              O =
                E && /^\d+(,\d+)*$/.test(E)
                  ? E.split(",").map((J) => Number(J))
                  : null,
              k = Number(w.getAttribute("colspan") || 1),
              z = {
                colspan: k,
                rowspan: Number(w.getAttribute("rowspan") || 1),
                colwidth: O && O.length == k ? O : null,
              };
            for (const J in x) {
              const te = x[J].getFromDOM,
                q = te && te(w);
              q != null && (z[J] = q);
            }
            return z;
          }
          function We(w, x) {
            const E = {};
            w.attrs.colspan != 1 && (E.colspan = w.attrs.colspan),
              w.attrs.rowspan != 1 && (E.rowspan = w.attrs.rowspan),
              w.attrs.colwidth &&
                (E["data-colwidth"] = w.attrs.colwidth.join(","));
            for (const O in x) {
              const k = x[O].setDOMAttr;
              k && k(w.attrs[O], E);
            }
            return E;
          }
          function Me(w) {
            const x = w.cellAttributes || {},
              E = {
                colspan: { default: 1 },
                rowspan: { default: 1 },
                colwidth: { default: null },
              };
            for (const O in x) E[O] = { default: x[O].default };
            return {
              table: {
                content: "table_row+",
                tableRole: "table",
                isolating: !0,
                group: w.tableGroup,
                parseDOM: [{ tag: "table" }],
                toDOM() {
                  return ["table", ["tbody", 0]];
                },
              },
              table_row: {
                content: "(table_cell | table_header)*",
                tableRole: "row",
                parseDOM: [{ tag: "tr" }],
                toDOM() {
                  return ["tr", 0];
                },
              },
              table_cell: {
                content: w.cellContent,
                attrs: E,
                tableRole: "cell",
                isolating: !0,
                parseDOM: [{ tag: "td", getAttrs: (O) => je(O, x) }],
                toDOM(O) {
                  return ["td", We(O, x), 0];
                },
              },
              table_header: {
                content: w.cellContent,
                attrs: E,
                tableRole: "header_cell",
                isolating: !0,
                parseDOM: [{ tag: "th", getAttrs: (O) => je(O, x) }],
                toDOM(O) {
                  return ["th", We(O, x), 0];
                },
              },
            };
          }
          function Q(w) {
            let x = w.cached.tableNodeTypes;
            if (!x) {
              x = w.cached.tableNodeTypes = {};
              for (const E in w.nodes) {
                const O = w.nodes[E],
                  k = O.spec.tableRole;
                k && (x[k] = O);
              }
            }
            return x;
          }
          var ge = new s.hs("selectingCells");
          function Ae(w) {
            for (let x = w.depth - 1; x > 0; x--)
              if (w.node(x).type.spec.tableRole == "row")
                return w.node(0).resolve(w.before(x + 1));
            return null;
          }
          function ae(w) {
            for (let x = w.depth; x > 0; x--) {
              const E = w.node(x).type.spec.tableRole;
              if (E === "cell" || E === "header_cell") return w.node(x);
            }
            return null;
          }
          function me(w) {
            const x = w.selection.$head;
            for (let E = x.depth; E > 0; E--)
              if (x.node(E).type.spec.tableRole == "row") return !0;
            return !1;
          }
          function fe(w) {
            const x = w.selection;
            if ("$anchorCell" in x && x.$anchorCell)
              return x.$anchorCell.pos > x.$headCell.pos
                ? x.$anchorCell
                : x.$headCell;
            if ("node" in x && x.node && x.node.type.spec.tableRole == "cell")
              return x.$anchor;
            const E = Ae(x.$head) || Pe(x.$head);
            if (E) return E;
            throw new RangeError(`No cell found around position ${x.head}`);
          }
          function Pe(w) {
            for (let x = w.nodeAfter, E = w.pos; x; x = x.firstChild, E++) {
              const O = x.type.spec.tableRole;
              if (O == "cell" || O == "header_cell") return w.doc.resolve(E);
            }
            for (let x = w.nodeBefore, E = w.pos; x; x = x.lastChild, E--) {
              const O = x.type.spec.tableRole;
              if (O == "cell" || O == "header_cell")
                return w.doc.resolve(E - x.nodeSize);
            }
          }
          function he(w) {
            return w.parent.type.spec.tableRole == "row" && !!w.nodeAfter;
          }
          function Le(w) {
            return w.node(0).resolve(w.pos + w.nodeAfter.nodeSize);
          }
          function Je(w, x) {
            return (
              w.depth == x.depth && w.pos >= x.start(-1) && w.pos <= x.end(-1)
            );
          }
          function Ye(w) {
            return I.get(w.node(-1)).findCell(w.pos - w.start(-1));
          }
          function nt(w) {
            return I.get(w.node(-1)).colCount(w.pos - w.start(-1));
          }
          function Xe(w, x, E) {
            const O = w.node(-1),
              k = I.get(O),
              z = w.start(-1),
              J = k.nextCell(w.pos - z, x, E);
            return J == null ? null : w.node(0).resolve(z + J);
          }
          function tt(w, x, E = 1) {
            const O = { ...w, colspan: w.colspan - E };
            return (
              O.colwidth &&
                ((O.colwidth = O.colwidth.slice()),
                O.colwidth.splice(x, E),
                O.colwidth.some((k) => k > 0) || (O.colwidth = null)),
              O
            );
          }
          function Ne(w, x, E = 1) {
            const O = { ...w, colspan: w.colspan + E };
            if (O.colwidth) {
              O.colwidth = O.colwidth.slice();
              for (let k = 0; k < E; k++) O.colwidth.splice(x, 0, 0);
            }
            return O;
          }
          function B(w, x, E) {
            const O = Q(x.type.schema).header_cell;
            for (let k = 0; k < w.height; k++)
              if (x.nodeAt(w.map[E + k * w.width]).type != O) return !1;
            return !0;
          }
          var ne = class An extends s.LN {
            constructor(x, E = x) {
              const O = x.node(-1),
                k = I.get(O),
                z = x.start(-1),
                J = k.rectBetween(x.pos - z, E.pos - z),
                te = x.node(0),
                q = k.cellsInRect(J).filter((ke) => ke != E.pos - z);
              q.unshift(E.pos - z);
              const le = q.map((ke) => {
                const Oe = O.nodeAt(ke);
                if (!Oe) throw RangeError(`No cell with offset ${ke} found`);
                const He = z + ke + 1;
                return new s.yn(
                  te.resolve(He),
                  te.resolve(He + Oe.content.size),
                );
              });
              super(le[0].$from, le[0].$to, le),
                (this.$anchorCell = x),
                (this.$headCell = E);
            }
            map(x, E) {
              const O = x.resolve(E.map(this.$anchorCell.pos)),
                k = x.resolve(E.map(this.$headCell.pos));
              if (he(O) && he(k) && Je(O, k)) {
                const z = this.$anchorCell.node(-1) != O.node(-1);
                return z && this.isRowSelection()
                  ? An.rowSelection(O, k)
                  : z && this.isColSelection()
                    ? An.colSelection(O, k)
                    : new An(O, k);
              }
              return s.U3.between(O, k);
            }
            content() {
              const x = this.$anchorCell.node(-1),
                E = I.get(x),
                O = this.$anchorCell.start(-1),
                k = E.rectBetween(
                  this.$anchorCell.pos - O,
                  this.$headCell.pos - O,
                ),
                z = {},
                J = [];
              for (let q = k.top; q < k.bottom; q++) {
                const le = [];
                for (
                  let ke = q * E.width + k.left, Oe = k.left;
                  Oe < k.right;
                  Oe++, ke++
                ) {
                  const He = E.map[ke];
                  if (z[He]) continue;
                  z[He] = !0;
                  const $e = E.findCell(He);
                  let it = x.nodeAt(He);
                  if (!it) throw RangeError(`No cell with offset ${He} found`);
                  const xt = k.left - $e.left,
                    Nt = $e.right - k.right;
                  if (xt > 0 || Nt > 0) {
                    let _t = it.attrs;
                    if (
                      (xt > 0 && (_t = tt(_t, 0, xt)),
                      Nt > 0 && (_t = tt(_t, _t.colspan - Nt, Nt)),
                      $e.left < k.left)
                    ) {
                      if (((it = it.type.createAndFill(_t)), !it))
                        throw RangeError(
                          `Could not create cell with attrs ${JSON.stringify(_t)}`,
                        );
                    } else it = it.type.create(_t, it.content);
                  }
                  if ($e.top < k.top || $e.bottom > k.bottom) {
                    const _t = {
                      ...it.attrs,
                      rowspan:
                        Math.min($e.bottom, k.bottom) - Math.max($e.top, k.top),
                    };
                    $e.top < k.top
                      ? (it = it.type.createAndFill(_t))
                      : (it = it.type.create(_t, it.content));
                  }
                  le.push(it);
                }
                J.push(x.child(q).copy(g.FK.from(le)));
              }
              const te = this.isColSelection() && this.isRowSelection() ? x : J;
              return new g.Ji(g.FK.from(te), 1, 1);
            }
            replace(x, E = g.Ji.empty) {
              const O = x.steps.length,
                k = this.ranges;
              for (let J = 0; J < k.length; J++) {
                const { $from: te, $to: q } = k[J],
                  le = x.mapping.slice(O);
                x.replace(le.map(te.pos), le.map(q.pos), J ? g.Ji.empty : E);
              }
              const z = s.LN.findFrom(
                x.doc.resolve(x.mapping.slice(O).map(this.to)),
                -1,
              );
              z && x.setSelection(z);
            }
            replaceWith(x, E) {
              this.replace(x, new g.Ji(g.FK.from(E), 0, 0));
            }
            forEachCell(x) {
              const E = this.$anchorCell.node(-1),
                O = I.get(E),
                k = this.$anchorCell.start(-1),
                z = O.cellsInRect(
                  O.rectBetween(
                    this.$anchorCell.pos - k,
                    this.$headCell.pos - k,
                  ),
                );
              for (let J = 0; J < z.length; J++) x(E.nodeAt(z[J]), k + z[J]);
            }
            isColSelection() {
              const x = this.$anchorCell.index(-1),
                E = this.$headCell.index(-1);
              if (Math.min(x, E) > 0) return !1;
              const O = x + this.$anchorCell.nodeAfter.attrs.rowspan,
                k = E + this.$headCell.nodeAfter.attrs.rowspan;
              return Math.max(O, k) == this.$headCell.node(-1).childCount;
            }
            static colSelection(x, E = x) {
              const O = x.node(-1),
                k = I.get(O),
                z = x.start(-1),
                J = k.findCell(x.pos - z),
                te = k.findCell(E.pos - z),
                q = x.node(0);
              return (
                J.top <= te.top
                  ? (J.top > 0 && (x = q.resolve(z + k.map[J.left])),
                    te.bottom < k.height &&
                      (E = q.resolve(
                        z + k.map[k.width * (k.height - 1) + te.right - 1],
                      )))
                  : (te.top > 0 && (E = q.resolve(z + k.map[te.left])),
                    J.bottom < k.height &&
                      (x = q.resolve(
                        z + k.map[k.width * (k.height - 1) + J.right - 1],
                      ))),
                new An(x, E)
              );
            }
            isRowSelection() {
              const x = this.$anchorCell.node(-1),
                E = I.get(x),
                O = this.$anchorCell.start(-1),
                k = E.colCount(this.$anchorCell.pos - O),
                z = E.colCount(this.$headCell.pos - O);
              if (Math.min(k, z) > 0) return !1;
              const J = k + this.$anchorCell.nodeAfter.attrs.colspan,
                te = z + this.$headCell.nodeAfter.attrs.colspan;
              return Math.max(J, te) == E.width;
            }
            eq(x) {
              return (
                x instanceof An &&
                x.$anchorCell.pos == this.$anchorCell.pos &&
                x.$headCell.pos == this.$headCell.pos
              );
            }
            static rowSelection(x, E = x) {
              const O = x.node(-1),
                k = I.get(O),
                z = x.start(-1),
                J = k.findCell(x.pos - z),
                te = k.findCell(E.pos - z),
                q = x.node(0);
              return (
                J.left <= te.left
                  ? (J.left > 0 && (x = q.resolve(z + k.map[J.top * k.width])),
                    te.right < k.width &&
                      (E = q.resolve(z + k.map[k.width * (te.top + 1) - 1])))
                  : (te.left > 0 &&
                      (E = q.resolve(z + k.map[te.top * k.width])),
                    J.right < k.width &&
                      (x = q.resolve(z + k.map[k.width * (J.top + 1) - 1]))),
                new An(x, E)
              );
            }
            toJSON() {
              return {
                type: "cell",
                anchor: this.$anchorCell.pos,
                head: this.$headCell.pos,
              };
            }
            static fromJSON(x, E) {
              return new An(x.resolve(E.anchor), x.resolve(E.head));
            }
            static create(x, E, O = E) {
              return new An(x.resolve(E), x.resolve(O));
            }
            getBookmark() {
              return new $(this.$anchorCell.pos, this.$headCell.pos);
            }
          };
          (ne.prototype.visible = !1), s.LN.jsonID("cell", ne);
          var $ = class Xs {
            constructor(x, E) {
              (this.anchor = x), (this.head = E);
            }
            map(x) {
              return new Xs(x.map(this.anchor), x.map(this.head));
            }
            resolve(x) {
              const E = x.resolve(this.anchor),
                O = x.resolve(this.head);
              return E.parent.type.spec.tableRole == "row" &&
                O.parent.type.spec.tableRole == "row" &&
                E.index() < E.parent.childCount &&
                O.index() < O.parent.childCount &&
                Je(E, O)
                ? new ne(E, O)
                : s.LN.near(O, 1);
            }
          };
          function X(w) {
            if (!(w.selection instanceof ne)) return null;
            const x = [];
            return (
              w.selection.forEachCell((E, O) => {
                x.push(M.NZ.node(O, O + E.nodeSize, { class: "selectedCell" }));
              }),
              M.zF.create(w.doc, x)
            );
          }
          function ie({ $from: w, $to: x }) {
            if (w.pos == x.pos || w.pos < x.pos - 6) return !1;
            let E = w.pos,
              O = x.pos,
              k = w.depth;
            for (; k >= 0 && !(w.after(k + 1) < w.end(k)); k--, E++);
            for (
              let z = x.depth;
              z >= 0 && !(x.before(z + 1) > x.start(z));
              z--, O--
            );
            return E == O && /row|table/.test(w.node(k).type.spec.tableRole);
          }
          function xe({ $from: w, $to: x }) {
            let E, O;
            for (let k = w.depth; k > 0; k--) {
              const z = w.node(k);
              if (
                z.type.spec.tableRole === "cell" ||
                z.type.spec.tableRole === "header_cell"
              ) {
                E = z;
                break;
              }
            }
            for (let k = x.depth; k > 0; k--) {
              const z = x.node(k);
              if (
                z.type.spec.tableRole === "cell" ||
                z.type.spec.tableRole === "header_cell"
              ) {
                O = z;
                break;
              }
            }
            return E !== O && x.parentOffset === 0;
          }
          function Ce(w, x, E) {
            const O = (x || w).selection,
              k = (x || w).doc;
            let z, J;
            if (O instanceof s.nh && (J = O.node.type.spec.tableRole)) {
              if (J == "cell" || J == "header_cell") z = ne.create(k, O.from);
              else if (J == "row") {
                const te = k.resolve(O.from + 1);
                z = ne.rowSelection(te, te);
              } else if (!E) {
                const te = I.get(O.node),
                  q = O.from + 1,
                  le = q + te.map[te.width * te.height - 1];
                z = ne.create(k, q + 1, le);
              }
            } else
              O instanceof s.U3 && ie(O)
                ? (z = s.U3.create(k, O.from))
                : O instanceof s.U3 &&
                  xe(O) &&
                  (z = s.U3.create(k, O.$from.start(), O.$from.end()));
            return z && (x || (x = w.tr)).setSelection(z), x;
          }
          var Ve = new s.hs("fix-tables");
          function Ee(w, x, E, O) {
            const k = w.childCount,
              z = x.childCount;
            e: for (let J = 0, te = 0; J < z; J++) {
              const q = x.child(J);
              for (let le = te, ke = Math.min(k, J + 3); le < ke; le++)
                if (w.child(le) == q) {
                  (te = le + 1), (E += q.nodeSize);
                  continue e;
                }
              O(q, E),
                te < k && w.child(te).sameMarkup(q)
                  ? Ee(w.child(te), q, E + 1, O)
                  : q.nodesBetween(0, q.content.size, O, E + 1),
                (E += q.nodeSize);
            }
          }
          function rt(w, x) {
            let E;
            const O = (k, z) => {
              k.type.spec.tableRole == "table" && (E = ct(w, k, z, E));
            };
            return (
              x
                ? x.doc != w.doc && Ee(x.doc, w.doc, 0, O)
                : w.doc.descendants(O),
              E
            );
          }
          function ct(w, x, E, O) {
            const k = I.get(x);
            if (!k.problems) return O;
            O || (O = w.tr);
            const z = [];
            for (let q = 0; q < k.height; q++) z.push(0);
            for (let q = 0; q < k.problems.length; q++) {
              const le = k.problems[q];
              if (le.type == "collision") {
                const ke = x.nodeAt(le.pos);
                if (!ke) continue;
                const Oe = ke.attrs;
                for (let He = 0; He < Oe.rowspan; He++) z[le.row + He] += le.n;
                O.setNodeMarkup(
                  O.mapping.map(E + 1 + le.pos),
                  null,
                  tt(Oe, Oe.colspan - le.n, le.n),
                );
              } else if (le.type == "missing") z[le.row] += le.n;
              else if (le.type == "overlong_rowspan") {
                const ke = x.nodeAt(le.pos);
                if (!ke) continue;
                O.setNodeMarkup(O.mapping.map(E + 1 + le.pos), null, {
                  ...ke.attrs,
                  rowspan: ke.attrs.rowspan - le.n,
                });
              } else if (le.type == "colwidth mismatch") {
                const ke = x.nodeAt(le.pos);
                if (!ke) continue;
                O.setNodeMarkup(O.mapping.map(E + 1 + le.pos), null, {
                  ...ke.attrs,
                  colwidth: le.colwidth,
                });
              }
            }
            let J, te;
            for (let q = 0; q < z.length; q++)
              z[q] && (J == null && (J = q), (te = q));
            for (let q = 0, le = E + 1; q < k.height; q++) {
              const ke = x.child(q),
                Oe = le + ke.nodeSize,
                He = z[q];
              if (He > 0) {
                let $e = "cell";
                ke.firstChild && ($e = ke.firstChild.type.spec.tableRole);
                const it = [];
                for (let Nt = 0; Nt < He; Nt++) {
                  const _t = Q(w.schema)[$e].createAndFill();
                  _t && it.push(_t);
                }
                const xt = (q == 0 || J == q - 1) && te == q ? le + 1 : Oe - 1;
                O.insert(O.mapping.map(xt), it);
              }
              le = Oe;
            }
            return O.setMeta(Ve, { fixTables: !0 });
          }
          function vt(w) {
            const x = w.selection,
              E = fe(w),
              O = E.node(-1),
              k = E.start(-1),
              z = I.get(O);
            return {
              ...(x instanceof ne
                ? z.rectBetween(x.$anchorCell.pos - k, x.$headCell.pos - k)
                : z.findCell(E.pos - k)),
              tableStart: k,
              map: z,
              table: O,
            };
          }
          function wt(w, { map: x, tableStart: E, table: O }, k) {
            let z = k > 0 ? -1 : 0;
            B(x, O, k + z) && (z = k == 0 || k == x.width ? null : 0);
            for (let J = 0; J < x.height; J++) {
              const te = J * x.width + k;
              if (k > 0 && k < x.width && x.map[te - 1] == x.map[te]) {
                const q = x.map[te],
                  le = O.nodeAt(q);
                w.setNodeMarkup(
                  w.mapping.map(E + q),
                  null,
                  Ne(le.attrs, k - x.colCount(q)),
                ),
                  (J += le.attrs.rowspan - 1);
              } else {
                const q =
                    z == null
                      ? Q(O.type.schema).cell
                      : O.nodeAt(x.map[te + z]).type,
                  le = x.positionAt(J, k, O);
                w.insert(w.mapping.map(E + le), q.createAndFill());
              }
            }
            return w;
          }
          function yt(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w);
              x(wt(w.tr, E, E.left));
            }
            return !0;
          }
          function Ct(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w);
              x(wt(w.tr, E, E.right));
            }
            return !0;
          }
          function Rt(w, { map: x, table: E, tableStart: O }, k) {
            const z = w.mapping.maps.length;
            for (let J = 0; J < x.height; ) {
              const te = J * x.width + k,
                q = x.map[te],
                le = E.nodeAt(q),
                ke = le.attrs;
              if (
                (k > 0 && x.map[te - 1] == q) ||
                (k < x.width - 1 && x.map[te + 1] == q)
              )
                w.setNodeMarkup(
                  w.mapping.slice(z).map(O + q),
                  null,
                  tt(ke, k - x.colCount(q)),
                );
              else {
                const Oe = w.mapping.slice(z).map(O + q);
                w.delete(Oe, Oe + le.nodeSize);
              }
              J += ke.rowspan;
            }
          }
          function Bt(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w),
                O = w.tr;
              if (E.left == 0 && E.right == E.map.width) return !1;
              for (let k = E.right - 1; Rt(O, E, k), k != E.left; k--) {
                const z = E.tableStart ? O.doc.nodeAt(E.tableStart - 1) : O.doc;
                if (!z) throw RangeError("No table found");
                (E.table = z), (E.map = I.get(z));
              }
              x(O);
            }
            return !0;
          }
          function be(w, x, E) {
            var O;
            const k = Q(x.type.schema).header_cell;
            for (let z = 0; z < w.width; z++)
              if (
                ((O = x.nodeAt(w.map[z + E * w.width])) == null
                  ? void 0
                  : O.type) != k
              )
                return !1;
            return !0;
          }
          function ye(w, { map: x, tableStart: E, table: O }, k) {
            var z;
            let J = E;
            for (let le = 0; le < k; le++) J += O.child(le).nodeSize;
            const te = [];
            let q = k > 0 ? -1 : 0;
            be(x, O, k + q) && (q = k == 0 || k == x.height ? null : 0);
            for (let le = 0, ke = x.width * k; le < x.width; le++, ke++)
              if (k > 0 && k < x.height && x.map[ke] == x.map[ke - x.width]) {
                const Oe = x.map[ke],
                  He = O.nodeAt(Oe).attrs;
                w.setNodeMarkup(E + Oe, null, {
                  ...He,
                  rowspan: He.rowspan + 1,
                }),
                  (le += He.colspan - 1);
              } else {
                const Oe =
                    q == null
                      ? Q(O.type.schema).cell
                      : (z = O.nodeAt(x.map[ke + q * x.width])) == null
                        ? void 0
                        : z.type,
                  He = Oe?.createAndFill();
                He && te.push(He);
              }
            return w.insert(J, Q(O.type.schema).row.create(null, te)), w;
          }
          function Te(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w);
              x(ye(w.tr, E, E.top));
            }
            return !0;
          }
          function Re(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w);
              x(ye(w.tr, E, E.bottom));
            }
            return !0;
          }
          function we(w, { map: x, table: E, tableStart: O }, k) {
            let z = 0;
            for (let le = 0; le < k; le++) z += E.child(le).nodeSize;
            const J = z + E.child(k).nodeSize,
              te = w.mapping.maps.length;
            w.delete(z + O, J + O);
            const q = new Set();
            for (let le = 0, ke = k * x.width; le < x.width; le++, ke++) {
              const Oe = x.map[ke];
              if (!q.has(Oe)) {
                if ((q.add(Oe), k > 0 && Oe == x.map[ke - x.width])) {
                  const He = E.nodeAt(Oe).attrs;
                  w.setNodeMarkup(w.mapping.slice(te).map(Oe + O), null, {
                    ...He,
                    rowspan: He.rowspan - 1,
                  }),
                    (le += He.colspan - 1);
                } else if (k < x.height && Oe == x.map[ke + x.width]) {
                  const He = E.nodeAt(Oe),
                    $e = He.attrs,
                    it = He.type.create(
                      { ...$e, rowspan: He.attrs.rowspan - 1 },
                      He.content,
                    ),
                    xt = x.positionAt(k + 1, le, E);
                  w.insert(w.mapping.slice(te).map(O + xt), it),
                    (le += $e.colspan - 1);
                }
              }
            }
          }
          function Be(w, x) {
            if (!me(w)) return !1;
            if (x) {
              const E = vt(w),
                O = w.tr;
              if (E.top == 0 && E.bottom == E.map.height) return !1;
              for (let k = E.bottom - 1; we(O, E, k), k != E.top; k--) {
                const z = E.tableStart ? O.doc.nodeAt(E.tableStart - 1) : O.doc;
                if (!z) throw RangeError("No table found");
                (E.table = z), (E.map = I.get(E.table));
              }
              x(O);
            }
            return !0;
          }
          function ze(w) {
            const x = w.content;
            return (
              x.childCount == 1 &&
              x.child(0).isTextblock &&
              x.child(0).childCount == 0
            );
          }
          function qe({ width: w, height: x, map: E }, O) {
            let k = O.top * w + O.left,
              z = k,
              J = (O.bottom - 1) * w + O.left,
              te = k + (O.right - O.left - 1);
            for (let q = O.top; q < O.bottom; q++) {
              if (
                (O.left > 0 && E[z] == E[z - 1]) ||
                (O.right < w && E[te] == E[te + 1])
              )
                return !0;
              (z += w), (te += w);
            }
            for (let q = O.left; q < O.right; q++) {
              if (
                (O.top > 0 && E[k] == E[k - w]) ||
                (O.bottom < x && E[J] == E[J + w])
              )
                return !0;
              k++, J++;
            }
            return !1;
          }
          function ft(w, x) {
            const E = w.selection;
            if (!(E instanceof ne) || E.$anchorCell.pos == E.$headCell.pos)
              return !1;
            const O = vt(w),
              { map: k } = O;
            if (qe(k, O)) return !1;
            if (x) {
              const z = w.tr,
                J = {};
              let te = g.FK.empty,
                q,
                le;
              for (let ke = O.top; ke < O.bottom; ke++)
                for (let Oe = O.left; Oe < O.right; Oe++) {
                  const He = k.map[ke * k.width + Oe],
                    $e = O.table.nodeAt(He);
                  if (!(J[He] || !$e))
                    if (((J[He] = !0), q == null)) (q = He), (le = $e);
                    else {
                      ze($e) || (te = te.append($e.content));
                      const it = z.mapping.map(He + O.tableStart);
                      z.delete(it, it + $e.nodeSize);
                    }
                }
              if (q == null || le == null) return !0;
              if (
                (z.setNodeMarkup(q + O.tableStart, null, {
                  ...Ne(
                    le.attrs,
                    le.attrs.colspan,
                    O.right - O.left - le.attrs.colspan,
                  ),
                  rowspan: O.bottom - O.top,
                }),
                te.size)
              ) {
                const ke = q + 1 + le.content.size,
                  Oe = ze(le) ? q + 1 : ke;
                z.replaceWith(Oe + O.tableStart, ke + O.tableStart, te);
              }
              z.setSelection(new ne(z.doc.resolve(q + O.tableStart))), x(z);
            }
            return !0;
          }
          function gt(w, x) {
            const E = Q(w.schema);
            return mt(({ node: O }) => E[O.type.spec.tableRole])(w, x);
          }
          function mt(w) {
            return (x, E) => {
              var O;
              const k = x.selection;
              let z, J;
              if (k instanceof ne) {
                if (k.$anchorCell.pos != k.$headCell.pos) return !1;
                (z = k.$anchorCell.nodeAfter), (J = k.$anchorCell.pos);
              } else {
                if (((z = ae(k.$from)), !z)) return !1;
                J = (O = Ae(k.$from)) == null ? void 0 : O.pos;
              }
              if (
                z == null ||
                J == null ||
                (z.attrs.colspan == 1 && z.attrs.rowspan == 1)
              )
                return !1;
              if (E) {
                let te = z.attrs;
                const q = [],
                  le = te.colwidth;
                te.rowspan > 1 && (te = { ...te, rowspan: 1 }),
                  te.colspan > 1 && (te = { ...te, colspan: 1 });
                const ke = vt(x),
                  Oe = x.tr;
                for (let $e = 0; $e < ke.right - ke.left; $e++)
                  q.push(
                    le
                      ? { ...te, colwidth: le && le[$e] ? [le[$e]] : null }
                      : te,
                  );
                let He;
                for (let $e = ke.top; $e < ke.bottom; $e++) {
                  let it = ke.map.positionAt($e, ke.left, ke.table);
                  $e == ke.top && (it += z.nodeSize);
                  for (let xt = ke.left, Nt = 0; xt < ke.right; xt++, Nt++)
                    (xt == ke.left && $e == ke.top) ||
                      Oe.insert(
                        (He = Oe.mapping.map(it + ke.tableStart, 1)),
                        w({ node: z, row: $e, col: xt }).createAndFill(q[Nt]),
                      );
                }
                Oe.setNodeMarkup(
                  J,
                  w({ node: z, row: ke.top, col: ke.left }),
                  q[0],
                ),
                  k instanceof ne &&
                    Oe.setSelection(
                      new ne(
                        Oe.doc.resolve(k.$anchorCell.pos),
                        He ? Oe.doc.resolve(He) : void 0,
                      ),
                    ),
                  E(Oe);
              }
              return !0;
            };
          }
          function ht(w, x) {
            return function (E, O) {
              if (!me(E)) return !1;
              const k = fe(E);
              if (k.nodeAfter.attrs[w] === x) return !1;
              if (O) {
                const z = E.tr;
                E.selection instanceof ne
                  ? E.selection.forEachCell((J, te) => {
                      J.attrs[w] !== x &&
                        z.setNodeMarkup(te, null, { ...J.attrs, [w]: x });
                    })
                  : z.setNodeMarkup(k.pos, null, {
                      ...k.nodeAfter.attrs,
                      [w]: x,
                    }),
                  O(z);
              }
              return !0;
            };
          }
          function dt(w) {
            return function (x, E) {
              if (!me(x)) return !1;
              if (E) {
                const O = Q(x.schema),
                  k = vt(x),
                  z = x.tr,
                  J = k.map.cellsInRect(
                    w == "column"
                      ? {
                          left: k.left,
                          top: 0,
                          right: k.right,
                          bottom: k.map.height,
                        }
                      : w == "row"
                        ? {
                            left: 0,
                            top: k.top,
                            right: k.map.width,
                            bottom: k.bottom,
                          }
                        : k,
                  ),
                  te = J.map((q) => k.table.nodeAt(q));
                for (let q = 0; q < J.length; q++)
                  te[q].type == O.header_cell &&
                    z.setNodeMarkup(k.tableStart + J[q], O.cell, te[q].attrs);
                if (z.steps.length == 0)
                  for (let q = 0; q < J.length; q++)
                    z.setNodeMarkup(
                      k.tableStart + J[q],
                      O.header_cell,
                      te[q].attrs,
                    );
                E(z);
              }
              return !0;
            };
          }
          function Et(w, x, E) {
            const O = x.map.cellsInRect({
              left: 0,
              top: 0,
              right: w == "row" ? x.map.width : 1,
              bottom: w == "column" ? x.map.height : 1,
            });
            for (let k = 0; k < O.length; k++) {
              const z = x.table.nodeAt(O[k]);
              if (z && z.type !== E.header_cell) return !1;
            }
            return !0;
          }
          function Ot(w, x) {
            return (
              (x = x || { useDeprecatedLogic: !1 }),
              x.useDeprecatedLogic
                ? dt(w)
                : function (E, O) {
                    if (!me(E)) return !1;
                    if (O) {
                      const k = Q(E.schema),
                        z = vt(E),
                        J = E.tr,
                        te = Et("row", z, k),
                        q = Et("column", z, k),
                        ke = (w === "column" ? te : w === "row" ? q : !1)
                          ? 1
                          : 0,
                        Oe =
                          w == "column"
                            ? {
                                left: 0,
                                top: ke,
                                right: 1,
                                bottom: z.map.height,
                              }
                            : w == "row"
                              ? {
                                  left: ke,
                                  top: 0,
                                  right: z.map.width,
                                  bottom: 1,
                                }
                              : z,
                        He =
                          w == "column"
                            ? q
                              ? k.cell
                              : k.header_cell
                            : w == "row"
                              ? te
                                ? k.cell
                                : k.header_cell
                              : k.cell;
                      z.map.cellsInRect(Oe).forEach(($e) => {
                        const it = $e + z.tableStart,
                          xt = J.doc.nodeAt(it);
                        xt && J.setNodeMarkup(it, He, xt.attrs);
                      }),
                        O(J);
                    }
                    return !0;
                  }
            );
          }
          var kt = Ot("row", { useDeprecatedLogic: !0 }),
            It = Ot("column", { useDeprecatedLogic: !0 }),
            Dt = Ot("cell", { useDeprecatedLogic: !0 });
          function jt(w, x) {
            if (x < 0) {
              const E = w.nodeBefore;
              if (E) return w.pos - E.nodeSize;
              for (let O = w.index(-1) - 1, k = w.before(); O >= 0; O--) {
                const z = w.node(-1).child(O),
                  J = z.lastChild;
                if (J) return k - 1 - J.nodeSize;
                k -= z.nodeSize;
              }
            } else {
              if (w.index() < w.parent.childCount - 1)
                return w.pos + w.nodeAfter.nodeSize;
              const E = w.node(-1);
              for (
                let O = w.indexAfter(-1), k = w.after();
                O < E.childCount;
                O++
              ) {
                const z = E.child(O);
                if (z.childCount) return k + 1;
                k += z.nodeSize;
              }
            }
            return null;
          }
          function an(w) {
            return function (x, E) {
              if (!me(x)) return !1;
              const O = jt(fe(x), w);
              if (O == null) return !1;
              if (E) {
                const k = x.doc.resolve(O);
                E(
                  x.tr
                    .setSelection(TextSelection2.between(k, Le(k)))
                    .scrollIntoView(),
                );
              }
              return !0;
            };
          }
          function ce(w, x) {
            const E = w.selection.$anchor;
            for (let O = E.depth; O > 0; O--)
              if (E.node(O).type.spec.tableRole == "table")
                return (
                  x && x(w.tr.delete(E.before(O), E.after(O)).scrollIntoView()),
                  !0
                );
            return !1;
          }
          function b(w, x) {
            const E = w.selection;
            if (!(E instanceof ne)) return !1;
            if (x) {
              const O = w.tr,
                k = Q(w.schema).cell.createAndFill().content;
              E.forEachCell((z, J) => {
                z.content.eq(k) ||
                  O.replace(
                    O.mapping.map(J + 1),
                    O.mapping.map(J + z.nodeSize - 1),
                    new g.Ji(k, 0, 0),
                  );
              }),
                O.docChanged && x(O);
            }
            return !0;
          }
          function y(w) {
            if (!w.size) return null;
            let { content: x, openStart: E, openEnd: O } = w;
            for (
              ;
              x.childCount == 1 &&
              ((E > 0 && O > 0) || x.child(0).type.spec.tableRole == "table");
            )
              E--, O--, (x = x.child(0).content);
            const k = x.child(0),
              z = k.type.spec.tableRole,
              J = k.type.schema,
              te = [];
            if (z == "row")
              for (let q = 0; q < x.childCount; q++) {
                let le = x.child(q).content;
                const ke = q ? 0 : Math.max(0, E - 1),
                  Oe = q < x.childCount - 1 ? 0 : Math.max(0, O - 1);
                (ke || Oe) && (le = H(Q(J).row, new g.Ji(le, ke, Oe)).content),
                  te.push(le);
              }
            else if (z == "cell" || z == "header_cell")
              te.push(E || O ? H(Q(J).row, new g.Ji(x, E, O)).content : x);
            else return null;
            return P(J, te);
          }
          function P(w, x) {
            const E = [];
            for (let k = 0; k < x.length; k++) {
              const z = x[k];
              for (let J = z.childCount - 1; J >= 0; J--) {
                const { rowspan: te, colspan: q } = z.child(J).attrs;
                for (let le = k; le < k + te; le++) E[le] = (E[le] || 0) + q;
              }
            }
            let O = 0;
            for (let k = 0; k < E.length; k++) O = Math.max(O, E[k]);
            for (let k = 0; k < E.length; k++)
              if ((k >= x.length && x.push(g.FK.empty), E[k] < O)) {
                const z = Q(w).cell.createAndFill(),
                  J = [];
                for (let te = E[k]; te < O; te++) J.push(z);
                x[k] = x[k].append(g.FK.from(J));
              }
            return { height: x.length, width: O, rows: x };
          }
          function H(w, x) {
            const E = w.createAndFill();
            return new T.dL(E).replace(0, E.content.size, x).doc;
          }
          function oe({ width: w, height: x, rows: E }, O, k) {
            if (w != O) {
              const z = [],
                J = [];
              for (let te = 0; te < E.length; te++) {
                const q = E[te],
                  le = [];
                for (let ke = z[te] || 0, Oe = 0; ke < O; Oe++) {
                  let He = q.child(Oe % q.childCount);
                  ke + He.attrs.colspan > O &&
                    (He = He.type.createChecked(
                      tt(He.attrs, He.attrs.colspan, ke + He.attrs.colspan - O),
                      He.content,
                    )),
                    le.push(He),
                    (ke += He.attrs.colspan);
                  for (let $e = 1; $e < He.attrs.rowspan; $e++)
                    z[te + $e] = (z[te + $e] || 0) + He.attrs.colspan;
                }
                J.push(g.FK.from(le));
              }
              (E = J), (w = O);
            }
            if (x != k) {
              const z = [];
              for (let J = 0, te = 0; J < k; J++, te++) {
                const q = [],
                  le = E[te % x];
                for (let ke = 0; ke < le.childCount; ke++) {
                  let Oe = le.child(ke);
                  J + Oe.attrs.rowspan > k &&
                    (Oe = Oe.type.create(
                      {
                        ...Oe.attrs,
                        rowspan: Math.max(1, k - Oe.attrs.rowspan),
                      },
                      Oe.content,
                    )),
                    q.push(Oe);
                }
                z.push(g.FK.from(q));
              }
              (E = z), (x = k);
            }
            return { width: w, height: x, rows: E };
          }
          function de(w, x, E, O, k, z, J) {
            const te = w.doc.type.schema,
              q = Q(te);
            let le, ke;
            if (k > x.width)
              for (let Oe = 0, He = 0; Oe < x.height; Oe++) {
                const $e = E.child(Oe);
                He += $e.nodeSize;
                const it = [];
                let xt;
                $e.lastChild == null || $e.lastChild.type == q.cell
                  ? (xt = le || (le = q.cell.createAndFill()))
                  : (xt = ke || (ke = q.header_cell.createAndFill()));
                for (let Nt = x.width; Nt < k; Nt++) it.push(xt);
                w.insert(w.mapping.slice(J).map(He - 1 + O), it);
              }
            if (z > x.height) {
              const Oe = [];
              for (
                let it = 0, xt = (x.height - 1) * x.width;
                it < Math.max(x.width, k);
                it++
              ) {
                const Nt =
                  it >= x.width
                    ? !1
                    : E.nodeAt(x.map[xt + it]).type == q.header_cell;
                Oe.push(
                  Nt
                    ? ke || (ke = q.header_cell.createAndFill())
                    : le || (le = q.cell.createAndFill()),
                );
              }
              const He = q.row.create(null, g.FK.from(Oe)),
                $e = [];
              for (let it = x.height; it < z; it++) $e.push(He);
              w.insert(w.mapping.slice(J).map(O + E.nodeSize - 2), $e);
            }
            return !!(le || ke);
          }
          function _e(w, x, E, O, k, z, J, te) {
            if (J == 0 || J == x.height) return !1;
            let q = !1;
            for (let le = k; le < z; le++) {
              const ke = J * x.width + le,
                Oe = x.map[ke];
              if (x.map[ke - x.width] == Oe) {
                q = !0;
                const He = E.nodeAt(Oe),
                  { top: $e, left: it } = x.findCell(Oe);
                w.setNodeMarkup(w.mapping.slice(te).map(Oe + O), null, {
                  ...He.attrs,
                  rowspan: J - $e,
                }),
                  w.insert(
                    w.mapping.slice(te).map(x.positionAt(J, it, E)),
                    He.type.createAndFill({
                      ...He.attrs,
                      rowspan: $e + He.attrs.rowspan - J,
                    }),
                  ),
                  (le += He.attrs.colspan - 1);
              }
            }
            return q;
          }
          function N(w, x, E, O, k, z, J, te) {
            if (J == 0 || J == x.width) return !1;
            let q = !1;
            for (let le = k; le < z; le++) {
              const ke = le * x.width + J,
                Oe = x.map[ke];
              if (x.map[ke - 1] == Oe) {
                q = !0;
                const He = E.nodeAt(Oe),
                  $e = x.colCount(Oe),
                  it = w.mapping.slice(te).map(Oe + O);
                w.setNodeMarkup(
                  it,
                  null,
                  tt(He.attrs, J - $e, He.attrs.colspan - (J - $e)),
                ),
                  w.insert(
                    it + He.nodeSize,
                    He.type.createAndFill(tt(He.attrs, 0, J - $e)),
                  ),
                  (le += He.attrs.rowspan - 1);
              }
            }
            return q;
          }
          function o(w, x, E, O, k) {
            let z = E ? w.doc.nodeAt(E - 1) : w.doc;
            if (!z) throw new Error("No table found");
            let J = I.get(z);
            const { top: te, left: q } = O,
              le = q + k.width,
              ke = te + k.height,
              Oe = w.tr;
            let He = 0;
            function $e() {
              if (((z = E ? Oe.doc.nodeAt(E - 1) : Oe.doc), !z))
                throw new Error("No table found");
              (J = I.get(z)), (He = Oe.mapping.maps.length);
            }
            de(Oe, J, z, E, le, ke, He) && $e(),
              _e(Oe, J, z, E, q, le, te, He) && $e(),
              _e(Oe, J, z, E, q, le, ke, He) && $e(),
              N(Oe, J, z, E, te, ke, q, He) && $e(),
              N(Oe, J, z, E, te, ke, le, He) && $e();
            for (let it = te; it < ke; it++) {
              const xt = J.positionAt(it, q, z),
                Nt = J.positionAt(it, le, z);
              Oe.replace(
                Oe.mapping.slice(He).map(xt + E),
                Oe.mapping.slice(He).map(Nt + E),
                new g.Ji(k.rows[it - te], 0, 0),
              );
            }
            $e(),
              Oe.setSelection(
                new ne(
                  Oe.doc.resolve(E + J.positionAt(te, q, z)),
                  Oe.doc.resolve(E + J.positionAt(ke - 1, le - 1, z)),
                ),
              ),
              x(Oe);
          }
          var c = (0, _.K)({
            ArrowLeft: S("horiz", -1),
            ArrowRight: S("horiz", 1),
            ArrowUp: S("vert", -1),
            ArrowDown: S("vert", 1),
            "Shift-ArrowLeft": A("horiz", -1),
            "Shift-ArrowRight": A("horiz", 1),
            "Shift-ArrowUp": A("vert", -1),
            "Shift-ArrowDown": A("vert", 1),
            Backspace: b,
            "Mod-Backspace": b,
            Delete: b,
            "Mod-Delete": b,
          });
          function m(w, x, E) {
            return E.eq(w.selection)
              ? !1
              : (x && x(w.tr.setSelection(E).scrollIntoView()), !0);
          }
          function S(w, x) {
            return (E, O, k) => {
              if (!k) return !1;
              const z = E.selection;
              if (z instanceof ne) return m(E, O, s.LN.near(z.$headCell, x));
              if (w != "horiz" && !z.empty) return !1;
              const J = et(k, w, x);
              if (J == null) return !1;
              if (w == "horiz")
                return m(E, O, s.LN.near(E.doc.resolve(z.head + x), x));
              {
                const te = E.doc.resolve(J),
                  q = Xe(te, w, x);
                let le;
                return (
                  q
                    ? (le = s.LN.near(q, 1))
                    : x < 0
                      ? (le = s.LN.near(E.doc.resolve(te.before(-1)), -1))
                      : (le = s.LN.near(E.doc.resolve(te.after(-1)), 1)),
                  m(E, O, le)
                );
              }
            };
          }
          function A(w, x) {
            return (E, O, k) => {
              if (!k) return !1;
              const z = E.selection;
              let J;
              if (z instanceof ne) J = z;
              else {
                const q = et(k, w, x);
                if (q == null) return !1;
                J = new ne(E.doc.resolve(q));
              }
              const te = Xe(J.$headCell, w, x);
              return te ? m(E, O, new ne(J.$anchorCell, te)) : !1;
            };
          }
          function F(w, x) {
            const E = w.state.doc,
              O = Ae(E.resolve(x));
            return O
              ? (w.dispatch(w.state.tr.setSelection(new ne(O))), !0)
              : !1;
          }
          function ee(w, x, E) {
            if (!me(w.state)) return !1;
            let O = y(E);
            const k = w.state.selection;
            if (k instanceof ne) {
              O ||
                (O = {
                  width: 1,
                  height: 1,
                  rows: [g.FK.from(H(Q(w.state.schema).cell, E))],
                });
              const z = k.$anchorCell.node(-1),
                J = k.$anchorCell.start(-1),
                te = I.get(z).rectBetween(
                  k.$anchorCell.pos - J,
                  k.$headCell.pos - J,
                );
              return (
                (O = oe(O, te.right - te.left, te.bottom - te.top)),
                o(w.state, w.dispatch, J, te, O),
                !0
              );
            } else if (O) {
              const z = fe(w.state),
                J = z.start(-1);
              return (
                o(
                  w.state,
                  w.dispatch,
                  J,
                  I.get(z.node(-1)).findCell(z.pos - J),
                  O,
                ),
                !0
              );
            } else return !1;
          }
          function Se(w, x) {
            var E;
            if (x.ctrlKey || x.metaKey) return;
            const O = st(w, x.target);
            let k;
            if (x.shiftKey && w.state.selection instanceof ne)
              z(w.state.selection.$anchorCell, x), x.preventDefault();
            else if (
              x.shiftKey &&
              O &&
              (k = Ae(w.state.selection.$anchor)) != null &&
              ((E = Mt(w, x)) == null ? void 0 : E.pos) != k.pos
            )
              z(k, x), x.preventDefault();
            else if (!O) return;
            function z(q, le) {
              let ke = Mt(w, le);
              const Oe = ge.getState(w.state) == null;
              if (!ke || !Je(q, ke))
                if (Oe) ke = q;
                else return;
              const He = new ne(q, ke);
              if (Oe || !w.state.selection.eq(He)) {
                const $e = w.state.tr.setSelection(He);
                Oe && $e.setMeta(ge, q.pos), w.dispatch($e);
              }
            }
            function J() {
              w.root.removeEventListener("mouseup", J),
                w.root.removeEventListener("dragstart", J),
                w.root.removeEventListener("mousemove", te),
                ge.getState(w.state) != null &&
                  w.dispatch(w.state.tr.setMeta(ge, -1));
            }
            function te(q) {
              const le = q,
                ke = ge.getState(w.state);
              let Oe;
              if (ke != null) Oe = w.state.doc.resolve(ke);
              else if (st(w, le.target) != O && ((Oe = Mt(w, x)), !Oe))
                return J();
              Oe && z(Oe, le);
            }
            w.root.addEventListener("mouseup", J),
              w.root.addEventListener("dragstart", J),
              w.root.addEventListener("mousemove", te);
          }
          function et(w, x, E) {
            if (!(w.state.selection instanceof s.U3)) return null;
            const { $head: O } = w.state.selection;
            for (let k = O.depth - 1; k >= 0; k--) {
              const z = O.node(k);
              if (
                (E < 0 ? O.index(k) : O.indexAfter(k)) !=
                (E < 0 ? 0 : z.childCount)
              )
                return null;
              if (
                z.type.spec.tableRole == "cell" ||
                z.type.spec.tableRole == "header_cell"
              ) {
                const te = O.before(k),
                  q =
                    x == "vert"
                      ? E > 0
                        ? "down"
                        : "up"
                      : E > 0
                        ? "right"
                        : "left";
                return w.endOfTextblock(q) ? te : null;
              }
            }
            return null;
          }
          function st(w, x) {
            for (; x && x != w.dom; x = x.parentNode)
              if (x.nodeName == "TD" || x.nodeName == "TH") return x;
            return null;
          }
          function Mt(w, x) {
            const E = w.posAtCoords({ left: x.clientX, top: x.clientY });
            return E && E ? Ae(w.state.doc.resolve(E.pos)) : null;
          }
          var Qt = class {
            constructor(w, x) {
              (this.node = w),
                (this.defaultCellMinWidth = x),
                (this.dom = document.createElement("div")),
                (this.dom.className = "tableWrapper"),
                (this.table = this.dom.appendChild(
                  document.createElement("table"),
                )),
                this.table.style.setProperty(
                  "--default-cell-min-width",
                  `${x}px`,
                ),
                (this.colgroup = this.table.appendChild(
                  document.createElement("colgroup"),
                )),
                Lt(w, this.colgroup, this.table, x),
                (this.contentDOM = this.table.appendChild(
                  document.createElement("tbody"),
                ));
            }
            update(w) {
              return w.type != this.node.type
                ? !1
                : ((this.node = w),
                  Lt(w, this.colgroup, this.table, this.defaultCellMinWidth),
                  !0);
            }
            ignoreMutation(w) {
              return (
                w.type == "attributes" &&
                (w.target == this.table || this.colgroup.contains(w.target))
              );
            }
          };
          function Lt(w, x, E, O, k, z) {
            var J;
            let te = 0,
              q = !0,
              le = x.firstChild;
            const ke = w.firstChild;
            if (ke) {
              for (let Oe = 0, He = 0; Oe < ke.childCount; Oe++) {
                const { colspan: $e, colwidth: it } = ke.child(Oe).attrs;
                for (let xt = 0; xt < $e; xt++, He++) {
                  const Nt = k == He ? z : it && it[xt],
                    _t = Nt ? Nt + "px" : "";
                  if (((te += Nt || O), Nt || (q = !1), le))
                    le.style.width != _t && (le.style.width = _t),
                      (le = le.nextSibling);
                  else {
                    const dn = document.createElement("col");
                    (dn.style.width = _t), x.appendChild(dn);
                  }
                }
              }
              for (; le; ) {
                const Oe = le.nextSibling;
                (J = le.parentNode) == null || J.removeChild(le), (le = Oe);
              }
              q
                ? ((E.style.width = te + "px"), (E.style.minWidth = ""))
                : ((E.style.width = ""), (E.style.minWidth = te + "px"));
            }
          }
          var Vt = new s.hs("tableColumnResizing");
          function wr({
            handleWidth: w = 5,
            cellMinWidth: x = 25,
            defaultCellMinWidth: E = 100,
            View: O = Qt,
            lastColumnResizable: k = !0,
          } = {}) {
            const z = new s.k_({
              key: Vt,
              state: {
                init(J, te) {
                  var q, le;
                  const ke =
                      (le = (q = z.spec) == null ? void 0 : q.props) == null
                        ? void 0
                        : le.nodeViews,
                    Oe = Q(te.schema).table.name;
                  return (
                    O && ke && (ke[Oe] = (He, $e) => new O(He, E, $e)),
                    new zn(-1, !1)
                  );
                },
                apply(J, te) {
                  return te.apply(J);
                },
              },
              props: {
                attributes: (J) => {
                  const te = Vt.getState(J);
                  return te && te.activeHandle > -1
                    ? { class: "resize-cursor" }
                    : {};
                },
                handleDOMEvents: {
                  mousemove: (J, te) => {
                    Sr(J, te, w, k);
                  },
                  mouseleave: (J) => {
                    Pr(J);
                  },
                  mousedown: (J, te) => {
                    Hn(J, te, x, E);
                  },
                },
                decorations: (J) => {
                  const te = Vt.getState(J);
                  if (te && te.activeHandle > -1) return cn(J, te.activeHandle);
                },
                nodeViews: {},
              },
            });
            return z;
          }
          var zn = class Ii {
            constructor(x, E) {
              (this.activeHandle = x), (this.dragging = E);
            }
            apply(x) {
              const E = this,
                O = x.getMeta(Vt);
              if (O && O.setHandle != null) return new Ii(O.setHandle, !1);
              if (O && O.setDragging !== void 0)
                return new Ii(E.activeHandle, O.setDragging);
              if (E.activeHandle > -1 && x.docChanged) {
                let k = x.mapping.map(E.activeHandle, -1);
                return he(x.doc.resolve(k)) || (k = -1), new Ii(k, E.dragging);
              }
              return E;
            }
          };
          function Sr(w, x, E, O) {
            const k = Vt.getState(w.state);
            if (k && !k.dragging) {
              const z = jn(x.target);
              let J = -1;
              if (z) {
                const { left: te, right: q } = z.getBoundingClientRect();
                x.clientX - te <= E
                  ? (J = Kn(w, x, "left", E))
                  : q - x.clientX <= E && (J = Kn(w, x, "right", E));
              }
              if (J != k.activeHandle) {
                if (!O && J !== -1) {
                  const te = w.state.doc.resolve(J),
                    q = te.node(-1),
                    le = I.get(q),
                    ke = te.start(-1);
                  if (
                    le.colCount(te.pos - ke) + te.nodeAfter.attrs.colspan - 1 ==
                    le.width - 1
                  )
                    return;
                }
                Tn(w, J);
              }
            }
          }
          function Pr(w) {
            const x = Vt.getState(w.state);
            x && x.activeHandle > -1 && !x.dragging && Tn(w, -1);
          }
          function Hn(w, x, E, O) {
            var k;
            const z =
                (k = w.dom.ownerDocument.defaultView) != null ? k : window,
              J = Vt.getState(w.state);
            if (!J || J.activeHandle == -1 || J.dragging) return !1;
            const te = w.state.doc.nodeAt(J.activeHandle),
              q = _r(w, J.activeHandle, te.attrs);
            w.dispatch(
              w.state.tr.setMeta(Vt, {
                setDragging: { startX: x.clientX, startWidth: q },
              }),
            );
            function le(Oe) {
              z.removeEventListener("mouseup", le),
                z.removeEventListener("mousemove", ke);
              const He = Vt.getState(w.state);
              He?.dragging &&
                (Vn(w, He.activeHandle, Cr(He.dragging, Oe, E)),
                w.dispatch(w.state.tr.setMeta(Vt, { setDragging: null })));
            }
            function ke(Oe) {
              if (!Oe.which) return le(Oe);
              const He = Vt.getState(w.state);
              if (He && He.dragging) {
                const $e = Cr(He.dragging, Oe, E);
                Un(w, He.activeHandle, $e, O);
              }
            }
            return (
              Un(w, J.activeHandle, q, O),
              z.addEventListener("mouseup", le),
              z.addEventListener("mousemove", ke),
              x.preventDefault(),
              !0
            );
          }
          function _r(w, x, { colspan: E, colwidth: O }) {
            const k = O && O[O.length - 1];
            if (k) return k;
            const z = w.domAtPos(x);
            let te = z.node.childNodes[z.offset].offsetWidth,
              q = E;
            if (O) for (let le = 0; le < E; le++) O[le] && ((te -= O[le]), q--);
            return te / q;
          }
          function jn(w) {
            for (; w && w.nodeName != "TD" && w.nodeName != "TH"; )
              w =
                w.classList && w.classList.contains("ProseMirror")
                  ? null
                  : w.parentNode;
            return w;
          }
          function Kn(w, x, E, O) {
            const k = E == "right" ? -O : O,
              z = w.posAtCoords({ left: x.clientX + k, top: x.clientY });
            if (!z) return -1;
            const { pos: J } = z,
              te = Ae(w.state.doc.resolve(J));
            if (!te) return -1;
            if (E == "right") return te.pos;
            const q = I.get(te.node(-1)),
              le = te.start(-1),
              ke = q.map.indexOf(te.pos - le);
            return ke % q.width == 0 ? -1 : le + q.map[ke - 1];
          }
          function Cr(w, x, E) {
            const O = x.clientX - w.startX;
            return Math.max(E, w.startWidth + O);
          }
          function Tn(w, x) {
            w.dispatch(w.state.tr.setMeta(Vt, { setHandle: x }));
          }
          function Vn(w, x, E) {
            const O = w.state.doc.resolve(x),
              k = O.node(-1),
              z = I.get(k),
              J = O.start(-1),
              te = z.colCount(O.pos - J) + O.nodeAfter.attrs.colspan - 1,
              q = w.state.tr;
            for (let le = 0; le < z.height; le++) {
              const ke = le * z.width + te;
              if (le && z.map[ke] == z.map[ke - z.width]) continue;
              const Oe = z.map[ke],
                He = k.nodeAt(Oe).attrs,
                $e = He.colspan == 1 ? 0 : te - z.colCount(Oe);
              if (He.colwidth && He.colwidth[$e] == E) continue;
              const it = He.colwidth ? He.colwidth.slice() : qt(He.colspan);
              (it[$e] = E),
                q.setNodeMarkup(J + Oe, null, { ...He, colwidth: it });
            }
            q.docChanged && w.dispatch(q);
          }
          function Un(w, x, E, O) {
            const k = w.state.doc.resolve(x),
              z = k.node(-1),
              J = k.start(-1),
              te = I.get(z).colCount(k.pos - J) + k.nodeAfter.attrs.colspan - 1;
            let q = w.domAtPos(k.start(-1)).node;
            for (; q && q.nodeName != "TABLE"; ) q = q.parentNode;
            q && Lt(z, q.firstChild, q, O, te, E);
          }
          function qt(w) {
            return Array(w).fill(0);
          }
          function cn(w, x) {
            var E;
            const O = [],
              k = w.doc.resolve(x),
              z = k.node(-1);
            if (!z) return M.zF.empty;
            const J = I.get(z),
              te = k.start(-1),
              q = J.colCount(k.pos - te) + k.nodeAfter.attrs.colspan - 1;
            for (let le = 0; le < J.height; le++) {
              const ke = q + le * J.width;
              if (
                (q == J.width - 1 || J.map[ke] != J.map[ke + 1]) &&
                (le == 0 || J.map[ke] != J.map[ke - J.width])
              ) {
                const Oe = J.map[ke],
                  He = te + Oe + z.nodeAt(Oe).nodeSize - 1,
                  $e = document.createElement("div");
                ($e.className = "column-resize-handle"),
                  (E = Vt.getState(w)) != null &&
                    E.dragging &&
                    O.push(
                      M.NZ.node(te + Oe, te + Oe + z.nodeAt(Oe).nodeSize, {
                        class: "column-resize-dragging",
                      }),
                    ),
                  O.push(M.NZ.widget(He, $e));
              }
            }
            return M.zF.create(w.doc, O);
          }
          function Er({ allowTableNodeSelection: w = !1 } = {}) {
            return new s.k_({
              key: ge,
              state: {
                init() {
                  return null;
                },
                apply(x, E) {
                  const O = x.getMeta(ge);
                  if (O != null) return O == -1 ? null : O;
                  if (E == null || !x.docChanged) return E;
                  const { deleted: k, pos: z } = x.mapping.mapResult(E);
                  return k ? null : z;
                },
              },
              props: {
                decorations: X,
                handleDOMEvents: { mousedown: Se },
                createSelectionBetween(x) {
                  return ge.getState(x.state) != null
                    ? x.state.selection
                    : null;
                },
                handleTripleClick: F,
                handleKeyDown: c,
                handlePaste: ee,
              },
              appendTransaction(x, E, O) {
                return Ce(O, rt(O, E), w);
              },
            });
          }
        },
        63734: (D, V, d) => {
          "use strict";
          d.d(V, {
            $L: () => ye,
            Ln: () => Pe,
            Um: () => be,
            Wg: () => he,
            X9: () => je,
            dL: () => an,
            jP: () => tt,
            n9: () => wt,
            oM: () => B,
            zy: () => ct,
          });
          var s = d(57053);
          const g = 65535,
            M = Math.pow(2, 16);
          function _(ce, b) {
            return ce + b * M;
          }
          function T(ce) {
            return ce & g;
          }
          function K(ce) {
            return (ce - (ce & g)) / M;
          }
          const U = 1,
            I = 2,
            G = 4,
            se = 8;
          class pe {
            constructor(b, y, P) {
              (this.pos = b), (this.delInfo = y), (this.recover = P);
            }
            get deleted() {
              return (this.delInfo & se) > 0;
            }
            get deletedBefore() {
              return (this.delInfo & (U | G)) > 0;
            }
            get deletedAfter() {
              return (this.delInfo & (I | G)) > 0;
            }
            get deletedAcross() {
              return (this.delInfo & G) > 0;
            }
          }
          class ve {
            constructor(b, y = !1) {
              if (
                ((this.ranges = b), (this.inverted = y), !b.length && ve.empty)
              )
                return ve.empty;
            }
            recover(b) {
              let y = 0,
                P = T(b);
              if (!this.inverted)
                for (let H = 0; H < P; H++)
                  y += this.ranges[H * 3 + 2] - this.ranges[H * 3 + 1];
              return this.ranges[P * 3] + y + K(b);
            }
            mapResult(b, y = 1) {
              return this._map(b, y, !1);
            }
            map(b, y = 1) {
              return this._map(b, y, !0);
            }
            _map(b, y, P) {
              let H = 0,
                oe = this.inverted ? 2 : 1,
                de = this.inverted ? 1 : 2;
              for (let _e = 0; _e < this.ranges.length; _e += 3) {
                let N = this.ranges[_e] - (this.inverted ? H : 0);
                if (N > b) break;
                let o = this.ranges[_e + oe],
                  c = this.ranges[_e + de],
                  m = N + o;
                if (b <= m) {
                  let S = o ? (b == N ? -1 : b == m ? 1 : y) : y,
                    A = N + H + (S < 0 ? 0 : c);
                  if (P) return A;
                  let F = b == (y < 0 ? N : m) ? null : _(_e / 3, b - N),
                    ee = b == N ? I : b == m ? U : G;
                  return (
                    (y < 0 ? b != N : b != m) && (ee |= se), new pe(A, ee, F)
                  );
                }
                H += c - o;
              }
              return P ? b + H : new pe(b + H, 0, null);
            }
            touches(b, y) {
              let P = 0,
                H = T(y),
                oe = this.inverted ? 2 : 1,
                de = this.inverted ? 1 : 2;
              for (let _e = 0; _e < this.ranges.length; _e += 3) {
                let N = this.ranges[_e] - (this.inverted ? P : 0);
                if (N > b) break;
                let o = this.ranges[_e + oe],
                  c = N + o;
                if (b <= c && _e == H * 3) return !0;
                P += this.ranges[_e + de] - o;
              }
              return !1;
            }
            forEach(b) {
              let y = this.inverted ? 2 : 1,
                P = this.inverted ? 1 : 2;
              for (let H = 0, oe = 0; H < this.ranges.length; H += 3) {
                let de = this.ranges[H],
                  _e = de - (this.inverted ? oe : 0),
                  N = de + (this.inverted ? 0 : oe),
                  o = this.ranges[H + y],
                  c = this.ranges[H + P];
                b(_e, _e + o, N, N + c), (oe += c - o);
              }
            }
            invert() {
              return new ve(this.ranges, !this.inverted);
            }
            toString() {
              return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
            }
            static offset(b) {
              return b == 0 ? ve.empty : new ve(b < 0 ? [0, -b, 0] : [0, 0, b]);
            }
          }
          ve.empty = new ve([]);
          class je {
            constructor(b = [], y, P = 0, H = b.length) {
              (this.maps = b),
                (this.mirror = y),
                (this.from = P),
                (this.to = H);
            }
            slice(b = 0, y = this.maps.length) {
              return new je(this.maps, this.mirror, b, y);
            }
            copy() {
              return new je(
                this.maps.slice(),
                this.mirror && this.mirror.slice(),
                this.from,
                this.to,
              );
            }
            appendMap(b, y) {
              (this.to = this.maps.push(b)),
                y != null && this.setMirror(this.maps.length - 1, y);
            }
            appendMapping(b) {
              for (let y = 0, P = this.maps.length; y < b.maps.length; y++) {
                let H = b.getMirror(y);
                this.appendMap(b.maps[y], H != null && H < y ? P + H : void 0);
              }
            }
            getMirror(b) {
              if (this.mirror) {
                for (let y = 0; y < this.mirror.length; y++)
                  if (this.mirror[y] == b)
                    return this.mirror[y + (y % 2 ? -1 : 1)];
              }
            }
            setMirror(b, y) {
              this.mirror || (this.mirror = []), this.mirror.push(b, y);
            }
            appendMappingInverted(b) {
              for (
                let y = b.maps.length - 1, P = this.maps.length + b.maps.length;
                y >= 0;
                y--
              ) {
                let H = b.getMirror(y);
                this.appendMap(
                  b.maps[y].invert(),
                  H != null && H > y ? P - H - 1 : void 0,
                );
              }
            }
            invert() {
              let b = new je();
              return b.appendMappingInverted(this), b;
            }
            map(b, y = 1) {
              if (this.mirror) return this._map(b, y, !0);
              for (let P = this.from; P < this.to; P++)
                b = this.maps[P].map(b, y);
              return b;
            }
            mapResult(b, y = 1) {
              return this._map(b, y, !1);
            }
            _map(b, y, P) {
              let H = 0;
              for (let oe = this.from; oe < this.to; oe++) {
                let de = this.maps[oe],
                  _e = de.mapResult(b, y);
                if (_e.recover != null) {
                  let N = this.getMirror(oe);
                  if (N != null && N > oe && N < this.to) {
                    (oe = N), (b = this.maps[N].recover(_e.recover));
                    continue;
                  }
                }
                (H |= _e.delInfo), (b = _e.pos);
              }
              return P ? b : new pe(b, H, null);
            }
          }
          const We = Object.create(null);
          class Me {
            getMap() {
              return ve.empty;
            }
            merge(b) {
              return null;
            }
            static fromJSON(b, y) {
              if (!y || !y.stepType)
                throw new RangeError("Invalid input for Step.fromJSON");
              let P = We[y.stepType];
              if (!P)
                throw new RangeError(`No step type ${y.stepType} defined`);
              return P.fromJSON(b, y);
            }
            static jsonID(b, y) {
              if (b in We)
                throw new RangeError("Duplicate use of step JSON ID " + b);
              return (We[b] = y), (y.prototype.jsonID = b), y;
            }
          }
          class Q {
            constructor(b, y) {
              (this.doc = b), (this.failed = y);
            }
            static ok(b) {
              return new Q(b, null);
            }
            static fail(b) {
              return new Q(null, b);
            }
            static fromReplace(b, y, P, H) {
              try {
                return Q.ok(b.replace(y, P, H));
              } catch (oe) {
                if (oe instanceof s.vI) return Q.fail(oe.message);
                throw oe;
              }
            }
          }
          function ge(ce, b, y) {
            let P = [];
            for (let H = 0; H < ce.childCount; H++) {
              let oe = ce.child(H);
              oe.content.size && (oe = oe.copy(ge(oe.content, b, oe))),
                oe.isInline && (oe = b(oe, y, H)),
                P.push(oe);
            }
            return s.FK.fromArray(P);
          }
          class Ae extends Me {
            constructor(b, y, P) {
              super(), (this.from = b), (this.to = y), (this.mark = P);
            }
            apply(b) {
              let y = b.slice(this.from, this.to),
                P = b.resolve(this.from),
                H = P.node(P.sharedDepth(this.to)),
                oe = new s.Ji(
                  ge(
                    y.content,
                    (de, _e) =>
                      !de.isAtom || !_e.type.allowsMarkType(this.mark.type)
                        ? de
                        : de.mark(this.mark.addToSet(de.marks)),
                    H,
                  ),
                  y.openStart,
                  y.openEnd,
                );
              return Q.fromReplace(b, this.from, this.to, oe);
            }
            invert() {
              return new ae(this.from, this.to, this.mark);
            }
            map(b) {
              let y = b.mapResult(this.from, 1),
                P = b.mapResult(this.to, -1);
              return (y.deleted && P.deleted) || y.pos >= P.pos
                ? null
                : new Ae(y.pos, P.pos, this.mark);
            }
            merge(b) {
              return b instanceof Ae &&
                b.mark.eq(this.mark) &&
                this.from <= b.to &&
                this.to >= b.from
                ? new Ae(
                    Math.min(this.from, b.from),
                    Math.max(this.to, b.to),
                    this.mark,
                  )
                : null;
            }
            toJSON() {
              return {
                stepType: "addMark",
                mark: this.mark.toJSON(),
                from: this.from,
                to: this.to,
              };
            }
            static fromJSON(b, y) {
              if (typeof y.from != "number" || typeof y.to != "number")
                throw new RangeError("Invalid input for AddMarkStep.fromJSON");
              return new Ae(y.from, y.to, b.markFromJSON(y.mark));
            }
          }
          Me.jsonID("addMark", Ae);
          class ae extends Me {
            constructor(b, y, P) {
              super(), (this.from = b), (this.to = y), (this.mark = P);
            }
            apply(b) {
              let y = b.slice(this.from, this.to),
                P = new s.Ji(
                  ge(
                    y.content,
                    (H) => H.mark(this.mark.removeFromSet(H.marks)),
                    b,
                  ),
                  y.openStart,
                  y.openEnd,
                );
              return Q.fromReplace(b, this.from, this.to, P);
            }
            invert() {
              return new Ae(this.from, this.to, this.mark);
            }
            map(b) {
              let y = b.mapResult(this.from, 1),
                P = b.mapResult(this.to, -1);
              return (y.deleted && P.deleted) || y.pos >= P.pos
                ? null
                : new ae(y.pos, P.pos, this.mark);
            }
            merge(b) {
              return b instanceof ae &&
                b.mark.eq(this.mark) &&
                this.from <= b.to &&
                this.to >= b.from
                ? new ae(
                    Math.min(this.from, b.from),
                    Math.max(this.to, b.to),
                    this.mark,
                  )
                : null;
            }
            toJSON() {
              return {
                stepType: "removeMark",
                mark: this.mark.toJSON(),
                from: this.from,
                to: this.to,
              };
            }
            static fromJSON(b, y) {
              if (typeof y.from != "number" || typeof y.to != "number")
                throw new RangeError(
                  "Invalid input for RemoveMarkStep.fromJSON",
                );
              return new ae(y.from, y.to, b.markFromJSON(y.mark));
            }
          }
          Me.jsonID("removeMark", ae);
          class me extends Me {
            constructor(b, y) {
              super(), (this.pos = b), (this.mark = y);
            }
            apply(b) {
              let y = b.nodeAt(this.pos);
              if (!y) return Q.fail("No node at mark step's position");
              let P = y.type.create(y.attrs, null, this.mark.addToSet(y.marks));
              return Q.fromReplace(
                b,
                this.pos,
                this.pos + 1,
                new s.Ji(s.FK.from(P), 0, y.isLeaf ? 0 : 1),
              );
            }
            invert(b) {
              let y = b.nodeAt(this.pos);
              if (y) {
                let P = this.mark.addToSet(y.marks);
                if (P.length == y.marks.length) {
                  for (let H = 0; H < y.marks.length; H++)
                    if (!y.marks[H].isInSet(P))
                      return new me(this.pos, y.marks[H]);
                  return new me(this.pos, this.mark);
                }
              }
              return new fe(this.pos, this.mark);
            }
            map(b) {
              let y = b.mapResult(this.pos, 1);
              return y.deletedAfter ? null : new me(y.pos, this.mark);
            }
            toJSON() {
              return {
                stepType: "addNodeMark",
                pos: this.pos,
                mark: this.mark.toJSON(),
              };
            }
            static fromJSON(b, y) {
              if (typeof y.pos != "number")
                throw new RangeError(
                  "Invalid input for AddNodeMarkStep.fromJSON",
                );
              return new me(y.pos, b.markFromJSON(y.mark));
            }
          }
          Me.jsonID("addNodeMark", me);
          class fe extends Me {
            constructor(b, y) {
              super(), (this.pos = b), (this.mark = y);
            }
            apply(b) {
              let y = b.nodeAt(this.pos);
              if (!y) return Q.fail("No node at mark step's position");
              let P = y.type.create(
                y.attrs,
                null,
                this.mark.removeFromSet(y.marks),
              );
              return Q.fromReplace(
                b,
                this.pos,
                this.pos + 1,
                new s.Ji(s.FK.from(P), 0, y.isLeaf ? 0 : 1),
              );
            }
            invert(b) {
              let y = b.nodeAt(this.pos);
              return !y || !this.mark.isInSet(y.marks)
                ? this
                : new me(this.pos, this.mark);
            }
            map(b) {
              let y = b.mapResult(this.pos, 1);
              return y.deletedAfter ? null : new fe(y.pos, this.mark);
            }
            toJSON() {
              return {
                stepType: "removeNodeMark",
                pos: this.pos,
                mark: this.mark.toJSON(),
              };
            }
            static fromJSON(b, y) {
              if (typeof y.pos != "number")
                throw new RangeError(
                  "Invalid input for RemoveNodeMarkStep.fromJSON",
                );
              return new fe(y.pos, b.markFromJSON(y.mark));
            }
          }
          Me.jsonID("removeNodeMark", fe);
          class Pe extends Me {
            constructor(b, y, P, H = !1) {
              super(),
                (this.from = b),
                (this.to = y),
                (this.slice = P),
                (this.structure = H);
            }
            apply(b) {
              return this.structure && Le(b, this.from, this.to)
                ? Q.fail("Structure replace would overwrite content")
                : Q.fromReplace(b, this.from, this.to, this.slice);
            }
            getMap() {
              return new ve([this.from, this.to - this.from, this.slice.size]);
            }
            invert(b) {
              return new Pe(
                this.from,
                this.from + this.slice.size,
                b.slice(this.from, this.to),
              );
            }
            map(b) {
              let y = b.mapResult(this.from, 1),
                P = b.mapResult(this.to, -1);
              return y.deletedAcross && P.deletedAcross
                ? null
                : new Pe(y.pos, Math.max(y.pos, P.pos), this.slice);
            }
            merge(b) {
              if (!(b instanceof Pe) || b.structure || this.structure)
                return null;
              if (
                this.from + this.slice.size == b.from &&
                !this.slice.openEnd &&
                !b.slice.openStart
              ) {
                let y =
                  this.slice.size + b.slice.size == 0
                    ? s.Ji.empty
                    : new s.Ji(
                        this.slice.content.append(b.slice.content),
                        this.slice.openStart,
                        b.slice.openEnd,
                      );
                return new Pe(
                  this.from,
                  this.to + (b.to - b.from),
                  y,
                  this.structure,
                );
              } else if (
                b.to == this.from &&
                !this.slice.openStart &&
                !b.slice.openEnd
              ) {
                let y =
                  this.slice.size + b.slice.size == 0
                    ? s.Ji.empty
                    : new s.Ji(
                        b.slice.content.append(this.slice.content),
                        b.slice.openStart,
                        this.slice.openEnd,
                      );
                return new Pe(b.from, this.to, y, this.structure);
              } else return null;
            }
            toJSON() {
              let b = { stepType: "replace", from: this.from, to: this.to };
              return (
                this.slice.size && (b.slice = this.slice.toJSON()),
                this.structure && (b.structure = !0),
                b
              );
            }
            static fromJSON(b, y) {
              if (typeof y.from != "number" || typeof y.to != "number")
                throw new RangeError("Invalid input for ReplaceStep.fromJSON");
              return new Pe(
                y.from,
                y.to,
                s.Ji.fromJSON(b, y.slice),
                !!y.structure,
              );
            }
          }
          Me.jsonID("replace", Pe);
          class he extends Me {
            constructor(b, y, P, H, oe, de, _e = !1) {
              super(),
                (this.from = b),
                (this.to = y),
                (this.gapFrom = P),
                (this.gapTo = H),
                (this.slice = oe),
                (this.insert = de),
                (this.structure = _e);
            }
            apply(b) {
              if (
                this.structure &&
                (Le(b, this.from, this.gapFrom) || Le(b, this.gapTo, this.to))
              )
                return Q.fail("Structure gap-replace would overwrite content");
              let y = b.slice(this.gapFrom, this.gapTo);
              if (y.openStart || y.openEnd)
                return Q.fail("Gap is not a flat range");
              let P = this.slice.insertAt(this.insert, y.content);
              return P
                ? Q.fromReplace(b, this.from, this.to, P)
                : Q.fail("Content does not fit in gap");
            }
            getMap() {
              return new ve([
                this.from,
                this.gapFrom - this.from,
                this.insert,
                this.gapTo,
                this.to - this.gapTo,
                this.slice.size - this.insert,
              ]);
            }
            invert(b) {
              let y = this.gapTo - this.gapFrom;
              return new he(
                this.from,
                this.from + this.slice.size + y,
                this.from + this.insert,
                this.from + this.insert + y,
                b
                  .slice(this.from, this.to)
                  .removeBetween(
                    this.gapFrom - this.from,
                    this.gapTo - this.from,
                  ),
                this.gapFrom - this.from,
                this.structure,
              );
            }
            map(b) {
              let y = b.mapResult(this.from, 1),
                P = b.mapResult(this.to, -1),
                H = this.from == this.gapFrom ? y.pos : b.map(this.gapFrom, -1),
                oe = this.to == this.gapTo ? P.pos : b.map(this.gapTo, 1);
              return (y.deletedAcross && P.deletedAcross) ||
                H < y.pos ||
                oe > P.pos
                ? null
                : new he(
                    y.pos,
                    P.pos,
                    H,
                    oe,
                    this.slice,
                    this.insert,
                    this.structure,
                  );
            }
            toJSON() {
              let b = {
                stepType: "replaceAround",
                from: this.from,
                to: this.to,
                gapFrom: this.gapFrom,
                gapTo: this.gapTo,
                insert: this.insert,
              };
              return (
                this.slice.size && (b.slice = this.slice.toJSON()),
                this.structure && (b.structure = !0),
                b
              );
            }
            static fromJSON(b, y) {
              if (
                typeof y.from != "number" ||
                typeof y.to != "number" ||
                typeof y.gapFrom != "number" ||
                typeof y.gapTo != "number" ||
                typeof y.insert != "number"
              )
                throw new RangeError(
                  "Invalid input for ReplaceAroundStep.fromJSON",
                );
              return new he(
                y.from,
                y.to,
                y.gapFrom,
                y.gapTo,
                s.Ji.fromJSON(b, y.slice),
                y.insert,
                !!y.structure,
              );
            }
          }
          Me.jsonID("replaceAround", he);
          function Le(ce, b, y) {
            let P = ce.resolve(b),
              H = y - b,
              oe = P.depth;
            for (
              ;
              H > 0 && oe > 0 && P.indexAfter(oe) == P.node(oe).childCount;
            )
              oe--, H--;
            if (H > 0) {
              let de = P.node(oe).maybeChild(P.indexAfter(oe));
              for (; H > 0; ) {
                if (!de || de.isLeaf) return !0;
                (de = de.firstChild), H--;
              }
            }
            return !1;
          }
          function Je(ce, b, y, P) {
            let H = [],
              oe = [],
              de,
              _e;
            ce.doc.nodesBetween(b, y, (N, o, c) => {
              if (!N.isInline) return;
              let m = N.marks;
              if (!P.isInSet(m) && c.type.allowsMarkType(P.type)) {
                let S = Math.max(o, b),
                  A = Math.min(o + N.nodeSize, y),
                  F = P.addToSet(m);
                for (let ee = 0; ee < m.length; ee++)
                  m[ee].isInSet(F) ||
                    (de && de.to == S && de.mark.eq(m[ee])
                      ? (de.to = A)
                      : H.push((de = new ae(S, A, m[ee]))));
                _e && _e.to == S
                  ? (_e.to = A)
                  : oe.push((_e = new Ae(S, A, P)));
              }
            }),
              H.forEach((N) => ce.step(N)),
              oe.forEach((N) => ce.step(N));
          }
          function Ye(ce, b, y, P) {
            let H = [],
              oe = 0;
            ce.doc.nodesBetween(b, y, (de, _e) => {
              if (!de.isInline) return;
              oe++;
              let N = null;
              if (P instanceof s.sX) {
                let o = de.marks,
                  c;
                for (; (c = P.isInSet(o)); )
                  (N || (N = [])).push(c), (o = c.removeFromSet(o));
              } else P ? P.isInSet(de.marks) && (N = [P]) : (N = de.marks);
              if (N && N.length) {
                let o = Math.min(_e + de.nodeSize, y);
                for (let c = 0; c < N.length; c++) {
                  let m = N[c],
                    S;
                  for (let A = 0; A < H.length; A++) {
                    let F = H[A];
                    F.step == oe - 1 && m.eq(H[A].style) && (S = F);
                  }
                  S
                    ? ((S.to = o), (S.step = oe))
                    : H.push({
                        style: m,
                        from: Math.max(_e, b),
                        to: o,
                        step: oe,
                      });
                }
              }
            }),
              H.forEach((de) => ce.step(new ae(de.from, de.to, de.style)));
          }
          function nt(ce, b, y, P = y.contentMatch, H = !0) {
            let oe = ce.doc.nodeAt(b),
              de = [],
              _e = b + 1;
            for (let N = 0; N < oe.childCount; N++) {
              let o = oe.child(N),
                c = _e + o.nodeSize,
                m = P.matchType(o.type);
              if (!m) de.push(new Pe(_e, c, s.Ji.empty));
              else {
                P = m;
                for (let S = 0; S < o.marks.length; S++)
                  y.allowsMarkType(o.marks[S].type) ||
                    ce.step(new ae(_e, c, o.marks[S]));
                if (H && o.isText && y.whitespace != "pre") {
                  let S,
                    A = /\r?\n|\r/g,
                    F;
                  for (; (S = A.exec(o.text)); )
                    F ||
                      (F = new s.Ji(
                        s.FK.from(y.schema.text(" ", y.allowedMarks(o.marks))),
                        0,
                        0,
                      )),
                      de.push(
                        new Pe(_e + S.index, _e + S.index + S[0].length, F),
                      );
                }
              }
              _e = c;
            }
            if (!P.validEnd) {
              let N = P.fillBefore(s.FK.empty, !0);
              ce.replace(_e, _e, new s.Ji(N, 0, 0));
            }
            for (let N = de.length - 1; N >= 0; N--) ce.step(de[N]);
          }
          function Xe(ce, b, y) {
            return (
              (b == 0 || ce.canReplace(b, ce.childCount)) &&
              (y == ce.childCount || ce.canReplace(0, y))
            );
          }
          function tt(ce) {
            let y = ce.parent.content.cutByIndex(ce.startIndex, ce.endIndex);
            for (let P = ce.depth; ; --P) {
              let H = ce.$from.node(P),
                oe = ce.$from.index(P),
                de = ce.$to.indexAfter(P);
              if (P < ce.depth && H.canReplace(oe, de, y)) return P;
              if (P == 0 || H.type.spec.isolating || !Xe(H, oe, de)) break;
            }
            return null;
          }
          function Ne(ce, b, y) {
            let { $from: P, $to: H, depth: oe } = b,
              de = P.before(oe + 1),
              _e = H.after(oe + 1),
              N = de,
              o = _e,
              c = s.FK.empty,
              m = 0;
            for (let F = oe, ee = !1; F > y; F--)
              ee || P.index(F) > 0
                ? ((ee = !0), (c = s.FK.from(P.node(F).copy(c))), m++)
                : N--;
            let S = s.FK.empty,
              A = 0;
            for (let F = oe, ee = !1; F > y; F--)
              ee || H.after(F + 1) < H.end(F)
                ? ((ee = !0), (S = s.FK.from(H.node(F).copy(S))), A++)
                : o++;
            ce.step(
              new he(N, o, de, _e, new s.Ji(c.append(S), m, A), c.size - m, !0),
            );
          }
          function B(ce, b, y = null, P = ce) {
            let H = $(ce, b),
              oe = H && X(P, b);
            return oe
              ? H.map(ne).concat({ type: b, attrs: y }).concat(oe.map(ne))
              : null;
          }
          function ne(ce) {
            return { type: ce, attrs: null };
          }
          function $(ce, b) {
            let { parent: y, startIndex: P, endIndex: H } = ce,
              oe = y.contentMatchAt(P).findWrapping(b);
            if (!oe) return null;
            let de = oe.length ? oe[0] : b;
            return y.canReplaceWith(P, H, de) ? oe : null;
          }
          function X(ce, b) {
            let { parent: y, startIndex: P, endIndex: H } = ce,
              oe = y.child(P),
              de = b.contentMatch.findWrapping(oe.type);
            if (!de) return null;
            let N = (de.length ? de[de.length - 1] : b).contentMatch;
            for (let o = P; N && o < H; o++) N = N.matchType(y.child(o).type);
            return !N || !N.validEnd ? null : de;
          }
          function ie(ce, b, y) {
            let P = s.FK.empty;
            for (let de = y.length - 1; de >= 0; de--) {
              if (P.size) {
                let _e = y[de].type.contentMatch.matchFragment(P);
                if (!_e || !_e.validEnd)
                  throw new RangeError(
                    "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                  );
              }
              P = s.FK.from(y[de].type.create(y[de].attrs, P));
            }
            let H = b.start,
              oe = b.end;
            ce.step(new he(H, oe, H, oe, new s.Ji(P, 0, 0), y.length, !0));
          }
          function xe(ce, b, y, P, H) {
            if (!P.isTextblock)
              throw new RangeError(
                "Type given to setBlockType should be a textblock",
              );
            let oe = ce.steps.length;
            ce.doc.nodesBetween(b, y, (de, _e) => {
              if (
                de.isTextblock &&
                !de.hasMarkup(P, H) &&
                Ee(ce.doc, ce.mapping.slice(oe).map(_e), P)
              ) {
                let N = null;
                if (P.schema.linebreakReplacement) {
                  let S = P.whitespace == "pre",
                    A = !!P.contentMatch.matchType(
                      P.schema.linebreakReplacement,
                    );
                  S && !A ? (N = !1) : !S && A && (N = !0);
                }
                N === !1 && Ve(ce, de, _e, oe),
                  nt(
                    ce,
                    ce.mapping.slice(oe).map(_e, 1),
                    P,
                    void 0,
                    N === null,
                  );
                let o = ce.mapping.slice(oe),
                  c = o.map(_e, 1),
                  m = o.map(_e + de.nodeSize, 1);
                return (
                  ce.step(
                    new he(
                      c,
                      m,
                      c + 1,
                      m - 1,
                      new s.Ji(s.FK.from(P.create(H, null, de.marks)), 0, 0),
                      1,
                      !0,
                    ),
                  ),
                  N === !0 && Ce(ce, de, _e, oe),
                  !1
                );
              }
            });
          }
          function Ce(ce, b, y, P) {
            b.forEach((H, oe) => {
              if (H.isText) {
                let de,
                  _e = /\r?\n|\r/g;
                for (; (de = _e.exec(H.text)); ) {
                  let N = ce.mapping.slice(P).map(y + 1 + oe + de.index);
                  ce.replaceWith(
                    N,
                    N + 1,
                    b.type.schema.linebreakReplacement.create(),
                  );
                }
              }
            });
          }
          function Ve(ce, b, y, P) {
            b.forEach((H, oe) => {
              if (H.type == H.type.schema.linebreakReplacement) {
                let de = ce.mapping.slice(P).map(y + 1 + oe);
                ce.replaceWith(
                  de,
                  de + 1,
                  b.type.schema.text(`
`),
                );
              }
            });
          }
          function Ee(ce, b, y) {
            let P = ce.resolve(b),
              H = P.index();
            return P.parent.canReplaceWith(H, H + 1, y);
          }
          function rt(ce, b, y, P, H) {
            let oe = ce.doc.nodeAt(b);
            if (!oe) throw new RangeError("No node at given position");
            y || (y = oe.type);
            let de = y.create(P, null, H || oe.marks);
            if (oe.isLeaf) return ce.replaceWith(b, b + oe.nodeSize, de);
            if (!y.validContent(oe.content))
              throw new RangeError("Invalid content for node type " + y.name);
            ce.step(
              new he(
                b,
                b + oe.nodeSize,
                b + 1,
                b + oe.nodeSize - 1,
                new s.Ji(s.FK.from(de), 0, 0),
                1,
                !0,
              ),
            );
          }
          function ct(ce, b, y = 1, P) {
            let H = ce.resolve(b),
              oe = H.depth - y,
              de = (P && P[P.length - 1]) || H.parent;
            if (
              oe < 0 ||
              H.parent.type.spec.isolating ||
              !H.parent.canReplace(H.index(), H.parent.childCount) ||
              !de.type.validContent(
                H.parent.content.cutByIndex(H.index(), H.parent.childCount),
              )
            )
              return !1;
            for (let o = H.depth - 1, c = y - 2; o > oe; o--, c--) {
              let m = H.node(o),
                S = H.index(o);
              if (m.type.spec.isolating) return !1;
              let A = m.content.cutByIndex(S, m.childCount),
                F = P && P[c + 1];
              F && (A = A.replaceChild(0, F.type.create(F.attrs)));
              let ee = (P && P[c]) || m;
              if (
                !m.canReplace(S + 1, m.childCount) ||
                !ee.type.validContent(A)
              )
                return !1;
            }
            let _e = H.indexAfter(oe),
              N = P && P[0];
            return H.node(oe).canReplaceWith(
              _e,
              _e,
              N ? N.type : H.node(oe + 1).type,
            );
          }
          function vt(ce, b, y = 1, P) {
            let H = ce.doc.resolve(b),
              oe = s.FK.empty,
              de = s.FK.empty;
            for (
              let _e = H.depth, N = H.depth - y, o = y - 1;
              _e > N;
              _e--, o--
            ) {
              oe = s.FK.from(H.node(_e).copy(oe));
              let c = P && P[o];
              de = s.FK.from(
                c ? c.type.create(c.attrs, de) : H.node(_e).copy(de),
              );
            }
            ce.step(new Pe(b, b, new s.Ji(oe.append(de), y, y), !0));
          }
          function wt(ce, b) {
            let y = ce.resolve(b),
              P = y.index();
            return (
              yt(y.nodeBefore, y.nodeAfter) && y.parent.canReplace(P, P + 1)
            );
          }
          function yt(ce, b) {
            return !!(ce && b && !ce.isLeaf && ce.canAppend(b));
          }
          function Ct(ce, b, y = -1) {
            let P = ce.resolve(b);
            for (let H = P.depth; ; H--) {
              let oe,
                de,
                _e = P.index(H);
              if (
                (H == P.depth
                  ? ((oe = P.nodeBefore), (de = P.nodeAfter))
                  : y > 0
                    ? ((oe = P.node(H + 1)),
                      _e++,
                      (de = P.node(H).maybeChild(_e)))
                    : ((oe = P.node(H).maybeChild(_e - 1)),
                      (de = P.node(H + 1))),
                oe &&
                  !oe.isTextblock &&
                  yt(oe, de) &&
                  P.node(H).canReplace(_e, _e + 1))
              )
                return b;
              if (H == 0) break;
              b = y < 0 ? P.before(H) : P.after(H);
            }
          }
          function Rt(ce, b, y) {
            let P = new Pe(b - y, b + y, s.Ji.empty, !0);
            ce.step(P);
          }
          function Bt(ce, b, y) {
            let P = ce.resolve(b);
            if (P.parent.canReplaceWith(P.index(), P.index(), y)) return b;
            if (P.parentOffset == 0)
              for (let H = P.depth - 1; H >= 0; H--) {
                let oe = P.index(H);
                if (P.node(H).canReplaceWith(oe, oe, y)) return P.before(H + 1);
                if (oe > 0) return null;
              }
            if (P.parentOffset == P.parent.content.size)
              for (let H = P.depth - 1; H >= 0; H--) {
                let oe = P.indexAfter(H);
                if (P.node(H).canReplaceWith(oe, oe, y)) return P.after(H + 1);
                if (oe < P.node(H).childCount) return null;
              }
            return null;
          }
          function be(ce, b, y) {
            let P = ce.resolve(b);
            if (!y.content.size) return b;
            let H = y.content;
            for (let oe = 0; oe < y.openStart; oe++) H = H.firstChild.content;
            for (let oe = 1; oe <= (y.openStart == 0 && y.size ? 2 : 1); oe++)
              for (let de = P.depth; de >= 0; de--) {
                let _e =
                    de == P.depth
                      ? 0
                      : P.pos <= (P.start(de + 1) + P.end(de + 1)) / 2
                        ? -1
                        : 1,
                  N = P.index(de) + (_e > 0 ? 1 : 0),
                  o = P.node(de),
                  c = !1;
                if (oe == 1) c = o.canReplace(N, N, H);
                else {
                  let m = o.contentMatchAt(N).findWrapping(H.firstChild.type);
                  c = m && o.canReplaceWith(N, N, m[0]);
                }
                if (c)
                  return _e == 0
                    ? P.pos
                    : _e < 0
                      ? P.before(de + 1)
                      : P.after(de + 1);
              }
            return null;
          }
          function ye(ce, b, y = b, P = s.Ji.empty) {
            if (b == y && !P.size) return null;
            let H = ce.resolve(b),
              oe = ce.resolve(y);
            return Te(H, oe, P) ? new Pe(b, y, P) : new Re(H, oe, P).fit();
          }
          function Te(ce, b, y) {
            return (
              !y.openStart &&
              !y.openEnd &&
              ce.start() == b.start() &&
              ce.parent.canReplace(ce.index(), b.index(), y.content)
            );
          }
          class Re {
            constructor(b, y, P) {
              (this.$from = b),
                (this.$to = y),
                (this.unplaced = P),
                (this.frontier = []),
                (this.placed = s.FK.empty);
              for (let H = 0; H <= b.depth; H++) {
                let oe = b.node(H);
                this.frontier.push({
                  type: oe.type,
                  match: oe.contentMatchAt(b.indexAfter(H)),
                });
              }
              for (let H = b.depth; H > 0; H--)
                this.placed = s.FK.from(b.node(H).copy(this.placed));
            }
            get depth() {
              return this.frontier.length - 1;
            }
            fit() {
              for (; this.unplaced.size; ) {
                let o = this.findFittable();
                o ? this.placeNodes(o) : this.openMore() || this.dropNode();
              }
              let b = this.mustMoveInline(),
                y = this.placed.size - this.depth - this.$from.depth,
                P = this.$from,
                H = this.close(b < 0 ? this.$to : P.doc.resolve(b));
              if (!H) return null;
              let oe = this.placed,
                de = P.depth,
                _e = H.depth;
              for (; de && _e && oe.childCount == 1; )
                (oe = oe.firstChild.content), de--, _e--;
              let N = new s.Ji(oe, de, _e);
              return b > -1
                ? new he(P.pos, b, this.$to.pos, this.$to.end(), N, y)
                : N.size || P.pos != this.$to.pos
                  ? new Pe(P.pos, H.pos, N)
                  : null;
            }
            findFittable() {
              let b = this.unplaced.openStart;
              for (
                let y = this.unplaced.content, P = 0, H = this.unplaced.openEnd;
                P < b;
                P++
              ) {
                let oe = y.firstChild;
                if (
                  (y.childCount > 1 && (H = 0),
                  oe.type.spec.isolating && H <= P)
                ) {
                  b = P;
                  break;
                }
                y = oe.content;
              }
              for (let y = 1; y <= 2; y++)
                for (
                  let P = y == 1 ? b : this.unplaced.openStart;
                  P >= 0;
                  P--
                ) {
                  let H,
                    oe = null;
                  P
                    ? ((oe = ze(this.unplaced.content, P - 1).firstChild),
                      (H = oe.content))
                    : (H = this.unplaced.content);
                  let de = H.firstChild;
                  for (let _e = this.depth; _e >= 0; _e--) {
                    let { type: N, match: o } = this.frontier[_e],
                      c,
                      m = null;
                    if (
                      y == 1 &&
                      (de
                        ? o.matchType(de.type) ||
                          (m = o.fillBefore(s.FK.from(de), !1))
                        : oe && N.compatibleContent(oe.type))
                    )
                      return {
                        sliceDepth: P,
                        frontierDepth: _e,
                        parent: oe,
                        inject: m,
                      };
                    if (y == 2 && de && (c = o.findWrapping(de.type)))
                      return {
                        sliceDepth: P,
                        frontierDepth: _e,
                        parent: oe,
                        wrap: c,
                      };
                    if (oe && o.matchType(oe.type)) break;
                  }
                }
            }
            openMore() {
              let { content: b, openStart: y, openEnd: P } = this.unplaced,
                H = ze(b, y);
              return !H.childCount || H.firstChild.isLeaf
                ? !1
                : ((this.unplaced = new s.Ji(
                    b,
                    y + 1,
                    Math.max(P, H.size + y >= b.size - P ? y + 1 : 0),
                  )),
                  !0);
            }
            dropNode() {
              let { content: b, openStart: y, openEnd: P } = this.unplaced,
                H = ze(b, y);
              if (H.childCount <= 1 && y > 0) {
                let oe = b.size - y <= y + H.size;
                this.unplaced = new s.Ji(
                  we(b, y - 1, 1),
                  y - 1,
                  oe ? y - 1 : P,
                );
              } else this.unplaced = new s.Ji(we(b, y, 1), y, P);
            }
            placeNodes({
              sliceDepth: b,
              frontierDepth: y,
              parent: P,
              inject: H,
              wrap: oe,
            }) {
              for (; this.depth > y; ) this.closeFrontierNode();
              if (oe)
                for (let ee = 0; ee < oe.length; ee++)
                  this.openFrontierNode(oe[ee]);
              let de = this.unplaced,
                _e = P ? P.content : de.content,
                N = de.openStart - b,
                o = 0,
                c = [],
                { match: m, type: S } = this.frontier[y];
              if (H) {
                for (let ee = 0; ee < H.childCount; ee++) c.push(H.child(ee));
                m = m.matchFragment(H);
              }
              let A = _e.size + b - (de.content.size - de.openEnd);
              for (; o < _e.childCount; ) {
                let ee = _e.child(o),
                  Se = m.matchType(ee.type);
                if (!Se) break;
                o++,
                  (o > 1 || N == 0 || ee.content.size) &&
                    ((m = Se),
                    c.push(
                      qe(
                        ee.mark(S.allowedMarks(ee.marks)),
                        o == 1 ? N : 0,
                        o == _e.childCount ? A : -1,
                      ),
                    ));
              }
              let F = o == _e.childCount;
              F || (A = -1),
                (this.placed = Be(this.placed, y, s.FK.from(c))),
                (this.frontier[y].match = m),
                F &&
                  A < 0 &&
                  P &&
                  P.type == this.frontier[this.depth].type &&
                  this.frontier.length > 1 &&
                  this.closeFrontierNode();
              for (let ee = 0, Se = _e; ee < A; ee++) {
                let et = Se.lastChild;
                this.frontier.push({
                  type: et.type,
                  match: et.contentMatchAt(et.childCount),
                }),
                  (Se = et.content);
              }
              this.unplaced = F
                ? b == 0
                  ? s.Ji.empty
                  : new s.Ji(
                      we(de.content, b - 1, 1),
                      b - 1,
                      A < 0 ? de.openEnd : b - 1,
                    )
                : new s.Ji(we(de.content, b, o), de.openStart, de.openEnd);
            }
            mustMoveInline() {
              if (!this.$to.parent.isTextblock) return -1;
              let b = this.frontier[this.depth],
                y;
              if (
                !b.type.isTextblock ||
                !ft(this.$to, this.$to.depth, b.type, b.match, !1) ||
                (this.$to.depth == this.depth &&
                  (y = this.findCloseLevel(this.$to)) &&
                  y.depth == this.depth)
              )
                return -1;
              let { depth: P } = this.$to,
                H = this.$to.after(P);
              for (; P > 1 && H == this.$to.end(--P); ) ++H;
              return H;
            }
            findCloseLevel(b) {
              e: for (let y = Math.min(this.depth, b.depth); y >= 0; y--) {
                let { match: P, type: H } = this.frontier[y],
                  oe =
                    y < b.depth && b.end(y + 1) == b.pos + (b.depth - (y + 1)),
                  de = ft(b, y, H, P, oe);
                if (de) {
                  for (let _e = y - 1; _e >= 0; _e--) {
                    let { match: N, type: o } = this.frontier[_e],
                      c = ft(b, _e, o, N, !0);
                    if (!c || c.childCount) continue e;
                  }
                  return {
                    depth: y,
                    fit: de,
                    move: oe ? b.doc.resolve(b.after(y + 1)) : b,
                  };
                }
              }
            }
            close(b) {
              let y = this.findCloseLevel(b);
              if (!y) return null;
              for (; this.depth > y.depth; ) this.closeFrontierNode();
              y.fit.childCount &&
                (this.placed = Be(this.placed, y.depth, y.fit)),
                (b = y.move);
              for (let P = y.depth + 1; P <= b.depth; P++) {
                let H = b.node(P),
                  oe = H.type.contentMatch.fillBefore(
                    H.content,
                    !0,
                    b.index(P),
                  );
                this.openFrontierNode(H.type, H.attrs, oe);
              }
              return b;
            }
            openFrontierNode(b, y = null, P) {
              let H = this.frontier[this.depth];
              (H.match = H.match.matchType(b)),
                (this.placed = Be(
                  this.placed,
                  this.depth,
                  s.FK.from(b.create(y, P)),
                )),
                this.frontier.push({ type: b, match: b.contentMatch });
            }
            closeFrontierNode() {
              let y = this.frontier.pop().match.fillBefore(s.FK.empty, !0);
              y.childCount &&
                (this.placed = Be(this.placed, this.frontier.length, y));
            }
          }
          function we(ce, b, y) {
            return b == 0
              ? ce.cutByIndex(y, ce.childCount)
              : ce.replaceChild(
                  0,
                  ce.firstChild.copy(we(ce.firstChild.content, b - 1, y)),
                );
          }
          function Be(ce, b, y) {
            return b == 0
              ? ce.append(y)
              : ce.replaceChild(
                  ce.childCount - 1,
                  ce.lastChild.copy(Be(ce.lastChild.content, b - 1, y)),
                );
          }
          function ze(ce, b) {
            for (let y = 0; y < b; y++) ce = ce.firstChild.content;
            return ce;
          }
          function qe(ce, b, y) {
            if (b <= 0) return ce;
            let P = ce.content;
            return (
              b > 1 &&
                (P = P.replaceChild(
                  0,
                  qe(P.firstChild, b - 1, P.childCount == 1 ? y - 1 : 0),
                )),
              b > 0 &&
                ((P = ce.type.contentMatch.fillBefore(P).append(P)),
                y <= 0 &&
                  (P = P.append(
                    ce.type.contentMatch
                      .matchFragment(P)
                      .fillBefore(s.FK.empty, !0),
                  ))),
              ce.copy(P)
            );
          }
          function ft(ce, b, y, P, H) {
            let oe = ce.node(b),
              de = H ? ce.indexAfter(b) : ce.index(b);
            if (de == oe.childCount && !y.compatibleContent(oe.type))
              return null;
            let _e = P.fillBefore(oe.content, !0, de);
            return _e && !gt(y, oe.content, de) ? _e : null;
          }
          function gt(ce, b, y) {
            for (let P = y; P < b.childCount; P++)
              if (!ce.allowsMarks(b.child(P).marks)) return !0;
            return !1;
          }
          function mt(ce) {
            return ce.spec.defining || ce.spec.definingForContent;
          }
          function ht(ce, b, y, P) {
            if (!P.size) return ce.deleteRange(b, y);
            let H = ce.doc.resolve(b),
              oe = ce.doc.resolve(y);
            if (Te(H, oe, P)) return ce.step(new Pe(b, y, P));
            let de = kt(H, ce.doc.resolve(y));
            de[de.length - 1] == 0 && de.pop();
            let _e = -(H.depth + 1);
            de.unshift(_e);
            for (let S = H.depth, A = H.pos - 1; S > 0; S--, A--) {
              let F = H.node(S).type.spec;
              if (F.defining || F.definingAsContext || F.isolating) break;
              de.indexOf(S) > -1
                ? (_e = S)
                : H.before(S) == A && de.splice(1, 0, -S);
            }
            let N = de.indexOf(_e),
              o = [],
              c = P.openStart;
            for (let S = P.content, A = 0; ; A++) {
              let F = S.firstChild;
              if ((o.push(F), A == P.openStart)) break;
              S = F.content;
            }
            for (let S = c - 1; S >= 0; S--) {
              let A = o[S],
                F = mt(A.type);
              if (F && !A.sameMarkup(H.node(Math.abs(_e) - 1))) c = S;
              else if (F || !A.type.isTextblock) break;
            }
            for (let S = P.openStart; S >= 0; S--) {
              let A = (S + c + 1) % (P.openStart + 1),
                F = o[A];
              if (F)
                for (let ee = 0; ee < de.length; ee++) {
                  let Se = de[(ee + N) % de.length],
                    et = !0;
                  Se < 0 && ((et = !1), (Se = -Se));
                  let st = H.node(Se - 1),
                    Mt = H.index(Se - 1);
                  if (st.canReplaceWith(Mt, Mt, F.type, F.marks))
                    return ce.replace(
                      H.before(Se),
                      et ? oe.after(Se) : y,
                      new s.Ji(dt(P.content, 0, P.openStart, A), A, P.openEnd),
                    );
                }
            }
            let m = ce.steps.length;
            for (
              let S = de.length - 1;
              S >= 0 && (ce.replace(b, y, P), !(ce.steps.length > m));
              S--
            ) {
              let A = de[S];
              A < 0 || ((b = H.before(A)), (y = oe.after(A)));
            }
          }
          function dt(ce, b, y, P, H) {
            if (b < y) {
              let oe = ce.firstChild;
              ce = ce.replaceChild(0, oe.copy(dt(oe.content, b + 1, y, P, oe)));
            }
            if (b > P) {
              let oe = H.contentMatchAt(0),
                de = oe.fillBefore(ce).append(ce);
              ce = de.append(oe.matchFragment(de).fillBefore(s.FK.empty, !0));
            }
            return ce;
          }
          function Et(ce, b, y, P) {
            if (
              !P.isInline &&
              b == y &&
              ce.doc.resolve(b).parent.content.size
            ) {
              let H = Bt(ce.doc, b, P.type);
              H != null && (b = y = H);
            }
            ce.replaceRange(b, y, new s.Ji(s.FK.from(P), 0, 0));
          }
          function Ot(ce, b, y) {
            let P = ce.doc.resolve(b),
              H = ce.doc.resolve(y),
              oe = kt(P, H);
            for (let de = 0; de < oe.length; de++) {
              let _e = oe[de],
                N = de == oe.length - 1;
              if ((N && _e == 0) || P.node(_e).type.contentMatch.validEnd)
                return ce.delete(P.start(_e), H.end(_e));
              if (
                _e > 0 &&
                (N ||
                  P.node(_e - 1).canReplace(
                    P.index(_e - 1),
                    H.indexAfter(_e - 1),
                  ))
              )
                return ce.delete(P.before(_e), H.after(_e));
            }
            for (let de = 1; de <= P.depth && de <= H.depth; de++)
              if (
                b - P.start(de) == P.depth - de &&
                y > P.end(de) &&
                H.end(de) - y != H.depth - de
              )
                return ce.delete(P.before(de), y);
            ce.delete(b, y);
          }
          function kt(ce, b) {
            let y = [],
              P = Math.min(ce.depth, b.depth);
            for (let H = P; H >= 0; H--) {
              let oe = ce.start(H);
              if (
                oe < ce.pos - (ce.depth - H) ||
                b.end(H) > b.pos + (b.depth - H) ||
                ce.node(H).type.spec.isolating ||
                b.node(H).type.spec.isolating
              )
                break;
              (oe == b.start(H) ||
                (H == ce.depth &&
                  H == b.depth &&
                  ce.parent.inlineContent &&
                  b.parent.inlineContent &&
                  H &&
                  b.start(H - 1) == oe - 1)) &&
                y.push(H);
            }
            return y;
          }
          class It extends Me {
            constructor(b, y, P) {
              super(), (this.pos = b), (this.attr = y), (this.value = P);
            }
            apply(b) {
              let y = b.nodeAt(this.pos);
              if (!y) return Q.fail("No node at attribute step's position");
              let P = Object.create(null);
              for (let oe in y.attrs) P[oe] = y.attrs[oe];
              P[this.attr] = this.value;
              let H = y.type.create(P, null, y.marks);
              return Q.fromReplace(
                b,
                this.pos,
                this.pos + 1,
                new s.Ji(s.FK.from(H), 0, y.isLeaf ? 0 : 1),
              );
            }
            getMap() {
              return ve.empty;
            }
            invert(b) {
              return new It(
                this.pos,
                this.attr,
                b.nodeAt(this.pos).attrs[this.attr],
              );
            }
            map(b) {
              let y = b.mapResult(this.pos, 1);
              return y.deletedAfter
                ? null
                : new It(y.pos, this.attr, this.value);
            }
            toJSON() {
              return {
                stepType: "attr",
                pos: this.pos,
                attr: this.attr,
                value: this.value,
              };
            }
            static fromJSON(b, y) {
              if (typeof y.pos != "number" || typeof y.attr != "string")
                throw new RangeError("Invalid input for AttrStep.fromJSON");
              return new It(y.pos, y.attr, y.value);
            }
          }
          Me.jsonID("attr", It);
          class Dt extends Me {
            constructor(b, y) {
              super(), (this.attr = b), (this.value = y);
            }
            apply(b) {
              let y = Object.create(null);
              for (let H in b.attrs) y[H] = b.attrs[H];
              y[this.attr] = this.value;
              let P = b.type.create(y, b.content, b.marks);
              return Q.ok(P);
            }
            getMap() {
              return ve.empty;
            }
            invert(b) {
              return new Dt(this.attr, b.attrs[this.attr]);
            }
            map(b) {
              return this;
            }
            toJSON() {
              return {
                stepType: "docAttr",
                attr: this.attr,
                value: this.value,
              };
            }
            static fromJSON(b, y) {
              if (typeof y.attr != "string")
                throw new RangeError("Invalid input for DocAttrStep.fromJSON");
              return new Dt(y.attr, y.value);
            }
          }
          Me.jsonID("docAttr", Dt);
          let jt = class extends Error {};
          (jt = function ce(b) {
            let y = Error.call(this, b);
            return (y.__proto__ = ce.prototype), y;
          }),
            (jt.prototype = Object.create(Error.prototype)),
            (jt.prototype.constructor = jt),
            (jt.prototype.name = "TransformError");
          class an {
            constructor(b) {
              (this.doc = b),
                (this.steps = []),
                (this.docs = []),
                (this.mapping = new je());
            }
            get before() {
              return this.docs.length ? this.docs[0] : this.doc;
            }
            step(b) {
              let y = this.maybeStep(b);
              if (y.failed) throw new jt(y.failed);
              return this;
            }
            maybeStep(b) {
              let y = b.apply(this.doc);
              return y.failed || this.addStep(b, y.doc), y;
            }
            get docChanged() {
              return this.steps.length > 0;
            }
            addStep(b, y) {
              this.docs.push(this.doc),
                this.steps.push(b),
                this.mapping.appendMap(b.getMap()),
                (this.doc = y);
            }
            replace(b, y = b, P = s.Ji.empty) {
              let H = ye(this.doc, b, y, P);
              return H && this.step(H), this;
            }
            replaceWith(b, y, P) {
              return this.replace(b, y, new s.Ji(s.FK.from(P), 0, 0));
            }
            delete(b, y) {
              return this.replace(b, y, s.Ji.empty);
            }
            insert(b, y) {
              return this.replaceWith(b, b, y);
            }
            replaceRange(b, y, P) {
              return ht(this, b, y, P), this;
            }
            replaceRangeWith(b, y, P) {
              return Et(this, b, y, P), this;
            }
            deleteRange(b, y) {
              return Ot(this, b, y), this;
            }
            lift(b, y) {
              return Ne(this, b, y), this;
            }
            join(b, y = 1) {
              return Rt(this, b, y), this;
            }
            wrap(b, y) {
              return ie(this, b, y), this;
            }
            setBlockType(b, y = b, P, H = null) {
              return xe(this, b, y, P, H), this;
            }
            setNodeMarkup(b, y, P = null, H) {
              return rt(this, b, y, P, H), this;
            }
            setNodeAttribute(b, y, P) {
              return this.step(new It(b, y, P)), this;
            }
            setDocAttribute(b, y) {
              return this.step(new Dt(b, y)), this;
            }
            addNodeMark(b, y) {
              return this.step(new me(b, y)), this;
            }
            removeNodeMark(b, y) {
              if (!(y instanceof s.CU)) {
                let P = this.doc.nodeAt(b);
                if (!P) throw new RangeError("No node at position " + b);
                if (((y = y.isInSet(P.marks)), !y)) return this;
              }
              return this.step(new fe(b, y)), this;
            }
            split(b, y = 1, P) {
              return vt(this, b, y, P), this;
            }
            addMark(b, y, P) {
              return Je(this, b, y, P), this;
            }
            removeMark(b, y, P) {
              return Ye(this, b, y, P), this;
            }
            clearIncompatible(b, y, P) {
              return nt(this, b, y, P), this;
            }
          }
        },
        29287: (D, V, d) => {
          "use strict";
          d.d(V, { Lz: () => uo, NZ: () => Xt, zF: () => zt });
          var s = d(52893),
            g = d(57053),
            M = d(63734);
          const _ = function (n) {
              for (var e = 0; ; e++)
                if (((n = n.previousSibling), !n)) return e;
            },
            T = function (n) {
              let e = n.assignedSlot || n.parentNode;
              return e && e.nodeType == 11 ? e.host : e;
            };
          let K = null;
          const U = function (n, e, r) {
              let l = K || (K = document.createRange());
              return (
                l.setEnd(n, r ?? n.nodeValue.length), l.setStart(n, e || 0), l
              );
            },
            I = function () {
              K = null;
            },
            G = function (n, e, r, l) {
              return r && (pe(n, e, r, l, -1) || pe(n, e, r, l, 1));
            },
            se = /^(img|br|input|textarea|hr)$/i;
          function pe(n, e, r, l, f) {
            for (;;) {
              if (n == r && e == l) return !0;
              if (e == (f < 0 ? 0 : ve(n))) {
                let h = n.parentNode;
                if (
                  !h ||
                  h.nodeType != 1 ||
                  Q(n) ||
                  se.test(n.nodeName) ||
                  n.contentEditable == "false"
                )
                  return !1;
                (e = _(n) + (f < 0 ? 0 : 1)), (n = h);
              } else if (n.nodeType == 1) {
                if (
                  ((n = n.childNodes[e + (f < 0 ? -1 : 0)]),
                  n.contentEditable == "false")
                )
                  return !1;
                e = f < 0 ? ve(n) : 0;
              } else return !1;
            }
          }
          function ve(n) {
            return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
          }
          function je(n, e) {
            for (;;) {
              if (n.nodeType == 3 && e) return n;
              if (n.nodeType == 1 && e > 0) {
                if (n.contentEditable == "false") return null;
                (n = n.childNodes[e - 1]), (e = ve(n));
              } else if (n.parentNode && !Q(n)) (e = _(n)), (n = n.parentNode);
              else return null;
            }
          }
          function We(n, e) {
            for (;;) {
              if (n.nodeType == 3 && e < n.nodeValue.length) return n;
              if (n.nodeType == 1 && e < n.childNodes.length) {
                if (n.contentEditable == "false") return null;
                (n = n.childNodes[e]), (e = 0);
              } else if (n.parentNode && !Q(n))
                (e = _(n) + 1), (n = n.parentNode);
              else return null;
            }
          }
          function Me(n, e, r) {
            for (let l = e == 0, f = e == ve(n); l || f; ) {
              if (n == r) return !0;
              let h = _(n);
              if (((n = n.parentNode), !n)) return !1;
              (l = l && h == 0), (f = f && h == ve(n));
            }
          }
          function Q(n) {
            let e;
            for (let r = n; r && !(e = r.pmViewDesc); r = r.parentNode);
            return (
              e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n)
            );
          }
          const ge = function (n) {
            return (
              n.focusNode &&
              G(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset)
            );
          };
          function Ae(n, e) {
            let r = document.createEvent("Event");
            return (
              r.initEvent("keydown", !0, !0),
              (r.keyCode = n),
              (r.key = r.code = e),
              r
            );
          }
          function ae(n) {
            let e = n.activeElement;
            for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
            return e;
          }
          function me(n, e, r) {
            if (n.caretPositionFromPoint)
              try {
                let l = n.caretPositionFromPoint(e, r);
                if (l) return { node: l.offsetNode, offset: l.offset };
              } catch {}
            if (n.caretRangeFromPoint) {
              let l = n.caretRangeFromPoint(e, r);
              if (l) return { node: l.startContainer, offset: l.startOffset };
            }
          }
          const fe = typeof navigator < "u" ? navigator : null,
            Pe = typeof document < "u" ? document : null,
            he = (fe && fe.userAgent) || "",
            Le = /Edge\/(\d+)/.exec(he),
            Je = /MSIE \d/.exec(he),
            Ye = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(he),
            nt = !!(Je || Ye || Le),
            Xe = Je ? document.documentMode : Ye ? +Ye[1] : Le ? +Le[1] : 0,
            tt = !nt && /gecko\/(\d+)/i.test(he);
          tt && +(/Firefox\/(\d+)/.exec(he) || [0, 0])[1];
          const Ne = !nt && /Chrome\/(\d+)/.exec(he),
            B = !!Ne,
            ne = Ne ? +Ne[1] : 0,
            $ = !nt && !!fe && /Apple Computer/.test(fe.vendor),
            X =
              $ && (/Mobile\/\w+/.test(he) || (!!fe && fe.maxTouchPoints > 2)),
            ie = X || (fe ? /Mac/.test(fe.platform) : !1),
            xe = fe ? /Win/.test(fe.platform) : !1,
            Ce = /Android \d/.test(he),
            Ve = !!Pe && "webkitFontSmoothing" in Pe.documentElement.style,
            Ee = Ve
              ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
              : 0;
          function rt(n) {
            let e = n.defaultView && n.defaultView.visualViewport;
            return e
              ? { left: 0, right: e.width, top: 0, bottom: e.height }
              : {
                  left: 0,
                  right: n.documentElement.clientWidth,
                  top: 0,
                  bottom: n.documentElement.clientHeight,
                };
          }
          function ct(n, e) {
            return typeof n == "number" ? n : n[e];
          }
          function vt(n) {
            let e = n.getBoundingClientRect(),
              r = e.width / n.offsetWidth || 1,
              l = e.height / n.offsetHeight || 1;
            return {
              left: e.left,
              right: e.left + n.clientWidth * r,
              top: e.top,
              bottom: e.top + n.clientHeight * l,
            };
          }
          function wt(n, e, r) {
            let l = n.someProp("scrollThreshold") || 0,
              f = n.someProp("scrollMargin") || 5,
              h = n.dom.ownerDocument;
            for (let v = r || n.dom; v; v = T(v)) {
              if (v.nodeType != 1) continue;
              let C = v,
                L = C == h.body,
                W = L ? rt(h) : vt(C),
                Z = 0,
                De = 0;
              if (
                (e.top < W.top + ct(l, "top")
                  ? (De = -(W.top - e.top + ct(f, "top")))
                  : e.bottom > W.bottom - ct(l, "bottom") &&
                    (De =
                      e.bottom - e.top > W.bottom - W.top
                        ? e.top + ct(f, "top") - W.top
                        : e.bottom - W.bottom + ct(f, "bottom")),
                e.left < W.left + ct(l, "left")
                  ? (Z = -(W.left - e.left + ct(f, "left")))
                  : e.right > W.right - ct(l, "right") &&
                    (Z = e.right - W.right + ct(f, "right")),
                Z || De)
              )
                if (L) h.defaultView.scrollBy(Z, De);
                else {
                  let Ke = C.scrollLeft,
                    Ze = C.scrollTop;
                  De && (C.scrollTop += De), Z && (C.scrollLeft += Z);
                  let Fe = C.scrollLeft - Ke,
                    pt = C.scrollTop - Ze;
                  e = {
                    left: e.left - Fe,
                    top: e.top - pt,
                    right: e.right - Fe,
                    bottom: e.bottom - pt,
                  };
                }
              if (L || /^(fixed|sticky)$/.test(getComputedStyle(v).position))
                break;
            }
          }
          function yt(n) {
            let e = n.dom.getBoundingClientRect(),
              r = Math.max(0, e.top),
              l,
              f;
            for (
              let h = (e.left + e.right) / 2, v = r + 1;
              v < Math.min(innerHeight, e.bottom);
              v += 5
            ) {
              let C = n.root.elementFromPoint(h, v);
              if (!C || C == n.dom || !n.dom.contains(C)) continue;
              let L = C.getBoundingClientRect();
              if (L.top >= r - 20) {
                (l = C), (f = L.top);
                break;
              }
            }
            return { refDOM: l, refTop: f, stack: Ct(n.dom) };
          }
          function Ct(n) {
            let e = [],
              r = n.ownerDocument;
            for (
              let l = n;
              l &&
              (e.push({ dom: l, top: l.scrollTop, left: l.scrollLeft }),
              n != r);
              l = T(l)
            );
            return e;
          }
          function Rt({ refDOM: n, refTop: e, stack: r }) {
            let l = n ? n.getBoundingClientRect().top : 0;
            Bt(r, l == 0 ? 0 : l - e);
          }
          function Bt(n, e) {
            for (let r = 0; r < n.length; r++) {
              let { dom: l, top: f, left: h } = n[r];
              l.scrollTop != f + e && (l.scrollTop = f + e),
                l.scrollLeft != h && (l.scrollLeft = h);
            }
          }
          let be = null;
          function ye(n) {
            if (n.setActive) return n.setActive();
            if (be) return n.focus(be);
            let e = Ct(n);
            n.focus(
              be == null
                ? {
                    get preventScroll() {
                      return (be = { preventScroll: !0 }), !0;
                    },
                  }
                : void 0,
            ),
              be || ((be = !1), Bt(e, 0));
          }
          function Te(n, e) {
            let r,
              l = 2e8,
              f,
              h = 0,
              v = e.top,
              C = e.top,
              L,
              W;
            for (let Z = n.firstChild, De = 0; Z; Z = Z.nextSibling, De++) {
              let Ke;
              if (Z.nodeType == 1) Ke = Z.getClientRects();
              else if (Z.nodeType == 3) Ke = U(Z).getClientRects();
              else continue;
              for (let Ze = 0; Ze < Ke.length; Ze++) {
                let Fe = Ke[Ze];
                if (Fe.top <= v && Fe.bottom >= C) {
                  (v = Math.max(Fe.bottom, v)), (C = Math.min(Fe.top, C));
                  let pt =
                    Fe.left > e.left
                      ? Fe.left - e.left
                      : Fe.right < e.left
                        ? e.left - Fe.right
                        : 0;
                  if (pt < l) {
                    (r = Z),
                      (l = pt),
                      (f =
                        pt && r.nodeType == 3
                          ? {
                              left: Fe.right < e.left ? Fe.right : Fe.left,
                              top: e.top,
                            }
                          : e),
                      Z.nodeType == 1 &&
                        pt &&
                        (h = De + (e.left >= (Fe.left + Fe.right) / 2 ? 1 : 0));
                    continue;
                  }
                } else
                  Fe.top > e.top &&
                    !L &&
                    Fe.left <= e.left &&
                    Fe.right >= e.left &&
                    ((L = Z),
                    (W = {
                      left: Math.max(Fe.left, Math.min(Fe.right, e.left)),
                      top: Fe.top,
                    }));
                !r &&
                  ((e.left >= Fe.right && e.top >= Fe.top) ||
                    (e.left >= Fe.left && e.top >= Fe.bottom)) &&
                  (h = De + 1);
              }
            }
            return (
              !r && L && ((r = L), (f = W), (l = 0)),
              r && r.nodeType == 3
                ? Re(r, f)
                : !r || (l && r.nodeType == 1)
                  ? { node: n, offset: h }
                  : Te(r, f)
            );
          }
          function Re(n, e) {
            let r = n.nodeValue.length,
              l = document.createRange();
            for (let f = 0; f < r; f++) {
              l.setEnd(n, f + 1), l.setStart(n, f);
              let h = ht(l, 1);
              if (h.top != h.bottom && we(e, h))
                return {
                  node: n,
                  offset: f + (e.left >= (h.left + h.right) / 2 ? 1 : 0),
                };
            }
            return { node: n, offset: 0 };
          }
          function we(n, e) {
            return (
              n.left >= e.left - 1 &&
              n.left <= e.right + 1 &&
              n.top >= e.top - 1 &&
              n.top <= e.bottom + 1
            );
          }
          function Be(n, e) {
            let r = n.parentNode;
            return r &&
              /^li$/i.test(r.nodeName) &&
              e.left < n.getBoundingClientRect().left
              ? r
              : n;
          }
          function ze(n, e, r) {
            let { node: l, offset: f } = Te(e, r),
              h = -1;
            if (l.nodeType == 1 && !l.firstChild) {
              let v = l.getBoundingClientRect();
              h = v.left != v.right && r.left > (v.left + v.right) / 2 ? 1 : -1;
            }
            return n.docView.posFromDOM(l, f, h);
          }
          function qe(n, e, r, l) {
            let f = -1;
            for (let h = e, v = !1; h != n.dom; ) {
              let C = n.docView.nearestDesc(h, !0);
              if (!C) return null;
              if (
                C.dom.nodeType == 1 &&
                ((C.node.isBlock && C.parent && !v) || !C.contentDOM)
              ) {
                let L = C.dom.getBoundingClientRect();
                if (
                  (C.node.isBlock &&
                    C.parent &&
                    !v &&
                    ((v = !0),
                    L.left > l.left || L.top > l.top
                      ? (f = C.posBefore)
                      : (L.right < l.left || L.bottom < l.top) &&
                        (f = C.posAfter)),
                  !C.contentDOM && f < 0 && !C.node.isText)
                )
                  return (
                    C.node.isBlock
                      ? l.top < (L.top + L.bottom) / 2
                      : l.left < (L.left + L.right) / 2
                  )
                    ? C.posBefore
                    : C.posAfter;
              }
              h = C.dom.parentNode;
            }
            return f > -1 ? f : n.docView.posFromDOM(e, r, -1);
          }
          function ft(n, e, r) {
            let l = n.childNodes.length;
            if (l && r.top < r.bottom)
              for (
                let f = Math.max(
                    0,
                    Math.min(
                      l - 1,
                      Math.floor((l * (e.top - r.top)) / (r.bottom - r.top)) -
                        2,
                    ),
                  ),
                  h = f;
                ;
              ) {
                let v = n.childNodes[h];
                if (v.nodeType == 1) {
                  let C = v.getClientRects();
                  for (let L = 0; L < C.length; L++) {
                    let W = C[L];
                    if (we(e, W)) return ft(v, e, W);
                  }
                }
                if ((h = (h + 1) % l) == f) break;
              }
            return n;
          }
          function gt(n, e) {
            let r = n.dom.ownerDocument,
              l,
              f = 0,
              h = me(r, e.left, e.top);
            h && ({ node: l, offset: f } = h);
            let v = (n.root.elementFromPoint ? n.root : r).elementFromPoint(
                e.left,
                e.top,
              ),
              C;
            if (!v || !n.dom.contains(v.nodeType != 1 ? v.parentNode : v)) {
              let W = n.dom.getBoundingClientRect();
              if (!we(e, W) || ((v = ft(n.dom, e, W)), !v)) return null;
            }
            if ($)
              for (let W = v; l && W; W = T(W)) W.draggable && (l = void 0);
            if (((v = Be(v, e)), l)) {
              if (
                tt &&
                l.nodeType == 1 &&
                ((f = Math.min(f, l.childNodes.length)),
                f < l.childNodes.length)
              ) {
                let Z = l.childNodes[f],
                  De;
                Z.nodeName == "IMG" &&
                  (De = Z.getBoundingClientRect()).right <= e.left &&
                  De.bottom > e.top &&
                  f++;
              }
              let W;
              Ve &&
                f &&
                l.nodeType == 1 &&
                (W = l.childNodes[f - 1]).nodeType == 1 &&
                W.contentEditable == "false" &&
                W.getBoundingClientRect().top >= e.top &&
                f--,
                l == n.dom &&
                f == l.childNodes.length - 1 &&
                l.lastChild.nodeType == 1 &&
                e.top > l.lastChild.getBoundingClientRect().bottom
                  ? (C = n.state.doc.content.size)
                  : (f == 0 ||
                      l.nodeType != 1 ||
                      l.childNodes[f - 1].nodeName != "BR") &&
                    (C = qe(n, l, f, e));
            }
            C == null && (C = ze(n, v, e));
            let L = n.docView.nearestDesc(v, !0);
            return { pos: C, inside: L ? L.posAtStart - L.border : -1 };
          }
          function mt(n) {
            return n.top < n.bottom || n.left < n.right;
          }
          function ht(n, e) {
            let r = n.getClientRects();
            if (r.length) {
              let l = r[e < 0 ? 0 : r.length - 1];
              if (mt(l)) return l;
            }
            return (
              Array.prototype.find.call(r, mt) || n.getBoundingClientRect()
            );
          }
          const dt = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
          function Et(n, e, r) {
            let {
                node: l,
                offset: f,
                atom: h,
              } = n.docView.domFromPos(e, r < 0 ? -1 : 1),
              v = Ve || tt;
            if (l.nodeType == 3)
              if (
                v &&
                (dt.test(l.nodeValue) || (r < 0 ? !f : f == l.nodeValue.length))
              ) {
                let L = ht(U(l, f, f), r);
                if (
                  tt &&
                  f &&
                  /\s/.test(l.nodeValue[f - 1]) &&
                  f < l.nodeValue.length
                ) {
                  let W = ht(U(l, f - 1, f - 1), -1);
                  if (W.top == L.top) {
                    let Z = ht(U(l, f, f + 1), -1);
                    if (Z.top != L.top) return Ot(Z, Z.left < W.left);
                  }
                }
                return L;
              } else {
                let L = f,
                  W = f,
                  Z = r < 0 ? 1 : -1;
                return (
                  r < 0 && !f
                    ? (W++, (Z = -1))
                    : r >= 0 && f == l.nodeValue.length
                      ? (L--, (Z = 1))
                      : r < 0
                        ? L--
                        : W++,
                  Ot(ht(U(l, L, W), Z), Z < 0)
                );
              }
            if (!n.state.doc.resolve(e - (h || 0)).parent.inlineContent) {
              if (h == null && f && (r < 0 || f == ve(l))) {
                let L = l.childNodes[f - 1];
                if (L.nodeType == 1) return kt(L.getBoundingClientRect(), !1);
              }
              if (h == null && f < ve(l)) {
                let L = l.childNodes[f];
                if (L.nodeType == 1) return kt(L.getBoundingClientRect(), !0);
              }
              return kt(l.getBoundingClientRect(), r >= 0);
            }
            if (h == null && f && (r < 0 || f == ve(l))) {
              let L = l.childNodes[f - 1],
                W =
                  L.nodeType == 3
                    ? U(L, ve(L) - (v ? 0 : 1))
                    : L.nodeType == 1 && (L.nodeName != "BR" || !L.nextSibling)
                      ? L
                      : null;
              if (W) return Ot(ht(W, 1), !1);
            }
            if (h == null && f < ve(l)) {
              let L = l.childNodes[f];
              for (; L.pmViewDesc && L.pmViewDesc.ignoreForCoords; )
                L = L.nextSibling;
              let W = L
                ? L.nodeType == 3
                  ? U(L, 0, v ? 0 : 1)
                  : L.nodeType == 1
                    ? L
                    : null
                : null;
              if (W) return Ot(ht(W, -1), !0);
            }
            return Ot(ht(l.nodeType == 3 ? U(l) : l, -r), r >= 0);
          }
          function Ot(n, e) {
            if (n.width == 0) return n;
            let r = e ? n.left : n.right;
            return { top: n.top, bottom: n.bottom, left: r, right: r };
          }
          function kt(n, e) {
            if (n.height == 0) return n;
            let r = e ? n.top : n.bottom;
            return { top: r, bottom: r, left: n.left, right: n.right };
          }
          function It(n, e, r) {
            let l = n.state,
              f = n.root.activeElement;
            l != e && n.updateState(e), f != n.dom && n.focus();
            try {
              return r();
            } finally {
              l != e && n.updateState(l), f != n.dom && f && f.focus();
            }
          }
          function Dt(n, e, r) {
            let l = e.selection,
              f = r == "up" ? l.$from : l.$to;
            return It(n, e, () => {
              let { node: h } = n.docView.domFromPos(f.pos, r == "up" ? -1 : 1);
              for (;;) {
                let C = n.docView.nearestDesc(h, !0);
                if (!C) break;
                if (C.node.isBlock) {
                  h = C.contentDOM || C.dom;
                  break;
                }
                h = C.dom.parentNode;
              }
              let v = Et(n, f.pos, 1);
              for (let C = h.firstChild; C; C = C.nextSibling) {
                let L;
                if (C.nodeType == 1) L = C.getClientRects();
                else if (C.nodeType == 3)
                  L = U(C, 0, C.nodeValue.length).getClientRects();
                else continue;
                for (let W = 0; W < L.length; W++) {
                  let Z = L[W];
                  if (
                    Z.bottom > Z.top + 1 &&
                    (r == "up"
                      ? v.top - Z.top > (Z.bottom - v.top) * 2
                      : Z.bottom - v.bottom > (v.bottom - Z.top) * 2)
                  )
                    return !1;
                }
              }
              return !0;
            });
          }
          const jt = /[\u0590-\u08ac]/;
          function an(n, e, r) {
            let { $head: l } = e.selection;
            if (!l.parent.isTextblock) return !1;
            let f = l.parentOffset,
              h = !f,
              v = f == l.parent.content.size,
              C = n.domSelection();
            return !jt.test(l.parent.textContent) || !C.modify
              ? r == "left" || r == "backward"
                ? h
                : v
              : It(n, e, () => {
                  let {
                      focusNode: L,
                      focusOffset: W,
                      anchorNode: Z,
                      anchorOffset: De,
                    } = n.domSelectionRange(),
                    Ke = C.caretBidiLevel;
                  C.modify("move", r, "character");
                  let Ze = l.depth ? n.docView.domAfterPos(l.before()) : n.dom,
                    { focusNode: Fe, focusOffset: pt } = n.domSelectionRange(),
                    ot =
                      (Fe &&
                        !Ze.contains(Fe.nodeType == 1 ? Fe : Fe.parentNode)) ||
                      (L == Fe && W == pt);
                  try {
                    C.collapse(Z, De),
                      L && (L != Z || W != De) && C.extend && C.extend(L, W);
                  } catch {}
                  return Ke != null && (C.caretBidiLevel = Ke), ot;
                });
          }
          let ce = null,
            b = null,
            y = !1;
          function P(n, e, r) {
            return ce == e && b == r
              ? y
              : ((ce = e),
                (b = r),
                (y = r == "up" || r == "down" ? Dt(n, e, r) : an(n, e, r)));
          }
          const H = 0,
            oe = 1,
            de = 2,
            _e = 3;
          class N {
            constructor(e, r, l, f) {
              (this.parent = e),
                (this.children = r),
                (this.dom = l),
                (this.contentDOM = f),
                (this.dirty = H),
                (l.pmViewDesc = this);
            }
            matchesWidget(e) {
              return !1;
            }
            matchesMark(e) {
              return !1;
            }
            matchesNode(e, r, l) {
              return !1;
            }
            matchesHack(e) {
              return !1;
            }
            parseRule() {
              return null;
            }
            stopEvent(e) {
              return !1;
            }
            get size() {
              let e = 0;
              for (let r = 0; r < this.children.length; r++)
                e += this.children[r].size;
              return e;
            }
            get border() {
              return 0;
            }
            destroy() {
              (this.parent = void 0),
                this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
              for (let e = 0; e < this.children.length; e++)
                this.children[e].destroy();
            }
            posBeforeChild(e) {
              for (let r = 0, l = this.posAtStart; ; r++) {
                let f = this.children[r];
                if (f == e) return l;
                l += f.size;
              }
            }
            get posBefore() {
              return this.parent.posBeforeChild(this);
            }
            get posAtStart() {
              return this.parent
                ? this.parent.posBeforeChild(this) + this.border
                : 0;
            }
            get posAfter() {
              return this.posBefore + this.size;
            }
            get posAtEnd() {
              return this.posAtStart + this.size - 2 * this.border;
            }
            localPosFromDOM(e, r, l) {
              if (
                this.contentDOM &&
                this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)
              )
                if (l < 0) {
                  let h, v;
                  if (e == this.contentDOM) h = e.childNodes[r - 1];
                  else {
                    for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                    h = e.previousSibling;
                  }
                  for (; h && !((v = h.pmViewDesc) && v.parent == this); )
                    h = h.previousSibling;
                  return h ? this.posBeforeChild(v) + v.size : this.posAtStart;
                } else {
                  let h, v;
                  if (e == this.contentDOM) h = e.childNodes[r];
                  else {
                    for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                    h = e.nextSibling;
                  }
                  for (; h && !((v = h.pmViewDesc) && v.parent == this); )
                    h = h.nextSibling;
                  return h ? this.posBeforeChild(v) : this.posAtEnd;
                }
              let f;
              if (e == this.dom && this.contentDOM) f = r > _(this.contentDOM);
              else if (
                this.contentDOM &&
                this.contentDOM != this.dom &&
                this.dom.contains(this.contentDOM)
              )
                f = e.compareDocumentPosition(this.contentDOM) & 2;
              else if (this.dom.firstChild) {
                if (r == 0)
                  for (let h = e; ; h = h.parentNode) {
                    if (h == this.dom) {
                      f = !1;
                      break;
                    }
                    if (h.previousSibling) break;
                  }
                if (f == null && r == e.childNodes.length)
                  for (let h = e; ; h = h.parentNode) {
                    if (h == this.dom) {
                      f = !0;
                      break;
                    }
                    if (h.nextSibling) break;
                  }
              }
              return (f ?? l > 0) ? this.posAtEnd : this.posAtStart;
            }
            nearestDesc(e, r = !1) {
              for (let l = !0, f = e; f; f = f.parentNode) {
                let h = this.getDesc(f),
                  v;
                if (h && (!r || h.node))
                  if (
                    l &&
                    (v = h.nodeDOM) &&
                    !(v.nodeType == 1
                      ? v.contains(e.nodeType == 1 ? e : e.parentNode)
                      : v == e)
                  )
                    l = !1;
                  else return h;
              }
            }
            getDesc(e) {
              let r = e.pmViewDesc;
              for (let l = r; l; l = l.parent) if (l == this) return r;
            }
            posFromDOM(e, r, l) {
              for (let f = e; f; f = f.parentNode) {
                let h = this.getDesc(f);
                if (h) return h.localPosFromDOM(e, r, l);
              }
              return -1;
            }
            descAt(e) {
              for (let r = 0, l = 0; r < this.children.length; r++) {
                let f = this.children[r],
                  h = l + f.size;
                if (l == e && h != l) {
                  for (; !f.border && f.children.length; ) f = f.children[0];
                  return f;
                }
                if (e < h) return f.descAt(e - l - f.border);
                l = h;
              }
            }
            domFromPos(e, r) {
              if (!this.contentDOM)
                return { node: this.dom, offset: 0, atom: e + 1 };
              let l = 0,
                f = 0;
              for (let h = 0; l < this.children.length; l++) {
                let v = this.children[l],
                  C = h + v.size;
                if (C > e || v instanceof ee) {
                  f = e - h;
                  break;
                }
                h = C;
              }
              if (f)
                return this.children[l].domFromPos(
                  f - this.children[l].border,
                  r,
                );
              for (
                let h;
                l &&
                !(h = this.children[l - 1]).size &&
                h instanceof o &&
                h.side >= 0;
                l--
              );
              if (r <= 0) {
                let h,
                  v = !0;
                for (
                  ;
                  (h = l ? this.children[l - 1] : null),
                    !(!h || h.dom.parentNode == this.contentDOM);
                  l--, v = !1
                );
                return h && r && v && !h.border && !h.domAtom
                  ? h.domFromPos(h.size, r)
                  : { node: this.contentDOM, offset: h ? _(h.dom) + 1 : 0 };
              } else {
                let h,
                  v = !0;
                for (
                  ;
                  (h = l < this.children.length ? this.children[l] : null),
                    !(!h || h.dom.parentNode == this.contentDOM);
                  l++, v = !1
                );
                return h && v && !h.border && !h.domAtom
                  ? h.domFromPos(0, r)
                  : {
                      node: this.contentDOM,
                      offset: h ? _(h.dom) : this.contentDOM.childNodes.length,
                    };
              }
            }
            parseRange(e, r, l = 0) {
              if (this.children.length == 0)
                return {
                  node: this.contentDOM,
                  from: e,
                  to: r,
                  fromOffset: 0,
                  toOffset: this.contentDOM.childNodes.length,
                };
              let f = -1,
                h = -1;
              for (let v = l, C = 0; ; C++) {
                let L = this.children[C],
                  W = v + L.size;
                if (f == -1 && e <= W) {
                  let Z = v + L.border;
                  if (
                    e >= Z &&
                    r <= W - L.border &&
                    L.node &&
                    L.contentDOM &&
                    this.contentDOM.contains(L.contentDOM)
                  )
                    return L.parseRange(e, r, Z);
                  e = v;
                  for (let De = C; De > 0; De--) {
                    let Ke = this.children[De - 1];
                    if (
                      Ke.size &&
                      Ke.dom.parentNode == this.contentDOM &&
                      !Ke.emptyChildAt(1)
                    ) {
                      f = _(Ke.dom) + 1;
                      break;
                    }
                    e -= Ke.size;
                  }
                  f == -1 && (f = 0);
                }
                if (f > -1 && (W > r || C == this.children.length - 1)) {
                  r = W;
                  for (let Z = C + 1; Z < this.children.length; Z++) {
                    let De = this.children[Z];
                    if (
                      De.size &&
                      De.dom.parentNode == this.contentDOM &&
                      !De.emptyChildAt(-1)
                    ) {
                      h = _(De.dom);
                      break;
                    }
                    r += De.size;
                  }
                  h == -1 && (h = this.contentDOM.childNodes.length);
                  break;
                }
                v = W;
              }
              return {
                node: this.contentDOM,
                from: e,
                to: r,
                fromOffset: f,
                toOffset: h,
              };
            }
            emptyChildAt(e) {
              if (this.border || !this.contentDOM || !this.children.length)
                return !1;
              let r = this.children[e < 0 ? 0 : this.children.length - 1];
              return r.size == 0 || r.emptyChildAt(e);
            }
            domAfterPos(e) {
              let { node: r, offset: l } = this.domFromPos(e, 0);
              if (r.nodeType != 1 || l == r.childNodes.length)
                throw new RangeError("No node after pos " + e);
              return r.childNodes[l];
            }
            setSelection(e, r, l, f = !1) {
              let h = Math.min(e, r),
                v = Math.max(e, r);
              for (let Ke = 0, Ze = 0; Ke < this.children.length; Ke++) {
                let Fe = this.children[Ke],
                  pt = Ze + Fe.size;
                if (h > Ze && v < pt)
                  return Fe.setSelection(
                    e - Ze - Fe.border,
                    r - Ze - Fe.border,
                    l,
                    f,
                  );
                Ze = pt;
              }
              let C = this.domFromPos(e, e ? -1 : 1),
                L = r == e ? C : this.domFromPos(r, r ? -1 : 1),
                W = l.getSelection(),
                Z = !1;
              if ((tt || $) && e == r) {
                let { node: Ke, offset: Ze } = C;
                if (Ke.nodeType == 3) {
                  if (
                    ((Z = !!(
                      Ze &&
                      Ke.nodeValue[Ze - 1] ==
                        `
`
                    )),
                    Z && Ze == Ke.nodeValue.length)
                  )
                    for (let Fe = Ke, pt; Fe; Fe = Fe.parentNode) {
                      if ((pt = Fe.nextSibling)) {
                        pt.nodeName == "BR" &&
                          (C = L = { node: pt.parentNode, offset: _(pt) + 1 });
                        break;
                      }
                      let ot = Fe.pmViewDesc;
                      if (ot && ot.node && ot.node.isBlock) break;
                    }
                } else {
                  let Fe = Ke.childNodes[Ze - 1];
                  Z =
                    Fe &&
                    (Fe.nodeName == "BR" || Fe.contentEditable == "false");
                }
              }
              if (
                tt &&
                W.focusNode &&
                W.focusNode != L.node &&
                W.focusNode.nodeType == 1
              ) {
                let Ke = W.focusNode.childNodes[W.focusOffset];
                Ke && Ke.contentEditable == "false" && (f = !0);
              }
              if (
                !(f || (Z && $)) &&
                G(C.node, C.offset, W.anchorNode, W.anchorOffset) &&
                G(L.node, L.offset, W.focusNode, W.focusOffset)
              )
                return;
              let De = !1;
              if ((W.extend || e == r) && !Z) {
                W.collapse(C.node, C.offset);
                try {
                  e != r && W.extend(L.node, L.offset), (De = !0);
                } catch {}
              }
              if (!De) {
                if (e > r) {
                  let Ze = C;
                  (C = L), (L = Ze);
                }
                let Ke = document.createRange();
                Ke.setEnd(L.node, L.offset),
                  Ke.setStart(C.node, C.offset),
                  W.removeAllRanges(),
                  W.addRange(Ke);
              }
            }
            ignoreMutation(e) {
              return !this.contentDOM && e.type != "selection";
            }
            get contentLost() {
              return (
                this.contentDOM &&
                this.contentDOM != this.dom &&
                !this.dom.contains(this.contentDOM)
              );
            }
            markDirty(e, r) {
              for (let l = 0, f = 0; f < this.children.length; f++) {
                let h = this.children[f],
                  v = l + h.size;
                if (l == v ? e <= v && r >= l : e < v && r > l) {
                  let C = l + h.border,
                    L = v - h.border;
                  if (e >= C && r <= L) {
                    (this.dirty = e == l || r == v ? de : oe),
                      e == C &&
                      r == L &&
                      (h.contentLost || h.dom.parentNode != this.contentDOM)
                        ? (h.dirty = _e)
                        : h.markDirty(e - C, r - C);
                    return;
                  } else
                    h.dirty =
                      h.dom == h.contentDOM &&
                      h.dom.parentNode == this.contentDOM &&
                      !h.children.length
                        ? de
                        : _e;
                }
                l = v;
              }
              this.dirty = de;
            }
            markParentsDirty() {
              let e = 1;
              for (let r = this.parent; r; r = r.parent, e++) {
                let l = e == 1 ? de : oe;
                r.dirty < l && (r.dirty = l);
              }
            }
            get domAtom() {
              return !1;
            }
            get ignoreForCoords() {
              return !1;
            }
            isText(e) {
              return !1;
            }
          }
          class o extends N {
            constructor(e, r, l, f) {
              let h,
                v = r.type.toDOM;
              if (
                (typeof v == "function" &&
                  (v = v(l, () => {
                    if (!h) return f;
                    if (h.parent) return h.parent.posBeforeChild(h);
                  })),
                !r.type.spec.raw)
              ) {
                if (v.nodeType != 1) {
                  let C = document.createElement("span");
                  C.appendChild(v), (v = C);
                }
                (v.contentEditable = "false"),
                  v.classList.add("ProseMirror-widget");
              }
              super(e, [], v, null),
                (this.widget = r),
                (this.widget = r),
                (h = this);
            }
            matchesWidget(e) {
              return this.dirty == H && e.type.eq(this.widget.type);
            }
            parseRule() {
              return { ignore: !0 };
            }
            stopEvent(e) {
              let r = this.widget.spec.stopEvent;
              return r ? r(e) : !1;
            }
            ignoreMutation(e) {
              return e.type != "selection" || this.widget.spec.ignoreSelection;
            }
            destroy() {
              this.widget.type.destroy(this.dom), super.destroy();
            }
            get domAtom() {
              return !0;
            }
            get side() {
              return this.widget.type.side;
            }
          }
          class c extends N {
            constructor(e, r, l, f) {
              super(e, [], r, null), (this.textDOM = l), (this.text = f);
            }
            get size() {
              return this.text.length;
            }
            localPosFromDOM(e, r) {
              return e != this.textDOM
                ? this.posAtStart + (r ? this.size : 0)
                : this.posAtStart + r;
            }
            domFromPos(e) {
              return { node: this.textDOM, offset: e };
            }
            ignoreMutation(e) {
              return (
                e.type === "characterData" && e.target.nodeValue == e.oldValue
              );
            }
          }
          class m extends N {
            constructor(e, r, l, f) {
              super(e, [], l, f), (this.mark = r);
            }
            static create(e, r, l, f) {
              let h = f.nodeViews[r.type.name],
                v = h && h(r, f, l);
              return (
                (!v || !v.dom) &&
                  (v = g.ZF.renderSpec(document, r.type.spec.toDOM(r, l))),
                new m(e, r, v.dom, v.contentDOM || v.dom)
              );
            }
            parseRule() {
              return this.dirty & _e || this.mark.type.spec.reparseInView
                ? null
                : {
                    mark: this.mark.type.name,
                    attrs: this.mark.attrs,
                    contentElement: this.contentDOM,
                  };
            }
            matchesMark(e) {
              return this.dirty != _e && this.mark.eq(e);
            }
            markDirty(e, r) {
              if ((super.markDirty(e, r), this.dirty != H)) {
                let l = this.parent;
                for (; !l.node; ) l = l.parent;
                l.dirty < this.dirty && (l.dirty = this.dirty),
                  (this.dirty = H);
              }
            }
            slice(e, r, l) {
              let f = m.create(this.parent, this.mark, !0, l),
                h = this.children,
                v = this.size;
              r < v && (h = Tn(h, r, v, l)), e > 0 && (h = Tn(h, 0, e, l));
              for (let C = 0; C < h.length; C++) h[C].parent = f;
              return (f.children = h), f;
            }
          }
          class S extends N {
            constructor(e, r, l, f, h, v, C, L, W) {
              super(e, [], h, v),
                (this.node = r),
                (this.outerDeco = l),
                (this.innerDeco = f),
                (this.nodeDOM = C);
            }
            static create(e, r, l, f, h, v) {
              let C = h.nodeViews[r.type.name],
                L,
                W =
                  C &&
                  C(
                    r,
                    h,
                    () => {
                      if (!L) return v;
                      if (L.parent) return L.parent.posBeforeChild(L);
                    },
                    l,
                    f,
                  ),
                Z = W && W.dom,
                De = W && W.contentDOM;
              if (r.isText) {
                if (!Z) Z = document.createTextNode(r.text);
                else if (Z.nodeType != 3)
                  throw new RangeError(
                    "Text must be rendered as a DOM text node",
                  );
              } else
                Z ||
                  ({ dom: Z, contentDOM: De } = g.ZF.renderSpec(
                    document,
                    r.type.spec.toDOM(r),
                  ));
              !De &&
                !r.isText &&
                Z.nodeName != "BR" &&
                (Z.hasAttribute("contenteditable") ||
                  (Z.contentEditable = "false"),
                r.type.spec.draggable && (Z.draggable = !0));
              let Ke = Z;
              return (
                (Z = wr(Z, l, r)),
                W
                  ? (L = new Se(e, r, l, f, Z, De || null, Ke, W, h, v + 1))
                  : r.isText
                    ? new F(e, r, l, f, Z, Ke, h)
                    : new S(e, r, l, f, Z, De || null, Ke, h, v + 1)
              );
            }
            parseRule() {
              if (this.node.type.spec.reparseInView) return null;
              let e = { node: this.node.type.name, attrs: this.node.attrs };
              if (
                (this.node.type.whitespace == "pre" &&
                  (e.preserveWhitespace = "full"),
                !this.contentDOM)
              )
                e.getContent = () => this.node.content;
              else if (!this.contentLost) e.contentElement = this.contentDOM;
              else {
                for (let r = this.children.length - 1; r >= 0; r--) {
                  let l = this.children[r];
                  if (this.dom.contains(l.dom.parentNode)) {
                    e.contentElement = l.dom.parentNode;
                    break;
                  }
                }
                e.contentElement || (e.getContent = () => g.FK.empty);
              }
              return e;
            }
            matchesNode(e, r, l) {
              return (
                this.dirty == H &&
                e.eq(this.node) &&
                zn(r, this.outerDeco) &&
                l.eq(this.innerDeco)
              );
            }
            get size() {
              return this.node.nodeSize;
            }
            get border() {
              return this.node.isLeaf ? 0 : 1;
            }
            updateChildren(e, r) {
              let l = this.node.inlineContent,
                f = r,
                h = e.composing ? this.localCompositionInfo(e, r) : null,
                v = h && h.pos > -1 ? h : null,
                C = h && h.pos < 0,
                L = new Pr(this, v && v.node, e);
              jn(
                this.node,
                this.innerDeco,
                (W, Z, De) => {
                  W.spec.marks
                    ? L.syncToMarks(W.spec.marks, l, e)
                    : W.type.side >= 0 &&
                      !De &&
                      L.syncToMarks(
                        Z == this.node.childCount
                          ? g.CU.none
                          : this.node.child(Z).marks,
                        l,
                        e,
                      ),
                    L.placeWidget(W, e, f);
                },
                (W, Z, De, Ke) => {
                  L.syncToMarks(W.marks, l, e);
                  let Ze;
                  L.findNodeMatch(W, Z, De, Ke) ||
                    (C &&
                      e.state.selection.from > f &&
                      e.state.selection.to < f + W.nodeSize &&
                      (Ze = L.findIndexWithChild(h.node)) > -1 &&
                      L.updateNodeAt(W, Z, De, Ze, e)) ||
                    L.updateNextNode(W, Z, De, e, Ke, f) ||
                    L.addNode(W, Z, De, e, f),
                    (f += W.nodeSize);
                },
              ),
                L.syncToMarks([], l, e),
                this.node.isTextblock && L.addTextblockHacks(),
                L.destroyRest(),
                (L.changed || this.dirty == de) &&
                  (v && this.protectLocalComposition(e, v),
                  et(this.contentDOM, this.children, e),
                  X && Kn(this.dom));
            }
            localCompositionInfo(e, r) {
              let { from: l, to: f } = e.state.selection;
              if (
                !(e.state.selection instanceof s.U3) ||
                l < r ||
                f > r + this.node.content.size
              )
                return null;
              let h = e.input.compositionNode;
              if (!h || !this.dom.contains(h.parentNode)) return null;
              if (this.node.inlineContent) {
                let v = h.nodeValue,
                  C = Cr(this.node.content, v, l - r, f - r);
                return C < 0 ? null : { node: h, pos: C, text: v };
              } else return { node: h, pos: -1, text: "" };
            }
            protectLocalComposition(e, { node: r, pos: l, text: f }) {
              if (this.getDesc(r)) return;
              let h = r;
              for (; h.parentNode != this.contentDOM; h = h.parentNode) {
                for (; h.previousSibling; )
                  h.parentNode.removeChild(h.previousSibling);
                for (; h.nextSibling; ) h.parentNode.removeChild(h.nextSibling);
                h.pmViewDesc && (h.pmViewDesc = void 0);
              }
              let v = new c(this, h, r, f);
              e.input.compositionNodes.push(v),
                (this.children = Tn(this.children, l, l + f.length, e, v));
            }
            update(e, r, l, f) {
              return this.dirty == _e || !e.sameMarkup(this.node)
                ? !1
                : (this.updateInner(e, r, l, f), !0);
            }
            updateInner(e, r, l, f) {
              this.updateOuterDeco(r),
                (this.node = e),
                (this.innerDeco = l),
                this.contentDOM && this.updateChildren(f, this.posAtStart),
                (this.dirty = H);
            }
            updateOuterDeco(e) {
              if (zn(e, this.outerDeco)) return;
              let r = this.nodeDOM.nodeType != 1,
                l = this.dom;
              (this.dom = Lt(
                this.dom,
                this.nodeDOM,
                Qt(this.outerDeco, this.node, r),
                Qt(e, this.node, r),
              )),
                this.dom != l &&
                  ((l.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
                (this.outerDeco = e);
            }
            selectNode() {
              this.nodeDOM.nodeType == 1 &&
                this.nodeDOM.classList.add("ProseMirror-selectednode"),
                (this.contentDOM || !this.node.type.spec.draggable) &&
                  (this.dom.draggable = !0);
            }
            deselectNode() {
              this.nodeDOM.nodeType == 1 &&
                this.nodeDOM.classList.remove("ProseMirror-selectednode"),
                (this.contentDOM || !this.node.type.spec.draggable) &&
                  this.dom.removeAttribute("draggable");
            }
            get domAtom() {
              return this.node.isAtom;
            }
          }
          function A(n, e, r, l, f) {
            wr(l, e, n);
            let h = new S(void 0, n, e, r, l, l, l, f, 0);
            return h.contentDOM && h.updateChildren(f, 0), h;
          }
          class F extends S {
            constructor(e, r, l, f, h, v, C) {
              super(e, r, l, f, h, null, v, C, 0);
            }
            parseRule() {
              let e = this.nodeDOM.parentNode;
              for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
              return { skip: e || !0 };
            }
            update(e, r, l, f) {
              return this.dirty == _e ||
                (this.dirty != H && !this.inParent()) ||
                !e.sameMarkup(this.node)
                ? !1
                : (this.updateOuterDeco(r),
                  (this.dirty != H || e.text != this.node.text) &&
                    e.text != this.nodeDOM.nodeValue &&
                    ((this.nodeDOM.nodeValue = e.text),
                    f.trackWrites == this.nodeDOM && (f.trackWrites = null)),
                  (this.node = e),
                  (this.dirty = H),
                  !0);
            }
            inParent() {
              let e = this.parent.contentDOM;
              for (let r = this.nodeDOM; r; r = r.parentNode)
                if (r == e) return !0;
              return !1;
            }
            domFromPos(e) {
              return { node: this.nodeDOM, offset: e };
            }
            localPosFromDOM(e, r, l) {
              return e == this.nodeDOM
                ? this.posAtStart + Math.min(r, this.node.text.length)
                : super.localPosFromDOM(e, r, l);
            }
            ignoreMutation(e) {
              return e.type != "characterData" && e.type != "selection";
            }
            slice(e, r, l) {
              let f = this.node.cut(e, r),
                h = document.createTextNode(f.text);
              return new F(
                this.parent,
                f,
                this.outerDeco,
                this.innerDeco,
                h,
                h,
                l,
              );
            }
            markDirty(e, r) {
              super.markDirty(e, r),
                this.dom != this.nodeDOM &&
                  (e == 0 || r == this.nodeDOM.nodeValue.length) &&
                  (this.dirty = _e);
            }
            get domAtom() {
              return !1;
            }
            isText(e) {
              return this.node.text == e;
            }
          }
          class ee extends N {
            parseRule() {
              return { ignore: !0 };
            }
            matchesHack(e) {
              return this.dirty == H && this.dom.nodeName == e;
            }
            get domAtom() {
              return !0;
            }
            get ignoreForCoords() {
              return this.dom.nodeName == "IMG";
            }
          }
          class Se extends S {
            constructor(e, r, l, f, h, v, C, L, W, Z) {
              super(e, r, l, f, h, v, C, W, Z), (this.spec = L);
            }
            update(e, r, l, f) {
              if (this.dirty == _e) return !1;
              if (this.spec.update) {
                let h = this.spec.update(e, r, l);
                return h && this.updateInner(e, r, l, f), h;
              } else
                return !this.contentDOM && !e.isLeaf
                  ? !1
                  : super.update(e, r, l, f);
            }
            selectNode() {
              this.spec.selectNode
                ? this.spec.selectNode()
                : super.selectNode();
            }
            deselectNode() {
              this.spec.deselectNode
                ? this.spec.deselectNode()
                : super.deselectNode();
            }
            setSelection(e, r, l, f) {
              this.spec.setSelection
                ? this.spec.setSelection(e, r, l)
                : super.setSelection(e, r, l, f);
            }
            destroy() {
              this.spec.destroy && this.spec.destroy(), super.destroy();
            }
            stopEvent(e) {
              return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
            }
            ignoreMutation(e) {
              return this.spec.ignoreMutation
                ? this.spec.ignoreMutation(e)
                : super.ignoreMutation(e);
            }
          }
          function et(n, e, r) {
            let l = n.firstChild,
              f = !1;
            for (let h = 0; h < e.length; h++) {
              let v = e[h],
                C = v.dom;
              if (C.parentNode == n) {
                for (; C != l; ) (l = Sr(l)), (f = !0);
                l = l.nextSibling;
              } else (f = !0), n.insertBefore(C, l);
              if (v instanceof m) {
                let L = l ? l.previousSibling : n.lastChild;
                et(v.contentDOM, v.children, r),
                  (l = L ? L.nextSibling : n.firstChild);
              }
            }
            for (; l; ) (l = Sr(l)), (f = !0);
            f && r.trackWrites == n && (r.trackWrites = null);
          }
          const st = function (n) {
            n && (this.nodeName = n);
          };
          st.prototype = Object.create(null);
          const Mt = [new st()];
          function Qt(n, e, r) {
            if (n.length == 0) return Mt;
            let l = r ? Mt[0] : new st(),
              f = [l];
            for (let h = 0; h < n.length; h++) {
              let v = n[h].type.attrs;
              if (v) {
                v.nodeName && f.push((l = new st(v.nodeName)));
                for (let C in v) {
                  let L = v[C];
                  L != null &&
                    (r &&
                      f.length == 1 &&
                      f.push((l = new st(e.isInline ? "span" : "div"))),
                    C == "class"
                      ? (l.class = (l.class ? l.class + " " : "") + L)
                      : C == "style"
                        ? (l.style = (l.style ? l.style + ";" : "") + L)
                        : C != "nodeName" && (l[C] = L));
                }
              }
            }
            return f;
          }
          function Lt(n, e, r, l) {
            if (r == Mt && l == Mt) return e;
            let f = e;
            for (let h = 0; h < l.length; h++) {
              let v = l[h],
                C = r[h];
              if (h) {
                let L;
                (C &&
                  C.nodeName == v.nodeName &&
                  f != n &&
                  (L = f.parentNode) &&
                  L.nodeName.toLowerCase() == v.nodeName) ||
                  ((L = document.createElement(v.nodeName)),
                  (L.pmIsDeco = !0),
                  L.appendChild(f),
                  (C = Mt[0])),
                  (f = L);
              }
              Vt(f, C || Mt[0], v);
            }
            return f;
          }
          function Vt(n, e, r) {
            for (let l in e)
              l != "class" &&
                l != "style" &&
                l != "nodeName" &&
                !(l in r) &&
                n.removeAttribute(l);
            for (let l in r)
              l != "class" &&
                l != "style" &&
                l != "nodeName" &&
                r[l] != e[l] &&
                n.setAttribute(l, r[l]);
            if (e.class != r.class) {
              let l = e.class ? e.class.split(" ").filter(Boolean) : [],
                f = r.class ? r.class.split(" ").filter(Boolean) : [];
              for (let h = 0; h < l.length; h++)
                f.indexOf(l[h]) == -1 && n.classList.remove(l[h]);
              for (let h = 0; h < f.length; h++)
                l.indexOf(f[h]) == -1 && n.classList.add(f[h]);
              n.classList.length == 0 && n.removeAttribute("class");
            }
            if (e.style != r.style) {
              if (e.style) {
                let l =
                    /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
                  f;
                for (; (f = l.exec(e.style)); ) n.style.removeProperty(f[1]);
              }
              r.style && (n.style.cssText += r.style);
            }
          }
          function wr(n, e, r) {
            return Lt(n, n, Mt, Qt(e, r, n.nodeType != 1));
          }
          function zn(n, e) {
            if (n.length != e.length) return !1;
            for (let r = 0; r < n.length; r++)
              if (!n[r].type.eq(e[r].type)) return !1;
            return !0;
          }
          function Sr(n) {
            let e = n.nextSibling;
            return n.parentNode.removeChild(n), e;
          }
          class Pr {
            constructor(e, r, l) {
              (this.lock = r),
                (this.view = l),
                (this.index = 0),
                (this.stack = []),
                (this.changed = !1),
                (this.top = e),
                (this.preMatch = Hn(e.node.content, e));
            }
            destroyBetween(e, r) {
              if (e != r) {
                for (let l = e; l < r; l++) this.top.children[l].destroy();
                this.top.children.splice(e, r - e), (this.changed = !0);
              }
            }
            destroyRest() {
              this.destroyBetween(this.index, this.top.children.length);
            }
            syncToMarks(e, r, l) {
              let f = 0,
                h = this.stack.length >> 1,
                v = Math.min(h, e.length);
              for (
                ;
                f < v &&
                (f == h - 1 ? this.top : this.stack[(f + 1) << 1]).matchesMark(
                  e[f],
                ) &&
                e[f].type.spec.spanning !== !1;
              )
                f++;
              for (; f < h; )
                this.destroyRest(),
                  (this.top.dirty = H),
                  (this.index = this.stack.pop()),
                  (this.top = this.stack.pop()),
                  h--;
              for (; h < e.length; ) {
                this.stack.push(this.top, this.index + 1);
                let C = -1;
                for (
                  let L = this.index;
                  L < Math.min(this.index + 3, this.top.children.length);
                  L++
                ) {
                  let W = this.top.children[L];
                  if (W.matchesMark(e[h]) && !this.isLocked(W.dom)) {
                    C = L;
                    break;
                  }
                }
                if (C > -1)
                  C > this.index &&
                    ((this.changed = !0), this.destroyBetween(this.index, C)),
                    (this.top = this.top.children[this.index]);
                else {
                  let L = m.create(this.top, e[h], r, l);
                  this.top.children.splice(this.index, 0, L),
                    (this.top = L),
                    (this.changed = !0);
                }
                (this.index = 0), h++;
              }
            }
            findNodeMatch(e, r, l, f) {
              let h = -1,
                v;
              if (
                f >= this.preMatch.index &&
                (v = this.preMatch.matches[f - this.preMatch.index]).parent ==
                  this.top &&
                v.matchesNode(e, r, l)
              )
                h = this.top.children.indexOf(v, this.index);
              else
                for (
                  let C = this.index,
                    L = Math.min(this.top.children.length, C + 5);
                  C < L;
                  C++
                ) {
                  let W = this.top.children[C];
                  if (W.matchesNode(e, r, l) && !this.preMatch.matched.has(W)) {
                    h = C;
                    break;
                  }
                }
              return h < 0
                ? !1
                : (this.destroyBetween(this.index, h), this.index++, !0);
            }
            updateNodeAt(e, r, l, f, h) {
              let v = this.top.children[f];
              return (
                v.dirty == _e && v.dom == v.contentDOM && (v.dirty = de),
                v.update(e, r, l, h)
                  ? (this.destroyBetween(this.index, f), this.index++, !0)
                  : !1
              );
            }
            findIndexWithChild(e) {
              for (;;) {
                let r = e.parentNode;
                if (!r) return -1;
                if (r == this.top.contentDOM) {
                  let l = e.pmViewDesc;
                  if (l) {
                    for (let f = this.index; f < this.top.children.length; f++)
                      if (this.top.children[f] == l) return f;
                  }
                  return -1;
                }
                e = r;
              }
            }
            updateNextNode(e, r, l, f, h, v) {
              for (let C = this.index; C < this.top.children.length; C++) {
                let L = this.top.children[C];
                if (L instanceof S) {
                  let W = this.preMatch.matched.get(L);
                  if (W != null && W != h) return !1;
                  let Z = L.dom,
                    De,
                    Ke =
                      this.isLocked(Z) &&
                      !(
                        e.isText &&
                        L.node &&
                        L.node.isText &&
                        L.nodeDOM.nodeValue == e.text &&
                        L.dirty != _e &&
                        zn(r, L.outerDeco)
                      );
                  if (!Ke && L.update(e, r, l, f))
                    return (
                      this.destroyBetween(this.index, C),
                      L.dom != Z && (this.changed = !0),
                      this.index++,
                      !0
                    );
                  if (!Ke && (De = this.recreateWrapper(L, e, r, l, f, v)))
                    return (
                      (this.top.children[this.index] = De),
                      De.contentDOM &&
                        ((De.dirty = de),
                        De.updateChildren(f, v + 1),
                        (De.dirty = H)),
                      (this.changed = !0),
                      this.index++,
                      !0
                    );
                  break;
                }
              }
              return !1;
            }
            recreateWrapper(e, r, l, f, h, v) {
              if (
                e.dirty ||
                r.isAtom ||
                !e.children.length ||
                !e.node.content.eq(r.content)
              )
                return null;
              let C = S.create(this.top, r, l, f, h, v);
              if (C.contentDOM) {
                (C.children = e.children), (e.children = []);
                for (let L of C.children) L.parent = C;
              }
              return e.destroy(), C;
            }
            addNode(e, r, l, f, h) {
              let v = S.create(this.top, e, r, l, f, h);
              v.contentDOM && v.updateChildren(f, h + 1),
                this.top.children.splice(this.index++, 0, v),
                (this.changed = !0);
            }
            placeWidget(e, r, l) {
              let f =
                this.index < this.top.children.length
                  ? this.top.children[this.index]
                  : null;
              if (
                f &&
                f.matchesWidget(e) &&
                (e == f.widget || !f.widget.type.toDOM.parentNode)
              )
                this.index++;
              else {
                let h = new o(this.top, e, r, l);
                this.top.children.splice(this.index++, 0, h),
                  (this.changed = !0);
              }
            }
            addTextblockHacks() {
              let e = this.top.children[this.index - 1],
                r = this.top;
              for (; e instanceof m; )
                (r = e), (e = r.children[r.children.length - 1]);
              (!e ||
                !(e instanceof F) ||
                /\n$/.test(e.node.text) ||
                (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
                (($ || B) &&
                  e &&
                  e.dom.contentEditable == "false" &&
                  this.addHackNode("IMG", r),
                this.addHackNode("BR", this.top));
            }
            addHackNode(e, r) {
              if (
                r == this.top &&
                this.index < r.children.length &&
                r.children[this.index].matchesHack(e)
              )
                this.index++;
              else {
                let l = document.createElement(e);
                e == "IMG" &&
                  ((l.className = "ProseMirror-separator"), (l.alt = "")),
                  e == "BR" && (l.className = "ProseMirror-trailingBreak");
                let f = new ee(this.top, [], l, null);
                r != this.top
                  ? r.children.push(f)
                  : r.children.splice(this.index++, 0, f),
                  (this.changed = !0);
              }
            }
            isLocked(e) {
              return (
                this.lock &&
                (e == this.lock ||
                  (e.nodeType == 1 && e.contains(this.lock.parentNode)))
              );
            }
          }
          function Hn(n, e) {
            let r = e,
              l = r.children.length,
              f = n.childCount,
              h = new Map(),
              v = [];
            e: for (; f > 0; ) {
              let C;
              for (;;)
                if (l) {
                  let W = r.children[l - 1];
                  if (W instanceof m) (r = W), (l = W.children.length);
                  else {
                    (C = W), l--;
                    break;
                  }
                } else {
                  if (r == e) break e;
                  (l = r.parent.children.indexOf(r)), (r = r.parent);
                }
              let L = C.node;
              if (L) {
                if (L != n.child(f - 1)) break;
                --f, h.set(C, f), v.push(C);
              }
            }
            return { index: f, matched: h, matches: v.reverse() };
          }
          function _r(n, e) {
            return n.type.side - e.type.side;
          }
          function jn(n, e, r, l) {
            let f = e.locals(n),
              h = 0;
            if (f.length == 0) {
              for (let W = 0; W < n.childCount; W++) {
                let Z = n.child(W);
                l(Z, f, e.forChild(h, Z), W), (h += Z.nodeSize);
              }
              return;
            }
            let v = 0,
              C = [],
              L = null;
            for (let W = 0; ; ) {
              let Z, De;
              for (; v < f.length && f[v].to == h; ) {
                let ot = f[v++];
                ot.widget && (Z ? (De || (De = [Z])).push(ot) : (Z = ot));
              }
              if (Z)
                if (De) {
                  De.sort(_r);
                  for (let ot = 0; ot < De.length; ot++) r(De[ot], W, !!L);
                } else r(Z, W, !!L);
              let Ke, Ze;
              if (L) (Ze = -1), (Ke = L), (L = null);
              else if (W < n.childCount) (Ze = W), (Ke = n.child(W++));
              else break;
              for (let ot = 0; ot < C.length; ot++)
                C[ot].to <= h && C.splice(ot--, 1);
              for (; v < f.length && f[v].from <= h && f[v].to > h; )
                C.push(f[v++]);
              let Fe = h + Ke.nodeSize;
              if (Ke.isText) {
                let ot = Fe;
                v < f.length && f[v].from < ot && (ot = f[v].from);
                for (let At = 0; At < C.length; At++)
                  C[At].to < ot && (ot = C[At].to);
                ot < Fe &&
                  ((L = Ke.cut(ot - h)),
                  (Ke = Ke.cut(0, ot - h)),
                  (Fe = ot),
                  (Ze = -1));
              } else for (; v < f.length && f[v].to < Fe; ) v++;
              let pt =
                Ke.isInline && !Ke.isLeaf
                  ? C.filter((ot) => !ot.inline)
                  : C.slice();
              l(Ke, pt, e.forChild(h, Ke), Ze), (h = Fe);
            }
          }
          function Kn(n) {
            if (n.nodeName == "UL" || n.nodeName == "OL") {
              let e = n.style.cssText;
              (n.style.cssText = e + "; list-style: square !important"),
                window.getComputedStyle(n).listStyle,
                (n.style.cssText = e);
            }
          }
          function Cr(n, e, r, l) {
            for (let f = 0, h = 0; f < n.childCount && h <= l; ) {
              let v = n.child(f++),
                C = h;
              if (((h += v.nodeSize), !v.isText)) continue;
              let L = v.text;
              for (; f < n.childCount; ) {
                let W = n.child(f++);
                if (((h += W.nodeSize), !W.isText)) break;
                L += W.text;
              }
              if (h >= r) {
                if (h >= l && L.slice(l - e.length - C, l - C) == e)
                  return l - e.length;
                let W = C < l ? L.lastIndexOf(e, l - C - 1) : -1;
                if (W >= 0 && W + e.length + C >= r) return C + W;
                if (
                  r == l &&
                  L.length >= l + e.length - C &&
                  L.slice(l - C, l - C + e.length) == e
                )
                  return l;
              }
            }
            return -1;
          }
          function Tn(n, e, r, l, f) {
            let h = [];
            for (let v = 0, C = 0; v < n.length; v++) {
              let L = n[v],
                W = C,
                Z = (C += L.size);
              W >= r || Z <= e
                ? h.push(L)
                : (W < e && h.push(L.slice(0, e - W, l)),
                  f && (h.push(f), (f = void 0)),
                  Z > r && h.push(L.slice(r - W, L.size, l)));
            }
            return h;
          }
          function Vn(n, e = null) {
            let r = n.domSelectionRange(),
              l = n.state.doc;
            if (!r.focusNode) return null;
            let f = n.docView.nearestDesc(r.focusNode),
              h = f && f.size == 0,
              v = n.docView.posFromDOM(r.focusNode, r.focusOffset, 1);
            if (v < 0) return null;
            let C = l.resolve(v),
              L,
              W;
            if (ge(r)) {
              for (L = C; f && !f.node; ) f = f.parent;
              let Z = f.node;
              if (
                f &&
                Z.isAtom &&
                s.nh.isSelectable(Z) &&
                f.parent &&
                !(Z.isInline && Me(r.focusNode, r.focusOffset, f.dom))
              ) {
                let De = f.posBefore;
                W = new s.nh(v == De ? C : l.resolve(De));
              }
            } else {
              let Z = n.docView.posFromDOM(r.anchorNode, r.anchorOffset, 1);
              if (Z < 0) return null;
              L = l.resolve(Z);
            }
            if (!W) {
              let Z =
                e == "pointer" || (n.state.selection.head < C.pos && !h)
                  ? 1
                  : -1;
              W = J(n, L, C, Z);
            }
            return W;
          }
          function Un(n) {
            return n.editable
              ? n.hasFocus()
              : q(n) &&
                  document.activeElement &&
                  document.activeElement.contains(n.dom);
          }
          function qt(n, e = !1) {
            let r = n.state.selection;
            if ((k(n, r), !!Un(n))) {
              if (
                !e &&
                n.input.mouseDown &&
                n.input.mouseDown.allowDefault &&
                B
              ) {
                let l = n.domSelectionRange(),
                  f = n.domObserver.currentSelection;
                if (
                  l.anchorNode &&
                  f.anchorNode &&
                  G(l.anchorNode, l.anchorOffset, f.anchorNode, f.anchorOffset)
                ) {
                  (n.input.mouseDown.delayedSelectionSync = !0),
                    n.domObserver.setCurSelection();
                  return;
                }
              }
              if ((n.domObserver.disconnectSelection(), n.cursorWrapper)) O(n);
              else {
                let { anchor: l, head: f } = r,
                  h,
                  v;
                cn &&
                  !(r instanceof s.U3) &&
                  (r.$from.parent.inlineContent || (h = Er(n, r.from)),
                  !r.empty &&
                    !r.$from.parent.inlineContent &&
                    (v = Er(n, r.to))),
                  n.docView.setSelection(l, f, n.root, e),
                  cn && (h && x(h), v && x(v)),
                  r.visible
                    ? n.dom.classList.remove("ProseMirror-hideselection")
                    : (n.dom.classList.add("ProseMirror-hideselection"),
                      "onselectionchange" in document && E(n));
              }
              n.domObserver.setCurSelection(), n.domObserver.connectSelection();
            }
          }
          const cn = $ || (B && ne < 63);
          function Er(n, e) {
            let { node: r, offset: l } = n.docView.domFromPos(e, 0),
              f = l < r.childNodes.length ? r.childNodes[l] : null,
              h = l ? r.childNodes[l - 1] : null;
            if ($ && f && f.contentEditable == "false") return w(f);
            if (
              (!f || f.contentEditable == "false") &&
              (!h || h.contentEditable == "false")
            ) {
              if (f) return w(f);
              if (h) return w(h);
            }
          }
          function w(n) {
            return (
              (n.contentEditable = "true"),
              $ && n.draggable && ((n.draggable = !1), (n.wasDraggable = !0)),
              n
            );
          }
          function x(n) {
            (n.contentEditable = "false"),
              n.wasDraggable && ((n.draggable = !0), (n.wasDraggable = null));
          }
          function E(n) {
            let e = n.dom.ownerDocument;
            e.removeEventListener(
              "selectionchange",
              n.input.hideSelectionGuard,
            );
            let r = n.domSelectionRange(),
              l = r.anchorNode,
              f = r.anchorOffset;
            e.addEventListener(
              "selectionchange",
              (n.input.hideSelectionGuard = () => {
                (r.anchorNode != l || r.anchorOffset != f) &&
                  (e.removeEventListener(
                    "selectionchange",
                    n.input.hideSelectionGuard,
                  ),
                  setTimeout(() => {
                    (!Un(n) || n.state.selection.visible) &&
                      n.dom.classList.remove("ProseMirror-hideselection");
                  }, 20));
              }),
            );
          }
          function O(n) {
            let e = n.domSelection(),
              r = document.createRange(),
              l = n.cursorWrapper.dom,
              f = l.nodeName == "IMG";
            f ? r.setEnd(l.parentNode, _(l) + 1) : r.setEnd(l, 0),
              r.collapse(!1),
              e.removeAllRanges(),
              e.addRange(r),
              !f &&
                !n.state.selection.visible &&
                nt &&
                Xe <= 11 &&
                ((l.disabled = !0), (l.disabled = !1));
          }
          function k(n, e) {
            if (e instanceof s.nh) {
              let r = n.docView.descAt(e.from);
              r != n.lastSelectedViewDesc &&
                (z(n), r && r.selectNode(), (n.lastSelectedViewDesc = r));
            } else z(n);
          }
          function z(n) {
            n.lastSelectedViewDesc &&
              (n.lastSelectedViewDesc.parent &&
                n.lastSelectedViewDesc.deselectNode(),
              (n.lastSelectedViewDesc = void 0));
          }
          function J(n, e, r, l) {
            return (
              n.someProp("createSelectionBetween", (f) => f(n, e, r)) ||
              s.U3.between(e, r, l)
            );
          }
          function te(n) {
            return n.editable && !n.hasFocus() ? !1 : q(n);
          }
          function q(n) {
            let e = n.domSelectionRange();
            if (!e.anchorNode) return !1;
            try {
              return (
                n.dom.contains(
                  e.anchorNode.nodeType == 3
                    ? e.anchorNode.parentNode
                    : e.anchorNode,
                ) &&
                (n.editable ||
                  n.dom.contains(
                    e.focusNode.nodeType == 3
                      ? e.focusNode.parentNode
                      : e.focusNode,
                  ))
              );
            } catch {
              return !1;
            }
          }
          function le(n) {
            let e = n.docView.domFromPos(n.state.selection.anchor, 0),
              r = n.domSelectionRange();
            return G(e.node, e.offset, r.anchorNode, r.anchorOffset);
          }
          function ke(n, e) {
            let { $anchor: r, $head: l } = n.selection,
              f = e > 0 ? r.max(l) : r.min(l),
              h = f.parent.inlineContent
                ? f.depth
                  ? n.doc.resolve(e > 0 ? f.after() : f.before())
                  : null
                : f;
            return h && s.LN.findFrom(h, e);
          }
          function Oe(n, e) {
            return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
          }
          function He(n, e, r) {
            let l = n.state.selection;
            if (l instanceof s.U3)
              if (r.indexOf("s") > -1) {
                let { $head: f } = l,
                  h = f.textOffset ? null : e < 0 ? f.nodeBefore : f.nodeAfter;
                if (!h || h.isText || !h.isLeaf) return !1;
                let v = n.state.doc.resolve(
                  f.pos + h.nodeSize * (e < 0 ? -1 : 1),
                );
                return Oe(n, new s.U3(l.$anchor, v));
              } else if (l.empty) {
                if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
                  let f = ke(n.state, e);
                  return f && f instanceof s.nh ? Oe(n, f) : !1;
                } else if (!(ie && r.indexOf("m") > -1)) {
                  let f = l.$head,
                    h = f.textOffset
                      ? null
                      : e < 0
                        ? f.nodeBefore
                        : f.nodeAfter,
                    v;
                  if (!h || h.isText) return !1;
                  let C = e < 0 ? f.pos - h.nodeSize : f.pos;
                  return h.isAtom ||
                    ((v = n.docView.descAt(C)) && !v.contentDOM)
                    ? s.nh.isSelectable(h)
                      ? Oe(
                          n,
                          new s.nh(
                            e < 0 ? n.state.doc.resolve(f.pos - h.nodeSize) : f,
                          ),
                        )
                      : Ve
                        ? Oe(
                            n,
                            new s.U3(
                              n.state.doc.resolve(e < 0 ? C : C + h.nodeSize),
                            ),
                          )
                        : !1
                    : !1;
                }
              } else return !1;
            else {
              if (l instanceof s.nh && l.node.isInline)
                return Oe(n, new s.U3(e > 0 ? l.$to : l.$from));
              {
                let f = ke(n.state, e);
                return f ? Oe(n, f) : !1;
              }
            }
          }
          function $e(n) {
            return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
          }
          function it(n, e) {
            let r = n.pmViewDesc;
            return (
              r && r.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR")
            );
          }
          function xt(n, e) {
            return e < 0 ? Nt(n) : _t(n);
          }
          function Nt(n) {
            let e = n.domSelectionRange(),
              r = e.focusNode,
              l = e.focusOffset;
            if (!r) return;
            let f,
              h,
              v = !1;
            for (
              tt &&
              r.nodeType == 1 &&
              l < $e(r) &&
              it(r.childNodes[l], -1) &&
              (v = !0);
              ;
            )
              if (l > 0) {
                if (r.nodeType != 1) break;
                {
                  let C = r.childNodes[l - 1];
                  if (it(C, -1)) (f = r), (h = --l);
                  else if (C.nodeType == 3) (r = C), (l = r.nodeValue.length);
                  else break;
                }
              } else {
                if (dn(r)) break;
                {
                  let C = r.previousSibling;
                  for (; C && it(C, -1); )
                    (f = r.parentNode), (h = _(C)), (C = C.previousSibling);
                  if (C) (r = C), (l = $e(r));
                  else {
                    if (((r = r.parentNode), r == n.dom)) break;
                    l = 0;
                  }
                }
              }
            v ? en(n, r, l) : f && en(n, f, h);
          }
          function _t(n) {
            let e = n.domSelectionRange(),
              r = e.focusNode,
              l = e.focusOffset;
            if (!r) return;
            let f = $e(r),
              h,
              v;
            for (;;)
              if (l < f) {
                if (r.nodeType != 1) break;
                let C = r.childNodes[l];
                if (it(C, 1)) (h = r), (v = ++l);
                else break;
              } else {
                if (dn(r)) break;
                {
                  let C = r.nextSibling;
                  for (; C && it(C, 1); )
                    (h = C.parentNode), (v = _(C) + 1), (C = C.nextSibling);
                  if (C) (r = C), (l = 0), (f = $e(r));
                  else {
                    if (((r = r.parentNode), r == n.dom)) break;
                    l = f = 0;
                  }
                }
              }
            h && en(n, h, v);
          }
          function dn(n) {
            let e = n.pmViewDesc;
            return e && e.node && e.node.isBlock;
          }
          function wn(n, e) {
            for (; n && e == n.childNodes.length && !Q(n); )
              (e = _(n) + 1), (n = n.parentNode);
            for (; n && e < n.childNodes.length; ) {
              let r = n.childNodes[e];
              if (r.nodeType == 3) return r;
              if (r.nodeType == 1 && r.contentEditable == "false") break;
              (n = r), (e = 0);
            }
          }
          function Wn(n, e) {
            for (; n && !e && !Q(n); ) (e = _(n)), (n = n.parentNode);
            for (; n && e; ) {
              let r = n.childNodes[e - 1];
              if (r.nodeType == 3) return r;
              if (r.nodeType == 1 && r.contentEditable == "false") break;
              (n = r), (e = n.childNodes.length);
            }
          }
          function en(n, e, r) {
            if (e.nodeType != 3) {
              let h, v;
              (v = wn(e, r))
                ? ((e = v), (r = 0))
                : (h = Wn(e, r)) && ((e = h), (r = h.nodeValue.length));
            }
            let l = n.domSelection();
            if (ge(l)) {
              let h = document.createRange();
              h.setEnd(e, r),
                h.setStart(e, r),
                l.removeAllRanges(),
                l.addRange(h);
            } else l.extend && l.extend(e, r);
            n.domObserver.setCurSelection();
            let { state: f } = n;
            setTimeout(() => {
              n.state == f && qt(n);
            }, 50);
          }
          function Sn(n, e) {
            let r = n.state.doc.resolve(e);
            if (!(B || xe) && r.parent.inlineContent) {
              let f = n.coordsAtPos(e);
              if (e > r.start()) {
                let h = n.coordsAtPos(e - 1),
                  v = (h.top + h.bottom) / 2;
                if (v > f.top && v < f.bottom && Math.abs(h.left - f.left) > 1)
                  return h.left < f.left ? "ltr" : "rtl";
              }
              if (e < r.end()) {
                let h = n.coordsAtPos(e + 1),
                  v = (h.top + h.bottom) / 2;
                if (v > f.top && v < f.bottom && Math.abs(h.left - f.left) > 1)
                  return h.left > f.left ? "ltr" : "rtl";
              }
            }
            return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
          }
          function pn(n, e, r) {
            let l = n.state.selection;
            if (
              (l instanceof s.U3 && !l.empty) ||
              r.indexOf("s") > -1 ||
              (ie && r.indexOf("m") > -1)
            )
              return !1;
            let { $from: f, $to: h } = l;
            if (
              !f.parent.inlineContent ||
              n.endOfTextblock(e < 0 ? "up" : "down")
            ) {
              let v = ke(n.state, e);
              if (v && v instanceof s.nh) return Oe(n, v);
            }
            if (!f.parent.inlineContent) {
              let v = e < 0 ? f : h,
                C = l instanceof s.i5 ? s.LN.near(v, e) : s.LN.findFrom(v, e);
              return C ? Oe(n, C) : !1;
            }
            return !1;
          }
          function kn(n, e) {
            if (!(n.state.selection instanceof s.U3)) return !0;
            let { $head: r, $anchor: l, empty: f } = n.state.selection;
            if (!r.sameParent(l)) return !0;
            if (!f) return !1;
            if (n.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
            let h = !r.textOffset && (e < 0 ? r.nodeBefore : r.nodeAfter);
            if (h && !h.isText) {
              let v = n.state.tr;
              return (
                e < 0
                  ? v.delete(r.pos - h.nodeSize, r.pos)
                  : v.delete(r.pos, r.pos + h.nodeSize),
                n.dispatch(v),
                !0
              );
            }
            return !1;
          }
          function ni(n, e, r) {
            n.domObserver.stop(),
              (e.contentEditable = r),
              n.domObserver.start();
          }
          function Fi(n) {
            if (!$ || n.state.selection.$head.parentOffset > 0) return !1;
            let { focusNode: e, focusOffset: r } = n.domSelectionRange();
            if (
              e &&
              e.nodeType == 1 &&
              r == 0 &&
              e.firstChild &&
              e.firstChild.contentEditable == "false"
            ) {
              let l = e.firstChild;
              ni(n, l, "true"), setTimeout(() => ni(n, l, "false"), 20);
            }
            return !1;
          }
          function Bi(n) {
            let e = "";
            return (
              n.ctrlKey && (e += "c"),
              n.metaKey && (e += "m"),
              n.altKey && (e += "a"),
              n.shiftKey && (e += "s"),
              e
            );
          }
          function Li(n, e) {
            let r = e.keyCode,
              l = Bi(e);
            if (r == 8 || (ie && r == 72 && l == "c"))
              return kn(n, -1) || xt(n, -1);
            if ((r == 46 && !e.shiftKey) || (ie && r == 68 && l == "c"))
              return kn(n, 1) || xt(n, 1);
            if (r == 13 || r == 27) return !0;
            if (r == 37 || (ie && r == 66 && l == "c")) {
              let f =
                r == 37
                  ? Sn(n, n.state.selection.from) == "ltr"
                    ? -1
                    : 1
                  : -1;
              return He(n, f, l) || xt(n, f);
            } else if (r == 39 || (ie && r == 70 && l == "c")) {
              let f =
                r == 39 ? (Sn(n, n.state.selection.from) == "ltr" ? 1 : -1) : 1;
              return He(n, f, l) || xt(n, f);
            } else {
              if (r == 38 || (ie && r == 80 && l == "c"))
                return pn(n, -1, l) || xt(n, -1);
              if (r == 40 || (ie && r == 78 && l == "c"))
                return Fi(n) || pn(n, 1, l) || xt(n, 1);
              if (
                l == (ie ? "m" : "c") &&
                (r == 66 || r == 73 || r == 89 || r == 90)
              )
                return !0;
            }
            return !1;
          }
          function ri(n, e) {
            n.someProp("transformCopied", (Ze) => {
              e = Ze(e, n);
            });
            let r = [],
              { content: l, openStart: f, openEnd: h } = e;
            for (
              ;
              f > 1 &&
              h > 1 &&
              l.childCount == 1 &&
              l.firstChild.childCount == 1;
            ) {
              f--, h--;
              let Ze = l.firstChild;
              r.push(
                Ze.type.name,
                Ze.attrs != Ze.type.defaultAttrs ? Ze.attrs : null,
              ),
                (l = Ze.content);
            }
            let v =
                n.someProp("clipboardSerializer") ||
                g.ZF.fromSchema(n.state.schema),
              C = ci(),
              L = C.createElement("div");
            L.appendChild(v.serializeFragment(l, { document: C }));
            let W = L.firstChild,
              Z,
              De = 0;
            for (
              ;
              W && W.nodeType == 1 && (Z = ai[W.nodeName.toLowerCase()]);
            ) {
              for (let Ze = Z.length - 1; Ze >= 0; Ze--) {
                let Fe = C.createElement(Z[Ze]);
                for (; L.firstChild; ) Fe.appendChild(L.firstChild);
                L.appendChild(Fe), De++;
              }
              W = L.firstChild;
            }
            W &&
              W.nodeType == 1 &&
              W.setAttribute(
                "data-pm-slice",
                `${f} ${h}${De ? ` -${De}` : ""} ${JSON.stringify(r)}`,
              );
            let Ke =
              n.someProp("clipboardTextSerializer", (Ze) => Ze(e, n)) ||
              e.content.textBetween(
                0,
                e.content.size,
                `

`,
              );
            return { dom: L, text: Ke, slice: e };
          }
          function ii(n, e, r, l, f) {
            let h = f.parent.type.spec.code,
              v,
              C;
            if (!r && !e) return null;
            let L = e && (l || h || !r);
            if (L) {
              if (
                (n.someProp("transformPastedText", (Ke) => {
                  e = Ke(e, h || l, n);
                }),
                h)
              )
                return e
                  ? new g.Ji(
                      g.FK.from(
                        n.state.schema.text(
                          e.replace(
                            /\r\n?/g,
                            `
`,
                          ),
                        ),
                      ),
                      0,
                      0,
                    )
                  : g.Ji.empty;
              let De = n.someProp("clipboardTextParser", (Ke) =>
                Ke(e, f, l, n),
              );
              if (De) C = De;
              else {
                let Ke = f.marks(),
                  { schema: Ze } = n.state,
                  Fe = g.ZF.fromSchema(Ze);
                (v = document.createElement("div")),
                  e.split(/(?:\r\n?|\n)+/).forEach((pt) => {
                    let ot = v.appendChild(document.createElement("p"));
                    pt && ot.appendChild(Fe.serializeNode(Ze.text(pt, Ke)));
                  });
              }
            } else
              n.someProp("transformPastedHTML", (De) => {
                r = De(r, n);
              }),
                (v = Hi(r)),
                Ve && ji(v);
            let W = v && v.querySelector("[data-pm-slice]"),
              Z =
                W &&
                /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
                  W.getAttribute("data-pm-slice") || "",
                );
            if (Z && Z[3])
              for (let De = +Z[3]; De > 0; De--) {
                let Ke = v.firstChild;
                for (; Ke && Ke.nodeType != 1; ) Ke = Ke.nextSibling;
                if (!Ke) break;
                v = Ke;
              }
            if (
              (C ||
                (C = (
                  n.someProp("clipboardParser") ||
                  n.someProp("domParser") ||
                  g.S4.fromSchema(n.state.schema)
                ).parseSlice(v, {
                  preserveWhitespace: !!(L || Z),
                  context: f,
                  ruleFromNode(Ke) {
                    return Ke.nodeName == "BR" &&
                      !Ke.nextSibling &&
                      Ke.parentNode &&
                      !zi.test(Ke.parentNode.nodeName)
                      ? { ignore: !0 }
                      : null;
                  },
                })),
              Z)
            )
              C = Ki(li(C, +Z[1], +Z[2]), Z[4]);
            else if (
              ((C = g.Ji.maxOpen(Nn(C.content, f), !0)),
              C.openStart || C.openEnd)
            ) {
              let De = 0,
                Ke = 0;
              for (
                let Ze = C.content.firstChild;
                De < C.openStart && !Ze.type.spec.isolating;
                De++, Ze = Ze.firstChild
              );
              for (
                let Ze = C.content.lastChild;
                Ke < C.openEnd && !Ze.type.spec.isolating;
                Ke++, Ze = Ze.lastChild
              );
              C = li(C, De, Ke);
            }
            return (
              n.someProp("transformPasted", (De) => {
                C = De(C, n);
              }),
              C
            );
          }
          const zi =
            /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
          function Nn(n, e) {
            if (n.childCount < 2) return n;
            for (let r = e.depth; r >= 0; r--) {
              let f = e.node(r).contentMatchAt(e.index(r)),
                h,
                v = [];
              if (
                (n.forEach((C) => {
                  if (!v) return;
                  let L = f.findWrapping(C.type),
                    W;
                  if (!L) return (v = null);
                  if (
                    (W =
                      v.length && h.length && oi(L, h, C, v[v.length - 1], 0))
                  )
                    v[v.length - 1] = W;
                  else {
                    v.length &&
                      (v[v.length - 1] = si(v[v.length - 1], h.length));
                    let Z = Ir(C, L);
                    v.push(Z), (f = f.matchType(Z.type)), (h = L);
                  }
                }),
                v)
              )
                return g.FK.from(v);
            }
            return n;
          }
          function Ir(n, e, r = 0) {
            for (let l = e.length - 1; l >= r; l--)
              n = e[l].create(null, g.FK.from(n));
            return n;
          }
          function oi(n, e, r, l, f) {
            if (f < n.length && f < e.length && n[f] == e[f]) {
              let h = oi(n, e, r, l.lastChild, f + 1);
              if (h) return l.copy(l.content.replaceChild(l.childCount - 1, h));
              if (
                l
                  .contentMatchAt(l.childCount)
                  .matchType(f == n.length - 1 ? r.type : n[f + 1])
              )
                return l.copy(l.content.append(g.FK.from(Ir(r, n, f + 1))));
            }
          }
          function si(n, e) {
            if (e == 0) return n;
            let r = n.content.replaceChild(
                n.childCount - 1,
                si(n.lastChild, e - 1),
              ),
              l = n.contentMatchAt(n.childCount).fillBefore(g.FK.empty, !0);
            return n.copy(r.append(l));
          }
          function Fr(n, e, r, l, f, h) {
            let v = e < 0 ? n.firstChild : n.lastChild,
              C = v.content;
            return (
              n.childCount > 1 && (h = 0),
              f < l - 1 && (C = Fr(C, e, r, l, f + 1, h)),
              f >= r &&
                (C =
                  e < 0
                    ? v
                        .contentMatchAt(0)
                        .fillBefore(C, h <= f)
                        .append(C)
                    : C.append(
                        v
                          .contentMatchAt(v.childCount)
                          .fillBefore(g.FK.empty, !0),
                      )),
              n.replaceChild(e < 0 ? 0 : n.childCount - 1, v.copy(C))
            );
          }
          function li(n, e, r) {
            return (
              e < n.openStart &&
                (n = new g.Ji(
                  Fr(n.content, -1, e, n.openStart, 0, n.openEnd),
                  e,
                  n.openEnd,
                )),
              r < n.openEnd &&
                (n = new g.Ji(
                  Fr(n.content, 1, r, n.openEnd, 0, 0),
                  n.openStart,
                  r,
                )),
              n
            );
          }
          const ai = {
            thead: ["table"],
            tbody: ["table"],
            tfoot: ["table"],
            caption: ["table"],
            colgroup: ["table"],
            col: ["table", "colgroup"],
            tr: ["table", "tbody"],
            td: ["table", "tbody", "tr"],
            th: ["table", "tbody", "tr"],
          };
          let Jn = null;
          function ci() {
            return (
              Jn || (Jn = document.implementation.createHTMLDocument("title"))
            );
          }
          function Hi(n) {
            let e = /^(\s*<meta [^>]*>)*/.exec(n);
            e && (n = n.slice(e[0].length));
            let r = ci().createElement("div"),
              l = /<([a-z][^>\s]+)/i.exec(n),
              f;
            if (
              ((f = l && ai[l[1].toLowerCase()]) &&
                (n =
                  f.map((h) => "<" + h + ">").join("") +
                  n +
                  f
                    .map((h) => "</" + h + ">")
                    .reverse()
                    .join("")),
              (r.innerHTML = n),
              f)
            )
              for (let h = 0; h < f.length; h++) r = r.querySelector(f[h]) || r;
            return r;
          }
          function ji(n) {
            let e = n.querySelectorAll(
              B
                ? "span:not([class]):not([style])"
                : "span.Apple-converted-space",
            );
            for (let r = 0; r < e.length; r++) {
              let l = e[r];
              l.childNodes.length == 1 &&
                l.textContent == "\xA0" &&
                l.parentNode &&
                l.parentNode.replaceChild(
                  n.ownerDocument.createTextNode(" "),
                  l,
                );
            }
          }
          function Ki(n, e) {
            if (!n.size) return n;
            let r = n.content.firstChild.type.schema,
              l;
            try {
              l = JSON.parse(e);
            } catch {
              return n;
            }
            let { content: f, openStart: h, openEnd: v } = n;
            for (let C = l.length - 2; C >= 0; C -= 2) {
              let L = r.nodes[l[C]];
              if (!L || L.hasRequiredAttrs()) break;
              (f = g.FK.from(L.create(l[C + 1], f))), h++, v++;
            }
            return new g.Ji(f, h, v);
          }
          const Ut = {},
            Wt = {},
            Vi = { touchstart: !0, touchmove: !0 };
          class Ui {
            constructor() {
              (this.shiftKey = !1),
                (this.mouseDown = null),
                (this.lastKeyCode = null),
                (this.lastKeyCodeTime = 0),
                (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
                (this.lastSelectionOrigin = null),
                (this.lastSelectionTime = 0),
                (this.lastIOSEnter = 0),
                (this.lastIOSEnterFallbackTimeout = -1),
                (this.lastFocus = 0),
                (this.lastTouch = 0),
                (this.lastAndroidDelete = 0),
                (this.composing = !1),
                (this.compositionNode = null),
                (this.composingTimeout = -1),
                (this.compositionNodes = []),
                (this.compositionEndedAt = -2e8),
                (this.compositionID = 1),
                (this.compositionPendingChanges = 0),
                (this.domChangeCount = 0),
                (this.eventHandlers = Object.create(null)),
                (this.hideSelectionGuard = null);
            }
          }
          function Dn(n) {
            for (let e in Ut) {
              let r = Ut[e];
              n.dom.addEventListener(
                e,
                (n.input.eventHandlers[e] = (l) => {
                  Rn(n, l) &&
                    !Lr(n, l) &&
                    (n.editable || !(l.type in Wt)) &&
                    r(n, l);
                }),
                Vi[e] ? { passive: !0 } : void 0,
              );
            }
            $ && n.dom.addEventListener("input", () => null), Br(n);
          }
          function tn(n, e) {
            (n.input.lastSelectionOrigin = e),
              (n.input.lastSelectionTime = Date.now());
          }
          function Wi(n) {
            n.domObserver.stop();
            for (let e in n.input.eventHandlers)
              n.dom.removeEventListener(e, n.input.eventHandlers[e]);
            clearTimeout(n.input.composingTimeout),
              clearTimeout(n.input.lastIOSEnterFallbackTimeout);
          }
          function Br(n) {
            n.someProp("handleDOMEvents", (e) => {
              for (let r in e)
                n.input.eventHandlers[r] ||
                  n.dom.addEventListener(
                    r,
                    (n.input.eventHandlers[r] = (l) => Lr(n, l)),
                  );
            });
          }
          function Lr(n, e) {
            return n.someProp("handleDOMEvents", (r) => {
              let l = r[e.type];
              return l ? l(n, e) || e.defaultPrevented : !1;
            });
          }
          function Rn(n, e) {
            if (!e.bubbles) return !0;
            if (e.defaultPrevented) return !1;
            for (let r = e.target; r != n.dom; r = r.parentNode)
              if (
                !r ||
                r.nodeType == 11 ||
                (r.pmViewDesc && r.pmViewDesc.stopEvent(e))
              )
                return !1;
            return !0;
          }
          function Gn(n, e) {
            !Lr(n, e) &&
              Ut[e.type] &&
              (n.editable || !(e.type in Wt)) &&
              Ut[e.type](n, e);
          }
          (Wt.keydown = (n, e) => {
            let r = e;
            if (
              ((n.input.shiftKey = r.keyCode == 16 || r.shiftKey),
              !Kr(n, r) &&
                ((n.input.lastKeyCode = r.keyCode),
                (n.input.lastKeyCodeTime = Date.now()),
                !(Ce && B && r.keyCode == 13)))
            )
              if (
                (r.keyCode != 229 && n.domObserver.forceFlush(),
                X && r.keyCode == 13 && !r.ctrlKey && !r.altKey && !r.metaKey)
              ) {
                let l = Date.now();
                (n.input.lastIOSEnter = l),
                  (n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                    n.input.lastIOSEnter == l &&
                      (n.someProp("handleKeyDown", (f) =>
                        f(n, Ae(13, "Enter")),
                      ),
                      (n.input.lastIOSEnter = 0));
                  }, 200));
              } else
                n.someProp("handleKeyDown", (l) => l(n, r)) || Li(n, r)
                  ? r.preventDefault()
                  : tn(n, "key");
          }),
            (Wt.keyup = (n, e) => {
              e.keyCode == 16 && (n.input.shiftKey = !1);
            }),
            (Wt.keypress = (n, e) => {
              let r = e;
              if (
                Kr(n, r) ||
                !r.charCode ||
                (r.ctrlKey && !r.altKey) ||
                (ie && r.metaKey)
              )
                return;
              if (n.someProp("handleKeyPress", (f) => f(n, r))) {
                r.preventDefault();
                return;
              }
              let l = n.state.selection;
              if (!(l instanceof s.U3) || !l.$from.sameParent(l.$to)) {
                let f = String.fromCharCode(r.charCode);
                !/[\r\n]/.test(f) &&
                  !n.someProp("handleTextInput", (h) =>
                    h(n, l.$from.pos, l.$to.pos, f),
                  ) &&
                  n.dispatch(n.state.tr.insertText(f).scrollIntoView()),
                  r.preventDefault();
              }
            });
          function Or(n) {
            return { left: n.clientX, top: n.clientY };
          }
          function Mr(n, e) {
            let r = e.x - n.clientX,
              l = e.y - n.clientY;
            return r * r + l * l < 100;
          }
          function zr(n, e, r, l, f) {
            if (l == -1) return !1;
            let h = n.state.doc.resolve(l);
            for (let v = h.depth + 1; v > 0; v--)
              if (
                n.someProp(e, (C) =>
                  v > h.depth
                    ? C(n, r, h.nodeAfter, h.before(v), f, !0)
                    : C(n, r, h.node(v), h.before(v), f, !1),
                )
              )
                return !0;
            return !1;
          }
          function gn(n, e, r) {
            n.focused || n.focus();
            let l = n.state.tr.setSelection(e);
            r == "pointer" && l.setMeta("pointer", !0), n.dispatch(l);
          }
          function Ji(n, e) {
            if (e == -1) return !1;
            let r = n.state.doc.resolve(e),
              l = r.nodeAfter;
            return l && l.isAtom && s.nh.isSelectable(l)
              ? (gn(n, new s.nh(r), "pointer"), !0)
              : !1;
          }
          function Hr(n, e) {
            if (e == -1) return !1;
            let r = n.state.selection,
              l,
              f;
            r instanceof s.nh && (l = r.node);
            let h = n.state.doc.resolve(e);
            for (let v = h.depth + 1; v > 0; v--) {
              let C = v > h.depth ? h.nodeAfter : h.node(v);
              if (s.nh.isSelectable(C)) {
                l &&
                r.$from.depth > 0 &&
                v >= r.$from.depth &&
                h.before(r.$from.depth + 1) == r.$from.pos
                  ? (f = h.before(r.$from.depth))
                  : (f = h.before(v));
                break;
              }
            }
            return f != null
              ? (gn(n, s.nh.create(n.state.doc, f), "pointer"), !0)
              : !1;
          }
          function Gi(n, e, r, l, f) {
            return (
              zr(n, "handleClickOn", e, r, l) ||
              n.someProp("handleClick", (h) => h(n, e, l)) ||
              (f ? Hr(n, r) : Ji(n, r))
            );
          }
          function Go(n, e, r, l) {
            return (
              zr(n, "handleDoubleClickOn", e, r, l) ||
              n.someProp("handleDoubleClick", (f) => f(n, e, l))
            );
          }
          function $i(n, e, r, l) {
            return (
              zr(n, "handleTripleClickOn", e, r, l) ||
              n.someProp("handleTripleClick", (f) => f(n, e, l)) ||
              fi(n, r, l)
            );
          }
          function fi(n, e, r) {
            if (r.button != 0) return !1;
            let l = n.state.doc;
            if (e == -1)
              return l.inlineContent
                ? (gn(n, s.U3.create(l, 0, l.content.size), "pointer"), !0)
                : !1;
            let f = l.resolve(e);
            for (let h = f.depth + 1; h > 0; h--) {
              let v = h > f.depth ? f.nodeAfter : f.node(h),
                C = f.before(h);
              if (v.inlineContent)
                gn(n, s.U3.create(l, C + 1, C + 1 + v.content.size), "pointer");
              else if (s.nh.isSelectable(v))
                gn(n, s.nh.create(l, C), "pointer");
              else continue;
              return !0;
            }
          }
          function Ar(n) {
            return kr(n);
          }
          const jr = ie ? "metaKey" : "ctrlKey";
          Ut.mousedown = (n, e) => {
            let r = e;
            n.input.shiftKey = r.shiftKey;
            let l = Ar(n),
              f = Date.now(),
              h = "singleClick";
            f - n.input.lastClick.time < 500 &&
              Mr(r, n.input.lastClick) &&
              !r[jr] &&
              (n.input.lastClick.type == "singleClick"
                ? (h = "doubleClick")
                : n.input.lastClick.type == "doubleClick" &&
                  (h = "tripleClick")),
              (n.input.lastClick = {
                time: f,
                x: r.clientX,
                y: r.clientY,
                type: h,
              });
            let v = n.posAtCoords(Or(r));
            v &&
              (h == "singleClick"
                ? (n.input.mouseDown && n.input.mouseDown.done(),
                  (n.input.mouseDown = new Xi(n, v, r, !!l)))
                : (h == "doubleClick" ? Go : $i)(n, v.pos, v.inside, r)
                  ? r.preventDefault()
                  : tn(n, "pointer"));
          };
          class Xi {
            constructor(e, r, l, f) {
              (this.view = e),
                (this.pos = r),
                (this.event = l),
                (this.flushed = f),
                (this.delayedSelectionSync = !1),
                (this.mightDrag = null),
                (this.startDoc = e.state.doc),
                (this.selectNode = !!l[jr]),
                (this.allowDefault = l.shiftKey);
              let h, v;
              if (r.inside > -1)
                (h = e.state.doc.nodeAt(r.inside)), (v = r.inside);
              else {
                let Z = e.state.doc.resolve(r.pos);
                (h = Z.parent), (v = Z.depth ? Z.before() : 0);
              }
              const C = f ? null : l.target,
                L = C ? e.docView.nearestDesc(C, !0) : null;
              this.target = L ? L.dom : null;
              let { selection: W } = e.state;
              ((l.button == 0 &&
                h.type.spec.draggable &&
                h.type.spec.selectable !== !1) ||
                (W instanceof s.nh && W.from <= v && W.to > v)) &&
                (this.mightDrag = {
                  node: h,
                  pos: v,
                  addAttr: !!(this.target && !this.target.draggable),
                  setUneditable: !!(
                    this.target &&
                    tt &&
                    !this.target.hasAttribute("contentEditable")
                  ),
                }),
                this.target &&
                  this.mightDrag &&
                  (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
                  (this.view.domObserver.stop(),
                  this.mightDrag.addAttr && (this.target.draggable = !0),
                  this.mightDrag.setUneditable &&
                    setTimeout(() => {
                      this.view.input.mouseDown == this &&
                        this.target.setAttribute("contentEditable", "false");
                    }, 20),
                  this.view.domObserver.start()),
                e.root.addEventListener(
                  "mouseup",
                  (this.up = this.up.bind(this)),
                ),
                e.root.addEventListener(
                  "mousemove",
                  (this.move = this.move.bind(this)),
                ),
                tn(e, "pointer");
            }
            done() {
              this.view.root.removeEventListener("mouseup", this.up),
                this.view.root.removeEventListener("mousemove", this.move),
                this.mightDrag &&
                  this.target &&
                  (this.view.domObserver.stop(),
                  this.mightDrag.addAttr &&
                    this.target.removeAttribute("draggable"),
                  this.mightDrag.setUneditable &&
                    this.target.removeAttribute("contentEditable"),
                  this.view.domObserver.start()),
                this.delayedSelectionSync && setTimeout(() => qt(this.view)),
                (this.view.input.mouseDown = null);
            }
            up(e) {
              if ((this.done(), !this.view.dom.contains(e.target))) return;
              let r = this.pos;
              this.view.state.doc != this.startDoc &&
                (r = this.view.posAtCoords(Or(e))),
                this.updateAllowDefault(e),
                this.allowDefault || !r
                  ? tn(this.view, "pointer")
                  : Gi(this.view, r.pos, r.inside, e, this.selectNode)
                    ? e.preventDefault()
                    : e.button == 0 &&
                        (this.flushed ||
                          ($ &&
                            this.mightDrag &&
                            !this.mightDrag.node.isAtom) ||
                          (B &&
                            !this.view.state.selection.visible &&
                            Math.min(
                              Math.abs(r.pos - this.view.state.selection.from),
                              Math.abs(r.pos - this.view.state.selection.to),
                            ) <= 2))
                      ? (gn(
                          this.view,
                          s.LN.near(this.view.state.doc.resolve(r.pos)),
                          "pointer",
                        ),
                        e.preventDefault())
                      : tn(this.view, "pointer");
            }
            move(e) {
              this.updateAllowDefault(e),
                tn(this.view, "pointer"),
                e.buttons == 0 && this.done();
            }
            updateAllowDefault(e) {
              !this.allowDefault &&
                (Math.abs(this.event.x - e.clientX) > 4 ||
                  Math.abs(this.event.y - e.clientY) > 4) &&
                (this.allowDefault = !0);
            }
          }
          (Ut.touchstart = (n) => {
            (n.input.lastTouch = Date.now()), Ar(n), tn(n, "pointer");
          }),
            (Ut.touchmove = (n) => {
              (n.input.lastTouch = Date.now()), tn(n, "pointer");
            }),
            (Ut.contextmenu = (n) => Ar(n));
          function Kr(n, e) {
            return n.composing
              ? !0
              : $ && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500
                ? ((n.input.compositionEndedAt = -2e8), !0)
                : !1;
          }
          const ui = Ce ? 5e3 : -1;
          (Wt.compositionstart = Wt.compositionupdate =
            (n) => {
              if (!n.composing) {
                n.domObserver.flush();
                let { state: e } = n,
                  r = e.selection.$from;
                if (
                  e.selection.empty &&
                  (e.storedMarks ||
                    (!r.textOffset &&
                      r.parentOffset &&
                      r.nodeBefore.marks.some(
                        (l) => l.type.spec.inclusive === !1,
                      )))
                )
                  (n.markCursor = n.state.storedMarks || r.marks()),
                    kr(n, !0),
                    (n.markCursor = null);
                else if (
                  (kr(n),
                  tt &&
                    e.selection.empty &&
                    r.parentOffset &&
                    !r.textOffset &&
                    r.nodeBefore.marks.length)
                ) {
                  let l = n.domSelectionRange();
                  for (
                    let f = l.focusNode, h = l.focusOffset;
                    f && f.nodeType == 1 && h != 0;
                  ) {
                    let v = h < 0 ? f.lastChild : f.childNodes[h - 1];
                    if (!v) break;
                    if (v.nodeType == 3) {
                      n.domSelection().collapse(v, v.nodeValue.length);
                      break;
                    } else (f = v), (h = -1);
                  }
                }
                n.input.composing = !0;
              }
              hi(n, ui);
            }),
            (Wt.compositionend = (n, e) => {
              n.composing &&
                ((n.input.composing = !1),
                (n.input.compositionEndedAt = e.timeStamp),
                (n.input.compositionPendingChanges =
                  n.domObserver.pendingRecords().length
                    ? n.input.compositionID
                    : 0),
                (n.input.compositionNode = null),
                n.input.compositionPendingChanges &&
                  Promise.resolve().then(() => n.domObserver.flush()),
                n.input.compositionID++,
                hi(n, 20));
            });
          function hi(n, e) {
            clearTimeout(n.input.composingTimeout),
              e > -1 && (n.input.composingTimeout = setTimeout(() => kr(n), e));
          }
          function di(n) {
            for (
              n.composing &&
              ((n.input.composing = !1), (n.input.compositionEndedAt = Tr()));
              n.input.compositionNodes.length > 0;
            )
              n.input.compositionNodes.pop().markParentsDirty();
          }
          function Yi(n) {
            let e = n.domSelectionRange();
            if (!e.focusNode) return null;
            let r = je(e.focusNode, e.focusOffset),
              l = We(e.focusNode, e.focusOffset);
            if (r && l && r != l) {
              let f = l.pmViewDesc;
              if (!f || !f.isText(l.nodeValue)) return l;
              if (n.input.compositionNode == l) {
                let h = r.pmViewDesc;
                if (!(!h || !h.isText(r.nodeValue))) return l;
              }
            }
            return r || l;
          }
          function Tr() {
            let n = document.createEvent("Event");
            return n.initEvent("event", !0, !0), n.timeStamp;
          }
          function kr(n, e = !1) {
            if (!(Ce && n.domObserver.flushingSoon >= 0)) {
              if (
                (n.domObserver.forceFlush(),
                di(n),
                e || (n.docView && n.docView.dirty))
              ) {
                let r = Vn(n);
                return (
                  r && !r.eq(n.state.selection)
                    ? n.dispatch(n.state.tr.setSelection(r))
                    : n.updateState(n.state),
                  !0
                );
              }
              return !1;
            }
          }
          function Zi(n, e) {
            if (!n.dom.parentNode) return;
            let r = n.dom.parentNode.appendChild(document.createElement("div"));
            r.appendChild(e),
              (r.style.cssText = "position: fixed; left: -10000px; top: 10px");
            let l = getSelection(),
              f = document.createRange();
            f.selectNodeContents(e),
              n.dom.blur(),
              l.removeAllRanges(),
              l.addRange(f),
              setTimeout(() => {
                r.parentNode && r.parentNode.removeChild(r), n.focus();
              }, 50);
          }
          const $n = (nt && Xe < 15) || (X && Ee < 604);
          Ut.copy = Wt.cut = (n, e) => {
            let r = e,
              l = n.state.selection,
              f = r.type == "cut";
            if (l.empty) return;
            let h = $n ? null : r.clipboardData,
              v = l.content(),
              { dom: C, text: L } = ri(n, v);
            h
              ? (r.preventDefault(),
                h.clearData(),
                h.setData("text/html", C.innerHTML),
                h.setData("text/plain", L))
              : Zi(n, C),
              f &&
                n.dispatch(
                  n.state.tr
                    .deleteSelection()
                    .scrollIntoView()
                    .setMeta("uiEvent", "cut"),
                );
          };
          function Qi(n) {
            return n.openStart == 0 &&
              n.openEnd == 0 &&
              n.content.childCount == 1
              ? n.content.firstChild
              : null;
          }
          function qi(n, e) {
            if (!n.dom.parentNode) return;
            let r =
                n.input.shiftKey ||
                n.state.selection.$from.parent.type.spec.code,
              l = n.dom.parentNode.appendChild(
                document.createElement(r ? "textarea" : "div"),
              );
            r || (l.contentEditable = "true"),
              (l.style.cssText = "position: fixed; left: -10000px; top: 10px"),
              l.focus();
            let f = n.input.shiftKey && n.input.lastKeyCode != 45;
            setTimeout(() => {
              n.focus(),
                l.parentNode && l.parentNode.removeChild(l),
                r
                  ? Xn(n, l.value, null, f, e)
                  : Xn(n, l.textContent, l.innerHTML, f, e);
            }, 50);
          }
          function Xn(n, e, r, l, f) {
            let h = ii(n, e, r, l, n.state.selection.$from);
            if (n.someProp("handlePaste", (L) => L(n, f, h || g.Ji.empty)))
              return !0;
            if (!h) return !1;
            let v = Qi(h),
              C = v
                ? n.state.tr.replaceSelectionWith(v, l)
                : n.state.tr.replaceSelection(h);
            return (
              n.dispatch(
                C.scrollIntoView()
                  .setMeta("paste", !0)
                  .setMeta("uiEvent", "paste"),
              ),
              !0
            );
          }
          function Vr(n) {
            let e = n.getData("text/plain") || n.getData("Text");
            if (e) return e;
            let r = n.getData("text/uri-list");
            return r ? r.replace(/\r?\n/g, " ") : "";
          }
          Wt.paste = (n, e) => {
            let r = e;
            if (n.composing && !Ce) return;
            let l = $n ? null : r.clipboardData,
              f = n.input.shiftKey && n.input.lastKeyCode != 45;
            l && Xn(n, Vr(l), l.getData("text/html"), f, r)
              ? r.preventDefault()
              : qi(n, r);
          };
          class pi {
            constructor(e, r, l) {
              (this.slice = e), (this.move = r), (this.node = l);
            }
          }
          const gi = ie ? "altKey" : "ctrlKey";
          (Ut.dragstart = (n, e) => {
            let r = e,
              l = n.input.mouseDown;
            if ((l && l.done(), !r.dataTransfer)) return;
            let f = n.state.selection,
              h = f.empty ? null : n.posAtCoords(Or(r)),
              v;
            if (
              !(
                h &&
                h.pos >= f.from &&
                h.pos <= (f instanceof s.nh ? f.to - 1 : f.to)
              )
            ) {
              if (l && l.mightDrag)
                v = s.nh.create(n.state.doc, l.mightDrag.pos);
              else if (r.target && r.target.nodeType == 1) {
                let De = n.docView.nearestDesc(r.target, !0);
                De &&
                  De.node.type.spec.draggable &&
                  De != n.docView &&
                  (v = s.nh.create(n.state.doc, De.posBefore));
              }
            }
            let C = (v || n.state.selection).content(),
              { dom: L, text: W, slice: Z } = ri(n, C);
            r.dataTransfer.clearData(),
              r.dataTransfer.setData($n ? "Text" : "text/html", L.innerHTML),
              (r.dataTransfer.effectAllowed = "copyMove"),
              $n || r.dataTransfer.setData("text/plain", W),
              (n.dragging = new pi(Z, !r[gi], v));
          }),
            (Ut.dragend = (n) => {
              let e = n.dragging;
              window.setTimeout(() => {
                n.dragging == e && (n.dragging = null);
              }, 50);
            }),
            (Wt.dragover = Wt.dragenter = (n, e) => e.preventDefault()),
            (Wt.drop = (n, e) => {
              let r = e,
                l = n.dragging;
              if (((n.dragging = null), !r.dataTransfer)) return;
              let f = n.posAtCoords(Or(r));
              if (!f) return;
              let h = n.state.doc.resolve(f.pos),
                v = l && l.slice;
              v
                ? n.someProp("transformPasted", (Fe) => {
                    v = Fe(v, n);
                  })
                : (v = ii(
                    n,
                    Vr(r.dataTransfer),
                    $n ? null : r.dataTransfer.getData("text/html"),
                    !1,
                    h,
                  ));
              let C = !!(l && !r[gi]);
              if (
                n.someProp("handleDrop", (Fe) => Fe(n, r, v || g.Ji.empty, C))
              ) {
                r.preventDefault();
                return;
              }
              if (!v) return;
              r.preventDefault();
              let L = v ? (0, M.Um)(n.state.doc, h.pos, v) : h.pos;
              L == null && (L = h.pos);
              let W = n.state.tr;
              if (C) {
                let { node: Fe } = l;
                Fe ? Fe.replace(W) : W.deleteSelection();
              }
              let Z = W.mapping.map(L),
                De =
                  v.openStart == 0 &&
                  v.openEnd == 0 &&
                  v.content.childCount == 1,
                Ke = W.doc;
              if (
                (De
                  ? W.replaceRangeWith(Z, Z, v.content.firstChild)
                  : W.replaceRange(Z, Z, v),
                W.doc.eq(Ke))
              )
                return;
              let Ze = W.doc.resolve(Z);
              if (
                De &&
                s.nh.isSelectable(v.content.firstChild) &&
                Ze.nodeAfter &&
                Ze.nodeAfter.sameMarkup(v.content.firstChild)
              )
                W.setSelection(new s.nh(Ze));
              else {
                let Fe = W.mapping.map(L);
                W.mapping.maps[W.mapping.maps.length - 1].forEach(
                  (pt, ot, At, Gt) => (Fe = Gt),
                ),
                  W.setSelection(J(n, Ze, W.doc.resolve(Fe)));
              }
              n.focus(), n.dispatch(W.setMeta("uiEvent", "drop"));
            }),
            (Ut.focus = (n) => {
              (n.input.lastFocus = Date.now()),
                n.focused ||
                  (n.domObserver.stop(),
                  n.dom.classList.add("ProseMirror-focused"),
                  n.domObserver.start(),
                  (n.focused = !0),
                  setTimeout(() => {
                    n.docView &&
                      n.hasFocus() &&
                      !n.domObserver.currentSelection.eq(
                        n.domSelectionRange(),
                      ) &&
                      qt(n);
                  }, 20));
            }),
            (Ut.blur = (n, e) => {
              let r = e;
              n.focused &&
                (n.domObserver.stop(),
                n.dom.classList.remove("ProseMirror-focused"),
                n.domObserver.start(),
                r.relatedTarget &&
                  n.dom.contains(r.relatedTarget) &&
                  n.domObserver.currentSelection.clear(),
                (n.focused = !1));
            }),
            (Ut.beforeinput = (n, e) => {
              if (B && Ce && e.inputType == "deleteContentBackward") {
                n.domObserver.flushSoon();
                let { domChangeCount: l } = n.input;
                setTimeout(() => {
                  if (
                    n.input.domChangeCount != l ||
                    (n.dom.blur(),
                    n.focus(),
                    n.someProp("handleKeyDown", (h) =>
                      h(n, Ae(8, "Backspace")),
                    ))
                  )
                    return;
                  let { $cursor: f } = n.state.selection;
                  f &&
                    f.pos > 0 &&
                    n.dispatch(
                      n.state.tr.delete(f.pos - 1, f.pos).scrollIntoView(),
                    );
                }, 50);
              }
            });
          for (let n in Wt) Ut[n] = Wt[n];
          function Yn(n, e) {
            if (n == e) return !0;
            for (let r in n) if (n[r] !== e[r]) return !1;
            for (let r in e) if (!(r in n)) return !1;
            return !0;
          }
          class Zn {
            constructor(e, r) {
              (this.toDOM = e),
                (this.spec = r || fn),
                (this.side = this.spec.side || 0);
            }
            map(e, r, l, f) {
              let { pos: h, deleted: v } = e.mapResult(
                r.from + f,
                this.side < 0 ? -1 : 1,
              );
              return v ? null : new Xt(h - l, h - l, this);
            }
            valid() {
              return !0;
            }
            eq(e) {
              return (
                this == e ||
                (e instanceof Zn &&
                  ((this.spec.key && this.spec.key == e.spec.key) ||
                    (this.toDOM == e.toDOM && Yn(this.spec, e.spec))))
              );
            }
            destroy(e) {
              this.spec.destroy && this.spec.destroy(e);
            }
          }
          class mn {
            constructor(e, r) {
              (this.attrs = e), (this.spec = r || fn);
            }
            map(e, r, l, f) {
              let h = e.map(r.from + f, this.spec.inclusiveStart ? -1 : 1) - l,
                v = e.map(r.to + f, this.spec.inclusiveEnd ? 1 : -1) - l;
              return h >= v ? null : new Xt(h, v, this);
            }
            valid(e, r) {
              return r.from < r.to;
            }
            eq(e) {
              return (
                this == e ||
                (e instanceof mn &&
                  Yn(this.attrs, e.attrs) &&
                  Yn(this.spec, e.spec))
              );
            }
            static is(e) {
              return e.type instanceof mn;
            }
            destroy() {}
          }
          class Nr {
            constructor(e, r) {
              (this.attrs = e), (this.spec = r || fn);
            }
            map(e, r, l, f) {
              let h = e.mapResult(r.from + f, 1);
              if (h.deleted) return null;
              let v = e.mapResult(r.to + f, -1);
              return v.deleted || v.pos <= h.pos
                ? null
                : new Xt(h.pos - l, v.pos - l, this);
            }
            valid(e, r) {
              let { index: l, offset: f } = e.content.findIndex(r.from),
                h;
              return (
                f == r.from &&
                !(h = e.child(l)).isText &&
                f + h.nodeSize == r.to
              );
            }
            eq(e) {
              return (
                this == e ||
                (e instanceof Nr &&
                  Yn(this.attrs, e.attrs) &&
                  Yn(this.spec, e.spec))
              );
            }
            destroy() {}
          }
          class Xt {
            constructor(e, r, l) {
              (this.from = e), (this.to = r), (this.type = l);
            }
            copy(e, r) {
              return new Xt(e, r, this.type);
            }
            eq(e, r = 0) {
              return (
                this.type.eq(e.type) &&
                this.from + r == e.from &&
                this.to + r == e.to
              );
            }
            map(e, r, l) {
              return this.type.map(e, this, r, l);
            }
            static widget(e, r, l) {
              return new Xt(e, e, new Zn(r, l));
            }
            static inline(e, r, l, f) {
              return new Xt(e, r, new mn(l, f));
            }
            static node(e, r, l, f) {
              return new Xt(e, r, new Nr(l, f));
            }
            get spec() {
              return this.type.spec;
            }
            get inline() {
              return this.type instanceof mn;
            }
            get widget() {
              return this.type instanceof Zn;
            }
          }
          const Pn = [],
            fn = {};
          class zt {
            constructor(e, r) {
              (this.local = e.length ? e : Pn),
                (this.children = r.length ? r : Pn);
            }
            static create(e, r) {
              return r.length ? Dr(r, e, 0, fn) : Kt;
            }
            find(e, r, l) {
              let f = [];
              return this.findInner(e ?? 0, r ?? 1e9, f, 0, l), f;
            }
            findInner(e, r, l, f, h) {
              for (let v = 0; v < this.local.length; v++) {
                let C = this.local[v];
                C.from <= r &&
                  C.to >= e &&
                  (!h || h(C.spec)) &&
                  l.push(C.copy(C.from + f, C.to + f));
              }
              for (let v = 0; v < this.children.length; v += 3)
                if (this.children[v] < r && this.children[v + 1] > e) {
                  let C = this.children[v] + 1;
                  this.children[v + 2].findInner(e - C, r - C, l, f + C, h);
                }
            }
            map(e, r, l) {
              return this == Kt || e.maps.length == 0
                ? this
                : this.mapInner(e, r, 0, 0, l || fn);
            }
            mapInner(e, r, l, f, h) {
              let v;
              for (let C = 0; C < this.local.length; C++) {
                let L = this.local[C].map(e, l, f);
                L && L.type.valid(r, L)
                  ? (v || (v = [])).push(L)
                  : h.onRemove && h.onRemove(this.local[C].spec);
              }
              return this.children.length
                ? yn(this.children, v || [], e, r, l, f, h)
                : v
                  ? new zt(v.sort(Cn), Pn)
                  : Kt;
            }
            add(e, r) {
              return r.length
                ? this == Kt
                  ? zt.create(e, r)
                  : this.addInner(e, r, 0)
                : this;
            }
            addInner(e, r, l) {
              let f,
                h = 0;
              e.forEach((C, L) => {
                let W = L + l,
                  Z;
                if ((Z = Ur(r, C, W))) {
                  for (
                    f || (f = this.children.slice());
                    h < f.length && f[h] < L;
                  )
                    h += 3;
                  f[h] == L
                    ? (f[h + 2] = f[h + 2].addInner(C, Z, W + 1))
                    : f.splice(h, 0, L, L + C.nodeSize, Dr(Z, C, W + 1, fn)),
                    (h += 3);
                }
              });
              let v = mi(h ? Wr(r) : r, -l);
              for (let C = 0; C < v.length; C++)
                v[C].type.valid(e, v[C]) || v.splice(C--, 1);
              return new zt(
                v.length ? this.local.concat(v).sort(Cn) : this.local,
                f || this.children,
              );
            }
            remove(e) {
              return e.length == 0 || this == Kt
                ? this
                : this.removeInner(e, 0);
            }
            removeInner(e, r) {
              let l = this.children,
                f = this.local;
              for (let h = 0; h < l.length; h += 3) {
                let v,
                  C = l[h] + r,
                  L = l[h + 1] + r;
                for (let Z = 0, De; Z < e.length; Z++)
                  (De = e[Z]) &&
                    De.from > C &&
                    De.to < L &&
                    ((e[Z] = null), (v || (v = [])).push(De));
                if (!v) continue;
                l == this.children && (l = this.children.slice());
                let W = l[h + 2].removeInner(v, C + 1);
                W != Kt ? (l[h + 2] = W) : (l.splice(h, 3), (h -= 3));
              }
              if (f.length) {
                for (let h = 0, v; h < e.length; h++)
                  if ((v = e[h]))
                    for (let C = 0; C < f.length; C++)
                      f[C].eq(v, r) &&
                        (f == this.local && (f = this.local.slice()),
                        f.splice(C--, 1));
              }
              return l == this.children && f == this.local
                ? this
                : f.length || l.length
                  ? new zt(f, l)
                  : Kt;
            }
            forChild(e, r) {
              if (this == Kt) return this;
              if (r.isLeaf) return zt.empty;
              let l, f;
              for (let C = 0; C < this.children.length; C += 3)
                if (this.children[C] >= e) {
                  this.children[C] == e && (l = this.children[C + 2]);
                  break;
                }
              let h = e + 1,
                v = h + r.content.size;
              for (let C = 0; C < this.local.length; C++) {
                let L = this.local[C];
                if (L.from < v && L.to > h && L.type instanceof mn) {
                  let W = Math.max(h, L.from) - h,
                    Z = Math.min(v, L.to) - h;
                  W < Z && (f || (f = [])).push(L.copy(W, Z));
                }
              }
              if (f) {
                let C = new zt(f.sort(Cn), Pn);
                return l ? new bn([C, l]) : C;
              }
              return l || Kt;
            }
            eq(e) {
              if (this == e) return !0;
              if (
                !(e instanceof zt) ||
                this.local.length != e.local.length ||
                this.children.length != e.children.length
              )
                return !1;
              for (let r = 0; r < this.local.length; r++)
                if (!this.local[r].eq(e.local[r])) return !1;
              for (let r = 0; r < this.children.length; r += 3)
                if (
                  this.children[r] != e.children[r] ||
                  this.children[r + 1] != e.children[r + 1] ||
                  !this.children[r + 2].eq(e.children[r + 2])
                )
                  return !1;
              return !0;
            }
            locals(e) {
              return Jr(this.localsInner(e));
            }
            localsInner(e) {
              if (this == Kt) return Pn;
              if (e.inlineContent || !this.local.some(mn.is)) return this.local;
              let r = [];
              for (let l = 0; l < this.local.length; l++)
                this.local[l].type instanceof mn || r.push(this.local[l]);
              return r;
            }
          }
          (zt.empty = new zt([], [])), (zt.removeOverlap = Jr);
          const Kt = zt.empty;
          class bn {
            constructor(e) {
              this.members = e;
            }
            map(e, r) {
              const l = this.members.map((f) => f.map(e, r, fn));
              return bn.from(l);
            }
            forChild(e, r) {
              if (r.isLeaf) return zt.empty;
              let l = [];
              for (let f = 0; f < this.members.length; f++) {
                let h = this.members[f].forChild(e, r);
                h != Kt &&
                  (h instanceof bn ? (l = l.concat(h.members)) : l.push(h));
              }
              return bn.from(l);
            }
            eq(e) {
              if (!(e instanceof bn) || e.members.length != this.members.length)
                return !1;
              for (let r = 0; r < this.members.length; r++)
                if (!this.members[r].eq(e.members[r])) return !1;
              return !0;
            }
            locals(e) {
              let r,
                l = !0;
              for (let f = 0; f < this.members.length; f++) {
                let h = this.members[f].localsInner(e);
                if (h.length)
                  if (!r) r = h;
                  else {
                    l && ((r = r.slice()), (l = !1));
                    for (let v = 0; v < h.length; v++) r.push(h[v]);
                  }
              }
              return r ? Jr(l ? r : r.sort(Cn)) : Pn;
            }
            static from(e) {
              switch (e.length) {
                case 0:
                  return Kt;
                case 1:
                  return e[0];
                default:
                  return new bn(
                    e.every((r) => r instanceof zt)
                      ? e
                      : e.reduce(
                          (r, l) => r.concat(l instanceof zt ? l : l.members),
                          [],
                        ),
                  );
              }
            }
          }
          function yn(n, e, r, l, f, h, v) {
            let C = n.slice();
            for (let W = 0, Z = h; W < r.maps.length; W++) {
              let De = 0;
              r.maps[W].forEach((Ke, Ze, Fe, pt) => {
                let ot = pt - Fe - (Ze - Ke);
                for (let At = 0; At < C.length; At += 3) {
                  let Gt = C[At + 1];
                  if (Gt < 0 || Ke > Gt + Z - De) continue;
                  let Tt = C[At] + Z - De;
                  Ze >= Tt
                    ? (C[At + 1] = Ke <= Tt ? -2 : -1)
                    : Ke >= Z && ot && ((C[At] += ot), (C[At + 1] += ot));
                }
                De += ot;
              }),
                (Z = r.maps[W].map(Z, -1));
            }
            let L = !1;
            for (let W = 0; W < C.length; W += 3)
              if (C[W + 1] < 0) {
                if (C[W + 1] == -2) {
                  (L = !0), (C[W + 1] = -1);
                  continue;
                }
                let Z = r.map(n[W] + h),
                  De = Z - f;
                if (De < 0 || De >= l.content.size) {
                  L = !0;
                  continue;
                }
                let Ke = r.map(n[W + 1] + h, -1),
                  Ze = Ke - f,
                  { index: Fe, offset: pt } = l.content.findIndex(De),
                  ot = l.maybeChild(Fe);
                if (ot && pt == De && pt + ot.nodeSize == Ze) {
                  let At = C[W + 2].mapInner(r, ot, Z + 1, n[W] + h + 1, v);
                  At != Kt
                    ? ((C[W] = De), (C[W + 1] = Ze), (C[W + 2] = At))
                    : ((C[W + 1] = -2), (L = !0));
                } else L = !0;
              }
            if (L) {
              let W = eo(C, n, e, r, f, h, v),
                Z = Dr(W, l, 0, v);
              e = Z.local;
              for (let De = 0; De < C.length; De += 3)
                C[De + 1] < 0 && (C.splice(De, 3), (De -= 3));
              for (let De = 0, Ke = 0; De < Z.children.length; De += 3) {
                let Ze = Z.children[De];
                for (; Ke < C.length && C[Ke] < Ze; ) Ke += 3;
                C.splice(
                  Ke,
                  0,
                  Z.children[De],
                  Z.children[De + 1],
                  Z.children[De + 2],
                );
              }
            }
            return new zt(e.sort(Cn), C);
          }
          function mi(n, e) {
            if (!e || !n.length) return n;
            let r = [];
            for (let l = 0; l < n.length; l++) {
              let f = n[l];
              r.push(new Xt(f.from + e, f.to + e, f.type));
            }
            return r;
          }
          function eo(n, e, r, l, f, h, v) {
            function C(L, W) {
              for (let Z = 0; Z < L.local.length; Z++) {
                let De = L.local[Z].map(l, f, W);
                De ? r.push(De) : v.onRemove && v.onRemove(L.local[Z].spec);
              }
              for (let Z = 0; Z < L.children.length; Z += 3)
                C(L.children[Z + 2], L.children[Z] + W + 1);
            }
            for (let L = 0; L < n.length; L += 3)
              n[L + 1] == -1 && C(n[L + 2], e[L] + h + 1);
            return r;
          }
          function Ur(n, e, r) {
            if (e.isLeaf) return null;
            let l = r + e.nodeSize,
              f = null;
            for (let h = 0, v; h < n.length; h++)
              (v = n[h]) &&
                v.from > r &&
                v.to < l &&
                ((f || (f = [])).push(v), (n[h] = null));
            return f;
          }
          function Wr(n) {
            let e = [];
            for (let r = 0; r < n.length; r++) n[r] != null && e.push(n[r]);
            return e;
          }
          function Dr(n, e, r, l) {
            let f = [],
              h = !1;
            e.forEach((C, L) => {
              let W = Ur(n, C, L + r);
              if (W) {
                h = !0;
                let Z = Dr(W, C, r + L + 1, l);
                Z != Kt && f.push(L, L + C.nodeSize, Z);
              }
            });
            let v = mi(h ? Wr(n) : n, -r).sort(Cn);
            for (let C = 0; C < v.length; C++)
              v[C].type.valid(e, v[C]) ||
                (l.onRemove && l.onRemove(v[C].spec), v.splice(C--, 1));
            return v.length || f.length ? new zt(v, f) : Kt;
          }
          function Cn(n, e) {
            return n.from - e.from || n.to - e.to;
          }
          function Jr(n) {
            let e = n;
            for (let r = 0; r < e.length - 1; r++) {
              let l = e[r];
              if (l.from != l.to)
                for (let f = r + 1; f < e.length; f++) {
                  let h = e[f];
                  if (h.from == l.from) {
                    h.to != l.to &&
                      (e == n && (e = n.slice()),
                      (e[f] = h.copy(h.from, l.to)),
                      Qn(e, f + 1, h.copy(l.to, h.to)));
                    continue;
                  } else {
                    h.from < l.to &&
                      (e == n && (e = n.slice()),
                      (e[r] = l.copy(l.from, h.from)),
                      Qn(e, f, l.copy(h.from, l.to)));
                    break;
                  }
                }
            }
            return e;
          }
          function Qn(n, e, r) {
            for (; e < n.length && Cn(r, n[e]) > 0; ) e++;
            n.splice(e, 0, r);
          }
          function Gr(n) {
            let e = [];
            return (
              n.someProp("decorations", (r) => {
                let l = r(n.state);
                l && l != Kt && e.push(l);
              }),
              n.cursorWrapper &&
                e.push(zt.create(n.state.doc, [n.cursorWrapper.deco])),
              bn.from(e)
            );
          }
          const Jt = {
              childList: !0,
              characterData: !0,
              characterDataOldValue: !0,
              attributes: !0,
              attributeOldValue: !0,
              subtree: !0,
            },
            to = nt && Xe <= 11;
          class no {
            constructor() {
              (this.anchorNode = null),
                (this.anchorOffset = 0),
                (this.focusNode = null),
                (this.focusOffset = 0);
            }
            set(e) {
              (this.anchorNode = e.anchorNode),
                (this.anchorOffset = e.anchorOffset),
                (this.focusNode = e.focusNode),
                (this.focusOffset = e.focusOffset);
            }
            clear() {
              this.anchorNode = this.focusNode = null;
            }
            eq(e) {
              return (
                e.anchorNode == this.anchorNode &&
                e.anchorOffset == this.anchorOffset &&
                e.focusNode == this.focusNode &&
                e.focusOffset == this.focusOffset
              );
            }
          }
          class $r {
            constructor(e, r) {
              (this.view = e),
                (this.handleDOMChange = r),
                (this.queue = []),
                (this.flushingSoon = -1),
                (this.observer = null),
                (this.currentSelection = new no()),
                (this.onCharData = null),
                (this.suppressingSelectionUpdates = !1),
                (this.observer =
                  window.MutationObserver &&
                  new window.MutationObserver((l) => {
                    for (let f = 0; f < l.length; f++) this.queue.push(l[f]);
                    nt &&
                    Xe <= 11 &&
                    l.some(
                      (f) =>
                        (f.type == "childList" && f.removedNodes.length) ||
                        (f.type == "characterData" &&
                          f.oldValue.length > f.target.nodeValue.length),
                    )
                      ? this.flushSoon()
                      : this.flush();
                  })),
                to &&
                  (this.onCharData = (l) => {
                    this.queue.push({
                      target: l.target,
                      type: "characterData",
                      oldValue: l.prevValue,
                    }),
                      this.flushSoon();
                  }),
                (this.onSelectionChange = this.onSelectionChange.bind(this));
            }
            flushSoon() {
              this.flushingSoon < 0 &&
                (this.flushingSoon = window.setTimeout(() => {
                  (this.flushingSoon = -1), this.flush();
                }, 20));
            }
            forceFlush() {
              this.flushingSoon > -1 &&
                (window.clearTimeout(this.flushingSoon),
                (this.flushingSoon = -1),
                this.flush());
            }
            start() {
              this.observer &&
                (this.observer.takeRecords(),
                this.observer.observe(this.view.dom, Jt)),
                this.onCharData &&
                  this.view.dom.addEventListener(
                    "DOMCharacterDataModified",
                    this.onCharData,
                  ),
                this.connectSelection();
            }
            stop() {
              if (this.observer) {
                let e = this.observer.takeRecords();
                if (e.length) {
                  for (let r = 0; r < e.length; r++) this.queue.push(e[r]);
                  window.setTimeout(() => this.flush(), 20);
                }
                this.observer.disconnect();
              }
              this.onCharData &&
                this.view.dom.removeEventListener(
                  "DOMCharacterDataModified",
                  this.onCharData,
                ),
                this.disconnectSelection();
            }
            connectSelection() {
              this.view.dom.ownerDocument.addEventListener(
                "selectionchange",
                this.onSelectionChange,
              );
            }
            disconnectSelection() {
              this.view.dom.ownerDocument.removeEventListener(
                "selectionchange",
                this.onSelectionChange,
              );
            }
            suppressSelectionUpdates() {
              (this.suppressingSelectionUpdates = !0),
                setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
            }
            onSelectionChange() {
              if (te(this.view)) {
                if (this.suppressingSelectionUpdates) return qt(this.view);
                if (nt && Xe <= 11 && !this.view.state.selection.empty) {
                  let e = this.view.domSelectionRange();
                  if (
                    e.focusNode &&
                    G(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
                  )
                    return this.flushSoon();
                }
                this.flush();
              }
            }
            setCurSelection() {
              this.currentSelection.set(this.view.domSelectionRange());
            }
            ignoreSelectionChange(e) {
              if (!e.focusNode) return !0;
              let r = new Set(),
                l;
              for (let h = e.focusNode; h; h = T(h)) r.add(h);
              for (let h = e.anchorNode; h; h = T(h))
                if (r.has(h)) {
                  l = h;
                  break;
                }
              let f = l && this.view.docView.nearestDesc(l);
              if (
                f &&
                f.ignoreMutation({
                  type: "selection",
                  target: l.nodeType == 3 ? l.parentNode : l,
                })
              )
                return this.setCurSelection(), !0;
            }
            pendingRecords() {
              if (this.observer)
                for (let e of this.observer.takeRecords()) this.queue.push(e);
              return this.queue;
            }
            flush() {
              let { view: e } = this;
              if (!e.docView || this.flushingSoon > -1) return;
              let r = this.pendingRecords();
              r.length && (this.queue = []);
              let l = e.domSelectionRange(),
                f =
                  !this.suppressingSelectionUpdates &&
                  !this.currentSelection.eq(l) &&
                  te(e) &&
                  !this.ignoreSelectionChange(l),
                h = -1,
                v = -1,
                C = !1,
                L = [];
              if (e.editable)
                for (let Z = 0; Z < r.length; Z++) {
                  let De = this.registerMutation(r[Z], L);
                  De &&
                    ((h = h < 0 ? De.from : Math.min(De.from, h)),
                    (v = v < 0 ? De.to : Math.max(De.to, v)),
                    De.typeOver && (C = !0));
                }
              if (tt && L.length > 1) {
                let Z = L.filter((De) => De.nodeName == "BR");
                if (Z.length == 2) {
                  let De = Z[0],
                    Ke = Z[1];
                  De.parentNode && De.parentNode.parentNode == Ke.parentNode
                    ? Ke.remove()
                    : De.remove();
                }
              }
              let W = null;
              h < 0 &&
              f &&
              e.input.lastFocus > Date.now() - 200 &&
              Math.max(e.input.lastTouch, e.input.lastClick.time) <
                Date.now() - 300 &&
              ge(l) &&
              (W = Vn(e)) &&
              W.eq(s.LN.near(e.state.doc.resolve(0), 1))
                ? ((e.input.lastFocus = 0),
                  qt(e),
                  this.currentSelection.set(l),
                  e.scrollToSelection())
                : (h > -1 || f) &&
                  (h > -1 && (e.docView.markDirty(h, v), ro(e)),
                  this.handleDOMChange(h, v, C, L),
                  e.docView && e.docView.dirty
                    ? e.updateState(e.state)
                    : this.currentSelection.eq(l) || qt(e),
                  this.currentSelection.set(l));
            }
            registerMutation(e, r) {
              if (r.indexOf(e.target) > -1) return null;
              let l = this.view.docView.nearestDesc(e.target);
              if (
                (e.type == "attributes" &&
                  (l == this.view.docView ||
                    e.attributeName == "contenteditable" ||
                    (e.attributeName == "style" &&
                      !e.oldValue &&
                      !e.target.getAttribute("style")))) ||
                !l ||
                l.ignoreMutation(e)
              )
                return null;
              if (e.type == "childList") {
                for (let Z = 0; Z < e.addedNodes.length; Z++)
                  r.push(e.addedNodes[Z]);
                if (
                  l.contentDOM &&
                  l.contentDOM != l.dom &&
                  !l.contentDOM.contains(e.target)
                )
                  return { from: l.posBefore, to: l.posAfter };
                let f = e.previousSibling,
                  h = e.nextSibling;
                if (nt && Xe <= 11 && e.addedNodes.length)
                  for (let Z = 0; Z < e.addedNodes.length; Z++) {
                    let { previousSibling: De, nextSibling: Ke } =
                      e.addedNodes[Z];
                    (!De ||
                      Array.prototype.indexOf.call(e.addedNodes, De) < 0) &&
                      (f = De),
                      (!Ke ||
                        Array.prototype.indexOf.call(e.addedNodes, Ke) < 0) &&
                        (h = Ke);
                  }
                let v = f && f.parentNode == e.target ? _(f) + 1 : 0,
                  C = l.localPosFromDOM(e.target, v, -1),
                  L =
                    h && h.parentNode == e.target
                      ? _(h)
                      : e.target.childNodes.length,
                  W = l.localPosFromDOM(e.target, L, 1);
                return { from: C, to: W };
              } else
                return e.type == "attributes"
                  ? { from: l.posAtStart - l.border, to: l.posAtEnd + l.border }
                  : {
                      from: l.posAtStart,
                      to: l.posAtEnd,
                      typeOver: e.target.nodeValue == e.oldValue,
                    };
            }
          }
          let bi = new WeakMap(),
            En = !1;
          function ro(n) {
            if (
              !bi.has(n) &&
              (bi.set(n, null),
              ["normal", "nowrap", "pre-line"].indexOf(
                getComputedStyle(n.dom).whiteSpace,
              ) !== -1)
            ) {
              if (((n.requiresGeckoHackNode = tt), En)) return;
              console.warn(
                "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
              ),
                (En = !0);
            }
          }
          function yi(n, e) {
            let r = e.startContainer,
              l = e.startOffset,
              f = e.endContainer,
              h = e.endOffset,
              v = n.domAtPos(n.state.selection.anchor);
            return (
              G(v.node, v.offset, f, h) && ([r, l, f, h] = [f, h, r, l]),
              { anchorNode: r, anchorOffset: l, focusNode: f, focusOffset: h }
            );
          }
          function io(n, e) {
            if (e.getComposedRanges) {
              let f = e.getComposedRanges(n.root)[0];
              if (f) return yi(n, f);
            }
            let r;
            function l(f) {
              f.preventDefault(),
                f.stopImmediatePropagation(),
                (r = f.getTargetRanges()[0]);
            }
            return (
              n.dom.addEventListener("beforeinput", l, !0),
              document.execCommand("indent"),
              n.dom.removeEventListener("beforeinput", l, !0),
              r ? yi(n, r) : null
            );
          }
          function oo(n, e, r) {
            let {
                node: l,
                fromOffset: f,
                toOffset: h,
                from: v,
                to: C,
              } = n.docView.parseRange(e, r),
              L = n.domSelectionRange(),
              W,
              Z = L.anchorNode;
            if (
              (Z &&
                n.dom.contains(Z.nodeType == 1 ? Z : Z.parentNode) &&
                ((W = [{ node: Z, offset: L.anchorOffset }]),
                ge(L) || W.push({ node: L.focusNode, offset: L.focusOffset })),
              B && n.input.lastKeyCode === 8)
            )
              for (let ot = h; ot > f; ot--) {
                let At = l.childNodes[ot - 1],
                  Gt = At.pmViewDesc;
                if (At.nodeName == "BR" && !Gt) {
                  h = ot;
                  break;
                }
                if (!Gt || Gt.size) break;
              }
            let De = n.state.doc,
              Ke = n.someProp("domParser") || g.S4.fromSchema(n.state.schema),
              Ze = De.resolve(v),
              Fe = null,
              pt = Ke.parse(l, {
                topNode: Ze.parent,
                topMatch: Ze.parent.contentMatchAt(Ze.index()),
                topOpen: !0,
                from: f,
                to: h,
                preserveWhitespace:
                  Ze.parent.type.whitespace == "pre" ? "full" : !0,
                findPositions: W,
                ruleFromNode: xi,
                context: Ze,
              });
            if (W && W[0].pos != null) {
              let ot = W[0].pos,
                At = W[1] && W[1].pos;
              At == null && (At = ot), (Fe = { anchor: ot + v, head: At + v });
            }
            return { doc: pt, sel: Fe, from: v, to: C };
          }
          function xi(n) {
            let e = n.pmViewDesc;
            if (e) return e.parseRule();
            if (n.nodeName == "BR" && n.parentNode) {
              if ($ && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
                let r = document.createElement("div");
                return r.appendChild(document.createElement("li")), { skip: r };
              } else if (
                n.parentNode.lastChild == n ||
                ($ && /^(tr|table)$/i.test(n.parentNode.nodeName))
              )
                return { ignore: !0 };
            } else if (
              n.nodeName == "IMG" &&
              n.getAttribute("mark-placeholder")
            )
              return { ignore: !0 };
            return null;
          }
          const vi =
            /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
          function so(n, e, r, l, f) {
            let h =
              n.input.compositionPendingChanges ||
              (n.composing ? n.input.compositionID : 0);
            if (((n.input.compositionPendingChanges = 0), e < 0)) {
              let St =
                  n.input.lastSelectionTime > Date.now() - 50
                    ? n.input.lastSelectionOrigin
                    : null,
                vn = Vn(n, St);
              if (vn && !n.state.selection.eq(vn)) {
                if (
                  B &&
                  Ce &&
                  n.input.lastKeyCode === 13 &&
                  Date.now() - 100 < n.input.lastKeyCodeTime &&
                  n.someProp("handleKeyDown", (go) => go(n, Ae(13, "Enter")))
                )
                  return;
                let In = n.state.tr.setSelection(vn);
                St == "pointer"
                  ? In.setMeta("pointer", !0)
                  : St == "key" && In.scrollIntoView(),
                  h && In.setMeta("composition", h),
                  n.dispatch(In);
              }
              return;
            }
            let v = n.state.doc.resolve(e),
              C = v.sharedDepth(r);
            (e = v.before(C + 1)), (r = n.state.doc.resolve(r).after(C + 1));
            let L = n.state.selection,
              W = oo(n, e, r),
              Z = n.state.doc,
              De = Z.slice(W.from, W.to),
              Ke,
              Ze;
            n.input.lastKeyCode === 8 &&
            Date.now() - 100 < n.input.lastKeyCodeTime
              ? ((Ke = n.state.selection.to), (Ze = "end"))
              : ((Ke = n.state.selection.from), (Ze = "start")),
              (n.input.lastKeyCode = null);
            let Fe = co(De.content, W.doc.content, W.from, Ke, Ze);
            if (
              ((X && n.input.lastIOSEnter > Date.now() - 225) || Ce) &&
              f.some((St) => St.nodeType == 1 && !vi.test(St.nodeName)) &&
              (!Fe || Fe.endA >= Fe.endB) &&
              n.someProp("handleKeyDown", (St) => St(n, Ae(13, "Enter")))
            ) {
              n.input.lastIOSEnter = 0;
              return;
            }
            if (!Fe)
              if (
                l &&
                L instanceof s.U3 &&
                !L.empty &&
                L.$head.sameParent(L.$anchor) &&
                !n.composing &&
                !(W.sel && W.sel.anchor != W.sel.head)
              )
                Fe = { start: L.from, endA: L.to, endB: L.to };
              else {
                if (W.sel) {
                  let St = Xr(n, n.state.doc, W.sel);
                  if (St && !St.eq(n.state.selection)) {
                    let vn = n.state.tr.setSelection(St);
                    h && vn.setMeta("composition", h), n.dispatch(vn);
                  }
                }
                return;
              }
            n.input.domChangeCount++,
              n.state.selection.from < n.state.selection.to &&
                Fe.start == Fe.endB &&
                n.state.selection instanceof s.U3 &&
                (Fe.start > n.state.selection.from &&
                Fe.start <= n.state.selection.from + 2 &&
                n.state.selection.from >= W.from
                  ? (Fe.start = n.state.selection.from)
                  : Fe.endA < n.state.selection.to &&
                    Fe.endA >= n.state.selection.to - 2 &&
                    n.state.selection.to <= W.to &&
                    ((Fe.endB += n.state.selection.to - Fe.endA),
                    (Fe.endA = n.state.selection.to))),
              nt &&
                Xe <= 11 &&
                Fe.endB == Fe.start + 1 &&
                Fe.endA == Fe.start &&
                Fe.start > W.from &&
                W.doc.textBetween(
                  Fe.start - W.from - 1,
                  Fe.start - W.from + 1,
                ) == " \xA0" &&
                (Fe.start--, Fe.endA--, Fe.endB--);
            let pt = W.doc.resolveNoCache(Fe.start - W.from),
              ot = W.doc.resolveNoCache(Fe.endB - W.from),
              At = Z.resolve(Fe.start),
              Gt =
                pt.sameParent(ot) &&
                pt.parent.inlineContent &&
                At.end() >= Fe.endA,
              Tt;
            if (
              ((X &&
                n.input.lastIOSEnter > Date.now() - 225 &&
                (!Gt ||
                  f.some(
                    (St) => St.nodeName == "DIV" || St.nodeName == "P",
                  ))) ||
                (!Gt &&
                  pt.pos < W.doc.content.size &&
                  !pt.sameParent(ot) &&
                  (Tt = s.LN.findFrom(W.doc.resolve(pt.pos + 1), 1, !0)) &&
                  Tt.head == ot.pos)) &&
              n.someProp("handleKeyDown", (St) => St(n, Ae(13, "Enter")))
            ) {
              n.input.lastIOSEnter = 0;
              return;
            }
            if (
              n.state.selection.anchor > Fe.start &&
              ao(Z, Fe.start, Fe.endA, pt, ot) &&
              n.someProp("handleKeyDown", (St) => St(n, Ae(8, "Backspace")))
            ) {
              Ce && B && n.domObserver.suppressSelectionUpdates();
              return;
            }
            B &&
              Ce &&
              Fe.endB == Fe.start &&
              (n.input.lastAndroidDelete = Date.now()),
              Ce &&
                !Gt &&
                pt.start() != ot.start() &&
                ot.parentOffset == 0 &&
                pt.depth == ot.depth &&
                W.sel &&
                W.sel.anchor == W.sel.head &&
                W.sel.head == Fe.endA &&
                ((Fe.endB -= 2),
                (ot = W.doc.resolveNoCache(Fe.endB - W.from)),
                setTimeout(() => {
                  n.someProp("handleKeyDown", function (St) {
                    return St(n, Ae(13, "Enter"));
                  });
                }, 20));
            let xn = Fe.start,
              On = Fe.endA,
              $t,
              Yr,
              qn;
            if (Gt) {
              if (pt.pos == ot.pos)
                nt &&
                  Xe <= 11 &&
                  pt.parentOffset == 0 &&
                  (n.domObserver.suppressSelectionUpdates(),
                  setTimeout(() => qt(n), 20)),
                  ($t = n.state.tr.delete(xn, On)),
                  (Yr = Z.resolve(Fe.start).marksAcross(Z.resolve(Fe.endA)));
              else if (
                Fe.endA == Fe.endB &&
                (qn = lo(
                  pt.parent.content.cut(pt.parentOffset, ot.parentOffset),
                  At.parent.content.cut(At.parentOffset, Fe.endA - At.start()),
                ))
              )
                ($t = n.state.tr),
                  qn.type == "add"
                    ? $t.addMark(xn, On, qn.mark)
                    : $t.removeMark(xn, On, qn.mark);
              else if (
                pt.parent.child(pt.index()).isText &&
                pt.index() == ot.index() - (ot.textOffset ? 0 : 1)
              ) {
                let St = pt.parent.textBetween(
                  pt.parentOffset,
                  ot.parentOffset,
                );
                if (n.someProp("handleTextInput", (vn) => vn(n, xn, On, St)))
                  return;
                $t = n.state.tr.insertText(St, xn, On);
              }
            }
            if (
              ($t ||
                ($t = n.state.tr.replace(
                  xn,
                  On,
                  W.doc.slice(Fe.start - W.from, Fe.endB - W.from),
                )),
              W.sel)
            ) {
              let St = Xr(n, $t.doc, W.sel);
              St &&
                !(
                  (B &&
                    Ce &&
                    n.composing &&
                    St.empty &&
                    (Fe.start != Fe.endB ||
                      n.input.lastAndroidDelete < Date.now() - 100) &&
                    (St.head == xn || St.head == $t.mapping.map(On) - 1)) ||
                  (nt && St.empty && St.head == xn)
                ) &&
                $t.setSelection(St);
            }
            Yr && $t.ensureMarks(Yr),
              h && $t.setMeta("composition", h),
              n.dispatch($t.scrollIntoView());
          }
          function Xr(n, e, r) {
            return Math.max(r.anchor, r.head) > e.content.size
              ? null
              : J(n, e.resolve(r.anchor), e.resolve(r.head));
          }
          function lo(n, e) {
            let r = n.firstChild.marks,
              l = e.firstChild.marks,
              f = r,
              h = l,
              v,
              C,
              L;
            for (let Z = 0; Z < l.length; Z++) f = l[Z].removeFromSet(f);
            for (let Z = 0; Z < r.length; Z++) h = r[Z].removeFromSet(h);
            if (f.length == 1 && h.length == 0)
              (C = f[0]), (v = "add"), (L = (Z) => Z.mark(C.addToSet(Z.marks)));
            else if (f.length == 0 && h.length == 1)
              (C = h[0]),
                (v = "remove"),
                (L = (Z) => Z.mark(C.removeFromSet(Z.marks)));
            else return null;
            let W = [];
            for (let Z = 0; Z < e.childCount; Z++) W.push(L(e.child(Z)));
            if (g.FK.from(W).eq(n)) return { mark: C, type: v };
          }
          function ao(n, e, r, l, f) {
            if (r - e <= f.pos - l.pos || _n(l, !0, !1) < f.pos) return !1;
            let h = n.resolve(e);
            if (!l.parent.isTextblock) {
              let C = h.nodeAfter;
              return C != null && r == e + C.nodeSize;
            }
            if (h.parentOffset < h.parent.content.size || !h.parent.isTextblock)
              return !1;
            let v = n.resolve(_n(h, !0, !0));
            return !v.parent.isTextblock || v.pos > r || _n(v, !0, !1) < r
              ? !1
              : l.parent.content.cut(l.parentOffset).eq(v.parent.content);
          }
          function _n(n, e, r) {
            let l = n.depth,
              f = e ? n.end() : n.pos;
            for (; l > 0 && (e || n.indexAfter(l) == n.node(l).childCount); )
              l--, f++, (e = !1);
            if (r) {
              let h = n.node(l).maybeChild(n.indexAfter(l));
              for (; h && !h.isLeaf; ) (h = h.firstChild), f++;
            }
            return f;
          }
          function co(n, e, r, l, f) {
            let h = n.findDiffStart(e, r);
            if (h == null) return null;
            let { a: v, b: C } = n.findDiffEnd(e, r + n.size, r + e.size);
            if (f == "end") {
              let L = Math.max(0, h - Math.min(v, C));
              l -= v + L - h;
            }
            if (v < h && n.size < e.size) {
              let L = l <= h && l >= v ? h - l : 0;
              (h -= L),
                h &&
                  h < e.size &&
                  wi(e.textBetween(h - 1, h + 1)) &&
                  (h += L ? 1 : -1),
                (C = h + (C - v)),
                (v = h);
            } else if (C < h) {
              let L = l <= h && l >= C ? h - l : 0;
              (h -= L),
                h &&
                  h < n.size &&
                  wi(n.textBetween(h - 1, h + 1)) &&
                  (h += L ? 1 : -1),
                (v = h + (v - C)),
                (C = h);
            }
            return { start: h, endA: v, endB: C };
          }
          function wi(n) {
            if (n.length != 2) return !1;
            let e = n.charCodeAt(0),
              r = n.charCodeAt(1);
            return e >= 56320 && e <= 57343 && r >= 55296 && r <= 56319;
          }
          const $o = null,
            fo = null,
            Xo = null;
          class uo {
            constructor(e, r) {
              (this._root = null),
                (this.focused = !1),
                (this.trackWrites = null),
                (this.mounted = !1),
                (this.markCursor = null),
                (this.cursorWrapper = null),
                (this.lastSelectedViewDesc = void 0),
                (this.input = new Ui()),
                (this.prevDirectPlugins = []),
                (this.pluginViews = []),
                (this.requiresGeckoHackNode = !1),
                (this.dragging = null),
                (this._props = r),
                (this.state = r.state),
                (this.directPlugins = r.plugins || []),
                this.directPlugins.forEach(Mi),
                (this.dispatch = this.dispatch.bind(this)),
                (this.dom = (e && e.mount) || document.createElement("div")),
                e &&
                  (e.appendChild
                    ? e.appendChild(this.dom)
                    : typeof e == "function"
                      ? e(this.dom)
                      : e.mount && (this.mounted = !0)),
                (this.editable = Ei(this)),
                Ci(this),
                (this.nodeViews = Oi(this)),
                (this.docView = A(
                  this.state.doc,
                  Si(this),
                  Gr(this),
                  this.dom,
                  this,
                )),
                (this.domObserver = new $r(this, (l, f, h, v) =>
                  so(this, l, f, h, v),
                )),
                this.domObserver.start(),
                Dn(this),
                this.updatePluginViews();
            }
            get composing() {
              return this.input.composing;
            }
            get props() {
              if (this._props.state != this.state) {
                let e = this._props;
                this._props = {};
                for (let r in e) this._props[r] = e[r];
                this._props.state = this.state;
              }
              return this._props;
            }
            update(e) {
              e.handleDOMEvents != this._props.handleDOMEvents && Br(this);
              let r = this._props;
              (this._props = e),
                e.plugins &&
                  (e.plugins.forEach(Mi), (this.directPlugins = e.plugins)),
                this.updateStateInner(e.state, r);
            }
            setProps(e) {
              let r = {};
              for (let l in this._props) r[l] = this._props[l];
              r.state = this.state;
              for (let l in e) r[l] = e[l];
              this.update(r);
            }
            updateState(e) {
              this.updateStateInner(e, this._props);
            }
            updateStateInner(e, r) {
              var l;
              let f = this.state,
                h = !1,
                v = !1;
              e.storedMarks && this.composing && (di(this), (v = !0)),
                (this.state = e);
              let C =
                f.plugins != e.plugins || this._props.plugins != r.plugins;
              if (
                C ||
                this._props.plugins != r.plugins ||
                this._props.nodeViews != r.nodeViews
              ) {
                let Ze = Oi(this);
                po(Ze, this.nodeViews) && ((this.nodeViews = Ze), (h = !0));
              }
              (C || r.handleDOMEvents != this._props.handleDOMEvents) &&
                Br(this),
                (this.editable = Ei(this)),
                Ci(this);
              let L = Gr(this),
                W = Si(this),
                Z =
                  f.plugins != e.plugins && !f.doc.eq(e.doc)
                    ? "reset"
                    : e.scrollToSelection > f.scrollToSelection
                      ? "to selection"
                      : "preserve",
                De = h || !this.docView.matchesNode(e.doc, W, L);
              (De || !e.selection.eq(f.selection)) && (v = !0);
              let Ke =
                Z == "preserve" &&
                v &&
                this.dom.style.overflowAnchor == null &&
                yt(this);
              if (v) {
                this.domObserver.stop();
                let Ze =
                  De &&
                  (nt || B) &&
                  !this.composing &&
                  !f.selection.empty &&
                  !e.selection.empty &&
                  ho(f.selection, e.selection);
                if (De) {
                  let Fe = B
                    ? (this.trackWrites = this.domSelectionRange().focusNode)
                    : null;
                  this.composing && (this.input.compositionNode = Yi(this)),
                    (h || !this.docView.update(e.doc, W, L, this)) &&
                      (this.docView.updateOuterDeco(W),
                      this.docView.destroy(),
                      (this.docView = A(e.doc, W, L, this.dom, this))),
                    Fe && !this.trackWrites && (Ze = !0);
                }
                Ze ||
                !(
                  this.input.mouseDown &&
                  this.domObserver.currentSelection.eq(
                    this.domSelectionRange(),
                  ) &&
                  le(this)
                )
                  ? qt(this, Ze)
                  : (k(this, e.selection), this.domObserver.setCurSelection()),
                  this.domObserver.start();
              }
              this.updatePluginViews(f),
                !((l = this.dragging) === null || l === void 0) &&
                  l.node &&
                  !f.doc.eq(e.doc) &&
                  this.updateDraggedNode(this.dragging, f),
                Z == "reset"
                  ? (this.dom.scrollTop = 0)
                  : Z == "to selection"
                    ? this.scrollToSelection()
                    : Ke && Rt(Ke);
            }
            scrollToSelection() {
              let e = this.domSelectionRange().focusNode;
              if (!this.someProp("handleScrollToSelection", (r) => r(this)))
                if (this.state.selection instanceof s.nh) {
                  let r = this.docView.domAfterPos(this.state.selection.from);
                  r.nodeType == 1 && wt(this, r.getBoundingClientRect(), e);
                } else
                  wt(this, this.coordsAtPos(this.state.selection.head, 1), e);
            }
            destroyPluginViews() {
              let e;
              for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
            }
            updatePluginViews(e) {
              if (
                !e ||
                e.plugins != this.state.plugins ||
                this.directPlugins != this.prevDirectPlugins
              ) {
                (this.prevDirectPlugins = this.directPlugins),
                  this.destroyPluginViews();
                for (let r = 0; r < this.directPlugins.length; r++) {
                  let l = this.directPlugins[r];
                  l.spec.view && this.pluginViews.push(l.spec.view(this));
                }
                for (let r = 0; r < this.state.plugins.length; r++) {
                  let l = this.state.plugins[r];
                  l.spec.view && this.pluginViews.push(l.spec.view(this));
                }
              } else
                for (let r = 0; r < this.pluginViews.length; r++) {
                  let l = this.pluginViews[r];
                  l.update && l.update(this, e);
                }
            }
            updateDraggedNode(e, r) {
              let l = e.node,
                f = -1;
              if (this.state.doc.nodeAt(l.from) == l.node) f = l.from;
              else {
                let h =
                  l.from + (this.state.doc.content.size - r.doc.content.size);
                (h > 0 && this.state.doc.nodeAt(h)) == l.node && (f = h);
              }
              this.dragging = new pi(
                e.slice,
                e.move,
                f < 0 ? void 0 : s.nh.create(this.state.doc, f),
              );
            }
            someProp(e, r) {
              let l = this._props && this._props[e],
                f;
              if (l != null && (f = r ? r(l) : l)) return f;
              for (let v = 0; v < this.directPlugins.length; v++) {
                let C = this.directPlugins[v].props[e];
                if (C != null && (f = r ? r(C) : C)) return f;
              }
              let h = this.state.plugins;
              if (h)
                for (let v = 0; v < h.length; v++) {
                  let C = h[v].props[e];
                  if (C != null && (f = r ? r(C) : C)) return f;
                }
            }
            hasFocus() {
              if (nt) {
                let e = this.root.activeElement;
                if (e == this.dom) return !0;
                if (!e || !this.dom.contains(e)) return !1;
                for (; e && this.dom != e && this.dom.contains(e); ) {
                  if (e.contentEditable == "false") return !1;
                  e = e.parentElement;
                }
                return !0;
              }
              return this.root.activeElement == this.dom;
            }
            focus() {
              this.domObserver.stop(),
                this.editable && ye(this.dom),
                qt(this),
                this.domObserver.start();
            }
            get root() {
              let e = this._root;
              if (e == null) {
                for (let r = this.dom.parentNode; r; r = r.parentNode)
                  if (r.nodeType == 9 || (r.nodeType == 11 && r.host))
                    return (
                      r.getSelection ||
                        (Object.getPrototypeOf(r).getSelection = () =>
                          r.ownerDocument.getSelection()),
                      (this._root = r)
                    );
              }
              return e || document;
            }
            updateRoot() {
              this._root = null;
            }
            posAtCoords(e) {
              return gt(this, e);
            }
            coordsAtPos(e, r = 1) {
              return Et(this, e, r);
            }
            domAtPos(e, r = 0) {
              return this.docView.domFromPos(e, r);
            }
            nodeDOM(e) {
              let r = this.docView.descAt(e);
              return r ? r.nodeDOM : null;
            }
            posAtDOM(e, r, l = -1) {
              let f = this.docView.posFromDOM(e, r, l);
              if (f == null)
                throw new RangeError("DOM position not inside the editor");
              return f;
            }
            endOfTextblock(e, r) {
              return P(this, r || this.state, e);
            }
            pasteHTML(e, r) {
              return Xn(this, "", e, !1, r || new ClipboardEvent("paste"));
            }
            pasteText(e, r) {
              return Xn(this, e, null, !0, r || new ClipboardEvent("paste"));
            }
            destroy() {
              this.docView &&
                (Wi(this),
                this.destroyPluginViews(),
                this.mounted
                  ? (this.docView.update(this.state.doc, [], Gr(this), this),
                    (this.dom.textContent = ""))
                  : this.dom.parentNode &&
                    this.dom.parentNode.removeChild(this.dom),
                this.docView.destroy(),
                (this.docView = null),
                I());
            }
            get isDestroyed() {
              return this.docView == null;
            }
            dispatchEvent(e) {
              return Gn(this, e);
            }
            dispatch(e) {
              let r = this._props.dispatchTransaction;
              r ? r.call(this, e) : this.updateState(this.state.apply(e));
            }
            domSelectionRange() {
              let e = this.domSelection();
              return (
                ($ &&
                  this.root.nodeType === 11 &&
                  ae(this.dom.ownerDocument) == this.dom &&
                  io(this, e)) ||
                e
              );
            }
            domSelection() {
              return this.root.getSelection();
            }
          }
          function Si(n) {
            let e = Object.create(null);
            return (
              (e.class = "ProseMirror"),
              (e.contenteditable = String(n.editable)),
              n.someProp("attributes", (r) => {
                if ((typeof r == "function" && (r = r(n.state)), r))
                  for (let l in r)
                    l == "class"
                      ? (e.class += " " + r[l])
                      : l == "style"
                        ? (e.style = (e.style ? e.style + ";" : "") + r[l])
                        : !e[l] &&
                          l != "contenteditable" &&
                          l != "nodeName" &&
                          (e[l] = String(r[l]));
              }),
              e.translate || (e.translate = "no"),
              [Xt.node(0, n.state.doc.content.size, e)]
            );
          }
          function Ci(n) {
            if (n.markCursor) {
              let e = document.createElement("img");
              (e.className = "ProseMirror-separator"),
                e.setAttribute("mark-placeholder", "true"),
                e.setAttribute("alt", ""),
                (n.cursorWrapper = {
                  dom: e,
                  deco: Xt.widget(n.state.selection.head, e, {
                    raw: !0,
                    marks: n.markCursor,
                  }),
                });
            } else n.cursorWrapper = null;
          }
          function Ei(n) {
            return !n.someProp("editable", (e) => e(n.state) === !1);
          }
          function ho(n, e) {
            let r = Math.min(
              n.$anchor.sharedDepth(n.head),
              e.$anchor.sharedDepth(e.head),
            );
            return n.$anchor.start(r) != e.$anchor.start(r);
          }
          function Oi(n) {
            let e = Object.create(null);
            function r(l) {
              for (let f in l)
                Object.prototype.hasOwnProperty.call(e, f) || (e[f] = l[f]);
            }
            return n.someProp("nodeViews", r), n.someProp("markViews", r), e;
          }
          function po(n, e) {
            let r = 0,
              l = 0;
            for (let f in n) {
              if (n[f] != e[f]) return !0;
              r++;
            }
            for (let f in e) l++;
            return r != l;
          }
          function Mi(n) {
            if (
              n.spec.state ||
              n.spec.filterTransaction ||
              n.spec.appendTransaction
            )
              throw new RangeError(
                "Plugins passed directly to the view must not have a state component",
              );
          }
        },
        98724: (D, V, d) => {
          "use strict";
          d.d(V, { b6: () => Je, ZS: () => Xe, tN: () => nt });
          var s = 200,
            g = function () {};
          (g.prototype.append = function (X) {
            return X.length
              ? ((X = g.from(X)),
                (!this.length && X) ||
                  (X.length < s && this.leafAppend(X)) ||
                  (this.length < s && X.leafPrepend(this)) ||
                  this.appendInner(X))
              : this;
          }),
            (g.prototype.prepend = function (X) {
              return X.length ? g.from(X).append(this) : this;
            }),
            (g.prototype.appendInner = function (X) {
              return new _(this, X);
            }),
            (g.prototype.slice = function (X, ie) {
              return (
                X === void 0 && (X = 0),
                ie === void 0 && (ie = this.length),
                X >= ie
                  ? g.empty
                  : this.sliceInner(Math.max(0, X), Math.min(this.length, ie))
              );
            }),
            (g.prototype.get = function (X) {
              if (!(X < 0 || X >= this.length)) return this.getInner(X);
            }),
            (g.prototype.forEach = function (X, ie, xe) {
              ie === void 0 && (ie = 0),
                xe === void 0 && (xe = this.length),
                ie <= xe
                  ? this.forEachInner(X, ie, xe, 0)
                  : this.forEachInvertedInner(X, ie, xe, 0);
            }),
            (g.prototype.map = function (X, ie, xe) {
              ie === void 0 && (ie = 0), xe === void 0 && (xe = this.length);
              var Ce = [];
              return (
                this.forEach(
                  function (Ve, Ee) {
                    return Ce.push(X(Ve, Ee));
                  },
                  ie,
                  xe,
                ),
                Ce
              );
            }),
            (g.from = function (X) {
              return X instanceof g ? X : X && X.length ? new M(X) : g.empty;
            });
          var M = (function ($) {
            function X(xe) {
              $.call(this), (this.values = xe);
            }
            $ && (X.__proto__ = $),
              (X.prototype = Object.create($ && $.prototype)),
              (X.prototype.constructor = X);
            var ie = {
              length: { configurable: !0 },
              depth: { configurable: !0 },
            };
            return (
              (X.prototype.flatten = function () {
                return this.values;
              }),
              (X.prototype.sliceInner = function (Ce, Ve) {
                return Ce == 0 && Ve == this.length
                  ? this
                  : new X(this.values.slice(Ce, Ve));
              }),
              (X.prototype.getInner = function (Ce) {
                return this.values[Ce];
              }),
              (X.prototype.forEachInner = function (Ce, Ve, Ee, rt) {
                for (var ct = Ve; ct < Ee; ct++)
                  if (Ce(this.values[ct], rt + ct) === !1) return !1;
              }),
              (X.prototype.forEachInvertedInner = function (Ce, Ve, Ee, rt) {
                for (var ct = Ve - 1; ct >= Ee; ct--)
                  if (Ce(this.values[ct], rt + ct) === !1) return !1;
              }),
              (X.prototype.leafAppend = function (Ce) {
                if (this.length + Ce.length <= s)
                  return new X(this.values.concat(Ce.flatten()));
              }),
              (X.prototype.leafPrepend = function (Ce) {
                if (this.length + Ce.length <= s)
                  return new X(Ce.flatten().concat(this.values));
              }),
              (ie.length.get = function () {
                return this.values.length;
              }),
              (ie.depth.get = function () {
                return 0;
              }),
              Object.defineProperties(X.prototype, ie),
              X
            );
          })(g);
          g.empty = new M([]);
          var _ = (function ($) {
            function X(ie, xe) {
              $.call(this),
                (this.left = ie),
                (this.right = xe),
                (this.length = ie.length + xe.length),
                (this.depth = Math.max(ie.depth, xe.depth) + 1);
            }
            return (
              $ && (X.__proto__ = $),
              (X.prototype = Object.create($ && $.prototype)),
              (X.prototype.constructor = X),
              (X.prototype.flatten = function () {
                return this.left.flatten().concat(this.right.flatten());
              }),
              (X.prototype.getInner = function (xe) {
                return xe < this.left.length
                  ? this.left.get(xe)
                  : this.right.get(xe - this.left.length);
              }),
              (X.prototype.forEachInner = function (xe, Ce, Ve, Ee) {
                var rt = this.left.length;
                if (
                  (Ce < rt &&
                    this.left.forEachInner(xe, Ce, Math.min(Ve, rt), Ee) ===
                      !1) ||
                  (Ve > rt &&
                    this.right.forEachInner(
                      xe,
                      Math.max(Ce - rt, 0),
                      Math.min(this.length, Ve) - rt,
                      Ee + rt,
                    ) === !1)
                )
                  return !1;
              }),
              (X.prototype.forEachInvertedInner = function (xe, Ce, Ve, Ee) {
                var rt = this.left.length;
                if (
                  (Ce > rt &&
                    this.right.forEachInvertedInner(
                      xe,
                      Ce - rt,
                      Math.max(Ve, rt) - rt,
                      Ee + rt,
                    ) === !1) ||
                  (Ve < rt &&
                    this.left.forEachInvertedInner(
                      xe,
                      Math.min(Ce, rt),
                      Ve,
                      Ee,
                    ) === !1)
                )
                  return !1;
              }),
              (X.prototype.sliceInner = function (xe, Ce) {
                if (xe == 0 && Ce == this.length) return this;
                var Ve = this.left.length;
                return Ce <= Ve
                  ? this.left.slice(xe, Ce)
                  : xe >= Ve
                    ? this.right.slice(xe - Ve, Ce - Ve)
                    : this.left
                        .slice(xe, Ve)
                        .append(this.right.slice(0, Ce - Ve));
              }),
              (X.prototype.leafAppend = function (xe) {
                var Ce = this.right.leafAppend(xe);
                if (Ce) return new X(this.left, Ce);
              }),
              (X.prototype.leafPrepend = function (xe) {
                var Ce = this.left.leafPrepend(xe);
                if (Ce) return new X(Ce, this.right);
              }),
              (X.prototype.appendInner = function (xe) {
                return this.left.depth >=
                  Math.max(this.right.depth, xe.depth) + 1
                  ? new X(this.left, new X(this.right, xe))
                  : new X(this, xe);
              }),
              X
            );
          })(g);
          const T = g;
          var K = d(63734),
            U = d(52893);
          const I = 500;
          class G {
            constructor(X, ie) {
              (this.items = X), (this.eventCount = ie);
            }
            popEvent(X, ie) {
              if (this.eventCount == 0) return null;
              let xe = this.items.length;
              for (; ; xe--)
                if (this.items.get(xe - 1).selection) {
                  --xe;
                  break;
                }
              let Ce, Ve;
              ie &&
                ((Ce = this.remapping(xe, this.items.length)),
                (Ve = Ce.maps.length));
              let Ee = X.tr,
                rt,
                ct,
                vt = [],
                wt = [];
              return (
                this.items.forEach(
                  (yt, Ct) => {
                    if (!yt.step) {
                      Ce ||
                        ((Ce = this.remapping(xe, Ct + 1)),
                        (Ve = Ce.maps.length)),
                        Ve--,
                        wt.push(yt);
                      return;
                    }
                    if (Ce) {
                      wt.push(new pe(yt.map));
                      let Rt = yt.step.map(Ce.slice(Ve)),
                        Bt;
                      Rt &&
                        Ee.maybeStep(Rt).doc &&
                        ((Bt = Ee.mapping.maps[Ee.mapping.maps.length - 1]),
                        vt.push(
                          new pe(Bt, void 0, void 0, vt.length + wt.length),
                        )),
                        Ve--,
                        Bt && Ce.appendMap(Bt, Ve);
                    } else Ee.maybeStep(yt.step);
                    if (yt.selection)
                      return (
                        (rt = Ce
                          ? yt.selection.map(Ce.slice(Ve))
                          : yt.selection),
                        (ct = new G(
                          this.items
                            .slice(0, xe)
                            .append(wt.reverse().concat(vt)),
                          this.eventCount - 1,
                        )),
                        !1
                      );
                  },
                  this.items.length,
                  0,
                ),
                { remaining: ct, transform: Ee, selection: rt }
              );
            }
            addTransform(X, ie, xe, Ce) {
              let Ve = [],
                Ee = this.eventCount,
                rt = this.items,
                ct = !Ce && rt.length ? rt.get(rt.length - 1) : null;
              for (let wt = 0; wt < X.steps.length; wt++) {
                let yt = X.steps[wt].invert(X.docs[wt]),
                  Ct = new pe(X.mapping.maps[wt], yt, ie),
                  Rt;
                (Rt = ct && ct.merge(Ct)) &&
                  ((Ct = Rt),
                  wt ? Ve.pop() : (rt = rt.slice(0, rt.length - 1))),
                  Ve.push(Ct),
                  ie && (Ee++, (ie = void 0)),
                  Ce || (ct = Ct);
              }
              let vt = Ee - xe.depth;
              return (
                vt > je && ((rt = se(rt, vt)), (Ee -= vt)),
                new G(rt.append(Ve), Ee)
              );
            }
            remapping(X, ie) {
              let xe = new K.X9();
              return (
                this.items.forEach(
                  (Ce, Ve) => {
                    let Ee =
                      Ce.mirrorOffset != null && Ve - Ce.mirrorOffset >= X
                        ? xe.maps.length - Ce.mirrorOffset
                        : void 0;
                    xe.appendMap(Ce.map, Ee);
                  },
                  X,
                  ie,
                ),
                xe
              );
            }
            addMaps(X) {
              return this.eventCount == 0
                ? this
                : new G(
                    this.items.append(X.map((ie) => new pe(ie))),
                    this.eventCount,
                  );
            }
            rebased(X, ie) {
              if (!this.eventCount) return this;
              let xe = [],
                Ce = Math.max(0, this.items.length - ie),
                Ve = X.mapping,
                Ee = X.steps.length,
                rt = this.eventCount;
              this.items.forEach((Ct) => {
                Ct.selection && rt--;
              }, Ce);
              let ct = ie;
              this.items.forEach((Ct) => {
                let Rt = Ve.getMirror(--ct);
                if (Rt == null) return;
                Ee = Math.min(Ee, Rt);
                let Bt = Ve.maps[Rt];
                if (Ct.step) {
                  let be = X.steps[Rt].invert(X.docs[Rt]),
                    ye = Ct.selection && Ct.selection.map(Ve.slice(ct + 1, Rt));
                  ye && rt++, xe.push(new pe(Bt, be, ye));
                } else xe.push(new pe(Bt));
              }, Ce);
              let vt = [];
              for (let Ct = ie; Ct < Ee; Ct++) vt.push(new pe(Ve.maps[Ct]));
              let wt = this.items.slice(0, Ce).append(vt).append(xe),
                yt = new G(wt, rt);
              return (
                yt.emptyItemCount() > I &&
                  (yt = yt.compress(this.items.length - xe.length)),
                yt
              );
            }
            emptyItemCount() {
              let X = 0;
              return (
                this.items.forEach((ie) => {
                  ie.step || X++;
                }),
                X
              );
            }
            compress(X = this.items.length) {
              let ie = this.remapping(0, X),
                xe = ie.maps.length,
                Ce = [],
                Ve = 0;
              return (
                this.items.forEach(
                  (Ee, rt) => {
                    if (rt >= X) Ce.push(Ee), Ee.selection && Ve++;
                    else if (Ee.step) {
                      let ct = Ee.step.map(ie.slice(xe)),
                        vt = ct && ct.getMap();
                      if ((xe--, vt && ie.appendMap(vt, xe), ct)) {
                        let wt = Ee.selection && Ee.selection.map(ie.slice(xe));
                        wt && Ve++;
                        let yt = new pe(vt.invert(), ct, wt),
                          Ct,
                          Rt = Ce.length - 1;
                        (Ct = Ce.length && Ce[Rt].merge(yt))
                          ? (Ce[Rt] = Ct)
                          : Ce.push(yt);
                      }
                    } else Ee.map && xe--;
                  },
                  this.items.length,
                  0,
                ),
                new G(T.from(Ce.reverse()), Ve)
              );
            }
          }
          G.empty = new G(T.empty, 0);
          function se($, X) {
            let ie;
            return (
              $.forEach((xe, Ce) => {
                if (xe.selection && X-- == 0) return (ie = Ce), !1;
              }),
              $.slice(ie)
            );
          }
          class pe {
            constructor(X, ie, xe, Ce) {
              (this.map = X),
                (this.step = ie),
                (this.selection = xe),
                (this.mirrorOffset = Ce);
            }
            merge(X) {
              if (this.step && X.step && !X.selection) {
                let ie = X.step.merge(this.step);
                if (ie) return new pe(ie.getMap().invert(), ie, this.selection);
              }
            }
          }
          class ve {
            constructor(X, ie, xe, Ce, Ve) {
              (this.done = X),
                (this.undone = ie),
                (this.prevRanges = xe),
                (this.prevTime = Ce),
                (this.prevComposition = Ve);
            }
          }
          const je = 20;
          function We($, X, ie, xe) {
            let Ce = ie.getMeta(he),
              Ve;
            if (Ce) return Ce.historyState;
            ie.getMeta(Le) && ($ = new ve($.done, $.undone, null, 0, -1));
            let Ee = ie.getMeta("appendedTransaction");
            if (ie.steps.length == 0) return $;
            if (Ee && Ee.getMeta(he))
              return Ee.getMeta(he).redo
                ? new ve(
                    $.done.addTransform(ie, void 0, xe, fe(X)),
                    $.undone,
                    Q(ie.mapping.maps[ie.steps.length - 1]),
                    $.prevTime,
                    $.prevComposition,
                  )
                : new ve(
                    $.done,
                    $.undone.addTransform(ie, void 0, xe, fe(X)),
                    null,
                    $.prevTime,
                    $.prevComposition,
                  );
            if (
              ie.getMeta("addToHistory") !== !1 &&
              !(Ee && Ee.getMeta("addToHistory") === !1)
            ) {
              let rt = ie.getMeta("composition"),
                ct =
                  $.prevTime == 0 ||
                  (!Ee &&
                    $.prevComposition != rt &&
                    ($.prevTime < (ie.time || 0) - xe.newGroupDelay ||
                      !Me(ie, $.prevRanges))),
                vt = Ee
                  ? ge($.prevRanges, ie.mapping)
                  : Q(ie.mapping.maps[ie.steps.length - 1]);
              return new ve(
                $.done.addTransform(
                  ie,
                  ct ? X.selection.getBookmark() : void 0,
                  xe,
                  fe(X),
                ),
                G.empty,
                vt,
                ie.time,
                rt ?? $.prevComposition,
              );
            } else
              return (Ve = ie.getMeta("rebased"))
                ? new ve(
                    $.done.rebased(ie, Ve),
                    $.undone.rebased(ie, Ve),
                    ge($.prevRanges, ie.mapping),
                    $.prevTime,
                    $.prevComposition,
                  )
                : new ve(
                    $.done.addMaps(ie.mapping.maps),
                    $.undone.addMaps(ie.mapping.maps),
                    ge($.prevRanges, ie.mapping),
                    $.prevTime,
                    $.prevComposition,
                  );
          }
          function Me($, X) {
            if (!X) return !1;
            if (!$.docChanged) return !0;
            let ie = !1;
            return (
              $.mapping.maps[0].forEach((xe, Ce) => {
                for (let Ve = 0; Ve < X.length; Ve += 2)
                  xe <= X[Ve + 1] && Ce >= X[Ve] && (ie = !0);
              }),
              ie
            );
          }
          function Q($) {
            let X = [];
            return $.forEach((ie, xe, Ce, Ve) => X.push(Ce, Ve)), X;
          }
          function ge($, X) {
            if (!$) return null;
            let ie = [];
            for (let xe = 0; xe < $.length; xe += 2) {
              let Ce = X.map($[xe], 1),
                Ve = X.map($[xe + 1], -1);
              Ce <= Ve && ie.push(Ce, Ve);
            }
            return ie;
          }
          function Ae($, X, ie) {
            let xe = fe(X),
              Ce = he.get(X).spec.config,
              Ve = (ie ? $.undone : $.done).popEvent(X, xe);
            if (!Ve) return null;
            let Ee = Ve.selection.resolve(Ve.transform.doc),
              rt = (ie ? $.done : $.undone).addTransform(
                Ve.transform,
                X.selection.getBookmark(),
                Ce,
                xe,
              ),
              ct = new ve(
                ie ? rt : Ve.remaining,
                ie ? Ve.remaining : rt,
                null,
                0,
                -1,
              );
            return Ve.transform
              .setSelection(Ee)
              .setMeta(he, { redo: ie, historyState: ct });
          }
          let ae = !1,
            me = null;
          function fe($) {
            let X = $.plugins;
            if (me != X) {
              (ae = !1), (me = X);
              for (let ie = 0; ie < X.length; ie++)
                if (X[ie].spec.historyPreserveItems) {
                  ae = !0;
                  break;
                }
            }
            return ae;
          }
          function Pe($) {
            return $.setMeta(Le, !0);
          }
          const he = new U.hs("history"),
            Le = new U.hs("closeHistory");
          function Je($ = {}) {
            return (
              ($ = {
                depth: $.depth || 100,
                newGroupDelay: $.newGroupDelay || 500,
              }),
              new U.k_({
                key: he,
                state: {
                  init() {
                    return new ve(G.empty, G.empty, null, 0, -1);
                  },
                  apply(X, ie, xe) {
                    return We(ie, xe, X, $);
                  },
                },
                config: $,
                props: {
                  handleDOMEvents: {
                    beforeinput(X, ie) {
                      let xe = ie.inputType,
                        Ce =
                          xe == "historyUndo"
                            ? nt
                            : xe == "historyRedo"
                              ? Xe
                              : null;
                      return Ce
                        ? (ie.preventDefault(), Ce(X.state, X.dispatch))
                        : !1;
                    },
                  },
                },
              })
            );
          }
          function Ye($, X) {
            return (ie, xe) => {
              let Ce = he.getState(ie);
              if (!Ce || ($ ? Ce.undone : Ce.done).eventCount == 0) return !1;
              if (xe) {
                let Ve = Ae(Ce, ie, $);
                Ve && xe(X ? Ve.scrollIntoView() : Ve);
              }
              return !0;
            };
          }
          const nt = Ye(!1, !0),
            Xe = Ye(!0, !0),
            tt = Ye(!1, !1),
            Ne = Ye(!0, !1);
          function B($) {
            let X = he.getState($);
            return X ? X.done.eventCount : 0;
          }
          function ne($) {
            let X = he.getState($);
            return X ? X.undone.eventCount : 0;
          }
        },
        79216: (D, V, d) => {
          "use strict";
          d.d(V, {
            JJ: () => ge,
            dv: () => I,
            fV: () => M,
            sM: () => K,
            tG: () => Q,
          });
          var s = d(52893),
            g = d(63734);
          class M {
            constructor(ae, me, fe = {}) {
              (this.match = ae),
                (this.match = ae),
                (this.handler = typeof me == "string" ? _(me) : me),
                (this.undoable = fe.undoable !== !1),
                (this.inCode = fe.inCode || !1);
            }
          }
          function _(Ae) {
            return function (ae, me, fe, Pe) {
              let he = Ae;
              if (me[1]) {
                let Le = me[0].lastIndexOf(me[1]);
                (he += me[0].slice(Le + me[1].length)), (fe += Le);
                let Je = fe - Pe;
                Je > 0 && ((he = me[0].slice(Le - Je, Le) + he), (fe = Pe));
              }
              return ae.tr.insertText(he, fe, Pe);
            };
          }
          const T = 500;
          function K({ rules: Ae }) {
            let ae = new s.k_({
              state: {
                init() {
                  return null;
                },
                apply(me, fe) {
                  let Pe = me.getMeta(this);
                  return Pe || (me.selectionSet || me.docChanged ? null : fe);
                },
              },
              props: {
                handleTextInput(me, fe, Pe, he) {
                  return U(me, fe, Pe, he, Ae, ae);
                },
                handleDOMEvents: {
                  compositionend: (me) => {
                    setTimeout(() => {
                      let { $cursor: fe } = me.state.selection;
                      fe && U(me, fe.pos, fe.pos, "", Ae, ae);
                    });
                  },
                },
              },
              isInputRules: !0,
            });
            return ae;
          }
          function U(Ae, ae, me, fe, Pe, he) {
            if (Ae.composing) return !1;
            let Le = Ae.state,
              Je = Le.doc.resolve(ae),
              Ye =
                Je.parent.textBetween(
                  Math.max(0, Je.parentOffset - T),
                  Je.parentOffset,
                  null,
                  "\uFFFC",
                ) + fe;
            for (let nt = 0; nt < Pe.length; nt++) {
              let Xe = Pe[nt];
              if (Je.parent.type.spec.code) {
                if (!Xe.inCode) continue;
              } else if (Xe.inCode === "only") continue;
              let tt = Xe.match.exec(Ye),
                Ne =
                  tt && Xe.handler(Le, tt, ae - (tt[0].length - fe.length), me);
              if (Ne)
                return (
                  Xe.undoable &&
                    Ne.setMeta(he, {
                      transform: Ne,
                      from: ae,
                      to: me,
                      text: fe,
                    }),
                  Ae.dispatch(Ne),
                  !0
                );
            }
            return !1;
          }
          const I = (Ae, ae) => {
              let me = Ae.plugins;
              for (let fe = 0; fe < me.length; fe++) {
                let Pe = me[fe],
                  he;
                if (Pe.spec.isInputRules && (he = Pe.getState(Ae))) {
                  if (ae) {
                    let Le = Ae.tr,
                      Je = he.transform;
                    for (let Ye = Je.steps.length - 1; Ye >= 0; Ye--)
                      Le.step(Je.steps[Ye].invert(Je.docs[Ye]));
                    if (he.text) {
                      let Ye = Le.doc.resolve(he.from).marks();
                      Le.replaceWith(
                        he.from,
                        he.to,
                        Ae.schema.text(he.text, Ye),
                      );
                    } else Le.delete(he.from, he.to);
                    ae(Le);
                  }
                  return !0;
                }
              }
              return !1;
            },
            G = new M(/--$/, "\u2014"),
            se = new M(/\.\.\.$/, "\u2026"),
            pe = new M(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "\u201C"),
            ve = new M(/"$/, "\u201D"),
            je = new M(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "\u2018"),
            We = new M(/'$/, "\u2019"),
            Me = [pe, ve, je, We];
          function Q(Ae, ae, me = null, fe) {
            return new M(Ae, (Pe, he, Le, Je) => {
              let Ye = me instanceof Function ? me(he) : me,
                nt = Pe.tr.delete(Le, Je),
                Xe = nt.doc.resolve(Le),
                tt = Xe.blockRange(),
                Ne = tt && (0, g.oM)(tt, ae, Ye);
              if (!Ne) return null;
              nt.wrap(tt, Ne);
              let B = nt.doc.resolve(Le - 1).nodeBefore;
              return (
                B &&
                  B.type == ae &&
                  (0, g.n9)(nt.doc, Le - 1) &&
                  (!fe || fe(he, B)) &&
                  nt.join(Le - 1),
                nt
              );
            });
          }
          function ge(Ae, ae, me = null) {
            return new M(Ae, (fe, Pe, he, Le) => {
              let Je = fe.doc.resolve(he),
                Ye = me instanceof Function ? me(Pe) : me;
              return Je.node(-1).canReplaceWith(
                Je.index(-1),
                Je.indexAfter(-1),
                ae,
              )
                ? fe.tr.delete(he, Le).setBlockType(he, he, ae, Ye)
                : null;
            });
          }
        },
      },
    ]);
  });
  jh();
})();
