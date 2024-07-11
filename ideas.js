// Mock data for Idea Cards
const ideaCardsData = [
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.Zu28ff281XwKujEkrOSGpwAAAA&pid=Api',
    title: 'Project Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: 'HTML, CSS, JavaScript',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.Zu28ff281XwKujEkrOSGpwAAAA&pid=Api',
    title: 'Project Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: 'HTML, CSS, JavaScript',
  },
  // Add more idea cards data as needed
];

// Function to create Idea Cards dynamically
function createIdeaCards() {
  const ideaCardsContainer = document.getElementById('idea-cards-container');

  ideaCardsData.forEach((data) => {
    const ideaCard = document.createElement('div');
    ideaCard.classList.add('idea-card');

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = 'Project Preview';

    const content = document.createElement('div');
    content.classList.add('idea-card-content');

    const title = document.createElement('div');
    title.classList.add('idea-card-title');
    title.textContent = data.title;

    const description = document.createElement('div');
    description.classList.add('idea-card-description');
    description.textContent = data.description;

    const techStack = document.createElement('div');
    techStack.classList.add('idea-card-tech-stack');
    techStack.textContent = `Tech Stack: ${data.techStack}`;

    const viewDetailsBtn = document.createElement('button');
    viewDetailsBtn.classList.add('idea-card-btn');
    viewDetailsBtn.textContent = 'View Details';

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(techStack);
    content.appendChild(viewDetailsBtn);

    ideaCard.appendChild(image);
    ideaCard.appendChild(content);

    ideaCardsContainer.appendChild(ideaCard);
  });
}

createIdeaCards();
