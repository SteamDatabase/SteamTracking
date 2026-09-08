var _ = 1;
function _(_) {
  return (
    delete _?.private_data?.account_name,
    delete _?.public_data?.account_flags,
    delete _?.public_data?.ban_expires_time,
    delete _?.public_data?.privacy_state,
    _?.public_data?.profile_state !== _ && delete _?.private_data,
    _
  );
}
function _(_) {
  return [`PlayerLinkDetails`, _];
}
function _(_, _) {
  let _ =
    typeof _ == `number`
      ? _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString()
      : _;
  return {
    queryKey: _(_),
    queryFn: async () => (_ ? _(await _.load(_)) : null),
    enabled: !!_,
  };
}
function _(_) {
  return _(_(_(_()), _));
}
function _(_, _) {
  _.forEach((_) => {
    _?.public_data?.steamid && _.setQueryData(_(_.public_data.steamid), _);
  });
}
export { _, _, _, _ };
