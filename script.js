console.log('funcionando')

fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
        const container = document.getElementById("projects");
        projects.forEach(project => {
            const card = document.createElement("article");
            card.classList.add("project-card");
            card.innerHTML = `
    <h2 class="project-title">${project.title}</h2>
        <div class="progress-wrapper">
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${project.progress}%">
            <span class="progress-number">${project.progress}%</span></div>
        </div>
    </div>
    <p class="project-description">${project.description}</p>
    
    <p class="project-status">Estado: ${project.status}</p>
    <p class="project-category">Categoría: ${project.category}</p>
`;

            container.appendChild(card);
        });
    })

    .catch((error) => {
        console.error("Error cargando projects.json", error);
    });