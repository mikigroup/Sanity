import { MdFoodBank, MdOutlineFastfood } from "react-icons/md";
import { idOrder } from "../components/idOrder";
// import { incrementOrderNumber } from '../components/incrementOrderNumber'
// import OrderNumberIncrementer from "../components/OrderNumberIncrementer";

export default {
  title: "Objednávky",
  name: "order",
  type: "document",
  icon: MdFoodBank,
  fields: [
    {
  title: 'Vyřízena?',
  name: 'released',
  type: 'boolean'
    },
    {
      name: "id",
      title: "Objednávka:",
      type: "string",
      readOnly: true,
      components: {
        input: idOrder,
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
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "customer",      
      createdAt: "_createdAt",
      vyrizena: "released"
    },
    prepare(selection) {
      const { title, createdAt, vyrizena } = selection;
      const createdAtDate = new Date(createdAt);

      const day = createdAtDate.getDate();
      const month = createdAtDate.getMonth() + 1; // Month is zero-based, so add 1
      const year = createdAtDate.getFullYear();

      const formattedDate = `${day < 10 ? "0" + day : day}.${
        month < 10 ? "0" + month : month
      }.${year}`;
      return {
        title: title,
        subtitle: formattedDate,
        vyrizena: released
      };
    },
  },

  /* timestamp */

  /* initialValue: () => ({    
    releaseDate: (new Date()).toISOString()
  }) */
};
