exports.updateContact = async function (req, res) {
  const { contact_id, email, mobile_number } = req.body;
  const uri = process.env.FRESHWORKS_BUNDLE_ALIAS;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${process.env.API_KEY}`,
  };
  const response = await fetch(`${uri}/api/contacts/${contact_id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      email,
      mobile_number,
    }),
  });
  const data = await response.json();
  res.send(data);
};
