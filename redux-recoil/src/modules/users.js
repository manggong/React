const FETCHING_DATA = 'users/FETCHING_DATA';

export const fetchingSuccess = () => ({ type: FETCHING_DATA });

const inirialState = {
  text: '유저 데이터를 불러와 주세요!!!',
};

function users(state = inirialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        text: '유저 데이터 페칭이 완료되었습니다!!!',
      };
    default:
      return state;
  }
}

export default users;
