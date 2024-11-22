// 播放器控制
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const fastForwardBtn = document.getElementById("fastForwardBtn");
const speedBtn = document.getElementById("speedBtn");
const loopBtn = document.getElementById("loopBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const volumeSlider = document.getElementById("volumeSlider");
const progressBar = document.getElementById("progressBar");
const searchInput = document.getElementById("searchInput");

// 播放按钮
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "暂停";
    } else {
        audio.pause();
        playPauseBtn.textContent = "播放";
    }
});

// 快进按钮
fastForwardBtn.addEventListener("click", () => {
    audio.currentTime += 10; // 快进 10 秒
});

// 倍速按钮
let playbackRate = 1;
speedBtn.addEventListener("click", () => {
    playbackRate = playbackRate === 1 ? 1.5 : (playbackRate === 1.5 ? 2 : 1);
    audio.playbackRate = playbackRate;
    speedBtn.textContent = `${playbackRate}x`;
});

// 循环播放
loopBtn.addEventListener("click", () => {
    audio.loop = !audio.loop;
    loopBtn.textContent = audio.loop ? "取消循环" : "循环播放";
});

// 随机播放
shuffleBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * allAudioFiles.length);
    audio.src = allAudioFiles[randomIndex].src;
    audio.play();
    playPauseBtn.textContent = "暂停";
});

// 音量控制
volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value / 100;
});

// 音频进度条
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener("input", (e) => {
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// 搜索功能
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredFiles = allAudioFiles.filter(file => file.title.toLowerCase().includes(query));
    renderAudioFiles(filteredFiles);
});

// 音频文件数据
const allAudioFiles = [
    { title: "1.愚拙的童女", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/1%E6%84%9A%E6%8B%99%E7%9A%84%E7%AB%A5%E5%A5%B3.mp3" },
    { title: "2.聪明的童女", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/2%E8%81%AA%E6%98%8E%E7%9A%84%E7%AB%A5%E5%A5%B3.mp3" },
    { title: "3.第一位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/3.%E7%AC%AC%E4%B8%80%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "4.第二位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/4.%E7%AC%AC%E4%BA%8C%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "5.第三位天使的信息", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/5.%E7%AC%AC%E4%B8%89%E4%BD%8D%E5%A4%A9%E4%BD%BF%E4%BF%A1%E6%81%AF.mp3" },
    { title: "6.因信称义(1)上帝宝贵的应许", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/6.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%881%EF%BC%89%E4%B8%8A%E5%B8%9D%E5%AE%9D%E8%B4%B5%E7%9A%84%E5%BA%94%E8%AE%B8.mp3" },
    { title: "7.因信称义(2)基督的功劳是我们唯一的希望", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/7.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%882%20%EF%BC%89%E5%9F%BA%E7%9D%A3%E7%9A%84%E5%8A%9F%E5%8A%B3%E6%98%AF%E6%88%91%E4%BB%AC%E5%94%AF%E4%B8%80%E7%9A%84%E5%B8%8C%E6%9C%9B.mp3" },
    { title: "8.因信称义(3)基督是赐生命的主", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/8.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%883%EF%BC%89%E5%9F%BA%E7%9D%A3%E6%98%AF%E8%B5%90%E7%94%9F%E5%91%BD%E7%9A%84%E4%B8%BB.mp3" },
    { title: "9.因信称义(4)不是依靠自己的功劳", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/9.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%884%EF%BC%89%E4%B8%8D%E6%98%AF%E4%BE%9D%E9%9D%A0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%8A%9F%E5%8A%B3.mp3" },
    { title: "10.因信称义(5)认识自我", src: "https://test-bucket-20241.oss-cn-beijing.aliyuncs.com/%E9%9F%B3%E9%A2%91/10.%E5%9B%A0%E4%BF%A1%E7%A7%B0%E4%B9%89%EF%BC%885%EF%BC%89%E8%AE%A4%E8%AF%86%E8%87%AA%E6%88%91.mp3" }
];

// 分页功能
let currentPage = 1;
const itemsPerPage = 5;
const audioFilesList = document.getElementById("audio-files");

function getCurrentPageFiles(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allAudioFiles.slice(startIndex, endIndex);
}

function renderAudioFiles(files) {
    audioFilesList.innerHTML = ''; // 清空当前列表

    files.forEach(file => {
        const li = document.createElement("li");
        li.classList.add("audio-item");

        const title = document.createElement("h3");
        title.textContent = file.title;

        const duration = document.createElement("p");
        const audioElement = new Audio(file.src);
        audioElement.addEventListener("loadedmetadata", () => {
            const minutes = Math.floor(audioElement.duration / 60);
            const seconds = Math.floor(audioElement.duration % 60);
            duration.textContent = `时长: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        });

        li.appendChild(title);
        li.appendChild(duration);

        // 点击事件播放音频
        li.addEventListener("click", () => {
            audio.src = file.src;
            audio.play();
            playPauseBtn.textContent = "暂停";
        });

        // 下载按钮
        const downloadBtn = document.createElement("button");
        downloadBtn.textContent = "下载";
        downloadBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const link = document.createElement("a");
            link.href = file.src;
            link.download = file.title;
            link.click();
        });

        li.appendChild(downloadBtn);
        audioFilesList.appendChild(li);
    });

    renderPagination(currentPage);
}

function renderPagination(page) {
    const totalPages = Math.ceil(allAudioFiles.length / itemsPerPage);
    let paginationHtml = '';

    // 生成第一页按钮
    if (page > 1) {
        paginationHtml += `<button id="firstPageBtn">第一页</button>`;
    } else {
        paginationHtml += `<button id="firstPageBtn" disabled>第一页</button>`;
    }

    // 生成前一页按钮
    if (page > 1) {
        paginationHtml += `<button id="prevPageBtn">上一页</button>`;
    } else {
        paginationHtml += `<button id="prevPageBtn" disabled>上一页</button>`;
    }

    // 生成页面按钮
    for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button class="${i === page ? 'current-page' : ''}">${i}</button>`;
    }

    // 生成下一页按钮
    if (page < totalPages) {
        paginationHtml += `<button id="nextPageBtn">下一页</button>`;
    } else {
        paginationHtml += `<button id="nextPageBtn" disabled>下一页</button>`;
    }

    // 生成最后一页按钮
    if (page < totalPages) {
        paginationHtml += `<button id="lastPageBtn">最后一页</button>`;
    } else {
        paginationHtml += `<button id="lastPageBtn" disabled>最后一页</button>`;
    }

    // 显示当前页码和总页数
    paginationHtml += `<span>第 ${page} 页，共 ${totalPages} 页</span>`;

    const paginationContainer = document.createElement("div");
    paginationContainer.innerHTML = paginationHtml;

    // 为按钮添加事件
    const firstPageBtn = paginationContainer.querySelector("#firstPageBtn");
    if (firstPageBtn) {
        firstPageBtn.addEventListener("click", () => {
            currentPage = 1;
            renderAudioFiles(getCurrentPageFiles(currentPage));
        });
    }

    const prevPageBtn = paginationContainer.querySelector("#prevPageBtn");
    if (prevPageBtn) {
        prevPageBtn.addEventListener("click", () => {
            currentPage -= 1;
            renderAudioFiles(getCurrentPageFiles(currentPage));
        });
    }

    const nextPageBtn = paginationContainer.querySelector("#nextPageBtn");
    if (nextPageBtn) {
        nextPageBtn.addEventListener("click", () => {
            currentPage += 1;
            renderAudioFiles(getCurrentPageFiles(currentPage));
        });
    }

    const lastPageBtn = paginationContainer.querySelector("#lastPageBtn");
    if (lastPageBtn) {
        lastPageBtn.addEventListener("click", () => {
            currentPage = totalPages;
            renderAudioFiles(getCurrentPageFiles(currentPage));
        });
    }

    // 更新分页器
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = '';
    pagination.appendChild(paginationContainer);
}

// 初始化音频文件列表和分页
renderAudioFiles(getCurrentPageFiles(currentPage));



