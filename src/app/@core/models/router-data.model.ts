export interface IRouterData {
  docTitle: string;
  pageTitle: string;
  pageSubtitle?: string;
  breadcrumb: IBreadcrumb[];
}

export interface IBreadcrumb {
  routerLink: string;
  text: string;
}
