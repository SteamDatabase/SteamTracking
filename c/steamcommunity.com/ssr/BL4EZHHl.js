var _ = _(_(), 1),
  _ = _();
function _(_) {
  if (_ instanceof _) return _.eResult;
  let _ = _;
  return _.success ? _.success : 2;
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useCallback)((_) => {
      switch (_(_)) {
        case 15:
        case 24:
          _(`#Workshop_Dialog_AccessDenied`);
          break;
        case 16:
          _(`#Workshop_Dialog_Timeout`);
          break;
        case 25:
          _(`#Workshop_Dialog_LimitExceeded`);
          break;
        default:
          _(void 0);
          break;
      }
      _(!0);
    }, []),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)(_.Fragment, {
          children:
            _ &&
            (0, _.jsxs)(_, {
              strTitle: _.Localize(`#Workshop_Dialog_Error`),
              onClose: () => _(!1),
              children: [
                (0, _.jsx)(_, {
                  children: _.Localize(_ ?? `#Workshop_Dialog_ErrorDesc`),
                }),
                (0, _.jsx)(_, {
                  justify: `end`,
                  gap: `3`,
                  align: `center`,
                  marginTop: `3`,
                  children: (0, _.jsx)(_, {
                    onClick: () => _(!1),
                    children: (0, _.jsx)(`span`, {
                      children: _.Localize(`#Button_Close`),
                    }),
                  }),
                }),
              ],
            }),
        }),
      [_, _],
    );
  return (0, _.useMemo)(
    () => ({
      HandleMutationError: _,
      errorDialog: _,
    }),
    [_, _],
  );
}
export { _, _ };
