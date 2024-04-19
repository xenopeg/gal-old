import { pbkdf2, randomBytes, timingSafeEqual } from "crypto";

async function getHash(password: string, salt: string, iterations: number) {
  return new Promise((res, rej) => {
    pbkdf2(password, salt, iterations, 64, "sha512", (err, derivedKey) => {
      if (err) rej(err);
      res(derivedKey.toString("hex")); // '3745e48...08d59ae'
    });
  });
}

interface User {
  email: string;
  salt: string;
  iterations: number;
  hash: string;
}

interface UserSession {
  email: string;
  token: string;
}

interface FakeDB {
  users: User[];
  userSessions: UserSession[];
}

const fakeDB: FakeDB = {
  users: [],
  userSessions: [],
};

export async function registerUser(email: string, password: string) {
  if (fakeDB.users.find((u) => u.email === email)) {
    return false;
  }

  const salt = "saltyboie:" + randomBytes(128).toString("base64");
  const iterations = 10000;
  try {
    const hash = (await getHash(password, salt, iterations)) as string;
    const user: User = {
      email,
      salt,
      iterations,
      hash,
    };
    fakeDB.users.push(user);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function authUser(email: string, password: string) {
  const user = fakeDB.users.find((u) => u.email === email);
  if (!user) {
    return false;
  }
  
  const canAuth = user.hash === await getHash(password, user.salt, user.iterations);
  if(!canAuth){
    return false;
  }

  const session:UserSession = {
    email: email,
    token: randomBytes(256).toString('base64')
  }

  fakeDB.userSessions.push(session);

  return session.token;
}
