export type MenuOptions = {
  value: string;
  route: string;
  svgSrc: string;
};
export type FooterData = {
  title: string;
  subTitle: string;
  socials: socials[];
  contact: contact;
};
type contact = {
  address: string;
  linkedIn: string;
};
type socials = {
  key: string;
  value: string;
  svgIcon: string;
};
