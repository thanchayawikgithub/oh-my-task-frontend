export const QUERY_KEY = {
  USER: {
    PROFILE: ['user_profile'],
  },
  BOARD: {
    MY_BOARDS: ['my_boards'],
    GET_BY_ID: (id: string) => ['board', id],
  },
};
