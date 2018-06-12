function MovieTicket(name,movie,time,age) {
 this.name = name
 this.movie = movie
 this.time = time
 this.age = age
};
MovieTicket.prototype.addAgeGroup = function(input) {
  this.ageGroup = ticketAgeToString(input);
};

function ticketPrice(input) {
  var price = 0;
  var ageTotal = ticketPriceAge(input, price);
  var movieTotal = ticketPriceMovie(input, price);
  var timeTotal = ticketPriceTime(input, price);
  price += 10 + ageTotal + movieTotal + timeTotal;
  return price;
};

function ticketPriceAge(x, amount) {
  if (x.age <18) {
    amount -= 4
  }
  else if (x.age > 55){
    amount -= 3
  }
  else {
    amount = amount;
  }
  return amount
};

function ticketPriceMovie(x, amount) {
  if (x.movie === "Wedding Crashers: The Documentary" || x.movie === "Star Wars 9: Return of Darth Jar Jar Binks") {
    amount +=5
  } else {
    amount = amount;
  }
  return amount;
};

function ticketPriceTime(x, amount) {
  if (x.time === "4AM" || x.time === "11PM"){
    amount += 5
  }
  else if (x.time === "3PM"){
    amount -=2
  }
  else {
    amount = amount;
  }
  return amount
};

function ticketAgeToString(x) {
  if (x.age <18){
    x = "Junior"
  }
  else if (x.age > 55){
    x = "Senior"
  }
  else {
    x ="Adult"
  }
  return x
};

$(document).ready(function(){
   $(".movieMenu").submit(function(e) {
     e.preventDefault();
     var inputtedName = $("#inputName").val();
     var inputtedMovieSelection = $("#movieSelection").val();
     var inputtedTimeSelection = $("#timeSelection").val();
     var inputtedAge = parseInt($("#inputAge").val());
     var ticket = new MovieTicket(inputtedName, inputtedMovieSelection, inputtedTimeSelection, inputtedAge);
     var finalPrice = ticketPrice(ticket);
     ticket.addAgeGroup(ticket)
     $(".holdResult").append("<li class='theTicket'><h2>" + ticket.name + "<span class='toRight'>" + ticket.ageGroup + "</span></h2><h3>" + ticket.movie + "</h3><h3>" + ticket.time + "<span class='toRight'>$" + finalPrice+ "</span></h3></li>");
   })
});
