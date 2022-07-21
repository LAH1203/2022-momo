import { useRecoilState } from 'recoil';

import { requestLogin } from 'apis/request/auth';
import Modal from 'components/Modal';
import { ERROR_MESSAGE, GUIDE_MESSAGE } from 'constants/message';
import useInput from 'hooks/useInput';
import { modalState } from 'store/states';

import * as S from './index.styled';

function Login() {
  const { value: email, setValue: setEmail } = useInput('');
  const { value: password, setValue: setPassword } = useInput('');
  const [modalFlag, setModalFlag] = useRecoilState(modalState);

  const setOffModal = () => {
    setModalFlag('off');
  };

  // TODO: 비제어 컴포넌트로 수정하기
  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accountData = {
      email,
      password,
    };

    requestLogin(accountData)
      .then(() => {
        alert(GUIDE_MESSAGE.AUTH.LOGIN_SUCCESS);
        setOffModal();
      })
      .catch(() => {
        alert(ERROR_MESSAGE.AUTH.FAILURE_REQUEST);
      });
  };

  return (
    <Modal modalState={modalFlag === 'login'} setOffModal={setOffModal}>
      <S.Form onSubmit={submitLogin}>
        <S.Title>로그인</S.Title>
        <S.InputContainer>
          <S.Label>
            이메일
            <S.Input
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="email"
              required
            />
          </S.Label>
          <S.Label>
            비밀번호
            <S.Input
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="******"
              required
            />
          </S.Label>
        </S.InputContainer>
        <S.Button type="submit">로그인</S.Button>
      </S.Form>
    </Modal>
  );
}

export default Login;
