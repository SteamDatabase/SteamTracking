/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [79],
  {
    82715: (t, e, n) => {
      n.d(e, { tH: () => Q });
      const s = "8.27.0",
        o = globalThis;
      function i(t, e, n) {
        const i = n || o,
          r = (i.__SENTRY__ = i.__SENTRY__ || {}),
          c = (r[s] = r[s] || {});
        return c[t] || (c[t] = e());
      }
      function r() {
        return c(o), o;
      }
      function c(t) {
        const e = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (e.version = e.version || s), (e[s] = e[s] || {});
      }
      const a = Object.prototype.toString;
      function u(t, e) {
        return a.call(t) === `[object ${e}]`;
      }
      function h(t) {
        return u(t, "Object");
      }
      function p(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function _() {
        const t = o,
          e = t.crypto || t.msCrypto;
        let n = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (n = () => {
              const t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
          (t ^ ((15 & n()) >> (t / 4))).toString(16),
        );
      }
      function l() {
        return { traceId: _(), spanId: _().substring(16) };
      }
      const d = 1e3;
      function f() {
        return Date.now() / d;
      }
      const g = (function () {
        const { performance: t } = o;
        if (!t || !t.now) return f;
        const e = Date.now() - t.now(),
          n = null == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / d;
      })();
      let m;
      (() => {
        const { performance: t } = o;
        if (!t || !t.now) return void (m = "none");
        const e = 36e5,
          n = t.now(),
          s = Date.now(),
          i = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e,
          r = i < e,
          c = t.timing && t.timing.navigationStart,
          a = "number" == typeof c ? Math.abs(c + n - s) : e;
        r || a < e
          ? i <= a
            ? ((m = "timeOrigin"), t.timeOrigin)
            : (m = "navigationStart")
          : (m = "dateNow");
      })();
      const S = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        v = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        y = {};
      function b(t) {
        if (!("console" in o)) return t();
        const e = o.console,
          n = {},
          s = Object.keys(y);
        s.forEach((t) => {
          const s = y[t];
          (n[t] = e[t]), (e[t] = s);
        });
        try {
          return t();
        } finally {
          s.forEach((t) => {
            e[t] = n[t];
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
            ? v.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    b(() => {
                      o.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : v.forEach((t) => {
                e[t] = () => {};
              }),
          e
        );
      })();
      function x(t, e = {}) {
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
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : _()),
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
      function w(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          S &&
            E.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
      }
      const I = "_sentrySpan";
      function k(t, e) {
        e ? w(t, I, e) : delete t[I];
      }
      function C(t) {
        return t[I];
      }
      class $ {
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
            (this._propagationContext = l());
        }
        clone() {
          const t = new $();
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
            k(t, C(this)),
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
            this._session && x(this._session, { user: t }),
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
            [n, s] =
              e instanceof D
                ? [e.getScopeData(), e.getRequestSession()]
                : h(e)
                  ? [t, t.requestSession]
                  : [],
            {
              tags: o,
              extra: i,
              user: r,
              contexts: c,
              level: a,
              fingerprint: u = [],
              propagationContext: p,
            } = n || {};
          return (
            (this._tags = { ...this._tags, ...o }),
            (this._extra = { ...this._extra, ...i }),
            (this._contexts = { ...this._contexts, ...c }),
            r && Object.keys(r).length && (this._user = r),
            a && (this._level = a),
            u.length && (this._fingerprint = u),
            p && (this._propagationContext = p),
            s && (this._requestSession = s),
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
            k(this, void 0),
            (this._attachments = []),
            (this._propagationContext = l()),
            this._notifyScopeListeners(),
            this
          );
        }
        addBreadcrumb(t, e) {
          const n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          const s = { timestamp: f(), ...t },
            o = this._breadcrumbs;
          return (
            o.push(s),
            (this._breadcrumbs = o.length > n ? o.slice(-n) : o),
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
          const n = e && e.event_id ? e.event_id : _();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture exception!",
              ),
              n
            );
          const s = new Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: s,
                ...e,
                event_id: n,
              },
              this,
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          const s = n && n.event_id ? n.event_id : _();
          if (!this._client)
            return (
              E.warn(
                "No client configured on scope - will not capture message!",
              ),
              s
            );
          const o = new Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: o,
                ...n,
                event_id: s,
              },
              this,
            ),
            s
          );
        }
        captureEvent(t, e) {
          const n = e && e.event_id ? e.event_id : _();
          return this._client
            ? (this._client.captureEvent(t, { ...e, event_id: n }, this), n)
            : (E.warn(
                "No client configured on scope - will not capture event!",
              ),
              n);
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
      const D = $;
      class L {
        constructor(t, e) {
          let n, s;
          (n = t || new D()),
            (s = e || new D()),
            (this._stack = [{ scope: n }]),
            (this._isolationScope = s);
        }
        withScope(t) {
          const e = this._pushScope();
          let n;
          try {
            n = t(e);
          } catch (t) {
            throw (this._popScope(), t);
          }
          return (
            (s = n),
            Boolean(s && s.then && "function" == typeof s.then)
              ? n.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                    throw (this._popScope(), t);
                  },
                )
              : (this._popScope(), n)
          );
          var s;
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
      function R() {
        const t = c(r());
        return (t.stack =
          t.stack ||
          new L(
            i("defaultCurrentScope", () => new D()),
            i("defaultIsolationScope", () => new D()),
          ));
      }
      function N(t) {
        return R().withScope(t);
      }
      function j(t, e) {
        const n = R();
        return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
      }
      function U(t) {
        return R().withScope(() => t(R().getIsolationScope()));
      }
      function T(t) {
        const e = c(t);
        return e.acs
          ? e.acs
          : {
              withIsolationScope: U,
              withScope: N,
              withSetScope: j,
              withSetIsolationScope: (t, e) => U(e),
              getCurrentScope: () => R().getScope(),
              getIsolationScope: () => R().getIsolationScope(),
            };
      }
      function M() {
        return T(r()).getCurrentScope();
      }
      new WeakMap();
      function P(t) {
        if (t)
          return (function (t) {
            return t instanceof D || "function" == typeof t;
          })(t) ||
            (function (t) {
              return Object.keys(t).some((t) => O.includes(t));
            })(t)
            ? { captureContext: t }
            : t;
      }
      const O = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function A() {
        return T(r()).getIsolationScope().lastEventId();
      }
      const B =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function q(t) {
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
      function Y(t) {
        const e =
          "string" == typeof t
            ? (function (t) {
                const e = B.exec(t);
                if (!e)
                  return void b(() => {
                    console.error(`Invalid Sentry Dsn: ${t}`);
                  });
                const [n, s, o = "", i = "", r = "", c = ""] = e.slice(1);
                let a = "",
                  u = c;
                const h = u.split("/");
                if (
                  (h.length > 1 &&
                    ((a = h.slice(0, -1).join("/")), (u = h.pop())),
                  u)
                ) {
                  const t = u.match(/^\d+/);
                  t && (u = t[0]);
                }
                return q({
                  host: i,
                  pass: o,
                  path: a,
                  projectId: u,
                  port: r,
                  protocol: n,
                  publicKey: s,
                });
              })(t)
            : q(t);
        if (
          e &&
          (function (t) {
            if (!S) return !0;
            const { port: e, projectId: n, protocol: s } = t;
            return !(
              ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (E.error(`Invalid Sentry Dsn: ${e} missing`), !0),
              ) ||
              (n.match(/^\d+$/)
                ? (function (t) {
                    return "http" === t || "https" === t;
                  })(s)
                  ? e &&
                    isNaN(parseInt(e, 10)) &&
                    (E.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1)
                  : (E.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1)
                : (E.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1))
            );
          })(e)
        )
          return e;
      }
      function G(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
          n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      const H = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        K = o;
      function F(t = {}) {
        if (!K.document)
          return void (
            H && E.error("Global document not defined in showReportDialog call")
          );
        const e = M(),
          n = e.getClient(),
          s = n && n.getDsn();
        if (!s)
          return void (
            H && E.error("DSN not configured for showReportDialog call")
          );
        if ((e && (t.user = { ...e.getUser(), ...t.user }), !t.eventId)) {
          const e = A();
          e && (t.eventId = e);
        }
        const o = K.document.createElement("script");
        (o.async = !0),
          (o.crossOrigin = "anonymous"),
          (o.src = (function (t, e) {
            const n = Y(t);
            if (!n) return "";
            const s = `${G(n)}embed/error-page/`;
            let o = `dsn=${(function (t, e = !1) {
              const {
                host: n,
                path: s,
                pass: o,
                port: i,
                projectId: r,
                protocol: c,
                publicKey: a,
              } = t;
              return `${c}://${a}${e && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${s ? `${s}/` : s}${r}`;
            })(n)}`;
            for (const t in e)
              if ("dsn" !== t && "onClose" !== t)
                if ("user" === t) {
                  const t = e.user;
                  if (!t) continue;
                  t.name && (o += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (o += `&email=${encodeURIComponent(t.email)}`);
                } else
                  o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
            return `${s}?${o}`;
          })(s, t)),
          t.onLoad && (o.onload = t.onLoad);
        const { onClose: i } = t;
        if (i) {
          const t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
              try {
                i();
              } finally {
                K.removeEventListener("message", t);
              }
          };
          K.addEventListener("message", t);
        }
        const r = K.document.head || K.document.body;
        r
          ? r.appendChild(o)
          : H &&
            E.error(
              "Not injecting report dialog. No injection point found in HTML",
            );
      }
      n(904);
      var V = n(90626);
      const W = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      function z(t, { componentStack: e }, n) {
        if (
          (function (t) {
            const e = t.match(/^([^.]+)/);
            return null !== e && parseInt(e[0]) >= 17;
          })(V.version) &&
          (function (t) {
            switch (a.call(t)) {
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
          const n = new Error(t.message);
          (n.name = `React ErrorBoundary ${t.name}`),
            (n.stack = e),
            (function (t, e) {
              const n = new WeakSet();
              !(function t(e, s) {
                if (!n.has(e))
                  return e.cause
                    ? (n.add(e), t(e.cause, s))
                    : void (e.cause = s);
              })(t, e);
            })(t, n);
        }
        return (function (t, e) {
          return M().captureException(t, P(e));
        })(t, {
          ...n,
          captureContext: { contexts: { react: { componentStack: e } } },
        });
      }
      const J = { componentStack: null, error: null, eventId: null };
      class Q extends V.Component {
        constructor(t) {
          super(t),
            Q.prototype.__init.call(this),
            (this.state = J),
            (this._openFallbackReportDialog = !0);
          const e = M().getClient();
          e &&
            t.showDialog &&
            ((this._openFallbackReportDialog = !1),
            (this._cleanupHook = e.on("afterSendEvent", (e) => {
              !e.type &&
                this._lastEventId &&
                e.event_id === this._lastEventId &&
                F({ ...t.dialogOptions, eventId: this._lastEventId });
            })));
        }
        componentDidCatch(t, e) {
          const { componentStack: n } = e,
            s = null == n ? void 0 : n,
            {
              beforeCapture: o,
              onError: i,
              showDialog: c,
              dialogOptions: a,
            } = this.props;
          !(function (...t) {
            const e = T(r());
            if (2 === t.length) {
              const [n, s] = t;
              return n ? e.withSetScope(n, s) : e.withScope(s);
            }
            e.withScope(t[0]);
          })((r) => {
            o && o(r, t, s);
            const u = z(t, e, {
              mechanism: { handled: !!this.props.fallback },
            });
            i && i(t, s, u),
              c &&
                ((this._lastEventId = u),
                this._openFallbackReportDialog && F({ ...a, eventId: u })),
              this.setState({ error: t, componentStack: n, eventId: u });
          });
        }
        componentDidMount() {
          const { onMount: t } = this.props;
          t && t();
        }
        componentWillUnmount() {
          const { error: t, componentStack: e, eventId: n } = this.state,
            { onUnmount: s } = this.props;
          s && s(t, e, n),
            this._cleanupHook &&
              (this._cleanupHook(), (this._cleanupHook = void 0));
        }
        __init() {
          this.resetErrorBoundary = () => {
            const { onReset: t } = this.props,
              { error: e, componentStack: n, eventId: s } = this.state;
            t && t(e, n, s), this.setState(J);
          };
        }
        render() {
          const { fallback: t, children: e } = this.props,
            n = this.state;
          if (n.error) {
            let e;
            return (
              (e =
                "function" == typeof t
                  ? V.createElement(t, {
                      error: n.error,
                      componentStack: n.componentStack,
                      resetError: this.resetErrorBoundary,
                      eventId: n.eventId,
                    })
                  : t),
              V.isValidElement(e)
                ? e
                : (t &&
                    W &&
                    E.warn("fallback did not produce a valid ReactElement"),
                  null)
            );
          }
          return "function" == typeof e ? e() : e;
        }
      }
    },
  },
]);
