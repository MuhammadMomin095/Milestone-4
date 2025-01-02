import { User } from './types';
import bcrypt from 'bcryptjs';

const hashedPassword = bcrypt.hashSync('test', 10);
export const users: User[] = [{ id: 1, email: 'test@example.com', password: hashedPassword }];