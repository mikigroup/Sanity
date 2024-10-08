import vyberMenu from './vyberMenu'
import { MdFoodBank, MdOutlineFastfood } from 'react-icons/md'
import { FaBowlFood } from "react-icons/fa6";

export default {
  title: "Zadávání meníček",
  name: "menu",
  type: "document",
  icon: FaBowlFood,
  fields: [
    /*  {
        title: 'Název menu',
        name: 'title',
        type: 'string',
        icon: MdOutlineFastfood,
        validation: Rule => Rule.required()
      }, */
    {
      title: "Datum",
      name: "releaseDate",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Menu č.",
      name: "title",
      type: "string",
      options: {
        list: [...vyberMenu],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Popis",
      name: "description",
      type: "text",
    },
    /* {  
  title: 'Content', 
  name: 'content',
  type: 'array', 
  of: [{type: 'block'}]
}, */
    {
      title: "Cena",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    /*    {
      title: 'Test',
      name: 'test',
      type: 'string',
      validation: custom (),
    }, */
  ],
  orderings: [
    {
      title: "datum sestupně",
      name: "releaseDate",
      by: [{ field: "releaseDate", direction: "desc" }],
    },
    {
      title: " datum vzestupně",
      name: "releaseDate",
      by: [{ field: "releaseDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      date: "title",
      title: "releaseDate", // zde se prohazuje název a datum, aby datum byl na prvním místě v přehledu meníček
    },
    prepare(selection) {
      const { date, title } = selection;
      return {
        subtitle: date, // YYYY-MM-DD --> YYYY
        title: title.split("-").reverse().join("-"),
      };
    },
    /*  prepare(menu, viewOptions = {}) {
            const title = viewOptions.ordering && viewOptions.ordering.name === 'menu'
            ? `${menu.title} (${menu.releaseDate})`
            : menu.title      
            return {
              title: title,
              releaseDate: releaseDate
            }     
            }
             */
  },
};
  