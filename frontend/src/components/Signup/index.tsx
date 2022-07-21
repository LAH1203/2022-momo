import { useRecoilState } from 'recoil';

import { requestSignup } from 'apis/request/member';
import Modal from 'components/Modal';
import { ERROR_MESSAGE, GUIDE_MESSAGE } from 'constants/message';
import useInput from 'hooks/useInput';
import { modalState } from 'store/states';

import * as S from './index.styled';

function Signup() {
  const [isModalOpen, setModalState] = useRecoilState(modalState);
  const { value: email, setValue: setEmail } = useInput('');
  const { value: nickname, setValue: setNickname } = useInput('');
  const { value: password, setValue: setPassword } = useInput('');
  const { value: confirmPassword, setValue: setConfirmPassword } = useInput('');

  const setOffModal = () => {
    setModalState('off');
  };

  const 회원가입 = (e: React.FormEvent) => {
    e.preventDefault();

    requestSignup({ email, password, nickname })
      .then(() => {
        alert(GUIDE_MESSAGE.MEMBER.SIGNUP_SUCCESS);
        setOffModal();
      })
      .catch(() => {
        alert(ERROR_MESSAGE.MEMBER.FAILURE_REQUEST);
      });
  };

  return (
    <Modal modalState={isModalOpen === 'signup'} setOffModal={setOffModal}>
      <S.Form onSubmit={회원가입}>
        <S.Title>회원가입</S.Title>
        <S.InputContainer>
          <S.Label>
            이메일
            <S.Input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={setEmail}
              required
            />
          </S.Label>
          <S.Label>
            닉네임
            <S.Input
              type="text"
              placeholder="사용하실 닉네임을 입력해주세요."
              value={nickname}
              onChange={setNickname}
              required
            />
          </S.Label>
          <S.Label>
            비밀번호
            <S.Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={setPassword}
              required
            />
          </S.Label>
          <S.Label>
            비밀번호 확인
            <S.Input
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              value={confirmPassword}
              onChange={setConfirmPassword}
              required
            />
          </S.Label>
        </S.InputContainer>
        <S.Button type="submit">회원가입</S.Button>
      </S.Form>
    </Modal>
  );
}

export default Signup;
