// 故事數據結構
let storyData = {};
let beforeScene = 'start';
// 從 Markdown 檔案讀取故事內容
fetch('story_content.md')
    .then(response => response.text())
    .then(text => {
        // 解析 Markdown 內容
        const sections = text.split('### ');
        sections.forEach(section => {
            if (section.trim()) {
                const [title, ...content] = section.split('\n');
                const sceneId = title.trim();
                const sceneText = content.join('\n').trim();
                // 創建場景對象
                storyData[sceneId] = {
                    text: sceneText,
                    image: `images/${sceneId}.jpeg`,
                    choices: getChoicesForScene(sceneId)
                };
                
                // 設置特殊標記
                if (sceneId.startsWith('badEnding')) {
                    storyData[sceneId].isBadEnding = true;
                }
                if (sceneId === 'epilogue') {
                    storyData[sceneId].isEnding = true;
                }
                beforeScene = sceneId;
            }
        });
        
        // 初始化遊戲
        showScene('start');
    })
    .catch(error => console.error('Error loading story content:', error));

// 根據場景 ID 返回對應的選項
function getChoicesForScene(sceneId) {
    const choices = {
        start: [
            { text: "等待清道夫離開", next: "virtualview" },
            { text: "嘗試逃跑", next: "badEnding1" },
        ],
        virtualview: [
            { text: "...", next: "action" },
        ],
        action: [
            { text: "立即使用芯片", next: "useChip" },
            { text: "先檢查芯片", next: "badEnding3" }
        ],
        useChip: [
            { text: "繼續前進", next: "ventilation" },
            { text: "休息一下", next: "badEnding4" }
        ],
        ventilation: [
            { text: "使用音律破解", next: "serverRoom" },
            { text: "嘗試強行破壞音波陷阱", next: "badEnding5" }
        ],
        serverRoom: [
            { text: "扯出腦控晶片", next: "finalBattle" },
            { text: "直接逃跑", next: "badEnding6" }
        ],
        finalBattle: [
            { text: "面對終焉織者, 你選擇成為容器", next: "mainEnding" },
            { text: "嘗試直接摧毀終焉織者", next: "badEnding7" }
        ],
        mainEnding: [
            { text: "你將以新另一種型態守護這座城市", next: "epilogue" }
        ],
        epilogue: [
            { text: "故事結束。願音律永存。", next: "epilogue" }
        ]
    };
    
    // 為壞結局添加返回選項
    if (sceneId.startsWith('badEnding')) {
        return [
            { text: "返回上一個場景", next: beforeScene },
            { text: "重新開始", next: "restart" }
        ];
    }
    
    return choices[sceneId] || [];
}

// 遊戲狀態
let currentScene = 'start';
let storyProgress = 0;

// DOM元素
const storyText = document.getElementById('storyText').querySelector('#storyTextBox');
const storyImage = document.getElementById('storyImage');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('storyProgress');
const restartBtn = document.getElementById('restartBtn');

// 更新故事進度條
function updateProgress() {
    const totalScenes = Object.keys(storyData).length-1;
    storyProgress = (Object.keys(storyData).indexOf(currentScene) / totalScenes) * 100;
    progressBar.style.width = `${storyProgress}%`;
}

// 顯示當前場景
function showScene(sceneId) {
    beforeScene = currentScene;
    // 更新當前場景
    currentScene = sceneId;
    // 更新進度條
    updateProgress();


    const scene = storyData[sceneId];
    if (!scene) return;

    // 更新文本，將 \n 轉換為 <br>
    storyText.innerHTML = scene.text.replace(/\n/g, '<br>');
    
    // 更新圖片
    if (scene.image) {
        storyImage.innerHTML = `<img src="${scene.image}" alt="故事場景">`;
    }
    
    // 更新選項
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-btn');
        button.onclick = () => {
            if (choice.next === 'restart') {
                showScene('start');
            } else {
                showScene(choice.next);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        choicesContainer.appendChild(button);
    });
    
    

    // 處理壞結局特殊樣式
    if (scene.isBadEnding) {
        document.querySelector('.story-container').classList.add('bad-ending');
    } else {
        document.querySelector('.story-container').classList.remove('bad-ending');
    }
}

// 重新開始遊戲
restartBtn.addEventListener('click', () => {
    showScene('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 初始化遊戲
window.onload = function() {
    // 等待故事內容加載完成後再顯示初始場景
    if (Object.keys(storyData).length > 0) {
        showScene('start');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}; 