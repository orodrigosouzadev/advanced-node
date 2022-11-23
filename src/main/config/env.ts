export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '674931970691416',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '7c2389f57a0b76ba82886316cda6c849'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 's3cr3t_keY@'
}
