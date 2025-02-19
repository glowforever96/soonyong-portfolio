import { v4 as uuidv4 } from 'uuid';

export async function registerUser() {
  const userId = uuidv4();

  const res = await fetch(`/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
    }),
  });

  if (res.status === 200) return res.json();
}
