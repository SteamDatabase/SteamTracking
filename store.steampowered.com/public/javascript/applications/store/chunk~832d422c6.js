/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2420],
  {
    82204: (e) => {
      e.exports = {
        SteamAwardContainer: "nominationandvote_SteamAwardContainer_jBtX5",
        InLibraryView: "nominationandvote_InLibraryView_1G81P",
        SVGIcon_DialogCheck: "nominationandvote_SVGIcon_DialogCheck_1IRgd",
        SteamAwardHeader: "nominationandvote_SteamAwardHeader_2TvWH",
        SteamAwardHeaderImage: "nominationandvote_SteamAwardHeaderImage_3dsTJ",
        SteamAwardMainCtn: "nominationandvote_SteamAwardMainCtn_3CUAM",
        SteamAwardMainTitle: "nominationandvote_SteamAwardMainTitle_6gN_u",
        SteamAwardSubTitle: "nominationandvote_SteamAwardSubTitle_3SuAg",
        SteamAwardLearnMore: "nominationandvote_SteamAwardLearnMore_TqZmn",
        BottomRight: "nominationandvote_BottomRight_3VSBr",
        SteamAwardHeaderText: "nominationandvote_SteamAwardHeaderText_30-fH",
        LinkText: "nominationandvote_LinkText_1dQJW",
        SteamAwardVoteWidget: "nominationandvote_SteamAwardVoteWidget_2-t3v",
        SteamAwardVotePrompt: "nominationandvote_SteamAwardVotePrompt_38kTM",
        SteamAwardCategoryTitle:
          "nominationandvote_SteamAwardCategoryTitle_3hZED",
        VotingTitle: "nominationandvote_VotingTitle_at4wS",
        SteamAwardCategoryDesc:
          "nominationandvote_SteamAwardCategoryDesc_3bu8i",
        SteamAwardVoteButtonArea:
          "nominationandvote_SteamAwardVoteButtonArea_2gvv6",
        SteamAwardVoteButton: "nominationandvote_SteamAwardVoteButton_kTsuK",
        SteamAwardVoteButtonText:
          "nominationandvote_SteamAwardVoteButtonText_Zzla_",
        SteamAwardVoteButtonSubmitted:
          "nominationandvote_SteamAwardVoteButtonSubmitted_39ziF",
        SteamAwardNominateButton:
          "nominationandvote_SteamAwardNominateButton_VcFKW",
        SteamAwardLinkToNominationPage:
          "nominationandvote_SteamAwardLinkToNominationPage_3XWCw",
        SteamAwardVoteCheckBox:
          "nominationandvote_SteamAwardVoteCheckBox_LFbd4",
        SteamAwardModalGameTitle:
          "nominationandvote_SteamAwardModalGameTitle_3hBdP",
        ExpiredEventHeader: "nominationandvote_ExpiredEventHeader_3e-YK",
        AwardCategoriesCtn: "nominationandvote_AwardCategoriesCtn_GCwk0",
        SteamAwardConflictModal:
          "nominationandvote_SteamAwardConflictModal_1Ujn_",
      };
    },
    4795: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          ConfirmOverwriteVoteOrNominationDialog: () => L,
          EventDisplaySteamAwardNomination: () => I,
          EventDisplaySteamAwardVote: () => G,
          WinterSaleSteamAwardVoteWrapper: () => O,
          default: () => b,
        });
      var n = a(33940),
        o = a(52868),
        i = a.n(o),
        r = a(50265),
        s = a(88464),
        l = a(89526),
        d = a(42735),
        m = a(75457),
        c = a(14952),
        p = a(92616),
        v = a(57605),
        h = a(52629),
        g = a.n(h),
        u = a(23217),
        S = a(19304),
        _ = a(14826),
        A = a(4306),
        w = a(32765),
        C = a(99307),
        E = a(57742),
        D = a(3301),
        T = a(5557),
        f = a(82204),
        k = a.n(f),
        y = a(32905),
        N = a(207);
      function V(e) {
        return w.L7.logged_in
          ? !w.L7.is_limited ||
              ((0, E.AM)(
                l.createElement(T.r, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window,
              ),
              !1)
          : ((0, E.AM)(
              l.createElement(C.uH, {
                strTitle: (0, _.Xx)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, _.Xx)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, _.Xx)("#MobileLogin_SignIn"),
                onOK: y.X,
              }),
              window,
            ),
            !1);
      }
      function x(e, t) {
        var a, o;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n =
              w.De.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
            r = { rgCategories: e };
          try {
            const e = yield i().get(n, {
              params: r,
              withCredentials: !1,
              cancelToken: t.token,
            });
            if (t.token.reason) return null;
            if (
              (null === (a = null == e ? void 0 : e.data) || void 0 === a
                ? void 0
                : a.success) == d.s.k_EResultOK &&
              (null === (o = null == e ? void 0 : e.data) || void 0 === o
                ? void 0
                : o.event_details)
            )
              return e.data.event_details;
          } catch (e) {
            const t = (0, u.l)(e);
            console.error(
              "Could not fetch award event details:" + t.strErrorMsg,
              t,
            );
          }
          return null;
        });
      }
      let I = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { eCategoryLoaded: null, nomineeAppID: null }),
            (this.m_strPreviousNomineeTitle = null),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_refCheckbox = l.createRef()),
            (this.m_nominationEventDetails = null);
        }
        componentDidMount() {
          this.FetchNominationState(),
            x(
              [this.props.event.GetSteamAwardCategory()],
              this.m_cancelSignal,
            ).then((e) => {
              this.m_nominationEventDetails = e;
            });
        }
        componentDidUpdate() {
          this.props.event.GetSteamAwardCategory() !=
            this.state.eCategoryLoaded &&
            ((this.m_strPreviousNomineeTitle = null),
            this.FetchNominationState());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventDisplaySteamAwardNomination is being unmounted",
          );
        }
        FetchNominationState() {
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              this.props.event.GetSteamAwardCategory() ==
              c.b2.k_ESteamAwardCategoryID_Invalid
            )
              return void this.setState({
                eCategoryLoaded: c.b2.k_ESteamAwardCategoryID_Invalid,
                nomineeAppID: null,
              });
            const t =
              w.De.STORE_BASE_URL + "steamawards/ajaxgetusernominations";
            if (w.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                (null === (e = null == a ? void 0 : a.data) || void 0 === e
                  ? void 0
                  : e.success) == d.s.k_EResultOK &&
                  a.data.nominations &&
                  this.ProcessNominations(a.data.nominations);
              } catch (e) {
                const t = (0, u.l)(e);
                console.error(
                  "Could not fetch previous nominations:" + t.strErrorMsg,
                  t,
                );
              }
            else this.ProcessNominations([]);
          });
        }
        ProcessNominations(e) {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = this.props.event.GetSteamAwardCategory(),
              n = e[a],
              o = n && n.appid;
            if (
              (this.setState({ eCategoryLoaded: a, nomineeAppID: o }),
              o && o != this.props.event.appid)
            ) {
              if (
                (yield p.Z.Get().QueueAppRequest(o, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.event.GetSteamAwardCategory() == a &&
                (this.m_strPreviousNomineeTitle =
                  null === (t = p.Z.Get().GetApp(o)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnNominateClick(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = this.props.event.GetSteamAwardCategory();
            if (t != this.state.eCategoryLoaded) return;
            if (!V(!1)) return;
            const a = this.props.event.appid;
            this.state.nomineeAppID && this.state.nomineeAppID != a
              ? e && this.HandleConflict(() => this.SaveNomination(t, a, e))
              : this.SaveNomination(t, a, e);
          });
        }
        HandleConflict(e) {
          (0, E.AM)(
            l.createElement(L, {
              strLocTokenInfix: "Nomination",
              strNewGameTitle: this.props.event.GetGameTitle(this.props.lang),
              fnGetOldGameTitle: () => this.m_strPreviousNomineeTitle,
              fnOnConfirm: e,
              fnOnCancel: () =>
                this.m_refCheckbox.current &&
                this.m_refCheckbox.current.checked &&
                this.m_refCheckbox.current.Toggle(),
            }),
            window,
          );
        }
        SaveNomination(e, t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.setState({
                eCategoryLoaded: e,
                nomineeAppID: a ? t : null,
              }),
              this.props.previewMode)
            )
              return;
            const n = w.De.STORE_BASE_URL + "steamawards/ajaxnominategame",
              o = new URLSearchParams();
            o.append("sessionid", w.De.SESSIONID),
              o.append("categoryid", e.toString()),
              o.append("nominatedid", t.toString()),
              o.append("rescind", a ? "0" : "1"),
              o.append("source", "4");
            try {
              const e = yield i().post(n, o, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && e.data.success == d.s.k_EResultOK) ||
                console.error("Nomination request failed.", e && (0, u.l)(e));
            } catch (e) {
              const t = (0, u.l)(e);
              console.error("SaveNomination failed: " + t.strErrorMsg, t);
            }
          });
        }
        render() {
          var e, t, a;
          if (
            !this.m_nominationEventDetails ||
            !(null ===
              (e = this.m_nominationEventDetails.rgAwardCategoryDetails) ||
            void 0 === e
              ? void 0
              : e.length)
          )
            return null;
          let n = Math.floor(Date.now() / 1e3);
          if (
            !this.props.previewMode &&
            !this.m_nominationEventDetails.bIsAutumnSaleActive
          )
            return l.createElement(
              "div",
              { className: k().ExpiredEventHeader },
              " ",
              (0, _.Xx)("#SteamAwards_ExpiredEvent"),
              " ",
            );
          let o = {};
          this.m_nominationEventDetails.strBackgroundCSS.length &&
            (o.backgroundColor =
              this.m_nominationEventDetails.strBackgroundCSS),
            this.m_nominationEventDetails.strBackgroundImage.length &&
              (o.backgroundImage = `url( ${this.m_nominationEventDetails.strBackgroundImage} )`);
          const i = this.props.event.GetSteamAwardCategory(),
            r =
              1 ==
              (null ===
                (t = this.m_nominationEventDetails.rgAwardCategoryDetails) ||
              void 0 === t
                ? void 0
                : t.length),
            s =
              this.state.eCategoryLoaded == i &&
              this.state.nomineeAppID == this.props.event.appid,
            d =
              this.props.event.BIsEventActionEnabled() ||
              n < this.props.event.GetStartTimeAndDateUnixSeconds(),
            m = r && (d || s),
            c = new Date().getFullYear();
          return l.createElement(
            "div",
            {
              style: o,
              className: (0, S.Z)(
                k().SteamAwardContainer,
                g().PartnerEventFont,
              ),
            },
            l.createElement(
              "div",
              { className: k().SteamAwardHeader },
              l.createElement("img", {
                className: k().SteamAwardHeaderImage,
                src: `${this.m_nominationEventDetails.strTrophyImg}`,
              }),
              l.createElement(
                "div",
                { className: k().SteamAwardMainCtn },
                l.createElement(
                  "div",
                  { className: k().SteamAwardMainTitle },
                  " ",
                  (0, _.Xx)("#SteamAwards_EventMainTitle"),
                  " ",
                ),
                l.createElement(
                  "div",
                  { className: k().SteamAwardSubTitle },
                  d
                    ? (0, _.Xx)("#SteamAwards_EventCallToAction")
                    : (0, _.Xx)("#SteamAwards_EventVotingDateTeaser", c),
                  d &&
                    l.createElement(
                      "a",
                      {
                        href: (0, N.bk)(
                          w.De.STORE_BASE_URL + "steamawards/nominations/",
                        ),
                        className: k().SteamAwardLearnMore,
                      },
                      "(",
                      (0, _.Xx)("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ),
                ),
                l.createElement(
                  "div",
                  { className: k().SteamAwardHeaderText },
                  d
                    ? r
                      ? (0, _.Xx)(
                          "#SteamAwards_EventNominateGamePrompt_Long",
                          this.props.event.GetGameTitle(this.props.lang),
                        )
                      : l.createElement(
                          "a",
                          {
                            className: k().LinkText,
                            href: (0, N.bk)(
                              w.De.STORE_BASE_URL + "steamawards/nominations/",
                            ),
                          },
                          (0, _.Xx)(
                            "#SteamAwards_EventNominateGamePrompt_NoCategory",
                            this.props.event.GetGameTitle(this.props.lang),
                          ),
                        )
                    : (0, _.Xx)("#SteamAwards_Event_NominationsClosed"),
                ),
              ),
            ),
            m &&
              l.createElement(
                "div",
                { className: k().SteamAwardVoteWidget },
                l.createElement(
                  "div",
                  {
                    style: {
                      background:
                        null === (a = this.m_nominationEventDetails) ||
                        void 0 === a
                          ? void 0
                          : a.strNominateButtonBGColor,
                    },
                    className: k().SteamAwardNominateButton,
                  },
                  l.createElement(v.ji, {
                    ref: this.m_refCheckbox,
                    className: k().SteamAwardVoteCheckBox,
                    checked: s,
                    onChange: this.OnNominateClick,
                    disabled: !d,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "div",
                        { className: k().SteamAwardCategoryTitle },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryTitle,
                      ),
                      l.createElement(
                        "span",
                        { className: k().SteamAwardCategoryDesc },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryDesc,
                      ),
                    ),
                  }),
                ),
                d && i != this.m_nominationEventDetails.eLaborOfLove
                  ? l.createElement(
                      "div",
                      { className: k().SteamAwardLinkToNominationPage },
                      l.createElement(
                        "a",
                        {
                          href: (0, N.bk)(
                            w.De.STORE_BASE_URL + "steamawards/nominations/",
                          ),
                        },
                        " ",
                        (0, _.Xx)(
                          "#SteamAwards_EventNominationAlternativeLinkText",
                        ),
                        " ",
                      ),
                    )
                  : null,
              ),
          );
        }
      };
      (0, n.gn)([r.LO], I.prototype, "m_strPreviousNomineeTitle", void 0),
        (0, n.gn)([r.LO], I.prototype, "m_nominationEventDetails", void 0),
        (0, n.gn)([A.ak], I.prototype, "OnNominateClick", null),
        (0, n.gn)([A.ak], I.prototype, "SaveNomination", null),
        (I = (0, n.gn)([s.Pi], I));
      let L = class extends l.Component {
        OnConfirm() {
          this.props.fnOnConfirm(), this.props.closeModal();
        }
        OnCancel() {
          this.props.fnOnCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        render() {
          const e = l.createElement(
              "span",
              { className: k().SteamAwardModalGameTitle },
              this.props.strNewGameTitle,
            ),
            t = this.props.fnGetOldGameTitle(),
            a = t
              ? l.createElement(
                  "span",
                  { className: k().SteamAwardModalGameTitle },
                  t,
                )
              : l.createElement(D.V, {
                  size: "small",
                  position: "center",
                  string: (0, _.Xx)("#Loading"),
                });
          return l.createElement(C.uH, {
            modalClassName: k().SteamAwardConflictModal,
            bDestructiveWarning: !0,
            strTitle: (0, _.Xx)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Title`,
            ),
            strDescription: (0, _.kQ)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Explanation`,
              a,
              e,
            ),
            onOK: this.OnConfirm,
            onCancel: this.OnCancel,
          });
        }
      };
      (0, n.gn)([A.ak], L.prototype, "OnConfirm", null),
        (0, n.gn)([A.ak], L.prototype, "OnCancel", null),
        (L = (0, n.gn)([s.Pi], L));
      let G = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { eCategoryLoaded: null, votedForAppID: null }),
            (this.m_strPreviousVotedForAppTitle = null),
            (this.m_cancelSignal = i().CancelToken.source());
        }
        componentDidMount() {
          this.FetchVoteState();
        }
        componentDidUpdate() {
          this.props.eVoteCategory != this.state.eCategoryLoaded &&
            this.FetchVoteState();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventDisplaySteamAwardVote is being unmounted",
          );
        }
        FetchVoteState() {
          var e;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = w.De.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
            if (w.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                (null === (e = null == a ? void 0 : a.data) || void 0 === e
                  ? void 0
                  : e.success) == d.s.k_EResultOK &&
                  a.data.votes &&
                  this.UpdateVoteState(a.data.votes);
              } catch (e) {
                const t = (0, u.l)(e);
                console.error(
                  "Could not fetch previous votes:" + t.strErrorMsg,
                  t,
                );
              }
            else this.UpdateVoteState([]);
          });
        }
        UpdateVoteState(e) {
          var t;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = this.props.eVoteCategory,
              n = e[a];
            if (
              (this.setState({ eCategoryLoaded: a, votedForAppID: n }),
              n && n != this.props.appID)
            ) {
              if (
                (yield p.Z.Get().QueueAppRequest(n, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.eVoteCategory == a &&
                (this.m_strPreviousVotedForAppTitle =
                  null === (t = p.Z.Get().GetApp(n)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnVoteClick() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.props.eVoteCategory;
            if (e != this.state.eCategoryLoaded) return;
            if (!V(!0)) return;
            const t = this.props.appID;
            this.state.votedForAppID && this.state.votedForAppID != t
              ? this.HandleConflict(() => this.SaveVote(e, t))
              : this.SaveVote(e, t);
          });
        }
        HandleConflict(e) {
          const t = p.Z.Get().GetApp(this.props.appID);
          (0, E.AM)(
            l.createElement(L, {
              strLocTokenInfix: "Vote",
              strNewGameTitle: null == t ? void 0 : t.GetName(),
              fnGetOldGameTitle: () => this.m_strPreviousVotedForAppTitle,
              fnOnConfirm: e,
              fnOnCancel: () => {},
            }),
            window,
          );
        }
        SaveVote(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.setState({ eCategoryLoaded: e, votedForAppID: t }),
              this.props.previewMode &&
                w.De.EUNIVERSE == m.xO.k_EUniversePublic)
            )
              return;
            const a = w.De.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
              n = new URLSearchParams();
            n.append("sessionid", w.De.SESSIONID),
              n.append("categoryid", e.toString()),
              n.append("appid", t.toString());
            try {
              const e = yield i().post(a, n, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && e.data.success == d.s.k_EResultOK) ||
                console.error("Vote request failed.", e && (0, u.l)(e));
            } catch (e) {
              const t = (0, u.l)(e);
              console.error("SaveVote failed: " + t.strErrorMsg, t);
            }
          });
        }
        render() {
          const e = this.props.eVoteCategory,
            t =
              this.state.eCategoryLoaded == e &&
              this.state.votedForAppID == this.props.appID;
          return this.props.bIsEventActionEnabled || this.props.previewMode || t
            ? l.createElement(
                "div",
                { className: (0, S.Z)(k().SteamAwardVoteWidget) },
                l.createElement("div", { className: k().SteamAwardVotePrompt }),
                l.createElement(
                  "div",
                  { className: k().SteamAwardVoteButtonArea },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        k().SteamAwardCategoryTitle,
                        k().VotingTitle,
                      ),
                    },
                    this.props.strCategoryTitle,
                  ),
                  !this.props.bRenderFromStorePage &&
                    l.createElement(
                      "span",
                      { className: k().SteamAwardCategoryDesc },
                      this.props.strCategoryDesc,
                    ),
                  t
                    ? l.createElement(
                        "div",
                        { className: k().SteamAwardVoteButtonSubmitted },
                        l.createElement(
                          "span",
                          { className: k().SteamAwardVoteButtonText },
                          (0, _.Xx)("#SteamAward_VoteButton_VotedText"),
                        ),
                      )
                    : l.createElement(
                        "button",
                        {
                          className: k().SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        l.createElement(
                          "span",
                          { className: k().SteamAwardVoteButtonText },
                          (0, _.Xx)("#SteamAward_VoteButton_PromptText"),
                        ),
                      ),
                ),
              )
            : null;
        }
      };
      (0, n.gn)([r.LO], G.prototype, "m_strPreviousVotedForAppTitle", void 0),
        (0, n.gn)([A.ak], G.prototype, "OnVoteClick", null),
        (0, n.gn)([A.ak], G.prototype, "SaveVote", null),
        (G = (0, n.gn)([s.Pi], G));
      class b extends l.Component {
        constructor(e) {
          super(e);
          let t = (0, w.kQ)("steamwawards", "application_config");
          this.m_voteCategories = null == t ? void 0 : t.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? l.createElement(O, {
                appID: this.props.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: this.m_voteCategories,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${this.props.appID}`,
              ),
              null);
        }
      }
      let O = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_awardEventDetails = null),
            (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          p.Z.Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              p.Z.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            x(this.props.voteCategories, this.m_cancelSignal).then((e) => {
              this.m_awardEventDetails = e;
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "WinterSaleSteamAwardVoteWrapper is being unmounted",
          );
        }
        GetNominatedAwardCategories() {
          var e;
          let t = [];
          return (
            null === (e = this.m_awardEventDetails.rgAwardCategoryDetails) ||
              void 0 === e ||
              e.forEach((e) => {
                t.push(
                  l.createElement(
                    G,
                    Object.assign(
                      {
                        key: e.eSteamAwardCategoryID,
                        eVoteCategory: e.eSteamAwardCategoryID,
                        strCategoryDesc: e.strSuggestedCategoryDesc,
                        strCategoryTitle: e.strSuggestedCategoryTitle,
                      },
                      this.props,
                    ),
                  ),
                );
              }),
            t
          );
        }
        render() {
          var e;
          if (!this.state.bAppInfoLoaded || !this.props.voteCategories)
            return null;
          if (!this.m_awardEventDetails) return null;
          let t = {};
          return (
            this.m_awardEventDetails.strBackgroundCSS.length &&
              (t.backgroundColor = this.m_awardEventDetails.strBackgroundCSS),
            this.m_awardEventDetails.strBackgroundImage.length &&
              (t.backgroundImage = `url( ${this.m_awardEventDetails.strBackgroundImage} )`),
            l.createElement(
              "div",
              {
                style: t,
                className: (0, S.Z)(
                  k().SteamAwardContainer,
                  g().PartnerEventFont,
                ),
              },
              l.createElement(
                "div",
                { className: k().SteamAwardHeader },
                l.createElement("img", {
                  className: k().SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                l.createElement(
                  "div",
                  { className: k().SteamAwardMainCtn },
                  l.createElement(
                    "div",
                    { className: k().SteamAwardMainTitle },
                    " ",
                    (0, _.Xx)("#SteamAwards_EventMainTitleCombined"),
                    " ",
                  ),
                  l.createElement(
                    "div",
                    { className: k().SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? l.createElement(
                          l.Fragment,
                          null,
                          (0, _.Xx)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            null === (e = p.Z.Get().GetApp(this.props.appID)) ||
                              void 0 === e
                              ? void 0
                              : e.GetName(),
                          ),
                          l.createElement(
                            "a",
                            {
                              href: (0, N.bk)(
                                w.De.STORE_BASE_URL + "steamawards/",
                              ),
                              className: (0, S.Z)(
                                k().SteamAwardLearnMore,
                                k().BottomRight,
                              ),
                            },
                            (0, _.Xx)("#EventDisplay_CallToAction_LearnMore"),
                          ),
                        )
                      : l.createElement(
                          "a",
                          {
                            href: (0, N.bk)(
                              w.De.STORE_BASE_URL + "steamawards/",
                            ),
                            className: k().LinkText,
                          },
                          (0, _.Xx)("#SteamAwards_Event_VotesClosed"),
                        ),
                  ),
                  l.createElement(
                    "div",
                    { className: k().AwardCategoriesCtn },
                    this.GetNominatedAwardCategories(),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, n.gn)([r.LO], O.prototype, "m_awardEventDetails", void 0),
        (O = (0, n.gn)([s.Pi], O));
    },
  },
]);
