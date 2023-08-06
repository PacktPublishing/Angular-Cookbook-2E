export interface User {
  "picture": {
    "large": string;
    "medium": string;
    "thumbnail": string;
  },
  "name": { "title": string; "first": string; "last": string; },
  "email": string;
  "uuid": string;
  "dob": {
    "date": string;
  };
}
