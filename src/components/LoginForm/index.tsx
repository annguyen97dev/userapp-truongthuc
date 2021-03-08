import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LoginForm.module.scss';
import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router'

type Inputs = {
  text: string;
  textRequired: string;
};

interface LoginInputs {
  username: Inputs;
  password: Inputs;
}

function index(props: any) {
  const { register, handleSubmit, watch, errors } = useForm<LoginInputs>();
  // const { loading, setLoading } = useState();
  const router = useRouter()

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => { };
  }, []);

  const _Submit = async (data: {}) => {
    console.log('LoginForm _Submit data', data);

    // setLoading(true);

    props?.onSubmit(data);

  };

  const moveToSignUp = (e) => {
    e.preventDefault()
    router.push('/account/register');
  };

  return (
    <>
      <div className={styles.container}>

        <div className={styles.wrapBox}>
          <div className={styles.imgLogin}><img src="/img/symbol-login.png" alt="" /></div>
          <div className={styles.wrapForm}>


            <form onSubmit={handleSubmit(_Submit)} className={`${styles.loginForm}`}>
              <div className={styles.loginFormImg}><img src="/img/icon-mona.png" alt="" /></div>
              <h6 className={styles.title}>Đăng nhập</h6>

              <div className={styles.boxSocial}>
                <ul>
                  <li><a href=""><img src="/img/google.png" alt="" /></a></li>
                  <li><a href=""><img src="/img/facebook.png" alt="" /></a></li>
                  <li><a href=""><img src="/img/twitter.png" alt="" /></a> </li>
                </ul>
              </div>

              <div className={styles.noteLogin}>
                <p>Hoặc đăng nhập với tên đăng nhập</p>
              </div>

              <input name="csrfToken" type="hidden" defaultValue={props?.csrfToken} />
              <label className={styles.fcontrol}>Tên đăng nhập</label>

              <input
                name="username"
                defaultValue=""
                ref={register({ required: true })}
                placeholder="Enter user name"
              />
              {errors.username && <span>Hãy điền tên đăng nhập</span>}

              <label className={styles.fcontrol}>Mật khẩu</label>
              <input
                name="password"
                defaultValue=""
                ref={register({ required: true })}
                placeholder="Enter password"
              />
              {errors.password && <span>Hãy điền mật khẩu</span>}

              <div className={styles.checkbox}>
                <input type="checkbox" id="check" name="check" value="" />
                <label for="check">
                  <span> </span>Nhớ mật khẩu
                </label>
              </div>

              <div className={styles.forgetPass}>
                <a>Quên mật khẩu?</a>
              </div>

              <input type="submit" value={'Đăng nhập'} />
              <div className={styles.boxSignup}>
                Bạn chưa có tài khoản? <a href="" onClick={moveToSignUp}>Đăng kí</a>
              </div>
              {
                loading && <div className={styles.loading}></div>
              }
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
