var searchGoogle = (options, callback) => {
  $.get('https://www.googleapis.com/books/v1/volumes', {
    q: options.q,
    key: options.key
      },

         function(data){
            callback(data.items)
         }
     )
  };
window.searchGoogle = searchGoogle;