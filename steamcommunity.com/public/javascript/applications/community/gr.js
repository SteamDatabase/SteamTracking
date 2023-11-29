/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5710],
  {
    88324: (t, e, i) => {
      i.r(e), i.d(e, { default: () => u });
      var n = i(33940),
        c = i(89526),
        o = i(27070),
        s = i(5615),
        l = i(68333),
        r = i(52430),
        d = i(44973);
      function u(t) {
        const e = (function (t) {
          const e = (0, o.bY)();
          return (0, s.useQuery)(["grclip", t], () =>
            (0, n.mG)(this, void 0, void 0, function* () {
              const i = l.gA.Init(r.qS);
              i.Body().set_clip_id(t), i.Body().set_steamid(d.L7.steamid);
              return (yield r.xG.GetSingleSharedClip(e, i)).Body();
            }),
          );
        })(t.clipID);
        if (!e.data)
          return c.createElement(
            "div",
            { style: { color: "white" } },
            "Loading...",
          );
        const i = e.data.clip();
        return c.createElement(
          "div",
          { style: { color: "white" } },
          i.total_file_size_bytes(),
        );
      }
    },
  },
]);
