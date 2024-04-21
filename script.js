
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

      function signUp() {
          var username = document.getElementById("signup-username").value;
          var password = document.getElementById("signup-password").value;

          var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

          var existingUser = existingUsers.find(function(user) {
              return user.username === username;
          });

          if (!existingUser) {
              existingUsers.push({ username: username, password: password });
              localStorage.setItem("users", JSON.stringify(existingUsers));
              alert("Signed up successfully!");
              document.getElementById("signup-username").value = "";
              document.getElementById("signup-password").value = "";
              showLogin();
          } else {
              alert("Username already exists! Please choose a different username.");
          }
      }

      function login() {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        var users = JSON.parse(localStorage.getItem("users")) || [];
        var user = users.find(function(user) {
            return user.username === username;
        });
        if (user && user.password === password) {
            window.location.href = "https://657de603ff0bc25b8daadece--enchanting-dodol-5c230c.netlify.app/"; // Replace "another_page.html" with the URL of the page you want to redirect to
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
    
