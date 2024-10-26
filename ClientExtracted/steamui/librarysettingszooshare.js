"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6622],
  {
    91452: (e, t, l) => {
      l.r(t), l.d(t, { default: () => o });
      var n = l(63696),
        a = l(44926),
        i = l(64608),
        r = l(24195),
        c = l(26853),
        s = l(65933),
        u = l(33372),
        d = l(76835);
      const o = function (e) {
        const [t, l] = n.useState(0);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            i.nB,
            null,
            n.createElement(
              i.Y9,
              null,
              "Use the controls to spoof timeline events",
            ),
            n.createElement(i.pd, {
              onChange: (e) => l(parseInt(e.target.value)),
              label: "AppID",
              placeholder: "Type an AppID (Maybe 480 for Spacewar?)",
            }),
            n.createElement(i._E, null),
            n.createElement(m, { appid: t }),
            n.createElement(g, { appid: t }),
            n.createElement(h, { appid: t }),
            n.createElement(f, { appid: t }),
          ),
        );
      };
      function m(e) {
        const [t, l] = n.useState(""),
          [r, c] = n.useState(""),
          [s, u] = n.useState(""),
          { appid: d } = e,
          [o, m] = n.useState("");
        if (!d) return null;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(i.iK, null, "AddTimelineHighlightMarker"),
          o && n.createElement(i.JU, null, o, " "),
          n.createElement(p, { strIcon: t, fnSetIcon: l }),
          n.createElement(E, { appid: d, strIcon: t, fnSetIcon: l }),
          n.createElement(i.pd, {
            onChange: (e) => c(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          n.createElement(i.pd, {
            onChange: (e) => u(e.target.value),
            label: "Description",
            placeholder: "Localized string",
          }),
          n.createElement(
            i.$n,
            {
              onClick: async () => {
                m("");
                const e = await a.Y$.AddTimelineHighlightMarker({
                  appid: d,
                  icon: t,
                  title: r,
                  desc: s,
                });
                1 != e.GetEResult() && m(`Call failed with ${e.GetEResult()}`);
              },
              disabled: !t.length || !r.length,
            },
            "Submit",
          ),
        );
      }
      function p(e) {
        const { strIcon: t, fnSetIcon: l } = e,
          a = (0, n.useMemo)(
            () =>
              (0, r.dD)().map((e) => {
                const t = (0, r.o1)(e).func({});
                return {
                  label: n.createElement("div", { key: e }, t, " ", e),
                  data: e,
                };
              }),
            [],
          );
        return n.createElement(i.m, {
          rgOptions: a,
          label: "Steam Official Icons",
          selectedOption: t,
          onChange: (e) => l(e.data),
        });
      }
      function E(e) {
        const { appid: t, strIcon: l, fnSetIcon: a } = e,
          r = (0, s.useGameTimelineMarkers)(t),
          d = (0, n.useMemo)(
            () =>
              r?.map((e) => ({
                label: n.createElement(
                  "div",
                  { key: e, style: { display: "flex", flexDirection: "row" } },
                  n.createElement(
                    "div",
                    { style: { width: "36px", height: "36px" } },
                    n.createElement(u.mH, {
                      strMarkerIcon: e,
                      strGameID: "" + t,
                    }),
                  ),
                  " ",
                  e,
                ),
                data: e,
              })),
            [t, r],
          );
        return null == r
          ? n.createElement(c.t, { size: "medium", string: "loading" })
          : n.createElement(
              n.Fragment,
              null,
              Boolean(0 == r.length)
                ? n.createElement("div", null, "No custom game icons")
                : n.createElement(i.m, {
                    rgOptions: d,
                    label: "Game Custom Icons",
                    selectedOption: l,
                    onChange: (e) => a(e.data),
                  }),
            );
      }
      function g(e) {
        const [t, l] = n.useState(""),
          { appid: r } = e,
          [c, s] = n.useState("");
        if (!r) return null;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(i.iK, null, "AddTimelineTimestamp"),
          c && n.createElement(i.JU, null, c, " "),
          n.createElement(i.pd, {
            onChange: (e) => l(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          n.createElement(
            i.$n,
            {
              onClick: async () => {
                s("");
                const e = await a.Y$.AddTimelineTimestamp({
                  appid: r,
                  title: t,
                });
                1 != e.GetEResult() && s(`Call failed with ${e.GetEResult()}`);
              },
              disabled: !t.length,
            },
            "Submit",
          ),
        );
      }
      function h(e) {
        const [t, l] = n.useState(""),
          [r, c] = n.useState(Math.round(Date.now() / 1e3)),
          [s, u] = n.useState(""),
          { appid: d } = e,
          [o, m] = n.useState([]),
          [p, E] = n.useState("");
        if (!d) return null;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(i.iK, null, "AddTimelineRange"),
          p && n.createElement(i.JU, null, p, " "),
          n.createElement(i.pd, {
            onChange: (e) => l(e.target.value),
            label: "ID",
            placeholder: "Unique ID for this range",
          }),
          n.createElement(i.pd, {
            onChange: (e) => u(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          n.createElement(i.JU, null, "Full ID will be ", t, "_", r),
          n.createElement(
            i.$n,
            {
              onClick: async () => {
                const e = `${t}_${r}`;
                c(Math.round(Date.now() / 1e3)), E("");
                const l = await a.Y$.AddTimelineRangeStart({
                  appid: d,
                  id: e,
                  title: s,
                });
                if (1 === l.GetEResult()) {
                  const t = [...o, e];
                  m(t);
                } else E(`Call failed with ${l.GetEResult()}`);
              },
              disabled: !t.length || !s.length,
            },
            "Start Range",
          ),
          o.map((e) =>
            n.createElement(
              i.$n,
              {
                key: e,
                onClick: async () => {
                  E("");
                  const t = await a.Y$.AddTimelineRangeEnd({ appid: d, id: e });
                  if (1 === t.GetEResult()) {
                    const t = o.filter((t) => t != e);
                    m(t);
                  } else E(`Call failed with ${t.GetEResult()}`);
                },
              },
              "End Range ",
              e,
            ),
          ),
        );
      }
      function f(e) {
        const [t, l] = n.useState(d.il.Invalid),
          { appid: r } = e,
          [c, s] = n.useState(""),
          u = [
            { data: d.il.Invalid, label: "Invalid" },
            { data: d.il.Playing, label: "Playing" },
            { data: d.il.Staging, label: "Staging" },
            { data: d.il.Menus, label: "Menus" },
          ];
        if (!r) return null;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(i.iK, null, "SetTimelineGameMode"),
          c && n.createElement(i.JU, null, c, " "),
          n.createElement(i.ZU, {
            rgOptions: u,
            onChange: (e) => l(e?.data),
            selectedOption: t,
            strDefaultLabel: "Select a game mode",
          }),
          n.createElement(
            i.$n,
            {
              onClick: async () => {
                s("");
                const e = await a.Y$.SetTimelineGameMode({ appid: r, mode: t });
                1 != e.GetEResult() && s(`Call failed with ${e.GetEResult()}`);
              },
              disabled: t == d.il.Invalid,
            },
            "Submit",
          ),
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/librarysettingszooshare.js.map
