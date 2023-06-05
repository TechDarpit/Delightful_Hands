// Home Controller
delightfulHands.controller("HomeController", function($scope){
    $CatogeryType = "All Catogery";
    $SearchText = "";

});

// Details Controller
delightfulHands.controller("DetailsController", function($scope,$rootScope,$routeParams,$http){
  let ProductId = parseInt($routeParams.P_id);

  $scope.product = $rootScope.products.find(function(product){return product.P_id == ProductId});

  $scope.delResponce = "";
  var PID = $scope.product.P_id;

  $scope.DeleteProduct = function(){
    console.log('api/products/'+PID);

    $http.delete('api/products/'+PID).then(function(responce){
      $scope.msg = responce.data;
    })
  }

});

//Add Product Controller
delightfulHands.controller("AddNewProductController", function($scope,$rootScope){

    $(document).on("click", ".browse", function() {
        var file = $(this).parents().find(".file");
        file.trigger("click");
      });
      $('input[type="file"]').change(function(e) {
        var fileName = e.target.files[0].name;
        $("#file3").val(fileName);
      
        var reader = new FileReader();
        reader.onload = function(e) {
          // get loaded data and render thumbnail.
          document.getElementById("preview").src = e.target.result;
        };
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
      });

      // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

});

//Edit Product Controller
delightfulHands.controller("EditProductController", function($scope,$rootScope,$routeParams){

      $(document).on("click", ".browse", function() {
          var file = $(this).parents().find(".file");
          file.trigger("click");
        });
        $('input[type="file"]').change(function(e) {
          var fileName = e.target.files[0].name;
          $("#file").val(fileName);
        
          var reader = new FileReader();
          reader.onload = function(e) {
            // get loaded data and render thumbnail.
            document.getElementById("preview").src = e.target.result;
          };
          // read the image file as a data URL.
          reader.readAsDataURL(this.files[0]);
        });

        // Example starter JavaScript for disabling form submissions if there are invalid fields
      (() => {'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    })()

    let ProductId = parseInt($routeParams.P_id);
    $scope.product = $rootScope.products.find(function(product){return product.P_id == ProductId});

});