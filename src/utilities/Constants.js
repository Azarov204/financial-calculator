export const URL_HOME = "/";
export const URL_ABOUT = "/about";

// calculators
export const URL_CALCULATOR_SELECT = "/calculators";
export const URL_RENT_VS_MORTGAGE = "/calculators/rent-vs-mortgage";
export const URL_COMPOUND_INTEREST = "/calculators/compound-interest";

// time options
export const INVESTMENT_TIME_OPTIONS = ["Weekly", "Bi-Weekly", "Monthly", "Quarterly", "Yearly"];
export const COMPOUND_TIME_OPTIONS = ["Monthly", "Quarterly", "Semi-Annually", "Yearly"];
export const RESULT_TIME_OPTIONS = ["Monthly", "Yearly"];


export function paymentsPerYear(selection) {
  if (selection.localeCompare("weekly")) {
    return 52;
  } else if (selection.localeCompare("bi-weekly")) {
    return 26;
  } else if (selection.localeCompare("monthly")) {
    return 12;
  }
  return undefined;
}