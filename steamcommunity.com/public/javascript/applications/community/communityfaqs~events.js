/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "+w6J": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return x;
      });
      var a = n("mrSG"),
        i = n("fcuX"),
        r = n("KP/B"),
        o = n("mHFc"),
        l = n("i3zJ"),
        s = n("CoyA"),
        c = n("Zan1"),
        u = n("oqmg"),
        d = n("TyAF"),
        p = n("q1tI"),
        m = n("qD+2"),
        _ = n("5eAM"),
        g = n("R+8l"),
        h = n("oVVc"),
        f = n("Mgs7"),
        b = n("IjL/"),
        v = n("qP7j"),
        S = n("fpVW"),
        E = n("gyoR"),
        y = n("YLyR"),
        O = n("Jqb/"),
        T = n("ka0M"),
        C = n("0rc7"),
        j = n("0OaU"),
        I = n("5E+2"),
        D = n("UvY0"),
        w = n("r64O"),
        M = n("exH9"),
        k = n("X3Ds"),
        G = n("TLQK"),
        L = n("opsS"),
        A = n("as1E"),
        B = n("k3PP"),
        F = n("JiI5"),
        N = n("165M"),
        R = -1,
        x = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                nImportCapsuleVisibiltyIndex: R,
                nShowVisibilityIndexOnly: R,
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.RemoveCapsule = function (e) {
              var t = this.props,
                n = t.capsuleContainer,
                a = t.editModel;
              Object(w.a)(
                e >= 0 && e < n.capsules.length,
                "Remove capsule called outside of range: " +
                  e +
                  " len: " +
                  n.capsules.length
              ),
                e >= 0 &&
                  e < n.capsules.length &&
                  (n.capsules.splice(e, 1), a.SetDirty(i.c.jsondata_sales));
            }),
            (t.prototype.AddCapsule = function (e, t) {
              var n = {
                id: e,
                type: t,
                visibility_index:
                  this.state.nImportCapsuleVisibiltyIndex == R
                    ? void 0
                    : this.state.nImportCapsuleVisibiltyIndex,
              };
              this.props.capsuleContainer.capsules.push(n),
                Object(E.i)([n]),
                this.props.editModel.SetDirty(i.c.jsondata_sales);
            }),
            (t.prototype.CountCapsPerVisibilityIndex = function () {
              var e = this.props,
                t = e.capsuleContainer,
                n = e.editModel;
              if (t.capsules) {
                var a = n.GetNumberOfDays(),
                  i = new Array(a);
                i.fill(0);
                var r = !1;
                return (
                  t.capsules.forEach(function (e) {
                    if (void 0 !== (null == e ? void 0 : e.visibility_index)) {
                      for (; i.length <= e.visibility_index; ) i.push(0);
                      (r = !0), (i[e.visibility_index] += 1);
                    }
                  }),
                  r ? i : void 0
                );
              }
            }),
            (t.prototype.ImportSaleItems = function (e) {
              Object(T.d)(
                p.createElement(c.a, { fnAddCapsule: this.AddCapsule }),
                Object(k.m)(e)
              );
            }),
            (t.prototype.OnChangeVisibilityDate = function (e) {
              this.setState({ nImportCapsuleVisibiltyIndex: e });
            }),
            (t.prototype.OnVisibilityIndexFilterChange = function (e) {
              this.setState({ nShowVisibilityIndexOnly: e });
            }),
            (t.prototype.OnRemoveAllPrompt = function () {
              Object(T.d)(
                p.createElement(O.d, {
                  strTitle: Object(G.f)("#Sale_RemoveAllConfirm_Title"),
                  strDescription: Object(G.f)("#Sale_RemoveAllConfirm_Body"),
                  onOK: this.OnRemoveAllConfirmed,
                }),
                window
              );
            }),
            (t.prototype.OnRemoveAllConfirmed = function () {
              (this.props.capsuleContainer.capsules = []),
                this.props.editModel.SetDirty(i.c.jsondata_sales);
            }),
            (t.prototype.OnEditRaw = function (e) {
              Object(T.d)(
                p.createElement(P, {
                  editModel: this.props.editModel,
                  capsuleContainer: this.props.capsuleContainer,
                }),
                Object(k.m)(e)
              );
            }),
            (t.prototype.OnUseTagFilterChangeConfirmed = function (e) {
              var t,
                n,
                a = this.props,
                o = a.capsuleContainer,
                l = a.editModel;
              if (e) {
                var s = Object(r.o)(l);
                (o.sale_tag_filter = { clauses: new Array() }),
                  (o.capsules = Object(r.r)(s, o.sale_tag_filter, o.capsules));
              } else
                (null ===
                  (n =
                    null === (t = o.sale_tag_filter) || void 0 === t
                      ? void 0
                      : t.clauses) || void 0 === n
                  ? void 0
                  : n.length) || (o.capsules = []),
                  (o.sale_tag_filter = null);
              l.SetDirty(i.c.jsondata_sales);
            }),
            (t.prototype.OnUseTagFilterChange = function (e) {
              var t,
                n = this,
                a = this.props,
                i = a.capsuleContainer;
              a.editModel;
              if (e) {
                if (i.sale_tag_filter) return;
                i.capsules.length
                  ? Object(T.d)(
                      p.createElement(O.d, {
                        strTitle: Object(G.f)(
                          "#Sale_TaggedItemFilter_EnableTitle"
                        ),
                        strDescription: Object(G.f)(
                          "#Sale_TaggedItemFilter_EnableDescription"
                        ),
                        onOK: function () {
                          return n.OnUseTagFilterChangeConfirmed(!0);
                        },
                      }),
                      window
                    )
                  : this.OnUseTagFilterChangeConfirmed(!0);
              } else {
                if (!i.sale_tag_filter) return;
                (
                  null === (t = i.sale_tag_filter.clauses) || void 0 === t
                    ? void 0
                    : t.length
                )
                  ? Object(T.d)(
                      p.createElement(O.d, {
                        strTitle: Object(G.f)(
                          "#Sale_TaggedItemFilter_DisableTitle"
                        ),
                        strDescription: Object(G.f)(
                          "#Sale_TaggedItemFilter_DisableDescription"
                        ),
                        onOK: function () {
                          return n.OnUseTagFilterChangeConfirmed(!1);
                        },
                      }),
                      window
                    )
                  : this.OnUseTagFilterChangeConfirmed(!1);
              }
            }),
            (t.prototype.renderFilterView = function () {
              var e = this.props,
                t = e.editModel,
                n = e.capsuleContainer,
                a =
                  Object(G.f)(
                    this.props.titleLocToken ||
                      "#Sale_Section_FilteredProducts_Title"
                  ) +
                  " - " +
                  n.capsules.length,
                r = Object(G.f)(
                  this.props.ttipLocToken ||
                    "#Sale_Section_FilteredProducts_Tooltip"
                ),
                l = "ShowFilterItems_" + this.props.uniqueKey,
                c = Object(o.a)(l, !0);
              return p.createElement(
                b.a,
                null,
                p.createElement(
                  "div",
                  { className: A.FilterDisplayCtn },
                  p.createElement(u.d, { editModel: t, capsuleContainer: n }),
                  p.createElement(
                    "div",
                    { className: A.SaleSectionTitleHeader },
                    p.createElement(
                      "div",
                      { className: S.EventEditorTextTitle },
                      a,
                      p.createElement(B.d, { tooltip: r })
                    ),
                    p.createElement(N.a, {
                      bIsMinimized: c,
                      fnToggleMinimize: function () {
                        return Object(o.d)(l, !0);
                      },
                    })
                  ),
                  !c &&
                    p.createElement(
                      "div",
                      {
                        className: Object(M.a)(
                          S.FlexColumnContainer,
                          S.EventDefaultRowContainer
                        ),
                      },
                      p.createElement(C.a, {
                        items: n.capsules,
                        onReorder: function () {
                          return t.SetDirty(i.c.jsondata_sales);
                        },
                        render: function (e) {
                          return p.createElement(s.a, {
                            capsule: e,
                            capsuleContainer: n,
                          });
                        },
                      })
                    )
                )
              );
            }),
            (t.prototype.OnSelectDiscountEvent = function (e) {
              var t = this;
              Object(T.d)(
                p.createElement(l.a, {
                  onDiscountEventSelected: function (e, n) {
                    var a =
                        t.state.nImportCapsuleVisibiltyIndex == R
                          ? void 0
                          : t.state.nImportCapsuleVisibiltyIndex,
                      r = t.props.capsuleContainer;
                    e.forEach(function (e) {
                      if (
                        !r.capsules.find(function (t) {
                          return t.id === e && "sub" !== t.type;
                        })
                      ) {
                        var t = _.a.GetAppLinkInfo(e);
                        r.capsules.push({
                          id: e,
                          type: t ? t.type : "game",
                          visibility_index: a,
                        });
                      }
                    }),
                      n.forEach(function (e) {
                        r.capsules.find(function (t) {
                          return t.id === e && "sub" === t.type;
                        }) ||
                          r.capsules.push({
                            id: e,
                            type: "sub",
                            visibility_index: a,
                          });
                      }),
                      t.props.editModel.SetDirty(i.c.jsondata_sales);
                  },
                }),
                Object(k.m)(e)
              );
            }),
            (t.prototype.renderItemView = function () {
              var e = this,
                t = this.props,
                n = t.editModel,
                a = t.capsuleContainer,
                r = [
                  {
                    label: Object(G.f)("#Sale_VisibilityIndex_Default"),
                    data: R,
                  },
                ],
                l = n.GetNumberOfDays(),
                c = "ShowCapsuleItems_" + this.props.uniqueKey,
                d = Object(o.a)(c, !1);
              if (!this.props.disableDaySelection && l > 1)
                for (var m = 0; m < l; m++) {
                  var _ = n.GetEventStartTime() + 86400 * m,
                    g = {
                      label: Object(G.n)(
                        m + 1 == l
                          ? "#Sale_VisibilityIndex_DayTimeOnward"
                          : "#Sale_VisibilityIndex_DayTime",
                        m + 1,
                        p.createElement(y.a, {
                          dateAndTime: _,
                          bSingleLine: !0,
                        }),
                        p.createElement(y.a, {
                          dateAndTime: _ + 86400,
                          bSingleLine: !0,
                        })
                      ),
                      data: m,
                    };
                  r.push(g);
                }
              var h = this.CountCapsPerVisibilityIndex(),
                v = new Array();
              if (h) {
                var E = "CountFilter_Sale" + this.props.uniqueKey,
                  O = "CountFilter_Sale" + this.props.uniqueKey + "_day_all";
                v.push(
                  p.createElement(
                    "div",
                    {
                      key: "CountFilter_sale" + this.props.uniqueKey + "_" + R,
                      className: Object(M.a)(S.FlexRowContainer, S.RadioOption),
                    },
                    p.createElement("input", {
                      type: "radio",
                      name: E,
                      id: O,
                      value: R,
                      checked: R == this.state.nShowVisibilityIndexOnly,
                      onChange: function () {
                        return e.OnVisibilityIndexFilterChange(R);
                      },
                    }),
                    p.createElement(
                      "label",
                      { htmlFor: O },
                      p.createElement(
                        "span",
                        null,
                        Object(G.f)("#Sale_VisibilityIndex_ShowAll")
                      )
                    )
                  )
                ),
                  h.forEach(function (t, n) {
                    var a =
                      "CountFilter_Sale" + e.props.uniqueKey + "_day_" + n;
                    v.push(
                      p.createElement(
                        "div",
                        {
                          key: "CountFilter_sale" + e.props.uniqueKey + "_" + n,
                          className: Object(M.a)(
                            S.FlexRowContainer,
                            S.RadioOption
                          ),
                        },
                        p.createElement("input", {
                          type: "radio",
                          name: E,
                          id: a,
                          value: n,
                          checked: n == e.state.nShowVisibilityIndexOnly,
                          onChange: function () {
                            return e.OnVisibilityIndexFilterChange(n);
                          },
                        }),
                        p.createElement(
                          "label",
                          { htmlFor: a },
                          p.createElement(
                            "span",
                            null,
                            Object(G.f)(
                              "#Sale_VisibilityIndex_ShowDay",
                              n + 1,
                              t
                            )
                          )
                        )
                      )
                    );
                  });
              }
              var T =
                  Object(G.f)(
                    this.props.titleLocToken ||
                      "#Sale_Section_ReferencedProducts_Title"
                  ) +
                  " - " +
                  a.capsules.length,
                j = Object(G.f)(
                  this.props.ttipLocToken ||
                    "#Sale_Section_ReferencedProducts_Tooltip"
                );
              return p.createElement(
                b.a,
                null,
                p.createElement(
                  "div",
                  { className: A.SaleSectionTitleHeader },
                  p.createElement(
                    "div",
                    { className: S.EventEditorTextTitle },
                    T,
                    p.createElement(B.d, { tooltip: j })
                  ),
                  p.createElement(N.a, {
                    bIsMinimized: d,
                    fnToggleMinimize: function () {
                      return Object(o.d)(c, !1);
                    },
                  })
                ),
                !d &&
                  p.createElement(
                    "div",
                    {
                      className: Object(M.a)(
                        S.FlexColumnContainer,
                        S.EventDefaultRowContainer
                      ),
                    },
                    Boolean(h && h.length > 0) &&
                      p.createElement(
                        "div",
                        { className: F.SaleVisibilityDateFilter },
                        p.createElement(
                          "span",
                          null,
                          Object(G.f)("#Sale_VisibilityIndex_ShowFilter")
                        ),
                        v
                      ),
                    p.createElement(u.c, { onAddItem: this.AddCapsule }),
                    p.createElement(
                      "div",
                      { className: F.SaleImportBar },
                      p.createElement(
                        I.a,
                        {
                          className: F.SaleImportBarTooltip,
                          toolTipContent: Object(G.f)(
                            "#Sale_RemoveAll_Tooltip"
                          ),
                        },
                        p.createElement(
                          f.d,
                          {
                            className: F.SaleImportBarButton,
                            onClick: this.OnRemoveAllPrompt,
                          },
                          Object(G.f)("#Sale_RemoveAll")
                        )
                      ),
                      p.createElement(
                        I.a,
                        {
                          className: F.SaleImportBarTooltip,
                          toolTipContent: Object(G.f)(
                            "#Sale_ImportItems_Tooltip"
                          ),
                        },
                        p.createElement(
                          f.d,
                          {
                            className: F.SaleImportBarButton,
                            onClick: this.ImportSaleItems,
                          },
                          Object(G.f)("#Sale_ImportItems")
                        )
                      ),
                      p.createElement(
                        I.a,
                        {
                          className: F.SaleImportBarTooltip,
                          toolTipContent: Object(G.f)("#Sale_EditRaw_Tooltip"),
                        },
                        p.createElement(
                          f.d,
                          {
                            className: F.SaleImportBarButton,
                            onClick: this.OnEditRaw,
                          },
                          Object(G.f)("#Sale_EditRaw")
                        )
                      ),
                      p.createElement(
                        D.b,
                        { requireAdmin: !0, clanSteamID: n.GetClanSteamID() },
                        p.createElement(
                          I.a,
                          {
                            className: F.SaleImportBarTooltip,
                            toolTipContent: Object(G.f)(
                              "#Sale_DiscountEvent_ttip"
                            ),
                          },
                          p.createElement(
                            f.d,
                            {
                              className: F.SaleImportBarButton,
                              onClick: this.OnSelectDiscountEvent,
                            },
                            Object(G.f)("#Sale_DiscountEvent_Add")
                          )
                        )
                      )
                    ),
                    p.createElement(C.a, {
                      bDisabled: this.state.nShowVisibilityIndexOnly != R,
                      items:
                        this.state.nShowVisibilityIndexOnly === R
                          ? a.capsules
                          : a.capsules.filter(function (t) {
                              return (
                                null == t.visibility_index ||
                                t.visibility_index ==
                                  e.state.nShowVisibilityIndexOnly
                              );
                            }),
                      onDelete: this.RemoveCapsule,
                      onReorder: function () {
                        return e.props.editModel.SetDirty(i.c.jsondata_sales);
                      },
                      render: function (e) {
                        return p.createElement(s.a, {
                          capsule: e,
                          capsuleContainer: a,
                        });
                      },
                    }),
                    r.length > 1 &&
                      p.createElement(f.i, {
                        strDropDownClassName: S.DropDownScroll,
                        label: Object(G.f)("#Sale_VisibilityIndex_Label"),
                        rgOptions: r,
                        selectedOption: this.state.nImportCapsuleVisibiltyIndex,
                        onChange: function (t) {
                          return e.OnChangeVisibilityDate(t.data);
                        },
                        bDisableMouseOverlay: !0,
                        contextMenuPositionOptions: {
                          bDisableMouseOverlay: !0,
                          bDisablePopTop: !0,
                        },
                        disabled: 1 == r.length,
                        strClassName: F.SaleDaySelection,
                        tooltip: Object(G.f)("#Sale_VisibilityIndex_Tooltip"),
                      })
                  )
              );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.editModel,
                n = e.capsuleContainer,
                a = Boolean(n.sale_tag_filter),
                i = a || t.GetEventModel().GetTaggedItems().length > 0;
              return p.createElement(
                b.a,
                null,
                i &&
                  p.createElement(f.q, {
                    onChange: this.OnUseTagFilterChange,
                    label: Object(G.f)("#Sale_TaggedItemFilter"),
                    description: n.sale_tag_filter
                      ? ""
                      : Object(G.f)("#Sale_TaggedItemFilterDescription"),
                    checked: Boolean(n.sale_tag_filter),
                  }),
                a && this.renderFilterView(),
                !a && this.renderItemView()
              );
            }),
            Object(a.c)([L.a], t.prototype, "RemoveCapsule", null),
            Object(a.c)([L.a], t.prototype, "AddCapsule", null),
            Object(a.c)([L.a], t.prototype, "ImportSaleItems", null),
            Object(a.c)([L.a], t.prototype, "OnChangeVisibilityDate", null),
            Object(a.c)(
              [L.a],
              t.prototype,
              "OnVisibilityIndexFilterChange",
              null
            ),
            Object(a.c)([L.a], t.prototype, "OnRemoveAllPrompt", null),
            Object(a.c)([L.a], t.prototype, "OnRemoveAllConfirmed", null),
            Object(a.c)([L.a], t.prototype, "OnEditRaw", null),
            Object(a.c)(
              [L.a],
              t.prototype,
              "OnUseTagFilterChangeConfirmed",
              null
            ),
            Object(a.c)([L.a], t.prototype, "OnUseTagFilterChange", null),
            Object(a.c)([L.a], t.prototype, "OnSelectDiscountEvent", null),
            (t = Object(a.c)([d.a], t))
          );
        })(p.Component),
        P = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bImporting: !1,
                editValue: t.PopulateInitialEditField(),
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.PopulateInitialEditField = function () {
              var e = this.props.capsuleContainer,
                t = !1;
              e.capsules.forEach(function (e) {
                return (t =
                  t || void 0 !== (null == e ? void 0 : e.visibility_index));
              });
              for (var n = "", a = 0, i = e.capsules; a < i.length; a++) {
                var r = i[a];
                if (r) {
                  var o = "";
                  if ("bundle" === r.type)
                    o = (l = g.a.GetBundleInfo(r.id)) && l.name;
                  else if ("sub" === r.type) {
                    o = (l = h.b.GetPackageInfo(r.id)) && l.name;
                  } else {
                    var l;
                    o = (l = m.a.GetAppInfo(r.id)) && l.name;
                  }
                  var s = r.id + "\t" + r.type;
                  void 0 !== r.visibility_index
                    ? (s += "\tDay " + r.visibility_index)
                    : t && (s += "\t"),
                    o && (s += '\t"' + o + '"'),
                    (n += s + "\n");
                }
              }
              return n;
            }),
            (t.prototype.ParseCapsuleInfoFromLine = function (e) {
              var t = e + " ",
                n = /^\s*([0-9]+)\W+(.*)/.exec(t);
              if (n) {
                var a = { id: parseInt(n[1]), type: "game" };
                t = n[2];
                var i = /^(game|software|dlc|bundle|video|sub|event|tag|music|hardware)\W+(.*)/i.exec(
                  t
                );
                i && ((a.type = i[1]), (t = i[2]));
                var r = /^day\s+(\d+)\W+/i.exec(t);
                return r && (a.visibility_index = parseInt(r[1])), a;
              }
            }),
            (t.prototype.OnCompleteEdit = function () {
              this.setState({ bImporting: !0, errMsg: void 0 }, this.DoImport);
            }),
            (t.prototype.DoImport = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, r, o, l, s, c, u, d, p, m, _, g;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      for (
                        e = this.props,
                          t = e.editModel,
                          n = e.capsuleContainer,
                          r = new Array(),
                          o = this.state.editValue.split("\n"),
                          l = 0,
                          s = o;
                        l < s.length;
                        l++
                      )
                        (c = s[l]),
                          (u = this.ParseCapsuleInfoFromLine(c)) && r.push(u);
                      return [4, Object(E.i)(r)];
                    case 1:
                      for (
                        a.sent(), d = "", p = t.GetNumberOfDays(), m = 0, _ = r;
                        m < _.length;
                        m++
                      )
                        if (
                          void 0 !== (g = _[m]).visibility_index &&
                          g.visibility_index >= p
                        ) {
                          d = Object(G.f)(
                            "#Sale_EditRaw_Error_InvalidDay",
                            g.id,
                            g.visibility_index
                          );
                          break;
                        }
                      return (
                        this.setState({ bImporting: !1, errMsg: d }),
                        d ||
                          (JSON.stringify(n.capsules) !== JSON.stringify(r) &&
                            ((n.capsules = r), t.SetDirty(i.c.jsondata_sales)),
                          this.props.closeModal()),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnTextChange = function (e) {
              this.setState({ editValue: e.currentTarget.value });
            }),
            (t.prototype.render = function () {
              var e = this.props.closeModal;
              return p.createElement(
                O.e,
                {
                  onCancel: e,
                  closeModal: e,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  bHideCloseIcon: this.state.bImporting,
                },
                p.createElement(f.l, null, Object(G.f)("#Sale_EditRaw_Title")),
                p.createElement(
                  f.b,
                  null,
                  p.createElement(
                    "div",
                    null,
                    Object(G.f)("#Sale_EditRaw_Desc_1")
                  ),
                  p.createElement(
                    "div",
                    null,
                    Object(G.f)("#Sale_EditRaw_Desc_2")
                  ),
                  p.createElement(
                    "div",
                    { className: A.EditRawExample },
                    Object(G.f)("#Sale_EditRaw_Example_Title")
                  ),
                  p.createElement(
                    "div",
                    { className: A.EditRawExample },
                    Object(G.f)("#Sale_EditRaw_Example_1")
                  ),
                  p.createElement(
                    "div",
                    { className: A.EditRawExample },
                    Object(G.f)("#Sale_EditRaw_Example_2")
                  ),
                  p.createElement(
                    "div",
                    { className: A.EditRawExample },
                    Object(G.f)("#Sale_EditRaw_Example_3")
                  ),
                  Boolean(this.state.errMsg) &&
                    p.createElement(
                      "p",
                      { className: v.ErrorStyles },
                      this.state.errMsg
                    ),
                  this.state.bImporting &&
                    p.createElement(j.a, {
                      size: "medium",
                      position: "center",
                    }),
                  !this.state.bImporting &&
                    p.createElement("textarea", {
                      className: A.EditRawTextArea,
                      value: this.state.editValue,
                      cols: 40,
                      rows: 30,
                      onChange: this.OnTextChange,
                    })
                ),
                !this.state.bImporting &&
                  p.createElement(
                    f.k,
                    null,
                    p.createElement(
                      f.r,
                      { onClick: this.OnCompleteEdit, disabled: !1 },
                      Object(G.f)("#Button_Confirm"),
                      " "
                    ),
                    p.createElement(
                      f.d,
                      { onClick: e, disabled: !1 },
                      Object(G.f)("#Button_Cancel")
                    )
                  )
              );
            }),
            Object(a.c)([L.a], t.prototype, "OnCompleteEdit", null),
            Object(a.c)([L.a], t.prototype, "DoImport", null),
            Object(a.c)([L.a], t.prototype, "OnTextChange", null),
            (t = Object(a.c)([d.a], t))
          );
        })(p.Component);
    },
    "165M": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return f;
        });
      var a = n("mrSG"),
        i = n("mHFc"),
        r = n("aoTL"),
        o = n("Mgs7"),
        l = n("TLQK"),
        s = n("6Y59"),
        c = n("q1tI"),
        u = n("JiI5"),
        d = n("2vnA"),
        p = n("IjL/"),
        m = n("d+Me"),
        _ = n("k3PP");
      function g(e) {
        var t = e.bIsMinimized,
          n = e.fnToggleMinimize,
          a = t
            ? "#Sale_Section_Maximize_Tooltip"
            : "#Sale_Section_Minimize_Tooltip";
        return c.createElement(
          o.d,
          { "data-tooltip-text": Object(l.f)(a), onClick: n },
          e.bIsMinimized
            ? c.createElement(s.G, null)
            : c.createElement(s.J, null)
        );
      }
      function h(e) {
        var t = e.strToggleName,
          n = e.strTitle,
          a = e.children,
          o = e.strToolTip,
          l = Object(r.d)(function () {
            return Object(i.a)(t);
          });
        return c.createElement(
          "div",
          { id: t, className: u.SettingCtn },
          c.createElement(
            "div",
            {
              className: u.Title,
              onDoubleClick: function () {
                return Object(i.d)(t);
              },
            },
            n,
            o && c.createElement(_.d, { tooltip: o }),
            c.createElement(g, {
              bIsMinimized: l,
              fnToggleMinimize: function () {
                return Object(i.d)(t);
              },
            })
          ),
          !l && a
        );
      }
      var f = new ((function () {
        function e() {
          this.m_mapVisibleSections = new Map();
        }
        return (
          (e.prototype.WrapWithNavWaypoint = function (e, t) {
            return c.createElement(
              p.a,
              { key: "eb_sale_sect_" + e },
              c.createElement(
                m.a,
                {
                  key: "waypoint_sale_sect_" + e,
                  onEnter: function () {
                    return f.m_mapVisibleSections.set(e, e);
                  },
                  onLeave: function () {
                    return f.m_mapVisibleSections.delete(e);
                  },
                  topOffset: "100px",
                  bottomOffset: "100px",
                },
                c.createElement("div", null, t)
              )
            );
          }),
          Object(a.c)([d.C], e.prototype, "m_mapVisibleSections", void 0),
          e
        );
      })())();
    },
    "1fPh": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n("lkRc"),
        i = function () {
          return a.b.IS_OGG ? "games" : "groups";
        },
        r = {
          Home: function (e) {
            return "/" + i() + "/" + e + "/partnerevents";
          },
          Create: function (e) {
            return "/" + i() + "/" + e + "/partnerevents/create";
          },
          Category: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/category/" + t;
          },
          Edit: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/edit/" + t;
          },
          EditRedirectToCategory: function (e) {
            return "/" + i() + "/" + e + "/partnerevents/edit";
          },
          Preview: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/preview/" + t;
          },
          PreviewSale: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/previewsale/" + t;
          },
          View: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/view/" + t;
          },
          List: function (e) {
            return "/" + i() + "/" + e + "/partnerevents/list";
          },
          Publish: function (e, t) {
            return "/" + i() + "/" + e + "/partnerevents/publish/" + t;
          },
          ViewEventDetails: function (e, t) {
            return "/" + i() + "/" + e + "/announcements/detail/" + t;
          },
          Listing: function (e) {
            return "/" + i() + "/" + e + "/announcements/(listing)?";
          },
          Migrate: function (e, t) {
            return (
              "/" + i() + "/" + e + "/partnerevents/migrate_announcement/" + t
            );
          },
          MigrateCategory: function (e, t) {
            return (
              "/" +
              i() +
              "/" +
              e +
              "/partnerevents/migrate_category_announcement/" +
              t
            );
          },
          ViewOldAnnouncement: function (e, t) {
            return (
              "/" + i() + "/" + e + "/partnerevents/view_old_announcement/" + t
            );
          },
          PreviewOldAnnouncement: function (e, t) {
            return (
              "/" +
              i() +
              "/" +
              e +
              "/partnerevents/preview_old_announcement/" +
              t
            );
          },
          MigrateEvents: function () {
            return "/(migrateevents|migrate)";
          },
          MigrateSaleEvents: function () {
            return "/migrate/migratesale";
          },
          WorkshopHub: function (e) {
            return "/app/" + e + "/workshop/";
          },
          AppHub: function (e) {
            return "/app/" + e;
          },
          GroupHub: function (e) {
            return "/groups/" + e;
          },
          DiagData: function () {
            return "/" + i() + "/:anything*/diagdata";
          },
        };
    },
    "226m": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("OS6B"),
        l = n("lkRc"),
        s = (function () {
          function e() {
            this.m_mapOptInData = new Map();
          }
          return (
            (e.Get = function () {
              return (
                this.s_Singleton || (this.s_Singleton = new e()),
                this.s_Singleton
              );
            }),
            (e.prototype.ForceLoadOptInPage = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, i, s, c;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (t = {
                        sessionid: l.c.SESSIONID,
                        origin: self.origin,
                        cc: l.c.COUNTRY || "US",
                        l: l.c.LANGUAGE,
                        saleid: e,
                      }),
                        (n = l.c.COMMUNITY_BASE_URL + "sale/ajaxoptinsummary"),
                        (i = null),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]), [4, r.a.get(n, { params: t })]
                      );
                    case 2:
                      return (s = a.sent()), (i = s.data), [3, 4];
                    case 3:
                      return (
                        (c = a.sent()),
                        console.error(
                          "Failed getting opt in summary: " +
                            Object(o.a)(c).strErrorMsg
                        ),
                        [3, 4]
                      );
                    case 4:
                      return this.AddOptInPageToCache(e, i), [2, i];
                  }
                });
              });
            }),
            (e.prototype.AddOptInPageToCache = function (e, t) {
              var n = new Map();
              if (t && t.success)
                for (var a = 0, i = t.opted_in; a < i.length; a++) {
                  var r = i[a];
                  n.set(r.appid, r);
                }
              this.m_mapOptInData.set(e, n);
            }),
            (e.prototype.HintLoadOptInPageData = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.GetOptInPageData(e)
                        ? [2]
                        : [4, this.ForceLoadOptInPage(e)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.GetOptInPageData = function (e) {
              return this.m_mapOptInData.get(e);
            }),
            e
          );
        })();
    },
    "48GZ": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return k;
      }),
        n.d(t, "a", function () {
          return G;
        });
      var a = n("mrSG"),
        i = n("fcuX"),
        r = n("wUcC"),
        o = n("+w6J"),
        l = n("TyAF"),
        s = n("q1tI"),
        c = n("TtDX"),
        u = n("kLLr"),
        d = n("U+Q5"),
        p = n("Mgs7"),
        m = n("h5LU"),
        _ = n("fpVW"),
        g = n("6AJf"),
        h = n("NF5x"),
        f = n("Jqb/"),
        b = n("ka0M"),
        v = n("0rc7"),
        S = n("0OaU"),
        E = n("5E+2"),
        y = n("exH9"),
        O = n("TLQK"),
        T = n("OS6B"),
        C = n("opsS"),
        j = n("lkRc"),
        I = n("NrWE"),
        D = n("as1E"),
        w = n("k3PP"),
        M = n("K3tN"),
        k = Object(l.a)(function (e) {
          var t = e.saleSection,
            n = e.editModel,
            a = s.useState(null),
            i = a[0],
            r = a[1],
            o = Boolean(t.tabs && t.tabs.length > 0 && !i);
          return n.GetSaleSections().reduce(function (e, t) {
            return e + ("tabs" === t.section_type ? 1 : 0);
          }, 0) > 1
            ? s.createElement(
                "div",
                { className: D.TabsMultipleError },
                Object(O.f)("#Sale_Tabs_MultipleTabSections")
              )
            : s.createElement(
                "div",
                null,
                s.createElement(A, {
                  saleSection: t,
                  editModel: n,
                  onTabSelected: r,
                  selectedTab: i,
                }),
                o &&
                  s.createElement(
                    "div",
                    { className: D.TabsSelectToEdit },
                    Object(O.f)("#Sale_Tabs_SelectTab")
                  ),
                i &&
                  s.createElement(B, {
                    tab: i,
                    editModel: n,
                    editLanguage: n.GetCurEditLanguage(),
                  })
              );
        });
      function G(e, t) {
        var n = Object(g.g)(e, t);
        return n || (n = Object(O.f)("#Sale_Tabs_UnnamedTab", e.unique_id)), n;
      }
      var L = Object(l.a)(function (e) {
          var t,
            n,
            a = e.tab,
            i = (e.language, G(e.tab, e.language)),
            r =
              e.tab.capsules.length > 0
                ? Object(O.f)(
                    "#Sale_Tabs_TitleItemCount",
                    i,
                    e.tab.capsules.length
                  )
                : Object(O.f)("#Sale_Tabs_TitleShowAllItems", i),
            o =
              null !== (t = e.overrideStyle) && void 0 !== t
                ? t
                : Object(h.a)(e.selected, e.section),
            l = null;
          if (
            (null === (n = a.tab_bar_bg_image) || void 0 === n
              ? void 0
              : n.length) > 0
          ) {
            var c = new u.a(j.b.CLANSTEAMID);
            l = d.a.GenerateArtworkURLFromHashAndExtensions(
              c,
              a.tab_bar_bg_image
            );
          }
          return s.createElement(
            "div",
            {
              className: Object(y.a)(
                D.TabsSelectorEntry,
                e.selected && D.TabsSelectorEntrySelected
              ),
              style: o,
              onClick: function () {
                return e.onSelected(e.tab);
              },
            },
            s.createElement("span", null, r),
            Boolean(l) &&
              s.createElement("img", { className: M.ImgPreview, src: l })
          );
        }),
        A = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GenerateUniqueID = function () {
              var e = this.props.saleSection.tabs;
              return (
                (e
                  ? e.reduce(function (e, t) {
                      return Math.max(t.unique_id, e);
                    }, 0)
                  : 0) + 1
              );
            }),
            (t.prototype.OnAddTab = function () {
              this.props.saleSection.tabs || (this.props.saleSection.tabs = []);
              var e = {
                unique_id: this.GenerateUniqueID(),
                default_label: null,
                localized_label: null,
                capsules: [],
              };
              this.props.saleSection.tabs.push(e),
                this.props.editModel.SetDirty(i.c.jsondata_sales);
            }),
            (t.prototype.OnDeleteTabPrompt = function (e) {
              var t = this,
                n = this.props.saleSection.tabs[e];
              Object(b.d)(
                s.createElement(f.d, {
                  strTitle: Object(O.f)("#Sale_Tabs_DeletePrompt_Title"),
                  strDescription: Object(O.f)(
                    "#Sale_Tabs_DeletePrompt_Body",
                    G(n, this.props.editModel.GetCurEditLanguage())
                  ),
                  onOK: function () {
                    return t.OnDeleteTabConfirmed(n);
                  },
                }),
                window
              );
            }),
            (t.prototype.OnSelectTab = function (e) {
              this.props.onTabSelected(e);
            }),
            (t.prototype.OnDeleteTabConfirmed = function (e) {
              (this.props.saleSection.tabs = this.props.saleSection.tabs.filter(
                function (t) {
                  return t != e;
                }
              )),
                this.props.editModel.SetDirty(i.c.jsondata_sales),
                this.props.selectedTab === e && this.OnSelectTab(null);
            }),
            (t.prototype.RenderTab = function (e) {
              var t = e === this.props.selectedTab;
              return s.createElement(L, {
                section: this.props.saleSection,
                selected: t,
                tab: e,
                onSelected: this.OnSelectTab,
                language: this.props.editModel.GetCurEditLanguage(),
                overrideStyle: t
                  ? { color: "#000000", background: "#d3d3d3" }
                  : { color: "#FFFFFF", background: "" },
              });
            }),
            (t.prototype.RenderTabs = function () {
              var e = this;
              return this.props.saleSection.tabs
                ? s.createElement(v.a, {
                    items: this.props.saleSection.tabs,
                    onDelete: this.OnDeleteTabPrompt,
                    onReorder: function () {
                      return e.props.editModel.SetDirty(i.c.jsondata_sales);
                    },
                    render: this.RenderTab,
                  })
                : null;
            }),
            (t.prototype.render = function () {
              var e = this;
              return s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: _.EventEditorTextTitle },
                  Object(O.f)("#Sale_Tabs_Colors"),
                  s.createElement(w.d, {
                    tooltip: Object(O.f)("#Sale_Tabs_Colors_ttip"),
                  })
                ),
                s.createElement(N, {
                  section: this.props.saleSection,
                  editModel: this.props.editModel,
                }),
                s.createElement(
                  "div",
                  { className: M.CurrentTabsCtn },
                  s.createElement(
                    "div",
                    { className: _.EventEditorTextTitle },
                    Object(O.f)("#Sale_Tabs_Current"),
                    s.createElement(w.d, {
                      tooltip: Object(O.f)("#Sale_Tabs_Current_ttip"),
                    })
                  ),
                  s.createElement(
                    "div",
                    { className: M.AddButton },
                    s.createElement(
                      E.a,
                      { toolTipContent: Object(O.f)("#Sale_Tabs_AddTab_ttip") },
                      s.createElement(
                        p.r,
                        {
                          onClick: function () {
                            return e.OnAddTab();
                          },
                        },
                        Object(O.f)("#Sale_Tabs_AddTab")
                      )
                    )
                  ),
                  this.RenderTabs()
                )
              );
            }),
            Object(a.c)([C.a], t.prototype, "OnAddTab", null),
            Object(a.c)([C.a], t.prototype, "OnDeleteTabPrompt", null),
            Object(a.c)([C.a], t.prototype, "OnSelectTab", null),
            Object(a.c)([C.a], t.prototype, "RenderTab", null),
            (t = Object(a.c)([l.a], t))
          );
        })(s.Component),
        B = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { bShowItemListing: !1 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidUpdate = function (e, t) {
              this.props.tab !== e.tab &&
                this.setState({ bShowItemListing: !1 });
            }),
            (t.prototype.OnTitleChange = function (e) {
              (this.props.tab.default_label = e),
                this.props.editModel.SetDirty(i.c.jsondata_sales);
            }),
            (t.prototype.OnSetCustomTitle = function (e) {
              var t = this.props,
                n = t.tab,
                a = t.editLanguage;
              t.editModel.SetSaleSectionTabName(a, n, e);
            }),
            (t.prototype.OnClearCustomTitle = function () {
              var e = this.props,
                t = e.tab,
                n = e.editLanguage;
              e.editModel.SetSaleSectionTabName(n, t, "");
            }),
            (t.prototype.OnShowTabItems = function () {
              this.setState({ bShowItemListing: !0 });
            }),
            (t.prototype.RenderHideItemFilter = function () {
              return s.createElement(
                "div",
                { className: D.TabHideItemFilterCtn },
                Object(O.f)("#Sale_Tabs_ShowItems"),
                s.createElement(
                  p.d,
                  { onClick: this.OnShowTabItems },
                  Object(O.f)("#Sale_Tabs_ShowItems_Button")
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.tab,
                n = e.editLanguage,
                a = e.editModel,
                i =
                  this.state.bShowItemListing ||
                  (t.capsules && t.capsules.length > 0);
              return s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: _.EventEditorTextTitle },
                  Object(O.f)("#Sale_Tabs_Title"),
                  s.createElement(w.d, {
                    tooltip: Object(O.f)("#Sale_Tabs_Title_ttip"),
                  })
                ),
                s.createElement(r.a, {
                  key: "TabName" + t.unique_id,
                  default_label: t.default_label,
                  localized_label: t.localized_label,
                  editLanguage: n,
                  onClearCustomTitle: this.OnClearCustomTitle,
                  onSetCustomTitle: this.OnSetCustomTitle,
                  onSetDefaultLabel: this.OnTitleChange,
                }),
                !i && this.RenderHideItemFilter(),
                i &&
                  s.createElement(o.a, {
                    key: "TabItems" + t.unique_id,
                    capsuleContainer: t,
                    editModel: this.props.editModel,
                    uniqueKey: "Tab" + t.unique_id,
                    disableDaySelection: !1,
                    titleLocToken: "#Sale_Tabs_ItemTitle",
                    ttipLocToken: "#Sale_Tabs_ItemTitle_ttip",
                  }),
                s.createElement(R, { tab: t, editModel: a })
              );
            }),
            Object(a.c)([C.a], t.prototype, "OnTitleChange", null),
            Object(a.c)([C.a], t.prototype, "OnSetCustomTitle", null),
            Object(a.c)([C.a], t.prototype, "OnClearCustomTitle", null),
            Object(a.c)([C.a], t.prototype, "OnShowTabItems", null),
            (t = Object(a.c)([l.a], t))
          );
        })(s.Component);
      function F(e, t, n, a) {
        Object(c.a)(
          s.createElement(m.a, {
            onChange: function (e) {
              (t[a] = e), n.SetDirty(i.c.jsondata_sales);
            },
            color: t[a],
          }),
          e,
          { bDisablePopTop: !0 }
        );
      }
      var N = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.section,
                n = e.editModel,
                a = Object(h.a)(!1, t),
                i = Object(h.a)(!0, t);
              return s.createElement(
                "div",
                { style: { display: "flex" } },
                s.createElement(
                  "div",
                  { className: _.HalfColumn },
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(e, t, n, "tab_inactive_label_color");
                      },
                      className: _.EventEditorTextTitle,
                      style: a,
                    },
                    Object(O.f)("#Sale_Section_TabInactive_Label_Color")
                  ),
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(
                          e,
                          t,
                          n,
                          "tab_inactive_background_gradient_top"
                        );
                      },
                      className: _.EventEditorTextTitle,
                      style: a,
                    },
                    Object(O.f)("#Sale_Section_TabInactive_Background_Top")
                  ),
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(
                          e,
                          t,
                          n,
                          "tab_inactive_background_gradient_bottom"
                        );
                      },
                      className: _.EventEditorTextTitle,
                      style: a,
                    },
                    Object(O.f)("#Sale_Section_TabInactive_Background_Bottom")
                  )
                ),
                s.createElement(
                  "div",
                  { className: _.HalfColumn },
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(e, t, n, "tab_active_label_color");
                      },
                      className: _.EventEditorTextTitle,
                      style: i,
                    },
                    Object(O.f)("#Sale_Section_TabActive_Label_Color")
                  ),
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(e, t, n, "tab_active_background_gradient_top");
                      },
                      className: _.EventEditorTextTitle,
                      style: i,
                    },
                    Object(O.f)("#Sale_Section_TabActive_Background_Top")
                  ),
                  s.createElement(
                    p.d,
                    {
                      onClick: function (e) {
                        return F(
                          e,
                          t,
                          n,
                          "tab_active_background_gradient_bottom"
                        );
                      },
                      className: _.EventEditorTextTitle,
                      style: i,
                    },
                    Object(O.f)("#Sale_Section_TabActive_Background_Bottom")
                  )
                )
              );
            }),
            (t = Object(a.c)([l.a], t))
          );
        })(s.Component),
        R = Object(l.a)(function (e) {
          var t = e.tab,
            n = e.editModel,
            r = s.useState(new d.b(n.GetClanSteamID()))[0],
            o = s.useState(!1),
            l = o[0],
            c = o[1];
          return s.createElement(
            "div",
            null,
            s.createElement(
              "div",
              null,
              Object(O.f)("#Sale_Tabs_Background_title")
            ),
            s.createElement(
              "div",
              null,
              Object(O.f)("#Sale_Tabs_Background_desc")
            ),
            s.createElement(I.b, {
              bAllowPreviousClanImages: !0,
              onDropFiles: function (e) {
                return Object(a.b)(void 0, void 0, void 0, function () {
                  var o, l, u, p, m, _, g;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (!(e && e.length > 0)) return [3, 9];
                        c(!0), (o = ["tab_bar_background"]), (a.label = 1);
                      case 1:
                        return (
                          a.trys.push([1, 6, 7, 8]), [4, r.AddImage(e[0], 0, o)]
                        );
                      case 2:
                        return a.sent()
                          ? [3, 3]
                          : (console.error(
                              "TabSaleBackgroundImageEditor.OnDropFiles: failed file=" +
                                e[0].name
                            ),
                            Object(b.d)(
                              s.createElement(f.f, {
                                strDescription: Object(O.f)(
                                  "#ImagePicker_Error",
                                  e[0].name
                                ),
                              }),
                              window
                            ),
                            [3, 5]);
                      case 3:
                        return [4, r.UploadAllFiles(o)];
                      case 4:
                        (l = a.sent()),
                          (u = l[Object.keys(l)[0]]),
                          (p = u ? d.a.GetExtensionString(u) : null),
                          (m = u ? u.image_hash + p : null),
                          (t.tab_bar_bg_image = m),
                          n.SetDirty(i.c.jsondata_sales),
                          (a.label = 5);
                      case 5:
                        return [3, 8];
                      case 6:
                        return (
                          (_ = a.sent()),
                          (g = Object(T.a)(_)),
                          console.error(
                            "TabSaleBackgroundImageEditor: failed add " +
                              g.strErrorMsg,
                            g
                          ),
                          [3, 8]
                        );
                      case 7:
                        return c(!1), [7];
                      case 8:
                        return [3, 10];
                      case 9:
                        console.log(
                          "TabSaleBackgroundImageEditor: error fnOnDropFiles file missing",
                          e
                        ),
                          (a.label = 10);
                      case 10:
                        return [2];
                    }
                  });
                });
              },
              OnClanImageSelected: function (e, r) {
                return Object(a.b)(void 0, void 0, void 0, function () {
                  var r, o;
                  return Object(a.e)(this, function (a) {
                    return (
                      (r = e ? d.a.GetExtensionString(e) : null),
                      (o = e ? e.image_hash + r : null),
                      (t.tab_bar_bg_image = o),
                      n.SetDirty(i.c.jsondata_sales),
                      [2]
                    );
                  });
                });
              },
              clanSteamID: n.GetClanSteamID(),
              fnSetImageURL: n.SetImageURL,
              rgRealmList: n.GetIncludedRealmList(),
            }),
            l &&
              s.createElement(S.a, {
                size: "medium",
                position: "center",
                string: Object(O.f)("#Uploading"),
              }),
            Boolean(t.tab_bar_bg_image) &&
              s.createElement("img", {
                src: d.a.GenerateArtworkURLFromHashAndExtensions(
                  n.GetClanSteamID(),
                  t.tab_bar_bg_image
                ),
              })
          );
        });
    },
    "4lry": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return P;
      }),
        n.d(t, "b", function () {
          return Y;
        });
      var a = n("mrSG"),
        i = n("fcuX"),
        r = n("KP/B"),
        o = n("vDqi"),
        l = n.n(o),
        s = n("mgoM"),
        c = n("3+zv"),
        u = n("OS6B"),
        d = n("lkRc"),
        p = new ((function () {
          function e(e) {
            void 0 === e && (e = null),
              (this.m_rgCategoriesForTagID = null),
              (this.m_rgTagNameForTagID = null),
              (this.m_rgAtomicTagIDsForTagID = null),
              (this.m_rgLocalizedCategoryNames = null),
              (this.m_rgLocalizedTagNames = null),
              (this.m_rgLanguages = null),
              e && this.ParseResponse(e);
          }
          return (
            (e.prototype.GetCategoriesForTagID = function () {
              return this.m_rgCategoriesForTagID;
            }),
            (e.prototype.GetTagNameForTagID = function () {
              return this.m_rgTagNameForTagID;
            }),
            (e.prototype.GetAtomicTagIDsForTagID = function () {
              return this.m_rgAtomicTagIDsForTagID;
            }),
            (e.prototype.GetLocalizedCategoryNames = function () {
              return this.m_rgLocalizedCategoryNames;
            }),
            (e.prototype.GetLocalizedTagNames = function () {
              return this.m_rgLocalizedTagNames;
            }),
            (e.prototype.GetLanguages = function () {
              return this.m_rgLanguages;
            }),
            (e.prototype.AutoGenerateFacets = function () {
              var e = this.ComputeLocalizedCategoryNames(),
                t = this.ComputeLocalizedTagNames(),
                n = this.ComputeCategoryToTagMap(),
                a = this.FindNonAtomicTags(),
                i = this.ComputeFacetCategoryToTagMap(n, a),
                r = this.ComputeAtomicTagToTagsMap();
              return this.ComputeFacets(i, r, e, t);
            }),
            (e.prototype.AutoGenerateFacetsAsync = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.EnsureLoaded()];
                    case 1:
                      return e.sent(), [2, this.AutoGenerateFacets()];
                  }
                });
              });
            }),
            (e.prototype.BIsTagAtomic = function (e) {
              return (
                this.m_rgAtomicTagIDsForTagID.has(e) &&
                this.m_rgAtomicTagIDsForTagID.get(e).includes(e)
              );
            }),
            (e.prototype.ParseResponse = function (e) {
              (this.m_rgCategoriesForTagID = new Map()),
                (this.m_rgTagNameForTagID = new Map()),
                (this.m_rgAtomicTagIDsForTagID = new Map()),
                (this.m_rgLocalizedCategoryNames = new Map()),
                (this.m_rgLocalizedTagNames = new Map()),
                (this.m_rgLanguages = new Array());
              for (
                var t = 0, n = Object.keys(e.rgCategoriesByTag);
                t < n.length;
                t++
              ) {
                var a = n[t];
                this.m_rgCategoriesForTagID.set(
                  Number(a),
                  Array.from(e.rgCategoriesByTag[a])
                );
              }
              for (
                var i = 0, r = Object.keys(e.rgTagNames);
                i < r.length;
                i++
              ) {
                a = r[i];
                this.m_rgTagNameForTagID.set(Number(a), e.rgTagNames[a]);
              }
              for (
                var o = 0, l = Object.keys(e.rgTagBreakdown);
                o < l.length;
                o++
              ) {
                a = l[o];
                this.m_rgAtomicTagIDsForTagID.set(
                  Number(a),
                  Array.from(e.rgTagBreakdown[a]).map(function (e) {
                    return Number(e);
                  })
                );
              }
              for (
                var s = 0, c = Object.keys(e.rgLocalizedCategoryNames);
                s < c.length;
                s++
              ) {
                var u = c[s];
                this.m_rgLocalizedCategoryNames.set(
                  u,
                  Array.from(e.rgLocalizedCategoryNames[u])
                );
              }
              for (
                var d = 0, p = Object.keys(e.rgLocalizedTagNames);
                d < p.length;
                d++
              ) {
                a = p[d];
                this.m_rgLocalizedTagNames.set(
                  Number(a),
                  Array.from(e.rgLocalizedTagNames[a])
                );
              }
              this.m_rgLanguages = Array.from(e.rgLanguages);
            }),
            (e.prototype.EnsureLoaded = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e;
                return Object(a.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_rgCategoriesForTagID
                        ? [2]
                        : [4, this.Load()];
                    case 1:
                      return (e = t.sent()), this.ParseResponse(e), [2];
                  }
                });
              });
            }),
            (e.prototype.Load = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (e = null), (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.get(
                            d.c.COMMUNITY_BASE_URL +
                              "sale/ajaxgetcategoriesbytag"
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (t = a.sent()),
                        1 !== (null == (e = t.data) ? void 0 : e.success)
                          ? (console.error(
                              "Unable to load tag category data: " +
                                (null == e ? void 0 : e.success)
                            ),
                            [2, null])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (n = a.sent()),
                        console.error(
                          "Unable to load tag category data: " +
                            Object(u.a)(n).strErrorMsg
                        ),
                        [2, null]
                      );
                    case 4:
                      return [2, e];
                  }
                });
              });
            }),
            (e.prototype.Verify = function (e) {
              for (
                var t = new Set(),
                  n = new Set(),
                  a = Object.keys(e.rgTagBreakdown),
                  i = Object.keys(e.rgTagNames),
                  r = Object.keys(e.rgCategoriesByTag),
                  o = 0,
                  l = a;
                o < l.length;
                o++
              )
                for (
                  var s = l[o], c = 0, u = e.rgTagBreakdown[s].flat();
                  c < u.length;
                  c++
                ) {
                  var d = u[c];
                  i.includes(d.toString()) || t.add(d),
                    (r.includes(d.toString()) &&
                      e.rgCategoriesByTag[d] &&
                      0 !== e.rgCategoriesByTag[d].length) ||
                      n.add(d);
                }
              console.log(t.size + " un-named tags."),
                t.size > 0 && console.log(t),
                console.log(n.size + " un-categorized tags."),
                n.size > 0 && console.log(n);
            }),
            (e.prototype.ComputeCategoryToTagMap = function () {
              var e = new Map();
              return (
                this.m_rgCategoriesForTagID.forEach(function (t, n) {
                  if (t)
                    for (var a = 0, i = t; a < i.length; a++) {
                      var r = i[a];
                      e.has(r) || e.set(r, new Array()), e.get(r).push(n);
                    }
                }),
                e
              );
            }),
            (e.prototype.FindNonAtomicTags = function () {
              var e = new Set();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, n) {
                  1 !== t.length && e.add(n);
                }),
                e
              );
            }),
            (e.prototype.ComputeFacetCategoryToTagMap = function (e, t) {
              for (
                var n = new Set(),
                  a = new Map(),
                  i = function (i, r) {
                    for (var o = 0, l = e.get(r); o < l.length; o++) {
                      var s = l[o];
                      n.has(s) || t.has(s) || (n.add(s), a.get(i).push(s));
                    }
                  },
                  r = 0,
                  o = [
                    "supergenre",
                    "genre",
                    "subgenre",
                    "visuals",
                    "theme_mood",
                    "feature",
                    "players",
                  ];
                r < o.length;
                r++
              ) {
                var l = o[r];
                a.set(l, new Array()),
                  "theme_mood" === l ? (i(l, "theme"), i(l, "mood")) : i(l, l);
              }
              return a;
            }),
            (e.prototype.ComputeLocalizedCategoryNames = function () {
              var e = new Map();
              e.set("supergenre", "#App_Taxonomy_Survey_QSuperGenreTitle"),
                e.set("genre", "#App_Taxonomy_Survey_QGenreTitle"),
                e.set("subgenre", "#App_Taxonomy_Survey_QSubGenreTitle"),
                e.set("visuals", "#App_Taxonomy_Survey_QVisualsTitle"),
                e.set("theme_mood", "#App_Taxonomy_Survey_QThemeMoodTitle"),
                e.set("feature", "#App_Taxonomy_Survey_QFeaturesTitle"),
                e.set("players", "#App_Taxonomy_Survey_QPlayersTitle");
              var t = new Map();
              return (
                this.m_rgLocalizedCategoryNames.forEach(function (n, a) {
                  var i = new Array(30);
                  (i[0] = e.get(a)), t.set(a, i);
                }),
                t
              );
            }),
            (e.prototype.ComputeLocalizedTagNames = function () {
              var e = this,
                t = new Map();
              return (
                this.m_rgLocalizedTagNames.forEach(function (n, a) {
                  var i = n,
                    r = new Array(30);
                  r.fill(""),
                    e.m_rgLanguages.forEach(function (e, t) {
                      var n = Object(s.d)(e, -1);
                      -1 === n
                        ? console.warn("Unrecognized language: " + e)
                        : 0 <= n && n < 30 && (r[n] = i[t]);
                    }),
                    t.set(a, r);
                }),
                t
              );
            }),
            (e.prototype.ComputeAtomicTagToTagsMap = function () {
              var e = new Map();
              return (
                this.m_rgAtomicTagIDsForTagID.forEach(function (t, n) {
                  for (var a = 0, i = t; a < i.length; a++) {
                    var r = i[a],
                      o = Number(r);
                    e.has(o) || e.set(o, new Array()), e.get(o).push(n);
                  }
                }),
                e
              );
            }),
            (e.prototype.ComputeFacets = function (e, t, n, a) {
              var i = new Array();
              return (
                e.forEach(function (e, r) {
                  for (
                    var o = { name: n.get(r), facetValues: new Array() },
                      l = Array(),
                      s = 0,
                      u = e;
                    s < u.length;
                    s++
                  ) {
                    var d = u[s];
                    if (a.get(d)) {
                      var p = {
                        name: a.get(d),
                        subtitle: new Array(),
                        rgStoreTagFilter: {
                          type: c.o.k_EStoreFilterClauseTypeAnd,
                          rgSubexpressions: [
                            {
                              type: c.o.k_EStoreFilterClauseTypeOr,
                              rgSubexpressions: t.has(d)
                                ? t.get(d).map(function (e) {
                                    return {
                                      type:
                                        c.o.k_EStoreFilterClauseTypeStoreTag,
                                      value: e,
                                    };
                                  })
                                : [
                                    {
                                      type:
                                        c.o.k_EStoreFilterClauseTypeStoreTag,
                                      value: d,
                                    },
                                  ],
                            },
                          ],
                        },
                        nAtomicStoreTagID: d,
                        filter: null,
                        matchingCapsules: [],
                      };
                      o.facetValues.push(p);
                    } else l.push(d);
                  }
                  l.length > 0 &&
                    console.warn(
                      "No name information found for tag count " +
                        l.length +
                        ", skipping.",
                      l
                    ),
                    i.push(o);
                }),
                i
              );
            }),
            e
          );
        })())(),
        m = n("TyAF"),
        _ = n("q1tI"),
        g = n("TtDX"),
        h = n("Mgs7"),
        f = n("IjL/"),
        b = n("Jqb/"),
        v = n("ka0M"),
        S = n("0rc7"),
        E = n("0OaU"),
        y = n("exH9"),
        O = n("TLQK"),
        T = n("h5LU"),
        C = n("Vitc"),
        j = n("as1E"),
        I = n("k3PP"),
        D = n("oqmg"),
        w = n("IMce"),
        M = n("UvY0"),
        k = n("vBFs"),
        G = n("gyoR"),
        L = n("5eAM"),
        A = n("dpTt"),
        B = n("165M"),
        F = Object(m.a)(function (e) {
          var t = e.language,
            n = e.facetValue,
            a = e.editModel,
            i = e.capsuleContainer,
            r = e.fnMarkEditModelDirty,
            o = function (e) {
              if ("name" === e.target.name) {
                var a = n.name,
                  i = O.a.Set(a || [], t, e.target.value);
                n.name = i;
              } else if ("subtitle" === e.target.name) {
                var o = n.subtitle,
                  l = O.a.Set(o || [], t, e.target.value);
                n.subtitle = l;
              }
              r();
            },
            l = function (e) {
              (n.filter = e), r();
            },
            u = [
              {
                label: Object(O.f)("#Sale_TagFilter_Filter"),
                data: c.l.k_ESaleTagFilter,
              },
              { label: Object(O.f)("#LanguageTitle"), data: c.l.k_ELanguage },
              {
                label: Object(O.f)("#Browse_Sale_Mature_Themes"),
                data: c.l.k_EContentDescriptor,
              },
              {
                label: Object(O.f)("#Sale_Preferences"),
                data: c.l.k_EUserPreference,
              },
              {
                label: Object(O.f)("#Sale_BrowserSortOption_Price"),
                data: c.l.k_EPrice,
              },
              {
                label: Object(O.f)("#AppTypeLabelTitle"),
                data: c.l.k_EAppType,
              },
            ],
            p = [
              { label: Object(O.f)("#Browse_Sale_Mature_Feature"), data: 5 },
              { label: Object(O.f)("#Browse_sale_Violence_Feature"), data: 2 },
              { label: Object(O.f)("#Browse_Sale_Sexual_Feature"), data: 1 },
              { label: Object(O.f)("#Browse_Sale_Adult_Feature"), data: 3 },
            ],
            m = [
              {
                label: Object(O.f)("#UserPreference_HideOwnedItems"),
                data: c.m.k_EHideOwnedItems,
              },
              {
                label: Object(O.f)("#UserPreference_HideWishlistedItems"),
                data: c.m.k_EHideWishlistedItems,
              },
              {
                label: Object(O.f)("#UserPreference_HideIgnoredItems"),
                data: c.m.k_EHideIgnoredItems,
              },
            ],
            g = [
              { label: Object(O.f)("#AppTypeLabel_game"), data: "game" },
              {
                label: Object(O.f)("#AppTypeLabel_software"),
                data: "software",
              },
              { label: Object(O.f)("#AppTypeLabel_dlc"), data: "dlc" },
              { label: Object(O.f)("#AppTypeLabel_demo"), data: "demo" },
              { label: Object(O.f)("#AppTypeLabel_music"), data: "music" },
              { label: Object(O.f)("#AppTypeLabel_video"), data: "video" },
              {
                label: Object(O.f)("#AppTypeLabel_hardware"),
                data: "hardware",
              },
            ];
          return _.createElement(
            "div",
            {
              className: Object(y.a)(
                j.FilterDisplayCtn,
                C.FacetValueFilterDisplayCtn
              ),
            },
            _.createElement(
              "div",
              null,
              _.createElement(h.n, null, Object(O.f)("#EventEditor_TypeTitle")),
              _.createElement(h.i, {
                rgOptions: u,
                selectedOption: n.type || c.l.k_ESaleTagFilter,
                onChange: function (e) {
                  (n.type = e.data),
                    n.type === c.l.k_ELanguage &&
                      null == n.language &&
                      (n.language = Object(s.d)(d.c.LANGUAGE)),
                    n.type === c.l.k_EContentDescriptor &&
                      null == n.contentDescriptor &&
                      (n.contentDescriptor = 5),
                    n.type === c.l.k_EUserPreference &&
                      null == n.userPreference &&
                      (n.userPreference = c.m.k_EHideOwnedItems),
                    n.type === c.l.k_EAppType &&
                      null == n.appType &&
                      (n.appType = "game"),
                    r();
                },
              })
            ),
            _.createElement(
              "div",
              { className: C.FacetValueCtn },
              _.createElement(h.m, {
                name: "name",
                label: Object(O.f)("#FacetedBrowseEditor_Name"),
                tooltip: Object(O.f)(
                  "#FacetedBrowseEditor_Tooltip_FacetValue_Name"
                ),
                value: O.a.Get(n.name, t),
                onChange: o,
              }),
              _.createElement(h.m, {
                name: "subtitle",
                label: Object(O.f)("#FacetedBrowseEditor_Subtitle"),
                tooltip: Object(O.f)(
                  "#FacetedBrowseEditor_Tooltip_FacetValue_Subtitle"
                ),
                value: O.a.Get(n.subtitle, t),
                onChange: o,
              }),
              (n.type === c.l.k_ESaleTagFilter || void 0 === n.type) &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(
                    h.n,
                    null,
                    Object(O.f)("#Sale_TagFilter_Filter")
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement(
                      h.d,
                      {
                        onClick: function () {
                          Object(v.c)(
                            _.createElement(D.a, {
                              editModel: a,
                              filter: n.filter,
                              title: Object(O.f)("#Sale_TagFilter_EditFilter"),
                              onApplyFilter: l,
                              ignoreStartingReferences: i,
                            }),
                            window
                          );
                        },
                      },
                      Object(O.f)("#Sale_TagFilter_EditFilter")
                    )
                  )
                ),
              n.type === c.l.k_ELanguage &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(h.n, null, Object(O.f)("#LanguageTitle")),
                  _.createElement(
                    "div",
                    null,
                    _.createElement(k.a, {
                      selectedLang: n.language || Object(s.d)(d.c.LANGUAGE),
                      fnOnLanguageChanged: function (e) {
                        (n.language = e), r();
                      },
                    })
                  )
                ),
              n.type === c.l.k_EContentDescriptor &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(h.n, null, Object(O.f)("#ContentDescriptor")),
                  _.createElement(
                    "div",
                    null,
                    _.createElement(h.i, {
                      rgOptions: p,
                      selectedOption: n.contentDescriptor || 5,
                      onChange: function (e) {
                        (n.contentDescriptor = e.data), r();
                      },
                    })
                  )
                ),
              n.type === c.l.k_EUserPreference &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(h.n, null, Object(O.f)("#Sale_Preferences")),
                  _.createElement(
                    "div",
                    null,
                    _.createElement(h.i, {
                      rgOptions: m,
                      selectedOption: n.userPreference || c.m.k_EHideOwnedItems,
                      onChange: function (e) {
                        (n.userPreference = e.data), r();
                      },
                    })
                  )
                ),
              n.type === c.l.k_EAppType &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(h.n, null, Object(O.f)("#AppTypeLabelTitle")),
                  _.createElement(
                    "div",
                    null,
                    _.createElement(h.i, {
                      rgOptions: g,
                      selectedOption: n.appType || "game",
                      onChange: function (e) {
                        (n.appType = e.data), r();
                      },
                    })
                  )
                )
            ),
            n.type !== c.l.k_EPrice &&
              _.createElement(
                "div",
                null,
                _.createElement(h.e, {
                  label: Object(O.f)("#FacetedBrowseEditor_EnabledByDefault"),
                  checked: n.bEnabledByDefault,
                  onChange: function (e) {
                    (n.bEnabledByDefault = e), r();
                  },
                })
              )
          );
        }),
        N = Object(m.a)(function (e) {
          var t = e.language,
            n = e.facet,
            a = e.facetValueArray,
            i = e.editModel,
            r = e.capsuleContainer,
            o = e.fnMarkEditModelDirty,
            l = e.fnNotifyExpanded,
            s = _.useState(!1),
            c = s[0],
            u = s[1];
          return _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              { className: j.SaleSectionTitleHeader },
              _.createElement(
                "div",
                { className: j.EventEditorTextTitle },
                Object(O.f)(
                  "#FacetedBrowseEditor_NumFacetValues",
                  a.length.toString()
                )
              ),
              _.createElement(B.a, {
                bIsMinimized: !c,
                fnToggleMinimize: function () {
                  l(!c), u(!c);
                },
              })
            ),
            c &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(S.a, {
                  items: a,
                  onDelete: function (e, t) {
                    a.splice(e, 1), o();
                  },
                  onReorder: function () {
                    o();
                  },
                  render: function (e) {
                    return _.createElement(F, {
                      language: t,
                      facetValue: e,
                      editModel: i,
                      capsuleContainer: r,
                      fnMarkEditModelDirty: o,
                    });
                  },
                }),
                _.createElement(
                  h.d,
                  {
                    onClick: function (e) {
                      a.push({
                        unique_id: i.GenerateFacetValueUniqueID(n),
                        name: [],
                        subtitle: [],
                        filter: { clauses: [] },
                        rgStoreTagFilter: null,
                        matchingCapsules: null,
                      }),
                        o();
                    },
                  },
                  Object(O.f)("#FacetedBrowseEditor_AddFacetValue")
                )
              )
          );
        }),
        R = Object(m.a)(function (e) {
          var t = e.language,
            n = e.facet,
            a = e.editModel,
            i = e.capsuleContainer,
            r = e.fnMarkEditModelDirty,
            o = e.fnNotifyExpanded;
          return _.createElement(
            "div",
            {
              className: Object(y.a)(
                j.FilterDisplayCtn,
                C.FacetFilterDisplayCtn
              ),
            },
            _.createElement(h.m, {
              name: "name",
              label: Object(O.f)("#FacetedBrowseEditor_Name"),
              tooltip: Object(O.f)("#FacetedBrowseEditor_Tooltip_Facet_Name"),
              value: O.a.Get(n.name, t),
              onChange: function (e) {
                if ("name" === e.target.name) {
                  var a = n.name,
                    i = O.a.Set(a || [], t, e.target.value);
                  n.name = i;
                }
                r();
              },
            }),
            _.createElement(N, {
              language: t,
              facet: n,
              facetValueArray: n.facetValues,
              editModel: a,
              capsuleContainer: i,
              fnMarkEditModelDirty: r,
              fnNotifyExpanded: o,
            })
          );
        }),
        x = Object(m.a)(function (e) {
          var t = e.language,
            n = e.section,
            a = e.facetArray,
            i = e.editModel,
            r = e.capsuleContainer,
            o = e.fnMarkEditModelDirty,
            l = _.useState(!1),
            s = l[0],
            c = l[1],
            u = _.useState(!1),
            d = u[0],
            p = u[1],
            m = function (e) {
              p(e);
            };
          return _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              { className: j.SaleSectionTitleHeader },
              _.createElement(
                "div",
                { className: j.EventEditorTextTitle },
                Object(O.f)(
                  "#FacetedBrowseEditor_NumFacets",
                  a.length.toString()
                )
              ),
              _.createElement(B.a, {
                bIsMinimized: !s,
                fnToggleMinimize: function () {
                  c(!s);
                },
              })
            ),
            s &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(S.a, {
                  items: a,
                  onDelete: function (e, t) {
                    a.splice(e, 1), o();
                  },
                  onReorder: function () {
                    o();
                  },
                  render: function (e) {
                    return _.createElement(R, {
                      language: t,
                      facet: e,
                      editModel: i,
                      capsuleContainer: r,
                      fnMarkEditModelDirty: o,
                      fnNotifyExpanded: m,
                    });
                  },
                  bDisabled: d,
                }),
                _.createElement(
                  h.d,
                  {
                    onClick: function (e) {
                      a.push({
                        unique_id: i.GenerateFacetUniqueID(n),
                        name: [],
                        facetValues: [],
                      }),
                        o();
                    },
                  },
                  Object(O.f)("#FacetedBrowseEditor_AddFacet")
                )
              )
          );
        }),
        P = Object(m.a)(function (e) {
          var t = e.section,
            n = e.capsuleContainer,
            o = e.editModel,
            l = e.bAllowPruneFacets,
            s = void 0 !== l && l,
            u = Object(_.useState)(!1),
            d = u[0],
            p = u[1],
            m = function () {
              o.SetDirty(i.c.jsondata_sales);
            },
            S = [
              {
                label: Object(O.f)("#FacetedBrowseEditor_SortFacetValues_Name"),
                tooltip: Object(O.f)(
                  "#FacetedBrowseEditor_Tooltip_SortFacetValues_ByName"
                ),
                data: c.k.k_ESortFacetsByName,
              },
              {
                label: Object(O.f)(
                  "#FacetedBrowseEditor_SortFacetValues_MatchCount"
                ),
                tooltip: Object(O.f)(
                  "#FacetedBrowseEditor_Tooltip_SortFacetValues_ByCount"
                ),
                data: c.k.k_ESortFacetsByMatchCount,
              },
              {
                label: Object(O.f)(
                  "#FacetedBrowseEditor_SortFacetValues_Manual"
                ),
                tooltip: Object(O.f)(
                  "#FacetedBrowseEditor_Tooltip_SortFacetValues_Manual"
                ),
                data: c.k.k_ESortFacetsManually,
              },
            ],
            y = function () {
              return Object(a.b)(void 0, void 0, void 0, function () {
                var e, t, l, s;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return 0 ===
                        (e = o.GetEventModel().GetTaggedItems()).length
                        ? [2]
                        : [4, U(n.facets, e)];
                    case 1:
                      for (a.sent(), t = 0, l = n.facets; t < l.length; t++)
                        (s = l[t]).facetValues = s.facetValues.filter(function (
                          t
                        ) {
                          return t.type === c.l.k_ELanguage
                            ? e.some(function (e) {
                                return L.a
                                  .GetAppLinkInfo(e.capsule.id)
                                  .localized_langs.includes(t.language);
                              })
                            : t.type === c.l.k_EContentDescriptor
                            ? e.some(function (e) {
                                var n = L.a.GetAppLinkInfo(e.capsule.id);
                                return (
                                  Boolean(n) &&
                                  n.content_descriptors.includes(
                                    t.contentDescriptor
                                  )
                                );
                              })
                            : t.type === c.l.k_EAppType
                            ? e.some(function (e) {
                                var n = L.a.GetAppLinkInfo(e.capsule.id);
                                return Boolean(n) && n.type === t.appType;
                              })
                            : t.type === c.l.k_EUserPreference ||
                              t.type === c.l.k_EPrice ||
                              e.some(function (e) {
                                return Object(r.h)(e.tags, t.filter);
                              });
                        });
                      return o.SetDirty(i.c.jsondata_sales), [2];
                  }
                });
              });
            };
          return _.createElement(
            f.a,
            null,
            _.createElement(
              M.b,
              { clanSteamID: o.GetClanSteamID(), requireAdmin: !0 },
              _.createElement(h.q, {
                label: Object(O.f)("#FacetedBrowseEditor_FacetsCheckbox"),
                description: Object(O.f)(
                  "#FacetedBrowseEditor_FacetsCheckboxHelp"
                ),
                checked: n.enable_faceted_browsing,
                onChange: function (e) {
                  (n.enable_faceted_browsing = e),
                    e && !n.facets && (n.facets = []),
                    o.SetDirty(i.c.jsondata_sales);
                },
              }),
              n.enable_faceted_browsing &&
                _.createElement(
                  "div",
                  { className: j.FilterDisplayCtn },
                  _.createElement(
                    "div",
                    { className: w.FilterDisplayCtn },
                    _.createElement(
                      "div",
                      { className: w.FilterTitle },
                      Object(O.f)("#FacetedBrowseEditor_FacetsSection")
                    )
                  ),
                  _.createElement(
                    "div",
                    { className: w.FilterDisplayCtn },
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement("span", null),
                      _.createElement(
                        h.d,
                        {
                          onClick: function (e) {
                            Object(g.a)(
                              _.createElement(T.a, {
                                onChange: function (e) {
                                  (n.highlighted_facet_color = e), m();
                                },
                                color: n.highlighted_facet_color,
                              }),
                              e,
                              { bDisablePopTop: !0 }
                            );
                          },
                          style: { color: n.highlighted_facet_color },
                        },
                        Object(O.f)(
                          "#FacetedBrowseEditor_HighlightedFacetColor"
                        )
                      )
                    ),
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement("span", null),
                      _.createElement(
                        h.d,
                        {
                          onClick: function (e) {
                            Object(g.a)(
                              _.createElement(T.a, {
                                onChange: function (e) {
                                  (n.heading_color = e), m();
                                },
                                color: n.heading_color,
                              }),
                              e,
                              { bDisablePopTop: !0 }
                            );
                          },
                          style: { color: n.heading_color },
                        },
                        Object(O.f)("#FacetedBrowseEditor_HeadingColor")
                      )
                    ),
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement(
                        "span",
                        null,
                        Object(O.f)("#FacetedBrowseEditor_AutoGenerate"),
                        _.createElement(I.d, {
                          tooltip: Object(O.f)(
                            "#FacetedBrowseEditor_Tooltip_AutoGenerate"
                          ),
                        })
                      ),
                      _.createElement(
                        h.d,
                        {
                          onClick: function () {
                            var e,
                              t = function () {
                                Object(v.c)(
                                  _.createElement(z, {
                                    onOK: function (e) {
                                      return (function (e) {
                                        return Object(a.b)(
                                          void 0,
                                          void 0,
                                          void 0,
                                          function () {
                                            var t;
                                            return Object(a.e)(
                                              this,
                                              function (a) {
                                                switch (a.label) {
                                                  case 0:
                                                    p(!0), (a.label = 1);
                                                  case 1:
                                                    return (
                                                      a.trys.push([1, , 5, 6]),
                                                      (t = n),
                                                      [4, H(e)]
                                                    );
                                                  case 2:
                                                    return (
                                                      (t.facets = a.sent()),
                                                      s ? [4, y()] : [3, 4]
                                                    );
                                                  case 3:
                                                    a.sent(), (a.label = 4);
                                                  case 4:
                                                    return (
                                                      o.SetDirty(
                                                        i.c.jsondata_sales
                                                      ),
                                                      [3, 6]
                                                    );
                                                  case 5:
                                                    return p(!1), [7];
                                                  case 6:
                                                    return [2];
                                                }
                                              }
                                            );
                                          }
                                        );
                                      })(e);
                                    },
                                  }),
                                  window
                                );
                              };
                            (null === (e = n.facets) || void 0 === e
                              ? void 0
                              : e.length) > 0
                              ? Object(v.c)(
                                  _.createElement(b.d, {
                                    strTitle: Object(O.f)(
                                      "#FacetedBrowseEditor_AutoGenerateDialogTitle"
                                    ),
                                    strDescription: Object(O.f)(
                                      "#FacetedBrowseEditor_AutoGenerateDialogText"
                                    ),
                                    onOK: t,
                                  }),
                                  window
                                )
                              : t();
                          },
                        },
                        Object(O.f)("#FacetedBrowseEditor_AutoGenerateButton")
                      )
                    ),
                    s &&
                      _.createElement(
                        "div",
                        { className: w.FilterActionsCtn },
                        _.createElement(
                          "span",
                          null,
                          Object(O.f)("#FacetedBrowseEditor_PruneUnused"),
                          _.createElement(I.d, {
                            tooltip: Object(O.f)(
                              "#FacetedBrowseEditor_Tooltip_PruneUnused"
                            ),
                          })
                        ),
                        _.createElement(
                          h.d,
                          { onClick: y },
                          Object(O.f)("#FacetedBrowseEditor_PruneUnusedButton")
                        )
                      ),
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement(
                        "span",
                        null,
                        Object(O.f)("#FacetedBrowseEditor_MinMatchesText"),
                        _.createElement(I.d, {
                          tooltip: Object(O.f)(
                            "#FacetedBrowseEditor_Tooltip_MinMatches"
                          ),
                        })
                      ),
                      _.createElement(
                        "div",
                        { className: w.FilterSettingRightCol },
                        _.createElement(h.m, {
                          mustBeNumeric: !0,
                          rangeMin: 1,
                          value: n.min_capsule_matches_for_facet_values,
                          onChange: function (e) {
                            (n.min_capsule_matches_for_facet_values = Number(
                              e.target.value
                            )),
                              m();
                          },
                        })
                      )
                    ),
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement(
                        "span",
                        null,
                        Object(O.f)("#FacetedBrowseEditor_MaxFacetValuesText"),
                        _.createElement(I.d, {
                          tooltip: Object(O.f)(
                            "#FacetedBrowseEditor_Tooltip_MaxFacetValues"
                          ),
                        })
                      ),
                      _.createElement(
                        "div",
                        { className: w.FilterSettingRightCol },
                        _.createElement(h.m, {
                          mustBeNumeric: !0,
                          rangeMin: 1,
                          value: n.max_facet_values_for_facet,
                          onChange: function (e) {
                            (n.max_facet_values_for_facet = Number(
                              e.target.value
                            )),
                              m();
                          },
                        })
                      )
                    ),
                    _.createElement(
                      "div",
                      { className: w.FilterActionsCtn },
                      _.createElement(
                        "span",
                        null,
                        Object(O.f)("#FacetedBrowseEditor_SortFacetValuesText"),
                        _.createElement(I.d, {
                          tooltip: Object(O.f)(
                            "#FacetedBrowseEditor_Tooltip_SortFacetValues"
                          ),
                        })
                      ),
                      _.createElement(
                        "div",
                        { className: w.FilterSettingRightCol },
                        _.createElement(h.i, {
                          rgOptions: S,
                          selectedOption: n.facet_sort_order,
                          onChange: function (e) {
                            (n.facet_sort_order = e.data), m();
                          },
                        })
                      )
                    ),
                    _.createElement(
                      M.b,
                      { clanSteamID: o.GetClanSteamID(), requireAdmin: !0 },
                      W(t) &&
                        _.createElement(
                          "div",
                          { className: w.FilterActionsCtn },
                          _.createElement(
                            "span",
                            null,
                            Object(O.f)(
                              "#FacetedBrowseEditor_GenerateDebugInfo"
                            )
                          ),
                          _.createElement(
                            "div",
                            { className: w.FilterSettingRightCol },
                            _.createElement(h.e, {
                              checked: n.facets_generate_debug_info,
                              onChange: function (e) {
                                (n.facets_generate_debug_info = e), m();
                              },
                            })
                          )
                        )
                    )
                  ),
                  d
                    ? _.createElement(E.a, null)
                    : _.createElement(x, {
                        language: o.GetCurEditLanguage(),
                        section: t,
                        facetArray: n.facets,
                        editModel: o,
                        capsuleContainer: n,
                        fnMarkEditModelDirty: m,
                      })
                )
            )
          );
        });
      function U(e, t) {
        return Object(a.b)(this, void 0, void 0, function () {
          var n, i;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                if (
                  !e.some(function (e) {
                    return e.facetValues.some(function (e) {
                      return (
                        e.type === c.l.k_ELanguage ||
                        e.type === c.l.k_EContentDescriptor ||
                        e.type === c.l.k_EAppType
                      );
                    });
                  })
                )
                  return [3, 4];
                (n = t.map(function (e) {
                  return e.capsule;
                })),
                  (a.label = 1);
              case 1:
                return a.trys.push([1, 3, , 4]), [4, Object(G.i)(n)];
              case 2:
                return a.sent(), [3, 4];
              case 3:
                return (i = a.sent()), console.error(i), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }
      function H(e) {
        return Object(a.b)(this, void 0, void 0, function () {
          var t;
          return Object(a.e)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, p.AutoGenerateFacetsAsync()];
              case 1:
                return (
                  (function (e) {
                    for (
                      var t = p.GetAtomicTagIDsForTagID(),
                        n = p.GetTagNameForTagID(),
                        a = 0,
                        i = e;
                      a < i.length;
                      a++
                    )
                      for (var r = 0, o = i[a].facetValues; r < o.length; r++) {
                        var l = o[r],
                          s = l.nAtomicStoreTagID,
                          u = t.has(s)
                            ? t.get(s).map(function (e) {
                                return n.get(e);
                              })
                            : [n.get(s)];
                        (u = u.map(function (e) {
                          return V(e);
                        })),
                          (l.type = c.l.k_ESaleTagFilter),
                          (l.filter = {
                            clauses: [{ type: "Must have", or_tags: u }],
                          });
                      }
                  })((t = n.sent())),
                  e.bForceFeatureTagForFullController &&
                    (function (e) {
                      e.forEach(function (e) {
                        e.facetValues.forEach(function (e) {
                          e.type === c.l.k_ESaleTagFilter &&
                            e.filter.clauses.forEach(function (e) {
                              e.or_tags.forEach(function (t, n) {
                                var a = Object(r.k)(t),
                                  i = Object(r.s)(t).toLocaleLowerCase();
                                a === r.j.Store &&
                                  "controller" === i &&
                                  (e.or_tags[n] = Object(r.f)(
                                    "Full Controller",
                                    r.j.Feature
                                  ));
                              });
                            });
                        });
                      });
                    })(t),
                  (function (e) {
                    for (
                      var t = { name: ["#AppTypeLabelTitle"], facetValues: [] },
                        n = 0,
                        a = [
                          "game",
                          "software",
                          "dlc",
                          "demo",
                          "music",
                          "video",
                          "hardware",
                        ];
                      n < a.length;
                      n++
                    ) {
                      var i = a[n];
                      t.facetValues.push({
                        name: ["#AppTypeLabel_" + i],
                        type: c.l.k_EAppType,
                        appType: i,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      });
                    }
                    e.push(t);
                  })(t),
                  (function (e) {
                    var t = { name: ["#Platform"], facetValues: [] };
                    t.facetValues.push({
                      name: ["#Platform_Windows"],
                      type: c.l.k_ESaleTagFilter,
                      filter: {
                        clauses: [
                          { type: "Must have", or_tags: ["[Feature] Windows"] },
                        ],
                      },
                      matchingCapsules: null,
                      rgStoreTagFilter: null,
                    }),
                      t.facetValues.push({
                        name: ["#Platform_Linux"],
                        type: c.l.k_ESaleTagFilter,
                        filter: {
                          clauses: [
                            { type: "Must have", or_tags: ["[Feature] Linux"] },
                          ],
                        },
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      t.facetValues.push({
                        name: ["#Platform_Mac"],
                        type: c.l.k_ESaleTagFilter,
                        filter: {
                          clauses: [
                            { type: "Must have", or_tags: ["[Feature] Mac"] },
                          ],
                        },
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      e.push(t);
                  })(t),
                  (function (e) {
                    for (
                      var t = { name: ["#LanguageTitle"], facetValues: [] },
                        n = 0;
                      n < 30;
                      ++n
                    )
                      t.facetValues.push({
                        name: ["#language_selection_" + Object(s.a)(n)],
                        type: c.l.k_ELanguage,
                        language: n,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      });
                    e.push(t);
                  })(t),
                  (function (e) {
                    var t = { name: ["#ContentDescriptor"], facetValues: [] };
                    t.facetValues.push({
                      name: ["#ContentDescriptor_GeneralMatureContent"],
                      type: c.l.k_EContentDescriptor,
                      contentDescriptor: 5,
                      filter: null,
                      matchingCapsules: null,
                      rgStoreTagFilter: null,
                    }),
                      t.facetValues.push({
                        name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                        type: c.l.k_EContentDescriptor,
                        contentDescriptor: 2,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      t.facetValues.push({
                        name: ["#ContentDescriptor_NudityOrSexualContent"],
                        type: c.l.k_EContentDescriptor,
                        contentDescriptor: 1,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      t.facetValues.push({
                        name: ["#ContentDescriptor_AdultOnlySexualContent"],
                        type: c.l.k_EContentDescriptor,
                        contentDescriptor: 3,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      e.push(t);
                  })(t),
                  (function (e) {
                    var t = { name: ["#Sale_Preferences"], facetValues: [] };
                    t.facetValues.push({
                      name: ["#UserPreference_HideOwnedItems"],
                      type: c.l.k_EUserPreference,
                      userPreference: c.m.k_EHideOwnedItems,
                      filter: null,
                      matchingCapsules: null,
                      rgStoreTagFilter: null,
                    }),
                      t.facetValues.push({
                        name: ["#UserPreference_HideWishlistedItems"],
                        type: c.l.k_EUserPreference,
                        userPreference: c.m.k_EHideWishlistedItems,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      t.facetValues.push({
                        name: ["#UserPreference_HideIgnoredItems"],
                        type: c.l.k_EUserPreference,
                        userPreference: c.m.k_EHideIgnoredItems,
                        bEnabledByDefault: !0,
                        filter: null,
                        matchingCapsules: null,
                        rgStoreTagFilter: null,
                      }),
                      e.push(t);
                  })(t),
                  [2, t]
                );
            }
          });
        });
      }
      function V(e) {
        return Object(r.f)(e, r.j.Store);
      }
      var z = Object(m.a)(function (e) {
        var t = e.closeModal,
          n = e.onOK,
          a = Object(_.useState)(!1),
          i = a[0],
          r = a[1];
        return _.createElement(
          b.e,
          { onCancel: t, closeModal: t },
          _.createElement(
            h.l,
            null,
            Object(O.f)("#FacetedBrowseEditor_AutoGenerate")
          ),
          _.createElement(
            h.b,
            null,
            _.createElement(h.e, {
              label: Object(O.f)(
                "#FacetedBrowseEditor_AutoGenerateOptions_FeatureTagForController"
              ),
              checked: i,
              onChange: function (e) {
                r(e);
              },
            })
          ),
          _.createElement(
            h.k,
            null,
            _.createElement(
              h.r,
              {
                onClick: function () {
                  n({ bForceFeatureTagForFullController: i }), t();
                },
              },
              Object(O.f)("#Button_OK")
            ),
            _.createElement(h.d, { onClick: t }, Object(O.f)("#Button_Cancel"))
          )
        );
      });
      function W(e) {
        return (
          !("items" !== e.section_type || !e.smart_section) ||
          "sale_item_browser" === e.section_type
        );
      }
      function q(e, t, n) {
        var i;
        return Object(a.b)(this, void 0, void 0, function () {
          var o, l, s, u, d, p, m, _, g, h, f, b, v, S, E, y, O, T, C, j;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, U(n, t)];
              case 1:
                for (
                  a.sent(),
                    o = t.map(function (e) {
                      return {
                        setTags: Object(r.m)(e.tags),
                        capsule: e.capsule,
                      };
                    }),
                    l = t.map(function (e) {
                      var t = L.a.GetAppLinkInfo(e.capsule.id);
                      return {
                        languages: Boolean(t)
                          ? new Set(t.localized_langs)
                          : null,
                        capsule: e.capsule,
                      };
                    }),
                    s = t.map(function (e) {
                      var t = L.a.GetAppLinkInfo(e.capsule.id);
                      return {
                        contentDescriptors: Boolean(t)
                          ? new Set(t.content_descriptors)
                          : null,
                        capsule: e.capsule,
                      };
                    }),
                    u = t.map(function (e) {
                      var t = L.a.GetAppLinkInfo(e.capsule.id);
                      return {
                        appType: Boolean(t) ? t.type : null,
                        capsule: e.capsule,
                      };
                    }),
                    d = 0,
                    p = n;
                  d < p.length;
                  d++
                )
                  for (m = p[d], _ = 0, g = m.facetValues; _ < g.length; _++)
                    if (
                      (((h = g[_]).matchingCapsules = []),
                      W(e) && !1 === e.facets_generate_debug_info)
                    )
                      h.matchingCapsules = void 0;
                    else if (h.type === c.l.k_ELanguage)
                      for (f = 0, b = l; f < b.length; f++)
                        (O = b[f]),
                          (null === (i = O.languages) || void 0 === i
                            ? void 0
                            : i.has(h.language)) &&
                            h.matchingCapsules.push(O.capsule);
                    else if (h.type === c.l.k_EContentDescriptor)
                      for (v = 0, S = s; v < S.length; v++)
                        (null === (O = S[v]).contentDescriptors ||
                          O.contentDescriptors.has(h.contentDescriptor)) &&
                          h.matchingCapsules.push(O.capsule);
                    else if (
                      h.type === c.l.k_EUserPreference ||
                      h.type === c.l.k_EPrice
                    )
                      h.matchingCapsules = [];
                    else if (h.type === c.l.k_EAppType)
                      for (E = 0, y = u; E < y.length; E++)
                        (O = y[E]).appType === h.appType &&
                          h.matchingCapsules.push(O.capsule);
                    else
                      for (T = 0, C = o; T < C.length; T++)
                        (j = C[T]),
                          Object(r.i)(j.setTags, h.filter) &&
                            h.matchingCapsules.push(j.capsule);
                return [2];
            }
          });
        });
      }
      function Y(e) {
        return Object(a.b)(this, void 0, void 0, function () {
          var t, n, i, r, o, l, u, d, m;
          return Object(a.e)(this, function (a) {
            switch (a.label) {
              case 0:
                return e.BIsSourceEventSaleEnabled() &&
                  (null == (t = e.GetEventModel().GetTaggedItems())
                    ? void 0
                    : t.length)
                  ? [4, p.EnsureLoaded()]
                  : [2];
              case 1:
                return (
                  a.sent(), (n = p.GetTagNameForTagID()), [4, p.GetLanguages()]
                );
              case 2:
                return (i = a.sent()), [4, p.GetLocalizedTagNames()];
              case 3:
                (r = a.sent()),
                  (o = new Map()),
                  n.forEach(function (e, t) {
                    var n = e.toLocaleLowerCase();
                    o.has(n)
                      ? console.error("Duplicate tag name: " + e)
                      : o.set(n, t);
                  }),
                  (l = (function (e) {
                    var t,
                      n,
                      a =
                        null ===
                          (n =
                            null ===
                              (t = null == e ? void 0 : e.GetEventModel()) ||
                            void 0 === t
                              ? void 0
                              : t.jsondata) || void 0 === n
                          ? void 0
                          : n.auto_item_tags;
                    if (!a) return null;
                    for (var i = new Map(), r = 0, o = a; r < o.length; r++) {
                      var l = o[r];
                      i.set(l.tag_name.toLocaleLowerCase(), l.filter);
                    }
                    return i;
                  })(e)),
                  (u = 0),
                  (d = e.GetSaleSections()),
                  (a.label = 4);
              case 4:
                return u < d.length
                  ? "tabs" === (m = d[u]).section_type && m.tabs
                    ? (m.tabs.forEach(function (e) {
                        e.sale_tag_filter &&
                          (e.store_filter = J(e.sale_tag_filter, o, l));
                      }),
                      [3, 7])
                    : [3, 5]
                  : [3, 8];
              case 5:
                return m.enable_faceted_browsing
                  ? [4, q(m, t, m.facets)]
                  : [3, 7];
              case 6:
                a.sent(),
                  (function (e, t, n) {
                    for (
                      var a = function (e) {
                          for (
                            var a = new Map(),
                              i = new Map(),
                              r = 0,
                              o = e.facetValues;
                            r < o.length;
                            r++
                          ) {
                            (u = o[r]).type === c.l.k_ELanguage
                              ? a.set(u, K(u.language))
                              : u.type === c.l.k_EContentDescriptor
                              ? a.set(u, Z(u.contentDescriptor))
                              : u.type === c.l.k_EUserPreference
                              ? a.set(u, null)
                              : u.type === c.l.k_EPrice
                              ? a.set(u, {
                                  type: c.o.k_EStoreFilterClauseTypePrice,
                                })
                              : u.type === c.l.k_EAppType
                              ? a.set(u, X(u.appType))
                              : (a.set(u, J(u.filter, t, n)),
                                i.set(u, Q(u.filter, t)));
                          }
                          if (
                            e.facetValues.every(function (e) {
                              return (
                                e.type !== c.l.k_EUserPreference &&
                                null === a.get(e)
                              );
                            })
                          )
                            return (
                              console.error(
                                "Couldn't look up store tag names for any facet value in facet " +
                                  e.name[0] +
                                  ", skipping."
                              ),
                              "continue"
                            );
                          for (
                            var l = 0, s = e.facetValues;
                            l < s.length;
                            l++
                          ) {
                            var u;
                            (u = s[l]).rgStoreTagFilter = a.get(u);
                            var d = i.get(u);
                            d > 0 && (u.nAtomicStoreTagID = d);
                          }
                        },
                        i = 0,
                        r = e.facets;
                      i < r.length;
                      i++
                    ) {
                      a(r[i]);
                    }
                  })(m, o, l),
                  (function (e, t, n, a) {
                    e.facets.forEach(function (e) {
                      e.facetValues.forEach(function (e) {
                        e.nAtomicStoreTagID &&
                          n.forEach(function (n, i) {
                            var r = Object(s.d)(n);
                            if (0 === O.a.Get(e.name, r).length) {
                              var o = t.get(e.nAtomicStoreTagID),
                                l = a.get(e.nAtomicStoreTagID),
                                c = O.a.Get(l, i);
                              0 !== c.length &&
                                (O.a.Set(e.name, r, c),
                                console.warn(
                                  "Added missing localized name (" +
                                    c +
                                    ") (" +
                                    n +
                                    ") for facet value with atomic store tag ID " +
                                    e.nAtomicStoreTagID +
                                    " (" +
                                    o +
                                    ")"
                                ));
                            }
                          });
                      });
                    });
                  })(m, n, i, r),
                  m.metadata_matching_capsules &&
                    (m.metadata_matching_capsules = void 0),
                  (a.label = 7);
              case 7:
                return u++, [3, 4];
              case 8:
                return [2];
            }
          });
        });
      }
      function J(e, t, n) {
        for (
          var a = {
              type: c.o.k_EStoreFilterClauseTypeAnd,
              rgSubexpressions: new Array(),
            },
            i = 0,
            o = e.clauses;
          i < o.length;
          i++
        ) {
          for (
            var l = o[i],
              s = {
                type: c.o.k_EStoreFilterClauseTypeOr,
                bNegated: "Must not have" === l.type,
                rgSubexpressions: new Array(),
              },
              u = 0,
              d = l.or_tags;
            u < d.length;
            u++
          ) {
            var p = d[u],
              m = Object(r.k)(p),
              _ = Object(r.s)(p).toLocaleLowerCase();
            if (m === r.j.Store) {
              if (!(null == t ? void 0 : t.has(_))) {
                console.error(
                  "No matching categorized store tag found for sale tag: " + p
                );
                continue;
              }
              var g = t.get(_);
              s.rgSubexpressions.push({
                type: c.o.k_EStoreFilterClauseTypeStoreTag,
                value: g,
              });
            } else if (m == r.j.Feature)
              s.rgSubexpressions.push({
                type: c.o.k_EStoreFilterClauseTypeFeatureTag,
                value: _,
              });
            else if (m === r.j.Auto) {
              if (!n.has(_)) {
                console.error("Could not find auto tag: " + p);
                continue;
              }
              var h = n.get(_);
              s.rgSubexpressions.push(J(h, t, n));
            } else console.warn("Sale tag not implemented for faceting: " + p);
          }
          if (0 === s.rgSubexpressions.length) return null;
          a.rgSubexpressions.push(s);
        }
        return 0 === a.rgSubexpressions.length ? null : Object(A.e)(a);
      }
      function Q(e, t) {
        for (var n = 0, a = e.clauses; n < a.length; n++)
          for (var i = 0, o = a[n].or_tags; i < o.length; i++) {
            var l = o[i],
              s = Object(r.k)(l),
              c = Object(r.s)(l).toLocaleLowerCase();
            if (s === r.j.Store) {
              if (!t.has(c)) {
                console.error(
                  "No matching categorized store tag found for sale tag: " + l
                );
                continue;
              }
              var u = t.get(c);
              if (p.BIsTagAtomic(u)) return u;
            }
          }
        return 0;
      }
      function K(e) {
        return {
          type: c.o.k_EStoreFilterClauseTypeLanguage,
          value: Object(s.a)(e),
        };
      }
      function Z(e) {
        return {
          type: c.o.k_EStoreFilterClauseTypeContentDescriptor,
          value: e,
        };
      }
      function X(e) {
        return { type: c.o.k_EStoreFilterClauseTypeAppType, value: e };
      }
    },
    "66At": function (e, t, n) {
      e.exports = {
        DisplayWarning: "saleeditorlocationcontrolwidget_DisplayWarning_162UW",
        SelectArea: "saleeditorlocationcontrolwidget_SelectArea_3hAkB",
        dropDown: "saleeditorlocationcontrolwidget_dropDown_a8hfO",
      };
    },
    "6Oks": function (e, t, n) {
      e.exports = {
        EventEditorArtworkCtn:
          "partnereventartwork_EventEditorArtworkCtn_3rX0b",
        ArtworkPreview: "partnereventartwork_ArtworkPreview_JnQir",
        EventEditorArtworkBarContainer:
          "partnereventartwork_EventEditorArtworkBarContainer_1C85T",
        EventEditorButton: "partnereventartwork_EventEditorButton_2ffmU",
        EventEditorInputPaneTopRow:
          "partnereventartwork_EventEditorInputPaneTopRow_91ZJa",
        EventCoverImageCtn: "partnereventartwork_EventCoverImageCtn_31GkG",
        DragTarget: "partnereventartwork_DragTarget_3rLfM",
        DragOnTopOfMe: "partnereventartwork_DragOnTopOfMe_2fjw2",
        EventEditorArtworkTextCtn:
          "partnereventartwork_EventEditorArtworkTextCtn_30C-z",
        EventEditorDragTargetArea:
          "partnereventartwork_EventEditorDragTargetArea_13RCA",
        EventEditorArtworkTitle:
          "partnereventartwork_EventEditorArtworkTitle_2LN2o",
        EventEditorArtworkSubTitle:
          "partnereventartwork_EventEditorArtworkSubTitle_2WU2t",
        EventEditorArtworkResolution:
          "partnereventartwork_EventEditorArtworkResolution_3BWYC",
        ReassignCtn: "partnereventartwork_ReassignCtn_1ELGs",
        ImagePreviewContainer:
          "partnereventartwork_ImagePreviewContainer_xiD01",
        NoneSet: "partnereventartwork_NoneSet_2iqoN",
        TitleSafePreview: "partnereventartwork_TitleSafePreview_1k4fh",
        TitleSafeCaption: "partnereventartwork_TitleSafeCaption_2p02K",
        LanguageSelector: "partnereventartwork_LanguageSelector_3r2rl",
        LanguageSelectorSelected:
          "partnereventartwork_LanguageSelectorSelected_1M7um",
        LanguageSelectorNoData:
          "partnereventartwork_LanguageSelectorNoData_2F3x5",
        LanguageContainer: "partnereventartwork_LanguageContainer_1Vs5U",
        LanguageOptions: "partnereventartwork_LanguageOptions_1ntKq",
        LanguageListContainer:
          "partnereventartwork_LanguageListContainer_Yhl9T",
        SelectImageContainerTopRow:
          "partnereventartwork_SelectImageContainerTopRow_2TTdk",
        SelectImageContainerBottomRow:
          "partnereventartwork_SelectImageContainerBottomRow_3W5Me",
        TextTitle: "partnereventartwork_TextTitle_WMeyY",
        TextSubTitle: "partnereventartwork_TextSubTitle_3zHVs",
        ExampleSectionTitle: "partnereventartwork_ExampleSectionTitle_1Rcen",
        DetailPageExample: "partnereventartwork_DetailPageExample_pD3MC",
        detailExample: "partnereventartwork_detailExample_syg2Q",
        detailExample2: "partnereventartwork_detailExample2_9E9yp",
        MainImageCtn: "partnereventartwork_MainImageCtn_1XTVD",
        ExampleBodyPosition: "partnereventartwork_ExampleBodyPosition_rEaNp",
        ExampleContentCtn: "partnereventartwork_ExampleContentCtn_-LvtM",
        TextBody: "partnereventartwork_TextBody_IiSBO",
        SpotlightExample: "partnereventartwork_SpotlightExample_rAJxh",
        SelectImageEqualColumns:
          "partnereventartwork_SelectImageEqualColumns_2zf7x",
        SelectImageBlock: "partnereventartwork_SelectImageBlock_3jEs0",
        MainPreviewBlock: "partnereventartwork_MainPreviewBlock_2HX0X",
        Tips: "partnereventartwork_Tips_1CHYZ",
        SpotlightOptions: "partnereventartwork_SpotlightOptions_2Kej2",
        ExamplesCtn: "partnereventartwork_ExamplesCtn_3Bp1I",
        SelectImageExampleImg:
          "partnereventartwork_SelectImageExampleImg_2kTis",
        SelectImageLanguagesCtn:
          "partnereventartwork_SelectImageLanguagesCtn_2vu5Q",
        SelectImageTitle: "partnereventartwork_SelectImageTitle_1m6cv",
        ArtworkSelectorContainer:
          "partnereventartwork_ArtworkSelectorContainer_1nl9m",
        Title: "partnereventartwork_Title_2Phq4",
        BroadcastPreviewContainer:
          "partnereventartwork_BroadcastPreviewContainer_3Y5k3",
        SaleHeaderPreviewContainer:
          "partnereventartwork_SaleHeaderPreviewContainer_14dIa",
        SaleHeaderExampleCtn: "partnereventartwork_SaleHeaderExampleCtn_16coG",
        SaleHeaderExampleCol: "partnereventartwork_SaleHeaderExampleCol_1czA2",
        BroadcastPreview: "partnereventartwork_BroadcastPreview_87eNb",
        ExampleSpacer: "partnereventartwork_ExampleSpacer_2r0lB",
        MultipleExampleContainer:
          "partnereventartwork_MultipleExampleContainer_1dda1",
        AssetExampleSpotlightCtn:
          "partnereventartwork_AssetExampleSpotlightCtn_taJSe",
      };
    },
    "6h0J": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
    "6yBx": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return D;
      }),
        n.d(t, "a", function () {
          return w;
        }),
        n.d(t, "c", function () {
          return M;
        });
      var a = n("mrSG"),
        i = n("TyAF"),
        r = n("q1tI"),
        o = n("mgoM"),
        l = n("kyHq"),
        s = n("Nsq5"),
        c = n("U+Q5"),
        u = n("I/R6"),
        d = n("Mgs7"),
        p = n("fpVW"),
        m = n.n(p),
        _ = n("Jqb/"),
        g = n("ka0M"),
        h = n("xnZ7"),
        f = n.n(h),
        b = n("6Y59"),
        v = n("0OaU"),
        S = n("exH9"),
        E = n("NOFC"),
        y = n("TLQK"),
        O = n("OS6B"),
        T = n("opsS"),
        C = n("NrWE"),
        j = n("as1E"),
        I = n.n(j),
        D = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bDownloadFromClanImageStore: !1 }),
              (t.m_clanImageUploader = new c.b(t.props.clanSteamID)),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetValidLanguageForImage = function (e) {
              var t = this.props.rgRealmList;
              if (!t || 0 === t.length) return e;
              for (var n = 0, a = t; n < a.length; n++) {
                var i = a[n];
                if (y.b.IsELanguageValidInRealm(e, i)) return e;
              }
              for (var r = 0, o = t; r < o.length; r++) {
                i = o[r];
                if (
                  y.b.IsELanguageValidInRealm(u.a.Get().GetCurEditLanguage(), i)
                )
                  return u.a.Get().GetCurEditLanguage();
              }
              return t.includes(l.f.k_ESteamRealmGlobal) ? 0 : 29;
            }),
            (t.prototype.OnDropFiles = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n, i, o, l, s, d, p;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      (t = this.props),
                        (n = t.rgSupportArtwork),
                        (i = t.localizedPrimaryImage),
                        (o = Array.from(e)),
                        (l = !0),
                        (s = 0),
                        (a.label = 1);
                    case 1:
                      return s < o.length
                        ? ((d = e.item(s)),
                          (p =
                            c.d.DetectLanguageFromFilename(d.name) ||
                            u.a.Get().GetCurEditLanguage()),
                          [
                            4,
                            this.m_clanImageUploader.AddImageForLanguage(
                              d,
                              this.GetValidLanguageForImage(p),
                              n,
                              i
                            ),
                          ])
                        : [3, 4];
                    case 2:
                      (l = a.sent()) ||
                        (console.error(
                          "ArtworkUploader.OnDropFiles: failed on i=" +
                            s +
                            " file=" +
                            d.name
                        ),
                        Object(g.d)(
                          r.createElement(_.f, {
                            strDescription: Object(y.f)(
                              "#ImagePicker_Error",
                              d.name
                            ),
                          }),
                          window
                        )),
                        (a.label = 3);
                    case 3:
                      return s++, [3, 1];
                    case 4:
                      return [2, l];
                  }
                });
              });
            }),
            (t.prototype.OnUploadImages = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e,
                  t = this;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        this.m_clanImageUploader.UploadAllFiles(
                          this.props.rgSupportArtwork,
                          this.props.forceResolution,
                          this.props.localizedPrimaryImage &&
                            this.props.localizedPrimaryImage.file_type
                        ),
                      ];
                    case 1:
                      return (
                        (e = n.sent()),
                        Object.keys(e).forEach(function (n) {
                          var a = e[n],
                            i = t.m_clanImageUploader.m_filesToUpload.find(
                              function (e) {
                                return e.uploadTime + "/" + e.file.name === n;
                              }
                            );
                          if (i)
                            if (1 !== a.success)
                              (i.status = "failed"), (i.message = a.message);
                            else if (((i.status = "success"), a.origimagehash))
                              c.d.AddLocalizeImageUploaded(
                                a.origimagehash,
                                t.GetValidLanguageForImage(a.language)
                              );
                            else {
                              var r = c.d.GetClanImageByImageHash(
                                t.props.clanSteamID,
                                a.image_hash
                              );
                              r &&
                                t.props.fnSetImageURL(
                                  i.type,
                                  r,
                                  t.GetValidLanguageForImage(i.language)
                                );
                            }
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnPreviousImageSelected = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(a.e)(this, function (n) {
                  return (
                    this.state.bDownloadFromClanImageStore ||
                      this.setState(
                        { bDownloadFromClanImageStore: !0 },
                        function () {
                          return Object(a.b)(t, void 0, void 0, function () {
                            var t, n, i, o, l;
                            return Object(a.e)(this, function (a) {
                              switch (a.label) {
                                case 0:
                                  return (
                                    a.trys.push([0, 2, , 3]),
                                    (t = this.props),
                                    (n = t.rgSupportArtwork),
                                    (i = t.localizedPrimaryImage),
                                    [
                                      4,
                                      this.m_clanImageUploader.AddExistingClanImage(
                                        e,
                                        this.GetValidLanguageForImage(
                                          u.a.Get().GetCurEditLanguage()
                                        ),
                                        n,
                                        i
                                      ),
                                    ]
                                  );
                                case 1:
                                  return a.sent(), [3, 3];
                                case 2:
                                  return (
                                    (o = a.sent()),
                                    (l = Object(O.a)(o)),
                                    console.error(
                                      "AddExistingClanImage: " + l.strErrorMsg,
                                      l
                                    ),
                                    Object(g.d)(
                                      r.createElement(_.f, {
                                        strDescription: Object(y.f)(
                                          "#EventError_Code",
                                          l.strErrorMsg
                                        ),
                                      }),
                                      window
                                    ),
                                    [3, 3]
                                  );
                                case 3:
                                  return (
                                    this.setState({
                                      bDownloadFromClanImageStore: !1,
                                    }),
                                    [2]
                                  );
                              }
                            });
                          });
                        }
                      ),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.rgSupportArtwork,
                n = e.forceResolution,
                a = e.localizedPrimaryImage,
                i = e.clanSteamID,
                o = M(
                  this.m_clanImageUploader,
                  "arttabupload_",
                  t,
                  n,
                  a && a.file_type,
                  this.props.rgRealmList
                );
              return r.createElement(
                C.b,
                {
                  onDropFiles: this.OnDropFiles,
                  clanSteamID: i,
                  bAllowPreviousClanImages: !Boolean(
                    this.props.bPreventPreviousClanImages
                  ),
                  OnClanImageSelected: this.OnPreviousImageSelected,
                  fnSetImageURL: this.props.fnSetImageURL,
                  rgRealmList: this.props.rgRealmList,
                },
                r.createElement(
                  r.Fragment,
                  null,
                  this.state.bDownloadFromClanImageStore &&
                    r.createElement(v.a, {
                      position: "center",
                      size: "medium",
                      string: Object(y.f)("#Loading"),
                    }),
                  r.createElement("div", { className: I.a.UploadPreviewCtn }, o)
                ),
                r.createElement(w, {
                  clanImageUploader: this.m_clanImageUploader,
                  fnOnUploadImageRequested: this.OnUploadImages,
                })
              );
            }),
            Object(a.c)([T.a], t.prototype, "OnDropFiles", null),
            Object(a.c)([T.a], t.prototype, "OnUploadImages", null),
            Object(a.c)([T.a], t.prototype, "OnPreviousImageSelected", null),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component),
        w = Object(i.a)(function (e) {
          var t = e.clanImageUploader,
            n = e.fnOnUploadImageRequested;
          return r.createElement(
            "div",
            {
              style: { display: "flex" },
              className: I.a.UploadPreviewButtonsCtn,
            },
            Boolean(t.m_filesToUpload.length) &&
              r.createElement(
                d.d,
                { style: { margin: "8px" }, onClick: n },
                Object(y.f)("#ImageUpload_Upload")
              ),
            Boolean(t.m_filesToUpload.length) &&
              r.createElement(
                d.d,
                { style: { margin: "8px" }, onClick: t.ClearImages },
                Object(y.f)("#ImageUpload_Clear")
              )
          );
        });
      function M(e, t, n, a, i, o) {
        var l = new Array();
        return (
          e.m_filesToUpload.map(function (s) {
            l.push(
              r.createElement(k, {
                key: t + s.file + "_" + s.uploadTime,
                image: s,
                supported: n,
                forceResolution: a,
                forceFileType: i,
                fnOnRemove: function () {
                  return e.DeleteUploadImage(s);
                },
                languageRealms: o,
              })
            );
          }),
          l
        );
      }
      var k = Object(i.a)(function (e) {
        for (
          var t = e.image,
            n = e.fnOnRemove,
            a = e.supported,
            i = e.languageRealms,
            c = a.map(function (e) {
              var n = Object(y.f)("#EventEditor_ArtworkType_" + e),
                a = s.a[e];
              a &&
                !a.bDisableEnforceDimensions &&
                (n += " - " + a.width + "x" + a.height);
              var i = void 0;
              return (
                t.BIsOriginalMinimumDimensions(e) ||
                  (i = I.a.ArtworkDimensionTooSmall),
                { label: n, data: e, strOptionClass: i }
              );
            }),
            u = {
              pending: Object(y.f)("#ImageUpload_Pending"),
              uploading: Object(y.f)("#ImageUpload_Uploading"),
              success: Object(y.f)("#ImageUpload_SuccessCard"),
              failed: Object(y.f)("#ImageUpload_Failed"),
            },
            p = new Array(),
            _ = 0,
            h = y.b.GetLanguageListForRealms(i || [l.f.k_ESteamRealmGlobal]);
          _ < h.length;
          _++
        ) {
          var O = h[_],
            T = Object(y.f)("#Language_" + Object(o.a)(O));
          p.push({ label: T, data: O });
        }
        p.sort(function (e, t) {
          return e.label.localeCompare(t.label);
        });
        var C = [];
        p.forEach(function (e) {
          return C.push({ label: e.label, data: e.data });
        });
        var j = t.IsValidImage(e.supported, e.forceResolution, e.forceFileType),
          D = j.needsCrop
            ? Object(y.f)("#ImageUpload_NeedsCrop")
            : j.error
            ? Object(y.f)("#ImageUpload_Invalid")
            : u[t.status];
        return r.createElement(
          "div",
          { className: I.a.UploadPreview },
          r.createElement(
            "div",
            {
              className: I.a.UploadPreviewDelete,
              onClick: function () {
                return n(t);
              },
            },
            r.createElement(b.ob, null)
          ),
          r.createElement(
            "div",
            {
              className: I.a.PreviewImgCtn,
              style: { backgroundImage: "url(" + t.dataUrl + ")" },
            },
            r.createElement(
              "span",
              { className: I.a.PreviewImgInfo },
              t.width,
              " x ",
              t.height
            )
          ),
          r.createElement(d.i, {
            strDropDownClassName: m.a.DropDownScroll,
            rgOptions: C,
            selectedOption: t.language,
            onChange: function (e) {
              return (t.language = e.data);
            },
          }),
          Boolean(c.length > 1) &&
            r.createElement(d.i, {
              rgOptions: c.filter(function (e) {
                return "hero" !== e.data;
              }),
              selectedOption: t.type || c[0].data,
              onChange: function (e) {
                return (t.type = e.data);
              },
            }),
          r.createElement(
            "div",
            { className: Object(S.a)(m.a.FlexColumnContainer) },
            D,
            Boolean("uploading" == D) &&
              r.createElement(
                "div",
                { className: f.a.FlexCenter },
                r.createElement(v.a, { size: "small" })
              )
          ),
          r.createElement(
            "div",
            { className: I.a.UploadPreviewError },
            t.message
          ),
          j.error &&
            r.createElement(
              "div",
              { className: I.a.UploadPreviewError },
              j.error
            ),
          j.needsCrop &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                d.r,
                {
                  onClick: function () {
                    return (function (t) {
                      t.ResetImage();
                      var n = window,
                        a = r.createElement(E.a, {
                          ownerWin: n,
                          uploadFile: t,
                          forceResolution: e.forceResolution,
                          fileType: e.forceFileType || 3,
                        });
                      Object(g.c)(a, n, "CropModal", {
                        strTitle: Object(y.f)("#ImageUpload_CropModalTitle"),
                      });
                    })(t);
                  },
                },
                Object(y.f)("#ImageUpload_OpenEditor")
              )
            )
        );
      });
    },
    "75vw": function (e, t, n) {
      e.exports = {
        PickerContainer: "clanimagepicker_PickerContainer_1qhUO",
        PickerTitle: "clanimagepicker_PickerTitle_1E-Kb",
        SearchInput: "clanimagepicker_SearchInput_lwt4u",
        ImagesContainer: "clanimagepicker_ImagesContainer_2MNEt",
        ImageWrapperContainer: "clanimagepicker_ImageWrapperContainer_3nF8i",
        ImageWrapper: "clanimagepicker_ImageWrapper_vYrtX",
        ImageWrapperFilename: "clanimagepicker_ImageWrapperFilename_3rKYp",
        Hilight: "clanimagepicker_Hilight_5oO3l",
        ImageButton: "clanimagepicker_ImageButton_1NdF6",
        Thumb: "clanimagepicker_Thumb_5b4gX",
        Full: "clanimagepicker_Full_3zBhO",
        Delete: "clanimagepicker_Delete_UQ4fW",
        FloatingThrobber: "clanimagepicker_FloatingThrobber_1zWl-",
        Localized: "clanimagepicker_Localized__5lkv",
        ResultNotification: "clanimagepicker_ResultNotification_1mERN",
        errorcode: "clanimagepicker_errorcode_2f4ad",
        ImageUploadBar: "clanimagepicker_ImageUploadBar_1aUdS",
        SelectImageButton: "clanimagepicker_SelectImageButton__R_zU",
        UploaderContainer: "clanimagepicker_UploaderContainer_dR0Ne",
        UploaderTitle: "clanimagepicker_UploaderTitle_DL9t5",
        UploaderRunning: "clanimagepicker_UploaderRunning_1lRF9",
        UploaderDesc: "clanimagepicker_UploaderDesc_2fhbn",
        UploadError: "clanimagepicker_UploadError_3B5rV",
        UploadMessageAndButtonsContainer:
          "clanimagepicker_UploadMessageAndButtonsContainer_3OQ66",
        UploadSuccess: "clanimagepicker_UploadSuccess_2RXjw",
        UploadDismissButton: "clanimagepicker_UploadDismissButton_3j1zt",
        DragAndDropContainer: "clanimagepicker_DragAndDropContainer_2Q0Xd",
        DragAndDropContainerDragging:
          "clanimagepicker_DragAndDropContainerDragging_2Xhk9",
      };
    },
    CoyA: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n("mrSG"),
        i = n("TyAF"),
        r = n("q1tI"),
        o = n("6AJf"),
        l = n("xnZ7"),
        s = n.n(l),
        c = n("TLQK"),
        u = n("k3PP"),
        d = n("JiI5"),
        p = n("oqmg"),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.DoesCapsuleConflict = function () {
              var e = this.props,
                t = e.capsule,
                n = e.capsuleContainer;
              if (!t || !n) return !1;
              for (var a = 0, i = n.capsules; a < i.length; a++) {
                var r = i[a];
                if (
                  r &&
                  r !== t &&
                  r.id == t.id &&
                  r.type == t.type &&
                  (!t.visibility_index ||
                    !r.visibility_index ||
                    r.visibility_index == t.visibility_index)
                )
                  return !0;
              }
              return !1;
            }),
            (t.prototype.render = function () {
              var e = this.props.capsule;
              if (!e)
                return r.createElement(
                  "div",
                  null,
                  Object(c.f)("#EventEditor_InvalidCapsuleItem")
                );
              var t = this.DoesCapsuleConflict(),
                n = Object(p.b)(e),
                a = n.appData,
                i = n.linkURL,
                l = n.bInvalidID,
                m = Object(c.f)("#AppType_" + e.type);
              return r.createElement(
                o.i,
                { className: s.a.FlexCenter, url: i },
                a
                  ? r.createElement("img", {
                      loading: "lazy",
                      className: d.SaleCapsuleImg,
                      src: a.header_image_url,
                    })
                  : null,
                a ? a.name : null,
                "  (",
                a ? a.appid || a.bundleid || a.packageid : e.id,
                ")  ",
                r.createElement(
                  "span",
                  { className: d.SmallText },
                  "(",
                  m,
                  ")"
                ),
                l &&
                  r.createElement(
                    "div",
                    { className: d.SaleCapsuleConflict },
                    Object(c.f)("#Sale_NotFoundCapsule"),
                    r.createElement(u.d, {
                      tooltip: Object(c.f)(
                        "#Sale_NotFoundCapsule_Tooltip",
                        m,
                        e.id
                      ),
                    })
                  ),
                t &&
                  r.createElement(
                    "div",
                    { className: d.SaleCapsuleConflict },
                    Object(c.f)("#Sale_DuplicateCapsule"),
                    r.createElement(u.d, {
                      tooltip: Object(c.f)("#Sale_DuplicateCapsule_Tooltip"),
                    })
                  ),
                Boolean(void 0 !== e.visibility_index) &&
                  r.createElement(
                    "span",
                    { className: d.SaleVisibilityDate },
                    Object(c.f)(
                      "#Sale_VisibilityIndex_Day",
                      e.visibility_index + 1
                    )
                  )
              );
            }),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component);
    },
    EA3E: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return T;
      }),
        n.d(t, "c", function () {
          return C;
        }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "e", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return D;
        });
      var a = n("mrSG"),
        i = n("1fPh"),
        r = n("fcuX"),
        o = n("t0uJ"),
        l = n("TyAF"),
        s = n("q1tI"),
        c = n("EC67"),
        u = n("3+zv"),
        d = n("gBDv"),
        p = n("9w6b"),
        m = n("6oCP"),
        _ = n("vBFs"),
        g = n("fpVW"),
        h = n.n(g),
        f = n("YLyR"),
        b = n("exH9"),
        v = n("TLQK"),
        S = n("lkRc"),
        E = n("k3PP"),
        y = n("K1T0"),
        O = n.n(y);
      function T(e) {
        var t = Object(d.c)()[0];
        s.useEffect(
          function () {
            return (
              (window.onbeforeunload = function () {
                var e = o.c.GetEditModel();
                return e.BIsDirty() || t(e.GetGID())
                  ? Object(v.f)("#EventEditor_UnsavedChanges")
                  : null;
              }),
              function () {
                window.onbeforeunload = function () {};
              }
            );
          },
          [t]
        );
        return s.createElement(c.a, {
          message: function (e) {
            if (o.c.BHasEditModel()) {
              var n = o.c.GetEditModel();
              if (
                null != n &&
                null != n &&
                (n.BIsDirty() || t(n.GetGID())) &&
                (n.BHasGid() || n.GetChangeTypes() != r.c.type)
              ) {
                var a = n.GetStrVanityOrAppID();
                return (
                  e.pathname == i.a.Category(a, n.GetGID() || "") ||
                  e.pathname == i.a.Edit(a, n.GetGID() || "") ||
                  e.pathname == i.a.Preview(a, n.GetGID() || "") ||
                  e.pathname == i.a.PreviewSale(a, n.GetGID() || "") ||
                  Object(v.f)("#EventEditor_UnsavedChanges")
                );
              }
            }
            return !0;
          },
        });
      }
      var C = Object(l.a)(function (e) {
          var t = o.c.GetEditModel(),
            n = t.GetCurEditLanguage();
          return s.createElement(_.a, {
            selectedLang: n,
            fnOnLanguageChanged: function (n) {
              t.SetCurEditLanguage(n) &&
                e.OnLanguageChange &&
                e.OnLanguageChange();
            },
            fnLangHasData: t.BHasLanguage,
            fnIsLangSupported: t.BDoesSupportLanguage,
            fnLastUpdateRTime: t.LastTimeLanguageUpdate,
            realms: t.GetIncludedRealmList(),
          });
        }),
        j = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.editModel,
                t = e.GetVisibilityState(),
                n = p.a.Get().GetPartnerEventPermissions(e.GetClanSteamID()),
                a =
                  (e.BWillShowOnLibraryOverviewDueToSettings() ||
                    e.BWillShowOnLibraryDetailDueToSettings()) &&
                  Object(u.e)(e.GetEventModel());
              if (t == m.b.k_EEventStateVisible)
                return s.createElement(
                  "div",
                  {
                    className: Object(b.a)(h.a.FlexColumnContainer, "visible"),
                  },
                  s.createElement(
                    "span",
                    { className: h.a.FlexRowContainer },
                    Object(v.f)("#EventEditor_Status"),
                    ":  ",
                    s.createElement(
                      "span",
                      { className: "StatusVisibleText" },
                      "  ",
                      Object(v.f)("#EventEditor_Status_Public")
                    ),
                    n &&
                      s.createElement(E.d, {
                        tooltip: Object(v.f)("#EventEditor_Status_Public_ttip"),
                      }),
                    a &&
                      s.createElement(
                        "span",
                        {
                          className: Object(b.a)(
                            O.a.PendingVisibilityText,
                            "PendingVisibilityText"
                          ),
                        },
                        "  ",
                        Object(v.f)("#EventEditor_Status_PendingModeration")
                      ),
                    n &&
                      a &&
                      s.createElement(E.d, {
                        tooltip: Object(v.f)(
                          "#EventDashBoard_ModerationQueueWarning"
                        ),
                      })
                  )
                );
              if (t == m.b.k_EEventStateStaged) {
                var i = e.GetEventVisibilityStartTime(),
                  r = i == e.GetEventStartTime();
                return s.createElement(
                  "div",
                  { className: h.a.FlexColumnContainer },
                  Object(v.f)("#EventEditor_Status") + ": ",
                  Object(v.n)(
                    r
                      ? "#EventEditor_Status_Staged_EventStart"
                      : "#EventEditor_Status_Staged",
                    s.createElement(
                      "span",
                      { className: h.a.FlexRowContainer },
                      s.createElement(f.a, { bSingleLine: !0, dateAndTime: i }),
                      s.createElement(E.d, {
                        tooltip: Object(v.f)("#EventEditor_Status_Staged_ttip"),
                      })
                    )
                  )
                );
              }
              return s.createElement(
                "div",
                { className: h.a.FlexColumnContainer },
                s.createElement(
                  "span",
                  { className: h.a.FlexRowContainer },
                  Object(v.f)("#EventEditor_Status") +
                    ": " +
                    Object(v.f)("#EventEditor_Status_Draft"),
                  s.createElement(E.d, {
                    tooltip: Object(v.f)("#EventEditor_Status_Draft_ttip"),
                  })
                )
              );
            }),
            (t = Object(a.c)([l.a], t))
          );
        })(s.Component),
        I = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              return s.createElement(
                "div",
                {
                  className: Object(b.a)(
                    h.a.FlexColumnContainer,
                    h.a.BetaContainer,
                    h.a.PartnerEventFont
                  ),
                },
                s.createElement(
                  "div",
                  { className: h.a.EventBetaTextTitle },
                  Object(v.f)("#PartnerEvent_Beta_Title")
                ),
                s.createElement("br", null),
                s.createElement(
                  "div",
                  null,
                  Object(v.n)(
                    "#PartnerEvent_Beta_Feedback",
                    s.createElement(
                      "a",
                      {
                        target: S.c.IN_CLIENT ? void 0 : "_blank",
                        href:
                          "https://steamcommunity.com/groups/steamworks/discussions/24/",
                      },
                      Object(v.f)("#PartnerEvent_Beta_SteamWorks")
                    )
                  )
                )
              );
            }),
            t
          );
        })(s.Component),
        D = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              return (
                console.warn(
                  'EventNotAvailable message:"' +
                    this.props.strErrorMsg +
                    '" code:"' +
                    this.props.errorCode +
                    '"'
                ),
                s.createElement(
                  "div",
                  { className: O.a.ErrorPage },
                  s.createElement(
                    "div",
                    { className: h.a.maintitle },
                    Object(v.f)("#EventError_Title")
                  ),
                  this.props.errorCode &&
                    s.createElement(
                      "div",
                      { className: O.a.ErrorCode },
                      " ",
                      Object(v.f)("#EventError_Code", this.props.errorCode),
                      " "
                    ),
                  this.props.strErrorMsg &&
                    s.createElement(
                      "div",
                      { className: O.a.ErrorMsg },
                      this.props.strErrorMsg
                    )
                )
              );
            }),
            t
          );
        })(s.Component);
    },
    GOhU: function (e, t, n) {
      e.exports = {
        ToolContainer: "partnereventdescriptiontab_ToolContainer_1YUip",
        LanguageControlsCtn:
          "partnereventdescriptiontab_LanguageControlsCtn_14o5K",
        DescEditorPadding: "partnereventdescriptiontab_DescEditorPadding_3mLVV",
        ImagePickerCtn: "partnereventdescriptiontab_ImagePickerCtn_Mc28x",
      };
    },
    IMce: function (e, t, n) {
      e.exports = {
        FilterDisplayCtn: "partnereventsaletagitems_FilterDisplayCtn_3y3Xg",
        FilterTitle: "partnereventsaletagitems_FilterTitle_24W_L",
        FilterDisplayNoFilter:
          "partnereventsaletagitems_FilterDisplayNoFilter_1rdbp",
        FilterActionsCtn: "partnereventsaletagitems_FilterActionsCtn_2C1SZ",
        FilterSettingRightCol:
          "partnereventsaletagitems_FilterSettingRightCol_3Nq-P",
        FilterDisplayList: "partnereventsaletagitems_FilterDisplayList_2z8dM",
        ClauseRowCtn: "partnereventsaletagitems_ClauseRowCtn_14Xr-",
        MustHaveClause: "partnereventsaletagitems_MustHaveClause_1DnHX",
        MustNotHaveClause: "partnereventsaletagitems_MustNotHaveClause_2jCYC",
        TagItemCtn: "partnereventsaletagitems_TagItemCtn_m0Krj",
        TagItemImageCtn: "partnereventsaletagitems_TagItemImageCtn_gmw1A",
        NameAndTagCtn: "partnereventsaletagitems_NameAndTagCtn_3iqFC",
        NameCtn: "partnereventsaletagitems_NameCtn_2tE2h",
        TagSummaryCtn: "partnereventsaletagitems_TagSummaryCtn_2qiIu",
        TagSummary: "partnereventsaletagitems_TagSummary_Srtyk",
        TagShowToggle: "partnereventsaletagitems_TagShowToggle_2znRW",
        TagListCtn: "partnereventsaletagitems_TagListCtn_1QkXs",
        ItemTag: "partnereventsaletagitems_ItemTag_zTys5",
        TagHighlight: "partnereventsaletagitems_TagHighlight_3t7O7",
        TagMustHave: "partnereventsaletagitems_TagMustHave_1TwOa",
        TagMustNotHave: "partnereventsaletagitems_TagMustNotHave_209Gu",
        TagMissingMustHave: "partnereventsaletagitems_TagMissingMustHave_1fV9c",
        TagItemEditorCtn: "partnereventsaletagitems_TagItemEditorCtn_BCZuV",
        ItemListTitle: "partnereventsaletagitems_ItemListTitle_1Qb2C",
        ItemListControls: "partnereventsaletagitems_ItemListControls_3d5Ah",
        ButtonRow: "partnereventsaletagitems_ButtonRow_jzDFC",
        EditTagsTitle: "partnereventsaletagitems_EditTagsTitle_lZkG5",
        EditTagsTitleText: "partnereventsaletagitems_EditTagsTitleText_2ydMd",
        EditTagsBody: "partnereventsaletagitems_EditTagsBody_1GXBp",
        ColumnList: "partnereventsaletagitems_ColumnList_2K3OM",
        TagColumn: "partnereventsaletagitems_TagColumn_qG9e1",
        SmallColumn: "partnereventsaletagitems_SmallColumn_3sDs-",
        TagColumnList: "partnereventsaletagitems_TagColumnList_1CmFb",
        FillColumn: "partnereventsaletagitems_FillColumn_Goo9R",
        TagColumnTitle: "partnereventsaletagitems_TagColumnTitle_16Usf",
        PopulateByFilter: "partnereventsaletagitems_PopulateByFilter_ECCkN",
        EditTag: "partnereventsaletagitems_EditTag_10HeQ",
        AppliedTag: "partnereventsaletagitems_AppliedTag_2hdwo",
        OtherTag: "partnereventsaletagitems_OtherTag_3XSu2",
        DefaultTag: "partnereventsaletagitems_DefaultTag_1DR0t",
        SectionRemoved: "partnereventsaletagitems_SectionRemoved_3r5Sr",
        SectionAdded: "partnereventsaletagitems_SectionAdded_3RbJU",
        SectionUnchanged: "partnereventsaletagitems_SectionUnchanged_262k4",
        OKButton: "partnereventsaletagitems_OKButton_2vnfP",
        AddTagCtn: "partnereventsaletagitems_AddTagCtn_1hCAC",
        EditFitlerCtn: "partnereventsaletagitems_EditFitlerCtn_3OUM2",
        HideTagBreakdown: "partnereventsaletagitems_HideTagBreakdown_3yvRa",
        TagBreakdownCtn: "partnereventsaletagitems_TagBreakdownCtn_3YQ9j",
        TopSection: "partnereventsaletagitems_TopSection_1jYl9",
        TopTabs: "partnereventsaletagitems_TopTabs_FWpoZ",
        TagSelector: "partnereventsaletagitems_TagSelector_2_RKa",
        SectionTab: "partnereventsaletagitems_SectionTab_1-1pA",
        TabActive: "partnereventsaletagitems_TabActive_3GdyE",
        ShowTagBreakdown: "partnereventsaletagitems_ShowTagBreakdown_2lsxI",
        SectionTitle: "partnereventsaletagitems_SectionTitle_31ngR",
        MatchingItemsCtn: "partnereventsaletagitems_MatchingItemsCtn_20hem",
        ItemList: "partnereventsaletagitems_ItemList_pbaI3",
        TagBreakdownList: "partnereventsaletagitems_TagBreakdownList_306uE",
        SelectTag: "partnereventsaletagitems_SelectTag_Mbvwl",
        TagBreakdownEntry: "partnereventsaletagitems_TagBreakdownEntry_3FcaB",
        Selected: "partnereventsaletagitems_Selected_1dbZr",
        PercentageBarFill: "partnereventsaletagitems_PercentageBarFill_2RtUr",
        TextStats: "partnereventsaletagitems_TextStats_1uh33",
        TagName: "partnereventsaletagitems_TagName_2_TkE",
        TagUses: "partnereventsaletagitems_TagUses_13lRd",
        PercentageBar: "partnereventsaletagitems_PercentageBar_3j-lq",
        FilterControlsCtn: "partnereventsaletagitems_FilterControlsCtn_21IKJ",
        FilterControlBox: "partnereventsaletagitems_FilterControlBox_30c0H",
        OrLabel: "partnereventsaletagitems_OrLabel_nLRaJ",
        AndLabel: "partnereventsaletagitems_AndLabel_1HdmS",
        TagDropDown: "partnereventsaletagitems_TagDropDown_16GWP",
        ClauseTypeDropDown: "partnereventsaletagitems_ClauseTypeDropDown_3C61-",
        FirstClause: "partnereventsaletagitems_FirstClause_2U-HG",
        ClauseTagList: "partnereventsaletagitems_ClauseTagList_2Yv3H",
        OptInInputTitle: "partnereventsaletagitems_OptInInputTitle_1gDie",
        EditRawTextArea: "partnereventsaletagitems_EditRawTextArea_1HSN_",
        EditAutoTagsBody: "partnereventsaletagitems_EditAutoTagsBody_e8374",
        AutoTagList: "partnereventsaletagitems_AutoTagList_1EmxH",
        AutoTag: "partnereventsaletagitems_AutoTag_2gCmA",
        AutoTagRow: "partnereventsaletagitems_AutoTagRow_2o3nc",
      };
    },
    JiI5: function (e, t, n) {
      e.exports = {
        SaleContainer: "partnereventsale_SaleContainer_3BwSi",
        CustomSectionsTitle: "partnereventsale_CustomSectionsTitle_2L2x_",
        SaleSection: "partnereventsale_SaleSection_SOMqO",
        EditorCtn: "partnereventsale_EditorCtn_1SyQQ",
        DefaultTitlePicker: "partnereventsale_DefaultTitlePicker_1Rgup",
        SectionTypePicker: "partnereventsale_SectionTypePicker_3Tjtf",
        SectionTypePrompt: "partnereventsale_SectionTypePrompt_2yqih",
        CrossTabWarning: "partnereventsale_CrossTabWarning_2iLl5",
        CrossTabLink: "partnereventsale_CrossTabLink_VkuQf",
        UploadLinkRow: "partnereventsale_UploadLinkRow_zoWy8",
        UploadLinkImageButton: "partnereventsale_UploadLinkImageButton_3lofP",
        SmallText: "partnereventsale_SmallText_1SKHf",
        FlexContainer: "partnereventsale_FlexContainer_23PZF",
        SearchResults: "partnereventsale_SearchResults_IBZUs",
        AddTitleButton: "partnereventsale_AddTitleButton_1i6s-",
        RemoveTitleButton: "partnereventsale_RemoveTitleButton_3rCfB",
        customTitleOptionsCtn: "partnereventsale_customTitleOptionsCtn_18Ftt",
        CustomTitleCtn: "partnereventsale_CustomTitleCtn_3xf_h",
        LanguageInput: "partnereventsale_LanguageInput_9Ojz4",
        CustomImageTitle: "partnereventsale_CustomImageTitle_1Y-jG",
        PromptText: "partnereventsale_PromptText_2YG1P",
        UploadImageButton: "partnereventsale_UploadImageButton_3Jjrh",
        SettingCtn: "partnereventsale_SettingCtn_32UTR",
        Title: "partnereventsale_Title_11Euz",
        Columns: "partnereventsale_Columns_1uTkj",
        LeftCol: "partnereventsale_LeftCol_3CdEC",
        RightCol: "partnereventsale_RightCol_ly_n8",
        AddSectionBtnCtn: "partnereventsale_AddSectionBtnCtn_3afet",
        SmartSelType: "partnereventsale_SmartSelType_17JE0",
        SmartSelCount: "partnereventsale_SmartSelCount_VRUTW",
        SmartSelLabel: "partnereventsale_SmartSelLabel_2JVw-",
        SaleImportBar: "partnereventsale_SaleImportBar_2bBTj",
        SaleImportBarTooltip: "partnereventsale_SaleImportBarTooltip_12tD-",
        SaleImportBarButton: "partnereventsale_SaleImportBarButton_2JDr9",
        SaleCapsuleConflict: "partnereventsale_SaleCapsuleConflict_1pnji",
        SaleCapsuleImg: "partnereventsale_SaleCapsuleImg_3UFfV",
        SaleVisibilityDate: "partnereventsale_SaleVisibilityDate_2CATv",
        SaleVisibilityDateFilter:
          "partnereventsale_SaleVisibilityDateFilter_7xofs",
        SaleDaySelection: "partnereventsale_SaleDaySelection_nh0SY",
        TextSectionGroup: "partnereventsale_TextSectionGroup_3kcsq",
        TextSectionBBCode: "partnereventsale_TextSectionBBCode_2SWKu",
        TextSectionImages: "partnereventsale_TextSectionImages_3_gw-",
        SaleImportURL: "partnereventsale_SaleImportURL_1AmwV",
        BackgroundSettings: "partnereventsale_BackgroundSettings_3_B1e",
        HalfColumn: "partnereventsale_HalfColumn_3F_CF",
        ContentHubOverrideCtn: "partnereventsale_ContentHubOverrideCtn_3IkY7",
        ContentHubOverrideInnerCtn:
          "partnereventsale_ContentHubOverrideInnerCtn_3aA7g",
        SetupCtn: "partnereventsale_SetupCtn_yrYBA",
      };
    },
    K1T0: function (e, t, n) {
      e.exports = {
        ErrorPage: "partnereventshared_ErrorPage_1HZBl",
        ErrorMsg: "partnereventshared_ErrorMsg__guJ8",
        ErrorCode: "partnereventshared_ErrorCode_2ZZXk",
        PendingVisibilityText: "partnereventshared_PendingVisibilityText_1G3Ia",
      };
    },
    K3tN: function (e, t, n) {
      e.exports = {
        CurrentTabsCtn: "saletabeditor_CurrentTabsCtn_24eKi",
        AddButton: "saletabeditor_AddButton_2fqBD",
        ImgPreview: "saletabeditor_ImgPreview_3jXQP",
      };
    },
    "KP/B": function (e, t, n) {
      "use strict";
      n.d(t, "j", function () {
        return a;
      }),
        n.d(t, "w", function () {
          return g;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "a", function () {
          return S;
        }),
        n.d(t, "n", function () {
          return E;
        }),
        n.d(t, "m", function () {
          return y;
        }),
        n.d(t, "i", function () {
          return O;
        }),
        n.d(t, "h", function () {
          return T;
        }),
        n.d(t, "l", function () {
          return C;
        }),
        n.d(t, "f", function () {
          return j;
        }),
        n.d(t, "s", function () {
          return I;
        }),
        n.d(t, "k", function () {
          return D;
        }),
        n.d(t, "d", function () {
          return w;
        }),
        n.d(t, "t", function () {
          return k;
        }),
        n.d(t, "q", function () {
          return G;
        }),
        n.d(t, "r", function () {
          return L;
        }),
        n.d(t, "u", function () {
          return A;
        }),
        n.d(t, "v", function () {
          return B;
        }),
        n.d(t, "p", function () {
          return F;
        }),
        n.d(t, "o", function () {
          return N;
        }),
        n.d(t, "g", function () {
          return P;
        });
      var a,
        i = n("mrSG"),
        r = n("vDqi"),
        o = n.n(r),
        l = n("226m"),
        s = n("2vnA"),
        c = n("5eAM"),
        u = n("gOcu"),
        d = n("C4Nl"),
        p = n("gyoR"),
        m = n("lkRc"),
        _ = n("fcuX");
      function g(e, t, n, r, _, g) {
        return (
          void 0 === n && (n = !0),
          void 0 === r && (r = !0),
          void 0 === _ && (_ = !0),
          void 0 === g && (g = !1),
          Object(i.b)(this, void 0, void 0, function () {
            var h,
              f,
              b,
              v,
              S,
              E,
              y,
              O,
              T,
              C,
              j,
              I,
              D,
              w,
              M,
              G,
              L = this;
            return Object(i.e)(this, function (A) {
              switch (A.label) {
                case 0:
                  return (
                    (h = null),
                    (f = e.GetEventModel().jsondata.sale_opt_in_page_name),
                    _ && f ? [4, l.a.Get().HintLoadOptInPageData(f)] : [3, 2]
                  );
                case 1:
                  A.sent(), (A.label = 2);
                case 2:
                  return (
                    (b = _ && f ? l.a.Get().GetOptInPageData(f) : null),
                    [
                      4,
                      Object(p.i)(
                        t.map(function (e) {
                          return e.capsule;
                        })
                      ),
                    ]
                  );
                case 3:
                  return (
                    A.sent(),
                    [
                      4,
                      Object(p.g)(
                        t.map(function (e) {
                          return e.capsule;
                        })
                      ),
                    ]
                  );
                case 4:
                  if (((v = A.sent()), (S = new Map()), !n)) return [3, 8];
                  (E = 0), (y = t), (A.label = 5);
                case 5:
                  return E < y.length
                    ? ((O = y[E]),
                      (C = (T = S).set),
                      (j = [O]),
                      [4, Object(p.f)(O.capsule)])
                    : [3, 8];
                case 6:
                  C.apply(T, j.concat([A.sent()])), (A.label = 7);
                case 7:
                  return E++, [3, 5];
                case 8:
                  if (
                    ((I = new Array()),
                    g &&
                      I.push(
                        (function (e) {
                          return Object(i.b)(this, void 0, void 0, function () {
                            var t, n, a, r, l, s, c, u;
                            return Object(i.e)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  for (
                                    t = 50, n = [], a = e.slice();
                                    a.length > 0;

                                  )
                                    (r = Math.min(t, a.length)),
                                      (l = a.slice(0, r)),
                                      (a = a.slice(r)),
                                      n.push(l);
                                  return (
                                    (s = n.map(function (e) {
                                      var t =
                                          m.c.STORE_BASE_URL +
                                          "broadcast/ajaxgettopntagsforappbatch",
                                        n = { appids: e.join(",") };
                                      return o.a.get(t, { params: n });
                                    })),
                                    [4, Promise.all(s)]
                                  );
                                case 1:
                                  return (
                                    (c = i.sent()),
                                    (u = new Map()),
                                    c.forEach(function (e) {
                                      var t, n;
                                      null ===
                                        (n =
                                          null ===
                                            (t = null == e ? void 0 : e.data) ||
                                          void 0 === t
                                            ? void 0
                                            : t.apps) ||
                                        void 0 === n ||
                                        n.forEach(function (e) {
                                          u.set(Number(e.appid), e.tags);
                                        });
                                    }),
                                    [2, u]
                                  );
                              }
                            });
                          });
                        })(v).then(function (e) {
                          h = e;
                        })
                      ),
                    r)
                  )
                    for (
                      I.push(u.a.Get().LoadAppIDsBatch(v)),
                        100,
                        D = Promise.resolve(null),
                        w = function (e) {
                          var t = Math.min(100, v.length - e),
                            n = v.slice(e, e + t),
                            a = function () {
                              return Object(i.b)(
                                L,
                                void 0,
                                void 0,
                                function () {
                                  return Object(i.e)(this, function (e) {
                                    return [
                                      2,
                                      d.a
                                        .Get()
                                        .HintLoadStoreItems(
                                          void 0,
                                          n,
                                          [],
                                          [],
                                          d.a.k_DataRequest_CommonOnly
                                        ),
                                    ];
                                  });
                                }
                              );
                            };
                          (D = D.then(a, a)), I.push(D);
                        },
                        M = 0;
                      M < v.length;
                      M += 100
                    )
                      w(M);
                  return [4, Promise.all(I)];
                case 9:
                  return (
                    A.sent(),
                    (G = !1),
                    Object(s.G)(function () {
                      for (var i = 0, o = t; i < o.length; i++) {
                        var l = o[i],
                          s = !1;
                        if (b) {
                          var u = b.get(l.capsule.id);
                          k(
                            l,
                            u
                              ? u.tags.map(function (e) {
                                  return e.name;
                                })
                              : [],
                            a.OptIn
                          ) && (s = !0);
                        }
                        if (n) {
                          for (
                            var d = new Set(), p = 0, m = S.get(l);
                            p < m.length;
                            p++
                          ) {
                            var _ = m[p];
                            if (g) {
                              if (!h || !h.has(_)) {
                                console.error("COULD NOT FIND TAGS FOR ", _);
                                continue;
                              }
                              for (var f = 0, v = h.get(_); f < v.length; f++) {
                                var E = v[f];
                                d.add(E.name);
                              }
                            } else {
                              var y = c.a.GetAppLinkInfo(_);
                              if (!y || !y.tags) {
                                console.error("COULD NOT FIND TAGS FOR ", _);
                                continue;
                              }
                              for (var O = 0, T = y.tags; O < T.length; O++) {
                                E = T[O];
                                d.add(E.name);
                              }
                            }
                          }
                          k(l, Array.from(d), a.Store) && (s = !0);
                        }
                        if (r) k(l, x(l.capsule), a.Feature) && (s = !0);
                        s &&
                          (B(e.GetEventModel().jsondata.auto_item_tags, l),
                          (G = !0));
                      }
                    }),
                    [2, G]
                  );
              }
            });
          })
        );
      }
      function h(e, t, n) {
        return Object(i.b)(this, void 0, void 0, function () {
          var a, r;
          return Object(i.e)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  e.GetEventModel().jsondata.tagged_items ||
                    (e.GetEventModel().jsondata.tagged_items = new Array()),
                  (a = e.GetEventModel().GetTaggedItems()).find(function (e) {
                    return e.capsule.id === n && e.capsule.type === t;
                  })
                    ? [2]
                    : ((r = { capsule: { id: n, type: t }, tags: new Array() }),
                      [4, g(e, [r])])
                );
              case 1:
                return (
                  i.sent(), a.push(r), A(e), e.SetDirty(_.c.jsondata_sales), [2]
                );
            }
          });
        });
      }
      function f(e, t) {
        e.manually_added_tags &&
          (e.manually_added_tags = e.manually_added_tags.filter(function (e) {
            return e.toLocaleLowerCase() != t;
          })),
          e.manually_removed_tags &&
            (e.manually_removed_tags = e.manually_removed_tags.filter(function (
              e
            ) {
              return e.toLocaleLowerCase() != t;
            }));
      }
      function b(e, t) {
        for (var n = !1, a = new Map(), i = 0, r = e.tags; i < r.length; i++) {
          var o = r[i];
          a.set(o.toLocaleLowerCase(), o);
        }
        for (var l = 0, s = t; l < s.length; l++) {
          var c = s[l],
            u = c.toLocaleLowerCase();
          a.has(u)
            ? a.delete(u)
            : (f(e, u),
              e.manually_added_tags || (e.manually_added_tags = []),
              e.manually_added_tags.push(c),
              (n = !0));
        }
        return (
          a.forEach(function (t, a) {
            f(e, a),
              e.manually_removed_tags || (e.manually_removed_tags = []),
              e.manually_removed_tags.push(t),
              (n = !0);
          }),
          n && (e.tags = t),
          n
        );
      }
      function v(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function S(e, t, n) {
        for (var a = 0, i = t; a < i.length; a++) {
          var r = i[a],
            o = r.toLocaleLowerCase(),
            l = n.get(o);
          l ? l.items.push(e) : n.set(o, { properCaseString: r, items: [e] });
        }
      }
      function E(e) {
        for (var t = new Map(), n = 0, a = e; n < a.length; n++) {
          var i = a[n];
          i.tags && S(i, i.tags, t);
        }
        return t;
      }
      function y(e) {
        var t = new Set();
        return (
          e.forEach(function (e) {
            return t.add(e.toLocaleLowerCase());
          }),
          t
        );
      }
      function O(e, t) {
        if (t && t.clauses)
          for (var n = 0, a = t.clauses; n < a.length; n++) {
            var i = a[n];
            if (i.or_tags) {
              for (var r = !1, o = 0, l = 0, s = i.or_tags; l < s.length; l++) {
                var c = s[l];
                if (c && (o++, (r = e.has(c.toLocaleLowerCase())))) break;
              }
              if (0 !== o) if (!("Must have" === i.type ? r : !r)) return !1;
            }
          }
        return !0;
      }
      function T(e, t) {
        return !t || !t.clauses || O(y(e), t);
      }
      function C(e, t) {
        return e.filter(function (e) {
          return T(e.tags, t);
        });
      }
      function j(e, t) {
        return "[" + t + "] " + e;
      }
      function I(e) {
        return e.replace(/^\[(.+)\]/, "").trim();
      }
      function D(e) {
        var t = /^\[(.+)\]/.exec(e);
        return t ? t[1] : void 0;
      }
      function w(e, t) {
        return D(e) === t;
      }
      function M(e, t) {
        return (
          !!t &&
          t.some(function (t) {
            return t.toLocaleLowerCase() === e;
          })
        );
      }
      function k(e, t, n, a) {
        void 0 === a && (a = null);
        var i = !1,
          r = new Map();
        t.forEach(function (e) {
          var t = D(e);
          if (!t || t === n) {
            var a = t ? e : j(e, n);
            r.set(a.toLocaleLowerCase(), a);
          }
        });
        var o = j("", n).toLocaleLowerCase(),
          l = null;
        return (
          a &&
            ((l = new Set()),
            a.forEach(function (e) {
              var t = D(e);
              if (!t || t === n) {
                var a = t ? e : j(e, n);
                l.add(a.toLocaleLowerCase());
              }
            })),
          (e.tags = e.tags.filter(function (t) {
            var n = t.toLocaleLowerCase();
            return (
              !(!l || l.has(n)) ||
              !n.startsWith(o) ||
              (r.has(n)
                ? (r.delete(n), !0)
                : !!M(n, e.manually_added_tags) || ((i = !0), !1))
            );
          })),
          r.forEach(function (t, n) {
            M(n, e.tags) ||
              M(n, e.manually_removed_tags) ||
              ((i = !0), e.tags.push(t));
          }),
          i
        );
      }
      function G(e) {
        var t;
        if (
          !e ||
          !(null === (t = e.clauses) || void 0 === t ? void 0 : t.length)
        )
          return !0;
        for (var n = 0, a = e.clauses; n < a.length; n++) {
          if (a[n].or_tags.length > 0) return !1;
        }
        return !0;
      }
      function L(e, t, n) {
        for (var a = new Map(), i = 0, r = n; i < r.length; i++) {
          var o = r[i];
          a.set(o.type + o.id, !1);
        }
        for (
          var l = C(e, t), s = new Array(), c = 0, u = l;
          c < u.length;
          c++
        ) {
          var d = u[c],
            p = d.capsule.type + d.capsule.id,
            m = a.get(p);
          void 0 === m ? s.push(d.capsule) : !1 === m && a.set(p, !0);
        }
        var _ = n.filter(function (e) {
          return a.get(e.type + e.id);
        });
        return _.push.apply(_, s), _;
      }
      function A(e) {
        Object(s.G)(function () {
          var t = N(e);
          if (e.GetEventModel().jsondata.sorting_tiers)
            for (
              var n = 0, a = e.GetEventModel().jsondata.sorting_tiers;
              n < a.length;
              n++
            ) {
              var i = a[n];
              i.sale_tag_filter &&
                (i.capsules = L(t, i.sale_tag_filter, i.capsules));
            }
          for (
            var r = 0, o = e.GetEventModel().GetSaleSections();
            r < o.length;
            r++
          ) {
            var l = o[r];
            if (
              ("sale_item_browser" === l.section_type
                ? (l.capsules = void 0)
                : l.sale_tag_filter &&
                  (l.capsules = L(t, l.sale_tag_filter, l.capsules)),
              l.tabs)
            )
              for (var s = 0, c = l.tabs; s < c.length; s++) {
                var u = c[s];
                u.sale_tag_filter &&
                  (u.capsules = L(t, u.sale_tag_filter, u.capsules));
              }
          }
        });
      }
      function B(e, t) {
        var n = new Array();
        if (e)
          for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            T(t.tags, o.filter) && n.push(o.tag_name);
          }
        return k(t, n, a.Auto);
      }
      function F(e) {
        return e.GetEventModel().jsondata.tagged_item_filter || { clauses: [] };
      }
      function N(e) {
        var t = F(e);
        return C(e.GetEventModel().GetTaggedItems(), t);
      }
      function R(e, t) {
        return (
          !!e.content_descriptors &&
          void 0 !==
            e.content_descriptors.find(function (e) {
              return e === t;
            })
        );
      }
      function x(e) {
        var t = new Array(),
          n = c.a.GetAppLinkInfo(e.id),
          a = u.a.Get().GetDemoEventInfo(e.id),
          i = d.a.Get().GetApp(e.id);
        return (
          a && a.demo_appid && t.push("Has Demo"),
          n
            ? (n.coming_soon && t.push("Coming Soon"),
              n.available_linux && t.push("Linux"),
              n.available_mac && t.push("Mac"),
              n.support_vrhmd && t.push("VR"),
              n.support_vrhmd_only && t.push("VR Only"),
              n.discount_percent && t.push("Discounted"),
              n.is_free && t.push("Free"),
              "music" === n.type && t.push("Soundtrack"),
              "dlc" === n.type && t.push("DLC"),
              R(n, 3) && t.push("Adult Only Sexual Content"),
              R(n, 1) && t.push("Nudity or Sexual Content"),
              R(n, 2) && t.push("Violence or Gore"))
            : console.log("Could not load appinfo for", e.type, e.id),
          i &&
            (i.BHasStoreCategory(28) && t.push("Full Controller"),
            i.BHasStoreCategory(9) && t.push("Coop"),
            (i.BHasStoreCategory(41) ||
              i.BHasStoreCategory(42) ||
              i.BHasStoreCategory(43) ||
              i.BHasStoreCategory(44)) &&
              t.push("Remote Play"),
            i.BHasStoreCategory(44) && t.push("Remote Play Together")),
          t
        );
      }
      function P(e) {
        var t = F(e);
        if (G(t)) return !1;
        var n = e.GetEventModel().jsondata.tagged_items.length;
        return (
          Object(s.G)(function () {
            e.GetEventModel().jsondata.tagged_items = C(
              e.GetEventModel().jsondata.tagged_items,
              t
            );
          }),
          e.GetEventModel().jsondata.tagged_items.length !== n
        );
      }
      !(function (e) {
        (e.Store = "Store"),
          (e.Feature = "Feature"),
          (e.OptIn = "Opt"),
          (e.Auto = "Auto"),
          (e.Custom = "Custom");
      })(a || (a = {}));
    },
    KmXr: function (e, t, n) {
      e.exports = {
        Label: "importexportdialog_Label_1LhIt",
        ImportLocSampleButtonCtn:
          "importexportdialog_ImportLocSampleButtonCtn_D-1dl",
        SampleTitle: "importexportdialog_SampleTitle_9189i",
        ImportButton: "importexportdialog_ImportButton_Wyfyx",
      };
    },
    NrWE: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      }),
        n.d(t, "b", function () {
          return L;
        });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("TyAF"),
        l = n("q1tI"),
        s = n("1VNF"),
        c = n("kLLr"),
        u = n("U+Q5"),
        d = n("9w6b"),
        p = n("fpVW"),
        m = n.n(p),
        _ = n("Jqb/"),
        g = n("ka0M"),
        h = n("0OaU"),
        f = n("exH9"),
        b = n("X3Ds"),
        v = n("TLQK"),
        S = n("OS6B"),
        E = n("opsS"),
        y = n("75vw"),
        O = n.n(y),
        T = n("Mgs7"),
        C = n("6yBx"),
        j = n("bVxH"),
        I = n("R5ed"),
        D = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bPrefetchingLanguages: !0 }),
              (t.m_cancelSignal = r.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              if (this.props.closeModal) {
                var e = this.props.primaryLocalizedImage;
                u.d.SetPrimaryImageForImageGroup(e, "localized_image_group"),
                  this.LoadImageResolution(),
                  this.LoadAvailableLocalizations();
              }
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel("ClanImagePicker component unmounted");
            }),
            (t.prototype.LoadImageResolution = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, i, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 2, , 3]),
                        (e = this.props.primaryLocalizedImage),
                        (t = c.a.InitFromClanID(e.clanAccountID)),
                        [
                          4,
                          u.d.AsyncGetImageResolution(
                            t,
                            e.image_hash,
                            e.file_type,
                            this.m_cancelSignal,
                            !1
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (n = a.sent()),
                        this.m_cancelSignal.token.reason ||
                          this.setState({ imageSize: n }),
                        [3, 3]
                      );
                    case 2:
                      return (
                        (i = a.sent()),
                        (r = Object(S.a)(i)),
                        console.error(
                          "LocalizedImageDialog : " + r.strErrorMsg,
                          r
                        ),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.LoadAvailableLocalizations = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(a.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        [
                          4,
                          u.d.DetermineAvailableLocalizationForGroup(
                            this.m_cancelSignal
                          ),
                        ]
                      );
                    case 1:
                      return (
                        n.sent(),
                        this.m_cancelSignal.token.reason ||
                          this.setState({ bPrefetchingLanguages: !1 }),
                        [3, 3]
                      );
                    case 2:
                      return (
                        (e = n.sent()),
                        (t = Object(S.a)(e)),
                        console.error(
                          "LocalizedImageDialog : " + t.strErrorMsg,
                          t
                        ),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.OnCommitGroup = function () {}),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.closeModal,
                n = e.primaryLocalizedImage,
                a = e.clanSteamID,
                i = this.state,
                r = i.bPrefetchingLanguages,
                o = i.imageSize,
                s = !r && o,
                c = o ? " - " + o.width + "x" + o.height : "",
                d = u.a.GetExtensionStringForFileType(n.file_type).slice(1),
                p = o && { width: o.width, height: o.height },
                g = u.a.GenerateArtworkURLFromHashAndExtensions(
                  a,
                  u.a.GetHashAndExt(n)
                );
              return l.createElement(
                _.e,
                {
                  onOK: this.OnCommitGroup,
                  bAllowFullSize: !0,
                  onCancel: t,
                  closeModal: t,
                },
                l.createElement(
                  T.l,
                  null,
                  Object(v.f)("#ImagePickerLoc_Title")
                ),
                l.createElement(
                  T.b,
                  null,
                  l.createElement(
                    T.c,
                    null,
                    l.createElement(
                      "div",
                      { className: m.a.FlexRowContainer },
                      l.createElement(
                        "span",
                        { className: m.a.FlexColumnContainer },
                        l.createElement(
                          "div",
                          null,
                          Object(v.f)("#ImagePickerLoc_Default"),
                          " ",
                          l.createElement(
                            "span",
                            {
                              "data-tooltip-text": Object(v.f)(
                                "#ImagePickerLoc_Default_Hint"
                              ),
                            },
                            " (?)"
                          )
                        ),
                        l.createElement("img", {
                          className: j.titleimg,
                          src: g,
                        }),
                        l.createElement(
                          "div",
                          null,
                          n.file_name + c + " - " + d
                        )
                      )
                    ),
                    !s &&
                      l.createElement(h.a, {
                        position: "center",
                        string: Object(v.f)("#Loading"),
                      }),
                    s &&
                      l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(C.b, {
                          clanSteamID: a,
                          rgSupportArtwork: [],
                          localizedPrimaryImage: n,
                          forceResolution: p,
                          fnSetImageURL: this.props.fnSetImageURL,
                          rgRealmList: this.props.rgRealmList,
                        }),
                        l.createElement(
                          "div",
                          { className: j.artworkbar },
                          l.createElement(I.b, {
                            clanSteamID: a,
                            artworkType: "localized_image_group",
                            title: Object(v.f)("#ImagePickerLoc_Title"),
                          })
                        )
                      )
                  )
                )
              );
            }),
            Object(a.c)([E.a], t.prototype, "OnCommitGroup", null),
            (t = Object(a.c)([o.a], t))
          );
        })(l.Component),
        w = n("blFj"),
        M = n("Yamg"),
        k = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = r.a.CancelToken.source()),
              (t.m_searchInput = null),
              (t.m_clanImageUploader = null),
              (t.state = {
                filenameSearch: "",
                uploadToken: 0,
                bLoading: !u.d.BHasLoadedClanImages(t.props.clanSteamID),
              }),
              t
            );
          }
          var n;
          return (
            Object(a.d)(t, e),
            (n = t),
            (t.prototype.componentDidMount = function () {
              this.state.bLoading && this.HandleLoadClanImages();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              (this.props.clanSteamID.GetAccountID() ==
                e.clanSteamID.GetAccountID() &&
                u.d.BHasLoadedClanImages(this.props.clanSteamID)) ||
                (this.state.bLoading || this.setState({ bLoading: !0 }),
                this.HandleLoadClanImages());
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel("ClanImagePicker component unmounted");
            }),
            (t.prototype.HandleLoadClanImages = function () {
              var e = this;
              u.d
                .LoadClanImages(this.props.clanSteamID, !1, this.m_cancelSignal)
                .then(function () {
                  e.m_cancelSignal.token.reason || e.setState({ bLoading: !1 });
                })
                .catch(function (t) {
                  var n = Object(S.a)(t);
                  console.error(
                    "ClanImagePicker Failed: " +
                      n.strErrorMsg +
                      " errCode: " +
                      n.strErrorMsg
                  ),
                    e.m_cancelSignal.token.reason ||
                      e.setState({ bLoading: !1, strErrMsg: n.strErrorMsg });
                });
            }),
            (t.prototype.onSearchTextChangeHandler = function (e) {
              var t = e.currentTarget.value;
              this.state.filenameSearch != t &&
                this.setState({ filenameSearch: t });
            }),
            (t.prototype.CreateImageWrappers = function () {
              var e = [],
                t = this.state.filenameSearch.trim().toLowerCase(),
                n = u.d.GetFilteredClanImages(this.props.clanSteamID, t);
              if (n.length > 0)
                for (var a = 0, i = n; a < i.length; a++) {
                  var r = i[a];
                  e.push(
                    l.createElement(A, {
                      key: r.imageid,
                      clanImage: r,
                      searchStringHilight: t,
                      imageInsertCallBack: this.props.imageInsertCallBack,
                      fnOnOpenLocalizedImageGroup: this
                        .InternalOpenLocalizeImageGroup,
                      insertActions: this.props.insertActions,
                      OnImageClick: this.OnExpandImage,
                    })
                  );
                }
              if (0 == e.length) {
                var o = u.d.GetLoadState(this.props.clanSteamID);
                o && o.loaded
                  ? e.push(
                      l.createElement(
                        "div",
                        {
                          key: "ImagePicker_Result",
                          className: O.a.ResultNotification,
                        },
                        t.length > 0
                          ? Object(v.f)("#ImagePicker_EmptySearch")
                          : Object(v.f)("#ImagePicker_Empty")
                      )
                    )
                  : o && o.errMsg
                  ? e.push(
                      l.createElement(
                        "div",
                        { key: "ImagePicker_Result", className: O.a.errorcode },
                        Object(v.f)("#ImagePicker_Error", o.errMsg)
                      )
                    )
                  : e.push(
                      l.createElement(
                        "div",
                        {
                          key: "ImagePicker_Result",
                          className: O.a.ResultNotification,
                        },
                        Object(v.f)("#Loading")
                      )
                    );
              }
              return e;
            }),
            (t.prototype.onSearchTextKeyPress = function (e) {
              "Escape" == e.key &&
                (this.setState({ filenameSearch: "" }),
                this.m_searchInput && (this.m_searchInput.value = ""));
            }),
            (t.prototype.onUploaderDismiss = function () {
              this.setState({
                filenameSearch: this.state.filenameSearch,
                uploadToken: null,
              });
            }),
            (t.prototype.OnDropFiles = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, i, r;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!(e && e.length > 0)) return [3, 5];
                      (this.m_clanImageUploader = new u.b(
                        this.props.clanSteamID
                      )),
                        (t = !0),
                        (i = 0),
                        (a.label = 1);
                    case 1:
                      return t && i < Array.from(e).length
                        ? ((r = e.item(i)),
                          [4, this.m_clanImageUploader.AddImage(r, 0, null)])
                        : [3, 4];
                    case 2:
                      (t = a.sent()) ||
                        (console.error(
                          "ClanImagePicker.OnDropFiles: failed on i=" +
                            i +
                            " file=" +
                            r.name
                        ),
                        Object(g.d)(
                          l.createElement(_.f, {
                            strDescription: Object(v.f)(
                              "#ImagePicker_Error",
                              r.name
                            ),
                          }),
                          window
                        )),
                        (a.label = 3);
                    case 3:
                      return i++, [3, 1];
                    case 4:
                      return (
                        t &&
                          (this.setState({
                            filenameSearch: "",
                            uploadToken: ++n.m_uploaderCounter,
                          }),
                          this.m_clanImageUploader.UploadAllFiles()),
                        [2, t]
                      );
                    case 5:
                      return [2, !1];
                  }
                });
              });
            }),
            (t.prototype.GetLastUploadFiles = function () {
              return this.m_clanImageUploader
                ? this.m_clanImageUploader.GetFilesToUpload()
                : null;
            }),
            (t.prototype.BFileUploadCompleted = function (e) {
              return (
                !!this.m_clanImageUploader &&
                this.m_clanImageUploader.BIsFileCompleted(e)
              );
            }),
            (t.prototype.OnExpandImage = function (e) {
              if (e && this.props.bShowLightBox) {
                var t = u.d.GetFilteredClanImages(
                    this.props.clanSteamID,
                    this.state.filenameSearch.trim().toLowerCase()
                  ),
                  n = t.findIndex(function (t, n, a) {
                    return e.imageid == t.imageid;
                  });
                n >= 0 &&
                  this.setState({ photoIndex: n, filteredClanImages: t });
              }
            }),
            (t.prototype.OnExpandExitImage = function () {
              this.setState({ photoIndex: void 0, filteredClanImages: void 0 });
            }),
            (t.prototype.OnHandleExpandedFullSize = function () {
              this.InternalHandleExpandedAction(M.a.k_eInsertFullImage);
            }),
            (t.prototype.OnHandleExpandedThumbnail = function () {
              this.InternalHandleExpandedAction(M.a.k_eInsertThumbnail);
            }),
            (t.prototype.OnHandleOpenLocalizedImageGroup = function () {
              null != this.state.photoIndex &&
                this.InternalOpenLocalizeImageGroup(
                  this.state.filteredClanImages[this.state.photoIndex]
                );
            }),
            (t.prototype.InternalHandleExpandedAction = function (e) {
              null != this.state.photoIndex &&
                (this.props.imageInsertCallBack(
                  this.state.filteredClanImages[this.state.photoIndex],
                  e
                ),
                this.OnExpandExitImage());
            }),
            (t.prototype.InternalOpenLocalizeImageGroup = function (e) {
              var t = this.props.clanSteamID;
              Object(g.d)(
                l.createElement(D, {
                  primaryLocalizedImage: e,
                  clanSteamID: t,
                  fnSetImageURL: this.props.fnSetImageURL,
                  rgRealmList: this.props.rgRealmList,
                }),
                window
              );
            }),
            (t.prototype.render = function () {
              var e = this;
              if (this.state.strErrMsg)
                return l.createElement(
                  "div",
                  null,
                  l.createElement("div", null, Object(v.f)("#Error_Message")),
                  l.createElement("div", null, this.state.strErrMsg),
                  l.createElement(
                    "div",
                    {
                      className: Object(f.a)(m.a.Button),
                      onClick: this.HandleLoadClanImages,
                    },
                    Object(v.f)("#Button_Retry")
                  )
                );
              if (this.state.bLoading)
                return l.createElement(h.a, {
                  position: "center",
                  string: Object(v.f)("#Loading"),
                });
              var t = this.CreateImageWrappers(),
                n = this.state.filteredClanImages,
                a = this.state.photoIndex,
                i = this.props.clanSteamID;
              return l.createElement(
                "div",
                { className: Object(f.a)(O.a.PickerContainer) },
                l.createElement(
                  "div",
                  { className: O.a.PickerTitle },
                  l.createElement("input", {
                    ref: function (t) {
                      return (e.m_searchInput = t);
                    },
                    className: O.a.SearchInput,
                    type: "text",
                    placeholder: Object(v.f)("#ImagePicker_Search"),
                    onChange: this.onSearchTextChangeHandler,
                    onKeyDown: this.onSearchTextKeyPress,
                  })
                ),
                l.createElement("div", { className: O.a.ImagesContainer }, t),
                this.state.uploadToken > 0 &&
                  l.createElement(B, {
                    key: "clanimageuploaderview" + this.state.uploadToken,
                    uploader: this.m_clanImageUploader,
                    onDismiss: this.onUploaderDismiss,
                  }),
                !this.props.bHideDragAndDrop &&
                  l.createElement(L, {
                    onDropFiles: this.OnDropFiles,
                    fnSetImageURL: this.props.fnSetImageURL,
                    clanSteamID: i,
                    rgRealmList: this.props.rgRealmList,
                  }),
                null != a &&
                  l.createElement(s.a, {
                    mainSrc: n[a].url,
                    mainSrcThumbnail: n[a].thumb_url,
                    imageTitle: n[a].file_name,
                    nextSrc: a < n.length - 1 ? n[a + 1].url : void 0,
                    nextSrcThumbnail:
                      a < n.length - 1 ? n[a + 1].thumb_url : void 0,
                    nextLabel: Object(v.f)("#ClanImage_Next"),
                    prevLabel: Object(v.f)("#ClanImage_Prev"),
                    closeLabel: Object(v.f)("#ClanImage_Close"),
                    zoomInLabel: Object(v.f)("#ClanImage_ZoomIn"),
                    zoomOutLabel: Object(v.f)("#ClanImage_ZoomOut"),
                    imageLoadErrorMessage: Object(v.f)(
                      "#ClanImage_ImageLoadFailure"
                    ),
                    prevSrc: a > 0 ? n[a - 1].url : void 0,
                    prevSrcThumbnail: a > 0 ? n[a - 1].thumb_url : void 0,
                    onMoveNextRequest: function () {
                      return e.setState({ photoIndex: a + 1 });
                    },
                    onMovePrevRequest: function () {
                      return e.setState({ photoIndex: a - 1 });
                    },
                    onCloseRequest: this.OnExpandExitImage,
                    toolbarButtons: [
                      l.createElement(
                        "button",
                        {
                          key: "fullsize",
                          className: O.a.Full,
                          onClick: this.OnHandleExpandedFullSize,
                        },
                        Object(v.f)("#ImagePicker_FullSize")
                      ),
                      l.createElement(
                        "button",
                        {
                          key: "thumbnail",
                          className: O.a.Full,
                          onClick: this.OnHandleExpandedThumbnail,
                        },
                        Object(v.f)("#ImagePicker_Thumbnail")
                      ),
                    ],
                  })
              );
            }),
            (t.m_uploaderCounter = 1),
            Object(a.c)([E.a], t.prototype, "HandleLoadClanImages", null),
            Object(a.c)([E.a], t.prototype, "onSearchTextChangeHandler", null),
            Object(a.c)([E.a], t.prototype, "onSearchTextKeyPress", null),
            Object(a.c)([E.a], t.prototype, "onUploaderDismiss", null),
            Object(a.c)([E.a], t.prototype, "OnDropFiles", null),
            Object(a.c)([E.a], t.prototype, "OnExpandImage", null),
            Object(a.c)([E.a], t.prototype, "OnExpandExitImage", null),
            Object(a.c)([E.a], t.prototype, "OnHandleExpandedFullSize", null),
            Object(a.c)([E.a], t.prototype, "OnHandleExpandedThumbnail", null),
            Object(a.c)(
              [E.a],
              t.prototype,
              "OnHandleOpenLocalizedImageGroup",
              null
            ),
            Object(a.c)(
              [E.a],
              t.prototype,
              "InternalHandleExpandedAction",
              null
            ),
            Object(a.c)(
              [E.a],
              t.prototype,
              "InternalOpenLocalizeImageGroup",
              null
            ),
            (t = n = Object(a.c)([o.a], t))
          );
        })(l.Component),
        G = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnClanImageSelected = function (e, t) {
              var n = this.props,
                a = n.OnClanImageSelected,
                i = n.closeModal;
              a(e, t), i();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.clanSteamID,
                n = e.closeModal;
              return l.createElement(
                _.d,
                {
                  strTitle: Object(v.f)("#ImagePicker_Images"),
                  strDescription: Object(v.f)(
                    "#ImagePicker_DoubleClickToSelect"
                  ),
                  bAlertDialog: !0,
                  onOK: n,
                  onCancel: n,
                },
                l.createElement(k, {
                  clanSteamID: t,
                  insertActions: [],
                  imageInsertCallBack: this.OnClanImageSelected,
                  bHideDragAndDrop: !0,
                  bShowLightBox: !1,
                  fnSetImageURL: this.props.fnSetImageURL,
                  rgRealmList: this.props.rgRealmList,
                })
              );
            }),
            Object(a.c)([E.a], t.prototype, "OnClanImageSelected", null),
            t
          );
        })(l.Component),
        L = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_myInstanceID = n.m_instanceID += 1),
              (t.m_fileInput = l.createRef()),
              (t.state = { dragging: !1 }),
              (t.m_dragEventCounter = 0),
              t
            );
          }
          var n;
          return (
            Object(a.d)(t, e),
            (n = t),
            (t.prototype.OverrideEventDefaults = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (t.prototype.DragEnterListener = function (e) {
              this.OverrideEventDefaults(e),
                (this.m_dragEventCounter += 1),
                ((e.dataTransfer.files && e.dataTransfer.files[0]) ||
                  (e.dataTransfer.types &&
                    "Files" === e.dataTransfer.types[0])) &&
                  (this.state.dragging || this.setState({ dragging: !0 }));
            }),
            (t.prototype.DragLeaveListener = function (e) {
              this.OverrideEventDefaults(e),
                (this.m_dragEventCounter -= 1),
                0 === this.m_dragEventCounter &&
                  this.state.dragging &&
                  this.setState({ dragging: !1 });
            }),
            (t.prototype.DropListener = function (e) {
              this.OverrideEventDefaults(e),
                (this.m_dragEventCounter = 0),
                this.setState({ dragging: !1 });
              var t = e.dataTransfer.files;
              t && t.length > 0 && t[0] && this.props.onDropFiles(t);
            }),
            (t.prototype.onFileChoice = function (e) {
              var t = e.target.files;
              t && t.length > 0 && t[0] && this.props.onDropFiles(t),
                this.m_fileInput.current &&
                  this.m_fileInput.current.value &&
                  (this.m_fileInput.current.value = null);
            }),
            (t.prototype.OnNoOp = function () {}),
            (t.prototype.OnClanImageDialog = function (e) {
              var t = this.props,
                n = t.clanSteamID,
                a = t.OnClanImageSelected;
              Object(g.d)(
                l.createElement(G, {
                  fnSetImageURL: this.props.fnSetImageURL,
                  clanSteamID: n,
                  OnClanImageSelected: a,
                  rgRealmList: this.props.rgRealmList,
                }),
                Object(b.m)(e)
              );
            }),
            (t.prototype.render = function () {
              var e = this.props.renderDesciption;
              return l.createElement(
                "div",
                {
                  className: this.state.dragging
                    ? O.a.DragAndDropContainerDragging
                    : O.a.DragAndDropContainer,
                  onDrag: this.OverrideEventDefaults,
                  onDragStart: this.OverrideEventDefaults,
                  onDragEnd: this.OverrideEventDefaults,
                  onDragOver: this.OverrideEventDefaults,
                  onDragEnter: this.DragEnterListener,
                  onDragLeave: this.DragLeaveListener,
                  onDrop: this.DropListener,
                },
                Boolean(e) && e(),
                l.createElement(
                  "div",
                  null,
                  Object(v.f)("#ImagePicker_DragAndDrop")
                ),
                l.createElement(
                  "div",
                  { className: O.a.ImageUploadBar },
                  l.createElement(
                    "label",
                    { htmlFor: "imagepickerfilechoice" + this.m_myInstanceID },
                    l.createElement(
                      "span",
                      null,
                      Object(v.f)("#ImagePicker_OrBrowse"),
                      " "
                    ),
                    l.createElement(
                      "span",
                      { className: O.a.SelectImageButton },
                      Object(v.f)("#selectimage_select_file")
                    )
                  ),
                  l.createElement("input", {
                    ref: this.m_fileInput,
                    style: { display: "none" },
                    id: "imagepickerfilechoice" + this.m_myInstanceID,
                    type: "file",
                    onSubmit: this.onFileChoice,
                    onChange: this.onFileChoice,
                    multiple: !0,
                    accept: "image/png, image/jpg, image/gif",
                  })
                ),
                this.props.bAllowPreviousClanImages &&
                  l.createElement(
                    "div",
                    { className: O.a.ImageUploadBar },
                    l.createElement(
                      "label",
                      { htmlFor: "clanimagedialog" + this.m_myInstanceID },
                      l.createElement(
                        "span",
                        null,
                        Object(v.f)("#ImagePicker_PreviousImages"),
                        " "
                      ),
                      l.createElement(
                        "span",
                        { className: O.a.SelectImageButton },
                        Object(v.f)("#ImagePicker_PreviousImages2")
                      )
                    ),
                    l.createElement("input", {
                      style: { display: "none" },
                      id: "clanimagedialog" + this.m_myInstanceID,
                      type: "button",
                      onClick: this.OnClanImageDialog,
                    })
                  ),
                this.props.children
              );
            }),
            (t.m_instanceID = 0),
            Object(a.c)([E.a], t.prototype, "OverrideEventDefaults", null),
            Object(a.c)([E.a], t.prototype, "DragEnterListener", null),
            Object(a.c)([E.a], t.prototype, "DragLeaveListener", null),
            Object(a.c)([E.a], t.prototype, "DropListener", null),
            Object(a.c)([E.a], t.prototype, "onFileChoice", null),
            Object(a.c)([E.a], t.prototype, "OnNoOp", null),
            Object(a.c)([E.a], t.prototype, "OnClanImageDialog", null),
            (t = n = Object(a.c)([o.a], t))
          );
        })(l.Component),
        A = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_linkPopupRef = l.createRef()),
              (t.state = { bDeleting: !1 }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.onHandleFullSize = function () {
              this.props.imageInsertCallBack(
                this.props.clanImage,
                M.a.k_eInsertFullImage
              );
            }),
            (t.prototype.onHandleThumbnail = function () {
              this.props.imageInsertCallBack(
                this.props.clanImage,
                M.a.k_eInsertThumbnail
              );
            }),
            (t.prototype.onHandleLocalizedImageGroup = function () {
              this.props.fnOnOpenLocalizedImageGroup(this.props.clanImage);
            }),
            (t.prototype.ShowInsertAction = function (e) {
              return (
                !this.props.insertActions ||
                this.props.insertActions.indexOf(e) >= 0
              );
            }),
            (t.prototype.OnDragStartSource = function (e) {
              var t = this;
              e.dataTransfer.setData("text", this.props.clanImage.url),
                u.d.GetClanImageDragListener().forEach(function (e) {
                  e(c.a.InitFromClanID(t.props.clanImage.clanAccountID), !0);
                });
            }),
            (t.prototype.OnDragEndSource = function (e) {
              var t = this;
              u.d.GetClanImageDragListener().forEach(function (e) {
                e(c.a.InitFromClanID(t.props.clanImage.clanAccountID), !1);
              });
            }),
            (t.prototype.OnDeleteClick = function (e) {
              Object(g.c)(
                l.createElement(
                  _.d,
                  {
                    strTitle: Object(v.f)("#ImagePicker_DeleteImageTitle"),
                    strDescription: "",
                    onOK: this.onDelete,
                    onCancel: this.OnCloseDialog,
                    closeModal: this.OnCloseDialog,
                  },
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "div",
                      null,
                      Object(v.f)(
                        "#ImagePicker_DeleteAreYouSure",
                        this.props.clanImage.file_name
                      )
                    ),
                    l.createElement("br", null),
                    l.createElement("br", null),
                    l.createElement(
                      "div",
                      null,
                      Object(v.f)("#ImagePicker_DeleteWarning")
                    )
                  )
                ),
                Object(b.m)(e)
              );
            }),
            (t.prototype.ShowDeleteError = function (e) {
              console.log("ClanImageWrapper on delete error: " + e),
                Object(g.d)(
                  l.createElement(
                    _.f,
                    {
                      strTitle: Object(v.f)("#Error_FailureNotice"),
                      strDescription: Object(v.f)(
                        "#EventDisplay_DeleteEvent_Error"
                      ),
                    },
                    l.createElement("p", null, e)
                  ),
                  window
                );
            }),
            (t.prototype.onDelete = function () {
              var e = this;
              this.setState({ bDeleting: !0 });
              var t = c.a.InitFromClanID(this.props.clanImage.clanAccountID);
              u.d
                .DeleteClanImage(t, this.props.clanImage)
                .then(function (t) {
                  1 != t.success &&
                    e.ShowDeleteError(Object(S.a)(t).strErrorMsg),
                    e.setState({ bDeleting: !1 });
                })
                .catch(function (t) {
                  e.ShowDeleteError(Object(S.a)(t).strErrorMsg),
                    e.setState({ bDeleting: !1 });
                }),
                this.m_linkPopupRef &&
                  this.m_linkPopupRef.current &&
                  this.m_linkPopupRef.current.click(),
                this.OnCloseDialog();
            }),
            (t.prototype.OnCloseDialog = function () {}),
            (t.prototype.OnImageClick = function () {
              this.props.OnImageClick &&
                this.props.OnImageClick(this.props.clanImage);
            }),
            (t.prototype.render = function () {
              var e = this.props.clanImage,
                t = this.props.clanImage.file_name
                  ? this.props.clanImage.file_name
                  : "",
                n = Object(w.b)(
                  this.props.searchStringHilight,
                  t,
                  String(this.props.clanImage.imageid),
                  O.a.Hilight
                ),
                a = c.a.InitFromClanID(e.clanAccountID),
                i = d.a.Get().GetPartnerEventPermissions(a),
                r = this.state.bDeleting,
                o = !r && this.ShowInsertAction(M.a.k_eInsertFullImage),
                s = !r && this.ShowInsertAction(M.a.k_eInsertThumbnail),
                u = Boolean(
                  !r &&
                    i.valve_admin &&
                    this.ShowInsertAction(M.a.k_eShowImageGroup)
                );
              return l.createElement(
                "div",
                { className: O.a.ImageWrapperContainer },
                l.createElement(
                  "div",
                  { className: O.a.ImageButton },
                  l.createElement("div", {
                    className: O.a.ImageWrapper,
                    style: {
                      backgroundImage:
                        "url( '" + this.props.clanImage.thumb_url + "' )",
                    },
                    draggable: !0,
                    onDragStart: this.OnDragStartSource,
                    onDragEnd: this.OnDragEndSource,
                    onDoubleClick: this.onHandleFullSize,
                    onClick: this.OnImageClick,
                  }),
                  o &&
                    l.createElement(
                      "span",
                      { className: O.a.Full, onClick: this.onHandleFullSize },
                      Object(v.f)("#ImagePicker_FullSize")
                    ),
                  r &&
                    l.createElement(h.a, {
                      size: "medium",
                      className: O.a.FloatingThrobber,
                    }),
                  s &&
                    l.createElement(
                      "span",
                      { className: O.a.Thumb, onClick: this.onHandleThumbnail },
                      Object(v.f)("#ImagePicker_Thumbnail")
                    ),
                  u &&
                    l.createElement(
                      "span",
                      {
                        className: Object(f.a)(
                          O.a.Localized,
                          m.a.ValveOnlyBackground
                        ),
                        onClick: this.onHandleLocalizedImageGroup,
                      },
                      "(VO) " + Object(v.f)("#ImagePicker_Localized")
                    ),
                  !r &&
                    l.createElement(
                      "span",
                      { className: O.a.Delete, onClick: this.OnDeleteClick },
                      l.createElement("img", null)
                    ),
                  l.createElement(
                    "div",
                    { className: O.a.ImageWrapperFilename, title: t },
                    n
                  )
                )
              );
            }),
            Object(a.c)([E.a], t.prototype, "onHandleFullSize", null),
            Object(a.c)([E.a], t.prototype, "onHandleThumbnail", null),
            Object(a.c)(
              [E.a],
              t.prototype,
              "onHandleLocalizedImageGroup",
              null
            ),
            Object(a.c)([E.a], t.prototype, "OnDragStartSource", null),
            Object(a.c)([E.a], t.prototype, "OnDragEndSource", null),
            Object(a.c)([E.a], t.prototype, "OnDeleteClick", null),
            Object(a.c)([E.a], t.prototype, "onDelete", null),
            Object(a.c)([E.a], t.prototype, "OnCloseDialog", null),
            Object(a.c)([E.a], t.prototype, "OnImageClick", null),
            t
          );
        })(l.Component),
        B = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.onRetry = function () {
              this.props.uploader.RetryAllFailedUploads();
            }),
            (t.prototype.onCancelUploads = function () {
              this.props.uploader.CancelAllUploads(), this.props.onDismiss();
            }),
            (t.prototype.render = function () {
              var e = this.props.uploader,
                t = e.BAllDone(),
                n = !t && !e.BHasError();
              return l.createElement(
                "div",
                { className: O.a.UploaderContainer },
                n &&
                  l.createElement(
                    "div",
                    { className: O.a.UploaderRunning },
                    l.createElement(
                      "div",
                      { className: O.a.UploaderDesc },
                      Object(v.f)(
                        "#ImageUpload_Desc",
                        e.GetCompletedFiles(),
                        e.GetTotalFiles()
                      )
                    ),
                    l.createElement(
                      "button",
                      {
                        className: "DialogButton",
                        onClick: this.onCancelUploads,
                      },
                      Object(v.f)("#Button_Cancel")
                    )
                  ),
                e.BHasError() &&
                  l.createElement(
                    "div",
                    { className: O.a.UploadMessageAndButtonsContainer },
                    l.createElement(
                      "div",
                      { className: O.a.UploadError },
                      Object(v.f)(
                        "#ImageUpload_Error",
                        e.GetLastErrorFile().file.name,
                        e.GetLastErrorFile().status,
                        e.GetLastErrorFile().message
                      )
                    ),
                    l.createElement(
                      "button",
                      {
                        className: O.a.UploadButtonCancel,
                        onClick: this.props.onDismiss,
                      },
                      Object(v.f)("#Button_Cancel")
                    ),
                    l.createElement(
                      "button",
                      {
                        className: O.a.UploadButtonRetry,
                        onClick: this.onRetry,
                      },
                      Object(v.f)("#Button_Retry")
                    )
                  ),
                t &&
                  l.createElement(
                    "div",
                    { className: O.a.UploadMessageAndButtonsContainer },
                    l.createElement(
                      "div",
                      { className: O.a.UploadSuccess },
                      Object(v.f)("#ImageUpload_Success")
                    )
                  )
              );
            }),
            Object(a.c)([E.a], t.prototype, "onRetry", null),
            Object(a.c)([E.a], t.prototype, "onCancelUploads", null),
            (t = Object(a.c)([o.a], t))
          );
        })(l.Component);
    },
    P2lf: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var a = n("mrSG"),
        i = n("NpuA"),
        r = n.n(i),
        o = n("mgoM"),
        l = n("kyHq"),
        s = n("Kw0F"),
        c = n("TLQK"),
        u = (function () {
          function e() {
            this.m_mapTokens = new Map();
          }
          return (
            (e.prototype.GetLocalization = function (e, t) {
              var n = this.m_mapTokens.get(e);
              if (n && n[t]) return n[t];
            }),
            (e.prototype.SetLocalization = function (e, t, n) {
              var a = this.m_mapTokens.get(e);
              a ||
                ((a = Object(s.e)([], 30, null)), this.m_mapTokens.set(e, a)),
                (a[t] = n);
            }),
            (e.prototype.GetSortedTokenList = function () {
              var e = [];
              return (
                this.m_mapTokens.forEach(function (t, n) {
                  return e.push(n);
                }),
                e.sort(function (e, t) {
                  return e.localeCompare(t);
                }),
                e
              );
            }),
            (e.prototype.GetLanguagesWithTokens = function () {
              var e = new Map();
              this.m_mapTokens.forEach(function (t) {
                for (var n = 0; n < t.length; ++n)
                  !e.has(n) &&
                    null !== t[n] &&
                    void 0 !== t[n] &&
                    t[n].trim().length > 0 &&
                    e.set(n, !0);
              });
              var t = new Array();
              return (
                e.forEach(function (e, n) {
                  e && t.push(n);
                }),
                t
              );
            }),
            (e.prototype.ClearLanguagesTokens = function (e) {
              var t = this;
              e.forEach(function (e) {
                t.m_mapTokens.forEach(function (t, n) {
                  e < t.length && null !== t[e] && (t[e] = null);
                });
              });
            }),
            e
          );
        })(),
        d = (function () {
          function e() {
            this.m_DummyValueForQuestionHack = 0;
          }
          return (
            (e.prototype.DetectAndFormatCSV = function (e) {
              var t,
                n,
                a,
                i,
                r,
                l,
                s = null;
              return (
                (null ===
                  (n =
                    null === (t = null == e ? void 0 : e.meta) || void 0 === t
                      ? void 0
                      : t.fields) || void 0 === n
                  ? void 0
                  : n.length) >= 3 &&
                "field" === e.meta.fields[0] &&
                "language" === e.meta.fields[1] &&
                "value" === e.meta.fields[2]
                  ? (s = this.ReadLocalizationData_CSV_TokenLanguageList(e))
                  : (null ===
                      (i =
                        null === (a = null == e ? void 0 : e.meta) ||
                        void 0 === a
                          ? void 0
                          : a.fields) || void 0 === i
                      ? void 0
                      : i.length) >= 2 &&
                    "field" === e.meta.fields[0] &&
                    -1 != Object(o.d)(e.meta.fields[1], -1)
                  ? (s = this.ReadLocalizationData_CSV_LanguageColumns(e))
                  : (null ===
                      (l =
                        null === (r = null == e ? void 0 : e.meta) ||
                        void 0 === r
                          ? void 0
                          : r.fields) || void 0 === l
                      ? void 0
                      : l.length) >= 2 &&
                    "language" === e.meta.fields[0] &&
                    (s = this.ReadLocalizationData_CSV_LanguageRows(e)),
                s
              );
            }),
            (e.WriteFile = function (e, t) {
              var n = document.createElement("a");
              if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
              else {
                var a = window.URL.createObjectURL(e);
                n.href = a;
              }
              n.setAttribute("download", t), n.click();
              try {
                document.removeChild(n);
              } catch (e) {}
            }),
            (e.prototype.ReadFile = function (e) {
              return new Promise(function (t, n) {
                var a = new FileReader();
                (a.onload = function (e) {
                  return t(a.result);
                }),
                  a.readAsText(e);
              });
            }),
            (e.prototype.WriteCSVToFile = function (t, n) {
              var a = r.a.unparse(t, { header: !0 });
              e.WriteFile(
                new Blob([a], { type: "text/csv:charset=utf-8;" }),
                n
              );
            }),
            (e.prototype.WriteXMLToFile = function (t, n) {
              var a = this,
                i = function () {
                  return a.m_DummyValueForQuestionHack ? "never returned" : "?";
                },
                r =
                  "<" +
                  i() +
                  'xml version="1.0" encoding="UTF-8" ' +
                  i() +
                  ">\n";
              (r += new XMLSerializer().serializeToString(t)),
                e.WriteFile(
                  new Blob([r], { type: "application/xml:charset=utf-8;" }),
                  n
                );
            }),
            (e.prototype.ReadLocalizationData_XML_SingleLanguage = function (
              e,
              t
            ) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, i, r, o, l, s, c, d;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = new u()),
                        (i = new DOMParser()),
                        [4, this.ReadFile(e)]
                      );
                    case 1:
                      for (
                        r = a.sent(),
                          o = i.parseFromString(
                            r.toString(),
                            "application/xml"
                          ),
                          l = 0;
                        l < o.documentElement.children.length;
                        ++l
                      )
                        (s = o.documentElement.children.item(l)),
                          (c = s.getAttribute("id").toLocaleLowerCase()),
                          (d = s.textContent),
                          n.SetLocalization(c, t, d);
                      return [2, n];
                  }
                });
              });
            }),
            (e.prototype.ReadLocalizationData_CSV_TokenLanguageList = function (
              e
            ) {
              var t = new u();
              return (
                e.data.forEach(function (e) {
                  var n = e.field,
                    a = Object(o.d)(e.language);
                  t.SetLocalization(n, a, e.value);
                }),
                t
              );
            }),
            (e.prototype.ReadLocalizationData_CSV_LanguageColumns = function (
              e
            ) {
              var t = new u();
              return (
                e.data.forEach(function (e) {
                  for (var n = e.field, a = 0; a < 30; ++a) {
                    var i = Object(o.c)(Object(o.a)(a));
                    t.SetLocalization(n, a, e[i]);
                  }
                }),
                t
              );
            }),
            (e.prototype.ReadLocalizationData_CSV_LanguageRows = function (e) {
              var t = new u();
              return (
                e.data.forEach(function (e) {
                  var n = Object(o.d)(e.language, 30);
                  if (30 !== n)
                    for (var a = 0, i = Object.entries(e); a < i.length; a++) {
                      var r = i[a],
                        l = r[0],
                        s = r[1];
                      "language" !== l &&
                        "string" == typeof s &&
                        t.SetLocalization(l, n, s);
                    }
                }),
                t
              );
            }),
            (e.prototype.GetExportLanguages = function () {
              return c.b.GetLanguageListForRealms([l.f.k_ESteamRealmGlobal]);
            }),
            (e.prototype.WriteLocalizationData_CSV_TokenAndLanguageColumns = function (
              e,
              t
            ) {
              var n = this,
                a = new Array();
              e.GetSortedTokenList().forEach(function (t) {
                for (var i = 0, r = n.GetExportLanguages(); i < r.length; i++) {
                  var l = r[i],
                    s = { field: t };
                  (s.language = Object(o.c)(Object(o.a)(l))),
                    (s.value = e.GetLocalization(t, l)),
                    a.push(s);
                }
              }),
                this.WriteCSVToFile(a, t);
            }),
            (e.prototype.WriteLocalizationData_CSV_LanguageColumns = function (
              e,
              t
            ) {
              var n = this,
                a = new Array();
              e.GetSortedTokenList().forEach(function (t) {
                for (
                  var i = { field: t }, r = 0, l = n.GetExportLanguages();
                  r < l.length;
                  r++
                ) {
                  var s = l[r];
                  i[Object(o.c)(Object(o.a)(s))] = e.GetLocalization(t, s);
                }
                a.push(i);
              }),
                this.WriteCSVToFile(a, t);
            }),
            (e.prototype.WriteLocalizationData_CSV_LanguageRows = function (
              e,
              t
            ) {
              for (
                var n = this,
                  a = new Array(),
                  i = 0,
                  r = this.GetExportLanguages();
                i < r.length;
                i++
              ) {
                var l = r[i];
                a.push({ language: Object(o.c)(Object(o.a)(l)) });
              }
              e.GetSortedTokenList().forEach(function (t) {
                for (var i = 0, r = n.GetExportLanguages(); i < r.length; i++) {
                  var o = r[i];
                  a[o][t] = e.GetLocalization(t, o);
                }
              }),
                this.WriteCSVToFile(a, t);
            }),
            (e.prototype.WriteLocalizationData_XML_SingleLanguage = function (
              e,
              t,
              n
            ) {
              var a = document.implementation.createDocument(
                null,
                "content",
                null
              );
              e.GetSortedTokenList().forEach(function (n) {
                var i = a.createElement("string");
                i.setAttribute("id", n),
                  i.appendChild(
                    a.createTextNode(e.GetLocalization(n, t) || "")
                  ),
                  a.documentElement.append(i);
              }),
                this.WriteXMLToFile(a, n);
            }),
            e
          );
        })();
    },
    Q47U: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return p;
        });
      var a = n("mrSG"),
        i = n("2vnA"),
        r = n("dZOt"),
        o = n("Kw0F"),
        l = n("r64O"),
        s = n("lkRc"),
        c = n("fcuX"),
        u = {
          capability: 1,
          appids: [],
          partnerids: [],
          pub_rights: 0,
          app_rights: 0,
          priority: !1,
        },
        d = (function (e) {
          function t(t) {
            var n = e.call(this, t.GetEmailSettings()) || this;
            return (
              (n.m_editModel = t),
              (n.m_sections = new Array()),
              n.m_setting.sections.forEach(function (e) {
                return n.m_sections.push(new p(e, t));
              }),
              s.b.IS_VALVE_GROUP &&
                (n.m_setting.internal_targeting
                  ? n.m_setting.internal_targeting.partnerids ||
                    (n.m_setting.internal_targeting.partnerids = [])
                  : (n.m_setting.internal_targeting = Object(a.a)({}, u))),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.BSameEditModel = function (e) {
              return e === this.m_editModel;
            }),
            (t.prototype.GetNumSections = function () {
              return this.m_sections.length;
            }),
            (t.prototype.GetSectionObj = function (e) {
              return this.m_sections[e];
            }),
            (t.prototype.GetSectionObjects = function () {
              return this.m_sections;
            }),
            (t.prototype.LockEmail = function () {
              this.m_setting.locked ||
                ((this.m_setting.locked = !0),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetSubjectTextLoc = function (e) {
              this.m_setting.subject_loc_token != e &&
                ((this.m_setting.subject_loc_token = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.EnsureTargetingExists = function () {
              if (!this.m_setting.targeting) {
                this.m_setting.targeting = Object(i.C)({});
              }
            }),
            (t.prototype.EnsureFilteringExists = function () {
              if (!this.m_setting.filtering) {
                this.m_setting.filtering = Object(i.C)({});
              }
            }),
            (t.prototype.SetFilterIRTopN = function (e) {
              this.EnsureFilteringExists(),
                this.m_setting.filtering.ir_topn !== e &&
                  ((this.m_setting.filtering.ir_topn = e),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetFilterWishlist = function (e) {
              this.EnsureFilteringExists(),
                this.m_setting.filtering.wishlist !== e &&
                  ((this.m_setting.filtering.wishlist = e),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetControlGroupPercent = function (e) {
              Object(l.a)(
                e >= 0 && e <= 99,
                "SetControlGroupPercent outside of bounds: " + e
              ),
                (!e || e <= 0) && (e = 0),
                e > 99 && (e = 99),
                this.EnsureFilteringExists(),
                this.m_setting.filtering.control_group_percent !== e &&
                  ((this.m_setting.filtering.control_group_percent = e),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetTargetingExistingPlayer = function (e) {
              this.EnsureTargetingExists(),
                this.m_setting.targeting.game_players !== e &&
                  ((this.m_setting.targeting.game_players = e),
                  e &&
                    (this.m_setting.targeting.game_owner_with_no_playtime = !1),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetTargetingGameWishlist = function (e) {
              this.EnsureTargetingExists(),
                this.m_setting.targeting.game_wishlister !== e &&
                  ((this.m_setting.targeting.game_wishlister = e),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetExcludeGameOwners = function (e) {
              this.EnsureTargetingExists(),
                this.m_setting.targeting.game_exclude_owners !== e &&
                  ((this.m_setting.targeting.game_exclude_owners = e),
                  e &&
                    (this.m_setting.targeting.game_owner_with_no_playtime = !1),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetOwnersWithNoPlaytime = function (e) {
              this.EnsureTargetingExists(),
                this.m_setting.targeting.game_owner_with_no_playtime !== e &&
                  ((this.m_setting.targeting.game_owner_with_no_playtime = e),
                  e &&
                    ((this.m_setting.targeting.game_exclude_owners = !1),
                    (this.m_setting.targeting.game_players = !1),
                    (this.m_setting.targeting.creator_home_player = void 0)),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetTargetingGameFollower = function (e) {
              this.EnsureTargetingExists(),
                this.m_setting.targeting.game_followers !== e &&
                  ((this.m_setting.targeting.game_followers = e),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetTargetingCreator = function (e, t) {
              this.EnsureTargetingExists(),
                (this.m_setting.targeting.creator_home = e ? [t] : void 0),
                this.m_setting.targeting.creator_home_player &&
                  this.m_setting.targeting.creator_home_player[0] != t &&
                  (this.m_setting.targeting.creator_home_player = void 0),
                this.m_editModel.SetDirty(c.c.jsondata_email);
            }),
            (t.prototype.SetTargetingCreatorPlayer = function (e, t) {
              this.EnsureTargetingExists(),
                (this.m_setting.targeting.creator_home_player = e
                  ? [t]
                  : void 0),
                this.m_setting.targeting.creator_home &&
                  this.m_setting.targeting.creator_home[0] != t &&
                  (this.m_setting.targeting.creator_home = void 0),
                e &&
                  (this.m_setting.targeting.game_owner_with_no_playtime = !1),
                this.m_editModel.SetDirty(c.c.jsondata_email);
            }),
            (t.prototype.SetForceFeatureID = function (e) {
              this.m_setting.force_feature_id != e &&
                ((this.m_setting.force_feature_id = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetLocalizedSubject = function (e, t) {
              return (
                (!this.m_setting.localized_subject ||
                  this.m_setting.localized_subject.length < 30) &&
                  (this.m_setting.localized_subject = Object(o.e)(
                    this.m_setting.localized_subject || [],
                    30,
                    null
                  )),
                this.m_setting.localized_subject[e] != t &&
                  ((this.m_setting.localized_subject[e] = t),
                  this.m_editModel.SetDirty(c.c.jsondata_email),
                  !0)
              );
            }),
            (t.prototype.RemoveSection = function (e) {
              this.m_sections &&
                e < this.m_sections.length &&
                (this.m_setting.sections.splice(e, 1),
                this.m_sections.splice(e, 1),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.AddSection = function (e) {
              this.m_setting.sections.push(Object(a.a)({}, e)),
                this.m_sections.push(
                  new p(
                    this.m_setting.sections[this.m_setting.sections.length - 1],
                    this.m_editModel
                  )
                ),
                this.m_editModel.SetDirty(c.c.jsondata_email);
            }),
            (t.prototype.SetInternalTargetPriority = function (e) {
              this.m_setting.internal_targeting.priority !== e &&
                ((this.m_setting.internal_targeting.priority = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetInternalTargetPartnerCapability = function (e) {
              this.m_setting.internal_targeting.capability !== e &&
                ((this.m_setting.internal_targeting.capability = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.UpdateInternalTargetPublisherRights = function (e, t) {
              ((this.m_setting.internal_targeting.pub_rights & e) === e) !==
                t &&
                (t
                  ? (this.m_setting.internal_targeting.pub_rights |= e)
                  : (this.m_setting.internal_targeting.pub_rights &= ~e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.UpdateInternalTargetAppRights = function (e, t) {
              ((this.m_setting.internal_targeting.app_rights & e) === e) !==
                t &&
                (t
                  ? (this.m_setting.internal_targeting.app_rights |= e)
                  : (this.m_setting.internal_targeting.app_rights &= ~e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetInternalAppIDs = function (e) {
              (this.m_setting.internal_targeting.appids = e),
                this.m_editModel.SetDirty(c.c.jsondata_email);
            }),
            (t.prototype.SetInternalPublisherIDs = function (e) {
              (this.m_setting.internal_targeting.partnerids = e),
                this.m_editModel.SetDirty(c.c.jsondata_email);
            }),
            Object(a.c)([i.C], t.prototype, "m_sections", void 0),
            Object(a.c)([i.k], t.prototype, "SetFilterIRTopN", null),
            Object(a.c)([i.k], t.prototype, "SetFilterWishlist", null),
            Object(a.c)([i.k], t.prototype, "SetControlGroupPercent", null),
            Object(a.c)([i.k], t.prototype, "SetTargetingExistingPlayer", null),
            Object(a.c)([i.k], t.prototype, "SetTargetingGameWishlist", null),
            Object(a.c)([i.k], t.prototype, "SetExcludeGameOwners", null),
            Object(a.c)([i.k], t.prototype, "SetOwnersWithNoPlaytime", null),
            Object(a.c)([i.k], t.prototype, "SetTargetingGameFollower", null),
            Object(a.c)([i.k], t.prototype, "SetTargetingCreator", null),
            Object(a.c)([i.k], t.prototype, "SetTargetingCreatorPlayer", null),
            Object(a.c)([i.k], t.prototype, "SetForceFeatureID", null),
            Object(a.c)([i.k], t.prototype, "SetLocalizedSubject", null),
            Object(a.c)([i.k], t.prototype, "RemoveSection", null),
            Object(a.c)([i.k], t.prototype, "AddSection", null),
            Object(a.c)([i.k], t.prototype, "SetInternalTargetPriority", null),
            Object(a.c)(
              [i.k],
              t.prototype,
              "SetInternalTargetPartnerCapability",
              null
            ),
            Object(a.c)(
              [i.k],
              t.prototype,
              "UpdateInternalTargetPublisherRights",
              null
            ),
            Object(a.c)(
              [i.k],
              t.prototype,
              "UpdateInternalTargetAppRights",
              null
            ),
            Object(a.c)([i.k], t.prototype, "SetInternalAppIDs", null),
            Object(a.c)([i.k], t.prototype, "SetInternalPublisherIDs", null),
            t
          );
        })(r.b),
        p = (function (e) {
          function t(t, n) {
            var a = e.call(this, t) || this;
            return (a.m_editModel = n), a;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.SetHeadline = function (e, t) {
              return (
                (this.m_section.localized_headline.length < t ||
                  this.m_section.localized_headline[t] !== e) &&
                ((this.m_section.localized_headline[t] = e),
                this.m_editModel.SetDirty(c.c.jsondata_email),
                !0)
              );
            }),
            (t.prototype.SetBody = function (e, t) {
              return (
                (this.m_section.localized_body.length < t ||
                  this.m_section.localized_body[t] !== e) &&
                ((this.m_section.localized_body[t] = e),
                this.m_editModel.SetDirty(c.c.jsondata_email),
                !0)
              );
            }),
            (t.prototype.SetVideoLink = function (e) {
              this.m_section.video_link !== e &&
                ((this.m_section.video_link = e),
                (this.m_section.video_image = void 0),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetVideoHashAndExt = function (e) {
              this.m_section.video_image !== e &&
                ((this.m_section.video_image = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetImage = function (e, t) {
              (this.m_section.localized_image.length < t ||
                this.m_section.localized_image[t] !== e) &&
                ((this.m_section.localized_image[t] = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetButtonTextLock = function (e) {
              this.m_section.button_loc_token !== e &&
                ((this.m_section.button_loc_token = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.SetButtonDestination = function (e) {
              this.m_section.button_destination !== e &&
                ((this.m_section.button_destination = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.IsValidStoreURL = function (e) {
              return e && e.startsWith("https://store.steampowered.com/");
            }),
            (t.prototype.SetButtonDestinationStoreURL = function (e) {
              if (t.IsValidStoreURL(e)) {
                var n = e.substr("https://store.steampowered.com/".length);
                n != this.m_section.button_store_path &&
                  ((this.m_section.button_store_path = n),
                  this.m_editModel.SetDirty(c.c.jsondata_email));
              }
            }),
            (t.prototype.SetButtonAppOverride = function (e) {
              this.m_section.button_appid_override !== e &&
                ((this.m_section.button_appid_override = e),
                this.m_editModel.SetDirty(c.c.jsondata_email));
            }),
            (t.prototype.RemoveSubSection = function (e) {
              switch (e) {
                case "headline":
                  this.BHasHeadline() &&
                    ((this.m_section.localized_headline = void 0),
                    this.m_editModel.SetDirty(c.c.jsondata_email));
                  break;
                case "body":
                  this.BHasBody() &&
                    ((this.m_section.localized_body = void 0),
                    this.m_editModel.SetDirty(c.c.jsondata_email));
                  break;
                case "img":
                  this.BHasImage() &&
                    ((this.m_section.localized_image = void 0),
                    this.m_editModel.SetDirty(c.c.jsondata_email));
                  break;
                case "action":
                  this.BHasCallToAction() &&
                    ((this.m_section.button_loc_token = void 0),
                    (this.m_section.button_appid_override = void 0),
                    (this.m_section.button_destination = void 0),
                    this.m_editModel.SetDirty(c.c.jsondata_email));
                  break;
                case "youtube":
                  this.BHasVideo() &&
                    ((this.m_section.video_link = void 0),
                    (this.m_section.video_image = void 0),
                    this.m_editModel.SetDirty(c.c.jsondata_email));
                  break;
                default:
                  console.error(
                    "CEmailSectionEditModel: Unexpected Email Template SubType to Remove: " +
                      e
                  );
              }
            }),
            (t.prototype.BHasSomeSubSection = function () {
              return (
                this.BHasHeadline() ||
                this.BHasBody() ||
                this.BHasImage() ||
                this.BHasCallToAction() ||
                this.BHasVideo()
              );
            }),
            Object(a.c)([i.k], t.prototype, "SetHeadline", null),
            Object(a.c)([i.k], t.prototype, "SetBody", null),
            Object(a.c)([i.k], t.prototype, "SetVideoLink", null),
            Object(a.c)([i.k], t.prototype, "SetVideoHashAndExt", null),
            Object(a.c)([i.k], t.prototype, "SetImage", null),
            Object(a.c)([i.k], t.prototype, "SetButtonTextLock", null),
            Object(a.c)([i.k], t.prototype, "SetButtonDestination", null),
            Object(a.c)(
              [i.k.bound],
              t.prototype,
              "SetButtonDestinationStoreURL",
              null
            ),
            Object(a.c)([i.k], t.prototype, "SetButtonAppOverride", null),
            Object(a.c)([i.k], t.prototype, "RemoveSubSection", null),
            t
          );
        })(r.a);
    },
    R5ed: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return q;
        }),
        n.d(t, "c", function () {
          return re;
        });
      var a,
        i = n("mrSG"),
        r = n("t0uJ"),
        o = n("2vnA"),
        l = n("TyAF"),
        s = n("q1tI"),
        c = n("dsQf"),
        u = n.n(c),
        d = n("mgoM"),
        p = n("kyHq"),
        m = n("Nsq5"),
        _ = n("qD+2"),
        g = n("kLLr"),
        h = n("ir+G"),
        f = n("U+Q5"),
        b = n("I/R6"),
        v = n("UWWC"),
        S = n("Mgs7"),
        E = n("qP7j"),
        y = n("yJqL"),
        O = n("TOXn"),
        T = n("SdTr"),
        C = n("vBFs"),
        j = n("fpVW"),
        I = n.n(j),
        D = n("Txw1"),
        w = n.n(D),
        M = n("exH9"),
        k = n("opsS"),
        G = n("UxvL"),
        L = n("lkRc"),
        A = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnClick = function (e) {
              e.preventDefault();
              var t = this.props,
                n = t.fnHandleOpenEvent,
                a = t.event;
              n && n(a);
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.event,
                n = e.spotlightURLOverride,
                a = e.headerNavElement,
                i = e.fnImageFailureCallback,
                r = e.fnFilterImageURLsForKnownFailures,
                o = e.langOverride || Object(d.d)(L.c.LANGUAGE),
                l =
                  void 0 !== n
                    ? [n]
                    : t.GetImageForSizeAsArrayWithFallback(
                        "spotlight",
                        o,
                        f.c.spotlight_main
                      );
              r && (l = r(l));
              var c = t.GetSummaryWithFallback(o),
                u = t.GetNameWithFallback(0),
                p = t.GetCategoryAsString();
              c = c.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
              var m = s.createElement(
                "span",
                { className: w.a.EventType },
                p,
                " - "
              );
              return s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  "div",
                  { className: w.a.MajorEvent_Ctn },
                  s.createElement(
                    "div",
                    { className: w.a.MajorEventHeader },
                    s.createElement("div", { className: w.a.EventType }, m),
                    s.createElement(
                      "div",
                      { className: w.a.PartnerEventLargeImage_Title },
                      u
                    ),
                    a
                  ),
                  s.createElement(
                    "div",
                    {
                      className: Object(M.a)(
                        w.a.AppDetailsSpotlightContainer,
                        w.a.MajorEventContainer
                      ),
                      onClick: this.OnClick,
                    },
                    s.createElement(
                      "div",
                      { className: w.a.MajorEventBackground },
                      s.createElement(G.a, {
                        className: w.a.MajorEventImageBackgroundBlur,
                        rgSources: l,
                        onIncrementalError: function (e, t, n) {
                          return i && i(t);
                        },
                      })
                    ),
                    s.createElement(
                      "div",
                      { className: w.a.MajorEventImageContainer },
                      s.createElement(G.a, {
                        className: w.a.MajorEventImage,
                        rgSources: l,
                        onIncrementalError: function (e, t, n) {
                          return i && i(t);
                        },
                      }),
                      s.createElement("div", {
                        className: w.a.MajorEventImageTemplate,
                      }),
                      s.createElement(
                        "div",
                        { className: w.a.MajoreEventImageContentContainer },
                        t.BShowLibrarySpotlightText() &&
                          s.createElement(
                            "div",
                            { className: w.a.MajorEventContent },
                            s.createElement(G.a, {
                              className: w.a.MajorEventSpotlightBackground,
                              rgSources: l,
                              onIncrementalError: function (e, t, n) {
                                return i && i(t);
                              },
                            }),
                            s.createElement(
                              "div",
                              { className: w.a.MajorEventTextCtn },
                              s.createElement(
                                "div",
                                { className: w.a.MajorEventTitle },
                                t.GetNameWithFallback(o)
                              ),
                              s.createElement(
                                "div",
                                { className: w.a.MajorEventSummary },
                                c
                              )
                            )
                          )
                      )
                    ),
                    s.createElement("div", { className: w.a.BottomShadow })
                  )
                )
              );
            }),
            Object(i.c)([k.a], t.prototype, "OnClick", null),
            (t = Object(i.c)([l.a], t))
          );
        })(s.Component),
        B = n("Jqb/"),
        F = n("ka0M"),
        N = n("6Y59"),
        R = n("X3Ds"),
        x = n("TLQK"),
        P = n("6h0J"),
        U = n.n(P),
        H = n("75vw"),
        V = n("bVxH"),
        z = n("6Oks"),
        W = n.n(z);
      !(function (e) {
        (e[(e.k_None = 0)] = "k_None"),
          (e[(e.k_Suggested = 1)] = "k_Suggested"),
          (e[(e.k_Required = 2)] = "k_Required");
      })(a || (a = {}));
      var q = Object(l.a)(function (e) {
          var t = r.c.GetEditModel(),
            n = e.artworkType,
            i = e.headerHint,
            o = null;
          i === a.k_Required
            ? (o = s.createElement(
                "span",
                { style: { color: "#C6512B" } },
                Object(x.f)("#EventEditor_Required")
              ))
            : i === a.k_Suggested &&
              (o = s.createElement(
                "span",
                { style: { color: "#D7BC86" } },
                Object(x.f)("#EventEditor_Suggested")
              ));
          var l = null;
          if ("capsule" === n)
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "p",
                null,
                s.createElement(
                  "strong",
                  null,
                  Object(x.f)("#selectimage_tip_design_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_capsule_1")
              ),
              s.createElement(
                "p",
                null,
                s.createElement(
                  "strong",
                  null,
                  Object(x.f)("#selectimage_tip_usage_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_capsule_2")
              )
            );
          else if ("background" === n)
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "p",
                null,
                s.createElement(
                  "strong",
                  null,
                  Object(x.f)("#selectimage_tip_design_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_background_1")
              )
            );
          else if ("spotlight" === n)
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "p",
                null,
                s.createElement(
                  "strong",
                  null,
                  Object(x.f)("#selectimage_tip_usage_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_spotlight_1")
              ),
              s.createElement(
                "p",
                null,
                s.createElement(
                  "strong",
                  null,
                  Object(x.f)("#selectimage_tip_design_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_spotlight_2")
              )
            );
          else if ("broadcast_left" === n || "broadcast_right" === n)
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "p",
                null,
                Object(x.f)("#selectimage_tip_broadcast_1")
              )
            );
          else if ("sale_header" === n)
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                { className: I.a.EventElementRequired },
                Object(x.f)("#selectimage_tip_required_title")
              ),
              s.createElement(
                "p",
                null,
                s.createElement(
                  "b",
                  null,
                  Object(x.f)("#selectimage_tip_usage_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_sale_header_1")
              ),
              s.createElement(
                "p",
                null,
                s.createElement(
                  "b",
                  null,
                  Object(x.f)("#selectimage_tip_design_title")
                ),
                ": ",
                Object(x.f)("#selectimage_tip_sale_header_2")
              ),
              s.createElement(
                "p",
                null,
                s.createElement(
                  "b",
                  null,
                  Object(x.f)("#selectimage_tip_template_title")
                ),
                ": ",
                s.createElement(
                  "a",
                  {
                    href:
                      "https://cdn.cloudflare.steamstatic.com/appmgmt/storeadmin/SalePageTemplate_min.zip",
                  },
                  Object(x.f)("#selectimage_tip_sale_header_3")
                )
              ),
              s.createElement("br", null)
            );
          else if ("hero" === n) {
            var c = h.a.GetStoreCapsuleInfo(t.GetAppID());
            l = s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "p",
                null,
                Object(x.f)("#selectimage_tip_hero_1")
              ),
              !c.GetAppStoreData().library_asset_setup_complete &&
                s.createElement(
                  "p",
                  { className: E.ErrorStylesBackground },
                  Object(x.f)("#EventEdtior_ArtworkType_hero_warning")
                )
            );
          } else
            "localized_image_group" === n ||
            "link_capsule" === n ||
            "sale_section_title" === n ||
            "schedule_track_art" === n
              ? (l = s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "p",
                    null,
                    Object(x.f)("#ImagePickerLoc_Desc")
                  ),
                  s.createElement(
                    "p",
                    null,
                    Object(x.n)(
                      "#ImagePickerLoc_Files",
                      s.createElement(
                        "a",
                        {
                          href:
                            "https://partner.steamgames.com/doc/store/localization#supported_languages",
                          target: L.c.IN_CLIENT ? void 0 : "_blank",
                        },
                        Object(x.f)("#ImagePickerLoc_URL")
                      )
                    )
                  )
                ))
              : "product_banner" === n
              ? (l = s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "div",
                    { className: I.a.EventElementOptional },
                    Object(x.f)("#selectimage_tip_optional_title")
                  ),
                  s.createElement(
                    "p",
                    null,
                    s.createElement(
                      "b",
                      null,
                      Object(x.f)("#selectimage_tip_usage_title")
                    ),
                    ": ",
                    Object(x.f)("#selectimage_tip_sale_product_banner")
                  )
                ))
              : "product_mobile_banner" === n ||
                "product_banner_override" === n ||
                "product_mobile_banner_override" === n
              ? (l = s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "div",
                    { className: I.a.EventElementOptional },
                    Object(x.f)("#selectimage_tip_optional_title")
                  ),
                  s.createElement(
                    "p",
                    null,
                    s.createElement(
                      "b",
                      null,
                      Object(x.f)("#selectimage_tip_usage_title")
                    ),
                    ": ",
                    Object(x.f)("#selectimage_tip_sale_product_banner"),
                    "product_mobile_banner" === n &&
                      s.createElement(
                        "span",
                        null,
                        "  ",
                        Object(x.f)(
                          "#selectimage_tip_sale_product_banner_mobile"
                        )
                      )
                  )
                ))
              : "tab_bar_background" === n &&
                (l = s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "p",
                    null,
                    s.createElement(
                      "strong",
                      null,
                      Object(x.f)("#selectimage_tip_design_title")
                    ),
                    ":",
                    Object(x.f)("#Sale_Tabs_Background_Design")
                  ),
                  s.createElement(
                    "p",
                    null,
                    s.createElement(
                      "strong",
                      null,
                      Object(x.f)("#selectimage_tip_usage_title")
                    ),
                    ":",
                    Object(x.f)("#Sale_Tabs_Background_Usage")
                  )
                ));
          var u = m.a[e.artworkType].width,
            d = m.a[e.artworkType].height;
          return s.createElement(
            "div",
            { id: e.id, className: W.a.ArtworkSelectorContainer },
            s.createElement(
              "div",
              { className: W.a.Title, onDoubleClick: e.fnToggleMinimize },
              e.title,
              s.createElement("span", null, " "),
              o,
              e.fnToggleMinimize &&
                s.createElement(
                  S.d,
                  {
                    "data-tooltip-text": Object(x.f)(
                      e.bIsMinimized
                        ? "#Sale_Section_Maximize_Tooltip"
                        : "#Sale_Section_Minimize_Tooltip"
                    ),
                    onClick: e.fnToggleMinimize,
                  },
                  e.bIsMinimized
                    ? s.createElement(N.G, null)
                    : s.createElement(N.J, null)
                )
            ),
            !e.bIsMinimized &&
              s.createElement(
                "div",
                { className: Object(M.a)(W.a.SelectImageBlock, W.a.Tips) },
                l,
                Boolean(u && d) &&
                  s.createElement(
                    "p",
                    null,
                    s.createElement(
                      "b",
                      null,
                      Object(x.f)("#selectimage_tip_dimensions_title")
                    ),
                    ": ",
                    Object(x.n)("#selectimage_tip1", u, d)
                  ),
                Boolean(e.strWarning) &&
                  s.createElement(
                    "div",
                    null,
                    s.createElement(
                      "p",
                      { className: E.WarningStylesWithIcon },
                      e.strWarning
                    )
                  ),
                e.elEventArtworkExample,
                " ",
                s.createElement("br", null),
                e.elAdditionalControls,
                Boolean(e.fnRemoveAllArtwork) &&
                  s.createElement(
                    S.d,
                    {
                      onClick: function (t) {
                        Object(F.d)(
                          s.createElement(Y, {
                            fnRemoveAllArtwork: e.fnRemoveAllArtwork,
                          }),
                          Object(R.m)(t)
                        );
                      },
                    },
                    Object(x.f)("#Sale_RemoveAll")
                  )
              ),
            !e.bIsMinimized &&
              s.createElement(J, {
                clanSteamID: e.clanSteamID,
                title: e.title,
                imageWidth: u,
                imageHeight: d,
                artworkType: e.artworkType,
              })
          );
        }),
        Y = function (e) {
          var t = e.fnRemoveAllArtwork,
            n = e.closeModal;
          return s.createElement(B.d, {
            strTitle: Object(x.f)("#Sale_RemoveAll"),
            strDescription: Object(x.f)("#ImageUpload_DeleteAll_Confirm"),
            onOK: function () {
              t(), n();
            },
            onCancel: n,
          });
        },
        J = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                langOverride: b.a.Get().GetCurEditLanguage(),
                lastSelection: new Array(),
              }),
              t
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnUpdateAndMoveClanImageLang = function (e, t, n) {
              var a = this,
                i = r.c.GetEditModel();
              Object(o.G)(function () {
                var r = a.props.artworkType;
                i.GetImageHash(r, t) == e.image_hash &&
                  i.SetImageURL(r, null, t),
                  i.SetImageURL(r, e, n),
                  a.InsertOrUpdateClanImageAndLangMapping(e, n, !1);
              });
            }),
            (t.prototype.OnRemoveImage = function (e) {
              r.c.GetEditModel().SetImageURL(this.props.artworkType, null, e);
            }),
            (t.prototype.InsertOrUpdateClanImageAndLangMapping = function (
              e,
              t,
              n
            ) {
              var a,
                i = this.state.lastSelection;
              i.find(function (t) {
                return t.clanImage.imageid == e.imageid;
              })
                ? (a = i.map(function (n) {
                    return n.clanImage.imageid == e.imageid
                      ? { clanImage: e, lang: t }
                      : n;
                  }))
                : n && (a = i.concat({ clanImage: e, lang: t })),
                this.setState({ lastSelection: a });
            }),
            (t.prototype.OnLanguageChange = function (e) {
              e != this.state.langOverride &&
                this.setState({ langOverride: e });
            }),
            (t.prototype.OnSpotlightChange = function (e) {
              var t = r.c.GetEditModel();
              e && !t.BHasImage("spotlight", 0)
                ? (console.error("EventArtworkSelector: OnSpotlightChange"),
                  Object(F.d)(
                    s.createElement(B.f, {
                      strTitle: Object(x.f)("#Error_FailureNotice"),
                      strDescription: Object(x.f)(
                        "#EventEditor_Options_Spotlight_Error",
                        Object(x.f)("#EventEditor_Artwork")
                      ),
                    }),
                    window
                  ))
                : t.SetLibrarySpotlight(e);
            }),
            (t.prototype.OnSpotlightTextChange = function (e) {
              r.c.GetEditModel().SetLibrarySpotlightText(e);
            }),
            (t.prototype.render = function () {
              var e = r.c.GetEditModel(),
                t = e.BHasImage("spotlight", 0),
                n = "localized_image_group" === this.props.artworkType;
              return "hero" === this.props.artworkType
                ? s.createElement(
                    "div",
                    { style: { padding: "16px" } },
                    s.createElement(
                      S.d,
                      {
                        style: { textTransform: "uppercase", width: "200px" },
                        onClick: function () {
                          return window.open(
                            L.c.PARTNER_BASE_URL +
                              "admin/game/edit/" +
                              e.GetStoreItemID() +
                              "?activetab=tab_graphicalassets"
                          );
                        },
                      },
                      Object(x.f)("#ImageUpload_EditHeroImage")
                    )
                  )
                : s.createElement(
                    "div",
                    null,
                    s.createElement(Q, {
                      list: this.state.lastSelection,
                      fnOnArtworkLanguageChange: this
                        .OnUpdateAndMoveClanImageLang,
                    }),
                    s.createElement(
                      "div",
                      null,
                      "spotlight" === this.props.artworkType &&
                        s.createElement(
                          "div",
                          { className: W.a.SpotlightOptions },
                          s.createElement(S.q, {
                            onChange: this.OnSpotlightChange,
                            label: Object(x.f)(
                              "#EventEditor_Options_Spotlight_Label"
                            ),
                            checked: e.GetEventModel().BShowLibrarySpotlight(),
                            disabled: !t,
                            description: Object(x.f)(
                              "#EventEditor_Options_Spotlight_Desc",
                              Object(x.f)("#EventEditor_Artwork")
                            ),
                          })
                        ),
                      "spotlight" === this.props.artworkType &&
                        s.createElement(
                          "div",
                          { className: W.a.SpotlightOptions },
                          s.createElement(S.q, {
                            onChange: this.OnSpotlightTextChange,
                            label: Object(x.f)(
                              "#EventEditor_Options_SpotlightText_Label"
                            ),
                            checked: e
                              .GetEventModel()
                              .BShowLibrarySpotlightText(),
                            disabled: !t,
                            description: Object(x.f)(
                              "#EventEditor_Options_SpotlightText_Desc",
                              Object(x.f)("#EventEditor_Artwork")
                            ),
                          })
                        ),
                      s.createElement(
                        "div",
                        {
                          className: Object(M.a)(
                            W.a.SelectImageBlock,
                            W.a.MainPreviewBlock
                          ),
                        },
                        s.createElement(ie, {
                          clanSteamID: this.props.clanSteamID,
                          fnOnLanguagePreviewChange: this.OnLanguageChange,
                          langOverride: this.state.langOverride,
                          fnOnArtworkLangChange: n
                            ? null
                            : this.OnUpdateAndMoveClanImageLang,
                          artworkType: this.props.artworkType,
                          fnOnRemoveImage: n ? null : this.OnRemoveImage,
                        })
                      )
                    )
                  );
            }),
            Object(i.c)(
              [k.a],
              t.prototype,
              "OnUpdateAndMoveClanImageLang",
              null
            ),
            Object(i.c)([k.a], t.prototype, "OnRemoveImage", null),
            Object(i.c)(
              [k.a],
              t.prototype,
              "InsertOrUpdateClanImageAndLangMapping",
              null
            ),
            Object(i.c)([k.a], t.prototype, "OnLanguageChange", null),
            Object(i.c)([k.a], t.prototype, "OnSpotlightChange", null),
            Object(i.c)([k.a], t.prototype, "OnSpotlightTextChange", null),
            (t = Object(i.c)([l.a], t))
          );
        })(s.Component),
        Q = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.ShowLangChangeDialog = function (e, t) {
              var n = this.props.fnOnArtworkLanguageChange;
              Object(F.d)(
                s.createElement(K, {
                  clanImage: e,
                  lang: t,
                  fnOnArtworkLangChange: n,
                }),
                window
              );
            }),
            (t.prototype.GenerateImageMappings = function () {
              var e = this,
                t = new Array();
              return (
                this.props.list.forEach(function (n) {
                  var a = n.clanImage,
                    i = n.lang,
                    r = Object(x.f)("#Language_" + Object(d.a)(i));
                  t.push(
                    s.createElement(
                      "div",
                      {
                        key: "img_lang_" + n.clanImage.imageid + "_" + i,
                        className: I.a.FlexRowContainer,
                      },
                      s.createElement(
                        "span",
                        null,
                        Object(x.f)(
                          "#ImageUpload_Success_Mapping",
                          a.file_name,
                          r
                        )
                      ),
                      s.createElement(
                        "a",
                        {
                          onClick: function () {
                            return e.ShowLangChangeDialog(a, i);
                          },
                        },
                        Object(x.f)("#ImageUpload_Success_Mapping_Change")
                      )
                    )
                  );
                }),
                t
              );
            }),
            (t.prototype.render = function () {
              var e = this.props.list;
              if (!e || 0 == e.length) return s.createElement("div", null);
              var t = this.GenerateImageMappings();
              return s.createElement("div", { className: H.UploadSuccess }, t);
            }),
            Object(i.c)([k.a], t.prototype, "ShowLangChangeDialog", null),
            (t = Object(i.c)([l.a], t))
          );
        })(s.Component),
        K = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { selectedLang: t.props.lang }), t;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnOK = function () {
              this.props.fnOnArtworkLangChange(
                this.props.clanImage,
                this.props.lang,
                this.state.selectedLang
              );
            }),
            (t.prototype.OnLanguageChange = function (e) {
              this.state.selectedLang != e &&
                this.setState({ selectedLang: e });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.clanImage,
                n = e.closeModal,
                a = (e.lang, g.a.InitFromClanID(t.clanAccountID)),
                i = f.a.GenerateArtworkURLFromHashAndExtensions(
                  a,
                  f.a.GetHashAndExt(t)
                ),
                o = r.c.GetEditModel();
              return s.createElement(
                B.d,
                {
                  strTitle: Object(x.f)(
                    "#selectimage_change_artwork_lang_title"
                  ),
                  strDescription: Object(x.f)(
                    "#selectimage_change_artworl_lang_desc"
                  ),
                  onOK: this.OnOK,
                  onCancel: n,
                  closeModal: n,
                },
                s.createElement(
                  "div",
                  {
                    className: Object(M.a)(
                      I.a.FlexColumnContainer,
                      W.a.ReassignCtn
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: W.a.ImagePreviewContainer },
                    s.createElement("img", {
                      className: W.a.ArtworkPreview,
                      src: i,
                    })
                  ),
                  s.createElement(C.a, {
                    selectedLang: this.state.selectedLang,
                    fnLangHasData: o.BHasTitleImage,
                    fnOnLanguageChanged: this.OnLanguageChange,
                    realms: o.GetIncludedRealmList(),
                  })
                )
              );
            }),
            Object(i.c)([k.a], t.prototype, "OnOK", null),
            Object(i.c)([k.a], t.prototype, "OnLanguageChange", null),
            t
          );
        })(s.Component),
        Z = Object(l.a)(function (e) {
          var t = e.imgURL,
            n = r.c.GetEditModel(),
            a = b.a.Get().GetCurEditLanguage();
          return s.createElement(
            "div",
            { style: { display: "flex", width: "304px" } },
            s.createElement(T.b, {
              event: n.GetEventModel(),
              imageURLOverride: t,
              langOverride: a,
            })
          );
        }),
        X = function (e) {
          var t = e.lang,
            n = r.c.GetEditModel().GetEventModel(),
            a = n.GetNameWithFallback(t),
            i = n.GetDescriptionWithFallback(t),
            o = n.GetSubTitleWithLanguageFallback(t),
            l = i
              ? s.createElement(O.a, {
                  text: i || "",
                  partnerEventStore: r.c,
                  showErrorInfo: !1,
                  event: n,
                  languageOverride: b.a.Get().GetCurEditLanguage(),
                })
              : Object(x.f)("#selectimage_display_event_body");
          return s.createElement(
            "div",
            { className: W.a.MultipleExampleContainer },
            s.createElement(
              "div",
              { className: W.a.ExampleSectionTitle },
              Object(x.f)("#selectimage_preview_title_1")
            ),
            s.createElement(
              "div",
              {
                className: Object(M.a)(
                  W.a.DetailPageExample,
                  "DetailPageExample"
                ),
              },
              s.createElement(
                "div",
                { className: W.a.detailExample },
                s.createElement(
                  "div",
                  { className: W.a.MainImageCtn },
                  s.createElement("img", { src: e.imgURL })
                ),
                s.createElement(
                  "div",
                  { className: W.a.ExampleBodyPosition },
                  s.createElement(
                    "div",
                    { className: W.a.ExampleContentCtn },
                    s.createElement(
                      "div",
                      { className: W.a.TextTitle },
                      a || Object(x.f)("#selectimage_display_event_title")
                    ),
                    s.createElement(
                      "div",
                      { className: W.a.TextSubTitle },
                      o || Object(x.f)("#selectimage_display_event_subtitle")
                    ),
                    s.createElement("div", { className: W.a.TextBody }, l)
                  )
                )
              )
            ),
            12 != n.type &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement("div", { className: W.a.ExampleSpacer }),
                s.createElement(
                  "div",
                  { className: W.a.ExampleSectionTitle },
                  Object(x.f)("#selectimage_preview_title_2")
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(M.a)(
                      W.a.DetailPageExample,
                      "DetailPageExample"
                    ),
                  },
                  s.createElement(
                    "div",
                    { className: W.a.detailExample2 },
                    s.createElement(y.d, {
                      key: n.AnnouncementGID,
                      event: n,
                      emoticonStore: v.b,
                      partnerEventStore: r.c,
                      appStore: _.a,
                      headerClassnames: "editor",
                      langOverride: t,
                      bDisableBroadcastPlayer: !0,
                    })
                  )
                )
              )
          );
        },
        $ = function (e) {
          var t = h.a.GetStoreCapsuleInfo(e.event.appid).GetAppStoreData(),
            n = t.title,
            a = t.icon_url;
          return s.createElement(
            "div",
            { className: W.a.SpotlightExample },
            s.createElement(A, {
              event: e.event,
              strDisplayName: n,
              gameIconUrl: a,
              spotlightURLOverride: e.imgURL,
              langOverride: e.lang,
            })
          );
        },
        ee = function (e) {
          var t = [
            s.createElement("img", { key: "img", src: e.imgURL }),
            s.createElement("div", {
              key: "video",
              className: W.a.BroadcastPreview,
            }),
          ];
          return (
            "right" === e.side && t.reverse(),
            s.createElement(
              "div",
              { className: W.a.BroadcastPreviewContainer },
              t
            )
          );
        },
        te = function (e) {
          return s.createElement(
            "div",
            { className: W.a.SaleHeaderPreviewContainer },
            s.createElement("img", { style: { width: "100%" }, src: e.imgURL })
          );
        },
        ne = function (e) {
          return s.createElement(
            "div",
            { className: W.a.SaleHeaderPreviewContainer },
            s.createElement("img", { style: { width: "100%" }, src: e.imgURL })
          );
        },
        ae = function (e) {
          return s.createElement(
            "div",
            { className: W.a.SaleHeaderPreviewContainer },
            s.createElement("img", { style: { width: "100%" }, src: e.imgURL })
          );
        },
        ie = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { langOverride: b.a.Get().GetCurEditLanguage() }), t
            );
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.langOverride,
                n = e.artworkType,
                a = e.fnOnLanguagePreviewChange,
                i = e.clanSteamID,
                o = r.c.GetEditModel(),
                l = o.GetImageURL(
                  this.props.artworkType,
                  this.props.langOverride
                );
              return o.BHasSomeImage(n)
                ? s.createElement(
                    "div",
                    { className: W.a.ImagePreviewContainer },
                    "capsule" === n && s.createElement(Z, { imgURL: l }),
                    "background" === n &&
                      s.createElement(X, {
                        imgURL: l,
                        lang: b.a.Get().GetCurEditLanguage(),
                      }),
                    "spotlight" === n &&
                      s.createElement($, {
                        imgURL: l,
                        event: o.GetEventModel(),
                        lang: o.GetCurEditLanguage(),
                      }),
                    ("broadcast_left" === n || "broadcast_right" === n) &&
                      s.createElement(ee, {
                        imgURL: l,
                        side: "broadcast_right" === n ? "right" : "left",
                      }),
                    "sale_header" === n && s.createElement(te, { imgURL: l }),
                    "sale_overlay" === n && s.createElement(ne, { imgURL: l }),
                    Boolean(
                      "localized_image_group" === n ||
                        "link_capsule" === n ||
                        "product_mobile_banner_override" === n ||
                        "product_banner_override" === n ||
                        "sale_section_title" === n ||
                        "schedule_track_art" === n
                    ) &&
                      s.createElement("img", {
                        className: V.previewimg,
                        src: f.d.GetLocalizedImageGroupForEditAsURL(i, t),
                      }),
                    "product_banner" === n &&
                      s.createElement(ae, { imgURL: l }),
                    "product_mobile_banner" === n &&
                      s.createElement(ae, { imgURL: l }),
                    s.createElement(re, {
                      langOverride: t,
                      clanSteamID: i,
                      fnOnLanguagePreviewChange: a,
                      fnOnRemoveImage: this.props.fnOnRemoveImage,
                      fnOnArtworkLangChange: this.props.fnOnArtworkLangChange,
                      fnGetImageHash: function (e) {
                        return o.GetImageHash(n, e);
                      },
                    })
                  )
                : s.createElement(
                    "div",
                    { className: W.a.ImagePreviewContainer },
                    "capsule" === n &&
                      s.createElement(Z, {
                        imgURL:
                          L.c.IMG_URL + "events/defaults/default_img_cover.jpg",
                      }),
                    "background" === n &&
                      s.createElement(X, {
                        imgURL:
                          L.c.IMG_URL +
                          "events/defaults/default_img_header.jpg",
                        lang: o.GetCurEditLanguage(),
                      }),
                    "spotlight" === n &&
                      s.createElement($, {
                        lang: b.a.Get().GetCurEditLanguage(),
                        imgURL:
                          L.c.IMG_URL +
                          "events/defaults/default_img_spotlight.jpg",
                        event: o.GetEventModel(),
                      }),
                    s.createElement(
                      "div",
                      null,
                      Object(x.f)("#EventEditor_ArtworkMissing")
                    )
                  );
            }),
            (t = Object(i.c)([l.a], t))
          );
        })(s.Component),
        re = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i.d)(t, e),
            (t.prototype.OnCloseDeleteDialog = function () {}),
            (t.prototype.OnChangeImageLanguage = function (e) {
              var t = Object(d.d)(e.currentTarget.id);
              this.props.fnOnLanguagePreviewChange(t);
            }),
            (t.prototype.OnChangeLanguage = function (e) {
              var t = this.props,
                n = t.fnGetImageHash,
                a = t.clanSteamID,
                i = +e.currentTarget.dataset.lang,
                r = n(i);
              if (r) {
                var o = f.d.GetClanImageByImageHash(a, r);
                o &&
                  Object(F.d)(
                    s.createElement(K, {
                      clanImage: o,
                      lang: i,
                      fnOnArtworkLangChange: this.props.fnOnArtworkLangChange,
                    }),
                    window
                  );
              }
            }),
            (t.prototype.OnDeleteClick = function (e) {
              var t = this;
              e.stopPropagation(), e.preventDefault();
              var n = +e.currentTarget.dataset.lang;
              Object(F.d)(
                s.createElement(B.d, {
                  strTitle: Object(x.f)("#selectimage_remove_image"),
                  strDescription: Object(x.f)(
                    "#selectimage_remove_details",
                    Object(x.f)("#Language_" + Object(d.a)(n))
                  ),
                  closeModal: this.OnCloseDeleteDialog,
                  onOK: function () {
                    t.props.fnOnRemoveImage(n);
                  },
                  onCancel: this.OnCloseDeleteDialog,
                }),
                Object(R.m)(e)
              );
            }),
            (t.prototype.ConstructLanguages = function () {
              for (
                var e = this.props,
                  t = e.langOverride,
                  n = e.fnGetImageHash,
                  a = e.clanSteamID,
                  i = new Array(),
                  r = a.GetAccountID(),
                  o = Array(),
                  l = 0,
                  c = x.b.GetLanguageListForRealms([
                    p.f.k_ESteamRealmGlobal,
                    p.f.k_ESteamRealmChina,
                  ]);
                l < c.length;
                l++
              ) {
                var m = c[l],
                  _ = n(m);
                if (_) {
                  var g = Object(d.a)(m),
                    h = Object(x.f)("#Language_" + g);
                  o.push({ lang: m, strLang: g, locLang: h, imgHash: _ });
                }
              }
              for (
                var b = 0,
                  v = (o = o.sort(function (e, t) {
                    return e.locLang > t.locLang
                      ? 1
                      : e.locLang < t.locLang
                      ? -1
                      : 0;
                  }));
                b < v.length;
                b++
              ) {
                var S = v[b],
                  E = f.d.GetClanImageByImageHash(a, S.imgHash),
                  y = E
                    ? f.a.GenerateArtworkURLFromHashAndExtensions(
                        this.props.clanSteamID,
                        f.a.GetHashAndExt(E),
                        f.c.full,
                        S.lang
                      )
                    : "",
                  O =
                    t == S.lang
                      ? W.a.LanguageSelectorSelected
                      : S.imgHash
                      ? W.a.LanguageSelector
                      : W.a.LanguageSelectorNoData;
                i.push(
                  s.createElement(
                    "div",
                    {
                      key: "lang_select_" + r + " " + S.strLang,
                      id: S.strLang,
                      className: W.a.LanguageContainer,
                      onClick: this.OnChangeImageLanguage,
                    },
                    s.createElement("div", { className: O }, S.locLang),
                    s.createElement(
                      "span",
                      { className: W.a.LanguageOptions },
                      Boolean(y) &&
                        s.createElement(
                          "a",
                          {
                            href: y,
                            target: "_blank",
                            "data-tooltip-text": Object(x.f)(
                              "#selectimage_viewimage_ttip"
                            ),
                          },
                          N.P()
                        ),
                      this.props.fnOnArtworkLangChange &&
                        s.createElement("img", {
                          "data-lang": S.lang,
                          src: U.a,
                          onClick: this.OnChangeLanguage,
                          "data-tooltip-text": Object(x.f)(
                            "#selectimage_reassign_image_ttip"
                          ),
                        }),
                      this.props.fnOnRemoveImage &&
                        s.createElement("img", {
                          "data-lang": S.lang,
                          src: u.a,
                          onClick: this.OnDeleteClick,
                          "data-tooltip-text": Object(x.f)(
                            "#selectimage_delete_image_ttip"
                          ),
                        })
                    )
                  )
                );
              }
              return i;
            }),
            (t.prototype.render = function () {
              var e = this.ConstructLanguages();
              return s.createElement(
                "div",
                { className: W.a.SelectImageLanguagesCtn },
                s.createElement(
                  "div",
                  { className: W.a.SelectImageTitle },
                  Object(x.f)("#selectimage_uploaded_languages")
                ),
                s.createElement(
                  "div",
                  { className: W.a.LanguageListContainer },
                  e
                )
              );
            }),
            Object(i.c)([k.a], t.prototype, "OnCloseDeleteDialog", null),
            Object(i.c)([k.a], t.prototype, "OnChangeImageLanguage", null),
            Object(i.c)([k.a], t.prototype, "OnChangeLanguage", null),
            Object(i.c)([k.a], t.prototype, "OnDeleteClick", null),
            (t = Object(i.c)([l.a], t))
          );
        })(s.Component);
    },
    Txw1: function (e, t, n) {
      e.exports = {
        ReadMoreLink: "spotlight_ReadMoreLink_2mvgc",
        MajorEventContainer: "spotlight_MajorEventContainer_dVJB2",
        MajorEventImageContainer: "spotlight_MajorEventImageContainer_1PkTB",
        MajorEventImage: "spotlight_MajorEventImage_25fL1",
        BottomShadow: "spotlight_BottomShadow_1ueE9",
        MajoreEventImageContentContainer:
          "spotlight_MajoreEventImageContentContainer_3mREW",
        MajorEventImageTemplate: "spotlight_MajorEventImageTemplate_lQR9_",
        MajorEventBackground: "spotlight_MajorEventBackground_388Iu",
        MajorEventImageBackgroundBlur:
          "spotlight_MajorEventImageBackgroundBlur_3sVs6",
        MajorEventHeader: "spotlight_MajorEventHeader_1HL2n",
        EventType: "spotlight_EventType_3zVyX",
        GameIconAndName: "spotlight_GameIconAndName_IltgR",
        GameIcon: "spotlight_GameIcon_3Dkj3",
        MajorEventSpotlightBackground:
          "spotlight_MajorEventSpotlightBackground_1aheP",
        MajorEventContent: "spotlight_MajorEventContent_2nr7N",
        MajorEventTextCtn: "spotlight_MajorEventTextCtn_Ojdg2",
        MajorEventTitle: "spotlight_MajorEventTitle_nEBZT",
        MajorEventSummary: "spotlight_MajorEventSummary_HPngO",
        MajorEvent_Ctn: "spotlight_MajorEvent_Ctn_2_kU7",
        AppDetailsSpotlightContainer:
          "spotlight_AppDetailsSpotlightContainer_1zDJ1",
      };
    },
    UvY0: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return s;
        });
      var a = n("q1tI"),
        i = n("9w6b"),
        r = n("fpVW"),
        o = n("exH9");
      function l(e, t) {
        if (!e || !e.BIsClanAccount) return !1;
        var n = i.a.Get().GetPartnerEventPermissions(e);
        return !!n && (t ? n.valve_admin : n.valve_admin || n.support_user);
      }
      var s = function (e) {
        return l(e.clanSteamID, e.requireAdmin)
          ? a.createElement(
              "div",
              {
                className: Object(o.a)(
                  e.className,
                  e.requireAdmin
                    ? r.ValveOnlyAdminBackground
                    : r.ValveOnlyBackground
                ),
              },
              e.children
            )
          : null;
      };
    },
    Vitc: function (e, t, n) {
      e.exports = {
        FacetValueName: "facetedbrowseeditor_FacetValueName_3wruf",
        FacetValueCtn: "facetedbrowseeditor_FacetValueCtn_btRSv",
        FacetValueFilterDisplayCtn:
          "facetedbrowseeditor_FacetValueFilterDisplayCtn_2Xo5C",
        FacetName: "facetedbrowseeditor_FacetName_39gQo",
        FacetFilterDisplayCtn:
          "facetedbrowseeditor_FacetFilterDisplayCtn_3_YHd",
      };
    },
    Ww0A: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var a = n("wd/R"),
        i = n.n(a),
        r = [
          "small_update",
          "regular_update",
          "major_update",
          "release",
          "future_release",
          "beta_release",
          "dlc_release",
          "season_release",
          "sale",
          "gameitem_sale",
          "trial",
          "bonusxp",
          "loot",
          "perks",
          "general",
          "challenge",
          "contest",
          "broadcast",
          "news",
          "chat",
          "irl",
          "crosspost",
        ],
        o = {
          small_update: {
            name: "#PartnerEvent_12",
            description: "#PartnerEvent_12_Desc",
            type: 12,
            tags: ["patchnotes"],
          },
          regular_update: {
            name: "#PartnerEvent_13",
            description: "#PartnerEvent_13_Desc",
            type: 13,
          },
          major_update: {
            name: "#PartnerEvent_14",
            description: "#PartnerEvent_14_Desc",
            type: 14,
          },
          release: {
            name: "#PartnerEvent_10_editor",
            description: "#PartnerEvent_10_Desc",
            type: 10,
          },
          future_release: {
            name: "#PartnerEvent_16_editor",
            description: "#PartnerEvent_16_Desc",
            type: 16,
          },
          beta_release: {
            name: "#PartnerEvent_29_editor",
            description: "#PartnerEvent_29_Desc",
            type: 29,
          },
          dlc_release: {
            name: "#PartnerEvent_15",
            description: "#PartnerEvent_15_Desc",
            type: 15,
          },
          season_release: {
            name: "#PartnerEvent_32",
            description: "#PartnerEvent_32_Desc",
            type: 32,
          },
          sale: {
            name: "#PartnerEvent_20_editor",
            description: "#PartnerEvent_20_Desc",
            type: 20,
          },
          gameitem_sale: {
            name: "#PartnerEvent_21_editor",
            description: "#PartnerEvent_21_Desc",
            type: 21,
          },
          trial: {
            name: "#PartnerEvent_31",
            description: "#PartnerEvent_31_Desc",
            type: 31,
          },
          bonusxp: {
            name: "#PartnerEvent_22",
            description: "#PartnerEvent_22_Desc",
            type: 22,
          },
          loot: {
            name: "#PartnerEvent_23",
            description: "#PartnerEvent_23_Desc",
            type: 23,
          },
          perks: {
            name: "#PartnerEvent_24",
            description: "#PartnerEvent_24_Desc",
            type: 24,
          },
          general: {
            name: "#PartnerEvent_35",
            description: "#PartnerEvent_35_Desc",
            type: 35,
          },
          challenge: {
            name: "#PartnerEvent_25",
            description: "#PartnerEvent_25_Desc",
            type: 25,
          },
          contest: {
            name: "#PartnerEvent_26",
            description: "#PartnerEvent_26_Desc",
            type: 26,
          },
          broadcast: {
            name: "#PartnerEvent_11",
            description: "#PartnerEvent_11_Desc",
            icon: "11",
            type: 11,
          },
          news: {
            name: "#PartnerEvent_28_editor",
            description: "#PartnerEvent_28_Desc",
            icon: "28",
            type: 28,
          },
          chat: {
            name: "#PartnerEvent_9_editor",
            description: "#PartnerEvent_9_Desc",
            icon: "9",
            type: 9,
          },
          irl: {
            name: "#PartnerEvent_27_editor",
            description: "#PartnerEvent_27_Desc",
            icon: "27",
            type: 27,
          },
          crosspost: {
            name: "#PartnerEvent_34",
            description: "#PartnerEvent_34_Desc",
            icon: "34",
            type: 34,
          },
        },
        l = {
          news: {
            name: "#EventCategory_Curator_Group_Members",
            description: "#EventCategory_Curator_Group_Members_Desc",
            icon: "27",
            type: 28,
            tags: ["curator", "curator_group_members"],
          },
          public: {
            name: "#EventCategory_Curator_Public",
            description: "#EventCategory_Curator_Public_Desc",
            icon: "28",
            type: 28,
            tags: ["curator", "curator_public", "audience_followers"],
          },
          salepage: {
            name: "#EventCategory_Creator_SalePage",
            description: "#EventCategory_Creator_SalePage_Desc",
            icon: "20",
            type: 20,
            tags: ["curator", "curator_public", "audience_followers"],
          },
        },
        s = i()("2021-10-01T10:00:00-07:00").unix(),
        c = i()("2021-10-07T10:00:00-07:00").unix(),
        u = {
          artist_statement: {
            name: "#EventCategory_SteamGameFestival_ArtistStatement",
            description:
              "#EventCategory_SteamGameFestival_ArtistStatement_Desc",
            icon: "info",
            type: 28,
            tags: ["steam_game_festival_artist_statement", "hide_store"],
            earliestAllowedStartTime: s,
            latestAllowedEndTime: s,
            actionEndTime: c,
          },
          broadcast: {
            name: "#EventCategory_SteamGameFestival_Broadcast",
            description: "#EventCategory_SteamGameFestival_Broadcast_Desc",
            icon: "11",
            type: 11,
            tags: ["steam_game_festival_broadcast"],
            earliestAllowedStartTime: s,
            latestAllowedEndTime: c,
            actionEndTime: c,
          },
          office_hours: {
            name: "#EventCategory_SteamGameFestival_OfficeHours",
            description: "#EventCategory_SteamGameFestival_OfficeHours_Desc",
            icon: "9",
            type: 9,
            tags: ["steam_game_festival_office_hour"],
            earliestAllowedStartTime: s,
            latestAllowedEndTime: c,
            actionEndTime: c,
          },
        };
    },
    X2UP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("vDqi"),
        i = n.n(a),
        r = n("q1tI"),
        o = n.n(r);
      function l(e) {
        var t = o.a.useRef(i.a.CancelToken.source());
        return (
          o.a.useEffect(
            function () {
              var n = t.current;
              return function () {
                return n.cancel(e ? e + ": unmounting" : "unmounting");
              };
            },
            [e]
          ),
          t.current
        );
      }
    },
    Yamg: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var a,
        i = n("U+Q5"),
        r = n("ZeAL");
      function o(e, t, n) {
        var o = "",
          l = r.e + "/" + t.clanAccountID + "/" + i.a.GetHashAndExt(t);
        n == a.k_eInsertFullImage
          ? (o = "[img]" + l + "[/img]")
          : (o =
              "[url=" +
              l +
              "][img]" +
              (r.e + "/" + t.clanAccountID + "/" + i.a.GetThumbHashAndExt(t)) +
              "[/img][/url]");
        e.InsertText(o);
      }
      !(function (e) {
        (e[(e.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (e[(e.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (e[(e.k_eShowImageGroup = 3)] = "k_eShowImageGroup");
      })(a || (a = {}));
    },
    Zan1: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var a = n("mrSG"),
        i = n("TyAF"),
        r = n("q1tI"),
        o = n("Mgs7"),
        l = n("qP7j"),
        s = n("fpVW"),
        c = n("gyoR"),
        u = n("Jqb/"),
        d = n("0OaU"),
        p = n("exH9"),
        m = n("TLQK"),
        _ = n("opsS"),
        g = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { bImporting: !1, type: "game", importList: "" }), t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnImportAction = function () {
              this.setState({ bImporting: !0, errMsg: void 0 }, this.DoImport);
            }),
            (t.prototype.DoImport = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  i,
                  r = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (e = this.state.importList.split("\n")),
                        (t = e.filter(function (e) {
                          return (
                            e.trim().length > 0 && isNaN(parseInt(e.trim()))
                          );
                        })).length > 0
                          ? (console.error("Failed to Parse", t),
                            [
                              2,
                              this.setState({
                                bImporting: !1,
                                errMsg: Object(m.f)(
                                  "#Sale_ImportItems_ConvertNumberFailed",
                                  t[0]
                                ),
                              }),
                            ])
                          : ((n = e
                              .filter(function (e) {
                                return e.trim().length > 0;
                              })
                              .map(function (e) {
                                return parseInt(e.trim());
                              })),
                            (i = n.map(function (e) {
                              return { id: e, type: r.state.type };
                            })),
                            [4, Object(c.i)(i)])
                      );
                    case 1:
                      return (
                        a.sent(),
                        n.forEach(function (e) {
                          return r.props.fnAddCapsule(e, r.state.type);
                        }),
                        this.setState({ bImporting: !1 }),
                        this.props.closeModal(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnTypeChange = function (e) {
              this.setState({ type: e });
            }),
            (t.prototype.OnImportChange = function (e) {
              this.setState({ importList: e.currentTarget.value });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.closeModal,
                n = new Array();
              return (
                ["game", "sub", "bundle"].forEach(function (t) {
                  n.push(
                    r.createElement(
                      "div",
                      {
                        key: "ImportSaleItemsDialog_" + t,
                        className: Object(p.a)(
                          s.FlexRowContainer,
                          s.RadioOption
                        ),
                      },
                      r.createElement("input", {
                        type: "radio",
                        name: "ImportSaleItemsDialog",
                        id: "ImportSaleItemsDialog_input_" + t,
                        value: t,
                        checked: t == e.state.type,
                        onChange: function () {
                          return e.OnTypeChange(t);
                        },
                      }),
                      r.createElement(
                        "label",
                        { htmlFor: "ImportSaleItemsDialog_input_" + t },
                        r.createElement(
                          "span",
                          null,
                          Object(m.f)("#Sale_ImportItems_Type_" + t)
                        )
                      )
                    )
                  );
                }),
                r.createElement(
                  u.e,
                  {
                    onCancel: t,
                    closeModal: t,
                    bDisableBackgroundDismiss: !0,
                    bAllowFullSize: !0,
                    bHideCloseIcon: this.state.bImporting,
                  },
                  r.createElement(o.l, null, Object(m.f)("#Sale_ImportItems")),
                  r.createElement(
                    o.b,
                    null,
                    r.createElement(
                      "div",
                      null,
                      Object(m.f)("#Sale_ImportItems_Desc")
                    ),
                    Boolean(this.state.errMsg) &&
                      r.createElement(
                        "p",
                        { className: l.ErrorStyles },
                        this.state.errMsg
                      ),
                    n,
                    this.state.bImporting &&
                      r.createElement(d.a, {
                        size: "medium",
                        position: "center",
                      }),
                    !this.state.bImporting &&
                      r.createElement("textarea", {
                        value: this.state.importList,
                        cols: 40,
                        rows: 10,
                        onChange: this.OnImportChange,
                      })
                  ),
                  !this.state.bImporting &&
                    r.createElement(
                      o.k,
                      null,
                      r.createElement(
                        o.r,
                        { onClick: this.OnImportAction, disabled: !1 },
                        Object(m.f)("#Button_Confirm"),
                        " "
                      ),
                      r.createElement(
                        o.d,
                        { onClick: this.props.closeModal, disabled: !1 },
                        Object(m.f)("#Button_Cancel")
                      )
                    )
                )
              );
            }),
            Object(a.c)([_.a], t.prototype, "OnImportAction", null),
            Object(a.c)([_.a], t.prototype, "DoImport", null),
            Object(a.c)([_.a], t.prototype, "OnTypeChange", null),
            Object(a.c)([_.a], t.prototype, "OnImportChange", null),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component);
    },
    aXcg: function (e, t, n) {
      e.exports = { SavedImage: "partnereventsavebutton_SavedImage_1y3QV" };
    },
    as1E: function (e, t, n) {
      e.exports = {
        CategoryImage: "partnereventeditor_CategoryImage_2bE2w",
        EventCategory_Top_Desc:
          "partnereventeditor_EventCategory_Top_Desc_1kI-Q",
        eventcategory_picker_page:
          "partnereventeditor_eventcategory_picker_page_1axHR",
        EventEditorDescription:
          "partnereventeditor_EventEditorDescription_3C8iP",
        EventSubCategory_Section_Title:
          "partnereventeditor_EventSubCategory_Section_Title_1g3oT",
        EventCategory_Top_Title:
          "partnereventeditor_EventCategory_Top_Title_3XiNN",
        EventSubCategory_Section_Desc:
          "partnereventeditor_EventSubCategory_Section_Desc_1nVkr",
        EventCategory_Expander:
          "partnereventeditor_EventCategory_Expander_3Egt2",
        CategoryTitles_Ctn: "partnereventeditor_CategoryTitles_Ctn_21Aec",
        EventCategory_Title: "partnereventeditor_EventCategory_Title_16pAy",
        EventSubCategory_Ctn: "partnereventeditor_EventSubCategory_Ctn_1xp2X",
        CategoryTypeImage: "partnereventeditor_CategoryTypeImage_1bk8c",
        EventSubCategory_Title:
          "partnereventeditor_EventSubCategory_Title_2OocG",
        EventCategory_Desc: "partnereventeditor_EventCategory_Desc_S7Pze",
        EventSubCategory_Desc: "partnereventeditor_EventSubCategory_Desc_kjyqb",
        EventCategory_HeaderCtn:
          "partnereventeditor_EventCategory_HeaderCtn_48mLX",
        EventCategory: "partnereventeditor_EventCategory_1rJ2O",
        EventCategory_SteamAwardsVoteRequest:
          "partnereventeditor_EventCategory_SteamAwardsVoteRequest_RxhoL",
        EventCategory_SpecialCategory:
          "partnereventeditor_EventCategory_SpecialCategory_2Hm22",
        WarningCtn: "partnereventeditor_WarningCtn_25K96",
        TitleCtn: "partnereventeditor_TitleCtn_oGmJd",
        Title: "partnereventeditor_Title_1iEFY",
        Summary: "partnereventeditor_Summary_2eQap",
        Link: "partnereventeditor_Link_3s-fD",
        EventSubCategoriesCtn: "partnereventeditor_EventSubCategoriesCtn_1Ic2i",
        EventCategoryExpanded: "partnereventeditor_EventCategoryExpanded_2gb8_",
        EventEditorCatagorySection:
          "partnereventeditor_EventEditorCatagorySection_1HRyu",
        EventCategoryNotExpandable:
          "partnereventeditor_EventCategoryNotExpandable_3gOyF",
        EventEditorInputPaneContainer:
          "partnereventeditor_EventEditorInputPaneContainer_2hDSK",
        EventEditorInputPaneContents:
          "partnereventeditor_EventEditorInputPaneContents_24lkz",
        RequiredFieldLabel: "partnereventeditor_RequiredFieldLabel_11TnL",
        OptionsNotes: "partnereventeditor_OptionsNotes_3iBea",
        EventCategoryColumns: "partnereventeditor_EventCategoryColumns_36Vhg",
        EventCategoryLeftCol: "partnereventeditor_EventCategoryLeftCol__-nHy",
        EventCategoryRightCol: "partnereventeditor_EventCategoryRightCol_25O-o",
        EventCategoryVisibilityCtn:
          "partnereventeditor_EventCategoryVisibilityCtn_HRszO",
        ExceptionNote: "partnereventeditor_ExceptionNote_19VPv",
        ExceptionDocsLink: "partnereventeditor_ExceptionDocsLink_1iykQ",
        EventVisibility_Title: "partnereventeditor_EventVisibility_Title_jWhiI",
        wrapper: "partnereventeditor_wrapper_2OTbb",
        EventEditorTitleInput: "partnereventeditor_EventEditorTitleInput_ZAOXn",
        Subtitle: "partnereventeditor_Subtitle_32XZf",
        EventEditorInputMaxLength:
          "partnereventeditor_EventEditorInputMaxLength_2B38_",
        CharactorRemaining: "partnereventeditor_CharactorRemaining_153Co",
        CharactorExhausted: "partnereventeditor_CharactorExhausted_2zjgO",
        EventSubCategory: "partnereventeditor_EventSubCategory_2Q82B",
        EventEditBelowTopBarContainer:
          "partnereventeditor_EventEditBelowTopBarContainer_2sTiY",
        EventEditBelowTopBarGameName:
          "partnereventeditor_EventEditBelowTopBarGameName_2mDt_",
        EventEditBelowTopBarCategoryChoice:
          "partnereventeditor_EventEditBelowTopBarCategoryChoice_1GRf_",
        DashLink: "partnereventeditor_DashLink_2UhUF",
        EventEditorInputPaneTopRow:
          "partnereventeditor_EventEditorInputPaneTopRow_1jWGj",
        EventEditPopopLinkContainer:
          "partnereventeditor_EventEditPopopLinkContainer_28dFn",
        InlinePreviewContainer:
          "partnereventeditor_InlinePreviewContainer_1KczU",
        InlinePreviewHeader: "partnereventeditor_InlinePreviewHeader_36LPo",
        TopBarDeleteButton: "partnereventeditor_TopBarDeleteButton_3JgPZ",
        UploadPreviewCtn: "partnereventeditor_UploadPreviewCtn_1f_3B",
        PreviewImgCtn: "partnereventeditor_PreviewImgCtn_5cvwO",
        PreviewImgInfo: "partnereventeditor_PreviewImgInfo_wiK-n",
        UploadPreviewButtonsCtn:
          "partnereventeditor_UploadPreviewButtonsCtn_1E996",
        UploadPreview: "partnereventeditor_UploadPreview_1Go1Y",
        UploadPreviewDelete: "partnereventeditor_UploadPreviewDelete_PQiPX",
        UploadPreviewButton: "partnereventeditor_UploadPreviewButton_3ucHv",
        ArtworkDimensionTooSmall:
          "partnereventeditor_ArtworkDimensionTooSmall_1BKDz",
        UploadPreviewError: "partnereventeditor_UploadPreviewError_FqFpo",
        UploadPreviewWarning: "partnereventeditor_UploadPreviewWarning_3WxvC",
        ArtworkTipsCtn: "partnereventeditor_ArtworkTipsCtn_36oQU",
        ArtworkDocs: "partnereventeditor_ArtworkDocs_R7tUA",
        ArtworkExampleTitle: "partnereventeditor_ArtworkExampleTitle_3IYml",
        ArtworkExampleCtn: "partnereventeditor_ArtworkExampleCtn_1-LYQ",
        EditRawExample: "partnereventeditor_EditRawExample_2Z-Uc",
        EditRawTextArea: "partnereventeditor_EditRawTextArea_2Hjmo",
        TitleSelectionContainer:
          "partnereventeditor_TitleSelectionContainer_wXKYm",
        SaleSectionTitleHeader:
          "partnereventeditor_SaleSectionTitleHeader_1PZp0",
        TabsSelectorEntry: "partnereventeditor_TabsSelectorEntry_rTO_V",
        TabsSelectorEntrySelected:
          "partnereventeditor_TabsSelectorEntrySelected_1ryee",
        TabsMultipleError: "partnereventeditor_TabsMultipleError_2-JUW",
        TabsSelectToEdit: "partnereventeditor_TabsSelectToEdit_2HsE1",
        ShowOnTabCheckBoxCtn: "partnereventeditor_ShowOnTabCheckBoxCtn_2xl2v",
        ShowOnTabCheckBox: "partnereventeditor_ShowOnTabCheckBox_3p5Yu",
        ShowOnTabsLabel: "partnereventeditor_ShowOnTabsLabel_IMegH",
        ShowOnTabsButton: "partnereventeditor_ShowOnTabsButton_3bfm0",
        BottomBarControls: "partnereventeditor_BottomBarControls_3sisA",
        ReoderSections: "partnereventeditor_ReoderSections_234Ad",
        MinimizeAll: "partnereventeditor_MinimizeAll_kQpet",
        ItemBrowseInactiveTab: "partnereventeditor_ItemBrowseInactiveTab_1-3nD",
        ItemBrowseInactiveTabAdd:
          "partnereventeditor_ItemBrowseInactiveTabAdd_3K8G5",
        TabHideItemFilterCtn: "partnereventeditor_TabHideItemFilterCtn_2vW4l",
        ReorderSectionCtn: "partnereventeditor_ReorderSectionCtn_2ye5W",
        SectionList: "partnereventeditor_SectionList_2g1Br",
        SectionTitle: "partnereventeditor_SectionTitle_3euRU",
        FilterDisplayCtn: "partnereventeditor_FilterDisplayCtn_yqDsi",
        PrioritySelector: "partnereventeditor_PrioritySelector_3OCga",
        BroadcastAccountInfo: "partnereventeditor_BroadcastAccountInfo_2udBY",
        BroadcastAccountList: "partnereventeditor_BroadcastAccountList_1LLBz",
        ShowInTabsList: "partnereventeditor_ShowInTabsList_1slxi",
      };
    },
    bVxH: function (e, t, n) {
      e.exports = {
        titleimg: "clanlocalizedimage_titleimg_rjdSm",
        previewimg: "clanlocalizedimage_previewimg_45E3Z",
        artworkbar: "clanlocalizedimage_artworkbar_q0Eu4",
      };
    },
    ba6i: function (e, t, n) {
      e.exports = {
        EventTimeSection: "partnereventshareddates_EventTimeSection_3HyTV",
        EventTimeTitle: "partnereventshareddates_EventTimeTitle_2lG5h",
        EventVisibilityItem:
          "partnereventshareddates_EventVisibilityItem_1she-",
        EventEditorInputPaneContainer:
          "partnereventshareddates_EventEditorInputPaneContainer_1fCy4",
        TimeWidth: "partnereventshareddates_TimeWidth_3JGsB",
        EventPublishTimeCtn:
          "partnereventshareddates_EventPublishTimeCtn_2QIVv",
        InputBorder: "partnereventshareddates_InputBorder_1_H1s",
        TimeBlock: "partnereventshareddates_TimeBlock_2xLBs",
        TimeRowContainer: "partnereventshareddates_TimeRowContainer_BWmgg",
        TimeRowDropDown: "partnereventshareddates_TimeRowDropDown_3ECiy",
        EndDateAmountCtn: "partnereventshareddates_EndDateAmountCtn_1BIlZ",
        EndRound: "partnereventshareddates_EndRound_jwuNo",
        VisibilityItemList: "partnereventshareddates_VisibilityItemList_3B0QM",
        VisibilityItems: "partnereventshareddates_VisibilityItems_1WleI",
        EventEditorVisibilityCtn:
          "partnereventshareddates_EventEditorVisibilityCtn_4gWwy",
      };
    },
    "d+Me": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n("mrSG"),
        i = n("q1tI"),
        r = n("uuth"),
        o = function (e) {
          var t = e.onPositionChange,
            n = e.onLeave,
            o = i.useCallback(
              function (e) {
                return (
                  void 0 === e.previousPosition &&
                    e.currentPosition === r.a.above &&
                    n &&
                    n(e),
                  t && t(e)
                );
              },
              [t, n]
            );
          return i.createElement(
            r.a,
            Object(a.a)({}, e, { onPositionChange: o })
          );
        };
    },
    dZOt: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "g", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return g;
        });
      var a,
        i = n("mrSG"),
        r = n("2vnA"),
        o = n("+VX6"),
        l = n("U+Q5"),
        s = n("TLQK"),
        c = n("XxJJ");
      !(function (e) {
        (e[(e.k_EStorePage = 0)] = "k_EStorePage"),
          (e[(e.k_EEventPage = 1)] = "k_EEventPage"),
          (e[(e.k_ESalesPage = 2)] = "k_ESalesPage");
      })(a || (a = {}));
      var u = 3,
        d = [
          "EventEmail_Destination_Store",
          "EventEmail_Destination_Event",
          "EventEmail_Destination_SalesPage",
        ],
        p = [
          "EventEmail_Subject_NewUpdate",
          "EventEmail_Subject_UpcomingLaunch",
          "EventEmail_Subject_NowAvailable",
          "EventEmail_Subject_FreeDemoAvailable",
          "EventEmail_Subject_SpecialOffer",
          "EventEmail_Subject_Tournament_Now",
          "EventEmail_Subject_LiveStream_Now",
          "Email_Wishlist_NewReleaseEA_Subject",
          "EventEmail_Subject_NewDLC",
          "EventEmail_Subject_NewExpansion",
          "EventEmail_Subject_NewChapter",
          "EventEmail_Subject_NewBattlePass",
          "EventEmail_Subject_NewSeason",
        ],
        m = [
          "EventEmail_Button_ClickForMoreDetails",
          "EventEmail_Button_PrepurchaseNow",
          "EventEmail_Button_BuyNow",
          "EventEmail_Button_WishlistNow",
          "EventEmail_Button_PlayNow",
          "EventEmail_WatchNow",
        ],
        _ = (function () {
          function e(e) {
            this.m_setting = e;
          }
          return (
            (e.prototype.BIsEnableEnabled = function () {
              return this.m_setting.bEnable;
            }),
            (e.prototype.GetLocalizedSubject = function (e) {
              return this.m_setting.localized_subject &&
                this.m_setting.localized_subject[e]
                ? this.m_setting.localized_subject[e]
                : "";
            }),
            (e.prototype.GetSubjectTextLoc = function () {
              return this.m_setting.subject_loc_token
                ? this.m_setting.subject_loc_token
                : "EventEmail_Subject_NewUpdate";
            }),
            (e.prototype.GetNumSections = function () {
              return this.m_setting.sections.length;
            }),
            (e.prototype.GetSection = function (e) {
              return this.m_setting.sections[e];
            }),
            (e.prototype.GetSomeCreatorTarget = function () {
              return this.GetTargetting().creator_home[0];
            }),
            (e.prototype.GetFiltering = function () {
              return this.m_setting.filtering || {};
            }),
            (e.prototype.BIsIRTopNFiltering = function () {
              return this.GetFiltering().ir_topn;
            }),
            (e.prototype.BIsWishListFiltering = function () {
              return this.GetFiltering().wishlist;
            }),
            (e.prototype.GetControlGroupPercent = function () {
              var e = this.GetFiltering();
              return Boolean(e && e.control_group_percent)
                ? e.control_group_percent
                : 0;
            }),
            (e.prototype.GetTargetting = function () {
              return this.m_setting.targeting || {};
            }),
            (e.prototype.BIsTargetingGamePlayers = function () {
              return this.GetTargetting().game_players;
            }),
            (e.prototype.BIsTargetingGameFollowers = function () {
              return this.GetTargetting().game_followers;
            }),
            (e.prototype.BIsTargetingGameWishlisters = function () {
              return this.GetTargetting().game_wishlister;
            }),
            (e.prototype.BIsExcludingGameOwners = function () {
              return this.GetTargetting().game_exclude_owners;
            }),
            (e.prototype.BIsTargetingGameOwnersWithoutPlaytime = function () {
              return this.GetTargetting().game_owner_with_no_playtime;
            }),
            (e.prototype.BIsTargetingSomeCreator = function () {
              return (
                this.GetTargetting().creator_home &&
                this.GetTargetting().creator_home.length > 0
              );
            }),
            (e.prototype.BIsTargetingSomeCreatorPlayer = function () {
              return (
                this.GetTargetting().creator_home_player &&
                this.GetTargetting().creator_home_player.length > 0
              );
            }),
            (e.prototype.BIsTargetingCreator = function (e) {
              var t = this.GetTargetting().creator_home;
              return (
                t &&
                t.length > 0 &&
                t.some(function (t) {
                  return t === e;
                })
              );
            }),
            (e.prototype.BIsTargetingCreatorPlayer = function (e) {
              var t = this.GetTargetting().creator_home_player;
              return (
                t &&
                t.length > 0 &&
                t.some(function (t) {
                  return t === e;
                })
              );
            }),
            (e.prototype.BIsLocked = function () {
              return this.m_setting.locked;
            }),
            (e.prototype.BHasSomeTargetEnabled = function () {
              return (
                this.BIsTargetingGamePlayers() ||
                this.BIsTargetingGameFollowers() ||
                this.BIsTargetingGameWishlisters() ||
                this.BIsTargetingSomeCreator() ||
                this.BIsTargetingSomeCreatorPlayer() ||
                this.BIsTargetingGameOwnersWithoutPlaytime()
              );
            }),
            (e.prototype.BHasSomeLanguage = function (e) {
              return (
                this.m_setting &&
                this.m_setting.sections.some(function (t) {
                  var n = new g(t);
                  return (
                    n.GetHeadline(e).trim().length > 0 ||
                    n.GetBody(e).trim().length > 0 ||
                    void 0 !== n.GetImageHashAndExtRaw(e)
                  );
                })
              );
            }),
            (e.prototype.GetInternalTargetingPartnerCapability = function () {
              return this.m_setting.internal_targeting.capability;
            }),
            (e.prototype.BHasInternalTargetingPriority = function () {
              return this.m_setting.internal_targeting.priority;
            }),
            (e.prototype.BHasInternalTargetingPublisherRight = function (e) {
              return (this.m_setting.internal_targeting.pub_rights & e) == e;
            }),
            (e.prototype.BHasAnyInternalTargetingPublisherRight = function () {
              return 0 != this.m_setting.internal_targeting.pub_rights;
            }),
            (e.prototype.BHasInternalTargetingAppRight = function (e) {
              return (this.m_setting.internal_targeting.app_rights & e) == e;
            }),
            (e.prototype.BHasAnyInternalTargetingAppRight = function () {
              return 0 != this.m_setting.internal_targeting.app_rights;
            }),
            (e.prototype.GetInternalTargetAppCount = function () {
              return this.m_setting.internal_targeting
                ? this.m_setting.internal_targeting.appids.length
                : 0;
            }),
            (e.prototype.GetInternalTargetPublisherCount = function () {
              return this.m_setting.internal_targeting
                ? this.m_setting.internal_targeting.partnerids.length
                : 0;
            }),
            (e.prototype.GetInternalTargetAppIDs = function () {
              return this.m_setting.internal_targeting
                ? this.m_setting.internal_targeting.appids
                : [];
            }),
            (e.prototype.GetInternalTargetPublisherIDs = function () {
              return this.m_setting.internal_targeting
                ? this.m_setting.internal_targeting.partnerids
                : [];
            }),
            (e.prototype.BHasLocalizedSubject = function (e) {
              return (
                this.m_setting.localized_subject &&
                e < this.m_setting.localized_subject.length &&
                Boolean(this.m_setting.localized_subject[e])
              );
            }),
            Object(i.c)([r.C], e.prototype, "m_setting", void 0),
            Object(i.c)([c.a], e.prototype, "BHasSomeLanguage", null),
            e
          );
        })(),
        g = (function () {
          function e(e) {
            this.m_section = e;
          }
          return (
            (e.prototype.BHasHeadline = function () {
              return void 0 !== this.m_section.localized_headline;
            }),
            (e.prototype.BHasHeadlineInLanguage = function (e) {
              return (
                this.m_section.localized_headline &&
                this.m_section.localized_headline.length > e &&
                Boolean(this.m_section.localized_headline[e])
              );
            }),
            (e.prototype.BHasBody = function () {
              return void 0 !== this.m_section.localized_body;
            }),
            (e.prototype.BHasBodyInLanguage = function (e) {
              return (
                this.m_section.localized_body &&
                this.m_section.localized_body.length > e &&
                this.m_section.localized_body[e]
              );
            }),
            (e.prototype.BHasCallToAction = function () {
              return void 0 !== this.m_section.button_loc_token;
            }),
            (e.prototype.BHasImage = function () {
              return void 0 !== this.m_section.localized_image;
            }),
            (e.prototype.BHasVideo = function () {
              return void 0 !== this.m_section.video_link;
            }),
            (e.prototype.BHasSomeImage = function () {
              return (
                this.m_section.localized_image &&
                this.m_section.localized_image.some(function (e) {
                  return Boolean(e);
                })
              );
            }),
            (e.prototype.GetHeadline = function (e) {
              return s.a.Get(this.m_section.localized_headline, e);
            }),
            (e.prototype.GetHeadlineWithFallback = function (e) {
              var t = this.GetHeadline(e),
                n = s.b.GetELanguageFallback(e);
              return 0 == t.length && e != n && (t = this.GetHeadline(n)), t;
            }),
            (e.prototype.GetBody = function (e) {
              return this.m_section.localized_body &&
                this.m_section.localized_body.length > e &&
                this.m_section.localized_body[e]
                ? this.m_section.localized_body[e]
                : "";
            }),
            (e.prototype.GetBodyWithFallback = function (e) {
              var t = this.GetBody(e),
                n = s.b.GetELanguageFallback(e);
              return 0 == t.length && e != n && (t = this.GetBody(n)), t;
            }),
            (e.prototype.GetImageHashAndExtRaw = function (e) {
              return this.m_section.localized_image &&
                this.m_section.localized_image.length > e &&
                this.m_section.localized_image[e]
                ? this.m_section.localized_image[e]
                : void 0;
            }),
            (e.prototype.GetImageHash = function (e) {
              var t = this.GetImageHashAndExtRaw(e);
              if (t) return t.substr(0, t.length - 4);
            }),
            (e.prototype.GetImageHashAndExtWithFallback = function (e) {
              var t = this.GetImageHashAndExtRaw(e),
                n = s.b.GetELanguageFallback(e);
              return (
                void 0 === t && e != n && (t = this.GetImageHashAndExtRaw(n)), t
              );
            }),
            (e.prototype.RemoveImage = function (e) {
              this.m_section.localized_image &&
                this.m_section.localized_image.length > e &&
                (this.m_section.localized_image[e] = void 0);
            }),
            (e.prototype.GetImageURLWithFallback = function (e, t) {
              var n = this.GetImageHashAndExtWithFallback(e);
              return n
                ? l.a.GenerateArtworkURLFromHashAndExtensions(t, n)
                : void 0;
            }),
            (e.prototype.GetVideoURL = function () {
              return this.m_section.video_link ? this.m_section.video_link : "";
            }),
            (e.prototype.GetVideoImage = function () {
              return this.m_section.video_image;
            }),
            (e.prototype.GetDestination = function () {
              return this.m_section.button_destination;
            }),
            (e.prototype.BIsStoreSalesPage = function () {
              return this.m_section.button_destination == a.k_ESalesPage;
            }),
            (e.prototype.GetDestinationStorePath = function () {
              return this.m_section.button_store_path
                ? this.m_section.button_store_path
                : "";
            }),
            (e.prototype.GetButtonTextLoc = function () {
              return this.m_section.button_loc_token;
            }),
            (e.prototype.GetButtonAppidOverride = function () {
              return this.m_section.button_appid_override;
            }),
            (e.prototype.BHasButtonAppIDOverride = function () {
              return (
                this.m_section.button_appid_override &&
                this.m_section.button_appid_override > u
              );
            }),
            (e.prototype.BHasValidVideoURL = function () {
              return Object(o.a)(this.m_section.video_link);
            }),
            (e.prototype.GetYouTubeVideoID = function () {
              return Object(o.c)(this.m_section.video_link);
            }),
            (e.prototype.GetYouTubeImageURL = function () {
              if (this.BHasValidVideoURL())
                return (
                  "https://img.youtube.com/vi/" +
                  this.GetYouTubeVideoID() +
                  "/0.jpg"
                );
            }),
            (e.prototype.GetRawVideoURL = function () {
              return this.m_section.video_link;
            }),
            (e.prototype.BHasVideoImage = function () {
              return Boolean(this.m_section.video_image);
            }),
            Object(i.c)([r.C], e.prototype, "m_section", void 0),
            e
          );
        })();
    },
    f1ZV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return S;
      });
      var a = n("mrSG"),
        i = n("TyAF"),
        r = n("q1tI"),
        o = n("y2g3"),
        l = n.n(o),
        s = n("dsQf"),
        c = n.n(s),
        u = n("5izx"),
        d = n("fpVW"),
        p = n.n(d),
        m = n("exH9"),
        _ = n("TLQK"),
        g = n("opsS"),
        h = n("5E+2"),
        f = n("ba6i"),
        b = n.n(f),
        v = n("f0Wu"),
        S = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.state = {
                timeAsString: null,
                dateAsString: null,
                bEndTimeBeforeStartTime: !1,
              }),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnTimeChange = function (e) {
              var t = this.props,
                n = t.nEarliestTime,
                a = t.fnSetTimeToUpdate,
                i = t.fnIsValidDateTime;
              if (!t.disabled) {
                if ("string" == typeof e) {
                  var r = v(e, "h:m a +-h:m", !0);
                  if (!r.isValid())
                    return void this.setState({ timeAsString: e });
                  e = r;
                }
                var o = this.props.fnGetTimeToUpdate(),
                  l = 0;
                if (o) {
                  var s = v.unix(o);
                  e.year(s.year()),
                    e.month(s.month()),
                    e.day(s.day()),
                    (l = e.unix());
                } else {
                  l =
                    v.unix(n).hour(0).second(0).minutes(0).unix() +
                    3600 * e.hour() +
                    60 * e.minutes();
                }
                a(l);
                var c = i && !0 === i();
                (null == this.state.timeAsString &&
                  c == this.state.bEndTimeBeforeStartTime) ||
                  this.setState({
                    timeAsString: null,
                    bEndTimeBeforeStartTime: c,
                  });
              }
            }),
            (t.prototype.OnDateChange = function (e) {
              if (!this.props.disabled) {
                if ("string" == typeof e) {
                  var t = v(e, "M/D/YYYY", !0);
                  if (!t.isValid())
                    return void this.setState({ dateAsString: e });
                  e = t;
                }
                var n = this.props.fnGetTimeToUpdate(),
                  a = v.unix(n || u.a.GetTimeNowWithOverride());
                e.hour(a.hour()),
                  e.minute(a.minute()),
                  e.second(0),
                  this.props.fnSetTimeToUpdate(e.unix());
                var i =
                  this.props.fnIsValidDateTime &&
                  !0 === this.props.fnIsValidDateTime();
                (null == this.state.dateAsString &&
                  i == this.state.bEndTimeBeforeStartTime) ||
                  this.setState({
                    dateAsString: null,
                    bEndTimeBeforeStartTime: i,
                  });
              }
            }),
            (t.prototype.IsValidDate = function (e) {
              if (this.props.disabled) return !1;
              var t = this.props,
                n = t.nEarliestTime,
                a = t.nLatestTime,
                i = v.unix(n).hour(0).seconds(0).minute(0),
                r = e.unix() >= i.unix();
              if (r && a && a >= n) {
                var o = v.unix(a).hour(23).minute(59).seconds(59);
                r = e.unix() <= o.unix();
              }
              return r;
            }),
            (t.prototype.SetToNow = function () {
              this.props.fnSetToNow
                ? this.props.fnSetToNow(u.a.GetTimeNowWithOverride())
                : this.props.fnSetTimeToUpdate(u.a.GetTimeNowWithOverride());
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.nLatestTime,
                n = e.nEarliestTime,
                a = e.fnGetTimeToUpdate,
                i = e.fnIsValidDateTime,
                o = a(),
                s = o > 0 ? new Date(1e3 * o) : null,
                d = "h:mm A",
                g = i && i(),
                f =
                  this.state.timeAsString ||
                  this.state.dateAsString ||
                  "string" == typeof g,
                S = "#EventEditor_Fallback_Invalid_DateTime";
              this.state.timeAsString
                ? (S = "#EventEditor_Time_CannotParse")
                : this.state.dateAsString
                ? (S = "#EventEditor_Date_CannotParse")
                : "string" == typeof g && (S = g);
              var E = void 0;
              if (t && n && t == n && n > u.a.GetTimeNowWithOverride()) {
                var y = v.unix(n);
                (E = {
                  hours: { max: y.hour(), min: y.hour(), step: 0 },
                  minutes: { max: y.minute(), min: y.minute(), step: 0 },
                  seconds: { max: y.seconds(), min: y.seconds(), step: 0 },
                  milliseconds: { max: 0, min: 0, step: 0 },
                }),
                  (d = "HH:mm");
              }
              var O = void 0;
              !o && n && (O = v.unix(n));
              var T = v.tz.guess(),
                C = v.unix(o).tz(T);
              return r.createElement(
                "div",
                {
                  className: Object(m.a)(
                    b.a.EventTimeSection,
                    this.props.className
                  ),
                },
                r.createElement(
                  "div",
                  { className: b.a.EventTimeTitle },
                  r.createElement(
                    h.a,
                    {
                      toolTipContent: this.props.strDescToolTip,
                      direction: "top",
                    },
                    Boolean(this.props.strDescription) &&
                      r.createElement("span", null, this.props.strDescription)
                  ),
                  f &&
                    r.createElement(
                      "span",
                      null,
                      r.createElement("img", { src: c.a }),
                      Object(_.f)(S)
                    )
                ),
                r.createElement(
                  "div",
                  { className: p.a.FlexRowContainer },
                  r.createElement(
                    "div",
                    { className: Object(m.a)(p.a.InputBorder, b.a.TimeBlock) },
                    r.createElement(l.a, {
                      onChange: this.OnDateChange,
                      timeFormat: !1,
                      value: this.state.dateAsString
                        ? this.state.dateAsString
                        : s,
                      isValidDate: this.IsValidDate,
                      initialValue: O,
                      inputProps: {
                        placeholder: Object(_.f)("#EventEditor_Enter_Date"),
                        className: b.a.TimeWidth,
                      },
                    })
                  ),
                  r.createElement(
                    "div",
                    {
                      className: Object(m.a)(
                        p.a.InputBorder,
                        b.a.TimeBlock,
                        p.a.FlexRowContainer
                      ),
                    },
                    r.createElement(l.a, {
                      onChange: this.OnTimeChange,
                      dateFormat: !1,
                      timeFormat: d,
                      timeConstraints: E,
                      value: this.state.timeAsString
                        ? this.state.timeAsString
                        : s,
                      inputProps: {
                        placeholder: Object(_.f)("#EventEditor_Enter_Time"),
                        className: b.a.TimeWidth,
                      },
                    })
                  ),
                  this.props.bShowTimeZone &&
                    r.createElement("div", null, C.zoneAbbr())
                ),
                Boolean(E) &&
                  r.createElement(
                    "div",
                    null,
                    Object(_.f)("#EventEditor_DateTime_Fixed")
                  )
              );
            }),
            Object(a.c)([g.a], t.prototype, "OnTimeChange", null),
            Object(a.c)([g.a], t.prototype, "OnDateChange", null),
            Object(a.c)([g.a], t.prototype, "IsValidDate", null),
            Object(a.c)([g.a], t.prototype, "SetToNow", null),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component);
    },
    fcuX: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return D;
        }),
        n.d(t, "e", function () {
          return w;
        });
      var a,
        i,
        r,
        o,
        l = n("mrSG"),
        s = n("t0uJ"),
        c = n("2vnA"),
        u = n("mgoM"),
        d = n("kyHq"),
        p = n("dZOt"),
        m = n("3+zv"),
        _ = n("kLLr"),
        g = n("ir+G"),
        h = n("U+Q5"),
        f = n("TQGK"),
        b = n("5izx"),
        v = n("6oCP"),
        S = n("r64O"),
        E = n("TLQK"),
        y = n("N0Ye"),
        O = n("opsS"),
        T = n("lkRc"),
        C = n("Q47U"),
        j = n("KP/B"),
        I = n("I/R6");
      !(function (e) {
        (e.k_ENow = "now"), (e.k_ESpecified = "specified");
      })(a || (a = {})),
        (function (e) {
          (e.k_EDuration = "duration"), (e.k_ESpecified = "specified");
        })(i || (i = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.type = 1)] = "type"),
            (e[(e.name = 2)] = "name"),
            (e[(e.description = 4)] = "description"),
            (e[(e.time = 8)] = "time"),
            (e[(e.visibility = 16)] = "visibility"),
            (e[(e.jsondata_other = 32)] = "jsondata_other"),
            (e[(e.jsondata_image = 64)] = "jsondata_image"),
            (e[(e.jsondata_email = 128)] = "jsondata_email"),
            (e[(e.jsondata_broadcast = 256)] = "jsondata_broadcast"),
            (e[(e.jsondata_sales = 512)] = "jsondata_sales"),
            (e[(e.jsondata_schedule = 1024)] = "jsondata_schedule");
        })(r || (r = {})),
        (function (e) {
          (e.k_EHour = "hour"), (e.k_EDay = "day"), (e.k_EWeek = "week");
        })(o || (o = {}));
      var D;
      !(function (e) {
        (e[(e.immediate = 0)] = "immediate"),
          (e[(e.event_start = 1)] = "event_start"),
          (e[(e.specified_time = 2)] = "specified_time");
      })(D || (D = {}));
      var w = (function () {
        function e(e) {
          (this.m_bChanged = !1),
            (this.m_changes = r.None),
            (this.visibilitySetting = D.immediate),
            (this.m_startTimeEditChoice = a.k_ENow),
            (this.m_endTimeEditChoice = i.k_EDuration),
            (this.m_originalEvent = e),
            (this.m_curModel = e.clone(!0)),
            this.DeriveTimeEditChoices(),
            this.DeriveVisibilitySetting(),
            this.EnsureCurrentLanguageValid(),
            e.BIsOGGEvent() && f.a.LoadOGGClanInfoForAppID(e.appid),
            this.ClearDirty();
        }
        return (
          (e.prototype.GetCreatorUserSteamID = function () {
            return new _.a(this.m_originalEvent.creator_steamid);
          }),
          (e.prototype.GetLastUpdater = function () {
            return new _.a(this.m_originalEvent.last_update_steamid);
          }),
          (e.prototype.GetLastUpdateTime = function () {
            return this.m_originalEvent.rtime32_last_modified;
          }),
          (e.prototype.GetGID = function () {
            return this.m_curModel.GID ? this.m_curModel.GID : "";
          }),
          (e.prototype.BHasGid = function () {
            return this.m_curModel.GID && this.m_curModel.GID.length > 1;
          }),
          (e.prototype.GetAnnouncementGID = function () {
            return this.m_curModel.AnnouncementGID
              ? this.m_curModel.AnnouncementGID
              : "";
          }),
          (e.prototype.GetClanSteamID = function () {
            return this.m_curModel.clanSteamID;
          }),
          (e.prototype.GetClanAccountID = function () {
            return this.m_curModel.clanSteamID.GetAccountID();
          }),
          (e.prototype.GetAppID = function () {
            return this.m_curModel.appid;
          }),
          (e.prototype.GetEventState = function () {
            return this.m_curModel.visibility_state;
          }),
          (e.prototype.GetEventType = function () {
            return this.m_curModel.type;
          }),
          (e.prototype.GetEventTypeAsString = function () {
            return this.m_curModel.GetEventTypeAsString();
          }),
          (e.prototype.GetStartTimeEditChoice = function () {
            return this.m_startTimeEditChoice;
          }),
          (e.prototype.GetEndTimeEditChoice = function () {
            return this.m_endTimeEditChoice;
          }),
          (e.prototype.GetEndEditDurationType = function () {
            return this.m_editDurationType;
          }),
          (e.prototype.GetEndEditDurationValue = function () {
            return this.m_editDurationValue;
          }),
          (e.prototype.GetUniqueKey = function () {
            return this.BHasGid() ? this.GetGID() : "GIDLessNewEvent";
          }),
          (e.prototype.BIsSourceEventSaleEnabled = function () {
            return this.m_originalEvent.jsondata.bSaleEnabled;
          }),
          (e.prototype.BInRealmGlobal = function () {
            return this.m_curModel.BInRealmGlobal();
          }),
          (e.prototype.BInRealmChina = function () {
            return this.m_curModel.BInRealmChina();
          }),
          (e.prototype.BIsLanguageValidForRealms = function (e) {
            return this.m_curModel.BIsLanguageValidForRealms(e);
          }),
          (e.prototype.EnsureCurrentLanguageValid = function () {
            this.BIsLanguageValidForRealms(I.a.Get().GetCurEditLanguage()) ||
              I.a.Get().SetCurEditLanguage(this.BInRealmChina() ? 29 : 0);
          }),
          (e.prototype.GetIncludedRealmList = function () {
            var e = new Array();
            return (
              this.BInRealmGlobal() && e.push(d.f.k_ESteamRealmGlobal),
              this.BInRealmChina() && e.push(d.f.k_ESteamRealmChina),
              Object(S.a)(
                e.length > 0,
                "Event " +
                  this.GetGID() +
                  " is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue"
              ),
              e
            );
          }),
          (e.prototype.GetCompletionState = function (e, t) {
            var n = e.filter(function (e) {
                return Boolean(e);
              }),
              a = n.length >= e.length;
            return {
              text: Object(E.f)(
                a
                  ? "#EventEditor_CompleteStatus"
                  : "#EventEditor_IncompleteStatus",
                n.length,
                e.length
              ),
              complete: n.length,
              total: e.length,
              ttip: a ? void 0 : t,
            };
          }),
          (e.prototype.GetDescriptionCompletion = function () {
            var e = I.a.Get().GetCurEditLanguage(),
              t = [this.GetName(e), this.GetDescription(e)];
            return this.GetCompletionState(t);
          }),
          (e.prototype.GetArtworkCompletion = function () {
            if (this.BHasTag("curator")) return null;
            var e = I.a.Get().GetCurEditLanguage(),
              t = [this.GetImageURL("capsule", e)];
            return this.GetCompletionState(t);
          }),
          (e.prototype.GetOptionsCompletion = function () {
            var e = [];
            return (
              this.BHasTag("steam_award_nomination_request") &&
                e.push(this.GetSteamAwardCategory()),
              this.BIsEventForOGGWithoutVisibleStorePage() &&
                e.push(this.BOptedInForOGGWithoutVisibleStorePage()),
              e.length ? this.GetCompletionState(e) : null
            );
          }),
          (e.prototype.GetSaleTabCompletion = function () {
            var e = [];
            return (
              this.BHasSaleEnabled() &&
                e.push(this.GetEventModel().GetSaleVanity()),
              e.length
                ? this.GetCompletionState(
                    e,
                    Object(E.f)("#EventEditor_SaleNotReady_ttip")
                  )
                : null
            );
          }),
          (e.prototype.BAllowedToPublishStagedEvents = function () {
            return (
              !this.BHasTag("steam_award_nomination_request") &&
              !this.BHasTag("steam_award_vote_request")
            );
          }),
          (e.prototype.GetEventStartTime = function () {
            return this.m_curModel.startTime;
          }),
          (e.prototype.GetEventEndTime = function () {
            return this.m_curModel.endTime;
          }),
          (e.prototype.GetEventVisibilityStartTime = function () {
            return Object(y.b)(this.GetCategoryAsType())
              ? this.m_curModel.visibilityStartTime
              : this.m_curModel.startTime;
          }),
          (e.prototype.BGetOriginalEventVisibilityStartTime = function () {
            return this.m_originalEvent.visibilityStartTime;
          }),
          (e.prototype.GetEventVisibilityEndTime = function () {
            return this.m_curModel.visibilityEndTime;
          }),
          (e.prototype.GetOriginalEventStartTime = function () {
            return this.m_originalEvent.startTime;
          }),
          (e.prototype.GetOriginalEventEndTime = function () {
            return this.m_originalEvent.endTime;
          }),
          (e.prototype.BIsValidStartTimeForEdit = function () {
            var e = this.GetEventStartTime();
            return (
              !e ||
              e <= 1 ||
              !(!this.BPublished() || e != this.GetOriginalEventStartTime()) ||
              (this.GetEarliestStartTimeForEdit() &&
              e < this.GetEarliestStartTimeForEdit()
                ? "#EventEditor_StartTime_BeforeEarliestAllowed"
                : !(e + 3600 < b.a.GetTimeNowWithOverride()) ||
                  "#EventEditor_StartTime_BeforeNow")
            );
          }),
          (e.prototype.BIsValidEndTimeForEdit = function () {
            var e = this.GetEventEndTime();
            return (
              !e ||
              e <= 1 ||
              !(!this.BPublished() || e != this.GetOriginalEventEndTime()) ||
              (this.BIsBeginTimeBeforeEnd()
                ? !(
                    this.GetLatestEndTimeForEdit() &&
                    e > this.GetLatestEndTimeForEdit()
                  ) || "#EventEditor_StartTime_AfterLatestAllowed"
                : "#EventEditor_EndTime_ToEarly")
            );
          }),
          (e.prototype.GetName = function (e) {
            return void 0 === e && (e = 0), this.m_curModel.name.get(e);
          }),
          (e.prototype.GetDescription = function (e) {
            return void 0 === e && (e = 0), this.m_curModel.description.get(e);
          }),
          (e.prototype.BHasBroadcaster = function () {
            return null != this.m_curModel.broadcaster;
          }),
          (e.prototype.GetBroadcaster = function () {
            return this.m_curModel.broadcaster;
          }),
          (e.prototype.BHasLanguageTitle = function (e) {
            var t = this.m_curModel.name.get(e);
            return t && t.length > 1;
          }),
          (e.prototype.BHasLanguageDescription = function (e) {
            var t = this.m_curModel.description.get(e);
            return t && t.length > 1;
          }),
          (e.prototype.BHasLanguageSubTitle = function (e) {
            var t = this.m_curModel.GetSubTitle(e);
            return t && t.length > 1;
          }),
          (e.prototype.BHasLanguageSummary = function (e) {
            var t = this.m_curModel.GetSummary(e);
            return t && t.length > 1;
          }),
          (e.prototype.BHasLanguage = function (e) {
            return this.BHasLanguageTitle(e) || this.BHasLanguageDescription(e);
          }),
          (e.prototype.BHasLanguageRequired = function (e) {
            return this.BHasLanguageTitle(e) && this.BHasLanguageDescription(e);
          }),
          (e.prototype.BHasSubTitle = function (e) {
            return this.m_curModel.BHasSubTitle(e);
          }),
          (e.prototype.GetSubTitle = function (e) {
            return this.m_curModel.GetSubTitle(e);
          }),
          (e.prototype.GetSummary = function (e) {
            return this.m_curModel.GetSummary(e);
          }),
          (e.prototype.GetAppName = function () {
            return g.a
              .GetStoreCapsuleInfo(this.m_curModel.appid)
              .GetAppStoreData().title;
          }),
          (e.prototype.GetStoreItemID = function () {
            return g.a
              .GetStoreCapsuleInfo(this.m_curModel.appid)
              .GetAppStoreData().item_id;
          }),
          (e.prototype.GetCategoryAsString = function () {
            return this.m_curModel.GetCategoryAsString();
          }),
          (e.prototype.GetCategoryAsType = function () {
            return this.m_curModel.type;
          }),
          (e.prototype.GetCurEditLanguage = function () {
            return I.a.Get().GetCurEditLanguage();
          }),
          (e.prototype.BHidden = function () {
            return (
              this.m_curModel.visibility_state ==
                v.b.k_EEventStateUnpublished ||
              this.m_curModel.visibility_state == v.b.k_EEventStateStaged
            );
          }),
          (e.prototype.BPublished = function () {
            return (
              this.m_curModel.visibility_state == v.b.k_EEventStateStaged ||
              this.m_curModel.visibility_state == v.b.k_EEventStateVisible
            );
          }),
          (e.prototype.BVisible = function () {
            return this.m_curModel.visibility_state == v.b.k_EEventStateVisible;
          }),
          (e.prototype.GetVisibilityState = function () {
            return this.m_curModel.visibility_state;
          }),
          (e.prototype.GetEventModel = function () {
            return this.m_curModel;
          }),
          (e.prototype.BHasEmailEnabled = function () {
            return (
              this.m_curModel.jsondata.email_setting &&
              this.m_curModel.jsondata.email_setting.bEnable
            );
          }),
          (e.prototype.BHasSaleEnabled = function () {
            return this.m_curModel.jsondata.bSaleEnabled;
          }),
          (e.prototype.BHasScheduleEnabled = function () {
            return this.m_curModel.jsondata.bScheduleEnabled;
          }),
          (e.prototype.GetScheduleEntries = function () {
            return this.m_curModel.jsondata.bScheduleEnabled &&
              this.m_curModel.jsondata.scheduleEntries
              ? this.m_curModel.jsondata.scheduleEntries
              : [];
          }),
          (e.prototype.GetScheduleEntriesCount = function () {
            return this.m_curModel.jsondata.bScheduleEnabled &&
              this.m_curModel.jsondata.scheduleEntries
              ? this.m_curModel.jsondata.scheduleEntries.length
              : 0;
          }),
          (e.prototype.GetSaleSections = function () {
            return this.m_curModel.jsondata.sale_sections;
          }),
          (e.prototype.BHasLanguageRequiredOrFallback = function (e, t) {
            return (
              (this.BHasLanguageTitle(e) || this.BHasLanguageTitle(t)) &&
              (this.BHasLanguageDescription(e) ||
                this.BHasLanguageDescription(t))
            );
          }),
          (e.prototype.GetDynamicRevealSections = function () {
            var e = new Array();
            return (
              this.GetSaleSections().forEach(function (t) {
                t.dynamic_reveal && e.push(t);
              }),
              e
            );
          }),
          (e.prototype.GetTabSaleSection = function () {
            if (this.m_curModel.jsondata.sale_sections)
              return this.m_curModel.jsondata.sale_sections.find(function (e) {
                return "tabs" === e.section_type;
              });
          }),
          (e.prototype.GetSaleSectionIndexByID = function (e) {
            return this.m_curModel.jsondata.sale_sections
              ? this.m_curModel.jsondata.sale_sections.findIndex(function (t) {
                  return t.unique_id === e;
                })
              : -1;
          }),
          (e.prototype.GetSaleSectionByID = function (e) {
            if (this.m_curModel.jsondata.sale_sections)
              return this.m_curModel.jsondata.sale_sections.find(function (t) {
                return t.unique_id === e;
              });
          }),
          (e.prototype.BHasSaleSectionLabelLocalization = function (e, t) {
            var n = this.GetSaleSections()[t];
            return Boolean(E.a.Get(n.localized_label, e));
          }),
          (e.prototype.SetSaleSectionLabelLocalization = function (e, t, n) {
            var a = this.GetSaleSections()[t];
            return (
              E.a.Get(a.localized_label, e) != n &&
              ((a.localized_label = E.a.Set(a.localized_label || [], e, n)),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.SetSaleSectionType = function (e, t) {
            e.section_type !== t &&
              ((e.internal_section_data =
                "vo_internal" === t ? Object(l.a)({}, m.i) : null),
              (e.section_type = t),
              "items" == t &&
                void 0 === e.capsules_per_row_array &&
                ((e.capsules_per_row_array = [2, 3, 4, 3]),
                (e.carousel_rows = 2),
                (e.show_as_carousel = !0)));
          }),
          (e.prototype.BHasSaleSectionTextLocalization = function (e, t) {
            var n = this.GetSaleSections()[t];
            return Boolean(
              "text_section" === n.section_type &&
                n.text_section_contents &&
                n.text_section_contents.length > e &&
                n.text_section_contents[e]
            );
          }),
          (e.prototype.SetSaleSectionTextLocalization = function (e, t, n) {
            var a = this.GetSaleSections()[t];
            return (
              "text_section" === a.section_type &&
              E.a.Get(a.text_section_contents, e) != n &&
              ((a.text_section_contents = E.a.Set(
                a.text_section_contents || [],
                e,
                n
              )),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.BHasSaleSectionDescriptionBBCode = function (e, t) {
            var n = this.GetSaleSections()[t];
            return Boolean(
              n.localized_description &&
                n.localized_description.length > e &&
                n.localized_description[e]
            );
          }),
          (e.prototype.SetSaleSectionDescriptionBBCode = function (e, t, n) {
            var a = this.GetSaleSections()[t];
            return (
              E.a.Get(a.localized_description, e) != n &&
              ((a.localized_description = E.a.Set(
                a.localized_description || [],
                e,
                n
              )),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.BHasSaleSectionTabName = function (e, t) {
            return Boolean(t && E.a.Get(t.localized_label, e));
          }),
          (e.prototype.SetSaleSectionTabName = function (e, t, n) {
            return (
              E.a.Get(t.localized_label, e) != n &&
              ((t.localized_label = E.a.Set(t.localized_label || [], e, n)),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.BHasSaleSectionFacetName = function (e, t) {
            return Boolean(t && E.a.Get(t.name, e));
          }),
          (e.prototype.BHasSaleSectionFacetValueName = function (e, t) {
            return Boolean(t && E.a.Get(t.name, e));
          }),
          (e.prototype.BHasSaleSectionFacetValueSubtitle = function (e, t) {
            return Boolean(t && E.a.Get(t.subtitle, e));
          }),
          (e.prototype.SetSaleSectionFacetName = function (e, t, n) {
            return (
              E.a.Get(t.name, e) !== n &&
              ((t.name = E.a.Set(t.name || [], e, n)),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.SetSaleSectionFacetValueName = function (e, t, n) {
            return (
              E.a.Get(t.name, e) !== n &&
              ((t.name = E.a.Set(t.name || [], e, n)),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.SetSaleSectionFacetValueSubtitle = function (e, t, n) {
            return (
              E.a.Get(t.subtitle, e) !== n &&
              ((t.subtitle = E.a.Set(t.subtitle || [], e, n)),
              this.SetDirty(r.jsondata_sales),
              !0)
            );
          }),
          (e.prototype.GetVisibilityPublishingSetup = function () {
            return this.visibilitySetting;
          }),
          (e.prototype.BIsEmailVideoImageMissing = function () {
            return (
              this.BHasEmailEnabled() &&
              !this.m_curModel.jsondata.email_setting.sections[1].video_image &&
              Boolean(
                this.m_curModel.jsondata.email_setting.sections[1].video_link
              )
            );
          }),
          (e.prototype.GetFirstLanguageWithTitle = function () {
            for (var e = 0; e < 30; ++e)
              if (this.BHasLanguageTitle(e)) return e;
            return e;
          }),
          (e.prototype.BHasSpotlightArtwork = function () {
            return Boolean(
              this.m_curModel.jsondata.localized_spotlight_image &&
                this.m_curModel.jsondata.localized_spotlight_image[0]
            );
          }),
          (e.prototype.BHasSteamStoreSpotlight = function () {
            return Boolean(this.m_curModel.jsondata.store_spotlight);
          }),
          (e.prototype.BHasLibaryHomeSpotlight = function () {
            return Boolean(this.m_curModel.jsondata.library_home_spotlight);
          }),
          (e.prototype.SetSteamStoreSpotlight = function (e) {
            this.m_curModel.jsondata.store_spotlight != e &&
              ((this.m_curModel.jsondata.store_spotlight = e),
              this.SetDirty(r.visibility));
          }),
          (e.prototype.SetLibraryHomeSpotlight = function (e) {
            this.m_curModel.jsondata.library_home_spotlight != e &&
              ((this.m_curModel.jsondata.library_home_spotlight = e),
              this.SetDirty(r.visibility));
          }),
          (e.prototype.SetStartTimeEditChoice = function (e) {
            this.m_startTimeEditChoice != e &&
              ((this.m_startTimeEditChoice = e), this.SetDirty(r.visibility));
          }),
          (e.prototype.SetEndTimeEditChoice = function (e) {
            this.m_endTimeEditChoice != e &&
              ((this.m_endTimeEditChoice = e), this.SetDirty(r.visibility));
          }),
          (e.prototype.SetEndEditDurationType = function (e) {
            this.m_editDurationType != e &&
              ((this.m_editDurationType = e), this.SetDirty(r.visibility));
          }),
          (e.prototype.SetEndEditDurationValue = function (e) {
            this.m_editDurationValue != e &&
              ((this.m_editDurationValue = e), this.SetDirty(r.visibility));
          }),
          (e.prototype.UpdateVisibilityState = function (e, t) {
            this.m_curModel.visibility_state = e
              ? t
                ? v.b.k_EEventStateStaged
                : v.b.k_EEventStateVisible
              : v.b.k_EEventStateUnpublished;
          }),
          (e.prototype.SetVisibilityPublishingSetup = function (e) {
            e != this.visibilitySetting &&
              ((this.visibilitySetting = e), this.SetDirty(r.visibility));
          }),
          (e.prototype.SetGIDs = function (e, t, n) {
            (this.m_curModel.clanSteamID = e),
              Object(S.a)(
                this.m_curModel.clanSteamID &&
                  this.m_curModel.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " + e.ConvertTo64BitString()
              ),
              (this.m_curModel.GID = t),
              (this.m_curModel.AnnouncementGID = n);
          }),
          (e.prototype.SetVisibilityState = function (e) {
            this.m_curModel.visibility_state != e &&
              ((this.m_curModel.visibility_state = e),
              this.SetDirty(r.visibility));
          }),
          (e.prototype.SetName = function (e, t) {
            return (
              this.m_curModel.name.get(e) !== t &&
              (this.m_curModel.name.set(e, t), this.SetDirty(r.name), !0)
            );
          }),
          (e.prototype.SetDescription = function (e, t) {
            return (
              this.m_curModel.description.get(e) != t &&
              (this.m_curModel.description.set(e, t),
              this.SetDirty(r.description),
              !0)
            );
          }),
          (e.prototype.SetSubTitle = function (e, t) {
            return (
              this.m_curModel.jsondata.localized_subtitle[e] != t &&
              ((this.m_curModel.jsondata.localized_subtitle[e] = t),
              this.SetDirty(r.jsondata_other),
              !0)
            );
          }),
          (e.prototype.SetSummary = function (e, t) {
            return (
              this.m_curModel.jsondata.localized_summary[e] != t &&
              ((this.m_curModel.jsondata.localized_summary[e] = t),
              this.SetDirty(r.jsondata_other),
              !0)
            );
          }),
          (e.prototype.SetCurEditLanguage = function (e) {
            return I.a.Get().SetCurEditLanguage(e);
          }),
          (e.prototype.PrepareAsClone = function (e) {
            (this.m_curModel = e),
              (this.m_curModel.GID = void 0),
              (this.m_curModel.AnnouncementGID = void 0),
              (this.m_curModel.visibility_state = v.b.k_EEventStateUnpublished),
              (this.m_curModel.nCommentCount = 0),
              (this.m_curModel.nVotesDown = 0),
              (this.m_curModel.nVotesUp = 0),
              (this.m_curModel.forumTopicGID = void 0),
              (this.m_curModel.creator_steamid = void 0),
              (this.m_curModel.last_update_steamid = void 0),
              (this.m_curModel.rtime32_last_modified = 0),
              (this.m_curModel.rtime32_last_solr_search_col_updated = 0),
              (this.m_curModel.rtime32_moderator_reviewed = 0),
              (this.m_curModel.postTime = 0),
              (this.m_curModel.startTime = void 0),
              (this.m_curModel.endTime = void 0),
              (this.m_curModel.visibilityStartTime = void 0),
              (this.m_curModel.visibilityEndTime = void 0),
              this.DeriveTimeEditChoices(),
              this.DeriveVisibilitySetting(),
              this.EnsureCurrentLanguageValid(),
              this.m_curModel.timestamp_loc_updated.clear();
            for (var t = this.m_curModel.vecTags.length - 1; t >= 0; --t) {
              var n = this.m_curModel.vecTags[t];
              (n.startsWith("mod_") || n.startsWith("ModAct_")) &&
                this.m_curModel.vecTags.splice(t, 1);
            }
            (this.m_originalEvent = new v.c()),
              (this.m_originalEvent.loadedAllLanguages = !0),
              Object(m.v)(this.m_curModel.jsondata),
              this.SetDirty(
                r.description |
                  r.name |
                  r.time |
                  r.type |
                  r.jsondata_image |
                  r.jsondata_other |
                  r.jsondata_email
              );
          }),
          (e.prototype.setEventType = function (e) {
            this.m_curModel.type != e &&
              ((this.m_curModel.type = e), this.SetDirty(r.type));
          }),
          (e.prototype.SetAnnouncementGID = function (e) {
            this.m_curModel.AnnouncementGID = e;
          }),
          (e.prototype.SetEarliestAllowedStartTime = function (e) {
            this.earliestAllowedStartTime = e;
          }),
          (e.prototype.SetLatestAllowedEndTime = function (e) {
            this.latestAllowedEndTime = e;
          }),
          (e.prototype.SetEventStartTime = function (e) {
            var t = Math.abs(e - (e % 60));
            this.m_curModel.startTime != t &&
              ((this.m_curModel.startTime = t),
              t && this.SetStartTimeEditChoice(a.k_ESpecified),
              this.m_curModel.endTime < this.m_curModel.startTime &&
                (this.m_curModel.endTime = this.m_curModel.startTime + 3600),
              this.SetDirty(r.time));
          }),
          (e.prototype.SetEventEndTime = function (e) {
            var t = e - (e % 60);
            this.m_curModel.endTime != t &&
              ((this.m_curModel.endTime = t),
              t && this.SetEndTimeEditChoice(i.k_ESpecified),
              this.SetDirty(r.time));
          }),
          (e.prototype.SetSaleVanityID = function (e) {
            var t,
              n =
                null !== (t = e.replace(/[^\w-]/g, "")) && void 0 !== t
                  ? t
                  : "";
            this.m_curModel.jsondata.sale_vanity_id != n &&
              ((this.m_curModel.jsondata.sale_vanity_id = n),
              this.SetDirty(r.jsondata_sales));
          }),
          (e.prototype.SetVisibilityStartTime = function (e) {
            this.m_curModel.visibilityStartTime != e &&
              ((this.m_curModel.visibilityStartTime = e),
              this.SetDirty(r.visibility));
          }),
          (e.prototype.ResetSetVisibilityStartTime = function () {
            this.SetVisibilityStartTime(
              this.m_originalEvent.visibilityStartTime
            ),
              this.DeriveVisibilitySetting();
          }),
          (e.prototype.SetVisibilityEndTime = function (e) {
            this.m_curModel.visibilityEndTime != e &&
              ((this.m_curModel.visibilityEndTime = e),
              this.SetDirty(r.visibility));
          }),
          (e.prototype.SetActionEndTime = function (e) {
            (this.m_curModel.jsondata.action_end_time = e),
              this.SetDirty(r.jsondata_other);
          }),
          (e.prototype.BIsDirty = function () {
            return this.m_bChanged;
          }),
          (e.prototype.ClearDirty = function () {
            (this.m_bChanged = !1), (this.m_changes = r.None);
          }),
          (e.prototype.SetDirty = function (e) {
            this.m_bChanged || e == r.None || (this.m_bChanged = !0),
              (this.m_changes & e) != e && (this.m_changes |= e),
              (this.m_curModel.rtime32_last_local_modification =
                Date.now() / 1e3);
          }),
          (e.prototype.GetChangeTypes = function () {
            return this.m_changes;
          }),
          (e.prototype.BIsDirtyType = function (e) {
            return Boolean(this.m_changes & e);
          }),
          (e.prototype.DeriveTimeEditChoices = function () {
            var e = this.ComputeDurationSetting(),
              t = null != e;
            null == e && (e = this.ComputeDefaultDuration()),
              this.SetEndEditDurationType(e.durationType),
              this.SetEndEditDurationValue(e.value),
              !this.BPublished() &&
                this.GetEventStartTime() < b.a.GetTimeNowWithOverride() &&
                this.SetEventStartTime(0);
            var n =
                !this.GetEventStartTime() || this.GetEventStartTime() <= 1
                  ? a.k_ENow
                  : a.k_ESpecified,
              r =
                !this.GetEventEndTime() || this.GetEventEndTime() <= 1 || t
                  ? i.k_EDuration
                  : i.k_ESpecified;
            this.SetStartTimeEditChoice(n), this.SetEndTimeEditChoice(r);
          }),
          (e.prototype.DeriveVisibilitySetting = function () {
            if (this.BHidden()) {
              var e = this.m_curModel.startTime,
                t = this.m_curModel.visibilityStartTime;
              (this.visibilitySetting = D.specified_time),
                !t || t <= 1
                  ? (this.visibilitySetting = D.immediate)
                  : t == e && (this.visibilitySetting = D.event_start);
            }
          }),
          (e.CalculateEndTimeFromStartAndDuration = function (e, t, n) {
            return t == o.k_EWeek
              ? e + 604800 * n
              : t == o.k_EDay
              ? e + 86400 * n
              : e + 3600 * n;
          }),
          (e.prototype.RemoveNullCapsules = function () {
            for (var e = 0, t = this.GetSaleSections(); e < t.length; e++) {
              var n = t[e];
              n.capsules &&
                n.capsules.some(function (e) {
                  return !Boolean(e);
                }) &&
                (n.capsules = n.capsules.filter(function (e) {
                  return Boolean(e);
                }));
            }
          }),
          (e.prototype.OnPreSave = function () {
            this.RemoveNullCapsules(),
              this.PreSaveEventTimeAssignment(),
              this.FixupTabVisibilitySettings(),
              Object(j.u)(this);
          }),
          (e.prototype.FixupTabVisibilitySettings = function () {
            for (
              var e = null, t = 0, n = this.GetSaleSections();
              t < n.length;
              t++
            ) {
              var a = n[t];
              a.show_on_tabs &&
                ((a.show_on_tabs = a.show_on_tabs.filter(function (t) {
                  return (
                    e &&
                    e.tabs.some(function (e) {
                      return t === e.unique_id;
                    })
                  );
                })),
                0 === a.show_on_tabs.length && (a.show_on_tabs = void 0)),
                "tabs" === a.section_type &&
                  a.tabs &&
                  a.tabs.length > 0 &&
                  (e = a);
            }
          }),
          (e.prototype.PreSaveEventTimeAssignment = function () {
            var e = b.a.GetTimeNowWithOverride();
            if (
              ((e -= e % 60),
              this.SetEventStartTime(this.ComputeStartTime(e)),
              Object(y.b)(this.m_curModel.type))
            ) {
              var t = this.GetEventStartTime();
              this.m_endTimeEditChoice == i.k_EDuration &&
                (this.m_curModel.endTime =
                  1 + this.InternalComputeDurationRoundedEndTime(t));
            }
            if (
              (null == this.GetEventEndTime() && this.SetEventEndTime(0),
              this.BHidden())
            ) {
              var n = this.ComputeVisibilityStartTime(
                e,
                this.m_curModel.startTime
              );
              this.SetVisibilityStartTime(n);
            }
          }),
          (e.prototype.ComputeStartTime = function (e) {
            return this.m_startTimeEditChoice == a.k_ENow ||
              null == this.GetEventStartTime() ||
              0 == this.GetEventStartTime()
              ? e
              : this.GetEventStartTime();
          }),
          (e.prototype.ComputeVisibilityStartTime = function (e, t) {
            switch (this.visibilitySetting) {
              default:
                return (
                  console.error("Unexpected: " + this.visibilitySetting), 0
                );
              case D.immediate:
                return 0;
              case D.event_start:
                return t <= 1 ? e : t;
              case D.specified_time:
                return this.m_curModel.visibilityStartTime < e
                  ? e
                  : this.m_curModel.visibilityStartTime;
            }
          }),
          (e.prototype.GetVisibilitySetting = function () {
            return this.visibilitySetting;
          }),
          (e.prototype.Refresh = function (e) {
            this.m_curModel.GID == e.GID &&
              ((this.m_originalEvent = e),
              (this.m_curModel = e.clone(!0)),
              this.DeriveTimeEditChoices(),
              this.DeriveVisibilitySetting(),
              this.EnsureCurrentLanguageValid(),
              this.ClearDirty(),
              this.MigrateForEdit());
          }),
          (e.prototype.BIsBeginTimeBeforeEnd = function () {
            var e = b.a.GetTimeNowWithOverride(),
              t = this.ComputeStartTime(e);
            return (
              !this.m_curModel.endTime ||
              0 == this.m_curModel.endTime ||
              this.m_curModel.endTime >= t
            );
          }),
          (e.prototype.BIsValidVisibilityStartTime = function () {
            var e = b.a.GetTimeNowWithOverride();
            return (
              !!(
                this.visibilitySetting != D.specified_time ||
                !this.m_curModel.visibilityStartTime ||
                0 == this.m_curModel.visibilityStartTime ||
                this.m_curModel.startTime < e ||
                (e < this.m_curModel.visibilityStartTime &&
                  this.m_curModel.visibilityStartTime <=
                    this.m_curModel.startTime)
              ) || "#EventEditor_Publish_InvalidPublishDate"
            );
          }),
          (e.prototype.GetEarliestStartTimeForEdit = function () {
            return this.earliestAllowedStartTime;
          }),
          (e.prototype.GetLatestEndTimeForEdit = function () {
            return this.latestAllowedEndTime;
          }),
          (e.prototype.GetEarliestEndTimeForEdit = function () {
            return this.m_curModel.startTime && 0 != this.m_curModel.startTime
              ? this.m_curModel.startTime
              : b.a.GetTimeNowWithOverride();
          }),
          (e.prototype.GetEarliestVisibilityStartTimeForEdit = function () {
            return Math.min(
              this.GetEarliestEndTimeForEdit(),
              b.a.GetTimeNowWithOverride()
            );
          }),
          (e.prototype.ConstructJSONData = function () {
            return this.m_curModel.jsondata
              ? JSON.stringify(this.m_curModel.jsondata)
              : "";
          }),
          (e.prototype.SetImageURL = function (e, t, n) {
            void 0 === n && (n = 0);
            var a = t ? h.a.GetExtensionString(t) : null,
              i = t ? t.image_hash + a : null,
              o = this.m_curModel.jsondata;
            if ("background" === e && o.localized_title_image[n] !== i)
              (o.localized_title_image[n] = i), this.SetDirty(r.jsondata_image);
            else if ("capsule" === e && o.localized_capsule_image[n] !== i)
              (o.localized_capsule_image[n] = i),
                this.SetDirty(r.jsondata_image);
            else if ("spotlight" === e && o.localized_spotlight_image[n] !== i)
              (o.localized_spotlight_image[n] = i),
                this.GetImageURL("spotlight", 0) || (o.library_spotlight = !1),
                this.SetDirty(r.jsondata_image);
            else if (
              "broadcast_left" === e &&
              o.localized_broadcast_left_image[n] !== i
            )
              (o.localized_broadcast_left_image[n] = i),
                this.SetDirty(r.jsondata_image);
            else if (
              "broadcast_right" === e &&
              o.localized_broadcast_right_image[n] !== i
            )
              (o.localized_broadcast_right_image[n] = i),
                this.SetDirty(r.jsondata_image);
            else if ("sale_header" === e) {
              var l = void 0;
              if (void 0 !== o.sale_num_headers) {
                var s = Math.min(
                  o.sale_num_headers,
                  this.m_curModel.GetDayIndexFromEventStart()
                );
                l = o.localized_per_day_sales_header[s];
              } else l = o.localized_sale_header;
              l[n] !== i && ((l[n] = i), this.SetDirty(r.jsondata_image));
            } else
              "sale_overlay" === e && o.localized_sale_overlay[n] !== i
                ? ((o.localized_sale_overlay[n] = i),
                  this.SetDirty(r.jsondata_image))
                : "product_banner" === e &&
                  E.a.Get(o.localized_sale_product_banner, n) !== i
                ? ((o.localized_sale_product_banner = E.a.Set(
                    o.localized_sale_product_banner || [],
                    n,
                    i
                  )),
                  this.SetDirty(r.jsondata_image))
                : "product_mobile_banner" === e &&
                  E.a.Get(o.localized_sale_product_mobile_banner, n) !== i
                ? ((o.localized_sale_product_mobile_banner = E.a.Set(
                    o.localized_sale_product_mobile_banner || [],
                    n,
                    i
                  )),
                  this.SetDirty(r.jsondata_image))
                : "link_capsule" === e ||
                  "product_banner_override" === e ||
                  "product_mobile_banner_override" === e ||
                  "sale_section_title" === e ||
                  "schedule_track_art" === e
                ? (i &&
                    0 == h.d.GetAllLocalizedGroupImages().length &&
                    h.d.SetPrimaryImageForImageGroup(t, e),
                  h.d.SetLocalizedImageGroupAtLang(n, this.GetClanSteamID(), i))
                : "localized_image_group" === e &&
                  console.error(
                    "Attempting to save localized image via editor model, not supported, it belong to the store itself"
                  );
          }),
          (e.prototype.GetImageURL = function (e, t, n) {
            return (
              void 0 === t && (t = 0),
              void 0 === n && (n = h.c.full),
              this.m_curModel.GetImageURL(e, t, n)
            );
          }),
          (e.prototype.GetImageURLWithFallback = function (e, t, n) {
            return (
              void 0 === n && (n = h.c.full),
              this.m_curModel.GetImageURLWithFallback(e, t, n)
            );
          }),
          (e.prototype.GetImageHash = function (e, t) {
            return this.m_curModel.GetImageHash(e, t);
          }),
          (e.prototype.BHasImage = function (e, t) {
            return this.m_curModel.BHasImage(e, t);
          }),
          (e.prototype.BHasTitleImage = function (e) {
            return void 0 !== this.m_curModel.GetImageURL("background", e);
          }),
          (e.prototype.BIsImageSafeForAllAges = function (e, t) {
            return this.m_curModel.BIsImageSafeForAllAges(e, t);
          }),
          (e.prototype.GetTitleImageLanguages = function () {
            var e = new Array();
            if (
              this.m_curModel.jsondata &&
              this.m_curModel.jsondata.localized_title_image
            )
              for (var t in this.m_curModel.jsondata.localized_title_image)
                e.push(Number.parseInt(t));
            return e;
          }),
          (e.prototype.BHasSomeImage = function (e) {
            return this.m_curModel.BHasSomeImage(e);
          }),
          (e.prototype.GetWhenEventWillBeVisibleToPublic = function () {
            return this.GetEventVisibilityStartTime() &&
              0 != this.GetEventVisibilityStartTime()
              ? this.GetEventVisibilityStartTime()
              : this.GetEventStartTime();
          }),
          (e.prototype.ComputeDurationSetting = function () {
            if (
              !this.m_curModel.endTime ||
              !this.m_curModel.startTime ||
              this.m_curModel.endTime <= 1 ||
              0 == (1 & this.m_curModel.endTime)
            )
              return null;
            var e = 86400,
              t = 604800,
              n = this.m_curModel.endTime - this.m_curModel.startTime - 1;
            return n % t == 0
              ? {
                  durationType: o.k_EWeek,
                  value: Math.floor(Math.max(1, n / t)),
                }
              : n % e == 0
              ? {
                  durationType: o.k_EDay,
                  value: Math.floor(Math.max(1, n / e)),
                }
              : {
                  durationType: o.k_EHour,
                  value: Math.floor(Math.max(1, n / 3600)),
                };
          }),
          (e.prototype.ComputeDefaultDuration = function () {
            return { durationType: o.k_EHour, value: 1 };
          }),
          (e.prototype.ComputeDurationBasedRoundedEndTime = function () {
            if (this.m_endTimeEditChoice == i.k_EDuration) {
              var e = this.m_curModel.startTime;
              if (
                this.m_startTimeEditChoice != a.k_ESpecified ||
                (e && !(e <= 1))
              )
                return (
                  this.m_startTimeEditChoice == a.k_ENow &&
                    (e = b.a.GetTimeNowWithOverride()),
                  this.InternalComputeDurationRoundedEndTime(e)
                );
            }
          }),
          (e.prototype.InternalComputeDurationRoundedEndTime = function (t) {
            var n =
              e.CalculateEndTimeFromStartAndDuration(
                t,
                this.m_editDurationType,
                this.m_editDurationValue
              ) / 60;
            return 60 * (n + (30 - (n % 30)));
          }),
          (e.prototype.GetFallbackLanguageIfNeeded = function () {
            var e = this.GetCurEditLanguage(),
              t = E.b.GetELanguageFallback(e);
            if (e != t) {
              var n = this.GetDescription(e);
              if (!n || 0 == n.length) return t;
            }
          }),
          (e.prototype.LastTimeLanguageUpdate = function (e) {
            return this.m_curModel.timestamp_loc_updated.has(e)
              ? this.m_curModel.timestamp_loc_updated.get(e)
              : 0;
          }),
          (e.prototype.ComputeEditingModelTimeOverrides = function () {
            var e = this.GetEventModel().GetStartTimeAndDateUnixSeconds(),
              t = this.GetEventModel().GetEndTimeAndDateUnixSeconds(),
              n = b.a.GetTimeNowWithOverride();
            e = this.ComputeStartTime(n);
            var a = this.ComputeDurationBasedRoundedEndTime();
            return (
              null != a && (t = a),
              { nOverrideEndTime: t, nOverrideStartTime: e }
            );
          }),
          (e.prototype.GetStrVanityOrAppID = function () {
            return T.b.VANITY_ID;
          }),
          (e.prototype.SetLibrarySpotlight = function (e) {
            this.m_curModel.jsondata.library_spotlight !== e &&
              ((this.m_curModel.jsondata.library_spotlight = e),
              this.SetDirty(r.jsondata_other));
          }),
          (e.prototype.SetLibrarySpotlightText = function (e) {
            this.m_curModel.jsondata.library_spotlight_text !== e &&
              ((this.m_curModel.jsondata.library_spotlight_text = e),
              this.SetDirty(r.jsondata_other));
          }),
          (e.prototype.GetEmailSettings = function () {
            return this.m_curModel.jsondata.email_setting;
          }),
          (e.prototype.BIsEmailEnabled = function () {
            return (
              this.m_curModel.jsondata.email_setting &&
              this.m_curModel.jsondata.email_setting.bEnable
            );
          }),
          (e.prototype.BIsEmailEditable = function () {
            return (
              this.BIsEmailEnabled() &&
              !this.m_curModel.jsondata.email_setting.locked
            );
          }),
          (e.prototype.CreateOrGetEmailSettings = function (e) {
            return (
              this.m_curModel.jsondata.email_setting ||
                (T.b.IS_VALVE_GROUP
                  ? (this.m_curModel.jsondata.email_setting = {
                      bEnable: !1,
                      sections: [
                        {
                          localized_headline: new Array(30),
                          localized_body: new Array(30),
                          localized_image: new Array(30),
                          button_destination: p.c.k_EEventPage,
                          button_loc_token:
                            "EventEmail_Button_ClickForMoreDetails",
                          video_link: "",
                        },
                      ],
                      internal_targeting: Object(l.a)({}, C.c),
                    })
                  : (this.m_curModel.jsondata.email_setting = {
                      bEnable: !1,
                      subject_loc_token: "EventEmail_Subject_NewUpdate",
                      sections: [
                        {
                          localized_headline: new Array(30),
                          localized_image: new Array(30),
                        },
                        {
                          localized_headline: new Array(30),
                          localized_body: new Array(30),
                          button_destination: p.c.k_EEventPage,
                          button_loc_token:
                            "EventEmail_Button_ClickForMoreDetails",
                          video_link: "",
                        },
                      ],
                    }),
                this.SetDirty(r.jsondata_email)),
              this.m_curModel.jsondata.email_setting
            );
          }),
          (e.prototype.ToggleTag = function (e) {
            var t = this.m_curModel.vecTags.indexOf(e);
            -1 == t
              ? this.m_curModel.vecTags.push(e)
              : this.m_curModel.vecTags.splice(t, 1),
              this.SetDirty(r.visibility);
          }),
          (e.prototype.AddTag = function (e) {
            -1 == this.m_curModel.vecTags.indexOf(e) &&
              this.m_curModel.vecTags.push(e),
              this.SetDirty(r.visibility);
          }),
          (e.prototype.BHasTag = function (e) {
            return this.m_curModel.BHasTag(e);
          }),
          (e.prototype.GetAllTags = function () {
            return this.m_curModel.vecTags;
          }),
          (e.prototype.ClearTags = function (e) {
            var t = this;
            e.forEach(function (e) {
              var n = t.m_curModel.vecTags.indexOf(e);
              -1 != n && t.m_curModel.vecTags.splice(n, 1);
            });
          }),
          (e.prototype.SetSteamAwardCategory = function (e) {
            (this.m_curModel.jsondata.steam_award_category_suggestion = e),
              this.SetDirty(r.jsondata_other);
          }),
          (e.prototype.GetSteamAwardCategory = function () {
            return this.m_curModel.GetSteamAwardCategory();
          }),
          (e.prototype.SetSteamAwardNomineeVoteIDs = function (e) {
            (this.m_curModel.jsondata.steam_award_category_voteids = e),
              this.SetDirty(r.jsondata_other);
          }),
          (e.prototype.GetSteamAwareNomineeVoteIDs = function () {
            return this.m_curModel.GetSteamAwardNomineeCategories();
          }),
          (e.prototype.BIsAppReleased = function () {
            var e = g.a
              .GetStoreCapsuleInfo(this.m_curModel.appid)
              .GetAppStoreData();
            return e && 1 == e.success && !e.coming_soon;
          }),
          (e.prototype.GetAppReleaseDate = function () {
            var e = g.a
              .GetStoreCapsuleInfo(this.m_curModel.appid)
              .GetAppStoreData();
            return e && 1 == e.success && !e.coming_soon && e.rt_release_date
              ? e.rt_release_date
              : null;
          }),
          (e.prototype.BDoesSupportLanguage = function (e) {
            if (this.m_curModel && this.m_curModel.appid) {
              var t = g.a
                .GetStoreCapsuleInfo(this.m_curModel.appid)
                .GetAppStoreData();
              if (t && 1 == t.success && t.languages) {
                29 === e && (e = 6);
                var n = Object(u.a)(e);
                return Boolean(
                  t.languages.find(function (e) {
                    return n === e.language;
                  })
                );
              }
            }
            return !1;
          }),
          (e.prototype.BIsVisibleBeforeStart = function () {
            var e = this.m_curModel.startTime;
            return (
              this.m_startTimeEditChoice == a.k_ESpecified &&
              ((this.visibilitySetting == D.immediate &&
                e > b.a.GetTimeNowWithOverride()) ||
                (this.visibilitySetting == D.specified_time &&
                  this.m_curModel.visibilityStartTime < e))
            );
          }),
          (e.prototype.BIsAllowedOnLibraryOverview = function () {
            return Object(m.b)(this.GetEventModel());
          }),
          (e.prototype.BIsAllowedOnLibraryDetail = function () {
            return Object(m.a)(this.GetEventModel());
          }),
          (e.prototype.BIsAllowedOnStore = function () {
            return Object(m.c)(this.GetEventModel());
          }),
          (e.prototype.BIsAllowedInNotifications = function () {
            return Object(m.d)(this.GetEventModel());
          }),
          (e.prototype.BWillShowOnLibraryOverviewDueToSettings = function () {
            return (
              this.BIsAllowedOnLibraryOverview() &&
              !this.BHasTag("hide_library_overview") &&
              !this.BHasTag("mod_hide_library_overview")
            );
          }),
          (e.prototype.BWillShowOnLibraryDetailDueToSettings = function () {
            return (
              this.BIsAllowedOnLibraryDetail() &&
              !this.BHasTag("hide_library_detail") &&
              !this.BHasTag("mod_hide_library_detail")
            );
          }),
          (e.prototype.BWillShowOnStoreDueToSettings = function () {
            return (
              this.BIsAllowedOnStore() &&
              !this.BHasTag("hide_store") &&
              !this.BHasTag("mod_hide_store")
            );
          }),
          (e.prototype.BWillShowInNotificationsDueToSettings = function () {
            return this.BIsAllowedInNotifications();
          }),
          (e.prototype.GetNumberOfDays = function () {
            var e = this.m_curModel.startTime,
              t = this.m_curModel.endTime;
            return e > 0 && t > 0 && t > e ? Math.floor((t - e) / 86400) : 0;
          }),
          (e.prototype.GetNumSalesBackgroundHeader = function () {
            return void 0 !== this.m_curModel.jsondata.sale_num_headers
              ? this.m_curModel.jsondata.sale_num_headers
              : 1;
          }),
          (e.prototype.SetNumSalesBackgroundHeader = function (e) {
            var t = this;
            void 0 !== e && e <= 1 && (e = void 0),
              this.m_curModel.jsondata.sale_num_headers !== e &&
                (void 0 === this.m_curModel.jsondata.sale_num_headers &&
                  this.m_curModel.jsondata.localized_sale_header.forEach(
                    function (e, n) {
                      return (t.m_curModel.jsondata.localized_sale_header[
                        n
                      ] = null);
                    }
                  ),
                (this.m_curModel.jsondata.sale_num_headers = e),
                void 0 !== e &&
                  ((this.m_curModel.jsondata.localized_per_day_sales_header = void 0),
                  s.c.HelperInitializeNumSalesHeaderArray(this.m_curModel)),
                this.SetDirty(r.jsondata_sales));
          }),
          (e.prototype.MarkUpdateSuccessful = function (e, t) {
            (this.m_originalEvent.last_update_steamid = t),
              (this.m_originalEvent.rtime32_last_modified = e);
          }),
          (e.prototype.GetSaleSectionCount = function () {
            return this.m_curModel.jsondata.bSaleEnabled &&
              this.m_curModel.jsondata.sale_sections
              ? this.m_curModel.jsondata.sale_sections.length
              : 0;
          }),
          (e.prototype.GetAllSalePageFeaturedItems = function (e) {
            var t = new Set();
            if (!this.m_curModel.jsondata.bSaleEnabled) return t;
            var n = "bundles" == e,
              a = "packages" == e,
              i = function (e) {
                (n && "bundle" == e.type) || (a && "sub" == e.type)
                  ? t.add(e.id)
                  : a ||
                    n ||
                    "bundle" == e.type ||
                    "sub" == e.type ||
                    t.add(e.id);
              };
            this.m_curModel.jsondata.sale_sections.forEach(function (e) {
              return e.capsules.forEach(i);
            });
            var r = this.GetTabSaleSection();
            return (
              r &&
                r.tabs.forEach(function (e) {
                  return e.capsules.forEach(i);
                }),
              t
            );
          }),
          (e.prototype.GenerateSaleSectionUniqueID = function () {
            for (
              var e = Math.floor(1e4 + 9e4 * Math.random());
              this.GetSaleSectionByID(e);

            )
              e = Math.floor(1e4 + 9e4 * Math.random());
            return e;
          }),
          (e.prototype.GetFacetByID = function (e, t) {
            var n;
            return null === (n = null == e ? void 0 : e.facets) || void 0 === n
              ? void 0
              : n.find(function (e) {
                  return e.unique_id === t;
                });
          }),
          (e.prototype.GetFacetValueByID = function (e, t) {
            var n;
            return null === (n = null == e ? void 0 : e.facetValues) ||
              void 0 === n
              ? void 0
              : n.find(function (e) {
                  return e.unique_id === t;
                });
          }),
          (e.prototype.GenerateFacetUniqueID = function (e) {
            for (
              var t = Math.floor(1 + 1e5 * Math.random());
              this.GetFacetByID(e, t);

            )
              t = Math.floor(1 + 1e5 * Math.random());
            return t;
          }),
          (e.prototype.GenerateFacetValueUniqueID = function (e) {
            for (
              var t = Math.floor(1 + 1e5 * Math.random());
              this.GetFacetValueByID(e, t);

            )
              t = Math.floor(1 + 1e5 * Math.random());
            return t;
          }),
          (e.prototype.GetReferencedAppIDArray = function () {
            return this.m_curModel.jsondata.referenced_appids;
          }),
          (e.prototype.BIsEventForOGGWithoutVisibleStorePage = function () {
            if (!this.m_curModel.BIsOGGEvent()) return !1;
            var e = f.a.GetOGGClanInfo(this.m_curModel.appid);
            return !e || !e.has_visible_store_page;
          }),
          (e.prototype.BOptedInForOGGWithoutVisibleStorePage = function () {
            return this.m_curModel.jsondata.bInvisibleGameOptIn;
          }),
          (e.prototype.SetOptedInForOGGWithoutVisibleStorePage = function (e) {
            (this.m_curModel.jsondata.bInvisibleGameOptIn = e),
              this.SetDirty(r.jsondata_other);
          }),
          (e.prototype.SetMigrated = function (e) {
            this.m_curModel.jsondata.rt_migrated_time = e;
          }),
          (e.prototype.MigrateForEdit = function () {
            var e = this;
            this.m_curModel.jsondata.bSaleEnabled &&
              this.m_curModel.jsondata.sale_sections &&
              this.m_curModel.jsondata.sale_sections.forEach(function (t, n) {
                if (!t.unique_id) {
                  for (var a = n + 1; e.GetSaleSectionByID(a); ) a++;
                  e.m_curModel.jsondata.sale_sections[n].unique_id = a;
                }
                t.enable_faceted_browsing &&
                  t.facets.forEach(function (a, i) {
                    if (!a.unique_id) {
                      for (var r = i + 1; e.GetFacetByID(t, r); ) r++;
                      e.m_curModel.jsondata.sale_sections[n].facets[
                        i
                      ].unique_id = r;
                    }
                    a.facetValues.forEach(function (t, r) {
                      if (!t.unique_id) {
                        for (var o = i + 1; e.GetFacetValueByID(a, o); ) o++;
                        e.m_curModel.jsondata.sale_sections[n].facets[
                          i
                        ].facetValues[r].unique_id = o;
                      }
                    });
                  });
              });
          }),
          (e.prototype.BHasSaleProductBanners = function () {
            return this.GetEventModel().BHasSaleProductBanners();
          }),
          Object(l.c)([c.C], e.prototype, "m_curModel", void 0),
          Object(l.c)([c.C], e.prototype, "m_bChanged", void 0),
          Object(l.c)([c.C], e.prototype, "m_changes", void 0),
          Object(l.c)([c.C], e.prototype, "visibilitySetting", void 0),
          Object(l.c)([c.C], e.prototype, "m_startTimeEditChoice", void 0),
          Object(l.c)([c.C], e.prototype, "m_endTimeEditChoice", void 0),
          Object(l.c)([c.C], e.prototype, "m_editDurationType", void 0),
          Object(l.c)([c.C], e.prototype, "m_editDurationValue", void 0),
          Object(l.c)([O.a], e.prototype, "GetEventStartTime", null),
          Object(l.c)([O.a], e.prototype, "GetEventEndTime", null),
          Object(l.c)([O.a], e.prototype, "GetEventVisibilityStartTime", null),
          Object(l.c)([O.a], e.prototype, "GetEventVisibilityEndTime", null),
          Object(l.c)([O.a], e.prototype, "GetOriginalEventStartTime", null),
          Object(l.c)([O.a], e.prototype, "GetOriginalEventEndTime", null),
          Object(l.c)([O.a], e.prototype, "BIsValidStartTimeForEdit", null),
          Object(l.c)([O.a], e.prototype, "BIsValidEndTimeForEdit", null),
          Object(l.c)([O.a], e.prototype, "BHasLanguage", null),
          Object(l.c)([c.k], e.prototype, "SetSteamStoreSpotlight", null),
          Object(l.c)([c.k], e.prototype, "SetLibraryHomeSpotlight", null),
          Object(l.c)([c.k], e.prototype, "UpdateVisibilityState", null),
          Object(l.c)([c.k], e.prototype, "SetVisibilityPublishingSetup", null),
          Object(l.c)([c.k], e.prototype, "SetGIDs", null),
          Object(l.c)([c.k], e.prototype, "SetVisibilityState", null),
          Object(l.c)([c.k], e.prototype, "SetName", null),
          Object(l.c)([c.k], e.prototype, "SetDescription", null),
          Object(l.c)([c.k], e.prototype, "SetSubTitle", null),
          Object(l.c)([c.k], e.prototype, "SetSummary", null),
          Object(l.c)([c.k], e.prototype, "PrepareAsClone", null),
          Object(l.c)([c.k], e.prototype, "setEventType", null),
          Object(l.c)(
            [c.k.bound],
            e.prototype,
            "SetEarliestAllowedStartTime",
            null
          ),
          Object(l.c)(
            [c.k.bound],
            e.prototype,
            "SetLatestAllowedEndTime",
            null
          ),
          Object(l.c)([c.k.bound], e.prototype, "SetEventStartTime", null),
          Object(l.c)([c.k.bound], e.prototype, "SetEventEndTime", null),
          Object(l.c)([c.k.bound], e.prototype, "SetSaleVanityID", null),
          Object(l.c)([c.k.bound], e.prototype, "SetVisibilityStartTime", null),
          Object(l.c)([c.k], e.prototype, "ResetSetVisibilityStartTime", null),
          Object(l.c)([c.k.bound], e.prototype, "SetVisibilityEndTime", null),
          Object(l.c)([c.k.bound], e.prototype, "SetActionEndTime", null),
          Object(l.c)([c.k], e.prototype, "ClearDirty", null),
          Object(l.c)([c.k], e.prototype, "SetDirty", null),
          Object(l.c)([c.k], e.prototype, "DeriveTimeEditChoices", null),
          Object(l.c)([c.k], e.prototype, "DeriveVisibilitySetting", null),
          Object(l.c)([c.k], e.prototype, "OnPreSave", null),
          Object(l.c)([c.k], e.prototype, "Refresh", null),
          Object(l.c)([O.a], e.prototype, "BIsBeginTimeBeforeEnd", null),
          Object(l.c)([O.a], e.prototype, "BIsValidVisibilityStartTime", null),
          Object(l.c)([O.a], e.prototype, "GetEarliestStartTimeForEdit", null),
          Object(l.c)([O.a], e.prototype, "GetLatestEndTimeForEdit", null),
          Object(l.c)([O.a], e.prototype, "GetEarliestEndTimeForEdit", null),
          Object(l.c)(
            [O.a],
            e.prototype,
            "GetEarliestVisibilityStartTimeForEdit",
            null
          ),
          Object(l.c)([c.k.bound], e.prototype, "SetImageURL", null),
          Object(l.c)([O.a], e.prototype, "BHasTitleImage", null),
          Object(l.c)([O.a], e.prototype, "LastTimeLanguageUpdate", null),
          Object(l.c)([c.k], e.prototype, "SetLibrarySpotlight", null),
          Object(l.c)([c.k], e.prototype, "SetLibrarySpotlightText", null),
          Object(l.c)([c.k], e.prototype, "ToggleTag", null),
          Object(l.c)([c.k], e.prototype, "AddTag", null),
          Object(l.c)([c.k], e.prototype, "ClearTags", null),
          Object(l.c)([c.k], e.prototype, "SetSteamAwardCategory", null),
          Object(l.c)([c.k], e.prototype, "SetSteamAwardNomineeVoteIDs", null),
          Object(l.c)([O.a], e.prototype, "BDoesSupportLanguage", null),
          Object(l.c)([c.k], e.prototype, "SetNumSalesBackgroundHeader", null),
          Object(l.c)([c.k], e, "SetSaleSectionType", null),
          e
        );
      })();
    },
    gBDv: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return h;
      }),
        n.d(t, "c", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "a", function () {
          return v;
        });
      var a = n("mrSG"),
        i = n("opsS"),
        r = n("vDqi"),
        o = n.n(r),
        l = n("q1tI"),
        s = n("kLLr"),
        c = n("XxJJ"),
        u = n("qiKp"),
        d = n("OS6B"),
        p = n("lkRc"),
        m = n("r64O"),
        _ = "new_event_gid",
        g = (function () {
          function e() {
            (this.m_mapOriginalJSON = new Map()),
              (this.m_mapPrivateData = new Map()),
              (this.m_mapPrivateDataCallback = new Map()),
              (this.m_inflightRequests = new Map()),
              (this.m_gidDirty = null),
              (this.m_clanAccountIDDirty = null);
          }
          return (
            (e.prototype.GetPrivateData = function (e, t) {
              var n = this.HandleNewEventGID(t);
              return this.m_mapPrivateData.get(n) || { jsonData: {} };
            }),
            (e.prototype.GetPrivateDataCopy = function (e, t) {
              var n = this.HandleNewEventGID(t);
              return JSON.parse(JSON.stringify(this.GetPrivateData(e, n)));
            }),
            (e.prototype.GetPrivateDataChangeCallback = function (e, t) {
              var n = this.HandleNewEventGID(t);
              return (
                this.m_mapPrivateDataCallback.has(n) ||
                  this.m_mapPrivateDataCallback.set(n, new u.a()),
                this.m_mapPrivateDataCallback.get(n)
              );
            }),
            (e.prototype.UpdatePrivateData = function (e, t, n) {
              var i = this.HandleNewEventGID(t),
                r = this.GetPrivateData(e, i);
              if (!this.BIsEqual(r.jsonData, n)) {
                if (null != this.m_gidDirty && i != this.m_gidDirty) {
                  var o = this.m_mapPrivateData.get(this.m_gidDirty),
                    l = this.m_mapOriginalJSON.get(this.m_gidDirty),
                    s = Object(a.a)(Object(a.a)({}, o), { jsonData: l });
                  this.m_mapPrivateData.set(this.m_gidDirty, s),
                    this.DispatchUpdate(
                      this.m_clanAccountIDDirty,
                      this.m_gidDirty
                    );
                }
                (r.jsonData = n),
                  (this.m_gidDirty = i),
                  (this.m_clanAccountIDDirty = e),
                  this.DispatchUpdate(e, i);
              }
            }),
            (e.prototype.BIsEqual = function (e, t) {
              return JSON.stringify(e) === JSON.stringify(t);
            }),
            (e.prototype.BLoaded = function (e, t) {
              var n = this.HandleNewEventGID(t);
              return this.m_mapPrivateData.has(n);
            }),
            (e.prototype.BIsDirty = function () {
              return Boolean(this.m_gidDirty);
            }),
            (e.prototype.BIsEventDirty = function (e) {
              var t = this.HandleNewEventGID(e);
              return this.m_gidDirty == t;
            }),
            (e.prototype.DiscardChanges = function () {
              if (this.m_gidDirty) {
                var e = this.m_clanAccountIDDirty,
                  t = this.m_gidDirty;
                (this.m_clanAccountIDDirty = null), (this.m_gidDirty = null);
                var n = this.m_mapPrivateData.get(t),
                  i = this.m_mapOriginalJSON.get(t);
                this.m_mapPrivateData.set(
                  t,
                  Object(a.a)(Object(a.a)({}, n), { jsonData: i })
                ),
                  this.DispatchUpdate(e, t);
              }
            }),
            (e.prototype.DispatchUpdate = function (e, t) {
              var n = this.HandleNewEventGID(t),
                a = this.GetPrivateDataCopy(e, n);
              this.GetPrivateDataChangeCallback(e, n).Dispatch(a);
            }),
            (e.prototype.HandleNewEventGID = function (e) {
              return null == e || null == e || "" == e ? _ : e;
            }),
            (e.prototype.LoadPrivateData = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = this.HandleNewEventGID(t)),
                        this.m_inflightRequests.has(n) ||
                          this.m_inflightRequests.set(
                            n,
                            this.InternalLoadPrivateData(e, n)
                          ),
                        [4, this.m_inflightRequests.get(n)]
                      );
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            (e.prototype.InternalLoadPrivateData = function (e, t) {
              var n, i;
              return Object(a.b)(this, void 0, void 0, function () {
                var r, l, s, c, u, m, g, h;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        ((r = this.HandleNewEventGID(t)),
                        this.m_mapPrivateData.has(r))
                      )
                        return [2, this.m_mapPrivateData.get(r)];
                      if (r == _)
                        return (
                          (m = { jsonData: {} }),
                          this.m_mapPrivateData.set(r, m),
                          this.m_mapOriginalJSON.set(r, {}),
                          [2, m]
                        );
                      a.label = 1;
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        (l =
                          p.c.COMMUNITY_BASE_URL +
                          "partnereventdata/ajaxgetprivatedata"),
                        (s = {
                          clanAccountID: e.GetAccountID(),
                          gidClanEvent: r,
                        }),
                        [4, o.a.get(l, { params: s, withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (c = a.sent()),
                        1 ===
                          (null === (n = null == c ? void 0 : c.data) ||
                          void 0 === n
                            ? void 0
                            : n.success) && c.data.data
                          ? ((u = {
                              rtLastUpdateTime: c.data.data.time_written,
                              nAccountLastUpdate: c.data.data.account_writer,
                              jsonData: c.data.data.json_data,
                            }),
                            this.m_mapPrivateData.set(r, u),
                            this.m_mapOriginalJSON.set(r, u.jsonData),
                            [2, u])
                          : 42 ===
                            (null === (i = null == c ? void 0 : c.data) ||
                            void 0 === i
                              ? void 0
                              : i.success)
                          ? ((m = { jsonData: {} }),
                            this.m_mapPrivateData.set(r, m),
                            this.m_mapOriginalJSON.set(r, {}),
                            [2, m])
                          : ((h = Object(d.a)(c)),
                            console.error(
                              "CPartnerEventPrivateDataStore.InternalLoadPrivateData: response with " +
                                h.strErrorMsg,
                              h
                            ),
                            [3, 4])
                      );
                    case 3:
                      return (
                        (g = a.sent()),
                        (h = Object(d.a)(g)),
                        console.error(
                          "CPartnerEventPrivateDataStore.InternalLoadPrivateData: failed with " +
                            h.strErrorMsg,
                          h
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.SaveDirtyChanges = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(a.e)(this, function (a) {
                  if (
                    (Object(m.a)(
                      null != e && null != e && "" != e,
                      "CPartnerEventPrivateDataStore: GID not supplied."
                    ),
                    this.BIsDirty())
                  ) {
                    if (
                      ((t = s.a.InitFromClanID(this.m_clanAccountIDDirty)),
                      (n = this.m_mapPrivateData.get(this.m_gidDirty).jsonData),
                      this.m_gidDirty == e || this.m_gidDirty == _)
                    )
                      return (
                        this.m_gidDirty == _ &&
                          (this.m_mapOriginalJSON.set(e, {}),
                          this.m_mapPrivateData.set(
                            e,
                            this.m_mapPrivateData.get(_)
                          ),
                          this.m_mapPrivateData.delete(_)),
                        [2, this.SavePrivateData(t, e, n)]
                      );
                    console.warn(
                      "CPartnerEventPrivateDataStore: Dirty not matching input GID:" +
                        e +
                        " " +
                        this.m_gidDirty
                    );
                  } else console.warn("CPartnerEventPrivateDataStore: Attempting to save private when not dirty: " + e + " " + this.m_gidDirty);
                  return [2, 1];
                });
              });
            }),
            (e.prototype.SavePrivateData = function (e, t, n) {
              var i;
              return Object(a.b)(this, void 0, void 0, function () {
                var r, l, s, c, u, _;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        (Object(m.a)(
                          null != t && null != t && "" != t,
                          "CPartnerEventPrivateDataStore: GID not supplied."
                        ),
                        !this.m_mapPrivateData.has(t))
                      )
                        return [2, 42];
                      if (this.BIsEqual(n, this.m_mapOriginalJSON.get(t)))
                        return [2, 1];
                      a.label = 1;
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        (r = new FormData()).append("sessionid", p.c.SESSIONID),
                        r.append("clanAccountID", "" + e.GetAccountID()),
                        r.append("gidClanEvent", "" + t),
                        r.append("jsonData", JSON.stringify(n)),
                        (l =
                          p.c.COMMUNITY_BASE_URL +
                          "partnereventdata/ajaxsetprivatedata"),
                        [4, o.a.post(l, r, { withCredentials: !0 })]
                      );
                    case 2:
                      return (
                        (s = a.sent()),
                        1 ===
                        (null === (i = null == s ? void 0 : s.data) ||
                        void 0 === i
                          ? void 0
                          : i.success)
                          ? ((c = {
                              nAccountLastUpdate: p.i.accountid,
                              rtLastUpdateTime: Math.floor(Date.now() / 1e3),
                              jsonData: n,
                            }),
                            this.m_mapPrivateData.set(t, c),
                            this.m_mapOriginalJSON.set(t, n),
                            (this.m_clanAccountIDDirty = null),
                            (this.m_gidDirty = null),
                            this.DispatchUpdate(e.GetAccountID(), t),
                            [2, s.data.success])
                          : ((_ = Object(d.a)(s)),
                            console.error(
                              "CPartnerEventPrivateDataStore.SavePrivateData: response with " +
                                _.strErrorMsg,
                              _
                            ),
                            [3, 4])
                      );
                    case 3:
                      return (
                        (u = a.sent()),
                        (_ = Object(d.a)(u)),
                        console.error(
                          "CPartnerEventPrivateDataStore.SavePrivateData: failed with " +
                            _.strErrorMsg,
                          _
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, 2];
                  }
                });
              });
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  e.s_Singleton.Init(),
                  "dev" == p.c.WEB_UNIVERSE &&
                    (window.g_PartnerEventPrivateDataStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = this,
                t = Object(p.g)("privatedata", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach(function (t) {
                  var n = {
                    rtLastUpdateTime: t.data.time_written,
                    nAccountLastUpdate: t.data.account_writer,
                    jsonData: t.data.json_data,
                  };
                  e.m_mapOriginalJSON.set(t.gid, n.jsonData),
                    e.m_mapPrivateData.set(t.gid, n);
                });
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  t.length > 0 &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].gid &&
                "number" == typeof t[0].clanAccountID &&
                "object" == typeof t[0].data
              );
            }),
            Object(a.c)([c.a], e.prototype, "BIsEventDirty", null),
            Object(a.c)([c.a], e.prototype, "DiscardChanges", null),
            Object(a.c)([c.a], e.prototype, "SaveDirtyChanges", null),
            e
          );
        })();
      function h(e, t) {
        var n = g.Get(),
          a = Object(l.useState)(n.GetPrivateDataCopy(e, t)),
          r = a[0],
          o = a[1];
        Object(i.d)(n.GetPrivateDataChangeCallback(e, t), o);
        var c = Object(l.useState)(!n.BLoaded(e, t)),
          u = c[0],
          d = c[1];
        Object(l.useEffect)(
          function () {
            if (!n.BLoaded(e, t)) {
              var a = s.a.InitFromClanID(e);
              n.LoadPrivateData(a, t).then(function (e) {
                o(e), d(!1);
              });
            }
          },
          [e, t, n]
        );
        return [
          r,
          function (a) {
            n.UpdatePrivateData(e, t, a);
          },
          u,
        ];
      }
      function f() {
        var e = g.Get();
        return [e.BIsEventDirty, e.DiscardChanges, e.SaveDirtyChanges];
      }
      function b(e, t) {
        var n = h(e, t),
          i = n[0],
          r = n[1],
          o = n[2],
          l = g.Get();
        return [
          o,
          null == i ? void 0 : i.jsonData.bPublishRequiresValveApproval,
          null == i ? void 0 : i.jsonData.nAccountApproved,
          null == i ? void 0 : i.jsonData.rtApprovalTime,
          function (n) {
            return r(
              Object(a.a)(Object(a.a)({}, l.GetPrivateData(e, t).jsonData), {
                bPublishRequiresValveApproval: n,
              })
            );
          },
          function (n) {
            return r(
              Object(a.a)(Object(a.a)({}, l.GetPrivateData(e, t).jsonData), {
                nAccountApproved: n,
                rtApprovalTime: Math.floor(Date.now() / 1e3),
              })
            );
          },
        ];
      }
      function v(e, t) {
        var n = h(e, t),
          i = n[0],
          r = n[1],
          o = n[2],
          l = g.Get();
        return [
          o,
          null == i ? void 0 : i.jsonData.nAcceptingGuidelineAccount,
          null == i ? void 0 : i.jsonData.rtAcceptanceTime,
          null == i ? void 0 : i.jsonData.strPrimaryContactName,
          null == i ? void 0 : i.jsonData.strPrimaryContactEmail,
          function (n) {
            r(
              Object(a.a)(Object(a.a)({}, l.GetPrivateData(e, t).jsonData), {
                nAcceptingGuidelineAccount: n,
                rtAcceptanceTime: Math.floor(Date.now() / 1e3),
              })
            );
          },
          function (n, i) {
            r(
              Object(a.a)(Object(a.a)({}, l.GetPrivateData(e, t).jsonData), {
                strPrimaryContactName: n,
                strPrimaryContactEmail: i,
              })
            );
          },
        ];
      }
    },
    h5LU: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("mrSG"),
        i = n("q1tI"),
        r = n("15kH"),
        o = n("opsS"),
        l = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { color: t.props.color || "rgba(1.0,1.0,1.0,1.0)" }), t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.GetColorString = function (e) {
              return (
                "rgba(" +
                e.rgb.r +
                ", " +
                e.rgb.g +
                ", " +
                e.rgb.b +
                ", " +
                e.rgb.a +
                ")"
              );
            }),
            (t.prototype.OnColorChange = function (e) {
              var n = t.GetColorString(e);
              this.setState({ color: n }), this.props.onChange(n);
            }),
            (t.prototype.render = function () {
              return i.createElement(r.a, {
                onChange: this.OnColorChange,
                color: this.state.color,
              });
            }),
            Object(a.c)([o.a], t.prototype, "OnColorChange", null),
            t
          );
        })(i.Component);
    },
    hvYe: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=";
    },
    i3zJ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return O;
      });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("lkRc"),
        l = n("OS6B"),
        s = (function () {
          function e() {
            (this.m_events = null),
              (this.m_eventMap = new Map()),
              (this.m_eventDetailsMap = new Map()),
              (window.g_discountEventStore = this);
          }
          return (
            (e.Get = function () {
              return (
                e.s_DiscountEvent || (e.s_DiscountEvent = new e()),
                e.s_DiscountEvent
              );
            }),
            (e.prototype.GetDiscountEvents = function () {
              return this.m_events;
            }),
            (e.prototype.GetSingleDiscountEvent = function (e) {
              return this.m_eventMap.get(e);
            }),
            (e.prototype.GetDiscountEventDetails = function (e) {
              return this.m_eventDetailsMap.get(e);
            }),
            (e.prototype.BHasDiscountEventDetails = function (e) {
              return this.m_eventDetailsMap.has(e);
            }),
            (e.prototype.LoadDiscountEvents = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  i,
                  s,
                  c,
                  u = this;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (this.m_events) return [2, this.m_events];
                      (t = o.c.COMMUNITY_BASE_URL + "sale/ajaxdiscountevents"),
                        (n = { sessionid: o.c.SESSIONID }),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [4, r.a.get(t, { params: n, cancelToken: e.token })]
                      );
                    case 2:
                      return (
                        (i = a.sent()) &&
                          200 == i.status &&
                          1 == i.data.success &&
                          i.data.discount_events &&
                          ((this.m_events = i.data.discount_events),
                          this.m_events.map(function (e) {
                            u.m_eventMap.set(e.id, e);
                          })),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (s = a.sent()),
                        (c = Object(l.a)(s)),
                        console.error(
                          "LoadDiscountEvents failed: " + c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, this.m_events];
                  }
                });
              });
            }),
            (e.prototype.LoadDiscountEventDetails = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, i, s, c, u;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (this.m_eventDetailsMap.has(e)) return [3, 4];
                      (n =
                        o.c.COMMUNITY_BASE_URL +
                        "sale/ajaxdiscounteventdetails"),
                        (i = { sessionid: o.c.SESSIONID, id: e }),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 3, , 4]),
                        [4, r.a.get(n, { params: i, cancelToken: t.token })]
                      );
                    case 2:
                      return (
                        (s = a.sent()) &&
                          200 == s.status &&
                          1 == s.data.success &&
                          s.data.packages &&
                          this.m_eventDetailsMap.set(e, {
                            apps: s.data.apps,
                            packages: s.data.packages,
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (c = a.sent()),
                        (u = Object(l.a)(c)),
                        console.error(
                          "LoadDiscountEventDetails failed: " + u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, this.m_eventDetailsMap.get(e)];
                  }
                });
              });
            }),
            e
          );
        })(),
        c = n("2vnA"),
        u = n("TyAF"),
        d = n("q1tI"),
        p = n.n(d),
        m = n("vwsU"),
        _ = n("5eAM"),
        g = n("oVVc"),
        h = n("Mgs7"),
        f = n("IjL/"),
        b = n("YLyR"),
        v = n("Jqb/"),
        S = n("0OaU"),
        E = n("TLQK"),
        y = n("k3PP"),
        O = Object(u.a)(function (e) {
          var t = function () {
              return e.closeModal && e.closeModal();
            },
            n = e.onDiscountEventSelected,
            a = Object(d.useState)(null),
            i = a[0],
            r = a[1],
            o = j.Get().BHasSomethingSelected();
          return p.a.createElement(
            f.a,
            null,
            p.a.createElement(
              v.h,
              { onEscKeypress: t },
              p.a.createElement(
                h.f,
                null,
                p.a.createElement(
                  h.l,
                  null,
                  Object(E.f)("#Sale_DiscountEvent_Add")
                ),
                p.a.createElement(
                  h.b,
                  null,
                  p.a.createElement(
                    h.c,
                    null,
                    p.a.createElement(
                      "div",
                      { style: { minHeight: 500 } },
                      p.a.createElement(T, { fnSetDiscountID: r }),
                      p.a.createElement(C, { discountID: i })
                    )
                  )
                ),
                p.a.createElement(
                  h.k,
                  null,
                  p.a.createElement(h.o, {
                    onCancel: t,
                    bOKDisabled: !o,
                    strOKText: Object(E.f)("#Sale_New_CreateEvent"),
                    onOK: function () {
                      j.Get().UpdateSaleSection(n), t();
                    },
                  })
                )
              )
            )
          );
        }),
        T = function (e) {
          var t = e.fnSetDiscountID,
            n = Object(d.useState)(!0),
            i = n[0],
            o = n[1],
            c = Object(d.useRef)(null);
          if (
            (Object(d.useEffect)(function () {
              var e = r.a.CancelToken.source();
              c.current = e.cancel;
              return (
                Object(a.b)(void 0, void 0, void 0, function () {
                  var t, n;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          a.trys.push([0, 2, , 3]),
                          [4, s.Get().LoadDiscountEvents(e)]
                        );
                      case 1:
                        return (
                          a.sent() &&
                            !e.token.reason &&
                            (j.Get().Reset(), o(!1)),
                          [3, 3]
                        );
                      case 2:
                        return (
                          (t = a.sent()),
                          (n = Object(l.a)(t)),
                          console.error(
                            "DiscountEventChooser failed to load: " +
                              n.strErrorMsg,
                            n
                          ),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                }),
                function () {
                  return (
                    c.current && c.current("DiscountEventChooser unmounting")
                  );
                }
              );
            }, []),
            i)
          )
            return p.a.createElement(S.a, {
              key: "loading",
              size: "medium",
              string: Object(E.f)("#Sale_DiscountEvent_Loading"),
            });
          var u = s
              .Get()
              .GetDiscountEvents()
              .map(function (e) {
                return { label: e.name, value: e.id };
              }),
            _ = {
              option: function (e) {
                return Object(a.a)(Object(a.a)({}, e), { color: "#444444" });
              },
            };
          return p.a.createElement(
            "div",
            null,
            p.a.createElement(
              "div",
              null,
              Object(E.f)("#Sale_DiscountEvent_Choose"),
              p.a.createElement(y.d, {
                tooltip: Object(E.f)("#Sale_DiscountEvent_Choose_ttip"),
              })
            ),
            p.a.createElement(m.a, {
              styles: _,
              isSearchable: !0,
              isMulti: !1,
              isClearable: !0,
              options: u,
              defaultMenuIsOpen: !1,
              isValidNewOption: function () {
                return !1;
              },
              onChange: function (e) {
                (null == e ? void 0 : e.value) && t(e.value);
              },
            })
          );
        },
        C = function (e) {
          var t = e.discountID,
            n = Object(d.useState)(!0),
            i = n[0],
            o = n[1],
            c = Object(d.useState)(null),
            u = c[0],
            m = c[1],
            f = Object(d.useRef)(null);
          if (
            (Object(d.useEffect)(
              function () {
                o(!0),
                  f.current &&
                    f.current(
                      "SelectAppsAndPackagesFromDiscountEvent reloading"
                    );
                var e = r.a.CancelToken.source();
                f.current = e.cancel;
                return (
                  t &&
                    Object(a.b)(void 0, void 0, void 0, function () {
                      var n, i, r, c, u;
                      return Object(a.e)(this, function (a) {
                        switch (a.label) {
                          case 0:
                            return (
                              a.trys.push([0, 5, , 6]),
                              s.Get().BHasDiscountEventDetails(t)
                                ? [3, 2]
                                : [4, s.Get().LoadDiscountEventDetails(t, e)]
                            );
                          case 1:
                            a.sent(), (a.label = 2);
                          case 2:
                            return !(n = s.Get().GetDiscountEventDetails(t)) ||
                              e.token.reason
                              ? [3, 4]
                              : ((i = new Array()),
                                (r = n.apps),
                                n.packages.map(function (e) {
                                  return i.push(
                                    "string" == typeof e.subid
                                      ? Number.parseInt(e.subid)
                                      : e.subid
                                  );
                                }),
                                [
                                  4,
                                  Promise.all([
                                    g.b.LoadPackageInfo(i),
                                    _.a.LoadAppLinkInfo(r),
                                  ]),
                                ]);
                          case 3:
                            a.sent(), o(!1), (a.label = 4);
                          case 4:
                            return [3, 6];
                          case 5:
                            return (
                              (c = a.sent()),
                              (u = Object(l.a)(c)),
                              console.error(
                                "SelectAppsAndPackagesFromDiscountEvent failed: " +
                                  u.strErrorMsg,
                                u
                              ),
                              [3, 6]
                            );
                          case 6:
                            return [2];
                        }
                      });
                    }),
                  function () {
                    return (
                      f.current &&
                      f.current(
                        "SelectAppsAndPackagesFromDiscountEvent unmounting"
                      )
                    );
                  }
                );
              },
              [t]
            ),
            !t)
          )
            return p.a.createElement(
              "div",
              null,
              Object(E.f)("#Sale_DiscountEvent_NoneChosen")
            );
          if (i || !s.Get().BHasDiscountEventDetails(t))
            return p.a.createElement(S.a, {
              key: "loading",
              size: "medium",
              string: Object(E.f)("#Sale_DiscountEvent_LoadingDetails"),
            });
          var v = s.Get().GetSingleDiscountEvent(t),
            y = s.Get().GetDiscountEventDetails(t);
          return p.a.createElement(
            "div",
            null,
            p.a.createElement(
              "p",
              null,
              Object(E.f)("#Sale_DiscountEvent_Select", v.name, v.id)
            ),
            p.a.createElement(b.b, {
              startDateAndTime: v.start_date,
              endDateAndTime: v.end_date,
            }),
            p.a.createElement(
              "p",
              null,
              Object(E.f)(
                "#Sale_DiscountEvent_Contains",
                y.apps.length.toLocaleString(),
                y.packages.length.toLocaleString()
              )
            ),
            p.a.createElement(
              "p",
              null,
              Object(E.f)(
                "#Sale_New_Selected",
                j.Get().GetTotalSelectedCount(),
                j.Get().AppCount().toLocaleString(),
                j.Get().PackageCount().toLocaleString()
              )
            ),
            p.a.createElement(
              "div",
              null,
              p.a.createElement(h.m, {
                type: "text",
                label: Object(E.f)("#EventCalendar_UniversalSearch"),
                value: u || "",
                onChange: function (e) {
                  return m(e.target.value);
                },
              }),
              p.a.createElement("h2", null, "Apps:"),
              p.a.createElement(
                h.d,
                {
                  onClick: function () {
                    return j.Get().SelectAllApps(y.apps);
                  },
                },
                "Select All Apps"
              ),
              p.a.createElement(
                h.d,
                {
                  onClick: function () {
                    return j.Get().ClearAllSelectedApps();
                  },
                },
                "Clear all Selected Apps"
              ),
              Boolean(y.apps)
                ? y.apps.map(function (e) {
                    return p.a.createElement(I, {
                      appid: e,
                      key: "appid_" + e,
                      strFilter: u,
                    });
                  })
                : p.a.createElement(
                    "p",
                    null,
                    Object(E.f)("#Sale_DiscountEvent_NoApps")
                  ),
              p.a.createElement("h2", null, "Packages:"),
              Boolean(y.packages)
                ? y.packages.map(function (e) {
                    return p.a.createElement(D, {
                      subid: e.subid,
                      key: "subid_" + e.subid,
                      strFilter: u,
                    });
                  })
                : p.a.createElement(
                    "p",
                    null,
                    Object(E.f)("#Sale_DiscountEvent_NoSubs")
                  )
            )
          );
        },
        j = (function () {
          function e() {
            (this.m_selectedApps = new Set()),
              (this.m_selectedSubs = new Set()),
              (this.m_nTotalSelected = 0);
          }
          return (
            (e.prototype.BIsAppSelected = function (e) {
              return this.m_selectedApps.has(e);
            }),
            (e.prototype.BIsPackageSelected = function (e) {
              return this.m_selectedSubs.has(e);
            }),
            (e.prototype.AddApp = function (e) {
              this.m_selectedApps.add(e), this.UpdateSelected();
            }),
            (e.prototype.AddPackage = function (e) {
              this.m_selectedSubs.add(e), this.UpdateSelected();
            }),
            (e.prototype.RemoveApp = function (e) {
              this.m_selectedApps.delete(e), this.UpdateSelected();
            }),
            (e.prototype.RemovePackage = function (e) {
              this.m_selectedSubs.delete(e), this.UpdateSelected();
            }),
            (e.prototype.UpdateApp = function (e, t) {
              t ? this.AddApp(e) : this.RemoveApp(e);
            }),
            (e.prototype.UpdatePackage = function (e, t) {
              t ? this.AddPackage(e) : this.RemovePackage(e);
            }),
            (e.prototype.AppCount = function () {
              return this.m_selectedApps.size;
            }),
            (e.prototype.PackageCount = function () {
              return this.m_selectedSubs.size;
            }),
            (e.prototype.BHasSomethingSelected = function () {
              return this.m_nTotalSelected > 0;
            }),
            (e.prototype.GetTotalSelectedCount = function () {
              return this.m_nTotalSelected;
            }),
            (e.prototype.SelectAllApps = function (e) {
              var t = this;
              e.forEach(function (e) {
                return t.m_selectedApps.add(e);
              }),
                this.UpdateSelected();
            }),
            (e.prototype.Reset = function () {
              this.m_selectedApps.clear(),
                this.m_selectedSubs.clear(),
                this.UpdateSelected();
            }),
            (e.prototype.ClearAllSelectedApps = function () {
              this.m_selectedApps.clear(), this.UpdateSelected();
            }),
            (e.prototype.UpdateSelected = function () {
              var e = this.AppCount() + this.PackageCount();
              e != this.m_nTotalSelected && (this.m_nTotalSelected = e);
            }),
            (e.prototype.UpdateSaleSection = function (e) {
              e(this.m_selectedApps, this.m_selectedSubs);
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  ((e.s_globalSingletonStore = new e()),
                  e.s_globalSingletonStore.Init()),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.Init = function () {}),
            Object(a.c)([c.C], e.prototype, "m_nTotalSelected", void 0),
            Object(a.c)([c.k], e.prototype, "SelectAllApps", null),
            Object(a.c)([c.k], e.prototype, "ClearAllSelectedApps", null),
            e
          );
        })(),
        I = function (e) {
          var t = e.appid,
            n = e.strFilter,
            a = _.a.GetAppLinkInfo(
              "string" == typeof t ? Number.parseInt(t) : t
            );
          if (
            n &&
            n.trim().length > 0 &&
            (!a || -1 == a.name.toLowerCase().indexOf(n))
          )
            return null;
          var i = a
            ? a.name +
              "(" +
              a.appid +
              ")" +
              ("application" != a.type && "game" != a.type ? " DLC" : "")
            : Object(E.f)("#Sale_DiscountEvent_AppMissing", t);
          return p.a.createElement(h.e, {
            label: i,
            checked: j.Get().BIsAppSelected(t),
            onChange: function (e) {
              return j.Get().UpdateApp(t, e);
            },
          });
        },
        D = function (e) {
          var t = e.subid,
            n = e.strFilter,
            a = g.b.GetPackageInfo(t);
          if (
            n &&
            n.trim().length > 0 &&
            (!a || -1 == a.name.toLowerCase().indexOf(n))
          )
            return null;
          var i = a
            ? a.name +
              "(" +
              a.id +
              ") : " +
              Object(E.f)("#Sale_DiscountEvent_SubContains", a.appids.length)
            : Object(E.f)("#Sale_DiscountEvent_SubMissing", t);
          return p.a.createElement(h.e, {
            label: i,
            checked: j.Get().BIsAppSelected(t),
            onChange: function (e) {
              return j.Get().UpdatePackage(t, e);
            },
          });
        };
    },
    jZUi: function (e, t, n) {},
    k3PP: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return Ye;
      }),
        n.d(t, "a", function () {
          return Je;
        }),
        n.d(t, "g", function () {
          return Ze;
        }),
        n.d(t, "b", function () {
          return et;
        }),
        n.d(t, "e", function () {
          return tt;
        }),
        n.d(t, "f", function () {
          return ut;
        }),
        n.d(t, "c", function () {
          return mt;
        });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("fcuX"),
        l = n("mHFc"),
        s = n("NrWE"),
        c = n("Ww0A"),
        u = n("TyAF"),
        d = n("q1tI"),
        p = n("U+Q5"),
        m = n("Mgs7"),
        _ = n("qP7j"),
        g = n("Jqb/"),
        h = n("TLQK"),
        f = n("opsS"),
        b = n("6yBx"),
        v = n("R5ed"),
        S = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.editModel,
                n = e.loc_images,
                a = e.artworkType;
              p.d.ClearImageGroup(),
                n &&
                  n.forEach(function (e, n) {
                    var i = e && p.a.GetHashFromHashAndExt(e),
                      r =
                        i && p.d.GetClanImageByImageHash(t.GetClanSteamID(), i);
                    r && t.SetImageURL(a, r, n);
                  });
            }),
            (t.prototype.OnSaveToEditModel = function () {
              var e = this.props,
                t = e.editModel,
                n = e.fnSetImage;
              p.d.GetAllLocalizedGroupImages().forEach(function (e, t) {
                if (e) {
                  var a = e.lastIndexOf("/");
                  n(t, e.substring(a + 1));
                }
              }),
                t.SetDirty(o.c.jsondata_sales),
                this.props.closeModal(),
                p.d.ClearImageGroup();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.closeModal,
                n = e.editModel,
                a = e.artworkType,
                i = n.GetClanSteamID();
              return d.createElement(
                g.e,
                {
                  onCancel: t,
                  closeModal: t,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  className: _.NotTooWideModal,
                },
                d.createElement(
                  m.l,
                  null,
                  Object(h.f)("#ImagePickerLoc_Title")
                ),
                d.createElement(
                  m.b,
                  null,
                  d.createElement(
                    m.c,
                    null,
                    d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(b.b, {
                        clanSteamID: i,
                        rgSupportArtwork: [a],
                        bPreventPreviousClanImages: !0,
                        fnSetImageURL: n.SetImageURL,
                        rgRealmList: n.GetIncludedRealmList(),
                      }),
                      d.createElement(v.b, {
                        clanSteamID: i,
                        artworkType: a,
                        title: Object(h.f)("#ImagePickerLoc_Title"),
                      })
                    )
                  ),
                  d.createElement(
                    m.k,
                    null,
                    d.createElement(
                      m.r,
                      { onClick: this.OnSaveToEditModel, disabled: !1 },
                      Object(h.f)("#Button_Confirm"),
                      " "
                    ),
                    d.createElement(
                      m.d,
                      { onClick: this.props.closeModal, disabled: !1 },
                      Object(h.f)("#Button_Cancel")
                    )
                  )
                )
              );
            }),
            Object(a.c)([f.a], t.prototype, "OnSaveToEditModel", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        E = n("as1E"),
        y = n("2vnA"),
        O = n("TtDX"),
        T = n("h5LU"),
        C = n("fpVW"),
        j = n("f1ZV"),
        I = n("ka0M"),
        D = n("0rc7"),
        w = n("5E+2"),
        M = n("Kw0F"),
        k = n("exH9"),
        G = n("X3Ds"),
        L = n("N0Ye"),
        A = n("lkRc"),
        B = n("nvcf"),
        F = n("UvY0"),
        N = n("kyHq"),
        R = n("kLLr"),
        x = n("TQGK"),
        P = n("uIWk"),
        U = (function () {
          function e() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          return (
            (e.prototype.BHasSolrEvent = function (e) {
              return this.m_mapEventGIDToSolrData.has(e);
            }),
            (e.prototype.GetAllSolrEvents = function () {
              return this.m_listEvents;
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.ClearAllSolrEvents = function () {
              (this.m_mapEventGIDToSolrData = new Map()),
                (this.m_listEvents = new Array());
            }),
            (e.prototype.LoadPartnerEventForQueryIncremental = function (
              e,
              t,
              n,
              i,
              r,
              o,
              l,
              s,
              c
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(a.b)(this, void 0, void 0, function () {
                  var u,
                    d,
                    p = this;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return [
                          4,
                          this.GetLatestPartnerEvents(
                            e,
                            t,
                            n,
                            i,
                            r,
                            o,
                            l,
                            s,
                            c
                          ),
                        ];
                      case 1:
                        return (
                          (u = a.sent()),
                          (d = new Array()),
                          Object(y.G)(function () {
                            u.forEach(function (e) {
                              p.m_mapEventGIDToSolrData.has(e.unique_id) ||
                                (d.push(e),
                                p.m_mapEventGIDToSolrData.set(e.unique_id, e),
                                p.m_listEvents.push(e));
                            });
                          }),
                          [2, d]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.GetLatestPartnerEvents = function (
              e,
              t,
              n,
              i,
              o,
              l,
              s,
              c,
              u,
              d,
              p,
              m
            ) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = 10),
                Object(a.b)(this, void 0, void 0, function () {
                  var _, g, h;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (_ =
                            A.c.STORE_BASE_URL +
                            "events_admin/ajaxgetlatestpartnerevents"),
                          (g = {
                            page: t,
                            count: n,
                            date: s,
                            appids: void 0 === i ? void 0 : i.join(","),
                            required_tags: void 0 === o ? void 0 : o.join(","),
                            exclude_tags: void 0 === l ? void 0 : l.join(","),
                            eventtypefilter:
                              void 0 === c ? void 0 : c.join(","),
                            orderByVisibility: u || void 0,
                            creator_home_clan_id:
                              void 0 === d ? void 0 : d.join(","),
                            showUnpublished: void 0 === m ? void 0 : m,
                            term: void 0 === p ? void 0 : p,
                          }),
                          [
                            4,
                            r.a.get(_, {
                              params: g,
                              withCredentials: !0,
                              cancelToken: e ? e.token : void 0,
                            }),
                          ]
                        );
                      case 1:
                        return [2, (h = a.sent()).data ? h.data.docs : []];
                    }
                  });
                })
              );
            }),
            Object(a.c)([y.C], e.prototype, "m_mapEventGIDToSolrData", void 0),
            Object(a.c)([y.C], e.prototype, "m_listEvents", void 0),
            Object(a.c)([y.k], e.prototype, "ClearAllSolrEvents", null),
            e
          );
        })(),
        H = n("6oCP"),
        V = n("y+6m"),
        z = n("mB/g"),
        W = n("xnZ7"),
        q = n.n(W),
        Y = n("bS9Q"),
        J = n("JiI5"),
        Q = n("aoTL"),
        K = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = r.a.CancelToken.source()),
              (t.m_currentRequest = 0),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = (this.props.saleSection.events || [])
                .filter(function (e) {
                  return Boolean(e);
                })
                .map(function (e) {
                  return e.announcement_gid;
                });
              H.d.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                e,
                this.m_cancelSignal
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel("unloading EventsSaleSectionEditor");
            }),
            (t.prototype.AddEventWithDuplicatePrompt = function (e) {
              var t = this;
              (this.m_refInput.element.value = ""),
                this.props.saleSection.events ||
                  (this.props.saleSection.events = []),
                this.props.saleSection.events.some(function (t) {
                  return (null == t ? void 0 : t.announcement_gid) == e.id;
                })
                  ? Object(I.d)(
                      d.createElement(g.d, {
                        strTitle: Object(h.f)("#Sale_DuplicateCapsule"),
                        strDescription: Object(h.f)(
                          "#Sale_DuplicateEVent_Desc"
                        ),
                        onOK: function () {
                          return t.AddEvent(e);
                        },
                      }),
                      window
                    )
                  : this.AddEvent(e);
            }),
            (t.prototype.AddEvent = function (e) {
              this.props.saleSection.events.push({
                announcement_gid: e.id,
                clan_steamid: e.clan_steamid,
              }),
                H.d.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                  new R.a(e.clan_steamid),
                  e.id,
                  null
                ),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.CreateSelectionMenu = function (e) {
              var t = this;
              this.m_searchResultsMenu = Object(O.a)(
                d.createElement(
                  V.c,
                  { className: J.SearchResults },
                  e.map(function (e) {
                    return d.createElement(
                      V.d,
                      {
                        key: e.id,
                        onSelected: function () {
                          return t.AddEventWithDuplicatePrompt(e);
                        },
                      },
                      d.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        Object(Y.b)(e.name),
                        " ",
                        d.createElement("span", null, "(", e.id, ")"),
                        " ",
                        d.createElement(
                          "span",
                          { className: J.SmallText },
                          "(",
                          e.type,
                          ")"
                        )
                      )
                    );
                  })
                ),
                this.m_refInput.element,
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  bDisablePopTop: !0,
                }
              );
            }),
            (t.prototype.UpdateEventSuggestions = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  i,
                  o,
                  l,
                  s,
                  c,
                  u,
                  d,
                  p,
                  m,
                  _,
                  g,
                  h,
                  f,
                  b,
                  v,
                  S = this;
                return Object(a.e)(this, function (E) {
                  switch (E.label) {
                    case 0:
                      return (t = String(e.target.value)) &&
                        0 != t.trim().length
                        ? ((n = []),
                          !1,
                          t
                            .toLocaleLowerCase()
                            .startsWith(A.c.STORE_BASE_URL) ||
                          t
                            .toLocaleLowerCase()
                            .startsWith(A.c.COMMUNITY_BASE_URL)
                            ? ((i = Object(N.h)(A.c.LANGUAGE)),
                              (o = /app\/(\d+)\/view\/(\d+)\/?$/.exec(t)),
                              (l = /group\/(\d+)\/view\/(\d+)\/?$/.exec(t)),
                              (s = /groups\/(\w+)\/announcements\/detail\/(\d+)+\/?$/.exec(
                                t
                              )),
                              (c = /games\/(\d+)\/announcements\/detail\/(\d+)+\/?$/.exec(
                                t
                              )),
                              (u = /games\/(\w+)\/announcements\/detail\/(\d+)+\/?$/.exec(
                                t
                              )),
                              (d = null),
                              (p = null),
                              (m = null),
                              (_ = null),
                              (g = null),
                              (h = null),
                              o && o.length >= 3
                                ? ((d = Number.parseInt(o[1])),
                                  (_ = o[2]),
                                  [3, 6])
                                : [3, 1])
                            : [3, 18])
                        : [2];
                    case 1:
                      return l && l.length >= 3
                        ? ((m = Number.parseInt(l[1])), (_ = l[2]), [3, 6])
                        : [3, 2];
                    case 2:
                      return s && s.length >= 3
                        ? ((p = s[1]), (g = s[2]), [3, 6])
                        : [3, 3];
                    case 3:
                      return c && c.length >= 3
                        ? ((d = Number.parseInt(c[1])), (g = c[2]), [3, 6])
                        : [3, 4];
                    case 4:
                      return u && u.length >= 3
                        ? ((f = u[1]),
                          (g = u[2]),
                          [4, x.a.LoadOGGClanInfoForIdentifier(f)])
                        : [3, 6];
                    case 5:
                      (v = E.sent()) && (d = v.appid), (E.label = 6);
                    case 6:
                      return d
                        ? _
                          ? [4, H.d.LoadPartnerEventFromClanEventGID(d, _, 0)]
                          : [3, 8]
                        : [3, 11];
                    case 7:
                      return (h = E.sent()), [3, 10];
                    case 8:
                      return g
                        ? [4, H.d.LoadPartnerEventFromAnnoucementGID(d, g, 0)]
                        : [3, 10];
                    case 9:
                      (h = E.sent()), (E.label = 10);
                    case 10:
                      return [3, 17];
                    case 11:
                      return (
                        (b = null),
                        m && (b = R.a.InitFromClanID(m)),
                        p ? [4, x.a.LoadOGGClanInfoForGroupVanity(p)] : [3, 13]
                      );
                    case 12:
                      (v = E.sent()), (b = v.clanSteamID), (E.label = 13);
                    case 13:
                      return g && b
                        ? [
                            4,
                            H.d.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                              b,
                              g,
                              0
                            ),
                          ]
                        : [3, 15];
                    case 14:
                      return (h = E.sent()), [3, 17];
                    case 15:
                      return _ && b
                        ? [
                            4,
                            H.d.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              b,
                              _,
                              0
                            ),
                          ]
                        : [3, 17];
                    case 16:
                      (h = E.sent()), (E.label = 17);
                    case 17:
                      if (h)
                        return (
                          n.push({
                            id: h.GetAnnouncementGID(),
                            clan_steamid: h.clanSteamID.ConvertTo64BitString(),
                            name: h.GetNameWithFallback(i),
                            type: "event",
                          }),
                          this.CreateSelectionMenu(n),
                          [2]
                        );
                      E.label = 18;
                    case 18:
                      return (
                        window.clearTimeout(this.m_currentRequest),
                        (this.m_currentRequest = window.setTimeout(function () {
                          return Object(a.b)(S, void 0, void 0, function () {
                            var e, n, i;
                            return Object(a.e)(this, function (a) {
                              switch (a.label) {
                                case 0:
                                  return (
                                    (e = P.a.GetCreatorHome(
                                      new R.a(A.b.CLANSTEAMID)
                                    )),
                                    [
                                      4,
                                      U.Get().GetLatestPartnerEvents(
                                        r.a.CancelToken.source(),
                                        0,
                                        20,
                                        e.GetAppIDList(),
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        !0,
                                        [e.GetClanAccountID()],
                                        t,
                                        !0
                                      ),
                                    ]
                                  );
                                case 1:
                                  return (
                                    (n = a.sent()),
                                    (i = n.map(function (e) {
                                      return {
                                        id: e.announcement_gid,
                                        clan_steamid: e.clan_steamid,
                                        name: e.event_name,
                                        type: "event",
                                      };
                                    })),
                                    this.CreateSelectionMenu(i),
                                    [2]
                                  );
                              }
                            });
                          });
                        }, 300)),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this;
              this.props.fnIsValidEvent;
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(Z, Object(a.a)({}, this.props)),
                d.createElement(m.m, {
                  onBlur: function () {
                    setTimeout(function () {
                      return (
                        e.m_searchResultsMenu && e.m_searchResultsMenu.Hide()
                      );
                    }, 200);
                  },
                  ref: function (t) {
                    return (e.m_refInput = t);
                  },
                  type: "text",
                  label: Object(h.f)("#Sale_EnterEventsURL"),
                  onChange: this.UpdateEventSuggestions,
                  tooltip: Object(h.f)("#Sale_EnterEventsURL_Tooltip"),
                })
              );
            }),
            Object(a.c)(
              [f.a],
              t.prototype,
              "AddEventWithDuplicatePrompt",
              null
            ),
            Object(a.c)([f.a], t.prototype, "AddEvent", null),
            Object(a.c)([f.a], t.prototype, "UpdateEventSuggestions", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component);
      function Z(e) {
        var t = e.editModel,
          n = e.saleSection,
          a = e.fnIsValidEvent,
          i = Object(Q.d)(function () {
            var e;
            return null === (e = n.events) || void 0 === e
              ? void 0
              : e.filter(function (e) {
                  return Boolean(e);
                });
          });
        return d.createElement(D.a, {
          items: i,
          onDelete: function (e) {
            Object(y.G)(function () {
              (n.events = i),
                n.events.splice(e, 1),
                t.SetDirty(o.c.jsondata_sales);
            });
          },
          onMove: function (e, a) {
            Object(y.G)(function () {
              (n.events = i),
                Object(M.d)(n.events, e, a),
                t.SetDirty(o.c.jsondata_sales);
            });
          },
          render: function (e) {
            var t = H.d.GetClanEventFromAnnouncementGID(e.announcement_gid);
            return d.createElement(
              z.c,
              { className: q.a.FlexCenter, eventModel: t, route: z.a.k_eView },
              t
                ? d.createElement("img", {
                    style: { height: "40px", marginRight: "8px" },
                    src: t.GetImageURLWithFallback("capsule", 0),
                  })
                : null,
              t ? t.GetNameWithFallback(0) : null,
              "  (",
              t ? t.AnnouncementGID : null,
              ")",
              a &&
                !a(t) &&
                d.createElement(
                  "div",
                  { className: _.ErrorStylesWithIcon },
                  Object(h.f)("#Sale_EventInvalid")
                )
            );
          },
        });
      }
      var X = Object(u.a)(function (e) {
          var t,
            n = e.saleSection,
            i = e.editModel;
          return d.createElement(
            "div",
            null,
            d.createElement(
              "div",
              null,
              Object(h.f)(
                n.smart_section_event_tags
                  ? "#Sele_Event_SmartSection_RecentEvent_allgame"
                  : "#Sele_Event_SmartSection_RecentEvents"
              )
            ),
            d.createElement(m.m, {
              type: "number",
              min: "4",
              max: "90",
              label: Object(h.f)("#Sale_EventMaxEventsToShow"),
              tooltip: Object(h.f)("#Sale_EventMaxEventsToShow_ttip"),
              value: n.smart_section_max_apps,
              placeholder: Object(h.f)("#Sale_EventMaxEventDefault", 15),
              onChange: function (e) {
                var t = Number.parseInt(e.currentTarget.value);
                t &&
                  Number.isInteger(t) &&
                  n.smart_section_max_apps != t &&
                  ((n.smart_section_max_apps = t),
                  i.SetDirty(o.c.jsondata_sales));
              },
            }),
            d.createElement(
              "div",
              { className: C.EventEditorTextTitle },
              Object(h.f)("#Sale_EventDateRange"),
              d.createElement(Ye, {
                tooltip: Object(h.f)("#Sale_EventDateRange_ttip"),
              })
            ),
            d.createElement(
              oe,
              Object(a.a)({}, e, { bSetDefaultIfMissing: !1 })
            ),
            d.createElement(
              F.b,
              { clanSteamID: i.GetClanSteamID() },
              d.createElement(m.m, {
                type: "text",
                label: Object(h.f)("#Sale_EventTagsToSearch"),
                onChange: function (e) {
                  Object(y.G)(function () {
                    var t = e.target.value.replace(/\s+/g, "");
                    n.smart_section_event_tags &&
                    n.smart_section_event_tags[0] == t
                      ? 0 == t.length &&
                        n.smart_section_event_tags &&
                        ((n.smart_section_type = "recent_events"),
                        (n.smart_section_event_tags = void 0),
                        i.SetDirty(o.c.jsondata_sales))
                      : ((n.smart_section_type = "recent_tagged_events"),
                        (n.smart_section_event_tags = [t]),
                        i.SetDirty(o.c.jsondata_sales));
                  });
                },
                value:
                  (null === (t = n.smart_section_event_tags) || void 0 === t
                    ? void 0
                    : t.length) > 0
                    ? n.smart_section_event_tags[0]
                    : "",
                tooltip: Object(h.f)("#Sale_EventTagsToSearch_ttip"),
                placeholder: Object(h.f)("#Sale_EventTagsToSearch_Placeholder"),
              })
            )
          );
        }),
        $ = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            n.state = {};
            var a = n.props.saleSection;
            if (
              (a.event_schedule_categories ||
                (a.event_schedule_categories = []),
              !a.event_schedule_rtime_start)
            ) {
              var i = new Date();
              i.setHours(10),
                i.setMinutes(0),
                i.setSeconds(0),
                (a.event_schedule_rtime_start = Math.floor(i.getTime() / 1e3));
            }
            return (
              a.event_schedule_rtime_end ||
                (a.event_schedule_rtime_end =
                  a.event_schedule_rtime_start + 3600),
              n
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnCategoryCheck = function (e, t) {
              var n = this.props.saleSection,
                a = this.GetCategoryIndex(t);
              e && -1 == a
                ? (n.event_schedule_categories ||
                    (n.event_schedule_categories = []),
                  n.event_schedule_categories.push({
                    type: t.type,
                    tags: t.tags || [],
                  }),
                  this.props.editModel.SetDirty(o.c.jsondata_sales))
                : e ||
                  -1 == a ||
                  (n.event_schedule_categories.splice(a, 1),
                  this.props.editModel.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.GetCategoryIndex = function (e) {
              var t = this.props.saleSection;
              return t.event_schedule_categories
                ? t.event_schedule_categories.findIndex(function (t) {
                    return (
                      t.type == e.type &&
                      Object(M.a)(t.tags || [], e.tags || [])
                    );
                  })
                : -1;
            }),
            (t.prototype.BContainsCategory = function (e) {
              return -1 != this.GetCategoryIndex(e);
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.editModel,
                a = t.saleSection,
                i = new Array();
              for (var r in c.b) {
                var l = c.b[r];
                Object(L.a)(l.type) &&
                  i.push(
                    d.createElement(ee, {
                      key: "gs-" + r,
                      category: l,
                      fnCategoryToggle: this.OnCategoryCheck,
                      fnContainCategory: this.BContainsCategory,
                    })
                  );
              }
              var s = new Array();
              if (A.i.is_support)
                for (var r in c.c) {
                  l = c.c[r];
                  s.push(
                    d.createElement(ee, {
                      key: "gs-" + r,
                      category: l,
                      fnCategoryToggle: this.OnCategoryCheck,
                      fnContainCategory: this.BContainsCategory,
                    })
                  );
                }
              var u = n.GetEventModel().jsondata.sale_opt_in_page_name;
              return d.createElement(
                "div",
                null,
                d.createElement(
                  "p",
                  null,
                  Object(h.f)("#EventEditor_SaleEventSchedule")
                ),
                d.createElement(
                  "p",
                  null,
                  Object(h.n)(
                    "#EventEditor_SaleEventSchedule_NewsHub",
                    d.createElement(
                      "a",
                      {
                        href: A.c.STORE_BASE_URL + "newshub/sale/" + n.GetGID(),
                        target: A.c.IN_CLIENT ? void 0 : "_blank",
                      },
                      Object(h.f)("#EventEditor_SaleEventSchedule_NewsHubToken")
                    )
                  )
                ),
                d.createElement(ut, {
                  varName: "show_as_demos",
                  editModel: n,
                  section: a,
                  textToken: "#EventEditor_SaleEventSchedule_FeatureDemos",
                  ttipToken: "#EventEditor_SaleEventSchedule_FeatureDemos_ttip",
                }),
                d.createElement(
                  "p",
                  null,
                  Object(h.f)("#EventEditor_SaleEventSchedule_Range")
                ),
                d.createElement(oe, {
                  saleSection: a,
                  editModel: n,
                  bSetDefaultIfMissing: !0,
                  elSetStartTime: d.createElement(
                    m.d,
                    {
                      disabled: 0 == n.GetEventStartTime(),
                      onClick: function () {
                        (a.event_schedule_rtime_start = n.GetEventStartTime()),
                          n.SetDirty(o.c.jsondata_sales);
                      },
                    },
                    Object(h.f)("#EventEditor_SaleEventSchedule_SetToStart")
                  ),
                  elSetEndTime: d.createElement(
                    m.d,
                    {
                      disabled: 0 == n.GetEventEndTime(),
                      onClick: function () {
                        (a.event_schedule_rtime_end = n.GetEventEndTime()),
                          n.SetDirty(o.c.jsondata_sales);
                      },
                    },
                    Object(h.f)("#EventEditor_SaleEventSchedule_SetToEnd")
                  ),
                }),
                d.createElement(te, {
                  editModel: n,
                  saleSection: a,
                  selectedTrack: this.state.selectedTrack,
                  fnSelectTrack: function (t) {
                    e.setState({
                      selectedTrack: e.state.selectedTrack === t ? void 0 : t,
                    });
                  },
                }),
                Boolean(this.state.selectedTrack) &&
                  d.createElement(ie, {
                    editModel: n,
                    track: this.state.selectedTrack,
                    saleSection: a,
                  }),
                d.createElement(
                  "p",
                  null,
                  Object(h.f)("#EventEditor_SaleEventSchedule_Desc")
                ),
                Boolean(A.i.is_support) &&
                  d.createElement(
                    "div",
                    {
                      className: Object(k.a)(
                        C.ValveOnlyBackground,
                        B.EventCategoryCtn
                      ),
                    },
                    s
                  ),
                Boolean(A.i.is_support && u) &&
                  d.createElement(
                    "div",
                    {
                      className: Object(k.a)(
                        C.ValveOnlyBackground,
                        B.EventCategoryCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      null,
                      "Use OptIn ",
                      n.GetEventModel().jsondata.sale_opt_in_page_name,
                      " Event Typpe (please ensure the custom event type Live Stream exists and is published)"
                    ),
                    d.createElement(ee, {
                      key: "gs-" + u,
                      category: {
                        name: "OptIn Custom Name Not Imported yet",
                        description: "TODO",
                        icon: "11",
                        type: 11,
                        tags: [u],
                      },
                      fnCategoryToggle: this.OnCategoryCheck,
                      fnContainCategory: this.BContainsCategory,
                    })
                  ),
                d.createElement("div", { className: B.EventCategoryCtn }, i)
              );
            }),
            Object(a.c)([f.a], t.prototype, "OnCategoryCheck", null),
            Object(a.c)([f.a], t.prototype, "GetCategoryIndex", null),
            Object(a.c)([f.a], t.prototype, "BContainsCategory", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        ee = function (e) {
          var t = e.category,
            n = e.fnCategoryToggle,
            a = e.fnContainCategory;
          return d.createElement(
            w.a,
            {
              direction: "top",
              className: Object(k.a)(B.EventCategoryWidth),
              toolTipContent: Object(h.f)(t.description),
            },
            d.createElement(m.e, {
              label: Object(h.f)(t.name),
              checked: a(t),
              onChange: function (e) {
                return n(e, t);
              },
            })
          );
        },
        te = Object(u.a)(function (e) {
          var t = e.editModel,
            n = e.saleSection,
            a = e.fnSelectTrack;
          return d.createElement(
            "div",
            null,
            d.createElement(
              "div",
              { className: C.EventEditorTextTitle },
              Object(h.f)("#EventSchedule_Track_Current"),
              d.createElement(Ye, {
                tooltip: Object(h.f)("#EventSchedule_Track_Current_ttip"),
              })
            ),
            Boolean(n.event_schedule_tracks)
              ? d.createElement(D.a, {
                  items: n.event_schedule_tracks,
                  onDelete: function (e) {
                    Object(I.d)(
                      d.createElement(g.d, {
                        strTitle: Object(h.f)(
                          "#EventSchedule_DeletePrompt_Title"
                        ),
                        strDescription: Object(h.f)(
                          "#EventSchedule_DeletePrompt_Body"
                        ),
                        onOK: function () {
                          n.event_schedule_tracks.splice(e, 1),
                            t.SetDirty(o.c.jsondata_sales),
                            a(null);
                        },
                      }),
                      window
                    );
                  },
                  onReorder: function () {
                    return t.SetDirty(o.c.jsondata_sales);
                  },
                  render: function (t) {
                    return d.createElement(ne, {
                      track: t,
                      selected: t === e.selectedTrack,
                      fnOnSelect: e.fnSelectTrack,
                      index: e.saleSection.event_schedule_tracks.indexOf(t),
                    });
                  },
                })
              : d.createElement(
                  "div",
                  null,
                  Object(h.f)("#EventSchedule_NoTracks")
                ),
            d.createElement(
              w.a,
              { toolTipContent: Object(h.f)("#EventSchedule_AddTrack_ttip") },
              d.createElement(
                m.r,
                {
                  onClick: function () {
                    n.event_schedule_tracks || (n.event_schedule_tracks = []);
                    var e = n.event_schedule_tracks.reduce(function (e, t) {
                      return Math.max(e, t.unique_id);
                    }, 0);
                    n.event_schedule_tracks.push({
                      unique_id: e + 1,
                      localized_track_image: [],
                      events: [],
                    }),
                      t.SetDirty(o.c.jsondata_sales);
                  },
                },
                Object(h.f)("#EventSchedule_AddTrack")
              )
            )
          );
        }),
        ne = function (e) {
          return d.createElement(
            "div",
            {
              className: Object(k.a)(
                E.TabsSelectorEntry,
                e.selected && E.TabsSelectorEntrySelected
              ),
              onClick: function () {
                return e.fnOnSelect(e.track);
              },
            },
            Object(h.f)(
              "#EventSchedule_Unlabled_Track",
              e.index ? e.index + 1 : 1
            )
          );
        };
      function ae(e, t, n, a) {
        Object(O.a)(
          d.createElement(T.a, {
            onChange: function (e) {
              (t[a] = e), n.SetDirty(o.c.jsondata_sales);
            },
            color: t[a],
          }),
          e,
          { bDisablePopTop: !0 }
        );
      }
      var ie = Object(u.a)(function (e) {
          var t = e.saleSection,
            n = e.track,
            a = e.editModel,
            i = n.localized_track_image.reduce(function (e, t) {
              return t ? e + 1 : e;
            }, 0),
            r =
              "linear-gradient(to right, " +
              ((null == n ? void 0 : n.background_gradient_left) ||
                "transparent") +
              " 0%, " +
              ((null == n ? void 0 : n.background_gradient_right) ||
                "transparent") +
              " 100%)";
          return d.createElement(
            "div",
            null,
            d.createElement(
              m.d,
              {
                onClick: function (e) {
                  Object(I.d)(
                    d.createElement(S, {
                      loc_images: n.localized_track_image,
                      fnSetImage: function (e, t) {
                        n.localized_track_image = h.a.Set(
                          n.localized_track_image || [],
                          e,
                          t
                        );
                      },
                      editModel: a,
                      artworkType: "schedule_track_art",
                    }),
                    Object(G.m)(e)
                  );
                },
              },
              Boolean(i > 0)
                ? Object(h.l)("#selectimage_managing_n_existing_title", i)
                : Object(h.f)("#selectimage_uploading_title")
            ),
            d.createElement(
              "div",
              null,
              d.createElement(
                m.d,
                {
                  onClick: function (e) {
                    return ae(e, n, a, "label_color");
                  },
                  className: C.EventEditorTextTitle,
                  style: { color: n.label_color },
                },
                Object(h.f)("#Sale_Section_Label_Color")
              ),
              d.createElement(
                m.d,
                {
                  onClick: function (e) {
                    return ae(e, n, a, "background_gradient_left");
                  },
                  className: C.EventEditorTextTitle,
                  style: { color: n.label_color, background: r },
                },
                Object(h.f)("#Sale_Section_Background_Left")
              ),
              d.createElement(
                m.d,
                {
                  onClick: function (e) {
                    return ae(e, n, a, "background_gradient_right");
                  },
                  className: C.EventEditorTextTitle,
                  style: { color: n.label_color, background: r },
                },
                Object(h.f)("#Sale_Section_Background_Right")
              )
            ),
            d.createElement(
              "div",
              null,
              Object(h.f)("#EventSchedule_EventValidDesc")
            ),
            d.createElement(K, {
              editModel: a,
              saleSection: n,
              fnIsValidEvent: function (e) {
                return (
                  e &&
                  e.startTime >= t.event_schedule_rtime_start &&
                  e.endTime <= t.event_schedule_rtime_end &&
                  (function (e, t) {
                    return t.some(function (t) {
                      return t.type == e.type && e.BMatchesAllTags(t.tags);
                    });
                  })(e, t.event_schedule_categories)
                );
              },
            })
          );
        }),
        re = function (e) {
          var t = new Date(1e3 * e);
          return t.setSeconds(0), Math.floor(t.getTime() / 1e3);
        },
        oe = Object(u.a)(function (e) {
          var t = e.saleSection,
            n = e.editModel,
            a = e.bSetDefaultIfMissing;
          return (
            d.useEffect(
              function () {
                a &&
                  Object(y.G)(function () {
                    if (!t.event_schedule_rtime_start) {
                      var e = new Date();
                      e.setHours(10),
                        e.setMinutes(0),
                        e.setSeconds(0),
                        (t.event_schedule_rtime_start = Math.floor(
                          e.getTime() / 1e3
                        )),
                        n.SetDirty(o.c.jsondata_sales);
                    }
                    t.event_schedule_rtime_end ||
                      ((t.event_schedule_rtime_end =
                        t.event_schedule_rtime_start + 3600),
                      n.SetDirty(o.c.jsondata_sales));
                  });
              },
              [t, n, a]
            ),
            d.createElement(
              d.Fragment,
              null,
              d.createElement(j.a, {
                strDescription: Object(h.f)("#EventEditor_Starts"),
                nEarliestTime: 0,
                fnGetTimeToUpdate: function () {
                  return t.event_schedule_rtime_start;
                },
                fnSetTimeToUpdate: function (e) {
                  (e = re(e)),
                    t.event_schedule_rtime_start != e &&
                      ((t.event_schedule_rtime_start = e),
                      t.event_schedule_rtime_end < e &&
                        (t.event_schedule_rtime_end = e + 3600),
                      n.SetDirty(o.c.jsondata_sales));
                },
                fnIsValidDateTime: function () {
                  return !0;
                },
                bShowTimeZone: !0,
                className: e.elSetStartTime && B.SingleLine,
              }),
              Boolean(e.elSetStartTime) &&
                d.createElement(
                  "div",
                  { className: B.SingleLine },
                  e.elSetStartTime
                ),
              d.createElement(j.a, {
                strDescription: Object(h.f)("#EventEditor_Ends"),
                nEarliestTime: 0,
                fnGetTimeToUpdate: function () {
                  return t.event_schedule_rtime_end;
                },
                fnSetTimeToUpdate: function (e) {
                  (e = re(e)),
                    t.event_schedule_rtime_end != e &&
                      ((t.event_schedule_rtime_end = e),
                      t.event_schedule_rtime_end <
                        t.event_schedule_rtime_start &&
                        (t.event_schedule_rtime_end =
                          t.event_schedule_rtime_start + 3600),
                      n.SetDirty(o.c.jsondata_sales));
                },
                fnIsValidDateTime: function () {
                  return !0;
                },
                bShowTimeZone: !0,
                className: e.elSetEndTime && B.SingleLine,
              }),
              Boolean(e.elSetEndTime) &&
                d.createElement(
                  "div",
                  { className: B.SingleLine },
                  e.elSetEndTime
                )
            )
          );
        }),
        le = n("CoyA"),
        se = n("wUcC"),
        ce = n("Zan1"),
        ue = n("+w6J"),
        de = Object(u.a)(function (e) {
          var t = e.editModel,
            n = e.saleSection,
            i = d.useState(new p.b(t.GetClanSteamID()))[0],
            r = function (e, n, a) {
              (e[a] = n), t.SetDirty(o.c.jsondata_sales);
            },
            c = function (e) {
              Object(I.d)(
                d.createElement(S, {
                  loc_images: e
                    ? n.localized_sale_product_mobile_banner_override
                    : n.localized_sale_product_banner_override,
                  fnSetImage: function (t, a) {
                    e
                      ? (n.localized_sale_product_mobile_banner_override = h.a.Set(
                          n.localized_sale_product_mobile_banner_override,
                          t,
                          a
                        ))
                      : (n.localized_sale_product_banner_override = h.a.Set(
                          n.localized_sale_product_banner_override,
                          t,
                          a
                        ));
                  },
                  editModel: t,
                  artworkType: e
                    ? "product_mobile_banner_override"
                    : "product_banner_override",
                }),
                window
              );
            },
            u = function (e) {
              var t = "SaleSection_" + n.unique_id;
              return e && (t += "_" + e), t;
            },
            _ =
              "linear-gradient(0deg, " +
              (n.background_gradient_bottom || "transparent") +
              " 0%, " +
              (n.background_gradient_top || "transparent") +
              " 100%)",
            f = "tabs" !== n.section_type;
          return d.createElement(
            Ze,
            {
              title: Object(h.f)("#Sale_Section_Background_Title"),
              tooltip: Object(h.f)("#Sale_Section_Background_Title_ttip"),
              getMinimized: function () {
                return (e = "background"), (t = !0), Object(l.a)(u(e), t);
                var e, t;
              },
              toggleMinimized: function () {
                return (e = "background"), (t = !0), void Object(l.d)(u(e), t);
                var e, t;
              },
            },
            d.createElement(
              "div",
              { style: { display: "flex" }, className: J.BackgroundSettings },
              d.createElement(
                "div",
                { className: Object(k.a)(C.HalfColumn, J.HalfColumn) },
                d.createElement(
                  "div",
                  { className: C.EventEditorTextTitle },
                  Object(h.f)("#Sale_Section_BackgroundColors_Title"),
                  " "
                ),
                d.createElement(
                  m.d,
                  {
                    onClick: function (e) {
                      Object(O.a)(
                        d.createElement(T.a, {
                          onChange: function (e) {
                            r(n, e, "label_color");
                          },
                          color: n.label_color,
                        }),
                        e,
                        { bDisablePopTop: !0 }
                      );
                    },
                    className: C.EventEditorTextTitle,
                    style: { color: n.label_color },
                  },
                  Object(h.f)("#Sale_Section_Label_Color")
                ),
                !n.disable_background &&
                  d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(
                      m.d,
                      {
                        onClick: function (e) {
                          Object(O.a)(
                            d.createElement(T.a, {
                              onChange: function (e) {
                                return r(n, e, "background_gradient_top");
                              },
                              color: n.background_gradient_top,
                            }),
                            e,
                            { bDisablePopTop: !0 }
                          );
                        },
                        className: C.EventEditorTextTitle,
                        style: { color: n.label_color, background: _ },
                      },
                      Object(h.f)("#Sale_Section_Background_Top")
                    ),
                    d.createElement(
                      m.d,
                      {
                        onClick: function (e) {
                          Object(O.a)(
                            d.createElement(T.a, {
                              onChange: function (e) {
                                return r(n, e, "background_gradient_bottom");
                              },
                              color: n.background_gradient_bottom,
                            }),
                            e,
                            { bDisablePopTop: !0 }
                          );
                        },
                        className: C.EventEditorTextTitle,
                        style: { color: n.label_color, background: _ },
                      },
                      Object(h.f)("#Sale_Section_Background_Bottom")
                    )
                  ),
                d.createElement(ut, {
                  varName: "disable_background",
                  editModel: t,
                  section: n,
                  textToken: "#Sale_Section_DisableBackground",
                  ttipToken: "#Sale_Section_DisableBackground_ttip",
                })
              ),
              Boolean(f && !n.disable_background) &&
                d.createElement(
                  "div",
                  { className: Object(k.a)(C.HalfColumn, J.HalfColumn) },
                  d.createElement(
                    "div",
                    { className: C.EventEditorTextTitle },
                    Object(h.f)("#Sale_Section_BackgroundImage_Title"),
                    " ",
                    d.createElement(Ye, {
                      tooltip: Object(h.f)(
                        "#Sale_Section_BackgroundImage_ttip"
                      ),
                    })
                  ),
                  d.createElement(s.b, {
                    bAllowPreviousClanImages: !0,
                    onDropFiles: function (e) {
                      return Object(a.b)(void 0, void 0, void 0, function () {
                        var r, l, s, c, u;
                        return Object(a.e)(this, function (a) {
                          switch (a.label) {
                            case 0:
                              return e && e.length > 0
                                ? ((r = ["sale_section_background"]),
                                  [4, i.AddImage(e[0], 0, r)])
                                : [3, 4];
                            case 1:
                              return a.sent()
                                ? [3, 2]
                                : (console.error(
                                    "SaleSection.OnDropFiles: failed file=" +
                                      e[0].name
                                  ),
                                  Object(I.d)(
                                    d.createElement(g.f, {
                                      strDescription: Object(h.f)(
                                        "#ImagePicker_Error",
                                        e[0].name
                                      ),
                                    }),
                                    window
                                  ),
                                  [3, 4]);
                            case 2:
                              return [4, i.UploadAllFiles(r)];
                            case 3:
                              (l = a.sent()),
                                (s = l[Object.keys(l)[0]]),
                                (c = s ? p.a.GetExtensionString(s) : null),
                                (u = s ? s.image_hash + c : null),
                                (n.background_image = u),
                                t.SetDirty(o.c.jsondata_sales),
                                (a.label = 4);
                            case 4:
                              return [2];
                          }
                        });
                      });
                    },
                    OnClanImageSelected: function (e, i) {
                      return Object(a.b)(void 0, void 0, void 0, function () {
                        var i, r;
                        return Object(a.e)(this, function (a) {
                          return (
                            (i = e ? p.a.GetExtensionString(e) : null),
                            (r = e ? e.image_hash + i : null),
                            (n.background_image = r),
                            t.SetDirty(o.c.jsondata_sales),
                            [2]
                          );
                        });
                      });
                    },
                    clanSteamID: t.GetClanSteamID(),
                    fnSetImageURL: t.SetImageURL,
                    rgRealmList: t.GetIncludedRealmList(),
                  }),
                  d.createElement(
                    F.b,
                    { clanSteamID: t.GetClanSteamID(), requireAdmin: !0 },
                    d.createElement(
                      m.d,
                      {
                        onClick: function (e) {
                          e.preventDefault(), e.stopPropagation(), c(!1);
                        },
                        "data-tooltip-text": Object(h.f)(
                          "#Sale_Seciton_BannerImage_Override_ttip"
                        ),
                        className: C.EventEditorTextTitle,
                      },
                      Object(h.f)("#Sale_Seciton_BannerImage_Override")
                    ),
                    d.createElement(
                      m.d,
                      {
                        onClick: function (e) {
                          e.preventDefault(), e.stopPropagation(), c(!0);
                        },
                        "data-tooltip-text": Object(h.f)(
                          "#Sale_Seciton_BannerImage_Override_ttip"
                        ),
                        className: C.EventEditorTextTitle,
                      },
                      Object(h.f)("#Sale_Seciton_MobileBannerImage_Override")
                    ),
                    Boolean(
                      void 0 !== n.localized_sale_product_banner_override ||
                        void 0 !==
                          n.localized_sale_product_mobile_banner_override
                    ) &&
                      d.createElement(
                        m.d,
                        {
                          onClick: function () {
                            (n.localized_sale_product_banner_override = void 0),
                              (n.localized_sale_product_mobile_banner_override = void 0),
                              t.SetDirty(o.c.jsondata_sales);
                          },
                          className: C.EventEditorTextTitle,
                        },
                        Object(h.f)("#Sale_Section_BannerImage_Clear")
                      )
                  ),
                  d.createElement(
                    m.d,
                    {
                      onClick: function () {
                        (n.background_image = null),
                          t.SetDirty(o.c.jsondata_sales);
                      },
                      className: C.EventEditorTextTitle,
                    },
                    Object(h.f)("#Sale_Section_Background_Clear")
                  )
                )
            )
          );
        }),
        pe = n("48GZ"),
        me = n("4lry"),
        _e = n("Cs6D"),
        ge = n("ZeAL"),
        he = n("Yamg"),
        fe = n("3+zv"),
        be = n("qD+2"),
        ve = n("R+8l"),
        Se = n("oVVc"),
        Ee = n("UWWC"),
        ye = n("4P4B"),
        Oe = n("IjL/"),
        Te = n("6AJf"),
        Ce = n("nxSy"),
        je = n("zoRj"),
        Ie = n("gyoR"),
        De = n("MnIK"),
        we = n("6Y59"),
        Me = n("0OaU"),
        ke = n("YyVH"),
        Ge = n("IzPI"),
        Le = (function () {
          function e() {
            "dev" === A.c.WEB_UNIVERSE &&
              (window.g_ContentHubNamesStore = this);
          }
          return (
            (e.prototype.BHasContentHubNames = function () {
              return Boolean(this.m_hubNames);
            }),
            (e.prototype.GetContentHubNames = function () {
              return this.m_hubNames;
            }),
            (e.prototype.LoadContentHubNames = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                return Object(a.e)(this, function (e) {
                  return this.m_hubNames
                    ? [2]
                    : (this.m_promise ||
                        (this.m_promise = this.InternalLoadContentHubNames()),
                      [2, this.m_promise]);
                });
              });
            }),
            (e.prototype.InternalLoadContentHubNames = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, i, o, l, s, c, u, d, p, m;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 2, , 3]),
                        (t =
                          A.c.STORE_BASE_URL + "contenthub/ajaxgetcontenthubs"),
                        (n = { origin: self.origin }),
                        [4, r.a.get(t, { params: n })]
                      );
                    case 1:
                      return 1 !== (i = a.sent()).data.success
                        ? [2, null]
                        : ((e = i.data), [3, 3]);
                    case 2:
                      return a.sent(), [2, null];
                    case 3:
                      for (
                        o = new Map(), l = 0, s = Object.keys(e.categories);
                        l < s.length;
                        l++
                      )
                        (c = s[l]), o.set(c, e.categories[c]);
                      for (
                        u = new Map(), d = 0, p = Object.keys(e.tags);
                        d < p.length;
                        d++
                      )
                        (m = p[d]), u.set(Number(m), e.tags[m]);
                      return (
                        (this.m_hubNames = {
                          hubtypes: e.hubtypes,
                          categories: o,
                          tags: u,
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.Get = function () {
              return e.s_singleton || (e.s_singleton = new e()), e.s_singleton;
            }),
            e
          );
        })();
      var Ae = n("UCyf"),
        Be = n("5izx"),
        Fe = n("BRUS"),
        Ne = n("66At"),
        Re = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnShowOnlySaleWhiteListedBroadcasts = function (e) {
              this.props.editModel.GetEventModel().jsondata
                .sale_only_whitelisted_broadcasts !== e &&
                ((this.props.editModel.GetEventModel().jsondata.sale_only_whitelisted_broadcasts = e),
                this.props.editModel.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.BIsFirstBroadcastSaleSection = function () {
              for (var e = 0; e < this.props.index; e++) {
                if (
                  "broadcast" ==
                  this.props.editModel.GetEventModel().GetSaleSections()[e]
                    .section_type
                )
                  return !1;
              }
              return !0;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.editModel,
                n =
                  (e.saleSection,
                  d.createElement(
                    z.c,
                    {
                      eventModel: t.GetEventModel(),
                      route: z.a.k_eCommunityEditBroadcast,
                      className: J.CrossTabLink,
                    },
                    Object(h.f)("#Sale_Broadcast_TabLink")
                  ));
              return t.GetEventModel().BHasBroadcastEnabled()
                ? this.BIsFirstBroadcastSaleSection()
                  ? d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        "div",
                        { className: C.InputBorder },
                        d.createElement(m.q, {
                          onChange: this.OnShowOnlySaleWhiteListedBroadcasts,
                          label: Object(h.f)(
                            "#Sale_BroadcastOnlyWhiteListedInSale"
                          ),
                          tooltip: Object(h.f)(
                            "#Sale_BroadcastOnlyWhiteListedInSale_ttip"
                          ),
                          checked: t.GetEventModel().jsondata
                            .sale_only_whitelisted_broadcasts,
                        })
                      ),
                      n
                    )
                  : d.createElement(
                      "div",
                      { className: J.CrossTabWarning },
                      Object(h.f)("#Sale_ShowingBroadcastElsewhere")
                    )
                : d.createElement(
                    d.Fragment,
                    null,
                    n,
                    d.createElement(
                      "div",
                      { className: J.CrossTabWarning },
                      Object(h.f)("#Sale_Broadcast_Disabled"),
                      d.createElement(Ye, {
                        tooltip: Object(h.f)("#Sale_Broadcast_Disabled_hint"),
                      })
                    )
                  );
            }),
            Object(a.c)(
              [f.a],
              t.prototype,
              "OnShowOnlySaleWhiteListedBroadcasts",
              null
            ),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        xe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_currentRequest = 0),
              (t.m_cancelSignal = r.a.CancelToken.source()),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "CuratorSaleSection component unmounted"
              ),
                window.clearTimeout(this.m_currentRequest);
            }),
            (t.prototype.SetCurator = function (e) {
              this.props.saleSection.curator_clan_id != e.GetClanAccountID() &&
                ((this.props.saleSection.curator_clan_id = e.GetClanAccountID()),
                this.props.editModel.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.UpdateCuratorSuggestions = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(a.e)(this, function (i) {
                  return (t = e.target.value) && 0 != t.trim().length
                    ? (window.clearTimeout(this.m_currentRequest),
                      (this.m_currentRequest = window.setTimeout(function () {
                        return Object(a.b)(n, void 0, void 0, function () {
                          var e,
                            n = this;
                          return Object(a.e)(this, function (a) {
                            switch (a.label) {
                              case 0:
                                return [
                                  4,
                                  P.a.SearchCreatorHomeStore(
                                    t,
                                    !1,
                                    this.m_cancelSignal
                                  ),
                                ];
                              case 1:
                                return (
                                  (e = a.sent()),
                                  (this.m_searchResultsMenu = Object(O.a)(
                                    d.createElement(
                                      V.c,
                                      { className: J.SearchResults },
                                      e.map(function (e) {
                                        return d.createElement(
                                          V.d,
                                          {
                                            key:
                                              "curatorresult" +
                                              e.GetClanAccountID(),
                                            onSelected: function () {
                                              return n.SetCurator(e);
                                            },
                                          },
                                          d.createElement(
                                            "div",
                                            {
                                              style: {
                                                display: "flex",
                                                alignItems: "center",
                                              },
                                            },
                                            d.createElement(
                                              "div",
                                              {
                                                className:
                                                  q.a.GameImageContainer,
                                              },
                                              d.createElement("img", {
                                                src: e.GetAvatarURLFullSize(),
                                                className: q.a.AvatarImage,
                                              })
                                            ),
                                            Object(Y.b)(e.GetName())
                                          )
                                        );
                                      })
                                    ),
                                    this.m_refInput.element,
                                    {
                                      bOverlapHorizontal: !0,
                                      bMatchWidth: !0,
                                      bFitToWindow: !0,
                                      bDisablePopTop: !0,
                                    }
                                  )),
                                  [2]
                                );
                            }
                          });
                        });
                      }, 300)),
                      [2])
                    : [2];
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.saleSection;
              return d.createElement(
                "div",
                null,
                d.createElement(
                  "div",
                  { className: J.SaleImportURL },
                  d.createElement(m.m, {
                    type: "text",
                    label: Object(h.f)("#Sale_SearchCurator"),
                    onChange: this.UpdateCuratorSuggestions,
                    onBlur: function () {
                      setTimeout(function () {
                        return (
                          e.m_searchResultsMenu && e.m_searchResultsMenu.Hide()
                        );
                      }, 200);
                    },
                    ref: function (t) {
                      return (e.m_refInput = t);
                    },
                    tooltip: Object(h.f)("#Sale_SearchCurator_ttip"),
                  })
                ),
                Boolean(t.curator_clan_id) &&
                  d.createElement(Fe.a, {
                    creatorID: {
                      name: null,
                      clan_account_id: t.curator_clan_id,
                      type: "developer",
                    },
                    bShowTagline: !0,
                    bHideCreatorType: !0,
                  })
              );
            }),
            Object(a.c)([f.a], t.prototype, "SetCurator", null),
            Object(a.c)([f.a], t.prototype, "UpdateCuratorSuggestions", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        Pe = Object(u.a)(function (e) {
          for (
            var t = e.editModel, n = e.index, a = t.GetEventModel(), i = 0;
            i < n;
            i++
          )
            if ("event_description" == a.GetSaleSections()[i].section_type)
              return d.createElement(
                "div",
                { className: J.CrossTabWarning },
                Object(h.f)("#Sale_UsingEventBodyElsewhere")
              );
          return d.createElement(
            z.c,
            {
              eventModel: a,
              route: z.a.k_eCommunityEdit,
              className: J.CrossTabLink,
            },
            Object(h.f)("#Sale_EventDescriptionTabLink")
          );
        }),
        Ue = Object(u.a)(function (e) {
          var t,
            n = e.editModel,
            i = e.index,
            l = n.GetEventModel(),
            s = l.GetSaleSections()[i],
            c = d.useState(!0),
            u = c[0],
            p = c[1];
          if (
            (d.useEffect(
              function () {
                var e = null;
                if (u)
                  if (
                    ((e = r.a.CancelToken.source()), s.featured_curator_list)
                  ) {
                    var t = new Array();
                    s.featured_curator_list.forEach(function (n) {
                      var a = R.a.InitFromClanID(n.clanAccountID);
                      t.push(Ae.a.Get().LoadListDetails(a, n.listID, e));
                    }),
                      Promise.all(t).then(function () {
                        return p(!1);
                      });
                  } else (s.featured_curator_list = []), p(!1);
                return function () {
                  return null == e
                    ? void 0
                    : e.cancel("CuratorRecommendationWidgetEditor: unmounting");
                };
              },
              [u, s]
            ),
            u)
          )
            return d.createElement(Me.a, {
              size: "medium",
              string: Object(h.f)("#Loading"),
            });
          for (var _ = !1, g = 0; g < i; g++)
            if (
              "curator_recommendation" == l.GetSaleSections()[g].section_type
            ) {
              _ = !0;
              break;
            }
          return d.createElement(
            "div",
            null,
            d.createElement(
              "div",
              null,
              Object(h.f)("#Sale_CuratorRecommendation_desc")
            ),
            d.createElement("br", null),
            d.createElement(j.a, {
              strDescription: Object(h.f)(
                "#Sale_CuratorRecommendation_StartTime"
              ),
              strDescToolTip: Object(h.f)(
                "#Sale_CuratorRecommendation_StartTime_ttip"
              ),
              nEarliestTime: n.GetEventStartTime(),
              nLatestTime: n.GetEventEndTime(),
              fnGetTimeToUpdate: function () {
                return (
                  s.featured_curator_list_rtime_start || n.GetEventStartTime()
                );
              },
              fnSetTimeToUpdate: function (e) {
                (e = re(e)),
                  s.featured_curator_list_rtime_start != e &&
                    ((s.featured_curator_list_rtime_start = e),
                    n.SetDirty(o.c.jsondata_sales));
              },
              fnIsValidDateTime: function () {
                return !0;
              },
              bShowTimeZone: !0,
            }),
            d.createElement(
              "div",
              { className: C.EventEditorTextTitle },
              Object(h.f)("#Sale_CuratorRecommendation_FeaturedList"),
              d.createElement(Ye, {
                tooltip: Object(h.f)(
                  "#Sale_CuratorRecommendation_FeaturedList_ttip"
                ),
              })
            ),
            d.createElement(D.a, {
              items: s.featured_curator_list,
              onDelete: function (e) {
                s.featured_curator_list.splice(e, 1),
                  n.SetDirty(o.c.jsondata_sales);
              },
              onReorder: function () {
                return n.SetDirty(o.c.jsondata_sales);
              },
              render: function (e) {
                return d.createElement(He, { tuple: e });
              },
            }),
            d.createElement(
              m.d,
              {
                onClick: function (t) {
                  Object(I.d)(
                    d.createElement(Ve, Object(a.a)({}, e, { saleSection: s })),
                    Object(G.m)(t)
                  );
                },
              },
              Object(h.f)("#Sale_CuratorRecommendation_ChooseList")
            ),
            Boolean(
              (null === (t = s.featured_curator_list) || void 0 === t
                ? void 0
                : t.length) >= 2
            ) &&
              d.createElement(ut, {
                varName: "use_random_order",
                editModel: n,
                section: s,
                textToken: "#Sale_Section_FeaturedCurator_UseRandomOrder",
                ttipToken: "#Sale_Section_FeaturedCurator_UseRandomOrder_hint",
              }),
            _ &&
              d.createElement(
                "div",
                { className: J.CrossTabWarning },
                Object(h.f)("#Sale_UsingCuratorRecommendationElsewhere")
              )
          );
        });
      var He = Object(u.a)(function (e) {
          if (
            ((n = e.tuple),
            "object" == typeof (a = n) &&
              "number" == typeof a.clanAccountID &&
              "string" == typeof a.listID)
          ) {
            var t = Ae.a.Get().GetListDetails(e.tuple.listID);
            return t
              ? d.createElement("div", null, t.title)
              : d.createElement(Me.a, {
                  size: "small",
                  string: Object(h.f)("#Loading"),
                });
          }
          var n, a;
          return d.createElement("div", null, Object(h.f)("#Error"));
        }),
        Ve = Object(u.a)(function (e) {
          var t = e.saleSection,
            n = e.editModel,
            i = n.GetClanSteamID(),
            l = n.GetGID(),
            s = d.useState(!0),
            c = s[0],
            u = s[1],
            p = d.useState(null),
            _ = p[0],
            f = p[1],
            b = function () {
              return e.closeModal && e.closeModal();
            },
            v =
              n.GetEventModel().BIsVisibleEvent() &&
              n.GetEventStartTime() < Be.a.GetTimeNowWithOverride();
          d.useEffect(
            function () {
              var e = null;
              return (
                v
                  ? ((e = r.a.CancelToken.source()),
                    Ae.a
                      .Get()
                      .LoadAllSaleCurationLists(i, l, e)
                      .then(function (e) {
                        if ((null == e ? void 0 : e.length) > 0) {
                          var t = new Array();
                          e.forEach(function (e) {
                            var n = Ae.a
                                .Get()
                                .GetClanAccountFromListID(e.listid),
                              a = R.a.InitFromClanID(n);
                            t.push(x.a.LoadClanInfoForClanSteamID(a));
                          }),
                            Promise.all(t).then(function () {
                              return u(!1);
                            });
                        }
                      }))
                  : u(!1),
                function () {
                  return null == e
                    ? void 0
                    : e.cancel("FeatureCuratorListDialog: unmounting");
                }
              );
            },
            [v, i, l]
          );
          var S = {
              option: function (e) {
                return Object(a.a)(Object(a.a)({}, e), { color: "#444444" });
              },
            },
            E = new Array();
          Ae.a
            .Get()
            .GetAllSaleCurationLists(n.GetGID())
            .forEach(function (e) {
              if (
                -1 ==
                t.featured_curator_list.findIndex(function (t) {
                  return t.listID == e.listid;
                })
              ) {
                var n = Ae.a.Get().GetClanAccountFromListID(e.listid);
                E.push({ clanAccountID: n, list: e });
              }
            });
          var y = E.map(function (e) {
            var t = x.a.GetClanInfoByClanAccountID(e.clanAccountID),
              n = t ? t.group_name : "GroupID " + e.clanAccountID;
            return { label: (n += ": " + e.list.title), value: e.list.listid };
          });
          return d.createElement(
            Oe.a,
            null,
            d.createElement(
              g.h,
              { onEscKeypress: b },
              d.createElement(
                m.f,
                null,
                d.createElement(
                  m.l,
                  null,
                  Object(h.f)("#Sale_CuratorRecommendation_ChooseList")
                ),
                d.createElement(
                  m.b,
                  null,
                  d.createElement(
                    m.c,
                    null,
                    d.createElement(
                      "div",
                      null,
                      Object(h.f)("#Sale_CuratorRecommendation_ChooseDesc")
                    ),
                    v
                      ? d.createElement(
                          "div",
                          { className: Ne.SelectArea },
                          c
                            ? d.createElement(Me.a, {
                                size: "medium",
                                string: Object(h.f)("#Loading"),
                              })
                            : d.createElement(_e.a, {
                                styles: S,
                                className: Ne.dropDown,
                                isSearchable: !0,
                                isMulti: !1,
                                options: y,
                                defaultMenuIsOpen: !1,
                                value: _,
                                onChange: function (e) {
                                  return f(e);
                                },
                              })
                        )
                      : d.createElement(
                          "div",
                          { className: Ne.DisplayWarning },
                          Object(h.f)(
                            "#Sale_CuratorRecommendation_ChooseInvalid"
                          )
                        )
                  )
                ),
                d.createElement(
                  m.k,
                  null,
                  d.createElement(m.o, {
                    onCancel: b,
                    bOKDisabled: null == _,
                    onOK: function () {
                      var e = _.value;
                      t.featured_curator_list.push({
                        clanAccountID: Ae.a.Get().GetClanAccountFromListID(e),
                        listID: e,
                      }),
                        n.SetDirty(o.c.jsondata_sales),
                        b();
                    },
                  })
                )
              )
            )
          );
        }),
        ze = n("165M"),
        We = function (e) {
          return d.createElement(
            Oe.a,
            null,
            d.createElement(
              ut,
              Object(a.a)(
                {
                  textToken: "#Sale_Section_CarouselAutoAdvance",
                  ttipToken: "#Sale_Section_CarouselAutoAdvance_Tooltip",
                  varName: "carousel_auto_advance",
                  valveOnly: !0,
                },
                e
              )
            )
          );
        },
        qe = n("GOhU"),
        Ye = function (e) {
          return d.createElement(
            "span",
            {
              "data-tooltip-text": e.tooltip,
              className: Object(k.a)(C.HelperTooltip, "HelperTooltip"),
            },
            " ",
            d.createElement(we.z, null)
          );
        };
      function Je(e, t) {
        return e.disable_background
          ? { background: "transparent" }
          : Object(Te.f)(e, t);
      }
      function Qe(e, t) {
        for (var n = 0, a = e.GetSaleSections(); n < a.length; n++) {
          var i = a[n];
          if (i === t) break;
          if ("tabs" === i.section_type) return i;
        }
        return null;
      }
      function Ke(e, t) {
        var n = Qe(e, t);
        if (n) {
          var i = new Set(Object(a.g)(t.show_on_tabs || [])),
            r = n.tabs.map(function (n) {
              var a,
                r =
                  (null === (a = t.capsules) || void 0 === a
                    ? void 0
                    : a.length) > 0
                    ? (function (e, t) {
                        var n = new Set();
                        e.forEach(function (e) {
                          return n.add(Number(e.id));
                        });
                        for (var a = 0, i = 0, r = t; i < r.length; i++) {
                          var o = r[i];
                          n.has(Number(o.id)) && a++;
                        }
                        return a;
                      })(t.capsules, n.capsules)
                    : void 0,
                o = void 0 === r ? "" : " (" + r + ")";
              return d.createElement(m.e, {
                key: n.unique_id,
                classname: E.ShowOnTabCheckBox,
                onChange: function (e) {
                  e ? i.add(n.unique_id) : i.delete(n.unique_id);
                },
                label: Object(Te.g)(n, e.GetCurEditLanguage()) + o,
                checked: i.has(n.unique_id),
              });
            });
          Object(I.d)(
            d.createElement(
              g.d,
              {
                strTitle: Object(h.f)("#Sale_Section_ShowOnTabs_DialogTitle"),
                strDescription: Object(h.f)(
                  "#Sale_Section_ShowOnTabs_DialogDesc"
                ),
                onOK: function () {
                  (t.show_on_tabs = Array.from(i.keys())),
                    e.SetDirty(o.c.jsondata_sales);
                },
              },
              d.createElement("div", { className: E.ShowOnTabCheckBoxCtn }, r)
            ),
            window
          );
        }
      }
      var Ze = Object(u.a)(function (e) {
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              "div",
              { className: E.SaleSectionTitleHeader },
              d.createElement(
                "div",
                { className: C.EventEditorTextTitle },
                e.title,
                d.createElement(Ye, { tooltip: e.tooltip })
              ),
              d.createElement(ze.a, {
                bIsMinimized: e.getMinimized(),
                fnToggleMinimize: e.toggleMinimized,
              })
            ),
            !e.getMinimized() && d.createElement(Oe.a, null, e.children)
          );
        }),
        Xe = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetShowOnTabsList = function (e) {
              var t = this.props,
                n = t.saleSection,
                a = t.editLanguage;
              if (!e || !n.show_on_tabs || 0 === n.show_on_tabs.length)
                return Object(h.f)("#Sale_Section_ShowOnTabs_All");
              for (
                var i = [],
                  r = function (t) {
                    var n = e.tabs
                      ? e.tabs.find(function (e) {
                          return e.unique_id === t;
                        })
                      : null;
                    n && i.push(Object(Te.g)(n, a));
                  },
                  o = 0,
                  l = n.show_on_tabs;
                o < l.length;
                o++
              ) {
                r(l[o]);
              }
              return 0 === i.length
                ? Object(h.f)("#Sale_Section_ShowOnTabs_All")
                : i.join(", ");
            }),
            (t.prototype.OnEditTabSections = function () {
              var e = this.props,
                t = e.saleSection;
              Ke(e.editModel, t);
            }),
            (t.prototype.render = function () {
              var e = Qe(this.props.editModel, this.props.saleSection);
              return e && e.tabs && 0 !== e.tabs.length
                ? d.createElement(
                    Ze,
                    {
                      title: Object(h.f)("#Sale_Section_TabSettings_Title"),
                      tooltip: Object(h.f)(
                        "#Sale_Section_TabSettings_Title_ttip"
                      ),
                      getMinimized: this.props.getMinimized,
                      toggleMinimized: this.props.toggleMinimized,
                    },
                    d.createElement(ut, {
                      varName: "diable_tab_id_filtering",
                      editModel: this.props.editModel,
                      section: this.props.saleSection,
                      textToken: "#Sale_Section_TabSettings_DisableIDFiltering",
                      ttipToken:
                        "#Sale_Section_TabSettings_DisableIDFiltering_ttip",
                    }),
                    d.createElement(
                      "div",
                      { style: { display: "flex" } },
                      d.createElement(
                        "div",
                        {
                          className: Object(k.a)(
                            C.EventEditorTextTitle,
                            E.ShowOnTabsLabel
                          ),
                        },
                        Object(h.f)("#Sale_Section_ShowOnTabs"),
                        this.GetShowOnTabsList(e)
                      ),
                      d.createElement(
                        "div",
                        { className: E.ShowOnTabsButton },
                        d.createElement(
                          m.r,
                          { onClick: this.OnEditTabSections },
                          Object(h.f)("#Sale_Section_ShowOnTabs_Edit")
                        )
                      )
                    )
                  )
                : null;
            }),
            Object(a.c)([f.a], t.prototype, "OnEditTabSections", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        $e = Object(u.a)(function (e) {
          var t = e.saleSection,
            n = e.editModel;
          if (!t.label_link) return null;
          return d.createElement(
            F.b,
            { clanSteamID: n.GetClanSteamID() },
            d.createElement(m.q, {
              onChange: function (e) {
                (t.label_link_style = e ? "browseall" : void 0),
                  n.SetDirty(o.c.jsondata_sales);
              },
              label: "(VO) " + Object(h.f)("#Sale_Section_TitleLink_BrowseAll"),
              tooltip: Object(h.f)("#Sale_Section_TitleLink_BrowseAll_ttip"),
              checked: "browseall" === t.label_link_style,
            })
          );
        });
      function et(e, t, n, a, i) {
        var r = Object(Te.e)(e, t, n.GetClanSteamID().GetAccountID(), i);
        if (r) return r;
        var o = Object(h.f)("#Sale_Section_Header", a + 1),
          l = "#Sale_Section_Type_" + e.section_type,
          s = Object(h.f)(l);
        return s !== l && (o = o + " (" + s + ")"), o;
      }
      var tt = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.state = { bIsExiting: !1 }), t;
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.componentDidMount = function () {
            var e = new Set(),
              t = new Array(),
              n = new Array();
            this.props.saleSection.capsules.forEach(function (a) {
              a &&
                ("bundle" === a.type
                  ? t.push(a.id)
                  : "sub" === a.type
                  ? n.push(a.id)
                  : e.add(a.id));
            }),
              be.a.EnsureAppInfoForAppIDs(new Set(e)),
              ve.a.LoadBundleInfo(t),
              Se.b.LoadPackageInfo(n),
              H.d.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                null,
                this.props.saleSection.events
                  .filter(function (e) {
                    return Boolean(null == e ? void 0 : e.announcement_gid);
                  })
                  .map(function (e) {
                    return e.announcement_gid;
                  })
              );
          }),
          (t.prototype.RemoveSection = function (e) {
            var t = this;
            Object(I.d)(
              d.createElement(g.d, {
                strTitle: Object(h.f)("#Button_Remove"),
                strDescription: Object(h.f)("#Sale_RemoveSectionConfirmation"),
                onOK: function () {
                  return t.DoRemoveSection(e);
                },
              }),
              window
            );
          }),
          (t.prototype.DoRemoveSection = function (e) {
            var t = this;
            this.setState({ bIsExiting: !0 }),
              window.setTimeout(function () {
                t.props.editModel
                  .GetEventModel()
                  .jsondata.sale_sections.splice(e, 1),
                  t.props.editModel.SetDirty(o.c.jsondata_sales);
              }, 500);
          }),
          (t.prototype.OnTitleChange = function (e) {
            (this.props.saleSection.default_label = e),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.OnTitleLinkChange = function (e) {
            (this.props.saleSection.label_link = e.target.value),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.OnSetCustomTitle = function (e) {
            var t = this.props,
              n = t.saleSection,
              a = t.editLanguage,
              i = t.editModel;
            (n.localized_label = h.a.Set(n.localized_label || [], a, e)),
              i.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.OnClearCustomTitle = function () {
            var e = this.props,
              t = e.saleSection,
              n = e.editLanguage,
              a = e.editModel;
            (t.localized_label = h.a.Set(t.localized_label || [], n, null)),
              a.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.OnShowTitleImageUpload = function (e, t) {
            e.preventDefault(),
              e.stopPropagation(),
              Object(I.d)(
                d.createElement(S, {
                  loc_images: t.localized_label_image,
                  fnSetImage: function (e, n) {
                    t.localized_label_image = h.a.Set(
                      t.localized_label_image || [],
                      e,
                      n
                    );
                  },
                  editModel: this.props.editModel,
                  artworkType: "sale_section_title",
                }),
                window
              );
          }),
          (t.prototype.OnSaleSectionTypeChange = function (e) {
            o.e.SetSaleSectionType(this.props.saleSection, e.data),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.MoveSection = function (e) {
            var t = e ? 1 : -1;
            Object(M.d)(
              this.props.editModel.GetEventModel().jsondata.sale_sections,
              this.props.index,
              Object(ke.a)(
                this.props.index + t,
                0,
                this.props.editModel.GetEventModel().jsondata.sale_sections
                  .length - 1
              )
            ),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.GetMinimizedTag = function (e) {
            var t = "SaleSection_" + this.props.saleSection.unique_id;
            return e && (t += "_" + e), t;
          }),
          (t.prototype.GetMinimized = function (e, t) {
            return Object(l.a)(this.GetMinimizedTag(e), t);
          }),
          (t.prototype.ToggleMinimized = function (e, t) {
            Object(l.d)(this.GetMinimizedTag(e), t);
          }),
          (t.prototype.OnChangeContentHubOverrideKey = function (e) {
            (this.props.saleSection.contenthub_override_section = e.target.value.trim()),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.render = function () {
            var e = this,
              t = this.props,
              n = t.editModel,
              i = t.saleSection,
              r = t.editLanguage,
              o = [
                {
                  label: Object(h.f)("#Sale_NoChoiceMade"),
                  data: "unselected_empty",
                },
                {
                  label: Object(h.f)("#Sale_Items"),
                  data: "items",
                  tooltip: Object(h.f)("#Sale_Items_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_TextSection"),
                  data: "text_section",
                  tooltip: Object(h.f)("#Sale_TextSection_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_Events"),
                  data: "events",
                  tooltip: Object(h.f)("#Sale_Events_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_CuratorSection"),
                  data: "curator",
                  tooltip: Object(h.f)("#Sale_CuratorSection_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_BroadcastPlayerSection"),
                  data: "broadcast",
                  tooltip: Object(h.f)("#Sale_BroadcastPlayerSection_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_SectionType_EventSchedule"),
                  data: "event_schedule",
                  tooltip: Object(h.f)("#Sale_SectionType_EventSchedule_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_Tabs"),
                  data: "tabs",
                  tooltip: Object(h.f)("#Sale_Tabs_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_TabButtons"),
                  data: "tab_buttons",
                  tooltip: Object(h.f)("#Sale_TabButtons_ttip"),
                },
                {
                  label: Object(h.f)("#Sale_Links"),
                  data: "links",
                  tooltip: Object(h.f)("#Sale_Links_ttip"),
                },
              ];
            Object(F.a)(n.GetClanSteamID()) &&
              (o.push({
                label: "(VO) " + Object(h.f)("#Sale_CuratorRecommendation"),
                data: "curator_recommendation",
                tooltip: Object(h.f)("#Sale_CuratorRecommendation_ttip"),
              }),
              o.push({
                label: "(VO) " + Object(h.f)("#Sale_AdventCalendarDoorSection"),
                data: "doors",
              }),
              o.push({
                label: "(VO) " + Object(h.f)("#Sale_VOInternalSection"),
                data: "vo_internal",
              }),
              o.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_VOInternalSection_SaleItemBrowser"),
                data: "sale_item_browser",
              }),
              o.push({
                label:
                  "(VO) " + Object(h.f)("#Sale_SectionType_ContentHubTitle"),
                data: "contenthubtitle",
              }),
              o.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_SectionType_ContentHubMainCarousel"),
                data: "contenthubmaincarousel",
              }),
              o.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_SectionType_ContentHubSectionList"),
                data: "contenthubsections",
              }));
            var l = n.GetEventModel().jsondata,
              s = l.sale_font,
              c = l.sale_section_font_size,
              u = l.sale_section_disable_capitalize,
              p = Object(Te.d)(i),
              _ = this.props.saleSection.section_type || o[0].data,
              g = Boolean(h.a.GetWithFallback(i.localized_label, r)),
              f =
                g ||
                se.a.IsValidTitleOption(this.props.saleSection.default_label),
              b = 0;
            i.localized_label_image &&
              i.localized_label_image.forEach(function (e) {
                b += e ? 1 : 0;
              });
            var v,
              S = this.GetMinimized("", !1),
              y =
                "event_schedule" !== i.section_type &&
                "broadcast" !== i.section_type;
            return d.createElement(
              "div",
              {
                id: "SaleSection_" + i.unique_id,
                className: Object(k.a)(J.SaleSection, J.InEditor),
                style: Object(a.a)(Object(a.a)({}, Je(i, n.GetEventModel())), {
                  opacity: this.state.bIsExiting ? 0 : 1,
                  transition: "opacity 500ms",
                }),
              },
              d.createElement(
                "div",
                {
                  className: C.SaleSectionHeader,
                  onDoubleClick: function () {
                    return e.ToggleMinimized("", !1);
                  },
                  style: {
                    fontFamily: s,
                    fontSize: c,
                    textTransform: u ? "initial" : null,
                    color: this.props.saleSection.label_color,
                  },
                },
                et(i, this.props.editLanguage, n, this.props.index, !1),
                d.createElement(
                  "div",
                  { className: Object(k.a)(C.CloseSectionTools) },
                  d.createElement(
                    "div",
                    { className: C.FlexRowContainer },
                    d.createElement(
                      m.d,
                      {
                        "data-tooltip-text": Object(h.f)(
                          "#Sale_Section_ReorderUp_Title"
                        ),
                        disabled: 0 == this.props.index,
                        onClick: function () {
                          return e.MoveSection(!1);
                        },
                      },
                      d.createElement(we.c, { angle: 0 })
                    ),
                    d.createElement(
                      m.d,
                      {
                        "data-tooltip-text": Object(h.f)(
                          "#Sale_Section_ReorderDown_Title"
                        ),
                        disabled:
                          this.props.index + 1 == n.GetSaleSectionCount(),
                        onClick: function () {
                          return e.MoveSection(!0);
                        },
                      },
                      d.createElement(we.c, { angle: 180 })
                    ),
                    d.createElement(ze.a, {
                      bIsMinimized: S,
                      fnToggleMinimize: function () {
                        return e.ToggleMinimized("", !1);
                      },
                    }),
                    d.createElement(
                      m.d,
                      {
                        "data-tooltip-text": Object(h.f)("#Button_Remove"),
                        onClick: function () {
                          return e.RemoveSection(e.props.index);
                        },
                      },
                      d.createElement(we.ob, null)
                    )
                  )
                )
              ),
              S
                ? d.createElement(nt, {
                    editModel: n,
                    section: i,
                    tabSection: n.GetTabSaleSection(),
                  })
                : d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(
                      De.a,
                      { placeholderHeight: "300px", className: J.EditorCtn },
                      d.createElement(
                        "div",
                        { className: J.SectionTypePicker },
                        d.createElement(
                          "div",
                          { className: J.SectionTypePrompt },
                          " ",
                          Object(h.f)("#Sale_SectionContents"),
                          " "
                        ),
                        d.createElement(m.i, {
                          rgOptions: o,
                          strDropDownClassName: C.DropDownScroll,
                          selectedOption: _,
                          onChange: this.OnSaleSectionTypeChange,
                          contextMenuPositionOptions: { bDisablePopTop: !0 },
                        }),
                        d.createElement(Ye, {
                          tooltip: Object(h.f)("#Sale_SectionTypeTTip_" + _),
                        })
                      )
                    ),
                    Boolean("unselected_empty" !== _) &&
                      d.createElement(
                        d.Fragment,
                        null,
                        d.createElement(
                          De.a,
                          {
                            placeholderHeight: "300px",
                            className: J.EditorCtn,
                          },
                          null === p &&
                            d.createElement(
                              d.Fragment,
                              null,
                              d.createElement(
                                "div",
                                { className: E.SaleSectionTitleHeader },
                                d.createElement(
                                  "div",
                                  { className: C.EventEditorTextTitle },
                                  Object(h.f)(
                                    "#Sale_Section_SectionTitle_Title"
                                  ),
                                  d.createElement(Ye, {
                                    tooltip: Object(h.f)(
                                      "#Sale_Section_SectionTitle_Title_ttip"
                                    ),
                                  })
                                ),
                                d.createElement(ze.a, {
                                  bIsMinimized: this.GetMinimized("title", !1),
                                  fnToggleMinimize: function () {
                                    return e.ToggleMinimized("title", !1);
                                  },
                                })
                              ),
                              !this.GetMinimized("title", !1) &&
                                d.createElement(
                                  "div",
                                  {
                                    className: Object(k.a)(
                                      C.FlexColumnContainer,
                                      C.EventDefaultRowContainer
                                    ),
                                  },
                                  d.createElement(se.a, {
                                    default_label: i.default_label,
                                    localized_label: i.localized_label,
                                    editLanguage: this.props.editLanguage,
                                    onClearCustomTitle: this.OnClearCustomTitle,
                                    onSetCustomTitle: this.OnSetCustomTitle,
                                    onSetDefaultLabel: this.OnTitleChange,
                                  }),
                                  g &&
                                    d.createElement(
                                      F.b,
                                      {
                                        clanSteamID: n.GetClanSteamID(),
                                        className: J.CustomImageTitle,
                                      },
                                      d.createElement(
                                        "span",
                                        { className: J.PromptText },
                                        Object(h.f)("#Sale_option_title_image")
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: J.UploadImageButton },
                                        d.createElement(
                                          m.r,
                                          {
                                            onClick: function (t) {
                                              return e.OnShowTitleImageUpload(
                                                t,
                                                i
                                              );
                                            },
                                          },
                                          b > 0
                                            ? Object(h.l)(
                                                "#selectimage_managing_n_existing_title",
                                                b
                                              )
                                            : Object(h.f)(
                                                "#selectimage_uploading_title"
                                              )
                                        )
                                      )
                                    ),
                                  f &&
                                    d.createElement(
                                      F.b,
                                      { clanSteamID: n.GetClanSteamID() },
                                      d.createElement(m.m, {
                                        label: Object(h.f)("#Sale_LinkURL"),
                                        tooltip: Object(h.f)(
                                          "#Sale_LinkURL_title_hint"
                                        ),
                                        placeholder: Object(h.f)(
                                          "#Sale_LinkURL"
                                        ),
                                        onChange: this.OnTitleLinkChange,
                                        value: this.props.saleSection
                                          .label_link,
                                      }),
                                      d.createElement($e, {
                                        saleSection: i,
                                        editModel: n,
                                      })
                                    )
                                )
                            ),
                          y && d.createElement(de, Object(a.a)({}, this.props)),
                          d.createElement(Xe, {
                            saleSection: i,
                            editModel: n,
                            editLanguage: r,
                            getMinimized: function () {
                              return e.GetMinimized("tabsettings", !0);
                            },
                            toggleMinimized: function () {
                              return e.ToggleMinimized("tabsettings", !0);
                            },
                          }),
                          d.createElement(
                            F.b,
                            {
                              clanSteamID: n.GetClanSteamID(),
                              requireAdmin: !0,
                            },
                            d.createElement(m.m, {
                              value: i.contenthub_override_section,
                              onChange: this.OnChangeContentHubOverrideKey,
                              label: Object(h.f)(
                                "#SaleSection_ContentHub_Override"
                              ),
                              tooltip: Object(h.f)(
                                "#SaleSection_ContentHub_Override_Tooltip"
                              ),
                            })
                          )
                        ),
                        "unselected_empty" !=
                          (v = this.props.saleSection.section_type) &&
                          "tab_buttons" != v &&
                          d.createElement(
                            De.a,
                            {
                              placeholderHeight: "300px",
                              className: J.EditorCtn,
                              id: "salesection_item_" + this.props.index,
                            },
                            d.createElement(ht, Object(a.a)({}, this.props))
                          )
                      )
                  )
            );
          }),
          Object(a.c)([f.a], t.prototype, "RemoveSection", null),
          Object(a.c)([f.a], t.prototype, "DoRemoveSection", null),
          Object(a.c)([f.a], t.prototype, "OnTitleChange", null),
          Object(a.c)([f.a], t.prototype, "OnTitleLinkChange", null),
          Object(a.c)([f.a], t.prototype, "OnSetCustomTitle", null),
          Object(a.c)([f.a], t.prototype, "OnClearCustomTitle", null),
          Object(a.c)([f.a], t.prototype, "OnShowTitleImageUpload", null),
          Object(a.c)([f.a], t.prototype, "OnSaleSectionTypeChange", null),
          Object(a.c)([f.a], t.prototype, "MoveSection", null),
          Object(a.c)([f.a], t.prototype, "GetMinimized", null),
          Object(a.c)([f.a], t.prototype, "ToggleMinimized", null),
          Object(a.c)(
            [f.a],
            t.prototype,
            "OnChangeContentHubOverrideKey",
            null
          ),
          (t = Object(a.c)([u.a], t))
        );
      })(d.Component);
      var nt = function (e) {
          var t = e.editModel,
            n = e.section,
            a = e.tabSection,
            i = a
              ? d.createElement(
                  "span",
                  {
                    className: E.ShowInTabsList,
                    onClick: function () {
                      return Ke(t, n);
                    },
                  },
                  Object(h.f)(
                    "#Sale_SectionDesc_Tabs",
                    (function (e, t) {
                      var n = "";
                      return (
                        e && e.length > 0 && t && t.tabs && t.tabs.length > 0
                          ? e.forEach(function (e) {
                              n.length > 0 && (n += ", ");
                              var a = t.tabs.find(function (t) {
                                return t.unique_id == e;
                              });
                              n += a
                                ? Object(Te.g)(a, Object(N.h)(A.c.LANGUAGE))
                                : Object(h.f)("#EventCalendar_MuteApp_Unknown");
                            })
                          : (n = Object(h.f)("#Sale_Section_ShowOnTabs_All")),
                        n
                      );
                    })(n.show_on_tabs, a)
                  )
                )
              : null;
          return ("items" === n.section_type && !n.smart_section_type) ||
            "events" === n.section_type
            ? d.createElement(
                "div",
                null,
                Boolean("items" === n.section_type)
                  ? Object(h.f)(
                      "#Sale_SectionDesc_Items",
                      n.capsules ? n.capsules.length : 0
                    )
                  : Object(h.f)(
                      "#Sale_SectionDesc_Events",
                      n.events ? n.events.length : 0
                    ),
                Boolean(n.show_as_carousel) &&
                  Object(h.f)("#Sale_SectionDesc_Carousel"),
                i && " - ",
                i
              )
            : "event_schedule" === n.section_type
            ? d.createElement(
                "div",
                null,
                Object(h.l)(
                  "#EventEditor_SaleEventSchedule_MinView",
                  n.event_schedule_categories
                    ? n.event_schedule_categories.length
                    : Object(h.f)("#Dialog_Off")
                ),
                i && " - ",
                i
              )
            : i;
        },
        at = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnSmartSectionChange = function (e) {
              (this.props.saleSection.smart_section = e),
                (this.props.saleSection.smart_section_type = e
                  ? "wishlist"
                  : void 0),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.render = function () {
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(m.q, {
                  onChange: this.OnSmartSectionChange,
                  label: Object(h.f)("#Sale_SmartSection"),
                  description: Object(h.f)("#Sale_SmartSectionDescription"),
                  checked: this.props.saleSection.smart_section,
                }),
                this.props.saleSection.smart_section &&
                  d.createElement(ft, {
                    saleSection: this.props.saleSection,
                    editModel: this.props.editModel,
                  }),
                !this.props.saleSection.smart_section &&
                  d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(ue.a, {
                      capsuleContainer: this.props.saleSection,
                      editModel: this.props.editModel,
                      uniqueKey: "Section" + this.props.saleSection.unique_id,
                    }),
                    d.createElement(me.a, {
                      section: this.props.saleSection,
                      capsuleContainer: this.props.saleSection,
                      editModel: this.props.editModel,
                      bAllowPruneFacets: !0,
                    })
                  )
              );
            }),
            Object(a.c)([y.k.bound], t.prototype, "OnSmartSectionChange", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        it = Object(u.a)(function (e) {
          var t = e.saleSection,
            n = e.editModel;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(m.q, {
              onChange: function (e) {
                Object(y.G)(function () {
                  t.smart_section = e;
                  var a =
                    t.smart_section_event_tags &&
                    t.smart_section_event_tags.length > 0;
                  (t.smart_section_type = e
                    ? a
                      ? "recent_tagged_events"
                      : "recent_events"
                    : void 0),
                    n.SetDirty(o.c.jsondata_sales);
                });
              },
              label: Object(h.f)("#Sale_SmartSection"),
              description: Object(h.f)("#Sale_SmartSectionDescription"),
              checked: t.smart_section,
            }),
            t.smart_section
              ? d.createElement(X, Object(a.a)({}, e))
              : d.createElement(K, Object(a.a)({}, e))
          );
        }),
        rt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { linkToAddURL: "" }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.AddLink = function () {
              (this.m_refInput.element.value = ""),
                this.props.saleSection.links.push({
                  url: this.state.linkToAddURL,
                }),
                this.setState({ linkToAddURL: "" }),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.RemoveLink = function (e) {
              this.props.saleSection.links.splice(e, 1),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnLinkChange = function (e) {
              var t = e.target.value;
              this.setState({ linkToAddURL: t });
            }),
            (t.prototype.OnShowLinkCapsuleUpload = function (e, t) {
              e.preventDefault(),
                e.stopPropagation(),
                Object(I.d)(
                  d.createElement(S, {
                    loc_images: t.localized_link_capsule,
                    fnSetImage: function (e, n) {
                      (t.localized_link_capsule = Object(M.e)(
                        t.localized_link_capsule || [],
                        30,
                        null
                      )),
                        (t.localized_link_capsule[e] = n);
                    },
                    editModel: this.props.editModel,
                    artworkType: "link_capsule",
                  }),
                  window
                );
            }),
            (t.prototype.render = function () {
              var e = this;
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(D.a, {
                  items: this.props.saleSection.links,
                  onDelete: this.RemoveLink,
                  onReorder: function () {
                    return e.props.editModel.SetDirty(o.c.jsondata_sales);
                  },
                  render: function (t) {
                    var n = 0;
                    t.localized_link_capsule &&
                      t.localized_link_capsule.forEach(function (e) {
                        n += e ? 1 : 0;
                      });
                    var a = Object(Ge.b)(t.url, A.c.STORE_BASE_URL);
                    return d.createElement(
                      Te.i,
                      {
                        className: Object(k.a)(q.a.FlexCenter, J.UploadLinkRow),
                        url: t.url,
                      },
                      a,
                      d.createElement(
                        "div",
                        { className: J.UploadLinkImageButton },
                        d.createElement(
                          m.r,
                          {
                            onClick: function (n) {
                              return e.OnShowLinkCapsuleUpload(n, t);
                            },
                          },
                          n > 0
                            ? Object(h.l)(
                                "#selectimage_managing_n_existing_title",
                                n
                              )
                            : Object(h.f)("#selectimage_uploading_title")
                        )
                      )
                    );
                  },
                }),
                d.createElement(m.m, {
                  ref: function (t) {
                    return (e.m_refInput = t);
                  },
                  type: "text",
                  label: Object(h.f)("#Sale_LinkURL"),
                  onChange: this.OnLinkChange,
                }),
                d.createElement(
                  m.r,
                  { onClick: this.AddLink },
                  Object(h.f)("#Sale_AddLink")
                )
              );
            }),
            Object(a.c)([f.a], t.prototype, "AddLink", null),
            Object(a.c)([f.a], t.prototype, "RemoveLink", null),
            Object(a.c)([f.a], t.prototype, "OnLinkChange", null),
            Object(a.c)([f.a], t.prototype, "OnShowLinkCapsuleUpload", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        ot = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                maxRowsString: Object(fe.r)(t.props.saleSection).toString(),
                capItemCountString: Object(fe.t)(
                  t.props.saleSection
                ).toString(),
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnRandomChange = function (e, t) {
              t || (e.cap_item_count = 0),
                this.setState({
                  maxRowsString: Object(fe.t)(
                    this.props.saleSection
                  ).toString(),
                });
            }),
            (t.prototype.OnCapSectionChange = function (e, t) {
              this.setState({
                maxRowsString: Object(fe.r)(this.props.saleSection).toString(),
              });
            }),
            (t.prototype.OnCapItemCountChange = function (e, t) {
              var n = Number(t);
              n >= 0 &&
                ((e.cap_item_count = n),
                this.props.editModel.SetDirty(o.c.jsondata_sales)),
                this.setState({ capItemCountString: t });
            }),
            (t.prototype.OnCarouselRowsChange = function (e, t) {
              (e.carousel_rows = t),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnCapSectionRowCountChange = function (e, t) {
              var n = Number(t);
              n > 0 &&
                ((e.cap_section_row_count = n),
                this.props.editModel.SetDirty(o.c.jsondata_sales)),
                this.setState({ maxRowsString: t });
            }),
            (t.prototype.ConvertStringToRowConfig = function (e) {
              return JSON.parse(e);
            }),
            (t.prototype.ConvertRowConfigToString = function (e, t) {
              return JSON.stringify({ rows: e, styles: t || [] });
            }),
            (t.prototype.OnCapsulesPerRowArrayChange = function (e, t) {
              var n = this.ConvertStringToRowConfig(t),
                a = n.rows,
                i = n.styles;
              (e.capsules_per_row_array = a),
                (e.capsule_style_per_row_array = i && i.length ? i : null),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.GetCapsulesPerRowDropDown = function () {
              var e = this,
                t = this.props,
                n = t.saleSection,
                a = t.editModel,
                i = [
                  {
                    label: Object(h.f)("#Sale_CapsulesPerRow_1"),
                    data: this.ConvertRowConfigToString([1]),
                  },
                  {
                    label: Object(h.f)("#Sale_CapsulesPerRow_2"),
                    data: this.ConvertRowConfigToString([2]),
                  },
                  {
                    label: Object(h.f)("#Sale_CapsulesPerRow_3"),
                    data: this.ConvertRowConfigToString([3]),
                  },
                  {
                    label: Object(h.f)("#Sale_CapsulesPerRow_4"),
                    data: this.ConvertRowConfigToString([4]),
                  },
                  {
                    label: Object(h.f)("#Sale_CapsulesPerRow_Pattern_2343"),
                    data: this.ConvertRowConfigToString([2, 3, 4, 3]),
                  },
                ];
              "links" === n.section_type
                ? i.push({
                    label: Object(h.f)("#Sale_CapsulesPerRow_5"),
                    data: this.ConvertRowConfigToString([5]),
                  })
                : "items" === n.section_type &&
                  Object(F.a)(a.GetClanSteamID(), !1) &&
                  i.push(
                    {
                      label:
                        "(VO) " +
                        Object(h.f)("#Sale_CapsulesPerRow_Pattern_3t23"),
                      data: this.ConvertRowConfigToString(
                        [3, 2, 3],
                        ["tall", "grid", "grid"]
                      ),
                    },
                    {
                      label:
                        "(VO) " +
                        Object(h.f)("#Sale_CapsulesPerRow_Pattern_5t"),
                      data: this.ConvertRowConfigToString([5], ["tall"]),
                    },
                    {
                      label:
                        "(VO) " +
                        Object(h.f)("#Sale_CapsulesPerRow_Pattern_3t"),
                      data: this.ConvertRowConfigToString([3], ["tall"]),
                    }
                  );
              var r = Object(Ce.c)(n),
                o = this.ConvertRowConfigToString(
                  r,
                  n.capsule_style_per_row_array
                );
              return d.createElement(m.i, {
                rgOptions: i,
                label: Object(h.f)("#Sale_Section_CapsulesPerRow"),
                tooltip: Object(h.f)("#Sale_Section_CapsulesPerRow_Tooltip"),
                strDropDownClassName: C.DropDownScroll,
                selectedOption: o,
                onChange: function (t) {
                  return e.OnCapsulesPerRowArrayChange(n, t.data);
                },
                contextMenuPositionOptions: { bDisablePopTop: !0 },
              });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                n,
                a = this,
                i = this.props,
                r = i.saleSection,
                o = i.bSmartSection,
                l = i.editModel,
                s =
                  o &&
                  "items" === r.section_type &&
                  ("tag" === r.smart_section_type ||
                    "category" === r.smart_section_type),
                c = "items" === r.section_type,
                u = "items" === r.section_type || "events" === r.section_type,
                p = "library" === r.single_item_style,
                _ =
                  "items" === r.section_type &&
                  (!r.capsules_per_row_array ||
                    (1 ==
                      (null === (e = r.capsules_per_row_array) || void 0 === e
                        ? void 0
                        : e.length) &&
                      1 == r.capsules_per_row_array[0])),
                g =
                  "items" == r.section_type &&
                  (null ===
                    (n =
                      null === (t = l.GetEventModel().jsondata) || void 0 === t
                        ? void 0
                        : t.sorting_tiers) || void 0 === n
                    ? void 0
                    : n.length) > 0;
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  "div",
                  { className: C.EventEditorTextTitle },
                  Object(h.f)("#Sale_Section_GridSettings_Title")
                ),
                d.createElement(
                  "div",
                  {
                    style: { display: "flex" },
                    className: C.EventDefaultRowContainer,
                  },
                  d.createElement(
                    "div",
                    { className: C.HalfColumn },
                    r.show_as_carousel &&
                      d.createElement(m.t, {
                        label: Object(h.f)("#Sale_Section_CarouselRows"),
                        showValue: !0,
                        min: 1,
                        max: 3,
                        value: Object(fe.s)(r),
                        onChange: function (e) {
                          return a.OnCarouselRowsChange(r, e);
                        },
                        tooltip: Object(h.f)(
                          "#Sale_Section_CarouselRows_Tooltip"
                        ),
                      }),
                    this.GetCapsulesPerRowDropDown()
                  ),
                  d.createElement(
                    "div",
                    { className: C.HalfColumn },
                    d.createElement(ut, {
                      varName: "use_random_order",
                      onChange: this.OnRandomChange,
                      editModel: l,
                      section: r,
                      textToken: g
                        ? "#Sale_Section_UseRandomOrder_SortingTiers"
                        : "#Sale_Section_UseRandomOrder",
                      ttipToken: o
                        ? "#Sale_Section_UseRandomOrder_smart_hint"
                        : g
                        ? "#Sale_Section_UseRandomOrder_hint"
                        : "Sale_Section_UseRandomOrder_SortingTiers_hint",
                    }),
                    s &&
                      d.createElement(ut, {
                        varName: "random_from_entire_set",
                        editModel: l,
                        section: r,
                        textToken: "#Sale_Section_RandomFromSmartSet",
                        ttipToken: "#Sale_Section_RandomFromSmartSet_hint",
                      }),
                    r.use_random_order &&
                      d.createElement(
                        F.b,
                        { clanSteamID: l.GetClanSteamID() },
                        d.createElement(m.m, {
                          mustBeNumeric: !0,
                          rangeMin: 0,
                          label:
                            "(VO) " +
                            Object(h.f)("#Sale_Section_CapSectionItemCount"),
                          tooltip: Object(h.f)(
                            "#Sale_Section_CapSectionItemCount_hint"
                          ),
                          onChange: function (e) {
                            return a.OnCapItemCountChange(r, e.target.value);
                          },
                          value: this.state.capItemCountString,
                        })
                      ),
                    d.createElement(ut, {
                      varName: "show_as_carousel",
                      editModel: l,
                      section: r,
                      textToken: "#Sale_Section_ShowAsCarousel",
                      ttipToken: "#Sale_Section_ShowAsCarousel_Tooltip",
                    }),
                    !r.show_as_carousel &&
                      d.createElement(
                        d.Fragment,
                        null,
                        d.createElement(ut, {
                          varName: "cap_section_content",
                          onChange: this.OnCapSectionChange,
                          editModel: l,
                          section: r,
                          textToken: "#Sale_Section_CapSectionContent",
                          ttipToken: "#Sale_Section_CapSectionContent_Tooltip",
                        }),
                        r.cap_section_content &&
                          d.createElement(m.m, {
                            mustBeNumeric: !0,
                            rangeMin: 1,
                            label: Object(h.f)(
                              "#Sale_Section_CapSectionContentCount"
                            ),
                            tooltip: Object(h.f)(
                              "#Sale_Section_CapSectionContentCount_hint"
                            ),
                            onChange: function (e) {
                              return a.OnCapSectionRowCountChange(
                                r,
                                e.target.value
                              );
                            },
                            value: this.state.maxRowsString,
                          })
                      ),
                    r.show_as_carousel &&
                      d.createElement(ut, {
                        varName: "carousel_auto_advance",
                        valveOnly: !0,
                        editModel: l,
                        section: r,
                        textToken: "#Sale_Section_CarouselAutoAdvance",
                        ttipToken: "#Sale_Section_CarouselAutoAdvance_Tooltip",
                      }),
                    c && d.createElement(st, { editModel: l, section: r }),
                    d.createElement(ct, {
                      editModel: l,
                      section: r,
                      bDisabled: !_,
                    }),
                    p &&
                      d.createElement(ut, {
                        varName: "show_purchase_options",
                        editModel: l,
                        section: r,
                        textToken: "#Sale_Section_ShowPurchaseOptions",
                        ttipToken: "#Sale_Section_ShowPurchaseOptions_ttip",
                      }),
                    u &&
                      d.createElement(ut, {
                        valveOnly: !0,
                        varName: "hide_prices",
                        editModel: l,
                        section: r,
                        textToken: "#Sale_Section_HidePrices",
                        ttipToken: "#Sale_Section_HidePrices_ttip",
                      }),
                    d.createElement(lt, { editModel: l, saleSection: r })
                  )
                )
              );
            }),
            Object(a.c)([f.a], t.prototype, "OnRandomChange", null),
            Object(a.c)([f.a], t.prototype, "OnCapSectionChange", null),
            Object(a.c)([f.a], t.prototype, "OnCapItemCountChange", null),
            Object(a.c)([f.a], t.prototype, "OnCarouselRowsChange", null),
            Object(a.c)([f.a], t.prototype, "OnCapSectionRowCountChange", null),
            Object(a.c)(
              [f.a],
              t.prototype,
              "OnCapsulesPerRowArrayChange",
              null
            ),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        lt = Object(u.a)(function (e) {
          var t,
            n = e.saleSection,
            a = e.editModel;
          if ("items" !== n.section_type && "events" !== n.section_type)
            return null;
          var i = !0;
          null === (t = a.GetDynamicRevealSections()) ||
            void 0 === t ||
            t.forEach(function (e) {
              e.section_type == n.section_type &&
                e.unique_id != n.unique_id &&
                (i = !1);
            });
          var r = "#Sale_Section_RevealSetting_limit";
          return (
            i &&
              (r =
                "events" === n.section_type
                  ? "#Sale_Section_RevealSetting_event_ttip"
                  : "#Sale_Section_RevealSetting_ttip"),
            "items" === n.section_type &&
              Boolean(n.smart_section_type) &&
              ((i = !1), (r = "#Sale_Section_RevealSetting_limit_smart")),
            a.GetEventModel().jsondata.sale_opt_in_page_name ||
              ((i = !1), (r = "#Sale_Section_RevealSetting_limit_optin_ttip")),
            "events" === n.section_type &&
              Boolean(n.smart_section_type) &&
              "recent_tagged_events" !== n.smart_section_type &&
              ((i = !1), (r = "#Sale_Section_RevealSetting_limit_smart")),
            d.createElement(ut, {
              valveOnly: !0,
              varName: "dynamic_reveal",
              editModel: a,
              section: n,
              textToken: "#Sale_Section_RevealSetting",
              ttipToken: r,
              disabled: !i,
            })
          );
        }),
        st = function (e) {
          return d.createElement(ut, {
            varName: "show_as_demos",
            editModel: e.editModel,
            section: e.section,
            textToken: "#Sale_Section_UseDemoLayout",
            ttipToken: "#Sale_Section_UseDemoLayout_tooltip",
          });
        },
        ct = Object(u.a)(function (e) {
          var t = e.editModel,
            n = e.section,
            a = e.bDisabled;
          if ("items" !== n.section_type) return null;
          var i = [
            {
              label: Object(h.f)("#Sale_Section_SingleItemDisplay_bordered"),
              tooltip: Object(h.f)(
                "#Sale_Section_SingleItemDisplay_bordered_ttip"
              ),
              data: "bordered",
            },
            {
              label: Object(h.f)("#Sale_Section_SingleItemDisplay_full"),
              tooltip: Object(h.f)("#Sale_Section_SingleItemDisplay_full_ttip"),
              data: "full",
            },
            {
              label: Object(h.f)("#Sale_Section_SingleItemDisplay_library"),
              tooltip: Object(h.f)(
                "#Sale_Section_SingleItemDisplay_library_ttip"
              ),
              data: "library",
            },
            {
              label: Object(h.f)("#Sale_Section_SingleItemDisplay_animated"),
              tooltip: Object(h.f)(
                "#Sale_Section_SingleItemDisplay_animated_ttip"
              ),
              data: "animated",
            },
          ];
          return d.createElement(m.i, {
            disabled: a,
            rgOptions: i,
            label: Object(h.f)(
              a
                ? "#Sale_Section_SingleItemDisplay_disabled"
                : "#Sale_Section_SingleItemDisplay"
            ),
            tooltip: Object(h.f)(
              a
                ? "#Sale_Section_SingleItemDisplay_disabled_ttip"
                : "#Sale_Section_SingleItemDisplay_ttip"
            ),
            strDropDownClassName: C.DropDownScroll,
            selectedOption: n.single_item_style || fe.x,
            onChange: function (e) {
              n.single_item_style !== e.data &&
                ((n.single_item_style = e.data),
                t.SetDirty(o.c.jsondata_sales));
            },
          });
        }),
        ut = Object(u.a)(function (e) {
          var t = e.editModel,
            n = e.section,
            a = e.varName,
            i = e.valveOnly,
            r = e.textToken,
            l = e.ttipToken,
            s = e.disabled,
            c = e.onChange,
            u = function (e) {
              (n[a] = e), t.SetDirty(o.c.jsondata_sales), c && c(n, e);
            };
          return i
            ? d.createElement(
                F.b,
                { clanSteamID: t.GetClanSteamID() },
                d.createElement(m.e, {
                  onChange: u,
                  label: "(VO) " + Object(h.f)(r),
                  tooltip: Object(h.f)(l),
                  checked: n[a],
                  disabled: s,
                })
              )
            : d.createElement(m.e, {
                onChange: u,
                label: Object(h.f)(r),
                tooltip: Object(h.f)(l),
                checked: n[a],
                disabled: s,
              });
        }),
        dt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_descBBCodeEditor = d.createRef()), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GetCurText = function () {
              var e = this.props,
                t = e.editModel,
                n = e.saleSection,
                a =
                  n.text_section_contents &&
                  n.text_section_contents[t.GetCurEditLanguage()];
              return a || "";
            }),
            (t.prototype.SetText = function (e) {
              var t = this.props,
                n = t.editModel,
                a = t.saleSection;
              n.SetSaleSectionTextLocalization(
                n.GetCurEditLanguage(),
                n.GetSaleSectionIndexByID(a.unique_id),
                e
              );
            }),
            (t.prototype.OnTextChange = function (e) {
              this.SetText(e.currentTarget.value);
            }),
            (t.prototype.OnImageInsert = function (e, t) {
              this.m_descBBCodeEditor.current &&
                Object(he.b)(this.m_descBBCodeEditor.current, e, t);
            }),
            (t.prototype.OnRelatedToBroadcast = function (e) {
              this.props.saleSection.hide_section_if_broadcast_is_hidden !==
                e &&
                ((this.props.saleSection.hide_section_if_broadcast_is_hidden = e),
                this.props.editModel.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.editModel,
                a = t.saleSection;
              return d.createElement(
                "div",
                { className: J.TextSectionGroup },
                d.createElement(
                  "div",
                  { className: J.TextSectionBBCode },
                  d.createElement(ye.a, {
                    fnGetCurText: this.GetCurText,
                    fnOnTextChange: this.OnTextChange,
                    fnSetText: this.SetText,
                    ref: this.m_descBBCodeEditor,
                    strPlaceholder: Object(h.f)(
                      "#EventEditor_SaleTextSection_PlaceHolder"
                    ),
                    emoticonStore: Ee.b,
                    bSupportHTMLImport: !0,
                    showFormatHelp: "PartnerEvents",
                    classNameForTextArea: E.EventEditorDescription,
                    limitBBCode: A.b.CAN_UPLOAD_IMAGES ? void 0 : ge.f,
                    clanSteamID: n.GetClanSteamID(),
                  }),
                  d.createElement(
                    w.a,
                    {
                      toolTipContent: Object(h.f)(
                        "#EventEditor_RelatedToBroadcast_ttip"
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: C.EventEditorTextTitle },
                      Object(h.f)("#EventEditor_RelatedToBroadcast")
                    )
                  ),
                  d.createElement(m.e, {
                    onChange: function (t) {
                      return e.OnRelatedToBroadcast(t);
                    },
                    label: Object(h.f)(
                      "#EventEditor_RelatedToBroadcast_action"
                    ),
                    checked: Boolean(a.hide_section_if_broadcast_is_hidden),
                  })
                ),
                A.b.CAN_UPLOAD_IMAGES &&
                  d.createElement(
                    "div",
                    {
                      className: Object(k.a)(
                        C.RightCol,
                        qe.DescEditorPadding,
                        J.TextSectionImages
                      ),
                    },
                    d.createElement(s.a, {
                      bShowLightBox: !0,
                      clanSteamID: n.GetClanSteamID(),
                      imageInsertCallBack: this.OnImageInsert,
                      fnSetImageURL: n.SetImageURL,
                      rgRealmList: n.GetIncludedRealmList(),
                    })
                  )
              );
            }),
            Object(a.c)([f.a], t.prototype, "GetCurText", null),
            Object(a.c)([f.a], t.prototype, "SetText", null),
            Object(a.c)([f.a], t.prototype, "OnTextChange", null),
            Object(a.c)([f.a], t.prototype, "OnImageInsert", null),
            Object(a.c)([f.a], t.prototype, "OnRelatedToBroadcast", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        pt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = {}), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.EnsureBrowseData = function () {
              var e = this.props,
                t = e.saleSection,
                n = e.editModel;
              t.item_browse_section_data ||
                ((t.item_browse_section_data = {}),
                n.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.OnSubscriptionIDChange = function (e) {
              this.EnsureBrowseData(),
                (this.props.saleSection.item_browse_section_data.master_subscription =
                  Number.parseInt(e.target.value) || 0),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnRemoveTab = function (e) {
              this.EnsureBrowseData();
              var t = this.props.editModel,
                n = this.props.saleSection.item_browse_section_data;
              e >= 0 &&
                e < n.tabs.length &&
                (n.tabs.splice(e, 1), t.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.OnAddTab = function (e) {
              this.EnsureBrowseData(),
                this.props.saleSection.item_browse_section_data.tabs ||
                  (this.props.saleSection.item_browse_section_data.tabs = []),
                this.props.saleSection.item_browse_section_data.tabs.push(e),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnShowAsDemos = function (e) {
              this.EnsureBrowseData(),
                (this.props.saleSection.item_browse_section_data.show_as_demos = e),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnEnableSearch = function (e) {
              this.EnsureBrowseData(),
                (this.props.saleSection.item_browse_section_data.enable_search = e),
                this.props.editModel.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.RenderTabName = function (e) {
              var t = fe.E.find(function (t) {
                  return t.flavor === e;
                }),
                n = e;
              return (
                t &&
                  ((n = Object(h.f)(t.label)),
                  e.startsWith("contenthub_") &&
                    (n +=
                      " (" +
                      Object(h.f)("#Sale_BrowserSortOption_ContentHub_Suffix") +
                      ")")),
                d.createElement(
                  d.Fragment,
                  null,
                  n,
                  Boolean(null == t ? void 0 : t.tooltip) &&
                    d.createElement(Ye, { tooltip: Object(h.f)(t.tooltip) })
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.saleSection.item_browse_section_data || {},
                n = t.master_subscription,
                a = t.tabs || [],
                i = fe.F.filter(function (e) {
                  return (
                    void 0 ===
                    a.find(function (t) {
                      return t === e;
                    })
                  );
                }).map(function (t) {
                  return d.createElement(
                    "div",
                    { key: t, className: E.ItemBrowseInactiveTab },
                    d.createElement(
                      "div",
                      {
                        className: E.ItemBrowseInactiveTabAdd,
                        onClick: function () {
                          return e.OnAddTab(t);
                        },
                      },
                      d.createElement(we.r, null)
                    ),
                    e.RenderTabName(t)
                  );
                });
              return d.createElement(
                "div",
                null,
                d.createElement(m.e, {
                  label: Object(h.f)("#Sale_Section_EnableSearch"),
                  tooltip: Object(h.f)("#Sale_Section_EnableSearch_ttip"),
                  onChange: this.OnEnableSearch,
                  checked: t.enable_search,
                }),
                d.createElement(m.e, {
                  label: Object(h.f)("#Sale_Section_UseDemoLayout"),
                  tooltip: Object(h.f)("#Sale_Section_UseDemoLayout_ttip"),
                  onChange: this.OnShowAsDemos,
                  checked: t.show_as_demos,
                }),
                d.createElement(m.m, {
                  type: "text",
                  label: Object(h.f)("#Sale_BrowseSection_SubscriptionID"),
                  tooltip: Object(h.f)(
                    "#Sale_BrowseSection_SubscriptionID_ttip"
                  ),
                  onChange: this.OnSubscriptionIDChange,
                  value: n,
                }),
                d.createElement(
                  "div",
                  { className: C.EventEditorTextTitle },
                  Object(h.f)("#Sale_BrowseSection_TabList"),
                  d.createElement(Ye, {
                    tooltip: Object(h.f)("#Sale_BrowseSection_TabList_ttip"),
                  })
                ),
                d.createElement(D.a, {
                  items: a,
                  onDelete: this.OnRemoveTab,
                  onReorder: function () {
                    return e.props.editModel.SetDirty(o.c.jsondata_sales);
                  },
                  render: function (t) {
                    return d.createElement(
                      "div",
                      { className: E.ItemBrowseActiveTab },
                      e.RenderTabName(t)
                    );
                  },
                }),
                d.createElement(
                  "div",
                  { className: C.EventEditorTextTitle },
                  Object(h.f)("#Sale_BrowseSection_AdditionalTabList"),
                  d.createElement(Ye, {
                    tooltip: Object(h.f)(
                      "#Sale_BrowseSection_AdditionalTabList_ttip"
                    ),
                  })
                ),
                d.createElement("div", null, i),
                d.createElement(me.a, {
                  section: this.props.saleSection,
                  capsuleContainer: this.props.saleSection,
                  editModel: this.props.editModel,
                  bAllowPruneFacets: !0,
                })
              );
            }),
            Object(a.c)([f.a], t.prototype, "OnSubscriptionIDChange", null),
            Object(a.c)([f.a], t.prototype, "OnRemoveTab", null),
            Object(a.c)([f.a], t.prototype, "OnAddTab", null),
            Object(a.c)([f.a], t.prototype, "OnShowAsDemos", null),
            Object(a.c)([f.a], t.prototype, "OnEnableSearch", null),
            (t = Object(a.c)([u.a], t))
          );
        })(d.Component),
        mt = Object(u.a)(function (e) {
          var t,
            n,
            a,
            i,
            r,
            l = e.editModel,
            s = Object(d.useState)(!1),
            c = s[0],
            u = s[1],
            p = [
              {
                label: Object(h.f)("#SaleItemSource_TaggedItems"),
                data: fe.n.k_ETaggedItems,
              },
              {
                label: Object(h.f)("#SaleItemSource_ContentHub"),
                data: fe.n.k_EContentHub,
              },
            ],
            _ = (function () {
              var e = Le.Get(),
                t = Object(d.useState)(!e.BHasContentHubNames()),
                n = t[0],
                a = t[1],
                i = Object(d.useState)(e.GetContentHubNames()),
                r = i[0],
                o = i[1];
              return (
                Object(d.useEffect)(
                  function () {
                    e.LoadContentHubNames().then(function () {
                      o(e.GetContentHubNames()), a(!1);
                    });
                  },
                  [e]
                ),
                { bLoading: n, contentHubNames: r }
              );
            })(),
            g = (_.bLoading, _.contentHubNames);
          g &&
            ((a =
              null == g
                ? void 0
                : g.hubtypes.map(function (e) {
                    return { label: e, value: e };
                  })),
            (i = Array.from(
              null === (t = null == g ? void 0 : g.categories) || void 0 === t
                ? void 0
                : t.keys()
            ).map(function (e) {
              return {
                label:
                  (null == e ? void 0 : e.length) > 0
                    ? g.categories.get(e) + " (" + e + ")"
                    : "" + g.categories.get(e),
                value: e,
              };
            })),
            (r = Array.from(
              null === (n = null == g ? void 0 : g.tags) || void 0 === n
                ? void 0
                : n.keys()
            ).map(function (e) {
              return { label: g.tags.get(e) + " (" + e + ")", value: "" + e };
            })));
          var f = l.GetEventModel().jsondata;
          return d.createElement(
            Ze,
            {
              title: Object(h.f)("#Sale_BrowseSection_ContentHubTitle"),
              tooltip: Object(h.f)("#Sale_BrowseSection_ContentHubTooltip"),
              getMinimized: function () {
                return c;
              },
              toggleMinimized: function () {
                return u(!c);
              },
            },
            Boolean(g)
              ? d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    m.n,
                    null,
                    Object(h.f)("#SaleItemSource_Title")
                  ),
                  d.createElement(m.i, {
                    rgOptions: p,
                    selectedOption: f.item_source_type || fe.n.k_ETaggedItems,
                    onChange: function (e) {
                      if (
                        ((l.GetEventModel().jsondata.item_source_type = e.data),
                        e.data === fe.n.k_EContentHub)
                      ) {
                        var t = {
                          type: l.GetEventModel().GetContentHubType(),
                          category: l.GetEventModel().GetContentHubCategory(),
                          tagid: l.GetEventModel().GetContentHubTag(),
                        };
                        (l.GetEventModel().jsondata.source_content_hub = t),
                          l.GetEventModel().jsondata
                            .bAutoUpdateVanityURLForContentHub && _t(t, l);
                      }
                      l.SetDirty(o.c.jsondata_sales);
                    },
                  }),
                  f.item_source_type === fe.n.k_EContentHub &&
                    d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        m.n,
                        null,
                        Object(h.f)("#Sale_BrowseSection_ContentHubType")
                      ),
                      d.createElement(_e.a, {
                        options: a,
                        value: a.find(function (e) {
                          return (
                            e.value === l.GetEventModel().GetContentHubType()
                          );
                        }),
                        onChange: function (e) {
                          var t = {
                            type: e.value,
                            category: l.GetEventModel().GetContentHubCategory(),
                            tagid: l.GetEventModel().GetContentHubTag(),
                          };
                          (l.GetEventModel().jsondata.source_content_hub = t),
                            l.GetEventModel().jsondata
                              .bAutoUpdateVanityURLForContentHub && _t(t, l),
                            l.SetDirty(o.c.jsondata_sales);
                        },
                        isSearchable: !0,
                      }),
                      "category" === l.GetEventModel().GetContentHubType() &&
                        d.createElement(
                          d.Fragment,
                          null,
                          d.createElement(
                            m.n,
                            null,
                            Object(h.f)(
                              "#Sale_BrowseSection_ContentHubCategory"
                            )
                          ),
                          d.createElement(_e.a, {
                            options: i,
                            value: i.find(function (e) {
                              return (
                                e.value ===
                                l.GetEventModel().GetContentHubCategory()
                              );
                            }),
                            onChange: function (e) {
                              var t = {
                                type: l.GetEventModel().GetContentHubType(),
                                category: e.value,
                                tagid: l.GetEventModel().GetContentHubTag(),
                              };
                              (l.GetEventModel().jsondata.source_content_hub = t),
                                l.GetEventModel().jsondata
                                  .bAutoUpdateVanityURLForContentHub &&
                                  _t(t, l),
                                l.SetDirty(o.c.jsondata_sales);
                            },
                            isSearchable: !0,
                          })
                        ),
                      "tags" === l.GetEventModel().GetContentHubType() &&
                        d.createElement(
                          d.Fragment,
                          null,
                          d.createElement(
                            m.n,
                            null,
                            Object(h.f)("#Sale_BrowseSection_ContentHubTag")
                          ),
                          d.createElement(_e.a, {
                            options: r,
                            value: r.find(function (e) {
                              return (
                                e.value ===
                                l.GetEventModel().GetContentHubTag().toString()
                              );
                            }),
                            onChange: function (e) {
                              var t = {
                                type: l.GetEventModel().GetContentHubType(),
                                category: l
                                  .GetEventModel()
                                  .GetContentHubCategory(),
                                tagid: Number(e.value),
                              };
                              (l.GetEventModel().jsondata.source_content_hub = t),
                                l.GetEventModel().jsondata
                                  .bAutoUpdateVanityURLForContentHub &&
                                  _t(t, l),
                                l.SetDirty(o.c.jsondata_sales);
                            },
                            isSearchable: !0,
                          })
                        ),
                      d.createElement(m.e, {
                        label: Object(h.f)(
                          "#Sale_BrowseSection_ContentHubDiscountedOnly"
                        ),
                        checked: f.content_hub_discounted_only,
                        onChange: function (e) {
                          (l.GetEventModel().jsondata.content_hub_discounted_only = e),
                            l.SetDirty(o.c.jsondata_sales);
                        },
                      }),
                      d.createElement(m.e, {
                        label: Object(h.f)(
                          "#Sale_BrowseSection_ContentHubAutoUpdateURL"
                        ),
                        checked: f.bAutoUpdateVanityURLForContentHub,
                        onChange: function (e) {
                          ((l.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub = e),
                          e) &&
                            _t(
                              {
                                type: l.GetEventModel().GetContentHubType(),
                                category: l
                                  .GetEventModel()
                                  .GetContentHubCategory(),
                                tagid: l.GetEventModel().GetContentHubTag(),
                              },
                              l
                            );
                          l.SetDirty(o.c.jsondata_sales);
                        },
                      })
                    )
                )
              : d.createElement(Me.a, { size: "medium", position: "center" })
          );
        });
      function _t(e, t) {
        if (e.type)
          if ("category" !== e.type || e.category)
            if ("tags" !== e.type || e.tagid) {
              var n = "contenthubsalepage_" + e.type;
              "category" === e.type
                ? (n += "_" + e.category)
                : "tags" === e.type && (n += "_" + e.tagid),
                (t.GetEventModel().jsondata.sale_vanity_id = n);
            } else
              console.warn(
                "SetVanityURLForContentHub: Undefined tag id for tag hub, skipping vanity URL update."
              );
          else
            console.warn(
              "SetVanityURLForContentHub: Undefined category for category hub, skipping vanity URL update."
            );
        else
          console.warn(
            "SetVanityURLForContentHub: Undefined hub type, skipping vanity URL update."
          );
      }
      var gt = Object(u.a)(function (e) {
          var t = e.editModel,
            n = e.saleSection,
            a = (e.index, n.internal_section_data),
            i = [
              {
                label: Object(h.f)(
                  "#Sale_VOInternalSection_SubscriptionPricing"
                ),
                data: "subscription_pricing",
              },
              {
                label: Object(h.f)("#Sale_VOInternalSection_TabContents"),
                data: "tab_contents",
              },
              {
                label: Object(h.f)("#Sale_VOInternalSection_TabReferences"),
                data: "tab_references",
              },
              {
                label: Object(h.f)(
                  "#Sale_VOInternalSection_ReservationSection"
                ),
                data: "reservation_widget",
              },
              {
                label: Object(h.f)("#Sale_VOInternalSection_CYOAStory"),
                data: "cyoa_story",
              },
            ],
            r = null == a ? void 0 : a.internal_type,
            l = [];
          if ("cyoa_story" === r)
            for (var s = 1; s <= 14; s++)
              l.push({
                label: Object(h.f)("#SummerSale2021Genre_" + s),
                data: s,
              });
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(m.i, {
              rgOptions: i,
              strDropDownClassName: C.DropDownScroll,
              selectedOption: r || "subscription_pricing",
              onChange: function (e) {
                (a.internal_type = e.data), t.SetDirty(o.c.jsondata_sales);
              },
              contextMenuPositionOptions: { bDisablePopTop: !0 },
            }),
            Boolean("cyoa_story" !== r && "reservation_widget" !== r) &&
              d.createElement(ue.a, {
                capsuleContainer: n,
                editModel: t,
                uniqueKey: "Section" + n.unique_id,
                disableDaySelection: !0,
              }),
            Boolean("subscription_pricing" === r) &&
              d.createElement(m.m, {
                type: "text",
                label: Object(h.f)("#Sale_SubscriptionLogo"),
                tooltip: Object(h.f)("#Sale_SubscriptionLogo_ttip"),
                onChange: function (e) {
                  (a.subscription_logo_image = e.target.value),
                    t.SetDirty(o.c.jsondata_sales);
                },
                value: (null == a ? void 0 : a.subscription_logo_image) || "",
              }),
            Boolean("cyoa_story" === r) &&
              d.createElement(m.i, {
                label: Object(h.f)("#SummerSale2021_ChooseGenreLabel"),
                rgOptions: l,
                strDropDownClassName: C.DropDownScroll,
                selectedOption: a.cyoa_story_genre,
                onChange: function (e) {
                  (a.cyoa_story_genre = e.data), t.SetDirty(o.c.jsondata_sales);
                },
              }),
            Boolean("reservation_widget" === r) &&
              d.createElement(je.a, {
                event: t.GetEventModel(),
                saleSection: n,
                fnOnDirty: function () {
                  return t.SetDirty(o.c.jsondata_sales);
                },
              })
          );
        }),
        ht = Object(u.a)(function (e) {
          switch (e.saleSection.section_type) {
            case "items":
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(at, Object(a.a)({}, e)),
                d.createElement(
                  ot,
                  Object(a.a)({}, e, {
                    bSmartSection: e.saleSection.smart_section,
                  })
                )
              );
            case "events":
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(it, Object(a.a)({}, e)),
                d.createElement(
                  ot,
                  Object(a.a)({}, e, {
                    bSmartSection: e.saleSection.smart_section,
                  })
                )
              );
            case "links":
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(rt, Object(a.a)({}, e)),
                d.createElement(
                  ot,
                  Object(a.a)({}, e, {
                    bSmartSection: e.saleSection.smart_section,
                  })
                )
              );
            case "broadcast":
              return d.createElement(Re, Object(a.a)({}, e));
            case "event_description":
              return d.createElement(Pe, Object(a.a)({}, e));
            case "text_section":
              return d.createElement(dt, Object(a.a)({}, e));
            case "curator":
              return d.createElement(xe, Object(a.a)({}, e));
            case "vo_internal":
              return d.createElement(gt, Object(a.a)({}, e));
            case "tabs":
              return d.createElement(pe.b, Object(a.a)({}, e));
            case "tab_buttons":
              return null;
            case "doors":
              return d.createElement("div", null, "No settings for now.");
            case "sale_item_browser":
              return d.createElement(pt, Object(a.a)({}, e));
            case "event_schedule":
              return d.createElement($, Object(a.a)({}, e));
            case "curator_recommendation":
              return d.createElement(Ue, Object(a.a)({}, e));
            case "contenthubmaincarousel":
              return d.createElement(
                We,
                Object(a.a)({ section: e.saleSection }, e)
              );
            case "unselected_empty":
            default:
              return null;
          }
        });
      var ft = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.m_bMounted = !1),
            (t.state = { storeCategories: [], storeTags: [] }),
            t
          );
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.componentDidMount = function () {
            var e = this;
            (this.m_bMounted = !0),
              r.a
                .get(A.c.STORE_BASE_URL + "actions/ajaxgetstoretags")
                .then(function (t) {
                  e.m_bMounted &&
                    e.setState({ storeTags: t.data && t.data.tags });
                }),
              r.a
                .get(A.c.STORE_BASE_URL + "actions/ajaxgetstorecategories")
                .then(function (t) {
                  e.m_bMounted && e.setState({ storeCategories: t.data });
                });
          }),
          (t.prototype.componentWillUnmount = function () {
            this.m_bMounted = !1;
          }),
          (t.prototype.OnSmartSectionTypeChange = function (e) {
            (this.props.saleSection.smart_section_type = e.data),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.OnSmartSectionMaxAppChange = function (e) {
            (this.props.saleSection.smart_section_max_apps = Number.parseInt(
              e.target.value
            )),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.SetSmartSectionCategory = function (e) {
            (this.props.saleSection.smart_section_category = Number(e.data)),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.SetSmartSectionTag = function (e) {
            (this.m_refInput.element.value = ""),
              (this.props.saleSection.smart_section_tag = Number(e.id)),
              this.props.editModel.SetDirty(o.c.jsondata_sales);
          }),
          (t.prototype.UpdateTagSuggestions = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t,
                n = this;
              return Object(a.e)(this, function (a) {
                return (
                  (t = e.target.value),
                  window.setTimeout(function () {
                    var e = n.state.storeTags
                      .filter(function (e) {
                        return (
                          -1 !== e.name.toLowerCase().indexOf(t.toLowerCase())
                        );
                      })
                      .map(function (e) {
                        return { id: e.tagid, name: e.name, type: "tag" };
                      });
                    n.m_searchResultsMenu = Object(O.a)(
                      d.createElement(
                        V.c,
                        { className: J.SearchResults },
                        e.map(function (e) {
                          return d.createElement(
                            V.d,
                            {
                              key: e.id,
                              onSelected: function () {
                                return n.SetSmartSectionTag(e);
                              },
                            },
                            d.createElement(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                },
                              },
                              Object(Y.b)(e.name),
                              " ",
                              d.createElement("span", null, "(", e.id, ")"),
                              " ",
                              d.createElement(
                                "span",
                                { className: J.SmallText },
                                "(",
                                e.type,
                                ")"
                              )
                            )
                          );
                        })
                      ),
                      n.m_refInput.element,
                      {
                        bOverlapHorizontal: !0,
                        bMatchWidth: !0,
                        bFitToWindow: !0,
                        bDisablePopTop: !0,
                      }
                    );
                  }, 300),
                  [2]
                );
              });
            });
          }),
          (t.prototype.SetMasterAppID = function (e, t) {
            var n = this;
            this.m_refInput &&
              this.m_refInput.element &&
              this.m_refInput.element.value &&
              (this.m_refInput.element.value = ""),
              Object(y.G)(function () {
                (n.props.saleSection.capsules = [{ id: e, type: t }]),
                  Object(Ie.i)(n.props.saleSection.capsules),
                  n.props.editModel.SetDirty(o.c.jsondata_sales);
              });
          }),
          (t.prototype.OnChooseMasterSubscriptionID = function (e) {
            Object(I.d)(
              d.createElement(ce.a, { fnAddCapsule: this.SetMasterAppID }),
              Object(G.m)(e)
            );
          }),
          (t.prototype.render = function () {
            var e,
              t = this,
              n = this.props.editModel,
              a = this.state.storeCategories.map(function (e) {
                return { label: e.name, data: e.categoryid };
              }),
              i = [
                {
                  label: Object(h.f)("#Sale_Wishlist") + " (?)",
                  tooltip: Object(h.f)("#Sale_Wishlist_ttip"),
                  data: "wishlist",
                },
                {
                  label: Object(h.f)("#Sale_InteractiveRecommender") + " (?)",
                  tooltip: Object(h.f)("#Sale_InteractiveRecommender_ttip"),
                  data: "interactive_recommender",
                },
                {
                  label: Object(h.f)("#Sale_SmartSection_Discount") + " (?)",
                  tooltip: Object(h.f)("#Sale_SmartSection_Discount_ttip"),
                  data: "discounted",
                },
              ];
            Object(F.a)(n.GetClanSteamID()) &&
              (i.push({
                label: "(VO) " + Object(h.f)("#Sale_Tag"),
                tooltip: Object(h.f)("#Sale_Tag_ttip"),
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "tag",
              }),
              i.push({
                label: "(VO) " + Object(h.f)("#Sale_Category"),
                tooltip: Object(h.f)("#Sale_Category_ttip"),
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "category",
              }),
              i.push({
                label: "(VO) Tag Recommender (?)",
                tooltip:
                  "Orders games featured on this sales page by their original store tags mashed against the recommended tags for the logged in users.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "tag_recommender",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_TopWishlisted") +
                  " (?)",
                tooltip:
                  "Orders games featured on this sales page by all time wishlist data.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "topwishlisted",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_TrendingWishlisted") +
                  " (?)",
                tooltip:
                  "Orders games featured on this sales page by using trending wishlist data from last 2 weeks as a sliding window.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "trendingwishlisted",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_PopularPurchased") +
                  " (?)",
                tooltip:
                  "Show games featured on this sale page, ordered by their recent trending sales data",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "popularpurchased",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)(
                    "#Sale_BrowserSortOption_PopularPurchasedDiscounted"
                  ) +
                  " (?)",
                tooltip:
                  "Shows games featured on this sale page that also have a DISCOUNT NOW, and orders them by their recent trending sales data",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "popularpurchaseddiscounted",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_NewAndTrending") +
                  " (?)",
                tooltip:
                  "Shows games in a similar fashion to the front pages New and Trending tab. Mix of recency of release, review score and play count",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "newandtrending",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_PopularComingSoon") +
                  " (?)",
                tooltip:
                  "Orders not released games featured on this sales page by their all time wishlists data.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "popularcomingsoon",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_MostPlayedDemo") +
                  " (?)",
                tooltip:
                  "Orders games featured on this sales page by total demo player count (all-time).",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "mostplayeddemo",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_DailyActiveUserDemo") +
                  " (?)",
                tooltip:
                  "Orders games featured on this sales page by yesterdays peak player count.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "dailyactiveuserdemo",
              }),
              i.push({
                label:
                  "(VO) " +
                  Object(h.f)("#Sale_BrowserSortOption_PlayedNowDemo") +
                  " (?)",
                tooltip:
                  "This is limited to Demo AppIDs. Using only featured games from this sale page. Will sort games using live server player count data with a 5 minute.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "playednowdemo",
              }),
              i.push({
                label: "(VO) Show ANY discounted item from user's wishlist (?)",
                tooltip:
                  "This will pull the ANY discount game that is also on the logged in users wishlist across the entire Steam catalog. Not limited to the games featured on this sale page.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "wishlist_onsale",
              }),
              i.push({
                label: "(VO) Show ANY discounted DLC from user's library (?)",
                tooltip:
                  "This will pull the ANY DLC for a game in the users library that is on Sale. Not limited to the DLCs featured on this sale page.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "dlc_onsale",
              }),
              i.push({
                label:
                  "(VO) Show ANY discounted Soundtracks from user's library (?)",
                tooltip:
                  "This will pull any soundtrack (specific DLC) for a game the user owns that is on sale across the entire Steam catalog",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "dlc_music_onsale",
              }),
              i.push({
                label: "(VO) Show ANY discounted Top Seller (?)",
                tooltip:
                  "This will pull the TOP discounted apps across the ENTIRE Steam catalog and it is not limited to the games specifically featured in this sales page.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "top_n",
              }),
              i.push({
                label: "(VO) Show ANY discounted (?)",
                tooltip:
                  "This will pull ALL discounted apps across the ENTIRE Steam catalog and it is not limited to the games specifically featured in this sales page.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "all_discounted",
              }),
              i.push({
                label:
                  "(VO) Show ANY discounted interactive recommendations (?)",
                tooltip:
                  "This will use the interactive recommender results for logged in users to pull the TOP recommended that are also on discount across the ENTIRE Steam catalog. It is not limited to the games specifically featured in this sales page.",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "interactive_recommender_onsale",
              }),
              i.push({
                label:
                  "(VO) Show Various TAGs as clickable links to hub pages (?)",
                tooltip:
                  "Displays a carousel of tag related images that will direct for a set of curated tags backed by Steam Tag Content hubs",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "sale_tabhub",
              }),
              i.push({
                label:
                  "(VO) Show Interactive Recommended Games from Subscription (?)",
                tooltip:
                  "Specific to a Master Subscription (ie, EA Play) on Steam.  Will only displayed IR recommended games for a logged in users that part of the master subscription",
                strOptionClass: Object(k.a)(C.ValveOnlyBackground),
                data: "ir_subscription",
              }));
            var r = this.props.saleSection,
              o = this.props.saleSection.smart_section_type;
            return d.createElement(
              Oe.a,
              null,
              d.createElement(
                "div",
                { className: Object(k.a)(C.FlexRowContainer) },
                d.createElement(m.i, {
                  strClassName: J.SmartSelType,
                  label: Object(h.f)("#Sale_SmartSectionType"),
                  rgOptions: i,
                  selectedOption:
                    this.props.saleSection.smart_section_type || "wishlist",
                  onChange: this.OnSmartSectionTypeChange,
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                }),
                d.createElement(
                  "div",
                  null,
                  d.createElement(
                    "label",
                    { className: Object(k.a)("DialogLabel", J.SmartSelLabel) },
                    Object(h.f)("#Sale_SmartSection_MaxApps")
                  ),
                  d.createElement(
                    "div",
                    null,
                    d.createElement("input", {
                      className: Object(k.a)(J.SmartSelCount),
                      type: "number",
                      min: "0",
                      value: this.props.saleSection.smart_section_max_apps || 0,
                      onChange: this.OnSmartSectionMaxAppChange,
                    })
                  )
                )
              ),
              "tag" === o &&
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(m.m, {
                    onBlur: function () {
                      setTimeout(function () {
                        return (
                          t.m_searchResultsMenu && t.m_searchResultsMenu.Hide()
                        );
                      }, 200);
                    },
                    ref: function (e) {
                      return (t.m_refInput = e);
                    },
                    type: "text",
                    label: Object(h.f)("#Sale_SelectTag"),
                    value: this.props.saleSection.smart_section_tag || "",
                    onChange: this.UpdateTagSuggestions,
                  }),
                  d.createElement(
                    "div",
                    null,
                    null ===
                      (e = this.state.storeTags.find(function (e) {
                        return (
                          Number(e.tagid) ===
                          t.props.saleSection.smart_section_tag
                        );
                      })) || void 0 === e
                      ? void 0
                      : e.name
                  )
                ),
              "category" === o &&
                d.createElement(m.i, {
                  key: a.length,
                  label: Object(h.f)("#Sale_SelectCategory"),
                  strDropDownClassName: C.DropDownScroll,
                  rgOptions: a,
                  selectedOption:
                    this.props.saleSection.smart_section_category || 1,
                  onChange: this.SetSmartSectionCategory,
                  contextMenuPositionOptions: { bDisablePopTop: !0 },
                }),
              "ir_subscription" === o &&
                d.createElement(
                  "div",
                  null,
                  Boolean(r.capsules && r.capsules.length > 0) &&
                    d.createElement(le.a, { capsule: r.capsules[0] }),
                  d.createElement(
                    "div",
                    { className: J.SaleImportBarButtonGroup },
                    d.createElement(
                      w.a,
                      {
                        toolTipContent:
                          "Enter the master subscription appid ID.",
                      },
                      d.createElement(
                        m.d,
                        {
                          className: J.SaleImportBarButton,
                          onClick: this.OnChooseMasterSubscriptionID,
                        },
                        "Set Master Subscription ID"
                      )
                    )
                  )
                ),
              d.createElement(me.a, {
                section: this.props.saleSection,
                capsuleContainer: this.props.saleSection,
                editModel: this.props.editModel,
              })
            );
          }),
          Object(a.c)([f.a], t.prototype, "OnSmartSectionTypeChange", null),
          Object(a.c)([f.a], t.prototype, "OnSmartSectionMaxAppChange", null),
          Object(a.c)([f.a], t.prototype, "SetSmartSectionCategory", null),
          Object(a.c)([f.a], t.prototype, "SetSmartSectionTag", null),
          Object(a.c)([f.a], t.prototype, "UpdateTagSuggestions", null),
          Object(a.c)([f.a], t.prototype, "SetMasterAppID", null),
          Object(a.c)([f.a], t.prototype, "OnChooseMasterSubscriptionID", null),
          (t = Object(a.c)([u.a], t))
        );
      })(d.Component);
    },
    mHFc: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return c;
        });
      var a = n("mrSG"),
        i = n("2vnA"),
        r = n("t0uJ"),
        o = (function () {
          function e() {
            (this.m_mapMinimizedState = new Map()),
              (this.m_setLoaded = new Set());
          }
          return (
            (e.prototype.EnsureLoaded = function (e) {
              var t = e.GetGID();
              if (!this.m_setLoaded.has(t)) {
                var n = Object(r.a)("esmin-" + t) || {};
                this.m_mapMinimizedState.set(t, n), this.m_setLoaded.add(t);
              }
            }),
            (e.prototype.IsMinimized = function (e, t, n) {
              var a = this.m_mapMinimizedState.get(e.GetGID()),
                i = a ? a[t] : void 0;
              return void 0 === i ? n : Boolean(i);
            }),
            (e.prototype.ToggleMinimized = function (e, t, n) {
              var a = this.m_mapMinimizedState.get(e.GetGID()) || {},
                i = a[t],
                o = void 0 === i ? n : Boolean(i);
              (a[t] = !o), Object(r.b)("esmin-" + e.GetGID(), a);
            }),
            (e.prototype.SetMinimizedList = function (e, t, n) {
              for (
                var a = this.m_mapMinimizedState.get(e.GetGID()) || {},
                  i = 0,
                  o = t;
                i < o.length;
                i++
              ) {
                a[o[i]] = n;
              }
              Object(r.b)("esmin-" + e.GetGID(), a);
            }),
            (e.prototype.BHasExplicitSettings = function (e) {
              return !!Object(r.a)("esmin-" + e.GetGID());
            }),
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            Object(a.c)([i.k], e.prototype, "EnsureLoaded", null),
            Object(a.c)([i.k], e.prototype, "ToggleMinimized", null),
            Object(a.c)([i.k], e.prototype, "SetMinimizedList", null),
            Object(a.c)([i.C], e.prototype, "m_mapMinimizedState", void 0),
            e
          );
        })();
      function l() {
        var e = r.c.GetEditModel(),
          t = e.GetSaleSections().map(function (e) {
            return "SaleSection_" + e.unique_id;
          });
        t.push(
          "SalePageEdit_Config",
          "sale_header",
          "sale_artwork_section",
          "product_banner",
          "product_mobile_banner",
          "SalePageEdit_TaggedItems"
        ),
          o.Get().SetMinimizedList(e, t, !0);
      }
      function s(e, t) {
        void 0 === t && (t = !1);
        var n = r.c.GetEditModel();
        return o.Get().IsMinimized(n, e, t);
      }
      function c(e, t) {
        void 0 === t && (t = !1);
        var n = r.c.GetEditModel();
        return o.Get().ToggleMinimized(n, e, t);
      }
    },
    nvcf: function (e, t, n) {
      e.exports = {
        EventCategoryCtn: "partnereventsalewidgeteditor_EventCategoryCtn_46KWq",
        EventCategoryWidth:
          "partnereventsalewidgeteditor_EventCategoryWidth_3SyzC",
        SingleLine: "partnereventsalewidgeteditor_SingleLine_JPNIC",
      };
    },
    oqmg: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return Q;
      }),
        n.d(t, "c", function () {
          return te;
        }),
        n.d(t, "d", function () {
          return ne;
        }),
        n.d(t, "e", function () {
          return ae;
        }),
        n.d(t, "a", function () {
          return de;
        });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("fcuX"),
        l = n("KP/B"),
        s = n("226m"),
        c = n("i3zJ"),
        u = n("UvY0"),
        d = n("2vnA"),
        p = n("TyAF"),
        m = n("q1tI"),
        _ = n("Cs6D"),
        g = n("vwsU"),
        h = n("dsQf"),
        f = n.n(h),
        b = n("TtDX"),
        v = n("3+zv"),
        S = n("5eAM"),
        E = n("R+8l"),
        y = n("oVVc"),
        O = n("y+6m"),
        T = n("Mgs7"),
        C = n("qP7j"),
        j = n("fpVW"),
        I = n("gyoR"),
        D = n("MnIK"),
        w = n("Jqb/"),
        M = n("ka0M"),
        k = n("xnZ7"),
        G = n.n(k),
        L = n("0OaU"),
        A = n("+d9t"),
        B = n("qiKp"),
        F = n("exH9"),
        N = n("TLQK"),
        R = n("opsS"),
        x = n("bS9Q"),
        P = n("IzPI"),
        U = n("lkRc"),
        H = n("as1E"),
        V = n("k3PP"),
        z = n("JiI5"),
        W = n("IMce"),
        q = n("mHFc"),
        Y = n("165M");
      function J(e) {
        return (e = (e = (e = e.replace('"', " ")).replace("<", " ")).replace(
          ">",
          " "
        )).trim();
      }
      function Q(e) {
        var t = null,
          n = "",
          a = !1,
          i = null == e ? void 0 : e.type;
        if ("bundle" === i)
          (t = E.a.GetBundleInfo(e.id)),
            (n = U.c.STORE_BASE_URL + "bundle/" + e.id),
            (a = !t);
        else if ("sub" === i)
          (t = y.b.GetPackageInfo(e.id)),
            (n = U.c.STORE_BASE_URL + "sub/" + e.id),
            (a = !t);
        else if (i) {
          S.a.LoadAppLinkInfo([e.id]);
          var r = S.a.GetAppLinkInfo(e.id);
          (t = r && r.name ? r : null),
            (n = U.c.STORE_BASE_URL + "app/" + e.id),
            (a = !t && S.a.BHasAppLinkLoaded(e.id));
        }
        return { appData: t, linkURL: n, bInvalidID: a };
      }
      var K = function (e) {
          return m.createElement("img", {
            className: G.a.RemoveIcon,
            src: f.a,
            onClick: e.onClick,
          });
        },
        Z = function (e) {
          var t,
            n = e.clause;
          if (!(null === (t = n.or_tags) || void 0 === t ? void 0 : t.length))
            return null;
          var a =
              ("Must have" === n.type
                ? Object(N.f)("#Sale_TagFilter_MustHave")
                : Object(N.f)("#Sale_TagFilter_MustNotHave")) +
              " '" +
              n.or_tags.join("' " + Object(N.f)("#Sale_TagFilter_Or") + " '") +
              "'",
            i = "Must have" === n.type ? W.MustHaveClause : W.MustNotHaveClause;
          return m.createElement(
            "div",
            { className: Object(F.a)(i, W.ClauseRowCtn) },
            a
          );
        },
        X = function (e) {
          var t = e.filter;
          return Object(l.q)(t)
            ? m.createElement(
                "div",
                { className: W.FilterDisplayNoFilter },
                Object(N.f)("#Sale_TagFilter_NoFilter"),
                m.createElement(V.d, {
                  tooltip: Object(N.f)("#Sale_TagFilter_NoFilter_ttip"),
                })
              )
            : m.createElement(
                "div",
                { className: W.FilterDisplayList },
                t.clauses.map(function (e, t) {
                  return m.createElement(Z, { clause: e, key: "clause" + t });
                })
              );
        },
        $ = (function () {
          function e(e) {
            this.m_storageKey = "RecentTags_" + e;
            var t = window.localStorage.getItem(this.m_storageKey);
            this.m_Tags = t ? JSON.parse(t) : [];
          }
          return (
            (e.prototype.GetRecentTags = function () {
              return this.m_Tags;
            }),
            (e.prototype.AddRecentTag = function (e) {
              var t = this.m_Tags.filter(function (t) {
                return t.toLocaleLowerCase() !== e.toLocaleLowerCase();
              });
              this.m_Tags = Object(a.g)([e], t).slice(0, 20);
              var n = JSON.stringify(this.m_Tags);
              window.localStorage.setItem(this.m_storageKey, n);
            }),
            (e.Get = function (t) {
              var n = e.m_mapStores.get(t.GetEventModel().GID);
              return (
                n ||
                  ((n = new e(t.GetEventModel().GID)),
                  e.m_mapStores.set(t.GetEventModel().GID, n)),
                n
              );
            }),
            (e.m_mapStores = new Map()),
            Object(a.c)([d.C], e.prototype, "m_Tags", void 0),
            e
          );
        })(),
        ee = Object(p.a)(function (e) {
          var t = e.id,
            n = e.type,
            a = e.name;
          return m.createElement(
            "div",
            { style: { display: "flex", alignItems: "center" } },
            m.createElement(
              "div",
              { className: G.a.GameImageContainer },
              m.createElement("img", {
                src: Object(P.c)(Number(t)),
                className: G.a.AvatarImage,
              })
            ),
            Object(x.b)(a),
            " ",
            m.createElement("span", null, "(", t, ")"),
            " ",
            m.createElement("span", { className: z.SmallText }, "(", n, ")")
          );
        }),
        te = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_currentRequest = 0), (t.m_refInput = m.createRef()), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnAddItem = function (e, t) {
              (this.m_refInput.current.element.value = ""),
                this.props.onAddItem(e, t);
            }),
            (t.prototype.UpdateAppSuggestions = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  n = this;
                return Object(a.e)(this, function (i) {
                  return (t = e.target.value) && 0 != t.trim().length
                    ? (window.clearTimeout(this.m_currentRequest),
                      (this.m_currentRequest = window.setTimeout(function () {
                        return Object(a.b)(n, void 0, void 0, function () {
                          var e,
                            n,
                            i,
                            o,
                            l,
                            s,
                            c,
                            u,
                            d,
                            p,
                            _,
                            g = this;
                          return Object(a.e)(this, function (a) {
                            switch (a.label) {
                              case 0:
                                return (
                                  (e = new Array()),
                                  0 !== t.indexOf("https://")
                                    ? [3, 1]
                                    : ((n = t.split("/")),
                                      (i = n.indexOf("app")),
                                      (o =
                                        i > -1 &&
                                        n.length > i + 1 &&
                                        n[i + 1]) &&
                                        e.push({
                                          id: o,
                                          name: n[-1],
                                          type: "game",
                                        }),
                                      (l = n.indexOf("bundle")),
                                      (s =
                                        l > -1 &&
                                        n.length > l + 1 &&
                                        n[l + 1]) &&
                                        e.push({
                                          id: s,
                                          name: n[-1],
                                          type: "bundle",
                                        }),
                                      (c = n.indexOf("sub")),
                                      (u =
                                        c > -1 &&
                                        n.length > c + 1 &&
                                        n[c + 1]) &&
                                        e.push({
                                          id: u,
                                          name: n[-1],
                                          type: "sub",
                                        }),
                                      [3, 3])
                                );
                              case 1:
                                return (
                                  (d =
                                    U.c.STORE_BASE_URL +
                                    "events_promotion_admin/ajaxitemsuggest"),
                                  (p = {
                                    term: t.replace(" ", "+"),
                                    cc: U.c.COUNTRY,
                                    l: U.c.LANGUAGE,
                                  }),
                                  [
                                    4,
                                    r.a.get(d, {
                                      params: p,
                                      withCredentials: !0,
                                    }),
                                  ]
                                );
                              case 2:
                                (_ = a.sent()).data && (e = _.data),
                                  (a.label = 3);
                              case 3:
                                return (
                                  e &&
                                    (this.m_searchResultsMenu = Object(b.a)(
                                      m.createElement(
                                        O.c,
                                        { className: z.SearchResults },
                                        e.map(function (e) {
                                          return m.createElement(
                                            O.d,
                                            {
                                              key: e.id,
                                              onSelected: function () {
                                                return g.OnAddItem(
                                                  Number(e.id),
                                                  e.type
                                                );
                                              },
                                            },
                                            m.createElement(ee, {
                                              name: e.name,
                                              id: Number(e.id),
                                              type: e.type,
                                            })
                                          );
                                        })
                                      ),
                                      this.m_refInput.current.element,
                                      {
                                        bOverlapHorizontal: !0,
                                        bMatchWidth: !0,
                                        bFitToWindow: !0,
                                        bDisablePopTop: !0,
                                      }
                                    )),
                                  [2]
                                );
                            }
                          });
                        });
                      }, 300)),
                      [2])
                    : [2];
                });
              });
            }),
            (t.prototype.render = function () {
              var e = this;
              return m.createElement(
                "div",
                { className: z.SaleImportURL },
                m.createElement(T.m, {
                  type: "text",
                  label: Object(N.f)("#Sale_SelectApps"),
                  onChange: this.UpdateAppSuggestions,
                  placeholder: Object(N.f)("#Sale_SelectApps_Placeholder"),
                  onBlur: function () {
                    setTimeout(function () {
                      return (
                        e.m_searchResultsMenu && e.m_searchResultsMenu.Hide()
                      );
                    }, 200);
                  },
                  ref: this.m_refInput,
                  tooltip: Object(N.f)("#Sale_SelectApps_Tooltip"),
                })
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnAddItem", null),
            Object(a.c)([R.a], t.prototype, "UpdateAppSuggestions", null),
            t
          );
        })(m.Component),
        ne = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnApplyFilter = function (e) {
              var t = this.props,
                n = t.editModel,
                a = t.capsuleContainer,
                i = Object(l.o)(n);
              (a.sale_tag_filter = e),
                (a.capsules = Object(l.r)(i, e, a.capsules));
            }),
            (t.prototype.OnEditFilter = function () {
              var e = this.props.capsuleContainer;
              Object(M.d)(
                m.createElement(de, {
                  editModel: this.props.editModel,
                  filter: e.sale_tag_filter,
                  title: Object(N.f)("#Sale_TagFilter_EditFilter"),
                  onApplyFilter: this.OnApplyFilter,
                  ignoreStartingReferences: e,
                }),
                window
              );
            }),
            (t.prototype.render = function () {
              var e = this.props.capsuleContainer;
              return m.createElement(
                "div",
                { className: W.FilterDisplayCtn },
                m.createElement(
                  "div",
                  { className: W.FilterTitle },
                  Object(N.f)("#Sale_TagFilter_CurrentFilter"),
                  m.createElement(V.d, {
                    tooltip: Object(N.f)("#Sale_TagFilter_EditFilter_ttip"),
                  })
                ),
                m.createElement(
                  "div",
                  { className: W.FilterActionsCtn },
                  m.createElement(X, { filter: e.sale_tag_filter }),
                  m.createElement(
                    T.d,
                    { onClick: this.OnEditFilter },
                    Object(N.f)("#Sale_TagFilter_EditFilter")
                  )
                )
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnApplyFilter", null),
            Object(a.c)([R.a], t.prototype, "OnEditFilter", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component),
        ae = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bShowItemEditor: !1,
                strSearch: "",
                bShowFiltered: !1,
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.RemoveTagItem = function (e) {
              var t = this.props.editModel,
                n = t.GetEventModel().GetTaggedItems();
              e >= 0 &&
                e < n.length &&
                (n.splice(e, 1), t.SetDirty(o.c.jsondata_sales));
            }),
            (t.prototype.AddTagItem = function (e, t) {
              Object(l.b)(this.props.editModel, t, e);
            }),
            (t.prototype.UpdateSearchText = function (e) {
              this.setState({ strSearch: e.target.value.toLowerCase() });
            }),
            (t.prototype.OnExploreTags = function () {
              var e = { clauses: new Array() };
              Object(M.d)(
                m.createElement(de, {
                  editModel: this.props.editModel,
                  filter: e,
                  title: Object(N.f)("#Sale_TagFilter_Explore"),
                }),
                window
              );
            }),
            (t.prototype.OnBatchEditTags = function () {
              Object(M.d)(
                m.createElement(ce, { editModel: this.props.editModel }),
                window
              );
            }),
            (t.prototype.OnEditAutoTags = function () {
              Object(M.d)(
                m.createElement(ge, { editModel: this.props.editModel }),
                window
              );
            }),
            (t.prototype.OnApplyFilter = function (e) {
              var t = this.props.editModel;
              (t.GetEventModel().jsondata.tagged_item_filter = e),
                Object(l.u)(t),
                t.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnEditFilter = function () {
              var e = this.props.editModel;
              Object(M.d)(
                m.createElement(de, {
                  editModel: e,
                  filter: Object(l.p)(e),
                  title: Object(N.f)("#Sale_TagFilter_EditFilter"),
                  onApplyFilter: this.OnApplyFilter,
                  ignoreEventFilter: !0,
                }),
                window
              );
            }),
            (t.prototype.OnShowFiltered = function (e) {
              this.setState({ bShowFiltered: e });
            }),
            (t.prototype.OnShowItemEditor = function () {
              this.setState({ bShowItemEditor: !0 });
            }),
            (t.prototype.OnEditRaw = function (e) {
              Object(M.d)(
                m.createElement(pe, {
                  editModel: this.props.editModel,
                  bRemoveMissingEntries: !0,
                }),
                window
              );
            }),
            (t.prototype.OnEditRawCustom = function (e) {
              Object(M.d)(
                m.createElement(pe, {
                  editModel: this.props.editModel,
                  collection: l.j.Custom,
                  bRemoveMissingEntries: !1,
                }),
                window
              );
            }),
            (t.prototype.OnDeleteFiltered = function () {
              var e = this.props.editModel;
              Object(l.g)(e) && e.SetDirty(o.c.jsondata_sales);
            }),
            (t.prototype.OnSync = function (e) {
              Object(M.d)(
                m.createElement(me, { editModel: this.props.editModel }),
                window
              );
            }),
            (t.prototype.OnImportDiscountEvent = function (e) {
              var t = this;
              Object(M.d)(
                m.createElement(c.a, {
                  onDiscountEventSelected: function (e, n) {
                    return Object(a.b)(t, void 0, void 0, function () {
                      var t, i, r;
                      return Object(a.e)(this, function (a) {
                        switch (a.label) {
                          case 0:
                            return (
                              (t = this.props.editModel),
                              (i = t.GetEventModel().GetTaggedItems()),
                              (r = new Array()),
                              e.forEach(function (e) {
                                if (
                                  !i.find(function (t) {
                                    return (
                                      t.capsule.id === e &&
                                      "sub" !== t.capsule.type
                                    );
                                  })
                                ) {
                                  var t = S.a.GetAppLinkInfo(e);
                                  r.push({
                                    capsule: {
                                      id: e,
                                      type: t ? t.type : "game",
                                    },
                                    tags: [],
                                  });
                                }
                              }),
                              n.forEach(function (e) {
                                i.find(function (t) {
                                  return (
                                    t.capsule.id === e &&
                                    "sub" === t.capsule.type
                                  );
                                }) ||
                                  r.push({
                                    capsule: { id: e, type: "sub" },
                                    tags: [],
                                  });
                              }),
                              0 == r.length ? [2] : [4, Object(l.w)(t, r)]
                            );
                          case 1:
                            return (
                              a.sent(),
                              i.push.apply(i, r),
                              t.SetDirty(o.c.jsondata_sales),
                              [2]
                            );
                        }
                      });
                    });
                  },
                }),
                window
              );
            }),
            (t.prototype.RenderEditPrompt = function () {
              return m.createElement(
                "div",
                { className: W.TagItemEditorCtn },
                m.createElement(
                  "div",
                  { className: W.ItemEditDescription },
                  Object(N.f)("#Sale_EditTags_EnableItemEditingDesc")
                ),
                m.createElement(
                  T.r,
                  { onClick: this.OnShowItemEditor },
                  Object(N.f)("#Sale_EditTags_EnableItemEditing")
                )
              );
            }),
            (t.prototype.RenderItemList = function () {
              var e = this,
                t = this.state,
                n = t.strSearch,
                a = t.bShowFiltered,
                i = this.props.editModel,
                r = Object(l.p)(i),
                o = 0,
                s = 0,
                c = i.GetEventModel().GetTaggedItems();
              Object(I.i)(
                c.map(function (e) {
                  return e.capsule;
                })
              );
              var d = c.map(function (t, c) {
                  var u = Object(l.h)(t.tags, r);
                  return (
                    u ? o++ : s++,
                    u || a
                      ? m.createElement(ie, {
                          key: t.capsule.type + t.capsule.id,
                          item: t,
                          strSearchFilter: n,
                          editModel: i,
                          onRemove: function () {
                            return e.RemoveTagItem(c);
                          },
                        })
                      : null
                  );
                }),
                p =
                  (i.GetEventModel().jsondata.sale_opt_in_page_name,
                  Object(q.a)("TaggedItemList", !1));
              return m.createElement(
                "div",
                { className: Object(F.a)(W.ItemListCtn, W.TagItemEditorCtn) },
                m.createElement(
                  "div",
                  { className: W.ItemListTitle },
                  m.createElement(
                    "div",
                    { className: H.SaleSectionTitleHeader },
                    m.createElement(
                      "div",
                      { className: j.EventEditorTextTitle },
                      s > 0
                        ? Object(N.f)("#Sale_TaggedItemsCountFiltered", o, s)
                        : Object(N.f)("#Sale_TaggedItemsCount", o),
                      m.createElement(V.d, {
                        tooltip: Object(N.f)("#Sale_TaggedItemsCount_ttip"),
                      })
                    ),
                    m.createElement(Y.a, {
                      bIsMinimized: p,
                      fnToggleMinimize: function () {
                        return Object(q.d)("TaggedItemList", !1);
                      },
                    })
                  ),
                  m.createElement(
                    "div",
                    { className: W.ItemListControls },
                    m.createElement(
                      "div",
                      { className: W.ButtonRow },
                      m.createElement(
                        T.d,
                        { onClick: this.OnExploreTags },
                        Object(N.f)("#Sale_Explore"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)("#Sale_ExploreTaggedItems_ttip"),
                        })
                      ),
                      m.createElement(
                        T.d,
                        { onClick: this.OnEditRaw },
                        Object(N.f)("#Sale_EditRaw"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)("#Sale_EditRawTaggedItems_ttip"),
                        })
                      ),
                      m.createElement(
                        T.d,
                        { onClick: this.OnSync },
                        Object(N.f)("#Sale_SyncTaggedItems"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)("#Sale_SyncTaggedItems_ttip"),
                        })
                      )
                    ),
                    m.createElement(
                      u.b,
                      { clanSteamID: i.GetClanSteamID() },
                      m.createElement(
                        "div",
                        { className: W.ButtonRow },
                        m.createElement(
                          T.d,
                          { onClick: this.OnEditFilter },
                          Object(N.f)("#Sale_EditTaggedItemFilter"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditTaggedItemFilter_ttip"
                            ),
                          })
                        ),
                        m.createElement(
                          T.d,
                          { onClick: this.OnImportDiscountEvent },
                          Object(N.f)("#Sale_DiscountEvent_Add"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)("#Sale_DiscountEvent_ttip"),
                          })
                        ),
                        m.createElement(
                          T.d,
                          { onClick: this.OnEditRawCustom },
                          Object(N.f)("#Sale_EditRawCustom"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditRawCustomTaggedItems_ttip"
                            ),
                          })
                        ),
                        m.createElement(
                          T.d,
                          { onClick: this.OnBatchEditTags },
                          Object(N.f)("#Sale_BatchEditTaggedItems"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_BatchEditTaggedItems_ttip"
                            ),
                          })
                        ),
                        m.createElement(
                          T.d,
                          { onClick: this.OnEditAutoTags },
                          Object(N.f)("#Sale_EditAutoTags"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)("#Sale_EditAutoTags_ttip"),
                          })
                        ),
                        s > 0 &&
                          m.createElement(
                            T.d,
                            { onClick: this.OnDeleteFiltered },
                            Object(N.f)("#Sale_DeleteFilteredItems"),
                            m.createElement(V.d, {
                              tooltip: Object(N.f)(
                                "#Sale_DeleteFilteredItems_ttip"
                              ),
                            })
                          )
                      )
                    )
                  )
                ),
                !p &&
                  m.createElement(
                    "div",
                    { className: W.ItemList },
                    s > 0 &&
                      m.createElement(T.e, {
                        label: Object(N.f)("#Sale_ShowFilteredTaggedItems"),
                        tooltip: Object(N.f)(
                          "#Sale_ShowFilteredTaggedItems_ttip"
                        ),
                        checked: this.state.bShowFiltered,
                        onChange: this.OnShowFiltered,
                      }),
                    m.createElement(T.m, {
                      type: "text",
                      label: Object(N.f)("#Sale_TaggedItemsFilter"),
                      placeholder: Object(N.f)("#Sale_TaggedItemsFilter"),
                      onChange: this.UpdateSearchText,
                      tooltip: Object(N.f)("#Sale_TaggedItemsFilter_ttip"),
                    }),
                    d
                  )
              );
            }),
            (t.prototype.render = function () {
              var e = this.state.bShowItemEditor,
                t = this.props.editModel,
                n = t.GetEventModel().GetTaggedItems();
              return m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: W.TagItemEditorCtn },
                  m.createElement(
                    u.b,
                    { clanSteamID: t.GetClanSteamID(), requireAdmin: !0 },
                    m.createElement(V.c, { editModel: t })
                  )
                ),
                t.GetEventModel().jsondata.item_source_type !==
                  v.n.k_EContentHub &&
                  m.createElement(
                    m.Fragment,
                    null,
                    (null == n ? void 0 : n.length) || e
                      ? m.createElement(
                          m.Fragment,
                          null,
                          m.createElement(te, { onAddItem: this.AddTagItem }),
                          this.RenderItemList()
                        )
                      : this.RenderEditPrompt()
                  )
              );
            }),
            Object(a.c)([R.a], t.prototype, "RemoveTagItem", null),
            Object(a.c)([R.a], t.prototype, "AddTagItem", null),
            Object(a.c)([R.a], t.prototype, "UpdateSearchText", null),
            Object(a.c)([R.a], t.prototype, "OnExploreTags", null),
            Object(a.c)([R.a], t.prototype, "OnBatchEditTags", null),
            Object(a.c)([R.a], t.prototype, "OnEditAutoTags", null),
            Object(a.c)([R.a], t.prototype, "OnApplyFilter", null),
            Object(a.c)([R.a], t.prototype, "OnEditFilter", null),
            Object(a.c)([R.a], t.prototype, "OnShowFiltered", null),
            Object(a.c)([R.a], t.prototype, "OnShowItemEditor", null),
            Object(a.c)([R.a], t.prototype, "OnEditRaw", null),
            Object(a.c)([R.a], t.prototype, "OnEditRawCustom", null),
            Object(a.c)([R.a], t.prototype, "OnDeleteFiltered", null),
            Object(a.c)([R.a], t.prototype, "OnSync", null),
            Object(a.c)([R.a], t.prototype, "OnImportDiscountEvent", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component),
        ie = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { expanded: !1 }), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnEditTags = function () {
              Object(M.d)(
                m.createElement(se, {
                  editModel: this.props.editModel,
                  item: this.props.item,
                  onTagsModified: this.props.onTagsModified,
                }),
                window
              );
            }),
            (t.prototype.OnToggleTags = function () {
              this.setState({ expanded: !this.state.expanded });
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.item,
                a = t.onRemove,
                i = t.strSearchFilter,
                r = t.tagHighlight,
                o = t.filter,
                l = n.capsule,
                s = Q(l),
                c = s.appData,
                u = s.linkURL,
                d = s.bInvalidID,
                p = Object(N.f)("#AppType_" + l.type),
                _ = c ? c.appid || c.bundleid || c.packageid : l.id,
                g = c ? c.name : null;
              if (
                i &&
                (g || "").toLowerCase().search(i) < 0 &&
                String(_ || "").search(i) < 0
              )
                return null;
              var h = r ? r.toLocaleLowerCase() : void 0;
              return m.createElement(
                D.a,
                { className: W.TagItemCtn },
                m.createElement(
                  A.b,
                  {
                    className: W.TagItemImageCtn,
                    bDisableContextMenu: !0,
                    href: u,
                  },
                  c
                    ? m.createElement("img", {
                        loading: "lazy",
                        className: z.SaleCapsuleImg,
                        src: c.header_image_url,
                      })
                    : null
                ),
                m.createElement(
                  "div",
                  { className: W.NameAndTagCtn },
                  m.createElement(
                    "div",
                    { className: W.NameCtn },
                    g,
                    " (",
                    _,
                    ") ",
                    m.createElement(
                      "span",
                      { className: z.SmallText },
                      "(",
                      p,
                      ")"
                    ),
                    d &&
                      m.createElement(
                        "div",
                        { className: z.SaleCapsuleConflict },
                        Object(N.f)("#Sale_NotFoundCapsule"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)(
                            "#Sale_NotFoundCapsule_Tooltip",
                            p,
                            l.id
                          ),
                        })
                      )
                  ),
                  m.createElement(
                    "div",
                    { className: W.TagSummaryCtn },
                    m.createElement(
                      "span",
                      { className: W.TagSummary, onClick: this.OnEditTags },
                      Object(N.f)(
                        "#Sale_EditTags_TagCount",
                        (null === (e = n.tags) || void 0 === e
                          ? void 0
                          : e.length) || 0
                      )
                    ),
                    m.createElement(
                      "span",
                      {
                        className: W.TagShowToggle,
                        onClick: this.OnToggleTags,
                      },
                      Object(N.f)(
                        this.state.expanded
                          ? "#Sale_EditTags_Hide"
                          : "#Sale_EditTags_Show"
                      )
                    )
                  ),
                  this.state.expanded &&
                    m.createElement(
                      "div",
                      { onClick: this.OnEditTags },
                      m.createElement(oe, {
                        item: n,
                        lowerTagHighlight: h,
                        filter: o,
                      })
                    )
                ),
                a && m.createElement(K, { onClick: a })
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnEditTags", null),
            Object(a.c)([R.a], t.prototype, "OnToggleTags", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component);
      function re(e, t, n) {
        var a,
          i = e.toLocaleLowerCase();
        if (t && i === t) return W.TagHighlight;
        if (null == n ? void 0 : n.clauses)
          for (var r = 0, o = n.clauses; r < o.length; r++) {
            var l = o[r];
            if (
              null === (a = l.or_tags) || void 0 === a
                ? void 0
                : a.find(function (e) {
                    return i === e.toLocaleLowerCase();
                  })
            )
              return "Must have" === l.type ? W.TagMustHave : W.TagMustNotHave;
          }
        return null;
      }
      var oe = Object(p.a)(function (e) {
          var t = e.item,
            n = Array.from(t.tags),
            a = (function (e, t) {
              var n;
              if (!(null == t ? void 0 : t.clauses)) return null;
              for (var a = null, i = 0, r = t.clauses; i < r.length; i++) {
                var o = r[i];
                if (
                  "Must have" === o.type &&
                  (null === (n = o.or_tags) || void 0 === n ? void 0 : n.length)
                ) {
                  for (
                    var l = !1,
                      s = 0,
                      c = function (t) {
                        if (
                          t &&
                          (s++,
                          e.find(function (e) {
                            return e === t;
                          }))
                        )
                          return (l = !0), "break";
                      },
                      u = 0,
                      d = o.or_tags;
                    u < d.length && "break" !== c(d[u]);
                    u++
                  );
                  s > 0 &&
                    !l &&
                    (a = a || []).push(
                      Object(N.f)("#Sale_TagFilter_Missing") +
                        o.or_tags.join(
                          " " + Object(N.f)("#Sale_TagFilter_Or") + " "
                        )
                    );
                }
              }
              return a;
            })(t.tags, e.filter);
          return 0 !== n.length || a
            ? (n.sort(function (e, t) {
                return e.localeCompare(t);
              }),
              m.createElement(
                "div",
                { className: W.TagListCtn },
                n.map(function (t) {
                  return m.createElement(le, {
                    key: t,
                    tag: t,
                    className: re(t, e.lowerTagHighlight, e.filter),
                  });
                }),
                a &&
                  a.map(function (e) {
                    return m.createElement(le, {
                      key: e,
                      tag: e,
                      className: W.TagMissingMustHave,
                    });
                  })
              ))
            : m.createElement(
                "div",
                { className: W.TagListCtn },
                Object(N.f)("#Sale_TagFilter_AddTags")
              );
        }),
        le = function (e) {
          var t = Object(l.k)(e.tag);
          return m.createElement(
            "div",
            {
              className: Object(F.a)(
                W.ItemTag,
                e.className,
                t && "TagCollection_" + t
              ),
            },
            e.tag
          );
        },
        se = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                currentTags: Object(a.g)(t.props.item.tags),
                defaultTags: null,
                otherTags: null,
                startingSections: t.GetIncludedSections(t.props.item.tags),
                includedSections: t.GetIncludedSections(t.props.item.tags),
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.LoadAppDefaultTags();
            }),
            (t.prototype.GetIncludedSections = function (e) {
              var t = this.props,
                n = t.editModel,
                a = t.item,
                i = [],
                r = a.capsule;
              return (
                n
                  .GetEventModel()
                  .GetSaleSections()
                  .forEach(function (t, a) {
                    var o = !1;
                    t.sale_tag_filter
                      ? (o = Object(l.h)(e, t.sale_tag_filter))
                      : t.capsules &&
                        (o = Boolean(
                          t.capsules.find(function (e) {
                            return e.type === r.type && e.id === r.id;
                          })
                        )),
                      o &&
                        i.push(
                          Object(V.b)(t, n.GetCurEditLanguage(), n, a, !0)
                        );
                  }),
                i.sort(function (e, t) {
                  return e.localeCompare(t);
                }),
                i
              );
            }),
            (t.prototype.LoadAppDefaultTags = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, i, r, o;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (e = { capsule: this.props.item.capsule, tags: [] }),
                        [4, Object(l.w)(this.props.editModel, [e])]
                      );
                    case 1:
                      for (
                        a.sent(),
                          t = new Set(),
                          e.tags.forEach(function (e) {
                            return t.add(e);
                          }),
                          n = new Map(),
                          i = 0,
                          r = this.props.editModel
                            .GetEventModel()
                            .GetTaggedItems();
                        i < r.length;
                        i++
                      )
                        (o = r[i]).tags &&
                          o.tags.forEach(function (e) {
                            return n.set(e.toLocaleLowerCase(), e);
                          });
                      return (
                        t.forEach(function (e) {
                          return n.set(e.toLocaleLowerCase(), e);
                        }),
                        this.setState({ defaultTags: t, otherTags: n }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateTagList = function (e) {
              this.setState({
                currentTags: e,
                includedSections: this.GetIncludedSections(e),
              });
            }),
            (t.prototype.RemoveTag = function (e) {
              var t = e.toLocaleLowerCase(),
                n = this.state.currentTags.filter(function (e) {
                  return e.toLocaleLowerCase() != t;
                });
              this.UpdateTagList(n);
            }),
            (t.prototype.AddTag = function (e) {
              var t = this.state.currentTags,
                n = (e = J(e)).toLocaleLowerCase();
              if (
                ($.Get(this.props.editModel).AddRecentTag(e),
                !t.find(function (e) {
                  return e.toLocaleLowerCase() === n;
                }))
              ) {
                var i = this.state.otherTags.get(n);
                i && (e = i), this.UpdateTagList(Object(a.g)(t, [e]));
              }
            }),
            (t.prototype.OnOK = function () {
              Object(l.c)(this.props.item, this.state.currentTags) &&
                (Object(l.v)(
                  this.props.editModel.GetEventModel().jsondata.auto_item_tags,
                  this.props.item
                ),
                Object(l.u)(this.props.editModel),
                this.props.onTagsModified && this.props.onTagsModified(),
                this.props.editModel.SetDirty(o.c.jsondata_sales)),
                this.props.closeModal();
            }),
            (t.prototype.RenderSectionList = function () {
              var e = this.state,
                t = e.startingSections;
              return e.includedSections.map(function (e, n) {
                var a = !t.find(function (t) {
                  return e === t;
                });
                return m.createElement(
                  "div",
                  {
                    key: n,
                    className: a ? W.SectionAdded : W.SectionUnchanged,
                  },
                  e
                );
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.item,
                i = t.closeModal,
                r = this.state,
                o = r.currentTags,
                l = r.defaultTags,
                s = r.otherTags;
              if (!l) return m.createElement(L.a, null);
              var c = new Set();
              o.forEach(function (e) {
                return c.add(e.toLocaleLowerCase());
              });
              var u = Object(a.g)(o);
              u.sort(function (e, t) {
                return e.localeCompare(t);
              });
              var d = u.map(function (t) {
                  var n = l.has(t),
                    a = Object(F.a)(W.EditTag, W.AppliedTag, n && W.DefaultTag);
                  return m.createElement(
                    "div",
                    {
                      key: t,
                      className: a,
                      onClick: function () {
                        return e.RemoveTag(t);
                      },
                    },
                    t
                  );
                }),
                p = new Array();
              s.forEach(function (e, t) {
                c.has(t) || p.push(e);
              }),
                p.sort(function (e, t) {
                  return e.localeCompare(t);
                });
              var _ = [];
              p.forEach(function (t) {
                if (l.has(t)) {
                  var n = Object(F.a)(W.EditTag, W.OtherTag, W.DefaultTag);
                  _.push(
                    m.createElement(
                      "div",
                      {
                        key: t,
                        className: n,
                        onClick: function () {
                          return e.AddTag(t);
                        },
                      },
                      t
                    )
                  );
                }
              });
              var h = [];
              $.Get(this.props.editModel)
                .GetRecentTags()
                .forEach(function (t) {
                  if (!c.has(t.toLocaleLowerCase())) {
                    var n = l.has(t),
                      a = Object(F.a)(W.EditTag, W.OtherTag, n && W.DefaultTag);
                    h.push(
                      m.createElement(
                        "div",
                        {
                          key: t,
                          className: a,
                          onClick: function () {
                            return e.AddTag(t);
                          },
                        },
                        t
                      )
                    );
                  }
                });
              var f = this.RenderSectionList(),
                b = Q(n.capsule).appData,
                v = b ? b.appid || b.bundleid || b.packageid : n.capsule.id,
                S = {
                  option: function (e) {
                    return Object(a.a)(Object(a.a)({}, e), {
                      color: "#444444",
                    });
                  },
                },
                E = p.map(function (e) {
                  return { label: e, value: e };
                });
              return m.createElement(
                w.e,
                {
                  onCancel: i,
                  closeModal: i,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  className: C.NotTooWideModal,
                },
                m.createElement(
                  T.l,
                  { className: W.EditTagsTitle },
                  b
                    ? m.createElement("img", {
                        className: z.SaleCapsuleImg,
                        src: b.header_image_url,
                      })
                    : null,
                  m.createElement(
                    "div",
                    { className: W.EditTagsTitleText },
                    b ? b.name : null,
                    " (",
                    v,
                    ")"
                  )
                ),
                m.createElement(
                  T.b,
                  null,
                  m.createElement(
                    "div",
                    { className: W.EditTagsBody },
                    m.createElement(
                      "div",
                      { className: W.ColumnList },
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.TagColumnTitle },
                          Object(N.f)("#Sale_EditTags_Applied", o.length),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)("#Sale_EditTags_Applied_ttip"),
                          })
                        ),
                        m.createElement(
                          "div",
                          { className: W.TagColumnList },
                          d
                        )
                      ),
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        _.length > 0 &&
                          m.createElement(
                            "div",
                            { className: W.SmallColumn },
                            m.createElement(
                              "div",
                              { className: W.TagColumnTitle },
                              Object(N.f)("#Sale_EditTags_Store", _.length),
                              m.createElement(V.d, {
                                tooltip: Object(N.f)(
                                  "#Sale_EditTags_Store_ttip"
                                ),
                              })
                            ),
                            m.createElement(
                              "div",
                              { className: W.TagColumnList },
                              _
                            )
                          ),
                        m.createElement(
                          "div",
                          { className: W.FillColumn },
                          m.createElement(
                            "div",
                            { className: W.TagColumnTitle },
                            Object(N.f)("#Sale_EditTags_RecentTags"),
                            m.createElement(V.d, {
                              tooltip: Object(N.f)(
                                "#Sale_EditTags_RecentTags_ttip"
                              ),
                            })
                          ),
                          m.createElement(
                            "div",
                            { className: W.TagColumnList },
                            h
                          )
                        )
                      ),
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.TagColumnTitle },
                          Object(N.f)("#Sale_EditTags_Sections", f.length),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditTags_Sections_ttip"
                            ),
                          })
                        ),
                        m.createElement(
                          "div",
                          { className: W.TagColumnList },
                          f
                        )
                      )
                    ),
                    m.createElement(
                      "div",
                      { className: W.AddTagCtn },
                      m.createElement(
                        "div",
                        { className: W.TagColumnTitle },
                        Object(N.f)("#Sale_EditTags_NewTagName"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)(
                            "#Sale_EditTags_NewTagName_ttip"
                          ),
                        })
                      ),
                      m.createElement(g.a, {
                        styles: S,
                        isSearchable: !0,
                        isMulti: !1,
                        isClearable: !0,
                        onChange: function (t) {
                          (null == t ? void 0 : t.value) && e.AddTag(t.value);
                        },
                        options: E,
                        defaultMenuIsOpen: !1,
                        menuPlacement: "top",
                      })
                    ),
                    m.createElement(
                      "div",
                      { className: W.OKButton },
                      m.createElement(
                        T.r,
                        { onClick: this.OnOK },
                        Object(N.f)("#Sale_TagFilter_OK")
                      )
                    )
                  )
                )
              );
            }),
            Object(a.c)([R.a], t.prototype, "RemoveTag", null),
            Object(a.c)([R.a], t.prototype, "AddTag", null),
            Object(a.c)([R.a], t.prototype, "OnOK", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component),
        ce = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_timerForChange = new B.b()),
              (t.state = {
                editItems: t.props.editModel.GetEventModel().GetTaggedItems(),
                modifiedTags: new Map(),
                currentTags: new Map(),
                otherTags: Object(l.n)(
                  t.props.editModel.GetEventModel().GetTaggedItems()
                ),
                editText: "",
                filter: { clauses: new Array() },
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.UpdateCurrentTagToItemMap();
            }),
            (t.prototype.CloneModifiedTags = function () {
              var e = new Map();
              return (
                this.state.modifiedTags.forEach(function (t, n) {
                  return e.set(n, t);
                }),
                e
              );
            }),
            (t.prototype.OnApplyFilter = function (e) {
              var t = Object(l.l)(
                  this.props.editModel.GetEventModel().GetTaggedItems(),
                  e
                ),
                n = t.map(function (e) {
                  return e.capsule.id;
                });
              n.sort(function (e, t) {
                return e - t;
              });
              var a = n.join("\n");
              this.setState({ filter: e, editText: a, editItems: t });
            }),
            (t.prototype.OnPopulateFromFilter = function () {
              new Array();
              Object(M.d)(
                m.createElement(de, {
                  editModel: this.props.editModel,
                  filter: this.state.filter,
                  onApplyFilter: this.OnApplyFilter,
                  title: Object(N.f)("#Sale_TagFilter_EditFilter"),
                }),
                window
              );
            }),
            (t.prototype.RemoveTag = function (e) {
              for (
                var t = this,
                  n = e.toLocaleLowerCase(),
                  a = this.CloneModifiedTags(),
                  i = 0,
                  r = this.state.editItems;
                i < r.length;
                i++
              ) {
                var o = r[i],
                  l = (a.get(o) || o.tags || []).filter(function (e) {
                    return e.toLocaleLowerCase() != n;
                  });
                a.set(o, l);
              }
              this.setState({ modifiedTags: a }, function () {
                return t.UpdateCurrentTagToItemMap();
              });
            }),
            (t.prototype.AddTag = function (e) {
              var t = this,
                n = (e = J(e)).toLocaleLowerCase(),
                i = this.state.otherTags.get(n);
              i && (e = i.properCaseString);
              var r = this.CloneModifiedTags();
              $.Get(this.props.editModel).AddRecentTag(e);
              for (var o = 0, l = this.state.editItems; o < l.length; o++) {
                var s = l[o],
                  c = r.get(s) || s.tags || [];
                c.find(function (e) {
                  return e.toLocaleLowerCase() === n;
                }) || r.set(s, Object(a.g)(c, [e]));
              }
              this.setState({ modifiedTags: r }, function () {
                return t.UpdateCurrentTagToItemMap();
              });
            }),
            (t.prototype.OnOK = function () {
              var e = this,
                t = !1;
              this.state.modifiedTags.forEach(function (n, a) {
                Object(l.c)(a, n) &&
                  ((t = !0),
                  Object(l.v)(
                    e.props.editModel.GetEventModel().jsondata.auto_item_tags,
                    a
                  ));
              }),
                t &&
                  (Object(l.u)(this.props.editModel),
                  this.props.editModel.SetDirty(o.c.jsondata_sales)),
                this.props.closeModal();
            }),
            (t.prototype.UpdateCurrentTagToItemMap = function () {
              for (
                var e = new Map(), t = 0, n = this.state.editItems;
                t < n.length;
                t++
              ) {
                var a = n[t],
                  i = this.state.modifiedTags.get(a) || a.tags || [];
                Object(l.a)(a, i, e);
              }
              this.setState({ currentTags: e });
            }),
            (t.prototype.OnUpdateItemListFromText = function () {
              for (
                var e = this,
                  t = this.state.editText,
                  n = /.*?(\d\d\d+)/gm,
                  a = new Set();
                ;

              ) {
                var i = n.exec(t);
                if (null === i) break;
                a.add(Number(i[1]));
              }
              var r = this.props.editModel.GetEventModel().GetTaggedItems();
              a.size > 0 &&
                (r = r.filter(function (e) {
                  return a.has(e.capsule.id);
                })),
                this.setState({ editItems: r }, function () {
                  return e.UpdateCurrentTagToItemMap();
                });
            }),
            (t.prototype.OnTextChanged = function (e) {
              this.setState({ editText: e }),
                this.m_timerForChange.Cancel(),
                this.m_timerForChange.Schedule(
                  300,
                  this.OnUpdateItemListFromText
                );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.closeModal,
                n = this.state,
                i = n.editItems,
                r = n.currentTags,
                o = n.otherTags,
                l = new Array();
              r.forEach(function (e, t) {
                l.push({ tag: e.properCaseString, count: e.items.length });
              }),
                l.sort(function (e, t) {
                  return e.tag.localeCompare(t.tag);
                });
              var s = l.map(function (t) {
                  var n = Object(F.a)(W.EditTag, W.AppliedTag);
                  return m.createElement(
                    "div",
                    {
                      key: t.tag,
                      className: n,
                      onClick: function () {
                        return e.RemoveTag(t.tag);
                      },
                    },
                    t.tag + " (" + t.count + ")"
                  );
                }),
                c = new Array();
              o.forEach(function (e, t) {
                c.push(e.properCaseString);
              }),
                c.sort(function (e, t) {
                  return e.localeCompare(t);
                });
              var u = [];
              $.Get(this.props.editModel)
                .GetRecentTags()
                .forEach(function (t) {
                  var n = Object(F.a)(W.EditTag, W.OtherTag);
                  u.push(
                    m.createElement(
                      "div",
                      {
                        key: t,
                        className: n,
                        onClick: function () {
                          return e.AddTag(t);
                        },
                      },
                      t
                    )
                  );
                });
              var d = i.map(function (e) {
                  var t = Q(e.capsule).appData;
                  return m.createElement(
                    "div",
                    { key: e.capsule.id },
                    t
                      ? m.createElement("img", {
                          className: z.SaleCapsuleImg,
                          src: t.header_image_url,
                        })
                      : null,
                    t ? t.name : null,
                    " (",
                    e.capsule.id,
                    ")"
                  );
                }),
                p = {
                  option: function (e) {
                    return Object(a.a)(Object(a.a)({}, e), {
                      color: "#444444",
                    });
                  },
                },
                h = c.map(function (e) {
                  return { label: e, value: e };
                }),
                f = l.map(function (e) {
                  return { label: e.tag + " (" + e.count + ")", value: e.tag };
                });
              return m.createElement(
                w.e,
                {
                  onCancel: t,
                  closeModal: t,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  className: C.NotTooWideModal,
                },
                m.createElement(
                  T.b,
                  null,
                  m.createElement(
                    "div",
                    { className: W.EditTagsBody },
                    m.createElement(
                      "div",
                      { className: W.ColumnList },
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.TagColumnTitle },
                          Object(N.f)("#Sale_EditTags_BatchItemText", d.length),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditTags_BatchItemText_ttip"
                            ),
                          })
                        ),
                        m.createElement("textarea", {
                          value: this.state.editText,
                          cols: 60,
                          onChange: function (t) {
                            return e.OnTextChanged(t.currentTarget.value);
                          },
                        }),
                        m.createElement(
                          "div",
                          {
                            className: W.PopulateByFilter,
                            onClick: this.OnPopulateFromFilter,
                          },
                          Object(N.f)("#Sale_EditTags_BatchFilter"),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditTags_BatchFilter_ttip"
                            ),
                          })
                        )
                      ),
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.TagColumnTitle },
                          Object(N.f)("#Sale_EditTags_BatchItems", d.length),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)(
                              "#Sale_EditTags_BatchItems_ttip"
                            ),
                          })
                        ),
                        m.createElement(
                          "div",
                          { className: W.TagColumnList },
                          d
                        )
                      ),
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.TagColumnTitle },
                          Object(N.f)("#Sale_EditTags_Applied", r.size),
                          m.createElement(V.d, {
                            tooltip: Object(N.f)("#Sale_EditTags_Applied_ttip"),
                          })
                        ),
                        m.createElement(
                          "div",
                          { className: W.TagColumnList },
                          s
                        )
                      ),
                      m.createElement(
                        "div",
                        { className: W.TagColumn },
                        m.createElement(
                          "div",
                          { className: W.FillColumn },
                          m.createElement(
                            "div",
                            { className: W.TagColumnTitle },
                            Object(N.f)("#Sale_EditTags_RecentTags"),
                            m.createElement(V.d, {
                              tooltip: Object(N.f)(
                                "#Sale_EditTags_RecentTags_ttip"
                              ),
                            })
                          ),
                          m.createElement(
                            "div",
                            { className: W.TagColumnList },
                            u
                          )
                        )
                      )
                    ),
                    m.createElement(
                      "div",
                      { className: W.AddTagCtn },
                      m.createElement(
                        "div",
                        { className: W.TagColumnTitle },
                        Object(N.f)("#Sale_EditTags_NewTagName"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)(
                            "#Sale_EditTags_NewTagName_ttip"
                          ),
                        })
                      ),
                      m.createElement(g.a, {
                        styles: p,
                        isSearchable: !0,
                        isMulti: !1,
                        isClearable: !0,
                        onChange: function (t) {
                          (null == t ? void 0 : t.value) && e.AddTag(t.value);
                        },
                        options: h,
                        defaultMenuIsOpen: !1,
                        menuPlacement: "top",
                      }),
                      m.createElement(
                        "div",
                        { className: W.TagColumnTitle },
                        Object(N.f)("#Sale_EditTags_RemoveTagName"),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)(
                            "#Sale_EditTags_RemoveTagName_ttip"
                          ),
                        })
                      ),
                      m.createElement(_.a, {
                        styles: p,
                        isSearchable: !0,
                        isMulti: !1,
                        isClearable: !0,
                        onChange: function (t) {
                          (null == t ? void 0 : t.value) &&
                            e.RemoveTag(t.value);
                        },
                        options: f,
                        defaultMenuIsOpen: !1,
                        menuPlacement: "top",
                      })
                    ),
                    m.createElement(
                      "div",
                      { className: W.OKButton },
                      m.createElement(
                        T.r,
                        { onClick: this.OnOK },
                        Object(N.f)("#Sale_TagFilter_OK")
                      )
                    )
                  )
                )
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnApplyFilter", null),
            Object(a.c)([R.a], t.prototype, "OnPopulateFromFilter", null),
            Object(a.c)([R.a], t.prototype, "RemoveTag", null),
            Object(a.c)([R.a], t.prototype, "AddTag", null),
            Object(a.c)([R.a], t.prototype, "OnOK", null),
            Object(a.c)([R.a], t.prototype, "OnUpdateItemListFromText", null),
            Object(a.c)([R.a], t.prototype, "OnTextChanged", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component);
      function ue(e) {
        var t = e.onClauseChanged,
          n = e.value,
          i = e.taggedItems,
          r = e.filter,
          o = e.clauseIndex,
          s = e.tagIndex,
          c = m.useState(new Array()),
          u = c[0],
          d = c[1],
          p = { label: Object(N.f)("#Sale_TagFilter_SelectTag"), value: "" },
          g = n ? { label: n, value: n } : p,
          h = {
            option: function (e) {
              return Object(a.a)(Object(a.a)({}, e), { color: "#444444" });
            },
          };
        return m.createElement(_.a, {
          styles: h,
          isSearchable: !0,
          isMulti: !1,
          onChange: function (e) {
            return t(e.value);
          },
          value: g,
          options: u,
          defaultMenuIsOpen: u.length > 0,
          onMenuOpen: function () {
            var e = Object(l.n)(i),
              t = [p],
              n = r.clauses[o].or_tags[s];
            r.clauses[o].or_tags[s] = "";
            var a = !0;
            r.clauses.forEach(function (e) {
              e.or_tags.some(Boolean) && (a = !1);
            });
            var c = a ? i : Object(l.l)(i, r),
              u = new Set(
                c.map(function (e) {
                  return e.capsule.id;
                })
              );
            e.forEach(function (e) {
              r.clauses[o].or_tags[s] = e.properCaseString;
              var n = 0,
                i = 0;
              a
                ? (i =
                    "Must have" === r.clauses[0].type
                      ? c.length - e.items.length
                      : e.items.length)
                : e.items.forEach(function (e) {
                    var t = Object(l.h)(e.tags, r);
                    t != u.has(e.capsule.id) && (t ? n++ : i++);
                  });
              var d = c.length + n - i;
              t.push({
                label: e.properCaseString + " (" + d + ")",
                value: e.properCaseString,
              });
            }),
              (r.clauses[o].or_tags[s] = n),
              t.sort(function (e, t) {
                return e.value.localeCompare(t.value);
              }),
              d(t);
          },
          onMenuClose: function () {
            d([]);
          },
          menuPlacement: "bottom",
        });
      }
      var de = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = t.GenerateInitialState()), t;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GenerateInitialState = function () {
              var e = this.SetupInitialFilter(),
                t = this.GenerateStartingUnreferencedItems();
              return Object(a.a)(
                {
                  tagDropdownOptions: this.GenerateTagDropDownOptions(),
                  currentFilter: e,
                  tagHighlight: "",
                  showTagBreakdown: !1,
                  showMode: "active",
                  strSearch: "",
                  startingUnreferencedItems: t,
                },
                this.CalcualateItemsAndTags(e, t)
              );
            }),
            (t.prototype.GetFilteredItems = function () {
              return this.props.ignoreEventFilter
                ? this.props.editModel.GetEventModel().GetTaggedItems()
                : Object(l.o)(this.props.editModel);
            }),
            (t.prototype.GenerateStartingUnreferencedItems = function () {
              for (
                var e = this.props.editModel,
                  t = new Map(),
                  n = 0,
                  a = this.GetFilteredItems();
                n < a.length;
                n++
              ) {
                var i = a[n];
                t.set(i.capsule.type + i.capsule.id, i);
              }
              for (
                var r = 0, o = e.GetEventModel().GetSaleSections();
                r < o.length;
                r++
              ) {
                var l = o[r];
                if (
                  !this.props.ignoreStartingReferences ||
                  l.capsules !== this.props.ignoreStartingReferences.capsules
                )
                  for (var s = 0, c = l.capsules; s < c.length; s++) {
                    var u = c[s];
                    t.delete(u.type + u.id);
                  }
              }
              return Array.from(t.values());
            }),
            (t.prototype.CalcualateItemsAndTags = function (e, t) {
              this.props.editModel;
              var n = this.GetFilteredItems(),
                a = Object(l.l)(n, e),
                i = new Set(a),
                r = n.filter(function (e) {
                  return !i.has(e);
                }),
                o = t.filter(function (e) {
                  return !i.has(e);
                });
              return {
                activeItems: a,
                activeTagBreakdown: Object(l.n)(a),
                filteredItems: r,
                filteredTagBreakdown: Object(l.n)(r),
                unusedItems: o,
                unusedTagBreakdown: Object(l.n)(o),
              };
            }),
            (t.prototype.GenerateTagDropDownOptions = function () {
              var e = Object(l.n)(this.GetFilteredItems()),
                t = [
                  {
                    label: Object(N.f)("#Sale_TagFilter_SelectTag"),
                    value: "",
                  },
                ];
              return (
                e.forEach(function (e) {
                  return t.push({
                    label: e.properCaseString + " (" + e.items.length + ")",
                    value: e.properCaseString,
                  });
                }),
                t.sort(function (e, t) {
                  return e.value.localeCompare(t.value);
                }),
                t
              );
            }),
            (t.prototype.SanitizeFilter = function (e) {
              for (var t, n = 0, a = e.clauses; n < a.length; n++) {
                var i = a[n];
                i.or_tags =
                  null === (t = i.or_tags) || void 0 === t
                    ? void 0
                    : t.filter(function (e) {
                        return Boolean(e);
                      });
              }
              e.clauses = e.clauses.filter(function (e) {
                var t;
                return Boolean(
                  null === (t = e.or_tags) || void 0 === t ? void 0 : t.length
                );
              });
            }),
            (t.prototype.SetupInitialFilter = function () {
              var e = Object(l.e)(this.props.filter);
              this.SanitizeFilter(e),
                e.clauses || (e.clauses = new Array()),
                0 === e.clauses.length &&
                  e.clauses.push({ type: "Must have", or_tags: new Array("") });
              for (var t = 0, n = e.clauses; t < n.length; t++) {
                var a = n[t];
                (a.or_tags && 0 !== a.or_tags.length) ||
                  (a.or_tags = new Array(""));
              }
              return e;
            }),
            (t.prototype.RenderFilterClause = function (e, t) {
              var n = this,
                a = [
                  {
                    label: Object(N.f)("#Sale_TagFilter_MustHave"),
                    data: "Must have",
                  },
                  {
                    label: Object(N.f)("#Sale_TagFilter_MustNotHave"),
                    data: "Must not have",
                  },
                ],
                i = this.GetFilteredItems(),
                r = e.or_tags.map(function (e, a) {
                  return m.createElement(
                    "div",
                    { className: W.ClauseTagList, key: "Clause" + t + "_" + a },
                    a > 0 &&
                      m.createElement(
                        "div",
                        { className: W.OrLabel },
                        Object(N.f)("#Sale_TagFilter_Or")
                      ),
                    m.createElement(
                      "div",
                      { className: W.TagDropDown },
                      m.createElement(ue, {
                        taggedItems: i,
                        value: e,
                        onClauseChanged: function (e) {
                          return n.OnChangeClauseTag(t, a, e);
                        },
                        clauseIndex: t,
                        tagIndex: a,
                        filter: n.state.currentFilter,
                      })
                    ),
                    a > 0 &&
                      m.createElement(K, {
                        onClick: function () {
                          return n.OnRemoveClauseTagSlot(t, a);
                        },
                      })
                  );
                }),
                o =
                  "Must have" === e.type
                    ? W.MustHaveClause
                    : W.MustNotHaveClause;
              return m.createElement(
                "div",
                {
                  key: "Clause" + t,
                  className: Object(F.a)(
                    W.ClauseRowCtn,
                    o,
                    0 === t && W.FirstClause
                  ),
                },
                t > 0 &&
                  m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(K, {
                      onClick: function () {
                        return n.OnRemoveClause(t);
                      },
                    }),
                    m.createElement(
                      "div",
                      { className: W.AndLabel },
                      Object(N.f)("#Sale_TagFilter_And")
                    )
                  ),
                m.createElement(
                  "div",
                  { className: W.ClauseTypeDropDown },
                  m.createElement(T.i, {
                    rgOptions: a,
                    selectedOption: e.type,
                    onChange: function (e) {
                      return n.OnChangeClauseType(t, e.data);
                    },
                  })
                ),
                r,
                e.or_tags.length < 3 &&
                  m.createElement(
                    T.d,
                    {
                      onClick: function () {
                        return n.OnAddClauseTagSlot(t);
                      },
                    },
                    "+",
                    Object(N.f)("#Sale_TagFilter_Or"),
                    m.createElement(V.d, {
                      tooltip: Object(N.f)("#Sale_TagFilter_Or_ttip"),
                    })
                  )
              );
            }),
            (t.prototype.RenderFilterControls = function () {
              var e = this,
                t = this.state.currentFilter,
                n = t.clauses.map(function (t, n) {
                  return e.RenderFilterClause(t, n);
                });
              return m.createElement(
                "div",
                { className: W.FilterControlsCtn },
                m.createElement(
                  "div",
                  { className: W.SectionTitle },
                  Object(N.f)("#Sale_TagFilter_Filter"),
                  m.createElement(V.d, {
                    tooltip: Object(N.f)("#Sale_TagFilter_Filter_ttip"),
                  })
                ),
                m.createElement(
                  "div",
                  { className: W.FilterControlBox },
                  n,
                  t.clauses.length < 5 &&
                    m.createElement(
                      T.d,
                      { onClick: this.OnAddClause },
                      "+",
                      Object(N.f)("#Sale_TagFilter_And"),
                      m.createElement(V.d, {
                        tooltip: Object(N.f)("#Sale_TagFilter_And_ttip"),
                      })
                    )
                )
              );
            }),
            (t.prototype.RenderTagBreakdown = function (e, t) {
              var n = this,
                a = this.state.tagHighlight,
                i = [];
              t.forEach(function (e) {
                return i.push({
                  tag: e.properCaseString,
                  count: e.items.length,
                });
              }),
                i.sort(function (e, t) {
                  return e.count != t.count
                    ? t.count - e.count
                    : e.tag.localeCompare(t.tag);
                });
              var r = i.map(function (t) {
                return m.createElement(
                  "div",
                  {
                    key: t.tag,
                    className: Object(F.a)(
                      W.TagBreakdownEntry,
                      a === t.tag && W.Selected
                    ),
                    onClick: function () {
                      return n.OnHighlightTag(t.tag);
                    },
                  },
                  m.createElement(
                    "div",
                    { className: W.TextStats },
                    m.createElement("div", { className: W.TagName }, t.tag),
                    m.createElement("div", { className: W.TagUses }, t.count)
                  ),
                  m.createElement(
                    "div",
                    { className: W.PercentageBar },
                    m.createElement("div", {
                      className: W.PercentageBarFill,
                      style: { width: (100 * t.count) / e + "%" },
                    })
                  )
                );
              });
              return m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  "div",
                  { className: W.TagBreakdownCtn },
                  m.createElement("div", { className: W.TagBreakdownList }, r)
                )
              );
            }),
            (t.prototype.ModifyFilter = function (e) {
              var t = Object(l.e)(this.state.currentFilter);
              e(t),
                this.setState(
                  Object(a.a)(
                    { currentFilter: t },
                    this.CalcualateItemsAndTags(
                      t,
                      this.state.startingUnreferencedItems
                    )
                  )
                );
            }),
            (t.prototype.OnChangeClauseType = function (e, t) {
              this.ModifyFilter(function (n) {
                return (n.clauses[e].type = t);
              });
            }),
            (t.prototype.OnChangeClauseTag = function (e, t, n) {
              this.ModifyFilter(function (a) {
                return (a.clauses[e].or_tags[t] = n);
              });
            }),
            (t.prototype.OnAddClause = function () {
              this.ModifyFilter(function (e) {
                return e.clauses.push({
                  type: "Must have",
                  or_tags: new Array(""),
                });
              });
            }),
            (t.prototype.OnRemoveClause = function (e) {
              this.ModifyFilter(function (t) {
                return t.clauses.splice(e, 1);
              });
            }),
            (t.prototype.OnAddClauseTagSlot = function (e) {
              this.ModifyFilter(function (t) {
                return t.clauses[e].or_tags.push("");
              });
            }),
            (t.prototype.OnRemoveClauseTagSlot = function (e, t) {
              this.ModifyFilter(function (n) {
                return n.clauses[e].or_tags.splice(t, 1);
              });
            }),
            (t.prototype.OnHighlightTag = function (e) {
              this.setState({
                tagHighlight: this.state.tagHighlight === e ? "" : e,
              });
            }),
            (t.prototype.OnToggleTagBreakdown = function () {
              this.setState({ showTagBreakdown: !this.state.showTagBreakdown });
            }),
            (t.prototype.OnSetViewMode = function (e) {
              this.setState({ showMode: e });
            }),
            (t.prototype.OnTagsModified = function () {
              var e = this.GenerateStartingUnreferencedItems();
              this.setState(
                Object(a.a)(
                  { startingUnreferencedItems: e },
                  this.CalcualateItemsAndTags(this.state.currentFilter, e)
                )
              );
            }),
            (t.prototype.UpdateSearchText = function (e) {
              this.setState({ strSearch: e.target.value.toLowerCase() });
            }),
            (t.prototype.OnOK = function () {
              if (this.props.onApplyFilter) {
                var e = Object(l.e)(this.state.currentFilter);
                this.SanitizeFilter(e), this.props.onApplyFilter(e);
              }
              this.props.editModel.SetDirty(o.c.jsondata_sales),
                this.props.closeModal();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.editModel,
                a = t.closeModal,
                i = t.title,
                r = this.state,
                o = r.showMode,
                l = r.currentFilter,
                s = r.strSearch,
                c = r.showTagBreakdown,
                u = this.state,
                d = u.activeItems,
                p = u.activeTagBreakdown,
                _ = u.filteredItems,
                g = u.filteredTagBreakdown,
                h = u.unusedItems,
                f = u.unusedTagBreakdown,
                b = c ? this.state.tagHighlight : "",
                v = "active" === o ? p : "filtered" === o ? g : f,
                S = ("active" === o ? d : "filtered" === o ? _ : h).map(
                  function (e) {
                    var t = Q(e.capsule).appData;
                    return {
                      item: e,
                      name: t && t.name,
                      highlight:
                        b &&
                        e.tags.find(function (e) {
                          return e === b;
                        }),
                    };
                  }
                );
              S.sort(function (e, t) {
                return e.highlight != t.highlight
                  ? e.highlight
                    ? -1
                    : 1
                  : (e.name || "").localeCompare(t.name);
              });
              var E = [
                  {
                    label: m.createElement(
                      m.Fragment,
                      null,
                      Object(N.f)("#Sale_TagFilter_MatchingItems", d.length),
                      m.createElement(V.d, {
                        tooltip: Object(N.f)(
                          "#Sale_TagFilter_MatchingItems_ttip"
                        ),
                      })
                    ),
                    data: "active",
                  },
                  {
                    label: m.createElement(
                      m.Fragment,
                      null,
                      Object(N.f)("#Sale_TagFilter_FilteredItems", _.length),
                      m.createElement(V.d, {
                        tooltip: Object(N.f)(
                          "#Sale_TagFilter_FilteredItems_ttip"
                        ),
                      })
                    ),
                    data: "filtered",
                  },
                  {
                    label: m.createElement(
                      m.Fragment,
                      null,
                      Object(N.f)("#Sale_TagFilter_UnusedItems", h.length),
                      m.createElement(V.d, {
                        tooltip: Object(N.f)(
                          "#Sale_TagFilter_UnusedItems_ttip"
                        ),
                      })
                    ),
                    data: "unused",
                  },
                ],
                y = S.map(function (t) {
                  var a = t.item;
                  return m.createElement(ie, {
                    key: a.capsule.type + a.capsule.id,
                    editModel: n,
                    item: a,
                    tagHighlight: b,
                    onTagsModified: e.OnTagsModified,
                    strSearchFilter: s,
                    filter: "filtered" === o && l,
                  });
                }),
                O = c ? W.ShowTagBreakdown : W.HideTagBreakdown;
              return m.createElement(
                w.e,
                {
                  closeModal: a,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  className: C.NotTooWideModal,
                },
                m.createElement(T.l, null, i),
                m.createElement(
                  T.b,
                  null,
                  m.createElement(
                    "div",
                    { className: Object(F.a)(W.EditFitlerCtn, O) },
                    this.RenderFilterControls(),
                    m.createElement(
                      "div",
                      { className: W.TopTabs },
                      m.createElement(
                        "div",
                        { className: W.TagSelector },
                        m.createElement(T.i, {
                          rgOptions: E,
                          selectedOption: o,
                          onChange: function (t) {
                            return e.OnSetViewMode(t.data);
                          },
                        })
                      ),
                      m.createElement(
                        T.d,
                        {
                          className: Object(F.a)(
                            W.ShowTagBreakdown,
                            W.SectionTab,
                            c && W.TabActive
                          ),
                          onClick: this.OnToggleTagBreakdown,
                        },
                        Object(N.f)(
                          this.state.showTagBreakdown
                            ? "#Sale_TagFilter_HideTagBreakdown"
                            : "#Sale_TagFilter_ShowTagBreakdown"
                        ),
                        m.createElement(V.d, {
                          tooltip: Object(N.f)(
                            "#Sale_TagFilter_TagBreakdown_ttip"
                          ),
                        })
                      )
                    ),
                    m.createElement(
                      "div",
                      { className: W.TopSection },
                      m.createElement(
                        "div",
                        { className: W.MatchingItemsCtn },
                        m.createElement("div", { className: W.ItemList }, y)
                      ),
                      this.RenderTagBreakdown(y.length, v)
                    ),
                    m.createElement(T.m, {
                      type: "text",
                      label: Object(N.f)("#Sale_TaggedItemsFilter"),
                      onChange: this.UpdateSearchText,
                      focusOnMount: !0,
                      tooltip: Object(N.f)("#Sale_TaggedItemsFilter_ttip"),
                    }),
                    m.createElement(
                      "div",
                      { className: W.OKButton },
                      m.createElement(
                        T.r,
                        { onClick: this.OnOK },
                        Object(N.f)("#Sale_TagFilter_OK")
                      )
                    )
                  )
                )
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnChangeClauseType", null),
            Object(a.c)([R.a], t.prototype, "OnChangeClauseTag", null),
            Object(a.c)([R.a], t.prototype, "OnAddClause", null),
            Object(a.c)([R.a], t.prototype, "OnRemoveClause", null),
            Object(a.c)([R.a], t.prototype, "OnAddClauseTagSlot", null),
            Object(a.c)([R.a], t.prototype, "OnRemoveClauseTagSlot", null),
            Object(a.c)([R.a], t.prototype, "OnHighlightTag", null),
            Object(a.c)([R.a], t.prototype, "OnToggleTagBreakdown", null),
            Object(a.c)([R.a], t.prototype, "OnSetViewMode", null),
            Object(a.c)([R.a], t.prototype, "OnTagsModified", null),
            Object(a.c)([R.a], t.prototype, "UpdateSearchText", null),
            Object(a.c)([R.a], t.prototype, "OnOK", null),
            t
          );
        })(m.Component),
        pe = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bImporting: !1,
                editValue: t.PopulateInitialEditField(),
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.PopulateInitialEditField = function () {
              for (
                var e = this.props.editModel,
                  t = this.props.collection,
                  n = "",
                  a = 0,
                  i = e.GetEventModel().GetTaggedItems();
                a < i.length;
                a++
              ) {
                var r = i[a],
                  o = r.capsule,
                  s = r.tags,
                  c = Q(o).appData,
                  u = o.id + "\t" + o.type;
                u +=
                  '\t"' +
                  (t
                    ? s.filter(function (e) {
                        return Object(l.d)(e, t);
                      })
                    : s
                  ).join(";") +
                  '"';
                var d = c ? c.name : "";
                d && (u += '\t// "' + d + '"'), (n += u + "\n");
              }
              return n;
            }),
            (t.prototype.ParseTagItemInfoFromLine = function (e) {
              var t = /^(.*)\/\/.*/i.exec(e),
                n = ((null == t ? void 0 : t.length) > 1 ? t[1] : e) + " ";
              n = n.replace(",", "\t");
              var a = /^\s*([0-9]+)[\'\,\"\s]+(.*)/.exec(n);
              if (a) {
                var i = { id: parseInt(a[1]), type: "game" };
                n = a[2];
                var r = /^(game|software|dlc|bundle|video|sub|event|tag|music)[\'\,\"\s]+(.*)/i.exec(
                  n
                );
                if (r) (i.type = r[1]), (n = r[2]);
                else
                  for (
                    var o = 0,
                      l = this.props.editModel.GetEventModel().GetTaggedItems();
                    o < l.length;
                    o++
                  ) {
                    var s = l[o];
                    if (s.capsule.id === i.id) {
                      i.type = s.capsule.type;
                      break;
                    }
                  }
                var c = /^\"?([^\t\"\n]*)\"?/i.exec(n),
                  u = new Set(),
                  d = new Array();
                if (c)
                  for (var p = 0, m = c[1].split(";"); p < m.length; p++) {
                    var _ = J(m[p]);
                    if (_) {
                      var g = _.toLocaleLowerCase();
                      u.has(g) || (u.add(g), d.push(_));
                    }
                  }
                return { capsule: i, tags: d };
              }
            }),
            (t.prototype.OnCompleteEdit = function () {
              this.setState({ bImporting: !0, errMsg: void 0 }, this.DoImport);
            }),
            (t.prototype.DoImport = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, i, r, s, c, u, p, m, _, g, h;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      for (
                        e = this.props.editModel,
                          t = new Map(),
                          n = this.state.editValue.split("\n"),
                          i = 0,
                          r = n;
                        i < r.length;
                        i++
                      )
                        (s = r[i]),
                          (c = this.ParseTagItemInfoFromLine(s)) &&
                            t.set(c.capsule.id, c);
                      return (
                        !0,
                        (u = this.props.bRemoveMissingEntries),
                        (p = this.props.collection),
                        (m = e.GetEventModel().jsondata),
                        (_ = new Array()),
                        (g = function (e) {
                          e.tags.some(function (e) {
                            return Object(l.d)(e, l.j.Store);
                          }) || _.push(e);
                        }),
                        (h = !0),
                        p &&
                          t.forEach(function (e) {
                            e.tags.some(function (e) {
                              return Boolean(Object(l.k)(e));
                            }) && (h = !1);
                          }),
                        Object(d.G)(function () {
                          m.tagged_items || (m.tagged_items = []),
                            u &&
                              (m.tagged_items = m.tagged_items.filter(function (
                                e
                              ) {
                                var n,
                                  a =
                                    null === (n = t.get(e.capsule.id)) ||
                                    void 0 === n
                                      ? void 0
                                      : n.capsule.type;
                                return e.capsule.type === a;
                              }));
                          for (
                            var e = 0, n = m.tagged_items;
                            e < n.length;
                            e++
                          ) {
                            var a = n[e],
                              i = t.get(a.capsule.id);
                            if (i && i.capsule.type == a.capsule.type) {
                              if (p) {
                                var r = h
                                  ? i.tags.map(function (e) {
                                      return Object(l.f)(e, p);
                                    })
                                  : i.tags;
                                Object(l.t)(a, r, p);
                              } else (a.tags = i.tags), g(a);
                              Object(l.v)(m.auto_item_tags, a),
                                t.delete(a.capsule.id);
                            }
                          }
                          t.forEach(function (e) {
                            Object(l.v)(m.auto_item_tags, e),
                              m.tagged_items.push(e),
                              g(m.tagged_items[m.tagged_items.length - 1]);
                          });
                        }),
                        _.length > 0 ? [4, Object(l.w)(e, _)] : [3, 2]
                      );
                    case 1:
                      a.sent(), (a.label = 2);
                    case 2:
                      return (
                        this.setState({ bImporting: !1, errMsg: "" }),
                        e.SetDirty(o.c.jsondata_sales),
                        Object(l.u)(e),
                        this.props.closeModal(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnTextChange = function (e) {
              this.setState({ editValue: e.currentTarget.value });
            }),
            (t.prototype.render = function () {
              var e = this.props.closeModal;
              return m.createElement(
                w.e,
                {
                  onCancel: e,
                  closeModal: e,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  bHideCloseIcon: this.state.bImporting,
                },
                m.createElement(T.l, null, Object(N.f)("#Sale_EditRaw_Title")),
                m.createElement(
                  T.b,
                  null,
                  m.createElement(
                    "div",
                    null,
                    Object(N.f)("#Sale_EditRaw_Desc_1")
                  ),
                  m.createElement(
                    "div",
                    null,
                    Object(N.f)("#Sale_EditRaw_Desc_2")
                  ),
                  m.createElement(
                    "div",
                    { className: H.EditRawExample },
                    Object(N.f)("#Sale_EditRaw_Example_Title")
                  ),
                  m.createElement(
                    "div",
                    { className: H.EditRawExample },
                    Object(N.f)("#Sale_EditTagItems_Example_1")
                  ),
                  m.createElement(
                    "div",
                    { className: H.EditRawExample },
                    Object(N.f)("#Sale_EditTagItems_Example_2")
                  ),
                  m.createElement(
                    "div",
                    { className: H.EditRawExample },
                    Object(N.f)("#Sale_EditTagItems_Example_3")
                  ),
                  Boolean(this.state.errMsg) &&
                    m.createElement(
                      "p",
                      { className: C.ErrorStyles },
                      this.state.errMsg
                    ),
                  this.state.bImporting &&
                    m.createElement(L.a, {
                      size: "medium",
                      position: "center",
                    }),
                  !this.state.bImporting &&
                    m.createElement("textarea", {
                      className: Object(F.a)(
                        H.EditRawTextArea,
                        W.EditRawTextArea
                      ),
                      value: this.state.editValue,
                      cols: 80,
                      rows: 30,
                      onChange: this.OnTextChange,
                    })
                ),
                !this.state.bImporting &&
                  m.createElement(
                    T.k,
                    null,
                    m.createElement(
                      T.r,
                      { onClick: this.OnCompleteEdit, disabled: !1 },
                      Object(N.f)("#Button_Confirm"),
                      " "
                    ),
                    m.createElement(
                      T.d,
                      { onClick: e, disabled: !1 },
                      Object(N.f)("#Button_Cancel")
                    )
                  )
              );
            }),
            Object(a.c)([R.a], t.prototype, "OnCompleteEdit", null),
            Object(a.c)([R.a], t.prototype, "DoImport", null),
            Object(a.c)([R.a], t.prototype, "OnTextChange", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component),
        me = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                bImporting: !1,
                sync_opt_in_items: !1,
                sync_opt_in_tags: !1,
                sync_store_tags: !1,
                sync_feature_tags: !1,
                bSyncTop20StoreTags: !1,
              }),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.ConvertToCapsule = function (e) {
              return { id: e, type: "game" };
            }),
            (t.prototype.AddTag = function (e, t) {
              var n = t.toLocaleLowerCase();
              e.find(function (e) {
                return e.toLocaleLowerCase() === n;
              }) || e.push(t);
            }),
            (t.prototype.ImportOptInPage = function (e, t) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, i, r, o, c, u, p, m, _, g, h, f, b;
                return Object(a.e)(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return (
                        (n = this.props.editModel),
                        (i = n.GetEventModel().jsondata.sale_opt_in_page_name)
                          ? (this.setState({
                              statusMsg: Object(N.f)(
                                "#Sale_ImportOptIn_Progress_LoadOptIn"
                              ),
                            }),
                            [4, s.a.Get().ForceLoadOptInPage(i)])
                          : (this.setState({
                              bImporting: !1,
                              errMsg: "Invalid opt in page specified " + i,
                            }),
                            [2, !1])
                      );
                    case 1:
                      return 1 !== (null == (r = v.sent()) ? void 0 : r.success)
                        ? (this.setState({
                            bImporting: !1,
                            errMsg:
                              (null == r ? void 0 : r.msg) ||
                              "Unable to load the application list for the sale id " +
                                i,
                          }),
                          [2, !1])
                        : ((o = !1),
                          (c = r.opted_in),
                          (u = n.GetEventModel().jsondata.tagged_items
                            ? Object(a.g)(
                                n.GetEventModel().jsondata.tagged_items
                              )
                            : []),
                          (p = s.a.Get().GetOptInPageData(i)),
                          t ? [4, Object(l.w)(n, u, !1, !1, !0)] : [3, 3]);
                    case 2:
                      (o = v.sent()), (v.label = 3);
                    case 3:
                      if (!e) return [3, 5];
                      for (
                        Object(d.G)(function () {
                          u = u.filter(function (e) {
                            var t = Boolean(p.has(e.capsule.id));
                            return (o = o || !t), t;
                          });
                        }),
                          m = new Array(),
                          _ = function (e) {
                            if (
                              !u.find(function (t) {
                                return t.capsule.id === e.appid;
                              })
                            ) {
                              var t = {
                                capsule: g.ConvertToCapsule(e.appid),
                                tags: [],
                              };
                              m.push(t), (o = !0);
                            }
                          },
                          g = this,
                          h = 0,
                          f = c;
                        h < f.length;
                        h++
                      )
                        (b = f[h]), _(b);
                      return [4, Object(l.w)(n, m)];
                    case 4:
                      v.sent(), u.push.apply(u, m), (v.label = 5);
                    case 5:
                      return (
                        o && (n.GetEventModel().jsondata.tagged_items = u),
                        [2, o]
                      );
                  }
                });
              });
            }),
            (t.prototype.DoImport = function () {
              return Object(a.b)(this, void 0, void 0, function () {
                var e, t, n, i, r, s, c;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (e = this.state),
                        (t = e.sync_feature_tags),
                        (n = e.sync_opt_in_items),
                        (i = e.sync_opt_in_tags),
                        (r = e.sync_store_tags),
                        (s = !1),
                        n || i ? [4, this.ImportOptInPage(n, i)] : [3, 2]
                      );
                    case 1:
                      (s = a.sent() || s), (a.label = 2);
                    case 2:
                      return (
                        (c = this.props.editModel
                          .GetEventModel()
                          .GetTaggedItems()),
                        this.setState({
                          statusMsg: Object(N.f)(
                            "#Sale_SyncTaggedItems_Progress_LoadingStore",
                            c.length
                          ),
                        }),
                        r || t
                          ? [
                              4,
                              Object(l.w)(
                                this.props.editModel,
                                c,
                                r,
                                t,
                                !1,
                                this.state.bSyncTop20StoreTags
                              ),
                            ]
                          : [3, 4]
                      );
                    case 3:
                      (s = a.sent() || s), (a.label = 4);
                    case 4:
                      return (
                        s &&
                          (Object(l.u)(this.props.editModel),
                          this.props.editModel.SetDirty(o.c.jsondata_sales)),
                        this.setState({ bImporting: !1, errMsg: "" }),
                        this.props.closeModal(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnPerformSync = function () {
              this.setState(
                {
                  bImporting: !0,
                  errMsg: void 0,
                  statusMsg: Object(N.f)(
                    "#Sale_ImportOptIn_Progress_LoadOptIn"
                  ),
                },
                this.DoImport
              );
            }),
            (t.prototype.CanPerformSync = function () {
              var e = this.state,
                t = e.sync_feature_tags,
                n = e.sync_opt_in_items,
                a = e.sync_opt_in_tags,
                i = e.sync_store_tags;
              return t || n || a || i;
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.closeModal,
                a = t.editModel,
                i = Boolean(a.GetEventModel().jsondata.sale_opt_in_page_name);
              return m.createElement(
                w.e,
                {
                  onCancel: n,
                  closeModal: n,
                  bDisableBackgroundDismiss: !0,
                  bAllowFullSize: !0,
                  bHideCloseIcon: this.state.bImporting,
                },
                m.createElement(
                  T.l,
                  null,
                  Object(N.f)("#Sale_SyncTaggedItems_Title")
                ),
                m.createElement(
                  T.b,
                  null,
                  Boolean(this.state.errMsg) &&
                    m.createElement(
                      "p",
                      { className: C.ErrorStyles },
                      this.state.errMsg
                    ),
                  this.state.bImporting &&
                    m.createElement(
                      m.Fragment,
                      null,
                      this.state.statusMsg &&
                        m.createElement("p", null, this.state.statusMsg),
                      m.createElement(L.a, {
                        size: "medium",
                        position: "center",
                      })
                    ),
                  !this.state.bImporting &&
                    m.createElement(
                      m.Fragment,
                      null,
                      i &&
                        m.createElement(T.e, {
                          label: Object(N.f)("#Sale_SyncTag_OptInItems"),
                          tooltip: Object(N.f)("#Sale_SyncTag_OptInItems_ttip"),
                          checked: this.state.sync_opt_in_items,
                          onChange: function (t) {
                            return e.setState({ sync_opt_in_items: t });
                          },
                        }),
                      i &&
                        m.createElement(T.e, {
                          label: Object(N.f)("#Sale_SyncTag_OptInTags"),
                          tooltip: Object(N.f)("#Sale_SyncTag_OptInTags_ttip"),
                          checked: this.state.sync_opt_in_tags,
                          onChange: function (t) {
                            return e.setState({ sync_opt_in_tags: t });
                          },
                        }),
                      m.createElement(T.e, {
                        label: Object(N.f)("#Sale_SyncTag_StoreTags"),
                        tooltip: Object(N.f)("#Sale_SyncTag_StoreTags_ttip"),
                        checked: this.state.sync_store_tags,
                        onChange: function (t) {
                          return e.setState({ sync_store_tags: t });
                        },
                      }),
                      this.state.sync_store_tags &&
                        m.createElement(T.e, {
                          label: Object(N.f)(
                            "#FacetedBrowseEditor_SyncTopNTags"
                          ),
                          tooltip: Object(N.f)(
                            "#FacetedBrowseEditor_SyncTopNTags_Tooltip"
                          ),
                          checked: this.state.bSyncTop20StoreTags,
                          onChange: function (t) {
                            return e.setState({ bSyncTop20StoreTags: t });
                          },
                        }),
                      m.createElement(T.e, {
                        label: Object(N.f)("#Sale_SyncTag_Features"),
                        tooltip: Object(N.f)("#Sale_SyncTag_Features"),
                        checked: this.state.sync_feature_tags,
                        onChange: function (t) {
                          return e.setState({ sync_feature_tags: t });
                        },
                      })
                    )
                ),
                !this.state.bImporting &&
                  m.createElement(
                    T.k,
                    null,
                    m.createElement(
                      T.r,
                      {
                        onClick: this.OnPerformSync,
                        disabled: !this.CanPerformSync(),
                      },
                      Object(N.f)("#Button_Confirm")
                    ),
                    m.createElement(
                      T.d,
                      { onClick: n, disabled: !1 },
                      Object(N.f)("#Button_Cancel")
                    )
                  )
              );
            }),
            Object(a.c)([R.a], t.prototype, "ImportOptInPage", null),
            Object(a.c)([R.a], t.prototype, "OnPerformSync", null),
            (t = Object(a.c)([p.a], t))
          );
        })(m.Component);
      function _e(e) {
        for (var t = new Set(), n = 0, a = e; n < a.length; n++) {
          var i = a[n],
            r = i.tag_name.trim().toLocaleLowerCase();
          if (!r) return !1;
          if (t.has(r)) return !1;
          if (Object(l.q)(i.filter)) return !1;
          t.add(r);
        }
        return !0;
      }
      var ge = function (e) {
          var t = e.closeModal,
            n = e.editModel,
            i = n.GetEventModel().jsondata,
            r = m.useState(!0),
            s = r[0],
            c = r[1],
            u = m.useState(!1),
            p = u[0],
            _ = u[1],
            g = m.useState(Object(a.g)(i.auto_item_tags || [])),
            h = g[0],
            f = g[1],
            b = function () {
              c(_e(h)), _(!0);
            },
            v = h.map(function (e, t) {
              return m.createElement(he, {
                key: "AutoTag" + t,
                editModel: n,
                fnOnEdited: b,
                fnOnDeleted: function () {
                  return (
                    (e = t),
                    f(
                      h.filter(function (t, n) {
                        return n != e;
                      })
                    ),
                    void c(_e(h))
                  );
                  var e;
                },
                autoTag: e,
              });
            });
          return m.createElement(
            w.e,
            {
              onCancel: t,
              closeModal: t,
              bDisableBackgroundDismiss: !0,
              bAllowFullSize: !0,
            },
            m.createElement(T.l, null, Object(N.f)("#Sale_EditAutoTags_Title")),
            m.createElement(
              T.b,
              null,
              m.createElement(
                "div",
                { className: W.EditAutoTagsBody },
                m.createElement(
                  "div",
                  { className: W.AutoTagList },
                  v,
                  m.createElement(
                    T.d,
                    {
                      onClick: function () {
                        f(
                          Object(a.g)(h, [
                            { tag_name: "", filter: { clauses: [] } },
                          ])
                        ),
                          c(!1);
                      },
                    },
                    Object(N.f)("#Sale_EditTags_NewTagButton")
                  )
                )
              )
            ),
            m.createElement(
              T.k,
              null,
              m.createElement(
                T.d,
                {
                  onClick: function () {
                    s &&
                      p &&
                      Object(d.G)(function () {
                        i.auto_item_tags = h;
                        for (
                          var e = 0, t = n.GetEventModel().GetTaggedItems();
                          e < t.length;
                          e++
                        ) {
                          var a = t[e];
                          Object(l.v)(i.auto_item_tags, a);
                        }
                        n.SetDirty(o.c.jsondata_sales);
                      }),
                      e.closeModal();
                  },
                  disabled: !s,
                },
                Object(N.f)("#Button_OK")
              )
            )
          );
        },
        he = function (e) {
          var t = m.useState(e.autoTag.tag_name),
            n = t[0],
            a = t[1],
            i = m.useState(e.autoTag.filter),
            r = i[0],
            o = i[1],
            l = function (t) {
              (e.autoTag.filter = t), e.fnOnEdited(), o(t);
            };
          return m.createElement(
            "div",
            { className: W.AutoTag },
            m.createElement(
              "div",
              { className: W.AutoTagRow },
              m.createElement(T.m, {
                type: "text",
                onChange: function (t) {
                  a(t.target.value),
                    (e.autoTag.tag_name = t.target.value.trim()),
                    e.fnOnEdited();
                },
                placeholder: Object(N.f)("#Sale_EditAutoTags_Placeholder"),
                tooltip: Object(N.f)("#Sale_EditAutoTags_Tooltip"),
                value: n,
              }),
              m.createElement(K, {
                onClick: function () {
                  return e.fnOnDeleted();
                },
              })
            ),
            m.createElement(
              "div",
              { className: W.AutoTagRow },
              m.createElement(X, { filter: r }),
              m.createElement(
                T.d,
                {
                  onClick: function () {
                    Object(M.d)(
                      m.createElement(de, {
                        editModel: e.editModel,
                        filter: r,
                        title: Object(N.f)("#Sale_TagFilter_EditFilter"),
                        onApplyFilter: l,
                      }),
                      window
                    );
                  },
                },
                Object(N.f)("#Sale_TagFilter_EditFilter")
              )
            )
          );
        };
    },
    t0uJ: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return I;
      }),
        n.d(t, "a", function () {
          return D;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "d", function () {
          return M;
        });
      var a = n("mrSG"),
        i = n("vDqi"),
        r = n.n(i),
        o = n("Q47U"),
        l = n("fcuX"),
        s = n("t0uJ"),
        c = n("4lry"),
        u = n("2vnA"),
        d = n("q1tI"),
        p = n.n(d),
        m = n("mgoM"),
        _ = n("3+zv"),
        g = n("kLLr"),
        h = n("ir+G"),
        f = n("U+Q5"),
        b = n("TQGK"),
        v = n("BVKn"),
        S = n("9w6b"),
        E = n("6oCP"),
        y = n("r64O"),
        O = n("OS6B"),
        T = n("TLQK"),
        C = n("lkRc");
      function j(e) {
        return "U" + (C.i.accountid || "anon") + "-" + e;
      }
      function I(e, t) {
        window.sessionStorage.setItem(j(e), JSON.stringify(t));
      }
      function D(e) {
        var t = null,
          n = window.sessionStorage.getItem(j(e));
        if (n)
          try {
            t = JSON.parse(n);
          } catch (e) {}
        return t;
      }
      var w = new ((function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.m_bLoadedOrInflightSteamAwardVoteDefinitions = !1),
            (t.m_mapSteamAwardVoteDefinitionsForApp = new Map()),
            (t.m_promiseLoadClanEventsForPartnerDashboard = null),
            t
          );
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.GetCurHoverCategory = function () {
            return {
              type: this.m_curHoverCategoryType,
              tags: this.m_curHoverCategoryTags,
            };
          }),
          (t.prototype.SetCurHoverCategory = function (e, t) {
            this.m_curHoverCategoryType !== e &&
              (this.m_curHoverCategoryType = e),
              this.m_curHoverCategoryTags !== t &&
                (this.m_curHoverCategoryTags = t);
          }),
          (t.prototype.BHasEditModel = function () {
            return null != this.m_editModel;
          }),
          (t.prototype.ClearModel = function () {
            this.m_editModel = null;
          }),
          (t.prototype.BIsCreateModel = function () {
            return !this.m_editModel || "" == this.m_editModel.GetGID();
          }),
          (t.prototype.BIsDirty = function () {
            return this.m_editModel && this.m_editModel.BIsDirty();
          }),
          (t.prototype.BEventModelHasTag = function (e) {
            return this.GetEditModel().BHasTag(e);
          }),
          (t.prototype.ResetModel = function (e, t) {
            var n = new E.c();
            (n.GID = e),
              (n.clanSteamID = t || g.a.InitFromClanID(C.b.CLANACCOUNTID)),
              Object(y.a)(
                n.clanSteamID && n.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " + n.clanSteamID.ConvertTo64BitString()
              ),
              (n.appid = C.b.APPID),
              (n.bOldAnnouncement = e && e.startsWith(_.G)),
              (n.bLoaded = !0),
              null == e && (n.loadedAllLanguages = !0),
              n.appid == _.C &&
                (n.vecTags.push("hide_library_overview"),
                n.vecTags.push("steam_blog"),
                n.vecTags.push("mod_reviewed")),
              (this.m_editModel = new l.e(n)),
              h.a.EnsureStoreCapsuleInfoLoaded(C.b.APPID);
          }),
          (t.prototype.LoadClanEventsForPartnerDashboard = function (e, t) {
            return Object(a.b)(this, void 0, void 0, function () {
              return Object(a.e)(this, function (n) {
                return (
                  this.m_promiseLoadClanEventsForPartnerDashboard ||
                    (this.m_promiseLoadClanEventsForPartnerDashboard = this.InternalLoadClanEventsForPartnerDashboard(
                      e,
                      t
                    )),
                  [2, this.m_promiseLoadClanEventsForPartnerDashboard]
                );
              });
            });
          }),
          (t.prototype.InternalLoadClanEventsForPartnerDashboard = function (
            e,
            t
          ) {
            var n, i, o;
            return Object(a.b)(this, void 0, void 0, function () {
              var l,
                s,
                c,
                u,
                d = this;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (l =
                        C.c.COMMUNITY_BASE_URL +
                        "/gid/" +
                        e.ConvertTo64BitString() +
                        "/ajaxlisteventsfordashboard/"),
                      (s = { start: 0, count: 20, l: C.c.LANGUAGE }),
                      [
                        4,
                        r.a.get(l, {
                          params: s,
                          cancelToken: t ? t.token : void 0,
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (c = a.sent()),
                      (u = new Array()),
                      1 ==
                        (null === (n = null == c ? void 0 : c.data) ||
                        void 0 === n
                          ? void 0
                          : n.success) &&
                        ((null === (i = c.data.hidden_announcement_gids) ||
                        void 0 === i
                          ? void 0
                          : i.length) > 0 &&
                          c.data.hidden_announcement_gids.forEach(function (t) {
                            return u.push(
                              d.LoadHiddenPartnerEventByAnnouncementGID(e, t)
                            );
                          }),
                        (null === (o = c.data.announcement_gids) || void 0 === o
                          ? void 0
                          : o.length) > 0 &&
                          c.data.announcement_gids.forEach(function (t) {
                            return u.push(
                              d.LoadHiddenPartnerEventByAnnouncementGID(e, t)
                            );
                          })),
                      [4, Promise.all(u)]
                    );
                  case 2:
                    return a.sent(), [2, this.GetAllClanEvents(e)];
                }
              });
            });
          }),
          (t.prototype.LoadEditorModel = function (e, t) {
            var n;
            return Object(a.b)(this, void 0, void 0, function () {
              var i;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return t &&
                      (null === (n = this.m_editModel) || void 0 === n
                        ? void 0
                        : n.GetGID()) == t &&
                      this.m_editModel.GetEventModel().loadedAllLanguages
                      ? [3, 6]
                      : [3, 1];
                  case 1:
                    return t
                      ? (this.ResetModel(t, e),
                        [4, this.LoadHiddenPartnerEvent(e, t)])
                      : [3, 5];
                  case 2:
                    return (
                      a.sent(),
                      (i = s.c.GetClanEventModel(t))
                        ? (this.m_editModel.Refresh(i),
                          [4, s.c.LoadClanEventLocalization(e, t, !1)])
                        : [3, 4]
                    );
                  case 3:
                    a.sent(), (a.label = 4);
                  case 4:
                    return [3, 6];
                  case 5:
                    this.m_editModel || this.ResetModel(), (a.label = 6);
                  case 6:
                    return [2, this.m_editModel];
                }
              });
            });
          }),
          (t.prototype.GetEditModel = function () {
            return this.m_editModel;
          }),
          (t.prototype.CreateClone = function () {
            var e = this.GetEditModel().GetEventModel().clone();
            return this.m_editModel.PrepareAsClone(e), this.m_editModel;
          }),
          (t.prototype.PublishModel = function (e, t) {
            return (
              void 0 === t && (t = !1),
              Object(a.b)(this, void 0, void 0, function () {
                var n;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [4, this.InternalSaveAction(e, !0, t)];
                    case 1:
                      if (1 != (n = a.sent()).success) throw n;
                      return [2, n];
                  }
                });
              })
            );
          }),
          (t.prototype.PreSaveActions = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t, n, i, r, l, s, u, d, p;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (
                      (30 == this.m_editModel.GetFirstLanguageWithTitle() &&
                        this.m_editModel.SetName(
                          this.m_editModel.GetCurEditLanguage(),
                          Object(T.f)("#EventEditor_Placeholder_Title")
                        ),
                      !this.m_editModel.BHasEmailEnabled())
                    )
                      return [3, 6];
                    (t = this.m_editModel.GetEmailSettings().sections),
                      (n = 0),
                      (a.label = 1);
                  case 1:
                    if (!(n < t.length)) return [3, 6];
                    if (
                      ((i = t[n]),
                      !(r = new o.a(i, this.m_editModel)).BHasValidVideoURL())
                    )
                      return [3, 5];
                    if (!(l = r.GetYouTubeVideoID()) || r.BHasVideoImage())
                      return [3, 5];
                    (s =
                      C.c.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.m_editModel.GetClanSteamID().ConvertTo64BitString() +
                      "/fetchyoutubeimage?videoid=" +
                      l),
                      (u =
                        C.c.COMMUNITY_BASE_URL +
                        "public/images/events/media_play_icon.png"),
                      (a.label = 2);
                  case 2:
                    return (
                      a.trys.push([2, 4, , 5]),
                      [4, f.d.AsyncOverlay(e, s, u, l, 740, 555)]
                    );
                  case 3:
                    return (d = a.sent()), r.SetVideoHashAndExt(d), [3, 5];
                  case 4:
                    return (
                      (p = a.sent()),
                      console.error(
                        "We failed to create a video image, not a blocker: " +
                          Object(O.a)(p).strErrorMsg
                      ),
                      [3, 5]
                    );
                  case 5:
                    return ++n, [3, 1];
                  case 6:
                    return (
                      this.m_editModel.BHasSaleEnabled() &&
                        this.m_editModel.GetSaleSectionCount() > 0 &&
                        this.m_editModel
                          .GetSaleSections()
                          .forEach(function (e) {
                            "items" == e.section_type &&
                              Boolean(e.smart_section_type) &&
                              (e.capsules = []);
                          }),
                      [4, Object(c.b)(this.m_editModel)]
                    );
                  case 7:
                    return a.sent(), [2];
                }
              });
            });
          }),
          (t.prototype.SaveModel = function (e, t, n) {
            return (
              void 0 === t && (t = !1),
              Object(a.b)(this, void 0, void 0, function () {
                var i;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [4, this.PreSaveActions(e)];
                    case 1:
                      return (
                        a.sent(), [4, this.InternalSaveAction(e, !1, t, n)]
                      );
                    case 2:
                      if (1 != (i = a.sent()).success) throw i;
                      return [2, i];
                  }
                });
              })
            );
          }),
          (t.prototype.InternalSaveAction = function (e, t, n, i) {
            return Object(a.b)(this, void 0, void 0, function () {
              var o,
                s,
                c,
                d,
                p,
                h,
                f,
                b,
                v,
                S,
                E,
                j,
                I,
                D,
                w,
                M,
                k = this;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (o =
                        !!this.m_editModel.GetGID() &&
                        !this.m_editModel.GetGID().startsWith(_.G)),
                      t && !o
                        ? [
                            2,
                            {
                              success: 11,
                              msg: Object(T.f)(
                                "#EventEditor_Publish_CannotPublishWithoutSaveFirst"
                              ),
                            },
                          ]
                        : this.m_editModel.GetEventModel().loadedAllLanguages
                        ? i || (!o && !t)
                          ? [3, 2]
                          : [
                              4,
                              this.GetLastUpdateTimeForEvent(
                                e,
                                this.m_editModel.GetEventModel().GID,
                                void 0,
                                null
                              ),
                            ]
                        : [
                            2,
                            {
                              success: 11,
                              msg: Object(T.f)(
                                "#EventEditor_SaveOrPublish_MissingLocalizationInternalError"
                              ),
                            },
                          ]
                    );
                  case 1:
                    if (
                      (s = a.sent()) &&
                      s.last_update_rtime > 0 &&
                      s.last_update_rtime !=
                        this.m_editModel.GetLastUpdateTime()
                    )
                      return (
                        console.log(
                          "Clobber Warning Appears: Original Seconds: " +
                            s.last_update_rtime +
                            " update time: " +
                            this.m_editModel.GetLastUpdateTime() +
                            " previous user: " +
                            s.persona_name
                        ),
                        [
                          2,
                          {
                            success: 27,
                            msg: Object(T.f)(
                              "#EventEditor_SaveOrPublish_ClobberWarning",
                              Object(T.m)(s.last_update_rtime),
                              s.persona_name,
                              Object(T.m)(this.m_editModel.GetLastUpdateTime())
                            ),
                          },
                        ]
                      );
                    a.label = 2;
                  case 2:
                    if (
                      ((c = this.m_editModel.GetGID()),
                      (d = new URLSearchParams()).append(
                        "sessionid",
                        C.c.SESSIONID
                      ),
                      d.append("authwgtoken", C.i.authwgtoken),
                      n && d.append("fake_error", "" + n),
                      this.m_editModel
                        .GetEventModel()
                        .BHasTag("mod_reviewed") &&
                        this.m_editModel.AddTag("mod_require_rereview"),
                      this.m_editModel.BHasTag("auto_migrated") &&
                        !this.m_editModel.GetEventModel().bOldAnnouncement &&
                        this.m_editModel.ClearTags(["auto_migrated"]),
                      o || t
                        ? (d.append(t ? "bPublish" : "bUpdate", "1"),
                          d.append("gid", this.m_editModel.GetGID()),
                          d.append(
                            "announcement_gid",
                            this.m_editModel.GetAnnouncementGID()
                          ))
                        : (this.m_editModel.GetEventModel().bOldAnnouncement &&
                            d.append(
                              "announcement_gid",
                              this.m_editModel.GetAnnouncementGID()
                            ),
                          d.append("bCreate", "1")),
                      d.append(
                        "rtime32_visibility_start",
                        "" + this.m_editModel.GetEventVisibilityStartTime()
                      ),
                      d.append(
                        "rtime32_visibility_end",
                        "" + this.m_editModel.GetEventVisibilityEndTime()
                      ),
                      d.append(
                        "start_time_is_now",
                        this.m_editModel.GetStartTimeEditChoice() ==
                          l.d.k_ENow ||
                          this.m_editModel.GetVisibilitySetting() ==
                            l.f.immediate
                          ? "1"
                          : "0"
                      ),
                      !t)
                    ) {
                      if (
                        ((p = "Untitled"),
                        !(h = (this.m_editModel.GetName(0) || "").trim()) ||
                          h === p)
                      ) {
                        for (f = "", b = 0; b < 30; ++b)
                          if (
                            ((v = (this.m_editModel.GetName(b) || "").trim()),
                            this.m_editModel.BIsLanguageValidForRealms(b) && v)
                          ) {
                            f = v;
                            break;
                          }
                        this.m_editModel.SetName(0, f || p);
                      }
                      for (
                        d.append("hidden", "" + this.m_editModel.BHidden()),
                          d.append(
                            "published",
                            "" + this.m_editModel.BPublished()
                          ),
                          d.append("appid", "" + this.m_editModel.GetAppID()),
                          d.append("event_name", this.m_editModel.GetName(0)),
                          d.append(
                            "event_type",
                            "" + this.m_editModel.GetEventType()
                          ),
                          d.append(
                            "body",
                            this.m_editModel.GetDescription(0)
                              ? this.m_editModel.GetDescription(0)
                              : ""
                          ),
                          d.append(
                            "rtime32_start_time",
                            "" + this.m_editModel.GetEventStartTime()
                          ),
                          d.append(
                            "rtime32_end_time",
                            "" + this.m_editModel.GetEventEndTime()
                          ),
                          d.append(
                            "jsondata",
                            "" + this.m_editModel.ConstructJSONData()
                          ),
                          d.append(
                            "tags",
                            JSON.stringify(
                              this.m_editModel.GetEventModel().vecTags
                            )
                          ),
                          d.append(
                            "build_id",
                            "" + this.m_editModel.GetEventModel().m_nBuildID
                          ),
                          d.append(
                            "build_branch",
                            this.m_editModel.GetEventModel().m_strBuildBranch
                          ),
                          this.m_editModel.BHasBroadcaster() &&
                            d.append(
                              "broadcaster_accountid",
                              "" +
                                this.m_editModel.GetBroadcaster().GetAccountID()
                            ),
                          S = 0;
                        S < 30;
                        ++S
                      )
                        this.m_editModel.BHasLanguage(S) &&
                          (d.append(
                            Object(m.c)(Object(m.a)(S)) + "_headline",
                            this.m_editModel.GetName(S)
                              ? this.m_editModel.GetName(S)
                              : ""
                          ),
                          d.append(
                            Object(m.c)(Object(m.a)(S)) + "_body",
                            this.m_editModel.GetDescription(S)
                              ? this.m_editModel.GetDescription(S)
                              : ""
                          ));
                    }
                    (E = this.m_editModel.GetAppID()),
                      (j =
                        C.c.COMMUNITY_BASE_URL +
                        "gid/" +
                        e.ConvertTo64BitString() +
                        "/ajaxcreateupdatedeletepartnerevents/"),
                      (a.label = 3);
                  case 3:
                    return a.trys.push([3, 6, , 7]), [4, r.a.post(j, d)];
                  case 4:
                    return (
                      (I = a.sent()),
                      Object(u.G)(function () {
                        if (
                          (Object(y.a)(
                            200 == I.status && 1 == I.data.success,
                            "We should only get 200 if we succeed in this method."
                          ),
                          k.m_editModel.GetGID() == c)
                        ) {
                          k.m_editModel.ClearDirty(),
                            t
                              ? (k.m_editModel.UpdateVisibilityState(
                                  I.data.published,
                                  I.data.hidden
                                ),
                                I.data.forum_topic_id &&
                                  (k.m_editModel.GetEventModel().forumTopicGID =
                                    I.data.forum_topic_id))
                              : (o ||
                                  (k.m_editModel.SetGIDs(
                                    e,
                                    I.data.gid,
                                    I.data.announcement_gid
                                  ),
                                  k.InsertUniqueEventGID(
                                    e.GetAccountID(),
                                    E,
                                    I.data.gid
                                  )),
                                I.data.localization_updates &&
                                  I.data.localization_updates.forEach(function (
                                    e
                                  ) {
                                    k.m_editModel
                                      .GetEventModel()
                                      .timestamp_loc_updated.set(
                                        e.lang,
                                        e.timestamp_updated
                                      );
                                  }));
                          var n = k.m_editModel.GetEventModel();
                          k.m_mapExistingEvents.set(n.GID, n),
                            k.m_editModel.Refresh(n);
                        }
                      }),
                      [
                        4,
                        this.GetLastUpdateTimeForEvent(
                          e,
                          this.m_editModel.GetGID(),
                          void 0,
                          void 0
                        ),
                      ]
                    );
                  case 5:
                    return (
                      (D = a.sent())
                        ? this.m_editModel.MarkUpdateSuccessful(
                            D.last_update_rtime,
                            D.last_updater_steamid
                          )
                        : this.m_editModel.MarkUpdateSuccessful(
                            Math.floor(Date.now() / 1e3),
                            g.a
                              .InitFromAccountID(C.i.accountid)
                              .ConvertTo64BitString()
                          ),
                      [2, I.data]
                    );
                  case 6:
                    return (
                      (w = a.sent()),
                      (M = Object(O.a)(w)),
                      console.error(
                        "InternalSaveAction failed: " + M.strErrorMsg,
                        M
                      ),
                      [2, { success: 2, msg: M.strErrorMsg }]
                    );
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.LoadClanEventLocalization = function (e, t, n) {
            return Object(a.b)(this, void 0, void 0, function () {
              var i,
                r,
                o = this;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return !(i = this.m_mapExistingEvents.get(t)) ||
                      (i.loadedAllLanguages && !n)
                      ? [3, 2]
                      : (r = i.AnnouncementGID) && "0" != r
                      ? [
                          4,
                          this.LoadClanEventLocalizationFromAnnouncementGID(
                            e,
                            r
                          ).then(function (e) {
                            e &&
                              Object(u.G)(function () {
                                i.loadedAllLanguages = !0;
                                for (var t = 0, n = e; t < n.length; t++) {
                                  var a = n[t];
                                  i.name.set(a.language, a.headline),
                                    i.description.set(a.language, a.body),
                                    i.timestamp_loc_updated.set(
                                      a.language,
                                      a.timestamp_updated
                                    );
                                }
                                o.m_editModel.Refresh(i);
                              });
                          }),
                        ]
                      : [2, this.m_editModel];
                  case 1:
                    a.sent(), (a.label = 2);
                  case 2:
                    return [2, this.m_editModel];
                }
              });
            });
          }),
          (t.prototype.FireTestEmail = function (e, t, n, i) {
            return Object(a.b)(this, void 0, void 0, function () {
              var o, l;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (o =
                        C.c.COMMUNITY_BASE_URL +
                        "eventemail/ajaxtestfirepartnereventemail"),
                      Object(y.a)(
                        e && e.BIsValid(),
                        "FireTestEventNotifiation clan steamd is invalid " +
                          (e ? e.ConvertTo64BitString() : "undefined")
                      ),
                      (l = new URLSearchParams()).append(
                        "sessionid",
                        C.c.SESSIONID
                      ),
                      l.append("clan_event_gid", t),
                      l.append("clan_account_id", "" + e.GetAccountID()),
                      l.append("language", Object(m.a)(n)),
                      [4, r.a.post(o, l, { cancelToken: i.token })]
                    );
                  case 1:
                    return [2, a.sent().data];
                }
              });
            });
          }),
          (t.prototype.FireTestEventNotifiation = function (e, t, n, i) {
            return (
              void 0 === i && (i = 0),
              Object(a.b)(this, void 0, void 0, function () {
                var o, l;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (o =
                          C.c.COMMUNITY_BASE_URL +
                          "eventemail/ajaxtestfireeventnotification"),
                        Object(y.a)(
                          e && e.BIsValid(),
                          "FireTestEventNotifiation clan steamd is invalid " +
                            (e ? e.ConvertTo64BitString() : "undefined")
                        ),
                        (l = new URLSearchParams()).append(
                          "sessionid",
                          C.c.SESSIONID
                        ),
                        l.append("clan_event_gid", t),
                        l.append("clan_account_id", "" + e.GetAccountID()),
                        l.append("notification_type", "" + i),
                        [4, r.a.post(o, l, { cancelToken: n.token })]
                      );
                    case 1:
                      return [2, a.sent().data];
                  }
                });
              })
            );
          }),
          (t.prototype.SetupPartnerEmailCampaign = function (e, t, n) {
            return Object(a.b)(this, void 0, void 0, function () {
              var i, o, l;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (i =
                        C.c.COMMUNITY_BASE_URL +
                        "eventemail/ajaxsetuppartneremail"),
                      (o = new URLSearchParams()).append(
                        "sessionid",
                        C.c.SESSIONID
                      ),
                      o.append("clanid", "" + e.GetAccountID()),
                      o.append("gidevent", t),
                      [
                        4,
                        r.a.post(i, o, {
                          withCredentials: !0,
                          cancelToken: n.token,
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (l = a.sent()),
                      [4, this.HandleEmailSetupResponse(e, t, l)]
                    );
                  case 2:
                    return [2, a.sent()];
                }
              });
            });
          }),
          (t.prototype.HandleEmailSetupResponse = function (e, t, n) {
            return Object(a.b)(this, void 0, void 0, function () {
              var i, r;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return n.data.force_feature_id && 1 == n.data.success
                      ? ((i = n.data.force_feature_id),
                        console.log(
                          "SetupPartnerEmailCampaign successful with feature id: " +
                            i
                        ),
                        [4, this.LoadEditorModel(e, t)])
                      : [3, 3];
                  case 1:
                    return (
                      (r = a.sent()),
                      new o.b(r).SetForceFeatureID(i),
                      [4, this.SaveModel(e)]
                    );
                  case 2:
                    return [2, a.sent()];
                  case 3:
                    return [2, n.data];
                }
              });
            });
          }),
          (t.prototype.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID = function (
            t,
            n,
            i,
            r,
            o,
            l
          ) {
            return (
              void 0 === l && (l = !1),
              Object(a.b)(this, void 0, void 0, function () {
                var l, s;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return t ? [3, 2] : [4, b.a.LoadOGGClanInfoForAppID(n)];
                    case 1:
                      (l = a.sent()), (t = l.clanSteamID), (a.label = 2);
                    case 2:
                      return [4, S.a.Get().LoadSingleAppEventPermissions(t)];
                    case 3:
                      return (
                        (s = a.sent()),
                        [
                          2,
                          e.prototype.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID.call(
                            this,
                            t,
                            n,
                            i,
                            r,
                            o,
                            s.can_edit
                          ),
                        ]
                      );
                  }
                });
              })
            );
          }),
          (t.prototype.RequestLocalizationOfEvent = function (e, t, n) {
            return Object(a.b)(this, void 0, void 0, function () {
              var i, o;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (i =
                        C.c.STORE_BASE_URL + "events/ajaxrequestlocalization"),
                      (o = new URLSearchParams()).append(
                        "authwgtoken",
                        C.i.authwgtoken
                      ),
                      o.append("clanid", "" + e.GetAccountID()),
                      o.append("gidevent", t),
                      o.append("primaryLang", "0"),
                      [4, r.a.post(i, o, { cancelToken: n.token })]
                    );
                  case 1:
                    return [2, a.sent().data];
                }
              });
            });
          }),
          (t.prototype.GetLastUpdateTimeForEvent = function (e, t, n, i) {
            return Object(a.b)(this, void 0, void 0, function () {
              var o, l, s, c;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    (o =
                      C.c.COMMUNITY_BASE_URL +
                      "gid/" +
                      e.ConvertTo64BitString() +
                      "/ajaxgetlastupdatetimeforpartnerevent"),
                      (l = { eventgid: t, announcementgid: n }),
                      (a.label = 1);
                  case 1:
                    return (
                      a.trys.push([1, 3, , 4]),
                      [
                        4,
                        r.a.get(o, {
                          params: l,
                          withCredentials: !0,
                          cancelToken: i ? i.token : void 0,
                        }),
                      ]
                    );
                  case 2:
                    return [2, a.sent().data];
                  case 3:
                    return (
                      (s = a.sent()),
                      (c = Object(O.a)(s)),
                      console.error(
                        "GetLastUpdateTimeForEvent: Failed to get last update time: " +
                          c.strErrorMsg,
                        c
                      ),
                      [3, 4]
                    );
                  case 4:
                    return [2, null];
                }
              });
            });
          }),
          (t.prototype.SetupInternalPartnerCommunication = function (
            e,
            t,
            n,
            i
          ) {
            return Object(a.b)(this, void 0, void 0, function () {
              var o, l, s;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (o =
                        C.c.STORE_BASE_URL +
                        "events_admin/ajaxupdatepartneremailtarget"),
                      (l = new URLSearchParams()).append(
                        "authwgtoken",
                        C.i.authwgtoken
                      ),
                      l.append("sessionid", C.c.SESSIONID),
                      l.append("clan_accountid", "" + t.GetAccountID()),
                      l.append("gid_event", n),
                      l.append("partner_capability", "" + i.capability),
                      l.append("app_right_flags", "" + i.app_rights),
                      l.append("publisher_right_flags", "" + i.pub_rights),
                      l.append("mark_urgent", "" + i.priority),
                      l.append("appids", i.appids.join(",")),
                      l.append("publisherids", i.partnerids.join(",")),
                      [
                        4,
                        r.a.post(o, l, {
                          withCredentials: !0,
                          cancelToken: e.token,
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (s = a.sent()),
                      [4, this.HandleEmailSetupResponse(t, n, s)]
                    );
                  case 2:
                    return [2, a.sent()];
                }
              });
            });
          }),
          (t.prototype.GetPartnerCapabilities = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t, n;
              return Object(a.e)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      (t =
                        C.c.STORE_BASE_URL +
                        "events_admin/ajaxgetcapabilities"),
                      (n = new URLSearchParams()).append(
                        "authwgtoken",
                        C.i.authwgtoken
                      ),
                      n.append("sessionid", C.c.SESSIONID),
                      [
                        4,
                        r.a.post(t, n, {
                          withCredentials: !0,
                          cancelToken: e.token,
                        }),
                      ]
                    );
                  case 1:
                    return [2, a.sent().data.capabilities];
                }
              });
            });
          }),
          (t.prototype.GetSteamAwardVoteDefinitionForApp = function (e) {
            var t = this;
            if (!this.m_bLoadedOrInflightSteamAwardVoteDefinitions) {
              this.m_bLoadedOrInflightSteamAwardVoteDefinitions = !0;
              var n = C.c.STORE_BASE_URL + "steamawards/ajaxgetpartnervotedefs",
                a = new URLSearchParams();
              a.append("authwgtoken", C.i.authwgtoken),
                a.append("sessionid", C.c.SESSIONID),
                a.append("appid", e.toString()),
                r.a.post(n, a, { withCredentials: !0 }).then(
                  function (e) {
                    var n, a, i;
                    1 ==
                      (null === (n = null == e ? void 0 : e.data) ||
                      void 0 === n
                        ? void 0
                        : n.success) &&
                      (null ===
                        (i =
                          null === (a = null == e ? void 0 : e.data) ||
                          void 0 === a
                            ? void 0
                            : a.votes) || void 0 === i
                        ? void 0
                        : i.length) > 0 &&
                      e.data.votes.forEach(function (e) {
                        t.m_mapSteamAwardVoteDefinitionsForApp.has(e.appid)
                          ? t.m_mapSteamAwardVoteDefinitionsForApp
                              .get(e.appid)
                              .push(e)
                          : t.m_mapSteamAwardVoteDefinitionsForApp.set(
                              e.appid,
                              [e]
                            );
                      });
                  },
                  function (e) {
                    var t = Object(O.a)(e);
                    console.error(
                      "LoadSteamAwardVoteDefinitionsForPartner: Request failed: " +
                        t.strErrorMsg,
                      t
                    );
                  }
                );
            }
            return this.m_mapSteamAwardVoteDefinitionsForApp.get(e);
          }),
          Object(a.c)([u.C], t.prototype, "m_curHoverCategoryType", void 0),
          Object(a.c)([u.C], t.prototype, "m_curHoverCategoryTags", void 0),
          Object(a.c)(
            [u.C],
            t.prototype,
            "m_mapSteamAwardVoteDefinitionsForApp",
            void 0
          ),
          Object(a.c)([u.k], t.prototype, "ResetModel", null),
          Object(a.c)([u.k], t.prototype, "LoadClanEventLocalization", null),
          t
        );
      })(v.a))();
      function M(e, t) {
        var n = p.a.useState(null),
          a = n[0],
          i = n[1];
        return (
          p.a.useEffect(
            function () {
              var n = g.a.InitFromClanID(e);
              w.LoadClanEventsForPartnerDashboard(n, t).then(function (e) {
                return i(
                  e.filter(function (e) {
                    return !e.BIsStagedEvent() && !e.BIsVisibleEvent();
                  })
                );
              });
            },
            [e, t]
          ),
          a
        );
      }
      window.g_PartnerEventEditStore = w;
    },
    vBFs: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n("mrSG"),
        i = n("TyAF"),
        r = n("q1tI"),
        o = n("mgoM"),
        l = n("kyHq"),
        s = n("fpVW"),
        c = n.n(s),
        u = n("exH9"),
        d = n("TLQK"),
        p = n("opsS"),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.GenerateLanguageOptions = function () {
              var e,
                t = [],
                n = this.props,
                a = n.fnFilterLanguage,
                i = n.fnLangHasData,
                s = n.fnLastUpdateRTime,
                p = n.fnIsLangSupported;
              this.props.bAllowUnsetOption &&
                t.push(
                  r.createElement(
                    "option",
                    { key: "langpicker_unset", value: -1 },
                    Object(d.f)("#EventEditor_NoneLanguage")
                  )
                );
              for (
                var m = new Array(),
                  _ = this.props.realms || [l.f.k_ESteamRealmGlobal],
                  g = 0,
                  h = d.b.GetLanguageListForRealms(_);
                g < h.length;
                g++
              ) {
                var f = h[g];
                if (!a || a(f)) {
                  var b = Object(o.a)(f),
                    v = Object(d.f)("#Language_" + b),
                    S = Boolean(p) && p(f);
                  m.push({ eLang: f, sLocName: v, bSupported: S });
                }
              }
              m.sort(function (e, t) {
                return e.bSupported != t.bSupported
                  ? e.bSupported
                    ? -1
                    : 1
                  : e.sLocName.localeCompare(t.sLocName);
              });
              for (var E = !1, y = 0, O = m; y < O.length; y++) {
                (f = O[y]).bSupported != E &&
                  (t.push(
                    r.createElement(
                      "option",
                      {
                        key: f.bSupported
                          ? "SupportedGroup"
                          : "UnsupportedGroup",
                        className: c.a.SupportedGroupLabel,
                        disabled: !0,
                      },
                      Object(d.f)(
                        f.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported"
                      )
                    )
                  ),
                  (E = f.bSupported));
                var T = i && i(f.eLang),
                  C = s && s(f.eLang),
                  j = f.sLocName;
                C &&
                  0 !== C &&
                  ((j += " "),
                  (j += Object(d.f)(
                    "#Language_Last_Update",
                    Object(d.o)(C) + " @ " + Object(d.m)(C)
                  ))),
                  t.push(
                    r.createElement(
                      "option",
                      {
                        key: "langpicker" + f.eLang + (T ? "_hasdata" : ""),
                        value: f.eLang,
                        className: Object(u.a)(
                          ((e = {}), (e[c.a.LangaugeWithContent] = T), e),
                          f.bSupported
                            ? c.a.SupportedLanguage
                            : c.a.UnsupportedLanguage
                        ),
                      },
                      j
                    )
                  );
              }
              return t;
            }),
            (t.prototype.OnLanguageChange = function (e) {
              var t = this.props,
                n = t.fnOnLanguageChanged,
                a = t.selectedLang,
                i = Number.parseInt(e.currentTarget.value);
              i != a && n && n(i);
            }),
            (t.prototype.render = function () {
              var e = this.props.selectedLang,
                t = this.GenerateLanguageOptions();
              return r.createElement(
                "select",
                { value: e, onChange: this.OnLanguageChange },
                t
              );
            }),
            Object(a.c)([p.a], t.prototype, "OnLanguageChange", null),
            (t = Object(a.c)([i.a], t))
          );
        })(r.Component);
    },
    wUcC: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var a = n("mrSG"),
        i = n("EA3E"),
        r = n("TyAF"),
        o = n("q1tI"),
        l = n("Cs6D"),
        s = n("Mgs7"),
        c = n("fpVW"),
        u = n("5E+2"),
        d = n("exH9"),
        p = n("TLQK"),
        m = n("opsS"),
        _ = n("as1E"),
        g = n("JiI5"),
        h = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { strCustomTitle: "", bSelectedCustomTitle: !1 }), t
            );
          }
          var n;
          return (
            Object(a.d)(t, e),
            (n = t),
            (t.prototype.componentDidMount = function () {
              this.setState({
                strCustomTitle: p.a.Get(
                  this.props.localized_label,
                  this.props.editLanguage
                ),
              });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var n = p.a.Get(
                this.props.localized_label,
                this.props.editLanguage
              );
              n != t.strCustomTitle &&
                e.editLanguage != this.props.editLanguage &&
                this.setState({ strCustomTitle: n });
            }),
            (t.prototype.GetTitleOptions = function (e) {
              var t = {
                  value: "#Sale_default_label",
                  label: Object(p.f)("#Sale_default_label"),
                },
                n = {
                  value: "#Sale_default_label_custom",
                  label: Object(p.f)("#Sale_default_label_custom"),
                };
              if (e) return [n];
              for (var i = [], r = 0, o = 1; r < 5; o++) {
                var l = "#Sale_default_label_" + o,
                  s = Object(p.f)(l);
                l === s ? r++ : ((r = 0), i.push({ value: l, label: s }));
              }
              return (
                i.sort(function (e, t) {
                  return e.label.localeCompare(t.label);
                }),
                Object(a.g)([t, n], i)
              );
            }),
            (t.IsValidTitleOption = function (e) {
              return (
                e &&
                "#Sale_default_label" !== e &&
                "#Sale_default_label_custom" !== e
              );
            }),
            (t.prototype.OnTitleChange = function (e) {
              var t = n.IsValidTitleOption(e.value) ? e.value : "";
              this.props.default_label !== t && this.props.onSetDefaultLabel(t),
                this.setState({
                  bSelectedCustomTitle:
                    "#Sale_default_label_custom" === e.value,
                });
            }),
            (t.prototype.OnCustomTitleChange = function (e) {
              this.setState({ strCustomTitle: e.target.value });
            }),
            (t.prototype.OnClearCustomTitle = function () {
              this.setState({ strCustomTitle: "" }),
                this.props.onClearCustomTitle();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = p.a.Get(
                  this.props.localized_label,
                  this.props.editLanguage
                ),
                n = Boolean(
                  p.a.GetWithFallback(
                    this.props.localized_label,
                    this.props.editLanguage
                  )
                ),
                r = this.GetTitleOptions(n),
                m = this.props.default_label
                  ? {
                      label: Object(p.f)(this.props.default_label),
                      value: this.props.default_label,
                    }
                  : r[0],
                h = this.state.bSelectedCustomTitle || n;
              h &&
                (m = r.find(function (e) {
                  return "#Sale_default_label_custom" === e.value;
                }));
              var f = {
                option: function (e) {
                  return Object(a.a)(Object(a.a)({}, e), { color: "#444444" });
                },
              };
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "div",
                  { className: g.DefaultTitlePicker },
                  o.createElement(
                    "div",
                    { className: _.TitleSelectionContainer },
                    o.createElement(l.a, {
                      styles: f,
                      isSearchable: !0,
                      isMulti: !1,
                      onChange: this.OnTitleChange,
                      value: m,
                      options: r,
                      defaultMenuIsOpen: !1,
                    })
                  )
                ),
                h &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("div", null, o.createElement(i.c, null)),
                    o.createElement(
                      "div",
                      { className: g.customTitleOptionsCtn },
                      o.createElement(
                        "div",
                        {
                          className: Object(d.a)(
                            c.FlexRowContainer,
                            g.CustomTitleCtn
                          ),
                        },
                        o.createElement(
                          "div",
                          { className: g.LanguageInput },
                          o.createElement(s.m, {
                            placeholder: Object(p.f)("#Broadcast_use_custom"),
                            onChange: this.OnCustomTitleChange,
                            value: this.state.strCustomTitle,
                          })
                        ),
                        o.createElement(
                          "div",
                          { className: g.AddTitleButton },
                          o.createElement(
                            u.a,
                            {
                              toolTipContent: Object(p.f)(
                                "#Broadcast_save_title_ttip"
                              ),
                            },
                            o.createElement(
                              s.r,
                              {
                                onClick: function () {
                                  return e.props.onSetCustomTitle(
                                    e.state.strCustomTitle
                                  );
                                },
                                disabled: t == this.state.strCustomTitle,
                              },
                              Object(p.f)("#Broadcast_save_title")
                            )
                          )
                        ),
                        o.createElement(
                          "div",
                          { className: g.RemoveTitleButton },
                          o.createElement(
                            u.a,
                            {
                              toolTipContent: Object(p.f)(
                                "#Broadcast_remove_title_ttip"
                              ),
                            },
                            o.createElement(
                              s.r,
                              {
                                onClick: this.OnClearCustomTitle,
                                disabled: !t,
                              },
                              Object(p.f)("#Broadcast_remove_title")
                            )
                          )
                        )
                      )
                    )
                  )
              );
            }),
            Object(a.c)([m.a], t.prototype, "OnTitleChange", null),
            Object(a.c)([m.a], t.prototype, "OnCustomTitleChange", null),
            Object(a.c)([m.a], t.prototype, "OnClearCustomTitle", null),
            (t = n = Object(a.c)([r.a], t))
          );
        })(o.Component);
    },
    wst7: function (e, t, n) {
      e.exports = {
        DisplayAdminPanel_Spacer:
          "partnereventcontrolbars_DisplayAdminPanel_Spacer_3TzVF",
        EventEditorTopBarContainer:
          "partnereventcontrolbars_EventEditorTopBarContainer_1Afx7",
        EventPublished: "partnereventcontrolbars_EventPublished_3zTXC",
        EventUnPublished: "partnereventcontrolbars_EventUnPublished_pjxnm",
      };
    },
    yKSN: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return O;
        });
      var a = n("mrSG"),
        i = n("NpuA"),
        r = n.n(i),
        o = n("q1tI"),
        l = n.n(o),
        s = n("mgoM"),
        c = n("kyHq"),
        u = n("U+Q5"),
        d = n("Mgs7"),
        p = n("fpVW"),
        m = n("Jqb/"),
        _ = n("ka0M"),
        g = n("0OaU"),
        h = n("exH9"),
        f = n("TLQK"),
        b = n("P2lf"),
        v = n("OS6B"),
        S = n("5E+2"),
        E = n("KmXr"),
        y = function (e) {
          var t = function (t, n) {
            t.preventDefault();
            var a = e.fnGetLocData,
              i = e.closeModal,
              r = e.strFileNamePrefix,
              o = e.lang,
              l = a(),
              c = new b.a(),
              u = r ? r + "_localization" : "localization";
            switch (n) {
              case "csv_row":
                c.WriteLocalizationData_CSV_LanguageRows(l, u + ".csv");
                break;
              case "csv_column":
                c.WriteLocalizationData_CSV_LanguageColumns(l, u + ".csv");
                break;
              case "csv_token":
                c.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  l,
                  u + ".csv"
                );
                break;
              case "xml":
                c.WriteLocalizationData_XML_SingleLanguage(
                  l,
                  o,
                  u + "_" + Object(s.c)(Object(s.a)(o)) + ".xml"
                );
            }
            i && i();
          };
          return l.a.createElement(
            l.a.Fragment,
            null,
            Boolean(e.bShowCSV) &&
              l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(
                  d.r,
                  {
                    onClick: function (e) {
                      return t(e, "csv_row");
                    },
                  },
                  Object(f.f)("#Localization_Export_Btn_RowLanguages")
                ),
                l.a.createElement(
                  d.r,
                  {
                    onClick: function (e) {
                      return t(e, "csv_column");
                    },
                  },
                  Object(f.f)("#Localization_Export_Btn_ColumnLanguages")
                ),
                l.a.createElement(
                  d.r,
                  {
                    onClick: function (e) {
                      return t(e, "csv_token");
                    },
                  },
                  Object(f.f)("#Localization_Export_Btn_TokenLanguages")
                )
              ),
            Boolean(e.bShowXML) &&
              l.a.createElement(
                d.r,
                {
                  onClick: function (e) {
                    return t(e, "xml");
                  },
                },
                Object(f.f)("#Localization_Export_Btn_XML")
              )
          );
        },
        O = function (e) {
          var t = Object(o.useState)(!1),
            n = t[0],
            i = t[1],
            d = function (e, t) {
              i(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e
                ),
                Object(_.d)(
                  l.a.createElement(
                    m.f,
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "p",
                        null,
                        Object(f.f)("#Localization_Error_Input")
                      ),
                      l.a.createElement("p", null, e.message)
                    )
                  ),
                  window
                );
            },
            y = function (e) {
              i(!1);
              var t = "";
              e.forEach(function (e) {
                t.length > 0 && (t += ", "),
                  (t += Object(f.f)("#Language_" + Object(s.a)(e)));
              }),
                Object(_.d)(
                  l.a.createElement(
                    m.d,
                    {
                      strTitle: Object(f.f)("#EventDisplay_Share_Success"),
                      bAlertDialog: !0,
                    },
                    l.a.createElement(
                      "div",
                      null,
                      0 == t.length
                        ? Object(f.f)(
                            "#Localization_Success_ImportComplete_NoChange"
                          )
                        : Object(f.f)("#Localization_Success_ImportComplete", t)
                    )
                  ),
                  window
                );
            },
            O = function (t) {
              return Object(a.b)(void 0, void 0, void 0, function () {
                var n, o, l, s, p, m, _, g;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!((n = t.target.files) && n.length > 0))
                        return [3, 10];
                      i(!0),
                        (o = new Array()),
                        (l = new b.a()),
                        (s = 0),
                        (a.label = 1);
                    case 1:
                      return s < n.length
                        ? n[s]
                          ? n[s].name.toLocaleLowerCase().endsWith(".csv")
                            ? (r.a.parse(n[0], {
                                header: !0,
                                complete: function (t) {
                                  var n = new b.a().DetectAndFormatCSV(t);
                                  if (n) {
                                    var a = f.b.GetLanguageListForRealms([
                                        c.f.k_ESteamRealmGlobal,
                                      ]),
                                      i = e.fnOnImportLocData(n, a);
                                    y(i);
                                  } else
                                    d({
                                      code: "",
                                      message: "",
                                      row: 0,
                                      type: "filenameerror",
                                    });
                                },
                                error: d,
                              }),
                              [2])
                            : [3, 2]
                          : [3, 8]
                        : [3, 9];
                    case 2:
                      if (!n[s].name.toLocaleLowerCase().endsWith(".xml"))
                        return [3, 7];
                      if (
                        null ==
                          (p = u.d.DetectLanguageFromFilename(n[s].name)) ||
                        -1 == p
                      )
                        return (
                          d({
                            code: "",
                            message: Object(f.f)(
                              "#Localization_Error_FileLangauage",
                              n[s].name
                            ),
                            row: 0,
                            type: "filenameerror",
                          }),
                          [2]
                        );
                      a.label = 3;
                    case 3:
                      return (
                        a.trys.push([3, 5, , 6]),
                        [4, l.ReadLocalizationData_XML_SingleLanguage(n[s], p)]
                      );
                    case 4:
                      return (
                        (m = a.sent()),
                        e.fnOnImportLocData(m, [p]).map(function (e) {
                          -1 == o.indexOf(e) && o.push(e);
                        }),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (_ = a.sent()),
                        (g = Object(v.a)(_)),
                        d({
                          code: "",
                          message: Object(f.f)(
                            "#Localization_Error_XMLParseError",
                            g.strErrorMsg
                          ),
                          row: 0,
                          type: "parseerror",
                        }),
                        [2]
                      );
                    case 6:
                      return [3, 8];
                    case 7:
                      d({
                        code: "",
                        message: Object(f.f)(
                          "#Localization_Error_FileExtention",
                          n[s].name
                        ),
                        row: 0,
                        type: "filenameerror",
                      }),
                        (a.label = 8);
                    case 8:
                      return ++s, [3, 1];
                    case 9:
                      y(o), (a.label = 10);
                    case 10:
                      return [2];
                  }
                });
              });
            };
          return l.a.createElement(
            S.a,
            {
              className: Object(h.a)(
                e.className ? e.className : p.EditPreviewButton
              ),
              toolTipContent: e.strToolTip,
            },
            l.a.createElement(
              "label",
              { className: E.ImportButton, htmlFor: "importlocalization" },
              n && l.a.createElement(g.a, { size: "small" }),
              l.a.createElement(
                "div",
                { className: E.Label },
                Object(f.f)(
                  e.strLabel ? e.strLabel : "#Localization_Import_Btn"
                )
              ),
              l.a.createElement("input", {
                id: "importlocalization",
                className: E.ImportButton,
                style: { display: "none" },
                type: "file",
                onSubmit: O,
                onChange: O,
                multiple: !0,
              })
            )
          );
        };
    },
  },
]);
