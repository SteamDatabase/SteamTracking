var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateAppList`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            private: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateApps_ToggleAppPrivacy_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            private_apps: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateApps_GetPrivateAppList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.private_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            private_apps: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivateApps.ToggleAppPrivacy#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ToggleAppPrivacy = _;
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivateApps.GetPrivateAppList#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetPrivateAppList = _;
})((_ ||= {}));
var _;
(function (_) {
  _.NotifyPrivateAppListChangedHandler = {
    name: `AccountPrivateAppsClient.NotifyPrivateAppListChanged#1`,
    request: _,
  };
})((_ ||= {}));
function _() {
  return `PrivateApps_` + _.accountid;
}
function _() {
  return _.IN_STEAMUI;
}
async function _(_, _) {
  try {
    let _ = _();
    await _.StoreObject(_, _);
  } catch (_) {
    let _ = Error(
      `WritePrivateAppsToLocalCache failed with result ${_?.result}, ${_?.message}`,
    );
    _().ReportError(_, {
      bIncludeMessageInIdentifier: !0,
    }),
      console.warn(_);
  }
}
var _ = [`AccountPrivateApps`];
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      return _(_, _, _);
    },
    onSuccess: (_, _) => {
      let { rgAppIDs: _, bPrivate: _ } = _;
      _(_, _, _, _ ? _ : null);
    },
  });
}
async function _(_, _, _) {
  let _ = _.Init(_);
  _.Body().set_appids(_.slice()), _.Body().set_private(_);
  let _ = await _.ToggleAppPrivacy(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
}
function _(_, _, _, _) {
  _.setQueryData(_, (_) => {
    if (!_) return;
    let _ = new Set(_);
    return (
      _.forEach((_) => {
        _ ? _.add(_) : _.delete(_);
      }),
      _ && _(_, Array.from(_.values())),
      _
    );
  });
}
var _ = _(_(), 1),
  _ = {};
(_.arabic = () => _(() => import(`./BFTU3fDA.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./CQD1xcRC.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./ByzIoNPf.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./oUPSOpzs.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./3iNOwzDa.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./BDxZmNdN.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./BZ8CDnMy.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./BChOvv9J.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./4B7sckMx.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./BWOsjSys.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./kfFL3tYE.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./D4lQxeYR.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./C5Kqy318.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./B5wbJmwz.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./DPic0mIt.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./CsodqUk5.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./CQYjg5oy.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./Fn4WI5UM.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./Dq-AQcbR.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./N4_EIet2.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./C96ozbOR.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./D72WscM7.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./DrnGQmSr.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./BVlau_64.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./hm9s6E8S.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./CU_hXALc.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./D_H7ldEL.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./BFsOvyOX.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./BE236e1l.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Dg62lGCp.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./CWUgZxSg.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./MIPeN6K2.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _() {
  return _(_);
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    { storeBrowseContext: _, cacheStoreItemData: _ } = _();
  return _({
    queryKey: _(_, _),
    queryFn: async () => _(_, _, _, _, _, _),
    staleTime: 1 / 0,
    enabled: _.logged_in || !_(_),
  });
}
async function _(_, _, _, _, _, _) {
  let _ = _.Init(_);
  _(_) || _(_)
    ? (_.Body().set_gidshoppingcart(_.gid),
      _ && _.Body().set_gift_info(_.fromObject(_)))
    : _(_) && _.Body().set_gidreplayoftransid(_.gid),
    _(_, _),
    _ && _(_, _);
  let _ = await _.ValidateCart(_, _);
  if (
    (_.BSuccess() ||
      console.warn(`Failed to validate shopping cart: ${_.GetEResult()}`),
    _ && _)
  )
    for (let _ of _.Body().cart_items()) _(_.store_item(), _);
  return _.Body().toObject();
}
var _ = _(_(), 1);
async function _(_, _, _) {
  if (_(_)) {
    let _ = _.Init(_);
    _.Body().set_line_item_id(_);
    let _ = await _.RemoveItemFromCart(_, _);
    return _(), _.Body().toObject();
  } else {
    let _ = _.Init(_);
    _.Body().set_gidlineitems([_]), _.Body().set_gidshoppingcart(_.gid);
    let _ = await _.RemoveLineItems(_, _);
    return _(), _.Body().toObject();
  }
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => await _(_, _, _),
    onSuccess: (_) => {
      `cart` in _ ? _(_, _, _.cart) : _(_, _);
    },
  });
}
async function _(_, _, _, _, _, _) {
  if (_(_)) {
    let _ = _.Init(_);
    _.Body().set_line_item_id(_),
      _.Body().set_user_country(_.country_code),
      _ && _.Body().set_gift_info(_.fromObject(_)),
      _ && _.Body().set_flags(_.fromObject(_)),
      _ && _.Body().set_apply_gidcoupon(_);
    let _ = await _.ModifyLineItem(_, _);
    return (
      _.BSuccess() ||
        console.warn(`Failed to update gift info: ${_.GetEResult()}`),
      [_.GetEResult(), _.Body().toObject()]
    );
  } else {
    let _ = _.Init(_);
    _.Body().set_gidlineitem(_),
      _.Body().set_gidshoppingcart(_.gid),
      _
        ? _.Body().set_gift_info(_.fromObject(_))
        : _?.is_gift &&
          _.Body().set_gift_info(
            _.fromObject({
              accountid_giftee: 0,
              email_giftee: ``,
            }),
          );
    let _ = await _.ModifyLineItem(_, _);
    return (
      _.BSuccess() ||
        console.warn(
          `Failed to update gift info in anonymous cart: ${_.GetEResult()}`,
        ),
      _.Body().toObject()
    );
  }
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_);
  return _({
    mutationFn: (_) =>
      _(_, _, _.lineItemID, _.lineItemFlags, _.giftInfo, _.gidCoupon),
    onMutate: async (_) => {
      await _.cancelQueries({
        queryKey: _,
      });
      let _ = _.getQueryData(_);
      return (
        _.setQueryData(_, (_) => ({
          ...(_ ?? {}),
          line_items:
            _?.line_items?.map((_) =>
              _.line_item_id === _.lineItemID
                ? {
                    ..._,
                    flags: _.lineItemFlags || _.flags,
                    gift_info: _.giftInfo || _.gift_info,
                  }
                : _,
            ) ?? [],
        })),
        {
          previousCart: _,
        }
      );
    },
    onSuccess: (_) => {
      `cart` in _ ? _(_, _, _.cart) : _(_, _);
    },
    onError: (_, _, _) => {
      _?.previousCart && _.setQueryData(_, _.previousCart);
    },
  });
}
var _ = `I3wNTGX8W84-`,
  _ = `i-xXuvHLioU-`,
  _ = `_7RJqaqzA6VI-`,
  _ = `km-ZqAmzkm8-`,
  _ = `QQ50n6yPgT4-`,
  _ = `BFDdk5e7x8k-`,
  _ = `dstuYF4eZu4-`,
  _ = `bKkQiLkI-vk-`,
  _ = `T7ZPZdCVy-E-`,
  _ = `B2ns9nZalz8-`,
  _ = `F1Hc-V5ZZNo-`,
  _ = `_7qi-HYx8d8w-`,
  _ = `mHtWWyPByns-`,
  _ = `fDgifICDL4M-`,
  _ = `P8g8lT95CGk-`,
  _ = `vPLNUdbJs30-`,
  _ = `YwCPuM47bBA-`,
  _ = `GnZ4gWzvUGs-`,
  _ = `zLoWY6fxr7Y-`,
  _ = `oQEHUcBaGvk-`,
  _ = `_3IHMp-zjjxc-`,
  _ = `YWpHb5CogBI-`,
  _ = `VlO2XVO6mXQ-`,
  _ = _();
function _(_) {
  let { scrollable: _ = !1, children: _ } = _;
  return (0, _.jsx)(_ ? _ : _, {
    className: (0, _.default)(_, _ && `cTc9e3d66Ng-`),
    focusableIfEmpty: !0,
    children: _,
  });
}
function _(_) {
  let { text: _, children: _, className: _, noWrap: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: (0, _.default)(_, _ && `m-Re58fA9to-`, _ && `_2lltTJ6xmjc-`, _),
    children: _,
  });
}
function _(_) {
  let { placeholder: _, className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `_2UwBJhHjd8s-`, _),
    children: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    placeholder: !0,
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
      msDelayAppear: 250,
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    text: !0,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  if (_.coupon_applied) return _.coupon_applied.discount_pct;
  let _ = parseInt(_.original_price.amount_in_cents),
    _ = parseInt(_.subtotal.amount_in_cents);
  return Math.min(99, Math.floor(((_ - _) / _) * 100 + 0.5));
}
function _(_) {
  let { lineItem: _ } = _,
    _ = [],
    _ = !!_.gift_info?.accountid_giftee;
  return (
    _.errors?.duplicate_appids_in_cart?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 1,
            notice_text: _.Localize(`#Cart_Error_DuplicateApps_LineItem`),
            appids: _.errors.duplicate_appids_in_cart,
          },
          `duplicate_appids`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `owned_apps`,
      ),
    ),
    _.errors?.unavailable_in_country &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 8,
            notice_text: _.Localize(`#Cart_Error_UnavailableCountry_LineItem`),
          },
          `unavailable_in_country`,
        ),
      ),
    _.errors?.adult_content_restricted &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 17,
            notice_text: _.Localize(
              `#Cart_Error_AdultContentRestricted_LineItem`,
            ),
          },
          `adult_content_restricted`,
        ),
      ),
    _.errors?.commercial_license_restricted &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 18,
            notice_text: _.Localize(
              `#Cart_Error_CommercialLicenseRestricted_LineItem`,
            ),
          },
          `commercial_license_restricted`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `coupon_notices`,
      ),
    ),
    _.errors?.too_many_in_cart &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 14,
            notice_text: _.Localize(`#Cart_Error_TooManyInCart`),
          },
          `too_many_in_cart`,
        ),
      ),
    _.errors?.missing_must_own_appids?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 16,
            notice_text: _
              ? _.Localize(`#Cart_Error_MissingMustOwnApps_GiftLineItem`)
              : _.Localize(`#Cart_Error_MissingMustOwnApps_LineItem`),
            appids: _.errors.missing_must_own_appids,
          },
          `missing_must_own_appids`,
        ),
      ),
    _.warnings?.appids_in_mastersub?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 4,
            notice_text: _.Localize(`#Cart_Error_MasterSubscription_LineItem`),
            appids: _.warnings.appids_in_mastersub.flatMap((_) =>
              _.cart_appid ? [_.cart_appid] : [],
            ),
          },
          `appids_in_mastersub`,
        ),
      ),
    _.warnings?.owned_appids?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 3,
            notice_text: _.Localize(`#Cart_Warning_AlreadyOwned_LineItem`),
            appids: _.warnings.owned_appids,
          },
          `owned_appids`,
        ),
      ),
    _.warnings?.owned_appids_extra_copy?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 9,
            notice_text: _.Localize(`#Cart_Warning_ExtraCopies_LineItem`),
            appids: _.warnings.owned_appids_extra_copy,
          },
          `owned_appids_extra_copy`,
        ),
      ),
    _.warnings?.price_has_changed &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 10,
            notice_text: _.Localize(`#Cart_Warning_PriceChange_LineItem`),
          },
          `price_has_changed`,
        ),
      ),
    _.warnings?.non_refundable &&
      _.push(
        (0, _.jsx)(
          _,
          {
            purchase_state: 5,
            notice_text: _.Localize(`#Cart_Warning_NoRefund_LineItem`),
          },
          `non_refundable`,
        ),
      ),
    _.push(
      (0, _.jsx)(
        _,
        {
          lineItem: _,
        },
        `available_cheaper`,
      ),
    ),
    _ &&
      _.push(
        (0, _.jsx)(
          _,
          {
            nGifteeAccountID: _.gift_info.accountid_giftee,
          },
          `non_friend_gift`,
        ),
      ),
    _
  );
}
function _(_) {
  let { notice_text: _, appids: _ } = _;
  return (0, _.jsxs)(_, {
    children: [
      _,
      ` `,
      (0, _.jsx)(_, {
        rgAppIDs: _ ?? [],
      }),
    ],
  });
}
function _(_) {
  let { rgAppIDs: _ } = _;
  return !_ || _.length == 0
    ? null
    : _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            appid: _,
            last: _ >= _.length - 1,
          },
          `${_}_${_}`,
        ),
      );
}
function _(_) {
  let { appid: _, last: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            storeItem: _,
            noImpressionTracking: !0,
            children: _.name,
          }),
          !_ &&
            (0, _.jsx)(_.Fragment, {
              children: `, `,
            }),
        ],
      })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    { data: _ } = _(_.item_id),
    { data: _ } = _(_.item_id),
    _ = !_.gift_info?.accountid_giftee && !!_ && !!_ && !_(_, _),
    _;
  _ &&
    (_ = _.packageid
      ? {
          packageid: _.packageid,
        }
      : {
          bundleid: _.bundleid,
        });
  let { data: _ } = _(_);
  return _
    ? (0, _.jsx)(_, {
        children: _.LocalizeReact(
          `#Cart_Warning_AvailableAtALowerPrice`,
          (0, _.jsx)(_, {
            storeItem: _,
            noImpressionTracking: !0,
            children: _.purchase_option_name,
          }),
        ),
      })
    : null;
}
function _(_) {
  let { nGifteeAccountID: _ } = _,
    _ = _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    { data: _ } = _();
  return _.useMemo(() => !_ || _.includes(_), [_, _]) || !_.logged_in
    ? null
    : (0, _.jsx)(_, {
        children: _.Localize(`#Cart_Warning_GiftToNonFriend`),
      });
}
function _(_) {
  let { lineItem: _ } = _;
  if (!_.errors?.owned_appids?.length) return null;
  let _ = !!_.gift_info?.accountid_giftee;
  if (_.errors?.has_existing_billing_agreement)
    return (0, _.jsx)(_, {
      purchase_state: 15,
      notice_text: _.Localize(`#Cart_Error_ExistingBillingAgreement`),
    });
  {
    let _ = (_.store_item?.included_appids?.length ?? 0) > 1,
      _ = _.Localize(
        _
          ? `#Cart_Error_AlreadyOwned_GiftLineItem_Game`
          : `#Cart_Error_AlreadyOwned_LineItem_Game`,
      );
    return (
      _ &&
        (_ = _.Localize(
          _
            ? `#Cart_Error_AlreadyOwned_GiftLineItem`
            : `#Cart_Error_AlreadyOwned_LineItem`,
        )),
      (0, _.jsx)(_, {
        purchase_state: 2,
        notice_text: _,
        appids: _ ? _.errors.owned_appids : void 0,
      })
    );
  }
}
function _(_) {
  let { lineItem: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.errors?.coupon_exclusive_promo &&
        (0, _.jsx)(_, {
          purchase_state: 13,
          notice_text: _.Localize(`#Cart_Error_CouponIsExclusivePromo`),
        }),
      _.errors?.invalid_coupon &&
        (0, _.jsx)(_, {
          purchase_state: 11,
          notice_text: _.Localize(`#Cart_Error_CouponIsInvalid`),
        }),
      _.errors?.invalid_coupon_for_item &&
        (0, _.jsx)(_, {
          purchase_state: 12,
          notice_text: _.Localize(`#Cart_Error_CouponIsInvalidForItem`),
        }),
    ],
  });
}
function _(_) {
  let { lineItems: _, cartValidation: _, scrollable: _ = !1 } = _;
  if (!_.length)
    return (0, _.jsx)(`div`, {
      children: _.Localize(`#Cart_Empty`),
    });
  let _ = _?.cart_items
    ? _.cart_items.reduce((_, _) => ((_[_.line_item_id] = _), _), {})
    : {};
  return (0, _.jsx)(_, {
    scrollable: _,
    children:
      _ &&
      _.map((_, _) =>
        _
          ? (0, _.jsx)(
              _,
              {
                fallback: (_) =>
                  (0, _.jsx)(_, {
                    item: _,
                    error: _,
                  }),
                children: (0, _.jsx)(
                  _,
                  {
                    item: _,
                    validatedItem: _[_.line_item_id],
                  },
                  _.line_item_id,
                ),
              },
              _?.line_item_id || _,
            )
          : (0, _.jsx)(_, {}, _),
      ),
  });
}
function _(_) {
  let { item: _, validatedItem: _ } = _,
    _ = _(_);
  if (!_) throw `Unknown line item type (${_.type})`;
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _ ? _(_) : _;
  return (
    _(_),
    _(_),
    _ && (!_.visible || _ === null)
      ? (0, _.jsx)(_, {
          lineItemID: _.line_item_id,
          validatedItem: _,
          storeItem: _,
        })
      : !_ || !_ || !_ || !_
        ? (0, _.jsx)(_, {})
        : (0, _.jsx)(_, {
            lineItem: _,
            validatedItem: _,
            storeItem: _,
            displayItem: _,
            purchaseOption: _,
          })
  );
}
function _(_) {
  let { item: _, error: _ } = _,
    _ = _(_.line_item_id);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_LineItem_ErrorBoundary`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.message,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        onActivate: () => _.mutate(),
        className: _,
        children: _.Localize(`#Cart_Remove`),
      }),
    ],
  });
}
function _(_) {
  let _ = _.type;
  switch (_) {
    case 1:
      return {
        packageid: _.packageid,
      };
    case 2:
      return {
        bundleid: _.bundleid,
      };
    case 0:
      return;
    default:
      _(_, `Unhandled type: ${_}`);
  }
}
function _(_) {
  let {
      storeItem: _,
      displayItem: _,
      lineItem: _,
      purchaseOption: _,
      validatedItem: _,
    } = _,
    _ = _.line_item_id,
    _ = _(_),
    _ = _.isPending || _.isSuccess,
    _ = _.flags?.is_gift ? `gift` : `myself`;
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [
        _ && (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: (0, _.default)(_, _ && `_6nd0ILcGxcg-`),
          children: [
            (0, _.jsx)(`div`, {
              className: (0, _.default)(void 0, _),
              children: (0, _.jsx)(_, {
                storeItem: _,
                feature: `cart-items`,
                noImpressionTracking: !0,
                children: (0, _.jsx)(_, {
                  storeItem: _,
                }),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: _.name,
                  }),
                }),
                _?.is_coming_soon &&
                  (0, _.jsx)(_, {
                    storeItem: _,
                  }),
                (0, _.jsx)(_, {
                  validatedItem: _,
                }),
                (0, _.jsx)(_, {
                  storeItem: _,
                }),
                (0, _.jsxs)(_, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: (0, _.default)(_, _),
                      children: (0, _.jsx)(_, {
                        _: _(_),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      purchaseOption: _,
                      validatedItem: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  lineItem: _,
                  storeItem: _,
                  purchaseOption: _,
                  validatedItem: _,
                  initialPurchaseOption: _,
                  fnRemoveLineItem: _.mutate,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { lineItemID: _, validatedItem: _, storeItem: _ } = _,
    _ = _(_),
    _ = _.isPending;
  return (0, _.jsxs)(_, {
    placeholder: !0,
    children: [
      _ && (0, _.jsx)(_, {}),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _ && `_6nd0ILcGxcg-`),
        children: [
          (0, _.jsx)(`div`, {
            className: (0, _.default)(void 0, _),
            children: (0, _.jsx)(_, {
              storeItem: _,
              noImpressionTracking: !0,
              children: (0, _.jsx)(_, {
                storeItem: _,
              }),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _?.name,
                }),
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  validatedItem: _,
                }),
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(_, {
                  onActivate: () => _.mutate(),
                  className: _,
                  children: _.Localize(`#Cart_Remove`),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { storeItem: _ } = _,
    { data: _ } = _(_(_)),
    _ = `${_.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
  return (
    _?.header
      ? (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.header))
      : _?.small_capsule &&
        (_ =
          _.STORE_ITEM_BASE_URL +
          _.asset_url_format.replace("${FILENAME}", _.small_capsule)),
    (0, _.jsx)(`img`, {
      alt: _.name,
      className: _,
      src: _,
    })
  );
}
function _(_) {
  let { validatedItem: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        lineItem: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { storeItem: _ } = _,
    { data: _ } = _(_(_)),
    _ = _(_);
  if (!_) return null;
  let _ = _.Localize(`#Cart_ComingSoon`, _);
  return (
    [`text_tba`, `text_comingsoon`].includes(_.coming_soon_display) && (_ = _),
    (0, _.jsx)(_, {
      children: _,
    })
  );
}
function _(_) {
  return null;
}
function _(_) {
  let { purchaseOption: _, validatedItem: _ } = _,
    _ = _?.formatted_original_price,
    _ = _?.formatted_final_price,
    _ = _?.discount_pct;
  return (
    _ &&
      _.original_price &&
      _.subtotal &&
      ((_ = _.original_price.formatted_amount),
      (_ = _.subtotal.formatted_amount),
      (_ = _(_))),
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        transparentBackground: !0,
        purchaseOption: {
          ..._,
          formatted_original_price: _,
          formatted_final_price: _,
          discount_pct: _,
        },
      }),
    })
  );
}
function _(_) {
  let {
      lineItem: _,
      storeItem: _,
      purchaseOption: _,
      validatedItem: _,
      initialPurchaseOption: _,
      fnRemoveLineItem: _,
    } = _,
    _ = !_?.restrict_add_additional_to_cart,
    _ = _(_.packageid, _.bundleid, _.user_can_purchase_as_gift);
  return (0, _.jsxs)(_, {
    className: _,
    noWrap: !0,
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: (0, _.jsx)(_, {
          lineItem: _,
          storeItem: _,
          initialValue: _,
          purchaseOption: _,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  onActivate: () => !_.isPending && _.mutate(),
                  className: `_8IaR06zcRE4-`,
                  title: _.Localize(`#Cart_LineItem_Add_Tooltip`),
                  children: _.Localize(`#Cart_Add`),
                }),
                `|`,
              ],
            }),
          (0, _.jsx)(_, {
            onActivate: () => _(),
            className: _,
            children: _.Localize(`#Cart_Remove`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return _.user_can_purchase_as_gift;
}
function _(_) {
  return !_.is_commercial_license && !_.requires_shipping;
}
function _(_) {
  let { lineItem: _, storeItem: _, initialValue: _, purchaseOption: _ } = _,
    [_, _] = _.useState(_),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = !_(_) || _,
    _ = !_(_),
    { data: _ } = _(_.gift_info?.accountid_giftee),
    _ = [
      {
        data: `myself`,
        label: _.Localize(`#Cart_LineItemOptions_Myself`),
      },
      !_ && {
        data: `private`,
        label: _.Localize(`#Cart_LineItemOptions_Privately`),
      },
    ].filter((_) => !!_);
  return (
    _ ||
      (_.gift_info?.accountid_giftee && _?.public_data?.persona_name
        ? _.push({
            data: `gift`,
            label: _.Localize(
              `#Cart_LineItemOptions_GiftForPersona`,
              _?.public_data?.persona_name,
            ),
          })
        : _.push({
            data: `gift`,
            label: _.Localize(`#Cart_LineItemOptions_Gift`),
          })),
    _.length === 1
      ? null
      : (0, _.jsx)(_, {
          onSelectionChange: (_) => {
            if (_ === _.data) return;
            let _ = (_) =>
                _.mutate({
                  rgAppIDs:
                    (_.item_type === 0 ? [_.appid] : _.included_appids) ?? [],
                  bPrivate: _,
                }),
              _ = (_) =>
                _.mutate({
                  lineItemID: _.line_item_id,
                  lineItemFlags: {
                    ..._.flags,
                    is_gift: _,
                  },
                  giftInfo: _ ? _.gift_info : void 0,
                });
            _ === `private` ? _(!1) : _ === `gift` && _(!1),
              _.data === `private` ? _(!0) : _.data === `gift` && _(!0),
              _(_.data);
          },
          selectedValue: _.find((_) => _.data === _),
          options: _,
          getOptionLabel: (_) => _.label,
          size: `1`,
        })
  );
}
var _ = `AhNg9jT4hrc-`,
  _ = `UDR84ALyLZI-`;
function _(_) {
  let { closeCart: _, lineItemIDs: _ } = _,
    _ = _(),
    { data: _ } = _(),
    { data: _ } = _(),
    _ = _(_);
  return (
    _.useEffect(() => {
      _ && _?.length == 0 && _();
    }, [_, _]),
    !_ || !_
      ? null
      : (0, _.jsx)(_, {
          onClose: _,
          navID: `CartModal`,
          strTitle: _.Localize(`#Cart_AddedToYourCart`),
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                lineItems: _,
                cartValidation: _,
                scrollable: !0,
              }),
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize(`#Cart_ContinueShopping`),
                  }),
                  (0, _.jsx)(_, {
                    autoFocus: !0,
                    href: `${_.STORE_BASE_URL}cart/`,
                    children: _.Localize(
                      `#Cart_ViewMyCart`,
                      _.line_items.length,
                    ),
                  }),
                ],
              }),
            ],
          }),
        })
  );
}
export { _ as default };
