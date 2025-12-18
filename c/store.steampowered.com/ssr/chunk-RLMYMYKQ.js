function _(_) {
  return _ == 3 || _ == 6;
}
var _ = 1;
var _ = 4;
var _ = "18446744073709551615";
function _(_, _ = 0) {
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
      return _;
  }
}
function _(_) {
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
function _(_) {
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
function _(_) {
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
    default:
      return "unknown";
  }
}
export { _, _, _, _, _, _, _, _ };
