export const columnToCamel = (s: string) =>
  s.toLowerCase().replace(/_(.)/g, (m) => m[1].toUpperCase());

export const camelToColumn = (s: string) =>
  s.replace(/[A-Z]/g, (m) => '_' + m[0]).toUpperCase();
