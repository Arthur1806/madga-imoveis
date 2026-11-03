import type { ImageMetadata } from 'astro';
import raw from '../data/imoveis.json';

export type Purpose = 'venda' | 'aluguel';
export type PropertyType = 'casa' | 'apartamento' | 'comercial' | 'lote';
export type Block = { type: 'p'; text: string } | { type: 'h'; text: string } | { type: 'ul'; items: string[] };

export interface Imovel {
  slug: string;
  title: string;
  purpose: Purpose;
  type: PropertyType;
  neighborhood: string;
  city: string;
  price: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  parking: number | null;
  area: number | null;
  description: Block[];
  features: string[];
  photos: string[];
  totalPhotosOnOldSite: number;
  featured: boolean;
  published: boolean;
}

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/imoveis/*/*.jpg', { eager: true });

export function getPhotos(imovel: Imovel): ImageMetadata[] {
  return imovel.photos
    .map((file) => images[`/src/assets/imoveis/${imovel.slug}/${file}`]?.default)
    .filter((img): img is ImageMetadata => Boolean(img));
}

export function getImoveis(): Imovel[] {
  return (raw as Imovel[]).filter((i) => i.published);
}

export function getFeatured(limit = 6): Imovel[] {
  return getImoveis().filter((i) => i.featured).slice(0, limit);
}

export const TYPE_LABEL: Record<PropertyType, string> = {
  casa: 'Casa',
  apartamento: 'Apartamento',
  comercial: 'Comercial',
  lote: 'Lote',
};

export const PURPOSE_LABEL: Record<Purpose, string> = { venda: 'Venda', aluguel: 'Aluguel' };

export function formatPrice(imovel: Pick<Imovel, 'price' | 'purpose'>): string {
  if (!imovel.price) return 'Valor sob consulta';
  const v = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(imovel.price);
  return imovel.purpose === 'aluguel' ? `${v}/mês` : v;
}

export function specs(imovel: Imovel): { label: string; value: string }[] {
  const out: { label: string; value: string }[] = [];
  if (imovel.area) out.push({ label: 'Área', value: `${imovel.area.toLocaleString('pt-BR')} m²` });
  if (imovel.bedrooms) out.push({ label: imovel.bedrooms === 1 ? 'Quarto' : 'Quartos', value: String(imovel.bedrooms) });
  if (imovel.bathrooms) out.push({ label: imovel.bathrooms === 1 ? 'Banheiro' : 'Banheiros', value: String(imovel.bathrooms) });
  if (imovel.parking) out.push({ label: imovel.parking === 1 ? 'Vaga' : 'Vagas', value: String(imovel.parking) });
  return out;
}

export function plainDescription(imovel: Imovel, max = 155): string {
  const first = imovel.description.find((b) => b.type === 'p');
  const text = first && first.type === 'p' ? first.text : imovel.title;
  return text.length > max ? text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…' : text;
}

export function related(imovel: Imovel, limit = 3): Imovel[] {
  return getImoveis()
    .filter((i) => i.slug !== imovel.slug)
    .map((i) => ({
      i,
      score: (i.purpose === imovel.purpose ? 2 : 0) + (i.neighborhood === imovel.neighborhood ? 2 : 0) + (i.type === imovel.type ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.i);
}
