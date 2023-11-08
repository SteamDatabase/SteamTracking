/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2420],
  {
    6864: (e) => {
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
          ConfirmOverwriteVoteOrNominationDialog: () => V,
          EventDisplaySteamAwardNomination: () => k,
          EventDisplaySteamAwardVote: () => L,
          WinterSaleSteamAwardVoteWrapper: () => G,
          default: () => x,
        });
      var n = a(33940),
        o = a(52868),
        i = a.n(o),
        r = a(50265),
        s = a(88464),
        d = a(89526),
        l = a(92616),
        m = a(57605),
        c = a(17318),
        p = a.n(c),
        v = a(23217),
        h = a(19304),
        g = a(14826),
        S = a(4306),
        u = a(32765),
        _ = a(99307),
        A = a(57742),
        w = a(69338),
        C = a(5557),
        E = a(6864),
        D = a.n(E),
        T = a(32905),
        f = a(207);
      function y(e) {
        return u.L7.logged_in
          ? !u.L7.is_limited ||
              ((0, A.AM)(
                d.createElement(C.r, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window,
              ),
              !1)
          : ((0, A.AM)(
              d.createElement(_.uH, {
                strTitle: (0, g.Xx)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, g.Xx)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, g.Xx)("#MobileLogin_SignIn"),
                onOK: T.X,
              }),
              window,
            ),
            !1);
      }
      function N(e, t) {
        var a, o;
        return (0, n.mG)(this, void 0, void 0, function* () {
          const n =
              u.De.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
            r = { rgCategories: e };
          try {
            const e = yield i().get(n, {
              params: r,
              withCredentials: !1,
              cancelToken: t.token,
            });
            if (t.token.reason) return null;
            if (
              1 ==
                (null === (a = null == e ? void 0 : e.data) || void 0 === a
                  ? void 0
                  : a.success) &&
              (null === (o = null == e ? void 0 : e.data) || void 0 === o
                ? void 0
                : o.event_details)
            )
              return e.data.event_details;
          } catch (e) {
            const t = (0, v.l)(e);
            console.error(
              "Could not fetch award event details:" + t.strErrorMsg,
              t,
            );
          }
          return null;
        });
      }
      let k = class extends d.Component {
        constructor() {
          super(...arguments),
            (this.state = { eCategoryLoaded: null, nomineeAppID: null }),
            (this.m_strPreviousNomineeTitle = null),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_refCheckbox = d.createRef()),
            (this.m_nominationEventDetails = null);
        }
        componentDidMount() {
          this.FetchNominationState(),
            N(
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
            if (0 == this.props.event.GetSteamAwardCategory())
              return void this.setState({
                eCategoryLoaded: 0,
                nomineeAppID: null,
              });
            const t =
              u.De.STORE_BASE_URL + "steamawards/ajaxgetusernominations";
            if (u.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == a ? void 0 : a.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  a.data.nominations &&
                  this.ProcessNominations(a.data.nominations);
              } catch (e) {
                const t = (0, v.l)(e);
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
                (yield l.Z.Get().QueueAppRequest(o, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.event.GetSteamAwardCategory() == a &&
                (this.m_strPreviousNomineeTitle =
                  null === (t = l.Z.Get().GetApp(o)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnNominateClick(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = this.props.event.GetSteamAwardCategory();
            if (t != this.state.eCategoryLoaded) return;
            if (!y(!1)) return;
            const a = this.props.event.appid;
            this.state.nomineeAppID && this.state.nomineeAppID != a
              ? e && this.HandleConflict(() => this.SaveNomination(t, a, e))
              : this.SaveNomination(t, a, e);
          });
        }
        HandleConflict(e) {
          (0, A.AM)(
            d.createElement(V, {
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
            const n = u.De.STORE_BASE_URL + "steamawards/ajaxnominategame",
              o = new URLSearchParams();
            o.append("sessionid", u.De.SESSIONID),
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
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error("Nomination request failed.", e && (0, v.l)(e));
            } catch (e) {
              const t = (0, v.l)(e);
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
            return d.createElement(
              "div",
              { className: D().ExpiredEventHeader },
              " ",
              (0, g.Xx)("#SteamAwards_ExpiredEvent"),
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
            l =
              this.props.event.BIsEventActionEnabled() ||
              n < this.props.event.GetStartTimeAndDateUnixSeconds(),
            c = r && (l || s),
            v = new Date().getFullYear();
          return d.createElement(
            "div",
            {
              style: o,
              className: (0, h.Z)(
                D().SteamAwardContainer,
                p().PartnerEventFont,
              ),
            },
            d.createElement(
              "div",
              { className: D().SteamAwardHeader },
              d.createElement("img", {
                className: D().SteamAwardHeaderImage,
                src: `${this.m_nominationEventDetails.strTrophyImg}`,
              }),
              d.createElement(
                "div",
                { className: D().SteamAwardMainCtn },
                d.createElement(
                  "div",
                  { className: D().SteamAwardMainTitle },
                  " ",
                  (0, g.Xx)("#SteamAwards_EventMainTitle"),
                  " ",
                ),
                d.createElement(
                  "div",
                  { className: D().SteamAwardSubTitle },
                  l
                    ? (0, g.Xx)("#SteamAwards_EventCallToAction")
                    : (0, g.Xx)("#SteamAwards_EventVotingDateTeaser", v),
                  l &&
                    d.createElement(
                      "a",
                      {
                        href: (0, f.bk)(
                          u.De.STORE_BASE_URL + "steamawards/nominations/",
                        ),
                        className: D().SteamAwardLearnMore,
                      },
                      "(",
                      (0, g.Xx)("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ),
                ),
                d.createElement(
                  "div",
                  { className: D().SteamAwardHeaderText },
                  l
                    ? r
                      ? (0, g.Xx)(
                          "#SteamAwards_EventNominateGamePrompt_Long",
                          this.props.event.GetGameTitle(this.props.lang),
                        )
                      : d.createElement(
                          "a",
                          {
                            className: D().LinkText,
                            href: (0, f.bk)(
                              u.De.STORE_BASE_URL + "steamawards/nominations/",
                            ),
                          },
                          (0, g.Xx)(
                            "#SteamAwards_EventNominateGamePrompt_NoCategory",
                            this.props.event.GetGameTitle(this.props.lang),
                          ),
                        )
                    : (0, g.Xx)("#SteamAwards_Event_NominationsClosed"),
                ),
              ),
            ),
            c &&
              d.createElement(
                "div",
                { className: D().SteamAwardVoteWidget },
                d.createElement(
                  "div",
                  {
                    style: {
                      background:
                        null === (a = this.m_nominationEventDetails) ||
                        void 0 === a
                          ? void 0
                          : a.strNominateButtonBGColor,
                    },
                    className: D().SteamAwardNominateButton,
                  },
                  d.createElement(m.ji, {
                    ref: this.m_refCheckbox,
                    className: D().SteamAwardVoteCheckBox,
                    checked: s,
                    onChange: this.OnNominateClick,
                    disabled: !l,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        "div",
                        { className: D().SteamAwardCategoryTitle },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryTitle,
                      ),
                      d.createElement(
                        "span",
                        { className: D().SteamAwardCategoryDesc },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryDesc,
                      ),
                    ),
                  }),
                ),
                l && i != this.m_nominationEventDetails.eLaborOfLove
                  ? d.createElement(
                      "div",
                      { className: D().SteamAwardLinkToNominationPage },
                      d.createElement(
                        "a",
                        {
                          href: (0, f.bk)(
                            u.De.STORE_BASE_URL + "steamawards/nominations/",
                          ),
                        },
                        " ",
                        (0, g.Xx)(
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
      (0, n.gn)([r.LO], k.prototype, "m_strPreviousNomineeTitle", void 0),
        (0, n.gn)([r.LO], k.prototype, "m_nominationEventDetails", void 0),
        (0, n.gn)([S.ak], k.prototype, "OnNominateClick", null),
        (0, n.gn)([S.ak], k.prototype, "SaveNomination", null),
        (k = (0, n.gn)([s.Pi], k));
      let V = class extends d.Component {
        OnConfirm() {
          this.props.fnOnConfirm(), this.props.closeModal();
        }
        OnCancel() {
          this.props.fnOnCancel(),
            this.props.closeModal && this.props.closeModal();
        }
        render() {
          const e = d.createElement(
              "span",
              { className: D().SteamAwardModalGameTitle },
              this.props.strNewGameTitle,
            ),
            t = this.props.fnGetOldGameTitle(),
            a = t
              ? d.createElement(
                  "span",
                  { className: D().SteamAwardModalGameTitle },
                  t,
                )
              : d.createElement(w.V, {
                  size: "small",
                  position: "center",
                  string: (0, g.Xx)("#Loading"),
                });
          return d.createElement(_.uH, {
            modalClassName: D().SteamAwardConflictModal,
            bDestructiveWarning: !0,
            strTitle: (0, g.Xx)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Title`,
            ),
            strDescription: (0, g.kQ)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Explanation`,
              a,
              e,
            ),
            onOK: this.OnConfirm,
            onCancel: this.OnCancel,
          });
        }
      };
      (0, n.gn)([S.ak], V.prototype, "OnConfirm", null),
        (0, n.gn)([S.ak], V.prototype, "OnCancel", null),
        (V = (0, n.gn)([s.Pi], V));
      let L = class extends d.Component {
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
            const t = u.De.STORE_BASE_URL + "steamawards/ajaxgetuservotes";
            if (u.L7.logged_in)
              try {
                const a = yield i().get(t, {
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == a ? void 0 : a.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  a.data.votes &&
                  this.UpdateVoteState(a.data.votes);
              } catch (e) {
                const t = (0, v.l)(e);
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
                (yield l.Z.Get().QueueAppRequest(n, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.eVoteCategory == a &&
                (this.m_strPreviousVotedForAppTitle =
                  null === (t = l.Z.Get().GetApp(n)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnVoteClick() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.props.eVoteCategory;
            if (e != this.state.eCategoryLoaded) return;
            if (!y(!0)) return;
            const t = this.props.appID;
            this.state.votedForAppID && this.state.votedForAppID != t
              ? this.HandleConflict(() => this.SaveVote(e, t))
              : this.SaveVote(e, t);
          });
        }
        HandleConflict(e) {
          const t = l.Z.Get().GetApp(this.props.appID);
          (0, A.AM)(
            d.createElement(V, {
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
              this.props.previewMode && 1 == u.De.EUNIVERSE)
            )
              return;
            const a = u.De.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
              n = new URLSearchParams();
            n.append("sessionid", u.De.SESSIONID),
              n.append("categoryid", e.toString()),
              n.append("appid", t.toString());
            try {
              const e = yield i().post(a, n, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error("Vote request failed.", e && (0, v.l)(e));
            } catch (e) {
              const t = (0, v.l)(e);
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
            ? d.createElement(
                "div",
                { className: (0, h.Z)(D().SteamAwardVoteWidget) },
                d.createElement("div", { className: D().SteamAwardVotePrompt }),
                d.createElement(
                  "div",
                  { className: D().SteamAwardVoteButtonArea },
                  d.createElement(
                    "div",
                    {
                      className: (0, h.Z)(
                        D().SteamAwardCategoryTitle,
                        D().VotingTitle,
                      ),
                    },
                    this.props.strCategoryTitle,
                  ),
                  !this.props.bRenderFromStorePage &&
                    d.createElement(
                      "span",
                      { className: D().SteamAwardCategoryDesc },
                      this.props.strCategoryDesc,
                    ),
                  t
                    ? d.createElement(
                        "div",
                        { className: D().SteamAwardVoteButtonSubmitted },
                        d.createElement(
                          "span",
                          { className: D().SteamAwardVoteButtonText },
                          (0, g.Xx)("#SteamAward_VoteButton_VotedText"),
                        ),
                      )
                    : d.createElement(
                        "button",
                        {
                          className: D().SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        d.createElement(
                          "span",
                          { className: D().SteamAwardVoteButtonText },
                          (0, g.Xx)("#SteamAward_VoteButton_PromptText"),
                        ),
                      ),
                ),
              )
            : null;
        }
      };
      (0, n.gn)([r.LO], L.prototype, "m_strPreviousVotedForAppTitle", void 0),
        (0, n.gn)([S.ak], L.prototype, "OnVoteClick", null),
        (0, n.gn)([S.ak], L.prototype, "SaveVote", null),
        (L = (0, n.gn)([s.Pi], L));
      class x extends d.Component {
        constructor(e) {
          super(e);
          let t = (0, u.kQ)("steamwawards", "application_config");
          this.m_voteCategories = null == t ? void 0 : t.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? d.createElement(G, {
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
      let G = class extends d.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = i().CancelToken.source()),
            (this.m_awardEventDetails = null),
            (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          l.Z.Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              l.Z.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            N(this.props.voteCategories, this.m_cancelSignal).then((e) => {
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
                  d.createElement(
                    L,
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
            d.createElement(
              "div",
              {
                style: t,
                className: (0, h.Z)(
                  D().SteamAwardContainer,
                  p().PartnerEventFont,
                ),
              },
              d.createElement(
                "div",
                { className: D().SteamAwardHeader },
                d.createElement("img", {
                  className: D().SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                d.createElement(
                  "div",
                  { className: D().SteamAwardMainCtn },
                  d.createElement(
                    "div",
                    { className: D().SteamAwardMainTitle },
                    " ",
                    (0, g.Xx)("#SteamAwards_EventMainTitleCombined"),
                    " ",
                  ),
                  d.createElement(
                    "div",
                    { className: D().SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? d.createElement(
                          d.Fragment,
                          null,
                          (0, g.Xx)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            null === (e = l.Z.Get().GetApp(this.props.appID)) ||
                              void 0 === e
                              ? void 0
                              : e.GetName(),
                          ),
                          d.createElement(
                            "a",
                            {
                              href: (0, f.bk)(
                                u.De.STORE_BASE_URL + "steamawards/",
                              ),
                              className: (0, h.Z)(
                                D().SteamAwardLearnMore,
                                D().BottomRight,
                              ),
                            },
                            (0, g.Xx)("#EventDisplay_CallToAction_LearnMore"),
                          ),
                        )
                      : d.createElement(
                          "a",
                          {
                            href: (0, f.bk)(
                              u.De.STORE_BASE_URL + "steamawards/",
                            ),
                            className: D().LinkText,
                          },
                          (0, g.Xx)("#SteamAwards_Event_VotesClosed"),
                        ),
                  ),
                  d.createElement(
                    "div",
                    { className: D().AwardCategoriesCtn },
                    this.GetNominatedAwardCategories(),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, n.gn)([r.LO], G.prototype, "m_awardEventDetails", void 0),
        (G = (0, n.gn)([s.Pi], G));
    },
  },
]);
