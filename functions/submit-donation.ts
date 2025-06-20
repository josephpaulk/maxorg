// project/functions/submit-donation.ts

// Define the expected structure of the incoming request from the frontend
interface DonationRequestBody {
  formId: string;
  amount: string;
  firstName: string;
  lastName: string;
  email: string;
  paymentMethodId: string; // The safe token from Stripe
}

// Define the structure for Cloudflare Pages environment variables
interface Env {
  GIVEWP_URL: string;
  GIVEWP_API_KEY: string;
  GIVEWP_API_TOKEN: string;
}

// This is the main serverless function that runs on Cloudflare's servers
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body: DonationRequestBody = await request.json();

    // --- Data Validation ---
    if (!body.formId || !body.amount || !body.email || !body.paymentMethodId) {
      return new Response(JSON.stringify({ message: 'Missing required fields.' }), { status: 400 });
    }
    
    // --- Prepare the data for the GiveWP API ---
    // This is the payload that will be sent to your WordPress site.
    // It matches the structure required by the GiveWP REST API.
    const giveApiPayload = {
      give_form_id: body.formId,
      give_price: body.amount,
      give_first: body.firstName,
      give_last: body.lastName,
      give_email: body.email,
      payment_meta: {
        // We pass the secure Stripe Payment Method ID here
        stripe_payment_method: body.paymentMethodId,
      },
    };
    
    // --- Securely Call the GiveWP API ---
    // The fetch call is made from Cloudflare's server to your WordPress server.
    // The API keys are taken from the secure environment variables.
    const giveApiResponse = await fetch(`${env.GIVEWP_URL}/wp-json/give-api/v2/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // GiveWP uses HTTP Basic Auth with the public key as the username and the token as the password.
        'Authorization': `Basic ${btoa(`${env.GIVEWP_API_KEY}:${env.GIVEWP_API_TOKEN}`)}`,
      },
      body: JSON.stringify(giveApiPayload),
    });

    // --- Handle the Response from GiveWP ---
    if (!giveApiResponse.ok) {
      // If GiveWP returns an error, we log it and forward a generic error to the user.
      const errorData = await giveApiResponse.json();
      console.error('GiveWP API Error:', errorData);
      return new Response(JSON.stringify({ message: 'Donation processing failed. Please try again.' }), { status: 500 });
    }

    const responseData = await giveApiResponse.json();

    // --- Send a Success Response to the Frontend ---
    // Let the frontend know that everything worked.
    return new Response(JSON.stringify({ success: true, donation: responseData }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    // Catch any unexpected errors during the process
    console.error('Serverless function error:', error);
    return new Response(JSON.stringify({ message: 'An internal server error occurred.' }), { status: 500 });
  }
};
