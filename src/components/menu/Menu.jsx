import { ContextMenu } from "primereact/contextmenu";

const Menu = () => {
  const items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
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
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
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
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
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
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-fw pi-chart-bar",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
  ];

  return <ContextMenu global model={items} breakpoint="767px" />;
};

export default Menu;
