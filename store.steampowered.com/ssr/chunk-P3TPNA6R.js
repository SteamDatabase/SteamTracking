function n(_) {
  return _ == 3 || _ == 6;
}
var a = 1;
var s = 4;
var u = "18446744073709551615";
function i(_, k = "en") {
  switch (_) {
    case 0:
      return "en";
    case 1:
      return "de";
    case 2:
      return "fr";
    case 3:
      return "it";
    case 4:
      return "ko";
    case 5:
      return "es";
    case 6:
      return "zh-cn";
    case 7:
      return "zh-tw";
    case 8:
      return "ru";
    case 9:
      return "th";
    case 10:
      return "ja";
    case 11:
      return "pt";
    case 12:
      return "pl";
    case 13:
      return "da";
    case 14:
      return "nl";
    case 15:
      return "fi";
    case 16:
      return "no";
    case 17:
      return "sv";
    case 18:
      return "hu";
    case 19:
      return "cs";
    case 20:
      return "ro";
    case 21:
      return "tr";
    case 25:
      return "ar";
    case 22:
      return "pt-br";
    case 23:
      return "bg";
    case 24:
      return "el";
    case 26:
      return "uk";
    case 27:
      return "es-419";
    case 28:
      return "vi";
    case 29:
      return "sc-sc";
    case 30:
      return "id";
    default:
      return k;
  }
}
var g = (_) => (_ === "koreana" ? "korean" : _);
function c(_, k = "") {
  switch (_) {
    case 0:
      return "english";
    case 1:
      return "german";
    case 2:
      return "french";
    case 3:
      return "italian";
    case 4:
      return "koreana";
    case 5:
      return "spanish";
    case 6:
      return "schinese";
    case 7:
      return "tchinese";
    case 8:
      return "russian";
    case 9:
      return "thai";
    case 10:
      return "japanese";
    case 11:
      return "portuguese";
    case 12:
      return "polish";
    case 13:
      return "danish";
    case 14:
      return "dutch";
    case 15:
      return "finnish";
    case 16:
      return "norwegian";
    case 17:
      return "swedish";
    case 18:
      return "hungarian";
    case 19:
      return "czech";
    case 20:
      return "romanian";
    case 21:
      return "turkish";
    case 25:
      return "arabic";
    case 22:
      return "brazilian";
    case 23:
      return "bulgarian";
    case 24:
      return "greek";
    case 26:
      return "ukrainian";
    case 27:
      return "latam";
    case 28:
      return "vietnamese";
    case 29:
      return "sc_schinese";
    case 30:
      return "indonesian";
    default:
      return k;
  }
}
function L(_, k = 0) {
  switch (_) {
    case "english":
      return 0;
    case "german":
      return 1;
    case "french":
      return 2;
    case "italian":
      return 3;
    case "korean":
    case "koreana":
      return 4;
    case "spanish":
      return 5;
    case "schinese":
      return 6;
    case "tchinese":
      return 7;
    case "russian":
      return 8;
    case "thai":
      return 9;
    case "japanese":
      return 10;
    case "portuguese":
      return 11;
    case "polish":
      return 12;
    case "danish":
      return 13;
    case "dutch":
      return 14;
    case "finnish":
      return 15;
    case "norwegian":
      return 16;
    case "swedish":
      return 17;
    case "hungarian":
      return 18;
    case "czech":
      return 19;
    case "romanian":
      return 20;
    case "turkish":
      return 21;
    case "arabic":
      return 25;
    case "brazilian":
      return 22;
    case "bulgarian":
      return 23;
    case "greek":
      return 24;
    case "ukrainian":
      return 26;
    case "latam":
      return 27;
    case "vietnamese":
      return 28;
    case "sc_schinese":
      return 29;
    case "indonesian":
      return 30;
    default:
      return k;
  }
}
function m(_) {
  switch (_) {
    default:
      break;
    case 4:
    case 1:
    case 8:
      return !0;
  }
  return !1;
}
function t(_) {
  switch (_) {
    case 0:
      return "invalid";
    case 1:
      return "gamepad";
    case 2:
      return "desktop";
    case 3:
      return "tray";
    case 4:
      return "all";
    case 5:
      return "push";
  }
}
function e(_) {
  switch (_) {
    case 0:
      return "vgui";
    case 1:
      return "tenfoot";
    case 2:
      return "mobile";
    case 3:
      return "web";
    case 4:
      return "gamepad";
    case 5:
      return "mobilechat";
    case 6:
      return "embedded";
    case 7:
      return "desktop";
    case -1:
    default:
      return "unknown";
  }
}
export {
  n as a,
  a as b,
  s as c,
  u as d,
  i as e,
  g as f,
  c as g,
  L as h,
  m as i,
  t as j,
  e as k,
};
