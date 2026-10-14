/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6295],
    {
      16295: (Ut, q, N) => {
        N.r(q),
          N.d(q, {
            CompletionAdapter: () => Ze,
            DefinitionAdapter: () => tt,
            DiagnosticsAdapter: () => Ye,
            DocumentColorAdapter: () => lt,
            DocumentFormattingEditProvider: () => ut,
            DocumentHighlightAdapter: () => et,
            DocumentLinkAdapter: () => jt,
            DocumentRangeFormattingEditProvider: () => ct,
            DocumentSymbolAdapter: () => ot,
            FoldingRangeAdapter: () => ft,
            HoverAdapter: () => qe,
            ReferenceAdapter: () => nt,
            RenameAdapter: () => it,
            SelectionRangeAdapter: () => gt,
            WorkerManager: () => ee,
            fromPosition: () => k,
            fromRange: () => Y,
            setupMode: () => Ot,
            toRange: () => m,
            toTextEdit: () => L,
          });
        var pt =
          N(
            26385,
          ); /*!-----------------------------------------------------------------------------
         * Copyright (c) Microsoft Corporation. All rights reserved.
         * Version: 0.52.2(404545bded1df6ffa41ea0af4e8ddb219018c6c1)
         * Released under the MIT license
         * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
         *-----------------------------------------------------------------------------*/
        var mt = Object.defineProperty,
          _t = Object.getOwnPropertyDescriptor,
          bt = Object.getOwnPropertyNames,
          wt = Object.prototype.hasOwnProperty,
          K = (e, n, i, r) => {
            if ((n && typeof n == "object") || typeof n == "function")
              for (let t of bt(n))
                !wt.call(e, t) &&
                  t !== i &&
                  mt(e, t, {
                    get: () => n[t],
                    enumerable: !(r = _t(n, t)) || r.enumerable,
                  });
            return e;
          },
          kt = (e, n, i) => (K(e, n, "default"), i && K(i, n, "default")),
          d = {};
        kt(d, pt);
        var xt = 120 * 1e3,
          ee = class {
            constructor(e) {
              (this._defaults = e),
                (this._worker = null),
                (this._client = null),
                (this._idleCheckInterval = window.setInterval(
                  () => this._checkIfIdle(),
                  30 * 1e3,
                )),
                (this._lastUsedTime = 0),
                (this._configChangeListener = this._defaults.onDidChange(() =>
                  this._stopWorker(),
                ));
            }
            _stopWorker() {
              this._worker && (this._worker.dispose(), (this._worker = null)),
                (this._client = null);
            }
            dispose() {
              clearInterval(this._idleCheckInterval),
                this._configChangeListener.dispose(),
                this._stopWorker();
            }
            _checkIfIdle() {
              if (!this._worker) return;
              Date.now() - this._lastUsedTime > xt && this._stopWorker();
            }
            _getClient() {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = d.editor.createWebWorker({
                    moduleId: "vs/language/css/cssWorker",
                    label: this._defaults.languageId,
                    createData: {
                      options: this._defaults.options,
                      languageId: this._defaults.languageId,
                    },
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              );
            }
            getLanguageServiceWorker(...e) {
              let n;
              return this._getClient()
                .then((i) => {
                  n = i;
                })
                .then((i) => {
                  if (this._worker) return this._worker.withSyncedResources(e);
                })
                .then((i) => n);
            }
          },
          te;
        (function (e) {
          function n(i) {
            return typeof i == "string";
          }
          e.is = n;
        })(te || (te = {}));
        var O;
        (function (e) {
          function n(i) {
            return typeof i == "string";
          }
          e.is = n;
        })(O || (O = {}));
        var re;
        (function (e) {
          (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
          function n(i) {
            return typeof i == "number" && e.MIN_VALUE <= i && i <= e.MAX_VALUE;
          }
          e.is = n;
        })(re || (re = {}));
        var M;
        (function (e) {
          (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
          function n(i) {
            return typeof i == "number" && e.MIN_VALUE <= i && i <= e.MAX_VALUE;
          }
          e.is = n;
        })(M || (M = {}));
        var w;
        (function (e) {
          function n(r, t) {
            return (
              r === Number.MAX_VALUE && (r = M.MAX_VALUE),
              t === Number.MAX_VALUE && (t = M.MAX_VALUE),
              { line: r, character: t }
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.objectLiteral(t) &&
              a.uinteger(t.line) &&
              a.uinteger(t.character)
            );
          }
          e.is = i;
        })(w || (w = {}));
        var g;
        (function (e) {
          function n(r, t, o, s) {
            if (
              a.uinteger(r) &&
              a.uinteger(t) &&
              a.uinteger(o) &&
              a.uinteger(s)
            )
              return { start: w.create(r, t), end: w.create(o, s) };
            if (w.is(r) && w.is(t)) return { start: r, end: t };
            throw new Error(
              `Range#create called with invalid arguments[${r}, ${t}, ${o}, ${s}]`,
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return a.objectLiteral(t) && w.is(t.start) && w.is(t.end);
          }
          e.is = i;
        })(g || (g = {}));
        var C;
        (function (e) {
          function n(r, t) {
            return { uri: r, range: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.objectLiteral(t) &&
              g.is(t.range) &&
              (a.string(t.uri) || a.undefined(t.uri))
            );
          }
          e.is = i;
        })(C || (C = {}));
        var ne;
        (function (e) {
          function n(r, t, o, s) {
            return {
              targetUri: r,
              targetRange: t,
              targetSelectionRange: o,
              originSelectionRange: s,
            };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.objectLiteral(t) &&
              g.is(t.targetRange) &&
              a.string(t.targetUri) &&
              g.is(t.targetSelectionRange) &&
              (g.is(t.originSelectionRange) ||
                a.undefined(t.originSelectionRange))
            );
          }
          e.is = i;
        })(ne || (ne = {}));
        var S;
        (function (e) {
          function n(r, t, o, s) {
            return { red: r, green: t, blue: o, alpha: s };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              a.objectLiteral(t) &&
              a.numberRange(t.red, 0, 1) &&
              a.numberRange(t.green, 0, 1) &&
              a.numberRange(t.blue, 0, 1) &&
              a.numberRange(t.alpha, 0, 1)
            );
          }
          e.is = i;
        })(S || (S = {}));
        var ie;
        (function (e) {
          function n(r, t) {
            return { range: r, color: t };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return a.objectLiteral(t) && g.is(t.range) && S.is(t.color);
          }
          e.is = i;
        })(ie || (ie = {}));
        var oe;
        (function (e) {
          function n(r, t, o) {
            return { label: r, textEdit: t, additionalTextEdits: o };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              a.objectLiteral(t) &&
              a.string(t.label) &&
              (a.undefined(t.textEdit) || E.is(t)) &&
              (a.undefined(t.additionalTextEdits) ||
                a.typedArray(t.additionalTextEdits, E.is))
            );
          }
          e.is = i;
        })(oe || (oe = {}));
        var R;
        (function (e) {
          (e.Comment = "comment"),
            (e.Imports = "imports"),
            (e.Region = "region");
        })(R || (R = {}));
        var ae;
        (function (e) {
          function n(r, t, o, s, u, f) {
            const c = { startLine: r, endLine: t };
            return (
              a.defined(o) && (c.startCharacter = o),
              a.defined(s) && (c.endCharacter = s),
              a.defined(u) && (c.kind = u),
              a.defined(f) && (c.collapsedText = f),
              c
            );
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              a.objectLiteral(t) &&
              a.uinteger(t.startLine) &&
              a.uinteger(t.startLine) &&
              (a.undefined(t.startCharacter) || a.uinteger(t.startCharacter)) &&
              (a.undefined(t.endCharacter) || a.uinteger(t.endCharacter)) &&
              (a.undefined(t.kind) || a.string(t.kind))
            );
          }
          e.is = i;
        })(ae || (ae = {}));
        var U;
        (function (e) {
          function n(r, t) {
            return { location: r, message: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return a.defined(t) && C.is(t.location) && a.string(t.message);
          }
          e.is = i;
        })(U || (U = {}));
        var x;
        (function (e) {
          (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
        })(x || (x = {}));
        var se;
        (function (e) {
          (e.Unnecessary = 1), (e.Deprecated = 2);
        })(se || (se = {}));
        var ue;
        (function (e) {
          function n(i) {
            const r = i;
            return a.objectLiteral(r) && a.string(r.href);
          }
          e.is = n;
        })(ue || (ue = {}));
        var y;
        (function (e) {
          function n(r, t, o, s, u, f) {
            let c = { range: r, message: t };
            return (
              a.defined(o) && (c.severity = o),
              a.defined(s) && (c.code = s),
              a.defined(u) && (c.source = u),
              a.defined(f) && (c.relatedInformation = f),
              c
            );
          }
          e.create = n;
          function i(r) {
            var t;
            let o = r;
            return (
              a.defined(o) &&
              g.is(o.range) &&
              a.string(o.message) &&
              (a.number(o.severity) || a.undefined(o.severity)) &&
              (a.integer(o.code) || a.string(o.code) || a.undefined(o.code)) &&
              (a.undefined(o.codeDescription) ||
                a.string(
                  (t = o.codeDescription) === null || t === void 0
                    ? void 0
                    : t.href,
                )) &&
              (a.string(o.source) || a.undefined(o.source)) &&
              (a.undefined(o.relatedInformation) ||
                a.typedArray(o.relatedInformation, U.is))
            );
          }
          e.is = i;
        })(y || (y = {}));
        var A;
        (function (e) {
          function n(r, t, ...o) {
            let s = { title: r, command: t };
            return a.defined(o) && o.length > 0 && (s.arguments = o), s;
          }
          e.create = n;
          function i(r) {
            let t = r;
            return a.defined(t) && a.string(t.title) && a.string(t.command);
          }
          e.is = i;
        })(A || (A = {}));
        var E;
        (function (e) {
          function n(o, s) {
            return { range: o, newText: s };
          }
          e.replace = n;
          function i(o, s) {
            return { range: { start: o, end: o }, newText: s };
          }
          e.insert = i;
          function r(o) {
            return { range: o, newText: "" };
          }
          e.del = r;
          function t(o) {
            const s = o;
            return a.objectLiteral(s) && a.string(s.newText) && g.is(s.range);
          }
          e.is = t;
        })(E || (E = {}));
        var V;
        (function (e) {
          function n(r, t, o) {
            const s = { label: r };
            return (
              t !== void 0 && (s.needsConfirmation = t),
              o !== void 0 && (s.description = o),
              s
            );
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              a.objectLiteral(t) &&
              a.string(t.label) &&
              (a.boolean(t.needsConfirmation) ||
                t.needsConfirmation === void 0) &&
              (a.string(t.description) || t.description === void 0)
            );
          }
          e.is = i;
        })(V || (V = {}));
        var I;
        (function (e) {
          function n(i) {
            const r = i;
            return a.string(r);
          }
          e.is = n;
        })(I || (I = {}));
        var ce;
        (function (e) {
          function n(o, s, u) {
            return { range: o, newText: s, annotationId: u };
          }
          e.replace = n;
          function i(o, s, u) {
            return { range: { start: o, end: o }, newText: s, annotationId: u };
          }
          e.insert = i;
          function r(o, s) {
            return { range: o, newText: "", annotationId: s };
          }
          e.del = r;
          function t(o) {
            const s = o;
            return E.is(s) && (V.is(s.annotationId) || I.is(s.annotationId));
          }
          e.is = t;
        })(ce || (ce = {}));
        var W;
        (function (e) {
          function n(r, t) {
            return { textDocument: r, edits: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) && B.is(t.textDocument) && Array.isArray(t.edits)
            );
          }
          e.is = i;
        })(W || (W = {}));
        var H;
        (function (e) {
          function n(r, t, o) {
            let s = { kind: "create", uri: r };
            return (
              t !== void 0 &&
                (t.overwrite !== void 0 || t.ignoreIfExists !== void 0) &&
                (s.options = t),
              o !== void 0 && (s.annotationId = o),
              s
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              t &&
              t.kind === "create" &&
              a.string(t.uri) &&
              (t.options === void 0 ||
                ((t.options.overwrite === void 0 ||
                  a.boolean(t.options.overwrite)) &&
                  (t.options.ignoreIfExists === void 0 ||
                    a.boolean(t.options.ignoreIfExists)))) &&
              (t.annotationId === void 0 || I.is(t.annotationId))
            );
          }
          e.is = i;
        })(H || (H = {}));
        var X;
        (function (e) {
          function n(r, t, o, s) {
            let u = { kind: "rename", oldUri: r, newUri: t };
            return (
              o !== void 0 &&
                (o.overwrite !== void 0 || o.ignoreIfExists !== void 0) &&
                (u.options = o),
              s !== void 0 && (u.annotationId = s),
              u
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              t &&
              t.kind === "rename" &&
              a.string(t.oldUri) &&
              a.string(t.newUri) &&
              (t.options === void 0 ||
                ((t.options.overwrite === void 0 ||
                  a.boolean(t.options.overwrite)) &&
                  (t.options.ignoreIfExists === void 0 ||
                    a.boolean(t.options.ignoreIfExists)))) &&
              (t.annotationId === void 0 || I.is(t.annotationId))
            );
          }
          e.is = i;
        })(X || (X = {}));
        var $;
        (function (e) {
          function n(r, t, o) {
            let s = { kind: "delete", uri: r };
            return (
              t !== void 0 &&
                (t.recursive !== void 0 || t.ignoreIfNotExists !== void 0) &&
                (s.options = t),
              o !== void 0 && (s.annotationId = o),
              s
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              t &&
              t.kind === "delete" &&
              a.string(t.uri) &&
              (t.options === void 0 ||
                ((t.options.recursive === void 0 ||
                  a.boolean(t.options.recursive)) &&
                  (t.options.ignoreIfNotExists === void 0 ||
                    a.boolean(t.options.ignoreIfNotExists)))) &&
              (t.annotationId === void 0 || I.is(t.annotationId))
            );
          }
          e.is = i;
        })($ || ($ = {}));
        var z;
        (function (e) {
          function n(i) {
            let r = i;
            return (
              r &&
              (r.changes !== void 0 || r.documentChanges !== void 0) &&
              (r.documentChanges === void 0 ||
                r.documentChanges.every((t) =>
                  a.string(t.kind) ? H.is(t) || X.is(t) || $.is(t) : W.is(t),
                ))
            );
          }
          e.is = n;
        })(z || (z = {}));
        var de;
        (function (e) {
          function n(r) {
            return { uri: r };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return a.defined(t) && a.string(t.uri);
          }
          e.is = i;
        })(de || (de = {}));
        var le;
        (function (e) {
          function n(r, t) {
            return { uri: r, version: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return a.defined(t) && a.string(t.uri) && a.integer(t.version);
          }
          e.is = i;
        })(le || (le = {}));
        var B;
        (function (e) {
          function n(r, t) {
            return { uri: r, version: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) &&
              a.string(t.uri) &&
              (t.version === null || a.integer(t.version))
            );
          }
          e.is = i;
        })(B || (B = {}));
        var fe;
        (function (e) {
          function n(r, t, o, s) {
            return { uri: r, languageId: t, version: o, text: s };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) &&
              a.string(t.uri) &&
              a.string(t.languageId) &&
              a.integer(t.version) &&
              a.string(t.text)
            );
          }
          e.is = i;
        })(fe || (fe = {}));
        var Q;
        (function (e) {
          (e.PlainText = "plaintext"), (e.Markdown = "markdown");
          function n(i) {
            const r = i;
            return r === e.PlainText || r === e.Markdown;
          }
          e.is = n;
        })(Q || (Q = {}));
        var D;
        (function (e) {
          function n(i) {
            const r = i;
            return a.objectLiteral(i) && Q.is(r.kind) && a.string(r.value);
          }
          e.is = n;
        })(D || (D = {}));
        var v;
        (function (e) {
          (e.Text = 1),
            (e.Method = 2),
            (e.Function = 3),
            (e.Constructor = 4),
            (e.Field = 5),
            (e.Variable = 6),
            (e.Class = 7),
            (e.Interface = 8),
            (e.Module = 9),
            (e.Property = 10),
            (e.Unit = 11),
            (e.Value = 12),
            (e.Enum = 13),
            (e.Keyword = 14),
            (e.Snippet = 15),
            (e.Color = 16),
            (e.File = 17),
            (e.Reference = 18),
            (e.Folder = 19),
            (e.EnumMember = 20),
            (e.Constant = 21),
            (e.Struct = 22),
            (e.Event = 23),
            (e.Operator = 24),
            (e.TypeParameter = 25);
        })(v || (v = {}));
        var T;
        (function (e) {
          (e.PlainText = 1), (e.Snippet = 2);
        })(T || (T = {}));
        var ge;
        (function (e) {
          e.Deprecated = 1;
        })(ge || (ge = {}));
        var he;
        (function (e) {
          function n(r, t, o) {
            return { newText: r, insert: t, replace: o };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              t && a.string(t.newText) && g.is(t.insert) && g.is(t.replace)
            );
          }
          e.is = i;
        })(he || (he = {}));
        var ve;
        (function (e) {
          (e.asIs = 1), (e.adjustIndentation = 2);
        })(ve || (ve = {}));
        var pe;
        (function (e) {
          function n(i) {
            const r = i;
            return (
              r &&
              (a.string(r.detail) || r.detail === void 0) &&
              (a.string(r.description) || r.description === void 0)
            );
          }
          e.is = n;
        })(pe || (pe = {}));
        var me;
        (function (e) {
          function n(i) {
            return { label: i };
          }
          e.create = n;
        })(me || (me = {}));
        var _e;
        (function (e) {
          function n(i, r) {
            return { items: i || [], isIncomplete: !!r };
          }
          e.create = n;
        })(_e || (_e = {}));
        var F;
        (function (e) {
          function n(r) {
            return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
          }
          e.fromPlainText = n;
          function i(r) {
            const t = r;
            return (
              a.string(t) ||
              (a.objectLiteral(t) && a.string(t.language) && a.string(t.value))
            );
          }
          e.is = i;
        })(F || (F = {}));
        var be;
        (function (e) {
          function n(i) {
            let r = i;
            return (
              !!r &&
              a.objectLiteral(r) &&
              (D.is(r.contents) ||
                F.is(r.contents) ||
                a.typedArray(r.contents, F.is)) &&
              (i.range === void 0 || g.is(i.range))
            );
          }
          e.is = n;
        })(be || (be = {}));
        var we;
        (function (e) {
          function n(i, r) {
            return r ? { label: i, documentation: r } : { label: i };
          }
          e.create = n;
        })(we || (we = {}));
        var ke;
        (function (e) {
          function n(i, r, ...t) {
            let o = { label: i };
            return (
              a.defined(r) && (o.documentation = r),
              a.defined(t) ? (o.parameters = t) : (o.parameters = []),
              o
            );
          }
          e.create = n;
        })(ke || (ke = {}));
        var P;
        (function (e) {
          (e.Text = 1), (e.Read = 2), (e.Write = 3);
        })(P || (P = {}));
        var xe;
        (function (e) {
          function n(i, r) {
            let t = { range: i };
            return a.number(r) && (t.kind = r), t;
          }
          e.create = n;
        })(xe || (xe = {}));
        var p;
        (function (e) {
          (e.File = 1),
            (e.Module = 2),
            (e.Namespace = 3),
            (e.Package = 4),
            (e.Class = 5),
            (e.Method = 6),
            (e.Property = 7),
            (e.Field = 8),
            (e.Constructor = 9),
            (e.Enum = 10),
            (e.Interface = 11),
            (e.Function = 12),
            (e.Variable = 13),
            (e.Constant = 14),
            (e.String = 15),
            (e.Number = 16),
            (e.Boolean = 17),
            (e.Array = 18),
            (e.Object = 19),
            (e.Key = 20),
            (e.Null = 21),
            (e.EnumMember = 22),
            (e.Struct = 23),
            (e.Event = 24),
            (e.Operator = 25),
            (e.TypeParameter = 26);
        })(p || (p = {}));
        var Ae;
        (function (e) {
          e.Deprecated = 1;
        })(Ae || (Ae = {}));
        var Ee;
        (function (e) {
          function n(i, r, t, o, s) {
            let u = { name: i, kind: r, location: { uri: o, range: t } };
            return s && (u.containerName = s), u;
          }
          e.create = n;
        })(Ee || (Ee = {}));
        var Ie;
        (function (e) {
          function n(i, r, t, o) {
            return o !== void 0
              ? { name: i, kind: r, location: { uri: t, range: o } }
              : { name: i, kind: r, location: { uri: t } };
          }
          e.create = n;
        })(Ie || (Ie = {}));
        var Le;
        (function (e) {
          function n(r, t, o, s, u, f) {
            let c = {
              name: r,
              detail: t,
              kind: o,
              range: s,
              selectionRange: u,
            };
            return f !== void 0 && (c.children = f), c;
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              t &&
              a.string(t.name) &&
              a.number(t.kind) &&
              g.is(t.range) &&
              g.is(t.selectionRange) &&
              (t.detail === void 0 || a.string(t.detail)) &&
              (t.deprecated === void 0 || a.boolean(t.deprecated)) &&
              (t.children === void 0 || Array.isArray(t.children)) &&
              (t.tags === void 0 || Array.isArray(t.tags))
            );
          }
          e.is = i;
        })(Le || (Le = {}));
        var Re;
        (function (e) {
          (e.Empty = ""),
            (e.QuickFix = "quickfix"),
            (e.Refactor = "refactor"),
            (e.RefactorExtract = "refactor.extract"),
            (e.RefactorInline = "refactor.inline"),
            (e.RefactorRewrite = "refactor.rewrite"),
            (e.Source = "source"),
            (e.SourceOrganizeImports = "source.organizeImports"),
            (e.SourceFixAll = "source.fixAll");
        })(Re || (Re = {}));
        var j;
        (function (e) {
          (e.Invoked = 1), (e.Automatic = 2);
        })(j || (j = {}));
        var De;
        (function (e) {
          function n(r, t, o) {
            let s = { diagnostics: r };
            return (
              t != null && (s.only = t), o != null && (s.triggerKind = o), s
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) &&
              a.typedArray(t.diagnostics, y.is) &&
              (t.only === void 0 || a.typedArray(t.only, a.string)) &&
              (t.triggerKind === void 0 ||
                t.triggerKind === j.Invoked ||
                t.triggerKind === j.Automatic)
            );
          }
          e.is = i;
        })(De || (De = {}));
        var Pe;
        (function (e) {
          function n(r, t, o) {
            let s = { title: r },
              u = !0;
            return (
              typeof t == "string"
                ? ((u = !1), (s.kind = t))
                : A.is(t)
                  ? (s.command = t)
                  : (s.edit = t),
              u && o !== void 0 && (s.kind = o),
              s
            );
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              t &&
              a.string(t.title) &&
              (t.diagnostics === void 0 || a.typedArray(t.diagnostics, y.is)) &&
              (t.kind === void 0 || a.string(t.kind)) &&
              (t.edit !== void 0 || t.command !== void 0) &&
              (t.command === void 0 || A.is(t.command)) &&
              (t.isPreferred === void 0 || a.boolean(t.isPreferred)) &&
              (t.edit === void 0 || z.is(t.edit))
            );
          }
          e.is = i;
        })(Pe || (Pe = {}));
        var Me;
        (function (e) {
          function n(r, t) {
            let o = { range: r };
            return a.defined(t) && (o.data = t), o;
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) &&
              g.is(t.range) &&
              (a.undefined(t.command) || A.is(t.command))
            );
          }
          e.is = i;
        })(Me || (Me = {}));
        var Ce;
        (function (e) {
          function n(r, t) {
            return { tabSize: r, insertSpaces: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) && a.uinteger(t.tabSize) && a.boolean(t.insertSpaces)
            );
          }
          e.is = i;
        })(Ce || (Ce = {}));
        var ye;
        (function (e) {
          function n(r, t, o) {
            return { range: r, target: t, data: o };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.defined(t) &&
              g.is(t.range) &&
              (a.undefined(t.target) || a.string(t.target))
            );
          }
          e.is = i;
        })(ye || (ye = {}));
        var Fe;
        (function (e) {
          function n(r, t) {
            return { range: r, parent: t };
          }
          e.create = n;
          function i(r) {
            let t = r;
            return (
              a.objectLiteral(t) &&
              g.is(t.range) &&
              (t.parent === void 0 || e.is(t.parent))
            );
          }
          e.is = i;
        })(Fe || (Fe = {}));
        var je;
        (function (e) {
          (e.namespace = "namespace"),
            (e.type = "type"),
            (e.class = "class"),
            (e.enum = "enum"),
            (e.interface = "interface"),
            (e.struct = "struct"),
            (e.typeParameter = "typeParameter"),
            (e.parameter = "parameter"),
            (e.variable = "variable"),
            (e.property = "property"),
            (e.enumMember = "enumMember"),
            (e.event = "event"),
            (e.function = "function"),
            (e.method = "method"),
            (e.macro = "macro"),
            (e.keyword = "keyword"),
            (e.modifier = "modifier"),
            (e.comment = "comment"),
            (e.string = "string"),
            (e.number = "number"),
            (e.regexp = "regexp"),
            (e.operator = "operator"),
            (e.decorator = "decorator");
        })(je || (je = {}));
        var Ne;
        (function (e) {
          (e.declaration = "declaration"),
            (e.definition = "definition"),
            (e.readonly = "readonly"),
            (e.static = "static"),
            (e.deprecated = "deprecated"),
            (e.abstract = "abstract"),
            (e.async = "async"),
            (e.modification = "modification"),
            (e.documentation = "documentation"),
            (e.defaultLibrary = "defaultLibrary");
        })(Ne || (Ne = {}));
        var Oe;
        (function (e) {
          function n(i) {
            const r = i;
            return (
              a.objectLiteral(r) &&
              (r.resultId === void 0 || typeof r.resultId == "string") &&
              Array.isArray(r.data) &&
              (r.data.length === 0 || typeof r.data[0] == "number")
            );
          }
          e.is = n;
        })(Oe || (Oe = {}));
        var Se;
        (function (e) {
          function n(r, t) {
            return { range: r, text: t };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return t != null && g.is(t.range) && a.string(t.text);
          }
          e.is = i;
        })(Se || (Se = {}));
        var Ue;
        (function (e) {
          function n(r, t, o) {
            return { range: r, variableName: t, caseSensitiveLookup: o };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              t != null &&
              g.is(t.range) &&
              a.boolean(t.caseSensitiveLookup) &&
              (a.string(t.variableName) || t.variableName === void 0)
            );
          }
          e.is = i;
        })(Ue || (Ue = {}));
        var Ve;
        (function (e) {
          function n(r, t) {
            return { range: r, expression: t };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              t != null &&
              g.is(t.range) &&
              (a.string(t.expression) || t.expression === void 0)
            );
          }
          e.is = i;
        })(Ve || (Ve = {}));
        var We;
        (function (e) {
          function n(r, t) {
            return { frameId: r, stoppedLocation: t };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return a.defined(t) && g.is(r.stoppedLocation);
          }
          e.is = i;
        })(We || (We = {}));
        var G;
        (function (e) {
          (e.Type = 1), (e.Parameter = 2);
          function n(i) {
            return i === 1 || i === 2;
          }
          e.is = n;
        })(G || (G = {}));
        var J;
        (function (e) {
          function n(r) {
            return { value: r };
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              a.objectLiteral(t) &&
              (t.tooltip === void 0 ||
                a.string(t.tooltip) ||
                D.is(t.tooltip)) &&
              (t.location === void 0 || C.is(t.location)) &&
              (t.command === void 0 || A.is(t.command))
            );
          }
          e.is = i;
        })(J || (J = {}));
        var He;
        (function (e) {
          function n(r, t, o) {
            const s = { position: r, label: t };
            return o !== void 0 && (s.kind = o), s;
          }
          e.create = n;
          function i(r) {
            const t = r;
            return (
              (a.objectLiteral(t) &&
                w.is(t.position) &&
                (a.string(t.label) || a.typedArray(t.label, J.is)) &&
                (t.kind === void 0 || G.is(t.kind)) &&
                t.textEdits === void 0) ||
              (a.typedArray(t.textEdits, E.is) &&
                (t.tooltip === void 0 ||
                  a.string(t.tooltip) ||
                  D.is(t.tooltip)) &&
                (t.paddingLeft === void 0 || a.boolean(t.paddingLeft)) &&
                (t.paddingRight === void 0 || a.boolean(t.paddingRight)))
            );
          }
          e.is = i;
        })(He || (He = {}));
        var Xe;
        (function (e) {
          function n(i) {
            return { kind: "snippet", value: i };
          }
          e.createSnippet = n;
        })(Xe || (Xe = {}));
        var $e;
        (function (e) {
          function n(i, r, t, o) {
            return { insertText: i, filterText: r, range: t, command: o };
          }
          e.create = n;
        })($e || ($e = {}));
        var ze;
        (function (e) {
          function n(i) {
            return { items: i };
          }
          e.create = n;
        })(ze || (ze = {}));
        var Be;
        (function (e) {
          (e.Invoked = 0), (e.Automatic = 1);
        })(Be || (Be = {}));
        var Qe;
        (function (e) {
          function n(i, r) {
            return { range: i, text: r };
          }
          e.create = n;
        })(Qe || (Qe = {}));
        var Te;
        (function (e) {
          function n(i, r) {
            return { triggerKind: i, selectedCompletionInfo: r };
          }
          e.create = n;
        })(Te || (Te = {}));
        var Ge;
        (function (e) {
          function n(i) {
            const r = i;
            return a.objectLiteral(r) && O.is(r.uri) && a.string(r.name);
          }
          e.is = n;
        })(Ge || (Ge = {}));
        var Je;
        (function (e) {
          function n(o, s, u, f) {
            return new At(o, s, u, f);
          }
          e.create = n;
          function i(o) {
            let s = o;
            return !!(
              a.defined(s) &&
              a.string(s.uri) &&
              (a.undefined(s.languageId) || a.string(s.languageId)) &&
              a.uinteger(s.lineCount) &&
              a.func(s.getText) &&
              a.func(s.positionAt) &&
              a.func(s.offsetAt)
            );
          }
          e.is = i;
          function r(o, s) {
            let u = o.getText(),
              f = t(s, (h, _) => {
                let b = h.range.start.line - _.range.start.line;
                return b === 0
                  ? h.range.start.character - _.range.start.character
                  : b;
              }),
              c = u.length;
            for (let h = f.length - 1; h >= 0; h--) {
              let _ = f[h],
                b = o.offsetAt(_.range.start),
                l = o.offsetAt(_.range.end);
              if (l <= c)
                u = u.substring(0, b) + _.newText + u.substring(l, u.length);
              else throw new Error("Overlapping edit");
              c = b;
            }
            return u;
          }
          e.applyEdits = r;
          function t(o, s) {
            if (o.length <= 1) return o;
            const u = (o.length / 2) | 0,
              f = o.slice(0, u),
              c = o.slice(u);
            t(f, s), t(c, s);
            let h = 0,
              _ = 0,
              b = 0;
            for (; h < f.length && _ < c.length; )
              s(f[h], c[_]) <= 0 ? (o[b++] = f[h++]) : (o[b++] = c[_++]);
            for (; h < f.length; ) o[b++] = f[h++];
            for (; _ < c.length; ) o[b++] = c[_++];
            return o;
          }
        })(Je || (Je = {}));
        var At = class {
            constructor(e, n, i, r) {
              (this._uri = e),
                (this._languageId = n),
                (this._version = i),
                (this._content = r),
                (this._lineOffsets = void 0);
            }
            get uri() {
              return this._uri;
            }
            get languageId() {
              return this._languageId;
            }
            get version() {
              return this._version;
            }
            getText(e) {
              if (e) {
                let n = this.offsetAt(e.start),
                  i = this.offsetAt(e.end);
                return this._content.substring(n, i);
              }
              return this._content;
            }
            update(e, n) {
              (this._content = e.text),
                (this._version = n),
                (this._lineOffsets = void 0);
            }
            getLineOffsets() {
              if (this._lineOffsets === void 0) {
                let e = [],
                  n = this._content,
                  i = !0;
                for (let r = 0; r < n.length; r++) {
                  i && (e.push(r), (i = !1));
                  let t = n.charAt(r);
                  (i =
                    t === "\r" ||
                    t ===
                      `
`),
                    t === "\r" &&
                      r + 1 < n.length &&
                      n.charAt(r + 1) ===
                        `
` &&
                      r++;
                }
                i && n.length > 0 && e.push(n.length), (this._lineOffsets = e);
              }
              return this._lineOffsets;
            }
            positionAt(e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              let n = this.getLineOffsets(),
                i = 0,
                r = n.length;
              if (r === 0) return w.create(0, e);
              for (; i < r; ) {
                let o = Math.floor((i + r) / 2);
                n[o] > e ? (r = o) : (i = o + 1);
              }
              let t = i - 1;
              return w.create(t, e - n[t]);
            }
            offsetAt(e) {
              let n = this.getLineOffsets();
              if (e.line >= n.length) return this._content.length;
              if (e.line < 0) return 0;
              let i = n[e.line],
                r =
                  e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
              return Math.max(Math.min(i + e.character, r), i);
            }
            get lineCount() {
              return this.getLineOffsets().length;
            }
          },
          a;
        (function (e) {
          const n = Object.prototype.toString;
          function i(l) {
            return typeof l != "undefined";
          }
          e.defined = i;
          function r(l) {
            return typeof l == "undefined";
          }
          e.undefined = r;
          function t(l) {
            return l === !0 || l === !1;
          }
          e.boolean = t;
          function o(l) {
            return n.call(l) === "[object String]";
          }
          e.string = o;
          function s(l) {
            return n.call(l) === "[object Number]";
          }
          e.number = s;
          function u(l, Z, St) {
            return n.call(l) === "[object Number]" && Z <= l && l <= St;
          }
          e.numberRange = u;
          function f(l) {
            return (
              n.call(l) === "[object Number]" &&
              -2147483648 <= l &&
              l <= 2147483647
            );
          }
          e.integer = f;
          function c(l) {
            return n.call(l) === "[object Number]" && 0 <= l && l <= 2147483647;
          }
          e.uinteger = c;
          function h(l) {
            return n.call(l) === "[object Function]";
          }
          e.func = h;
          function _(l) {
            return l !== null && typeof l == "object";
          }
          e.objectLiteral = _;
          function b(l, Z) {
            return Array.isArray(l) && l.every(Z);
          }
          e.typedArray = b;
        })(a || (a = {}));
        var Ye = class {
          constructor(e, n, i) {
            (this._languageId = e),
              (this._worker = n),
              (this._disposables = []),
              (this._listener = Object.create(null));
            const r = (o) => {
                let s = o.getLanguageId();
                if (s !== this._languageId) return;
                let u;
                (this._listener[o.uri.toString()] = o.onDidChangeContent(() => {
                  window.clearTimeout(u),
                    (u = window.setTimeout(
                      () => this._doValidate(o.uri, s),
                      500,
                    ));
                })),
                  this._doValidate(o.uri, s);
              },
              t = (o) => {
                d.editor.setModelMarkers(o, this._languageId, []);
                let s = o.uri.toString(),
                  u = this._listener[s];
                u && (u.dispose(), delete this._listener[s]);
              };
            this._disposables.push(d.editor.onDidCreateModel(r)),
              this._disposables.push(d.editor.onWillDisposeModel(t)),
              this._disposables.push(
                d.editor.onDidChangeModelLanguage((o) => {
                  t(o.model), r(o.model);
                }),
              ),
              this._disposables.push(
                i((o) => {
                  d.editor.getModels().forEach((s) => {
                    s.getLanguageId() === this._languageId && (t(s), r(s));
                  });
                }),
              ),
              this._disposables.push({
                dispose: () => {
                  d.editor.getModels().forEach(t);
                  for (let o in this._listener) this._listener[o].dispose();
                },
              }),
              d.editor.getModels().forEach(r);
          }
          dispose() {
            this._disposables.forEach((e) => e && e.dispose()),
              (this._disposables.length = 0);
          }
          _doValidate(e, n) {
            this._worker(e)
              .then((i) => i.doValidation(e.toString()))
              .then((i) => {
                const r = i.map((o) => It(e, o));
                let t = d.editor.getModel(e);
                t &&
                  t.getLanguageId() === n &&
                  d.editor.setModelMarkers(t, n, r);
              })
              .then(void 0, (i) => {
                console.error(i);
              });
          }
        };
        function Et(e) {
          switch (e) {
            case x.Error:
              return d.MarkerSeverity.Error;
            case x.Warning:
              return d.MarkerSeverity.Warning;
            case x.Information:
              return d.MarkerSeverity.Info;
            case x.Hint:
              return d.MarkerSeverity.Hint;
            default:
              return d.MarkerSeverity.Info;
          }
        }
        function It(e, n) {
          let i = typeof n.code == "number" ? String(n.code) : n.code;
          return {
            severity: Et(n.severity),
            startLineNumber: n.range.start.line + 1,
            startColumn: n.range.start.character + 1,
            endLineNumber: n.range.end.line + 1,
            endColumn: n.range.end.character + 1,
            message: n.message,
            code: i,
            source: n.source,
          };
        }
        var Ze = class {
          constructor(e, n) {
            (this._worker = e), (this._triggerCharacters = n);
          }
          get triggerCharacters() {
            return this._triggerCharacters;
          }
          provideCompletionItems(e, n, i, r) {
            const t = e.uri;
            return this._worker(t)
              .then((o) => o.doComplete(t.toString(), k(n)))
              .then((o) => {
                if (!o) return;
                const s = e.getWordUntilPosition(n),
                  u = new d.Range(
                    n.lineNumber,
                    s.startColumn,
                    n.lineNumber,
                    s.endColumn,
                  ),
                  f = o.items.map((c) => {
                    const h = {
                      label: c.label,
                      insertText: c.insertText || c.label,
                      sortText: c.sortText,
                      filterText: c.filterText,
                      documentation: c.documentation,
                      detail: c.detail,
                      command: Dt(c.command),
                      range: u,
                      kind: Rt(c.kind),
                    };
                    return (
                      c.textEdit &&
                        (Lt(c.textEdit)
                          ? (h.range = {
                              insert: m(c.textEdit.insert),
                              replace: m(c.textEdit.replace),
                            })
                          : (h.range = m(c.textEdit.range)),
                        (h.insertText = c.textEdit.newText)),
                      c.additionalTextEdits &&
                        (h.additionalTextEdits = c.additionalTextEdits.map(L)),
                      c.insertTextFormat === T.Snippet &&
                        (h.insertTextRules =
                          d.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                      h
                    );
                  });
                return { isIncomplete: o.isIncomplete, suggestions: f };
              });
          }
        };
        function k(e) {
          if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
        }
        function Y(e) {
          if (e)
            return {
              start: {
                line: e.startLineNumber - 1,
                character: e.startColumn - 1,
              },
              end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
            };
        }
        function m(e) {
          if (e)
            return new d.Range(
              e.start.line + 1,
              e.start.character + 1,
              e.end.line + 1,
              e.end.character + 1,
            );
        }
        function Lt(e) {
          return (
            typeof e.insert != "undefined" && typeof e.replace != "undefined"
          );
        }
        function Rt(e) {
          const n = d.languages.CompletionItemKind;
          switch (e) {
            case v.Text:
              return n.Text;
            case v.Method:
              return n.Method;
            case v.Function:
              return n.Function;
            case v.Constructor:
              return n.Constructor;
            case v.Field:
              return n.Field;
            case v.Variable:
              return n.Variable;
            case v.Class:
              return n.Class;
            case v.Interface:
              return n.Interface;
            case v.Module:
              return n.Module;
            case v.Property:
              return n.Property;
            case v.Unit:
              return n.Unit;
            case v.Value:
              return n.Value;
            case v.Enum:
              return n.Enum;
            case v.Keyword:
              return n.Keyword;
            case v.Snippet:
              return n.Snippet;
            case v.Color:
              return n.Color;
            case v.File:
              return n.File;
            case v.Reference:
              return n.Reference;
          }
          return n.Property;
        }
        function L(e) {
          if (e) return { range: m(e.range), text: e.newText };
        }
        function Dt(e) {
          return e && e.command === "editor.action.triggerSuggest"
            ? { id: e.command, title: e.title, arguments: e.arguments }
            : void 0;
        }
        var qe = class {
          constructor(e) {
            this._worker = e;
          }
          provideHover(e, n, i) {
            let r = e.uri;
            return this._worker(r)
              .then((t) => t.doHover(r.toString(), k(n)))
              .then((t) => {
                if (t) return { range: m(t.range), contents: Mt(t.contents) };
              });
          }
        };
        function Pt(e) {
          return e && typeof e == "object" && typeof e.kind == "string";
        }
        function Ke(e) {
          return typeof e == "string"
            ? { value: e }
            : Pt(e)
              ? e.kind === "plaintext"
                ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
                : { value: e.value }
              : {
                  value:
                    "```" +
                    e.language +
                    `
` +
                    e.value +
                    "\n```\n",
                };
        }
        function Mt(e) {
          if (e) return Array.isArray(e) ? e.map(Ke) : [Ke(e)];
        }
        var et = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentHighlights(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) => t.findDocumentHighlights(r.toString(), k(n)))
              .then((t) => {
                if (t)
                  return t.map((o) => ({
                    range: m(o.range),
                    kind: Ct(o.kind),
                  }));
              });
          }
        };
        function Ct(e) {
          switch (e) {
            case P.Read:
              return d.languages.DocumentHighlightKind.Read;
            case P.Write:
              return d.languages.DocumentHighlightKind.Write;
            case P.Text:
              return d.languages.DocumentHighlightKind.Text;
          }
          return d.languages.DocumentHighlightKind.Text;
        }
        var tt = class {
          constructor(e) {
            this._worker = e;
          }
          provideDefinition(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) => t.findDefinition(r.toString(), k(n)))
              .then((t) => {
                if (t) return [rt(t)];
              });
          }
        };
        function rt(e) {
          return { uri: d.Uri.parse(e.uri), range: m(e.range) };
        }
        var nt = class {
            constructor(e) {
              this._worker = e;
            }
            provideReferences(e, n, i, r) {
              const t = e.uri;
              return this._worker(t)
                .then((o) => o.findReferences(t.toString(), k(n)))
                .then((o) => {
                  if (o) return o.map(rt);
                });
            }
          },
          it = class {
            constructor(e) {
              this._worker = e;
            }
            provideRenameEdits(e, n, i, r) {
              const t = e.uri;
              return this._worker(t)
                .then((o) => o.doRename(t.toString(), k(n), i))
                .then((o) => yt(o));
            }
          };
        function yt(e) {
          if (!e || !e.changes) return;
          let n = [];
          for (let i in e.changes) {
            const r = d.Uri.parse(i);
            for (let t of e.changes[i])
              n.push({
                resource: r,
                versionId: void 0,
                textEdit: { range: m(t.range), text: t.newText },
              });
          }
          return { edits: n };
        }
        var ot = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentSymbols(e, n) {
            const i = e.uri;
            return this._worker(i)
              .then((r) => r.findDocumentSymbols(i.toString()))
              .then((r) => {
                if (r)
                  return r.map((t) =>
                    Ft(t)
                      ? at(t)
                      : {
                          name: t.name,
                          detail: "",
                          containerName: t.containerName,
                          kind: st(t.kind),
                          range: m(t.location.range),
                          selectionRange: m(t.location.range),
                          tags: [],
                        },
                  );
              });
          }
        };
        function Ft(e) {
          return "children" in e;
        }
        function at(e) {
          var n, i, r;
          return {
            name: e.name,
            detail: (n = e.detail) != null ? n : "",
            kind: st(e.kind),
            range: m(e.range),
            selectionRange: m(e.selectionRange),
            tags: (i = e.tags) != null ? i : [],
            children: ((r = e.children) != null ? r : []).map((t) => at(t)),
          };
        }
        function st(e) {
          let n = d.languages.SymbolKind;
          switch (e) {
            case p.File:
              return n.File;
            case p.Module:
              return n.Module;
            case p.Namespace:
              return n.Namespace;
            case p.Package:
              return n.Package;
            case p.Class:
              return n.Class;
            case p.Method:
              return n.Method;
            case p.Property:
              return n.Property;
            case p.Field:
              return n.Field;
            case p.Constructor:
              return n.Constructor;
            case p.Enum:
              return n.Enum;
            case p.Interface:
              return n.Interface;
            case p.Function:
              return n.Function;
            case p.Variable:
              return n.Variable;
            case p.Constant:
              return n.Constant;
            case p.String:
              return n.String;
            case p.Number:
              return n.Number;
            case p.Boolean:
              return n.Boolean;
            case p.Array:
              return n.Array;
          }
          return n.Function;
        }
        var jt = class {
            constructor(e) {
              this._worker = e;
            }
            provideLinks(e, n) {
              const i = e.uri;
              return this._worker(i)
                .then((r) => r.findDocumentLinks(i.toString()))
                .then((r) => {
                  if (r)
                    return {
                      links: r.map((t) => ({
                        range: m(t.range),
                        url: t.target,
                      })),
                    };
                });
            }
          },
          ut = class {
            constructor(e) {
              this._worker = e;
            }
            provideDocumentFormattingEdits(e, n, i) {
              const r = e.uri;
              return this._worker(r).then((t) =>
                t.format(r.toString(), null, dt(n)).then((o) => {
                  if (!(!o || o.length === 0)) return o.map(L);
                }),
              );
            }
          },
          ct = class {
            constructor(e) {
              (this._worker = e), (this.canFormatMultipleRanges = !1);
            }
            provideDocumentRangeFormattingEdits(e, n, i, r) {
              const t = e.uri;
              return this._worker(t).then((o) =>
                o.format(t.toString(), Y(n), dt(i)).then((s) => {
                  if (!(!s || s.length === 0)) return s.map(L);
                }),
              );
            }
          };
        function dt(e) {
          return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
        }
        var lt = class {
            constructor(e) {
              this._worker = e;
            }
            provideDocumentColors(e, n) {
              const i = e.uri;
              return this._worker(i)
                .then((r) => r.findDocumentColors(i.toString()))
                .then((r) => {
                  if (r)
                    return r.map((t) => ({
                      color: t.color,
                      range: m(t.range),
                    }));
                });
            }
            provideColorPresentations(e, n, i) {
              const r = e.uri;
              return this._worker(r)
                .then((t) =>
                  t.getColorPresentations(r.toString(), n.color, Y(n.range)),
                )
                .then((t) => {
                  if (t)
                    return t.map((o) => {
                      let s = { label: o.label };
                      return (
                        o.textEdit && (s.textEdit = L(o.textEdit)),
                        o.additionalTextEdits &&
                          (s.additionalTextEdits =
                            o.additionalTextEdits.map(L)),
                        s
                      );
                    });
                });
            }
          },
          ft = class {
            constructor(e) {
              this._worker = e;
            }
            provideFoldingRanges(e, n, i) {
              const r = e.uri;
              return this._worker(r)
                .then((t) => t.getFoldingRanges(r.toString(), n))
                .then((t) => {
                  if (t)
                    return t.map((o) => {
                      const s = { start: o.startLine + 1, end: o.endLine + 1 };
                      return (
                        typeof o.kind != "undefined" && (s.kind = Nt(o.kind)), s
                      );
                    });
                });
            }
          };
        function Nt(e) {
          switch (e) {
            case R.Comment:
              return d.languages.FoldingRangeKind.Comment;
            case R.Imports:
              return d.languages.FoldingRangeKind.Imports;
            case R.Region:
              return d.languages.FoldingRangeKind.Region;
          }
        }
        var gt = class {
          constructor(e) {
            this._worker = e;
          }
          provideSelectionRanges(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) => t.getSelectionRanges(r.toString(), n.map(k)))
              .then((t) => {
                if (t)
                  return t.map((o) => {
                    const s = [];
                    for (; o; ) s.push({ range: m(o.range) }), (o = o.parent);
                    return s;
                  });
              });
          }
        };
        function Ot(e) {
          const n = [],
            i = [],
            r = new ee(e);
          n.push(r);
          const t = (...s) => r.getLanguageServiceWorker(...s);
          function o() {
            const { languageId: s, modeConfiguration: u } = e;
            vt(i),
              u.completionItems &&
                i.push(
                  d.languages.registerCompletionItemProvider(
                    s,
                    new Ze(t, ["/", "-", ":"]),
                  ),
                ),
              u.hovers &&
                i.push(d.languages.registerHoverProvider(s, new qe(t))),
              u.documentHighlights &&
                i.push(
                  d.languages.registerDocumentHighlightProvider(s, new et(t)),
                ),
              u.definitions &&
                i.push(d.languages.registerDefinitionProvider(s, new tt(t))),
              u.references &&
                i.push(d.languages.registerReferenceProvider(s, new nt(t))),
              u.documentSymbols &&
                i.push(
                  d.languages.registerDocumentSymbolProvider(s, new ot(t)),
                ),
              u.rename &&
                i.push(d.languages.registerRenameProvider(s, new it(t))),
              u.colors &&
                i.push(d.languages.registerColorProvider(s, new lt(t))),
              u.foldingRanges &&
                i.push(d.languages.registerFoldingRangeProvider(s, new ft(t))),
              u.diagnostics && i.push(new Ye(s, t, e.onDidChange)),
              u.selectionRanges &&
                i.push(
                  d.languages.registerSelectionRangeProvider(s, new gt(t)),
                ),
              u.documentFormattingEdits &&
                i.push(
                  d.languages.registerDocumentFormattingEditProvider(
                    s,
                    new ut(t),
                  ),
                ),
              u.documentRangeFormattingEdits &&
                i.push(
                  d.languages.registerDocumentRangeFormattingEditProvider(
                    s,
                    new ct(t),
                  ),
                );
          }
          return o(), n.push(ht(i)), ht(n);
        }
        function ht(e) {
          return { dispose: () => vt(e) };
        }
        function vt(e) {
          for (; e.length; ) e.pop().dispose();
        }
      },
    },
  ]);
})();
