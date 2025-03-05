/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2156],
  {
    82715: (t, e, s) => {
      s.d(e, { tH: () => J });
      const n = "8.27.0",
        i = globalThis;
      function r(t, e, s) {
        const r = s || i,
          o = (r.__SENTRY__ = r.__SENTRY__ || {}),
          a = (o[n] = o[n] || {});
        return a[t] || (a[t] = e());
      }
      function o() {
        return a(i), i;
      }
      function a(t) {
        const e = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (e.version = e.version || n), (e[n] = e[n] || {});
      }
      const c = Object.prototype.toString;
      function h(t, e) {
        return c.call(t) === `[object ${e}]`;
      }
      function u(t) {
        return h(t, "Object");
      }
      function p(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function l() {
        const t = i,
          e = t.crypto || t.msCrypto;
        let s = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (s = () => {
              const t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & s()) >> (t / 4))).toString(16),
        );
      }
      function d() {
        return { traceId: l(), spanId: l().substring(16) };
      }
      const _ = 1e3;
      function f() {
        return Date.now() / _;
      }
      const g = (function () {
        const { performance: t } = i;
        if (!t || !t.now) return f;
        const e = Date.now() - t.now(),
          s = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (s + t.now()) / _;
      })();
      let m;
      (() => {
        const { performance: t } = i;
        if (!t || !t.now) return void (m = "none");
        const e = 36e5,
          s = t.now(),
          n = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + s - n) : e,
          o = r < e,
          a = t.timing && t.timing.navigationStart,
          c = "number" == typeof a ? Math.abs(a + s - n) : e;
        o || c < e
          ? r <= c
            ? ((m = "timeOrigin"), t.timeOrigin)
            : (m = "navigationStart")
          : (m = "dateNow");
      })();
      const S = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        v = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        y = {};
      function b(t) {
        if (!("console" in i)) return t();
        const e = i.console,
          s = {},
          n = Object.keys(y);
        n.forEach((t) => {
          const n = y[t];
          (s[t] = e[t]), (e[t] = n);
        });
        try {
          return t();
        } finally {
          n.forEach((t) => {
            e[t] = s[t];
          });
        }
      }
      const E = (function () {
        let t = !1;
        const e = {
          enable: () => {
            t = !0;
          },
          disable: () => {
            t = !1;
          },
          isEnabled: () => t,
        };
        return (
          S
            ? v.forEach((s) => {
                e[s] = (...e) => {
                  t &&
                    b(() => {
                      i.console[s](`Sentry Logger [${s}]:`, ...e);
                    });
                };
              })
            : v.forEach((t) => {
                e[t] = () => {};
              }),
          e
        );
      })();
      function w(t, e = {}) {
        if (
          (e.user &&
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || g()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : l()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          const e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function k(t, e, s) {
        try {
          Object.defineProperty(t, e, {
            value: s,
            writable: !0,
            configurable: !0,
          });
        } catch (s) {
          S &&
            E.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
      }
      const x = "_sentrySpan";
      function I(t, e) {
        e ? k(t, x, e) : delete t[x];
      }
      function C(t) {
        return t[x];
      }
      class O {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = d());
        }
        clone() {
          const t = new O();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            I(t, C(this)),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        setLastEventId(t) {
          this._lastEventId = t;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              username: void 0,
            }),
            this._session && w(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          const e = "function" == typeof t ? t(this) : t,
            [s, n] =
              e instanceof $
                ? [e.getScopeData(), e.getRequestSession()]
                : u(e)
                  ? [t, t.requestSession]
                  : [],
            {
              tags: i,
              extra: r,
              user: o,
              contexts: a,
              level: c,
              fingerprint: h = [],
              propagationContext: p,
            } = s || {};
          return (
            (this._tags = { ...this._tags, ...i }),
            (this._extra = { ...this._extra, ...r }),
            (this._contexts = { ...this._contexts, ...a }),
            o && Object.keys(o).length && (this._user = o),
            c && (this._level = c),
            h.length && (this._fingerprint = h),
            p && (this._propagationContext = p),
            n && (this._requestSession = n),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._session = void 0),
            I(this, void 0),
            (this._attachments = []),
            (this._propagationContext = d()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(t, e) {
          const s = "number" == typeof e ? e : 100;
          if (s <= 0) return this;
          const n = { timestamp: f(), ...t },
            i = this._breadcrumbs;
          return (
            i.push(n),
            (this._breadcrumbs = i.length > s ? i.slice(-s) : i),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: C(this),
          };
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          const s = e && e.event_id ? e.event_id : l();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture exception!",
              ),
              s
            );
          const n = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: n,
                ...e,
                event_id: s,
              },
              this,
            ),
            s
          );
        }
        captureMessage(t, e, s) {
          const n = s && s.event_id ? s.event_id : l();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture message!",
              ),
              n
            );
          const i = new Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: i,
                ...s,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureEvent(t, e) {
          const s = e && e.event_id ? e.event_id : l();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: s }, this), s)
            : (E.warn(
                "No client configured on scope - will not capture event!",
              ),
              s);
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      const $ = O;
      class R {
        constructor(t, e) {
          let s, n;
          (s = t || new $()),
            (n = e || new $()),
            (this._stack = [{ scope: s }]),
            (this._isolationScope = n);
        }
        withScope(t) {
          const e = this._pushScope();
          let s;
          try {
            s = t(e);
          } catch (t) {
            throw (this._popScope(), t);
          }
          return (
            (n = s),
            Boolean(n && n.then && "function" == typeof n.then)
              ? s.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                    throw (this._popScope(), t);
                  },
                )
              : (this._popScope(), s)
          );
          var n;
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          const t = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: t }), t;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function j() {
        const t = a(o());
        return (t.stack =
          t.stack ||
          new R(
            r("defaultCurrentScope", () => new $()),
            r("defaultIsolationScope", () => new $()),
          ));
      }
      function L(t) {
        return j().withScope(t);
      }
      function D(t, e) {
        const s = j();
        return s.withScope(() => ((s.getStackTop().scope = t), e(t)));
      }
      function q(t) {
        return j().withScope(() => t(j().getIsolationScope()));
      }
      function M(t) {
        const e = a(t);
        return e.acs
          ? e.acs
          : {
              withIsolationScope: q,
              withScope: L,
              withSetScope: D,
              withSetIsolationScope: (t, e) => q(e),
              getCurrentScope: () => j().getScope(),
              getIsolationScope: () => j().getIsolationScope(),
            };
      }
      function V() {
        return M(o()).getCurrentScope();
      }
      new WeakMap();
      function N(t) {
        if (t)
          return (function (t) {
            return t instanceof $ || "function" == typeof t;
          })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => U.includes(t));
            })(t)
            ? { captureContext: t }
            : t;
      }
      const U = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function P() {
        return M(o()).getIsolationScope().lastEventId();
      }
      const K =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function T(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function H(t) {
        const e =
          "string" == typeof t
            ? (function (t) {
                const e = K.exec(t);
                if (!e)
                  return void b(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                const [s, n, i = "", r = "", o = "", a = ""] = e.slice(1);
                let c = "",
                  h = a;
                const u = h.split("/");
                if (
                  (u.length > 1 &&
                    ((c = u.slice(0, -1).join("/")), (h = u.pop())),
                  h)
                ) {
                  const t = h.match(/^\d+/);
                  t && (h = t[0]);
                }
                return T({
                  host: r,
                  pass: i,
                  path: c,
                  projectId: h,
                  port: o,
                  protocol: s,
                  publicKey: n,
                });
              })(t)
            : T(t);
        if (
          e &&
          (function (t) {
            if (!S) return !0;
            const { port: e, projectId: s, protocol: n } = t;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (E.error(`Invalid Sentry Dsn: ${e} missing`), !0),
              ) ||
              (s.match(/^\d+$/)
                ? (function (t) {
                    return "http" === t || "https" === t;
                  })(n)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (E.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (E.error(`Invalid Sentry Dsn: Invalid protocol ${n}`), 1)
                : (E.error(`Invalid Sentry Dsn: Invalid projectId ${s}`), 1))
            );
          })(e)
        )
          return e;
      }
      function Q(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
          s = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${s}${t.path ? `/${t.path}` : ""}/api/`;
      }
      const W = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        B = i;
      function A(t = {}) {
        if (!B.document)
          return void (
            W && E.error("Global document not defined in showReportDialog call")
          );
        const e = V(),
          s = e.getClient(),
          n = s && s.getDsn();
        if (!n)
          return void (
            W && E.error("DSN not configured for showReportDialog call")
          );
        if ((e && (t.user = { ...e.getUser(), ...t.user }), !t.eventId)) {
          const e = P();
          e && (t.eventId = e);
        }
        const i = B.document.createElement("script");
        (i.async = !0),
          (i.crossOrigin = "anonymous"),
          (i.src = (function (t, e) {
            const s = H(t);
            if (!s) return "";
            const n = `${Q(s)}embed/error-page/`;
            let i = `dsn=${(function (t, e = !1) {
              const {
                host: s,
                path: n,
                pass: i,
                port: r,
                projectId: o,
                protocol: a,
                publicKey: c,
              } = t;
              return `${a}://${c}${e && i ? `:${i}` : ""}@${s}${r ? `:${r}` : ""}/${n ? `${n}/` : n}${o}`;
            })(s)}`;
            for (const t in e)
              if ("dsn" !== t && "onClose" !== t)
                if ("user" === t) {
                  const t = e.user;
                  if (!t) continue;
                  t.name && (i += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (i += `&email=${encodeURIComponent(t.email)}`);
                } else
                  i += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
            return `${n}?${i}`;
          })(n, t)),
          t.onLoad && (i.onload = t.onLoad);
        const { onClose: r } = t;
        if (r) {
          const t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
              try {
                r();
              } finally {
                B.removeEventListener("message", t);
              }
          };
          B.addEventListener("message", t);
        }
        const o = B.document.head || B.document.body;
        o
          ? o.appendChild(i)
          : W &&
            E.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      s(904);
      var Y = s(90626);
      const G = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function F(t, { componentStack: e }, s) {
        if (
          (function (t) {
            const e = t.match(/^([^.]+)/);
            return null !== e && parseInt(e[0]) >= 17;
          })(Y.version) &&
          (function (t) {
            switch (c.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return p(t, Error);
            }
          })(t) &&
          e
        ) {
          const s = new Error(t.message);
          (s.name = `React ErrorBoundary ${t.name}`),
            (s.stack = e),
            (function (t, e) {
              const s = new WeakSet();
              !(function t(e, n) {
                if (!s.has(e))
                  return e.cause
                    ? (s.add(e), t(e.cause, n))
                    : void (e.cause = n);
              })(t, e);
            })(t, s);
        }
        return (function (t, e) {
          return V().captureException(t, N(e));
        })(t, {
          ...s,
          captureContext: { contexts: { react: { componentStack: e } } },
        });
      }
      const z = { componentStack: null, error: null, eventId: null };
      class J extends Y.Component {
        constructor(t) {
          super(t),
            J.prototype.__init.call(this),
            (this.state = z),
            (this._openFallbackReportDialog = !0);
          const e = V().getClient();
          e &&
            t.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = e.on("afterSendEvent", (e) => {
              !e.type &&
                this._lastEventId &&
                e.event_id === this._lastEventId &&
                A({ ...t.dialogOptions, eventId: this._lastEventId });
            })));
        }
        componentDidCatch(t, e) {
          const { componentStack: s } = e,
            n = null == s ? void 0 : s,
            {
              beforeCapture: i,
              onError: r,
              showDialog: a,
              dialogOptions: c,
            } = this.props;
          !(function (...t) {
            const e = M(o());
            if (2 === t.length) {
              const [s, n] = t;
              return s ? e.withSetScope(s, n) : e.withScope(n);
            }
            e.withScope(t[0]);
          })((o) => {
            i && i(o, t, n);
            const h = F(t, e, {
              mechanism: { handled: !!this.props.fallback },
            });
            r && r(t, n, h),
              a &&
                ((this._lastEventId = h),
                this._openFallbackReportDialog && A({ ...c, eventId: h })),
              this.setState({ error: t, componentStack: s, eventId: h });
          });
        }
        componentDidMount() {
          const { onMount: t } = this.props;
          t && t();
        }
        componentWillUnmount() {
          const { error: t, componentStack: e, eventId: s } = this.state,
            { onUnmount: n } = this.props;
          n && n(t, e, s),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: t } = this.props,
              { error: e, componentStack: s, eventId: n } = this.state;
            t && t(e, s, n), this.setState(z);
          };
        }
        render() {
          const { fallback: t, children: e } = this.props,
            s = this.state;
          if (s.error) {
            let e;
            return (
              (e =
                "function" == typeof t
                  ? Y.createElement(t, {
                      error: s.error,
                      componentStack: s.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: s.eventId,
                    })
                  : t),
              Y.isValidElement(e)
                ? e
                : (t &&
                    G &&
                    E.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof e ? e() : e;
        }
      }
    },
    33861: (t, e, s) => {
      s.d(e, { E: () => M });
      var n,
        i,
        r,
        o,
        a,
        c,
        h,
        u,
        p,
        l,
        d,
        _,
        f,
        g,
        m,
        S,
        v,
        y,
        b = s(90626),
        E = s(86843),
        w = s(6561),
        k = s(48767),
        x = s(57152),
        I = s(57956);
      function C(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var O = class extends x.Q {
        constructor(t, e, s) {
          super(),
            (0, E.VK)(this, p),
            (0, E.VK)(this, d),
            (0, E.VK)(this, f),
            (0, E.VK)(this, m),
            (0, E.VK)(this, v),
            (0, E.VK)(this, n, void 0),
            (0, E.VK)(this, i, void 0),
            (0, E.VK)(this, r, void 0),
            (0, E.VK)(this, o, void 0),
            (0, E.VK)(this, a, void 0),
            (0, E.VK)(this, c, void 0),
            (0, E.VK)(this, h, void 0),
            (0, E.VK)(this, u, void 0),
            (0, E.OV)(this, n, t),
            (0, E.OV)(this, o, s),
            (0, E.OV)(this, r, []),
            (0, E.OV)(this, a, []),
            (0, E.OV)(this, i, []),
            this.setQueries(e);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, E.S7)(this, a).forEach((t) => {
              t.subscribe((e) => {
                (0, E.jq)(this, m, S).call(this, t, e);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, E.S7)(this, a).forEach((t) => {
              t.destroy();
            });
        }
        setQueries(t, e, s) {
          (0, E.OV)(this, r, t),
            (0, E.OV)(this, o, e),
            w.j.batch(() => {
              const t = (0, E.S7)(this, a),
                e = (0, E.jq)(this, f, g).call(this, (0, E.S7)(this, r));
              e.forEach((t) =>
                t.observer.setOptions(t.defaultedQueryOptions, s),
              );
              const n = e.map((t) => t.observer),
                o = n.map((t) => t.getCurrentResult()),
                c = n.some((e, s) => e !== t[s]);
              (t.length !== n.length || c) &&
                ((0, E.OV)(this, a, n),
                (0, E.OV)(this, i, o),
                this.hasListeners() &&
                  (C(t, n).forEach((t) => {
                    t.destroy();
                  }),
                  C(n, t).forEach((t) => {
                    t.subscribe((e) => {
                      (0, E.jq)(this, m, S).call(this, t, e);
                    });
                  }),
                  (0, E.jq)(this, v, y).call(this)));
            });
        }
        getCurrentResult() {
          return (0, E.S7)(this, i);
        }
        getQueries() {
          return (0, E.S7)(this, a).map((t) => t.getCurrentQuery());
        }
        getObservers() {
          return (0, E.S7)(this, a);
        }
        getOptimisticResult(t, e) {
          const s = (0, E.jq)(this, f, g)
            .call(this, t)
            .map((t) =>
              t.observer.getOptimisticResult(t.defaultedQueryOptions),
            );
          return [
            s,
            (t) => (0, E.jq)(this, d, _).call(this, t ?? s, e),
            () => (0, E.jq)(this, p, l).call(this, s, t),
          ];
        }
      };
      (n = new WeakMap()),
        (i = new WeakMap()),
        (r = new WeakMap()),
        (o = new WeakMap()),
        (a = new WeakMap()),
        (c = new WeakMap()),
        (h = new WeakMap()),
        (u = new WeakMap()),
        (p = new WeakSet()),
        (l = function (t, e) {
          const s = (0, E.jq)(this, f, g).call(this, e);
          return s.map((e, n) => {
            const i = t[n];
            return e.defaultedQueryOptions.notifyOnChangeProps
              ? i
              : e.observer.trackResult(i, (t) => {
                  s.forEach((e) => {
                    e.observer.trackProp(t);
                  });
                });
          });
        }),
        (d = new WeakSet()),
        (_ = function (t, e) {
          return e
            ? (((0, E.S7)(this, c) &&
                (0, E.S7)(this, i) === (0, E.S7)(this, u) &&
                e === (0, E.S7)(this, h)) ||
                ((0, E.OV)(this, h, e),
                (0, E.OV)(this, u, (0, E.S7)(this, i)),
                (0, E.OV)(this, c, (0, I.BH)((0, E.S7)(this, c), e(t)))),
              (0, E.S7)(this, c))
            : t;
        }),
        (f = new WeakSet()),
        (g = function (t) {
          const e = new Map(
              (0, E.S7)(this, a).map((t) => [t.options.queryHash, t]),
            ),
            s = [];
          return (
            t.forEach((t) => {
              const i = (0, E.S7)(this, n).defaultQueryOptions(t),
                r = e.get(i.queryHash);
              if (r) s.push({ defaultedQueryOptions: i, observer: r });
              else {
                const t = (0, E.S7)(this, a).find(
                  (t) => t.options.queryHash === i.queryHash,
                );
                s.push({
                  defaultedQueryOptions: i,
                  observer: t ?? new k.$((0, E.S7)(this, n), i),
                });
              }
            }),
            s.sort(
              (e, s) =>
                t.findIndex(
                  (t) => t.queryHash === e.defaultedQueryOptions.queryHash,
                ) -
                t.findIndex(
                  (t) => t.queryHash === s.defaultedQueryOptions.queryHash,
                ),
            )
          );
        }),
        (m = new WeakSet()),
        (S = function (t, e) {
          const s = (0, E.S7)(this, a).indexOf(t);
          -1 !== s &&
            ((0, E.OV)(
              this,
              i,
              (function (t, e, s) {
                const n = t.slice(0);
                return (n[e] = s), n;
              })((0, E.S7)(this, i), s, e),
            ),
            (0, E.jq)(this, v, y).call(this));
        }),
        (v = new WeakSet()),
        (y = function () {
          var t;
          if (this.hasListeners()) {
            (0, E.S7)(this, c) !==
              (0, E.jq)(this, d, _).call(
                this,
                (0, E.jq)(this, p, l).call(
                  this,
                  (0, E.S7)(this, i),
                  (0, E.S7)(this, r),
                ),
                null == (t = (0, E.S7)(this, o)) ? void 0 : t.combine,
              ) &&
              w.j.batch(() => {
                this.listeners.forEach((t) => {
                  t((0, E.S7)(this, i));
                });
              });
          }
        });
      var $ = s(29385),
        R = s(85010),
        j = s(8184),
        L = s(33478),
        D = s(99583),
        q = s(61314);
      function M({ queries: t, ...e }, s) {
        const n = (0, $.jE)(s),
          i = (0, R.w)(),
          r = (0, j.h)(),
          o = b.useMemo(
            () =>
              t.map((t) => {
                const e = n.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = i ? "isRestoring" : "optimistic"), e
                );
              }),
            [t, n, i],
          );
        o.forEach((t) => {
          (0, D.jv)(t), (0, L.LJ)(t, r);
        }),
          (0, L.wZ)(r);
        const [a] = b.useState(() => new O(n, o, e)),
          [c, h, u] = a.getOptimisticResult(o, e.combine);
        b.useSyncExternalStore(
          b.useCallback(
            (t) => (i ? q.l : a.subscribe(w.j.batchCalls(t))),
            [a, i],
          ),
          () => a.getCurrentResult(),
          () => a.getCurrentResult(),
        ),
          b.useEffect(() => {
            a.setQueries(o, e, { listeners: !1 });
          }, [o, e, a]);
        const p = c.some((t, e) => (0, D.EU)(o[e], t))
          ? c.flatMap((t, e) => {
              const s = o[e];
              if (s) {
                const e = new k.$(n, s);
                if ((0, D.EU)(s, t)) return (0, D.iL)(s, e, r);
                (0, D.nE)(t, i) && (0, D.iL)(s, e, r);
              }
              return [];
            })
          : [];
        if (p.length > 0) throw Promise.all(p);
        const l = c.find((t, e) => {
          const s = o[e];
          return (
            s &&
            (0, L.$1)({
              result: t,
              errorResetBoundary: r,
              throwOnError: s.throwOnError,
              query: n.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (null == l ? void 0 : l.error) throw l.error;
        return h(u());
      }
    },
  },
]);
