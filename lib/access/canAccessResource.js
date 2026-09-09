export function canAccessResource(
  resources,
  resourceType,
  resourceKey,
) {
  return resources.some(
    (resource) =>
      resource.resource_type === resourceType &&
      resource.resource_key === resourceKey,
  );
}