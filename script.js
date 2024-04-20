
        // Function to show the signup section and hide the login section
        function showSignUp() {
          document.getElementById("login-section").style.display = "none";
          document.getElementById("signup-section").style.display = "block";
      }

      // Function to show the login section and hide the signup section
      function showLogin() {
          document.getElementById("login-section").style.display = "block";
          document.getElementById("signup-section").style.display = "none";
      }

      // Function to handle signup form submission
      function signUp() {
          var username = document.getElementById("signup-username").value;
          var password = document.getElementById("signup-password").value;

          // Retrieve existing users from local storage
          var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

          // Check if username already exists
          var existingUser = existingUsers.find(function(user) {
              return user.username === username;
          });

          // If username doesn't exist, add the new user
          if (!existingUser) {
              existingUsers.push({ username: username, password: password });
              // Store updated users array in local storage
              localStorage.setItem("users", JSON.stringify(existingUsers));
              alert("Signed up successfully!");
              // Optionally, you can clear the input fields after signup
              document.getElementById("signup-username").value = "";
              document.getElementById("signup-password").value = "";
              // Show the login section after successful signup
              showLogin();
          } else {
              alert("Username already exists! Please choose a different username.");
          }
      }

      // Function to handle login form submission
      function login() {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
    
        // Retrieve users from local storage
        var users = JSON.parse(localStorage.getItem("users")) || [];
    
        // Find the user with the given username
        var user = users.find(function(user) {
            return user.username === username;
        });
    
        // If user exists and password matches, login successful
        if (user && user.password === password) {
            window.location.href = "https://657de603ff0bc25b8daadece--enchanting-dodol-5c230c.netlify.app/"; // Replace "another_page.html" with the URL of the page you want to redirect to
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
    