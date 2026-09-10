var _ = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function _(_, _) {
  let _ = `0000000000000000000000000000000000000000`;
  typeof _ == `string` ? (_ = _) : _ && (_ = _(_) || _);
  let _ = `.jpg`;
  _ === `0000000000000000000000000000000000000000` && (_ = _),
    _.length == 44 && ((_ = _.slice(-4)), (_ = _.slice(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  switch (
    (_ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (_ += _.slice(0, 2) + `/`)),
    (_ += _),
    _)
  ) {
    case `X-Small`:
    case `Small`:
      break;
    case `Medium`:
    case `MediumLarge`:
      _ += `_medium`;
      break;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      _ += `_full`;
      break;
  }
  return (_ += _), _;
}
function _(_) {
  return _
    ? (typeof _[Symbol.iterator] == `function`
        ? Array.from(_)
        : Object.values(_).filter((_) => typeof _ == `number`)
      )
        .map((_) => _.toString(16).padStart(2, `0`))
        .join(``)
    : ``;
}
export { _ };
