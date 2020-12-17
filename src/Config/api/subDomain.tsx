export const users = '/users';

export const projects = '/projects';

export const signup = '/ap/signup';

export const login = '/ap/login';

export const logout = '/ap/logout';

export const storiesProject = (id: string) => {
  return `/projects/${id}/stories`;
};

export const stories = (id: string) => {
  return `/stories/${id}`;
};

export const membersProject = (id: string) => {
  return `/projects/${id}/members`;
};

export const members = (id: string) => {
  return `/members/${id}`;
};
