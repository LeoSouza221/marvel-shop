
import md5 from 'js-md5';

const paramsSearch = () => {
  const PUBLIC_KEY = '';
  const PRIVATE_KEY = '';

  const timestamp = Number(new Date());
  const hash = md5.create();

  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const params = {
    apikey: PUBLIC_KEY,
    ts: timestamp,
    hash: hash.hex(),
  };

  return params;
};

export default paramsSearch;