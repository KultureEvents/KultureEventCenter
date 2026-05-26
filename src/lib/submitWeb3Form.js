const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/**
 * Submit from the browser so Web3Forms domain restriction (localhost) applies.
 * Requires NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local
 */
export async function submitWeb3Form(payload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart the dev server."
    );
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      botcheck: "",
      from_name: "Kulture Event Center Website",
      ...payload,
    }),
  });

  const text = await response.text();
  let result;

  try {
    result = JSON.parse(text);
  } catch {
    console.error("Web3Forms response:", text.slice(0, 300));
    throw new Error(
      "Could not send your message. Check that localhost is allowed in your Web3Forms form settings."
    );
  }

  if (!result.success) {
    throw new Error(result.message || "Failed to send form");
  }

  return result;
}
