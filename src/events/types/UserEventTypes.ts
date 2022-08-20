
export interface UserInfoEvent {
  user?: {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    avatar?: string;
  };
}

export interface LoginEvent extends UserInfoEvent {
  token?: string;
}
