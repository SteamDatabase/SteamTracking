import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return _(
    _.coming_soon_display,
    _.steam_release_date,
    _.custom_release_date_message,
  );
}
function _(_, _, _, _) {
  switch (_) {
    case "date_full":
      return _(_);
    case "date_month":
      return _(new Date(_ * 1e3));
    case "date_quarter":
      return _(new Date(_ * 1e3), _);
    case "date_year":
      return _(new Date(_ * 1e3));
    case "text_comingsoon":
      return _ || _("#Store_ComingSoon_ComingSoon");
    case "text_tba":
      return _ || _("#Store_ComingSoon_TBA");
    default:
      return "";
  }
}
export { _ };
