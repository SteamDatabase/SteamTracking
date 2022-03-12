/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "0OaU": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("q1tI"),
        i = r.n(n),
        s = r("6Y59"),
        a = r("2i24"),
        o = r.n(a);
      class c extends i.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(o.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(o.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(o.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(o.a.throbber_xxlarge)
            : e.push(o.a.throbber_large);
        }
        render() {
          let e = [o.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(o.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(o.a.Static);
          let t = i.a.createElement(
            "div",
            { className: e.join(" ") },
            i.a.createElement(
              "div",
              { className: o.a.Throbber },
              i.a.createElement(s.nb, { className: o.a.base }),
              i.a.createElement(s.nb, { className: o.a.blur })
            )
          );
          return i.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? o.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              i.a.createElement(
                "div",
                { className: o.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    "2ErG": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return c;
        });
      var n = r("hRO2"),
        i = r("OS8t");
      const s = n.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.bincremental || i.a(a.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  bincremental: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                  friends: { n: 2, c: o, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(a.M(), e, t);
        }
        static fromObject(e) {
          return i.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.ulfriendid || i.a(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: i.d.readFixed64String,
                    bw: i.h.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(o.M(), e, t);
        }
        static fromObject(e) {
          return i.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.persona_state || i.a(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  persona_state: {
                    n: 1,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  player_name: {
                    n: 2,
                    br: i.d.readString,
                    bw: i.h.writeString,
                  },
                  is_auto_generated_name: {
                    n: 3,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  high_priority: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                  persona_set_by_user: {
                    n: 5,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  persona_state_flags: {
                    n: 6,
                    d: 0,
                    br: i.d.readUint32,
                    bw: i.h.writeUint32,
                  },
                  need_persona_response: {
                    n: 7,
                    br: i.d.readBool,
                    bw: i.h.writeBool,
                  },
                  is_client_idle: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.g(c.M(), e, t);
        }
        static fromObject(e) {
          return i.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientChangeStatus";
        }
      }
    },
    Jz9t: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return S;
      }),
        r.d(t, "b", function () {
          return w;
        });
      var n = r("mrSG"),
        i = r("q1tI"),
        s = r.n(i),
        a = r("r64O"),
        o = r("exH9"),
        c = r("opsS"),
        l = r("EC67");
      function d(e, t, r) {
        var n;
        const s = `${e}_HistoryValue`,
          a = Object(l.h)(),
          o = Object(l.i)(),
          c = null !== (n = o.state && o.state[s]) && void 0 !== n ? n : r,
          d = i.useRef(!1),
          m = i.useRef(),
          h = i.useRef(),
          u = i.useCallback(
            (e) => {
              if (d.current && ((m.current = e), !h.current)) {
                const e = a.location.pathname;
                h.current = window.setTimeout(() => {
                  a.location.pathname == e &&
                    a.location.state[s] != m.current &&
                    a.replace(
                      a.location.pathname,
                      Object.assign(Object.assign({}, a.location.state), {
                        [s]: m.current,
                      })
                    ),
                    (h.current = void 0);
                }, t);
              }
            },
            [a, s, t]
          );
        return (
          i.useEffect(() => {
            d.current = !0;
          }, []),
          [c, u]
        );
      }
      r("BaVA");
      var m = r("j+5p"),
        h = r("hJxo"),
        u = r("rHSA");
      function _(e, t = "smooth", r, n) {
        const i = (null != r ? r : 30) / 100,
          a = s.a.useRef(void 0),
          o = s.a.useRef(void 0),
          c = s.a.useCallback(() => {
            (a.current = void 0), (o.current = void 0);
          }, []),
          l = (function (e, t) {
            const r = s.a.useRef();
            return s.a.useCallback(
              (n, i) => {
                let s = "sine";
                r.current && (r.current.Cancel(), (s = "linear")),
                  void 0 === n && (n = e.current.scrollTop),
                  void 0 === i && (i = e.current.scrollLeft);
                let a = Math.max(
                  Math.abs(e.current.scrollTop - n),
                  Math.abs(e.current.scrollLeft - i)
                );
                if (a > 0) {
                  let o = Math.max(Math.min((a / 1e3) * 200, 500), 300);
                  (r.current = new h.c(
                    e.current,
                    { scrollTop: n, scrollLeft: i },
                    { msDuration: o, timing: s, onComplete: t }
                  )),
                    r.current.Start();
                } else t && t();
              },
              [e, t]
            );
          })(e, c);
        return s.a.useCallback(
          (r) => {
            var s, d;
            if (n && !n(r)) return !1;
            const {
                scrollTop: m,
                scrollHeight: h,
                clientHeight: _,
                scrollLeft: b,
                scrollWidth: g,
                clientWidth: C,
              } = e.current,
              p = null !== (s = a.current) && void 0 !== s ? s : m,
              S = null !== (d = o.current) && void 0 !== d ? d : b;
            switch (r.detail.button) {
              case u.a.DIR_UP:
                if (p <= 2) return !1;
                a.current = Math.max(0, p - _ * i);
                break;
              case u.a.DIR_DOWN:
                if (p >= h - _ - 2) return !1;
                a.current = Math.min(h - _, p + _ * i);
                break;
              case u.a.DIR_LEFT:
                if (S <= 2) return !1;
                o.current = Math.max(0, S - C * i);
                break;
              case u.a.DIR_RIGHT:
                if (S >= g - C - 2) return !1;
                o.current = Math.min(g - C, S + C * i);
                break;
              default:
                return !1;
            }
            return (
              t && "smooth" != t
                ? (e.current.scrollTo({
                    top: a.current,
                    left: o.current,
                    behavior: "auto",
                  }),
                  c())
                : l(a.current, o.current),
              !0
            );
          },
          [n, e, t, i, l, c]
        );
      }
      var b = r("yLGM"),
        g = r("qDk6"),
        C = r("ZAxP"),
        p = r.n(C);
      const S = s.a.forwardRef(function (e, t) {
          const {
              scrollDirection: r,
              scrollPaddingTop: i,
              scrollPaddingRight: a,
              scrollPaddingBottom: c,
              scrollPaddingLeft: l,
              className: d,
              children: m,
              style: h,
            } = e,
            u = Object(n.c)(e, [
              "scrollDirection",
              "scrollPaddingTop",
              "scrollPaddingRight",
              "scrollPaddingBottom",
              "scrollPaddingLeft",
              "className",
              "children",
              "style",
            ]);
          let _;
          switch (r) {
            case "x":
              _ = p.a.ScrollX;
              break;
            case "both":
              _ = p.a.ScrollBoth;
              break;
            case "y":
            default:
              _ = p.a.ScrollY;
          }
          let C = Object.assign({}, h);
          return (
            (i || 0 === i) && (C.scrollPaddingTop = i),
            (a || 0 === a) && (C.scrollPaddingRight = a),
            (c || 0 === c) && (C.scrollPaddingBottom = c),
            (l || 0 === l) && (C.scrollPaddingLeft = l),
            s.a.createElement(
              g.a,
              Object.assign({}, u, {
                style: C,
                className: Object(o.a)(d, p.a.ScrollPanel, _),
                ref: t,
              }),
              s.a.createElement(b.a, null, m)
            )
          );
        }),
        w = s.a.forwardRef(function (e, t) {
          const { scrollStepPercent: r, scrollBehavior: i } = e,
            a = Object(n.c)(e, ["scrollStepPercent", "scrollBehavior"]),
            o = s.a.useRef(),
            l = _(
              o,
              i,
              r,
              s.a.useCallback((e) => e.currentTarget != e.target, [])
            ),
            d = Object(c.f)(o, t);
          return s.a.createElement(
            S,
            Object.assign({}, a, {
              onGamepadDirection: l,
              ref: d,
              scrollIntoViewType: m.e.NoTransformSparseContent,
            })
          );
        });
      s.a.forwardRef(function (e, t) {
        const { name: r, msScrollRestoreDelay: i, onScroll: a } = e,
          o = Object(n.c)(e, ["name", "msScrollRestoreDelay", "onScroll"]);
        return s.a.createElement(
          f,
          { name: r, msScrollRestoreDelay: i, parentOnScroll: a, refDiv: t },
          (e, t) =>
            s.a.createElement(S, Object.assign({}, o, { onScroll: e, ref: t }))
        );
      });
      function f(e) {
        const {
            name: t,
            msScrollRestoreDelay: r,
            parentOnScroll: n,
            refDiv: i,
            children: o,
          } = e,
          [l, m] = d(`${t}ScrollTop`, 250, 0),
          [h, u] = d(`${t}ScrollLeft`, 250, 0),
          _ = s.a.useRef(0),
          b = s.a.useRef(0),
          g = s.a.useRef();
        let C = s.a.useCallback(
          (e) => {
            const { scrollTop: t, scrollLeft: r } = e.currentTarget;
            m(t), (_.current = t), u(r), (b.current = r), n && n(e);
          },
          [m, u, n]
        );
        s.a.useLayoutEffect(() => {
          const e = function () {
            Object(a.a)(
              g.current.scrollHeight >= l,
              `Element is ${g.current.scrollHeight} high but trying to restore scrollTop of ${l}, element may need more time to lay out.`,
              g.current
            ),
              (_.current = l),
              (b.current = h),
              g.current.scrollTo({ top: l, left: h, behavior: "auto" }),
              g.current.dispatchEvent(new UIEvent("scroll"));
          };
          (l == _.current && h == b.current) ||
            (r ? window.setTimeout(e, r) : e());
        }, [l, h, r]);
        const p = Object(c.f)(g, i);
        return s.a.useMemo(() => o(C, p), [C, p, o]);
      }
    },
    TX96: function (e, t, r) {
      "use strict";
      var n = r("mrSG"),
        i = r("K5Iu"),
        s = r("H7XF"),
        a = r("hRO2"),
        o = r("lkRc"),
        c = r("bxBv"),
        l = r("kLLr"),
        d = r("mC9v"),
        m = r("NtSG"),
        h = r("2ErG"),
        u = r("2vnA"),
        _ = r("mgoM"),
        b = (r("kyHq"), r("OS8t")),
        g = r("RD/U");
      const C = a.Message;
      class p extends C {
        constructor(e = null) {
          super(),
            p.prototype.send_reply || b.a(p.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  send_reply: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = b.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(p.M(), e, t);
        }
        static fromObject(e) {
          return b.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientHeartBeat";
        }
      }
      class S extends C {
        constructor(e = null) {
          super(),
            S.prototype.client_request_timestamp || b.a(S.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  client_request_timestamp: {
                    n: 1,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = b.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(S.M(), e, t);
        }
        static fromObject(e) {
          return b.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServerTimestampRequest";
        }
      }
      class w extends C {
        constructor(e = null) {
          super(),
            w.prototype.client_request_timestamp || b.a(w.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  client_request_timestamp: {
                    n: 1,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                  server_timestamp_ms: {
                    n: 2,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = b.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(w.M(), e, t);
        }
        static fromObject(e) {
          return b.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServerTimestampResponse";
        }
      }
      class f extends C {
        constructor(e = null) {
          super(),
            f.prototype.eresult || b.a(f.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  eresult: {
                    n: 1,
                    d: 2,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  legacy_out_of_game_heartbeat_seconds: {
                    n: 2,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  heartbeat_seconds: {
                    n: 3,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  deprecated_public_ip: {
                    n: 4,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                  rtime32_server_time: {
                    n: 5,
                    br: b.d.readFixed32,
                    bw: b.h.writeFixed32,
                  },
                  account_flags: {
                    n: 6,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                  cell_id: { n: 7, br: b.d.readUint32, bw: b.h.writeUint32 },
                  email_domain: {
                    n: 8,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  steam2_ticket: {
                    n: 9,
                    br: b.d.readBytes,
                    bw: b.h.writeBytes,
                  },
                  eresult_extended: {
                    n: 10,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  webapi_authenticate_user_nonce: {
                    n: 11,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  cell_id_ping_threshold: {
                    n: 12,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                  deprecated_use_pics: {
                    n: 13,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                  vanity_url: {
                    n: 14,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  public_ip: { n: 15, c: g.d },
                  client_supplied_steamid: {
                    n: 20,
                    br: b.d.readFixed64String,
                    bw: b.h.writeFixed64String,
                  },
                  ip_country_code: {
                    n: 21,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  parental_settings: {
                    n: 22,
                    br: b.d.readBytes,
                    bw: b.h.writeBytes,
                  },
                  parental_setting_signature: {
                    n: 23,
                    br: b.d.readBytes,
                    bw: b.h.writeBytes,
                  },
                  count_loginfailures_to_migrate: {
                    n: 24,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  count_disconnects_to_migrate: {
                    n: 25,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  ogs_data_report_time_window: {
                    n: 26,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  client_instance_id: {
                    n: 27,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                  force_client_update_check: {
                    n: 28,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                  agreement_session_url: {
                    n: 29,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = b.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(f.M(), e, t);
        }
        static fromObject(e) {
          return b.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientLogonResponse";
        }
      }
      class M extends C {
        constructor(e = null) {
          super(),
            M.prototype.persona_name || b.a(M.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  persona_name: {
                    n: 1,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  ip_country: { n: 2, br: b.d.readString, bw: b.h.writeString },
                  count_authed_computers: {
                    n: 5,
                    br: b.d.readInt32,
                    bw: b.h.writeInt32,
                  },
                  account_flags: {
                    n: 7,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                  facebook_id: {
                    n: 8,
                    br: b.d.readUint64String,
                    bw: b.h.writeUint64String,
                  },
                  facebook_name: {
                    n: 9,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  steamguard_notify_newmachines: {
                    n: 14,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                  steamguard_machine_name_user_chosen: {
                    n: 15,
                    br: b.d.readString,
                    bw: b.h.writeString,
                  },
                  is_phone_verified: {
                    n: 16,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                  two_factor_state: {
                    n: 17,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                  is_phone_identifying: {
                    n: 18,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                  is_phone_needing_reverify: {
                    n: 19,
                    br: b.d.readBool,
                    bw: b.h.writeBool,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = b.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(M.M(), e, t);
        }
        static fromObject(e) {
          return b.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientAccountInfo";
        }
      }
      a.Message;
      const B = a.Message;
      class y extends B {
        constructor(e = null) {
          super(),
            y.prototype.server_types_available || b.a(y.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  server_types_available: { n: 1, c: v, r: !0, q: !0 },
                  server_type_for_auth_services: {
                    n: 2,
                    br: b.d.readUint32,
                    bw: b.h.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = b.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(y.M(), e, t);
        }
        static fromObject(e) {
          return b.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServersAvailable";
        }
      }
      class v extends B {
        constructor(e = null) {
          super(),
            v.prototype.server || b.a(v.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  server: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                  changed: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = b.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return b.g(v.M(), e, t);
        }
        static fromObject(e) {
          return b.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return b.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          b.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServersAvailable_Server_Types_Available";
        }
      }
      var O = r("qiKp"),
        R = r("r64O");
      r("E4Op");
      class L {
        constructor(e = !1) {
          (this.m_bRunOnce = !1),
            (this.m_ClientConnectionCallbacks = new O.a()),
            (this.m_mapServerTypeCallbacks = new Map()),
            (this.m_bRunOnce = e);
        }
        RunCallbacks(e, ...t) {
          void 0 === e
            ? (this.m_ClientConnectionCallbacks.Dispatch(...t),
              this.m_bRunOnce &&
                this.m_ClientConnectionCallbacks.ClearAllCallbacks())
            : this.m_mapServerTypeCallbacks.has(e) &&
              (this.m_mapServerTypeCallbacks.get(e).Dispatch(...t),
              this.m_bRunOnce && this.m_mapServerTypeCallbacks.delete(e));
        }
        RunAllCallbacks(e, ...t) {
          this.RunCallbacks(void 0, ...t),
            e.forEach((e) => this.RunCallbacks(e, ...t));
        }
        AddCallback(e, t) {
          let r = this.m_ClientConnectionCallbacks;
          return (
            void 0 !== t &&
              (this.m_mapServerTypeCallbacks.has(t) ||
                this.m_mapServerTypeCallbacks.set(t, new O.a()),
              (r = this.m_mapServerTypeCallbacks.get(t))),
            r.Register(e)
          );
        }
      }
      function k(e, t) {
        return () => {
          try {
            e();
          } catch (e) {
            console.error(`Error in ${t} callback:`, e);
          }
        };
      }
      class I {
        constructor() {
          (this.m_steamid = new l.a()),
            (this.m_bLoggedOn = !1),
            (this.m_bCompletedInitialConnect = !1),
            (this.m_unAccountFlags = 0),
            (this.m_strIPCountry = ""),
            (this.m_strPersonaName = ""),
            (this.m_bConnected = !1),
            (this.m_bConnectionFailed = !1),
            (this.m_setConnectedServers = new Set()),
            (this.m_callbacksOnConnectOneTime = new L(!0)),
            (this.m_callbacksOnConnect = new L()),
            (this.m_callbacksOnDisconnect = new L()),
            (this.m_bForceDisconnect = !1),
            (this.m_bPerformedInitialClockAdjustment = !1),
            (this.m_nWallClockDriftMS = 0),
            (this.m_nPerfClockServerMSOffset =
              new Date().getTime() - performance.now()),
            (this.ClientServersAvailableHandler = Object(i.a)(5501, y, (e) => {
              let t = new Set(this.m_setConnectedServers);
              for (let r of e.Body().server_types_available()) {
                let e = r.server();
                void 0 !== e &&
                  (this.m_bLoggedOn &&
                    ((this.m_setConnectedServers.has(e) && !r.changed()) ||
                      (r.changed() &&
                        this.m_setConnectedServers.has(e) &&
                        this.m_callbacksOnDisconnect.RunCallbacks(e, !1),
                      this.m_callbacksOnConnect.RunCallbacks(e),
                      this.m_callbacksOnConnectOneTime.RunCallbacks(e))),
                  this.m_setConnectedServers.add(e),
                  t.delete(e));
              }
              t.forEach((e) => {
                this.m_setConnectedServers.delete(e),
                  this.m_bLoggedOn &&
                    this.m_callbacksOnDisconnect.RunCallbacks(e, !1);
              });
            })),
            (this.m_ServiceTransport = {
              SendMsg: (e, t, r) => (
                t.SetEMsg(151),
                t.Hdr().set_target_job_name(e),
                this.SendMsgAndAwaitResponse(t, r)
              ),
              SendNotification: (e, t) => (
                t.SetEMsg(151), t.Hdr().set_target_job_name(e), this.Send(t)
              ),
            }),
            window &&
              window.addEventListener &&
              window.addEventListener("unload", (e) => {
                this.ForceDisconnect();
              });
        }
        get steamid() {
          return this.m_steamid;
        }
        get logged_on() {
          return this.m_bLoggedOn;
        }
        get persona_name() {
          return this.m_strPersonaName;
        }
        BDisconnected() {
          return !this.logged_on && this.m_steamid.BIsValid();
        }
        BConnectedToServer(e) {
          return void 0 === e
            ? this.m_bLoggedOn
            : this.m_setConnectedServers.has(e);
        }
        get has_completed_initial_connect() {
          return this.m_bCompletedInitialConnect;
        }
        get account_flags() {
          return this.m_unAccountFlags;
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetAnonymousServiceTransport() {
          return this.m_ServiceTransport;
        }
        RunWhenLoggedOn(e, t) {
          let r = k(e, "RunWhenLoggedOn");
          this.BConnectedToServer(t)
            ? r()
            : this.m_callbacksOnConnectOneTime.AddCallback(r, t);
        }
        WaitUntilLoggedOn() {
          return new Promise((e) => this.RunWhenLoggedOn(e));
        }
        AddOnLogonCallback(e, t) {
          let r = k(e, "AddOnLogonCallback");
          return (
            this.BConnectedToServer(t) && r(),
            this.m_callbacksOnConnect.AddCallback(r, t)
          );
        }
        AddOnDisconnectCallback(e, t) {
          let r = (function (e, t) {
            return (r) => {
              try {
                e(r);
              } catch (e) {
                console.error(`Error in ${t} callback:`, e);
              }
            };
          })(e, "AddOnDisconnectCallback");
          this.m_callbacksOnDisconnect.AddCallback(r, t);
        }
        ForceDisconnect() {
          (this.m_bForceDisconnect = !0), this.Disconnect();
        }
        Send(e) {
          return (
            !!this.BIsConnected() &&
            (this.DEBUG_LogCMInterfaceActivity(e, "send"), this.SendInternal(e))
          );
        }
        BInternalShouldDispatchMessage(e) {
          return !0;
        }
        ResolveAwaitWithTransportError(e, t, r, n) {
          let i = c.b.Init(t);
          i.Hdr().set_eresult(2),
            i.Hdr().set_transport_error(r),
            n && i.Hdr().set_error_message(n),
            e(i);
        }
        DispatchMessage(e) {
          try {
            if (!this.BInternalShouldDispatchMessage(e)) return;
            if (e.BIsValid()) {
              let t = (t) => {
                t.Hdr().set_jobid_target(e.Hdr().jobid_source()), this.Send(t);
              };
              i.b.DispatchMsgToHandlers(e, t) ||
                this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
            } else
              console.error(
                "CMInterface RECV could not parse message of type " +
                  Object(m.a)(e.GetEMsg()) +
                  " " +
                  e.GetEMsg()
              );
          } catch (t) {
            console.error(
              `CMInterface RECV exception thrown while processing message of type ${Object(
                m.a
              )(e.GetEMsg())}`,
              t
            ),
              e.DEBUG_LogToConsole();
          }
        }
        BIsConnected() {
          return this.m_bConnected;
        }
        OnConnect() {
          (this.m_bConnected = !0),
            (this.m_bConnectionFailed = !1),
            (this.m_bForceDisconnect = !1);
        }
        OnLoggedOn() {
          (this.m_bCompletedInitialConnect = !0),
            this.InternalAdjustClock(),
            this.m_callbacksOnConnect.RunAllCallbacks(
              this.m_setConnectedServers
            ),
            this.m_callbacksOnConnectOneTime.RunAllCallbacks(
              this.m_setConnectedServers
            );
        }
        OnDisconnect() {
          (this.m_bConnected = !1),
            (this.m_bConnectionFailed = !0),
            (this.m_onConnect = void 0),
            (this.m_bLoggedOn = !1),
            (this.m_unAccountFlags = 0),
            (this.m_strIPCountry = ""),
            this.m_callbacksOnDisconnect.RunAllCallbacks(
              this.m_setConnectedServers,
              this.m_bForceDisconnect
            ),
            this.m_setConnectedServers.clear();
        }
        DEBUG_LogCMInterfaceActivity(e, t, r = !0) {
          0;
        }
        DEBUG_LogMessage(e, ...t) {
          0;
        }
        InternalAdjustClock() {
          return Object(n.a)(this, void 0, void 0, function* () {
            let e = c.b.Init(S, 9802);
            return (
              e
                .Body()
                .set_client_request_timestamp(
                  Math.floor(performance.now()).toString()
                ),
              this.SendMsgAndAwaitResponse(e, w).then((e) => {
                let t = performance.now(),
                  r = new Date(),
                  n = parseInt(e.Body().client_request_timestamp()),
                  i = parseInt(e.Body().server_timestamp_ms()) - ((t - n) >> 1);
                return (
                  i && !isNaN(i) && t && !isNaN(t)
                    ? ((this.m_bPerformedInitialClockAdjustment = !0),
                      (this.m_nPerfClockServerMSOffset = i - t),
                      (this.m_nWallClockDriftMS = r.getTime() - i))
                    : Object(R.a)(
                        !1,
                        `Error computing server time, server echo: ${n} server time ${i}`
                      ),
                  !0
                );
              })
            );
          });
        }
        BPerformedInitialClockAdjustment() {
          return this.m_bPerformedInitialClockAdjustment;
        }
        GetServerTimeMS() {
          return performance.now() + this.m_nPerfClockServerMSOffset;
        }
        GetServerRTime32() {
          return Math.floor(
            (performance.now() + this.m_nPerfClockServerMSOffset) / 1e3
          );
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e + this.m_nWallClockDriftMS);
        }
      }
      Object(n.b)([u.C], I.prototype, "m_steamid", void 0),
        Object(n.b)([u.C], I.prototype, "m_bLoggedOn", void 0),
        Object(n.b)([u.C], I.prototype, "m_bCompletedInitialConnect", void 0),
        Object(n.b)([u.C], I.prototype, "m_unAccountFlags", void 0),
        Object(n.b)([u.C], I.prototype, "m_strIPCountry", void 0),
        Object(n.b)([u.C], I.prototype, "m_strPersonaName", void 0),
        Object(n.b)([u.C], I.prototype, "m_bConnected", void 0),
        Object(n.b)(
          [u.C],
          I.prototype,
          "m_bPerformedInitialClockAdjustment",
          void 0
        ),
        Object(n.b)([u.k], I.prototype, "DispatchMessage", null),
        Object(n.b)([u.k], I.prototype, "OnDisconnect", null);
      Object(n.b)(
        [u.k],
        class extends I {
          constructor() {
            super(...arguments),
              (this.m_setEMsgHandlers = new Set()),
              (this.m_setServiceMethodHandlers = new Set());
          }
          SendMsgAndAwaitResponse(e, t) {
            return new Promise((r, n) => {
              if (this.m_hSharedConnection) {
                this.DEBUG_LogCMInterfaceActivity(e, "send");
                let n = s.fromByteArray(e.Serialize());
                void 0 !==
                SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse
                  ? SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse(
                      this.m_hSharedConnection,
                      n
                    )
                      .then((e) => {
                        let n = new d.a(e),
                          i = c.b.InitFromPacket(t, n);
                        this.DEBUG_LogCMInterfaceActivity(i, "receive", !0),
                          i.BIsValid()
                            ? r(i)
                            : this.ResolveAwaitWithTransportError(
                                r,
                                t,
                                102,
                                "Failed to parse response from server"
                              );
                      })
                      .catch((e) => {
                        this.ResolveAwaitWithTransportError(r, t, 2, e);
                      })
                  : SteamClient.SharedConnection.SendMsgAndAwaitResponse(
                      this.m_hSharedConnection,
                      n
                    )
                      .then((e) => {
                        let n = new d.a(s.toByteArray(e)),
                          i = c.b.InitFromPacket(t, n);
                        this.DEBUG_LogCMInterfaceActivity(i, "receive", !0),
                          i.BIsValid()
                            ? r(i)
                            : this.ResolveAwaitWithTransportError(
                                r,
                                t,
                                102,
                                "Failed to parse response from server"
                              );
                      })
                      .catch((e) => {
                        this.ResolveAwaitWithTransportError(r, t, 2, e);
                      });
              }
            });
          }
          SendInternal(e) {
            let t = s.fromByteArray(e.Serialize());
            return (
              SteamClient.SharedConnection.SendMsg(this.m_hSharedConnection, t),
              !0
            );
          }
          OnMsgRecvd(e) {
            let t = new d.a(e),
              r = c.a.InitHeaderFromPacket(t);
            this.DispatchMessage(r);
          }
          OnLogonInfoChanged(e) {
            this.DEBUG_LogMessage("Login info from client: ", e),
              (this.m_bLoggedOn = e.bLoggedOn),
              (o.c.EUNIVERSE = e.eUniverse),
              (o.c.MEDIA_CDN_COMMUNITY_URL = e.strCommunityImagesURL),
              e.strSteamid
                ? ((this.m_steamid = new l.a(e.strSteamid)),
                  (this.m_strPersonaName = e.strPersonaName),
                  (o.h.logged_in = e.bLoggedOn),
                  (o.h.steamid = e.strSteamid),
                  (o.h.accountid = this.m_steamid.GetAccountID()),
                  (o.h.account_name = e.strAccountName))
                : 0 != this.m_steamid.GetAccountID() &&
                  (this.m_steamid = new l.a()),
              this.m_bLoggedOn
                ? (this.m_bConnected || this.OnConnect(), this.OnLoggedOn())
                : this.OnDisconnect();
          }
          Connect() {
            return this.m_hSharedConnection
              ? Promise.resolve()
              : (this.m_onConnect = new Promise((e, t) => {
                  SteamClient.SharedConnection.AllocateSharedConnection()
                    .then((r) => {
                      r
                        ? (this.OnSharedConnectionEstablished(r),
                          this.DEBUG_LogMessage(
                            "obtained handle ",
                            this.m_hSharedConnection
                          ),
                          this.OnConnect(),
                          e())
                        : t();
                    })
                    .catch(t);
                }));
          }
          OnSharedConnectionEstablished(e) {
            (this.m_hSharedConnection = e),
              this.m_setEMsgHandlers.clear(),
              this.m_setServiceMethodHandlers.clear(),
              this.m_hEMsgRegistrationObserver &&
                this.m_hEMsgRegistrationObserver(),
              (this.m_hEMsgRegistrationObserver = Object(u.l)(() => {
                if (this.m_hSharedConnection) {
                  for (let e of i.b.emsg_list)
                    this.m_setEMsgHandlers.has(e) ||
                      (this.m_setEMsgHandlers.add(e),
                      SteamClient.SharedConnection.SubscribeToEMsg(
                        this.m_hSharedConnection,
                        e
                      ));
                  for (let e of i.b.servicemethod_list)
                    this.m_setServiceMethodHandlers.has(e) ||
                      (this.m_setServiceMethodHandlers.add(e),
                      SteamClient.SharedConnection.SubscribeToClientServiceMethod(
                        this.m_hSharedConnection,
                        e
                      ));
                }
              }));
            let t = !1;
            SteamClient.SharedConnection.RegisterOnLogonInfoChanged(
              this.m_hSharedConnection,
              (e) => {
                this.OnLogonInfoChanged(e),
                  t ||
                    ((t = !0),
                    void 0 !==
                    SteamClient.SharedConnection.RegisterOnBinaryMessageReceived
                      ? SteamClient.SharedConnection.RegisterOnBinaryMessageReceived(
                          this.m_hSharedConnection,
                          this.OnMsgRecvd.bind(this)
                        )
                      : SteamClient.SharedConnection.RegisterOnMessageReceived(
                          this.m_hSharedConnection,
                          (e) => this.OnMsgRecvd(s.toByteArray(e))
                        ));
              }
            );
          }
          OnConnect() {
            super.OnConnect();
          }
          Disconnect() {
            if (this.m_hSharedConnection) {
              let e = c.b.Init(h.a, 716);
              e.Body().set_persona_state(0),
                e.Body().set_persona_set_by_user(!1),
                this.Send(e),
                SteamClient.SharedConnection.Close(this.m_hSharedConnection),
                this.OnSharedConnectionClosed();
            }
          }
          OnSharedConnectionClosed() {
            super.OnDisconnect(),
              (this.m_hSharedConnection = void 0),
              this.m_setEMsgHandlers.clear(),
              this.m_hEMsgRegistrationObserver &&
                (this.m_hEMsgRegistrationObserver(),
                (this.m_hEMsgRegistrationObserver = void 0));
          }
          SendHeartbeat() {}
          ClearHeartbeatInterval() {}
          ResetHeartbeatInterval() {}
        }.prototype,
        "OnLogonInfoChanged",
        null
      );
      var T = r("16wW"),
        j = r("vDqi"),
        D = r.n(j);
      r("75qM");
      class E {
        constructor() {
          this.m_CMList = { rgCMList: [], rtLastLoaded: 0 };
        }
        Init(e) {
          (this.m_Storage = e), (this.m_InitPromise = this.LoadFromCache());
        }
        LoadFromCache() {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (this.m_InitPromise) return this.m_InitPromise;
            const e = yield this.m_Storage.GetObject(this.GetLocalStorageKey());
            return (t = e) &&
              "object" == typeof t &&
              Array.isArray(t.rgCMList) &&
              "number" == typeof t.rtLastLoaded
              ? ((this.m_CMList = e), this.m_CMList)
              : ((this.m_CMList = { rgCMList: [], rtLastLoaded: 0 }),
                this.WriteCMListToLocalStorage(),
                this.m_CMList);
            var t;
          });
        }
        GetBestCMsToConnectTo() {
          return Object(n.a)(this, void 0, void 0, function* () {
            try {
              let e = yield this.LoadFromCache();
              (!e.rgCMList.length ||
                Date.now() / 1e3 - e.rtLastLoaded > 604800) &&
                ((this.m_CMList = yield this.GetCMListFromWebAPI()),
                this.WriteCMListToLocalStorage());
            } catch (e) {
              console.error(
                `There was a problem loading CM list. Attempting to use stale data. ${e}`
              );
            }
            return this.PingCMs();
          });
        }
        RecordCMDisconnected(e) {
          (e.nConnectFailures = (e.nConnectFailures || 0) + 1),
            (e.msPing = Number.MAX_SAFE_INTEGER),
            (e.nCMLoad = Number.MAX_SAFE_INTEGER),
            this.WriteCMListToLocalStorage();
        }
        BuildCMWebSocketURL(e) {
          return "wss://" + this.FixDevHost(e) + "/cmsocket/";
        }
        FixDevHost(e) {
          if (
            4 == o.c.EUNIVERSE &&
            "dev" == o.c.WEB_UNIVERSE &&
            e.match(/^127\.0\.0\.1/)
          ) {
            let t = o.c.WEBAPI_BASE_URL.match(/https?:\/\/([^\/:]*)/);
            if (t && t[1]) return e.replace(/^127\.0\.0\.1/, t[1]);
          }
          return e;
        }
        GetLocalStorageKey() {
          return "CCMList_" + o.c.EUNIVERSE;
        }
        WriteCMListToLocalStorage() {
          this.m_Storage.StoreObject(this.GetLocalStorageKey(), this.m_CMList);
        }
        GetCMListFromWebAPI() {
          return Object(n.a)(this, void 0, void 0, function* () {
            try {
              const r = yield ((e = z),
                (t = 1e4),
                () =>
                  new Promise((r, n) => {
                    let i = !1;
                    const s = window.setTimeout(() => {
                      (i = !0), n(new Error("Timed out"));
                    }, t);
                    e().then(
                      (e) => {
                        i || (clearTimeout(s), r(e));
                      },
                      (e) => {
                        i || (clearTimeout(s), n(e));
                      }
                    );
                  }))(),
                n = this.m_CMList.rgCMList.reduce(
                  (e, t) =>
                    Object.assign(Object.assign({}, e), { [t.strHost]: t }),
                  {}
                );
              return {
                rgCMList: r.map((e) =>
                  Object.assign(Object.assign({}, n[e.strHost] || {}), e)
                ),
                rtLastLoaded: new Date().getTime() / 1e3,
              };
            } catch (e) {
              throw new Error("Failed to load CM List from webapi");
            }
            var e, t;
          });
        }
        PingCMs() {
          let e = new Date().getTime() / 1e3 - 18e3,
            t = [];
          const r = {};
          for (const n of this.m_CMList.rgCMList) {
            const i = F(n),
              s = !i || n.rtLastCheck < e;
            s && t.length < 20 && t.push(n),
              (s && !o.c.IN_MOBILE) || (i && i < 1e4 && (r[n.strHost] = n));
          }
          t.length;
          let n = !1;
          return new Promise((e, i) => {
            let s,
              a,
              c = "immediate",
              l = (t) => {
                if (
                  (Object(R.a)(!n, "fnPingingComplete called a second time"),
                  !n)
                ) {
                  const r = Object.keys(t)
                    .map((e) => t[e])
                    .sort((e, t) => F(e) - F(t));
                  if (
                    (r.length,
                    r.length && r[0].strHost,
                    (n = !0),
                    this.WriteCMListToLocalStorage(),
                    s && window.clearTimeout(s),
                    a && window.clearTimeout(a),
                    r.length)
                  )
                    return e(r);
                  const o = this.GetCMWithFewestDisconnects();
                  if (o) return e([o]);
                  i("No CMs available");
                }
              };
            (0 === t.length ||
              Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) ||
              (o.c.IN_MOBILE && Object.keys(r).length)) &&
              (Object.keys(r).length && o.c.IN_MOBILE, l(r)),
              n ||
                ((s = window.setTimeout(() => {
                  (c = "timeout"),
                    !n &&
                      Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) &&
                      l(r);
                }, 400)),
                (a = window.setTimeout(() => {
                  (c = "seriouslytimeout"), l(r);
                }, 12e3)));
            let d,
              m = 0,
              h = 0,
              u = (e) => {
                !n && this.BCMOkToUse(e, c)
                  ? l({ [e.strHost]: e })
                  : (r[e.strHost] = e),
                  (!n && d()) ||
                    (0 == --h &&
                      (n
                        ? this.WriteCMListToLocalStorage()
                        : this.BCMOkToUse(e, "seriouslytimeout")
                        ? l({ [e.strHost]: e })
                        : ((r[e.strHost] = e), l(r))));
              };
            d = () => {
              if (m < t.length) {
                let e = t[m++];
                return (
                  this.PingCM(e).then(() => {
                    u(e);
                  }),
                  !0
                );
              }
              return !1;
            };
            for (let e = 0; e < 4; e++) d() && h++;
          });
        }
        GetCMWithFewestDisconnects() {
          if (!this.m_CMList.rgCMList.length) return;
          let e = this.m_CMList.rgCMList[0],
            t = 1;
          for (
            ;
            e.nConnectFailures > 0 && t < this.m_CMList.rgCMList.length;

          ) {
            let r = this.m_CMList.rgCMList[t++];
            (!r.nConnectFailures || r.nConnectFailures < e.nConnectFailures) &&
              (e = r);
          }
          return e && this.FixDevHost(e.strHost), e;
        }
        BCMOkToUse(e, t) {
          if (!e) return !1;
          let r = e.msPing + e.nCMLoad;
          return (
            (r < 80 && e.msPing < 60) ||
            ("immediate" !== t &&
              ((r < 140 && e.msPing < 100) ||
                ("timeout" !== t && r < 350 && e.msPing < 275)))
          );
        }
        PingCM(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            let t = "https://" + this.FixDevHost(e.strHost) + "/cmping/",
              r = performance.now();
            const n = D.a.CancelToken.source();
            let i = window.setTimeout(() => {
              e.strHost, n.cancel();
            }, 1e3);
            try {
              let s = yield D.a.head(t, { cancelToken: n.token });
              e.strHost, window.clearTimeout(i);
              let a = performance.now() - r,
                o = s.headers["x-steam-cmload"]
                  ? parseInt(s.headers["x-steam-cmload"])
                  : void 0;
              e.strHost, (e.msPing = a), (e.nCMLoad = o);
            } catch (t) {
              D.a.isCancel(t) ? e.strHost : window.clearTimeout(i),
                (e.msPing = 1e4),
                (e.nCMLoad = 0);
            }
            return (e.rtLastCheck = new Date().getTime() / 1e3), e.msPing;
          });
        }
      }
      function z() {
        return Object(n.a)(this, void 0, void 0, function* () {
          const e =
              o.c.WEBAPI_BASE_URL + "ISteamDirectory/GetCMList/v1/?cellid=0",
            t = (yield D.a.get(e)).data,
            r = (t && t.response && t.response.serverlist_websockets) || [];
          return r.length, r.map((e, t) => ({ strHost: e, nPriority: t }));
        });
      }
      function F(e) {
        return (e.msPing || 0) + (e.nCMLoad || 0);
      }
      Object(n.b)(
        [u.k],
        class extends I {
          constructor(e) {
            super(),
              (this.m_Session = {
                m_bWaitingForLogonResponse: !1,
                m_nSessionID: 0,
                m_eResultLogonSuccess: 2,
                m_nSessionIDLast: 0,
                m_nClientInstanceID: "0",
              }),
              (this.m_bLoadingCMList = !1),
              (this.m_iCallSeq = 1),
              (this.m_mapWaitingCallbacks = new Map()),
              (this.m_CMList = new E()),
              (this.LogOnResponseHandler = Object(i.a)(751, f, (e) => {
                let t = e.Body().eresult();
                (this.m_Session.m_bWaitingForLogonResponse = !1),
                  (this.m_Session.m_eResultLogonSuccess = t),
                  1 == t
                    ? ((this.m_steamid = new l.a(
                        e.Body().client_supplied_steamid()
                      )),
                      (this.m_bLoggedOn = !0),
                      (this.m_Session.m_nSessionID = e
                        .Hdr()
                        .client_sessionid()),
                      (this.m_Session.m_nSessionIDLast = this.m_Session.m_nSessionID),
                      (this.m_Session.m_nClientInstanceID = e
                        .Body()
                        .client_instance_id()),
                      this.OnLoggedOn())
                    : (console.warn(
                        "Received error code from LogOnResponse, disconnecting. EResult=",
                        e.Body().eresult()
                      ),
                      48 == t &&
                        this.m_CMList.RecordCMDisconnected(this.m_SocketCMHost),
                      this.Disconnect());
              })),
              (this.ClientAccountInfoHandler = Object(i.a)(768, M, (e) => {
                (this.m_unAccountFlags = e.Body().account_flags() || 0),
                  (this.m_strIPCountry = e.Body().ip_country() || ""),
                  (this.m_strPersonaName = e.Body().persona_name() || "");
              })),
              this.m_CMList.Init(e);
          }
          BIsConnected() {
            return this.m_Socket && this.m_Socket.readyState == WebSocket.OPEN;
          }
          Connect() {
            return (
              this.m_onConnect ||
                (console.log("Loading CM List"),
                (this.m_bConnected = !1),
                (this.m_bLoggedOn = !1),
                (this.m_bForceDisconnect = !1),
                (this.m_Session.m_bWaitingForLogonResponse = !0),
                (this.m_bLoadingCMList = !0),
                (this.m_onConnect = this.m_CMList
                  .GetBestCMsToConnectTo()
                  .then(
                    (e) => (
                      (this.m_bLoadingCMList = !1),
                      new Promise((t, r) => {
                        let n = 0,
                          i = !1;
                        e.slice(0, 3).forEach((e, s, a) =>
                          this.AttemptHostConnect(e).then(
                            (r) => {
                              i
                                ? r.close(4e3)
                                : ((i = !0),
                                  (this.m_Socket = r),
                                  (this.m_SocketCMHost = e),
                                  (this.m_bConnected = !0),
                                  this.OnConnect(),
                                  t());
                            },
                            () => {
                              console.log(
                                `Failed to connect to CM ${s + 1} of ${
                                  a.length
                                }: ${e.strHost}`
                              ),
                                n++,
                                n === a.length &&
                                  (console.log(
                                    `Failed to connect to all ${a.length} best CMs`
                                  ),
                                  r());
                            }
                          )
                        );
                      })
                    )
                  )
                  .catch((e) => {
                    throw (
                      ((this.m_bLoadingCMList = !1), this.OnDisconnect(), e)
                    );
                  }))),
              this.m_onConnect
            );
          }
          AttemptHostConnect(e) {
            console.log(`Attempting to connect to host ${e.strHost}`);
            let t = new WebSocket(this.m_CMList.BuildCMWebSocketURL(e.strHost));
            return (
              (t.binaryType = "arraybuffer"),
              (t.onmessage = (e) => {
                let t = new d.a(e.data),
                  r = c.a.InitHeaderFromPacket(t);
                1 == r.GetEMsg()
                  ? this.DecodeAndDispatchMultiMsg(c.b.InitFromMsg(g.e, r))
                  : this.DispatchMessage(r);
              }),
              new Promise((r, n) => {
                let i = !1;
                const s = window.setTimeout(() => {
                  console.warn(
                    `Socket connection timed out after 3000ms: ${e.strHost}`
                  ),
                    (i = !0),
                    t.close(4e3),
                    this.m_CMList.RecordCMDisconnected(e),
                    n();
                }, 3e3);
                (t.onopen = () => {
                  console.log(`Connected socket to host ${e.strHost}`),
                    Object(R.a)(
                      !i,
                      "Socket connection was opened after timing out."
                    ),
                    i || window.clearTimeout(s),
                    r(t);
                }),
                  (t.onerror = (t) => {
                    i ||
                      (window.clearTimeout(s),
                      Object(R.a)(!1, "Socket connect failed", t),
                      this.m_CMList.RecordCMDisconnected(e),
                      n());
                  });
              })
            );
          }
          get session() {
            return this.m_Session;
          }
          ClearHeartbeatInterval() {
            this.m_iIntervalHeartbeat &&
              (window.clearInterval(this.m_iIntervalHeartbeat),
              (this.m_iIntervalHeartbeat = void 0));
          }
          ResetHeartbeatInterval() {
            this.ClearHeartbeatInterval(),
              (this.m_iIntervalHeartbeat = window.setInterval(
                () => this.SendHeartbeat(),
                27e3
              ));
          }
          SendHeartbeat() {
            let e = c.b.Init(p, 703);
            this.Send(e);
          }
          OnConnect() {
            super.OnConnect(),
              this.m_Socket &&
                ((this.m_Socket.onerror = (e) => {}),
                this.ResetHeartbeatInterval(),
                (this.m_Socket.onclose = (e) => {
                  this.OnDisconnect();
                }));
          }
          Disconnect() {
            this.m_Socket && this.m_Socket.close();
          }
          OnDisconnect() {
            (this.m_Socket = void 0),
              (this.m_SocketCMHost = void 0),
              (this.m_onConnect = void 0),
              this.ClearHeartbeatInterval(),
              super.OnDisconnect();
          }
          SendMsgAndAwaitResponse(e, t) {
            return new Promise((r, n) => {
              let i = this.m_iCallSeq++;
              e.Hdr().set_jobid_source("" + i),
                this.Send(e)
                  ? this.m_mapWaitingCallbacks.set(i, {
                      iSeq: i,
                      msgClass: t,
                      fnCallback: r,
                    })
                  : this.ResolveAwaitWithTransportError(
                      r,
                      t,
                      2,
                      "Web socket not connected"
                    );
            });
          }
          SendInternal(e) {
            return (
              !!this.m_Socket &&
              (this.m_steamid.BIsValid() &&
                e.Hdr().set_steamid(this.m_steamid.ConvertTo64BitString()),
              this.m_Session.m_nSessionID &&
                e.Hdr().set_client_sessionid(this.m_Session.m_nSessionID),
              this.m_Socket.send(e.Serialize()),
              703 != e.GetEMsg() && this.ResetHeartbeatInterval(),
              !0)
            );
          }
          BInternalShouldDispatchMessage(e) {
            if (
              e.BIsValid() &&
              e.Hdr().jobid_target() &&
              e.Hdr().jobid_target() !== _.e
            ) {
              let t = parseInt(e.Hdr().jobid_target());
              if (this.m_mapWaitingCallbacks.has(t)) {
                let r = this.m_mapWaitingCallbacks.get(t);
                if (r) {
                  let n = c.b.InitFromMsg(r.msgClass, e);
                  this.DEBUG_LogCMInterfaceActivity(n, "receive", !0),
                    n.BIsValid()
                      ? r.fnCallback(n)
                      : this.ResolveAwaitWithTransportError(
                          r.fnCallback,
                          r.msgClass,
                          102,
                          "Failed to parse response from server"
                        ),
                    this.m_mapWaitingCallbacks.delete(t);
                }
                return !1;
              }
              this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
            }
            return !0;
          }
          DecodeAndDispatchMultiMsg(e) {
            let t = e.Body().message_body();
            if (!t) return;
            e.Body().size_unzipped() && (t = T.inflate(t));
            let r = new d.a(t);
            for (; r.GetCountBytesRemaining() > 0; ) {
              let e = r.GetUint32(),
                t = c.a.InitHeaderFromPacket(
                  new d.a(r.GetPacket(), r.TellGet(), e)
                );
              this.DispatchMessage(t), r.SeekGetCurrent(e);
            }
          }
        }.prototype,
        "DecodeAndDispatchMultiMsg",
        null
      );
    },
    ZAxP: function (e, t, r) {
      e.exports = {
        ScrollPanel: "scrollpanel_ScrollPanel_1Ecbh",
        ScrollY: "scrollpanel_ScrollY_3yFwd",
        ScrollBoth: "scrollpanel_ScrollBoth_7h7DE",
        ScrollX: "scrollpanel_ScrollX_3TJWg",
      };
    },
  },
]);
