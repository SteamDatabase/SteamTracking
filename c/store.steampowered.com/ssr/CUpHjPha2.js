function _() {
  return _(_(_(), _()));
}
function _(_, _) {
  return {
    queryKey: [`GetFriendsList`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      return (await _.GetFriendsList(_, _))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((_) => {
          if (!_.ulfriendid()) return !1;
          let _ = new _(_.ulfriendid());
          return (
            (_.efriendrelationship() == 3 || _.efriendrelationship() == 6) &&
            _.BIsIndividualAccount()
          );
        })
        .map((_) => _.ulfriendid());
    },
  };
}
function _(_, _) {
  return {
    queryKey: [`GetFriendNicknameMap`, _],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetNicknameList(_, _);
      return new Map(
        _.Body()
          .toObject()
          ?.nicknames?.map((_) => [_.accountid, _.nickname]),
      );
    },
  };
}
export { _, _, _ };
