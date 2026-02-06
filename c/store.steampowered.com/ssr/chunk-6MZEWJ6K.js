import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return _?.is_coming_soon
    ? _(
        _.coming_soon_display,
        _.steam_release_date,
        _.custom_release_date_message,
      )
    : _?.steam_release_date
      ? _(_.steam_release_date)
      : "";
}
function _(_, _, _) {
  switch (_) {
    case "date_full":
      return _(_);
    case "date_month":
      return _(new Date(_ * 1e3));
    case "date_quarter":
      return _(new Date(_ * 1e3));
    case "date_year":
      return _(new Date(_ * 1e3));
    case "text_comingsoon":
      return _ || _.Localize("#Store_ComingSoon_ComingSoon");
    case "text_tba":
      return _ || _.Localize("#Store_ComingSoon_TBA");
    default:
      return "";
  }
}
function _(_) {
  return new Date(_ * 1e3).toLocaleDateString(_());
}
function _(_) {
  return _.toLocaleDateString(_(), {
    year: "numeric",
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: "long",
    year: "numeric",
  });
}
function _(_) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _.Localize("#Time_QuarterOfYear_Q1", _.getUTCFullYear());
    case 3:
    case 4:
    case 5:
      return _.Localize("#Time_QuarterOfYear_Q2", _.getUTCFullYear());
    case 6:
    case 7:
    case 8:
      return _.Localize("#Time_QuarterOfYear_Q3", _.getUTCFullYear());
    default:
      return _.Localize("#Time_QuarterOfYear_Q4", _.getUTCFullYear());
  }
}
function _(_) {
  if (!_) return "";
  if (_ && _.is_coming_soon) {
    if (_.coming_soon_display) return _(_);
    if (_.custom_release_date_message) return _.custom_release_date_message;
    let _ = _.steam_release_date;
    return _ ? (_.is_abridged_release_date ? _(new Date(_ * 1e3)) : _(_)) : "";
  }
  let _ = _.steam_release_date;
  return _ || (_ = _.original_release_date), _ ? _(_) : "";
}
export { _, _ };
