const toggleButton = document.querySelector(".toggle-switch");

const togglePet = () => {
	let pet = toggleButton.getAttribute("data-pet");
	toggleButton.setAttribute("aria-label", `Switch to ${pet}`);
	pet = pet === "dog" ? "cat" : "dog";
	toggleButton.setAttribute("data-pet", pet);
};

toggleButton.addEventListener("click", togglePet);
