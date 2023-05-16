export interface BurgerMenuProps {
  urls: { text: string; url: string; link: string }[];
  isShow: boolean;
  changeModalStatus: () => void;
}
