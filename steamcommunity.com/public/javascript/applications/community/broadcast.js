/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4601],
  {
    73401: (i) => {
      i.exports = {
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
    56675: (i) => {
      i.exports = {
        Link: "salebanner_Link_26cHo",
        Banner: "salebanner_Banner_2df4N",
        Big: "salebanner_Big_1m7WT",
        Mobile: "salebanner_Mobile_2w3oX",
      };
    },
    94082: (i, n, e) => {
      "use strict";
      e.d(n, { nf: () => o });
      var s = e(87656),
        t = (e(89526), e(70657)),
        A = (e(63154), e(66715), e(70983));
      function o(i) {
        s.OT.BIsInitialized() ||
          s.OT.Initialize(new t.J(A.De.WEBAPI_BASE_URL, i));
      }
    },
    76547: (i, n, e) => {
      "use strict";
      e.d(n, { i: () => N });
      var s = e(89526),
        t = e(6960),
        A = e(83471),
        o = e(13806),
        c = e(31587),
        u = e(98197),
        M = e(70983),
        D = e(56675);
      function N(i) {
        const { gidEvent: n } = i,
          e = (0, A.XC)(n),
          [N, a] = (0, s.useMemo)(() => {
            var i, n, s, A;
            if (
              (null ===
                (n =
                  null === (i = null == e ? void 0 : e.jsondata) || void 0 === i
                    ? void 0
                    : i.localized_sale_product_banner) || void 0 === n
                ? void 0
                : n.length) > 0 &&
              (null ===
                (A =
                  null === (s = null == e ? void 0 : e.jsondata) || void 0 === s
                    ? void 0
                    : s.localized_sale_product_mobile_banner) || void 0 === A
                ? void 0
                : A.length) > 0
            ) {
              const i = (0, t.jM)(M.De.LANGUAGE),
                n = c.LZ.GetWithFallback(
                  e.jsondata.localized_sale_product_banner,
                  i
                ),
                s = c.LZ.GetWithFallback(
                  e.jsondata.localized_sale_product_mobile_banner,
                  i
                );
              if (
                (null == n ? void 0 : n.length) > 0 &&
                (null == s ? void 0 : s.length) > 0
              ) {
                const i = e.clanSteamID.GetAccountID();
                return [
                  M.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${i}/${n}`,
                  M.De.MEDIA_CDN_COMMUNITY_URL + `images/clans/${i}/${s}`,
                ];
              }
            }
            return [null, null];
          }, [e]);
        return (null == N ? void 0 : N.length) > 0 &&
          (null == a ? void 0 : a.length) > 0
          ? s.createElement(
              "a",
              { href: (0, u.OL)(e.GetSaleURL()), className: D.Link },
              s.createElement("img", {
                src: N,
                className: (0, o.Z)(D.Banner, D.Big),
              }),
              s.createElement("img", {
                src: a,
                className: (0, o.Z)(D.Banner, D.Mobile),
              })
            )
          : null;
      }
    },
    92377: (i, n, e) => {
      "use strict";
      e.d(n, { Z: () => s });
      const s =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE0MDlweCIgdmlld0JveD0iMCAxODAxLjUgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMTgwMS41IDE0MDAgMTQwOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBpZD0iaWNvbm1vbnN0ci1saW5rLTFfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjIuMzUzLDIzMTAuNTg4YzE0OC4yMzUtMTQ4LjIzNSwzODcuMDYtMTQ4LjIzNSw1MjcuMDYsMA0KCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NA0KCWMtNDEuMTc3LDguMjM1LTc0LjExOCwyNC43MDYtOTguODIzLDQ5LjQxMWwtMjQ3LjA1OSwyNDcuMDZjLTc0LjExOCw3NC4xMTctNzQuMTE4LDE5Ny42NDYsMCwyODANCgljNzQuMTE4LDc0LjExNywxOTcuNjQ3LDc0LjExNywyODAsMGwwLDBsNzQuMTE4LTc0LjExOGM3NC4xMTcsMjQuNzA2LDE0OC4yMzUsNDEuMTc3LDIyMi4zNTMsMzIuOTQxbC0xNzIuOTQsMTcyLjk0MQ0KCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4eg0KCSBNNzU3LjY0NiwxOTA3LjA1OUw1OTIuOTQxLDIwODBjNzQuMTE3LTguMjM1LDE0OC4yMzUsOC4yMzUsMjE0LjExNywzMi45NDFsNzQuMTE4LTc0LjExOGM3NC4xMTctNzQuMTE3LDE5Ny42NDYtNzQuMTE3LDI4MCwwDQoJYzgyLjM1Myw3NC4xMTgsNzQuMTE3LDE5Ny42NDcsMCwyODBsLTI1NS4yOTQsMjQ3LjA2Yy03NC4xMTgsNzQuMTE3LTE5Ny42NDcsNzQuMTE3LTI4MCwwDQoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0Nw0KCWMxNDguMjM1LDE0OC4yMzUsMzg3LjA1OSwxNDguMjM1LDUyNy4wNiwwbDAsMGwyNDcuMDU5LTI0Ny4wNmMxNDguMjM1LTE0OC4yMzUsMTQ4LjIzNS0zODcuMDU5LDAtNTI3LjA1OQ0KCVM5MDUuODgzLDE3NjcuMDU5LDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OUw3NTcuNjQ2LDE5MDcuMDU5eiIvPg0KPC9zdmc+DQo=";
    },
    99212: (i, n, e) => {
      "use strict";
      e.d(n, { Z: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    88393: (i, n, e) => {
      "use strict";
      e.d(n, { Z: () => s });
      const s =
        e.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    51751: (i, n, e) => {
      "use strict";
      e.d(n, { Z: () => s });
      const s =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
