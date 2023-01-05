// data is based on RANDOMUSER.ME (https://randomuser.me/)
export const USERS = [
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/women/10.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/10.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
    },
    name: { title: 'Madame', first: 'Jolanda', last: 'Guerin' },
    email: 'jolanda.guerin@example.com',
    uuid: '765a40cf-fe54-4213-af74-0f081c9193f0',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/men/3.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/3.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
    },
    name: { title: 'Mr', first: 'Thomas', last: 'Morris' },
    email: 'thomas.morris@example.com',
    uuid: 'c272d695-9e38-4ac4-83d4-74eafc0f453b',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/men/39.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/39.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/39.jpg',
    },
    name: { title: 'Mr', first: 'Ruben', last: 'Wheeler' },
    email: 'ruben.wheeler@example.com',
    uuid: '9b22a74b-ea04-496e-9847-83f0f7f43e3e',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/women/86.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/86.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg',
    },
    name: { title: 'Madame', first: 'Larissa', last: 'Dumont' },
    email: 'larissa.dumont@example.com',
    uuid: '1361639f-d16e-4802-998d-4447aa31c4c7',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/women/66.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/66.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/66.jpg',
    },
    name: { title: 'Ms', first: 'Melina', last: 'Almeida' },
    email: 'melina.almeida@example.com',
    uuid: 'c6cbb3dc-d829-49c4-bb8e-f939b208df85',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/women/44.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/44.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/44.jpg',
    },
    name: { title: 'Miss', first: 'Prathiksha', last: 'Dawangave' },
    email: 'prathiksha.dawangave@example.com',
    uuid: 'fcd963bf-2662-427e-8269-45fba17907b7',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/men/83.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/83.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/83.jpg',
    },
    name: { title: 'Mr', first: 'Hans-Herbert', last: 'Duda' },
    email: 'hans-herbert.duda@example.com',
    uuid: '89ebc7a1-a71e-4386-a89d-f91b685da8ee',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/men/79.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/79.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/79.jpg',
    },
    name: { title: 'Mr', first: 'Fatih', last: 'Babacan' },
    email: 'fatih.babacan@example.com',
    uuid: '2d4c35b1-4ecc-4f6d-ba4f-2846261e274a',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/men/79.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/79.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/79.jpg',
    },
    name: { title: 'Mr', first: 'Felix', last: 'Singh' },
    email: 'felix.singh@example.com',
    uuid: 'af264a12-ce37-4ee9-a065-ae0e674a73e9',
  },
  {
    picture: {
      large: 'https://randomuser.me/api/portraits/women/86.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/86.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg',
    },
    name: { title: 'Ms', first: 'Elisabeth', last: 'Paulus' },
    email: 'elisabeth.paulus@example.com',
    uuid: '2f838201-757e-4860-b30b-f96c3deb4a37',
  },
];

export type User = typeof USERS[0];
