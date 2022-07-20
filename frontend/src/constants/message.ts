import { GROUP_RULE } from './rule';

const GUIDE_MESSAGE = {
  DELETE: {
    CONFIRM_REQUEST: '정말로 삭제하실 건가요? 이 작업은 돌이킬 수 없어요 🥺',
    SUCCESS_REQUEST: '모임을 성공적으로 삭제했어요.',
  },
};

const ERROR_MESSAGE = {
  CREATE: {
    NAME: `이름의 글자 수는 ${GROUP_RULE.NAME.MIN_LENGTH}자에서 ${GROUP_RULE.NAME.MAX_LENGTH}자 사이여야 해요.`,
    CATEGORY: '카테고리는 꼭 선택해 주세요.',
    DURATION: '날짜가 잘못 입력되었어요.',
    DEADLINE: '마감 날짜가 잘못 입력되었어요.',
    LOCATION: `장소는 ${GROUP_RULE.LOCATION.MAX_LENGTH}자 이내여야 해요.`,
    DESCRIPTION: `설명은 ${GROUP_RULE.DESCRIPTION.MAX_LENGTH}자 이내여야 해요.`,
    FAILURE_REQUEST:
      '모임을 생성하는데 에러가 발생했어요. 관리자에게 문의 부탁드립니다 🙇‍♂️🙇‍♀️',
  },
  DELETE: {
    FAILURE_REQUEST:
      '모임을 삭제하는데 에러가 발생했어요. 관리자에게 문의 부탁드립니다 🙇‍♂️🙇‍♀️',
  },
};

export { GUIDE_MESSAGE, ERROR_MESSAGE };
