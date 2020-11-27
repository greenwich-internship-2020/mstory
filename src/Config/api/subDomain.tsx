export const users = '/users';

export const projects = '/projects';

export const stories = (id: string) => {
  return `/projects/${id}/stories`;
};
