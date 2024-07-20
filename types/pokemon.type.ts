export interface Pokemon {
  abilities:                Ability[];
  base_experience:          number;
  cries:                    Cries;
  height:                   number;
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Name;
  is_hidden: boolean;
  slot:      number;
}

export interface Name {
  name: string;
  url:  string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Move {
  move:                  Name;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Name;
  version_group:     Name;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Name;
}

export interface Type {
  slot: number;
  type: Name;
}
