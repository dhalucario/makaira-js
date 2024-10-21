export default class Client {
  customer: string;
  instanceId: string;
  bearerToken: string;

  constructor(customer: string, instanceId: string, bearerToken: string) {
    this.customer = customer;
    this.instanceId = instanceId;
    this.bearerToken = bearerToken;
  }

  async filter(sort = "id", direction = 'ASC', offset = null, count = 10000) {
    const headers = new Headers();
    headers.set('X-Makaira-Instance', this.instanceId);
    headers.set('Content-Type', 'application/json');
    const res = await fetch(`https://${this.customer}/filter`, {
      headers
    });
    return await res.json();
  }
}