export async function registerNewUser(body) {
  console.log(body);
  const r = await fetch(`http://localhost:4000/users/register`, {
    method: "POST",
    body: new URLSearchParams(body),
    //Envío el FormData como un URL-enconded string.
    //Fuente: https://openjavascript.info/2022/04/26/post-form-data-using-javascripts-fetch-api/
  });

  return r;
}
