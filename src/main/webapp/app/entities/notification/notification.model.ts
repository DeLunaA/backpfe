import { IUser } from 'app/entities/user/user.model';

export interface INotification {
  id: number;
  titre?: string | null;
  description?: string | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewNotification = Omit<INotification, 'id'> & { id: null };
