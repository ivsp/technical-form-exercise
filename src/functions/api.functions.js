export async function registerNewUser(body) {
  console.log(body);
  const r = await fetch(`http://localhost:4000/users/register`, {
    method: "POST",
    body: new URLSearchParams(body),
  });

  return r;
}
