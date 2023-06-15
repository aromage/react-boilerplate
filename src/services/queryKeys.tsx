/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const QUERY_KEYS = {
  TEST: "TEST",

  AUTHENTICATE: "AUTHENTICATE",
  REGISTER: "REGISTER",

  USER: "USER",
};

export const QUERY_KEY_FACTORY = (queryKey: keyof typeof QUERY_KEYS) => {
  const all = [QUERY_KEYS[queryKey]] as const;
  const lists = () => [...all, "list"] as const;
  const list = <T,>(params: T) => [...lists(), params] as const;
  const details = () => [...all, "detail"] as const;
  const detail = (id: number | string) => [...details(), id] as const;
  const account = (url: string) => [...details(), url] as const;

  return { all, lists, list, details, detail, account };
};
