
export interface ApiObject {
  id: string
  name: string
  data: Record<string, unknown> | null;
}

export type CreateApiObject = Omit<ApiObject, 'id'>;

export type UpdateApiObject = Partial<CreateApiObject>;

export type ApiListResponse = ApiObject[];