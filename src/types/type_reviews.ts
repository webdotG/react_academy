type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

 type typeReviews = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export default
typeReviews;
