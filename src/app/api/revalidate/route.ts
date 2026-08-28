import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (expected && secret !== expected) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const type = body?._type as string | undefined;

    revalidatePath('/');
    revalidatePath('/about');
    revalidatePath('/gallery');
    revalidatePath('/pricing');
    revalidatePath('/faq');
    revalidatePath('/reviews');
    revalidatePath('/contact');
    revalidatePath('/rental-policy');

    return NextResponse.json({
      revalidated: true,
      type: type ?? 'all',
      now: Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 },
    );
  }
}
