/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChangeMutation
// ====================================================

export interface ForgotPasswordChangeMutation_forgotPasswordChange {
  __typename: "Error";
  path: string;
  message: string;
}

export interface ForgotPasswordChangeMutation {
  forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMessageMutation
// ====================================================

export interface CreateMessageMutation {
  createMessage: boolean;
}

export interface CreateMessageMutationVariables {
  message: MessageInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOfferMutation
// ====================================================

export interface CreateOfferMutation {
  createOffer: boolean;
}

export interface CreateOfferMutationVariables {
  picture?: any | null;
  title: string;
  category: string;
  description: string;
  latitude: number;
  longitude: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindOffersQuery
// ====================================================

export interface FindOffersQuery_findOffers_owner {
  __typename: "User";
  id: string;
  email: string;
}

export interface FindOffersQuery_findOffers {
  __typename: "Offer";
  id: string;
  title: string;
  pictureUrl: string | null;
  owner: FindOffersQuery_findOffers_owner;
}

export interface FindOffersQuery {
  findOffers: FindOffersQuery_findOffers[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordEmailMutation
// ====================================================

export interface SendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordEmailMutationVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  __typename: "Error";
  path: string;
  message: string;
}

export interface LoginMutation_login {
  __typename: "LoginResponse";
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  __typename: "Error";
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchOffersQuery
// ====================================================

export interface SearchOffersQuery_searchOffers_owner {
  __typename: "User";
  id: string;
  email: string;
}

export interface SearchOffersQuery_searchOffers {
  __typename: "Offer";
  id: string;
  title: string;
  description: string;
  category: string;
  longitude: number;
  latitude: number;
  pictureUrl: string | null;
  owner: SearchOffersQuery_searchOffers_owner;
}

export interface SearchOffersQuery {
  searchOffers: SearchOffersQuery_searchOffers[];
}

export interface SearchOffersQueryVariables {
  input?: SearchOffersInput | null;
  offset: number;
  limit: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOfferMutation
// ====================================================

export interface UpdateOfferMutation {
  updateOffer: boolean;
}

export interface UpdateOfferMutationVariables {
  offerId: string;
  input: UpdateOfferInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewOfferQuery
// ====================================================

export interface ViewOfferQuery_viewOffer_owner {
  __typename: "User";
  id: string;
  email: string;
}

export interface ViewOfferQuery_viewOffer {
  __typename: "Offer";
  id: string;
  title: string;
  description: string;
  category: string;
  latitude: number;
  longitude: number;
  pictureUrl: string | null;
  owner: ViewOfferQuery_viewOffer_owner;
}

export interface ViewOfferQuery {
  viewOffer: ViewOfferQuery_viewOffer | null;
}

export interface ViewOfferQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface MessageInput {
  text: string;
  offerId: string;
}

export interface SearchOffersInput {
  title?: string | null;
  description?: string | null;
  category?: string | null;
}

export interface UpdateOfferInput {
  title?: string | null;
  picture?: any | null;
  pictureUrl?: string | null;
  category?: string | null;
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
