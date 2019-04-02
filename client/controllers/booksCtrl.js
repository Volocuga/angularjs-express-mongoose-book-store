

angular.module('bookstore')

  .controller('booksCtrl', function ($scope, $http, $routeParams, $location, $window) {
    $scope.getBooks = function () { 
      $http.get('api/books').then(res => $scope.booksList = res.data);
    };
 
    $scope.getBook = function () {
      let id = $routeParams.id 
      $http.get('/api/books/'+id).then(res => $scope.bookDetails = res.data)
    };   
 
    $scope.addForm = function(newBook){ 
      $http.post('/api/books/', newBook)               
      window.location.href='#/books'; 
    }; 

    $scope.updateForm = function(updateBook){
      let id = $routeParams.id 
      $http.put('/api/books/'+id, updateBook) 
      window.location.href='#/books';
    };

    $scope.deleteBook = function(){
      let id = $routeParams.id    
      $http.delete('/api/books/'+id)
      window.location.href='#/books';  
    };

  });   