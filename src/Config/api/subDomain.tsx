export const users = '/users';

export const projects = '/projects';

export const storiesProject = (id: string) => {
  return `/projects/${id}/stories`;
};

export const stories = (id: string) => {
  return `/stories/${id}`;
};
