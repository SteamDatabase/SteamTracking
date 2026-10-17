(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [8624],
    {
      15713: (W) => {
        W.exports = {
          PinnedSection: "_19Vm5Rp9my8iJURrNMCKUo",
          OverlayPinned: "_2VeFXNqMTBkLnytILUwxhS",
          PinnedAchievementsList: "_2GPPm0eEkGp3FduoQQNudM",
          PinnedSlot: "_1MhihHiVesUDdXIXdMLM1H",
          PinnedRow: "PvkY7hiM54lbxeMpdHkhr",
          IsDragging: "_3uWAjibsDAHb6c7aCgjRWS",
          OutsideDropArea: "_2FEGacABHSl1K-7wogXXf3",
          RowContent: "_3eaokkqWXK9f7ixEuHEYeI",
          DragHandle: "_1XjJ-Blbt_FHc8LaQAkVNm",
          OverlayHidden: "_1q5kVKMMVxawjhdK2UkKei",
          CloneRoot: "_241cCP7iNXYFnVbuS4HqJ0",
        };
      },
      78624: (W, S, n) => {
        "use strict";
        n.r(S), n.d(S, { PinnedAchievementsList: () => Q });
        var t = n(62540),
          R = n(17879),
          V = n(12116),
          N = n(71815),
          G = n(38831),
          F = n(19462),
          a = n(63696),
          j = n(79671),
          X = n(377),
          b = n(12711),
          Y = n(69385),
          f = n(8658),
          H = n(47361),
          w = n(6739),
          O = n(2255),
          T = n(71088),
          d = n(15713),
          q = n.n(d),
          k = n(88887),
          x = n(13889);
        const y = 8;
        function Q(v) {
          const { appid: s } = (0, O.My)(),
            { isPinned: o } = (0, O.po)(),
            l = (0, O.aH)(),
            { data: r } = (0, R.On)(s),
            E = (0, a.useMemo)(() => {
              const c = new Map();
              for (const A of r?.groups ?? [])
                for (const C of A.achievements) c.set(C.api_name, C);
              return c;
            }, [r]),
            [h, p] = (0, a.useState)();
          h && h.basis !== l?.pinnedAchievements && p(void 0);
          const _ = h?.names ?? l?.pinnedAchievements,
            m = l?.setPinnedAchievements,
            P = l?.pinnedAchievements,
            g = (0, a.useMemo)(
              () =>
                P &&
                m &&
                ((c) => {
                  p({ basis: P, names: c }), m(c);
                }),
              [P, m],
            ),
            M = (0, a.useMemo)(
              () => (_ ?? []).map((c) => E.get(c)).filter((c) => c !== void 0),
              [_, E],
            );
          return !_ || !g
            ? null
            : (0, t.jsxs)(V.s, {
                direction: "column",
                gap: "2",
                padding: { initial: "2", sm: "4" },
                className: (0, f.A)(d.PinnedSection, o && d.OverlayPinned),
                navProps: { focusableIfEmpty: !0 },
                children: [
                  (0, t.jsx)(N.EY, {
                    contrast: "description",
                    weight: "heavy",
                    style: { lineHeight: "20px" },
                    className: o ? d.OverlayHidden : void 0,
                    children: x.c.Localize(
                      "#Achievements_Table_PinnedTitle",
                      (0, k.D)(M.length),
                    ),
                  }),
                  M.length > 0
                    ? (0, t.jsx)($, {
                        ...v,
                        pinned: M,
                        pinnedNames: _,
                        setPinnedNames: g,
                      })
                    : (0, t.jsx)(N.EY, {
                        contrast: "description",
                        children: x.c.Localize("#Achievements_Pin_Empty"),
                      }),
                ],
              });
        }
        function J(v) {
          let s = null;
          for (
            let o = v.closest("[data-accent-color]");
            o;
            o = o.parentElement?.closest("[data-accent-color]") ?? null
          )
            s = o;
          return {
            className: (0, f.A)(d.CloneRoot, "noOpinionatedGlobalStyles"),
            "data-accent-color": s?.getAttribute("data-accent-color") ?? void 0,
            "data-dull-color": s?.getAttribute("data-dull-color") ?? void 0,
            "data-body-text-color":
              s?.getAttribute("data-body-text-color") ?? void 0,
            style: {
              "--icon-size": window
                .getComputedStyle(v)
                .getPropertyValue("--icon-size"),
            },
          };
        }
        function z(v) {
          const {
              provided: s,
              snapshot: o,
              index: l,
              achievement: r,
              cloneRootProps: E,
              compareTo: h,
              compareProgress: p,
              globalPercentages: _,
              moveTo: m,
            } = v,
            { appid: P, targetsteamid: g } = (0, O.My)(),
            { data: M } = (0, R.dP)(P, g ?? ""),
            c = M?.achievements[r.internal_key],
            A = (0, w.Qn)(),
            { isPinned: C } = (0, O.po)(),
            B = (e) => {
              (0, X.lX)(
                (0, t.jsxs)(b.tz, {
                  children: [
                    (0, t.jsx)(b.kt, {
                      onSelected: () => m(r.api_name, "top"),
                      children: x.c.Localize("#Achievements_Pin_MoveToTop"),
                    }),
                    (0, t.jsx)(b.kt, {
                      onSelected: () => m(r.api_name, "bottom"),
                      children: x.c.Localize("#Achievements_Pin_MoveToBottom"),
                    }),
                  ],
                }),
                e,
              );
            },
            D = o.isDropAnimating,
            I = s.draggableProps.onTransitionEnd;
          (0, a.useLayoutEffect)(() => {
            D && I?.({ propertyName: "transform" });
          }, [D, I]);
          const U = {
              ...(0, H.gQ)(s.draggableProps.style ?? {}),
              marginBottom: y,
            },
            L = (0, t.jsxs)("div", {
              className: (0, f.A)(
                d.PinnedRow,
                o.isDragging && d.IsDragging,
                o.isDragging && !o.draggingOver && d.OutsideDropArea,
              ),
              ref: s.innerRef,
              ...s.draggableProps,
              ...s.dragHandleProps,
              style: U,
              onContextMenu: B,
              children: [
                (0, t.jsx)("div", {
                  className: d.RowContent,
                  children: (0, t.jsx)(T.wf, {
                    appid: P,
                    achievement: r,
                    progress: c,
                    unlockedForSelf: c?.unlocked ?? !1,
                    globalUnlockPercentage:
                      _?.percentages[r.internal_key] ?? void 0,
                    showProgress: !0,
                    compareTo: h,
                    compareProgress: p,
                    tableindex: l,
                    alwaysPinnable: !0,
                    hideGlobalRate: !0,
                  }),
                }),
                !A &&
                  (0, t.jsx)(Y.Rows, {
                    className: (0, f.A)(d.DragHandle, C && d.OverlayHidden),
                  }),
              ],
            });
          return E ? (0, t.jsx)("div", { ...E, children: L }) : L;
        }
        function $(v) {
          const {
              pinned: s,
              pinnedNames: o,
              setPinnedNames: l,
              compareTo: r,
            } = v,
            { isPanel: E, appid: h } = (0, O.My)(),
            p = (0, w.Qn)(),
            { data: _ } = (0, R.jw)(h),
            m = (0, R.e2)(h, r ?? []),
            P = (0, F.R7)(),
            g = (0, a.useRef)(null),
            [M, c] = (0, a.useState)(56);
          (0, a.useEffect)(() => {
            if (!g.current) return;
            const e = parseInt(
              window
                .getComputedStyle(g.current)
                .getPropertyValue("--icon-size"),
            );
            isNaN(e) || c(e + (p ? T.Fh : T.uY));
          }, [p]);
          const A = (0, a.useRef)(0),
            C = (0, a.useCallback)((e) => {
              const u = g.current?.querySelector(
                `[data-rbd-draggable-id="${CSS.escape(e.draggableId)}"]`,
              );
              A.current = u?.getBoundingClientRect().height ?? 0;
            }, []),
            B = (0, a.useCallback)(
              (e) => {
                !e.destination ||
                  e.destination.index == e.source.index ||
                  l((0, H.Yb)(o, e.source.index, e.destination.index));
              },
              [o, l],
            ),
            D = (0, a.useCallback)(
              (e, u) => {
                const i = o.filter((K) => K !== e);
                l(u == "top" ? [e, ...i] : [...i, e]);
              },
              [o, l],
            ),
            I = (0, a.useCallback)(
              (e, u, i) =>
                (0, t.jsx)(z, {
                  provided: e,
                  snapshot: u,
                  index: i.source.index,
                  achievement: s[i.source.index],
                  cloneRootProps: g.current ? J(g.current) : void 0,
                  compareTo: r,
                  compareProgress: m,
                  globalPercentages: _,
                  moveTo: D,
                }),
              [s, r, m, _, D],
            ),
            U = (0, a.useCallback)(
              () => P?.ownerWindow?.document.body ?? window.document.body,
              [P],
            ),
            L = (0, a.useCallback)(
              (e, u) => {
                const i = s[e];
                return (0, t.jsxs)("div", {
                  className: d.PinnedSlot,
                  children: [
                    (0, t.jsx)(
                      j.sx,
                      {
                        draggableId: i.api_name,
                        index: e,
                        children: (K, Z) =>
                          (0, t.jsx)(z, {
                            provided: K,
                            snapshot: Z,
                            index: e,
                            achievement: i,
                            compareTo: r,
                            compareProgress: m,
                            globalPercentages: _,
                            moveTo: D,
                          }),
                      },
                      i.api_name,
                    ),
                    u == i.api_name &&
                      (0, t.jsx)("div", { style: { height: A.current + y } }),
                  ],
                });
              },
              [s, r, m, _, D],
            );
          return (0, t.jsx)(j.JY, {
            onBeforeCapture: C,
            onDragEnd: B,
            stylesInsertionPoint: P?.ownerWindow?.document?.head,
            children: (0, t.jsx)(j.gL, {
              droppableId: "pinned-achievements",
              mode: "virtual",
              direction: "vertical",
              isCombineEnabled: !1,
              renderClone: I,
              getContainerForClone: U,
              children: (e, u) =>
                (0, t.jsx)("div", {
                  className: d.PinnedAchievementsList,
                  style: { marginBottom: -y },
                  ref: (i) => {
                    e.innerRef(i), (g.current = i);
                  },
                  ...e.droppableProps,
                  children: (0, t.jsx)(G.SR, {
                    navKey: "PinnedAchievementsList",
                    hintVirtualizeType: E ? "element" : "window",
                    bNativeScrollIntoView: !0,
                    bBrowserScrollAnchoring: !0,
                    nRows: s.length,
                    nItemHeight: M + y,
                    nRowGap: 0,
                    overscan: 5,
                    bDynamic: !0,
                    renderItem: (i) => L(i, u.draggingFromThisWith ?? null),
                  }),
                }),
            }),
          });
        }
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/8624.js.map
