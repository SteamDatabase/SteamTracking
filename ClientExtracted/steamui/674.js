(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [674],
  {
    73902: (e) => {
      e.exports = {
        DragTarget: "_2sUvh2ZpsDAw1xNqgRBELg",
        DragOnTopOfMe: "_1mvpIyLL0-Pd4QMIoRXHtu",
        DescriptionCtn: "_3DQEBNkYGY3hyLFAjhtq7V",
        EventEditorLinkInput: "_25nbuIEmk-BBWxsSvWGG1n",
        DefaultEditor: "NENu2K19GJmLf1Asga-WF",
        ImportHTMLCtn: "_3sVZHF23hli8ijIwtMs8oU",
        ImportHTMLTextArea: "DHbRFUDVAeXGluFH-smoE",
        ImportHTMLConvertButtons: "lnyZaHhcGtBzDU0SMlFd1",
        ImportHTMLCheckBoxLine: "_3R3FNRLSeiOwBgELGjSPbz",
        OptionRow: "_2Y3MLEmGvWMI8BoNZgCllJ",
        TextEditorToolBarContainer: "_2bOpQtX5QAuQxfGhEJ_iYg",
        EmoteOuter: "_1x3UOXJkizqKhkssRfFjSS",
        YouTubeInput: "_3WXTC22teDkm8BMc01ZTLA",
        YouTubePreviewInsertOption: "_6ocliVvrdQxHPu-upv6-s",
        DropDownScroll: "P0-tbY3743fHY8SAzfF6b",
        InsertSpeakerCtn: "_2f-6Yv5h7xjUcZCrepnQhg",
        TitleGroup: "_1ddLhT39tQNuR4ljq6Nfg5",
        AssociateRowCtn: "_2HeY5m9J-kxRVzGn8dAwv5",
        PhotoCtn: "_2-f4CX_EyXfhRUmPdIey4w",
        AboutCtn: "_3hF9cNUOsfV0BkzEaWn7FM",
        PreviewCtn: "_VCRyh7nyN-2xDV6yH6Sg",
        BBCodeEditorInputStyles: "F506h2OVFDcZeXFtyqthY",
      };
    },
    33724: (e) => {
      e.exports = {
        BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
        Active: "_2vTzhbuJFb9_vHvquo2L-L",
        BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
      };
    },
    67123: (e) => {
      e.exports = { Image: "_1po_jxHTSix3Li3w5ZnMBB" };
    },
    63444: (e) => {
      e.exports = {
        ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
        Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
        ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
        Image: "y902_9A0Wj5bTshbt4xRb",
        ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
      };
    },
    83450: (e) => {
      e.exports = {
        Container: "_2vGr9KsApU0s59_ZsZVxXY",
        SmallAvatar: "_3V8w8CrYHVYB0voJ3gp87x",
        ShareDescription: "_3CqiH5i7kc5lXyEb0TGl2C",
        ShareLink: "_1WTiWXO3q8jMnJc_cPKJbE",
      };
    },
    3083: (e) => {
      e.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    70674: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => Ye });
      var a = n(34629),
        o = n(63696),
        r = n(44846),
        s = n(95020),
        l = n(76565),
        i = n.n(l),
        c = n(4816),
        p = n(90765),
        m = n(46108),
        u = n(51115),
        g = n(72476);
      var d = n(6367),
        h = n(99447),
        E = n(73674),
        C = n(10606),
        M = n(98995),
        S = n(43397),
        I = n(49946),
        A = n.n(I),
        L = n(41230),
        T = n(28987),
        N = n(89193),
        D = n(53833),
        w = n(93960),
        v = n(90039);
      class y {
        m_eCurLang = (0, r.sf)(g.TS.LANGUAGE);
        m_rgHasData = (0, D.$Y)([], 31, !1);
        m_bHasLocalizationContext = !1;
        m_callback = new v.l();
        GetCallback() {
          return this.m_callback;
        }
        GetCurEditLanguage() {
          return this.m_eCurLang;
        }
        SetCurEditLanguage(e) {
          return (
            this.m_eCurLang != e &&
            ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
          );
        }
        SetHasLanguage(e) {
          e.forEach((e, t) => {
            this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
          });
        }
        BHasLanguageData(e) {
          return this.m_rgHasData[e];
        }
        GetHasLocalizationContext() {
          return this.m_bHasLocalizationContext;
        }
        SetHasLocalizationContext(e) {
          e != this.m_bHasLocalizationContext &&
            (this.m_bHasLocalizationContext = e);
        }
        static s_globalSingletonStore;
        static Get() {
          return (
            y.s_globalSingletonStore ||
              ((y.s_globalSingletonStore = new y()),
              "dev" == g.TS.WEB_UNIVERSE &&
                (window.DUS = y.s_globalSingletonStore)),
            y.s_globalSingletonStore
          );
        }
        constructor() {
          (0, N.Gn)(this);
        }
      }
      (0, a.Cg)([N.sH], y.prototype, "m_eCurLang", void 0),
        (0, a.Cg)([N.sH], y.prototype, "m_rgHasData", void 0),
        (0, a.Cg)([N.sH], y.prototype, "m_bHasLocalizationContext", void 0),
        (0, a.Cg)([w.o], y.prototype, "GetCurEditLanguage", null),
        (0, a.Cg)([w.o], y.prototype, "SetCurEditLanguage", null),
        (0, a.Cg)([N.XI.bound], y.prototype, "SetHasLanguage", null),
        (0, a.Cg)([w.o], y.prototype, "BHasLanguageData", null);
      var b = n(11010);
      let k = class extends o.Component {
        GenerateLanguageOptions() {
          let e = [];
          const {
            fnFilterLanguage: t,
            fnLangHasData: n,
            fnLastUpdateRTime: a,
            fnIsLangSupported: s,
          } = this.props;
          this.props.bAllowUnsetOption &&
            e.push(
              o.createElement(
                "option",
                { key: "langpicker_unset", value: -1 },
                (0, m.we)("#language_selection_none"),
              ),
            );
          let l = new Array();
          const c = this.props.realms || [T.TU.k_ESteamRealmGlobal];
          for (const e of m.A0.GetLanguageListForRealms(c)) {
            if (t && !t(e)) continue;
            const n = (0, r.Lg)(e),
              a = (0, m.we)("#Language_" + n),
              o = Boolean(s) && s(e);
            l.push({ eLang: e, sLocName: a, bSupported: o });
          }
          l.sort((e, t) =>
            e.bSupported != t.bSupported
              ? e.bSupported
                ? -1
                : 1
              : e.sLocName.localeCompare(t.sLocName),
          );
          let u = !1;
          for (const t of l) {
            t.bSupported != u &&
              (e.push(
                o.createElement(
                  "option",
                  {
                    key: t.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                    className: i().SupportedGroupLabel,
                    disabled: !0,
                  },
                  (0, m.we)(
                    t.bSupported
                      ? "#LanguageGroup_Supported"
                      : "#LanguageGroup_Unsupported",
                  ),
                ),
              ),
              (u = t.bSupported));
            const r = n && n(t.eLang),
              s = a && a(t.eLang);
            let l = t.sLocName;
            s &&
              0 !== s &&
              ((l += " "),
              (l += (0, m.we)(
                "#Language_Last_Update",
                (0, m.$z)(s) + " @ " + (0, b.KC)(s, { bForce24HourClock: !1 }),
              ))),
              e.push(
                o.createElement(
                  "option",
                  {
                    key: "langpicker" + t.eLang + (r ? "_hasdata" : ""),
                    value: t.eLang,
                    className: (0, p.A)(
                      { [i().LanguageWithContent]: r },
                      t.bSupported
                        ? i().SupportedLanguage
                        : i().UnsupportedLanguage,
                    ),
                  },
                  l,
                ),
              );
          }
          return e;
        }
        OnLanguageChange(e) {
          const { fnOnLanguageChanged: t, selectedLang: n } = this.props;
          let a = Number.parseInt(e.currentTarget.value);
          a != n && t && t(a);
        }
        render() {
          const { selectedLang: e, bDisabled: t, strTooltip: n } = this.props;
          let a = this.GenerateLanguageOptions();
          return o.createElement(
            M.he,
            { toolTipContent: n },
            o.createElement(
              "select",
              { value: e, onChange: this.OnLanguageChange, disabled: t },
              a,
            ),
          );
        }
      };
      (0, a.Cg)([u.oI], k.prototype, "OnLanguageChange", null),
        (k = (0, a.Cg)([L.PA], k));
      var x = n(83957),
        B = n.n(x),
        O = n(72388),
        _ = n(12176),
        f = n(36934),
        j = n(8573),
        R = n(54946),
        U = n(31084),
        z = n(50712),
        H = n(36885),
        G = n(19166),
        Y = n(7372),
        F = n(98592),
        P = n(33724),
        Q = n.n(P),
        Z = n(48214),
        V = n.n(Z);
      class W extends F.A {
        performSearch(e) {
          let t = Array();
          return (
            this.props.supportBBCodes.forEach((n) => {
              n.indexOf(e) >= 0 && t.push({ name: n });
            }),
            t
          );
        }
        getSelection(e) {
          return "[" + e.name + "][/" + e.name + "]";
        }
        getKey(e) {
          return e.name;
        }
        renderMatch(e) {
          return o.createElement(
            "div",
            { key: e.name, className: (0, p.A)(Q().BBCodeSuggestion) },
            o.createElement("div", { className: Q().BBCode }, e.name),
            "[",
            e.name,
            "]...[/",
            e.name,
            "]",
          );
        }
        renderNoMatchMessage() {
          return o.createElement(
            "div",
            {
              key: "nomatches",
              className: (0, p.A)(V().mentionSearchOption, V().noMatches),
            },
            (0, m.we)("#Bbcode_No_Match"),
          );
        }
        renderTooManyMatchesMessage(e) {
          return null;
        }
        renderHeader() {
          return null;
        }
        getMaxMatches() {
          return Number.MAX_VALUE;
        }
      }
      class J extends o.Component {
        descTextAreaRef = o.createRef();
        m_MentionDialog;
        m_bDisabled = !0;
        m_iMentionSearchStartOffset;
        m_iMentionSearchCancelledOffset;
        constructor(e) {
          super(e),
            (this.state = {
              mentionSearch: void 0,
              activeSuggestSearchType: void 0,
            });
        }
        BindMentionDialog(e) {
          this.m_MentionDialog = e;
        }
        OnKeyDown(e) {
          this.state.activeSuggestSearchType &&
          this.m_MentionDialog &&
          !e.shiftKey &&
          !e.ctrlKey &&
          this.m_MentionDialog.BHandleKeyPress(e.keyCode)
            ? e.preventDefault()
            : (8 != e.keyCode && 46 != e.keyCode) ||
              (this.m_iMentionSearchCancelledOffset = void 0);
        }
        FindMatchOpener(e, t, n) {
          for (let a = n - 1; a >= 0; a--) {
            if (t[a] == e) return a;
            if (" " == t[a] || "\n" == t[a]) break;
          }
        }
        ReplaceSuggestedText(e, t) {
          let n = this.descTextAreaRef.current.selectionStart,
            a = this.descTextAreaRef.current.value,
            o = this.FindMatchOpener(e, a, n);
          if (
            (void 0 === o && "@" == e && (o = this.FindMatchOpener("＠", a, n)),
            void 0 !== o)
          ) {
            let e = a.substr(0, o);
            (e += t), (n >= a.length || " " != a[n]) && (e += " ");
            let r = e.length;
            (e += a.substr(n)),
              (this.descTextAreaRef.current.value = e),
              (this.descTextAreaRef.current.selectionStart =
                this.descTextAreaRef.current.selectionEnd =
                  r),
              this.props.fnSetText(e),
              this.FocusTextInput();
          }
        }
        OnFocus(e) {
          this.UpdateAutoSearchState();
        }
        OnKeyPress(e) {
          this.UpdateAutoSearchState();
        }
        OnClick(e) {
          this.UpdateAutoSearchState();
        }
        ClearMentionSearchState() {
          (this.m_iMentionSearchStartOffset = void 0),
            this.state.activeSuggestSearchType &&
              this.setState({
                activeSuggestSearchType: void 0,
                mentionSearch: void 0,
              });
        }
        OnEmoticonSuggestionSelected(e, t) {
          if (!t)
            return (
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
              void this.ClearMentionSearchState()
            );
          this.ReplaceSuggestedText(":", ":" + t + ":"),
            this.ClearMentionSearchState();
        }
        OnBBCodeSuggestionSelected(e, t) {
          if (!t)
            return (
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
              void this.ClearMentionSearchState()
            );
          this.ReplaceSuggestedText("[", t), this.ClearMentionSearchState();
        }
        FocusTextInput() {
          this.descTextAreaRef.current && this.descTextAreaRef.current.focus();
        }
        UpdateAutoSearchState() {
          let e = this.descTextAreaRef.current;
          if (!e || this.m_bDisabled) return;
          if (e.selectionStart != e.selectionEnd || !e.selectionStart)
            return void this.ClearMentionSearchState();
          let t,
            n,
            a = e.selectionStart,
            o = e.value;
          for (let e = a - 1; e >= 0; e--) {
            let a = e > 0 ? o[e - 1] : void 0;
            if (this.props.emoticonStore && ":" == o[e] && o.length > 2) {
              (a && " " != a && "\n" != a && ":" != a) ||
                ((t = e), (n = "Emoticon"));
              break;
            }
            if ("[" == o[e] && (e + 1 > o.length || "/" != o[e + 1])) {
              (a && " " != a && "\n" != a && "]" != a) ||
                ((t = e), (n = "BBCode"));
              break;
            }
            if (" " == o[e] || "\n" == o[e]) break;
          }
          if (void 0 === t || t === this.m_iMentionSearchCancelledOffset)
            return void this.ClearMentionSearchState();
          let r = o.substr(t + 1, a - t - 1);
          (this.m_iMentionSearchStartOffset = t),
            this.setState({ activeSuggestSearchType: n, mentionSearch: r });
        }
        GetTextAreaRef() {
          return this.descTextAreaRef;
        }
        GetTextAreaCurrent() {
          return this.descTextAreaRef.current;
        }
        render() {
          let e,
            {
              emoticonStore: t,
              supportBBCodes: n,
              fnSetText: a,
              ...r
            } = this.props;
          switch (this.state.activeSuggestSearchType) {
            case "Emoticon":
              e = o.createElement(Y.A, {
                emoticonStore: t,
                strSearch: this.state.mentionSearch,
                nMinimumSearchLengthBeforeAutoSelection: 2,
                onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                ref: this.BindMentionDialog,
              });
              break;
            case "BBCode":
              e = o.createElement(W, {
                supportBBCodes: n,
                strSearch: this.state.mentionSearch,
                nMinimumSearchLengthBeforeAutoSelection: 2,
                onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                ref: this.BindMentionDialog,
              });
          }
          return o.createElement(
            o.Fragment,
            null,
            e,
            o.createElement("textarea", {
              ...r,
              ref: this.descTextAreaRef,
              onKeyDown: this.OnKeyDown,
              onKeyUp: this.OnKeyPress,
              onFocus: this.OnFocus,
              onClick: this.OnClick,
            }),
          );
        }
      }
      (0, a.Cg)([u.oI], J.prototype, "BindMentionDialog", null),
        (0, a.Cg)([u.oI], J.prototype, "OnKeyDown", null),
        (0, a.Cg)([u.oI], J.prototype, "OnFocus", null),
        (0, a.Cg)([u.oI], J.prototype, "OnKeyPress", null),
        (0, a.Cg)([u.oI], J.prototype, "OnClick", null),
        (0, a.Cg)([u.oI], J.prototype, "OnEmoticonSuggestionSelected", null),
        (0, a.Cg)([u.oI], J.prototype, "OnBBCodeSuggestionSelected", null),
        (0, a.Cg)([u.oI], J.prototype, "FocusTextInput", null),
        (0, a.Cg)([u.oI], J.prototype, "GetTextAreaRef", null),
        (0, a.Cg)([u.oI], J.prototype, "GetTextAreaCurrent", null);
      var X = n(64608),
        K = n(15688),
        q = n(13869),
        $ = n(3083),
        ee = n.n($),
        te = n(54644);
      var ne = n(15918),
        ae = n(17613),
        oe = n(88750),
        re = n(13352),
        se = n(26853),
        le = n(73902),
        ie = n.n(le),
        ce = n(85688),
        pe = n(57100),
        me = n(42318),
        ue = n(63444);
      const ge = (e) => {
          const { clanSteamID: t, fnImageSelectCallBack: n } = e,
            [a, r] = (0, o.useState)(""),
            s = (0, G.mr)(e.clanSteamID.GetAccountID()),
            l = () => e.closeModal && e.closeModal(),
            i = G.pU.GetFilteredClanImages(t, a),
            c = (e) => {
              n(e), l();
            };
          return o.createElement(
            me.tH,
            null,
            o.createElement(
              C.x_,
              { onEscKeypress: l },
              o.createElement(
                X.UC,
                null,
                o.createElement(
                  X.Y9,
                  null,
                  (0, m.we)("#ClanImageChooser_Title"),
                ),
                o.createElement(
                  X.nB,
                  null,
                  o.createElement(
                    X.a3,
                    null,
                    o.createElement(
                      "p",
                      null,
                      (0, m.we)("#ClanImageChooser_Desc"),
                    ),
                    o.createElement(X.pd, {
                      placeholder: (0, m.we)("#ClanImageChooser_Search"),
                      value: a,
                      onChange: (e) => r(e.currentTarget.value),
                    }),
                    o.createElement(
                      "div",
                      { className: ue.ImagesOuterContainer },
                      s
                        ? o.createElement(se.t, {
                            size: "medium",
                            string: (0, m.we)("#Loading"),
                          })
                        : Boolean(i.length > 0)
                          ? i.map((e) =>
                              o.createElement(de, {
                                key: "ci" + e.image_hash,
                                clanImage: e,
                                searchStringHilight: a,
                                fnImageClick: c,
                              }),
                            )
                          : Boolean(0 == a.trim().length)
                            ? o.createElement(
                                "div",
                                null,
                                (0, m.we)("#ClanImageChooser_None"),
                              )
                            : o.createElement(
                                "div",
                                null,
                                (0, m.we)(
                                  "#EventCalendar_GameSearch_NoneFound",
                                ),
                              ),
                    ),
                  ),
                ),
                o.createElement(
                  X.wi,
                  null,
                  o.createElement(
                    X.$n,
                    { onClick: l },
                    (0, m.we)("#Button_Cancel"),
                  ),
                ),
              ),
            ),
          );
        },
        de = (e) => {
          const { clanImage: t, searchStringHilight: n, fnImageClick: a } = e;
          let r = t.file_name ? t.file_name : "",
            s = (function (e, t, n, a) {
              let r = [];
              if (e.length > 0) {
                let s = t.toLocaleLowerCase();
                for (let l = 0; l < t.length; ) {
                  let i = s.indexOf(e, l);
                  if (i < 0) {
                    r.push(
                      o.createElement(
                        "span",
                        { key: n + "_" + String(l) },
                        t.substring(l),
                      ),
                    );
                    break;
                  }
                  l < i &&
                    r.push(
                      o.createElement(
                        "span",
                        { key: n + "_" + String(l) },
                        t.substring(l, i),
                      ),
                    ),
                    r.push(
                      o.createElement(
                        "span",
                        { key: n + "_" + String(l), className: a },
                        t.substr(i, e.length),
                      ),
                    ),
                    (l = i + e.length);
                }
              } else r.push(o.createElement("span", { key: n + "_null" }, t));
              return r;
            })(n, r, String(t.imageid), ue.Hilight);
          return o.createElement(
            "div",
            { className: ue.ImageContainer },
            o.createElement("div", {
              className: ue.Image,
              style: { backgroundImage: `url( '${t.thumb_url}' )` },
              onDoubleClick: () => a(t),
            }),
            o.createElement(
              "div",
              { className: ue.ImageFilename, title: r },
              s,
            ),
          );
        };
      var he = n(67123),
        Ee = n(41026);
      const Ce = (0, L.PA)((e) => {
        const {
            clanSteamID: t,
            inputClanImage: n,
            nWidth: a,
            nHeight: r,
            setImage: s,
          } = e,
          l = o.useMemo(() => ({ width: a, height: r }), [a, r]),
          [i, c] = o.useState(void 0),
          [p, u] = o.useState(Boolean(n)),
          [d, h] = o.useState(!1),
          E = (0, Ee.zO)(t, "dummy"),
          C = o.useCallback(
            async (e) => {
              if (
                (E.ClearImages(),
                e && (u(!0), await E.AddExistingClanImage(e, 0)))
              ) {
                c(e);
                const t = E.GetUploadImages()[0].IsValidAssetType(l);
                0 != t.error.length ||
                  t.needsCrop ||
                  (n && n.image_hash == e.image_hash) ||
                  s(e);
              }
              u(!1);
            },
            [E, n, s, l],
          );
        o.useEffect(() => {
          C(n);
        }, [C, n]);
        let M,
          S = "",
          I = !1;
        if (E && E.GetFilesToUpload().length > 0) {
          M = E.GetUploadImages()[0];
          const e = M.IsValidAssetType(l);
          (S = e.error), (I = e.needsCrop);
        }
        return o.createElement(
          o.Fragment,
          null,
          p
            ? o.createElement(se.t, {
                size: "medium",
                string: (0, m.we)("#Loading"),
              })
            : Boolean(i) &&
                o.createElement("div", {
                  className: he.Image,
                  style: {
                    backgroundImage: `url( '${M ? M.dataUrl : i.url}' )`,
                    height: `${r}px`,
                    width: `${a}px`,
                  },
                }),
          Boolean(S) && o.createElement("p", null, S),
          I &&
            o.createElement(
              X.$n,
              {
                onClick: (e) => {
                  const t = (0, te.uX)(e);
                  let n = E.GetUploadImages()[0];
                  (0, q.pg)(
                    o.createElement(pe.q, {
                      ownerWin: t,
                      uploadFile: n,
                      forceResolution: { width: a, height: r },
                      fileType: 3,
                    }),
                    t,
                  );
                },
              },
              (0, m.we)("#BBCode_ResizeImage"),
            ),
          Boolean(M && M.bCropped) &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                null,
                (0, m.we)("#ClanImagePickAndResize_UploadStatus", M.status),
              ),
              d
                ? o.createElement(se.t, {
                    string: (0, m.we)("#Uploading"),
                    size: "small",
                  })
                : o.createElement(
                    X.$n,
                    {
                      onClick: async () => {
                        h(!0);
                        try {
                          const e = await E.UploadAllImages(l),
                            n = Object.values(e);
                          if (
                            n &&
                            n.length > 0 &&
                            ((0, ce.wT)(
                              1 == n.length,
                              "ClanImagePickForCertainSize expected size 1, got " +
                                n.length,
                            ),
                            n[0].bSuccess)
                          ) {
                            const e = n[0].uploadResult,
                              a = H.z.GenerateURLFromHashAndExt(
                                t,
                                H.z.GetHashAndExt(e),
                              ),
                              o = H.z.GenerateURLFromHashAndExt(
                                t,
                                H.z.GetThumbHashAndExt(e),
                              ),
                              r = {
                                imageid: -11231412,
                                image_hash: e.image_hash,
                                thumbnail_hash: e.thumbnail_hash,
                                file_type: e.file_type,
                                file_name: e.file_name,
                                clanAccountID: t.GetAccountID(),
                                url: a,
                                thumb_url: o,
                                uploaded_time: Date.now() / 1e3,
                              };
                            c(r), s(r);
                          }
                        } finally {
                          h(!1);
                        }
                      },
                    },
                    (0, m.we)("#ClanImagePickAndResize_UploadImage"),
                  ),
            ),
          o.createElement(
            X.$n,
            {
              onClick: (e) => {
                const t = new j.b(g.UF.CLANSTEAMID);
                (0, q.pg)(
                  o.createElement(ge, {
                    clanSteamID: t,
                    fnImageSelectCallBack: (e) => C(e),
                  }),
                  (0, te.uX)(e),
                );
              },
            },
            (0, m.we)("#BBCode_ChooseImage", a, r),
          ),
        );
      });
      var Me,
        Se = n(16154);
      let Ie = class extends o.Component {
        static {
          Me = this;
        }
        m_cancelSignal = B().CancelToken.source();
        static s_formattingHelp = new Map();
        constructor(e) {
          super(e),
            (this.state = {
              formattingHelp: {
                __html: Me.s_formattingHelp.has(e.formatType)
                  ? Me.s_formattingHelp.get(e.formatType)
                  : "",
              },
            });
        }
        componentDidMount() {
          this.AjaxGetFormattingHelp().catch((e) => {
            this.setState((0, Se.H)(e));
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "FormattingHelpWidget component unmounted",
          );
        }
        static GetHelpURL(e, t) {
          return (
            g.TS.COMMUNITY_BASE_URL +
            "comment/" +
            e +
            "/formattinghelp" +
            (t ? "?ajax=1" : "")
          );
        }
        async AjaxGetFormattingHelp() {
          if ("" == this.state.formattingHelp.__html) {
            let e,
              t = { sessionid: g.TS.SESSIONID };
            (e = await B().get(Me.GetHelpURL(this.props.formatType, !0), {
              params: t,
              cancelToken: this.m_cancelSignal.token,
            })),
              Me.s_formattingHelp.set(this.props.formatType, e.data),
              this.setState({ formattingHelp: { __html: e.data } });
          }
        }
        render() {
          return this.state.strErrorMsg
            ? o.createElement(
                "div",
                null,
                this.state.strErrorMsg,
                o.createElement("br", null),
                this.state.errorCode,
              )
            : "" == this.state.formattingHelp.__html
              ? o.createElement(se.t, null)
              : o.createElement(
                  C.o0,
                  {
                    strTitle: (0, m.we)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                  },
                  o.createElement("div", {
                    dangerouslySetInnerHTML: this.state.formattingHelp,
                  }),
                );
        }
      };
      Ie = Me = (0, a.Cg)([L.PA], Ie);
      var Ae,
        Le = n(24546),
        Te = n(34091),
        Ne = n(27793);
      let De = class extends o.Component {
        descAutoTextAreaRef = o.createRef();
        constructor(e) {
          super(e), (this.state = { bShowDragTarget: !1 });
        }
        componentDidMount() {
          G.pU.AddClanImageDragListener(this.ClanImageDragListener);
        }
        componentWillUnmount() {
          G.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
        }
        ClanImageDragListener(e, t) {
          this.state.bShowDragTarget != t &&
            this.setState({ bShowDragTarget: t });
        }
        onFocus(e) {
          e && e.target.select();
        }
        InsertText(e) {
          we.replaceSelection(this.GetTextAreaRef().current, e);
        }
        OnTextAreaDropListener(e) {
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            e.dataTransfer.items && e.dataTransfer.items[0])
          ) {
            let t = e.dataTransfer.getData("text");
            if (t && t.length > 0)
              for (let e of [H.z.GetBaseURL(), H.z.GetBaseURLV2()])
                if (t.startsWith(e)) {
                  let n = "[img]" + Le.lw + "/" + t.substr(e.length) + "[/img]";
                  we.replaceSelection(this.GetTextAreaRef().current, n);
                  break;
                }
          }
        }
        GetTextAreaRef() {
          return this.descAutoTextAreaRef && this.descAutoTextAreaRef.current
            ? this.descAutoTextAreaRef.current.GetTextAreaRef()
            : void 0;
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(ve, {
              pathToImages:
                g.TS.COMMUNITY_CDN_URL + "public/images/sharedfiles/guides/",
              fnTextareaRef: this.GetTextAreaRef,
              emoticonStore: this.props.emoticonStore,
              supportBBCodes: this.props.limitBBCode
                ? this.props.limitBBCode
                : O.Kl,
              bSupportHTMLImport: this.props.bSupportHTMLImport,
              showFormatHelp: this.props.showFormatHelp,
              bEmbeddedInDialog: this.props.bEmbeddedInDialog,
              clanSteamID: this.props.clanSteamID,
            }),
            o.createElement(
              "div",
              {
                className: (0, p.A)(
                  ie().DescriptionCtn,
                  ie().BBCodeEditorInputStyles,
                  this.state.bShowDragTarget ? ie().DragTarget : "",
                  this.props.className ? this.props.className : "",
                ),
              },
              o.createElement(J, {
                cols: 90,
                rows: this.props.nOverridesRows || 22,
                maxLength: 64e3,
                className: (0, p.A)(
                  ie().DefaultEditor,
                  this.props.classNameForTextArea
                    ? this.props.classNameForTextArea
                    : "",
                ),
                placeholder: this.props.strPlaceholder,
                ref: this.descAutoTextAreaRef,
                value: this.props.fnGetCurText(),
                onChange: this.props.fnOnTextChange,
                onDrop: this.OnTextAreaDropListener,
                emoticonStore: this.props.emoticonStore,
                fnSetText: this.props.fnSetText,
                supportBBCodes: this.props.limitBBCode
                  ? this.props.limitBBCode
                  : O.Kl,
              }),
            ),
          );
        }
      };
      (0, a.Cg)([u.oI], De.prototype, "ClanImageDragListener", null),
        (0, a.Cg)([u.oI], De.prototype, "onFocus", null),
        (0, a.Cg)([u.oI], De.prototype, "OnTextAreaDropListener", null),
        (0, a.Cg)([u.oI], De.prototype, "GetTextAreaRef", null),
        (De = (0, a.Cg)([L.PA], De));
      class we {
        static BIsFireFox() {
          return Boolean(
            new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            ),
          );
        }
        static replaceSelection(e, t) {
          let n = e.selectionStart;
          e.focus(),
            we.InsertTextAtSelect(t, e),
            e.setSelectionRange(n, n + t.length);
        }
        static getSelectedString(e) {
          return e.value.substr(
            e.selectionStart,
            e.selectionEnd - e.selectionStart,
          );
        }
        static wrapBBCode(e, t, n) {
          let a = we.getSelectedString(n),
            o = "";
          (o =
            0 == a.indexOf(e) && a.lastIndexOf(t) == a.length - t.length
              ? a.substr(e.length, a.length - e.length - t.length)
              : e + a + t),
            we.replaceSelection(n, o);
        }
        static append(e, t) {
          t &&
            (t.focus(),
            t.setSelectionRange(t.value.length, t.value.length),
            we.InsertTextAtSelect(e, t));
        }
        static ClearTextArea(e) {
          if (e) {
            e.focus();
            const t = 0,
              n = e.value.length;
            if (t !== n) {
              e.setRangeText
                ? e.setRangeText("", t, n, "preserve")
                : (e.value = "");
              const a = new Event("input", { bubbles: !0 });
              e.dispatchEvent(a);
            }
            e.focus();
          }
        }
        static overwrite(e, t) {
          t && (we.ClearTextArea(t), we.InsertTextAtSelect(e, t));
        }
        static InsertTextAtSelect(e, t) {
          const n = t.selectionStart,
            a = t.selectionEnd;
          if (null !== n && null !== a) {
            t.setRangeText
              ? t.setRangeText(e, n, a, "preserve")
              : (t.value = t.value.slice(0, n) + e + t.value.slice(a));
            const o = new Event("input", { bubbles: !0 });
            t.dispatchEvent(o),
              (t.selectionStart = t.selectionEnd = n + e.length);
          }
          t.focus();
        }
      }
      let ve = class extends o.Component {
        m_linkPopupRef = o.createRef();
        onBold() {
          we.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef().current);
        }
        onItalics() {
          we.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef().current);
        }
        onUnderline() {
          we.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef().current);
        }
        onStrikeThrough() {
          we.wrapBBCode(
            "[strike]",
            "[/strike]",
            this.props.fnTextareaRef().current,
          );
        }
        onHeader() {
          we.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef().current);
        }
        onHeader2() {
          we.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef().current);
        }
        onHeader3() {
          we.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef().current);
        }
        onUnorderedList() {
          this.handleList("list");
        }
        onOrderedList() {
          this.handleList("olist");
        }
        handleList(e) {
          let t = this.props.fnTextareaRef().current,
            n = "[" + e + "]\n",
            a = "[/" + e + "]";
          if (t.selectionStart == t.selectionEnd)
            we.wrapBBCode(n + "[*]", "\n" + a, t);
          else {
            let e =
              n +
              we
                .getSelectedString(t)
                .split("\n")
                .map((e) => (e.match(/\*+\s/) ? "[*]" : "[*] ") + e)
                .join("\n") +
              "\n" +
              a;
            we.replaceSelection(t, e);
          }
        }
        OnAddLink(e) {
          (0, q.HT)(
            o.createElement(ke, { textareaRef: this.props.fnTextareaRef() }),
            (0, te.uX)(e),
          );
        }
        ShowHelpDialog(e) {
          this.props.showFormatHelp &&
            (0, q.HT)(
              o.createElement(Ie, { formatType: this.props.showFormatHelp }),
              (0, te.uX)(e),
            );
        }
        OnConvertHTMLToBBCodeDialog(e) {
          const t = (0, te.uX)(e);
          (0, q.HT)(
            o.createElement(fe, {
              ownerWindow: t,
              textareaRef: this.props.fnTextareaRef(),
            }),
            t,
          );
        }
        OnOpenYoutubeDialog(e) {
          let t = g.TS.IMG_URL + "applications/community/";
          (0, q.HT)(
            o.createElement(be, {
              textareaRef: this.props.fnTextareaRef(),
              pathToImages: t,
            }),
            (0, te.uX)(e),
          );
        }
        OnOpenImageDialog(e) {
          (0, q.HT)(
            o.createElement(xe, { textareaRef: this.props.fnTextareaRef() }),
            (0, te.uX)(e),
          );
        }
        OnOpenSpeakerDialog(e) {
          (0, q.pg)(
            o.createElement(Be, {
              clanSteamID: this.props.clanSteamID,
              textareaRef: this.props.fnTextareaRef(),
            }),
            (0, te.uX)(e),
          );
        }
        OnEmoticonSelected(e, t = !1) {
          let n = `ː${e}ː`;
          we.replaceSelection(this.props.fnTextareaRef().current, n),
            this.props.fnTextareaRef().current.focus();
        }
        BSupports(e) {
          return this.props.supportBBCodes.findIndex((t) => t == e) >= 0;
        }
        render() {
          const {
            showFormatHelp: e,
            bEmbeddedInDialog: t,
            bSupportHTMLImport: n,
            pathToImages: a,
          } = this.props;
          let r;
          return (
            e &&
              (r = t
                ? o.createElement(
                    "span",
                    { className: (0, p.A)("ttip", ie().ActionGetHelp) },
                    o.createElement(
                      M.he,
                      {
                        toolTipContent: (0, m.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                      },
                      o.createElement(
                        "a",
                        {
                          href: Ie.GetHelpURL(this.props.showFormatHelp, !1),
                          target: g.TS.IN_CLIENT ? void 0 : "_blank",
                        },
                        o.createElement("img", { src: a + "/action_help.png" }),
                        " ",
                        (0, m.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                      ),
                    ),
                  )
                : o.createElement(
                    "span",
                    {
                      onClick: this.ShowHelpDialog,
                      className: (0, p.A)("ttip", ie().ActionGetHelp),
                    },
                    o.createElement(
                      M.he,
                      {
                        toolTipContent: (0, m.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                      },
                      o.createElement("img", { src: a + "/action_help.png" }),
                      " ",
                      (0, m.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                    ),
                  )),
            o.createElement(
              "div",
              { className: ie().TextEditorToolBarContainer },
              this.BSupports("b") &&
                o.createElement(ye, {
                  onClick: this.onBold,
                  tooltip: (0, m.we)("#Editor_Bold"),
                  imgURL: this.props.pathToImages + "/format_bold.png",
                }),
              this.BSupports("u") &&
                o.createElement(ye, {
                  onClick: this.onUnderline,
                  tooltip: (0, m.we)("#Editor_Underline"),
                  imgURL: this.props.pathToImages + "/format_underline.png",
                }),
              this.BSupports("i") &&
                o.createElement(ye, {
                  onClick: this.onItalics,
                  tooltip: (0, m.we)("#Editor_Italics"),
                  imgURL: this.props.pathToImages + "/format_italic.png",
                }),
              this.BSupports("strike") &&
                o.createElement(ye, {
                  onClick: this.onStrikeThrough,
                  tooltip: (0, m.we)("#Editor_StrikeThrough"),
                  imgURL: this.props.pathToImages + "/format_strike.png",
                }),
              Boolean(this.BSupports("url") && !t) &&
                o.createElement(ye, {
                  onClick: this.OnAddLink,
                  tooltip: (0, m.we)("#Editor_Link"),
                  imgURL: this.props.pathToImages + "/format_link.png",
                }),
              this.BSupports("list") &&
                o.createElement(ye, {
                  onClick: this.onUnorderedList,
                  tooltip: (0, m.we)("#Editor_Unordered"),
                  imgURL: this.props.pathToImages + "/format_bullet.png",
                }),
              this.BSupports("olist") &&
                o.createElement(ye, {
                  onClick: this.onOrderedList,
                  tooltip: (0, m.we)("#Editor_Ordered"),
                  imgURL: this.props.pathToImages + "/format_numbered.png",
                }),
              this.BSupports("h1") &&
                o.createElement(ye, {
                  onClick: this.onHeader,
                  tooltip: (0, m.we)("#Editor_Header"),
                  imgURL: this.props.pathToImages + "/format_header1.png",
                }),
              this.BSupports("h2") &&
                o.createElement(ye, {
                  onClick: this.onHeader2,
                  tooltip: (0, m.we)("#Editor_Header2"),
                  imgURL: this.props.pathToImages + "/format_header2.png",
                }),
              this.BSupports("h3") &&
                o.createElement(ye, {
                  onClick: this.onHeader3,
                  tooltip: (0, m.we)("#Editor_Header3"),
                  imgURL: this.props.pathToImages + "/format_header3.png",
                }),
              this.BSupports("previewyoutube") &&
                o.createElement(ye, {
                  onClick: this.OnOpenYoutubeDialog,
                  tooltip: (0, m.we)("#EventEditor_InsertYouTube"),
                  imgURL:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==",
                }),
              o.createElement(
                "span",
                { className: "ttip" },
                this.props.emoticonStore &&
                  o.createElement(
                    M.he,
                    { toolTipContent: (0, m.we)("#Editor_Emoticon") },
                    o.createElement(K.A, {
                      title: " ",
                      className: (0, p.A)(ie().EmoteOuter),
                      disabled: !1,
                      OnEmoticonSelected: this.OnEmoticonSelected,
                      rtLastAckedNewEmoticons: Number.MAX_VALUE,
                      emoticonStore: this.props.emoticonStore,
                      useImg: this.props.pathToImages + "/format_emote.png",
                      contextOptions: {
                        bOverlapHorizontal: !0,
                        bDisablePopTop: !0,
                      },
                    }),
                  ),
              ),
              Boolean(this.BSupports("img") && !t) &&
                o.createElement(ye, {
                  onClick: this.OnOpenImageDialog,
                  tooltip: (0, m.we)("#EventEditor_InsertImage"),
                  imgURL: this.props.pathToImages + "/insert_img.png",
                }),
              Boolean(
                g.iA.is_support &&
                  this.props.clanSteamID &&
                  this.BSupports("speaker"),
              ) &&
                o.createElement(ye, {
                  onClick: this.OnOpenSpeakerDialog,
                  tooltip: (0, m.we)("#EventEditor_AddSpeaker"),
                  imgURL: this.props.pathToImages + "/insert_img.png",
                }),
              Boolean(n && !t) &&
                o.createElement(
                  ye,
                  {
                    onClick: this.OnConvertHTMLToBBCodeDialog,
                    className: ie().ActionImportHTML,
                    tooltip: (0, m.we)("#EventEditor_ImportFromHTML_ttip"),
                  },
                  (0, m.we)("#EventEditor_ImportHTML"),
                ),
              r,
            )
          );
        }
      };
      function ye(e) {
        return o.createElement(
          "span",
          { onClick: e.onClick, className: e.className },
          o.createElement(
            M.he,
            { toolTipContent: e.tooltip, className: "ttip" },
            Boolean(e.imgURL) && o.createElement("img", { src: e.imgURL }),
            e.children,
          ),
        );
      }
      (0, a.Cg)([u.oI], ve.prototype, "onBold", null),
        (0, a.Cg)([u.oI], ve.prototype, "onItalics", null),
        (0, a.Cg)([u.oI], ve.prototype, "onUnderline", null),
        (0, a.Cg)([u.oI], ve.prototype, "onStrikeThrough", null),
        (0, a.Cg)([u.oI], ve.prototype, "onHeader", null),
        (0, a.Cg)([u.oI], ve.prototype, "onHeader2", null),
        (0, a.Cg)([u.oI], ve.prototype, "onHeader3", null),
        (0, a.Cg)([u.oI], ve.prototype, "onUnorderedList", null),
        (0, a.Cg)([u.oI], ve.prototype, "onOrderedList", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnAddLink", null),
        (0, a.Cg)([u.oI], ve.prototype, "ShowHelpDialog", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnConvertHTMLToBBCodeDialog", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnOpenYoutubeDialog", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnOpenImageDialog", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnOpenSpeakerDialog", null),
        (0, a.Cg)([u.oI], ve.prototype, "OnEmoticonSelected", null),
        (ve = (0, a.Cg)([L.PA], ve));
      let be = class extends o.Component {
        state = { youtubeInput: "", alignment: Te.V2.left };
        OnYoutubeInsertLink() {
          const e =
            this.state.youtubeInput && (0, z.XU)(this.state.youtubeInput);
          if (e) {
            if (this.state.alignment == Te.V2.summary) {
              const t =
                "https://www.youtube.com/watch?v=" +
                e.strVideoID +
                (e.nStartSeconds ? "&t=" + e.nStartSeconds : "");
              we.wrapBBCode(t, "", this.props.textareaRef.current);
            } else {
              let t =
                "[previewyoutube=" +
                e.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              we.wrapBBCode(
                t,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({ youtubeInput: "", alignment: Te.V2.left });
          } else alert((0, m.we)("#EventEditor_InsertYouTube_NoURL"));
        }
        OnUrlChange(e) {
          this.state.youtubeInput != e.target.value &&
            this.setState({ youtubeInput: e.target.value });
        }
        OnLeftSelected() {
          this.setState({ alignment: Te.V2.left });
        }
        OnRightSelected() {
          this.setState({ alignment: Te.V2.right });
        }
        OnFullSelected() {
          this.setState({ alignment: Te.V2.full });
        }
        OnSummarySelected() {
          this.setState({ alignment: Te.V2.summary });
        }
        OnOuterDivClickPassDown(e) {}
        render() {
          return o.createElement(
            C.o0,
            {
              strTitle: (0, m.we)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, m.we)("#EventEditor_InsertYouTube"),
              className: ie().BBCodeEditorInputStyles,
            },
            o.createElement(
              "div",
              { className: ie().YouTubeInput },
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    (0, m.we)("#EventEditor_InsertYouTube_URL"),
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogInput_Wrapper" },
                    o.createElement("input", {
                      className: "DialogInput DialogTextInputBase",
                      ref: (e) => e && e.focus(),
                      type: "text",
                      value: this.state.youtubeInput,
                      onChange: this.OnUrlChange,
                      placeholder: (0, m.we)(
                        "#EventEditor_InsertYouTube_Placholder",
                      ),
                    }),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "div",
                  { className: "DialogLabel" },
                  (0, m.we)("#EventEditor_InsertYouTube_Position"),
                ),
                o.createElement(
                  "div",
                  {
                    className: ie().YouTubePreviewInsertOption,
                    onClick: this.OnOuterDivClickPassDown,
                  },
                  o.createElement("input", {
                    type: "radio",
                    name: "YouTubePreviewInsertType",
                    id: Te.V2.left,
                    value: Te.V2.left,
                    checked: this.state.alignment == Te.V2.left,
                    onChange: this.OnLeftSelected,
                  }),
                  o.createElement(
                    "label",
                    { htmlFor: Te.V2.left },
                    o.createElement(
                      "span",
                      null,
                      (0, m.we)("#EventEditor_InsertYouTube_Left"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  {
                    className: ie().YouTubePreviewInsertOption,
                    onClick: this.OnOuterDivClickPassDown,
                  },
                  o.createElement("input", {
                    type: "radio",
                    name: "YouTubePreviewInsertType",
                    id: Te.V2.right,
                    value: Te.V2.right,
                    checked: this.state.alignment == Te.V2.right,
                    onChange: this.OnRightSelected,
                  }),
                  o.createElement(
                    "label",
                    { htmlFor: Te.V2.right },
                    o.createElement(
                      "span",
                      null,
                      (0, m.we)("#EventEditor_InsertYouTube_Right"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  {
                    className: ie().YouTubePreviewInsertOption,
                    onClick: this.OnOuterDivClickPassDown,
                  },
                  o.createElement("input", {
                    type: "radio",
                    name: "YouTubePreviewInsertType",
                    id: Te.V2.full,
                    value: Te.V2.full,
                    checked: this.state.alignment == Te.V2.full,
                    onChange: this.OnFullSelected,
                  }),
                  o.createElement(
                    "label",
                    { htmlFor: Te.V2.full },
                    o.createElement(
                      "span",
                      null,
                      (0, m.we)("#EventEditor_InsertYouTube_Full"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  {
                    className: ie().YouTubePreviewInsertOption,
                    onClick: this.OnOuterDivClickPassDown,
                  },
                  o.createElement("input", {
                    type: "radio",
                    name: "YouTubePreviewInsertType",
                    id: Te.V2.summary,
                    value: Te.V2.summary,
                    checked: this.state.alignment == Te.V2.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  o.createElement(
                    "label",
                    { htmlFor: Te.V2.summary },
                    o.createElement(
                      "span",
                      null,
                      (0, m.we)("#EventEditor_InsertYouTube_Summary"),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, a.Cg)([u.oI], be.prototype, "OnYoutubeInsertLink", null),
        (0, a.Cg)([u.oI], be.prototype, "OnUrlChange", null),
        (0, a.Cg)([u.oI], be.prototype, "OnLeftSelected", null),
        (0, a.Cg)([u.oI], be.prototype, "OnRightSelected", null),
        (0, a.Cg)([u.oI], be.prototype, "OnFullSelected", null),
        (0, a.Cg)([u.oI], be.prototype, "OnSummarySelected", null),
        (0, a.Cg)([u.oI], be.prototype, "OnOuterDivClickPassDown", null),
        (be = (0, a.Cg)([L.PA], be));
      let ke = class extends o.Component {
        static {
          Ae = this;
        }
        state = { textToDisplay: "", strURL: "" };
        static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
        LoadFromTextArea() {
          const { textareaRef: e } = this.props;
          if (e && e.current) {
            let t = we.getSelectedString(e.current),
              n = Ae.m_regExp.exec(t);
            n
              ? this.setState({ strURL: n[1], textToDisplay: n[2] })
              : this.setState({ textToDisplay: t });
          }
        }
        componentDidMount() {
          this.LoadFromTextArea();
        }
        onLinkTitleUpdate(e) {
          this.setState({ textToDisplay: e.target.value });
        }
        onLinkURLUpdate(e) {
          this.setState({ strURL: e.target.value });
        }
        onInsertLink() {
          const { strURL: e, textToDisplay: t } = this.state;
          let n = "[url=" + e + "]" + t + "[/url]";
          we.replaceSelection(this.props.textareaRef.current, n);
        }
        render() {
          return o.createElement(
            C.o0,
            {
              strTitle: (0, m.we)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, m.we)("#EventEditor_InsertLinkURL"),
              className: ie().BBCodeEditorInputStyles,
            },
            o.createElement(
              "div",
              { className: ie().EventEditorLinkInput },
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    (0, m.we)("#EventEditor_LinkDescription"),
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogInput_Wrapper" },
                    o.createElement("input", {
                      type: "text",
                      onChange: this.onLinkTitleUpdate,
                      value: this.state.textToDisplay,
                      className: "DialogInput DialogTextInputBase",
                    }),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    (0, m.we)("#EventEditor_LinkURL"),
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogInput_Wrapper" },
                    o.createElement("input", {
                      type: "text",
                      onChange: this.onLinkURLUpdate,
                      value: this.state.strURL,
                      className: "DialogInput DialogTextInputBase",
                    }),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, a.Cg)([u.oI], ke.prototype, "onLinkTitleUpdate", null),
        (0, a.Cg)([u.oI], ke.prototype, "onLinkURLUpdate", null),
        (0, a.Cg)([u.oI], ke.prototype, "onInsertLink", null),
        (ke = Ae = (0, a.Cg)([L.PA], ke));
      let xe = class extends o.Component {
        refFirstInput;
        state = { imgURL: "", anchorURL: "" };
        componentDidMount() {
          this.refFirstInput && this.refFirstInput.current.focus();
        }
        OnImageInsert() {
          const { anchorURL: e, imgURL: t } = this.state;
          let n = "",
            a = "";
          e && e.length > 0 && ((n += "[url=" + e + "]"), (a = "[/url]" + a)),
            (n += "[img]" + t),
            (a = "[/img]" + a),
            we.wrapBBCode(n, a, this.props.textareaRef.current);
        }
        OnImageURLChange(e) {
          this.state.imgURL != e.target.value &&
            this.setState({ imgURL: e.target.value });
        }
        OnAnchorURLChange(e) {
          this.state.anchorURL != e.target.value &&
            this.setState({ anchorURL: e.target.value });
        }
        render() {
          const { imgURL: e, anchorURL: t } = this.state;
          return o.createElement(
            C.o0,
            {
              strTitle: (0, m.we)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, m.we)("#EventEditor_InsertImage_Title"),
              className: ie().BBCodeEditorInputStyles,
            },
            o.createElement(
              "div",
              { className: ie().EventEditorLinkInput },
              o.createElement(
                "p",
                null,
                (0, m.we)("#EventEditor_InsertImage_Desc"),
              ),
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    (0, m.we)("#EventEditor_InsertImage_URL"),
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogInput_Wrapper" },
                    o.createElement("input", {
                      className: "DialogInput DialogTextInputBase",
                      type: "text",
                      value: e,
                      onChange: this.OnImageURLChange,
                      placeholder: (0, m.we)(
                        "#EventEditor_InsertImage_Placeholder",
                      ),
                      ref: this.refFirstInput,
                    }),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: "DialogInputLabelGroup" },
                o.createElement(
                  "label",
                  null,
                  o.createElement(
                    "div",
                    { className: "DialogLabel" },
                    (0, m.we)("#EventEditor_InsertImage_Anchor"),
                  ),
                  o.createElement(
                    "div",
                    { className: "DialogInput_Wrapper" },
                    o.createElement("input", {
                      className: "DialogInput DialogTextInputBase",
                      type: "text",
                      value: t,
                      onChange: this.OnAnchorURLChange,
                      placeholder: (0, m.we)(
                        "#EventEditor_InsertImage_Placeholder",
                      ),
                    }),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, a.Cg)([u.oI], xe.prototype, "OnImageInsert", null),
        (0, a.Cg)([u.oI], xe.prototype, "OnImageURLChange", null),
        (0, a.Cg)([u.oI], xe.prototype, "OnAnchorURLChange", null),
        (xe = (0, a.Cg)([L.PA], xe));
      const Be = (e) => {
        const [t, n] = o.useState(""),
          [a, r] = o.useState(""),
          [s, l] = o.useState(""),
          [i, c] = o.useState(""),
          [p, u] = o.useState(void 0),
          [d, h] = o.useState(void 0),
          { data: E } = (0, ne.Dv)(),
          { isLoading: S, data: I } = (0, ae.js)(d?.GetAccountID()),
          A = 0 != t.trim().length && 0 != i.trim().length;
        return o.createElement(
          C.o0,
          {
            strTitle: (0, m.we)("#EventEditor_AddSpeaker"),
            strDescription: (0, m.we)("#EventEditor_AddSpeaker_Desc"),
            closeModal: e.closeModal,
            onCancel: e.closeModal,
            bOKDisabled: !A,
            onOK: () => {
              let n = `[speaker name="${t.trim()}"`;
              if (
                (a.trim().length > 0 && (n += ` title="${a}"`),
                s.trim().length > 0 && (n += ` company="${s}"`),
                p)
              ) {
                n += ` photo="${Le.lw + "/" + p.clanAccountID + "/" + H.z.GetHashAndExt(p)}"`;
              }
              d && (n += ` steamid="${d.ConvertTo64BitString()}"`),
                (n += `]${i}[/speaker]`),
                we.replaceSelection(e.textareaRef.current, n);
            },
            className: ie().BBCodeEditorInputStyles,
          },
          o.createElement(
            "div",
            { className: ie().InsertSpeakerCtn },
            o.createElement(X.pd, {
              type: "text",
              label: (0, m.we)("#EventEditor_AddSpeaker_Name"),
              value: t,
              onChange: (e) => n(e.target.value),
              focusOnMount: !0,
            }),
            o.createElement(
              "div",
              { className: ie().TitleGroup },
              o.createElement(X.pd, {
                type: "text",
                label: (0, m.we)("#EventEditor_AddSpeaker_Title"),
                value: a,
                onChange: (e) => r(e.target.value),
              }),
              o.createElement(X.pd, {
                type: "text",
                label: (0, m.we)("#EventEditor_AddSpeaker_Company"),
                value: s,
                onChange: (e) => l(e.target.value),
              }),
            ),
            o.createElement(
              M.he,
              {
                toolTipContent: (0, m.we)(
                  "#EventEditor_AssociateSteamAccount_ttip",
                ),
              },
              o.createElement(
                "div",
                { className: "DialogLabel" },
                (0, m.we)("#EventEditor_AssociateSteamAccount"),
                " (?)",
              ),
            ),
            o.createElement(
              "div",
              null,
              S &&
                o.createElement(se.t, {
                  string: (0, m.we)("#Loading"),
                  size: "small",
                }),
              Boolean(I) &&
                o.createElement(
                  "a",
                  {
                    href:
                      g.TS.COMMUNITY_BASE_URL +
                      "profiles/" +
                      d.ConvertTo64BitString(),
                    target: "_blank",
                  },
                  I
                    ? o.createElement("img", {
                        style: { marginRight: "8px" },
                        src: I.avatar_url,
                      })
                    : null,
                  I ? I.m_strPlayerName : null,
                ),
              o.createElement(
                "div",
                { className: ie().AssociateRowCtn },
                o.createElement(
                  X.$n,
                  { onClick: () => h(new j.b(g.iA.steamid)) },
                  (0, m.we)("#EventEditor_SteamAccount_addme"),
                ),
                o.createElement(
                  X.$n,
                  {
                    onClick: (e) =>
                      (0, U.lX)(
                        o.createElement(Oe, { friends: E, setSteamID: h }),
                        e,
                      ),
                  },
                  (0, m.we)("#EventEditor_SteamAccount_addfriend"),
                ),
                o.createElement(
                  X.$n,
                  { onClick: () => h(void 0) },
                  (0, m.we)("#EventEditor_SteamAccount_clear"),
                ),
              ),
            ),
            o.createElement(
              "div",
              { className: ie().PhotoCtn },
              o.createElement(
                "div",
                { className: "DialogLabel" },
                (0, m.we)("#EventEditor_ChoosePhoto"),
              ),
              o.createElement(Ce, {
                clanSteamID: e.clanSteamID,
                inputClanImage: p,
                setImage: u,
                nWidth: 184,
                nHeight: 184,
              }),
            ),
            o.createElement(
              "div",
              { className: ie().AboutCtn },
              o.createElement(
                "div",
                { className: "DialogLabel" },
                (0, m.we)("#EventEditor_AddSpeaker_About"),
              ),
              o.createElement(X.Cl, {
                value: i,
                onChange: (e) => c(e.target.value),
                rows: 8,
                cols: 80,
                nMinHeight: 40,
                placeholder: (0, m.we)(
                  "#EventEditor_AddSpeaker_About_Placeholder",
                ),
              }),
            ),
            o.createElement(
              "div",
              { className: ie().PreviewCtn },
              o.createElement(
                "div",
                { className: "DialogLabel" },
                (0, m.we)("#Button_Preview"),
              ),
              o.createElement(re.$k, {
                company: s,
                name: t,
                title: a,
                bioString: i,
                photo: p ? p.url : void 0,
              }),
            ),
          ),
        );
      };
      function Oe(e) {
        const { friends: t, setSteamID: n } = e;
        return o.createElement(
          "div",
          { className: ie().DropDownScroll },
          t.map((e) =>
            o.createElement(_e, { key: e, steamid: e, setSteamID: n }),
          ),
        );
      }
      function _e(e) {
        const { steamid: t, setSteamID: n } = e,
          { data: a } = (0, ae.js)(t);
        return o.createElement(
          oe.kt,
          { onSelected: () => n(new j.b(t)) },
          o.createElement(
            "div",
            { style: { display: "flex", alignItems: "center" } },
            a &&
              o.createElement("img", {
                className: ee().WhitelistAvatar,
                src: a.avatar_url,
              }),
            a?.m_strPlayerName,
          ),
        );
      }
      let fe = class extends o.Component {
        m_isMounted = !1;
        m_bAppend = !1;
        constructor(e) {
          super(e), (this.state = { bPreserveNewLines: !1, strHTMLData: "" });
        }
        componentDidMount() {
          this.m_isMounted = !0;
        }
        componentWillUnmount() {
          this.m_isMounted = !1;
        }
        OnConvertAndOverriteHTML() {
          (this.m_bAppend = !1), this.ConvertBBCode();
        }
        OnConvertAndAppendHTML() {
          (this.m_bAppend = !0), this.ConvertBBCode();
        }
        async ConvertHtmlToBBCode(e, t) {
          let n = new URLSearchParams();
          n.append("content", e), n.append("preserve_newlines", t ? "1" : "0");
          let a = null;
          return (
            (a = await B().post(
              g.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
              n,
            )),
            a.data.content
          );
        }
        ConvertBBCode() {
          this.setState({ bConverting: !0 }),
            this.ConvertHtmlToBBCode(
              this.state.strHTMLData,
              this.state.bPreserveNewLines,
            )
              .then((e) => {
                this.m_isMounted &&
                  (this.m_bAppend
                    ? we.append(e, this.props.textareaRef.current)
                    : we.overwrite(e, this.props.textareaRef.current),
                  this.setState({ bConverting: !1, bFinishedConverting: !0 }));
              })
              .catch((e) => {
                (0, q.pg)(
                  o.createElement(C.KG, {
                    strTitle: (0, m.we)("#EventEditor_ConvertHTML_Error"),
                    strDescription: (0, m.we)(
                      "#EventEditor_ConvertHTML_Error_Desc",
                      e.response && e.response.data ? e.response.data.msg : e,
                    ),
                    bAlertDialog: !0,
                    bDestructiveWarning: !0,
                  }),
                  this.props.ownerWindow,
                  { strTitle: (0, m.we)("#EventEditor_ConvertHTML_Error") },
                );
              });
        }
        OnCheckboxChange(e) {
          let t = e.target.checked;
          t != this.state.bPreserveNewLines &&
            this.setState({ bPreserveNewLines: t });
        }
        OnTextAreaChange(e) {
          this.setState({ strHTMLData: e.currentTarget.value });
        }
        render() {
          const { closeModal: e } = this.props;
          return this.state.bConverting
            ? o.createElement(
                C.o0,
                {
                  strTitle: (0, m.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, m.we)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: e,
                  bAlertDialog: !0,
                  onOK: e,
                  onCancel: e,
                },
                o.createElement(se.t, null),
              )
            : this.state.bFinishedConverting
              ? o.createElement(C.o0, {
                  strTitle: (0, m.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, m.we)(
                    "#EventEditor_ImportFromHTML_ConvertFinished",
                  ),
                  closeModal: e,
                  bAlertDialog: !0,
                  onOK: e,
                  onCancel: e,
                })
              : o.createElement(
                  C.eV,
                  {
                    title: (0, m.we)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: e,
                    className: ie().BBCodeEditorInputStyles,
                  },
                  o.createElement(
                    X.nB,
                    null,
                    o.createElement(
                      X.a3,
                      null,
                      o.createElement(
                        "div",
                        {
                          className: (0, p.A)(
                            i().FlexColumnContainer,
                            ie().ImportHTMLCtn,
                          ),
                        },
                        o.createElement(
                          "div",
                          { className: i().FlexColumnContainer },
                          (0, m.PP)(
                            "#EventEditor_ImportFromHTML_ConvertDescription",
                            o.createElement(
                              "a",
                              {
                                target: g.TS.IN_CLIENT ? void 0 : "_blank",
                                href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                              },
                              (0, m.we)(
                                "#EventEditor_ImportFromHTML_ConvertLearn",
                              ),
                            ),
                          ),
                        ),
                        o.createElement("textarea", {
                          value: this.state.strHTMLData,
                          placeholder: (0, m.we)(
                            "#EventEditor_ImportFromHTML_Instruction",
                          ),
                          className: ie().ImportHTMLTextArea,
                          onChange: this.OnTextAreaChange,
                          ref: (e) => e && e.focus(),
                        }),
                        o.createElement(
                          "div",
                          { className: ie().ImportHTMLCheckBoxLine },
                          o.createElement("input", {
                            id: "ImportFromHTMLNewLines",
                            type: "checkbox",
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          o.createElement(
                            "label",
                            { htmlFor: "ImportFromHTMLNewLines" },
                            (0, m.we)(
                              "#EventEditor_ImportFromHTML_PreserveNewlines",
                            ),
                            o.createElement(Ne.o, {
                              tooltip: (0, m.we)(
                                "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                              ),
                            }),
                          ),
                        ),
                        o.createElement(
                          "div",
                          null,
                          (0, m.we)(
                            "#EventEditor_ImportFromHTML_ConvertToBBCode",
                          ),
                        ),
                      ),
                    ),
                    o.createElement(
                      X.wi,
                      null,
                      o.createElement(X.VQ, {
                        onCancel: e,
                        strOKText: (0, m.we)("#Button_Overwrite"),
                        onUpdate: this.OnConvertAndAppendHTML,
                        strUpdateText: (0, m.we)("#Button_Append"),
                      }),
                    ),
                  ),
                );
        }
      };
      (0, a.Cg)([u.oI], fe.prototype, "OnConvertAndOverriteHTML", null),
        (0, a.Cg)([u.oI], fe.prototype, "OnConvertAndAppendHTML", null),
        (0, a.Cg)([u.oI], fe.prototype, "OnCheckboxChange", null),
        (0, a.Cg)([u.oI], fe.prototype, "OnTextAreaChange", null),
        (fe = (0, a.Cg)([L.PA], fe));
      var je = n(48011),
        Re = n(83450),
        Ue = n.n(Re);
      const ze = (0, L.PA)((e) => {
        const { appid: t, eventLink: n } = e,
          a = o.useRef(null),
          { data: r } = (0, ae.js)(g.iA.steamid),
          [s, l] = o.useState(""),
          [c, u] = o.useState(!1),
          [d, h] = o.useState(""),
          [E, M] = o.useState(!1);
        o.useEffect(
          () => () =>
            a.current &&
            a.current("ShareEventOnFriendsActivityFeed: unmounting"),
          [],
        );
        const S = r ? r.avatar_url : null,
          I = j.b.InitFromAccountID(g.iA.accountid),
          A = async () => {
            a.current &&
              a.current("ShareEventOnFriendsActivityFeed: cancel previous...");
            const e = B().CancelToken.source();
            (a.current = e.cancel), u(!0);
            let o = s;
            0 != o.trim().length && (o += "\n\n"), (o += n);
            const r =
              g.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              I.ConvertTo64BitString() +
              "/ajaxpostuserstatus";
            try {
              if (g.TS.IN_STEAMUI) {
                let n = _.w.Init(R.kV);
                n.Body().set_appid(t), n.Body().set_status_text(o);
                let a = await R.xt.PostStatusToFriends(
                  f.Vw.CMInterface.GetServiceTransport(),
                  n,
                );
                if (1 != a.GetEResult()) {
                  const t =
                    (0, m.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    a.GetEResult();
                  return (
                    console.error(t, !e.token.reason),
                    void (e.token.reason || h(t))
                  );
                }
              } else {
                const n = new FormData();
                n.append("appid", "" + t),
                  n.append("status_text", o),
                  n.append("sessionid", g.TS.SESSIONID);
                const a = await B().post(r, n, { withCredentials: !0 });
                if (200 != a.status || 1 != a?.data?.success) {
                  const t =
                    (0, m.we)("#EventDisplay_Share_Failure") +
                    "\n\n" +
                    a?.data?.message;
                  return console.error(t), void (e.token.reason || h(t));
                }
              }
              e.token.reason ||
                (M(!0), h((0, m.we)("#EventDisplay_Share_Success")));
            } catch (t) {
              const n = (0, Se.H)(t),
                a =
                  (0, m.we)("#EventDisplay_Share_Failure") +
                  "\n\n" +
                  n.strErrorMsg;
              e.token.reason || h(a), console.error(a);
            }
          };
        return c
          ? o.createElement(
              C.o0,
              {
                strDescription: "",
                strTitle: (0, m.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: e.closeModal,
                bAlertDialog: !0,
              },
              o.createElement(
                "div",
                { className: i().FlexColumnContainer },
                o.createElement(
                  "div",
                  null,
                  (0, m.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                o.createElement(
                  "div",
                  { className: Ue().Container },
                  0 == d?.length
                    ? o.createElement(se.t, { position: "center" })
                    : o.createElement("div", null, d),
                  Boolean(E) &&
                    o.createElement(
                      "a",
                      {
                        href:
                          g.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          I.ConvertTo64BitString() +
                          "/home",
                        target: g.TS.IN_CLIENT ? void 0 : "_blank",
                      },
                      (0, m.we)("#EventDisplay_Share_OpenActivityFeed"),
                    ),
                ),
              ),
            )
          : o.createElement(
              C.o0,
              {
                strDescription: "",
                strTitle: (0, m.we)("#Button_Share"),
                onCancel: e.closeModal,
                onOK: A,
                strOKButtonText: (0, m.we)("#Button_Post"),
              },
              o.createElement(
                "div",
                { className: i().FlexColumnContainer },
                o.createElement(
                  "div",
                  null,
                  (0, m.we)("#EventDisplay_Share_OnMyStatus_Details"),
                ),
                o.createElement(
                  "div",
                  {
                    className: (0, p.A)(
                      Ue().Container,
                      i().FlexColumnContainer,
                    ),
                  },
                  o.createElement(
                    "div",
                    null,
                    o.createElement("img", {
                      className: Ue().SmallAvatar,
                      src: S,
                      "data-miniprofile": "s" + g.iA.steamid,
                    }),
                    o.createElement(
                      "div",
                      { className: (0, p.A)(i().FlexColumnContainer) },
                      o.createElement(De, {
                        strPlaceholder: (0, m.we)(
                          "#EventDisplay_Share_OnMyStatus_Placeholder",
                        ),
                        fnGetCurText: () => s,
                        fnOnTextChange: (e) => l(e.currentTarget.value),
                        fnSetText: l,
                        emoticonStore: e.emoticonStore,
                        bSupportHTMLImport: !1,
                        showFormatHelp: "UserStatusPublished",
                        limitBBCode: O.iH,
                        classNameForTextArea: Ue().ShareDescription,
                        bEmbeddedInDialog: !0,
                      }),
                    ),
                  ),
                  o.createElement(
                    "div",
                    { className: Ue().ShareLink },
                    o.createElement(je.fh, {
                      text: n,
                      event: null,
                      partnerEventStore: e.partnerEventStore,
                    }),
                  ),
                ),
              ),
            );
      });
      var He = n(30470);
      const Ge = (e) => {
        const t = o.createRef(),
          [n, a] = o.useState(""),
          r = o.createRef();
        return o.createElement(
          "div",
          null,
          o.createElement(
            "div",
            {
              className: (0, p.A)(i().FlexRowContainer, A().linkField),
              onClick: (e) => {
                t.current &&
                  t.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(t.current.value)
                    .then((e) => {
                      a((0, m.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((e) => {
                      a(
                        (0, m.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", e);
                    });
              },
            },
            o.createElement(
              "span",
              { className: A().LinkInputLabel },
              (0, m.we)(
                e.labelOverride ? e.labelOverride : "#EventDisplay_Share_Link",
              ),
            ),
            o.createElement("textarea", {
              className: A().LinkInput,
              ref: t,
              value: e.eventLink,
              readOnly: !0,
            }),
            document.queryCommandSupported("copy") &&
              o.createElement(
                "div",
                {
                  className: (0, p.A)(i().Button, i().Icon, A().LinkButton),
                  title: (0, m.we)("#ToolTip_CopyLinkToClipboard"),
                },
                o.createElement(
                  M.he,
                  { toolTipContent: (0, m.we)("#ToolTip_CopyLinkToClipboard") },
                  o.createElement("img", {
                    className: A().ClipboardIcon,
                    src: He.A,
                  }),
                ),
              ),
          ),
          o.createElement("div", { ref: r, className: A().ClipboardText }, n),
        );
      };
      class Ye extends o.Component {
        state = { bShareOnSteamDialog: !1, bRequireLoginToShare: !1 };
        ShareOnSteamActivityFeed() {
          g.iA.logged_in
            ? this.setState({ bShareOnSteamDialog: !0 })
            : g.TS.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({ bRequireLoginToShare: !0 });
        }
        render() {
          const {
            eventLink: e,
            fnGetSharePageUrl: t,
            appid: n,
            closeModal: a,
            emoticonStore: r,
            partnerEventStore: s,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? o.createElement(C.o0, {
                strTitle: (0, m.we)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, m.we)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, m.we)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, c.vg)(),
              })
            : this.state.bShareOnSteamDialog
              ? o.createElement(ze, {
                  eventLink: e,
                  appid: n,
                  emoticonStore: r,
                  partnerEventStore: s,
                  closeModal: a,
                })
              : o.createElement(
                  C.o0,
                  {
                    strDescription: "",
                    strTitle: (0, m.we)("#Button_Share"),
                    onCancel: this.props.closeModal,
                    onOK: this.props.closeModal,
                    bAlertDialog: !0,
                    modalClassName: "EventDisplay_Share_Dialog",
                  },
                  o.createElement(Fe, {
                    eventLink: e,
                    fnGetSharePageUrl: t,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                );
        }
      }
      (0, a.Cg)([u.oI], Ye.prototype, "ShareOnSteamActivityFeed", null);
      const Fe = (e) => {
        const {
            eventLink: t,
            fnGetSharePageUrl: n,
            fnShareOnSteamActivityFeed: a,
          } = e,
          l = (0, g.Y2)(),
          [c, u] = (0, o.useState)((0, r.sf)(g.TS.LANGUAGE)),
          C = (0, o.useMemo)(() => {
            const e = new URL(t);
            return e.searchParams.set("l", (0, r.Lg)(c)), e.href;
          }, [c, t]);
        return o.createElement(
          "div",
          {
            className: (0, p.A)(
              i().FlexColumnContainer,
              A().share_controls_ctn,
            ),
          },
          !l &&
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: A().ShareLanguagePicker },
                o.createElement(
                  X.JU,
                  { className: A().LanguageLabel },
                  (0, m.we)("#EventDisplay_Share_LanguageLabel"),
                ),
                o.createElement(
                  "div",
                  null,
                  o.createElement(k, {
                    selectedLang: c,
                    fnOnLanguageChanged: u,
                  }),
                ),
              ),
              o.createElement(
                "div",
                {
                  className: (0, p.A)(
                    i().FlexRowContainer,
                    A().ShareButtonContainer,
                  ),
                  style: { flexWrap: "wrap" },
                },
                o.createElement(
                  M.he,
                  { toolTipContent: (0, m.we)("#EventDisplay_Share_OnSteam") },
                  o.createElement(
                    "div",
                    {
                      onClick: a,
                      className: (0, p.A)(
                        i().Button,
                        A().ShareBtn,
                        A().ShareSteamBtn,
                      ),
                    },
                    o.createElement("img", {
                      className: A().SteamIcon,
                      src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=",
                    }),
                    o.createElement(
                      "span",
                      { style: { whiteSpace: "nowrap" } },
                      (0, m.we)("#EventDisplay_Share_OnMyStatus"),
                    ),
                  ),
                ),
                o.createElement(
                  M.he,
                  {
                    toolTipContent: (0, m.we)("#EventDisplay_Share_OnFaceBook"),
                  },
                  o.createElement(
                    S.uU,
                    { href: n(s._.k_eFacebook), className: A().ShareBtn },
                    o.createElement("img", {
                      className: (0, p.A)(i().Button),
                      src: d.A,
                    }),
                  ),
                ),
                o.createElement(
                  M.he,
                  {
                    toolTipContent: (0, m.we)("#EventDisplay_Share_OnTwitter"),
                  },
                  o.createElement(
                    S.uU,
                    { href: n(s._.k_eTwitter), className: A().ShareBtn },
                    o.createElement("img", {
                      className: (0, p.A)(i().Button),
                      src: E.A,
                    }),
                  ),
                ),
                o.createElement(
                  M.he,
                  { toolTipContent: (0, m.we)("#EventDisplay_Share_OnReddit") },
                  o.createElement(
                    S.uU,
                    { href: n(s._.k_eReddit), className: A().ShareBtn },
                    o.createElement("img", {
                      className: (0, p.A)(i().Button),
                      src: h.A,
                    }),
                  ),
                ),
              ),
              o.createElement("div", { className: i().Divider }),
            ),
          o.createElement(Ge, { eventLink: C }),
        );
      };
    },
    30470: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    6367: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    99447: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MjI5RjcyNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MjI5RjczNjYyMjExRTlCQTM3QzA4REJGQTAwNUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUyMjlGNzA2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUyMjlGNzE2NjIyMTFFOUJBMzdDMDhEQkZBMDA1RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oZ6UCAAAFiElEQVR42uybW2hcVRSGZ9JE22RotJa2wUrEW0xBlGIl0kijQZqWoPXSPjSt0oLgg4hvpY999SkQxYoPgmmgKkKVSiMqtrQpVeO9YCMOtTqmaVF6G5OYXqb/ov/AdHrOnrXP2efkwMyGj0Mm+7LWOvuy1t77pAuFQqqaU12qylPNANVugPryH9LptNMGMMfMxaMDdII20A6WggxoYrb/QB7kwK9gDBwCRyDPtGN5bvyhFEeNNIKNYB+YKgRPU6xD6mp0ZYDr9HVpAJRvAf3gQsF9usC6WxJnAJRrBgNgphB9mmFbzYkwAMr0gVOF+JO02TdrBkDeDNhVmP0kMmSCGiBdrrRmFUCZu/HYC+5PyGp2DPRC9qztKlAXoAs9hMdIgpRPUZYRymaVrHoAGzgA5ifUrzkPVkGHH533AHb74QQrn6Jsw5TVXQ/gJPNtwrp9pTlhBXTJu+oBOyNW/iDYAt4Co+BS2f8nwWtgGegBXyvmhJ3B1kXvdT7q9CK4pbicSfwAOsCrYAj0eLjaWUW9faH8AHp4cTg57WA7uAx+Ae+Al8ADYI7Pi9uhdJaawxhgIAblz4E6sMfn/9kQBpA0EMgADGzi8O2/YHsnDXnWBBwCxdihxc8ApklwG2iIYcb+BoLcgecSQ573kecVcB9Yjb+/Ancp62+gLvplkLH3KW5aRJ2eoZAfRNiGLIeLodukdhlcF5PyKS5pj0TcRoY6qfcEN8ekfA5v5SS3zKJOm1UG4B5eV1xvn8vc8hja6qJu5k1Rvo25EQpyFsjSdlomN7AQfCpjlBPb0ojaLW7O7q9kgE7HDZ8De8BnErKiy//pkWdDSQ9cgMejdHmfAy0OZeksN8AN6yIYdLS+i0f3Arg5xAbmHPAUOORR/+UAMg1WdITAqLIyEeB1CT0paBt4A/wDtoh353g/fx04Ad4shrt4LgLbwLRS5lGNASaUlW0yHIREklB3vc/vq8EVhcwTGgPkFRUdTNoGAGT6SCF3XuMKNynaG07gJsiXijxNWkeoUqpXvpWHwQ+0/nEZx4oyPeAog5jDFhudDUG7TpAhMKyodz4nxNJ0ESwzlGnziEAnNPv+yPOhqyGQV9hNJp1nK+R5HNzm0XOeVgRGpWkx6zIp/yR9Bk1QVHEI5JSdZ7dsWRn+P+Xz+/+GMhd9fp8xKL8Vj48lkNXEHpohYOMIjRgEuwmMleU/YzrdlX0B7hCVpt+kLkOZvWEcIa8eMOZiSobLK2+tGwyCn+kOP8boz6/MX+zu+xgv7AZPsC4XaUzTA7osLDqegPX/qIW8XRUPRxk1nbGICNvxho7NkvIynP5Wjn+ZkyTQmjZOgryTs99CjpdnsQNsVSov6YDnfSOvXWHeybG5x3OP4S3JIce7oNvizXZwwsoY8iwBZy3k3KjeFue2s809H9nZmWdwiHIMVmTpXOOlGNvsprEu0YlaaAiTP7e8X9Roey7Qbxlrf+IX+/NtDdITLCYJbb8H39FNLsb3VxjYtBqUt72Z0u/X431PhznBnLD0sQ+D9ahj3Ef4RXisBQ+Ce8GtHMOya/Q7+EkCLZTP+ZRfwGV1rYVM4ly1Fpdfq3uCAY/G/nW9IYK65EWtl2U3gDzBjsaYOczhqIstsXrwPDgS4iZZ8MNRFgh7PC6u7Xusp1Wh9O1U+m1wOmTbFY/HtTdEduHR56hHy3j/A4yXBDkN3P29k/OCizQEXTZ5GeA6fWtXZHSBjVTUm7p2YJr0JDL2eimvOhozGCHLw4rzCVZeZOvRXJgMtCfI+3erEtoTRCbjHcHQBigxwkqOsySN+ZW2ygfeFWYXWyEzbQKUH+KElw1UunZdvvbBRO2Tmag/mpoMofRk1B9NBfpgwrLBRH82l659O1zlqWaAajfAVQEGAEyk4t4HpStTAAAAAElFTkSuQmCC";
    },
    73674: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/674.js.map
