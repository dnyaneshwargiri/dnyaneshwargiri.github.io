export type MenuOptions = {
  value: string;
  route: string;
  svgSrc: string;
};
export type FooterData = {
  title: string;
  subTitle: string;
  socials: Socials[];
  contact: Contact;
};
type Contact = {
  address: string;
  linkedIn: string;
};
type Socials = {
  key: string;
  value: string;
  svgIcon: string;
};
export type Experience = {
  jobRole: string;
  tenure: string;
  company: string;
  location: string;
  jobDescription: string;
  media?: unknown;
};
