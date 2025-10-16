const STORAGE_KEYS = {
  AVATAR: "profileCard_avatar",
  AVATAR_NAME: "profileCard_avatarName",
};

function updateTimestamp() {
  const timestampEl = document.querySelector('[data-testid="test-user-time"]');
  if (timestampEl) {
    const now = new Date();
    timestampEl.textContent = `${Date.now()} (${now.toLocaleTimeString()})`;
  }
}

updateTimestamp();
setInterval(updateTimestamp, 1000);

function loadSavedAvatar() {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');
  if (!avatar) return;

  const savedAvatar = localStorage.getItem(STORAGE_KEYS.AVATAR);
  if (savedAvatar) {
    avatar.src = savedAvatar;
    console.log("✓ Loaded saved avatar from localStorage");
  }
}

async function saveAvatar(imageData, fileName) {
  try {
    localStorage.setItem(STORAGE_KEYS.AVATAR, imageData);
    localStorage.setItem(STORAGE_KEYS.AVATAR_NAME, fileName);
    console.log("✓ Avatar saved to localStorage");
    await showModal(
      "Avatar uploaded successfully! It will persist across page refreshes."
    );
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      await showModal(
        "Image too large to save. Please use a smaller image (under 2MB)."
      );
      console.error("❌ localStorage quota exceeded");
    } else {
      console.error("❌ Error saving avatar:", e);
    }
  }
}

async function resetAvatar() {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');
  if (!avatar) return;

  const defaultAvatar = "/assets/_DSC0109 (1).jpg";
  avatar.src = defaultAvatar;

  localStorage.removeItem(STORAGE_KEYS.AVATAR);
  localStorage.removeItem(STORAGE_KEYS.AVATAR_NAME);

  console.log("✓ Avatar reset to default");
  await showModal("Avatar reset to default image.");
}

function enableAvatarUpload() {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');

  if (!avatar) {
    console.error("❌ Avatar element not found");
    return;
  }

  avatar.style.cursor = "pointer";
  avatar.title = "Click to upload new avatar | Right-click to reset";

  avatar.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Please select an image file (JPG, PNG, GIF, etc.)");
          return;
        }

        const maxSize = 2 * 1024 * 1024;
        if (file.size > maxSize) {
          alert(
            `Image size is ${(file.size / 1024 / 1024).toFixed(
              2
            )}MB. Please use an image smaller than 2MB.`
          );
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const imageData = event.target.result;
          avatar.src = imageData;
          saveAvatar(imageData, file.name);
        };
        reader.readAsDataURL(file);
      }
    });

    input.click();
  });

  avatar.addEventListener("contextmenu", async (e) => {
    e.preventDefault();
    const confirmed = await showModal("Reset avatar to default image?", {
      confirm: true,
    });
    if (confirmed) {
      resetAvatar();
    }
  });
}

function showModal(message, options = { confirm: false }) {
  return new Promise((resolve) => {
    const overlay = document.getElementById("modal-overlay");
    const msg = document.getElementById("modal-message");
    const okBtn = document.getElementById("modal-ok");
    const cancelBtn = document.getElementById("modal-cancel");

    msg.textContent = message;
    overlay.style.display = "flex";
    okBtn.style.display = "inline-block";
    cancelBtn.style.display = options.confirm ? "inline-block" : "none";

    function cleanup(result) {
      overlay.style.display = "none";
      okBtn.removeEventListener("click", okHandler);
      cancelBtn.removeEventListener("click", cancelHandler);
      resolve(result);
    }
    function okHandler() {
      cleanup(true);
    }
    function cancelHandler() {
      cleanup(false);
    }

    okBtn.addEventListener("click", okHandler);
    cancelBtn.addEventListener("click", cancelHandler);
  });
}

loadSavedAvatar();
enableAvatarUpload();
