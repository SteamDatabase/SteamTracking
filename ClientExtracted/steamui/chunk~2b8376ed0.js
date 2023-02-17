(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [7298],
  {
    51990: (t) => {
      t.exports = {
        Container: "discussionwidget_Container_3BVe_",
        VoteContainer: "discussionwidget_VoteContainer_1uhQY",
        DiscussContainer: "discussionwidget_DiscussContainer_3tXYJ",
        ShareContainer: "discussionwidget_ShareContainer_cLK_F",
        InnerContainer: "discussionwidget_InnerContainer_3kQsD",
        DiscussionButton: "discussionwidget_DiscussionButton_wnKan",
        DiscussIcon: "discussionwidget_DiscussIcon_3-isH",
        linkField: "discussionwidget_linkField_1mRpV",
        ShareButtonContainer: "discussionwidget_ShareButtonContainer_3tMDZ",
        LinkInputLabel: "discussionwidget_LinkInputLabel_Gaizo",
        LinkButton: "discussionwidget_LinkButton_q5-pg",
        ShareSteamBtn: "discussionwidget_ShareSteamBtn_3Gc7y",
        ClipboardText: "discussionwidget_ClipboardText_3iQp-",
        LinkInput: "discussionwidget_LinkInput_2IeAw",
        ShareIcon: "discussionwidget_ShareIcon_1kFSv",
        ClipboardIcon: "discussionwidget_ClipboardIcon_sEXEi",
        SteamIcon: "discussionwidget_SteamIcon_3ZAOL",
        share_controls_ctn: "discussionwidget_share_controls_ctn_1PRQm",
        ShareLanguagePicker: "discussionwidget_ShareLanguagePicker_c-WS8",
        LanguageLabel: "discussionwidget_LanguageLabel_GHNBo",
        ShareBtn: "discussionwidget_ShareBtn_1qDAn",
        VoteCount: "discussionwidget_VoteCount_2dVe4",
        DiscussionCount: "discussionwidget_DiscussionCount_1GFRK",
        DiscussionButtonText: "discussionwidget_DiscussionButtonText_1qE1y",
        VoteDownIcon: "discussionwidget_VoteDownIcon_3QPkc",
        VoteDownSelectedIcon: "discussionwidget_VoteDownSelectedIcon_3SLkg",
        VoteUpIcon: "discussionwidget_VoteUpIcon_vRT1W",
        VoteUpSelectedIcon: "discussionwidget_VoteUpSelectedIcon_8WczG",
        VoteUpStaticIcon: "discussionwidget_VoteUpStaticIcon_1g-En",
        VoteButtonSelected: "discussionwidget_VoteButtonSelected_2c_5V",
      };
    },
    95116: (t) => {
      t.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    89866: (t) => {
      t.exports = {
        TheaterMode: "appdetailsbroadcastsection_TheaterMode_19yL9",
        Body: "appdetailsbroadcastsection_Body_CFp7F",
        BroadcastPlayer: "appdetailsbroadcastsection_BroadcastPlayer_2lAf2",
        BroadcastThumbnail:
          "appdetailsbroadcastsection_BroadcastThumbnail_2l1gE",
        PlayButtonWrapper: "appdetailsbroadcastsection_PlayButtonWrapper__-Sx3",
        BroadcastBox: "appdetailsbroadcastsection_BroadcastBox_9nwsC",
        ViewBroadcastOnWeb:
          "appdetailsbroadcastsection_ViewBroadcastOnWeb_1Z3B4",
      };
    },
    31951: (t, e, s) => {
      "use strict";
      s.d(e, { x: () => A });
      var i = s(70655),
        n = s(67294),
        a = s(31535),
        o = s(93725);
      class A extends n.Component {
        constructor() {
          super(...arguments),
            (this.m_schUpdate = new o.Ar()),
            (this.m_bSetupComplete = !1);
        }
        componentDidMount() {
          0 == this.props.updateRate && this.updateCanvas();
        }
        componentWillUnmount() {
          this.m_schUpdate.Cancel();
        }
        componentDidUpdate() {
          this.updateCanvas();
        }
        BindCanvasRef(t) {
          this.m_elCanvas = t;
        }
        updateCanvas() {
          if (
            null == this.props.elementRef ||
            null == this.m_elCanvas ||
            this.m_bSetupComplete
          )
            return;
          let t = this.props.scaleFactor || [1, 1],
            e = this.props.elementRef,
            s = this.props.updateRate;
          this.m_Context = this.m_elCanvas.getContext("2d");
          let i = Math.floor(
              this.m_elCanvas.clientWidth / this.props.reductionFactor
            ),
            n = Math.floor(
              this.m_elCanvas.clientHeight / this.props.reductionFactor
            );
          (this.m_elCanvas.width = i),
            (this.m_elCanvas.height = n),
            this.props.blurAmount > 0 &&
              (this.m_Context.filter = "blur(" + this.props.blurAmount + "px)");
          let a = () => {
            this.m_Context.drawImage(e, 0, 0, i * t[0], n * t[1]),
              s > 0 && this.m_schUpdate.Schedule(s, a);
          };
          a(), (this.m_bSetupComplete = !0);
        }
        render() {
          return n.createElement("canvas", {
            id: this.props.id,
            className: this.props.className,
            ref: this.BindCanvasRef,
            width: this.props.width,
            height: this.props.height,
          });
        }
      }
      (0, i.gn)([a.ak], A.prototype, "BindCanvasRef", null),
        (0, i.gn)([a.ak], A.prototype, "updateCanvas", null);
    },
    58657: (t, e, s) => {
      "use strict";
      s.d(e, { i: () => u });
      var i = s(67294),
        n = s(65030),
        a = s(15256),
        o = s(45520),
        A = s(27194),
        c = s(78290),
        d = s(78869),
        l = s(95116);
      function u(t) {
        const { gidEvent: e } = t,
          s = (0, a.XC)(e),
          [u, M] = (0, i.useMemo)(() => {
            var t, e, i, a;
            if (
              (null ===
                (e =
                  null === (t = null == s ? void 0 : s.jsondata) || void 0 === t
                    ? void 0
                    : t.localized_sale_product_banner) || void 0 === e
                ? void 0
                : e.length) > 0 &&
              (null ===
                (a =
                  null === (i = null == s ? void 0 : s.jsondata) || void 0 === i
                    ? void 0
                    : i.localized_sale_product_mobile_banner) || void 0 === a
                ? void 0
                : a.length) > 0
            ) {
              const t = (0, n.jM)(d.De.LANGUAGE),
                e = A.LZ.GetWithFallback(
                  s.jsondata.localized_sale_product_banner,
                  t
                ),
                i = A.LZ.GetWithFallback(
                  s.jsondata.localized_sale_product_mobile_banner,
                  t
                );
              if (
                (null == e ? void 0 : e.length) > 0 &&
                (null == i ? void 0 : i.length) > 0
              ) {
                const t = s.clanSteamID.GetAccountID();
                return [
                  d.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${e}`,
                  d.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${t}/${i}`,
                ];
              }
            }
            return [null, null];
          }, [s]);
        return (null == u ? void 0 : u.length) > 0 &&
          (null == M ? void 0 : M.length) > 0
          ? i.createElement(
              "a",
              { href: (0, c.OL)(s.GetSaleURL()), className: l.Link },
              i.createElement("img", {
                src: u,
                className: (0, o.Z)(l.Banner, l.Big),
              }),
              i.createElement("img", {
                src: M,
                className: (0, o.Z)(l.Banner, l.Mobile),
              })
            )
          : null;
      }
    },
    41554: (t, e, s) => {
      "use strict";
      s.d(e, { m: () => d });
      var i = s(70655),
        n = s(22188),
        a = s(69144),
        o = s(27661),
        A = s(88357);
      class c {
        constructor() {
          (this.m_mapAppBroadcasts = new Map()),
            (this.m_setRequestsInFlight = new Set());
        }
        GetBroadcastList(t) {
          if (this.m_mapAppBroadcasts.has(t)) {
            const e = 60 * 1 * 1e3,
              s = this.m_mapAppBroadcasts.get(t);
            if (new Date().getTime() - s.timeStamp.getTime() < e)
              return (
                s.bHasData && s.broadcasts.length > 0 && (0, o.zO)(12e4), s
              );
          } else
            this.m_mapAppBroadcasts.set(t, {
              bHasData: !1,
              timeStamp: new Date(),
            });
          if (!this.m_setRequestsInFlight.has(t)) {
            this.m_setRequestsInFlight.add(t);
            let e = a.de.ResolveURL("LibraryFeaturedBroadcasts", t);
            A.Z.get(e, { retrycount: 1 })
              .then((e) => {
                if (e.success && Array.isArray(e.filtered)) {
                  const s = {
                    bHasData: !0,
                    timeStamp: new Date(),
                    broadcasts: [],
                  };
                  e.filtered.forEach((t) => {
                    const e = {
                      unAccountId: Number(t.accountid),
                      strThumbnailURL: t.thumbnail_http_address,
                      unViewerCount: t.viewer_count,
                      strTitle: t.title,
                      unDuration: t.duration,
                    };
                    s.broadcasts.push(e);
                  }),
                    this.m_mapAppBroadcasts.set(t, s);
                }
                this.m_setRequestsInFlight.delete(t);
              })
              .catch((e) => {
                this.m_setRequestsInFlight.delete(t);
              });
          }
          let e = this.m_mapAppBroadcasts.get(t);
          return (
            e.bHasData && e.broadcasts.length > 0 && (0, o.zO)(12e4),
            this.m_mapAppBroadcasts.get(t)
          );
        }
        InvalidateBroadcastList(t) {
          this.m_mapAppBroadcasts.delete(t);
        }
      }
      (0, i.gn)([n.LO.shallow], c.prototype, "m_mapAppBroadcasts", void 0);
      const d = new c();
      window.appBroadcastStore = d;
    },
    9495: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => i });
      const i =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE0MDlweCIgdmlld0JveD0iMCAxODAxLjUgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTgwMS41IDE0MDAgMTQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iaWNvbm1vbnN0ci1saW5rLTFfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjIuMzUzLDIzMTAuNTg4YzE0OC4yMzUtMTQ4LjIzNSwzODcuMDYtMTQ4LjIzNSw1MjcuMDYsMA0KCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NA0KCWMtNDEuMTc3LDguMjM1LTc0LjExOCwyNC43MDYtOTguODIzLDQ5LjQxMWwtMjQ3LjA1OSwyNDcuMDZjLTc0LjExOCw3NC4xMTctNzQuMTE4LDE5Ny42NDYsMCwyODANCgljNzQuMTE4LDc0LjExNywxOTcuNjQ3LDc0LjExNywyODAsMGwwLDBsNzQuMTE4LTc0LjExOGM3NC4xMTcsMjQuNzA2LDE0OC4yMzUsNDEuMTc3LDIyMi4zNTMsMzIuOTQxbC0xNzIuOTQsMTcyLjk0MQ0KCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4eg0KCSBNNzU3LjY0NiwxOTA3LjA1OUw1OTIuOTQxLDIwODBjNzQuMTE3LTguMjM1LDE0OC4yMzUsOC4yMzUsMjE0LjExNywzMi45NDFsNzQuMTE4LTc0LjExOGM3NC4xMTctNzQuMTE3LDE5Ny42NDYtNzQuMTE3LDI4MCwwDQoJYzgyLjM1Myw3NC4xMTgsNzQuMTE3LDE5Ny42NDcsMCwyODBsLTI1NS4yOTQsMjQ3LjA2Yy03NC4xMTgsNzQuMTE3LTE5Ny42NDcsNzQuMTE3LTI4MCwwDQoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0Nw0KCWMxNDguMjM1LDE0OC4yMzUsMzg3LjA1OSwxNDguMjM1LDUyNy4wNiwwbDAsMGwyNDcuMDU5LTI0Ny4wNmMxNDguMjM1LTE0OC4yMzUsMTQ4LjIzNS0zODcuMDU5LDAtNTI3LjA1OQ0KCVM5MDUuODgzLDE3NjcuMDU5LDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OUw3NTcuNjQ2LDE5MDcuMDU5eiIvPg0KPC9zdmc+DQo=";
    },
    56175: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    47077: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MjI5RjcyNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MjI5RjczNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUyMjlGNzA2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUyMjlGNzE2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oZ6UCAAAFiElEQVR42uybW2hcVRSGZ9JE22RotJa2wUrEW0xBlGIl0kijQZqWoPXSPjSt0oLgg4hvpY999SkQxYoPgmmgKkKVSiMqtrQpVeO9YCMOtTqmaVF6G5OYXqb/ov/AdHrOnrXP2efkwMyGj0Mm+7LWOvuy1t77pAuFQqqaU12qylPNANVugPryH9LptNMGMMfMxaMDdII20A6WggxoYrb/QB7kwK9gDBwCRyDPtGN5bvyhFEeNNIKNYB+YKgRPU6xD6mp0ZYDr9HVpAJRvAf3gQsF9usC6WxJnAJRrBgNgphB9mmFbzYkwAMr0gVOF+JO02TdrBkDeDNhVmP0kMmSCGiBdrrRmFUCZu/HYC+5PyGp2DPRC9qztKlAXoAs9hMdIgpRPUZYRymaVrHoAGzgA5ifUrzkPVkGHH533AHb74QQrn6Jsw5TVXQ/gJPNtwrp9pTlhBXTJu+oBOyNW/iDYAt4Co+BS2f8nwWtgGegBXyvmhJ3B1kXvdT7q9CK4pbicSfwAOsCrYAj0eLjaWUW9faH8AHp4cTg57WA7uAx+Ae+Al8ADYI7Pi9uhdJaawxhgIAblz4E6sMfn/9kQBpA0EMgADGzi8O2/YHsnDXnWBBwCxdihxc8ApklwG2iIYcb+BoLcgecSQ573kecVcB9Yjb+/Ancp62+gLvplkLH3KW5aRJ2eoZAfRNiGLIeLodukdhlcF5PyKS5pj0TcRoY6qfcEN8ekfA5v5SS3zKJOm1UG4B5eV1xvn8vc8hja6qJu5k1Rvo25EQpyFsjSdlomN7AQfCpjlBPb0ojaLW7O7q9kgE7HDZ8De8BnErKiy//pkWdDSQ9cgMejdHmfAy0OZeksN8AN6yIYdLS+i0f3Arg5xAbmHPAUOORR/+UAMg1WdITAqLIyEeB1CT0paBt4A/wDtoh353g/fx04Ad4shrt4LgLbwLRS5lGNASaUlW0yHIREklB3vc/vq8EVhcwTGgPkFRUdTNoGAGT6SCF3XuMKNynaG07gJsiXijxNWkeoUqpXvpWHwQ+0/nEZx4oyPeAog5jDFhudDUG7TpAhMKyodz4nxNJ0ESwzlGnziEAnNPv+yPOhqyGQV9hNJp1nK+R5HNzm0XOeVgRGpWkx6zIp/yR9Bk1QVHEI5JSdZ7dsWRn+P+Xz+/+GMhd9fp8xKL8Vj48lkNXEHpohYOMIjRgEuwmMleU/YzrdlX0B7hCVpt+kLkOZvWEcIa8eMOZiSobLK2+tGwyCn+kOP8boz6/MX+zu+xgv7AZPsC4XaUzTA7osLDqegPX/qIW8XRUPRxk1nbGICNvxho7NkvIynP5Wjn+ZkyTQmjZOgryTs99CjpdnsQNsVSov6YDnfSOvXWHeybG5x3OP4S3JIce7oNvizXZwwsoY8iwBZy3k3KjeFue2s809H9nZmWdwiHIMVmTpXOOlGNvsprEu0YlaaAiTP7e8X9Roey7Qbxlrf+IX+/NtDdITLCYJbb8H39FNLsb3VxjYtBqUt72Z0u/X431PhznBnLD0sQ+D9ahj3Ef4RXisBQ+Ce8GtHMOya/Q7+EkCLZTP+ZRfwGV1rYVM4ly1Fpdfq3uCAY/G/nW9IYK65EWtl2U3gDzBjsaYOczhqIstsXrwPDgS4iZZ8MNRFgh7PC6u7Xusp1Wh9O1U+m1wOmTbFY/HtTdEduHR56hHy3j/A4yXBDkN3P29k/OCizQEXTZ5GeA6fWtXZHSBjVTUm7p2YJr0JDL2eimvOhozGCHLw4rzCVZeZOvRXJgMtCfI+3erEtoTRCbjHcHQBigxwkqOsySN+ZW2ygfeFWYXWyEzbQKUH+KElw1UunZdvvbBRO2Tmag/mpoMofRk1B9NBfpgwrLBRH82l659O1zlqWaAajfAVQEGAEyk4t4HpStTAAAAAElFTkSuQmCC";
    },
    78853: (t, e, s) => {
      "use strict";
      s.d(e, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
