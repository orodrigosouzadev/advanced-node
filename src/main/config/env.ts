import * as dotenv from 'dotenv'
dotenv.config()

export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '',
    accessToken: process.env.FB_ACCESS_TOKEN ?? ''
  },
  port: Number(process.env.PORT) ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? ''
}
