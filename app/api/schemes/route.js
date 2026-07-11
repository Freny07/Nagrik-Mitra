import { NextResponse } from 'next/server';
import { schemesData } from '@/app/data/schemes';

export async function GET() {
  // In a real application, we might filter based on query parameters here.
  // For the dual-state client architecture, returning the full dataset
  // allows the client to handle instantaneous filtering and the Sarvam AI companion search.
  try {
    return NextResponse.json({ success: true, data: schemesData });
  } catch (error) {
    console.error("Error fetching schemes:", error);
    return NextResponse.json({ success: false, error: 'Failed to fetch schemes data' }, { status: 500 });
  }
}
