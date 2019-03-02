
    //using the function to set slider attributes on Main Page
    $(document).ready(function() {

        //slider plugin
        $('.slider').cycle({
            fx: 'fade'
        });
        // });
        //     $(document).ready(function() {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=0f96cb33913f921e9b2042d094a10591&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
                "method": "GET",
                "headers": {}
            }

            $.ajax(settings).done(function (data) {
                console.log(data);

                $("#galTitle").append(data.photos.photo[0].title + " Studio Gallery");
                $.each(data.photos.photo, function (i, gallery) {

                    var farmId = gallery.farm;
                    var serverId = gallery.server;
                    var id = gallery.id;
                    var secret = gallery.secret;

                    console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

                    $("#flickrAppend").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

                });
            });



        // $(document).ready(function () {
        $.getJSON("techSupport.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#JSON").append(
                        "<img src=\"" + value.image + "\" alt=\" + value.full_name + \" ><br>" +
                        "<h3>" + value.full_name + "<br>" +
                        value.title + "<br></h3><p>" +
                        value.bio + "<br><br></p>"
                    );
                });
            });
        });






        // //using the function to activate accordion on FAQ
        //  //$(document).ready(function() {
        //     $("#contents").accordion();
    });


