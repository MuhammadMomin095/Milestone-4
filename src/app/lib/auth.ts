import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded as JwtPayload;
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token'); // Or check for cookie
    return !!token && !!verifyToken(token);
  }
    return false;
};

export const getUserIdFromToken = (): number | null =>{
    if (typeof window !== 'undefined'){
        const token = localStorage.getItem('token');
        const decodedToken = verifyToken(token!);
        if(decodedToken){
            return decodedToken.userId
        }
        return null;
    }
    return null;
}