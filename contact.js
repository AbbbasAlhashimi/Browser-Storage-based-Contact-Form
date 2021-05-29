// The Ready method checks if the page is fully loaded before the code excutes
$(document).ready(function()
{
    function init()
    {
        if (localStorage["name"])
        {
            //It checks if any value was posted through the form using an item with id called [name]
            //And Fill the entry into the local storage with variable called [name]
            $('#name').val(localStorage["name"]);
        }

        if (localStorage["email"])
        {
            //It checks if any value was posted through the form using an item with id called [email]
            $('#email').val(localStorage["email"]);
        }

        if (localStorage["message"])
        {
            //It checks if any value was posted through the form using an item with id called [message]
            $('#message').val(localStorage["message"]);
        }
    }

    init(); // The function will work once the page is fully loaded to add new or modify content.
});

//This part involves the class [stored] and it is triggered when a value has changed.


$('.stored').change(function () 
{
    //The function will add the date of change in data whenever it happens.
    //the [name] refers to the HTML [name] element of a value.
    localStorage[$(this).attr('name')] = $(this).val();
	
});
