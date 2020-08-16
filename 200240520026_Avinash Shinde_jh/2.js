function validation()

{
  let uname =document.
  querySelector('#username').value;

  let password = document.
  querySelector('#password').value;
  let mail = document.querySelector('#email').value;
   if( uname =='' || password == '' || mail=='')
   {
       alert('Enter username or password or mail');

   }
   else if (uname.length < 3 || uname.length > 12)
   {
       alert("username contain atleast 3 to 12 characters");

   }
   else if (password.length < 5 ||
    password.length > 12
    )
    {
        alert('password contain at least 5 character');
    }
    else if (mail.length < 6 || mail.length > 50)
        
        {
            alert('mail contain at least min 6 and max 50 character');
        }
    
   
    else
    {
        alert('form submited');
    }
    document.
  querySelector('#username').value='';
  document.
  querySelector('#password').value='';
  document.
  querySelector('#email').value ='';

}