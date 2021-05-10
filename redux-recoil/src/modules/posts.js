const FETCHING_DATA = 'posts/FETCHING_DATA';

export const fetchingSuccess = () => ({ type: FETCHING_DATA });

const inirialState = {
  text: '포스트 데이터를 불러와 주세요!!!',
};

function posts(state = inirialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        text: '포스트 데이터 페칭이 완료되었습니다!!!',
      };
    default:
      return state;
  }
}

export default posts;
