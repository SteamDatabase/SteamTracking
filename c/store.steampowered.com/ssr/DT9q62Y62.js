function _(_, _) {
  return _.split(_);
}
function _(_) {
  if (_.bIncludeUnpublished) return `partner-unpublished`;
  if (_.bUsePartnerAPI) return `partner`;
}
function _(_, _) {
  _.Body().set_context(_(_));
}
function _(_) {
  let _ = new _();
  return (
    _.bUsePartnerAPI || _.set_country_code(_.country),
    _.set_language(_.language),
    _
  );
}
function _(_, _) {
  _.Body().set_data_request(_.fromObject(_));
}
export { _, _, _, _ };
