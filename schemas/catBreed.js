export default 
{
  type: 'document',
  name: 'catBreed',
  fields: [
  	{name: 'name', type: 'string'},
  	{name: 'country', type: 'reference', to: [{type: 'country'}]},
  	{name: 'bodyType', type: 'string'},
  	{name: 'coat', type: 'string'},
  	{name: 'pattern', type: 'string'}
  ]
}
 
