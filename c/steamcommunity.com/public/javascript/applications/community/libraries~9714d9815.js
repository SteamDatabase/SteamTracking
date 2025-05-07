(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4922],
  {
    chunkid: function (module) {
      module.exports = (function () {
        "use strict";
        function _(_, _) {
          var _ = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            _ &&
              (_ = _.filter(function (_) {
                return Object.getOwnPropertyDescriptor(_, _).enumerable;
              })),
              _.push.apply(_, _);
          }
          return _;
        }
        function _(_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = null != arguments[_] ? arguments[_] : {};
            _ % 2
              ? _(Object(_), !0).forEach(function (_) {
                  _(_, _, _[_]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : _(Object(_)).forEach(function (_) {
                    Object.defineProperty(
                      _,
                      _,
                      Object.getOwnPropertyDescriptor(_, _),
                    );
                  });
          }
          return _;
        }
        function _(_) {
          return (
            (_ =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      "function" == typeof Symbol &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _(_, _) {
          if (!(_ instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(_, _) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            (_.enumerable = _.enumerable || !1),
              (_.configurable = !0),
              "value" in _ && (_.writable = !0),
              Object.defineProperty(_, _(_.key), _);
          }
        }
        function _(_, _, _) {
          return (
            _ && _(_.prototype, _),
            _ && _(_, _),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)) in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          return _(_) || _(_) || _(_) || _();
        }
        function _(_) {
          if (Array.isArray(_)) return _(_);
        }
        function _(_) {
          if (
            ("undefined" != typeof Symbol && null != _[Symbol.iterator]) ||
            null != _["@@iterator"]
          )
            return Array.from(_);
        }
        function _(_, _) {
          if (_) {
            if ("string" == typeof _) return _(_, _);
            var _ = Object.prototype.toString.call(_).slice(8, -1);
            return (
              "Object" === _ && _.constructor && (_ = _.constructor.name),
              "Map" === _ || "Set" === _
                ? Array.from(_)
                : "Arguments" === _ ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
                  ? _(_, _)
                  : void 0
            );
          }
        }
        function _(_, _) {
          (null == _ || _ > _.length) && (_ = _.length);
          for (var _ = 0, _ = new Array(_); _ < _; _++) _[_] = _[_];
          return _;
        }
        function _() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        function _(_, _) {
          if ("object" != typeof _ || null === _) return _;
          var _ = _[Symbol.toPrimitive];
          if (void 0 !== _) {
            var _ = _.call(_, _ || "default");
            if ("object" != typeof _) return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === _ ? String : Number)(_);
        }
        function _(_) {
          var _ = _(_, "string");
          return "symbol" == typeof _ ? _ : String(_);
        }
        var _ = "undefined" != typeof window && void 0 !== window.document,
          _ = _ ? window : {},
          _ =
            !(!_ || !_.document.documentElement) &&
            "ontouchstart" in _.document.documentElement,
          _ = !!_ && "PointerEvent" in _,
          _ = "cropper",
          _ = "all",
          _ = "crop",
          _ = "move",
          _ = "zoom",
          _ = "e",
          _ = "w",
          _ = "s",
          _ = "n",
          _ = "ne",
          _ = "nw",
          _ = "se",
          _ = "sw",
          _ = "".concat(_, "-crop"),
          _ = "".concat(_, "-disabled"),
          _ = "".concat(_, "-hidden"),
          _ = "".concat(_, "-hide"),
          _ = "".concat(_, "-invisible"),
          _ = "".concat(_, "-modal"),
          _ = "".concat(_, "-move"),
          _ = "".concat(_, "Action"),
          _ = "".concat(_, "Preview"),
          _ = "crop",
          _ = "move",
          _ = "none",
          _ = "crop",
          _ = "cropend",
          _ = "cropmove",
          _ = "cropstart",
          _ = "dblclick",
          _ = _ ? "touchstart" : "mousedown",
          _ = _ ? "touchmove" : "mousemove",
          _ = _ ? "touchend touchcancel" : "mouseup",
          _ = _ ? "pointerdown" : _,
          _ = _ ? "pointermove" : _,
          _ = _ ? "pointerup pointercancel" : _,
          _ = "ready",
          _ = "resize",
          _ = "wheel",
          _ = "zoom",
          _ = "image/jpeg",
          _ = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
          _ = /^data:/,
          _ = /^data:image\/jpeg;base64,/,
          _ = /^img|canvas$/i,
          _ = 200,
          _ = 100,
          _ = {
            viewMode: 0,
            dragMode: _,
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: 0.8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: 0.1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: _,
            minContainerHeight: _,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null,
          },
          _ =
            '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
          _ = Number.isNaN || _.isNaN;
        function _(_) {
          return "number" == typeof _ && !_(_);
        }
        var _ = function (_) {
          return _ > 0 && _ < 1 / 0;
        };
        function _(_) {
          return void 0 === _;
        }
        function _(_) {
          return "object" === _(_) && null !== _;
        }
        var _ = Object.prototype.hasOwnProperty;
        function _(_) {
          if (!_(_)) return !1;
          try {
            var _ = _.constructor,
              _ = _.prototype;
            return _ && _ && _.call(_, "isPrototypeOf");
          } catch (_) {
            return !1;
          }
        }
        function _(_) {
          return "function" == typeof _;
        }
        var _ = Array.prototype.slice;
        function _(_) {
          return Array.from ? Array.from(_) : _.call(_);
        }
        function _(_, _) {
          return (
            _ &&
              _(_) &&
              (Array.isArray(_) || _(_.length)
                ? _(_).forEach(function (_, _) {
                    _.call(_, _, _, _);
                  })
                : _(_) &&
                  Object.keys(_).forEach(function (_) {
                    _.call(_, _[_], _, _);
                  })),
            _
          );
        }
        var _ =
            Object.assign ||
            function (_) {
              for (
                var _ = arguments.length,
                  _ = new Array(_ > 1 ? _ - 1 : 0),
                  _ = 1;
                _ < _;
                _++
              )
                _[_ - 1] = arguments[_];
              return (
                _(_) &&
                  _.length > 0 &&
                  _.forEach(function (_) {
                    _(_) &&
                      Object.keys(_).forEach(function (_) {
                        _[_] = _[_];
                      });
                  }),
                _
              );
            },
          _ = /\.\d*(?:0|9){12}\d*$/;
        function _(_) {
          var _ =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e11;
          return _.test(_) ? Math.round(_ * _) / _ : _;
        }
        var _ = /^width|height|left|top|marginLeft|marginTop$/;
        function _(_, _) {
          var _ = _.style;
          _(_, function (_, _) {
            _.test(_) && _(_) && (_ = "".concat(_, "px")), (_[_] = _);
          });
        }
        function _(_, _) {
          return _.classList
            ? _.classList.contains(_)
            : _.className.indexOf(_) > -1;
        }
        function _(_, _) {
          if (_)
            if (_(_.length))
              _(_, function (_) {
                _(_, _);
              });
            else if (_.classList) _.classList.add(_);
            else {
              var _ = _.className.trim();
              _
                ? _.indexOf(_) < 0 &&
                  (_.className = "".concat(_, " ").concat(_))
                : (_.className = _);
            }
        }
        function _(_, _) {
          _ &&
            (_(_.length)
              ? _(_, function (_) {
                  _(_, _);
                })
              : _.classList
                ? _.classList.remove(_)
                : _.className.indexOf(_) >= 0 &&
                  (_.className = _.className.replace(_, "")));
        }
        function _(_, _, _) {
          _ &&
            (_(_.length)
              ? _(_, function (_) {
                  _(_, _, _);
                })
              : _
                ? _(_, _)
                : _(_, _));
        }
        var _ = /([a-z\d])([A-Z])/g;
        function _(_) {
          return _.replace(_, "$1-$2").toLowerCase();
        }
        function _(_, _) {
          return _(_[_])
            ? _[_]
            : _.dataset
              ? _.dataset[_]
              : _.getAttribute("data-".concat(_(_)));
        }
        function _(_, _, _) {
          _(_)
            ? (_[_] = _)
            : _.dataset
              ? (_.dataset[_] = _)
              : _.setAttribute("data-".concat(_(_)), _);
        }
        function _(_, _) {
          if (_(_[_]))
            try {
              delete _[_];
            } catch (_) {
              _[_] = void 0;
            }
          else if (_.dataset)
            try {
              delete _.dataset[_];
            } catch (_) {
              _.dataset[_] = void 0;
            }
          else _.removeAttribute("data-".concat(_(_)));
        }
        var _ = /\s\s*/,
          _ = (function () {
            var _ = !1;
            if (_) {
              var _ = !1,
                _ = function () {},
                _ = Object.defineProperty({}, "once", {
                  get: function () {
                    return (_ = !0), _;
                  },
                  set: function (_) {
                    _ = _;
                  },
                });
              _.addEventListener("test", _, _),
                _.removeEventListener("test", _, _);
            }
            return _;
          })();
        function _(_, _, _) {
          var _ =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            _ = _;
          _.trim()
            .split(_)
            .forEach(function (_) {
              if (!_) {
                var _ = _.listeners;
                _ &&
                  _[_] &&
                  _[_][_] &&
                  ((_ = _[_][_]),
                  delete _[_][_],
                  0 === Object.keys(_[_]).length && delete _[_],
                  0 === Object.keys(_).length && delete _.listeners);
              }
              _.removeEventListener(_, _, _);
            });
        }
        function _(_, _, _) {
          var _ =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            _ = _;
          _.trim()
            .split(_)
            .forEach(function (_) {
              if (_.once && !_) {
                var _ = _.listeners,
                  _ = void 0 === _ ? {} : _;
                (_ = function () {
                  delete _[_][_], _.removeEventListener(_, _, _);
                  for (
                    var _ = arguments.length, _ = new Array(_), _ = 0;
                    _ < _;
                    _++
                  )
                    _[_] = arguments[_];
                  _.apply(_, _);
                }),
                  _[_] || (_[_] = {}),
                  _[_][_] && _.removeEventListener(_, _[_][_], _),
                  (_[_][_] = _),
                  (_.listeners = _);
              }
              _.addEventListener(_, _, _);
            });
        }
        function _(_, _, _) {
          var _;
          return (
            _(Event) && _(CustomEvent)
              ? (_ = new CustomEvent(_, {
                  detail: _,
                  bubbles: !0,
                  cancelable: !0,
                }))
              : (_ = document.createEvent("CustomEvent")).initCustomEvent(
                  _,
                  !0,
                  !0,
                  _,
                ),
            _.dispatchEvent(_)
          );
        }
        function _(_) {
          var _ = _.getBoundingClientRect();
          return {
            left:
              _.left +
              (window.pageXOffset - document.documentElement.clientLeft),
            top:
              _.top + (window.pageYOffset - document.documentElement.clientTop),
          };
        }
        var _ = _.location,
          _ = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
        function _(_) {
          var _ = _.match(_);
          return (
            null !== _ &&
            (_[1] !== _.protocol || _[2] !== _.hostname || _[3] !== _.port)
          );
        }
        function _(_) {
          var _ = "timestamp=".concat(new Date().getTime());
          return _ + (-1 === _.indexOf("?") ? "?" : "&") + _;
        }
        function _(_) {
          var _ = _.rotate,
            _ = _.scaleX,
            _ = _.scaleY,
            _ = _.translateX,
            _ = _.translateY,
            _ = [];
          _(_) && 0 !== _ && _.push("translateX(".concat(_, "px)")),
            _(_) && 0 !== _ && _.push("translateY(".concat(_, "px)")),
            _(_) && 0 !== _ && _.push("rotate(".concat(_, "deg)")),
            _(_) && 1 !== _ && _.push("scaleX(".concat(_, ")")),
            _(_) && 1 !== _ && _.push("scaleY(".concat(_, ")"));
          var _ = _.length ? _.join(" ") : "none";
          return {
            WebkitTransform: _,
            msTransform: _,
            transform: _,
          };
        }
        function _(_) {
          var _ = _({}, _),
            _ = 0;
          return (
            _(_, function (_, _) {
              delete _[_],
                _(_, function (_) {
                  var _ = Math.abs(_.startX - _.startX),
                    _ = Math.abs(_.startY - _.startY),
                    _ = Math.abs(_.endX - _.endX),
                    _ = Math.abs(_.endY - _.endY),
                    _ = Math.sqrt(_ * _ + _ * _),
                    _ = (Math.sqrt(_ * _ + _ * _) - _) / _;
                  Math.abs(_) > Math.abs(_) && (_ = _);
                });
            }),
            _
          );
        }
        function _(_, _) {
          var _ = _.pageX,
            _ = _.pageY,
            _ = {
              endX: _,
              endY: _,
            };
          return _
            ? _
            : _(
                {
                  startX: _,
                  startY: _,
                },
                _,
              );
        }
        function _(_) {
          var _ = 0,
            _ = 0,
            _ = 0;
          return (
            _(_, function (_) {
              var _ = _.startX,
                _ = _.startY;
              (_ += _), (_ += _), (_ += 1);
            }),
            {
              pageX: (_ /= _),
              pageY: (_ /= _),
            }
          );
        }
        function _(_) {
          var _ = _.aspectRatio,
            _ = _.height,
            _ = _.width,
            _ =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "contain",
            _ = _(_),
            _ = _(_);
          if (_ && _) {
            var _ = _ * _;
            ("contain" === _ && _ > _) || ("cover" === _ && _ < _)
              ? (_ = _ / _)
              : (_ = _ * _);
          } else _ ? (_ = _ / _) : _ && (_ = _ * _);
          return {
            width: _,
            height: _,
          };
        }
        function _(_) {
          var _ = _.width,
            _ = _.height,
            _ = _.degree;
          if (90 == (_ = Math.abs(_) % 180))
            return {
              width: _,
              height: _,
            };
          var _ = ((_ % 90) * Math._) / 180,
            _ = Math.sin(_),
            _ = Math.cos(_),
            _ = _ * _ + _ * _,
            _ = _ * _ + _ * _;
          return _ > 90
            ? {
                width: _,
                height: _,
              }
            : {
                width: _,
                height: _,
              };
        }
        function _(_, _, _, _) {
          var _ = _.aspectRatio,
            _ = _.naturalWidth,
            _ = _.naturalHeight,
            _ = _.rotate,
            _ = void 0 === _ ? 0 : _,
            _ = _.scaleX,
            _ = void 0 === _ ? 1 : _,
            _ = _.scaleY,
            _ = void 0 === _ ? 1 : _,
            _ = _.aspectRatio,
            _ = _.naturalWidth,
            _ = _.naturalHeight,
            _ = _.fillColor,
            _ = void 0 === _ ? "transparent" : _,
            _ = _.imageSmoothingEnabled,
            _ = void 0 === _ || _,
            _ = _.imageSmoothingQuality,
            _ = void 0 === _ ? "low" : _,
            _ = _.maxWidth,
            _ = void 0 === _ ? 1 / 0 : _,
            _ = _.maxHeight,
            _ = void 0 === _ ? 1 / 0 : _,
            _ = _.minWidth,
            _ = void 0 === _ ? 0 : _,
            _ = _.minHeight,
            _ = void 0 === _ ? 0 : _,
            _ = document.createElement("canvas"),
            _ = _.getContext("2d"),
            _ = _({
              aspectRatio: _,
              width: _,
              height: _,
            }),
            _ = _(
              {
                aspectRatio: _,
                width: _,
                height: _,
              },
              "cover",
            ),
            _ = Math.min(_.width, Math.max(_.width, _)),
            _ = Math.min(_.height, Math.max(_.height, _)),
            _ = _({
              aspectRatio: _,
              width: _,
              height: _,
            }),
            _ = _(
              {
                aspectRatio: _,
                width: _,
                height: _,
              },
              "cover",
            ),
            _ = Math.min(_.width, Math.max(_.width, _)),
            _ = Math.min(_.height, Math.max(_.height, _)),
            _ = [-_ / 2, -_ / 2, _, _];
          return (
            (_.width = _(_)),
            (_.height = _(_)),
            (_.fillStyle = _),
            _.fillRect(0, 0, _, _),
            _.save(),
            _.translate(_ / 2, _ / 2),
            _.rotate((_ * Math._) / 180),
            _.scale(_, _),
            (_.imageSmoothingEnabled = _),
            (_.imageSmoothingQuality = _),
            _.drawImage.apply(
              _,
              [_].concat(
                _(
                  _.map(function (_) {
                    return Math.floor(_(_));
                  }),
                ),
              ),
            ),
            _.restore(),
            _
          );
        }
        var _ = String.fromCharCode;
        function _(_, _, _) {
          var _ = "";
          _ += _;
          for (var _ = _; _ < _; _ += 1) _ += _(_.getUint8(_));
          return _;
        }
        var _ = /^data:.*,/;
        function _(_) {
          var _ = _.replace(_, ""),
            _ = atob(_),
            _ = new ArrayBuffer(_.length),
            _ = new Uint8Array(_);
          return (
            _(_, function (_, _) {
              _[_] = _.charCodeAt(_);
            }),
            _
          );
        }
        function _(_, _) {
          for (var _ = [], _ = 8192, _ = new Uint8Array(_); _.length > 0; )
            _.push(_.apply(null, _(_.subarray(0, _)))), (_ = _.subarray(_));
          return "data:".concat(_, ";base64,").concat(btoa(_.join("")));
        }
        function _(_) {
          var _,
            _ = new DataView(_);
          try {
            var _, _, _;
            if (255 === _.getUint8(0) && 216 === _.getUint8(1))
              for (var _ = _.byteLength, _ = 2; _ + 1 < _; ) {
                if (255 === _.getUint8(_) && 225 === _.getUint8(_ + 1)) {
                  _ = _;
                  break;
                }
                _ += 1;
              }
            if (_) {
              var _ = _ + 10;
              if ("Exif" === _(_, _ + 4, 4)) {
                var _ = _.getUint16(_);
                if (
                  ((_ = 18761 === _) || 19789 === _) &&
                  42 === _.getUint16(_ + 2, _)
                ) {
                  var _ = _.getUint32(_ + 4, _);
                  _ >= 8 && (_ = _ + _);
                }
              }
            }
            if (_) {
              var _,
                _,
                _ = _.getUint16(_, _);
              for (_ = 0; _ < _; _ += 1)
                if (((_ = _ + 12 * _ + 2), 274 === _.getUint16(_, _))) {
                  (_ += 8), (_ = _.getUint16(_, _)), _.setUint16(_, 1, _);
                  break;
                }
            }
          } catch (_) {
            _ = 1;
          }
          return _;
        }
        function _(_) {
          var _ = 0,
            _ = 1,
            _ = 1;
          switch (_) {
            case 2:
              _ = -1;
              break;
            case 3:
              _ = -180;
              break;
            case 4:
              _ = -1;
              break;
            case 5:
              (_ = 90), (_ = -1);
              break;
            case 6:
              _ = 90;
              break;
            case 7:
              (_ = 90), (_ = -1);
              break;
            case 8:
              _ = -90;
          }
          return {
            rotate: _,
            scaleX: _,
            scaleY: _,
          };
        }
        var _ = {
            render: function () {
              this.initContainer(),
                this.initCanvas(),
                this.initCropBox(),
                this.renderCanvas(),
                this.cropped && this.renderCropBox();
            },
            initContainer: function () {
              var _ = this.element,
                _ = this.options,
                _ = this.container,
                _ = this.cropper,
                _ = Number(_.minContainerWidth),
                _ = Number(_.minContainerHeight);
              _(_, _), _(_, _);
              var _ = {
                width: Math.max(_.offsetWidth, _ >= 0 ? _ : _),
                height: Math.max(_.offsetHeight, _ >= 0 ? _ : _),
              };
              (this.containerData = _),
                _(_, {
                  width: _.width,
                  height: _.height,
                }),
                _(_, _),
                _(_, _);
            },
            initCanvas: function () {
              var _ = this.containerData,
                _ = this.imageData,
                _ = this.options.viewMode,
                _ = Math.abs(_.rotate) % 180 == 90,
                _ = _ ? _.naturalHeight : _.naturalWidth,
                _ = _ ? _.naturalWidth : _.naturalHeight,
                _ = _ / _,
                _ = _.width,
                _ = _.height;
              _.height * _ > _.width
                ? 3 === _
                  ? (_ = _.height * _)
                  : (_ = _.width / _)
                : 3 === _
                  ? (_ = _.width / _)
                  : (_ = _.height * _);
              var _ = {
                aspectRatio: _,
                naturalWidth: _,
                naturalHeight: _,
                width: _,
                height: _,
              };
              (this.canvasData = _),
                (this.limited = 1 === _ || 2 === _),
                this.limitCanvas(!0, !0),
                (_.width = Math.min(Math.max(_.width, _.minWidth), _.maxWidth)),
                (_.height = Math.min(
                  Math.max(_.height, _.minHeight),
                  _.maxHeight,
                )),
                (_.left = (_.width - _.width) / 2),
                (_.top = (_.height - _.height) / 2),
                (_.oldLeft = _.left),
                (_.oldTop = _.top),
                (this.initialCanvasData = _({}, _));
            },
            limitCanvas: function (_, _) {
              var _ = this.options,
                _ = this.containerData,
                _ = this.canvasData,
                _ = this.cropBoxData,
                _ = _.viewMode,
                _ = _.aspectRatio,
                _ = this.cropped && _;
              if (_) {
                var _ = Number(_.minCanvasWidth) || 0,
                  _ = Number(_.minCanvasHeight) || 0;
                _ > 1
                  ? ((_ = Math.max(_, _.width)),
                    (_ = Math.max(_, _.height)),
                    3 === _ && (_ * _ > _ ? (_ = _ * _) : (_ = _ / _)))
                  : _ > 0 &&
                    (_
                      ? (_ = Math.max(_, _ ? _.width : 0))
                      : _
                        ? (_ = Math.max(_, _ ? _.height : 0))
                        : _ &&
                          ((_ = _.width),
                          (_ = _.height) * _ > _ ? (_ = _ * _) : (_ = _ / _)));
                var _ = _({
                  aspectRatio: _,
                  width: _,
                  height: _,
                });
                (_ = _.width),
                  (_ = _.height),
                  (_.minWidth = _),
                  (_.minHeight = _),
                  (_.maxWidth = 1 / 0),
                  (_.maxHeight = 1 / 0);
              }
              if (_)
                if (_ > (_ ? 0 : 1)) {
                  var _ = _.width - _.width,
                    _ = _.height - _.height;
                  (_.minLeft = Math.min(0, _)),
                    (_.minTop = Math.min(0, _)),
                    (_.maxLeft = Math.max(0, _)),
                    (_.maxTop = Math.max(0, _)),
                    _ &&
                      this.limited &&
                      ((_.minLeft = Math.min(
                        _.left,
                        _.left + (_.width - _.width),
                      )),
                      (_.minTop = Math.min(
                        _.top,
                        _.top + (_.height - _.height),
                      )),
                      (_.maxLeft = _.left),
                      (_.maxTop = _.top),
                      2 === _ &&
                        (_.width >= _.width &&
                          ((_.minLeft = Math.min(0, _)),
                          (_.maxLeft = Math.max(0, _))),
                        _.height >= _.height &&
                          ((_.minTop = Math.min(0, _)),
                          (_.maxTop = Math.max(0, _)))));
                } else
                  (_.minLeft = -_.width),
                    (_.minTop = -_.height),
                    (_.maxLeft = _.width),
                    (_.maxTop = _.height);
            },
            renderCanvas: function (_, _) {
              var _ = this.canvasData,
                _ = this.imageData;
              if (_) {
                var _ = _({
                    width: _.naturalWidth * Math.abs(_.scaleX || 1),
                    height: _.naturalHeight * Math.abs(_.scaleY || 1),
                    degree: _.rotate || 0,
                  }),
                  _ = _.width,
                  _ = _.height,
                  _ = _.width * (_ / _.naturalWidth),
                  _ = _.height * (_ / _.naturalHeight);
                (_.left -= (_ - _.width) / 2),
                  (_.top -= (_ - _.height) / 2),
                  (_.width = _),
                  (_.height = _),
                  (_.aspectRatio = _ / _),
                  (_.naturalWidth = _),
                  (_.naturalHeight = _),
                  this.limitCanvas(!0, !1);
              }
              (_.width > _.maxWidth || _.width < _.minWidth) &&
                (_.left = _.oldLeft),
                (_.height > _.maxHeight || _.height < _.minHeight) &&
                  (_.top = _.oldTop),
                (_.width = Math.min(Math.max(_.width, _.minWidth), _.maxWidth)),
                (_.height = Math.min(
                  Math.max(_.height, _.minHeight),
                  _.maxHeight,
                )),
                this.limitCanvas(!1, !0),
                (_.left = Math.min(Math.max(_.left, _.minLeft), _.maxLeft)),
                (_.top = Math.min(Math.max(_.top, _.minTop), _.maxTop)),
                (_.oldLeft = _.left),
                (_.oldTop = _.top),
                _(
                  this.canvas,
                  _(
                    {
                      width: _.width,
                      height: _.height,
                    },
                    _({
                      translateX: _.left,
                      translateY: _.top,
                    }),
                  ),
                ),
                this.renderImage(_),
                this.cropped && this.limited && this.limitCropBox(!0, !0);
            },
            renderImage: function (_) {
              var _ = this.canvasData,
                _ = this.imageData,
                _ = _.naturalWidth * (_.width / _.naturalWidth),
                _ = _.naturalHeight * (_.height / _.naturalHeight);
              _(_, {
                width: _,
                height: _,
                left: (_.width - _) / 2,
                top: (_.height - _) / 2,
              }),
                _(
                  this.image,
                  _(
                    {
                      width: _.width,
                      height: _.height,
                    },
                    _(
                      _(
                        {
                          translateX: _.left,
                          translateY: _.top,
                        },
                        _,
                      ),
                    ),
                  ),
                ),
                _ && this.output();
            },
            initCropBox: function () {
              var _ = this.options,
                _ = this.canvasData,
                _ = _.aspectRatio || _.initialAspectRatio,
                _ = Number(_.autoCropArea) || 0.8,
                _ = {
                  width: _.width,
                  height: _.height,
                };
              _ &&
                (_.height * _ > _.width
                  ? (_.height = _.width / _)
                  : (_.width = _.height * _)),
                (this.cropBoxData = _),
                this.limitCropBox(!0, !0),
                (_.width = Math.min(Math.max(_.width, _.minWidth), _.maxWidth)),
                (_.height = Math.min(
                  Math.max(_.height, _.minHeight),
                  _.maxHeight,
                )),
                (_.width = Math.max(_.minWidth, _.width * _)),
                (_.height = Math.max(_.minHeight, _.height * _)),
                (_.left = _.left + (_.width - _.width) / 2),
                (_.top = _.top + (_.height - _.height) / 2),
                (_.oldLeft = _.left),
                (_.oldTop = _.top),
                (this.initialCropBoxData = _({}, _));
            },
            limitCropBox: function (_, _) {
              var _ = this.options,
                _ = this.containerData,
                _ = this.canvasData,
                _ = this.cropBoxData,
                _ = this.limited,
                _ = _.aspectRatio;
              if (_) {
                var _ = Number(_.minCropBoxWidth) || 0,
                  _ = Number(_.minCropBoxHeight) || 0,
                  _ = _
                    ? Math.min(
                        _.width,
                        _.width,
                        _.width + _.left,
                        _.width - _.left,
                      )
                    : _.width,
                  _ = _
                    ? Math.min(
                        _.height,
                        _.height,
                        _.height + _.top,
                        _.height - _.top,
                      )
                    : _.height;
                (_ = Math.min(_, _.width)),
                  (_ = Math.min(_, _.height)),
                  _ &&
                    (_ && _
                      ? _ * _ > _
                        ? (_ = _ / _)
                        : (_ = _ * _)
                      : _
                        ? (_ = _ / _)
                        : _ && (_ = _ * _),
                    _ * _ > _ ? (_ = _ / _) : (_ = _ * _)),
                  (_.minWidth = Math.min(_, _)),
                  (_.minHeight = Math.min(_, _)),
                  (_.maxWidth = _),
                  (_.maxHeight = _);
              }
              _ &&
                (_
                  ? ((_.minLeft = Math.max(0, _.left)),
                    (_.minTop = Math.max(0, _.top)),
                    (_.maxLeft = Math.min(_.width, _.left + _.width) - _.width),
                    (_.maxTop =
                      Math.min(_.height, _.top + _.height) - _.height))
                  : ((_.minLeft = 0),
                    (_.minTop = 0),
                    (_.maxLeft = _.width - _.width),
                    (_.maxTop = _.height - _.height)));
            },
            renderCropBox: function () {
              var _ = this.options,
                _ = this.containerData,
                _ = this.cropBoxData;
              (_.width > _.maxWidth || _.width < _.minWidth) &&
                (_.left = _.oldLeft),
                (_.height > _.maxHeight || _.height < _.minHeight) &&
                  (_.top = _.oldTop),
                (_.width = Math.min(Math.max(_.width, _.minWidth), _.maxWidth)),
                (_.height = Math.min(
                  Math.max(_.height, _.minHeight),
                  _.maxHeight,
                )),
                this.limitCropBox(!1, !0),
                (_.left = Math.min(Math.max(_.left, _.minLeft), _.maxLeft)),
                (_.top = Math.min(Math.max(_.top, _.minTop), _.maxTop)),
                (_.oldLeft = _.left),
                (_.oldTop = _.top),
                _.movable &&
                  _.cropBoxMovable &&
                  _(
                    this.face,
                    _,
                    _.width >= _.width && _.height >= _.height ? _ : _,
                  ),
                _(
                  this.cropBox,
                  _(
                    {
                      width: _.width,
                      height: _.height,
                    },
                    _({
                      translateX: _.left,
                      translateY: _.top,
                    }),
                  ),
                ),
                this.cropped && this.limited && this.limitCanvas(!0, !0),
                this.disabled || this.output();
            },
            output: function () {
              this.preview(), _(this.element, _, this.getData());
            },
          },
          _ = {
            initPreview: function () {
              var _ = this.element,
                _ = this.crossOrigin,
                _ = this.options.preview,
                _ = _ ? this.crossOriginUrl : this.url,
                _ = _.alt || "The image to preview",
                _ = document.createElement("img");
              if (
                (_ && (_.crossOrigin = _),
                (_.src = _),
                (_.alt = _),
                this.viewBox.appendChild(_),
                (this.viewBoxImage = _),
                _)
              ) {
                var _ = _;
                "string" == typeof _
                  ? (_ = _.ownerDocument.querySelectorAll(_))
                  : _.querySelector && (_ = [_]),
                  (this.previews = _),
                  _(_, function (_) {
                    var _ = document.createElement("img");
                    _(_, _, {
                      width: _.offsetWidth,
                      height: _.offsetHeight,
                      html: _.innerHTML,
                    }),
                      _ && (_.crossOrigin = _),
                      (_.src = _),
                      (_.alt = _),
                      (_.style.cssText =
                        'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
                      (_.innerHTML = ""),
                      _.appendChild(_);
                  });
              }
            },
            resetPreview: function () {
              _(this.previews, function (_) {
                var _ = _(_, _);
                _(_, {
                  width: _.width,
                  height: _.height,
                }),
                  (_.innerHTML = _.html),
                  _(_, _);
              });
            },
            preview: function () {
              var _ = this.imageData,
                _ = this.canvasData,
                _ = this.cropBoxData,
                _ = _.width,
                _ = _.height,
                _ = _.width,
                _ = _.height,
                _ = _.left - _.left - _.left,
                _ = _.top - _.top - _.top;
              this.cropped &&
                !this.disabled &&
                (_(
                  this.viewBoxImage,
                  _(
                    {
                      width: _,
                      height: _,
                    },
                    _(
                      _(
                        {
                          translateX: -_,
                          translateY: -_,
                        },
                        _,
                      ),
                    ),
                  ),
                ),
                _(this.previews, function (_) {
                  var _ = _(_, _),
                    _ = _.width,
                    _ = _.height,
                    _ = _,
                    _ = _,
                    _ = 1;
                  _ && (_ = _ * (_ = _ / _)),
                    _ && _ > _ && ((_ = _ * (_ = _ / _)), (_ = _)),
                    _(_, {
                      width: _,
                      height: _,
                    }),
                    _(
                      _.getElementsByTagName("img")[0],
                      _(
                        {
                          width: _ * _,
                          height: _ * _,
                        },
                        _(
                          _(
                            {
                              translateX: -_ * _,
                              translateY: -_ * _,
                            },
                            _,
                          ),
                        ),
                      ),
                    );
                }));
            },
          },
          _ = {
            bind: function () {
              var _ = this.element,
                _ = this.options,
                _ = this.cropper;
              _(_.cropstart) && _(_, _, _.cropstart),
                _(_.cropmove) && _(_, _, _.cropmove),
                _(_.cropend) && _(_, _, _.cropend),
                _(_.crop) && _(_, _, _.crop),
                _(_.zoom) && _(_, _, _.zoom),
                _(_, _, (this.onCropStart = this.cropStart.bind(this))),
                _.zoomable &&
                  _.zoomOnWheel &&
                  _(_, _, (this.onWheel = this.wheel.bind(this)), {
                    passive: !1,
                    capture: !0,
                  }),
                _.toggleDragModeOnDblclick &&
                  _(_, _, (this.onDblclick = this.dblclick.bind(this))),
                _(
                  _.ownerDocument,
                  _,
                  (this.onCropMove = this.cropMove.bind(this)),
                ),
                _(
                  _.ownerDocument,
                  _,
                  (this.onCropEnd = this.cropEnd.bind(this)),
                ),
                _.responsive &&
                  _(window, _, (this.onResize = this.resize.bind(this)));
            },
            unbind: function () {
              var _ = this.element,
                _ = this.options,
                _ = this.cropper;
              _(_.cropstart) && _(_, _, _.cropstart),
                _(_.cropmove) && _(_, _, _.cropmove),
                _(_.cropend) && _(_, _, _.cropend),
                _(_.crop) && _(_, _, _.crop),
                _(_.zoom) && _(_, _, _.zoom),
                _(_, _, this.onCropStart),
                _.zoomable &&
                  _.zoomOnWheel &&
                  _(_, _, this.onWheel, {
                    passive: !1,
                    capture: !0,
                  }),
                _.toggleDragModeOnDblclick && _(_, _, this.onDblclick),
                _(_.ownerDocument, _, this.onCropMove),
                _(_.ownerDocument, _, this.onCropEnd),
                _.responsive && _(window, _, this.onResize);
            },
          },
          _ = {
            resize: function () {
              if (!this.disabled) {
                var _,
                  _,
                  _ = this.options,
                  _ = this.container,
                  _ = this.containerData,
                  _ = _.offsetWidth / _.width,
                  _ = _.offsetHeight / _.height,
                  _ = Math.abs(_ - 1) > Math.abs(_ - 1) ? _ : _;
                1 !== _ &&
                  (_.restore &&
                    ((_ = this.getCanvasData()), (_ = this.getCropBoxData())),
                  this.render(),
                  _.restore &&
                    (this.setCanvasData(
                      _(_, function (_, _) {
                        _[_] = _ * _;
                      }),
                    ),
                    this.setCropBoxData(
                      _(_, function (_, _) {
                        _[_] = _ * _;
                      }),
                    )));
              }
            },
            dblclick: function () {
              this.disabled ||
                this.options.dragMode === _ ||
                this.setDragMode(_(this.dragBox, _) ? _ : _);
            },
            wheel: function (_) {
              var _ = this,
                _ = Number(this.options.wheelZoomRatio) || 0.1,
                _ = 1;
              this.disabled ||
                (_.preventDefault(),
                this.wheeling ||
                  ((this.wheeling = !0),
                  setTimeout(function () {
                    _.wheeling = !1;
                  }, 50),
                  _.deltaY
                    ? (_ = _.deltaY > 0 ? 1 : -1)
                    : _.wheelDelta
                      ? (_ = -_.wheelDelta / 120)
                      : _.detail && (_ = _.detail > 0 ? 1 : -1),
                  this.zoom(-_ * _, _)));
            },
            cropStart: function (_) {
              var _ = _.buttons,
                _ = _.button;
              if (
                !(
                  this.disabled ||
                  (("mousedown" === _.type ||
                    ("pointerdown" === _.type && "mouse" === _.pointerType)) &&
                    ((_(_) && 1 !== _) || (_(_) && 0 !== _) || _.ctrlKey))
                )
              ) {
                var _,
                  _ = this.options,
                  _ = this.pointers;
                _.changedTouches
                  ? _(_.changedTouches, function (_) {
                      _[_.identifier] = _(_);
                    })
                  : (_[_.pointerId || 0] = _(_)),
                  (_ =
                    Object.keys(_).length > 1 && _.zoomable && _.zoomOnTouch
                      ? _
                      : _(_.target, _)),
                  _.test(_) &&
                    !1 !==
                      _(this.element, _, {
                        originalEvent: _,
                        action: _,
                      }) &&
                    (_.preventDefault(),
                    (this.action = _),
                    (this.cropping = !1),
                    _ === _ && ((this.cropping = !0), _(this.dragBox, _)));
              }
            },
            cropMove: function (_) {
              var _ = this.action;
              if (!this.disabled && _) {
                var _ = this.pointers;
                _.preventDefault(),
                  !1 !==
                    _(this.element, _, {
                      originalEvent: _,
                      action: _,
                    }) &&
                    (_.changedTouches
                      ? _(_.changedTouches, function (_) {
                          _(_[_.identifier] || {}, _(_, !0));
                        })
                      : _(_[_.pointerId || 0] || {}, _(_, !0)),
                    this.change(_));
              }
            },
            cropEnd: function (_) {
              if (!this.disabled) {
                var _ = this.action,
                  _ = this.pointers;
                _.changedTouches
                  ? _(_.changedTouches, function (_) {
                      delete _[_.identifier];
                    })
                  : delete _[_.pointerId || 0],
                  _ &&
                    (_.preventDefault(),
                    Object.keys(_).length || (this.action = ""),
                    this.cropping &&
                      ((this.cropping = !1),
                      _(this.dragBox, _, this.cropped && this.options.modal)),
                    _(this.element, _, {
                      originalEvent: _,
                      action: _,
                    }));
              }
            },
          },
          _ = {
            change: function (_) {
              var _,
                _ = this.options,
                _ = this.canvasData,
                _ = this.containerData,
                _ = this.cropBoxData,
                _ = this.pointers,
                _ = this.action,
                _ = _.aspectRatio,
                _ = _.left,
                _ = _.top,
                _ = _.width,
                _ = _.height,
                _ = _ + _,
                _ = _ + _,
                _ = 0,
                _ = 0,
                _ = _.width,
                _ = _.height,
                _ = !0;
              !_ && _.shiftKey && (_ = _ && _ ? _ / _ : 1),
                this.limited &&
                  ((_ = _.minLeft),
                  (_ = _.minTop),
                  (_ = _ + Math.min(_.width, _.width, _.left + _.width)),
                  (_ = _ + Math.min(_.height, _.height, _.top + _.height)));
              var _ = _[Object.keys(_)[0]],
                _ = {
                  _: _.endX - _.startX,
                  _: _.endY - _.startY,
                },
                _ = function (_) {
                  switch (_) {
                    case _:
                      _ + _._ > _ && (_._ = _ - _);
                      break;
                    case _:
                      _ + _._ < _ && (_._ = _ - _);
                      break;
                    case _:
                      _ + _._ < _ && (_._ = _ - _);
                      break;
                    case _:
                      _ + _._ > _ && (_._ = _ - _);
                  }
                };
              switch (_) {
                case _:
                  (_ += _._), (_ += _._);
                  break;
                case _:
                  if (_._ >= 0 && (_ >= _ || (_ && (_ <= _ || _ >= _)))) {
                    _ = !1;
                    break;
                  }
                  _(_),
                    (_ += _._) < 0 && ((_ = _), (_ -= _ = -_)),
                    _ && ((_ = _ / _), (_ += (_.height - _) / 2));
                  break;
                case _:
                  if (_._ <= 0 && (_ <= _ || (_ && (_ <= _ || _ >= _)))) {
                    _ = !1;
                    break;
                  }
                  _(_),
                    (_ -= _._),
                    (_ += _._),
                    _ < 0 && ((_ = _), (_ -= _ = -_)),
                    _ && ((_ = _ * _), (_ += (_.width - _) / 2));
                  break;
                case _:
                  if (_._ <= 0 && (_ <= _ || (_ && (_ <= _ || _ >= _)))) {
                    _ = !1;
                    break;
                  }
                  _(_),
                    (_ -= _._),
                    (_ += _._),
                    _ < 0 && ((_ = _), (_ -= _ = -_)),
                    _ && ((_ = _ / _), (_ += (_.height - _) / 2));
                  break;
                case _:
                  if (_._ >= 0 && (_ >= _ || (_ && (_ <= _ || _ >= _)))) {
                    _ = !1;
                    break;
                  }
                  _(_),
                    (_ += _._) < 0 && ((_ = _), (_ -= _ = -_)),
                    _ && ((_ = _ * _), (_ += (_.width - _) / 2));
                  break;
                case _:
                  if (_) {
                    if (_._ <= 0 && (_ <= _ || _ >= _)) {
                      _ = !1;
                      break;
                    }
                    _(_), (_ -= _._), (_ += _._), (_ = _ * _);
                  } else
                    _(_),
                      _(_),
                      _._ >= 0
                        ? _ < _
                          ? (_ += _._)
                          : _._ <= 0 && _ <= _ && (_ = !1)
                        : (_ += _._),
                      _._ <= 0
                        ? _ > _ && ((_ -= _._), (_ += _._))
                        : ((_ -= _._), (_ += _._));
                  _ < 0 && _ < 0
                    ? ((_ = _), (_ -= _ = -_), (_ -= _ = -_))
                    : _ < 0
                      ? ((_ = _), (_ -= _ = -_))
                      : _ < 0 && ((_ = _), (_ -= _ = -_));
                  break;
                case _:
                  if (_) {
                    if (_._ <= 0 && (_ <= _ || _ <= _)) {
                      _ = !1;
                      break;
                    }
                    _(_),
                      (_ -= _._),
                      (_ += _._),
                      (_ = _ * _),
                      (_ += _.width - _);
                  } else
                    _(_),
                      _(_),
                      _._ <= 0
                        ? _ > _
                          ? ((_ -= _._), (_ += _._))
                          : _._ <= 0 && _ <= _ && (_ = !1)
                        : ((_ -= _._), (_ += _._)),
                      _._ <= 0
                        ? _ > _ && ((_ -= _._), (_ += _._))
                        : ((_ -= _._), (_ += _._));
                  _ < 0 && _ < 0
                    ? ((_ = _), (_ -= _ = -_), (_ -= _ = -_))
                    : _ < 0
                      ? ((_ = _), (_ -= _ = -_))
                      : _ < 0 && ((_ = _), (_ -= _ = -_));
                  break;
                case _:
                  if (_) {
                    if (_._ <= 0 && (_ <= _ || _ >= _)) {
                      _ = !1;
                      break;
                    }
                    _(_), (_ -= _._), (_ += _._), (_ = _ / _);
                  } else
                    _(_),
                      _(_),
                      _._ <= 0
                        ? _ > _
                          ? ((_ -= _._), (_ += _._))
                          : _._ >= 0 && _ >= _ && (_ = !1)
                        : ((_ -= _._), (_ += _._)),
                      _._ >= 0 ? _ < _ && (_ += _._) : (_ += _._);
                  _ < 0 && _ < 0
                    ? ((_ = _), (_ -= _ = -_), (_ -= _ = -_))
                    : _ < 0
                      ? ((_ = _), (_ -= _ = -_))
                      : _ < 0 && ((_ = _), (_ -= _ = -_));
                  break;
                case _:
                  if (_) {
                    if (_._ >= 0 && (_ >= _ || _ >= _)) {
                      _ = !1;
                      break;
                    }
                    _(_), (_ = (_ += _._) / _);
                  } else
                    _(_),
                      _(_),
                      _._ >= 0
                        ? _ < _
                          ? (_ += _._)
                          : _._ >= 0 && _ >= _ && (_ = !1)
                        : (_ += _._),
                      _._ >= 0 ? _ < _ && (_ += _._) : (_ += _._);
                  _ < 0 && _ < 0
                    ? ((_ = _), (_ -= _ = -_), (_ -= _ = -_))
                    : _ < 0
                      ? ((_ = _), (_ -= _ = -_))
                      : _ < 0 && ((_ = _), (_ -= _ = -_));
                  break;
                case _:
                  this.move(_._, _._), (_ = !1);
                  break;
                case _:
                  this.zoom(_(_), _), (_ = !1);
                  break;
                case _:
                  if (!_._ || !_._) {
                    _ = !1;
                    break;
                  }
                  (_ = _(this.cropper)),
                    (_ = _.startX - _.left),
                    (_ = _.startY - _.top),
                    (_ = _.minWidth),
                    (_ = _.minHeight),
                    _._ > 0
                      ? (_ = _._ > 0 ? _ : _)
                      : _._ < 0 && ((_ -= _), (_ = _._ > 0 ? _ : _)),
                    _._ < 0 && (_ -= _),
                    this.cropped ||
                      (_(this.cropBox, _),
                      (this.cropped = !0),
                      this.limited && this.limitCropBox(!0, !0));
              }
              _ &&
                ((_.width = _),
                (_.height = _),
                (_.left = _),
                (_.top = _),
                (this.action = _),
                this.renderCropBox()),
                _(_, function (_) {
                  (_.startX = _.endX), (_.startY = _.endY);
                });
            },
          },
          _ = {
            crop: function () {
              return (
                !this.ready ||
                  this.cropped ||
                  this.disabled ||
                  ((this.cropped = !0),
                  this.limitCropBox(!0, !0),
                  this.options.modal && _(this.dragBox, _),
                  _(this.cropBox, _),
                  this.setCropBoxData(this.initialCropBoxData)),
                this
              );
            },
            reset: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.imageData = _({}, this.initialImageData)),
                  (this.canvasData = _({}, this.initialCanvasData)),
                  (this.cropBoxData = _({}, this.initialCropBoxData)),
                  this.renderCanvas(),
                  this.cropped && this.renderCropBox()),
                this
              );
            },
            clear: function () {
              return (
                this.cropped &&
                  !this.disabled &&
                  (_(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                  }),
                  (this.cropped = !1),
                  this.renderCropBox(),
                  this.limitCanvas(!0, !0),
                  this.renderCanvas(),
                  _(this.dragBox, _),
                  _(this.cropBox, _)),
                this
              );
            },
            replace: function (_) {
              var _ =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return (
                !this.disabled &&
                  _ &&
                  (this.isImg && (this.element.src = _),
                  _
                    ? ((this.url = _),
                      (this.image.src = _),
                      this.ready &&
                        ((this.viewBoxImage.src = _),
                        _(this.previews, function (_) {
                          _.getElementsByTagName("img")[0].src = _;
                        })))
                    : (this.isImg && (this.replaced = !0),
                      (this.options.data = null),
                      this.uncreate(),
                      this.load(_))),
                this
              );
            },
            enable: function () {
              return (
                this.ready &&
                  this.disabled &&
                  ((this.disabled = !1), _(this.cropper, _)),
                this
              );
            },
            disable: function () {
              return (
                this.ready &&
                  !this.disabled &&
                  ((this.disabled = !0), _(this.cropper, _)),
                this
              );
            },
            destroy: function () {
              var _ = this.element;
              return _[_]
                ? ((_[_] = void 0),
                  this.isImg && this.replaced && (_.src = this.originalUrl),
                  this.uncreate(),
                  this)
                : this;
            },
            move: function (_) {
              var _ =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : _,
                _ = this.canvasData,
                _ = _.left,
                _ = _.top;
              return this.moveTo(
                _(_) ? _ : _ + Number(_),
                _(_) ? _ : _ + Number(_),
              );
            },
            moveTo: function (_) {
              var _ =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : _,
                _ = this.canvasData,
                _ = !1;
              return (
                (_ = Number(_)),
                (_ = Number(_)),
                this.ready &&
                  !this.disabled &&
                  this.options.movable &&
                  (_(_) && ((_.left = _), (_ = !0)),
                  _(_) && ((_.top = _), (_ = !0)),
                  _ && this.renderCanvas(!0)),
                this
              );
            },
            zoom: function (_, _) {
              var _ = this.canvasData;
              return (
                (_ = (_ = Number(_)) < 0 ? 1 / (1 - _) : 1 + _),
                this.zoomTo((_.width * _) / _.naturalWidth, null, _)
              );
            },
            zoomTo: function (_, _, _) {
              var _ = this.options,
                _ = this.canvasData,
                _ = _.width,
                _ = _.height,
                _ = _.naturalWidth,
                _ = _.naturalHeight;
              if (
                (_ = Number(_)) >= 0 &&
                this.ready &&
                !this.disabled &&
                _.zoomable
              ) {
                var _ = _ * _,
                  _ = _ * _;
                if (
                  !1 ===
                  _(this.element, _, {
                    ratio: _,
                    oldRatio: _ / _,
                    originalEvent: _,
                  })
                )
                  return this;
                if (_) {
                  var _ = this.pointers,
                    _ = _(this.cropper),
                    _ =
                      _ && Object.keys(_).length
                        ? _(_)
                        : {
                            pageX: _.pageX,
                            pageY: _.pageY,
                          };
                  (_.left -= (_ - _) * ((_.pageX - _.left - _.left) / _)),
                    (_.top -= (_ - _) * ((_.pageY - _.top - _.top) / _));
                } else
                  _(_) && _(_._) && _(_._)
                    ? ((_.left -= (_ - _) * ((_._ - _.left) / _)),
                      (_.top -= (_ - _) * ((_._ - _.top) / _)))
                    : ((_.left -= (_ - _) / 2), (_.top -= (_ - _) / 2));
                (_.width = _), (_.height = _), this.renderCanvas(!0);
              }
              return this;
            },
            rotate: function (_) {
              return this.rotateTo((this.imageData.rotate || 0) + Number(_));
            },
            rotateTo: function (_) {
              return (
                _((_ = Number(_))) &&
                  this.ready &&
                  !this.disabled &&
                  this.options.rotatable &&
                  ((this.imageData.rotate = _ % 360),
                  this.renderCanvas(!0, !0)),
                this
              );
            },
            scaleX: function (_) {
              var _ = this.imageData.scaleY;
              return this.scale(_, _(_) ? _ : 1);
            },
            scaleY: function (_) {
              var _ = this.imageData.scaleX;
              return this.scale(_(_) ? _ : 1, _);
            },
            scale: function (_) {
              var _ =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : _,
                _ = this.imageData,
                _ = !1;
              return (
                (_ = Number(_)),
                (_ = Number(_)),
                this.ready &&
                  !this.disabled &&
                  this.options.scalable &&
                  (_(_) && ((_.scaleX = _), (_ = !0)),
                  _(_) && ((_.scaleY = _), (_ = !0)),
                  _ && this.renderCanvas(!0, !0)),
                this
              );
            },
            getData: function () {
              var _,
                _ =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                _ = this.options,
                _ = this.imageData,
                _ = this.canvasData,
                _ = this.cropBoxData;
              if (this.ready && this.cropped) {
                _ = {
                  _: _.left - _.left,
                  _: _.top - _.top,
                  width: _.width,
                  height: _.height,
                };
                var _ = _.width / _.naturalWidth;
                if (
                  (_(_, function (_, _) {
                    _[_] = _ / _;
                  }),
                  _)
                ) {
                  var _ = Math.round(_._ + _.height),
                    _ = Math.round(_._ + _.width);
                  (_._ = Math.round(_._)),
                    (_._ = Math.round(_._)),
                    (_.width = _ - _._),
                    (_.height = _ - _._);
                }
              } else
                _ = {
                  _: 0,
                  _: 0,
                  width: 0,
                  height: 0,
                };
              return (
                _.rotatable && (_.rotate = _.rotate || 0),
                _.scalable &&
                  ((_.scaleX = _.scaleX || 1), (_.scaleY = _.scaleY || 1)),
                _
              );
            },
            setData: function (_) {
              var _ = this.options,
                _ = this.imageData,
                _ = this.canvasData,
                _ = {};
              if (this.ready && !this.disabled && _(_)) {
                var _ = !1;
                _.rotatable &&
                  _(_.rotate) &&
                  _.rotate !== _.rotate &&
                  ((_.rotate = _.rotate), (_ = !0)),
                  _.scalable &&
                    (_(_.scaleX) &&
                      _.scaleX !== _.scaleX &&
                      ((_.scaleX = _.scaleX), (_ = !0)),
                    _(_.scaleY) &&
                      _.scaleY !== _.scaleY &&
                      ((_.scaleY = _.scaleY), (_ = !0))),
                  _ && this.renderCanvas(!0, !0);
                var _ = _.width / _.naturalWidth;
                _(_._) && (_.left = _._ * _ + _.left),
                  _(_._) && (_.top = _._ * _ + _.top),
                  _(_.width) && (_.width = _.width * _),
                  _(_.height) && (_.height = _.height * _),
                  this.setCropBoxData(_);
              }
              return this;
            },
            getContainerData: function () {
              return this.ready ? _({}, this.containerData) : {};
            },
            getImageData: function () {
              return this.sized ? _({}, this.imageData) : {};
            },
            getCanvasData: function () {
              var _ = this.canvasData,
                _ = {};
              return (
                this.ready &&
                  _(
                    [
                      "left",
                      "top",
                      "width",
                      "height",
                      "naturalWidth",
                      "naturalHeight",
                    ],
                    function (_) {
                      _[_] = _[_];
                    },
                  ),
                _
              );
            },
            setCanvasData: function (_) {
              var _ = this.canvasData,
                _ = _.aspectRatio;
              return (
                this.ready &&
                  !this.disabled &&
                  _(_) &&
                  (_(_.left) && (_.left = _.left),
                  _(_.top) && (_.top = _.top),
                  _(_.width)
                    ? ((_.width = _.width), (_.height = _.width / _))
                    : _(_.height) &&
                      ((_.height = _.height), (_.width = _.height * _)),
                  this.renderCanvas(!0)),
                this
              );
            },
            getCropBoxData: function () {
              var _,
                _ = this.cropBoxData;
              return (
                this.ready &&
                  this.cropped &&
                  (_ = {
                    left: _.left,
                    top: _.top,
                    width: _.width,
                    height: _.height,
                  }),
                _ || {}
              );
            },
            setCropBoxData: function (_) {
              var _,
                _,
                _ = this.cropBoxData,
                _ = this.options.aspectRatio;
              return (
                this.ready &&
                  this.cropped &&
                  !this.disabled &&
                  _(_) &&
                  (_(_.left) && (_.left = _.left),
                  _(_.top) && (_.top = _.top),
                  _(_.width) &&
                    _.width !== _.width &&
                    ((_ = !0), (_.width = _.width)),
                  _(_.height) &&
                    _.height !== _.height &&
                    ((_ = !0), (_.height = _.height)),
                  _ &&
                    (_
                      ? (_.height = _.width / _)
                      : _ && (_.width = _.height * _)),
                  this.renderCropBox()),
                this
              );
            },
            getCroppedCanvas: function () {
              var _ =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!this.ready || !window.HTMLCanvasElement) return null;
              var _ = this.canvasData,
                _ = _(this.image, this.imageData, _, _);
              if (!this.cropped) return _;
              var _ = this.getData(_.rounded),
                _ = _._,
                _ = _._,
                _ = _.width,
                _ = _.height,
                _ = _.width / Math.floor(_.naturalWidth);
              1 !== _ && ((_ *= _), (_ *= _), (_ *= _), (_ *= _));
              var _ = _ / _,
                _ = _({
                  aspectRatio: _,
                  width: _.maxWidth || 1 / 0,
                  height: _.maxHeight || 1 / 0,
                }),
                _ = _(
                  {
                    aspectRatio: _,
                    width: _.minWidth || 0,
                    height: _.minHeight || 0,
                  },
                  "cover",
                ),
                _ = _({
                  aspectRatio: _,
                  width: _.width || (1 !== _ ? _.width : _),
                  height: _.height || (1 !== _ ? _.height : _),
                }),
                _ = _.width,
                _ = _.height;
              (_ = Math.min(_.width, Math.max(_.width, _))),
                (_ = Math.min(_.height, Math.max(_.height, _)));
              var _ = document.createElement("canvas"),
                _ = _.getContext("2d");
              (_.width = _(_)),
                (_.height = _(_)),
                (_.fillStyle = _.fillColor || "transparent"),
                _.fillRect(0, 0, _, _);
              var _ = _.imageSmoothingEnabled,
                _ = void 0 === _ || _,
                _ = _.imageSmoothingQuality;
              (_.imageSmoothingEnabled = _), _ && (_.imageSmoothingQuality = _);
              var _,
                _,
                _,
                _,
                _,
                _,
                _ = _.width,
                _ = _.height,
                _ = _,
                _ = _;
              _ <= -_ || _ > _
                ? ((_ = 0), (_ = 0), (_ = 0), (_ = 0))
                : _ <= 0
                  ? ((_ = -_), (_ = 0), (_ = _ = Math.min(_, _ + _)))
                  : _ <= _ && ((_ = 0), (_ = _ = Math.min(_, _ - _))),
                _ <= 0 || _ <= -_ || _ > _
                  ? ((_ = 0), (_ = 0), (_ = 0), (_ = 0))
                  : _ <= 0
                    ? ((_ = -_), (_ = 0), (_ = _ = Math.min(_, _ + _)))
                    : _ <= _ && ((_ = 0), (_ = _ = Math.min(_, _ - _)));
              var _ = [_, _, _, _];
              if (_ > 0 && _ > 0) {
                var _ = _ / _;
                _.push(_ * _, _ * _, _ * _, _ * _);
              }
              return (
                _.drawImage.apply(
                  _,
                  [_].concat(
                    _(
                      _.map(function (_) {
                        return Math.floor(_(_));
                      }),
                    ),
                  ),
                ),
                _
              );
            },
            setAspectRatio: function (_) {
              var _ = this.options;
              return (
                this.disabled ||
                  _(_) ||
                  ((_.aspectRatio = Math.max(0, _) || NaN),
                  this.ready &&
                    (this.initCropBox(), this.cropped && this.renderCropBox())),
                this
              );
            },
            setDragMode: function (_) {
              var _ = this.options,
                _ = this.dragBox,
                _ = this.face;
              if (this.ready && !this.disabled) {
                var _ = _ === _,
                  _ = _.movable && _ === _;
                (_ = _ || _ ? _ : _),
                  (_.dragMode = _),
                  _(_, _, _),
                  _(_, _, _),
                  _(_, _, _),
                  _.cropBoxMovable || (_(_, _, _), _(_, _, _), _(_, _, _));
              }
              return this;
            },
          },
          _ = _.Cropper,
          _ = (function () {
            function _(_) {
              var _ =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((_(this, _), !_ || !_.test(_.tagName)))
                throw new Error(
                  "The first argument is required and must be an <img> or <canvas> element.",
                );
              (this.element = _),
                (this.options = _({}, _, _(_) && _)),
                (this.cropped = !1),
                (this.disabled = !1),
                (this.pointers = {}),
                (this.ready = !1),
                (this.reloading = !1),
                (this.replaced = !1),
                (this.sized = !1),
                (this.sizing = !1),
                this.init();
            }
            return (
              _(
                _,
                [
                  {
                    key: "init",
                    value: function () {
                      var _,
                        _ = this.element,
                        _ = _.tagName.toLowerCase();
                      if (!_[_]) {
                        if (((_[_] = this), "img" === _)) {
                          if (
                            ((this.isImg = !0),
                            (_ = _.getAttribute("src") || ""),
                            (this.originalUrl = _),
                            !_)
                          )
                            return;
                          _ = _.src;
                        } else
                          "canvas" === _ &&
                            window.HTMLCanvasElement &&
                            (_ = _.toDataURL());
                        this.load(_);
                      }
                    },
                  },
                  {
                    key: "load",
                    value: function (_) {
                      var _ = this;
                      if (_) {
                        (this.url = _), (this.imageData = {});
                        var _ = this.element,
                          _ = this.options;
                        if (
                          (_.rotatable ||
                            _.scalable ||
                            (_.checkOrientation = !1),
                          _.checkOrientation && window.ArrayBuffer)
                        )
                          if (_.test(_))
                            _.test(_) ? this.read(_(_)) : this.clone();
                          else {
                            var _ = new XMLHttpRequest(),
                              _ = this.clone.bind(this);
                            (this.reloading = !0),
                              (this.xhr = _),
                              (_.onabort = _),
                              (_.onerror = _),
                              (_.ontimeout = _),
                              (_.onprogress = function () {
                                _.getResponseHeader("content-type") !== _ &&
                                  _.abort();
                              }),
                              (_.onload = function () {
                                _.read(_.response);
                              }),
                              (_.onloadend = function () {
                                (_.reloading = !1), (_.xhr = null);
                              }),
                              _.checkCrossOrigin &&
                                _(_) &&
                                _.crossOrigin &&
                                (_ = _(_)),
                              _.open("GET", _, !0),
                              (_.responseType = "arraybuffer"),
                              (_.withCredentials =
                                "use-credentials" === _.crossOrigin),
                              _.send();
                          }
                        else this.clone();
                      }
                    },
                  },
                  {
                    key: "read",
                    value: function (_) {
                      var _ = this.options,
                        _ = this.imageData,
                        _ = _(_),
                        _ = 0,
                        _ = 1,
                        _ = 1;
                      if (_ > 1) {
                        this.url = _(_, _);
                        var _ = _(_);
                        (_ = _.rotate), (_ = _.scaleX), (_ = _.scaleY);
                      }
                      _.rotatable && (_.rotate = _),
                        _.scalable && ((_.scaleX = _), (_.scaleY = _)),
                        this.clone();
                    },
                  },
                  {
                    key: "clone",
                    value: function () {
                      var _ = this.element,
                        _ = this.url,
                        _ = _.crossOrigin,
                        _ = _;
                      this.options.checkCrossOrigin &&
                        _(_) &&
                        (_ || (_ = "anonymous"), (_ = _(_))),
                        (this.crossOrigin = _),
                        (this.crossOriginUrl = _);
                      var _ = document.createElement("img");
                      _ && (_.crossOrigin = _),
                        (_.src = _ || _),
                        (_.alt = _.alt || "The image to crop"),
                        (this.image = _),
                        (_.onload = this.start.bind(this)),
                        (_.onerror = this.stop.bind(this)),
                        _(_, _),
                        _.parentNode.insertBefore(_, _.nextSibling);
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      var _ = this,
                        _ = this.image;
                      (_.onload = null), (_.onerror = null), (this.sizing = !0);
                      var _ =
                          _.navigator &&
                          /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                            _.navigator.userAgent,
                          ),
                        _ = function (_, _) {
                          _(_.imageData, {
                            naturalWidth: _,
                            naturalHeight: _,
                            aspectRatio: _ / _,
                          }),
                            (_.initialImageData = _({}, _.imageData)),
                            (_.sizing = !1),
                            (_.sized = !0),
                            _.build();
                        };
                      if (!_.naturalWidth || _) {
                        var _ = document.createElement("img"),
                          _ = document.body || document.documentElement;
                        (this.sizingImage = _),
                          (_.onload = function () {
                            _(_.width, _.height), _ || _.removeChild(_);
                          }),
                          (_.src = _.src),
                          _ ||
                            ((_.style.cssText =
                              "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                            _.appendChild(_));
                      } else _(_.naturalWidth, _.naturalHeight);
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      var _ = this.image;
                      (_.onload = null),
                        (_.onerror = null),
                        _.parentNode.removeChild(_),
                        (this.image = null);
                    },
                  },
                  {
                    key: "build",
                    value: function () {
                      if (this.sized && !this.ready) {
                        var _ = this.element,
                          _ = this.options,
                          _ = this.image,
                          _ = _.parentNode,
                          _ = document.createElement("div");
                        _.innerHTML = _;
                        var _ = _.querySelector(".".concat(_, "-container")),
                          _ = _.querySelector(".".concat(_, "-canvas")),
                          _ = _.querySelector(".".concat(_, "-drag-box")),
                          _ = _.querySelector(".".concat(_, "-crop-box")),
                          _ = _.querySelector(".".concat(_, "-face"));
                        (this.container = _),
                          (this.cropper = _),
                          (this.canvas = _),
                          (this.dragBox = _),
                          (this.cropBox = _),
                          (this.viewBox = _.querySelector(
                            ".".concat(_, "-view-box"),
                          )),
                          (this.face = _),
                          _.appendChild(_),
                          _(_, _),
                          _.insertBefore(_, _.nextSibling),
                          _(_, _),
                          this.initPreview(),
                          this.bind(),
                          (_.initialAspectRatio =
                            Math.max(0, _.initialAspectRatio) || NaN),
                          (_.aspectRatio = Math.max(0, _.aspectRatio) || NaN),
                          (_.viewMode =
                            Math.max(0, Math.min(3, Math.round(_.viewMode))) ||
                            0),
                          _(_, _),
                          _.guides ||
                            _(
                              _.getElementsByClassName("".concat(_, "-dashed")),
                              _,
                            ),
                          _.center ||
                            _(
                              _.getElementsByClassName("".concat(_, "-center")),
                              _,
                            ),
                          _.background && _(_, "".concat(_, "-bg")),
                          _.highlight || _(_, _),
                          _.cropBoxMovable && (_(_, _), _(_, _, _)),
                          _.cropBoxResizable ||
                            (_(
                              _.getElementsByClassName("".concat(_, "-line")),
                              _,
                            ),
                            _(
                              _.getElementsByClassName("".concat(_, "-point")),
                              _,
                            )),
                          this.render(),
                          (this.ready = !0),
                          this.setDragMode(_.dragMode),
                          _.autoCrop && this.crop(),
                          this.setData(_.data),
                          _(_.ready) &&
                            _(_, _, _.ready, {
                              once: !0,
                            }),
                          _(_, _);
                      }
                    },
                  },
                  {
                    key: "unbuild",
                    value: function () {
                      if (this.ready) {
                        (this.ready = !1), this.unbind(), this.resetPreview();
                        var _ = this.cropper.parentNode;
                        _ && _.removeChild(this.cropper), _(this.element, _);
                      }
                    },
                  },
                  {
                    key: "uncreate",
                    value: function () {
                      this.ready
                        ? (this.unbuild(),
                          (this.ready = !1),
                          (this.cropped = !1))
                        : this.sizing
                          ? ((this.sizingImage.onload = null),
                            (this.sizing = !1),
                            (this.sized = !1))
                          : this.reloading
                            ? ((this.xhr.onabort = null), this.xhr.abort())
                            : this.image && this.stop();
                    },
                  },
                ],
                [
                  {
                    key: "noConflict",
                    value: function () {
                      return (window.Cropper = _), _;
                    },
                  },
                  {
                    key: "setDefaults",
                    value: function (_) {
                      _(_, _(_) && _);
                    },
                  },
                ],
              ),
              _
            );
          })();
        return _(_.prototype, _, _, _, _, _, _), _;
      })();
    },
  },
]);
