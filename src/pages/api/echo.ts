import { APIContext } from 'astro';

export async function post({ request }: APIContext): Promise<Response> {
  const contentType =
    request.headers.get('content-type') ?? 'application/octet-stream';
  const body = await request.arrayBuffer();
  console.log(new Uint8Array(body));
  return new Response(body, { headers: { 'content-type': contentType } });
}
