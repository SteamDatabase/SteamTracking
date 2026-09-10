var _ = _(_(), 1),
  _ = `kC6ru6-I1r0-`,
  _ = `_7d6HTK1LzyY-`,
  _ = `zixqJITMO7o-`,
  _ = _(),
  _ = Object.assign(_, {
    BillingInfoSection: _,
    Heading: _,
    Loading: _,
    ConfirmationPoller: _,
    FatalError: _,
    NonFatalError: _,
    SSAAgreement: _,
    EUSSAAgreement: _,
  });
function _(_) {
  let { onClose: _, children: _, bFillHeight: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    onClose: _,
    className: _(_, ...(_ ? [_] : [])),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `5`,
          onClick: _,
        }),
      }),
      (0, _.jsx)(`form`, {
        onSubmit: (_) => _.preventDefault(),
        children: (0, _.jsx)(_, {
          direction: `column`,
          gap: `4`,
          padding: {
            initial: `3`,
            _: `5`,
          },
          height: _ ? `100%` : void 0,
          minHeight: _ ? `0` : void 0,
          ..._,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { walletBalance: _, accountName: _, hasFunds: _, ..._ } = _;
  return (0, _.jsx)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    children: (0, _.jsxs)(_, {
      columns: {
        initial: `1fr`,
        _: `max-content 1fr`,
      },
      gap: `2`,
      children: [
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PaymentMethod_Label`),
        }),
        (0, _.jsxs)(_, {
          size: `4`,
          color: `green-8`,
          children: [
            _.Localize(`#PurchaseDialog_PaymentMethod_Wallet`),
            _ ? ` (${_})` : ``,
          ],
        }),
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_SteamAccount_Label`),
        }),
        (0, _.jsx)(_, {
          size: `4`,
          contrast: `title`,
          children: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            ..._,
          }),
      ],
    }),
  });
}
function _(_) {
  let { billingStates: _, billingCountry: _, ..._ } = _,
    _ = (0, _.useMemo)(() => Object.keys(_).length > 0, [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_BillingInfo_Label`),
      }),
      (0, _.jsxs)(_, {
        columns: `1fr 1fr`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            property: `firstName`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_FirstName`),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: `lastName`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_LastName`),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: `address`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_Address`),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: `addressTwo`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_AddressLine2`),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: `city`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_City`),
            ..._,
            maxLength: 50,
            wide: !_,
          }),
          _ &&
            (0, _.jsx)(_, {
              ..._,
              billingStates: _,
            }),
          (0, _.jsx)(_, {
            property: `postalCode`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_ZipPostal`),
            ..._,
            maxLength: 16,
          }),
          (0, _.jsx)(_, {
            label: _.Localize(`#PurchaseDialog_BillingInfo_Country`),
            children: (0, _.jsx)(_, {
              size: `3`,
              contrast: `title`,
              _: `div`,
              marginTop: `2`,
              children: _,
            }),
          }),
          (0, _.jsx)(_, {
            gridColumn: `span 2`,
            children: (0, _.jsx)(_, {
              marginTop: `2`,
              checked: !!_.state.bSaveAddress,
              onChange: (_) =>
                _.onChange({
                  ..._.state,
                  bSaveAddress: _,
                }),
              children: (0, _.jsx)(_, {
                size: `3`,
                children: _.Localize(`#PurhcaseDialog_SaveMyAddress`),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { state: _, onChange: _, property: _, maxLength: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      value: _[_] || ``,
      onTextChange: (_) =>
        _({
          ..._,
          [_]: _,
        }),
      maxLength: _,
    }),
  });
}
function _(_) {
  let { state: _, onChange: _, billingStates: _ } = _,
    _ = _.state || null,
    { rgStates: _, stateCodeToName: _ } = (0, _.useMemo)(() => {
      let _ = Object.values(_);
      return {
        rgStates: _.map(({ state_code: _ }) => _),
        stateCodeToName: _.reduce(
          (_, _) => ((_[_.state_code] = _.state_name), _),
          {},
        ),
      };
    }, [_]);
  return (0, _.jsx)(_, {
    label: _.Localize(`#PurchaseDialog_BillingInfo_StateProvince`),
    children: (0, _.jsx)(_, {
      options: _,
      selectedValue: _,
      onSelectionChange: (_) =>
        _({
          ..._,
          state: _,
        }),
      getOptionLabel: (_) => _[_],
    }),
  });
}
function _(_) {
  let { label: _, children: _, wide: _ } = _;
  return (0, _.jsxs)(_, {
    gridColumn: {
      initial: `span 2`,
      _: _ ? `span 2` : void 0,
    },
    children: [
      (0, _.jsx)(_, {
        size: `2`,
        contrast: `description`,
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `4`,
    contrast: {
      initial: `subtitle`,
      _: `description`,
    },
    weight: {
      initial: `medium`,
      _: void 0,
    },
    children: _.children,
  });
}
function _() {
  return (0, _.jsx)(_, {
    align: `center`,
    justify: `center`,
    marginBottom: `6`,
    marginTop: `3`,
    minHeight: `300px`,
    children: (0, _.jsx)(_, {
      size: `5`,
    }),
  });
}
function _() {
  return _({
    queryKey: [`market`, `userbillinginfo`],
    queryFn: async () =>
      (
        await fetch(`/market/userbillinginfo`, {
          credentials: `include`,
        })
      ).json(),
  });
}
function _(_, _) {
  return _({
    queryKey: [`market`, `fees`, _],
    enabled: !1,
    queryFn: async () => ({}),
  });
}
function _(_ = `buy`) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      _(_.logged_in && new URLSearchParams(location.search).get(_) === `1`);
    }, [_]),
    (0, _.useEffect)(
      () => () => {
        let _ = new URLSearchParams(location.search);
        _.get(_) && (_.delete(_), _(`?${_.toString()}`));
      },
      [_],
    ),
    [
      _,
      (_) => {
        _(_);
        let _ = new URLSearchParams(location.search);
        _ ? _.set(_, `1`) : _.delete(_), _(`?${_.toString()}`);
      },
    ]
  );
}
function _(_) {
  let { confirmation: _, onRetry: _, serverInfo: _ } = _,
    _ = (0, _.useRef)(_);
  (_.current = _),
    (0, _.useEffect)(() => {
      let _ = setTimeout(() => _.current(), 1500);
      return () => clearTimeout(_);
    }, [_]);
  let _ = _(_.confirmation_type);
  return (0, _.jsxs)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    direction: `column`,
    gap: `2`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        align: `center`,
        children: _.Localize(`#PurchaseDialog_Confirmation_Title`),
      }),
      (0, _.jsx)(_, {
        contrast: `subtitle`,
        align: `center`,
        children: _.body,
      }),
      (0, _.jsx)(_, {
        size: `4`,
      }),
      (0, _.jsx)(_, {
        size: `2`,
        align: `center`,
        children: _.description,
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case 1:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Email`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Email`,
        ),
      };
    case 2:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Mobile`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Mobile`,
        ),
      };
    default:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Unknown`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Unknown`,
        ),
      };
  }
}
function _(_, _) {
  let _ = [],
    _ = [];
  if (
    ((_.firstName?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_FirstName`)),
    (_.lastName?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_LastName`)),
    (_.address?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_Address`)),
    (_.city?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_City`)),
    (_.postalCode?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_ZipPostal`)),
    Object.keys(_.billing_states).length > 0)
  ) {
    if ((_.state?.length || 0) < 1)
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_StateProvince`));
    else if (_.country_code === `US` && _.city?.length) {
      let _ = [`AE`, `AP`, `AA`].includes(_.state || ``),
        _ = [`APO`, `FPO`, `DPO`].includes(_.city || ``);
      _ &&
        !_ &&
        _.push(_.Localize(`#PurchaseDialog_Error_InvalidMilitaryCity`));
    }
  }
  return (
    _.country_code === `US` &&
      (_.postalCode?.length || 0) < 5 &&
      _.push(_.Localize(`#PurchaseDialog_Error_InvalidPostal`)),
    _.length
      ? [_.Localize(`#PurchaseDialog_Error_MissingRequired`), ..._].join(`
	`)
      : _.length
        ? _.join(`
`)
        : null
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    children: (0, _.jsx)(_, {
      align: `center`,
      size: `4`,
      color: `red-9`,
      _: `div`,
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    align: `center`,
    size: `4`,
    color: `red-9`,
    _: `div`,
    whiteSpace: `pre-wrap`,
    children: _.children,
  });
}
function _(_) {
  let { lastUpdate: _, agreed: _, onAgreeChange: _ } = _,
    _ = new Date(_ * 1e3).toDateString(),
    _ = `${_.STORE_BASE_URL}subscriber_agreement`;
  return (0, _.jsx)(_, {
    checked: _,
    onChange: _,
    children: (0, _.jsx)(_, {
      size: `3`,
      children: _.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, _.jsx)(_, {
          href: _,
          target: `_blank`,
          children: _.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        _,
      ),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `3`,
    children: _.Localize(`#PurchaseDialog_EU_SSA`),
  });
}
function _(_, _) {
  return !!_ && parseInt(_.wallet_balance) >= _;
}
export { _, _, _, _, _, _ };
