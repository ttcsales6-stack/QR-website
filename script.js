
const toast = document.getElementById("toast");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-coming-soon]").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(item.dataset.comingSoon + " link will be added soon.");
  });
});

document.getElementById("shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "Touch Tell Distributors",
    text: "Touch Tell Distributors",
    url: window.location.href
  };

  try{
    if(navigator.share){
      await navigator.share(shareData);
    }else{
      await navigator.clipboard.writeText(window.location.href);
      showToast("Page link copied.");
    }
  }catch(error){}
});
