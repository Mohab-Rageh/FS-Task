import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Nationality {
  @Field(() => ID)
  countryId: number;

  @Field()
  country: Country;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class LocalizedName {
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
export class MaritalStatus {
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

@InputType()
export class NationalityInput {
  @Field(() => ID, { nullable: true })
  countryId?: number;

  @Field({ nullable: true })
  countryName?: string;
}

@InputType()
export class NationalIdInput {
  @Field({ nullable: true })
  idNumber?: string;

  @Field({ nullable: true })
  expiryDate?: string;
}

@InputType()
export class LocalizedNameInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;
}

@InputType()
export class MaritalStatusInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class UserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field(() => LocalizedNameInput, { nullable: true })
  localizedName?: LocalizedNameInput;

  @Field(() => NationalIdInput, { nullable: true })
  nationalId?: NationalIdInput;

  @Field(() => [NationalityInput], { nullable: true })
  nationalities?: NationalityInput[];

  @Field(() => MaritalStatusInput, { nullable: true })
  maritalStatus?: MaritalStatusInput;

  @Field({ nullable: true })
  dependants?: number;
}
