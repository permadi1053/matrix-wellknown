export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Jika request mengarah ke sub-path .well-known atau _matrix, oper langsung ke Tunnel Anda
    if (
      url.pathname.startsWith('/.well-known/') || 
      url.pathname.startsWith('/_matrix/')
    ) {
      return fetch(request);
    }

    // Default response jika mengakses domain luar path Matrix
    return new Response("Hello world", {
      headers: { "content-type": "text/plain" },
    });
  },
};

