export default class Client {
  customer: string;
  instanceId: string;
  bearerToken: string;

  constructor({customer, instanceId, bearerToken}: {customer: string, instanceId: string, bearerToken: string}) {
    this.customer = customer;
    this.instanceId = instanceId;
    this.bearerToken = bearerToken;
  }

  async filter(sort: string = "id", direction: string = "ASC", count: number = 10000, offset?: string) {
    const headers = new Headers();
    headers.set('X-Makaira-Instance', this.instanceId);
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', `Bearer ${this.bearerToken}`);
    const res = await fetch(`https://${this.customer}.makaira.io/filter`, {
      headers,
      body: JSON.stringify({
        sort,
        direction,
        offset: offset ?? 0,
        count
      }),
      method: "POST"
    });
    return await res.json();
  }
}