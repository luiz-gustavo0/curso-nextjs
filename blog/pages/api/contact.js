function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    console.log({ email, name, message });
    res.status(201).json({ email, name, message });
  }
}

export default handler;
