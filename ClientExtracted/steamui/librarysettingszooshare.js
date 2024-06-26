"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [6969],
  {
    29224: (e, t, l) => {
      l.r(t), l.d(t, { default: () => d });
      var a = l(27378),
        n = l(87110),
        i = l(62923),
        r = l(89378),
        c = l(27258),
        s = l(99213),
        u = l(64116),
        o = l(71949);
      const d = function (e) {
        const [t, l] = a.useState(0);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            i.uT,
            null,
            a.createElement(
              i.h4,
              null,
              "Use the controls to spoof timeline events",
            ),
            a.createElement(i.II, {
              onChange: (e) => l(parseInt(e.target.value)),
              label: "AppID",
              placeholder: "Type an AppID (Maybe 480 for Spacewar?)",
            }),
            a.createElement(i.tr, null),
            a.createElement(m, { appid: t }),
            a.createElement(g, { appid: t }),
            a.createElement(h, { appid: t }),
            a.createElement(f, { appid: t }),
          ),
        );
      };
      function m(e) {
        const [t, l] = a.useState(""),
          [r, c] = a.useState(""),
          [s, u] = a.useState(""),
          { appid: o } = e,
          [d, m] = a.useState("");
        if (!o) return null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.bU, null, "AddTimelineHighlightMarker"),
          d && a.createElement(i.__, null, d, " "),
          a.createElement(p, { strIcon: t, fnSetIcon: l }),
          a.createElement(E, { appid: o, strIcon: t, fnSetIcon: l }),
          a.createElement(i.II, {
            onChange: (e) => c(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          a.createElement(i.II, {
            onChange: (e) => u(e.target.value),
            label: "Description",
            placeholder: "Localized string",
          }),
          a.createElement(
            i.zx,
            {
              onClick: async () => {
                m("");
                const e = await n.Gq.AddTimelineHighlightMarker({
                  appid: o,
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
          n = (0, a.useMemo)(
            () =>
              (0, r.KO)().map((e) => {
                const t = (0, r.XT)(e).func({});
                return {
                  label: a.createElement("div", { key: e }, t, " ", e),
                  data: e,
                };
              }),
            [],
          );
        return a.createElement(i.ry, {
          rgOptions: n,
          label: "Steam Official Icons",
          selectedOption: t,
          onChange: (e) => l(e.data),
        });
      }
      function E(e) {
        const { appid: t, strIcon: l, fnSetIcon: n } = e,
          r = (0, s.useGameTimelineMarkers)(t),
          o = (0, a.useMemo)(
            () =>
              r?.map((e) => ({
                label: a.createElement(
                  "div",
                  { key: e, style: { display: "flex", flexDirection: "row" } },
                  a.createElement(
                    "div",
                    { style: { width: "36px", height: "36px" } },
                    a.createElement(u.VH, {
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
          ? a.createElement(c.V, { size: "medium", string: "loading" })
          : a.createElement(
              a.Fragment,
              null,
              Boolean(0 == r.length)
                ? a.createElement("div", null, "No custom game icons")
                : a.createElement(i.ry, {
                    rgOptions: o,
                    label: "Game Custom Icons",
                    selectedOption: l,
                    onChange: (e) => n(e.data),
                  }),
            );
      }
      function g(e) {
        const [t, l] = a.useState(""),
          { appid: r } = e,
          [c, s] = a.useState("");
        if (!r) return null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.bU, null, "AddTimelineTimestamp"),
          c && a.createElement(i.__, null, c, " "),
          a.createElement(i.II, {
            onChange: (e) => l(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          a.createElement(
            i.zx,
            {
              onClick: async () => {
                s("");
                const e = await n.Gq.AddTimelineTimestamp({
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
        const [t, l] = a.useState(""),
          [r, c] = a.useState(Math.round(Date.now() / 1e3)),
          [s, u] = a.useState(""),
          { appid: o } = e,
          [d, m] = a.useState([]),
          [p, E] = a.useState("");
        if (!o) return null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.bU, null, "AddTimelineRange"),
          p && a.createElement(i.__, null, p, " "),
          a.createElement(i.II, {
            onChange: (e) => l(e.target.value),
            label: "ID",
            placeholder: "Unique ID for this range",
          }),
          a.createElement(i.II, {
            onChange: (e) => u(e.target.value),
            label: "Title",
            placeholder: "Localized string",
          }),
          a.createElement(i.__, null, "Full ID will be ", t, "_", r),
          a.createElement(
            i.zx,
            {
              onClick: async () => {
                const e = `${t}_${r}`;
                c(Math.round(Date.now() / 1e3)), E("");
                const l = await n.Gq.AddTimelineRangeStart({
                  appid: o,
                  id: e,
                  title: s,
                });
                if (1 === l.GetEResult()) {
                  const t = [...d, e];
                  m(t);
                } else E(`Call failed with ${l.GetEResult()}`);
              },
              disabled: !t.length || !s.length,
            },
            "Start Range",
          ),
          d.map((e) =>
            a.createElement(
              i.zx,
              {
                key: e,
                onClick: async () => {
                  E("");
                  const t = await n.Gq.AddTimelineRangeEnd({ appid: o, id: e });
                  if (1 === t.GetEResult()) {
                    const t = d.filter((t) => t != e);
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
        const [t, l] = a.useState(o.Ml.Invalid),
          { appid: r } = e,
          [c, s] = a.useState(""),
          u = [
            { data: o.Ml.Invalid, label: "Invalid" },
            { data: o.Ml.Playing, label: "Playing" },
            { data: o.Ml.Staging, label: "Staging" },
            { data: o.Ml.Menus, label: "Menus" },
          ];
        if (!r) return null;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.bU, null, "SetTimelineGameMode"),
          c && a.createElement(i.__, null, c, " "),
          a.createElement(i.TW, {
            rgOptions: u,
            onChange: (e) => l(e?.data),
            selectedOption: t,
            strDefaultLabel: "Select a game mode",
          }),
          a.createElement(
            i.zx,
            {
              onClick: async () => {
                s("");
                const e = await n.Gq.SetTimelineGameMode({ appid: r, mode: t });
                1 != e.GetEResult() && s(`Call failed with ${e.GetEResult()}`);
              },
              disabled: t == o.Ml.Invalid,
            },
            "Submit",
          ),
        );
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps/librarysettingszooshare.js.map
