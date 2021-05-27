const items = [ 'Wohlfühlen', 'Familie', 'Home, sweet home' ].sort();
jQuery( document.querySelector( '#categories' ) ).selectize( {
  create: true,
  items: items,
  labelField: 'value',
  options: items && items.map( item => { return { value: item } } ),
  placeholder: 'Set your Categories',
  plugins: [ 'drag_drop', 'remove_button' ]
} );