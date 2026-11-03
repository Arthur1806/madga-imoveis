// Fonte única dos dados da empresa. Edite aqui para atualizar o site inteiro.
export const SITE = {
  name: 'Magda Imóveis',
  legalName: 'FENIX IMOBILIARIA LTDA',
  cnpj: '30.752.491/0001-98',
  creci: 'CRECI-DF 25284',
  url: 'https://www.magdaimoveis.com',
  founded: 2018,
  tagline: 'Seu imóvel, nosso compromisso.',
  description:
    'Imobiliária no Lago Sul, em Brasília-DF, especializada em imóveis de alto padrão. Compra, venda e locação com atendimento consultivo.',
  email: 'magda.imoveisdf@gmail.com',
  phone: { display: '(61) 3771-7661', href: 'tel:+556137717661' },
  whatsapp: { display: '(61) 9 9903-6449', number: '5561999036449' },
  instagram: { handle: '@magdadamata.imoveis', url: 'https://instagram.com/magdadamata.imoveis' },
  address: {
    street: 'SHIS QI 15, s/n, Lote B — Six Sport Life, Subsolo',
    neighborhood: 'Lago Sul',
    city: 'Brasília',
    state: 'DF',
    postalCode: '71600-700',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=SHIS+QI+15+Lote+B+Lago+Sul+Bras%C3%ADlia+DF+71600-700',
  },
  hours: [
    { days: 'Segunda a sexta', time: '9h às 18h', opens: '09:00', closes: '18:00', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    { days: 'Sábado', time: '9h às 13h', opens: '09:00', closes: '13:00', dayOfWeek: ['Saturday'] },
  ],
  responseTime: 'Um consultor entra em contato em até 2 horas úteis.',
} as const;

// Números mantidos do site atual, por decisão da cliente. Confirme antes de publicar.
// ATENÇÃO: "+25 anos" refere-se à trajetória da Magda no mercado; a empresa foi fundada em 2018.
export const STATS = [
  { value: '+25', label: 'anos de experiência de Magda no mercado imobiliário' },
  { value: '+500', label: 'famílias atendidas' },
  { value: '98%', label: 'índice de satisfação' },
  { value: 'Lago Sul', label: 'sede no coração de Brasília' },
] as const;

export const SERVICES = [
  {
    slug: 'consultoria-imobiliaria',
    title: 'Consultoria imobiliária',
    text: 'Orientação para comprar, vender ou alugar com clareza sobre cada etapa, do primeiro contato à entrega das chaves.',
  },
  {
    slug: 'avaliacao-de-imoveis',
    title: 'Avaliação de imóveis',
    text: 'Análise do seu imóvel para definir um valor coerente com o mercado da região. Solicite sua avaliação gratuita.',
  },
  {
    slug: 'assessoria-juridica',
    title: 'Assessoria jurídica',
    text: 'Suporte na documentação e na segurança jurídica das negociações.',
  },
  {
    slug: 'administracao-de-locacao',
    title: 'Administração de locação',
    text: 'Cuidado com a locação do seu imóvel, para você alugar com tranquilidade.',
  },
] as const;

export const VALUES = [
  { title: 'Confiança', text: 'Construímos relacionamentos sólidos baseados na segurança e no compromisso com nossos clientes. Cada negociação é conduzida com responsabilidade, garantindo tranquilidade em todas as etapas da compra, venda ou locação de imóveis.' },
  { title: 'Transparência', text: 'Acreditamos que a clareza é fundamental para uma boa experiência. Por isso, compartilhamos informações de forma objetiva e honesta, mantendo nossos clientes sempre bem informados durante todo o processo.' },
  { title: 'Credibilidade', text: 'Nossa atuação é pautada pela ética, profissionalismo e resultados. Ao longo do tempo, conquistamos a confiança do mercado e de nossos clientes por meio de um trabalho sério e dedicado.' },
] as const;

export const DIFFERENTIALS = [
  { title: 'Curadoria criteriosa', text: 'Apresentamos imóveis selecionados, alinhados ao que você realmente procura.' },
  { title: 'Atendimento consultivo', text: 'Conversamos para entender seu momento antes de indicar qualquer imóvel.' },
  { title: 'Segurança jurídica', text: 'Atenção à documentação para que a negociação aconteça com tranquilidade.' },
] as const;

export const NEIGHBORHOODS = [
  'Lago Sul',
  'Lago Norte',
  'Park Way',
  'Jardim Botânico',
  'Asa Sul',
  'Asa Norte',
  'Sudoeste',
  'Noroeste',
] as const;

export const DISCLAIMER =
  'Reservamo-nos o direito a possíveis erros de digitação. Valores, metragens e demais informações devem ser confirmados junto à matrícula do imóvel e à Secretaria de Fazenda do DF.';

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV = [
  { href: '/imoveis', label: 'Imóveis' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
] as const;
