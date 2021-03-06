import DateTime from "models/DateTime";
import { BarMenu } from "./BarMenu";
import EIntBoolean from "./enums/EIntBoolean";
import EOfferType from "./enums/EOfferType";
import { Venue } from "./Venue";

export type Offer = {
  id: number;
  establishment_id?: number;
  offer_type_id: EOfferType;
  title: string;
  sub_title?: string;
  image?: string;
  description?: string;
  name?: string;
  start_date?: string;
  end_date?: string;
  is_push?: number;
  start_time?: string;
  location?: string;
  end_time?: string;
  status: EIntBoolean;
  is_notified: EIntBoolean;
  distance?: number;
  created_at: DateTime;
  updated_at: DateTime;
  deleted_at?: DateTime;
  is_date_show: boolean;
  is_scheduler: EIntBoolean;
  is_monday: EIntBoolean;
  is_tuesday: EIntBoolean;
  is_wednesday: EIntBoolean;
  is_thursday: EIntBoolean;
  is_friday: EIntBoolean;
  is_saturday: EIntBoolean;
  is_sunday: EIntBoolean;
  notification_time?: string;
  should_show_time?: boolean;
  image_url?: string;
  status_text?: string;
  offer_type?: OfferType;
  establishment?: Venue;
  establishments?: Venue;
  start_date_time?: string;
  end_date_time?: string;
  can_share?: boolean;
  is_user_favourite?: boolean;
  is_voucher?: boolean;
  shared_id?: string;
  links: Links[];
  user_voucher_id: number;
  is_menu_associated: boolean;
  menu_id: number;
  menu: BarMenu;
};

type OfferType = {
  id: number;
  title: string;
  created_at: DateTime;
  updated_at: DateTime;
  deleted_at: string;
};

export type Links = {
  link: string;
  link_text: string;
};
