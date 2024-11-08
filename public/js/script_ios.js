(async () => {
    // delta
    const executor_delta = await axios.get("https://api-download-executor-roblox.vercel.app/executor-ios?type=delta");
    const delta = executor_delta.data.name;
    const name_delta = document.getElementById('name-delta');
    name_delta.textContent = delta;

    const img_delta = executor_delta.data.img;
    const img_delta_src = document.getElementById("img-delta");
    img_delta_src.src = img_delta;

    const status_delta = executor_delta.data.status;
    const status_text_delta = document.getElementById("status-delta");
    status_text_delta.textContent = status_delta;

    if(status_delta == "Working"){
      status_text_delta.style.backgroundColor = "green";
    } else {
      status_text_delta.style.backgroundColor = "red";
    }

    const button_delta = document.getElementById("link-delta");
    const link_delta = executor_delta.data.link;
    
    button_delta.addEventListener('click', function(){
      window.location.href = link_delta;
    });

    // arceus x neo
    const executor_arceus = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-ios?type=arceus x neo`);
    const arceus = executor_arceus.data.name;
    const name_arceus = document.getElementById('name-arceus');
    name_arceus.textContent = arceus;

    const img_arceus = executor_arceus.data.img;
    const img_arceus_src = document.getElementById("img-arceus");
    img_arceus_src.src = img_arceus;

    const status_arecus = executor_arceus.data.status;
    const status_text_arecus = document.getElementById("status-arceus");
    status_text_arecus.textContent = status_arecus;

    if(status_arecus == "Working"){
      status_text_arecus.style.backgroundColor = "green";
    } else {
      status_text_arecus.style.backgroundColor = "red";
    }

    const button_arceus = document.getElementById("link-arceus");
    const link_arceus = executor_arceus.data.link;
    
    button_arceus.addEventListener('click', function(){
      window.location.href = link_arceus;
    });

    // cubix
    const executor_cubix = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-ios?type=cubix`);
    const cubix = executor_cubix.data.name;
    const name_cubix = document.getElementById('name-cubix');
    name_cubix.textContent = cubix;

    const img_cubix = executor_cubix.data.img;
    const img_cubix_src = document.getElementById("img-cubix");
    img_cubix_src.src = img_cubix;

    const status_cubix = executor_cubix.data.status;
    const status_text_cubix = document.getElementById("status-cubix");
    status_text_cubix.textContent = status_cubix;

    if(status_cubix == "Working"){
      status_text_cubix.style.backgroundColor = "green";
    } else {
      status_text_cubix.style.backgroundColor = "red";
    }

    const button_cubix = document.getElementById("link-cubix");
    const link_cubix = executor_cubix.data.link;
    
    button_cubix.addEventListener('click', function(){
      window.location.href = link_cubix;
    });

    // flexer
    const executor_flexer = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-ios?type=flexer`);
    const flexer = executor_flexer.data.name;
    const name_flexer = document.getElementById('name-flexer');
    name_flexer.textContent = flexer;

    const img_flexer = executor_flexer.data.img;
    const img_flexer_src = document.getElementById("img-flexer");
    img_flexer_src.src = img_flexer;

    const status_flexer = executor_flexer.data.status;
    const status_text_flexer = document.getElementById("status-flexer");
    status_text_flexer.textContent = status_flexer;

    if(status_flexer == "Working"){
      status_text_flexer.style.backgroundColor = "green";
    } else {
      status_text_flexer.style.backgroundColor = "red";
    }

    const button_flexer = document.getElementById("link-flexer");
    const link_flexer = executor_flexer.data.link;
    
    button_flexer.addEventListener('click', function(){
      window.location.href = link_flexer;
    });

// Apple Ware
const executor_apple = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-ios?type=apple ware`);
const apple = executor_apple.data.name;
const name_apple = document.getElementById('name-apple');
name_apple.textContent = apple;

const img_apple = executor_apple.data.img;
const img_apple_src = document.getElementById("img-apple");
img_apple_src.src = img_apple;

const status_apple = executor_apple.data.status;
const status_text_apple = document.getElementById("status-apple");
status_text_apple.textContent = status_apple;

if(status_apple === "Working") {
    status_text_apple.style.backgroundColor = "green";
} else {
    status_text_apple.style.backgroundColor = "red";
}

const button_apple = document.getElementById("link-apple");
const link_apple = executor_apple.data.link;

button_apple.addEventListener('click', function() {
    window.location.href = link_apple;
});
})();