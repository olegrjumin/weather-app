import { NextResponse } from "next/server";

export async function GET() {
  const accessKey = process.env.NEXT_PUBLIC_WEATHERSTACK_API_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `http://api.weatherstack.com/forecast?access_key=${accessKey}&query=fetch:ip&forecast_days=7&hourly=1&interval=1`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return NextResponse.json(data);
}