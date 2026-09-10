var _ = _(_(), 1),
  _ = `vrVtCUKAZVI-`,
  _ = `nhq4Qsb9lfI-`,
  _ = `-XYXK9nnfkQ-`,
  _ = `GBuw9nYknm4-`,
  _ = `riqWymU-le0-`,
  _ = `sAmFtFKXEOs-`,
  _ = `WtZaeonT-iA-`,
  _ = _();
function _(_) {
  let _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _.current?.showModal();
    let _ = document.body.style.overflow;
    return (
      (document.body.style.overflow = `hidden`),
      () => {
        document.body.style.overflow = _;
      }
    );
  }, []);
  let _ =
      typeof _.prevSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.prevSrc,
          })
        : _.prevSrc,
    _ =
      typeof _.mainSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.mainSrc,
          })
        : _.mainSrc,
    _ =
      typeof _.nextSrc == `string`
        ? (0, _.jsx)(`img`, {
            src: _.nextSrc,
          })
        : _.nextSrc;
  return (0, _.jsxs)(`dialog`, {
    ref: _,
    className: _(_, ...(_.backgroundClassName ? [_.backgroundClassName] : [])),
    onClose: (_) => _.onCloseRequest(_),
    onKeyDown: (_) => {
      _.key === `ArrowRight` && _.nextSrc
        ? _.onMoveNextRequest(_)
        : _.key === `ArrowLeft` && _.prevSrc && _.onMovePrevRequest(_);
    },
    children: [
      _.prevSrc &&
        (0, _.jsx)(`div`, {
          className: _(`nhq4Qsb9lfI-`, `-iR4Fro7N6M-`),
          children: _,
        }),
      (0, _.jsx)(`div`, {
        className: _(_, _),
        tabIndex: 0,
        onClick: (_) => {
          _.target.nodeName !== `IMG` && _.onCloseRequest(_);
        },
        children: _,
      }),
      _.nextSrc &&
        (0, _.jsx)(`div`, {
          className: _(`nhq4Qsb9lfI-`, `m1RsyJLIWwI-`),
          children: _,
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.imageTitle,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _.toolbarButtons,
              (0, _.jsx)(`button`, {
                className: _,
                onClick: _.onCloseRequest,
              }),
            ],
          }),
        ],
      }),
      _.prevSrc &&
        (0, _.jsx)(`button`, {
          className: `EvR2lEzcQkU-`,
          onClick: _.onMovePrevRequest,
        }),
      _.nextSrc &&
        (0, _.jsx)(`button`, {
          className: `pCeLTUsGEdU-`,
          onClick: _.onMoveNextRequest,
        }),
    ],
  });
}
export { _ };
