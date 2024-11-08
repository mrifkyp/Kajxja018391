(async () => {


    //solara
    const executor_solara = await axios.get("https://api-download-executor-roblox.vercel.app/executor-pc?type=solara");
    const solara = executor_solara.data.name;
    const name_solara =  document.getElementById('name-solara')
    name_solara.textContent = solara;

    const img_solara = executor_solara.data.img;
    const img_solara_src = document.getElementById("img-solara");
    img_solara_src.src = img_solara

    const status_solara = executor_solara.data.status;
    const status_text_solara = document.getElementById("status-solara");
    status_text_solara.textContent = status_solara;

    if(status_solara == "Working"){
        status_text_solara.style.backgroundColor = "green"
    } else {
    status_text_solara.style.backgroundColor = "red";
    }

    const button_solara = document.getElementById("link-solara");
    const link_solara =  executor_solara.data.link
    
    button_solara.addEventListener('click', function(){
        window.location.href = link_solara
    })
  
    //wave
    const executor_wave = await axios.get("https://api-download-executor-roblox.vercel.app/executor-pc?type=wave");
    const wave = executor_wave.data.name;
    const name_wave =  document.getElementById('name-wave')
    name_wave.textContent = wave;

    const img_wave = executor_wave.data.img;
    const img_wave_src = document.getElementById("img-wave");
    img_wave_src.src = img_wave

    const status_wave = executor_wave.data.status;
    const status_text_wave = document.getElementById("status-wave");
    status_text_wave.textContent = status_wave;

    if(status_wave == "Working"){
        status_text_wave.style.backgroundColor = "green"
    } else {
    status_text_wave.style.backgroundColor = "red";
    }

    const button_wave = document.getElementById("link-wave");
    const link_wave =  executor_wave.data.link
    
    button_wave.addEventListener('click', function(){
        window.location.href = link_wave
    })
    
    
    const executor_flexer = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-pc?type=flexer`);
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
    
    
const executor_nezur = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-pc?type=nezur pc external`);
    const nezur = executor_nezur.data.name;
    const name_nezur = document.getElementById('name-nezur');
    name_nezur.textContent = nezur

    const img_nezur = executor_nezur.data.img;
    const img_nezur_src = document.getElementById("img-nezur");
    img_nezur_src.src = img_nezur;

    const status_nezur = executor_nezur.data.status;
    const status_text_nezur = document.getElementById("status-nezur");
    status_text_nezur.textContent = status_nezur;

    if(status_nezur == "Working"){
        status_text_nezur.style.backgroundColor = "green"
    } else {
    status_text_nezur.style.backgroundColor = "red";
    }

    const button_nezur = document.getElementById("link-nezur");
    const link_nezur =  executor_nezur.data.link;
    
    button_nezur.addEventListener('click', function() {
        window.location.href = link_nezur
    })
    
const executor_kiwi = await axios.get(`https://api-download-executor-roblox.vercel.app/executor-pc?type=kiwi x pc external`);
    const kiwi = executor_kiwi.data.name;
    const name_kiwi = document.getElementById('name-kiwi');
    name_kiwi.textContent = kiwi

    const img_kiwi = executor_kiwi.data.img;
    const img_kiwi_src = document.getElementById("img-kiwi");
    img_kiwi_src.src = img_kiwi;

    const status_kiwi = executor_kiwi.data.status;
    const status_text_kiwi = document.getElementById("status-kiwi");
    status_text_kiwi.textContent = status_kiwi;

if (status_kiwi === "Working") {
    status_text_kiwi.style.backgroundColor = "green"
} else {
    status_text_kiwi.style.backgroundColor = "red";
}

const button_kiwi = document.getElementById("link-kiwi");
const link_kiwi = executor_kiwi.data.link;

button_kiwi.addEventListener('click', function() {
        window.location.href = link_kiwi
    });
})();