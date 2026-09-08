function _(_, _) {
  if (_[_]) {
    if (_ == `community_icon`) {
      let _ = _.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${_[_]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${_.MEDIA_CDN_COMMUNITY_URL}${_}`;
    } else if (typeof _[_] == `string`) {
      let _ = _.asset_url_format.replace("${FILENAME}", _[_]);
      return `${_.STORE_ITEM_BASE_URL}${_}`;
    }
  }
}
function _(_, _ = `full`) {
  let _ = ``;
  switch (_) {
    case `thumb`:
      _ = `.116x65`;
      break;
    case `600x338`:
      _ = `.600x338`;
      break;
    case `1920x1080`:
      _ = `.1920x1080`;
      break;
    case `full`:
      _ = ``;
      break;
    default:
      _(_, `Invalid size: ${_}`);
      break;
  }
  return (
    _.STORE_ITEM_BASE_URL + _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
  );
}
function _(_) {
  let { data: _ } = _(_),
    _ = _();
  if (_)
    return [
      ...(_.all_ages_screenshots || []),
      ...(!_ && _.mature_content_screenshots
        ? _.mature_content_screenshots
        : []),
    ].sort((_, _) => _.ordinal - _.ordinal);
}
export { _, _, _ };
