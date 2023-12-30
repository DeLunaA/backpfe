import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 10988,
};

export const sampleWithPartialData: INotification = {
  id: 87998,
  titre: 'Jouets',
};

export const sampleWithFullData: INotification = {
  id: 17629,
  titre: 'c',
  description: 'expedite',
};

export const sampleWithNewData: NewNotification = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
