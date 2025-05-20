import { getRequiredUser } from '@/lib/auth-session';
import { RoleService } from '@feedy/shared/auth/role-service';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { restaurantId: string; roleId: string } }
) {
  try {
    const user = await getRequiredUser();
    const body = await request.json();
    
    const role = await RoleService.updateRole(params.roleId, body, user.id);
    return NextResponse.json(role);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { restaurantId: string; roleId: string } }
) {
  try {
    const user = await getRequiredUser();
    await RoleService.deleteRole(params.roleId, user.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 