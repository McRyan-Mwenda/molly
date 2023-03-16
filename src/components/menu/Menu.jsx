import { ContextMenu } from "primereact/contextmenu";

const Menu = ({
  naSetVisible,
  nbSetVisible,
  ntSetVisible,
  eaSetVisible,
  ebSetVisible,
  epSetVisible,
  etSetVisible,
  daSetVisible,
  dbSetVisible,
  dtSetVisible,
}) => {
  const items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => {
            epSetVisible(true);
          },
        },
      ],
    },
    {
      label: "Accounts",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            naSetVisible(true);
          },
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => {
            eaSetVisible(true);
          },
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: () => {
            daSetVisible(true);
          },
        },
      ],
    },
    {
      label: "Budgets",
      icon: "pi pi-fw pi-briefcase",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            nbSetVisible(true);
          },
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => {
            ebSetVisible(true);
          },
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: () => {
            dbSetVisible(true);
          },
        },
      ],
    },
    {
      label: "Transactions",
      icon: "pi pi-fw pi-money-bill",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            ntSetVisible(true);
          },
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => {
            etSetVisible(true);
          },
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: () => {
            dtSetVisible(true);
          },
        },
      ],
    },
  ];

  return <ContextMenu global model={items} breakpoint="767px" />;
};

export default Menu;
