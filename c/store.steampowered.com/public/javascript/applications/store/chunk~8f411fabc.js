(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7198],
  {
    chunkid: (module) => {
      module.exports = {
        LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
        EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
        LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
        LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
        TopLeft: "Clgi---P85XXv25yLZwB0",
        Top: "_2Z9VyBAzofV3JvK__dECbX",
        TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
        Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
        Middle: "_1HecozzoSZfUZSci9dLkxN",
        LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
        LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
        Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
        BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
        Bottom: "sIHlK9sN2255-irERXD_V",
        BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
        topleft: "_3W096h6Ka6U7sOZVa9lXQo",
        top: "_1iRW1Msfh60zHqD-xe4EAk",
        topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
        left: "_2iBrmAEyXuaKAeZ-g-4CPF",
        right: "_15t6A4l27DY4KRL1aAUTTS",
        bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
        bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
        bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
        middle: "_1CS75ZrrDXna6xatw5ZvPR",
        LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
        DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
        LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
        LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = _.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(_) {
          let _ = this.state.bRenderChildren;
          if (_ == _) return;
          if (_ && !this.BLoadAndUnload()) return;
          let _ = 0,
            _ = 0;
          if (this.m_refContainer.current) {
            const _ = this.m_refContainer.current.GetBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          this.setState({
            bRenderChildren: _,
            nPrevRenderWidth: _,
            nPrevRenderHeight: _,
          }),
            _ && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              onRender: __webpack_require__,
              style: _,
              mode: _,
              ..._
            } = this.props,
            _ = this.state.bRenderChildren;
          let _ = _;
          if (!_) {
            const _ = this.state.nPrevRenderWidth || _,
              _ = this.state.nPrevRenderHeight || _;
            (void 0 === _ && void 0 === _) ||
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = this.BLoadAndUnload() ? "repeated" : "once";
          return _.createElement(
            _._,
            {
              ref: this.m_refContainer,
              style: _,
              ..._,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: _,
            },
            _ && this.props.children,
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVisibilityChange", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_.topleft = "topleft"),
          (_.top = "top"),
          (_.topright = "topright"),
          (_.left = "left"),
          (_.middle = "middle"),
          (_.right = "right"),
          (_.bottomleft = "bottomleft"),
          (_.bottom = "bottom"),
          (_.bottomright = "bottomright");
      })(_ || (_ = {}));
      let _ = class extends _.Component {
        m_rectLinkRegion;
        m_elLinkRegionBox;
        m_nLocalOffsetXPct;
        m_nLocalOffsetYPct;
        m_fnMouseUp = null;
        m_fnMouseMove = null;
        m_listeners = new _._();
        m_strDescription = "";
        m_aspectRatio = 1;
        componentWillUnmount() {
          this.m_listeners.Unregister();
        }
        constructor(_) {
          super(_),
            (this.state = {
              curLeftPosPct: this.props.xPosPct,
              curTopPosPct: this.props.yPosPct,
              curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
              curBottomPosPct:
                100 - (this.props.yPosPct + this.props.heightPct),
              curWidthPct: this.props.widthPct,
              curHeightPct: this.props.heightPct,
              EdgeDown: null,
              text_link_url: this.props.link_url,
              text_link_description: this.props.link_description,
              bEditingLink: !1,
              valid_link: this.validateUrl(this.props.link_url),
            }),
            (this.m_strDescription = this.props.link_description),
            (this.m_aspectRatio =
              this.props.heightPct > 0 && this.props.widthPct > 0
                ? this.props.widthPct / this.props.heightPct
                : 1);
        }
        LinkRegionBoxRef(_) {
          this.m_elLinkRegionBox = _;
        }
        OnMouseDown(_, _) {
          (this.m_fnMouseUp = (_) => {
            this.OnMouseUp(_, _);
          }),
            (this.m_fnMouseMove = (_) => {
              this.OnMouseMove(_, _);
            }),
            this.setState({
              EdgeDown: _,
            }),
            (this.m_rectLinkRegion =
              this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
            (this.m_nLocalOffsetXPct =
              ((_.clientX - this.m_rectLinkRegion.left) /
                (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                100 -
              this.state.curLeftPosPct),
            (this.m_nLocalOffsetYPct =
              ((_.clientY - this.m_rectLinkRegion.top) /
                (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                100 -
              this.state.curTopPosPct),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mousemove",
              this.m_fnMouseMove,
            ),
            this.m_listeners.AddEventListener(
              this.m_elLinkRegionBox.ownerDocument.defaultView,
              "mouseup",
              this.m_fnMouseUp,
            ),
            _.preventDefault(),
            _.stopPropagation();
        }
        OnMouseMove(_, _) {
          if (void 0 !== this.state.EdgeDown) {
            switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
              case _.left:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(_.clientX),
                });
                break;
              case _.right:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(_.clientX),
                });
                break;
              case _.top:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(_.clientY),
                });
                break;
              case _.bottom:
                this.UpdateState({
                  curBottomPosPct: this.CalcBottomEdge(_.clientY),
                });
                break;
              case _.topleft:
                this.UpdateState({
                  curTopPosPct: this.CalcBottomEdge(_.clientY),
                  curLeftPosPct: this.CalcLeftEdge(_.clientX),
                });
                break;
              case _.topright:
                this.UpdateState({
                  curTopPosPct: this.CalcTopEdge(_.clientY),
                  curRightPosPct: this.CalcRightEdge(_.clientX),
                });
                break;
              case _.bottomleft:
                this.UpdateState({
                  curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  curBottomPosPct: this.CalcBottomEdge(_.clientY),
                });
                break;
              case _.bottomright:
                this.UpdateState({
                  curRightPosPct: this.CalcRightEdge(_.clientX),
                  curBottomPosPct: this.CalcBottomEdge(_.clientY),
                });
                break;
              case _.middle: {
                const _ = (0, _._)(
                    this.CalcLeftEdge(_.clientX),
                    0,
                    100 - this.state.curWidthPct,
                  ),
                  _ = 100 - (_ + this.state.curWidthPct),
                  _ = (0, _._)(
                    this.CalcTopEdge(_.clientY),
                    0,
                    100 - this.state.curHeightPct,
                  ),
                  _ = {
                    curLeftPosPct: _,
                    curRightPosPct: _,
                    curTopPosPct: _,
                    curBottomPosPct: 100 - (_ + this.state.curHeightPct),
                  };
                this.setState(_);
                break;
              }
            }
            _.preventDefault(), _.stopPropagation();
          }
        }
        IsValidPct(_) {
          return _ >= 0 && _ <= 100;
        }
        UpdateState(_) {
          let _ =
              void 0 !== _.curTopPosPct
                ? _.curTopPosPct
                : this.state.curTopPosPct,
            _ =
              void 0 !== _.curBottomPosPct
                ? _.curBottomPosPct
                : this.state.curBottomPosPct,
            _ =
              void 0 !== _.curLeftPosPct
                ? _.curLeftPosPct
                : this.state.curLeftPosPct,
            _ =
              void 0 !== _.curRightPosPct
                ? _.curRightPosPct
                : this.state.curRightPosPct,
            _ = (0, _._)(
              100 - _ - _,
              this.props.widthMinPct || 0,
              this.props.widthMaxPct || 100,
            ),
            _ = (0, _._)(
              100 - _ - _,
              this.props.heightMinPct || 0,
              this.props.heightMaxPct || 100,
            );
          this.props.bLockAspectRatio &&
            (void 0 !== _.curLeftPosPct || void 0 !== _.curRightPosPct
              ? (_ = _ / this.m_aspectRatio)
              : (_ = _ * this.m_aspectRatio)),
            void 0 !== _.curLeftPosPct
              ? (_ = 100 - _ - _)
              : (_ = 100 - (_ + _)),
            void 0 !== _.curTopPosPct ? (_ = 100 - _ - _) : (_ = 100 - (_ + _));
          const _ = 100 - _ - _,
            _ = 100 - _ - _;
          this.IsValidPct(_) &&
            this.IsValidPct(_) &&
            this.IsValidPct(_) &&
            this.IsValidPct(_) &&
            this.IsValidPct(_) &&
            this.IsValidPct(_) &&
            this.setState({
              curLeftPosPct: _,
              curRightPosPct: _,
              curTopPosPct: _,
              curBottomPosPct: _,
            });
        }
        GetXPercent(_) {
          return (
            ((_ - this.m_rectLinkRegion.left) /
              (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
              100 -
            this.m_nLocalOffsetXPct
          );
        }
        GetYPercent(_) {
          return (
            ((_ - this.m_rectLinkRegion.top) /
              (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
              100 -
            this.m_nLocalOffsetYPct
          );
        }
        CalcLeftEdge(_) {
          return (0, _._)(this.GetXPercent(_), 0, 100);
        }
        CalcRightEdge(_) {
          return (0, _._)(
            100 - (this.GetXPercent(_) + this.state.curWidthPct),
            0,
            100,
          );
        }
        CalcTopEdge(_) {
          return (0, _._)(this.GetYPercent(_), 0, 100);
        }
        CalcBottomEdge(_) {
          return (0, _._)(
            100 - (this.GetYPercent(_) + this.state.curHeightPct),
            0,
            100,
          );
        }
        OnMouseUp(_, _) {
          this.setState({
            curWidthPct:
              100 - this.state.curRightPosPct - this.state.curLeftPosPct,
          }),
            this.setState({
              curHeightPct:
                100 - this.state.curBottomPosPct - this.state.curTopPosPct,
            }),
            this.setState({
              EdgeDown: void 0,
            }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            }),
            this.m_listeners.Unregister();
        }
        async HandleDelete() {
          this.props.deleteFn && this.props.deleteFn(this.props.index);
        }
        OnSetLinkURLChange(_) {
          this.setState({
            text_link_url: _.target.value,
            valid_link: this.validateUrl(_.target.value),
          });
        }
        OnSetLinkDescriptionChange(_) {
          this.setState({
            text_link_description: _.target.value,
          });
        }
        validateUrl(_) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
            _,
          );
        }
        OnSaveLink() {
          (this.m_strDescription = this.state.text_link_description),
            this.setState({
              bEditingLink: !this.state.bEditingLink,
            }),
            this.props.updateFn(this.props.index, {
              xPosPct: this.state.curLeftPosPct,
              yPosPct: this.state.curTopPosPct,
              widthPct: this.state.curWidthPct,
              heightPct: this.state.curHeightPct,
              link_url: this.state.text_link_url,
              link_description: this.state.text_link_description,
            });
        }
        OnEditLink() {
          this.setState({
            bEditingLink: !this.state.bEditingLink,
          });
        }
        render() {
          let _ = {
              left: this.state.curLeftPosPct + "%",
              top: this.state.curTopPosPct + "%",
              right: this.state.curRightPosPct + "%",
              bottom: this.state.curBottomPosPct + "%",
            },
            _ = _().LinkRegionDragBox;
          return (
            null !== this.state.EdgeDown &&
              (_ += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
            _.createElement(
              "div",
              {
                className: _,
                style: _,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
              },
              _.createElement(
                "div",
                {
                  className: _().LinkRegionGridBox,
                },
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.topleft);
                  },
                  draggable: !1,
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().Top}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.top);
                  },
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().TopRight}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.topright);
                  },
                  draggable: !1,
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().Left}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.left);
                  },
                  draggable: !1,
                }),
                _.createElement(
                  "div",
                  {
                    className: `${_().LinkRegionEdge} ${_().Middle}`,
                    onMouseDown: (_) => {
                      this.OnMouseDown(_, _.middle);
                    },
                    draggable: !1,
                  },
                  this.props.deleteFn &&
                    _.createElement(
                      "div",
                      {
                        className: _().LinkRegionDelete,
                        onClick: this.HandleDelete,
                      },
                      _.createElement(_.sED, null),
                    ),
                  !this.props.bDisableLink &&
                    _.createElement(
                      "div",
                      {
                        className: _().LinkRegionSettings,
                        onClick: this.OnEditLink,
                      },
                      _.createElement(_.xv8, null),
                    ),
                  _.createElement(
                    "div",
                    {
                      className: _().LinkText,
                    },
                    " ",
                    this.m_strDescription,
                    " ",
                  ),
                ),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().Right}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.right);
                  },
                  draggable: !1,
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.bottomleft);
                  },
                  draggable: !1,
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().Bottom}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.bottom);
                  },
                  draggable: !1,
                }),
                _.createElement("div", {
                  className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, _.bottomright);
                  },
                  draggable: !1,
                }),
              ),
              this.state.bEditingLink &&
                _.createElement(
                  "div",
                  {
                    className: _().LinkRegionInfo,
                  },
                  _.createElement(_._, {
                    className: _().LinkRegionInput,
                    type: "text",
                    name: "link_url",
                    value: this.state.text_link_url,
                    label: (0, _._)("#SteamTV_LinkURL"),
                    placeholder: "https://www.example.com",
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  _.createElement(_._, {
                    className: _().LinkRegionInput,
                    type: "text",
                    name: "link_description",
                    value: this.state.text_link_description,
                    label: (0, _._)("#SteamTV_LinkDescription"),
                    placeholder: (0, _._)(
                      "#SteamTV_LinkDescription_Placeholder",
                    ),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  _.createElement(
                    "div",
                    {
                      className: _().LinkRegionButtonContainer,
                    },
                    _.createElement(
                      _._,
                      {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                      },
                      " ",
                      (0, _._)("#Button_OK"),
                      " ",
                    ),
                    _.createElement(
                      _._,
                      {
                        onClick: this.OnEditLink,
                      },
                      " ",
                      (0, _._)("#Button_Cancel"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      (0, _._)([_._], _.prototype, "LinkRegionBoxRef", null),
        (0, _._)([_._], _.prototype, "OnMouseDown", null),
        (0, _._)([_._], _.prototype, "OnMouseMove", null),
        (0, _._)([_._], _.prototype, "OnMouseUp", null),
        (0, _._)([_._], _.prototype, "HandleDelete", null),
        (0, _._)([_._], _.prototype, "OnSetLinkURLChange", null),
        (0, _._)([_._], _.prototype, "OnSetLinkDescriptionChange", null),
        (0, _._)([_._], _.prototype, "OnSaveLink", null),
        (0, _._)([_._], _.prototype, "OnEditLink", null),
        (_ = (0, _._)([_._], _));
    },
  },
]);
