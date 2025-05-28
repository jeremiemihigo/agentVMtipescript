export interface IAction {
  codeAgent: string;
  sat: string;
  mtd_last_month: string;
  mtd_this_month: string;
  gap_visit_percent: string;
  object_visited: string;
  object_visited_by_other: string;
  no_visited_object: string;
  tot_track: string;
  vm_target_in_mtd: string;
  percent_visit_vs_target: string;
  current_visit_target: string;
  notes_on_visits: string;
  percent_realisation_cash: string;
  categorisable: string;
  categorie: string;
  a_tracker_pour_completer: string;
  rien_payer: string;
  eteint_aujourdhui: string;
  no_action_potentiel_default: string;
  action_potentiel_default: string;
  object_potentiel_default: string;
  payed_after_visit: string;
  payed_before_visit: string;
  percent_realisation_potentiel_default: string;
}
export const table_keys = [
  "mtd_last_month",
  "mtd_this_month",
  "gap_visit_percent",
  "object_visited",
  "object_visited_by_other",
  "no_visited_object",
  "tot_track",
  "vm_target_in_mtd",
  "percent_visit_vs_target",
  "current_visit_target",
  "notes_on_visits",
  "percent_realisation_cash",
  "categorisable",
  "categorie",
  "a_tracker_pour_completer",
  "rien_payer",
  "eteint_aujourdhui",
  "no_action_potentiel_default",
  "action_potentiel_default",
  "object_potentiel_default",
  "payed_after_visit",
  "payed_before_visit",
  "percent_realisation_potentiel_default",
];
