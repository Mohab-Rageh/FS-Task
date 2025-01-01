import { Injectable } from '@nestjs/common';
import { User, UserInput } from './user.schema';

@Injectable()
export class UserService {
  private readonly userData: User = {
    firstName: 'Zaria',
    fatherName: 'Edward',
    grandfatherName: 'Ernest',
    familyName: 'Willie',
    localizedName: {
      firstName: 'صفوان',
      fatherName: 'حمدان',
      grandfatherName: 'هشام',
      familyName: 'عباس',
    },
    nationalId: {
      idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
      expiryDate: '2024-07-24T22:45:29.864Z',
    },
    nationalities: [
      { countryId: 1016, countryName: 'Bolivia' },
      { countryId: 1117, countryName: 'Latvia' },
      { countryId: 1225, countryName: 'Virgin Islands, U.S.' },
    ],
    maritalStatus: { id: '27', name: 'Divorced' },
    dependants: 60,
  };

  getUser(userId: number): User {
    console.log({ userId });

    return this.userData;
  }

  updateUser(userId: number, input: UserInput): User {
    console.log({ userId, input });
    Object.assign(this.userData, input);
    return this.userData;
  }
}
