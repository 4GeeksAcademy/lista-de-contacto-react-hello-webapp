function getBaseUrl(agenda = "andersontbernal") {
  return `https://playground.4geeks.com/contact/agendas/${agenda}`;
}

async function getContacts() {
  const response = await fetch(getBaseUrl());
  const data = await response.json();
  console.log(data);
  return data.contacts;
}

export { getContacts };
