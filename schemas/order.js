import { MdFoodBank, MdOutlineFastfood } from 'react-icons/md'
import { idOrder } from '../components/idOrder'


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
        input: idOrder
      }     
    },
    {
      name: 'note',
      title: 'Poznámka:',
      type: 'string',
    },    
  ],
    /* initialValue: () => ({    
    releaseDate: (new Date()).toISOString()
  }) */
}
