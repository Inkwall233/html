function loadingMsg(data){
    let wrap = document.getElementById('infoListWrap');
    wrap.innerHTML = `<div class="loading-wait">
                        <p>${data.message}</p>
                        <div class='loading-icon'> <i class='iconfont iconjiazai'></i></div>    
                    </div>`
}