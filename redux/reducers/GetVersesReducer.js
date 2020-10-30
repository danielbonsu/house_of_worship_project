import { GET_VERSES, REMOVE_VERSES } from '../types';

export const getVersesReducer = (
  state = { verses: [] },
  action
) => {
  switch (action.type) {
    case GET_VERSES:
      return {
        ...state,
        verses: {
          id: action.payload.id,
          verse: action.payload.verse,
        },
      };

    case REMOVE_VERSES:
      return {
        ...state,
        verses: state.verses.filter(
          (verse) => verse !== action.payload
        ),
      };

    default:
      return state;
  }
};
