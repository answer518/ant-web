const isDev = process.env.NODE_ENV === 'development'
export default {
  baseUrl: {
    dev: 'http://localhost:3000',
    pro: 'http://314p333172.oicp.vip',
  },
  publicPath: [/^\/public/, /^\/login/],
  wsconfig: {
    url: isDev ? '127.0.0.1' : 'api.dev.answer.com',
    port: isDev ? '3001' : 12001,
  },
}
