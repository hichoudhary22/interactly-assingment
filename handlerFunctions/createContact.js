exports.createContact = async function createContact(req, res) {
  const uri = process.env.FRESHWORKS_BUNDLE_ALIAS;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${process.env.API_KEY}`,
  };
  const { first_name, last_name, mobile_number, email } = req.body;
  const response = await fetch(`${uri}/api/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      first_name,
      last_name,
      mobile_number,
      email,
    }),
  });
  const data = await response.json();
  res.send(data);
};
