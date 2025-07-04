function getBaseUrl(agenda = "andersontbernal") {
  return `https://playground.4geeks.com/contact/agendas/${agenda}`;
}

async function getContacts() {
  const response = await fetch(getBaseUrl());
  const data = await response.json();
  console.log(data);
  return data.contacts;
}

async function createContact(contactData) {
  const response = await fetch(getBaseUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactData)
  });

  if (!response.ok) {
    throw new Error("Error creating contact");
  }

  return await response.json();
  
}

export { getContacts, createContact    };
