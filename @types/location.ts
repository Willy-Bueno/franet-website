export interface Link {
  text: string;
  url: string;
  icon?: string;
}

export interface Announcer {
  text: string;
  links: Array<Link>;
}

export interface Feature {
  heading: string;
  subheading: string;
  icon: string;
}

export interface Button {
  text: string;
  url: string;
}

export interface Plan {
  id: string;
  slug: string;
  speed: number;
  type: string;
  price: number;
  resources: Array<string>;
  button: Button;
}

export interface Combo {
  items: Array<string>
  text: string
  button: Button
}

export interface Services {
  title: string
  text: string
  button: Button
}

export interface Mobile {
  resources: Array<string>
  android: string
  ios: string
}

export interface Support {
  links: Array<Link>
}

export interface SocialNetwork {
  icon: string
  url: string
}

export interface Session {
  title: string
  links: Array<Link>
}

export interface Footer {
  sessions?: Array<Session>
  socialNetworks?: Array<SocialNetwork>
  copy: string
  data: string
}

export interface TvCTA {
  url: string
}

export interface TvResources {
  title: string
  description: string
}

export interface TvDetails {
  title: string
  description: string
}

export interface MovelCTA {
  url: string
}

export interface MovelResources {
  title: string
  description: string
}

export interface Location {
  id: string;
  city: string;
  state: string;
  active: boolean;
  announcer: Announcer;
  features?: Array<Feature>;
  plans?: Array<Plan>;
  combo?: Combo
  services?: Array<Services>
  mobile?: Mobile
  support?: Support
  tvCTA?: TvCTA
  tvResources?: Array<TvResources>
  tvDetails?: Array<TvDetails>
  movelCTA?: MovelCTA
  movelResources?: Array<MovelResources>
  footer: Footer
}
