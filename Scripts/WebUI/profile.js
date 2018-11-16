/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/profile.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(a) {
  function e(e) {
    for (
      var t, n, r = e[0], i = e[1], o = e[2], c = 0, s = [];
      c < r.length;
      c++
    )
      (n = r[c]), u[n] && s.push(u[n][0]), (u[n] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (a[t] = i[t]);
    for (p && p(e); s.length; ) s.shift()();
    return m.push.apply(m, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < m.length; t++) {
      for (var n = m[t], r = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== u[o] && (r = !1);
      }
      r && (m.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var n = {},
    u = { 5: 0 },
    m = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = a),
    (c.c = n),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var i = 0; i < t.length; i++) e(t[i]);
  var p = r;
  m.push(["WC1h", 0]), l();
})({
  "/IDK": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return i;
    }),
      n.d(t, "e", function() {
        return o;
      }),
      n.d(t, "d", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "n", function() {
        return a;
      }),
      n.d(t, "k", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return u;
      }),
      n.d(t, "l", function() {
        return m;
      }),
      n.d(t, "i", function() {
        return p;
      }),
      n.d(t, "j", function() {
        return h;
      }),
      n.d(t, "b", function() {
        return d;
      }),
      n.d(t, "m", function() {
        return f;
      }),
      n.d(t, "g", function() {
        return v;
      }),
      n.d(t, "f", function() {
        return y;
      });
    var r = n("UqDm");
    n("XaMz");
    function i(e) {
      if (!(e.clientX || e.clientY || e.screenX || e.screenY)) return !0;
      if (e.relatedTarget) return !o(e.currentTarget, e.relatedTarget);
      var t = e.currentTarget.getBoundingClientRect();
      return (
        (e.clientX <= t.left ||
          e.clientX >= t.right ||
          e.clientY <= t.top ||
          e.clientY >= t.bottom) &&
        (console.log(
          e.clientX +
            " <= " +
            t.left +
            " || " +
            e.clientX +
            " >= " +
            t.right +
            " ||\n\t\t\t\t" +
            e.clientY +
            " <= " +
            t.top +
            " || " +
            e.clientY +
            " >= " +
            t.bottom
        ),
        !0)
      );
    }
    function o(e, t) {
      for (; t; ) {
        if (
          (t.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
            (t = t.parentNode.host),
          t == e)
        )
          return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function c(e, t) {
      for (; t; ) if ((t = t.parentElement) == e) return !0;
      return !1;
    }
    function s(e) {
      if (!window.getSelection) return !1;
      for (var t = window.getSelection(), n = 0, r = 0; r < t.rangeCount; r++) {
        var i = t.getRangeAt(r);
        if (i.startOffset != i.endOffset)
          o(e, i.commonAncestorContainer) && n++;
      }
      return 0 < t.rangeCount && t.rangeCount == n;
    }
    function a(e, t) {
      var n = e.offsetTop;
      e.offsetParent != t && (n -= t.offsetTop),
        n < t.scrollTop
          ? e.scrollIntoView(!0)
          : n + e.offsetHeight > t.scrollTop + t.offsetHeight &&
            e.scrollIntoView(!1);
    }
    function l(e, t, n) {
      var r = 0,
        i = 0;
      return (
        t < e.left ? (r = e.left - t) : t > e.right && (r = t - e.right),
        n < e.top ? (i = e.top - n) : n > e.bottom && (i = n - e.bottom),
        Math.sqrt(r * r + i * i)
      );
    }
    function u(e, t) {
      return {
        width: t.width,
        height: t.height,
        top: e.screenTop + t.top,
        bottom: e.screenTop + t.bottom,
        left: e.screenLeft + t.left,
        right: e.screenLeft + t.right
      };
    }
    function m(e) {
      var t = void 0;
      return e && (t = e.ownerDocument.defaultView), t;
    }
    function p(e) {
      var t = document.createElement("textarea");
      (t.textContent = e),
        (t.style.position = "fixed"),
        document.body.appendChild(t),
        t.select();
      try {
        document.execCommand("copy");
      } catch (e) {
        console.warn("Copy to clipboard failed.", e);
      } finally {
        document.body.removeChild(t);
      }
    }
    function h(e) {
      var t = "steam://openurl/";
      e.startsWith(t) && (e = e.slice(t.length)), p(e);
    }
    function d(e) {
      var t = e.ownerDocument;
      return (
        t.fullscreen ||
        t.webkitIsFullScreen ||
        t.mozFullScreen ||
        t.msFullscreenElement
      );
    }
    function f(e) {
      var t = e;
      t.requestFullscreen
        ? t.requestFullscreen()
        : t.webkitRequestFullScreen
        ? t.webkitRequestFullScreen()
        : t.mozRequestFullScreen
        ? t.mozRequestFullScreen()
        : t.msRequestFullscreen && t.msRequestFullscreen();
    }
    function v(e) {
      var t = e.ownerDocument;
      t.cancelFullscreen
        ? t.cancelFullscreen()
        : t.webkitCancelFullScreen
        ? t.webkitCancelFullScreen()
        : t.mozCancelFullScreen
        ? t.mozCancelFullScreen()
        : t.msExitFullscreen && t.msExitFullscreen();
    }
    var y = (function() {
      function e(e) {
        var o = this;
        (this.m_bNeedSort = !1),
          (this.m_bOffsetsInvalidated = !1),
          (this.m_rgChildren = []),
          (this.RecomputeVisibility = function() {
            var e = o.m_elParent.scrollTop - o.m_nBufferPx,
              t =
                o.m_elParent.scrollTop +
                o.m_elParent.clientHeight +
                o.m_nBufferPx;
            o.EnsureSort();
            for (var n = 0, r = o.m_rgChildren; n < r.length; n++) {
              var i = r[n];
              if (!(i.yOffset < e)) {
                if (i.yOffset > t) break;
                i.fnCallback(!0);
              }
            }
            (o.m_nLastYMin = e), (o.m_nLastYMax = t);
          }),
          (this.m_nBufferPx = e);
      }
      return (
        (e.prototype.SetParent = function(e) {
          this.m_elParent &&
            this.m_elParent.ownerDocument.defaultView.removeEventListener(
              "resize",
              this.RecomputeVisibility
            ),
            (this.m_elParent = e),
            this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView.addEventListener(
                "resize",
                this.RecomputeVisibility
              );
        }),
        (e.prototype.InvalidateOffsetsAndRecompute = function() {
          (this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility();
        }),
        (e.prototype.EnsureSort = function() {
          if (this.m_bOffsetsInvalidated) {
            for (var e = 0; e < this.m_rgChildren.length; e++)
              this.m_rgChildren[e].yOffset = this.m_rgChildren[
                e
              ].element.offsetTop;
            this.m_bOffsetsInvalidated = !1;
          }
          this.m_bNeedSort &&
            (this.m_rgChildren.sort(function(e, t) {
              return e.yOffset - t.yOffset;
            }),
            (this.m_bNeedSort = !1));
        }),
        (e.prototype.RegisterChild = function(e, t) {
          this.m_rgChildren.push({
            element: e,
            yOffset: e.offsetTop,
            fnCallback: t
          }),
            (this.m_bNeedSort = !0),
            void 0 !== this.m_nLastYMin &&
              void 0 !== this.m_nLastYMax &&
              e.offsetTop >= this.m_nLastYMin &&
              e.offsetTop <= this.m_nLastYMax &&
              t(!0);
        }),
        (e.prototype.UnregisterChild = function(t) {
          r.e(this.m_rgChildren, function(e) {
            return e.element == t;
          });
        }),
        e
      );
    })();
  },
  "1VtQ": function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get: function() {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    function i(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "e", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "d", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return a;
      });
    n("mrSG");
    var r = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        SESSIONID: "",
        BUILD_TIMESTAMP: 0,
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1
      },
      i = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0
      },
      o = { steamid: "", authwgtoken: "" },
      c = "webui_config";
    function s(e) {
      void 0 === e && (e = c);
      var t = a("config", e);
      t && Object.assign(r, t);
      var n = a("userinfo", e);
      n && Object.assign(i, n), (window.__webpack_public_path__ = r.CDN_URL);
    }
    function a(e, t) {
      void 0 === t && (t = c);
      var n = document.getElementById(t);
      if (n)
        try {
          return JSON.parse(n.getAttribute("data-" + e) || "");
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #" + t);
    }
  },
  "8o0Y": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return u;
      });
    var r = n("mrSG"),
      i = n("q1tI"),
      o = n("/IDK"),
      c = n("EGkk"),
      l = n("G+3Z"),
      s = n("2vnA"),
      a = (function() {
        function e() {}
        return (
          (e.GetBrowserInfoForPopup = function(e) {
            return null;
          }),
          (e.prototype.SetTakeFocus = function(e) {
            this.m_fnTakeFocus = e;
          }),
          e
        );
      })();
    function u(e, t, n) {
      var r,
        i = void 0,
        o = void 0,
        c = t;
      if (c.preventDefault && c.stopPropagation) {
        if (c.shiftKey) return null;
        c.preventDefault(),
          c.stopPropagation(),
          (r = c.currentTarget),
          (i = c.clientX),
          (o = c.clientY);
      } else r = t;
      var s = new p(e, r, i, o, n);
      return s.Show(), s;
    }
    var m = (function(n) {
        function e(e) {
          var t = n.call(this) || this;
          return (
            (t.m_bVisible = !1),
            (t.m_elSubmenuItem = null),
            (t.m_timerHideSubMenu = 0),
            (t.m_ownerWindow = e),
            t
          );
        }
        return (
          r.d(e, n),
          (e.prototype.Init = function(e, t) {
            (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
            this.m_ownerWindow.SteamClient &&
            this.m_ownerWindow.SteamClient.Window
              ? (this.m_popupContextMenu = new c.a(
                  e,
                  t,
                  a.GetBrowserInfoForPopup(this.m_ownerWindow)
                ))
              : ((this.m_embeddedElementInstance = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                (this.m_rctElement = i.createElement(c.g, e, t)));
          }),
          (e.prototype.SetOnHideCallback = function(e) {
            this.m_fnOnHideCallback = e;
          }),
          (e.prototype.Show = function() {
            this.m_rctElement
              ? this.m_embeddedElementInstance.Show(this.m_rctElement)
              : this.m_popupContextMenu.Show(),
              (this.m_bVisible = !0);
          }),
          (e.prototype.Hide = function() {
            this.InternalHide();
          }),
          (e.prototype.HideIfNotInFocus = function() {
            this.BHasFocus() || this.BIsFocusInChildHierarchy() || this.Hide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_bVisible &&
              ((this.m_bVisible = !1),
              this.InternalHideSubMenu(),
              this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
              this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.Hide(300)
                : this.m_popupContextMenu.Close());
          }),
          Object.defineProperty(e.prototype, "visible", {
            get: function() {
              return this.m_bVisible;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "options", {
            get: function() {
              return this.m_options;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "owner_window", {
            get: function() {
              return this.m_ownerWindow;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ShowSubMenu = function(e, t) {
            return this.m_elSubmenuItem == e
              ? (this.CancelHideSubMenuTimer(),
                this.m_submenu.TakeFocus(),
                null)
              : (this.InternalHideSubMenu(),
                (this.m_elSubmenuItem = e),
                (this.m_submenu = new h(this, t(), e)),
                this.m_submenu.Show(),
                this.m_submenu);
          }),
          (e.prototype.CancelHideSubMenuTimer = function() {
            0 < this.m_timerHideSubMenu &&
              (clearTimeout(this.m_timerHideSubMenu),
              (this.m_timerHideSubMenu = 0));
          }),
          (e.prototype.HideSubMenu = function() {
            var e = this;
            if (this.m_submenu) {
              if (!(0 < this.m_timerHideSubMenu)) {
                this.m_timerHideSubMenu = window.setTimeout(function() {
                  e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                }, 500);
              }
            } else this.CancelHideSubMenuTimer();
          }),
          (e.prototype.InternalHideSubMenu = function() {
            this.CancelHideSubMenuTimer(),
              this.m_submenu &&
                (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                (this.m_elSubmenuItem = null),
                this.m_submenu.InternalHide(),
                (this.m_submenu = null));
          }),
          (e.prototype.TakeFocus = function() {
            this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
              this.m_fnTakeFocus && this.m_fnTakeFocus();
          }),
          (e.prototype.BInternalElementInParentHierarchy = function(e) {
            return (
              this.m_parentInstance &&
              (this.m_parentInstance.BIsChildElement(e) ||
                this.m_parentInstance.BInternalElementInParentHierarchy(e))
            );
          }),
          (e.prototype.BInternalElementInChildHierarchy = function(e) {
            return (
              this.m_submenu &&
              (this.m_submenu.BIsChildElement(e) ||
                this.m_submenu.BInternalElementInChildHierarchy(e))
            );
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(e)
              : o.e(this.m_popupContextMenu.root_element, e);
          }),
          (e.prototype.BHasFocus = function() {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(
                  this.m_ownerWindow.document.activeElement
                )
              : this.m_popupContextMenu.focused;
          }),
          (e.prototype.BIsFocusInChildHierarchy = function() {
            return (
              this.m_submenu &&
              (this.m_submenu.BHasFocus() ||
                this.m_submenu.BIsFocusInChildHierarchy())
            );
          }),
          (e.prototype.BIsElementInMenuHierarchy = function(e) {
            return (
              this.BInternalElementInParentHierarchy(e) ||
              this.BInternalElementInChildHierarchy(e)
            );
          }),
          (e.prototype.BIsSubMenuVisible = function() {
            return !!this.m_submenu;
          }),
          r.c([s.observable], e.prototype, "m_bVisible", void 0),
          e
        );
      })(a),
      p = (function(s) {
        function a(e, t, n, r, i) {
          var o = s.call(this, t.ownerDocument.defaultView) || this;
          a.sm_iActiveContextMenuInstance &&
            a.sm_iActiveContextMenuInstance.Hide(),
            ((a.sm_iActiveContextMenuInstance = o).m_options = i || {});
          var c = {
            element: t,
            clientX: n,
            clientY: r,
            instance: o,
            options: o.m_options,
            fnOnMenuItemSelected: function() {
              o.Hide();
            }
          };
          return o.Init(c, e), o;
        }
        return (
          r.d(a, s),
          (a.prototype.Show = function() {
            a.sm_mapEmbeddedMouseOverlays.ShowElement(
              this.m_ownerWindow.document,
              i.createElement(c.f),
              this
            ),
              s.prototype.Show.call(this);
          }),
          (a.prototype.Hide = function() {
            a.sm_mapEmbeddedMouseOverlays.HideElement(
              this.m_ownerWindow.document,
              this
            ),
              s.prototype.Hide.call(this);
          }),
          (a.sm_mapEmbeddedMouseOverlays = new l.a("ContextMenuMouseOverlay")),
          a
        );
      })(m),
      h = (function(o) {
        function e(e, t, n) {
          var r = o.call(this, n.ownerDocument.defaultView) || this;
          (r.m_parentInstance = e),
            (r.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles
            });
          var i = {
            element: n,
            clientX: null,
            clientY: null,
            instance: r,
            options: r.m_options,
            fnOnMenuItemSelected: function() {
              r.Hide();
            },
            bSubmenu: !0
          };
          return r.Init(i, t), r;
        }
        return (
          r.d(e, o),
          (e.prototype.Hide = function() {
            var e = this;
            this.m_popupContextMenu
              ? window.setTimeout(function() {
                  e.m_parentInstance.HideIfNotInFocus();
                }, 10)
              : this.m_parentInstance.Hide();
          }),
          e
        );
      })(m);
  },
  EGkk: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return m;
    }),
      n.d(t, "d", function() {
        return p;
      }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "e", function() {
        return d;
      }),
      n.d(t, "g", function() {
        return f;
      }),
      n.d(t, "a", function() {
        return v;
      }),
      n.d(t, "f", function() {
        return y;
      }),
      n.d(t, "h", function() {
        return _;
      }),
      n.d(t, "i", function() {
        return g;
      });
    var c = n("mrSG"),
      r = n("okNM"),
      s = n("q1tI"),
      a = n("i8i4"),
      l = n("JtU4"),
      O = n("/IDK"),
      i = n("1VtQ"),
      o = n("e2SU"),
      u = n("WpBz"),
      m = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = c.f(e, ["children", "className"]),
              i =
                this.context.contextMenuInstance &&
                this.context.contextMenuInstance.options.bUseWebStyles
                  ? "popup_menu popup_body"
                  : "contextMenuContents";
            return (
              n && (i += " " + n),
              s.createElement("div", c.a({}, r, { className: i }), t)
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          t
        );
      })(s.PureComponent),
      p = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.OnClick = function(e) {
            this.props.disabled ||
              (this.props.onClick && this.props.onClick(e),
              this.props.bInteractableItem ||
                (this.props.onSelected && this.props.onSelected(e),
                this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.Hide()));
          }),
          (t.prototype.OnMouseEnter = function(e) {
            this.context.contextMenuInstance &&
              this.context.contextMenuInstance.HideSubMenu();
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = (e.onSelected,
              e.bInteractableItem,
              c.f(e, ["onSelected", "bInteractableItem"])),
              n = [
                this.context.contextMenuInstance &&
                this.context.contextMenuInstance.options.bUseWebStyles
                  ? "popup_menu_item"
                  : "contextMenuItem"
              ];
            return (
              this.props.className && n.push(this.props.className),
              this.props.disabled && n.push("disabled"),
              s.createElement(
                "div",
                c.a({ onMouseEnter: this.OnMouseEnter }, t, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: n.join(" ")
                }),
                this.props.children
              )
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          c.c([i.a], t.prototype, "OnClick", null),
          c.c([i.a], t.prototype, "OnMouseEnter", null),
          t
        );
      })(s.PureComponent),
      h = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.bChecked,
              n = e.children,
              r = c.f(e, ["bChecked", "children"]);
            return s.createElement(
              p,
              c.a({}, r, { className: t && "menuChecked" }),
              s.createElement("div", { className: "contextMenuCheckMark" }),
              n
            );
          }),
          t
        );
      })(s.PureComponent),
      d = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { bActive: !1 }), t;
        }
        return (
          c.d(e, n),
          (e.prototype.OnSubMenuMouseEnter = function() {
            this.context.contextMenuInstance.CancelHideSubMenuTimer();
          }),
          (e.prototype.RenderSubMenu = function() {
            return s.createElement(
              m,
              { onMouseEnter: this.OnSubMenuMouseEnter },
              this.props.children
            );
          }),
          (e.prototype.OnMouseEnter = function(e) {
            var t = this;
            if (this.context.contextMenuInstance) {
              var n = this.context.contextMenuInstance.ShowSubMenu(
                e.currentTarget,
                this.RenderSubMenu
              );
              n &&
                (this.setState({ bActive: !0 }),
                n.SetOnHideCallback(function() {
                  t.setState({ bActive: !1 });
                }));
            }
          }),
          (e.prototype.OnClick = function(e) {
            this.OnMouseEnter(e), this.props.onClick && this.props.onClick(e);
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.label,
              n = (e.children, e.className),
              r = c.f(e, ["label", "children", "className"]);
            return (
              this.state.bActive && (n = (n || "") + " active"),
              s.createElement(
                p,
                c.a({}, r, {
                  onClick: this.OnClick,
                  className: n,
                  onMouseEnter: this.OnMouseEnter,
                  onSelected: null,
                  bInteractableItem: !0
                }),
                t,
                " ",
                s.createElement(o.l, null)
              )
            );
          }),
          (e.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          c.c([i.a], e.prototype, "OnSubMenuMouseEnter", null),
          c.c([i.a], e.prototype, "RenderSubMenu", null),
          c.c([i.a], e.prototype, "OnMouseEnter", null),
          c.c([i.a], e.prototype, "OnClick", null),
          e
        );
      })(s.PureComponent),
      f = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_elMenu = void 0),
            (t.m_cReenteranceGuard = 1),
            (t.state = {
              ready: !1,
              menuLeft: void 0,
              menuTop: void 0,
              menuRight: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0
            }),
            (t.m_mutationObserver = new MutationObserver(t.OnMenuMutation)),
            t
          );
        }
        return (
          c.d(e, n),
          (e.prototype.BindMenuElement = function(e) {
            var t = this;
            this.m_elMenu &&
              (this.m_mutationObserver.disconnect(),
              this.props.popup ||
                this.m_elMenu.ownerDocument.defaultView.removeEventListener(
                  "resize",
                  this.OnWindowResize
                )),
              e &&
                (this.m_mutationObserver.observe(e, {
                  childList: !0,
                  subtree: !0
                }),
                this.props.popup ||
                  e.ownerDocument.defaultView.addEventListener(
                    "resize",
                    this.OnWindowResize
                  )),
              (this.m_elMenu = e || void 0),
              this.PositionMenu(),
              this.state.ready ||
                (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
                this.setState({ ready: !0 }, function() {
                  t.TakeFocus();
                }));
          }),
          (e.prototype.OnMenuMutation = function(e, t) {
            this.PositionMenu();
          }),
          (e.prototype.OnWindowResize = function() {
            this.PositionMenu();
          }),
          (e.prototype.OnBlur = function(e) {
            (e.relatedTarget && O.e(e.currentTarget, e.relatedTarget)) ||
              (e.relatedTarget &&
                this.props.instance.BIsElementInMenuHierarchy(
                  e.relatedTarget
                )) ||
              this.props.instance.BIsSubMenuVisible() ||
              (this.state.ready &&
                this.props.instance.visible &&
                this.props.instance.Hide());
          }),
          (e.prototype.OnKeyDown = function(e) {
            27 == e.keyCode &&
              this.state.ready &&
              (this.props.instance.Hide(),
              e.preventDefault(),
              e.stopPropagation());
          }),
          (e.prototype.getChildContext = function() {
            return { contextMenuInstance: this.props.instance };
          }),
          (e.prototype.componentDidUpdate = function() {
            0 < this.m_cReenteranceGuard--
              ? this.PositionMenu()
              : (this.m_cReenteranceGuard = 2);
          }),
          (e.prototype.TakeFocus = function() {
            if (
              this.m_elMenu &&
              this.state.ready &&
              this.props.instance.visible &&
              (this.props.popup ||
                !O.e(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
            ) {
              var e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
              e && e.focus ? e.focus() : this.m_elMenu.focus();
            }
          }),
          (e.prototype.PositionMenu = function() {
            var e = this.m_elMenu,
              t = this.props.element;
            if (e && t) {
              var n = t.ownerDocument.defaultView;
              e.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                this
              );
              var r = t.getBoundingClientRect(),
                i = e.getBoundingClientRect(),
                o = null != this.props.popup,
                c = this.props.options,
                s = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                },
                a = this.props.clientX,
                l = this.props.clientY,
                u = n.innerWidth,
                m = n.innerHeight;
              if (o) {
                (a += n.screenLeft), (l += n.screenTop), (r = O.h(n, r));
                var p = n.screen,
                  h = 0,
                  d = 0;
                p.availLeft && (h = p.availLeft),
                  p.availTop && (d = p.availTop),
                  (u = h + p.availWidth),
                  (m = d + p.availHeight);
              }
              (c.bOverlapHorizontal || c.bOverlapVertical) && (a = l = void 0);
              var f = a || r.left,
                v = a || r.right,
                y = i.width;
              c.bMatchWidth && ((y = v - f), (s.menuWidth = y));
              var b = (c.bOverlapHorizontal ? v : f) - y,
                _ = 0 < b,
                g = u - (c.bOverlapHorizontal ? f : v) - y,
                w = 0 < g,
                x = (c.bPreferPopLeft || !w) && _;
              _ ||
                w ||
                ((x = w < _),
                c.bFitToWindow && ((y += (x ? b : g) - 8), (s.menuWidth = y))),
                (!c.bPreferPopLeft && w) || !_
                  ? (s.menuLeft = c.bOverlapHorizontal ? f : v)
                  : (s.menuRight = u - (c.bOverlapHorizontal ? v : f));
              var E = l || r.top,
                S = l || r.bottom,
                k = i.height;
              c.bMatchHeight && ((k = S - E), (s.menuHeight = k));
              var M = (c.bOverlapVertical ? S : E) - k,
                P = 0 < M,
                C = m - (c.bOverlapVertical ? E : S) - k,
                I = 0 < C,
                L = (c.bPreferPopTop || !I) && P;
              P ||
                I ||
                ((L = C < M),
                c.bFitToWindow && ((k += (L ? M : C) - 8), (s.menuHeight = k))),
                L
                  ? (s.menuBottom = m - (c.bOverlapVertical ? S : E))
                  : (s.menuTop = c.bOverlapVertical ? E : S),
                o
                  ? (s.menuHeight || (s.menuHeight = i.height),
                    s.menuWidth || (s.menuWidth = i.width),
                    s.menuBottom &&
                      !s.menuTop &&
                      ((s.menuTop = m - s.menuBottom - s.menuHeight),
                      (s.menuBottom = void 0)),
                    s.menuRight &&
                      !s.menuLeft &&
                      ((s.menuLeft = u - s.menuRight - s.menuWidth),
                      (s.menuRight = void 0)))
                  : (s.menuLeft && (s.menuLeft += n.scrollX),
                    s.menuTop && (s.menuTop += n.scrollY),
                    s.menuBottom &&
                      (s.menuBottom +=
                        n.document.body.scrollHeight -
                        n.scrollY -
                        n.innerHeight),
                    s.menuRight &&
                      (s.menuRight +=
                        n.document.body.scrollWidth -
                        n.scrollX -
                        n.innerWidth)),
                (s.menuLeft === this.state.menuLeft &&
                  s.menuRight === this.state.menuRight &&
                  s.menuTop === this.state.menuTop &&
                  s.menuBottom === this.state.menuBottom &&
                  s.menuWidth === this.state.menuWidth &&
                  s.menuHeight === this.state.menuHeight) ||
                  this.setState(s);
            }
          }),
          (e.prototype.render = function() {
            var i = this,
              e = { visibility: this.state.ready ? "visible" : "hidden" };
            if (this.props.popup) {
              var o = this.props.element.ownerDocument.defaultView;
              void 0 !== this.state.menuLeft &&
                void 0 !== this.state.menuTop &&
                void 0 !== this.state.menuWidth &&
                void 0 !== this.state.menuHeight &&
                o.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                  var t = i.props.popup.window,
                    n = i.state.menuLeft - o.screenX,
                    r = i.state.menuTop - o.screenY;
                  try {
                    t.SteamClient.Window.PositionWindowRelative(
                      e,
                      n,
                      r,
                      i.state.menuWidth,
                      i.state.menuHeight
                    );
                  } catch (e) {
                    console.error(e);
                  }
                });
            } else
              void 0 !== this.state.menuTop
                ? (e.top = this.state.menuTop)
                : void 0 !== this.state.menuBottom &&
                  (e.bottom = this.state.menuBottom),
                void 0 !== this.state.menuLeft
                  ? (e.left = this.state.menuLeft)
                  : void 0 !== this.state.menuRight &&
                    (e.right = this.state.menuRight),
                void 0 !== this.state.menuHeight &&
                  (e.height = this.state.menuHeight),
                void 0 !== this.state.menuWidth &&
                  (e.width = this.state.menuWidth);
            var t =
              this.props.options.strClassName ||
              (this.props.options.bUseWebStyles
                ? "popup_block_new popup_block_hidden_until_visible"
                : "contextMenu");
            return (
              this.props.instance.visible &&
                this.state.ready &&
                (t += " visible"),
              (t += " ContextMenuFocusContainer"),
              s.createElement(
                "div",
                {
                  className: t,
                  ref: this.BindMenuElement,
                  style: e,
                  onBlur: this.OnBlur,
                  onKeyDown: this.OnKeyDown,
                  tabIndex: 0
                },
                this.props.children
              )
            );
          }),
          (e.childContextTypes = {
            contextMenuInstance: function() {
              return null;
            },
            context: function() {
              return null;
            }
          }),
          c.c([i.a], e.prototype, "BindMenuElement", null),
          c.c([i.a, Object(u.a)(100)], e.prototype, "OnMenuMutation", null),
          c.c([i.a], e.prototype, "OnWindowResize", null),
          c.c([i.a], e.prototype, "OnBlur", null),
          c.c([i.a], e.prototype, "OnKeyDown", null),
          (e = c.c([r.observer], e))
        );
      })(s.Component),
      v = (function(i) {
        function o(e, t, n) {
          var r =
            i.call(this, "contextmenu_" + o.sm_iContextMenuInstance++, {
              title: "Menu",
              html_class: "ContextMenuPopup client_chat_frame",
              body_class: "ContextMenuPopupBody",
              replace_existing_popup: !1,
              target_browser: n,
              eCreationFlags: l.c.ContextMenu
            }) || this;
          return (r.m_menuProps = e), (r.m_children = t), r;
        }
        return (
          c.d(o, i),
          (o.prototype.UpdateParamsBeforeShow = function(e) {
            var t = O.h(
              this.m_menuProps.element.ownerDocument.defaultView,
              this.m_menuProps.element.getBoundingClientRect()
            );
            return (
              (e.dimensions = {
                left: t.right,
                top: t.top,
                width: 350,
                height: 1
              }),
              (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
              (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
              e
            );
          }),
          (o.prototype.Render = function(e, t) {
            a.render(
              s.createElement(
                f,
                c.a({}, this.m_menuProps, { popup: this }),
                this.m_children
              ),
              t
            );
          }),
          (o.prototype.OnBlur = function() {}),
          (o.prototype.OnFocus = function() {}),
          (o.prototype.OnLoad = function() {}),
          (o.prototype.OnResize = function() {}),
          (o.prototype.OnClose = function() {}),
          (o.sm_iContextMenuInstance = 0),
          o
        );
      })(l.a);
    function y(e) {
      return s.createElement("div", { className: "ContextMenuMouseOverlay" });
    }
    var b = "DEBUG_StickyContextMenus";
    function _() {
      return (
        window.sessionStorage && "true" == window.sessionStorage.getItem(b)
      );
    }
    function g(e) {
      e
        ? window.sessionStorage.setItem(b, "true")
        : window.sessionStorage.removeItem(b);
    }
  },
  "G+3Z": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return a;
      });
    var r = n("i8i4"),
      i = n("/IDK"),
      o = (function() {
        return function(e) {
          this.instance = new s(e, !1);
        };
      })();
    function c(e) {
      return new s(e.body, !0);
    }
    var s = (function() {
        function e(e, t) {
          void 0 === t && (t = !0),
            (this.m_parent = e),
            (this.m_window = e.ownerDocument.defaultView),
            (this.m_bRemoveOnHide = t);
        }
        return (
          (e.prototype.Show = function(n, r) {
            var i = this;
            return (
              this.CancelShowInterval(),
              r
                ? new Promise(function(t, e) {
                    i.iIntervalShow = i.m_window.setTimeout(function() {
                      var e = i.m_parent.ownerDocument;
                      e.defaultView &&
                        !e.defaultView.closed &&
                        (i.InternalShow(n), t());
                    }, r);
                  })
                : (this.InternalShow(n), Promise.resolve())
            );
          }),
          (e.prototype.InternalShow = function(e) {
            this.m_container
              ? r.unmountComponentAtNode(this.m_container)
              : ((this.m_container = this.m_parent.ownerDocument.createElement(
                  "div"
                )),
                this.m_parent.appendChild(this.m_container)),
              r.render(e, this.m_container);
          }),
          (e.prototype.Hide = function(e) {
            var t = this;
            this.CancelShowInterval(),
              e
                ? (this.iIntervalShow = this.m_window.setTimeout(function() {
                    t.InternalHide();
                  }, e))
                : this.InternalHide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_container &&
              (r.unmountComponentAtNode(this.m_container),
              this.m_bRemoveOnHide &&
                (this.m_parent.removeChild(this.m_container),
                (this.m_container = null)));
          }),
          (e.prototype.CancelShowInterval = function() {
            void 0 !== this.iIntervalShow &&
              (this.m_window.clearInterval(this.iIntervalShow),
              (this.iIntervalShow = void 0));
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_container && i.e(this.m_container, e);
          }),
          e
        );
      })(),
      a = (function() {
        function e(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        return (
          (e.prototype.ShowElementDelayed = function(e, t, n, r) {
            var i = this.GetEmbeddedElement(e);
            return (i.activeObject = r), i.instance.Show(n, t);
          }),
          (e.prototype.ShowElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            (r.activeObject = n), r.instance.Show(t);
          }),
          (e.prototype.HideElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            r.activeObject == t &&
              ((r.activeObject = void 0), r.instance.Hide(n));
          }),
          (e.prototype.GetEmbeddedElement = function(e) {
            var t = this.m_mapEmbeddedHovers.get(e);
            return (
              t || ((t = new o(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
            );
          }),
          e
        );
      })();
  },
  JtU4: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return p;
      }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "d", function() {
        return f;
      });
    var a,
      r,
      i = n("mrSG"),
      o = n("2vnA"),
      c = n("i8i4"),
      s = n("UqDm"),
      l = n("WpBz"),
      u = n("1VtQ");
    ((r = a || (a = {}))[(r.Minimized = 1)] = "Minimized"),
      (r[(r.Hidden = 2)] = "Hidden"),
      (r[(r.Tooltip = 4)] = "Tooltip"),
      (r[(r.ContextMenu = 8)] = "ContextMenu"),
      (r[(r.Resizable = 16)] = "Resizable");
    var m = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r];
            i.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(i);
          }
        }
        return (
          (e.prototype.SetTarget = function(e) {
            (this.m_fnRender = e),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          (e.prototype.OnLinkLoad = function(e) {
            e.currentTarget.removeEventListener("load", this.OnLinkLoad),
              s.d(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          i.c([u.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      p = (function() {
        function e(e, t) {
          (this.m_bFocused = !1),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        return (
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return e;
          }),
          (e.prototype.OnDrop = function(e) {
            console.log("Ignoring drop onto toplevel window", e),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.OnDragOver = function(e) {
            e.preventDefault(),
              (e.dataTransfer.dropEffect = "none"),
              e.stopPropagation();
          }),
          (e.prototype.OnMessage = function(e) {
            "window_moved" == e.data && this.OnResize();
          }),
          (e.prototype.Show = function(e, t) {
            var n,
              r = this;
            void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= a.Hidden),
              this.m_rgParams.eCreationFlags & a.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var i,
              o,
              c,
              s = f.GetExistingPopup(this.m_strName);
            (s && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              s
                ? ((o = s.m_element),
                  (i = s.m_popup),
                  s.ReleasePopup(),
                  (c = s.m_renderWhenReady),
                  f.RemoveTrackedPopup(s),
                  i.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                  i.removeEventListener("unload", s.OnUnload),
                  i.removeEventListener("resize", s.OnResizeEvent),
                  i.removeEventListener("focus", this.OnFocusInternal),
                  i.removeEventListener("blur", this.OnBlurInternal),
                  i.removeEventListener("drop", s.OnDrop),
                  i.removeEventListener("dragover", s.OnDragOver),
                  i.removeEventListener("message", this.OnMessage))
                : ((i = (n = d.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (o = n.element),
                  (c = new m(i, o))),
              i &&
                o &&
                ((i.document.title = this.m_strTitle),
                i.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                i.addEventListener("unload", this.OnUnload),
                i.addEventListener("resize", this.OnResizeEvent),
                i.addEventListener("focus", this.OnFocusInternal),
                i.addEventListener("blur", this.OnBlurInternal),
                i.addEventListener("drop", this.OnDrop),
                i.addEventListener("dragover", this.OnDragOver),
                i.addEventListener("message", this.OnMessage),
                (this.m_popup = i),
                (this.m_element = o),
                (this.m_renderWhenReady = c),
                this.m_renderWhenReady.SetTarget(function() {
                  return r.RenderInternal(r.m_popup, r.m_element, e);
                })),
              f.AddTrackedPopup(this),
              s && e && this.Focus());
          }),
          (e.prototype.RemoveEventListeners = function() {
            this.window.removeEventListener(
              "beforeunload",
              this.OnBeforeUnloadEvent
            ),
              this.window.removeEventListener("unload", this.OnUnload),
              this.window.removeEventListener("resize", this.OnResizeEvent),
              this.window.removeEventListener("focus", this.OnFocusInternal),
              this.window.removeEventListener("blur", this.OnBlurInternal),
              this.window.removeEventListener("drop", this.OnDrop),
              this.window.removeEventListener("dragover", this.OnDragOver),
              this.window.removeEventListener("message", this.OnMessage);
          }),
          (e.prototype.RenderInternal = function(e, t, n) {
            this.Render(e, t),
              this.OnLoad(),
              e.SteamClient &&
                (n
                  ? e.SteamClient.Window.BringToFront()
                  : e.SteamClient.Window.ShowWindow());
          }),
          (e.prototype.OnResizeEvent = function() {
            this.OnResize();
          }),
          (e.prototype.OnBeforeUnloadEvent = function() {
            this.OnBeforeUnload();
          }),
          (e.prototype.OnUnload = function() {
            this.RemoveEventListeners(),
              f.RemoveTrackedPopup(this),
              this.OnClose(),
              c.unmountComponentAtNode(this.m_element);
          }),
          Object.defineProperty(e.prototype, "browser_info", {
            get: function() {
              return this.m_rgParams.target_browser;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.m_popup;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "root_element", {
            get: function() {
              return this.m_element;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "title", {
            get: function() {
              return this.m_strTitle;
            },
            set: function(e) {
              (this.m_strTitle = e),
                this.m_popup && (this.m_popup.document.title = this.m_strTitle);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.Focus = function(e) {
            void 0 === e && (e = !1),
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? e
                  ? this.m_popup.SteamClient.Window.SetForegroundWindow()
                  : this.m_popup.SteamClient.Window.BringToFront()
                : this.m_popup && this.m_popup.focus();
          }),
          (e.prototype.Close = function() {
            this.m_popup && this.m_popup.close();
          }),
          (e.prototype.GetName = function() {
            return this.m_strName;
          }),
          (e.prototype.BIsValid = function() {
            return !!this.m_popup;
          }),
          (e.prototype.BIsClosed = function() {
            return !this.m_popup || this.m_popup.closed;
          }),
          (e.prototype.BIsVisible = function() {
            return (
              this.m_popup &&
              !this.m_popup.closed &&
              "visible" == this.m_popup.document.visibilityState
            );
          }),
          (e.prototype.BIsFocused = function() {
            return this.BIsVisible() && this.m_popup.document.hasFocus();
          }),
          (e.prototype.OnFocusInternal = function() {
            (this.m_bFocused = !0), this.OnFocus();
          }),
          (e.prototype.OnBlurInternal = function() {
            (this.m_bFocused = !1), this.OnBlur();
          }),
          Object.defineProperty(e.prototype, "focused", {
            get: function() {
              return this.m_bFocused;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetWindowRestoreDetails = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.GetWindowRestoreDetails(function(
                    e
                  ) {
                    t(e);
                  });
                })
              : Promise.resolve("");
          }),
          (e.prototype.IsMinimized = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient &&
              this.m_popup.SteamClient.Window &&
              this.m_popup.SteamClient.Window.IsWindowMinimized
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                    t(e);
                  });
                })
              : Promise.resolve(!1);
          }),
          (e.prototype.ReleasePopup = function() {
            this.OnClose(), (this.m_popup = null);
          }),
          (e.prototype.OnBeforeUnload = function() {}),
          (e.prototype.OnFocus = function() {}),
          (e.prototype.OnBlur = function() {}),
          i.c([o.observable], e.prototype, "m_bFocused", void 0),
          i.c([u.a], e.prototype, "OnMessage", null),
          i.c([u.a], e.prototype, "OnResizeEvent", null),
          i.c([u.a], e.prototype, "OnBeforeUnloadEvent", null),
          i.c([u.a], e.prototype, "OnUnload", null),
          i.c([u.a], e.prototype, "OnFocusInternal", null),
          i.c([u.a], e.prototype, "OnBlurInternal", null),
          i.c([o.computed], e.prototype, "focused", null),
          e
        );
      })(),
      h = (function(o) {
        function e(e, t, n, r) {
          var i = o.call(this, e, n) || this;
          return i.SetSavedDimensionsKey(t), (i.m_bExpires = r), i;
        }
        return (
          i.d(e, o),
          (e.prototype.BIsInOverlay = function() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }),
          (e.prototype.SetSavedDimensionsKey = function(e) {
            this.m_strSavedDimensionsKey = e;
          }),
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  f.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = f.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }),
          (e.prototype.OnLoad = function() {
            var t = this;
            this.GetWindowRestoreDetails().then(function(e) {
              (t.m_strInitialRestoreDetails = e), t.OnResizeComplete(e);
            });
          }),
          (e.prototype.OnResize = function() {
            this.QueryAndStoreWindowPosition();
          }),
          (e.prototype.OnResizeComplete = function(e) {}),
          (e.prototype.QueryAndStoreWindowPosition = function() {
            var n = this;
            if (this.m_strInitialRestoreDetails) {
              var r = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(function() {
                n.GetWindowRestoreDetails().then(function(e) {
                  var t =
                    n.m_strInitialRestoreDetails == e &&
                    r == n.m_strInitialSavedDimensionsKey;
                  n.m_popup &&
                    n.m_strSavedDimensionsKey &&
                    e &&
                    !t &&
                    (f.SetRestoreDetails(r, e, n.m_bExpires),
                    (n.m_rgParams.strRestoreDetails = e),
                    (n.m_strInitialSavedDimensionsKey = r),
                    n.OnResizeComplete(e));
                });
              }, 30);
            }
          }),
          (e.prototype.OnBeforeUnload = function() {
            this.QueryAndStoreWindowPosition(),
              o.prototype.OnBeforeUnload.call(this);
          }),
          (e.prototype.OnClose = function() {}),
          (e.prototype.SaveWindowPosition = function(e) {
            f.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }),
          i.c([u.a], e.prototype, "QueryAndStoreWindowPosition", null),
          e
        );
      })(p),
      d = (function() {
        function e() {
          var c = this;
          (this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            Object({
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false"
            }).MOBILE_BUILD ||
              window.addEventListener("beforeunload", function(e) {
                c.m_bShuttingDown = !0;
                for (
                  var t = 0, n = c.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var r = [];
                c.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && r.push(e);
                });
                for (var i = 0, o = r; i < o.length; i++) {
                  o[i].Close();
                }
                c.m_bSaveRequired && c.SaveSavedDimensionStore(),
                  c.m_mapPopups.clear();
              });
        }
        return (
          (e.prototype.SetCurrentLoggedInAccountID = function(e) {
            (this.m_unCurrentAccountID = e)
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore();
          }),
          (e.prototype.AddShutdownCallback = function(e) {
            this.m_rgShutdownCallbacks.push(e);
          }),
          (e.prototype.AddPopupCreatedCallback = function(e) {
            this.m_rgPopupCreatedCallbacks.push(e);
          }),
          (e.prototype.AddTrackedPopup = function(e) {
            this.m_mapPopups.set(e.GetName(), e);
            for (
              var t = 0, n = this.m_rgPopupCreatedCallbacks;
              t < n.length;
              t++
            ) {
              (0, n[t])(e);
            }
          }),
          (e.prototype.RemoveTrackedPopup = function(e) {
            this.m_mapPopups.delete(e.GetName());
          }),
          (e.prototype.GetExistingPopup = function(e) {
            return this.m_mapPopups.get(e);
          }),
          (e.prototype.GetPopups = function() {
            return this.m_mapPopups.values();
          }),
          (e.prototype.ClosePopupsOwnedByBrowser = function(t) {
            this.m_mapPopups.forEach(function(e) {
              e.browser_info &&
                e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                e.browser_info.m_unPID == t.m_unPID &&
                e.Close();
            });
          }),
          (e.CreatePopup = function(e, t) {
            var n = t.dimensions || {},
              r = n.width || 300,
              i = n.height || 300,
              o = t.title,
              c = "width=" + r + ",height=" + i;
            void 0 !== n.left && (c += ",left=" + n.left),
              void 0 !== n.top && (c += ",top=" + n.top),
              (c += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var s = "about:blank",
              a = [];
            a.push("createflags=" + t.eCreationFlags),
              t.minWidth && a.push("minwidth=" + t.minWidth),
              t.minHeight && a.push("minheight=" + t.minHeight),
              t.target_browser &&
                (a.push("pid=" + t.target_browser.m_unPID),
                a.push("browser=" + t.target_browser.m_nBrowserID),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (a.push("screenavailwidth=" + t.availscreenwidth),
                  a.push("screenavailheight=" + t.availscreenheight))),
              t.strRestoreDetails &&
                a.push("restoredetails=" + t.strRestoreDetails),
              a && (s += "?" + a.join("&"));
            var l = (t.owner_window || window).open(s, e, c, !0);
            if (!l)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var u = "";
            t.html_class && (u = 'class="' + t.html_class + '"');
            var m = "";
            t.body_class && (m = 'class="' + t.body_class + '"');
            var p =
              "<!DOCTYPE html><html " +
              u +
              "><head><title></title></head><body " +
              m +
              '><div id="popup_target"></div></body></html>';
            l.document.write(p), (l.document.title = o);
            for (
              var h = l.document.getElementsByTagName("head")[0],
                d = document.getElementsByTagName("link"),
                f = 0;
              f < d.length;
              f++
            ) {
              var v = d[f];
              if ("stylesheet" == v.rel) {
                for (
                  var y = l.document.createElement("link"), b = 0;
                  b < v.attributes.length;
                  b++
                ) {
                  var _ = v.attributes.item(b);
                  y.setAttribute(_.name, _.value);
                }
                h.appendChild(y);
              }
            }
            return {
              popup: l,
              element: l.document.getElementById("popup_target")
            };
          }),
          (e.prototype.BShuttingDown = function() {
            return this.m_bShuttingDown;
          }),
          (e.prototype.GetLocalStorageKey = function() {
            return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
          }),
          (e.prototype.LoadSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID) {
              var e = this.GetLocalStorageKey();
              this.m_mapRestoreDetails = void 0;
              var t = window.localStorage.getItem(e);
              if (t)
                try {
                  var n = JSON.parse(t);
                  this.m_mapRestoreDetails = new Map(n);
                } catch (e) {}
              this.m_mapRestoreDetails ||
                (this.m_mapRestoreDetails = new Map());
            }
          }),
          (e.prototype.SaveSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
              var e = this.GetLocalStorageKey(),
                t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
              window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
            }
          }),
          (e.prototype.DebouncedSaveSavedDimensionStore = function() {
            this.SaveSavedDimensionStore();
          }),
          (e.prototype.ClearSavedDimensionStore = function() {
            this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
          }),
          (e.prototype.GetRestoreDetails = function(e) {
            if (!this.m_mapRestoreDetails.has(e)) return "";
            var t = this.m_mapRestoreDetails.get(e);
            return (
              (t.last_used = Date.now()),
              (this.m_bSaveRequired = !0),
              t.strRestoreDetails
            );
          }),
          (e.prototype.SetRestoreDetails = function(e, t, n) {
            if (e) {
              if (t) {
                if (50 < this.m_mapRestoreDetails.size) {
                  for (
                    var r = null,
                      i = Date.now(),
                      o = 0,
                      c = Array.from(this.m_mapRestoreDetails.keys());
                    o < c.length;
                    o++
                  ) {
                    var s = c[o],
                      a = this.m_mapRestoreDetails.get(s);
                    a.last_used < i &&
                      a.bExpires &&
                      ((i = a.last_used), (r = s));
                  }
                  r && this.m_mapRestoreDetails.delete(r);
                }
                var l = {
                  strRestoreDetails: t,
                  last_used: Date.now(),
                  bExpires: n
                };
                this.m_mapRestoreDetails.set(e, l);
              } else this.m_mapRestoreDetails.delete(e);
              (this.m_bSaveRequired = !0),
                this.m_bShuttingDown
                  ? this.SaveSavedDimensionStore()
                  : this.DebouncedSaveSavedDimensionStore();
            }
          }),
          i.c(
            [u.a, Object(l.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      f = new d();
  },
  UqDm: function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return r;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "e", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "g", function() {
        return a;
      }),
      n.d(t, "h", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return u;
      }),
      n.d(t, "c", function() {
        return m;
      });
    n("XaMz");
    function r(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function i(e, t) {
      return o(e, function(e) {
        return t == e;
      });
    }
    function o(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function c(e, i) {
      return e.reduce(function(e, t, n, r) {
        return e + (i(t, n, r) ? 1 : 0);
      }, 0);
    }
    function s(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function a(e, t) {
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
      return !0;
    }
    function l(e, t, n) {
      for (var r = 0, i = e.length - 1; r <= i; ) {
        var o = Math.floor((r + i) / 2),
          c = n(e[o], t);
        if (c < 0) r = o + 1;
        else if (0 < c) i = o - 1;
        else {
          if (i == o) return o;
          if (o == r) return o < i && n(t, e[o + 1]) < 0 ? o : o + 1;
          r = o;
        }
      }
      return i;
    }
    function u(e, t, n) {
      var r = l(e, t, n);
      e.splice(r + 1, 0, t);
    }
    function m(e, t) {
      for (var n = 0, r = 0; n < e.length; ) {
        var i = e[n];
        t(i, n, e) && (e[r++] = i), n++;
      }
      return (e.length = r), e;
    }
  },
  WC1h: function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n("q1tI"),
      r = n("i8i4"),
      c = n("tkkQ"),
      s = n("oh5H"),
      i = n("XaMz"),
      a = (n("Y3TG"), n("mrSG")),
      l = n("2vnA"),
      u = n("vDqi"),
      m = n.n(u),
      p = { ProfileURL: "" };
    function h(e) {
      switch (e) {
        case 1:
          return Object(s.b)("#Privacy_Private");
        case 2:
          return Object(s.b)("#Privacy_FriendsOnly");
        case 3:
          return Object(s.b)("#Privacy_Public");
        default:
          return "";
      }
    }
    function d(e, t) {
      return e < t ? e : t;
    }
    var f = (function() {
        function e(e, t) {
          (this.m_eSaveStateByKey = new Map()),
            (this.m_eCommentSaveState = 0),
            (this.m_PrivacySettings = e),
            (this.m_eCommentPermission = t);
        }
        return (
          (e.prototype.GetPrivacySetting = function(e) {
            return "PrivacyOwnedGames" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyOwnedGames
                )
              : "PrivacyPlaytime" == e
              ? d(
                  this.GetPrivacySetting("PrivacyOwnedGames"),
                  this.m_PrivacySettings.PrivacyPlaytime
                )
              : "PrivacyInventory" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyInventory
                )
              : "PrivacyInventoryGifts" == e
              ? d(
                  this.GetPrivacySetting("PrivacyInventory"),
                  this.m_PrivacySettings.PrivacyInventoryGifts
                )
              : "PrivacyFriendsList" == e
              ? d(
                  this.m_PrivacySettings.PrivacyProfile,
                  this.m_PrivacySettings.PrivacyFriendsList
                )
              : this.m_PrivacySettings[e];
          }),
          Object.defineProperty(e.prototype, "CommentPermission", {
            get: function() {
              return this.m_eCommentPermission;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetSaveState = function(e) {
            return this.m_eSaveStateByKey.get(e) || 0;
          }),
          (e.prototype.GetCommentSaveState = function() {
            return this.m_eCommentSaveState;
          }),
          (e.prototype.ChangePrivacySetting = function(e, t, n) {
            var r = this;
            if (this.m_PrivacySettings[e] != t) {
              this.m_PrivacySettings[e] = t;
              var i = this.SavePrivacy(),
                o = n || e;
              i
                ? (this.m_eSaveStateByKey.set(o, 1),
                  i.then(function(e) {
                    e
                      ? r.m_eSaveStateByKey.set(o, 2)
                      : r.m_eSaveStateByKey.set(o, 3);
                  }))
                : this.m_eSaveStateByKey.set(o, 0);
            }
          }),
          (e.prototype.ChangeCommentPermission = function(e) {
            var t = this;
            if (this.m_eCommentPermission != e) {
              this.m_eCommentPermission = e;
              var n = this.SavePrivacy();
              n
                ? ((this.m_eCommentSaveState = 1),
                  n.then(function(e) {
                    t.m_eCommentSaveState = e ? 2 : 3;
                  }))
                : (this.m_eCommentSaveState = 0);
            }
          }),
          (e.prototype.SavePrivacy = function() {
            var r = this,
              e = new FormData();
            return (
              e.append("sessionid", c.a.SESSIONID),
              e.append("Privacy", JSON.stringify(this.m_PrivacySettings)),
              e.append(
                "eCommentPermission",
                JSON.stringify(this.m_eCommentPermission)
              ),
              m.a
                .post(p.ProfileURL + "ajaxsetprivacy/", e)
                .then(function(e) {
                  var t = e.data;
                  if (1 != t.success)
                    return (
                      ShowAlertDialog(
                        Object(s.b)("#Error_Error"),
                        Object(s.b)("#Error_CommentEditFailed")
                      ),
                      !1
                    );
                  var n = t.Privacy;
                  return (
                    n &&
                      n.PrivacySettings &&
                      n.eCommentPermission &&
                      Object(l.runInAction)(function() {
                        (r.m_PrivacySettings = n.PrivacySettings),
                          (r.m_eCommentPermission = n.eCommentPermission);
                      }),
                    !0
                  );
                })
                .catch(function(e) {
                  return (
                    ShowAlertDialog(
                      Object(s.b)("#Error_Error"),
                      Object(s.b)("#Error_CommentEditFailed")
                    ),
                    !1
                  );
                })
            );
          }),
          a.c([l.observable], e.prototype, "m_PrivacySettings", void 0),
          a.c([l.observable], e.prototype, "m_eCommentPermission", void 0),
          a.c([l.observable], e.prototype, "m_eSaveStateByKey", void 0),
          a.c([l.observable], e.prototype, "m_eCommentSaveState", void 0),
          e
        );
      })(),
      v = n("1VtQ"),
      y = n("8o0Y"),
      b = n("EGkk"),
      _ = n("okNM"),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a.d(t, e),
          (t.prototype.render = function() {
            var e = this.props.PrivacyStore;
            return o.createElement(
              "div",
              { className: "ProfilePrivacyRoot" },
              o.createElement(
                w,
                {
                  PrivacyStore: e,
                  strLabel: Object(s.b)("#ProfilePrivacy_BasicDetails"),
                  strReadOnlySetting: h(3)
                },
                Object(s.b)("#ProfilePrivacy_BasicDetails_Desc")
              ),
              o.createElement("div", { className: "ProfilePrivacyHR" }),
              o.createElement(
                w,
                {
                  PrivacyStore: e,
                  strLabel: Object(s.b)("#ProfilePrivacy_Profile"),
                  PrivacyKey: "PrivacyProfile"
                },
                o.createElement(
                  "p",
                  null,
                  Object(s.b)("#ProfilePrivacy_Profile_Desc")
                ),
                o.createElement(
                  "p",
                  null,
                  Object(s.b)("#ProfilePrivacy_Profile_Desc2")
                )
              ),
              o.createElement(
                "div",
                { className: "ProfilePrivacyRoot_Indent" },
                o.createElement(
                  w,
                  {
                    PrivacyStore: e,
                    strLabel: Object(s.b)("#ProfilePrivacy_GameLibrary"),
                    PrivacyKey: "PrivacyOwnedGames",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(s.b)("#ProfilePrivacy_GameLibrary_Desc"),
                  1 != e.GetPrivacySetting("PrivacyOwnedGames") &&
                    o.createElement(
                      M,
                      {
                        PrivacyStore: e,
                        PrivacyKey: "PrivacyPlaytime",
                        LimitPrivacyKey: "PrivacyOwnedGames"
                      },
                      Object(s.b)("#ProfilePrivacy_Playtime")
                    )
                ),
                o.createElement("div", { className: "ProfilePrivacyHR" }),
                o.createElement(
                  w,
                  {
                    PrivacyStore: e,
                    strLabel: Object(s.b)("#ProfilePrivacy_FriendsList"),
                    PrivacyKey: "PrivacyFriendsList",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(s.b)("#ProfilePrivacy_FriendsList_Desc")
                ),
                o.createElement("div", { className: "ProfilePrivacyHR" }),
                o.createElement(
                  w,
                  {
                    PrivacyStore: e,
                    strLabel: Object(s.b)("#ProfilePrivacy_Inventory"),
                    PrivacyKey: "PrivacyInventory",
                    LimitPrivacyKey: "PrivacyProfile"
                  },
                  Object(s.d)(
                    "#ProfilePrivacy_Inventory_Desc",
                    o.createElement(
                      "a",
                      { href: p.ProfileURL + "inventory/" },
                      Object(s.b)("#ProfilePrivacy_Inventory_Inventory")
                    ),
                    o.createElement(
                      "a",
                      { href: p.ProfileURL + "inventory/#753_6" },
                      Object(s.b)("#ProfilePrivacy_Inventory_TradingCards")
                    )
                  ),
                  1 != e.GetPrivacySetting("PrivacyInventory") &&
                    o.createElement(
                      M,
                      {
                        PrivacyStore: e,
                        PrivacyKey: "PrivacyInventoryGifts",
                        LimitPrivacyKey: "PrivacyInventory"
                      },
                      Object(s.b)("#ProfilePrivacy_Gifts")
                    )
                ),
                o.createElement("div", { className: "ProfilePrivacyHR" }),
                o.createElement(
                  x,
                  null,
                  Object(s.b)("#ProfilePrivacy_Comments"),
                  ":",
                  o.createElement(P, { PrivacyStore: e })
                ),
                o.createElement("div", { className: "ProfilePrivacyHR" }),
                o.createElement(
                  w,
                  {
                    PrivacyStore: e,
                    strLabel: Object(s.b)("#ProfilePrivacy_UGC"),
                    strReadOnlySetting: Object(s.b)("#Privacy_PerItem")
                  },
                  Object(s.d)(
                    "#ProfilePrivacy_UGC_Desc",
                    o.createElement(
                      "a",
                      { href: p.ProfileURL + "screenshots/" },
                      Object(s.b)("#ProfilePrivacy_UGC_Desc_Screenshots")
                    ),
                    o.createElement(
                      "a",
                      { href: p.ProfileURL + "myworkshopfiles/" },
                      Object(s.b)("#ProfilePrivacy_UGC_Desc_WorkshopItems")
                    )
                  )
                )
              )
            );
          }),
          (t = a.c([_.observer], t))
        );
      })(o.Component);
    function w(e) {
      var t;
      return (
        (t = e.strReadOnlySetting
          ? o.createElement(C, { strLabel: e.strReadOnlySetting })
          : o.createElement(S, {
              PrivacyStore: e.PrivacyStore,
              PrivacyKey: e.PrivacyKey,
              LimitPrivacyKey: e.LimitPrivacyKey
            })),
        o.createElement(
          o.Fragment,
          null,
          o.createElement(x, null, e.strLabel, ":", t),
          o.createElement(E, null, e.children)
        )
      );
    }
    function x(e) {
      return o.createElement(
        "div",
        { className: "ProfilePrivacyHeader" },
        e.children
      );
    }
    function E(e) {
      return o.createElement(
        "div",
        { className: "ProfilePrivacyDesc" },
        e.children
      );
    }
    var S = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        a.d(t, e),
        (t.prototype.OnClick = function(e) {
          var t = this.props.PrivacyStore.GetPrivacySetting(
            this.props.PrivacyKey
          );
          Object(y.a)(
            o.createElement(I, {
              OnChange: this.OnSettingChanged,
              eCurrentPrivacy: t,
              eMinPrivacy: this.GetMinPrivacy()
            }),
            e,
            { bOverlapHorizontal: !0, bUseWebStyles: !0 }
          );
        }),
        (t.prototype.OnSettingChanged = function(e) {
          this.props.PrivacyStore.ChangePrivacySetting(
            this.props.PrivacyKey,
            e
          );
        }),
        (t.prototype.GetMinPrivacy = function() {
          if (this.props.LimitPrivacyKey)
            return this.props.PrivacyStore.GetPrivacySetting(
              this.props.LimitPrivacyKey
            );
        }),
        (t.prototype.render = function() {
          var e = h(
            this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey)
          );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
              e,
              o.createElement("img", {
                className: "ProfilePrivacyDropDown_Arrow",
                src:
                  c.a.COMMUNITY_CDN_URL +
                  "public/images/skin_1/actionArrowDnWhite.gif"
              })
            ),
            o.createElement(k, {
              eSaveState: this.props.PrivacyStore.GetSaveState(
                this.props.PrivacyKey
              )
            })
          );
        }),
        a.c([v.a], t.prototype, "OnClick", null),
        a.c([v.a], t.prototype, "OnSettingChanged", null),
        (t = a.c([_.observer], t))
      );
    })(o.Component);
    function k(e) {
      switch (e.eSaveState) {
        case 1:
          return o.createElement(
            "div",
            { className: "PrivacySaveNotice Saving" },
            Object(s.b)("#Shared_Saving")
          );
        case 3:
          return o.createElement(
            "div",
            { className: "PrivacySaveNotice Error" },
            Object(s.b)("#Error_Error")
          );
        case 2:
          return o.createElement(
            "div",
            { className: "PrivacySaveNotice Saved" },
            Object(s.b)("#Shared_Saved")
          );
        case 0:
        default:
          return null;
      }
    }
    var M = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a.d(t, e),
          (t.prototype.OnCheckboxChecked = function(e) {
            var t = e.currentTarget.checked ? 1 : 3;
            this.props.PrivacyStore.ChangePrivacySetting(
              this.props.PrivacyKey,
              t,
              this.props.LimitPrivacyKey
            );
          }),
          (t.prototype.render = function() {
            var e =
              1 ==
              this.props.PrivacyStore.GetPrivacySetting(this.props.PrivacyKey);
            return o.createElement(
              "div",
              { className: "ProfilePrivacyCheckbox" },
              o.createElement(
                "label",
                null,
                o.createElement("input", {
                  className: "ProfilePrivacyCheckbox_Input",
                  type: "checkbox",
                  checked: e,
                  onChange: this.OnCheckboxChecked
                }),
                o.createElement(
                  "div",
                  { className: "ProfilePrivacyCheckbox_Desc" },
                  this.props.children
                )
              )
            );
          }),
          a.c([v.a], t.prototype, "OnCheckboxChecked", null),
          (t = a.c([_.observer], t))
        );
      })(S),
      P = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { eSaveState: 0 }), t;
        }
        return (
          a.d(e, n),
          (e.prototype.OnClick = function(e) {
            var t = this.props.PrivacyStore.CommentPermission;
            Object(y.a)(
              o.createElement(L, {
                OnChange: this.OnSettingChanged,
                eCurrentPermission: t,
                eMinPrivacy: this.props.PrivacyStore.GetPrivacySetting(
                  "PrivacyProfile"
                )
              }),
              e,
              { bOverlapHorizontal: !0, bUseWebStyles: !0 }
            );
          }),
          (e.prototype.OnSettingChanged = function(e) {
            this.props.PrivacyStore.ChangeCommentPermission(e);
          }),
          (e.prototype.render = function() {
            var e,
              t,
              n = this.props.PrivacyStore.CommentPermission,
              r = this.props.PrivacyStore.GetPrivacySetting("PrivacyProfile"),
              i = (function(e) {
                switch (e) {
                  case 0:
                    return Object(s.b)("#Privacy_FriendsOnly");
                  case 1:
                    return Object(s.b)("#Privacy_Public");
                  case 2:
                    return Object(s.b)("#Privacy_Private");
                  default:
                    return "";
                }
              })(((e = n), 1 == (t = r) ? 2 : 2 == t && 1 == e ? 0 : e));
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: "ProfilePrivacyDropDown", onClick: this.OnClick },
                i,
                o.createElement("img", {
                  className: "ProfilePrivacyDropDown_Arrow",
                  src:
                    c.a.COMMUNITY_CDN_URL +
                    "public/images/skin_1/actionArrowDnWhite.gif"
                })
              ),
              o.createElement(k, {
                eSaveState: this.props.PrivacyStore.GetCommentSaveState()
              })
            );
          }),
          a.c([v.a], e.prototype, "OnClick", null),
          a.c([v.a], e.prototype, "OnSettingChanged", null),
          (e = a.c([_.observer], e))
        );
      })(o.Component);
    function C(e) {
      return o.createElement(
        "div",
        { className: "ProfilePrivacyDropDown readonly" },
        e.strLabel
      );
    }
    var I = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a.d(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.eMinPrivacy;
            return o.createElement(
              b.c,
              null,
              (!t || 3 <= t) &&
                o.createElement(
                  b.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(3);
                    }
                  },
                  Object(s.b)("#Privacy_Public")
                ),
              (!t || 2 <= t) &&
                o.createElement(
                  b.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(2);
                    }
                  },
                  Object(s.b)("#Privacy_FriendsOnly")
                ),
              o.createElement(
                b.d,
                {
                  onSelected: function() {
                    return e.props.OnChange(1);
                  }
                },
                Object(s.b)("#Privacy_Private")
              )
            );
          }),
          t
        );
      })(o.Component),
      L = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a.d(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.eMinPrivacy;
            return o.createElement(
              b.c,
              null,
              (!t || 3 <= t) &&
                o.createElement(
                  b.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(1);
                    },
                    title: Object(s.b)("#Profile_CommentPermission_Public_Desc")
                  },
                  Object(s.b)("#Privacy_Public")
                ),
              (!t || 2 <= t) &&
                o.createElement(
                  b.d,
                  {
                    onSelected: function() {
                      return e.props.OnChange(0);
                    },
                    title: Object(s.b)(
                      "#Profile_CommentPermission_FriendsOnly_Desc"
                    )
                  },
                  Object(s.b)("#Privacy_FriendsOnly")
                ),
              o.createElement(
                b.d,
                {
                  onSelected: function() {
                    return e.props.OnChange(2);
                  },
                  title: Object(s.b)("#Profile_CommentPermission_Private_Desc")
                },
                Object(s.b)("#Privacy_Private")
              )
            );
          }),
          t
        );
      })(o.Component);
    n("s4p+");
    function O(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-privacysettings"));
      } catch (e) {}
      var n = new f(t.PrivacySettings, t.eCommentPermission);
      r.render(o.createElement(g, { PrivacyStore: n }), e);
    }
    (window.AssertMsg = i.a),
      document.addEventListener("DOMContentLoaded", function() {
        var e;
        Object(c.c)(),
          (e = Object(c.b)("config", "profile_config")) && Object.assign(p, e),
          (function() {
            for (
              var e = document.querySelectorAll(".ProfileReactRoot"), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t],
                r = n.getAttribute("data-component");
              switch (r) {
                case "ProfilePrivacySettings":
                  O(n);
                  break;
                default:
                  Object(i.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationManifestReady = function(e, t, n) {
        Object(i.a)("manifest" === t, 'Expected manifest not "' + t + '"'),
          s.a.InitDirect(n);
      });
  },
  WpBz: function(e, t, n) {
    "use strict";
    function r(c) {
      return function(e, i, t) {
        var o = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = this[i + "_DebounceProperties"];
          void 0 === r &&
            (r = this[i + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === r.hTimer
              ? (o.apply(this, t),
                (r.hTimer = window.setInterval(function() {
                  0 < r.nPending
                    ? (o.apply(e, t), (r.nPending = 0))
                    : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                }, c)))
              : (r.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  XaMz: function(e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, [!!e, t].concat(n))
        : e || console.warn.apply(console, [t].concat(n));
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  Y3TG: function(e, t, n) {
    "use strict";
    n("vDqi"), n("JtU4");
  },
  e2SU: function(e, t, n) {
    "use strict";
    n.d(t, "u", function() {
      return c;
    }),
      n.d(t, "P", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return a;
      }),
      n.d(t, "g", function() {
        return l;
      }),
      n.d(t, "l", function() {
        return u;
      }),
      n.d(t, "y", function() {
        return m;
      }),
      n.d(t, "B", function() {
        return p;
      }),
      n.d(t, "m", function() {
        return h;
      }),
      n.d(t, "U", function() {
        return d;
      }),
      n.d(t, "K", function() {
        return f;
      }),
      n.d(t, "I", function() {
        return v;
      }),
      n.d(t, "eb", function() {
        return y;
      }),
      n.d(t, "fb", function() {
        return b;
      }),
      n.d(t, "cb", function() {
        return _;
      }),
      n.d(t, "W", function() {
        return g;
      }),
      n.d(t, "s", function() {
        return w;
      }),
      n.d(t, "r", function() {
        return x;
      }),
      n.d(t, "H", function() {
        return E;
      }),
      n.d(t, "a", function() {
        return S;
      }),
      n.d(t, "p", function() {
        return k;
      }),
      n.d(t, "w", function() {
        return M;
      }),
      n.d(t, "E", function() {
        return P;
      }),
      n.d(t, "db", function() {
        return C;
      }),
      n.d(t, "D", function() {
        return I;
      }),
      n.d(t, "h", function() {
        return L;
      }),
      n.d(t, "G", function() {
        return O;
      }),
      n.d(t, "F", function() {
        return N;
      }),
      n.d(t, "S", function() {
        return B;
      }),
      n.d(t, "f", function() {
        return T;
      }),
      n.d(t, "i", function() {
        return V;
      }),
      n.d(t, "d", function() {
        return D;
      }),
      n.d(t, "x", function() {
        return G;
      }),
      n.d(t, "X", function() {
        return W;
      }),
      n.d(t, "ab", function() {
        return z;
      }),
      n.d(t, "v", function() {
        return H;
      }),
      n.d(t, "c", function() {
        return R;
      }),
      n.d(t, "b", function() {
        return F;
      }),
      n.d(t, "k", function() {
        return j;
      }),
      n.d(t, "V", function() {
        return A;
      }),
      n.d(t, "z", function() {
        return U;
      }),
      n.d(t, "C", function() {
        return K;
      }),
      n.d(t, "L", function() {
        return Y;
      }),
      n.d(t, "R", function() {
        return X;
      }),
      n.d(t, "J", function() {
        return q;
      }),
      n.d(t, "Y", function() {
        return J;
      }),
      n.d(t, "Z", function() {
        return Q;
      }),
      n.d(t, "O", function() {
        return Z;
      }),
      n.d(t, "n", function() {
        return $;
      }),
      n.d(t, "o", function() {
        return ee;
      }),
      n.d(t, "gb", function() {
        return te;
      }),
      n.d(t, "j", function() {
        return ne;
      }),
      n.d(t, "A", function() {
        return re;
      }),
      n.d(t, "T", function() {
        return ie;
      }),
      n.d(t, "bb", function() {
        return oe;
      }),
      n.d(t, "q", function() {
        return ce;
      }),
      n.d(t, "M", function() {
        return se;
      }),
      n.d(t, "N", function() {
        return ae;
      }),
      n.d(t, "t", function() {
        return le;
      }),
      n.d(t, "Q", function() {
        return ue;
      });
    var r = n("q1tI"),
      i = n("twdX"),
      o = n.n(i);
    function c() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Hyperlink",
          "data-name": "Layer 1",
          viewBox: "0 0 100 100",
          x: "0px",
          y: "0px"
        },
        r.createElement(
          "g",
          { "data-name": "Group" },
          r.createElement("path", {
            "data-name": "Path",
            d:
              "M50.86,20.23l-9,9,4.24,4.24,9-9c6.35-6.35,16.09-6.93,21.73-1.3s5,15.38-1.3,21.73l-9,9,4.24,4.24,9-9c8.69-8.69,9.27-22.24,1.3-30.21S59.55,11.55,50.86,20.23Z"
          }),
          r.createElement("path", {
            "data-name": "Path",
            d:
              "M44.89,75.53a17.22,17.22,0,0,1-11.28,5.13A13.23,13.23,0,0,1,19.34,66.39a17.22,17.22,0,0,1,5.13-11.28l9-9-4.24-4.24-9,9a23.21,23.21,0,0,0-6.88,15.22c0,.37,0,.74,0,1.11A19.19,19.19,0,0,0,33.91,86.66a23.21,23.21,0,0,0,15.22-6.88l9-9-4.24-4.24Z"
          }),
          r.createElement("rect", {
            "data-name": "Path",
            className: "Link1",
            x: "28.75",
            y: "47",
            width: "42.48",
            height: "6",
            transform: "translate(-20.71 50) rotate(-45)"
          })
        )
      );
    }
    function s() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Settings",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
          enableBackground: "new -305.5 396.5 256 256"
        },
        r.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
        })
      );
    }
    function a() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ChatSettings",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 600 600"
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d:
              "M256,0C126.6,0,21.3,104.7,21.3,233.7c0,65.9,26.5,125.4,74.7,168.3v99.3c0,3.8,2,7.4,5.3,9.2c1.7,1,3.5,1.5,5.3,1.5   c1.8,0,3.7-0.5,5.4-1.5l85.8-50.3c18.9,4.8,38.4,7.3,58.1,7.3c129.4,0,234.7-104.9,234.7-233.7C490.7,104.7,385.4,0,256,0z    M405.3,254.1L370,260c-3,13.5-8.3,26-15.5,37.3l20.8,29.2L347.8,354l-29.2-20.8c-11.3,7.2-23.8,12.5-37.3,15.5l-5.9,35.3h-39   l-5.9-35.3c-13.5-3-26-8.3-37.3-15.5L164.2,354l-27.5-27.5l20.8-29.2C150.3,286,145,273.5,142,260l-35.3-5.9v-39l35.3-5.9   c3-13.5,8.3-26,15.5-37.3l-20.8-29.2l27.5-27.5l29.2,20.8c11.3-7.2,23.8-12.5,37.3-15.5l5.9-35.3h39l5.9,35.3   c13.5,3,26,8.3,37.3,15.5l29.2-20.8l27.5,27.5L354.5,172c7.2,11.3,12.5,23.8,15.5,37.3l35.3,5.9V254.1z"
          }),
          r.createElement("circle", { cx: "256", cy: "234.6", r: "45.9" })
        )
      );
    }
    function l() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          className: "SVGIcon_Button SVGIcon_CopyToClipboard",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "178.25,197.25 247,197.25 247,82.5 175,10.25 111.5,10.25 111.5,56 "
        }),
        r.createElement("polygon", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "155,133 83,60.75 11,60.75 11,247.75 155,247.75 "
        }),
        r.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "83,60.75 83,133 155,133 "
        }),
        r.createElement("polyline", {
          fill: "none",
          className: "line",
          strokeWidth: "12",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "175,10.25 175,82.5 247,82.5 "
        })
      );
    }
    function u() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px"
        },
        r.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
        })
      );
    }
    function m() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_MagnifyingGlass",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        r.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          r.createElement("path", {
            className: "ColorSelector",
            d:
              "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
            fill: "#ffffff",
            fillOpacity: "1",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function p(e) {
      var t = "SVGIcon_Button SVGIcon_Microphone";
      return (
        e.className && (t += " " + e.className),
        r.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-127.5 664.5 256 256"
          },
          r.createElement(
            "g",
            { className: "MicBase" },
            r.createElement(
              "g",
              null,
              r.createElement(
                "g",
                null,
                r.createElement("path", {
                  d:
                    "M-64.7,826.3c-0.5-2.9-0.8-5.8-0.8-8.7v-38.2h11.2v36.5L-64.7,826.3z"
                }),
                r.createElement("path", {
                  d:
                    "M-54.8,779.9v35.8l-9.6,9.6c-0.4-2.6-0.6-5.1-0.6-7.6v-37.7H-54.8 M-53.8,778.9H-66v38.7c0,3.3,0.4,6.5,1,9.7l11.2-11.2 V778.9L-53.8,778.9z"
                })
              ),
              r.createElement(
                "g",
                null,
                r.createElement("path", {
                  d:
                    "M56.8,817.6c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1h-35.2 c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6v-38.7H56.8V817.6z"
                }),
                r.createElement("path", {
                  d:
                    "M69,778.9H56.8v38.7c0,24.7-24.8,44.9-55.3,44.9c-16.6,0-31.6-6-41.7-15.5l-8.6,8.6c11.1,10.5,26.7,17.5,44.2,18.8v25.1 h-35.2c-2.1,0-3.8,2.7-3.8,6.1c0,3.4,1.7,6.1,3.8,6.1h35.5H7.3h35.5c2.1,0,3.8-2.7,3.8-6.1c0-3.4-1.7-6.1-3.8-6.1H7.6v-25.1 C42,871.8,69,847.3,69,817.6V778.9L69,778.9z"
                })
              )
            ),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M40.6,712.5c0-21.6-17.5-39.1-39.1-39.1c-21.6,0-39.1,17.5-39.1,39.1v87.4l10-10v-72.4h0v-5c0-16.1,13.1-29.1,29.1-29.1 c16.1,0,29.1,13.1,29.1,29.1v5v14.1l10-10V712.5z"
              })
            ),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M-4.7,835.4c-2.2-0.5-4.4-1.2-6.4-2.2C-9.1,834.2-6.9,834.9-4.7,835.4z"
              }),
              r.createElement("path", {
                d: "M-0.1,836c-0.2,0-0.4,0-0.6,0C-0.6,836-0.4,836-0.1,836z"
              }),
              r.createElement("path", {
                d: "M30.6,806.9C30.6,806.9,30.6,806.9,30.6,806.9v-16.6"
              }),
              r.createElement("path", {
                d:
                  "M-11.9,832.8c0.2,0.1,0.5,0.2,0.7,0.3C-11.4,833-11.7,832.9-11.9,832.8L-11.9,832.8z"
              }),
              r.createElement("path", {
                d:
                  "M-1.7,835.9c-0.3,0-0.5-0.1-0.8-0.1C-2.3,835.8-2,835.8-1.7,835.9z"
              }),
              r.createElement("path", {
                d:
                  "M-3.3,835.7c-0.3-0.1-0.6-0.1-1-0.2C-3.9,835.6-3.6,835.6-3.3,835.7z"
              }),
              r.createElement("path", {
                d:
                  "M30.6,776.1v14.1v16.6c0,0,0,0,0,0s0,0,0,0c0,16.1-13,29.1-29.1,29.1c-0.5,0-1.1,0-1.6,0c-0.2,0-0.4,0-0.6,0 c-0.3,0-0.6,0-1-0.1c-0.3,0-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.3-0.1-0.6-0.1-1-0.2c-0.2,0-0.3-0.1-0.5-0.1 c-2.2-0.5-4.4-1.2-6.4-2.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-3-1.6-5.7-3.6-8-6.1l-7.1,7.1 c7.1,7.6,17.3,12.3,28.5,12.3c21.6,0,39.1-17.5,39.1-39.1v-40.8L30.6,776.1z"
              }),
              r.createElement("path", {
                d:
                  "M-0.8,836c-0.3,0-0.6-0.1-1-0.1C-1.4,835.9-1.1,835.9-0.8,836z"
              }),
              r.createElement("path", {
                d: "M1.5,836.1c-0.5,0-1.1,0-1.6,0C0.4,836,0.9,836.1,1.5,836.1z"
              }),
              r.createElement("path", {
                d:
                  "M-2.6,835.8c-0.2,0-0.5-0.1-0.7-0.1C-3,835.7-2.8,835.7-2.6,835.8z"
              }),
              r.createElement("path", {
                d:
                  "M1.5,836.1c16.1,0,29.1-13,29.1-29.1c0,0,0,0,0,0C30.6,823,17.6,836.1,1.5,836.1z"
              }),
              r.createElement("path", {
                d:
                  "M-4.2,835.5c-0.2,0-0.3-0.1-0.5-0.1C-4.5,835.4-4.4,835.5-4.2,835.5z"
              }),
              r.createElement("path", {
                d:
                  "M-11.1,833.2C-11.1,833.2-11.2,833.2-11.1,833.2C-11.2,833.2-11.1,833.2-11.1,833.2z"
              })
            )
          ),
          r.createElement(
            "g",
            { className: "MicFill" },
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M-53.8,816.1L-65,827.3c2.2,10.8,7.9,20.5,16.2,28.3l8.6-8.6c-8.5-7.9-13.6-18.2-13.6-29.4V816.1L-53.8,816.1z"
              })
            ),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M1.5,834.6c-15.2,0-27.6-12.4-27.6-27.6v-94.5c0-15.2,12.4-27.6,27.6-27.6c15.2,0,27.6,12.4,27.6,27.6v94.5 C29.1,822.2,16.7,834.6,1.5,834.6z"
              }),
              r.createElement("path", {
                d:
                  "M1.5,696.3c8.9,0,16.1,7.2,16.1,16.1v94.5c0,8.9-7.2,16.1-16.1,16.1c-8.9,0-16.1-7.2-16.1-16.1v-94.5 C-14.6,703.6-7.4,696.3,1.5,696.3 M1.5,673.3c-21.6,0-39.1,17.5-39.1,39.1v94.5c0,21.6,17.5,39.1,39.1,39.1s39.1-17.5,39.1-39.1 v-94.5C40.6,690.8,23.1,673.3,1.5,673.3L1.5,673.3z"
              })
            )
          ),
          r.createElement(
            "g",
            { className: "MicStrike", fill: "none", strokeWidth: "1" },
            r.createElement("line", {
              x1: "-82.5",
              y1: "866.5",
              x2: "83.5",
              y2: "700.4"
            })
          )
        )
      );
    }
    function h() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Emoticon",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5"
        }),
        r.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "94.5",
          y1: "97.5",
          x2: "94.5",
          y2: "109.5"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "160.5",
          y1: "97.5",
          x2: "160.5",
          y2: "109.5"
        })
      );
    }
    function d() {
      return r.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Submit",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        r.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          r.createElement("path", {
            d:
              "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
            fill: "#FFFFFF",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function f() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ResizeIcon",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            fill: "#020202",
            d:
              "M115.512,137.263l21.6-21.6c0,0,25.5,25.5,45.8,45.8l35-35v91.6h-91.6l35-35 C141.012,162.763,115.512,137.263,115.512,137.263z"
          }),
          r.createElement("path", {
            fill: "#020202",
            d:
              "M108.312,129.763c-20.3-20.3-35.8-35.8-35.8-35.8l21.6-21.601c0,0,15.5,15.5,35.8,35.801L108.312,129.763z"
          }),
          r.createElement("path", {
            fill: "#020202",
            d:
              "M54.312,75.763c-20.3-20.3-15.8-15.8-15.8-15.8l21.6-21.601c0,0-4.5-4.5,15.8,15.801L54.312,75.763z"
          })
        )
      );
    }
    function v() {
      return r.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Popout",
          viewBox: "0 0 8 8",
          x: "0px",
          y: "0px"
        },
        r.createElement("path", {
          d:
            "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z"
        })
      );
    }
    function y() {
      return r.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "-165 95 100 100"
        },
        r.createElement(
          "g",
          null,
          r.createElement("polygon", {
            points:
              "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2"
          })
        )
      );
    }
    function b() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44"
        })
      );
    }
    function _(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VoiceRoom",
          x: "0px",
          y: "0px",
          width: "64px",
          height: "64px",
          viewBox: "0 0 64 64",
          enableBackground: "new 0 0 64 64"
        },
        !e.exitOnly &&
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
        !e.exitOnly &&
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
        r.createElement(
          "g",
          { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,19.4 "
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,42 "
          })
        ),
        r.createElement(
          "g",
          null,
          r.createElement("polyline", {
            className: "ExitDoor",
            opacity: e.exitOnly ? 1 : 0,
            strokeLinecap: "round",
            strokeMiterlimit: "1",
            strokeWidth: "2px",
            fill: "none",
            points:
              "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
          })
        ),
        !e.exitOnly &&
          r.createElement(
            "g",
            { className: "Microphone" },
            r.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
      );
    }
    function g() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_TextRoom",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
          stroke: "#000",
          strokeWidth: "10px"
        },
        r.createElement(
          "g",
          { className: "ScratchPad" },
          r.createElement("path", {
            fill: "none",
            strokeWidth: "0",
            strokeMiterlimit: "10",
            d:
              "M179.751,40.994h14.869 c8.388,0,15.25,6.862,15.25,15.25v141.193c0,8.388-6.862,15.25-15.25,15.25H57.37c-8.388,0-15.25-6.862-15.25-15.25V56.244 c0-8.388,6.862-15.25,15.25-15.25h14.869H179.751z"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "74.495",
            y1: "27.313",
            x2: "74.495",
            y2: "54.063"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "124.495",
            y1: "27.313",
            x2: "124.495",
            y2: "54.063"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "174.745",
            y1: "27.313",
            x2: "174.745",
            y2: "54.063"
          })
        ),
        r.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "115.4",
          x2: "179.4",
          y2: "115.4"
        }),
        r.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "145.8",
          x2: "143.3",
          y2: "145.8"
        }),
        r.createElement("line", {
          className: "TextLines",
          x1: "71.6",
          y1: "175.9",
          x2: "179.4",
          y2: "175.9"
        }),
        r.createElement("line", {
          className: "TextLines",
          x1: "73.7",
          y1: "82.7",
          x2: "166.8",
          y2: "82.7"
        })
      );
    }
    function w(e) {
      var t = "SVGIcon_Button SVGIcon_Headphones";
      return (
        e.className && (t += " " + e.className),
        r.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "-305.5 396.5 256 256"
          },
          r.createElement(
            "g",
            { className: "HeadPhonesBase" },
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                fill: "none",
                d:
                  "M-176.5,418.7c-37,0-69.5,30.2-69.5,64.5v25.3c11.3,2.3,19.9,12.3,19.9,24.3v8.6l100.9-100.9 C-138.2,427.3-156.7,418.7-176.5,418.7z"
              }),
              r.createElement("path", {
                d:
                  "M-226.2,532.9c0-12-8.5-22-19.9-24.3v-25.3c0-34.4,32.5-64.5,69.5-64.5c19.8,0,38.3,8.6,51.2,21.9l6.9-6.9 c-14.8-15.1-35.7-24.9-58.2-24.9c-42.3,0-79.4,34.8-79.4,74.5v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8c0,7.8,3.6,14.7,9.2,19.3 l40.5-40.5V532.9z"
              }),
              r.createElement("path", {
                d:
                  "M-97.1,508.6v-25.3c0-7.5-1.3-14.8-3.8-21.8l-7.9,7.9c1.2,4.5,1.8,9.1,1.8,13.9v25.3c-11.3,2.3-19.9,12.3-19.9,24.3v29.8 c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8v-29.8C-77.2,520.9-85.8,510.9-97.1,508.6z"
              })
            )
          ),
          r.createElement(
            "g",
            { className: "HeadphonesStrike" },
            r.createElement("line", {
              fill: "none",
              x1: "-260.5",
              y1: "598.5",
              x2: "-94.5",
              y2: "432.4"
            })
          ),
          r.createElement(
            "g",
            { className: "HeadPhonesFill" },
            r.createElement("path", {
              d:
                "M-226.2,562.7v-21.2l-40.5,40.5c4.3,3.5,9.7,5.6,15.6,5.6C-237.3,587.5-226.2,576.4-226.2,562.7z"
            }),
            r.createElement("path", {
              d:
                "M-118.3,433.7l-6.9,6.9c7.9,8.1,13.7,18,16.5,28.8l7.9-7.9C-104.5,451.1-110.5,441.6-118.3,433.7z"
            })
          )
        )
      );
    }
    function x() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Group",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          r.createElement("path", {
            d:
              "M58.6,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1\tC86.7,983,74,970.4,58.6,970.4z M202.1,970.4c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C230.2,983,217.6,970.4,202.1,970.4z M130.4,986c-15.4,0-28.1,12.7-28.1,28.1c0,15.4,12.7,28.1,28.1,28.1s28.1-12.7,28.1-28.1 C158.5,998.6,145.8,986,130.4,986z M242.8,1110.6c0-0.1,0-17.9,0-18l-0.1-16.1c0-22.4-18.2-40.6-40.6-40.6 c-17.8,0-30,7.7-36.3,18.8c-2,3.5-3.4,7.3-4.5,11.1c-7.5-8.7-18.6-14.3-31-14.3s-23.5,5.6-31,14.3c-1.1-3.9-2.5-7.6-4.5-11.1 c-6.3-11.1-18.4-18.8-36.3-18.8c-22.4,0-40.6,18.2-40.6,40.6v46.8c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2 c3.4,0,6.2-2.8,6.2-6.2v-31.2h9.4v9.4c0,3.4,2.8,6.2,6.2,6.2h12.5v31.2c0,3.4,2.8,6.2,6.2,6.2H146c3.4,0,6.2-2.8,6.2-6.2v-31.2 h12.5c3.4,0,6.2-2.8,6.2-6.2v-9.4h9.4v31.2c0,3.4,2.8,6.2,6.2,6.2h31.2c3.4,0,6.2-2.8,6.2-6.2v-31.2h12.5c3.4,0,6.3-2.7,6.3-6.2\tV1110.6z"
          })
        )
      );
    }
    function E() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_PlusCircle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("circle", {
          fill: "none",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "95.333"
        }),
        r.createElement("line", {
          className: "horizontalLine",
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "73.333",
          y1: "128",
          x2: "183.333",
          y2: "128"
        }),
        r.createElement("line", {
          className: "verticalLine",
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "128.333",
          y1: "73.335",
          x2: "128.333",
          y2: "183.333"
        })
      );
    }
    function S() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_AddFriend",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
          },
          r.createElement("circle", { cx: "86.296", cy: "47.419", r: "33.526" })
        ),
        r.createElement("path", {
          className: "friendBody",
          d:
            "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
        }),
        r.createElement("path", {
          className: "plusCircle",
          d:
            "M179.01,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.989,66.99,66.989c36.997,0,66.99-29.991,66.99-66.989 S216.008,103.892,179.01,103.892z M217.893,175.882h-33.647v33.882c0,2.762-2.239,5-5,5s-5-2.238-5-5v-33.882h-33.647 c-2.762,0-5-2.238-5-5c0-2.763,2.238-5,5-5h33.647V132.47c0-2.762,2.239-5,5-5s5,2.238,5,5v33.412h33.647c2.762,0,5,2.237,5,5 C222.893,173.643,220.654,175.882,217.893,175.882z"
        })
      );
    }
    function k() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_4",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FriendRequest",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          {
            className: "friendHead",
            transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)"
          },
          r.createElement("circle", { cx: "85.923", cy: "47.419", r: "33.526" })
        ),
        r.createElement("path", {
          className: "friendBody",
          d:
            "M100.353,170.882c0-23.589,10.397-44.736,26.842-59.152c-3.352-0.423-6.773-0.649-10.257-0.649H94.231\tc-39.775,0-56.481,28.271-56.481,63.099v41.88c0,0-0.3,16.369,35.917,21.813c36.217,5.444,73.651,5,73.651,5 C119.666,230.681,100.353,203.044,100.353,170.882z"
        }),
        r.createElement("path", {
          className: "friendBodyFull",
          d:
            "M176.504,217.922v-42.624c0-35.443-17.002-64.217-57.483-64.217H106.96h-1.017H94.898 c-40.48,0.001-57.484,28.774-57.484,64.217v42.624c0,0,0,22.197,69.544,22.197C177.521,240.121,176.504,217.922,176.504,217.922z"
        }),
        r.createElement("path", {
          className: "friendArm",
          d:
            "M18.167,63.833c6.53-0.734,39.348,39.127,50.007,47.647s21.327,16.686,15.16,25.353s-20.646,16.74-36.167,2.5 S-1.349,90.532,0,85.333S8.599,64.909,18.167,63.833z"
        }),
        r.createElement("path", {
          className: "redCircle",
          d:
            "M178.51,103.892c-36.998,0-66.99,29.992-66.99,66.99s29.994,66.99,66.99,66.99c36.997,0,66.99-29.992,66.99-66.99 S215.508,103.892,178.51,103.892z"
        })
      );
    }
    function M() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Invite",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        r.createElement("path", {
          d:
            "M165.678,20.535c-17.251,0-31.386,14.135-31.386,31.386c0,17.252,14.135,31.386,31.386,31.386 c17.251,0,31.386-14.134,31.386-31.386C197.063,34.67,182.929,20.535,165.678,20.535z"
        }),
        r.createElement("path", {
          d:
            "M165.678,93.121c24.995,0,45.335,20.34,45.335,45.335v52.31c0,3.853-3.123,6.975-6.975,6.975h-13.95v34.874 c0,3.852-3.123,6.974-6.974,6.975h-34.874c-3.852-0.001-6.974-3.123-6.975-6.975v-34.874h-13.95c-3.852,0-6.974-3.123-6.974-6.975 v-52.31C120.343,113.461,140.683,93.121,165.678,93.121z"
        }),
        r.createElement(
          "g",
          { className: "invitePlus" },
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            x1: "14",
            y1: "128",
            x2: "101.5",
            y2: "128"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "22",
            strokeMiterlimit: "10",
            x1: "57.75",
            y1: "84.25",
            x2: "57.75",
            y2: "171.75"
          })
        )
      );
    }
    function P() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Paperclip",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
        })
      );
    }
    function C() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Volume",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        r.createElement(
          "g",
          { className: "Speaker" },
          r.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        r.createElement(
          "g",
          { className: "SoundWaves" },
          r.createElement("path", {
            className: "SoundWavesHighest",
            d:
              "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
          }),
          r.createElement("path", {
            className: "SoundWavesHigh",
            d:
              "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
          }),
          r.createElement("path", {
            className: "SoundWavesMed",
            d:
              "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
          }),
          r.createElement("path", {
            className: "SoundWavesLow",
            d:
              "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
          })
        ),
        r.createElement(
          "g",
          { className: "SoundX" },
          r.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: "0",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667"
          })
        )
      );
    }
    function I() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_NewChatGroup",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "Bubble",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          d:
            "M127.393,10.833 c64.854,0,117.46,52.609,117.46,117.013c0,24.035-7.254,45.804-19.5,63.943c-4.99,7.711,13.15,39.457,20.408,51.705 c4.989,8.612-51.701-19.05-59.412-14.514c-17.233,9.979-37.188,15.872-58.957,15.872c-64.859,0-117.465-52.607-117.465-117.008 C9.928,63.442,62.534,10.833,127.393,10.833z"
        }),
        r.createElement("line", {
          strokeWidth: "22",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "83.5",
          y1: "128.886",
          x2: "176.184",
          y2: "128.886"
        }),
        r.createElement("line", {
          strokeWidth: "22",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "129.842",
          y1: "82.544",
          x2: "129.842",
          y2: "175.228"
        })
      );
    }
    function L() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Crown",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d:
              "M239.874,94.963l-31.115,21.325c-18.18,12.586-43.351,5.594-52.44-14.333l-23.772-50.692c-2.099-4.194-8.041-4.194-9.789,0 l-23.074,50.343c-9.439,20.627-35.31,27.27-53.49,13.983L16.128,93.565c-4.195-3.147-10.139,1.049-8.391,6.293l31.464,106.628 c0.35,1.049,1.398,1.397,2.098,1.397h173.752c1.049,0,1.749-0.698,2.098-1.397l31.115-104.53 C250.012,96.36,244.068,91.816,239.874,94.963z"
          })
        )
      );
    }
    function O() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Play",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
        })
      );
    }
    function N() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Pause",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
        }),
        r.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
        })
      );
    }
    function B() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SortBy",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "time" },
          r.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "91.735",
            cy: "128.014",
            r: "64"
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "91.735,90.833 91.735,128.014 116.58,152.086 \t"
          })
        ),
        r.createElement(
          "g",
          { className: "arrow" },
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 171.207,163.675"
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "199.735,63.66 199.735,192.366 228.266,163.675"
          })
        ),
        r.createElement(
          "g",
          { className: "alphabet" },
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "70.268,109.934 94.483,63.635 119.77,109.934"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            x1: "77.458",
            y1: "97.861",
            x2: "112.135",
            y2: "97.861"
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points:
              "70.045,145.379 119.547,145.379 70.045,192.032 119.547,192.032"
          })
        )
      );
    }
    function T() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Check",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          stroke: "#fff",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "49.5,147.75 95,210.75 206.5,45.25 "
        })
      );
    }
    function V() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DialogCheck",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "defs",
          null,
          r.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            r.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: "#00ccff"
            }),
            r.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: "#2d73ff"
            })
          ),
          r.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            r.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20"
            }),
            r.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10"
            }),
            r.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal"
            })
          )
        ),
        r.createElement("path", {
          fill: "none",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        }),
        r.createElement("path", {
          fill: "none",
          opacity: ".2",
          filter: "url(#f1)",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        })
      );
    }
    function D() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Caution",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "triangle" },
          r.createElement("path", {
            stroke: "#020202",
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            d: "M127.9,76.632"
          }),
          r.createElement("path", {
            fill: "none",
            stroke: "#020202",
            strokeWidth: "11",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "5",
            d:
              "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606"
          }),
          r.createElement("path", { fill: "#020202", d: "M127.9,208.12" })
        ),
        r.createElement(
          "g",
          { className: "exclamation" },
          r.createElement("line", {
            fill: "none",
            stroke: "#020202",
            strokeWidth: "16",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "127.9",
            y1: "76.632",
            x2: "127.9",
            y2: "160.07"
          }),
          r.createElement("path", {
            fill: "#020202",
            d:
              "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12"
          })
        )
      );
    }
    function G() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Lock",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
        }),
        r.createElement("path", {
          className: "baseLock",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "22",
          strokeMiterlimit: "10",
          d:
            "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885"
        })
      );
    }
    function W(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        r.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          r.createElement(
            "g",
            { className: o.a.partCircle },
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            r.createElement("path", {
              className: o.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.mainOutline },
            r.createElement("path", {
              className: o.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: o.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.bottomCircle },
            r.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          r.createElement(
            "g",
            { className: o.a.topCircle },
            r.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019"
            })
          )
        )
      );
    }
    function z() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Video",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "videoPlayButton",
          d:
            "M165.399,124.063L109.118,92.06c-1.399-0.797-3.118-0.787-4.508,0.026c-1.39,0.805-2.25,2.295-2.25,3.905v64.008 c0,1.609,0.86,3.1,2.25,3.913c0.705,0.412,1.491,0.613,2.277,0.613c0.768,0,1.546-0.191,2.241-0.596l56.283-32.003 c1.416-0.806,2.285-2.306,2.285-3.934C167.694,126.368,166.816,124.869,165.399,124.063z"
        }),
        r.createElement("path", {
          d:
            "M238.069,40.646H214.25h-28.82h-28.82h-28.458h-0.36H99.333H70.536H41.727h-23.82c-3.184,0-5.773,2.59-5.773,5.772v23.856 v120.441v18.867c0,3.184,2.589,5.771,5.773,5.771h2.415h21.394h28.82h28.82h28.459h0.361h28.457h28.82h28.82h23.82 c3.184,0,5.773-2.589,5.773-5.771v-18.867V70.274V46.418C243.844,43.223,241.254,40.646,238.069,40.646z M191.215,47.181h17.273  V64.5h-17.273V47.181L191.215,47.181z M162.396,47.181h17.272V64.5h-17.272V47.181z M133.938,47.181h16.912V64.5h-16.912V47.181z\tM105.128,47.181h16.912V64.5h-16.912V47.181z M76.309,47.181h17.273V64.5H76.309V47.181z M47.488,47.181h17.273V64.5H47.488V47.181 z M18.681,47.181h17.273V64.5H18.681V47.181z M35.954,208.811H18.681v-17.319h17.273V208.811z M64.763,208.811H47.489v-17.319 h17.273V208.811L64.763,208.811z M93.583,208.811H76.31v-17.319h17.273V208.811z M122.041,208.811h-16.912v-17.319h16.912V208.811z M150.849,208.811h-16.912v-17.319h16.912V208.811z M179.668,208.811h-17.272v-17.319h17.272V208.811z M208.488,208.811h-17.273 v-17.319h17.273V208.811z M237.297,208.811h-17.273v-17.319h17.273V208.811L237.297,208.811z M237.297,184.943H214.25h-28.819 h-28.82h-28.458h-0.361H99.333H70.537H41.728H18.682V71.047h23.046h28.82h28.82h28.458h0.36h28.458h28.82h28.82h23.045v113.896 H237.297z M237.297,64.5h-17.273V47.181h17.273V64.5L237.297,64.5z"
        })
      );
    }
    function H() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          className: "SVGIcon_Button SVGIcon_Image",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100",
          enableBackground: "new 0 0 100 100"
        },
        r.createElement("path", {
          stroke: "#ffffff",
          fill: "#ffffff",
          d:
            "M83.086,12.091H16.913C10.344,12.091,5,17.435,5,24.004v51.992l0.005,0.102c0.056,6.514,5.396,11.813,11.908,11.813h66.173  c6.531,0,11.874-5.314,11.906-11.764L95,24.004C95,17.435,89.654,12.091,83.086,12.091z M83.086,82.989H16.913  c-3.516,0-6.488-2.653-6.93-6.106l18.899-20.615c1.226-1.34,2.85-2.076,4.574-2.076c1.723,0,3.347,0.736,4.574,2.078l19.611,21.393  c0.885,0.961,2.508,1.029,3.473,0.148c1-0.916,1.068-2.476,0.152-3.478l-4.113-4.485l8.406-8.918  c1.258-1.332,2.926-2.064,4.696-2.064c1.772,0,3.44,0.732,4.696,2.064l15.061,15.973C89.564,80.346,86.594,82.989,83.086,82.989z   M90.08,69.801L78.532,57.555c-2.194-2.328-5.132-3.609-8.275-3.609c-3.142,0-6.08,1.281-8.272,3.609l-8.164,8.656l-12.162-13.27  c-2.171-2.366-5.084-3.67-8.201-3.67c-3.119,0-6.031,1.304-8.202,3.67L9.92,69.673V24.004c0-3.856,3.137-6.994,6.993-6.994h66.173  c3.857,0,6.994,3.137,6.994,6.994V69.801z"
        }),
        r.createElement("path", {
          stroke: "#ffffff",
          fill: "#ffffff",
          d:
            "M68.907,22.489c-6.569,0-11.914,5.344-11.914,11.914c0,6.569,5.345,11.913,11.914,11.913  c6.567,0,11.913-5.344,11.913-11.913C80.82,27.833,75.477,22.489,68.907,22.489z M68.907,41.396c-3.856,0-6.993-3.137-6.993-6.993  s3.137-6.994,6.993-6.994c3.854,0,6.991,3.138,6.991,6.994S72.764,41.396,68.907,41.396z"
        })
      );
    }
    function R() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Bell",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          d:
            "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z"
        })
      );
    }
    function F(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          transform: "rotate(" + e.angle + ")",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Arrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 181.061,61.674 "
        }),
        r.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 74.939,61.674 "
        })
      );
    }
    function j(e) {
      var t = "";
      return (
        e.angle && (t = "rotate(" + e.angle + ")"),
        r.createElement(
          "svg",
          {
            transform: t,
            version: "1.1",
            id: "arrowBase",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_DoubleArrow",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          r.createElement("polyline", {
            className: "Arrow1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "135.65,21.667 30.081,127.235 137.18,234.333 "
          }),
          r.createElement("polyline", {
            className: "Arrow2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "224.389,21.667 118.821,127.235 225.92,234.333 "
          })
        )
      );
    }
    function A() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 "
        }),
        r.createElement("polyline", {
          className: "Arrow2",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "224.389,21.667 118.821,127.235 225.92,234.333 "
        })
      );
    }
    function U() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01"
        })
      );
    }
    function K() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01"
        })
      );
    }
    function Y() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
        }),
        r.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973"
        })
      );
    }
    function X() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SingleWindowToggle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "mainBox" },
          r.createElement("rect", {
            x: "90",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "142",
            height: "171.667"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "90",
            y1: "54.01",
            x2: "232",
            y2: "54.01"
          })
        ),
        r.createElement(
          "g",
          { className: "leftBox" },
          r.createElement("rect", {
            x: "28",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "62",
            height: "171.667"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "28",
            y1: "54.01",
            x2: "90",
            y2: "54.01"
          })
        )
      );
    }
    function q() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Reload",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "30",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895"
        }),
        r.createElement("polygon", {
          points: "147.639,108.361 245.755,10.166 245.834,108.361 "
        })
      );
    }
    function J() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trade",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          d:
            "M132.025,162.943h40.246c0,0,3.219,56.879-31.303,79.599c-12.298,8.094,71.103-6.708,75.574-79.599h35.775l-60.146-74.681 L132.025,162.943z"
        }),
        r.createElement("path", {
          d:
            "M123.975,93.056H83.729c0,0-3.219-56.879,31.303-79.599c12.298-8.094-71.103,6.708-75.574,79.599H3.682l60.146,74.681 L123.975,93.056z"
        })
      );
    }
    function Q() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trash",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "base" },
          r.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d:
              "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909"
          })
        ),
        r.createElement(
          "g",
          { className: "lines" },
          r.createElement("path", {
            className: "line1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197"
          }),
          r.createElement("path", {
            className: "line2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197"
          }),
          r.createElement("path", {
            className: "line3",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197"
          })
        ),
        r.createElement(
          "g",
          { className: "lid" },
          r.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88"
          }),
          r.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            d:
              "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796"
          })
        )
      );
    }
    function Z() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Scroll",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { transform: "translate(0,-952.36215)" },
          r.createElement("path", {
            d:
              "M49.624,963.362c-20.72,0-37.667,14.78-37.667,32.806c0,3.589,3.353,6.499,7.486,6.499l52.407-0.305v162.5 c0,18.134,17.404,32.5,38.018,32.5h96.508c20.612,0,37.667-14.475,37.667-32.5c0-3.59-3.354-6.499-7.486-6.5H217.84V996.168 c0-18.024-16.947-32.806-37.667-32.806H49.624z M49.624,976.362h2.223c0.569,0.162,1.158,0.265,1.754,0.306 c8.159,1.274,14.426,6.085,16.962,12.694l-42.112,0.306C31.513,981.897,39.656,976.362,49.624,976.362z M79.337,976.362h100.836 c12.587,0,22.694,8.77,22.694,19.806v162.194H139.23c-4.135,0.001-7.486,2.91-7.488,6.5c0,4.609-1.43,7.796-4.21,10.765 c-2.78,2.972-7.203,5.757-13.686,7.923c-0.624,0.201-1.214,0.476-1.755,0.813h-2.223c-12.695,0-23.044-8.573-23.044-19.5v-169 C86.824,988.529,84.023,981.812,79.337,976.362z M108.582,1005.611c-4.135,0.169-7.33,3.216-7.135,6.807 c0.193,3.59,3.702,6.363,7.837,6.194h71.123c4.135,0.051,7.535-2.817,7.592-6.407c0.059-3.591-3.246-6.542-7.381-6.594 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1005.603,108.816,1005.603,108.582,1005.611z M108.582,1044.612 c-4.135,0.169-7.33,3.215-7.135,6.807c0.193,3.588,3.702,6.362,7.837,6.192h71.123c4.135,0.051,7.535-2.816,7.592-6.407 c0.059-3.59-3.246-6.542-7.381-6.592c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1044.603,108.816,1044.603,108.582,1044.612z M108.582,1083.612c-4.135,0.169-7.33,3.216-7.135,6.806c0.193,3.589,3.702,6.363,7.837,6.193h71.123 c4.135,0.052,7.535-2.816,7.592-6.407c0.059-3.59-3.246-6.541-7.381-6.592c-0.069-0.001-0.141-0.001-0.211,0h-71.123 C109.05,1083.602,108.816,1083.602,108.582,1083.612z M108.582,1122.611c-4.135,0.17-7.33,3.216-7.135,6.806 c0.193,3.591,3.702,6.364,7.837,6.195h71.123c4.135,0.05,7.535-2.818,7.592-6.408c0.059-3.591-3.246-6.541-7.381-6.593 c-0.069,0-0.141,0-0.211,0h-71.123C109.05,1122.602,108.816,1122.602,108.582,1122.611z M145.547,1171.363h82.002 c-3.09,7.604-11.189,12.999-21.173,12.999h-67.849c0.196-0.197,0.512-0.306,0.703-0.509 C142.576,1180.277,144.436,1175.973,145.547,1171.363z"
          })
        )
      );
    }
    function $(e) {
      return r.createElement(
        "svg",
        {
          transform: "rotate(" + e.angle + ")",
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FlatArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff"
        })
      );
    }
    function ee(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className:
            "SVGIcon_Button SVGIcon_FriendIcon" +
            (e.bPending ? " SVGIcon_FriendIcon_Pending" : ""),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "outline" },
          r.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            r.createElement("path", {
              d:
                "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z"
            })
          ),
          r.createElement("path", {
            d:
              "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z"
          }),
          r.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z"
          })
        ),
        r.createElement(
          "g",
          { className: "foreground" },
          r.createElement(
            "g",
            { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
            r.createElement("circle", {
              fill: "#FFFFFF",
              cx: "102.239",
              cy: "49.488",
              r: "33.446"
            })
          ),
          r.createElement("path", {
            fill: "#FFFFFF",
            d:
              "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z"
          }),
          r.createElement("path", {
            className: "WavingArm",
            opacity: e.bPending ? "1" : "0",
            d:
              "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z"
          })
        )
      );
    }
    function te() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_YouTube",
          x: "0px",
          y: "0px",
          width: "71.412px",
          height: "50px",
          viewBox: "0 0 71.412 50"
        },
        r.createElement(
          "g",
          { id: "g5", transform: "scale(0.58823529,0.58823529)" },
          r.createElement("path", {
            id: "path7",
            fill: "#ff0000",
            d:
              "M118.9,13.3c-1.4-5.2-5.5-9.3-10.7-10.701C98.7,0,60.7,0,60.7,0 s-38,0-47.5,2.5C8.1,3.9,3.9,8.1,2.5,13.3C0,22.8,0,42.5,0,42.5s0,19.799,2.5,29.199C3.9,76.9,8,80.999,13.2,82.4 C22.8,85,60.7,85,60.7,85s37.999,0,47.5-2.5c5.2-1.399,9.3-5.5,10.7-10.7c2.499-9.501,2.499-29.201,2.499-29.201 S121.5,22.8,118.9,13.3z"
          }),
          r.createElement("polygon", {
            id: "polygon9",
            fill: "#ffffff",
            points: "80.201,42.5 48.6,24.3 48.6,60.7"
          })
        )
      );
    }
    function ne() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoNotDisturb",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "101.5"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          x1: "73",
          y1: "128",
          x2: "183",
          y2: "128"
        })
      );
    }
    function re(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          transform: e.bFlipHorizontal ? "scale(-1 1)" : "scale(1 1)",
          className: "SVGIcon_Button SVGIcon_MediaControls",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
        }),
        r.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
        })
      );
    }
    function ie() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_SteamTV",
          x: "0px",
          y: "0px",
          width: "1024px",
          height: "256px",
          viewBox: "0 0 1024 256"
        },
        r.createElement(
          "defs",
          null,
          r.createElement(
            "linearGradient",
            { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            r.createElement("stop", {
              offset: "0%",
              stopColor: "rgb(55, 102, 251)"
            }),
            r.createElement("stop", {
              offset: "100%",
              stopColor: "rgb(91, 106, 219)"
            })
          ),
          r.createElement(
            "linearGradient",
            { id: "gradientText", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            r.createElement("stop", {
              offset: "0%",
              stopColor: "rgb(91, 106, 219)"
            }),
            r.createElement("stop", {
              offset: "100%",
              stopColor: "rgb(125, 110, 188)"
            })
          )
        ),
        r.createElement("circle", {
          className: "logoBG",
          opacity: "0",
          fill: "#000000",
          cx: "156.586",
          cy: "128",
          r: "125.914"
        }),
        r.createElement(
          "g",
          { id: "logo" },
          r.createElement("path", {
            fill: "url(#gradient)",
            d:
              "M156.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.016,1.934,0.051l29.226-42.355c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.239,20.745,46.239,46.241c0,25.494-20.741,46.241-46.239,46.241 c-0.352,0-0.698-0.01-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.14-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.991-34.026-27.87l-46.993-19.429c14.55,51.464,61.831,89.19,117.957,89.19 c67.713,0,122.605-54.893,122.605-122.604C278.978,60.244,224.086,5.355,156.374,5.355"
          }),
          r.createElement("path", {
            fill: "rgb(67, 104, 241)",
            d:
              "M111.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.028c2.674-6.416,2.694-13.5,0.04-19.929c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.648-13.196-2.552-19.198-0.291l15.561,6.436c9.776,4.074,14.396,15.299,10.324,25.072 C132.031,190.841,120.801,195.464,111.026,191.387"
          }),
          r.createElement("path", {
            fill: "rgb(79, 105, 230)",
            d:
              "M227.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.812,13.821-30.812,30.809 c0,16.988,13.824,30.806,30.812,30.806C213.818,127.165,227.639,113.347,227.639,96.359 M173.736,96.306 c0-12.783,10.364-23.142,23.145-23.142c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.361,23.142-23.145,23.142 C184.1,119.447,173.736,109.089,173.736,96.306"
          })
        ),
        r.createElement(
          "g",
          { id: "steam" },
          r.createElement("path", {
            fill: "rgb(92, 106, 218)",
            d:
              "M404.52,91.9l-7.968,14.006c-6.138-4.287-14.455-6.862-21.717-6.862c-8.299,0-13.437,3.43-13.437,9.586 c0,7.473,9.124,9.212,22.682,14.082c14.574,5.149,22.948,11.21,22.948,24.558c0,18.264-14.359,28.519-34.998,28.519 c-10.063,0-22.195-2.595-31.53-8.265l5.815-15.539c7.579,4.008,16.644,6.381,24.722,6.381c10.897,0,16.071-4.021,16.071-9.96 c0-6.802-7.893-8.843-20.641-13.06c-14.521-4.856-24.586-11.213-24.586-25.992c0-16.658,13.34-26.225,32.538-26.225 C387.797,83.128,398.551,87.367,404.52,91.9"
          }),
          r.createElement("polygon", {
            fill: "rgb(99, 107, 211)",
            points:
              "468.163,100.753 468.163,174.252 449.402,174.252 449.402,100.753 422.166,100.753 422.166,84.663 495.315,84.663 495.315,100.753 \t"
          }),
          r.createElement("polygon", {
            fill: "rgb(108, 108, 203)",
            points:
              "533.512,100.706 533.512,120.896 569.417,120.896 569.417,136.982 533.512,136.982 533.512,158.014 575.173,158.014 575.173,174.253 514.757,174.253 514.757,84.665 575.173,84.665 575.173,100.706"
          }),
          r.createElement("path", {
            fill: "rgb(117, 109, 195)",
            d:
              "M617.054,156.857l-5.932,17.396h-19.67l33.593-89.594h18.888l34.539,89.594h-20.336l-6.061-17.396H617.054z M634.378,106.035l-12.23,35.87h24.723L634.378,106.035z"
          }),
          r.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "773.403,119.291 748.888,171.645 738.302,171.645 714.182,119.758 714.182,174.253 696.212,174.253 696.212,84.665 714.138,84.665 744.251,149.33 773.285,84.665 791.374,84.665 791.374,174.253 773.406,174.253"
          })
        ),
        r.createElement(
          "g",
          { id: "tv" },
          r.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "853.961,92.664 823.506,92.664 823.506,84.147 893.835,84.147 893.835,92.664 863.51,92.664 863.51,174.479 853.961,174.479"
          }),
          r.createElement("polygon", {
            fill: "rgb(125, 110, 188)",
            points:
              "909.835,84.147 920.286,84.147 950.612,165.831 980.033,84.147 990.487,84.147 956.421,174.479 944.159,174.479"
          })
        )
      );
    }
    function oe() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Viewers",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
        }),
        r.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
        })
      );
    }
    function ce() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          className: "SVGIcon_Button SVGIcon_Globe",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64"
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d:
              "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8"
          })
        )
      );
    }
    function se() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "grabber" },
          r.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
          })
        )
      );
    }
    function ae() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
        }),
        r.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332"
        })
      );
    }
    function le(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_HideShowChat",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { id: "hidechat", opacity: e.showChat ? "0" : "1" },
          ">",
          r.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "156.001,189.834 116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 59.25,59.011"
          }),
          r.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "109.427,59.011 225.299,59.011 225.299,189.834 207,189.834"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "49.786",
            y1: "15.012",
            x2: "214.409",
            y2: "233.723"
          })
        ),
        r.createElement(
          "g",
          { id: "showchat", opacity: e.showChat ? "1" : "0" },
          r.createElement("polygon", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 225.299,59.011 225.299,189.834"
          })
        ),
        r.createElement(
          "g",
          { id: "textlines", opacity: e.showChat ? "1" : "0" },
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "124.75",
            x2: "194.167",
            y2: "124.75"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "155.75",
            x2: "194.167",
            y2: "155.75"
          }),
          r.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            x1: "72.333",
            y1: "93.75",
            x2: "179.926",
            y2: "93.75"
          }),
          r.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points:
              "156.001,189.834 116.375,189.834 67.31,222.538 67.31,189.834 39.834,189.834 39.834,59.011 59.25,59.011 "
          }),
          r.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "109.427,59.011 225.299,59.011 225.299,189.834 207,189.834"
          })
        )
      );
    }
    function ue() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ShowBothChats",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("circle", {
          opacity: "0",
          fill: "#FFFFFF",
          strokeWidth: "0",
          cx: "166.241",
          cy: "161.906",
          r: "75.259"
        }),
        r.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points:
            "92.367,155.634 51.311,183 51.311,150.296 23.834,150.296 23.834,19.473 140.5,19.473 140.5,91.5"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "82.167",
          x2: "113.379",
          y2: "82.167"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "113.167",
          x2: "113.379",
          y2: "113.167"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "8",
          strokeMiterlimit: "10",
          x1: "48.529",
          y1: "51.167",
          x2: "99.138",
          y2: "51.167"
        }),
        r.createElement("path", {
          d:
            "M166.241,82.167c-43.933,0-79.74,35.807-79.74,79.74c0,43.932,35.808,79.739,79.74,79.739 c43.932,0,79.739-35.808,79.739-79.739C245.98,117.975,210.173,82.167,166.241,82.167 M166.241,231.717 c-3.611,0-7.522-0.301-11.134-0.902c-3.31-3.311-6.318-8.426-9.027-14.444c-2.407-5.416-4.212-11.434-6.018-18.054  8.124-0.902,16.851-1.505,25.878-1.505c9.026,0,17.753,0.603,25.877,1.505c-1.504,6.62-3.61,12.638-6.018,18.054 c-2.708,6.019-5.718,11.134-9.027,14.444C173.764,231.416,169.852,231.717,166.241,231.717 M166.241,191.696 c-9.629,0-18.656,0.602-27.082,1.505c-1.805-9.027-2.708-18.656-3.009-28.887h59.88c0,10.23-1.203,19.859-3.009,28.887 C184.896,192.298,175.87,191.696,166.241,191.696 M166.241,92.097c3.61,0,7.522,0.301,11.133,0.903 c3.311,3.31,6.319,8.425,9.027,14.443c2.407,5.416,4.213,11.435,6.019,18.055c-8.125,0.902-16.851,1.504-25.878,1.504  s-17.753-0.602-25.878-1.504c1.505-6.62,3.611-12.639,6.019-18.055c2.708-6.018,5.717-11.133,9.026-14.443 \tC158.719,92.398,162.63,92.097,166.241,92.097 M166.241,132.117c9.629,0,18.655-0.602,27.081-1.504 \tc1.806,9.026,2.708,18.655,3.009,28.887h-59.88c0-10.231,1.204-19.86,3.01-28.887 \tC147.585,131.516,156.612,132.117,166.241,132.117 M201.146,159.5c0-10.532-1.203-20.462-3.009-29.488 c10.23-1.505,19.258-3.311,26.479-6.019c6.921,10.531,10.833,22.567,11.134,35.507H201.146z M131.336,159.5H96.432 c0.301-12.639,4.212-24.976,11.133-35.507c7.522,2.407,16.55,4.514,26.479,6.019C132.54,139.038,131.637,148.968,131.336,159.5 M131.336,164.314c0,10.531,1.204,20.461,3.01,29.488c-10.231,1.505-19.259,3.31-26.48,6.018 c-6.921-10.531-10.832-22.567-11.133-35.506H131.336z M201.146,164.314h34.905c-0.301,12.638-4.213,24.975-11.134,35.506 c-7.522-2.406-16.55-4.513-26.479-6.018C199.942,184.775,200.845,174.846,201.146,164.314 M221.908,119.78 c-0.301,0-0.602,0.301-0.903,0.301c-6.92,2.106-15.045,3.912-23.771,5.115c-2.708-12.337-6.921-22.868-12.036-30.391 c11.434,3.31,21.966,9.328,30.691,17.753C217.695,114.966,219.802,117.072,221.908,119.78 M147.585,94.806 c-5.115,7.522-9.328,18.054-12.036,30.391c-8.727-1.203-16.851-3.009-23.771-5.115c-0.301,0-0.602-0.301-0.902-0.301 c1.805-2.407,3.911-4.814,6.318-7.222C125.619,103.833,136.15,97.814,147.585,94.806 M110.574,204.033 c0.301,0,0.602-0.301,0.902-0.301c6.921-2.106,15.045-3.912,23.771-5.115c2.708,12.337,6.921,22.869,12.036,30.392 c-11.435-3.311-21.966-9.328-30.692-17.754C114.786,208.848,112.68,206.742,110.574,204.033 M184.896,229.009 c5.116-7.522,9.329-18.055,12.036-30.392c8.727,1.203,16.852,3.009,23.771,5.115c0.301,0,0.603,0.301,0.903,0.301 c-1.806,2.407-3.912,4.814-6.319,7.222C206.863,219.981,196.331,226,184.896,229.009"
        })
      );
    }
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "d", function() {
        return r;
      }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "a", function() {
        return f;
      });
    var l = n("q1tI");
    n("XaMz");
    function i(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var n = f.LocalizeString(e);
      return n
        ? (0 < r.length &&
            (n = n.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= r.length && 1 <= t) {
                var n = r[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function r(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = f.LocalizeString(e);
      if (!r) return e;
      for (var i, o = [], c = /(.*?)%(\d+)\$s/g, s = 0; (i = c.exec(r)); ) {
        (s += i[0].length), o.push(i[1]);
        var a = parseInt(i[2]);
        1 <= a && a <= t.length && o.push(t[a - 1]);
      }
      return (
        o.push(r.substr(s)),
        l.createElement.apply(l, [l.Fragment, null].concat(o))
      );
    }
    function o(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return i.apply(
        void 0,
        1 === t || "1" === t ? [e, t].concat(n) : [e + "_Plural", t].concat(n)
      );
    }
    function c(e, t) {
      return void 0 === t && (t = !1), d(e, !t);
    }
    var s = 31536e3,
      a = 2628e3,
      u = 604800,
      m = 86400,
      p = 3600,
      h = 60;
    function d(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !0);
      var r = t ? "#TimeSince_" : "#TimeInterval_";
      return 2 * s <= e
        ? i(r + "XYears", Math.floor(e / s))
        : s <= e
        ? 2 * a <= (e -= s)
          ? i(r + "1YearXMonths", Math.floor(e / a))
          : i(r + "1Year")
        : 2 * a <= e
        ? i(r + "XMonths", Math.floor(e / a))
        : 2 * u <= e
        ? i(r + "XWeeks", Math.floor(e / u))
        : 2 * m <= e
        ? i(r + "XDays", Math.floor(e / m))
        : m <= e
        ? 2 * p <= (e -= m)
          ? i(r + "1DayXHours", Math.floor(e / p))
          : i(r + "1Day")
        : 2 * p <= e
        ? i(r + "XHours", Math.floor(e / p))
        : p <= e
        ? 2 * h <= (e -= p) && n
          ? i(r + "1HourXMinutes", Math.floor(e / h))
          : i(r + "1Hour")
        : n
        ? 2 * h <= e
          ? i(r + "XMinutes", Math.floor(e / h))
          : i(h <= e ? r + "1Minute" : r + "LessThanAMinute")
        : i(r + "LessThanAnHour");
    }
    var f = new ((function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(n, r, i, o) {
          var c = this;
          this.m_mapTokens.clear(),
            Object.keys(i).forEach(function(e, t) {
              c.m_mapTokens.set(e, i[e]);
            }),
            Object.keys(n).forEach(function(e, t) {
              c.m_mapTokens.set(e, n[e]);
            }),
            r &&
              Object.keys(r).forEach(function(e, t) {
                c.m_mapTokens.has(e) || c.m_mapTokens.set(e, r[e]),
                  c.m_mapFallbackTokens.set(e, r[e]);
              }),
            o &&
              Object.keys(o).forEach(function(e, t) {
                c.m_mapTokens.has(e) || c.m_mapTokens.set(e, o[e]),
                  c.m_mapFallbackTokens.has(e) ||
                    c.m_mapFallbackTokens.set(e, o[e]);
              });
        }),
        (e.prototype.InitDirect = function(n) {
          var r = this;
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            Object.keys(n).forEach(function(e, t) {
              r.m_mapTokens.set(e, n[e]);
            });
        }),
        (e.prototype.GetPreferredLocales = function() {
          var e = ["en-US"];
          return (
            "undefined" != typeof navigator &&
              void 0 !== navigator.languages &&
              (e = navigator.languages),
            e
          );
        }),
        (e.prototype.LocalizeString = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        (e.prototype.LocalizeStringFromFallback = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        e
      );
    })())();
    window.LocalizationManager = f;
  },
  "s4p+": function(e, t) {},
  tkkQ: function(e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function() {
      return r.b;
    }),
      n.d(t, "d", function() {
        return r.e;
      }),
      n.d(t, "c", function() {
        return r.d;
      }),
      n.d(t, "b", function() {
        return r.c;
      });
  },
  twdX: function(e, t, n) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_9UFR8",
      noString: "throbber_noString_2uxjb",
      Throbber: "throbber_Throbber_1Y6Da",
      throbber_small: "throbber_throbber_small_21jHr",
      throbber_medium: "throbber_throbber_medium_1nACb",
      throbber_large: "throbber_throbber_large_3hJM_",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_1Dn-N",
      ThrobberText: "throbber_ThrobberText_3r290",
      blur: "throbber_blur_3cMTP",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3iwJU",
      roundOuterOutline: "throbber_roundOuterOutline_1yAiX",
      roundOuter: "throbber_roundOuter_3LNze",
      roundFill: "throbber_roundFill_3dnp9",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_1e442",
      topCircle: "throbber_topCircle_3Zy4H",
      circlePulse: "throbber_circlePulse_17mrs",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_RFW6m",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1AigW",
      bottomCircle: "throbber_bottomCircle_1XTvd",
      roundThrobber15: "throbber_roundThrobber15_Ty6Px",
      roundThrobber14: "throbber_roundThrobber14_T03GA",
      roundThrobber13: "throbber_roundThrobber13_2YjHq",
      roundThrobber12: "throbber_roundThrobber12_39ueX",
      roundThrobber11: "throbber_roundThrobber11_ze_zC",
      roundThrobber10: "throbber_roundThrobber10_jIdSr",
      roundThrobber09: "throbber_roundThrobber09_3R4dR",
      roundThrobber08: "throbber_roundThrobber08_2WJ-s",
      roundThrobber07: "throbber_roundThrobber07_2UhCH",
      roundThrobber06: "throbber_roundThrobber06_gkW0p",
      roundThrobber05: "throbber_roundThrobber05_20j9w",
      roundThrobber04: "throbber_roundThrobber04_3TMdv",
      roundThrobber03: "throbber_roundThrobber03_3aNO_",
      roundThrobber02: "throbber_roundThrobber02_1m8h_",
      roundThrobber01: "throbber_roundThrobber01_2h6Ph",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1YJDV",
      throbber_xlarge: "throbber_throbber_xlarge_iO6_X"
    };
  }
});
