(async () => {
    //fluxus
    const executor_fluxus = await axios.get("https://api-download-executor-roblox.vercel.app/executor-android?type=fluxus");
    const fluxus = executor_fluxus.data.name;
    const name_fluxus = document.getElementById('name-fluxus');
    name_fluxus.textContent = fluxus

    const img_fluxus = executor_fluxus.data.img;
    const img_fluxus_src = document.getElementById("img-fluxus");
    img_fluxus_src.src = img_fluxus

    const status_fluxus = executor_fluxus.data.status;
    const status_text_fluxus = document.getElementById("status-fluxus");
    status_text_fluxus.textContent = status_fluxus

    if(status_fluxus == "Working"){
        status_text_fluxus.style.backgroundColor = "green"
    } else {
    status_text_fluxus.style.backgroundColor = "red";
    }

    const button_fluxus = document.getElementById("link-fluxus");
    const link_fluxus =  executor_fluxus.data.link
    
    button_fluxus.addEventListener('click', function(){
        window.location.href = link_fluxus
    })



    //delta
    const executor_delta = await axios.get("https://api-download-executor-roblox.vercel.app/executor-android?type=delta");
    const delta = executor_delta.data.name;
    const name_delta =  document.getElementById('name-delta')
    name_delta.textContent = delta;

    const img_delta = executor_delta.data.img;
    const img_delta_src = document.getElementById("img-delta");
    img_delta_src.src = img_delta

    const status_delta = executor_delta.data.status;
    const status_text_delta = document.getElementById("status-delta");
    status_text_delta.textContent = status_delta;

    if(status_delta == "Working"){
        status_text_delta.style.backgroundColor = "green"
    } else {
    status_text_delta.style.backgroundColor = "red";
    }

    const button_delta = document.getElementById("link-delta");
    const link_delta =  executor_delta.data.link
    const update_link_delta = link_delta.replace(link_delta,"https://deltaexploits.gg/android_dl");
    
    button_delta.addEventListener('click', function(){
        window.location.href = update_link_delta
    })

    
    //codex
    const executor_codex = await axios.get("https://api-download-executor-roblox.vercel.app/executor-android?type=codex");
    const codex = executor_codex.data.name;
    const name_codex = document.getElementById('name-codex');
    name_codex.textContent = codex

    const img_codex = executor_codex.data.img;
    const img_codex_src = document.getElementById("img-codex");
    img_codex_src.src = img_codex

    const status_codex = executor_codex.data.status;
    const status_text_codex = document.getElementById("status-codex");
    status_text_codex.textContent = status_codex;

    if(status_codex == "Working"){
        status_text_codex.style.backgroundColor = "green"
    } else {
    status_text_codex.style.backgroundColor = "red";
    }

    const button_codex = document.getElementById("link-codex");
    const link_codex =  executor_codex.data.link
    
    button_codex.addEventListener('click', function(){
        window.location.href = link_codex
    })



    //arceus
    const executor_arceus = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=arceus x neo`);
    const arceus = executor_arceus.data.name;
    const name_arceus = document.getElementById('name-arceus');
    name_arceus.textContent = arceus

    const img_arceus = executor_arceus.data.img;
    const img_arceus_src = document.getElementById("img-arceus");
    img_arceus_src.src = img_arceus

    const status_arecus = executor_arceus.data.status;
    const status_text_arecus = document.getElementById("status-arceus");
    status_text_arecus.textContent = status_arecus;

    if(status_arecus == "Working"){
        status_text_arecus.style.backgroundColor = "green"
    } else {
    status_text_arecus.style.backgroundColor = "red";
    }

    const button_arceus = document.getElementById("link-arceus");
    const link_arceus =  executor_arceus.data.link
    
    button_arceus.addEventListener('click', function(){
        window.location.href = link_arceus
    })

    //vegax
    const executor_vegax = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=vegax`);
    const vegax = executor_vegax.data.name;
    const name_vegax = document.getElementById('name-vegax');
    name_vegax.textContent = vegax

    const img_vegax = executor_vegax.data.img;
    const img_vegax_src = document.getElementById("img-vegax");
    img_vegax_src.src = img_vegax

    const status_vegax = executor_vegax.data.status;
    const status_text_vegax = document.getElementById("status-vegax");
    status_text_vegax.textContent = status_vegax;

    if(status_vegax == "Working"){
        status_text_vegax.style.backgroundColor = "green"
    } else {
    status_text_vegax.style.backgroundColor = "red";
    }

    const button_vegax = document.getElementById("link-vegax");
    const link_vegax =  executor_arceus.data.link
    
    button_vegax.addEventListener('click', function(){
        window.location.href = link_vegax
    })



    //trigon
    const executor_trigon = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=trigon`);
    const trigon = executor_trigon.data.name;
    const name_trigon = document.getElementById('name-trigon');
    name_trigon.textContent = trigon

    const img_trigon = executor_trigon.data.img;
    const img_trigon_src = document.getElementById("img-trigon");
    img_trigon_src.src = img_trigon

    const status_trigon = executor_trigon.data.status;
    const status_text_trigon = document.getElementById("status-trigon");
    status_text_trigon.textContent = status_trigon;

    if(status_trigon == "Working"){
        status_text_trigon.style.backgroundColor = "green"
    } else {
    status_text_trigon.style.backgroundColor = "red";
    }

    const button_trigon = document.getElementById("link-trigon");
    const link_trigon =  executor_trigon.data.link
    
    button_trigon.addEventListener('click', function(){
        window.location.href = link_trigon
    })

    //cryptic
    const executor_cryptic = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=cryptic`);
    const cryptic = executor_cryptic.data.name;
    const name_cryptic = document.getElementById('name-cryptic');
    name_cryptic.textContent = cryptic

    const img_cryptic = executor_cryptic.data.img;
    const img_cryptic_src = document.getElementById("img-cryptic");
    img_cryptic_src.src = img_cryptic

    const status_cryptic = executor_cryptic.data.status;
    const status_text_cryptic = document.getElementById("status-cryptic");
    status_text_cryptic.textContent = status_cryptic;

    if(status_cryptic == "Working"){
        status_text_cryptic.style.backgroundColor = "green"
    } else {
    status_text_cryptic.style.backgroundColor = "red";
    }

    const button_cryptic = document.getElementById("link-cryptic");
    const link_cryptic =  executor_cryptic.data.link
    
    button_cryptic.addEventListener('click', function(){
        window.location.href = link_cryptic
    })
    
    //evon
    const executor_evon = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=evon`);
    const evon = executor_evon.data.name;
    const name_evon = document.getElementById('name-evon');
    name_evon.textContent = evon

    const img_evon = executor_evon.data.img;
    const img_evon_src = document.getElementById("img-evon");
    img_evon_src.src = img_evon

    const status_evon = executor_evon.data.status;
    const status_text_evon = document.getElementById("status-evon");
    status_text_evon.textContent = status_evon;

    if(status_evon == "Working"){
        status_text_evon.style.backgroundColor = "green"
    } else {
    status_text_evon.style.backgroundColor = "red";
    }

    const button_evon = document.getElementById("link-evon");
    const link_evon =  executor_evon.data.link
    
    button_evon.addEventListener('click', function(){
        window.location.href = link_evon
    })

    //cubix
    const executor_cubix = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=cubix`);
    const cubix = executor_cubix.data.name;
    const name_cubix = document.getElementById('name-cubix');
    name_cubix.textContent = cubix

    const img_cubix = executor_cubix.data.img;
    const img_cubix_src = document.getElementById("img-cubix");
    img_cubix_src.src = img_cubix

    const status_cubix = executor_cubix.data.status;
    const status_text_cubix = document.getElementById("status-cubix");
    status_text_cubix.textContent = status_cubix;

    if(status_cubix == "Working"){
        status_text_cubix.style.backgroundColor = "green"
    } else {
    status_text_cubix.style.backgroundColor = "red";
    }

    const button_cubix = document.getElementById("link-cubix");
    const link_cubix =  executor_cubix.data.link
    
    button_cubix.addEventListener('click', function(){
        window.location.href = link_cubix
    })

    //flexer
    const executor_flexer = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=flexer`);
    const flexer = executor_flexer.data.name;
    const name_flexer = document.getElementById('name-flexer');
    name_flexer.textContent = flexer

    const img_flexer = executor_flexer.data.img;
    const img_flexer_src = document.getElementById("img-flexer");
    img_flexer_src.src = img_flexer

    const status_flexer = executor_flexer.data.status;
    const status_text_flexer = document.getElementById("status-flexer");
    status_text_flexer.textContent = status_flexer;

    if(status_flexer == "Working"){
        status_text_flexer.style.backgroundColor = "green"
    } else {
    status_text_flexer.style.backgroundColor = "red";
    }

    const button_flexer = document.getElementById("link-flexer");
    const link_flexer =  executor_flexer.data.link
    
    button_flexer.addEventListener('click', function(){
        window.location.href = link_flexer
    })


    //hydrogen
    const executor_hydrogen = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-android?type=hydrogen`);
    const hydrogen = executor_hydrogen.data.name;
    const name_hydrogen = document.getElementById('name-hydrogen');
    name_hydrogen.textContent = hydrogen

    const img_hydrogen = executor_hydrogen.data.img;
    const img_hydrogen_src = document.getElementById("img-hydrogen");
    img_hydrogen_src.src = img_hydrogen

    const status_hydrogen = executor_hydrogen.data.status;
    const status_text_hydrogen = document.getElementById("status-hydrogen");
    status_text_hydrogen.textContent = status_hydrogen;

    if(status_hydrogen == "Working"){
        status_text_hydrogen.style.backgroundColor = "green"
    } else {
    status_text_hydrogen.style.backgroundColor = "red";
    }

    const button_hydrogen = document.getElementById("link-hydrogen");
    const link_hydrogen =  executor_hydrogen.data.link
    
    button_hydrogen.addEventListener('click', function(){
        window.location.href = link_hydrogen
    })
})()
