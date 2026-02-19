export default async function getClients() {
    const data = await fetch('./dados.json')
    return data.json()
}