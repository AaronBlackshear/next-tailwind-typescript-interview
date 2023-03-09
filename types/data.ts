import { Nullable } from "./shared";

export type Data = {
  id: number;
  covered: boolean;
  first_name: string;
  last_name: string;
  preferred_name: string;
  is_subscriber: boolean;
  insurance: Nullable<"primary" | "secondary">;
  insurance_id: Nullable<string>;
}

export const data: Data[] = [
  {
    id: 0,
    covered: true,
    first_name: "Jeromeakwdvbakjwbdkawbdkawdklaugfokuahdflioajhwdoighaowdlalwdgaluwdgboiawgdoaiw",
    last_name: "Bell",
    preferred_name: "Rome",
    is_subscriber: true,
    insurance: "primary",
    insurance_id: null
  },
  {
    id: 1,
    covered: true,
    first_name: "Stacy",
    last_name: "Bell",
    preferred_name: "Stacy",
    is_subscriber: false,
    insurance: "primary",
    insurance_id: null
  },
  {
    id: 2,
    covered: false,
    first_name: "Rebecca",
    last_name: "Bell",
    preferred_name: "Becca",
    is_subscriber: false,
    insurance: null,
    insurance_id: null
  }
]