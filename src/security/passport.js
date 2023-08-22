import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { verifyToken } from './keys/verifytoken.js';

const configurePassport = () => {passport.use(new BearerStrategy(
    async (token, done) => {
      const validation = await verifyToken(token);
      return done(null, validation.valid ? validation.user : false);
    }
  ));
  return passport;
};
export default configurePassport;