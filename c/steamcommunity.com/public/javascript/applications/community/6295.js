"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6295],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          CompletionAdapter: () => _,
          DefinitionAdapter: () => _,
          DiagnosticsAdapter: () => _,
          DocumentColorAdapter: () => _,
          DocumentFormattingEditProvider: () => _,
          DocumentHighlightAdapter: () => _,
          DocumentLinkAdapter: () => _,
          DocumentRangeFormattingEditProvider: () => _,
          DocumentSymbolAdapter: () => _,
          FoldingRangeAdapter: () => _,
          HoverAdapter: () => _,
          ReferenceAdapter: () => _,
          RenameAdapter: () => _,
          SelectionRangeAdapter: () => _,
          WorkerManager: () => _,
          fromPosition: () => _,
          fromRange: () => _,
          setupMode: () => _,
          toRange: () => _,
          toTextEdit: () => _,
        });
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = Object.defineProperty,
        _ = Object.getOwnPropertyDescriptor,
        _ = Object.getOwnPropertyNames,
        _ = Object.prototype.hasOwnProperty,
        _ = (_, _, _, _) => {
          if ((_ && "object" == typeof _) || "function" == typeof _)
            for (let _ of _(_))
              _.call(_, _) ||
                _ === _ ||
                _(_, _, {
                  get: () => _[_],
                  enumerable: !(_ = _(_, _)) || _.enumerable,
                });
          return _;
        },
        _ = {};
      _(_, (_ = _), "default"), _ && _(_, _, "default");
      var _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _ = class {
          constructor(_) {
            (this._defaults = _),
              (this._worker = null),
              (this._client = null),
              (this._idleCheckInterval = window.setInterval(
                () => this._checkIfIdle(),
                3e4,
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
            Date.now() - this._lastUsedTime > 12e4 && this._stopWorker();
          }
          _getClient() {
            return (
              (this._lastUsedTime = Date.now()),
              this._client ||
                ((this._worker = _.editor.createWebWorker({
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
          getLanguageServiceWorker(..._) {
            let _;
            return this._getClient()
              .then((_) => {
                _ = _;
              })
              .then((_) => {
                if (this._worker) return this._worker.withSyncedResources(_);
              })
              .then((_) => _);
          }
        };
      ((_ || (_ = {}))._ = function (_) {
        return "string" == typeof _;
      }),
        ((_ || (_ = {}))._ = function (_) {
          return "string" == typeof _;
        }),
        ((_ = _ || (_ = {})).MIN_VALUE = -2147483648),
        (_.MAX_VALUE = 2147483647),
        (_._ = function (_) {
          return "number" == typeof _ && _.MIN_VALUE <= _ && _ <= _.MAX_VALUE;
        }),
        ((_ = _ || (_ = {})).MIN_VALUE = 0),
        (_.MAX_VALUE = 2147483647),
        (_._ = function (_) {
          return "number" == typeof _ && _.MIN_VALUE <= _ && _ <= _.MAX_VALUE;
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return (
            _ === Number.MAX_VALUE && (_ = _.MAX_VALUE),
            _ === Number.MAX_VALUE && (_ = _.MAX_VALUE),
            {
              line: _,
              character: _,
            }
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.objectLiteral(_) && _.uinteger(_.line) && _.uinteger(_.character)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _) {
          if (_.uinteger(_) && _.uinteger(_) && _.uinteger(_) && _.uinteger(_))
            return {
              start: _.create(_, _),
              end: _.create(_, _),
            };
          if (_._(_) && _._(_))
            return {
              start: _,
              end: _,
            };
          throw new Error(
            `Range#create called with invalid arguments[${_}, ${_}, ${_}, ${_}]`,
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return _.objectLiteral(_) && _._(_.start) && _._(_.end);
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            uri: _,
            range: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.objectLiteral(_) &&
            _._(_.range) &&
            (_.string(_.uri) || _.undefined(_.uri))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _) {
          return {
            targetUri: _,
            targetRange: _,
            targetSelectionRange: _,
            originSelectionRange: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.objectLiteral(_) &&
            _._(_.targetRange) &&
            _.string(_.targetUri) &&
            _._(_.targetSelectionRange) &&
            (_._(_.originSelectionRange) || _.undefined(_.originSelectionRange))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _) {
          return {
            red: _,
            green: _,
            blue: _,
            alpha: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            _.numberRange(_.red, 0, 1) &&
            _.numberRange(_.green, 0, 1) &&
            _.numberRange(_.blue, 0, 1) &&
            _.numberRange(_.alpha, 0, 1)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            range: _,
            color: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return _.objectLiteral(_) && _._(_.range) && _._(_.color);
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          return {
            label: _,
            textEdit: _,
            additionalTextEdits: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            _.string(_.label) &&
            (_.undefined(_.textEdit) || _._(_)) &&
            (_.undefined(_.additionalTextEdits) ||
              _.typedArray(_.additionalTextEdits, _._))
          );
        }),
        ((_ = _ || (_ = {})).Comment = "comment"),
        (_.Imports = "imports"),
        (_.Region = "region"),
        ((_ = _ || (_ = {})).create = function (_, _, _, _, _, _) {
          const _ = {
            startLine: _,
            endLine: _,
          };
          return (
            _.defined(_) && (_.startCharacter = _),
            _.defined(_) && (_.endCharacter = _),
            _.defined(_) && (_.kind = _),
            _.defined(_) && (_.collapsedText = _),
            _
          );
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            _.uinteger(_.startLine) &&
            _.uinteger(_.startLine) &&
            (_.undefined(_.startCharacter) || _.uinteger(_.startCharacter)) &&
            (_.undefined(_.endCharacter) || _.uinteger(_.endCharacter)) &&
            (_.undefined(_.kind) || _.string(_.kind))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            location: _,
            message: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return _.defined(_) && _._(_.location) && _.string(_.message);
        }),
        ((_ = _ || (_ = {})).Error = 1),
        (_.Warning = 2),
        (_.Information = 3),
        (_.Hint = 4),
        ((_ = _ || (_ = {})).Unnecessary = 1),
        (_.Deprecated = 2),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return _.objectLiteral(_) && _.string(_.href);
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _, _, _) {
          let _ = {
            range: _,
            message: _,
          };
          return (
            _.defined(_) && (_.severity = _),
            _.defined(_) && (_.code = _),
            _.defined(_) && (_.source = _),
            _.defined(_) && (_.relatedInformation = _),
            _
          );
        }),
        (_._ = function (_) {
          var _;
          let _ = _;
          return (
            _.defined(_) &&
            _._(_.range) &&
            _.string(_.message) &&
            (_.number(_.severity) || _.undefined(_.severity)) &&
            (_.integer(_.code) || _.string(_.code) || _.undefined(_.code)) &&
            (_.undefined(_.codeDescription) ||
              _.string(
                null === (_ = _.codeDescription) || void 0 === _
                  ? void 0
                  : _.href,
              )) &&
            (_.string(_.source) || _.undefined(_.source)) &&
            (_.undefined(_.relatedInformation) ||
              _.typedArray(_.relatedInformation, _._))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, ...__webpack_require__) {
          let _ = {
            title: _,
            command: _,
          };
          return (
            _.defined(__webpack_require__) &&
              __webpack_require__.length > 0 &&
              (_.arguments = __webpack_require__),
            _
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return _.defined(_) && _.string(_.title) && _.string(_.command);
        }),
        ((_ = _ || (_ = {})).replace = function (_, _) {
          return {
            range: _,
            newText: _,
          };
        }),
        (_.insert = function (_, _) {
          return {
            range: {
              start: _,
              end: _,
            },
            newText: _,
          };
        }),
        (_.del = function (_) {
          return {
            range: _,
            newText: "",
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return _.objectLiteral(_) && _.string(_.newText) && _._(_.range);
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          const _ = {
            label: _,
          };
          return (
            void 0 !== _ && (_.needsConfirmation = _),
            void 0 !== _ && (_.description = _),
            _
          );
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            _.string(_.label) &&
            (_.boolean(_.needsConfirmation) ||
              void 0 === _.needsConfirmation) &&
            (_.string(_.description) || void 0 === _.description)
          );
        }),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return _.string(_);
        }),
        ((_ = _ || (_ = {})).replace = function (_, _, _) {
          return {
            range: _,
            newText: _,
            annotationId: _,
          };
        }),
        (_.insert = function (_, _, _) {
          return {
            range: {
              start: _,
              end: _,
            },
            newText: _,
            annotationId: _,
          };
        }),
        (_.del = function (_, _) {
          return {
            range: _,
            newText: "",
            annotationId: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return _._(_) && (_._(_.annotationId) || _._(_.annotationId));
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            textDocument: _,
            edits: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return _.defined(_) && _._(_.textDocument) && Array.isArray(_.edits);
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          let _ = {
            kind: "create",
            uri: _,
          };
          return (
            void 0 === _ ||
              (void 0 === _.overwrite && void 0 === _.ignoreIfExists) ||
              (_.options = _),
            void 0 !== _ && (_.annotationId = _),
            _
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _ &&
            "create" === _.kind &&
            _.string(_.uri) &&
            (void 0 === _.options ||
              ((void 0 === _.options.overwrite ||
                _.boolean(_.options.overwrite)) &&
                (void 0 === _.options.ignoreIfExists ||
                  _.boolean(_.options.ignoreIfExists)))) &&
            (void 0 === _.annotationId || _._(_.annotationId))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _) {
          let _ = {
            kind: "rename",
            oldUri: _,
            newUri: _,
          };
          return (
            void 0 === _ ||
              (void 0 === _.overwrite && void 0 === _.ignoreIfExists) ||
              (_.options = _),
            void 0 !== _ && (_.annotationId = _),
            _
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _ &&
            "rename" === _.kind &&
            _.string(_.oldUri) &&
            _.string(_.newUri) &&
            (void 0 === _.options ||
              ((void 0 === _.options.overwrite ||
                _.boolean(_.options.overwrite)) &&
                (void 0 === _.options.ignoreIfExists ||
                  _.boolean(_.options.ignoreIfExists)))) &&
            (void 0 === _.annotationId || _._(_.annotationId))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          let _ = {
            kind: "delete",
            uri: _,
          };
          return (
            void 0 === _ ||
              (void 0 === _.recursive && void 0 === _.ignoreIfNotExists) ||
              (_.options = _),
            void 0 !== _ && (_.annotationId = _),
            _
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _ &&
            "delete" === _.kind &&
            _.string(_.uri) &&
            (void 0 === _.options ||
              ((void 0 === _.options.recursive ||
                _.boolean(_.options.recursive)) &&
                (void 0 === _.options.ignoreIfNotExists ||
                  _.boolean(_.options.ignoreIfNotExists)))) &&
            (void 0 === _.annotationId || _._(_.annotationId))
          );
        }),
        ((_ || (_ = {}))._ = function (_) {
          let _ = _;
          return (
            _ &&
            (void 0 !== _.changes || void 0 !== _.documentChanges) &&
            (void 0 === _.documentChanges ||
              _.documentChanges.every((_) =>
                _.string(_.kind) ? _._(_) || _._(_) || _._(_) : _._(_),
              ))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_) {
          return {
            uri: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return _.defined(_) && _.string(_.uri);
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            uri: _,
            version: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return _.defined(_) && _.string(_.uri) && _.integer(_.version);
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            uri: _,
            version: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) &&
            _.string(_.uri) &&
            (null === _.version || _.integer(_.version))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _) {
          return {
            uri: _,
            languageId: _,
            version: _,
            text: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) &&
            _.string(_.uri) &&
            _.string(_.languageId) &&
            _.integer(_.version) &&
            _.string(_.text)
          );
        }),
        ((_ = _ || (_ = {})).PlainText = "plaintext"),
        (_.Markdown = "markdown"),
        (_._ = function (_) {
          const _ = _;
          return _ === _.PlainText || _ === _.Markdown;
        }),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return _.objectLiteral(_) && _._(_.kind) && _.string(_.value);
        }),
        ((_ = _ || (_ = {})).Text = 1),
        (_.Method = 2),
        (_.Function = 3),
        (_.Constructor = 4),
        (_.Field = 5),
        (_.Variable = 6),
        (_.Class = 7),
        (_.Interface = 8),
        (_.Module = 9),
        (_.Property = 10),
        (_.Unit = 11),
        (_.Value = 12),
        (_.Enum = 13),
        (_.Keyword = 14),
        (_.Snippet = 15),
        (_.Color = 16),
        (_.File = 17),
        (_.Reference = 18),
        (_.Folder = 19),
        (_.EnumMember = 20),
        (_.Constant = 21),
        (_.Struct = 22),
        (_.Event = 23),
        (_.Operator = 24),
        (_.TypeParameter = 25),
        ((_ = _ || (_ = {})).PlainText = 1),
        (_.Snippet = 2),
        ((_ || (_ = {})).Deprecated = 1),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          return {
            newText: _,
            insert: _,
            replace: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return _ && _.string(_.newText) && _._(_.insert) && _._(_.replace);
        }),
        ((_ = _ || (_ = {})).asIs = 1),
        (_.adjustIndentation = 2),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return (
            _ &&
            (_.string(_.detail) || void 0 === _.detail) &&
            (_.string(_.description) || void 0 === _.description)
          );
        }),
        ((_ || (_ = {})).create = function (_) {
          return {
            label: _,
          };
        }),
        ((_ || (_ = {})).create = function (_, _) {
          return {
            items: _ || [],
            isIncomplete: !!_,
          };
        }),
        ((_ = _ || (_ = {})).fromPlainText = function (_) {
          return _.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.string(_) ||
            (_.objectLiteral(_) && _.string(_.language) && _.string(_.value))
          );
        }),
        ((_ || (_ = {}))._ = function (_) {
          let _ = _;
          return (
            !!_ &&
            _.objectLiteral(_) &&
            (_._(_.contents) ||
              _._(_.contents) ||
              _.typedArray(_.contents, _._)) &&
            (void 0 === _.range || _._(_.range))
          );
        }),
        ((_ || (_ = {})).create = function (_, _) {
          return _
            ? {
                label: _,
                documentation: _,
              }
            : {
                label: _,
              };
        }),
        ((_ || (_ = {})).create = function (_, _, ...__webpack_require__) {
          let _ = {
            label: _,
          };
          return (
            _.defined(_) && (_.documentation = _),
            _.defined(__webpack_require__)
              ? (_.parameters = __webpack_require__)
              : (_.parameters = []),
            _
          );
        }),
        ((_ = _ || (_ = {})).Text = 1),
        (_.Read = 2),
        (_.Write = 3),
        ((_ || (_ = {})).create = function (_, _) {
          let _ = {
            range: _,
          };
          return _.number(_) && (_.kind = _), _;
        }),
        ((_ = _ || (_ = {})).File = 1),
        (_.Module = 2),
        (_.Namespace = 3),
        (_.Package = 4),
        (_.Class = 5),
        (_.Method = 6),
        (_.Property = 7),
        (_.Field = 8),
        (_.Constructor = 9),
        (_.Enum = 10),
        (_.Interface = 11),
        (_.Function = 12),
        (_.Variable = 13),
        (_.Constant = 14),
        (_.String = 15),
        (_.Number = 16),
        (_.Boolean = 17),
        (_.Array = 18),
        (_.Object = 19),
        (_.Key = 20),
        (_.Null = 21),
        (_.EnumMember = 22),
        (_.Struct = 23),
        (_.Event = 24),
        (_.Operator = 25),
        (_.TypeParameter = 26),
        ((_ || (_ = {})).Deprecated = 1),
        ((_ || (_ = {})).create = function (_, _, _, _, _) {
          let _ = {
            name: _,
            kind: _,
            location: {
              uri: _,
              range: _,
            },
          };
          return _ && (_.containerName = _), _;
        }),
        ((_ || (_ = {})).create = function (_, _, _, _) {
          return void 0 !== _
            ? {
                name: _,
                kind: _,
                location: {
                  uri: _,
                  range: _,
                },
              }
            : {
                name: _,
                kind: _,
                location: {
                  uri: _,
                },
              };
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _, _, _, _) {
          let _ = {
            name: _,
            detail: _,
            kind: _,
            range: _,
            selectionRange: _,
          };
          return void 0 !== _ && (_.children = _), _;
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _ &&
            _.string(_.name) &&
            _.number(_.kind) &&
            _._(_.range) &&
            _._(_.selectionRange) &&
            (void 0 === _.detail || _.string(_.detail)) &&
            (void 0 === _.deprecated || _.boolean(_.deprecated)) &&
            (void 0 === _.children || Array.isArray(_.children)) &&
            (void 0 === _.tags || Array.isArray(_.tags))
          );
        }),
        ((_ = _ || (_ = {})).Empty = ""),
        (_.QuickFix = "quickfix"),
        (_.Refactor = "refactor"),
        (_.RefactorExtract = "refactor.extract"),
        (_.RefactorInline = "refactor.inline"),
        (_.RefactorRewrite = "refactor.rewrite"),
        (_.Source = "source"),
        (_.SourceOrganizeImports = "source.organizeImports"),
        (_.SourceFixAll = "source.fixAll"),
        ((_ = _ || (_ = {})).Invoked = 1),
        (_.Automatic = 2),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          let _ = {
            diagnostics: _,
          };
          return null != _ && (_.only = _), null != _ && (_.triggerKind = _), _;
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) &&
            _.typedArray(_.diagnostics, _._) &&
            (void 0 === _.only || _.typedArray(_.only, _.string)) &&
            (void 0 === _.triggerKind ||
              _.triggerKind === _.Invoked ||
              _.triggerKind === _.Automatic)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          let _ = {
              title: _,
            },
            _ = !0;
          return (
            "string" == typeof _
              ? ((_ = !1), (_.kind = _))
              : _._(_)
                ? (_.command = _)
                : (_.edit = _),
            _ && void 0 !== _ && (_.kind = _),
            _
          );
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _ &&
            _.string(_.title) &&
            (void 0 === _.diagnostics || _.typedArray(_.diagnostics, _._)) &&
            (void 0 === _.kind || _.string(_.kind)) &&
            (void 0 !== _.edit || void 0 !== _.command) &&
            (void 0 === _.command || _._(_.command)) &&
            (void 0 === _.isPreferred || _.boolean(_.isPreferred)) &&
            (void 0 === _.edit || _._(_.edit))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          let _ = {
            range: _,
          };
          return _.defined(_) && (_.data = _), _;
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) &&
            _._(_.range) &&
            (_.undefined(_.command) || _._(_.command))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            tabSize: _,
            insertSpaces: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) && _.uinteger(_.tabSize) && _.boolean(_.insertSpaces)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          return {
            range: _,
            target: _,
            data: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.defined(_) &&
            _._(_.range) &&
            (_.undefined(_.target) || _.string(_.target))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            range: _,
            parent: _,
          };
        }),
        (_._ = function (_) {
          let _ = _;
          return (
            _.objectLiteral(_) &&
            _._(_.range) &&
            (void 0 === _.parent || _._(_.parent))
          );
        }),
        ((_ = _ || (_ = {})).namespace = "namespace"),
        (_.type = "type"),
        (_.class = "class"),
        (_.enum = "enum"),
        (_.interface = "interface"),
        (_.struct = "struct"),
        (_.typeParameter = "typeParameter"),
        (_.parameter = "parameter"),
        (_.variable = "variable"),
        (_.property = "property"),
        (_.enumMember = "enumMember"),
        (_.event = "event"),
        (_.function = "function"),
        (_.method = "method"),
        (_.macro = "macro"),
        (_.keyword = "keyword"),
        (_.modifier = "modifier"),
        (_.comment = "comment"),
        (_.string = "string"),
        (_.number = "number"),
        (_.regexp = "regexp"),
        (_.operator = "operator"),
        (_.decorator = "decorator"),
        ((_ = _ || (_ = {})).declaration = "declaration"),
        (_.definition = "definition"),
        (_.readonly = "readonly"),
        (_.static = "static"),
        (_.deprecated = "deprecated"),
        (_.abstract = "abstract"),
        (_.async = "async"),
        (_.modification = "modification"),
        (_.documentation = "documentation"),
        (_.defaultLibrary = "defaultLibrary"),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            (void 0 === _.resultId || "string" == typeof _.resultId) &&
            Array.isArray(_.data) &&
            (0 === _.data.length || "number" == typeof _.data[0])
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            range: _,
            text: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return null != _ && _._(_.range) && _.string(_.text);
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          return {
            range: _,
            variableName: _,
            caseSensitiveLookup: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            null != _ &&
            _._(_.range) &&
            _.boolean(_.caseSensitiveLookup) &&
            (_.string(_.variableName) || void 0 === _.variableName)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            range: _,
            expression: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            null != _ &&
            _._(_.range) &&
            (_.string(_.expression) || void 0 === _.expression)
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _) {
          return {
            frameId: _,
            stoppedLocation: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return _.defined(_) && _._(_.stoppedLocation);
        }),
        ((_ = _ || (_ = {})).Type = 1),
        (_.Parameter = 2),
        (_._ = function (_) {
          return 1 === _ || 2 === _;
        }),
        ((_ = _ || (_ = {})).create = function (_) {
          return {
            value: _,
          };
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            _.objectLiteral(_) &&
            (void 0 === _.tooltip || _.string(_.tooltip) || _._(_.tooltip)) &&
            (void 0 === _.location || _._(_.location)) &&
            (void 0 === _.command || _._(_.command))
          );
        }),
        ((_ = _ || (_ = {})).create = function (_, _, _) {
          const _ = {
            position: _,
            label: _,
          };
          return void 0 !== _ && (_.kind = _), _;
        }),
        (_._ = function (_) {
          const _ = _;
          return (
            (_.objectLiteral(_) &&
              _._(_.position) &&
              (_.string(_.label) || _.typedArray(_.label, _._)) &&
              (void 0 === _.kind || _._(_.kind)) &&
              void 0 === _.textEdits) ||
            (_.typedArray(_.textEdits, _._) &&
              (void 0 === _.tooltip || _.string(_.tooltip) || _._(_.tooltip)) &&
              (void 0 === _.paddingLeft || _.boolean(_.paddingLeft)) &&
              (void 0 === _.paddingRight || _.boolean(_.paddingRight)))
          );
        }),
        ((_ || (_ = {})).createSnippet = function (_) {
          return {
            kind: "snippet",
            value: _,
          };
        }),
        ((_ || (_ = {})).create = function (_, _, _, _) {
          return {
            insertText: _,
            filterText: _,
            range: _,
            command: _,
          };
        }),
        ((_ || (_ = {})).create = function (_) {
          return {
            items: _,
          };
        }),
        ((_ = _ || (_ = {})).Invoked = 0),
        (_.Automatic = 1),
        ((_ || (_ = {})).create = function (_, _) {
          return {
            range: _,
            text: _,
          };
        }),
        ((_ || (_ = {})).create = function (_, _) {
          return {
            triggerKind: _,
            selectedCompletionInfo: _,
          };
        }),
        ((_ || (_ = {}))._ = function (_) {
          const _ = _;
          return _.objectLiteral(_) && _._(_.uri) && _.string(_.name);
        }),
        (function (_) {
          function _(_, _) {
            if (_.length <= 1) return _;
            const _ = (_.length / 2) | 0,
              _ = _.slice(0, _),
              _ = _.slice(_);
            _(_, _), _(_, _);
            let _ = 0,
              _ = 0,
              _ = 0;
            for (; _ < _.length && _ < _.length; ) {
              let _ = __webpack_require__(_[_], _[_]);
              _[_++] = _ <= 0 ? _[_++] : _[_++];
            }
            for (; _ < _.length; ) _[_++] = _[_++];
            for (; _ < _.length; ) _[_++] = _[_++];
            return _;
          }
          (_.create = function (_, _, _, _) {
            return new _(_, _, _, _);
          }),
            (_._ = function (_) {
              let _ = _;
              return !!(
                _.defined(_) &&
                _.string(_.uri) &&
                (_.undefined(_.languageId) || _.string(_.languageId)) &&
                _.uinteger(_.lineCount) &&
                _.func(_.getText) &&
                _.func(_.positionAt) &&
                _.func(_.offsetAt)
              );
            }),
            (_.applyEdits = function (_, _) {
              let _ = _.getText(),
                _ = _(_, (_, _) => {
                  let _ = _.range.start.line - _.range.start.line;
                  return 0 === _
                    ? _.range.start.character - _.range.start.character
                    : _;
                }),
                _ = _.length;
              for (let _ = _.length - 1; _ >= 0; _--) {
                let _ = _[_],
                  _ = _.offsetAt(_.range.start),
                  _ = _.offsetAt(_.range.end);
                if (!(_ <= _)) throw new Error("Overlapping edit");
                (_ = _.substring(0, _) + _.newText + _.substring(_, _.length)),
                  (_ = _);
              }
              return _;
            });
        })(_ || (_ = {}));
      var _,
        _ = class {
          constructor(_, _, _, _) {
            (this._uri = _),
              (this._languageId = _),
              (this._version = _),
              (this._content = _),
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
          getText(_) {
            if (_) {
              let _ = this.offsetAt(_.start),
                _ = this.offsetAt(_.end);
              return this._content.substring(_, _);
            }
            return this._content;
          }
          update(_, _) {
            (this._content = _.text),
              (this._version = _),
              (this._lineOffsets = void 0);
          }
          getLineOffsets() {
            if (void 0 === this._lineOffsets) {
              let _ = [],
                _ = this._content,
                _ = !0;
              for (let _ = 0; _ < _.length; _++) {
                _ && (_.push(_), (_ = !1));
                let _ = _.charAt(_);
                (_ = "\r" === _ || "\n" === _),
                  "\r" === _ &&
                    _ + 1 < _.length &&
                    "\n" === _.charAt(_ + 1) &&
                    _++;
              }
              _ && _.length > 0 && _.push(_.length), (this._lineOffsets = _);
            }
            return this._lineOffsets;
          }
          positionAt(_) {
            _ = Math.max(Math.min(_, this._content.length), 0);
            let _ = this.getLineOffsets(),
              _ = 0,
              _ = _.length;
            if (0 === _) return _.create(0, _);
            for (; _ < _; ) {
              let _ = Math.floor((_ + _) / 2);
              _[_] > _ ? (_ = _) : (_ = _ + 1);
            }
            let _ = _ - 1;
            return _.create(_, _ - _[_]);
          }
          offsetAt(_) {
            let _ = this.getLineOffsets();
            if (_.line >= _.length) return this._content.length;
            if (_.line < 0) return 0;
            let _ = _[_.line],
              _ = _.line + 1 < _.length ? _[_.line + 1] : this._content.length;
            return Math.max(Math.min(_ + _.character, _), _);
          }
          get lineCount() {
            return this.getLineOffsets().length;
          }
        };
      !(function (_) {
        const _ = Object.prototype.toString;
        (_.defined = function (_) {
          return void 0 !== _;
        }),
          (_.undefined = function (_) {
            return void 0 === _;
          }),
          (_.boolean = function (_) {
            return !0 === _ || !1 === _;
          }),
          (_.string = function (_) {
            return "[object String]" === _.call(_);
          }),
          (_.number = function (_) {
            return "[object Number]" === _.call(_);
          }),
          (_.numberRange = function (_, _, _) {
            return "[object Number]" === _.call(_) && _ <= _ && _ <= _;
          }),
          (_.integer = function (_) {
            return (
              "[object Number]" === _.call(_) &&
              -2147483648 <= _ &&
              _ <= 2147483647
            );
          }),
          (_.uinteger = function (_) {
            return "[object Number]" === _.call(_) && 0 <= _ && _ <= 2147483647;
          }),
          (_.func = function (_) {
            return "[object Function]" === _.call(_);
          }),
          (_.objectLiteral = function (_) {
            return null !== _ && "object" == typeof _;
          }),
          (_.typedArray = function (_, _) {
            return Array.isArray(_) && _.every(_);
          });
      })(_ || (_ = {}));
      var _ = class {
        constructor(_, _, _) {
          (this._languageId = _),
            (this._worker = _),
            (this._disposables = []),
            (this._listener = Object.create(null));
          const _ = (_) => {
              let _,
                _ = _.getLanguageId();
              _ === this._languageId &&
                ((this._listener[_.uri.toString()] = _.onDidChangeContent(
                  () => {
                    window.clearTimeout(_),
                      (_ = window.setTimeout(
                        () => this._doValidate(_.uri, _),
                        500,
                      ));
                  },
                )),
                this._doValidate(_.uri, _));
            },
            _ = (_) => {
              _.editor.setModelMarkers(_, this._languageId, []);
              let _ = _.uri.toString(),
                _ = this._listener[_];
              _ && (__webpack_require__.dispose(), delete this._listener[_]);
            };
          this._disposables.push(_.editor.onDidCreateModel(_)),
            this._disposables.push(_.editor.onWillDisposeModel(_)),
            this._disposables.push(
              _.editor.onDidChangeModelLanguage((_) => {
                _(_.model), _(_.model);
              }),
            ),
            this._disposables.push(
              __webpack_require__((_) => {
                _.editor.getModels().forEach((_) => {
                  _.getLanguageId() === this._languageId && (_(_), _(_));
                });
              }),
            ),
            this._disposables.push({
              dispose: () => {
                _.editor.getModels().forEach(_);
                for (let _ in this._listener) this._listener[_].dispose();
              },
            }),
            _.editor.getModels().forEach(_);
        }
        dispose() {
          this._disposables.forEach((_) => _ && _.dispose()),
            (this._disposables.length = 0);
        }
        _doValidate(_, _) {
          this._worker(_)
            .then((_) => _.doValidation(_.toString()))
            .then((_) => {
              const _ = __webpack_require__.map((_) =>
                (function (_, _) {
                  let _ = "number" == typeof _.code ? String(_.code) : _.code;
                  return {
                    severity: _(_.severity),
                    startLineNumber: _.range.start.line + 1,
                    startColumn: _.range.start.character + 1,
                    endLineNumber: _.range.end.line + 1,
                    endColumn: _.range.end.character + 1,
                    message: _.message,
                    code: _,
                    source: _.source,
                  };
                })(0, _),
              );
              let _ = _.editor.getModel(_);
              _ && _.getLanguageId() === _ && _.editor.setModelMarkers(_, _, _);
            })
            .then(void 0, (_) => {
              console.error(_);
            });
        }
      };
      function _(_) {
        switch (_) {
          case _.Error:
            return _.MarkerSeverity.Error;
          case _.Warning:
            return _.MarkerSeverity.Warning;
          case _.Information:
            return _.MarkerSeverity.Info;
          case _.Hint:
            return _.MarkerSeverity.Hint;
          default:
            return _.MarkerSeverity.Info;
        }
      }
      var _ = class {
        constructor(_, _) {
          (this._worker = _), (this._triggerCharacters = _);
        }
        get triggerCharacters() {
          return this._triggerCharacters;
        }
        provideCompletionItems(_, _, _, _) {
          const _ = _.uri;
          return this._worker(_)
            .then((_) => _.doComplete(_.toString(), _(_)))
            .then((_) => {
              if (!_) return;
              const _ = _.getWordUntilPosition(_),
                _ = new _.Range(
                  _.lineNumber,
                  _.startColumn,
                  _.lineNumber,
                  _.endColumn,
                ),
                _ = _.items.map((_) => {
                  const _ = {
                    label: _.label,
                    insertText: _.insertText || _.label,
                    sortText: _.sortText,
                    filterText: _.filterText,
                    documentation: _.documentation,
                    detail: _.detail,
                    command:
                      ((_ = _.command),
                      _ && "editor.action.triggerSuggest" === _.command
                        ? {
                            _: _.command,
                            title: _.title,
                            arguments: _.arguments,
                          }
                        : void 0),
                    range: _,
                    kind: _(_.kind),
                  };
                  var _, _;
                  return (
                    _.textEdit &&
                      (void 0 !== (_ = _.textEdit).insert &&
                      void 0 !== _.replace
                        ? (_.range = {
                            insert: _(_.textEdit.insert),
                            replace: _(_.textEdit.replace),
                          })
                        : (_.range = _(_.textEdit.range)),
                      (_.insertText = _.textEdit.newText)),
                    _.additionalTextEdits &&
                      (_.additionalTextEdits = _.additionalTextEdits.map(_)),
                    _.insertTextFormat === _.Snippet &&
                      (_.insertTextRules =
                        _.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                    _
                  );
                });
              return {
                isIncomplete: _.isIncomplete,
                suggestions: _,
              };
            });
        }
      };
      function _(_) {
        if (_)
          return {
            character: _.column - 1,
            line: _.lineNumber - 1,
          };
      }
      function _(_) {
        if (_)
          return {
            start: {
              line: _.startLineNumber - 1,
              character: _.startColumn - 1,
            },
            end: {
              line: _.endLineNumber - 1,
              character: _.endColumn - 1,
            },
          };
      }
      function _(_) {
        if (_)
          return new _.Range(
            _.start.line + 1,
            _.start.character + 1,
            _.end.line + 1,
            _.end.character + 1,
          );
      }
      function _(_) {
        const _ = _.languages.CompletionItemKind;
        switch (_) {
          case _.Text:
            return _.Text;
          case _.Method:
            return _.Method;
          case _.Function:
            return _.Function;
          case _.Constructor:
            return _.Constructor;
          case _.Field:
            return _.Field;
          case _.Variable:
            return _.Variable;
          case _.Class:
            return _.Class;
          case _.Interface:
            return _.Interface;
          case _.Module:
            return _.Module;
          case _.Property:
            return _.Property;
          case _.Unit:
            return _.Unit;
          case _.Value:
            return _.Value;
          case _.Enum:
            return _.Enum;
          case _.Keyword:
            return _.Keyword;
          case _.Snippet:
            return _.Snippet;
          case _.Color:
            return _.Color;
          case _.File:
            return _.File;
          case _.Reference:
            return _.Reference;
        }
        return _.Property;
      }
      function _(_) {
        if (_)
          return {
            range: _(_.range),
            text: _.newText,
          };
      }
      var _ = class {
        constructor(_) {
          this._worker = _;
        }
        provideHover(_, _, _) {
          let _ = _.uri;
          return this._worker(_)
            .then((_) => _.doHover(_.toString(), _(_)))
            .then((_) => {
              if (_)
                return {
                  range: _(_.range),
                  contents: _(_.contents),
                };
            });
        }
      };
      function _(_) {
        return "string" == typeof _
          ? {
              value: _,
            }
          : (_ = _) && "object" == typeof _ && "string" == typeof _.kind
            ? "plaintext" === _.kind
              ? {
                  value: _.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"),
                }
              : {
                  value: _.value,
                }
            : {
                value: "```" + _.language + "\n" + _.value + "\n```\n",
              };
        var _;
      }
      function _(_) {
        if (_) return Array.isArray(_) ? _.map(_) : [_(_)];
      }
      var _ = class {
        constructor(_) {
          this._worker = _;
        }
        provideDocumentHighlights(_, _, _) {
          const _ = _.uri;
          return this._worker(_)
            .then((_) => _.findDocumentHighlights(_.toString(), _(_)))
            .then((_) => {
              if (_)
                return _.map((_) => ({
                  range: _(_.range),
                  kind: _(_.kind),
                }));
            });
        }
      };
      function _(_) {
        switch (_) {
          case _.Read:
            return _.languages.DocumentHighlightKind.Read;
          case _.Write:
            return _.languages.DocumentHighlightKind.Write;
          case _.Text:
            return _.languages.DocumentHighlightKind.Text;
        }
        return _.languages.DocumentHighlightKind.Text;
      }
      var _ = class {
        constructor(_) {
          this._worker = _;
        }
        provideDefinition(_, _, _) {
          const _ = _.uri;
          return this._worker(_)
            .then((_) => _.findDefinition(_.toString(), _(_)))
            .then((_) => {
              if (_) return [_(_)];
            });
        }
      };
      function _(_) {
        return {
          uri: _.Uri.parse(_.uri),
          range: _(_.range),
        };
      }
      var _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideReferences(_, _, _, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) => _.findReferences(_.toString(), _(_)))
              .then((_) => {
                if (_) return _.map(_);
              });
          }
        },
        _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideRenameEdits(_, _, _, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) => _.doRename(_.toString(), _(_), _))
              .then((_) =>
                (function (_) {
                  if (!_ || !_.changes) return;
                  let _ = [];
                  for (let _ in _.changes) {
                    const _ = _.Uri.parse(_);
                    for (let _ of _.changes[_])
                      _.push({
                        resource: _,
                        versionId: void 0,
                        textEdit: {
                          range: _(_.range),
                          text: _.newText,
                        },
                      });
                  }
                  return {
                    edits: _,
                  };
                })(_),
              );
          }
        };
      var _ = class {
        constructor(_) {
          this._worker = _;
        }
        provideDocumentSymbols(_, _) {
          const _ = _.uri;
          return this._worker(_)
            .then((_) => _.findDocumentSymbols(__webpack_require__.toString()))
            .then((_) => {
              if (_)
                return _.map((_) =>
                  "children" in _
                    ? _(_)
                    : {
                        name: _.name,
                        detail: "",
                        containerName: _.containerName,
                        kind: _(_.kind),
                        range: _(_.location.range),
                        selectionRange: _(_.location.range),
                        tags: [],
                      },
                );
            });
        }
      };
      function _(_) {
        return {
          name: _.name,
          detail: _.detail ?? "",
          kind: _(_.kind),
          range: _(_.range),
          selectionRange: _(_.selectionRange),
          tags: _.tags ?? [],
          children: (_.children ?? []).map((_) => _(_)),
        };
      }
      function _(_) {
        let _ = _.languages.SymbolKind;
        switch (_) {
          case _.File:
            return _.File;
          case _.Module:
            return _.Module;
          case _.Namespace:
            return _.Namespace;
          case _.Package:
            return _.Package;
          case _.Class:
            return _.Class;
          case _.Method:
            return _.Method;
          case _.Property:
            return _.Property;
          case _.Field:
            return _.Field;
          case _.Constructor:
            return _.Constructor;
          case _.Enum:
            return _.Enum;
          case _.Interface:
            return _.Interface;
          case _.Function:
            return _.Function;
          case _.Variable:
            return _.Variable;
          case _.Constant:
            return _.Constant;
          case _.String:
            return _.String;
          case _.Number:
            return _.Number;
          case _.Boolean:
            return _.Boolean;
          case _.Array:
            return _.Array;
        }
        return _.Function;
      }
      var _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideLinks(_, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) => _.findDocumentLinks(__webpack_require__.toString()))
              .then((_) => {
                if (_)
                  return {
                    links: _.map((_) => ({
                      range: _(_.range),
                      url: _.target,
                    })),
                  };
              });
          }
        },
        _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideDocumentFormattingEdits(_, _, _) {
            const _ = _.uri;
            return this._worker(_).then((_) =>
              _.format(_.toString(), null, _(_)).then((_) => {
                if (_ && 0 !== _.length) return _.map(_);
              }),
            );
          }
        },
        _ = class {
          constructor(_) {
            (this._worker = _), (this.canFormatMultipleRanges = !1);
          }
          provideDocumentRangeFormattingEdits(_, _, _, _) {
            const _ = _.uri;
            return this._worker(_).then((_) =>
              _.format(_.toString(), _(_), _(_)).then((_) => {
                if (_ && 0 !== _.length) return _.map(_);
              }),
            );
          }
        };
      function _(_) {
        return {
          tabSize: _.tabSize,
          insertSpaces: _.insertSpaces,
        };
      }
      var _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideDocumentColors(_, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) => _.findDocumentColors(__webpack_require__.toString()))
              .then((_) => {
                if (_)
                  return _.map((_) => ({
                    color: _.color,
                    range: _(_.range),
                  }));
              });
          }
          provideColorPresentations(_, _, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) =>
                _.getColorPresentations(_.toString(), _.color, _(_.range)),
              )
              .then((_) => {
                if (_)
                  return _.map((_) => {
                    let _ = {
                      label: _.label,
                    };
                    return (
                      _.textEdit && (_.textEdit = _(_.textEdit)),
                      _.additionalTextEdits &&
                        (_.additionalTextEdits = _.additionalTextEdits.map(_)),
                      _
                    );
                  });
              });
          }
        },
        _ = class {
          constructor(_) {
            this._worker = _;
          }
          provideFoldingRanges(_, _, _) {
            const _ = _.uri;
            return this._worker(_)
              .then((_) => _.getFoldingRanges(_.toString(), _))
              .then((_) => {
                if (_)
                  return _.map((_) => {
                    const _ = {
                      start: _.startLine + 1,
                      end: _.endLine + 1,
                    };
                    return (
                      void 0 !== _.kind &&
                        (_.kind = (function (_) {
                          switch (_) {
                            case _.Comment:
                              return _.languages.FoldingRangeKind.Comment;
                            case _.Imports:
                              return _.languages.FoldingRangeKind.Imports;
                            case _.Region:
                              return _.languages.FoldingRangeKind.Region;
                          }
                          return;
                        })(_.kind)),
                      _
                    );
                  });
              });
          }
        };
      var _ = class {
        constructor(_) {
          this._worker = _;
        }
        provideSelectionRanges(_, _, _) {
          const _ = _.uri;
          return this._worker(_)
            .then((_) => _.getSelectionRanges(_.toString(), _.map(_)))
            .then((_) => {
              if (_)
                return _.map((_) => {
                  const _ = [];
                  for (; _; )
                    _.push({
                      range: _(_.range),
                    }),
                      (_ = _.parent);
                  return _;
                });
            });
        }
      };
      function _(_) {
        const _ = [],
          _ = [],
          _ = new _(_);
        _.push(_);
        const _ = (..._) => _.getLanguageServiceWorker(..._);
        return (
          (function () {
            const { languageId: _, modeConfiguration: _ } = _;
            _(_),
              _.completionItems &&
                __webpack_require__.push(
                  _.languages.registerCompletionItemProvider(
                    _,
                    new _(_, ["/", "-", ":"]),
                  ),
                ),
              _.hovers &&
                __webpack_require__.push(
                  _.languages.registerHoverProvider(_, new _(_)),
                ),
              _.documentHighlights &&
                __webpack_require__.push(
                  _.languages.registerDocumentHighlightProvider(_, new _(_)),
                ),
              _.definitions &&
                __webpack_require__.push(
                  _.languages.registerDefinitionProvider(_, new _(_)),
                ),
              _.references &&
                __webpack_require__.push(
                  _.languages.registerReferenceProvider(_, new _(_)),
                ),
              _.documentSymbols &&
                __webpack_require__.push(
                  _.languages.registerDocumentSymbolProvider(_, new _(_)),
                ),
              _.rename &&
                __webpack_require__.push(
                  _.languages.registerRenameProvider(_, new _(_)),
                ),
              _.colors &&
                __webpack_require__.push(
                  _.languages.registerColorProvider(_, new _(_)),
                ),
              _.foldingRanges &&
                __webpack_require__.push(
                  _.languages.registerFoldingRangeProvider(_, new _(_)),
                ),
              _.diagnostics &&
                __webpack_require__.push(new _(_, _, _.onDidChange)),
              _.selectionRanges &&
                __webpack_require__.push(
                  _.languages.registerSelectionRangeProvider(_, new _(_)),
                ),
              _.documentFormattingEdits &&
                __webpack_require__.push(
                  _.languages.registerDocumentFormattingEditProvider(
                    _,
                    new _(_),
                  ),
                ),
              _.documentRangeFormattingEdits &&
                __webpack_require__.push(
                  _.languages.registerDocumentRangeFormattingEditProvider(
                    _,
                    new _(_),
                  ),
                );
          })(),
          _.push(_(_)),
          _(_)
        );
      }
      function _(_) {
        return {
          dispose: () => _(_),
        };
      }
      function _(_) {
        for (; _.length; ) _.pop().dispose();
      }
    },
  },
]);
