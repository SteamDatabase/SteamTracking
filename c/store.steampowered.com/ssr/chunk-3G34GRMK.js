import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = "./shared_arabic-XXXXXXXX.json";
var _ = "./shared_brazilian-XXXXXXXX.json";
var _ = "./shared_bulgarian-XXXXXXXX.json";
var _ = "./shared_czech-XXXXXXXX.json";
var _ = "./shared_danish-XXXXXXXX.json";
var _ = "./shared_dutch-XXXXXXXX.json";
var _ = "./shared_english-XXXXXXXX.json";
var _ = "./shared_finnish-XXXXXXXX.json";
var _ = "./shared_french-XXXXXXXX.json";
var _ = "./shared_german-XXXXXXXX.json";
var _ = "./shared_greek-XXXXXXXX.json";
var _ = "./shared_hungarian-XXXXXXXX.json";
var _ = "./shared_indonesian-XXXXXXXX.json";
var _ = "./shared_italian-XXXXXXXX.json";
var _ = "./shared_japanese-XXXXXXXX.json";
var _ = "./shared_koreana-XXXXXXXX.json";
var _ = "./shared_latam-XXXXXXXX.json";
var _ = "./shared_norwegian-XXXXXXXX.json";
var _ = "./shared_polish-XXXXXXXX.json";
var _ = "./shared_portuguese-XXXXXXXX.json";
var _ = "./shared_romanian-XXXXXXXX.json";
var _ = "./shared_russian-XXXXXXXX.json";
var _ = "./shared_sc_schinese-XXXXXXXX.json";
var _ = "./shared_schinese-XXXXXXXX.json";
var _ = "./shared_spanish-XXXXXXXX.json";
var _ = "./shared_swedish-XXXXXXXX.json";
var _ = "./shared_tchinese-XXXXXXXX.json";
var _ = "./shared_thai-XXXXXXXX.json";
var _ = "./shared_turkish-XXXXXXXX.json";
var _ = "./shared_ukrainian-XXXXXXXX.json";
var _ = "./shared_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
var _ = _(_()),
  _ = _(_());
var _ = {
  SupportedPlatforms: "Z5L0rRmLkfY-",
  PlatformIndicator: "wIs-huKXogw-",
  Windows: "MwfzdHXmZTc-",
  SteamOS: "EdGS6nZmIig-",
  Mac: "oWE-ATskiSE-",
  DeckCompat: "cuwoxvqhugs-",
  SteamDeckCompatLogo: "jBKIORqOZkk-",
  SteamDeckCompatIcon: "ygtKsh8LFro-",
  SteamDeckCompatVerified: "RQsmLVI-qPg-",
  SteamDeckCompatPlayable: "YydHahv2NCc-",
  SteamDeckCompatUnsupported: "TIGenT-e5-A-",
  SteamDeckCompatUnknown: "_9j7xeNVhq0c-",
  SteamOSCompatCompatible: "aQL8DvaPCcA-",
};
var _ = _(_());
function _(_) {
  let { data: _ } = _(_._);
  return (0, _.jsx)(_, {
    platforms: _,
  });
}
function _(_) {
  let { _: _, ..._ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    ..._,
    platforms: _,
  });
}
var _ = _.memo(function (_) {
    let { platforms: _ } = _;
    if (!_) return null;
    let { windows: _, mac: _, steamos_linux: _, vr_support: _ } = _;
    return (0, _.jsxs)("span", {
      className: _.SupportedPlatforms,
      children: [
        _ && (0, _.jsx)(_, {}),
        _ && (0, _.jsx)(_, {}),
        _ && (0, _.jsx)(_, {}),
        _?.vrhmd && (0, _.jsx)(_, {}),
      ],
    });
  }),
  _ = _.memo(function (_) {
    let { platforms: _, eHWCompat: _, bShowDeckLogo: _ = !0 } = _,
      _;
    if (_ == 2) {
      let _ = _?.steam_os_compat_category;
      if (_ === void 0) return null;
      switch (_) {
        case 2:
          _ = _;
          break;
        case 1:
          _ = _;
          break;
        case 0:
          _ = _;
          break;
        default:
          return _(_, `Unhandled steam os category: ${_}`), null;
      }
    } else {
      let _ = _?.steam_deck_compat_category;
      if (_ === void 0) return null;
      switch (_) {
        case 3:
          _ = _;
          break;
        case 2:
          _ = _;
          break;
        case 1:
          _ = _;
          break;
        case 0:
          _ = _;
          break;
        default:
          return _(_, `Unhandled steam deck category: ${_}`), null;
      }
    }
    return (0, _.jsxs)("span", {
      className: (0, _.default)(_.DeckCompat, _ && _.WithLogo),
      children: [_ && (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
    });
  });
function _() {
  return (0, _.jsx)("span", {
    className: (0, _.default)(_.PlatformIndicator, _.Windows),
    title: _.Localize("#Platform_Windows"),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)("span", {
    className: (0, _.default)(_.PlatformIndicator, _.Mac),
    title: _.Localize("#Platform_Mac"),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)("span", {
    className: (0, _.default)(_.PlatformIndicator, _.SteamOS),
    title: _.Localize("#Platform_Linux"),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)("span", {
    className: _.PlatformIndicator,
    title: _.Localize("#Platform_VR"),
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    _: "0px",
    _: "0px",
    className: "SVGIcon_Button SVGIcon_WindowsLogo",
    width: "100%",
    height: "100%",
    viewBox: "0 0 128 128",
    enableBackground: "new 0 0 128 128",
    children: [
      (0, _.jsx)("rect", {
        fill: "currentColor",
        width: "60.834",
        height: "60.835",
      }),
      (0, _.jsx)("rect", {
        _: "67.165",
        fill: "currentColor",
        width: "60.835",
        height: "60.835",
      }),
      (0, _.jsx)("rect", {
        _: "67.164",
        fill: "currentColor",
        width: "60.834",
        height: "60.836",
      }),
      (0, _.jsx)("rect", {
        _: "67.165",
        _: "67.164",
        fill: "currentColor",
        width: "60.835",
        height: "60.836",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "base",
    xmlns: "http://www.w3.org/2000/svg",
    _: "0px",
    _: "0px",
    width: "256px",
    height: "256px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("path", {
        _: "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
      }),
      (0, _.jsx)("path", {
        _: "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    version: "1.1",
    _: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#FFFFFF",
    _: "0px",
    _: "0px",
    viewBox: "0 0 256 256",
    children: [
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      (0, _.jsx)("path", {
        _: "M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z",
        fill: "currentColor",
      }),
      (0, _.jsx)("path", {
        _: "M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z",
        fill: "currentColor",
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamDeckVerified_Store_CompatSectionHeader_Desktop"),
    className: (0, _.default)(_.SteamDeckCompatLogo),
    children: (0, _.jsx)("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        opacity: "0.84",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
        fill: "white",
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamDeckVerified_Category_Verified"),
    className: _.SteamDeckCompatIcon,
    children: (0, _.jsx)("svg", {
      className: (0, _.default)(_.SteamDeckCompatVerified),
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
        fill: "currentColor",
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamDeckVerified_Category_Playable"),
    className: _.SteamDeckCompatIcon,
    children: (0, _.jsx)("svg", {
      className: (0, _.default)(_.SteamDeckCompatPlayable),
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
        fill: "currentColor",
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamDeckVerified_Category_Unsupported"),
    className: _.SteamDeckCompatIcon,
    children: (0, _.jsx)("svg", {
      className: (0, _.default)(_.SteamDeckCompatUnsupported),
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
        fill: "currentColor",
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamDeckVerified_Category_Unknown"),
    className: _.SteamDeckCompatIcon,
    children: (0, _.jsx)("svg", {
      className: (0, _.default)(_.SteamDeckCompatUnknown),
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
        fill: "currentColor",
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)("span", {
    title: _.Localize("#SteamOSCompatibility_Category_Compatible"),
    className: _.SteamDeckCompatIcon,
    children: (0, _.jsx)("svg", {
      className: (0, _.default)(_.SteamOSCompatCompatible),
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
        fill: "currentColor",
      }),
    }),
  });
}
export { _, _, _ };
