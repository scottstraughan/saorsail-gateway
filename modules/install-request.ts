import { ZuploContext, ZuploRequest, environment } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const requestBody = await request.json();
  const supabaseAuthToken = environment['SUPABASE'];
  const supabaseProjectId = environment['SUPABASE_PROJECT_ID'];
  const supabaseTableId = environment['SUPABASE_TABLE_ID'];

  if (!requestBody['devicePairCode'] 
      || !requestBody['appName']
      || !requestBody['appVersion']
      || !requestBody['appPackageDownloadUrl']) {
    return new Response('You install request is in an incorrect format, please check.', { status: 400 });
  }

  // Transform just to be ensure we only send exactly what we want
  const data = {
    "devicePairCode": requestBody["devicePairCode"],
    "appNamespace": requestBody["appNamespace"],
    "appIconUrl": requestBody["appIconUrl"],
    "appName": requestBody["appName"],
    "appVersion": requestBody["appVersion"],
    "appPackageDownloadUrl": requestBody["appPackageDownloadUrl"]
};

  const r = await fetch(`https://${supabaseProjectId}.supabase.co/rest/v1/${supabaseTableId}`, {
    method: 'POST',
    headers: {
      "apikey": supabaseAuthToken,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${supabaseAuthToken}`
    },
    body: JSON.stringify(data),
  });

  return new Response('Created', { status: 201 });
}