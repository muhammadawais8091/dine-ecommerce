interface ICategory {
  name: string;
}

interface IProductSlug {
  current: string;
}

export interface IProduct {
  _id: any;
  name: string;
  slug: IProductSlug;
  price: number;
  description: string;
  image: any;
  category: ICategory;
}
