const baseUrl = "https://playground.4geeks.com/contact/agendas/andersontbernal"
async function getContacts() {
    const response = await fetch (baseUrl) 
    const data = await response.json()
    return data.contacts
}
export {getContacts}