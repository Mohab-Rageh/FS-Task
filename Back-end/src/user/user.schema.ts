import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class Nationality {
  @Field(() => ID)
  countryId: number;

  @Field()
  countryName: string;
}

@ObjectType()
class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
class MaritalStatus {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field()
  dependants: number;
}
