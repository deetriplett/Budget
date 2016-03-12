$.ajax({
          type: 'GET',
          url:  url,

          success: function(data){
              console.log(data);
          },
          async:false
      });
