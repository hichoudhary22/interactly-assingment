exports.getContact = async function getContact(req, res) {
  const uri = process.env.FRESHWORKS_BUNDLE_ALIAS;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${process.env.API_KEY}`,
  };
  const response = await fetch(`${uri}/api/contacts/${req.body.contact_id}`, {
    method: "GET",
    headers,
  });
  const data = await response.json();
  res.send(data);
};
