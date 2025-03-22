export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received data:", body);

        return new Response(JSON.stringify({ message: "Record created successfully" }), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (e) {
        console.error("Failed to parse request body", e);
        return new Response(JSON.stringify({ message: "Not able to create the record" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
