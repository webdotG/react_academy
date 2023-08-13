export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type typeReviews = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
