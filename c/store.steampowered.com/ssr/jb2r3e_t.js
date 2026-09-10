var _ = _(_(), 1),
  _ = `zsasEdHk7Uc-`,
  _ = `z0yNzdTH-uk-`,
  _ = `D1ENbJhB4UI-`,
  _ = `IDtoGMrAFCw-`,
  _ = `m9ZZF4AzFck-`,
  _ = `TSIudJ4cgRA-`,
  _ = `JfKCFHMAGac-`,
  _ = _(),
  _ = _({
    Component: _,
  }),
  _ = {
    appid: 1675200,
  },
  _ = {
    appid: 1696780,
  },
  _ = {
    packageid: 354231,
  };
function _() {
  return (0, _.jsxs)(_, {
    scrollIntoViewType: _.NoTransform,
    className: _,
    children: [
      (0, _.jsx)(`h1`, {
        className: _,
        children: _.Localize(`#sitemap_title`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          }),
          (0, _.jsxs)(_, {
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          }),
          (0, _.jsxs)(_, {
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          }),
          (0, _.jsxs)(_, {
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          }),
        ],
      }),
      (0, _.jsx)(`hr`, {}),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _() {
  let { userDetails: _ } = _.useLoaderData();
  if (_ && _.public_data?.profile_url)
    return `id/${_.public_data.profile_url}/`;
  if (_) return `profiles/${_.public_data.steamid}/`;
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `grid`,
    navEntryPreferPosition: _.MAINTAIN_X,
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: _,
    children: (0, _.jsx)(_, {
      children: _.children,
    }),
  });
}
function _(_) {
  let { _: _, title: _, children: _ } = _;
  return (0, _.jsxs)(`section`, {
    className: _,
    "aria-labelledby": _,
    children: [
      (0, _.jsx)(`h3`, {
        className: _,
        _: _,
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  let { href: _ } = _,
    _ = `label` in _ ? _.Localize(_.label) : _.text;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      gamepadFocusable: !0,
      snr: !0,
      external: !0,
      _: `${_.STORE_BASE_URL}${_}`,
      children: _,
    }),
  });
}
function _(_) {
  let { href: _ } = _,
    _ = `label` in _ ? _.Localize(_.label) : _.text;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      gamepadFocusable: !0,
      external: !0,
      _: `${_.COMMUNITY_BASE_URL}${_}`,
      children: _,
    }),
  });
}
var _ = _.memo(function (_) {
  let { handle: _, label: _ } = _,
    { data: _ } = _(),
    _ = _?.get(_);
  return _
    ? _
      ? (0, _.jsx)(_, {
          href: _.url_path,
          label: _,
        })
      : (0, _.jsx)(_, {
          href: _.url_path,
          text: _.display_name,
        })
    : null;
});
function _() {
  return (0, _.jsx)(`section`, {
    className: _,
    children: (0, _.jsx)(_, {
      href: ``,
      label: `#sitemap_home`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `account`,
    title: _.Localize(`#sitemap_section_account`),
    children: [
      (0, _.jsx)(_, {
        href: `account/`,
        label: `#sitemap_section_account_account_details`,
      }),
      (0, _.jsx)(_, {
        href: `account/preferences`,
        label: `#sitemap_section_account_store_preferences`,
      }),
      (0, _.jsx)(_, {
        href: `account/familymanagement`,
        label: `#sitemap_section_account_family_management`,
      }),
      (0, _.jsx)(_, {
        href: `account/authorizeddevices`,
        label: `#sitemap_section_account_security_and_devices`,
      }),
      (0, _.jsx)(_, {
        href: `account/languagepreferences`,
        label: `#sitemap_section_account_language_preferences`,
      }),
      (0, _.jsx)(_, {
        href: `account/cookiepreferences`,
        label: `#sitemap_section_account_cookes_and_browsing`,
      }),
      (0, _.jsx)(_, {
        href: `account/notificationsettings`,
        label: `#sitemap_section_account_notification_settings`,
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        href: `cart/`,
        text: _.Localize(
          `#sitemap_section_account_cart_with_count`,
          _.toLocaleString(_()),
        ),
      })
    : (0, _.jsx)(_, {
        href: `cart/`,
        label: `#sitemap_section_account_cart`,
      });
}
function _() {
  let { data: _ } = _(_.steamid),
    _ = _(),
    _ = `wishlist/`;
  return (
    _ && (_ += _),
    _
      ? (0, _.jsx)(_, {
          href: _,
          text: _.Localize(
            `#sitemap_section_account_wishlist_with_count`,
            _.toLocaleString(_()),
          ),
        })
      : (0, _.jsx)(_, {
          href: _,
          label: `#sitemap_section_account_wishlist`,
        })
  );
}
function _() {
  return (0, _.jsx)(_, {
    href: `${_() ?? `my`}followedgames`,
    label: `#sitemap_section_account_followed_games`,
  });
}
function _(_) {
  let { itemid: _, label: _ } = _,
    { data: _ } = _(_);
  return !_ || !_.visible
    ? null
    : (0, _.jsx)(_, {
        href: _.store_url_path,
        label: _,
      });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `charts_and_lists`,
    title: _.Localize(`#sitemap_section_chartsandlists`),
    children: [
      (0, _.jsx)(_, {
        href: `charts/topselling/${_.country_code}`,
        label: `#sitemap_section_chartsandlists_top_sellers`,
      }),
      (0, _.jsx)(_, {
        href: `charts/mostplayed/`,
        label: `#sitemap_section_chartsandlists_most_played`,
      }),
      (0, _.jsx)(_, {
        href: `explore/new`,
        label: `#sitemap_section_chartsandlists_new_releases`,
      }),
      (0, _.jsx)(_, {
        href: `explore/upcoming`,
        label: `#sitemap_section_chartsandlists_upcoming_releases`,
      }),
      (0, _.jsx)(_, {
        handle: `freetoplay`,
      }),
      (0, _.jsx)(_, {
        href: `charts/`,
        label: `#sitemap_section_chartsandlists_steam_charts`,
      }),
      (0, _.jsx)(_, {
        href: `specials/`,
        label: `#sitemap_section_chartsandlists_on_sale_now`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `recommendations`,
    title: _.Localize(`#sitemap_section_recommendations`),
    children: [
      (0, _.jsx)(_, {
        href: `explore/next/0`,
        label: `#sitemap_section_recommendations_discovery_queue`,
      }),
      (0, _.jsx)(_, {
        href: `explore/next/3`,
        label: `#sitemap_section_recommendations_new_releases_queue`,
      }),
      (0, _.jsx)(_, {
        href: `communityrecommendations/`,
        label: `#sitemap_section_recommendations_community_recommendations`,
      }),
      (0, _.jsx)(_, {
        href: `recommender/`,
        label: `#sitemap_section_recommendations_interactive_recommender`,
      }),
      (0, _.jsx)(_, {
        href: `recommended/friendactivity/`,
        label: `#sitemap_section_recommendations_popular_among_friends`,
      }),
      (0, _.jsx)(_, {
        href: `curators/`,
        label: `#sitemap_section_recommendations_steam_curators`,
      }),
      (0, _.jsx)(_, {
        href: `dlcforyou/`,
        label: `#sitemap_section_recommendations_dlc_for_you`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `hardware`,
    title: _.Localize(`#sitemap_section_hardware`),
    children: [
      (0, _.jsx)(_, {
        itemid: _,
        label: `#sitemap_section_hardware_steam_deck`,
      }),
      (0, _.jsx)(_, {
        itemid: _,
        label: `#sitemap_section_hardware_steam_deck_dock`,
      }),
      (0, _.jsx)(_, {
        itemid: _,
        label: `#sitemap_section_hardware_vr_hardware`,
      }),
      (0, _.jsx)(_, {
        handle: `greatondeck`,
        label: `#sitemap_section_hardware_great_on_deck`,
      }),
      (0, _.jsx)(_, {
        handle: `vr`,
        label: `#sitemap_section_hardware_vr_games`,
      }),
      (0, _.jsx)(_, {
        handle: `controller`,
        label: `#sitemap_section_hardware_controller_friendly`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `waystoplay`,
    title: _.Localize(`#sitemap_section_waystoplay`),
    children: [
      (0, _.jsx)(_, {
        handle: `controller`,
      }),
      (0, _.jsx)(_, {
        handle: `remoteplay_hub`,
      }),
      (0, _.jsx)(_, {
        handle: `vr`,
      }),
      (0, _.jsx)(_, {
        handle: `greatondeck`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_coop`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_lan`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_local_party`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_mmo`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_online_competitive`,
      }),
      (0, _.jsx)(_, {
        handle: `singleplayer`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `newsandupdates`,
    title: _.Localize(`#sitemap_section_newsupdates`),
    children: [
      (0, _.jsx)(_, {
        href: `news/`,
        label: `#sitemap_section_newsupdates_recently_updated`,
      }),
      (0, _.jsx)(_, {
        href: `news/`,
        label: `#sitemap_section_newsupdates_your_recently_updated`,
      }),
      (0, _.jsx)(_, {
        href: `news/?upcoming=1`,
        label: `#sitemap_section_newsupdates_your_upcoming_events`,
      }),
      (0, _.jsx)(_, {
        href: `news/collection/featured/`,
        label: `#sitemap_section_newsupdates_featured_news`,
      }),
      (0, _.jsx)(_, {
        href: `news/collection/steam/`,
        label: `#sitemap_section_newsupdates_steam_official_news`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `promosandevents`,
    title: _.Localize(`#sitemap_section_promosandevents`),
    children: [
      (0, _.jsx)(_, {
        href: `specials/`,
        label: `#sitemap_section_promosandevents_special_offers`,
      }),
      (0, _.jsx)(_, {
        href: `specials/`,
        label: `#sitemap_section_promosandevents_sale_events`,
      }),
      (0, _.jsx)(_, {
        href: `yearinreview/`,
        label: `#sitemap_section_promosandevents_steam_replay`,
      }),
      (0, _.jsx)(_, {
        href: `sale/nextfest/`,
        label: `#sitemap_section_promosandevents_steam_next_fest`,
      }),
      (0, _.jsx)(_, {
        href: `steamawards/archive`,
        label: `#sitemap_section_promosandevents_steam_awards`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    _: `specialsections`,
    title: _.Localize(`#sitemap_section_specialsections`),
    children: [
      (0, _.jsx)(_, {
        handle: `demos`,
      }),
      (0, _.jsx)(_, {
        handle: `dlcforyou`,
      }),
      (0, _.jsx)(_, {
        handle: `software`,
      }),
      (0, _.jsx)(_, {
        handle: `soundtracks`,
      }),
      (0, _.jsx)(_, {
        handle: `earlyaccess`,
      }),
      (0, _.jsx)(_, {
        handle: `pccafe`,
      }),
      (0, _.jsx)(_, {
        handle: `macos`,
      }),
      (0, _.jsx)(_, {
        handle: `linux`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`section`, {
    className: _,
    _: `newsandupdates`,
    children: [
      (0, _.jsx)(_, {
        href: `points/`,
        label: `#sitemap_pointsshop`,
      }),
      (0, _.jsx)(_, {
        href: `digitalgiftcards/`,
        label: `#sitemap_giftcards`,
      }),
    ],
  });
}
function _() {
  let _ = _.slice(0, 3),
    _ = _[3].groups.find((_) => _.header == `themes`);
  return (0, _.jsxs)(`section`, {
    children: [
      (0, _.jsx)(`h3`, {
        className: _,
        _: `genres`,
        children: _.Localize(`#sitemap_genres`),
      }),
      (0, _.jsxs)(_, {
        children: [
          _.map(({ groups: _ }, _) =>
            (0, _.jsx)(
              _,
              {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      group: _,
                    },
                    _.header,
                  ),
                ),
              },
              _,
            ),
          ),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              group: _,
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { header: _, items: _ } = _.group;
  return (0, _.jsx)(`section`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          handle: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { header: _, items: _ } = _.group;
  return (0, _.jsx)(_, {
    _: `themes`,
    title: _.Localize(`#sitemap_themes`),
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          handle: _,
        },
        _,
      ),
    ),
  });
}
export { _ as route };
