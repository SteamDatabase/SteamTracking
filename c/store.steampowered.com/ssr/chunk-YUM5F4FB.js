import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = 1 / 0;
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _.excluded_content_descriptors));
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _.excluded_content_descriptors));
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _.excluded_content_descriptors));
}
function _(_, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, _],
    queryFn: () => _(_, _, _),
    staleTime: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, "MapByID"],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _));
      return new Map(_.map((_) => [_.hubcategoryid, _]));
    },
    staleTime: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, "MapByTagID"],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _)),
        _ = new Map();
      for (let _ of _) _.replaces_tags?.forEach((_) => _.set(_, _));
      return _;
    },
    staleTime: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, "MapByHandle"],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _));
      return new Map(_.map((_) => [_.handle, _]));
    },
    staleTime: _,
  };
}
async function _(_, _, _) {
  let _ = _.Init(_);
  _(_, _), _.Body().set_excluded_content_descriptorids(_.slice());
  let _ = await _.GetContentHubConfig(_, _);
  if (!_.BSuccess())
    throw `Error loading category hub definitions: ${_.GetErrorMessage()}`;
  return _.Body().toObject().hubconfigs || [];
}
var _ = [
  {
    groups: [
      {
        header: "action",
        items: [
          "action_fps",
          "action_tps",
          "hack_and_slash",
          "arcade_rhythm",
          "action_run_jump",
          "shmup",
          "fighting_martial_arts",
        ],
      },
      {
        header: "adventure",
        items: [
          "hidden_object",
          "casual",
          "metroidvania",
          "puzzle_matching",
          "adventure_rpg",
          "visual_novel",
          "story_rich",
        ],
      },
    ],
  },
  {
    groups: [
      {
        header: "rpg",
        items: [
          "rpg_action",
          "rpg_strategy_tactics",
          "rpg_jrpg",
          "rogue_like_rogue_lite",
          "rpg_turn_based",
          "adventure_rpg",
          "rpg_party_based",
        ],
      },
      {
        header: "simulation",
        items: [
          "sim_building_automation",
          "sim_hobby_sim",
          "sim_dating",
          "sim_farming_crafting",
          "sim_space_flight",
          "sim_life",
          "sim_physics_sandbox",
        ],
      },
    ],
  },
  {
    groups: [
      {
        header: "strategy",
        items: [
          "strategy_turn_based",
          "strategy_real_time",
          "tower_defense",
          "strategy_card_board",
          "strategy_cities_settlements",
          "strategy_grand_4x",
          "strategy_military",
        ],
      },
      {
        header: "sports_and_racing",
        items: [
          "sports_sim",
          "racing",
          "racing_sim",
          "sports_fishing_hunting",
          "sports_team",
          "sports_individual",
          "sports",
        ],
      },
    ],
  },
  {
    groups: [
      {
        header: "themes",
        items: [
          "horror",
          "science_fiction",
          "space",
          "exploration_open_world",
          "anime",
          "survival",
          "mystery_detective",
          "adultonly",
        ],
      },
      {
        header: "social_and_players",
        items: [
          "singleplayer",
          "multiplayer",
          "multiplayer_local_party",
          "multiplayer_mmo",
          "multiplayer_lan",
          "multiplayer_coop",
          "multiplayer_online_competitive",
        ],
      },
    ],
  },
];
export { _, _, _, _, _ };
