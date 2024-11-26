export interface MenuItem {
  icon?: any;
  label: string;
  path?: string;
  color?: string;
  highlight?: boolean;
  children?: MenuItem[];
  emoji?: string;
}

export interface Category {
  id: string;
  label: string;
  icon: any;
  color: string;
  highlight?: boolean;
  items: MenuItem[];
}