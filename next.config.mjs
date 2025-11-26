/** @type {import('next').NextConfig} */
const nextConfig = {
  // Força o servidor a rodar na porta 3000
  serverRuntimeConfig: {
    port: 3000,
  },
  // Configurações adicionais
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
