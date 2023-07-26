import { Application } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app: Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Spring 서버의 URL 또는 설정한 포트번호
      changeOrigin: true,
    })
  );
}
