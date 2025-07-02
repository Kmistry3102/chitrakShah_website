
export type Territory = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  status: string;
};

export type RealEstateInterest = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
};

export type WhyImHereReason = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
};

export type PortfolioItem = {
  icon: React.ElementType;
  title: string;
  role: string;
  description: string;
  info: string;
  infoType: string;
  details: string;
};

export type Article = {
  image: string;
  title: string;
  //   url: string;
  description: string;
};

export type ConnectOption = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
};

export type AccessLink = {
  icon: React.ElementType;
  label: string;
  url: string;
};

export type RIDCardRow = {
  icon: React.ElementType;
  label: string;
  value: string;
  valueClass: string;
};

export type RIDCardConstants = {
  TITLE: string;
  LEFT: RIDCardRow[];
  RIGHT: RIDCardRow[];
  PORTAL_LABEL: string;
  PORTAL_DESC: string;
};

export type WhoAmIRole = {
  icon: React.ElementType;
  title: string;
  caption: string;
};

export type HeroBadge = {
  icon: React.ElementType;
  label: string;
  value?: string;
};

export type TimelineItem = {
  year: string;
  text: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  link: string;
};
