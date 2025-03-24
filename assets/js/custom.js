// Toggle dark/light skin
(function () {
    const toggle = document.getElementById("skin-toggle");
    const currentSkin = localStorage.getItem("mm-skin") || "default";
  
    if (currentSkin === "dark") {
      document.documentElement.setAttribute("data-skin", "dark");
    }
  
    toggle?.addEventListener("click", function () {
      const html = document.documentElement;
      const newSkin = html.getAttribute("data-skin") === "dark" ? "default" : "dark";
      html.setAttribute("data-skin", newSkin);
      localStorage.setItem("mm-skin", newSkin);
    });
  })();
  