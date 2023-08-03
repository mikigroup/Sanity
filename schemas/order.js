import { MdFoodBank, MdOutlineFastfood } from "react-icons/md";
import { idOrder } from "../components/idOrder";
import { orderNumber} from "../components/orderNumber";
import { PackageIcon } from "@sanity/icons";

export default {
  title: "Objednávky",
  name: "order",
  type: "document",
  icon: PackageIcon,
  fields: [
    {
      name: "released",
      title: "Vyřízena?",
      type: "boolean",
    },
    {
      name: "noteInternal",
      title: "Interní poznámka:",
      type: "text",
      rows: 2,
    },
    /* {
      name: "id",
      title: "Objednávka:",
      type: "string",      
      components: {
        input: idOrder,
      },
    }, */
    {
      name: "orderNumber",
      title: "Objednávka:",
      type: "number",
      components: {
        input: orderNumber,
      },
    },
    {
      name: "timestamp",
      title: "Vytvořena:",
      type: "datetime",
      readOnly: true,
      options: {
        dateFormat: "DD.MM.YYYY",
        timeFormat: "HH:mm",
      },
    },
    {
      name: "customer",
      title: "Zákazník:",
      readOnly: true,
      type: "string",
    },
    {
      name: "email",
      title: "Email:",
      readOnly: true,
      type: "string",
    },
    {
      name: "totalPieces",
      title: "Celkový počet kusů:",
      readOnly: true,
      type: "number",
    },
    {
      name: "totalPrice",
      title: "Celková cena:",
      readOnly: true,
      type: "number",
    },
    {
      name: "itemsOrder",
      title: "Co si objednal:",
      type: "array",
      readOnly: true,
      of: [{ type: "string" }, { type: "number" }],
    },
    {
      name: "note",
      title: "Poznámka:",
      readOnly: true,
      type: "text",
    },
  ],
  preview: {
    select: {
      customer: "customer",
      createdAt: "_createdAt",
      orderNumber: "orderNumber",
      released: "released",
    },
    prepare(selection) {
      const { customer, createdAt, orderNumber, released } = selection;
      const createdAtDate = new Date(createdAt);

      const day = createdAtDate.getDate();
      const month = createdAtDate.getMonth() + 1; // měsíc má základ 0, proto přodat 1
      const year = createdAtDate.getFullYear();

      const formattedDate = `${day < 10 ? "0" + day : day}.${
        month < 10 ? "0" + month : month
      }.${year}`;

      const title = `${customer} - ${released ? "Vyřízená" : "Nevyřízená"}`;
      const subtitle = `${formattedDate} - ${orderNumber}`;

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },

  /* timestamp */

  /* initialValue: () => ({    
    releaseDate: (new Date()).toISOString()
  }) */
};
