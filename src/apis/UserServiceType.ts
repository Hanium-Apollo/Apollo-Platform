export interface UserInfo {
  id: string;
  login: string;
  username: string;
  email: string;
  avatar_url: string;
}

export interface SignUpUser {
  awsAccountID: string;
  accessKey: string;
  secretKey: string;
  region: string;
  githubOAuthToken: string;
}
