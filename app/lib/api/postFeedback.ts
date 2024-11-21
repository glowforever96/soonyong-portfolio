interface FeedbackParam {
  userId: string;
  text: string;
  createdAt: string;
}

export async function postFeedback(payload: FeedbackParam) {
  const { userId, text, createdAt } = payload;

  const res = await fetch(`/api/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      text,
      createdAt,
    }),
  });
  if (res.status === 200) return true;
}
