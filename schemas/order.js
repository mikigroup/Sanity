import { MdFoodBank, MdOutlineFastfood } from 'react-icons/md'
import { idOrder } from '../components/idOrder'

const event = new Date('05 October 2011 14:48 UTC');
console.log(event.toString())

export default {
  title: 'Objednávky',
  name: 'order',
  type: 'document',
  icon: MdFoodBank,
  fields: [   
    {
      name: 'id',
      title: 'Objednávka:',
      type: 'string',
      readOnly: true,
      components: {
        input: idOrder,        
      }     
    },
{
  name: 'timestamp',
  title: 'Vytvořena:',
  type: 'datetime',
  readOnly: true,
  options: {
    dateFormat: 'DD.MM.YYYY',
    timeFormat: 'HH:mm',
  }
}
    ,
    {
      name: 'customer',
      title: 'Zákazník:',
      readOnly: true,
      type: 'string',
    },
    {
      name: 'itemsOrder',
      title: 'Co si objednal:',
      type: 'array',
      readOnly: true,
       of: [{type: 'string'}, {type: 'number'}]
    },
    {
      name: 'note',
      title: 'Poznámka:',
      readOnly: true,
      type: 'string',
    },    
  ],
  preview: {
    select: {
      title: 'customer',
      date: 'timestamp',
      createdAt: '_createdAt',
      
    },
    prepare(selection) {
      const {title, createdAt} = selection
      const createdAtDate = new Date(createdAt);

      const day = createdAtDate.getDate();
      const month = createdAtDate.getMonth() + 1; // Month is zero-based, so add 1
      const year = createdAtDate.getFullYear();

      const formattedDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;         
          return {           
            title: title,
            subtitle: formattedDate
          }
        },
  },
  
/* timestamp */



    /* initialValue: () => ({    
    releaseDate: (new Date()).toISOString()
  }) */
};
