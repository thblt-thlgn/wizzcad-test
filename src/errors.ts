export class ResourceNotFoundError extends Error {
  constructor(resourceName: string, id: number | string) {
    super(`No ${resourceName} found with the following id: ${id}`);
  }
}
