import { SITE } from '../config/site';

export const agentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE.url}/#agency`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/brand/magda-logo.png`,
  image: `${SITE.url}/og-default.jpg`,
  description: SITE.description,
  foundingDate: String(SITE.founded),
  telephone: '+556137717661',
  email: SITE.email,
  sameAs: [SITE.instagram.url],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Distrito Federal' },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+5561999036449', availableLanguage: 'pt-BR' },
  ],
  openingHoursSpecification: SITE.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, SITE.url).href,
    })),
  };
}
