import { ZuploContext, ZuploRequest, environment } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const pairCode = request.params['pairCode'];

  const supabaseAuthToken = environment['SUPABASE'];
  const supabaseProjectId = environment['SUPABASE_PROJECT_ID'];
  const supabaseTableId = environment['SUPABASE_TABLE_ID'];

  const query = `https://${supabaseProjectId}.supabase.co/rest/v1/${supabaseTableId}?devicePairCode=eq.${pairCode}`;

  const checkRequest = await fetch(query, {
    method: 'GET',
    headers: {
      "apikey": supabaseAuthToken,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${supabaseAuthToken}`
    },
  });

  const checkResult = await checkRequest.json();

  const responseResult = checkResult ? Object.values(checkResult) : [];
  return new Response(JSON.stringify(responseResult), { status: 200 });
}