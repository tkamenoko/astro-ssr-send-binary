function getOrigin(request: Request): string {
  return new URL(request.url).origin.replace('localhost', '127.0.0.1');
}

async function post(
  incomingReq: Request,
  body: Uint8Array,
  endpoint: string
): Promise<Response> {
  const response = await fetch(`${getOrigin(incomingReq)}${endpoint}`, {
    credentials: 'same-origin',
    body,
    method: 'POST',
  });
  return response;
}

export async function sendBinaryBody(
  req: Request,
  body: Uint8Array
): Promise<Uint8Array> {
  const resp = await post(req, body, '/api/echo');
  return new Uint8Array(await resp.arrayBuffer());
}
