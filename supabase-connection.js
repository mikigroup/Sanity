const sanityClient = require('@sanity/client')

const CAT_API_URL = 'https://guide-cat-api.sanity-io.now.sh/cats'

const client = sanityClient({
  projectId: 'gdle0r99',
  dataset: 'production',
  // a token with write access
  token: 'sk2Ssi6deGMEKHIXTr1d2q02qB6fAKCVjSwqkeErUFH3WHs6MxPNl3u8S6e3W0ZL7bI403vYMUDdu0VQL5o5wHeyNeOJvnaJVF9I9TbqeEJEgtjx4taur0iURykj736QDNrpOAwaEv40zGD7qJm1oE70qBg4SLSLiIFPEVYMR9seOGCcDeYT',
  useCdn: false
})

fetch(CAT_API_URL)
  .then(res => res.json())
  .then(catBreeds => catBreeds.map(transform))
  .then(pairs => 
  	// documents is now an array of [country, cat], so we need to flatten it.
  	// We'll use lodash.flatten for that
  	flatten(documents)
  )
  .then(documents => {

    const countries = documents.filter(doc =>
      doc._type === 'country'
    )
    const catBreeds = documents.filter(doc =>
      doc._type === 'catBreed'
    )

    // Write all countries to the dataset using a createOrReplace mutation
  	const allCountriesWritten = Promise.all(countries.map(country =>
  	  client.createOrReplace(country)
  	))

    // After the countries has been written, go ahead and create (or replace) the cat documents
  	const allCatsWritten = allCountriesWritten.then(() =>
  	  Promise.all(catBreeds.map(cat => client.createOrReplace(cat)))
	  )

	  // continue when all cats has been written
	  return allCatsWritten
  })

/* const { createClient } = require('@supabase/supabase-js');
const sanityClient = require('@sanity/client');
const flatten = require('lodash.flatten');
const supabase = createClient('https://orgshebezwfizhmlmeum.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ3NoZWJlendmaXpobWxtZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg2MDMzNjMsImV4cCI6MTk3NDE3OTM2M30.0LA1TPH2v93s10ChjJiX6iTX4LSXMsWOe3MTTxb5_74');


const CAT_API_URL = 'https://cat-api-bjoerge.sanity-io1.now.sh/cats'

fetch(CAT_API_URL)
  .then(res => res.json())
  .then(catBreeds => {
    console.log(catBreeds);
	  // we now have an array of catBreeds from the external API
  }) */

/* async function fetchDataFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select();
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.log('Fetched data from Supabase:', data);
    }
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
  }
}
fetchDataFromSupabase(); */







/* async function checkSupabaseConnection() {
  try {
    const response = await supabase.rpc('ping', {});
    if (response) {
      console.log('Connected to Supabase successfully');
    } else {
      console.log('Failed to connect to Supabase');
    }
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message);
  }
}
checkSupabaseConnection(); */