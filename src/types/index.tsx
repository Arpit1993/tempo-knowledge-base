type AuthorDetails = {
    authorId: string;
    avatarUrl: string;
    name: string;
  };
  
  type Orders = {
    [key: string]: number;
  };
  
  type ArticleDetails = {
    articleCount: number;
    authorCount: number;
    authors: [AuthorDetails];
    availableLocales: [string];
    collectionId: string;
    createdAt: string;
    defaultLocale: string;
    depth: number;
    description: string;
    docUpdatedAt: string;
    externalUrl: string;
    featurebaseUrl: string;
    helpCenterId: string;
    icon: NavLinksIcon;
    locale: string;
    name: string;
    order: any;
    orders: Orders;
    organizationId: string;
    parentId: number | null;
    path: string;
    slug: string;
    type: string;
    updatedAt: string;
    _v: string;
    _id: string;
    publishedLocales?: [string];
    state?: string;
    surveyId?: string;
    visibleBy?: string;
    isDraftDiffersFromLive?: boolean;
    isPublished?: boolean;
    structure: [ArticleDetails] | [];
  };
  
  type NavLinksIcon = {
    type: string;
    value: string;
  };
  
  type NavLinks = {
    icon: NavLinksIcon;
  };
  
  export type OrganisationType = {
    _id: string;
    title: string;
    availableLocales: [string];
    description: string;
    displayName: string;
    locale: string;
    navItems: [NavLinks];
    searchPlaceholder: string;
    structure?: [ArticleDetails];
  };

  export type Result = {
    text: string;
    slug: string;
    next: Result | null;
  }