Images = new Mongo.Collection("images");
console.log(Images.find().count());


if (Meteor.isClient) {
  var img_data = [
  {
    img_src:"art.png",
    img_alt:"selfie into art"
  },
  {
    img_src:"neahkahnie.png",
    img_alt:"Oregon Coast Range"
  },
  {
    img_src:"surf art.png",
    img_alt:"surf stencil art"
  },

  ];

  Template.images.helpers({images:img_data});

  Template.images.events({
    'click .js-image':function(event){
        $(event.target).css("width", "50px");
    }
  });

}

if (Meteor.isServer) {
  console.log("I am the server");
}
