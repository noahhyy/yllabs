// ================================
// Star-Lite Team Script
// ================================

// Sample team data
const teamData = {
    executiveTeam: [
        {
            name: "Alice Nova",
            role: "CEO",
            image: "assets/images/team/alice.jpg",
            bio: "Visionary leader driving Star-Lite forward."
        },
        {
            name: "Leo Orion",
            role: "COO",
            image: "assets/images/team/leo.jpg",
            bio: "Ensuring smooth operations and strategy."
        }
    ],
    operationsTeam: [
        {
            name: "Maya Vega",
            role: "Community Manager",
            image: "assets/images/team/maya.jpg",
            bio: "Connecting with our amazing community."
        },
        {
            name: "Ethan Sol",
            role: "Operations Lead",
            image: "assets/images/team/ethan.jpg",
            bio: "Managing daily operations efficiently."
        }
    ],
    engineeringTeam: [
        {
            name: "Rina Sky",
            role: "Frontend Developer",
            image: "assets/images/team/rina.jpg",
            bio: "Building beautiful interfaces for Star-Lite."
        },
        {
            name: "Kai Moon",
            role: "Backend Developer",
            image: "assets/images/team/kai.jpg",
            bio: "Creating robust and scalable systems."
        }
    ],
    supportTeam: [
        {
            name: "Luna Star",
            role: "Support Agent",
            image: "assets/images/team/luna.jpg",
            bio: "Always here to help our users."
        },
        {
            name: "Noah Sky",
            role: "Support Agent",
            image: "assets/images/team/noah.jpg",
            bio: "Ensuring smooth support and happy users."
        }
    ]
};

// Function to create a team card
function createTeamCard(member) {
    const card = document.createElement("div");
    card.classList.add("team-card");

    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p class="role">${member.role}</p>
        <p class="bio">${member.bio}</p>
    `;

    return card;
}

// Function to populate a section
function populateTeam(sectionId, members) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    members.forEach(member => {
        const card = createTeamCard(member);
        section.appendChild(card);
    });
}

// Populate all sections
document.addEventListener("DOMContentLoaded", () => {
    populateTeam("executiveTeam", teamData.executiveTeam);
    populateTeam("operationsTeam", teamData.operationsTeam);
    populateTeam("engineeringTeam", teamData.engineeringTeam);
    populateTeam("supportTeam", teamData.supportTeam);
});
