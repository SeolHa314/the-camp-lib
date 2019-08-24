import * as rp from 'request-promise';

import { Cookie } from '../models';
import { buildRequestUrl, resolveSessionCookies, addLog } from '../utils';

/**
 * 더 캠프에 로그인해 세션 쿠키를 얻는다.
 * @param id - 계정 아이디
 * @param password - 계정 비밀번호
 */
async function login(id: string, password: string) {
  let result: Cookie;
  const options = {
    uri: buildRequestUrl('common/login.do'),
    method: 'POST',
    json: true,
    body: {
      'user-id': id,
      'user-pwd': password,
      subsType: 1,
    },
  };

  await rp.post(options, (err, res, body) => {
    if (err) {
      throw new Error(err);
    }

    addLog('login', `${res.statusCode} ${res.statusMessage}`);

    if (res.statusCode === 200 && body.resultCode !== 200) {
      throw new Error(body.resultMessage || 'Unknown error.');
    }

    result = resolveSessionCookies(res.headers['set-cookie']);
  });

  return result;
}

export { login };
