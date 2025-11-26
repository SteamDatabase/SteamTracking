import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = "/PPCEHXCA.jpg";
var _ = "/QLK737BA.jpg";
var _ = "/UA7RT5CA.jpg";
function _(_, _) {
  return {
    queryKey: ["ProfileItemsEquipped", _],
    async queryFn() {
      let _ = await _.GetProfileItemsEquipped(_, {
        steamid: _,
        language: _.LANGUAGE,
      });
      if (_.GetEResult() != 1)
        throw (
          (_.DEBUG_LogToConsole(),
          new _(_.GetEResult(), "Failed to load equipped profile items"))
        );
      return _.Body().toObject();
    },
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
var _ = _(_()),
  _ = _(_());
function _(_) {
  let { rgSources: _, onIncrementalError: _, alt: _, ..._ } = _,
    [_, _] = (0, _.useState)(0),
    _ = _[_];
  return (0, _.jsx)("img", {
    onError: (_) => {
      _((_) => _ + 1), _?.(_, _, _);
    },
    alt: _,
    ..._,
    src: _,
  });
}
var _ = _(_()),
  _ = _(_());
var _ = "t1-DQ4KhiQ0-";
var _ = "YbrTGQJwy1w-";
var _ = "_4-VIszWOyjU-";
var _ = "_-2DlbVABlsg-";
var _ = "gRteJ-XhQG8-";
var _ = "X0rP4JDEGys-";
var _ = "HM2pmBPb6yk-";
var _ = "DHqf1E6df88-";
var _ = "EeeZUuRovTI-";
var _ = "CdtBH5cDo-Q-";
var _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function _(_, _) {
  let _ = "0000000000000000000000000000000000000000";
  typeof _ == "string" ? (_ = _) : _ && (_ = _(_));
  let _ = ".jpg";
  _ === "0000000000000000000000000000000000000000" && (_ = _),
    _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  switch (
    (_ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (_ += _.slice(0, 2) + "/")),
    (_ += _),
    _)
  ) {
    case "X-Small":
    case "Small":
      break;
    case "Medium":
    case "MediumLarge":
      _ += "_medium";
      break;
    case "Large":
    case "X-Large":
    case "FillArea":
      _ += "_full";
      break;
  }
  return (_ += _), _;
}
function _(_) {
  return [..._].map((_) => _.toString(16).padStart(2, "0")).join("");
}
var _ = _(_());
function _(_) {
  let {
      avatarURL: _,
      size: _,
      statusStyle: _,
      statusPosition: _,
      className: _,
      children: _,
      isOnline: _,
      isInGame: _,
      isWatchingBroadcast: _,
      isAwayOrSnooze: _,
      alt: _,
    } = _,
    _ = [];
  return (
    _ && _.push(_),
    _.push(_(_ ?? "Medium")),
    (0, _.jsxs)("div", {
      className: (0, _.default)(
        _,
        {
          [_]: !_,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
        },
        _,
      ),
      "data-size": _,
      "data-status-position": _,
      children: [
        (0, _.jsx)("div", {
          className: _,
          style: _,
        }),
        (0, _.jsx)(_, {
          className: (0, _.default)(_),
          rgSources: _,
          draggable: !1,
          alt: _,
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let { profileItem: _, className: _, bDisableAnimation: _, ..._ } = _;
  if (!_ || !_.image_small || _.image_small.length == 0) return null;
  let _ = _ ? _.image_large : _.image_small;
  return (
    _ || (_ = _.image_small),
    _.startsWith("https://") || (_ = _.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
    (0, _.jsx)("div", {
      className: (0, _.default)(_, _),
      ..._,
      children: (0, _.jsx)("img", {
        className: _,
        src: _,
        alt: "",
        role: "presentation",
      }),
    })
  );
}
function _(_) {
  let {
      playerLinkDetails: _,
      animatedAvatar: _,
      avatarFrame: _,
      size: _,
      ..._
    } = _,
    _ = _(_.public_data?.sha_digest_avatar, _);
  return (
    _?.image_small?.length &&
      (_ = _.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small),
    (0, _.jsx)(_, {
      avatarURL: _,
      size: _,
      isOnline: _.private_data?.persona_state === 1,
      isInGame: _.private_data?.game_id !== void 0,
      isWatchingBroadcast:
        _.private_data?.watching_broadcast_accountid !== void 0,
      isAwayOrSnooze:
        _.private_data?.persona_state === 3 ||
        _.private_data?.persona_state === 4,
      ..._,
    })
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(_ !== "None");
  return (
    (0, _.useEffect)(() => {
      if ((_(_ !== "None"), _ === "None" || _ === "Infinite")) return;
      let _;
      switch (_) {
        case "Short":
          _ = 2500;
          break;
        case "Medium":
          _ = 5e3;
          break;
        case "Long":
          _ = 1e4;
          break;
      }
      let _ = setTimeout(() => {
        _(_);
      }, _);
      return () => {
        clearTimeout(_);
      };
    }, [_, _]),
    _
  );
}
function _(_) {
  let {
      loopDuration: _ = "Infinite",
      bParentHovered: _,
      bLimitProfileFrameAnimationTime: _,
      className: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _),
    _ = _(_.playerLinkDetails.public_data.steamid);
  return (0, _.jsx)("div", {
    className: _,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, _.jsx)(_, {
      ..._,
      animatedAvatar: _ ? _.data?.animated_avatar : void 0,
      children: (0, _.jsx)(_, {
        profileItem: _.data?.avatar_frame,
        bDisableAnimation: _ && !_,
      }),
    }),
  });
}
function _(_) {
  switch (_) {
    case "X-Small":
    case "Small":
      return _(_);
    case "Medium":
    case "MediumLarge":
      return _(_);
    case "Large":
    case "X-Large":
    case "FillArea":
      return _(_);
  }
}
export { _, _, _ };
