import { getLocationbyName } from "../location-utils";

export async function GET(request, { params }) {
  const locationData = getLocationbyName(params?.name);

  return Response.json(locationData);
}
