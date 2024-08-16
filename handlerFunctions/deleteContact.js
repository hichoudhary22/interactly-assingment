exports.deleteContact = async function (req, res) {
  const { contact_id } = req.body;
  const uri = process.env.FRESHWORKS_BUNDLE_ALIAS;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${process.env.API_KEY}`,
  };
  const response = await fetch(`${uri}/api/contacts/${contact_id}`, {
    method: "DELETE",
    headers,
  });
  const data = await response.json();
  res.send(data);
};
