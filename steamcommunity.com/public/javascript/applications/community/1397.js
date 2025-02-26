/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1397],
  {
    51397: (e, n, t) => {
      t.r(n), t.d(n, { getIconClasses: () => u });
      var i,
        o = t(68578),
        s = t(56753),
        r = t(76506),
        a = t(42207);
      !(function (e) {
        (e[(e.FILE = 0)] = "FILE"),
          (e[(e.FOLDER = 1)] = "FOLDER"),
          (e[(e.ROOT_FOLDER = 2)] = "ROOT_FOLDER");
      })(i || (i = {}));
      var c = t(74439);
      const l = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
      function u(e, n, t, u, h) {
        if (c.L.isThemeIcon(h))
          return [`codicon-${h.id}`, "predefined-file-icon"];
        if (r.r.isUri(h)) return [];
        const L =
          u === i.ROOT_FOLDER
            ? ["rootfolder-icon"]
            : u === i.FOLDER
              ? ["folder-icon"]
              : ["file-icon"];
        if (t) {
          let r;
          if (t.scheme === o.ny.data) {
            r = s.B6.parseMetaData(t).get(s.B6.META_DATA_LABEL);
          } else {
            const e = t.path.match(l);
            e
              ? ((r = f(e[2].toLowerCase())),
                e[1] && L.push(`${f(e[1].toLowerCase())}-name-dir-icon`))
              : (r = f(t.authority.toLowerCase()));
          }
          if (u === i.ROOT_FOLDER) L.push(`${r}-root-name-folder-icon`);
          else if (u === i.FOLDER) L.push(`${r}-name-folder-icon`);
          else {
            if (r) {
              if (
                (L.push(`${r}-name-file-icon`),
                L.push("name-file-icon"),
                r.length <= 255)
              ) {
                const e = r.split(".");
                for (let n = 1; n < e.length; n++)
                  L.push(`${e.slice(n).join(".")}-ext-file-icon`);
              }
              L.push("ext-file-icon");
            }
            const i = (function (e, n, t) {
              if (!t) return null;
              let i = null;
              if (t.scheme === o.ny.data) {
                const e = s.B6.parseMetaData(t).get(s.B6.META_DATA_MIME);
                e && (i = n.getLanguageIdByMimeType(e));
              } else {
                const n = e.getModel(t);
                n && (i = n.getLanguageId());
              }
              if (i && i !== a.vH) return i;
              return n.guessLanguageIdByFilepathOrFirstLine(t);
            })(e, n, t);
            i && L.push(`${f(i)}-lang-file-icon`);
          }
        }
        return L;
      }
      function f(e) {
        return e.replace(/[\s]/g, "/");
      }
    },
  },
]);
