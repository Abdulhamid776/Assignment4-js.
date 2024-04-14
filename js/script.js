// Add student ID and name dynamically
const studentInform = document.getElementById('student-info'); // corrected ID
const studentId = "1221340";
const studentName = "Abdulhamid";
studentInform.textContent = `Student ID: ${studentId} - Name: ${studentName}`;

// Make a call to New York Times API
const apiKey = 'dBbmTSJcBnAIlFRdVSzrpJHLwiexcN7r';
const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Output data of the first article to the page
        const firstArticle = data.results[0];
        const articleTitle = firstArticle.title;
        const articleAbstract = firstArticle.abstract;
        const articleUrl = firstArticle.url;

        const articleData = document.createElement('div');
        articleData.innerHTML = `
            <h2>${articleTitle}</h2>
            <p>${articleAbstract}</p>
            <p>Read more: <a href="${articleUrl}" target="_blank">${articleUrl}</a></p>
        `;
        document.body.appendChild(articleData);
    })
    .catch(error => console.error('Error fetching data:', error));
