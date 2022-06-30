/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "+zS6": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "EventDisplaySteamAwardNomination", function () {
          return N;
        }),
        a.d(t, "ConfirmOverwriteVoteOrNominationDialog", function () {
          return f;
        }),
        a.d(t, "EventDisplaySteamAwardVote", function () {
          return B;
        }),
        a.d(t, "default", function () {
          return I;
        }),
        a.d(t, "WinterSaleSteamAwardVoteWrapper", function () {
          return V;
        });
      var n = a("mrSG"),
        r = a("vDqi"),
        i = a.n(r),
        o = a("2vnA"),
        s = a("TyAF"),
        l = a("q1tI"),
        d = (a("msu0"), a("Zdsb"), a("XrGS"), a("Sm9X"), a("Ys0h")),
        p = a("7ast"),
        m = a("+VGL"),
        c = a.n(m),
        v = a("TqgT"),
        _ = a("GbHM"),
        g = a("GXif"),
        u = a("hCpY"),
        S = a("/Q1a"),
        h = a("thkD"),
        y = a("jIgc"),
        A = a("kWcV"),
        E = a("iCjI"),
        C = a("/OjQ"),
        w = a.n(C),
        D = a("6qRO"),
        T = a.n(D),
        b = a("tXj3");
      function k(e) {
        return S.l.logged_in
          ? !S.l.is_limited ||
              (Object(y.d)(
                l.createElement(E.a, {
                  strTokenOverride: e
                    ? "#SteamAward_Vote_LimitedAccount"
                    : "#SteamAward_Nominate_LimitedAccount",
                }),
                window
              ),
              !1)
          : (Object(y.d)(
              l.createElement(h.e, {
                strTitle: Object(g.g)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: Object(g.g)(
                  "#EventDisplay_Share_NotLoggedIn_Description"
                ),
                strOKButtonText: Object(g.g)("#MobileLogin_SignIn"),
                onOK: b.a,
              }),
              window
            ),
            !1);
      }
      function O(e, t) {
        var a, r;
        return Object(n.a)(this, void 0, void 0, function* () {
          const n =
              S.d.STORE_BASE_URL + "steamawards/ajaxgetsteamawardeventdetails",
            o = { rgCategories: e };
          try {
            const e = yield i.a.get(n, {
              params: o,
              withCredentials: !1,
              cancelToken: t.token,
            });
            if (t.token.reason) return null;
            if (
              1 ==
                (null === (a = null == e ? void 0 : e.data) || void 0 === a
                  ? void 0
                  : a.success) &&
              (null === (r = null == e ? void 0 : e.data) || void 0 === r
                ? void 0
                : r.event_details)
            )
              return e.data.event_details;
          } catch (e) {
            const t = Object(v.a)(e);
            console.error(
              "Could not fetch award event details:" + t.strErrorMsg,
              t
            );
          }
          return null;
        });
      }
      let N = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { eCategoryLoaded: null, nomineeAppID: null }),
            (this.m_strPreviousNomineeTitle = null),
            (this.m_cancelSignal = i.a.CancelToken.source()),
            (this.m_refCheckbox = l.createRef()),
            (this.m_nominationEventDetails = null);
        }
        componentDidMount() {
          this.FetchNominationState(),
            O(
              [this.props.event.GetSteamAwardCategory()],
              this.m_cancelSignal
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
            "EventDisplaySteamAwardNomination is being unmounted"
          );
        }
        FetchNominationState() {
          var e;
          return Object(n.a)(this, void 0, void 0, function* () {
            if (0 == this.props.event.GetSteamAwardCategory())
              return void this.setState({
                eCategoryLoaded: 0,
                nomineeAppID: null,
              });
            const t = S.d.STORE_BASE_URL + "steamawards/ajaxgetusernominations",
              a = { sessionid: S.d.SESSIONID, authwgtoken: S.l.authwgtoken };
            if (S.l.logged_in)
              try {
                const n = yield i.a.get(t, {
                  params: a,
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == n ? void 0 : n.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  n.data.nominations &&
                  this.ProcessNominations(n.data.nominations);
              } catch (e) {
                const t = Object(v.a)(e);
                console.error(
                  "Could not fetch previous nominations:" + t.strErrorMsg,
                  t
                );
              }
            else this.ProcessNominations([]);
          });
        }
        ProcessNominations(e) {
          var t;
          return Object(n.a)(this, void 0, void 0, function* () {
            const a = this.props.event.GetSteamAwardCategory(),
              n = e[a],
              r = n && n.appid;
            if (
              (this.setState({ eCategoryLoaded: a, nomineeAppID: r }),
              r && r != this.props.event.appid)
            ) {
              if (
                (yield d.a.Get().QueueAppRequest(r, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.event.GetSteamAwardCategory() == a &&
                (this.m_strPreviousNomineeTitle =
                  null === (t = d.a.Get().GetApp(r)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnNominateClick(e) {
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = this.props.event.GetSteamAwardCategory();
            if (t != this.state.eCategoryLoaded) return;
            if (!k(!1)) return;
            const a = this.props.event.appid;
            this.state.nomineeAppID && this.state.nomineeAppID != a
              ? e && this.HandleConflict(() => this.SaveNomination(t, a, e))
              : this.SaveNomination(t, a, e);
          });
        }
        HandleConflict(e) {
          Object(y.d)(
            l.createElement(f, {
              strLocTokenInfix: "Nomination",
              strNewGameTitle: this.props.event.GetGameTitle(this.props.lang),
              fnGetOldGameTitle: () => this.m_strPreviousNomineeTitle,
              fnOnConfirm: e,
              fnOnCancel: () =>
                this.m_refCheckbox.current &&
                this.m_refCheckbox.current.checked &&
                this.m_refCheckbox.current.Toggle(),
            }),
            window
          );
        }
        SaveNomination(e, t, a) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (
              (this.setState({
                eCategoryLoaded: e,
                nomineeAppID: a ? t : null,
              }),
              this.props.previewMode)
            )
              return;
            const n = S.d.STORE_BASE_URL + "steamawards/ajaxnominategame",
              r = new URLSearchParams();
            r.append("sessionid", S.d.SESSIONID),
              r.append("authwgtoken", S.l.authwgtoken),
              r.append("categoryid", e.toString()),
              r.append("nominatedid", t.toString()),
              r.append("rescind", a ? "0" : "1"),
              r.append("source", "4");
            try {
              const e = yield i.a.post(n, r, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error(
                  "Nomination request failed.",
                  e && Object(v.a)(e)
                );
            } catch (e) {
              const t = Object(v.a)(e);
              console.error("SaveNomination failed: " + t.strErrorMsg, t);
            }
          });
        }
        render() {
          var e;
          if (
            !this.m_nominationEventDetails ||
            !(null ===
              (e = this.m_nominationEventDetails.rgAwardCategoryDetails) ||
            void 0 === e
              ? void 0
              : e.length)
          )
            return null;
          let t = Math.floor(Date.now() / 1e3);
          if (
            !this.props.previewMode &&
            !this.m_nominationEventDetails.bIsAutumnSaleActive
          )
            return l.createElement(
              "div",
              { className: w.a.ExpiredEventHeader },
              " ",
              Object(g.g)("#SteamAwards_ExpiredEvent"),
              " "
            );
          let a = {};
          this.m_nominationEventDetails.strBackgroundCSS.length &&
            (a.backgroundColor =
              this.m_nominationEventDetails.strBackgroundCSS),
            this.m_nominationEventDetails.strBackgroundImage.length &&
              (a.backgroundImage = `url( ${this.m_nominationEventDetails.strBackgroundImage} )`);
          const n = this.props.event.GetSteamAwardCategory(),
            r =
              n >= this.m_nominationEventDetails.eSteamAwardCategoryIDMin &&
              n < this.m_nominationEventDetails.eSteamAwardCategoryIDMax,
            i =
              this.state.eCategoryLoaded == n &&
              this.state.nomineeAppID == this.props.event.appid,
            o =
              this.props.event.BIsEventActionEnabled() ||
              t < this.props.event.GetStartTimeAndDateUnixSeconds(),
            s = r && (o || i),
            d = new Date().getFullYear();
          return l.createElement(
            "div",
            {
              style: a,
              className: Object(_.a)(
                w.a.SteamAwardContainer,
                c.a.PartnerEventFont
              ),
            },
            l.createElement(
              "div",
              { className: w.a.SteamAwardHeader },
              l.createElement("img", {
                className: w.a.SteamAwardHeaderImage,
                src: `${this.m_nominationEventDetails.strTrophyImg}`,
              }),
              l.createElement(
                "div",
                { className: w.a.SteamAwardMainCtn },
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardMainTitle },
                  " ",
                  Object(g.g)("#SteamAwards_EventMainTitle"),
                  " "
                ),
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardSubTitle },
                  o
                    ? Object(g.g)("#SteamAwards_EventCallToAction")
                    : Object(g.g)("#SteamAwards_EventVotingDateTeaser", d),
                  o &&
                    l.createElement(
                      "a",
                      {
                        href: S.d.STORE_BASE_URL + "steamawards/nominations/",
                        className: w.a.SteamAwardLearnMore,
                      },
                      "(",
                      Object(g.g)("#EventDisplay_CallToAction_LearnMore"),
                      ")"
                    )
                ),
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardHeaderText },
                  o
                    ? r
                      ? Object(g.g)(
                          "#SteamAwards_EventNominateGamePrompt_Long",
                          this.props.event.GetGameTitle(this.props.lang)
                        )
                      : l.createElement(
                          "a",
                          {
                            className: T.a.LinkText,
                            href:
                              S.d.STORE_BASE_URL + "steamawards/nominations/",
                          },
                          Object(g.g)(
                            "#SteamAwards_EventNominateGamePrompt_NoCategory",
                            this.props.event.GetGameTitle(this.props.lang)
                          )
                        )
                    : Object(g.g)("#SteamAwards_Event_NominationsClosed")
                )
              )
            ),
            s &&
              l.createElement(
                "div",
                { className: w.a.SteamAwardVoteWidget },
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardNominateButton },
                  l.createElement(p.f, {
                    ref: this.m_refCheckbox,
                    className: w.a.SteamAwardVoteCheckBox,
                    checked: i,
                    onChange: this.OnNominateClick,
                    disabled: !o,
                    color: "#FFFFFF",
                    highlightColor: "white",
                    label: l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(
                        "div",
                        { className: w.a.SteamAwardCategoryTitle },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryTitle
                      ),
                      l.createElement(
                        "span",
                        { className: w.a.SteamAwardCategoryDesc },
                        this.m_nominationEventDetails.rgAwardCategoryDetails[0]
                          .strSuggestedCategoryDesc
                      )
                    ),
                  })
                ),
                o && n != this.m_nominationEventDetails.eLaborOfLove
                  ? l.createElement(
                      "div",
                      { className: w.a.SteamAwardLinkToNominationPage },
                      l.createElement(
                        "a",
                        {
                          href: S.d.STORE_BASE_URL + "steamawards/nominations/",
                        },
                        " ",
                        Object(g.g)(
                          "#SteamAwards_EventNominationAlternativeLinkText"
                        ),
                        " "
                      )
                    )
                  : null
              )
          );
        }
      };
      Object(n.b)([o.C], N.prototype, "m_strPreviousNomineeTitle", void 0),
        Object(n.b)([o.C], N.prototype, "m_nominationEventDetails", void 0),
        Object(n.b)([u.b], N.prototype, "OnNominateClick", null),
        Object(n.b)([u.b], N.prototype, "SaveNomination", null),
        (N = Object(n.b)([s.a], N));
      let f = class extends l.Component {
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
              { className: w.a.SteamAwardModalGameTitle },
              this.props.strNewGameTitle
            ),
            t = this.props.fnGetOldGameTitle(),
            a = t
              ? l.createElement(
                  "span",
                  { className: w.a.SteamAwardModalGameTitle },
                  t
                )
              : l.createElement(A.a, {
                  size: "small",
                  position: "center",
                  string: Object(g.g)("#Loading"),
                });
          return l.createElement(h.e, {
            bDestructiveWarning: !0,
            strTitle: Object(g.g)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Title`
            ),
            strDescription: Object(g.p)(
              `#SteamAward_${this.props.strLocTokenInfix}ConflictWarning_Explanation`,
              a,
              e
            ),
            onOK: this.OnConfirm,
            onCancel: this.OnCancel,
          });
        }
      };
      Object(n.b)([u.b], f.prototype, "OnConfirm", null),
        Object(n.b)([u.b], f.prototype, "OnCancel", null),
        (f = Object(n.b)([s.a], f));
      let B = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.state = { eCategoryLoaded: null, votedForAppID: null }),
            (this.m_strPreviousVotedForAppTitle = null),
            (this.m_cancelSignal = i.a.CancelToken.source());
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
            "EventDisplaySteamAwardVote is being unmounted"
          );
        }
        FetchVoteState() {
          var e;
          return Object(n.a)(this, void 0, void 0, function* () {
            const t = S.d.STORE_BASE_URL + "steamawards/ajaxgetuservotes",
              a = { sessionid: S.d.SESSIONID, authwgtoken: S.l.authwgtoken };
            if (S.l.logged_in)
              try {
                const n = yield i.a.get(t, {
                  params: a,
                  withCredentials: !0,
                  cancelToken: this.m_cancelSignal.token,
                });
                if (this.m_cancelSignal.token.reason) return;
                1 ==
                  (null === (e = null == n ? void 0 : n.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                  n.data.votes &&
                  this.UpdateVoteState(n.data.votes);
              } catch (e) {
                const t = Object(v.a)(e);
                console.error(
                  "Could not fetch previous votes:" + t.strErrorMsg,
                  t
                );
              }
            else this.UpdateVoteState([]);
          });
        }
        UpdateVoteState(e) {
          var t;
          return Object(n.a)(this, void 0, void 0, function* () {
            const a = this.props.eVoteCategory,
              n = e[a];
            if (
              (this.setState({ eCategoryLoaded: a, votedForAppID: n }),
              n && n != this.props.appID)
            ) {
              if (
                (yield d.a.Get().QueueAppRequest(n, {}),
                this.m_cancelSignal.token.reason)
              )
                return;
              this.props.eVoteCategory == a &&
                (this.m_strPreviousVotedForAppTitle =
                  null === (t = d.a.Get().GetApp(n)) || void 0 === t
                    ? void 0
                    : t.GetName());
            }
          });
        }
        OnVoteClick() {
          return Object(n.a)(this, void 0, void 0, function* () {
            const e = this.props.eVoteCategory;
            if (e != this.state.eCategoryLoaded) return;
            if (!k(!0)) return;
            const t = this.props.appID;
            this.state.votedForAppID && this.state.votedForAppID != t
              ? this.HandleConflict(() => this.SaveVote(e, t))
              : this.SaveVote(e, t);
          });
        }
        HandleConflict(e) {
          const t = d.a.Get().GetApp(this.props.appID);
          Object(y.d)(
            l.createElement(f, {
              strLocTokenInfix: "Vote",
              strNewGameTitle: null == t ? void 0 : t.GetName(),
              fnGetOldGameTitle: () => this.m_strPreviousVotedForAppTitle,
              fnOnConfirm: e,
              fnOnCancel: () => {},
            }),
            window
          );
        }
        SaveVote(e, t) {
          return Object(n.a)(this, void 0, void 0, function* () {
            if (
              (this.setState({ eCategoryLoaded: e, votedForAppID: t }),
              this.props.previewMode && 1 == S.d.EUNIVERSE)
            )
              return;
            const a = S.d.STORE_BASE_URL + "steamawards/ajaxvoteforgame",
              n = new URLSearchParams();
            n.append("sessionid", S.d.SESSIONID),
              n.append("authwgtoken", S.l.authwgtoken),
              n.append("categoryid", e.toString()),
              n.append("appid", t.toString());
            try {
              const e = yield i.a.post(a, n, {
                withCredentials: !0,
                cancelToken: this.m_cancelSignal.token,
              });
              if (this.m_cancelSignal.token.reason) return;
              (e && 200 == e.status && 1 == e.data.success) ||
                console.error("Vote request failed.", e && Object(v.a)(e));
            } catch (e) {
              const t = Object(v.a)(e);
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
                { className: Object(_.a)(w.a.SteamAwardVoteWidget) },
                l.createElement("div", { className: w.a.SteamAwardVotePrompt }),
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardVoteButtonArea },
                  l.createElement(
                    "div",
                    {
                      className: Object(_.a)(
                        w.a.SteamAwardCategoryTitle,
                        w.a.VotingTitle
                      ),
                    },
                    this.props.strCategoryTitle
                  ),
                  !this.props.bRenderFromStorePage &&
                    l.createElement(
                      "span",
                      { className: w.a.SteamAwardCategoryDesc },
                      this.props.strCategoryDesc
                    ),
                  t
                    ? l.createElement(
                        "div",
                        { className: w.a.SteamAwardVoteButtonSubmitted },
                        l.createElement(
                          "span",
                          { className: w.a.SteamAwardVoteButtonText },
                          Object(g.g)("#SteamAward_VoteButton_VotedText")
                        )
                      )
                    : l.createElement(
                        "button",
                        {
                          className: w.a.SteamAwardVoteButton,
                          onClick: this.OnVoteClick,
                        },
                        l.createElement(
                          "span",
                          { className: w.a.SteamAwardVoteButtonText },
                          Object(g.g)("#SteamAward_VoteButton_PromptText")
                        )
                      )
                )
              )
            : null;
        }
      };
      Object(n.b)([o.C], B.prototype, "m_strPreviousVotedForAppTitle", void 0),
        Object(n.b)([u.b], B.prototype, "OnVoteClick", null),
        Object(n.b)([u.b], B.prototype, "SaveVote", null),
        (B = Object(n.b)([s.a], B));
      class I extends l.Component {
        constructor(e) {
          super(e);
          let t = Object(S.h)("steamwawards", "application_config");
          this.m_voteCategories = null == t ? void 0 : t.votecategories;
        }
        render() {
          return this.m_voteCategories
            ? l.createElement(V, {
                appID: this.props.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: this.m_voteCategories,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${this.props.appID}`
              ),
              null);
        }
      }
      let V = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_cancelSignal = i.a.CancelToken.source()),
            (this.m_awardEventDetails = null),
            (this.state = { bAppInfoLoaded: !1 });
        }
        componentDidMount() {
          d.a
            .Get()
            .QueueAppRequest(this.props.appID, {})
            .then(() => {
              d.a.Get().BHasApp(this.props.appID) &&
                this.setState({ bAppInfoLoaded: !0 });
            }),
            O(this.props.voteCategories, this.m_cancelSignal).then((e) => {
              this.m_awardEventDetails = e;
            });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "WinterSaleSteamAwardVoteWrapper is being unmounted"
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
                    B,
                    Object.assign(
                      {
                        key: e.eSteamAwardCategoryID,
                        eVoteCategory: e.eSteamAwardCategoryID,
                        strCategoryDesc: e.strSuggestedCategoryDesc,
                        strCategoryTitle: e.strSuggestedCategoryTitle,
                      },
                      this.props
                    )
                  )
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
                className: Object(_.a)(
                  w.a.SteamAwardContainer,
                  c.a.PartnerEventFont
                ),
              },
              l.createElement(
                "div",
                { className: w.a.SteamAwardHeader },
                l.createElement("img", {
                  className: w.a.SteamAwardHeaderImage,
                  src: this.m_awardEventDetails.strTrophyImg,
                }),
                l.createElement(
                  "div",
                  { className: w.a.SteamAwardMainCtn },
                  l.createElement(
                    "div",
                    { className: w.a.SteamAwardMainTitle },
                    " ",
                    Object(g.g)("#SteamAwards_EventMainTitleCombined"),
                    " "
                  ),
                  l.createElement(
                    "div",
                    { className: w.a.SteamAwardHeaderText },
                    this.props.bIsEventActionEnabled
                      ? l.createElement(
                          l.Fragment,
                          null,
                          Object(g.g)(
                            "#SteamAwards_EventVoteForGamePrompt",
                            null === (e = d.a.Get().GetApp(this.props.appID)) ||
                              void 0 === e
                              ? void 0
                              : e.GetName()
                          ),
                          l.createElement(
                            "a",
                            {
                              href: S.d.STORE_BASE_URL + "steamawards/",
                              className: Object(_.a)(
                                w.a.SteamAwardLearnMore,
                                w.a.BottomRight
                              ),
                            },
                            Object(g.g)("#EventDisplay_CallToAction_LearnMore")
                          )
                        )
                      : l.createElement(
                          "a",
                          {
                            href: S.d.STORE_BASE_URL + "steamawards/",
                            className: w.a.LinkText,
                          },
                          Object(g.g)("#SteamAwards_Event_VotesClosed")
                        )
                  ),
                  l.createElement(
                    "div",
                    { className: w.a.AwardCategoriesCtn },
                    this.GetNominatedAwardCategories()
                  )
                )
              )
            )
          );
        }
      };
      Object(n.b)([o.C], V.prototype, "m_awardEventDetails", void 0),
        (V = Object(n.b)([s.a], V));
    },
    "/OjQ": function (e, t, a) {
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
      };
    },
    "6qRO": function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        EventDetailsPageContainer:
          "partnereventdisplay_EventDetailsPageContainer_3PgWN",
        EventBackgroundBlurCtn:
          "partnereventdisplay_EventBackgroundBlurCtn_2CdA5",
        EventBackgroundBlur: "partnereventdisplay_EventBackgroundBlur_eti5E",
        DetailArtworkAgeAppropriate:
          "partnereventdisplay_DetailArtworkAgeAppropriate_1Oz9X",
        DetailArtworkAgeNotAppropriate:
          "partnereventdisplay_DetailArtworkAgeNotAppropriate_3hUSm",
        EventCoverImageBlr: "partnereventdisplay_EventCoverImageBlr_d3mE9",
        EventBodyCtn: "partnereventdisplay_EventBodyCtn_elmDq",
        EventBodyPosition: "partnereventdisplay_EventBodyPosition_14R9N",
        EventBody: "partnereventdisplay_EventBody_mnHzq",
        EventBroadcastCtn: "partnereventdisplay_EventBroadcastCtn_2S6h-",
        EventColumns: "partnereventdisplay_EventColumns_2exTf",
        EventCoverImageCtn: "partnereventdisplay_EventCoverImageCtn_2vmBm",
        NoTitleArtwork: "partnereventdisplay_NoTitleArtwork_jE6OX",
        ScreenshotInsteadOfCover:
          "partnereventdisplay_ScreenshotInsteadOfCover_13ojN",
        EventCoverImage: "partnereventdisplay_EventCoverImage_2JgmJ",
        EventCoverImageBackground:
          "partnereventdisplay_EventCoverImageBackground_3KoBG",
        InLibraryView: "partnereventdisplay_InLibraryView_3X6U9",
        InEditor: "partnereventdisplay_InEditor_30FDo",
        EventCoverImageFuzz: "partnereventdisplay_EventCoverImageFuzz_2FT4u",
        LibraryEventTitleContainer:
          "partnereventdisplay_LibraryEventTitleContainer_2gdgU",
        CoverImageGradient: "partnereventdisplay_CoverImageGradient_3izb2",
        EventDetailTitleImg: "partnereventdisplay_EventDetailTitleImg_2mX1j",
        EventDetailTitleDesc: "partnereventdisplay_EventDetailTitleDesc_AxPxb",
        EventDetailsSticky: "partnereventdisplay_EventDetailsSticky_2-KJD",
        EventDetailUserType: "partnereventdisplay_EventDetailUserType_3xnQd",
        EventDetailGameCallToAction:
          "partnereventdisplay_EventDetailGameCallToAction_JkS80",
        EventDetailTimeInfo: "partnereventdisplay_EventDetailTimeInfo_3Z41s",
        EventDetailsDescription:
          "partnereventdisplay_EventDetailsDescription_Y1sHn",
        EventDetailsBody: "partnereventdisplay_EventDetailsBody_3v0cw",
        EventDetailsGame: "partnereventdisplay_EventDetailsGame_2iGXx",
        EventDetailsAvatar: "partnereventdisplay_EventDetailsAvatar_3PfOP",
        GameActions: "partnereventdisplay_GameActions_1sOkh",
        ActionButton: "partnereventdisplay_ActionButton_1HIrM",
        Ownership: "partnereventdisplay_Ownership_2nzI3",
        EventDetailsType: "partnereventdisplay_EventDetailsType_2PV9A",
        EventDetailTitle: "partnereventdisplay_EventDetailTitle_2_4FS",
        EventDetailTitleContainer:
          "partnereventdisplay_EventDetailTitleContainer_35gM9",
        EventDetailsSubTitle: "partnereventdisplay_EventDetailsSubTitle_6k4NE",
        LibraryEventBodyContainer:
          "partnereventdisplay_LibraryEventBodyContainer_2ZgLv",
        "lang_zh-cn": "partnereventdisplay_lang_zh-cn_299Pk",
        lang_ko: "partnereventdisplay_lang_ko_3h28O",
        lang_ja: "partnereventdisplay_lang_ja_2WrMm",
        "lang_zh-tw": "partnereventdisplay_lang_zh-tw_3BdFR",
        AppSocialLinksCtn: "partnereventdisplay_AppSocialLinksCtn_VDEod",
        AppSocialLinks: "partnereventdisplay_AppSocialLinks_1VT5_",
        AppSocialLink: "partnereventdisplay_AppSocialLink_Lda0T",
        StartDate: "partnereventdisplay_StartDate_2v1tk",
        EndDate: "partnereventdisplay_EndDate__nCWF",
        MultiDateAndTime: "partnereventdisplay_MultiDateAndTime_jsynt",
        RightSideTitles: "partnereventdisplay_RightSideTitles_2PqSq",
        DisplayAdminPanel_Title:
          "partnereventdisplay_DisplayAdminPanel_Title_3mA--",
        DateAndTime: "partnereventdisplay_DateAndTime_2X9VM",
        NoDateAndTime: "partnereventdisplay_NoDateAndTime_2hmi0",
        AppSummaryCtn: "partnereventdisplay_AppSummaryCtn_1kEXu",
        AppSummaryWidgetTitleCtn:
          "partnereventdisplay_AppSummaryWidgetTitleCtn_19R8i",
        Title: "partnereventdisplay_Title_2Xjut",
        AppSummaryWidgetCtn: "partnereventdisplay_AppSummaryWidgetCtn_2cY3h",
        DisplayAdminPanel: "partnereventdisplay_DisplayAdminPanel_2tK-z",
        DisplayAdminPanel_ctn:
          "partnereventdisplay_DisplayAdminPanel_ctn_3_RH8",
        DisplayAdminPanel_Spacer:
          "partnereventdisplay_DisplayAdminPanel_Spacer_d3tBR",
        AdminButton: "partnereventdisplay_AdminButton_307ys",
        EditorStatsCtn: "partnereventdisplay_EditorStatsCtn_jWmiq",
        VisibilityNote: "partnereventdisplay_VisibilityNote_EP4DQ",
        EditorStatsRow: "partnereventdisplay_EditorStatsRow_BN0_B",
        SteamBlog: "partnereventdisplay_SteamBlog_3JpZt",
        LunarNewYearHeader: "partnereventdisplay_LunarNewYearHeader_3hCjp",
        EnvelopeArea: "partnereventdisplay_EnvelopeArea_1o2eU",
        TokenBalanceContainer:
          "partnereventdisplay_TokenBalanceContainer__bxB9",
        TokenBalance: "partnereventdisplay_TokenBalance_1PrEM",
        EnvelopeContainer: "partnereventdisplay_EnvelopeContainer_2tzMM",
        BackingRect: "partnereventdisplay_BackingRect_2GYms",
        Envelope: "partnereventdisplay_Envelope_1KZOM",
        GiftLabel: "partnereventdisplay_GiftLabel_3_7is",
        OpenState: "partnereventdisplay_OpenState_1MB4P",
        Opened: "partnereventdisplay_Opened_2J2Iy",
        Locked: "partnereventdisplay_Locked_2k7p5",
        Unlocked: "partnereventdisplay_Unlocked_1lSjY",
        NeedLogin: "partnereventdisplay_NeedLogin_2MzBw",
        BottomMessage: "partnereventdisplay_BottomMessage_3Bupu",
        VO: "partnereventdisplay_VO_2yIQ8",
        LunarNewYearOpenEnvelopeVideoDialog:
          "partnereventdisplay_LunarNewYearOpenEnvelopeVideoDialog_qi-8p",
        Container: "partnereventdisplay_Container_GU0r1",
        Column: "partnereventdisplay_Column_2PfQR",
        VideoBox: "partnereventdisplay_VideoBox_3g8bV",
        CoinText: "partnereventdisplay_CoinText_3tOxn",
        Visible: "partnereventdisplay_Visible_2dVnV",
        LunarNewYearOpenEnvelopeVideo:
          "partnereventdisplay_LunarNewYearOpenEnvelopeVideo_2C0eO",
        StoryHeader: "partnereventdisplay_StoryHeader_17xU_",
        StorySubHeader: "partnereventdisplay_StorySubHeader_lnGG0",
        StoryText: "partnereventdisplay_StoryText_2j7gt",
        StoryPicture: "partnereventdisplay_StoryPicture_G_Tvq",
        CheckBackText: "partnereventdisplay_CheckBackText_1W1JL",
        DancingRat: "partnereventdisplay_DancingRat_3bNpM",
        Links: "partnereventdisplay_Links_361ou",
        MarketLink: "partnereventdisplay_MarketLink_3fjva",
        MarketLinkhover: "partnereventdisplay_MarketLinkhover_21osb",
        ReadMoreCnt: "partnereventdisplay_ReadMoreCnt_d_R9N",
      };
    },
  },
]);
