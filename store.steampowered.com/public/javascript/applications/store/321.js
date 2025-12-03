/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [321],
  {
    19418: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Picker: "tid_OE5NJWCCVJQP1PfRc",
        Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
        Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
        Focus: "_1xH5si_KorJpS4ST2Geksh",
        TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
        Active: "_1ddEQAfz6GuVRSEqk-d0r",
        Content: "dUQIH8Qg80N6kjB8UQO0P",
        ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
        Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
        SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
        SectionTitle: "_3WuFl419BivPeLqeVIC939",
        FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
        FilterInput: "_2l4z-U60lABvd9XWArGjAf",
        AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
      };
    },
    90024: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
        chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
        chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
        chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
        minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
        chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
        EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
        EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
        disabled: "jaQN2IyN4P8LZXJ6P11qy",
        Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
        AudioLines: "IWabakUFeIH_d5rhBZ6dG",
        Active: "_37tPtXtV-sv9XgDHjS2cnj",
      };
    },
    283: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => M });
      var r = n(34629),
        o = n(90626),
        i = n(75844),
        c = n(84933),
        s = n(45699),
        l = n(76217),
        a = n(88997),
        m = n(10820),
        d = n(61859),
        E = n(52038),
        u = n(90024),
        p = n.n(u),
        h = n(97232),
        C = n(32754);
      const N = 1576780700;
      let S = class extends o.Component {
        OnEmoticonClick(e) {
          const {
            emoticonStore: t,
            strFlairGroupID: n,
            SetUIDisplayPref: r,
            contextOptions: i,
            bShowChatAddons: c,
          } = this.props;
          let s = null;
          if (
            ((s = c
              ? o.createElement(m.Q4, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  onEmoticonSelected: (e) =>
                    this.props.OnEmoticonSelected(e, !1),
                  roomEffectSettings: this.props.roomEffectSettings,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                })
              : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
                ? o.createElement(m.CE, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })
                : o.createElement(m.iY, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })),
            (0, a.lX)(
              s,
              e,
              i || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              },
            ),
            this.BHaveUnseenEmoticons() && r)
          ) {
            let e = this.GetNewestIndicatorTime();
            (!e || e < N) && (e = N), r("rtLastAckedNewEmoticons", e);
          }
        }
        GetNewestIndicatorTime() {
          let e = this.props.emoticonStore,
            t = Number.MIN_SAFE_INTEGER,
            n = e.GetTimeReceivedNewestEmoticon();
          n && (t = n);
          let r = e.GetTimeReceivedForStickerOrEffect();
          return (t = Math.max(r, t)), t > Number.MIN_SAFE_INTEGER ? t : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: e } = this.props;
          let t = this.GetNewestIndicatorTime();
          return !e || e < N || (t && (!e || e < t));
        }
        render() {
          const { disabled: e, className: t, ttip: n, useImg: r } = this.props;
          let i = [t],
            c = !1;
          return (
            e ? i.push("disabled") : this.BHaveUnseenEmoticons() && (c = !0),
            n && i.push("ttip"),
            r
              ? o.createElement(
                  l.Z,
                  {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, d.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                  },
                  o.createElement(
                    C.he,
                    { toolTipContent: n },
                    o.createElement("img", {
                      src: this.props.useImg,
                      className: (0, E.A)(...i),
                      title:
                        this.props.title ||
                        (0, d.we)("#ChatEntryButton_Emoticon"),
                    }),
                  ),
                )
              : (i.push(p().chatSubmitButton, p().EmoticonPickerButton),
                o.createElement(
                  s.fu,
                  {
                    className: (0, E.A)(...i),
                    onOKActionDescription: (0, d.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, d.we)("#ChatEntryButton_Emoticon"),
                    disabled: e,
                  },
                  o.createElement(
                    C.he,
                    { toolTipContent: n },
                    this.props.buttonIcon || o.createElement(h.nl, null),
                    c && o.createElement(m.iD, null),
                  ),
                ))
          );
        }
      };
      (0, r.Cg)([c.oI], S.prototype, "OnEmoticonClick", null),
        (S = (0, r.Cg)([i.PA], S));
      const M = S;
    },
    10820: (e, t, n) => {
      "use strict";
      n.d(t, { Q4: () => b, iY: () => U, CE: () => G, iD: () => X });
      var r = n(34629),
        o = n(14947),
        i = n(75844),
        c = n(90626),
        s = n(30193),
        l = n(55263),
        a = n(68451),
        m = n(52038),
        d = n(61859);
      function E(e, t, n = !1) {
        return `${e}economy/sticker${n ? "static" : ""}/${encodeURIComponent(t)}`;
      }
      var u = n(78327),
        p = n(53835),
        h = n(76217),
        C = n(88006),
        N = n(19418);
      class S extends c.Component {
        constructor(e) {
          super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 });
        }
        render() {
          const { config: e } = this.props,
            { activeIndex: t } = this.state,
            n = e[t] && e[t].renderContent ? e[t].renderContent() : null,
            r = e.length > 1,
            o = r
              ? ({ detail: { button: t } }) => {
                  t === C.pR.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : t === C.pR.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          e.length - 1,
                          this.state.activeIndex + 1,
                        ),
                      });
                }
              : void 0;
          return c.createElement(
            h.Z,
            { className: N.Picker, onButtonDown: o },
            r && c.createElement(M, null, this.RenderTabs()),
            n,
          );
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: e }, t) => {
            const n = this.state.activeIndex === t;
            return c.createElement(
              L,
              {
                key: t,
                active: n,
                onClick: () => this.setState({ activeIndex: t }),
              },
              e(n),
            );
          });
        }
      }
      function M(e) {
        return c.createElement(
          h.Z,
          { className: N.Tabs, "flow-children": "row" },
          e.children,
        );
      }
      function f(e) {
        return c.createElement("div", { className: N.Content }, e.children);
      }
      function L(e) {
        const { active: t, children: n, onClick: r } = e;
        return c.createElement(
          h.Z,
          {
            className: (0, m.A)(N.Tab, t && N.Active),
            focusClassName: N.Focus,
            onActivate: r,
          },
          c.createElement(
            "div",
            { className: (0, m.A)(N.TabContent, t && N.Active) },
            n,
          ),
        );
      }
      function w(e) {
        const {
          items: t,
          renderItem: n,
          onItemSelect: r,
          keyExtractor: o,
          renderEmpty: i,
        } = e;
        let s = t.map((e, i) =>
          c.createElement(
            h.Z,
            {
              key: o(e),
              className: N.Item,
              onActivate: () => r(t[i]),
              autoFocus: 0 === i,
              focusClassName: N.Focus,
            },
            n(t[i]),
          ),
        );
        return (
          0 === t.length && i && (s = i()),
          c.createElement(
            h.Z,
            { "flow-children": "grid", className: N.ItemList },
            s,
          )
        );
      }
      function I(e) {
        const { title: t, onFilterChange: n, filter: r, onSubmit: o, ...i } = e;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            f,
            null,
            c.createElement(A, { title: t }, c.createElement(w, { ...i })),
          ),
          c.createElement(T, { value: r, onChange: n, onSubmit: o }),
        );
      }
      function k(e) {
        const { onFilterChange: t, filter: n, sections: r, title: o } = e;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            f,
            null,
            o && c.createElement("div", { className: N.SectionedPageTitle }, o),
            r.map(({ title: e, ...t }) =>
              c.createElement(
                A,
                { title: e, key: e },
                c.createElement(w, { ...t }),
              ),
            ),
          ),
          c.createElement(T, { value: n, onChange: t }),
        );
      }
      function A(e) {
        return c.createElement(
          "div",
          { className: N.Section },
          c.createElement("div", { className: N.SectionTitle }, e.title),
          c.createElement("div", { className: N.SectionContent }, e.children),
        );
      }
      function T(e) {
        const { value: t, onChange: n, onSubmit: r } = e;
        return c.createElement(
          "div",
          { className: N.FilterInputContainer },
          c.createElement(p.pd, {
            type: "text",
            placeholder: (0, d.we)("#AddonPicker_Search"),
            className: N.FilterInput,
            value: t,
            onChange: (e) => n(e.target.value),
            onSubmit: r,
          }),
        );
      }
      function _(e) {
        const { className: t, ...n } = e;
        return c.createElement("div", {
          className: (0, m.A)(t, N.AddonPickerMessage),
          ...n,
        });
      }
      var g = n(42060),
        D = n.n(g),
        x = n(51272),
        P = n(81962);
      function y(e) {
        return e.recent_emoticons;
      }
      function v(e) {
        return e.recent_stickers;
      }
      function z(e) {
        return y(e).length + v(e).length > 0;
      }
      const b = (0, i.PA)((e) => {
        const {
          emoticonStore: t,
          roomEffectSettings: n,
          strFlairGroupID: r,
          onEmoticonSelected: i,
          onRoomEffectSelected: s,
          onStickerSelected: l,
        } = e;
        !(function (e) {
          const [t, n] = (0, c.useState)(e.is_initialized);
          (0, c.useEffect)(() => {
            if (!e.is_initialized) {
              e.UpdateEmoticonList();
              const t = (0, o.z7)(
                () => e.is_initialized,
                () => n(e.is_initialized),
              );
              return () => t();
            }
            return () => {};
          }, [e]);
        })(t);
        const E = [];
        return (
          z(t) &&
            E.push({
              renderTab: (e) =>
                c.createElement(
                  "span",
                  {
                    title: (0, d.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, m.A)(
                      D().PickerTab,
                      D().Clock,
                      e && D().ActiveTab,
                    ),
                  },
                  c.createElement(te, null),
                ),
              renderContent: () =>
                c.createElement(O, {
                  store: t,
                  onEmoticonSelect: (e) => i(e.name),
                  onStickerSelect: (e) => l(e.name),
                  flairGroupID: r,
                }),
            }),
          c.createElement(
            a.tz,
            null,
            c.createElement(S, {
              config: [
                ...E,
                {
                  renderTab: (e) =>
                    c.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: (0, m.A)(D().PickerTab, e && D().ActiveTab),
                      },
                      c.createElement($, null),
                    ),
                  renderContent: () =>
                    c.createElement(R, {
                      store: t,
                      onItemSelect: (e) => i(e.name),
                      flairGroupID: r,
                    }),
                },
                {
                  renderTab: (e) =>
                    c.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Stickers"),
                        className: (0, m.A)(D().PickerTab, e && D().ActiveTab),
                      },
                      c.createElement(K, null),
                    ),
                  renderContent: () =>
                    c.createElement(H, {
                      store: t,
                      onItemSelect: (e) => l(e.name),
                    }),
                },
                {
                  renderTab: (e) =>
                    c.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_RoomEffects"),
                        className: (0, m.A)(D().PickerTab, e && D().ActiveTab),
                      },
                      c.createElement(ee, null),
                    ),
                  renderContent: () =>
                    c.createElement(B, {
                      store: t,
                      effectSettings: n,
                      onItemSelect: (e) => s(e.name),
                    }),
                },
              ],
            }),
          )
        );
      });
      let j = class extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: e,
              onEmoticonSelected: t,
              onStickerSelected: n,
              strFlairGroupID: r,
            } = this.props,
            o = [];
          return (
            z(e) &&
              o.push({
                renderTab: (e) =>
                  c.createElement(
                    "span",
                    {
                      title: (0, d.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, m.A)(
                        D().PickerTab,
                        D().Clock,
                        e && D().ActiveTab,
                      ),
                    },
                    c.createElement(te, null),
                  ),
                renderContent: () =>
                  c.createElement(O, {
                    store: e,
                    onEmoticonSelect: (e) => t(e.name),
                    onStickerSelect: (e) => n(e.name),
                    flairGroupID: r,
                  }),
              }),
            c.createElement(
              a.tz,
              null,
              c.createElement(S, {
                config: [
                  ...o,
                  {
                    renderTab: (e) =>
                      c.createElement(
                        "span",
                        {
                          title: (0, d.we)("#AddonPicker_Emoticons"),
                          className: (0, m.A)(
                            D().PickerTab,
                            e && D().ActiveTab,
                          ),
                        },
                        c.createElement($, null),
                      ),
                    renderContent: () =>
                      c.createElement(R, {
                        store: e,
                        onItemSelect: (e) => t(e.name),
                        flairGroupID: r,
                      }),
                  },
                  {
                    renderTab: (e) =>
                      c.createElement(
                        "span",
                        {
                          title: (0, d.we)("#AddonPicker_Stickers"),
                          className: (0, m.A)(
                            D().PickerTab,
                            e && D().ActiveTab,
                          ),
                        },
                        c.createElement(K, null),
                      ),
                    renderContent: () =>
                      c.createElement(H, {
                        store: e,
                        onItemSelect: (e) => n(e.name),
                      }),
                  },
                ],
              }),
            )
          );
        }
      };
      j = (0, r.Cg)([i.PA], j);
      class U extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return c.createElement(
            a.tz,
            null,
            c.createElement(S, {
              config: [
                {
                  renderTab: () =>
                    c.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: D().PickerTab,
                      },
                      c.createElement($, null),
                    ),
                  renderContent: () =>
                    c.createElement(Z, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class G extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return c.createElement(
            a.tz,
            null,
            c.createElement(S, {
              config: [
                {
                  renderTab: () =>
                    c.createElement(
                      "span",
                      {
                        title: (0, d.we)("#AddonPicker_Emoticons"),
                        className: D().PickerTab,
                      },
                      c.createElement($, null),
                    ),
                  renderContent: () =>
                    c.createElement(Q, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class O extends c.Component {
        state = { filter: "" };
        render() {
          const {
              store: e,
              onEmoticonSelect: t,
              onStickerSelect: n,
            } = this.props,
            { filter: r } = this.state,
            o = [];
          return (
            y(e) &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentEmoticons"),
                items: s.pN.FilterEmoticons(y(e), r),
                onItemSelect: t,
                renderItem: (e) => c.createElement(V, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  c.createElement(
                    _,
                    null,
                    r
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            v(e).length &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentStickers"),
                items: s.pN.FilterStickers(v(e), r),
                onItemSelect: n,
                renderItem: (e) => c.createElement(Y, { sticker: e }),
                keyExtractor: ({ name: e }) => e,
                renderEmpty: () =>
                  c.createElement(
                    _,
                    null,
                    r
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Stickers"),
                        ),
                  ),
              }),
            c.createElement(k, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: r,
              sections: o,
            })
          );
        }
      }
      class R extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: r } = this.state,
            o = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
            i = s.pN.FilterEmoticons(o, r).slice(0, 1e3);
          return c.createElement(I, {
            title: (0, d.we)("#AddonPicker_Emoticons"),
            items: i,
            onItemSelect: t,
            renderItem: (e) => c.createElement(V, { emoticon: e }),
            keyExtractor: (e) => e.name,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            onSubmit: () => t(i[0]),
            renderEmpty: () =>
              r
                ? c.createElement(_, null, (0, d.we)("#AddonPicker_NoResults"))
                : c.createElement(F, null),
          });
        }
      }
      function F() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            _,
            null,
            (0, d.we)(
              "#AddonPicker_NoneOwned",
              (0, d.we)("#AddonPicker_Emoticons"),
            ),
          ),
          c.createElement(
            _,
            null,
            (0, d.PP)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              c.createElement(
                x.uU,
                { href: `${u.TS.STORE_BASE_URL}points/shop/c/emoticons` },
                (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
              ),
              c.createElement(
                x.uU,
                { href: `${u.TS.COMMUNITY_BASE_URL}market` },
                (0, d.we)("#AddonPicker_AcquireAtPointsShopOrMarket_Link"),
              ),
            ),
          ),
        );
      }
      class H extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t } = this.props,
            { filter: n } = this.state,
            r = s.pN.FilterStickers(e.GetStickerList(), n);
          return c.createElement(I, {
            title: (0, d.we)("#EmoticonPicker_StickerHeading"),
            items: r,
            onItemSelect: t,
            renderItem: (e) => c.createElement(Y, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: n,
            onSubmit: () => t(r[0]),
            renderEmpty: () =>
              n
                ? c.createElement(_, null, (0, d.we)("#AddonPicker_NoResults"))
                : c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      _,
                      null,
                      (0, d.we)(
                        "#AddonPicker_NoneOwned",
                        (0, d.we)("#AddonPicker_Stickers"),
                      ),
                    ),
                    c.createElement(
                      _,
                      null,
                      (0, d.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        c.createElement(
                          x.uU,
                          {
                            href: `${u.TS.STORE_BASE_URL}points/shop/c/stickers`,
                          },
                          (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      class B extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, effectSettings: t, onItemSelect: n } = this.props,
            { filter: r } = this.state,
            o = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
          return c.createElement(I, {
            title: (0, d.we)("#EmoticonPicker_EffectHeading"),
            items: o,
            onItemSelect: n,
            renderItem: (e) =>
              c.createElement(J, { effect: e, roomEffectSettings: t }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            onSubmit: () => n(o[0]),
            renderEmpty: () =>
              r
                ? c.createElement(_, null, (0, d.we)("#AddonPicker_NoResults"))
                : c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      _,
                      null,
                      (0, d.we)(
                        "#AddonPicker_NoneOwned",
                        (0, d.we)("#AddonPicker_RoomEffects"),
                      ),
                    ),
                    c.createElement(
                      _,
                      null,
                      (0, d.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        c.createElement(
                          x.uU,
                          {
                            href: `${u.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                          },
                          (0, d.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      let Z = class extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: r } = this.state,
            o = [];
          return (
            y(e).length &&
              o.push({
                title: (0, d.we)("#AddonPicker_RecentEmoticons"),
                items: s.pN.FilterEmoticons(y(e), r),
                onItemSelect: t,
                renderItem: (e) => c.createElement(V, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  c.createElement(
                    _,
                    null,
                    r
                      ? (0, d.we)("#AddonPicker_NoResults")
                      : (0, d.we)(
                          "#AddonPicker_NoRecent",
                          (0, d.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            c.createElement(k, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: r,
              sections: [
                ...o,
                {
                  title: (0, d.we)("#AddonPicker_AllEmoticons"),
                  items: s.pN.FilterStickers(e.emoticon_list, r).slice(0, 1e3),
                  onItemSelect: t,
                  renderItem: (e) => c.createElement(V, { emoticon: e }),
                  keyExtractor: (e) => e.name,
                  renderEmpty: () =>
                    r
                      ? c.createElement(
                          _,
                          null,
                          (0, d.we)("#AddonPicker_NoResults"),
                        )
                      : c.createElement(F, null),
                },
              ],
            })
          );
        }
      };
      Z = (0, r.Cg)([i.PA], Z);
      let Q = class extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: r } = this.state;
          return c.createElement(k, {
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            sections: [
              {
                title: (0, d.we)("#ChatEntryButton_Flair"),
                items: s.pN.FilterStickers(e.GetFlairListByGroupID(n), r),
                onItemSelect: t,
                renderItem: (e) => c.createElement(V, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  r
                    ? c.createElement(
                        _,
                        null,
                        (0, d.we)("#AddonPicker_NoResults"),
                      )
                    : c.createElement(F, null),
              },
            ],
          });
        }
      };
      Q = (0, r.Cg)([i.PA], Q);
      const V = (e) => {
        const { emoticon: t, large: n } = e,
          r = !t.last_used && t.time_received;
        return c.createElement(
          "div",
          { className: D().EmoticonItem },
          c.createElement(P.n, { emoticon: t.name, large: n }),
          r && c.createElement(X, null),
        );
      };
      class Y extends c.Component {
        state = { showHover: !1 };
        m_ref = c.createRef();
        render() {
          const { sticker: e, className: t, ...n } = this.props,
            r = E(u.TS.COMMUNITY_CDN_URL, e.name);
          return c.createElement(
            "div",
            {
              ref: this.m_ref,
              className: (0, m.A)(t, D().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...n,
            },
            c.createElement("img", { style: { width: "100%" }, src: r }),
            this.state.showHover &&
              c.createElement(W, { target: this.m_ref.current, sticker: e }),
          );
        }
      }
      const W = (0, i.PA)((e) => {
        const {
            target: t,
            sticker: { name: n, appid: r },
          } = e,
          [o] = (0, l.t7)(r, {});
        return c.createElement(
          P.c,
          { target: t, title: n, subtitle: o?.GetName() },
          c.createElement("img", {
            src: E(u.TS.COMMUNITY_CDN_URL, n),
            className: D().StickerHoverSticker,
          }),
        );
      });
      class J extends c.Component {
        state = { showHover: !1 };
        m_ref = c.createRef();
        render() {
          const {
              effect: e,
              roomEffectSettings: t,
              className: n,
              ...r
            } = this.props,
            o = t[e.name];
          return c.createElement(
            "div",
            {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, m.A)(n, D().EffectButton),
              ...r,
            },
            o.renderEffectIcon(),
            this.state.showHover &&
              c.createElement(q, {
                target: this.m_ref.current,
                effect: e,
                roomEffectSettings: t,
              }),
          );
        }
      }
      const q = (0, i.PA)((e) => {
        const {
            target: t,
            effect: { name: n, appid: r },
            roomEffectSettings: o,
          } = e,
          i = o[n],
          [s] = (0, l.t7)(r, {});
        return c.createElement(
          P.c,
          { target: t, title: n, subtitle: s?.GetName() },
          c.createElement(
            "div",
            { className: D().EffectHoverEffect },
            i.renderEffectIcon(),
          ),
        );
      });
      function X() {
        return c.createElement(
          "div",
          { className: D().NewEmoticonIndicator },
          c.createElement("div", { className: D().NewEmoticonCircle }),
        );
      }
      function K(e) {
        return c.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          c.createElement("path", {
            fill: "currentColor",
            d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M21 29H22.1875V31H19L21 29Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M29 22.1875V21L31 19V22.1875H29Z",
          }),
        );
      }
      function $(e) {
        return c.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          c.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
          }),
        );
      }
      function ee(e) {
        return c.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          c.createElement("path", {
            fill: "currentColor",
            d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
          }),
          c.createElement("path", {
            fill: "currentColor",
            d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
          }),
        );
      }
      function te(e) {
        const { className: t, ...n } = e;
        return c.createElement(
          "svg",
          {
            className: (0, m.A)("SVGIcon_Button SVGIcon_Clock", t),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...n,
          },
          c.createElement("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          }),
        );
      }
    },
    96715: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    19654: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        n.p +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
  },
]);
