const toggleButton = document.querySelector(".toggle-switch");
const dogInfo = document.getElementById("dogInfo");
const catInfo = document.getElementById("catInfo");

const togglePet = () => {
    let pet = toggleButton.getAttribute("data-pet");
    toggleButton.setAttribute("aria-label", `Switch to ${pet}`);

    // 切換顯示的區塊
    if (pet === "dog") {
        dogInfo.style.display = "block";
        catInfo.style.display = "none";
    } else {
        dogInfo.style.display = "none";
        catInfo.style.display = "block";
    }

    // 切換寵物
    pet = pet === "dog" ? "cat" : "dog";
    toggleButton.setAttribute("data-pet", pet);
};

toggleButton.addEventListener("click", togglePet);