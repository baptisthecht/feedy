import { getRequiredUser } from '@/lib/auth-session';
import { RoleService } from '@feedy/shared/auth/role-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { restaurantId: string } }
) {
  try {
    const user = await getRequiredUser();
    const roles = await RoleService.getRestaurantRoles(params.restaurantId, user.id);
    return NextResponse.json(roles);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { restaurantId: string } }
) {
  try {
    const user = await getRequiredUser();
    const body = await request.json();
    
    const role = await RoleService.createRole({
      ...body,
      restaurantId: params.restaurantId,
      createdByUserId: user.id,
    });
    
    return NextResponse.json(role);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 