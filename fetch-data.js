document.addEventListener('DOMContentLoaded', function () {
    // Define the async function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
        const dataContainer = document.getElementById('api-data'); // Container for user data

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const users = await response.json(); // Convert response to JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the list of users
            const userList = document.createElement('ul');

            // Loop through the users and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text content to the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the fetchUserData function when the DOM is fully loaded
    fetchUserData();
});