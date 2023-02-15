/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2805],
  {
    26189: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "awardmodal_GrantAwardModal_2vlF5",
        Header: "awardmodal_Header_2p7RU",
        Title: "awardmodal_Title_2Rty4",
        Description: "awardmodal_Description_j46gb",
        ButtonContainer: "awardmodal_ButtonContainer_1SCKZ",
        Button: "awardmodal_Button_zGUr9",
        Selected: "awardmodal_Selected_29Zn-",
        Disabled: "awardmodal_Disabled_18eTZ",
        LabelCtn: "awardmodal_LabelCtn_in9vJ",
        IconCtn: "awardmodal_IconCtn_3N4SI",
        Label: "awardmodal_Label_V7W5c",
        Points: "awardmodal_Points_Mh1VB",
        IconCheckMark: "awardmodal_IconCheckMark_2cjo-",
        Footer: "awardmodal_Footer_3uhvi",
        Left: "awardmodal_Left_po3ze",
        BalanceIcon: "awardmodal_BalanceIcon_R3Rrv",
        BalanceDetails: "awardmodal_BalanceDetails_2R8Ec",
        BalanceLabel: "awardmodal_BalanceLabel_26lUC",
        BalanceAmount: "awardmodal_BalanceAmount_1A7rm",
        Right: "awardmodal_Right_9EVpk",
        Actions: "awardmodal_Actions_3grEe",
        Action: "awardmodal_Action_m5O_I",
        FooterLink: "awardmodal_FooterLink_LnM57",
        Divider: "awardmodal_Divider_3-_vd",
        ConfirmContainer: "awardmodal_ConfirmContainer_2SlCz",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1jCgm",
        ConfirmTextCtn: "awardmodal_ConfirmTextCtn_2vpMp",
        ConfirmText: "awardmodal_ConfirmText_1VsBl",
        AwardName: "awardmodal_AwardName_18XKP",
        TimePeriod: "awardmodal_TimePeriod_2dsFe",
        Visible: "awardmodal_Visible_99awB",
        LoadingContainer: "awardmodal_LoadingContainer_1Ojo0",
        SuccessContainer: "awardmodal_SuccessContainer_mT3Zs",
        SuccessText: "awardmodal_SuccessText_1cegP",
        InitialLoading: "awardmodal_InitialLoading_2tQ62",
        ErrorContainer: "awardmodal_ErrorContainer_3mAxw",
        ErrorText: "awardmodal_ErrorText_2tq6F",
        PointsAmount: "awardmodal_PointsAmount_-p4kk",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_18Asb",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_140Wj",
      };
    },
    31496: (e) => {
      e.exports = { UnstyledButton: "unstyledbutton_UnstyledButton_1cWox" };
    },
    77817: (e, t, a) => {
      "use strict";
      a.d(t, { ZP: () => J });
      var n = a(70655),
        r = (a(46321), a(9669)),
        o = a.n(r),
        l = a(29323),
        s = a(67294),
        i = (a(26149), a(58114)),
        c = a(7707),
        d = a(35921),
        m = a(88272),
        u = a(73812),
        h = a(14974),
        g = a(43720),
        w = a.n(g),
        C = a(22188),
        p = a(90666);
      a(76796);
      class E {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return p.L7.logged_in;
        }
        SetTarget(e, t) {
          (this.m_targetID = e),
            (this.m_eTargetType = t),
            this.LoadExistingReactions();
        }
        AddReaction(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = i.gA.Init(h.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield h.pQ.AddReaction(this.m_transport, t);
            return (
              1 != a.GetEResult()
                ? console.error(
                    `Error when calling LoyaltyRewardsService.AddReaction: EResult=${a.GetEResult()}`
                  )
                : (this.m_bPointsBalanceLoadedOrInFlight = !1),
              { eResult: a.GetEResult(), strMessage: "" }
            );
          });
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        LoadUserPointBalance() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = i.gA.Init(h.aO);
            e.SetBodyFields({ steamid: p.L7.steamid });
            let t = yield h.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = w().fromString(
                  t.Body().summary().points()
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`
                );
          });
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        LoadAwardsConfiguration() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = i.gA.Init(h.f_);
            let t = yield h.pQ.GetReactionConfig(this.m_transport, e);
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject().reactions;
              for (const t of e)
                this.m_mapReactionConfiguration.set(t.reactionid, t);
            } else console.error(`Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`);
          });
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        LoadExistingReactions() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_mapExistingReactions.clear();
            const e = i.gA.Init(h.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield h.pQ.GetReactions(this.m_transport, e);
            1 == t.GetEResult()
              ? t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetReactions: EResult=${t.GetEResult()}`
                );
          });
        }
      }
      (0, n.gn)([C.LO.ref], E.prototype, "m_lPointsAvailable", void 0),
        (0, n.gn)(
          [C.LO.deep],
          E.prototype,
          "m_mapReactionConfiguration",
          void 0
        ),
        (0, n.gn)([C.LO.deep], E.prototype, "m_mapExistingReactions", void 0);
      var _ = a(48341),
        f = a(37699),
        y = a(95598),
        v = a(13596),
        L = a(7573),
        b = a(41311),
        A = a(64839),
        R = a(48088),
        M = a(48899);
      const x = 200;
      var S;
      function N(e) {
        switch (e) {
          case S.Gold:
          case S.LNY2020:
            return `hsl(${51 + -16 * Math.random()}, 93%, 54%)`;
          default:
            return `hsl(${360 * Math.random()}, 100%, 40%)`;
        }
      }
      function G(e) {
        return e == S.LNY2020
          ? `hue-rotate(${360 + (0, M.LO)(-30, 10)}deg)`
          : "";
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Gold = 1)] = "Gold"),
          (e[(e.LNY2020 = 2)] = "LNY2020");
      })(S || (S = {}));
      const T = (e, t) => {
          const { anim: a } = (0, R.q_)({
              anim: 1,
              from: { anim: 0 },
              config: { duration: 8e3 },
            }),
            n = (0, s.useMemo)(() => {
              let n = (function (e, t) {
                  const a = [];
                  if (!e) return a;
                  const { width: n, height: r } = e;
                  for (let e = 0; e < x; e++) {
                    const e = Math.random(),
                      o = Math.random() * e,
                      l = Math.random() * o,
                      s = 4 * (Math.random() - 0.5) * Math.PI * 20,
                      i = Math.random() + 0.5,
                      c = [
                        Math.random() * r - r - 20,
                        r + 20 + Math.random() * r * i,
                      ],
                      d = i * (n <= 1e3 ? 1 : n / 1e3) * (t == S.Gold ? 2 : 1),
                      m = (Math.random() - 0.5) * n,
                      u = (Math.random() - 0.5) * n,
                      h = [u, m + u],
                      g = N(t),
                      w = G(t);
                    a.push({
                      rotationCoefficient: s,
                      rotationRatioY: o,
                      rotationRatioX: e,
                      rotationRatioZ: l,
                      yRange: c,
                      xRange: h,
                      scale: d,
                      colorHue: g,
                      filter: w,
                    });
                  }
                  return a;
                })(e, t),
                r = n.map((e) =>
                  (function (e, t, a) {
                    S.Default;
                    const {
                      rotationCoefficient: n,
                      rotationRatioY: r,
                      rotationRatioX: o,
                      rotationRatioZ: l,
                      yRange: s,
                      xRange: i,
                      scale: c,
                      colorHue: d,
                      filter: m,
                    } = e;
                    return {
                      backgroundColor: d,
                      fill: d,
                      filter: m,
                      flRandom: 0,
                      transform: t.interpolate((e) => {
                        const t = e * n * r,
                          a = e * n * o,
                          d = e * n * l,
                          m = e * (s[1] - s[0]) + s[0];
                        return `translate(${
                          e * (i[1] - i[0]) + i[0]
                        }px, ${m}px) rotateY(${t}rad) rotateX(${a}rad) rotateZ(${d}rad) scale(${c})`;
                      }),
                    };
                  })(e, a)
                ),
                o = n
                  .map((e) =>
                    (function (e, t, a) {
                      if (Math.random() > 0.1) return null;
                      const {
                        rotationCoefficient: n,
                        rotationRatioZ: r,
                        yRange: o,
                        xRange: l,
                        scale: s,
                        colorHue: i,
                        filter: c,
                      } = e;
                      return {
                        backgroundColor: void 0,
                        fill: i,
                        filter: c,
                        flRandom: Math.random(),
                        transform: t.interpolate((e) => {
                          const t = ((e * n) / 4) * r,
                            a = e * (o[1] - o[0]) + o[0];
                          return `translate(${
                            e * (l[1] - l[0]) + l[0]
                          }px, ${a}px) rotateZ(${t}rad) scale(${s})`;
                        }),
                      };
                    })(e, a)
                  )
                  .filter((e) => !!e);
              return { rgParticleStyles: r, rgStreamerStyles: o };
            }, [e, t, a]);
          return n;
        },
        O = { position: "absolute", left: "50%", top: 0 },
        B = Object.assign(Object.assign({}, O), {
          width: 10,
          height: 5,
          borderWidth: 1,
          borderColor: "black",
        }),
        I = ({ eType: e }) => {
          S.Gold, S.LNY2020;
          const [t, a] = (function () {
            const [e, t] = (0, s.useState)(null),
              a = (0, s.useCallback)((e) => {
                e &&
                  "function" == typeof e.getBoundingClientRect &&
                  t(e.getBoundingClientRect());
              }, []);
            return [e, a];
          })();
          let n,
            { rgParticleStyles: r, rgStreamerStyles: o } = T(t, e);
          switch (e) {
            case S.Gold:
              n = r.map((e, t) => s.createElement(P, { key: t, style: e }));
              break;
            case S.LNY2020:
              n = r.map((e, t) =>
                t % 2
                  ? s.createElement(k, { key: t, style: e })
                  : s.createElement(D, { key: t, style: e })
              );
              break;
            case S.Default:
              n = r.map((e, t) => s.createElement(k, { key: t, style: e }));
          }
          return s.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: "hidden",
              },
              ref: a,
            },
            n,
            o.map((e, t) =>
              e.flRandom > 0.5
                ? s.createElement(F, { key: t, style: e })
                : s.createElement(Z, { key: t, style: e })
            )
          );
        },
        k = ({ style: e }) =>
          s.createElement(R.q.div, {
            style: Object.assign(Object.assign({}, B), e),
          }),
        P = ({ style: e }) => {
          const [t] = (0, s.useState)(Math.floor(Math.random() * j.length)),
            a = j[t];
          return s.createElement(a, {
            style: Object.assign(Object.assign(Object.assign({}, O), e), {
              backgroundColor: void 0,
            }),
          });
        },
        D = ({ style: e }) => {
          const [t] = (0, s.useState)(Math.floor(Math.random() * X.length)),
            a = X[t];
          return s.createElement(a, {
            style: Object.assign(Object.assign(Object.assign({}, O), e), {
              backgroundColor: void 0,
            }),
          });
        },
        Z = ({ style: e }) =>
          s.createElement(
            R.q.svg,
            {
              viewBox: "0 0 80 620",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 70 }, e),
            },
            s.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
              fill: e.fill,
            })
          ),
        F = ({ style: e }) =>
          s.createElement(
            R.q.svg,
            {
              viewBox: "0 0 203 295",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: Object.assign({ width: 10, height: 20 }, e),
            },
            s.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
              fill: e.fill,
            })
          ),
        j = [
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 102",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 5, height: 10 }, e),
              },
              s.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
                fill: "#F7D51E",
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 50 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              s.createElement("path", {
                d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: "#C4C4C4",
              }),
              s.createElement("path", {
                d: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 68 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              s.createElement("rect", {
                y: "34.6389",
                width: "48",
                height: "48",
                transform: "rotate(-45 0 34.6389)",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 10 }, e),
              },
              s.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              s.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              s.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              s.createElement("ellipse", {
                cx: "24",
                cy: "15",
                rx: "24",
                ry: "15",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                viewBox: "0 0 48 39",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 8 }, e),
              },
              s.createElement("path", {
                d: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
                fill: e.fill,
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                width: "48",
                height: "35",
                viewBox: "0 0 48 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: Object.assign({ width: 10, height: 7 }, e),
              },
              s.createElement("path", {
                d: "M48 0H0L24 35L48 0Z",
                fill: e.fill,
              })
            ),
        ],
        X = [
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 54 47.18",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              s.createElement("polygon", {
                fill: "#60000e",
                points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
              }),
              s.createElement("path", {
                fill: "#f93838",
                d: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
              }),
              s.createElement("path", {
                fill: "#f93838",
                d: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
              })
            ),
          ({ style: e }) =>
            s.createElement(
              R.q.svg,
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 14.5 22",
                style: Object.assign({ width: 28, height: 28 }, e),
              },
              s.createElement("path", {
                fill: "#fc1010",
                d: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
              }),
              s.createElement("path", {
                fill: "#fc1010",
                d: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
              }),
              s.createElement("path", {
                fill: "#fc1010",
                d: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
              }),
              s.createElement("path", {
                fill: "#fc1010",
                d: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
              })
            ),
        ];
      var H = a(26189);
      function $(e) {
        return (0, b.Xx)(`#RewardsReaction_${e}`);
      }
      var U = a(31496);
      const q = (e) => {
        const { className: t } = e,
          a = (0, n._T)(e, ["className"]);
        return s.createElement(
          c.wl,
          Object.assign({ className: (0, L.Z)(t, U.UnstyledButton) }, a)
        );
      };
      var z, V, Y;
      !(function (e) {
        (e[(e.SELECTING = 0)] = "SELECTING"),
          (e[(e.CONFIRM = 1)] = "CONFIRM"),
          (e[(e.SUBMITTING = 2)] = "SUBMITTING"),
          (e[(e.DONE = 3)] = "DONE"),
          (e[(e.ERROR = 4)] = "ERROR");
      })(Y || (Y = {}));
      const Q = (e) =>
        s.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          s.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          })
        );
      class W extends s.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e =
            ((t = this.props.reactionType),
            (a =
              !this.props.bDisableAnimation &&
              (this.state.bHovered || this.props.bForceAnimated)),
            `${p.De.STORE_CDN_URL}public/images/loyalty/reactions/${
              a ? "animated" : "still"
            }/${t}.png`);
          var t, a;
          return s.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, n.gn)([A.ak], W.prototype, "handleMouseOver", null),
        (0, n.gn)([A.ak], W.prototype, "handleMouseOut", null);
      let K = (z = class extends s.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, n, r, o) => {
              o || (o = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: n,
                  targetid: t,
                  ugcType: r,
                  initialSelectedReaction: o,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (z.s_LoyaltyAwardModalStore) return;
            if (e) return void (z.s_LoyaltyAwardModalStore = new E(e));
            const t = (0, p.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o().get(
                      `${(0, p.Kc)()}pointssummary/ajaxgetasyncconfig`,
                      { withCredentials: !0 }
                    );
                    return 1 === e.data.success
                      ? e.data.data
                      : (console.error(
                          `Failed to load async config: ${e.data.success}`
                        ),
                        {});
                  } catch (e) {
                    return (
                      console.error(
                        `Unexpected failure while loading async config: ${e}`
                      ),
                      {}
                    );
                  }
                });
              })(),
              r = Object.assign(Object.assign({}, t), a),
              l = new u.J(p.De.WEBAPI_BASE_URL, r.webapi_token);
            (z.s_LoyaltyAwardModalStore = new E(l.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: n,
              targetid: r,
              ugcType: o,
              initialSelectedReaction: l,
            } = this.state,
            i = z.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return s.createElement(
              f.On,
              {
                className: H.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              s.createElement(ae, null),
              s.createElement(re, null),
              s.createElement(
                "div",
                { className: H.InitialLoading },
                s.createElement(
                  "div",
                  { className: (0, L.Z)(H.LoadingContainer, H.Visible) },
                  s.createElement(le, null)
                )
              )
            );
          i.GetAwardConfigurations();
          return s.createElement(te, {
            key: r,
            targetid: r,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            store: z.s_LoyaltyAwardModalStore,
            initialSelectedReaction: l,
          });
        }
      });
      (K.defaultProps = { targetType: 1 }), (K = z = (0, n.gn)([l.Pi], K));
      const J = K;
      let ee = (V = class extends s.Component {
        constructor(e) {
          super(e);
        }
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new E(e.GetServiceTransport()));
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: a,
              ugcType: n,
              initialSelectedReaction: r,
              onDismiss: o,
            } = this.props,
            l = V.s_LoyaltyAwardModalStore;
          if (null === l)
            return console.log("Store not initialized yet."), null;
          l.GetAwardConfigurations();
          return s.createElement(te, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: n,
            onDismiss: o,
            onSuccess: o,
            store: V.s_LoyaltyAwardModalStore,
            initialSelectedReaction: r,
          });
        }
      });
      (ee.s_LoyaltyAwardModalStore = null), (ee = V = (0, n.gn)([l.Pi], ee));
      let te = class extends s.Component {
        constructor(e) {
          super(e),
            e.store.SetTarget(e.targetid, e.targetType),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: Y.SELECTING,
            });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: n,
              onDismiss: r,
            } = this.props,
            { selectedReaction: o, ePhase: l, celebrate: i } = this.state;
          if (!e) return null;
          const d = n.GetExistingReactions(),
            u = n.GetAwardConfigurations(),
            h = n.GetUserPointBalance(),
            g = (function (e, t, a) {
              let n = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        n.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && n.push(e.reactionid);
                    }
                }),
                n
              );
            })(u, t, a),
            w = 0 === o ? null : u.get(o),
            C = w ? w.points_cost : 0,
            E = w ? w.points_transferred : 0;
          let y,
            v = "";
          switch (t) {
            case 1:
              v = (0, b.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              v = (0, b.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              v = (0, b.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              v = (0, b.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              v = (0, b.Xx)("#GrantAwardDescription_Comment");
          }
          switch (l) {
            case Y.SELECTING:
              {
                const e = 0 === o || d.get(o),
                  t = !h || h.greaterThanOrEqual(C),
                  a = s.createElement(
                    _.KM,
                    {
                      onClick: () => this.setState({ ePhase: Y.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, b.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip"
                      ),
                    },
                    (0, b.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next"
                    )
                  );
                y = s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(ae, { description: v }),
                  s.createElement(re, null),
                  0 === g.length &&
                    s.createElement(
                      "div",
                      { className: H.InitialLoading },
                      s.createElement(
                        "div",
                        { className: (0, L.Z)(H.LoadingContainer, H.Visible) },
                        s.createElement(le, null)
                      )
                    ),
                  s.createElement(
                    m.P8,
                    {
                      className: H.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    g.map((e, t) =>
                      s.createElement(oe, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !d.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: d.get(e),
                        onClick: () => {
                          d.get(e) ||
                            this.setState({
                              selectedReaction: e === o ? 0 : e,
                            });
                        },
                      })
                    )
                  ),
                  s.createElement(re, null),
                  s.createElement(
                    ne,
                    { store: n },
                    e || t
                      ? a
                      : [
                          s.createElement(
                            "div",
                            { key: "msg", className: H.NotEnoughPoints },
                            (0, b.Xx)(
                              "#GrantAward_CantAfford",
                              h.negate().add(C).toNumber().toLocaleString()
                            )
                          ),
                          s.createElement(
                            c.IS,
                            {
                              key: "button",
                              href: `${p.De.STORE_BASE_URL}points/howitworks`,
                            },
                            s.createElement(
                              _.zx,
                              { key: "button" },
                              (0, b.Xx)("#GrantAward_HowToGetPoints")
                            )
                          ),
                        ]
                  )
                );
              }
              break;
            case Y.CONFIRM:
            case Y.SUBMITTING:
            case Y.DONE:
              y = s.createElement(
                s.Fragment,
                null,
                s.createElement(ae, { description: v }),
                s.createElement(re, null),
                s.createElement(
                  "div",
                  { style: { position: "relative" } },
                  s.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        H.ConfirmContainer,
                        l === Y.CONFIRM && H.Visible
                      ),
                    },
                    s.createElement(W, {
                      className: H.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    s.createElement(
                      "div",
                      { className: H.ConfirmTextCtn },
                      s.createElement(
                        "div",
                        { className: H.ConfirmText },
                        (0, b.kQ)(
                          "#GrantAward_Confirm",
                          s.createElement(se, null, C.toLocaleString()),
                          s.createElement(
                            "span",
                            { className: H.AwardName },
                            $(o)
                          )
                        )
                      ),
                      s.createElement(
                        "div",
                        { className: H.ConfirmText },
                        (0, b.kQ)(
                          "#GrantAward_Confirm_Details",
                          s.createElement(se, null, E.toLocaleString()),
                          s.createElement(
                            "span",
                            { className: H.TimePeriod },
                            (0, b.Xx)("#GrantAward_Confirm_DetailsTimePeriod")
                          )
                        )
                      )
                    )
                  ),
                  s.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        H.LoadingContainer,
                        l === Y.SUBMITTING && H.Visible
                      ),
                    },
                    s.createElement(le, null)
                  ),
                  s.createElement(
                    "div",
                    {
                      className: (0, L.Z)(
                        H.SuccessContainer,
                        l === Y.DONE && H.Visible
                      ),
                    },
                    s.createElement(W, {
                      className: H.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    s.createElement(
                      "div",
                      { className: H.SuccessText },
                      (0, b.Xx)("#GrantAward_Success")
                    )
                  )
                ),
                s.createElement(re, null),
                s.createElement(
                  ne,
                  { store: n },
                  s.createElement(
                    _.zx,
                    {
                      onClick: () => this.setState({ ePhase: Y.SELECTING }),
                      disabled: l !== Y.CONFIRM,
                    },
                    (0, b.Xx)("#GrantAward_Back")
                  ),
                  s.createElement(
                    _.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, b.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: l !== Y.CONFIRM,
                    },
                    (0, b.Xx)("#GrantAwardNowButton")
                  )
                )
              );
              break;
            case Y.ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, b.Xx)("#GrantAwardError_Busy");
                  break;
                case 32:
                  e = (0, b.Xx)("#GrantAwardError_PersistFailed");
                  break;
                case 8:
                  e = (0, b.Xx)("#GrantAwardError_InvalidParam");
                  break;
                case 42:
                  e = (0, b.Xx)("#GrantAwardError_NoMatch");
                  break;
                case 107:
                  e = (0, b.Xx)("#GrantAwardError_InsufficientFunds");
                  break;
                case 15:
                  e = (0, b.Xx)("#GrantAwardError_AccessDenied");
                  break;
                case 21:
                  e = (0, b.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, b.Xx)("#GrantAwardError_Fail");
              }
              y = s.createElement(
                s.Fragment,
                null,
                s.createElement(ae, { description: v }),
                s.createElement(re, null),
                s.createElement(
                  "div",
                  { style: { position: "relative" } },
                  s.createElement(
                    "div",
                    { className: H.ErrorContainer },
                    s.createElement("div", { className: H.ErrorText }, e)
                  )
                ),
                s.createElement(re, null),
                s.createElement(
                  ne,
                  { store: n },
                  s.createElement(
                    _.zx,
                    { onClick: () => this.setState({ ePhase: Y.SELECTING }) },
                    (0, b.Xx)("#GrantAward_Back")
                  )
                )
              );
            }
          }
          return s.createElement(
            f.On,
            { className: H.GrantAwardModal, active: e, onDismiss: r },
            s.createElement(
              f.Pv,
              { navID: "GrantAward", closeModal: r },
              i && s.createElement(I, { eType: S.Default }),
              y
            )
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: n } = this.state;
          null !== n &&
            0 != n &&
            (this.setState({ ePhase: Y.SUBMITTING }),
            t.AddReaction(n).then(({ eResult: t, strMessage: r }) => {
              1 == t
                ? this.setState({ ePhase: Y.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, n);
                    }, 2e3)
                  )
                : this.setState({ ePhase: Y.ERROR, eResult: t });
            }));
        }
      };
      (0, n.gn)([A.ak], te.prototype, "GrantAward", null),
        (te = (0, n.gn)([l.Pi], te));
      const ae = ({ description: e }) =>
          s.createElement(
            "div",
            { className: H.Header },
            s.createElement(
              "div",
              { className: H.Title },
              (0, b.Xx)("#GrantAwardTitle")
            ),
            s.createElement("div", { className: H.Description }, e)
          ),
        ne = (0, l.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            n = a && a.toNumber().toLocaleString();
          return s.createElement(
            "div",
            { className: H.Footer },
            s.createElement(
              "div",
              { className: H.Left },
              s.createElement(y.doA, { className: H.BalanceIcon }),
              s.createElement(
                "div",
                { className: H.BalanceDetails },
                s.createElement(
                  "div",
                  { className: H.BalanceLabel },
                  (0, b.Xx)("#YourBalance")
                ),
                s.createElement("div", { className: H.BalanceAmount }, n)
              )
            ),
            s.createElement(
              "div",
              { className: H.Right },
              s.createElement(
                d.s,
                { className: H.Actions, "flow-children": "row" },
                s.Children.map(t, (e) =>
                  s.createElement("div", { className: H.Action }, e)
                )
              ),
              s.createElement(
                "a",
                {
                  className: H.FooterLink,
                  href: `${p.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, b.Xx)("#GrantAward_PointsLink")
              )
            )
          );
        }),
        re = () => s.createElement("div", { className: H.Divider });
      class oe extends s.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e = this.props,
            {
              reaction: t,
              selected: a,
              alreadyAwarded: r,
              cost: o,
              autoFocus: l,
            } = e,
            i = (0, n._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return s.createElement(
            q,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, L.Z)(H.Button, a && H.Selected, r && H.Disabled),
                autoFocus: l,
              },
              i
            ),
            s.createElement(
              "div",
              { className: H.IconCtn },
              s.createElement(W, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: r,
              })
            ),
            s.createElement(
              "div",
              { className: H.LabelCtn },
              s.createElement("div", { className: H.Label }, $(t)),
              s.createElement(se, { className: H.Points }, o.toLocaleString())
            ),
            r && s.createElement(Q, { className: H.IconCheckMark })
          );
        }
      }
      (0, n.gn)([A.ak], oe.prototype, "handleMouseOver", null),
        (0, n.gn)([A.ak], oe.prototype, "handleMouseOut", null);
      const le = () =>
          s.createElement(v.V, { size: "large", className: H.Loading }),
        se = (e) => {
          const { children: t, className: a } = e,
            r = (0, n._T)(e, ["children", "className"]);
          return s.createElement(
            "span",
            Object.assign({}, r, { className: (0, L.Z)(a, H.PointsAmount) }),
            s.createElement(y.doA, { className: H.PointsAmountIcon }),
            t
          );
        };
    },
  },
]);
