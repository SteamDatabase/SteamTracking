var _ = _(_(), 1),
  _ = `U5oHEUJR3KU-`,
  _ = `zsG6BJvEtlU-`,
  _ = `hBHIQ0nx1yU-`,
  _ = _(),
  _ = [
    `#Workshop_SearchTarget_All`,
    `#Workshop_SearchTarget_Title`,
    `#Workshop_SearchTarget_Description`,
  ];
function _(_) {
  let { appName: _, bUseDebouncedValue: _, navRef: _ } = _,
    {
      onBrowseHandler: _,
      searchText: _,
      setSearchText: _,
      searchTextTarget: _,
      setSearchTextTarget: _,
    } = _(),
    _ = (0, _.useRef)(!1),
    _ = _.Localize(`#Workshop_Menu_Search`, _),
    _ = (_) => {
      _.preventDefault(),
        _({
          search_text: _,
        });
    },
    _ = (0, _.useCallback)(
      (_) => {
        _(_);
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      _({
        browse_sort: `toprated`,
        search_text: ``,
      });
    }, [_]),
    _ = (0, _.useCallback)(() => {
      _.current = !1;
    }, []),
    _ = (0, _.useCallback)(() => {
      _.current = !0;
    }, []),
    _ = _(_.trim(), {
      nTimeoutMS: 1e3,
      nTimeoutExtensionMS: 500,
      nMaxTimeoutExtensions: 100,
    });
  (0, _.useEffect)(() => {
    _.current &&
      _ &&
      (_.length == 0
        ? _({
            search_text: _,
          })
        : _({
            browse_sort: `textsearch`,
            search_text: _,
          }));
  }, [_, _]);
  let _ = [0, 1, 2],
    _ = (_) => {
      _(_),
        _({
          search_text_target: _,
          page: 1,
        });
    },
    _ = (_) => _.Localize(_[_]);
  _();
  let [_, _] = (0, _.useState)(!1),
    _ = _.Localize(`#Workshop_Search_Help_Example_Red`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Blue`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Green`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Room`);
  return (0, _.jsxs)(_, {
    className: _,
    gap: `1`,
    navProps: {
      navRef: _,
    },
    children: [
      (0, _.jsx)(`form`, {
        onSubmit: _,
        children: (0, _.jsx)(
          _,
          {
            name: `SearchInput`,
            placeholder: _,
            value: _,
            onTextChange: _,
            onTextClear: _,
            onFocus: _,
            onBlur: _,
            maxLength: 64,
            clearable: !0,
          },
          `SearchText`,
        ),
      }),
      (0, _.jsxs)(_.Root, {
        open: _,
        onOpenChange: _,
        interactions: {
          click: !0,
          hover: !1,
        },
        placement: {
          initial: `bottom-start`,
          flip: !1,
        },
        children: [
          (0, _.jsx)(_.Anchor, {
            children: (0, _.jsx)(_, {
              onActivate: () => _(!0),
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          }),
          (0, _.jsx)(_.Positioner, {
            children: (0, _.jsx)(_.FocusManager, {
              children: (0, _.jsx)(`div`, {
                children: (0, _.jsx)(_, {
                  className: _,
                  gap: `2`,
                  direction: `column`,
                  children: (0, _.jsxs)(_, {
                    gap: `1`,
                    direction: `column`,
                    children: [
                      (0, _.jsx)(_, {
                        size: `4`,
                        children: _.Localize(
                          `#Workshop_SearchTarget_MenuTitle`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        options: _,
                        value: _,
                        onValueChange: _,
                        getOptionLabel: _,
                      }),
                      (0, _.jsxs)(_, {
                        marginTop: `3`,
                        direction: `column`,
                        children: [
                          (0, _.jsx)(_, {
                            size: `4`,
                            children: _.LocalizeReact(
                              `#Workshop_Search_Help`,
                              (0, _.jsx)(`code`, {
                                children: `AND`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `OR`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `NOT`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `+`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `-`,
                              }),
                            ),
                          }),
                          (0, _.jsxs)(`ul`, {
                            children: [
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example1`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` AND `, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example2`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` OR `, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example3`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` -`, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                            ],
                          }),
                          (0, _.jsx)(_, {
                            size: `4`,
                            children: _.Localize(
                              `#Workshop_Search_Help_Advanced`,
                            ),
                          }),
                          (0, _.jsxs)(`ul`, {
                            children: [
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_AdvancedExample1`,
                                  (0, _.jsxs)(`code`, {
                                    children: [`(`, _, ` OR `, _, `) AND `, _],
                                  }),
                                  _,
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_AdvancedExample2`,
                                  (0, _.jsxs)(`code`, {
                                    children: [
                                      `(`,
                                      _,
                                      ` OR `,
                                      _,
                                      `) AND `,
                                      _,
                                      ` -`,
                                      _,
                                    ],
                                  }),
                                  _,
                                  _,
                                  _,
                                  _,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
export { _ };
