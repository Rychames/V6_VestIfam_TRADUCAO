function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data)
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "722146277894-mi0m4rs0lgjmchmjc4j7jcd7g19okla3.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline",
       type:"icon",
       shape:"circle",
       theme:"filled_black",
       text:"signin_with",
       size:"large",
    
    
    
    }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }