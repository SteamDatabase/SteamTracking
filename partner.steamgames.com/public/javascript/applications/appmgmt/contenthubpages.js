/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    64641: (e) => {
      e.exports = {
        v6: "_2LxgdMcpWJRjkxZKbmeEEb",
        SubText: "vg0EOhKTLB3tLvshHMr7l",
        AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
        GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
        AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
        STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
        ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
        EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
        Small: "_3M4j828iWSVEZZAkypcBi1",
        FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
        ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
        MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
        SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
        RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
      };
    },
    80159: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ContentHubRoutes: () => d, default: () => u });
      var r = n(90626),
        a = n(97058),
        i = n(17083),
        o = n(92757),
        s = n(562),
        c = n(61859);
      function l(e) {
        return r.createElement(o.XG, {
          message: (e) => !(0, s.tV)() || (0, c.we)("#Generel_Discard_Warning"),
        });
      }
      var m = n(43527),
        A = n(65213);
      const d = { ContentHubCategories: () => "/categories/" };
      function u(e) {
        return r.createElement(
          i.Kd,
          { basename: (0, m.C)() + "admin/store/contenthub/" },
          r.createElement(l, null),
          r.createElement(
            o.dO,
            null,
            r.createElement(o.qh, {
              path: d.ContentHubCategories(),
              component: A.A,
            }),
            r.createElement(o.qh, { component: a.a }),
          ),
        );
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var r = n(40323),
        a = n.n(r);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const r = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            a().parse(e, r);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const r = new FileReader();
            (r.onload = (e) => t(r.result)), r.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const n = a().unparse(e, { header: !0 });
          i.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let r =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (r += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([r], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
    44894: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
