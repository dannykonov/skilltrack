import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple admin credentials (in a real app, use a more secure approach)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'learnwithai2025';

export function middleware(request: NextRequest) {
  // Only protect the /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for basic auth credentials
    const authHeader = request.headers.get('authorization');
    
    if (authHeader) {
      // The header will be in the format "Basic base64(username:password)"
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
      const [username, password] = credentials.split(':');
      
      // Check if credentials match
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        return NextResponse.next();
      }
    }
    
    // If no credentials or invalid credentials, request authentication
    const response = new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
    
    return response;
  }
  
  // For all other routes, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 