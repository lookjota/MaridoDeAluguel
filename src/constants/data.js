import images from './images';

const wines = [
  {
    title: 'Elétrica',
    price: '',
    tags: 'Instalacoes em geral',
  },
  {
    title: 'Pintura',
    price: '',
    tags: 'Impermeabilizacoes',
  },
  {
    title: 'Bombeiro Hidráulico',
    price: '',
    tags: 'encanador e desentupimento',
  },
  {
    title: 'Montador de Moveis',
    price: '',
    tags: 'Desmontamos e montamos tudo na sua casa',
  },
  // {
  //   title: 'Irish Guinness',
  //   price: '$26',
  //   tags: 'IE | 750 ml',
  // },
];

const cocktails = [
  {
    title: 'Instalação de Drywall',
    price: '',
    tags: 'Ideal para Construção e Reforma.',
  },
  {
    title: "Piso Flutuante",
    price: '',
    tags: 'Pisos Laminados em Diferentes Cores e Modelos. ',
  },
  {
    title: 'Forro de PVC',
    price: '',
    tags: 'com acabamento, branco e colorido',
  },
  {
    title: 'Pedreiro',
    price: '',
    tags: 'Pequenas e Grandes Reformas',
  },
  // {
  //   title: 'Negroni',
  //   price: '$26',
  //   tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  // },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
