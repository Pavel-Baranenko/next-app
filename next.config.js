module.exports = {
  async redirects() {
    return [
      {
        source: '/old-url-1',
        destination: '/new-url-1',
        permanent: true,
      },
      {
        source: '/old-url-2',
        destination: '/new-url-2',
        permanent: true,
      },
      // etc...
    ]
  },
}