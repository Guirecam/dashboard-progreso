console.log('funcionando')

fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
        console.log("Proyectos cargados del JSON", projects);
    })
    .catch((error) => {
        console.error("Error cargando projects.json", error);
    });