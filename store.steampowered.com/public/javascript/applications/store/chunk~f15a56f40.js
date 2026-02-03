/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6014],
  {
    23338: (e, a, r) => {
      r.d(a, { Y: () => s, j: () => o });
      var t = r(90626),
        i = r(40236),
        n = r(8871);
      function s(e) {
        const a = (0, i.OO)(e, e.options);
        return t.createElement("span", { ref: a, style: { fontSize: 0 } });
      }
      const o = t.forwardRef(function (e, a) {
        const { onLeave: r, onEnter: s, options: o, ...l } = e,
          c = (0, i.OO)(e, e.options),
          u = (0, n.Ue)(c, a);
        return t.createElement("div", { ref: u, ...l });
      });
    },
    61949: (e, a, r) => {
      r.d(a, { Ey: () => w, Rp: () => P });
      var t,
        i = r(80613),
        n = r.n(i),
        s = r(89068),
        o = r(56545);
      class l extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.version || s.Sg(l.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  version: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  preference_state: {
                    n: 2,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  content_customization: { n: 3, c },
                  valve_analytics: { n: 4, c: u },
                  third_party_analytics: { n: 5, c: d },
                  third_party_content: { n: 6, c: m },
                  utm_enabled: {
                    n: 7,
                    d: !0,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(l.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(l.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(l.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class c extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.recentapps || s.Sg(c.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  recentapps: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(c.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(c.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(c.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class u extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.product_impressions_tracking || s.Sg(u.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  product_impressions_tracking: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(u.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(u.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(u.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class d extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.google_analytics || s.Sg(d.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  google_analytics: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(d.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(d.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(d.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class m extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.youtube || s.Sg(m.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  youtube: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  vimeo: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  sketchfab: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  twitter: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(m.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(m.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(m.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class y extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, a) {
          return e ? { $jspbMessageInstance: a } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Request";
        }
      }
      class p extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.preferences || s.Sg(p.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = { proto: p, fields: { preferences: { n: 1, c: l } } }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, a) {
          return s.BT(p.M(), e, a);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let a = new (n().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, a);
        }
        static deserializeBinaryFromReader(e, a) {
          return s.zj(p.MBF(), e, a);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, a) {
          s.i0(p.M(), e, a);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      !(function (e) {
        e.GetCookiePreferences = function (e, a) {
          return e.SendMsg(
            "AccountPrivacy.GetCookiePreferences#1",
            (0, o.I8)(y, a),
            p,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        };
      })(t || (t = {}));
      var h = r(2160),
        B = r(8527),
        M = r(38861);
      const g = JSON.parse(
        '{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d\'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}',
      ).h;
      var f = r(91933);
      async function b(e) {
        if ((0, h.nA)(B.TS.EREALM)) return { version: 1, preference_state: 0 };
        if (B.iA.logged_in) {
          const a = (await t.GetCookiePreferences(e, {}))
            .Body()
            .toObject().preferences;
          if (a && void 0 !== a.version && 0 != a.version) return a;
        }
        try {
          const e = (0, f.j_)(M.J_);
          if (e) {
            const a = JSON.parse(e);
            if (a && void 0 !== a.version && 0 != a.version) return a;
          }
        } catch (e) {}
        const a = B.TS.COUNTRY;
        return a in g.eucountries || a in g.eeacountries || "CH" === a
          ? { version: 1, preference_state: 4 }
          : { version: 1, preference_state: 0 };
      }
      var S = r(20194),
        C = r(23809);
      function _() {
        const e = (0, C.KV)();
        return (0, S.I)(
          (function (e) {
            return { queryKey: ["CookiePreferences"], queryFn: () => b(e) };
          })(e),
        );
      }
      function P(e) {
        const { data: a } = _();
        return a
          ? (function (e, a) {
              switch (e.preference_state) {
                case 0:
                case 1:
                  return !0;
                case 2:
                  return !1;
                default:
                  switch (a) {
                    case "youtube":
                      return e.third_party_content?.youtube;
                    case "vimeo":
                      return e.third_party_content?.vimeo;
                    case "sketchfab":
                      return e.third_party_content?.sketchfab;
                    case "generic":
                      return !1;
                  }
              }
            })(a, e)
          : void 0;
      }
      function w() {
        const { data: e } = _();
        return e
          ? !(function (e) {
              switch (e.preference_state) {
                case 0:
                case 1:
                  return !1;
                default:
                  return !0;
              }
            })(e)
          : void 0;
      }
    },
    48211: (e, a, r) => {
      r.d(a, { N1: () => g, VC: () => B, gZ: () => f });
      var t,
        i = r(34629),
        n = r(90626),
        s = r(62490),
        o = r(84933),
        l = r(52038),
        c = r(22797),
        u = r(61949),
        d = r(61859),
        m = r(23338);
      !(function (e) {
        (e[(e.NotLoaded = 0)] = "NotLoaded"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded");
      })(t || (t = {}));
      let y = t.NotLoaded,
        p = [];
      function h(e) {
        if (y != t.Loaded) {
          if (y == t.NotLoaded) {
            let e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            let a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a),
              (window.onYouTubeIframeAPIReady = M);
          }
          e && (p.includes(e) || p.push(e));
        } else e && e();
      }
      function B(e = !0) {
        const a = (0, u.Rp)("youtube");
        (0, n.useEffect)(() => {
          a && e && h();
        }, [a, e]);
      }
      function M() {
        y = t.Loaded;
        for (let e of p) e();
        p = [];
      }
      class g extends n.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(e) {
          super(e),
            (this.m_strPlayerID = "YoutubePlayer_" + g.s_nPlayerIndex++),
            (this.state = { bYoutubeLoaded: !1 });
        }
        componentWillUnmount() {
          var e;
          this.DestroyPlayer(), (e = this.OnYoutubeScriptsReady), s.x9(p, e);
        }
        shouldComponentUpdate(e, a) {
          if (!this.m_player) return !1;
          const r = this.props;
          return r.autoplay != e.autoplay ||
            r.controls != e.controls ||
            r.showInfo != e.showInfo ||
            r.video != e.video
            ? (this.CreatePlayer(e), !1)
            : ((r.width == e.width && r.height == e.height) ||
                (this.m_bPlayerReady &&
                  e.width &&
                  e.height &&
                  this.m_player.setSize(e.width, e.height)),
              r.forcePause != e.forcePause);
        }
        componentDidUpdate(e) {
          e.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (e) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(e) {
          this.m_playerContainer != e &&
            ((this.m_playerContainer = e),
            this.DestroyPlayer(),
            this.m_playerContainer && h(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(e) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const a = !1 === e.autoplay ? 0 : 1,
            r = !0 === e.showInfo ? 1 : 0,
            t = !0 === e.controls ? 1 : 0,
            i = !0 === e.showFullscreenBtn ? 1 : 0,
            n = !0 === e.playsInline ? 1 : 0;
          let s = {
              width: void 0 !== e.width ? String(e.width) : void 0,
              height: void 0 !== e.height ? String(e.height) : void 0,
              videoId: e.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: a,
                showinfo: r,
                autohide: 1,
                fs: i,
                modestbranding: 1,
                rel: 0,
                playsinline: n,
                iv_load_policy: 3,
                controls: t,
                start: e.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            o = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(o, s));
        }
        OnPlayerReady(e) {
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let e = this.m_player.getVideoData(),
              a = { strAuthor: "", strTitle: "", strVideoID: "" };
            e.author && (a.strAuthor = e.author),
              e.title && (a.strTitle = e.title),
              e.video_id && (a.strVideoID = e.video_id),
              this.props.onVideoInfoChanged(a);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(e) {
          switch (e.data) {
            case YT.PlayerState.UNSTARTED:
              break;
            case YT.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case YT.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case YT.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case YT.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(e) {
          console.log("Youtube: Playback failed", e),
            this.props.onError && this.props.onError(e);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(e) {
          this.m_player &&
            this.m_bPlayerReady &&
            (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          return n.createElement(
            f,
            { video: this.props.video },
            n.createElement(
              m.j,
              {
                key: this.m_strPlayerID,
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, l.A)("YoutubePlayer", this.props.classnames),
              },
              n.createElement(c.t, { className: "YoutubePlayerThrobber" }),
            ),
          );
        }
      }
      function f(e) {
        const { video: a, children: r } = e;
        return (0, u.Rp)("youtube")
          ? r
          : n.createElement(
              "a",
              { href: `https://www.youtube.com/watch?v=${a}` },
              (0, d.we)("#EventCalendar_WatchYouTubeVideo"),
            );
      }
      (0, i.Cg)([o.oI], g.prototype, "BindPlayerContainer", null),
        (0, i.Cg)([o.oI], g.prototype, "OnYoutubeScriptsReady", null),
        (0, i.Cg)([o.oI], g.prototype, "CreatePlayer", null),
        (0, i.Cg)([o.oI], g.prototype, "OnPlayerReady", null),
        (0, i.Cg)([o.oI], g.prototype, "OnPlayerStateChange", null),
        (0, i.Cg)([o.oI], g.prototype, "OnError", null),
        (0, i.Cg)([o.oI], g.prototype, "OnPlayerLeftView", null),
        (0, i.Cg)([o.oI], g.prototype, "PlayVideo", null);
    },
  },
]);
