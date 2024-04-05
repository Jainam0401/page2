import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        try {
            const response = await axios.get('https://staging-express.delhivery.com/c/api/pin-codes/json/', {
                params: {
                    token: '786ae6fa92260fe32bffc7a4de95e47d9a290726',
                    filter_codes: req.query.pincode // Use req.query.pincode to access the pincode
                }
            });

            // Send the Delhivery API response back to the client
            res.status(200).json(response.data);
        } catch (error) {
            console.error("Error checking pincode:", error);
            // Send an error response back to the client
            res.status(500).json({ error: "An error occurred while checking pincode." });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
