import development from './@development';
import staging from './@staging';
import production from './@production';
import env from './env';

const envs = {
  development,
  staging,
  production,
};

export default envs[env];
