export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterSettings {
  links: FooterLink[];
  copyright: string;
  icp: string;
  customHtml: string;
}

export interface FooterContentProps {
  initialSettings: FooterSettings;
} 