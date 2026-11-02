/**
 * Shared types for the site configuration and data files.
 */

/** Keys of the icons defined in `src/components/icons/IconSprite.astro`. */
export type IconName =
  | 'arrow'
  | 'asterisk'
  | 'behance'
  | 'chart'
  | 'check'
  | 'close'
  | 'code'
  | 'device'
  | 'dribbble'
  | 'facebook'
  | 'flag'
  | 'github'
  | 'grid'
  | 'instagram'
  | 'layers'
  | 'linkedin'
  | 'logo'
  | 'mail'
  | 'menu'
  | 'motion'
  | 'pen'
  | 'phone'
  | 'pin'
  | 'play'
  | 'plus'
  | 'quote'
  | 'spark'
  | 'star'
  | 'type'
  | 'up';

export interface NavItem {
  /** Visible link text. */
  label: string;
  /** Absolute, site-relative path (keep the trailing slash). */
  href: string;
  /** Optional same-page anchor used on the homepage only. */
  anchor?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface LogoImage {
  src: string;
  width: number;
  height: number;
}

export interface SiteConfig {
  /** Short brand name used in `<title>`, metadata and the logo's alt text. */
  name: string;
  /**
   * Brand logos. `header` is drawn on the light header, `footer` on the dark
   * footer. Give the files' real pixel dimensions.
   */
  logo: { header: LogoImage; footer: LogoImage };
  /** Full name of the author / owner. */
  author: string;
  /** Role line shown under the hero and used in structured data. */
  role: string;
  /** Default `<title>` for the homepage. */
  title: string;
  /** Default meta description. */
  description: string;
  /** Canonical origin. Sourced from `site` in `astro.config.mjs`. */
  url: string;
  /** Default Open Graph image, relative to the site root. */
  ogImage: string;
  /** BCP-47 language tag used on `<html lang>`. */
  locale: string;
  /** `theme-color` meta value. */
  themeColor: string;
  contact: {
    email: string;
    phone: string;
    /** Machine-readable phone for `tel:` links. */
    phoneHref: string;
    location: string;
    /** Short availability line shown on the hero card and CTA. */
    availability: string;
    /**
     * Where the contact form posts.
     */
    formEndpoint: string;
  };
  social: SocialLink[];
  /** Footer blurb. */
  about: string;
  /** Legal owner shown in the footer copyright line. */
  copyrightHolder: string;
  /** Search engine verification tokens for Google, Bing, Shenma, Baidu */
  verification?: {
    google?: string;
    bing?: string;
    shenma?: string;
    baidu?: string;
  };
}

export interface Client {
  name: string;
  shape: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
}

export interface ProcessStep {
  stage: string;
  title: string;
  body: string;
  timing: string;
}

export interface Award {
  year: string;
  title: string;
  detail: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolkitItem {
  icon: IconName;
  title: string;
  detail: string;
}
