export type MenuType = {
  label: string;
  url: string;
};

const menu: MenuType[] = [
  { label: "Home", url: "/" },
  { label: "Sobre", url: "/about" },
  { label: "Produtos", url: "/products" },
  { label: "Frutas", url: "/fruits" },
  { label: "Criar Fruta", url: "/fruits/create" },
];

export default menu;
