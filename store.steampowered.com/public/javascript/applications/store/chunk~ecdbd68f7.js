/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6002],
  {
    15619: (e, t, r) => {
      r.d(t, { V: () => p, l: () => S });
      var i = r(85556),
        n = r(80751),
        s = r.n(n),
        a = r(50060),
        o = r(54842),
        l = r(77936),
        d = r(79545),
        h = r(35427),
        g = r(82182),
        c = r(37563),
        m = r(92011),
        _ = r(62210),
        u = r(67005),
        f = r(77131),
        x = r(16997);
      const y = "(1)";
      class S {
        constructor(e) {
          (this.m_Transport = null),
            (this.m_Storage = null),
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: 3,
              bIgnoreFriends: !1,
            }),
            (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_bInitialized = !1),
            (this.m_nLoadLanguagesRetryTimeout = void 0),
            (0, o.rC)(this);
          let t = new g.n8();
          (this.m_TextFilterPreferences = {
            eTextFilterSetting: t.text_filter_setting(),
            bIgnoreFriends: t.text_filter_ignore_friends(),
          }),
            (this.m_TextFilterWords = new g.No()),
            (this.m_DataAccess = e);
        }
        Init(e = 0, t = null, r = null) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = f.N),
              (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              this.InitSteamEngineLanguages(),
              yield this.LoadFilter(),
              yield this.LoadTextFilterPreferences(),
              yield this.LoadTextFilterWords(),
              yield this.RequestUpdatedSettings(),
              yield this.LoadLanguages(),
              this.OnFilterDataChanged(),
              (this.m_bInitialized = !0);
          });
        }
        InitSteamEngineLanguages() {
          this.m_WebUIServiceTransport.BIsValid() &&
            (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
              u.gi.NotifyTextFilterDictionaryChangedHandler,
              this.OnTextFilterDictionaryChanged,
            ),
            this.InitSteamEngineLanguage(c.De.LANGUAGE),
            "english" !== c.De.LANGUAGE &&
              this.InitSteamEngineLanguage("english"));
        }
        OnTextFilterDictionaryChanged(e) {
          return (
            this.LoadLanguages().then(() => {
              this.OnFilterDataChanged();
            }),
            1
          );
        }
        InitSteamEngineLanguage(e) {
          const t = d.gA.Init(u.iR);
          t.Body().set_language(e),
            t.Body().set_type("profanity"),
            u.gi.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            ),
            t.Body().set_type("banned"),
            u.gi.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            );
        }
        GetSteamEngineTextFilterDictionary(e, t) {
          const r = d.gA.Init(u.du);
          return (
            r.Body().set_language(e),
            r.Body().set_type(t),
            u.gi.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
          );
        }
        GetStorageKey(e) {
          return e + "_" + this.m_unAccountID;
        }
        LoadTextFilterPreferences() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              e && (this.m_TextFilterPreferences = e);
            }
          });
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              this.m_TextFilterPreferences,
            );
        }
        ObfuscateString(e) {
          try {
            const t = new TextEncoder().encode(y + e);
            return a.JQ(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = a.b$(e);
            let r = new TextDecoder().decode(t);
            return r.startsWith(y)
              ? ((r = r.slice(3)), r)
              : (console.log(
                  "DeobfuscateString given invalid base64 data, ignoring: " + e,
                ),
                "");
          } catch (e) {
            return "";
          }
        }
        LoadObfuscatedString(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let t = yield this.m_Storage.GetString(this.GetStorageKey(e));
              if (t) return this.DeobfuscateString(t);
            }
            return null;
          });
        }
        SaveObfuscatedString(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(e),
                this.ObfuscateString(t),
              );
          });
        }
        LoadTextFilterWords() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e = yield this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (e)
              try {
                this.m_TextFilterWords = g.No.fromObject(JSON.parse(e));
              } catch (t) {
                console.warn("Error parsing cached text filter word list", e),
                  (this.m_TextFilterWords = new g.No());
              }
          });
        }
        SaveTextFilterWords() {
          this.SaveObfuscatedString(
            "CTextFilterStore_TextFilterWords",
            JSON.stringify(this.m_TextFilterWords.toObject()),
          );
        }
        LoadFilter() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e = yield this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              t = yield this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            null != e && null != t && this.BRebuildFilter(e, t);
          });
        }
        SaveFilter() {
          this.SaveObfuscatedString(
            "CTextFilterStore_strBannedPattern",
            this.m_strBannedPattern,
          ),
            this.SaveObfuscatedString(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern,
            );
        }
        RequestUpdatedSettings() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e = new g.n8();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = d.gA.Init(g.AP);
                  e = (yield g.lk.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: c.De.SESSIONID, origin: (0, c.Kc)() };
                  const r = yield s().get(
                    c.De.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 },
                  );
                  e = g.n8.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new g.No();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = d.gA.Init(g.Oz);
                    t = (yield g.lk.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = { sessionid: c.De.SESSIONID, origin: (0, c.Kc)() };
                    const r = yield s().get(
                      c.De.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 },
                    );
                    t = g.No.fromObject(r.data.words);
                  }
                } catch (e) {}
              this.UpdateTextFilterWords(t);
            }
          });
        }
        UpdateCommunityPreferences(e) {
          var t;
          let r = !1;
          e.text_filter_setting() !==
            (null === (t = this.m_TextFilterPreferences) || void 0 === t
              ? void 0
              : t.eTextFilterSetting) &&
            ((this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
            (r = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends()),
              (r = !0)),
            r && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        LoadLanguages(e = 15) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = "");
            try {
              yield this.LoadLanguage(c.De.LANGUAGE),
                "english" !== c.De.LANGUAGE &&
                  (yield this.LoadLanguage("english"));
            } catch (t) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, _.X)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (e = Math.min(2 * e, 3600)),
                console.warn(
                  "LoadLanguages caught",
                  t,
                  "retry in",
                  e,
                  "seconds",
                ),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                  () =>
                    (0, i.mG)(this, void 0, void 0, function* () {
                      (this.m_nLoadLanguagesRetryTimeout = void 0),
                        yield this.LoadLanguages(e),
                        this.OnFilterDataChanged();
                    }),
                  1e3 * e,
                ));
            }
          });
        }
        LoadLanguage(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = "",
              r = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const t = yield this.GetSteamEngineTextFilterDictionary(
                    e,
                    "banned",
                  );
                  this.m_strBannedWords += t.Body().dictionary();
                }
                {
                  const t = yield this.GetSteamEngineTextFilterDictionary(
                    e,
                    "profanity",
                  );
                  this.m_strProfanityWords += t.Body().dictionary();
                }
                r = !0;
              } catch (e) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  e,
                );
              }
            if (!r) {
              t = `${c.De.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${(0, c.Kc)()}`;
              {
                const e = yield s().get(t);
                this.m_strBannedWords += e.data;
              }
              t = `${c.De.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${(0, c.Kc)()}`;
              {
                const e = yield s().get(t);
                this.m_strProfanityWords += e.data;
              }
            }
            t = `${c.De.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${(0, c.Kc)()}`;
            {
              const e = yield s().get(t);
              this.m_strCleanWords += e.data;
            }
          });
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return (function (e) {
              if ("" === e) return !1;
              try {
                return new RegExp("\\b(" + e + ")\\b", "ugi"), !0;
              } catch (t) {
                return (
                  console.log(
                    `'${e}' is an invalid expression, removing from text filter`,
                  ),
                  !1
                );
              }
            })(e);
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
            t = [],
            r = [];
          switch (this.m_TextFilterPreferences.eTextFilterSetting) {
            case 0:
            case 3:
              break;
            case 2:
              t = t.concat(this.m_strBannedWords.split(e));
              break;
            default:
              t = t.concat(
                this.m_strProfanityWords.split(e),
                this.m_strBannedWords.split(e),
              );
          }
          (t = t.concat(
            this.m_TextFilterWords.text_filter_custom_banned_words(),
          )),
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words(),
            ));
          let i = this.CreatePattern(t),
            n = this.CreatePattern(r);
          "" != n && (n = "^(" + n + ")$"),
            this.BRebuildFilter(i, n) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (
            ((this.m_regexBannedWords = null),
            (this.m_strBannedPattern = e),
            "" !== e)
          )
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                (0, m.Uh)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`,
                  ),
                ),
                (this.m_strBannedPattern = "");
            }
          if (
            ((this.m_regexCleanWords = null),
            (this.m_strCleanPattern = t),
            "" !== t)
          )
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                (0, m.Uh)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`,
                  ),
                ),
                (this.m_strCleanPattern = "");
            }
          return !0;
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new h.K(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (this.m_TextFilterPreferences.bIgnoreFriends &&
              this.m_DataAccess.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length),
              );
        }
      }
      let T;
      function p() {
        if (!T) {
          const e = new Set();
          let t = { sessionid: c.De.SESSIONID, origin: (0, c.Kc)() };
          s()
            .get(c.De.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              var r, i;
              for (const n of null !==
                (i =
                  null === (r = t.data.friendslist) || void 0 === r
                    ? void 0
                    : r.friends) && void 0 !== i
                ? i
                : [])
                (0, l.my)(n.efriendrelationship) &&
                  e.add(new h.K(n.ulfriendid).GetAccountID());
            }),
            (T = (t) => e.has(t));
        }
        return T;
      }
      (0, i.gn)([o.LO], S.prototype, "m_TextFilterPreferences", void 0),
        (0, i.gn)([o.LO], S.prototype, "m_mapPlayerCache", void 0),
        (0, i.gn)([o.LO], S.prototype, "m_regexBannedWords", void 0),
        (0, i.gn)([o.LO], S.prototype, "m_regexCleanWords", void 0),
        (0, i.gn)([o.LO], S.prototype, "m_bInitialized", void 0),
        (0, i.gn)([o.aD], S.prototype, "Init", null),
        (0, i.gn)([x.a], S.prototype, "OnTextFilterDictionaryChanged", null),
        (0, i.gn)([o.aD], S.prototype, "UpdateCommunityPreferences", null),
        (0, i.gn)([o.aD], S.prototype, "BRebuildFilter", null);
    },
  },
]);
