export const getToken = (): string | undefined => {
  return localStorage.getItem('token') || undefined;
};

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};
