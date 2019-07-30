// Merchant Category Codes (MCC) for US
// Stripe requires this info to comply with US legistlation
// This data is extracted from https://stripe.com/docs/issuing/authorizations/categories

// prettier-ignore
const merchantCategoryCodes = [
  
  { "mcc": "5300", "label": "Record Label", "category": "record_label" },
  { "mcc": "5698", "label": "Talent Agency", "category": "talent_agency" },
  { "mcc": "4829", "label": "Managing Company", "category": "managing_company" },
  // { "mcc": "5631", "label": "Womens Accessory and Specialty Shops", "category": "womens_accessory_and_specialty_shops" },
  // { "mcc": "5621", "label": "Womens Ready-To-Wear Stores", "category": "womens_ready_to_wear_stores" },
  // { "mcc": "5935", "label": "Wrecking and Salvage Yards", "category": "wrecking_and_salvage_yards" },
];

export default merchantCategoryCodes;
