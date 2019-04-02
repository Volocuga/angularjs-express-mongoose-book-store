angular.module('bookstore', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider   
    .when('/', {  
      controller: 'booksCtrl',
      templateUrl: 'view/books.html'
    })
    .when('/books', {
      controller: 'booksCtrl',                   
      templateUrl: 'view/books.html'
    })
    .when('/book/details/:id', {
      controller: 'booksCtrl',    
      templateUrl: 'view/book-details.html'
    })
    .when('/book/add', {
      controller: 'booksCtrl',
      templateUrl: 'view/book-add.html'
    })
    .when('/book/edit/:id', { 
      controller: 'booksCtrl', 
      templateUrl: 'view/book-edit.html'
    })
    .when('/genres', {
      controller: 'genresCtrl',
      templateUrl: 'view/genres.html'
    })
    .otherwise({
      redirectTo: '/'  
    })
})