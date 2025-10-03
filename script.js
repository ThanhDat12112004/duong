// Video Data
const VIDEO_DURATION = 32; // seconds

const scenes = [
  {
    startTime: 0,
    endTime: 3,
    name: 'Opening',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'sleeping',
    props: ['🛏️', '📱'],
    emoji: '🔔',
    bgElements: ['☀️', '🌤️', '🌅', '✨'],
    timeOfDay: '07:00',
    sceneType: 'morning',
    description: 'Chuông báo thức reo, một ngày mới bắt đầu...',
    messengerMessage: 'Chào buổi sáng, em đẹp hơn ánh nắng rồi đó ☀️💌',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '😊 Cười toe toét',
  },
  {
    startTime: 3,
    endTime: 8,
    name: 'Scene 1: Đi làm',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'walking',
    props: ['🎒', '☕'],
    emoji: '🚗',
    bgElements: ['🏢', '🚦', '☁️', '🌳'],
    timeOfDay: '08:30',
    sceneType: 'commute',
    description: 'Dương vội vã chuẩn bị đi làm',
    messengerMessage: 'Nhớ ăn sáng nha, không thì anh report vì tội bỏ bữa 😏🍳',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '😤 Hờn dỗi (nhưng vẫn đói)',
  },
  {
    startTime: 8,
    endTime: 12,
    name: 'Scene 2: Ăn trưa',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'sitting',
    props: ['🍜', '🥢'],
    emoji: '🍜',
    bgElements: ['🍝', '🍕', '🥗', '☕'],
    timeOfDay: '12:00',
    sceneType: 'lunch',
    description: 'Giờ nghỉ trưa, Dương ăn mì tôm (lại)',
    messengerMessage: 'Mì nữa hả? Em mà là code thì chắc là vòng lặp vô hạn 🍜🤣',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '🙄 Lăn mắt (nhưng vẫn ăn tiếp)',
  },
  {
    startTime: 12,
    endTime: 15,
    name: 'Scene 3: Buổi chiều làm việc',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'working',
    props: ['💻', '📱'],
    emoji: '💼',
    bgElements: ['📊', '📈', '📝', '⏰'],
    timeOfDay: '15:00',
    sceneType: 'work',
    description: 'Dương làm việc mệt mỏi',
    messengerMessage: 'System Alert 🚨: Phát hiện crush mệt → yêu cầu nghỉ 5 phút',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '😴 Ngáp dài',
  },
  {
    startTime: 15,
    endTime: 18,
    name: 'Scene 4: Tan làm',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'walking',
    props: ['🎒', '🌸'],
    emoji: '🎉',
    bgElements: ['🌆', '🚶‍♀️', '🎊', '✨'],
    timeOfDay: '17:30',
    sceneType: 'evening',
    description: 'Cuối cùng cũng hết giờ làm!',
    messengerMessage: 'Congrats 🎉! Em đã vượt qua 1 ngày, phần thưởng: 1 ly cafe',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '🤩 Mắt sáng rực',
  },
  {
    startTime: 18,
    endTime: 23,
    name: 'Scene 5: Buổi tối',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'sitting',
    props: ['🍱', '📱'],
    emoji: '🌙',
    bgElements: ['🌃', '⭐', '🌙', '✨'],
    timeOfDay: '20:00',
    sceneType: 'night',
    description: 'Dương ăn tối và thư giãn',
    messengerMessage: 'Anh cá là em đang ăn ngon. Nếu không thì mai anh ship đồ ngon qua 😜',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '😋 Đang nhai',
  },
  {
    startTime: 23,
    endTime: 28,
    name: 'Scene 6: Trước khi ngủ',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    pose: 'sleeping',
    props: ['🛏️', '🌙'],
    emoji: '💤',
    bgElements: ['🌙', '⭐', '💫', '✨'],
    timeOfDay: '23:00',
    sceneType: 'night',
    description: 'Dương chuẩn bị đi ngủ',
    messengerMessage: 'Ngày nào cũng bình thường, nhưng nhờ có em mà thành đặc biệt ❤️',
    messengerName: 'Anh Coder 👨‍💻',
    reaction: '🥰 Tim đập loạn',
  },
  {
    startTime: 28,
    endTime: 32,
    name: 'Ending',
    characterImage: 'AnhKhuonMatCuaCoAy.jpg',
    characterImage2: 'AnhKhuonMatCuaToi.jpg',
    pose: 'couple',
    emoji: '💌',
    bgElements: ['❤️', '💕', '💖', '💗'],
    timeOfDay: '',
    sceneType: 'ending',
    description: 'Kết thúc một ngày đặc biệt',
    messengerMessage: null,
    endingText: 'Một ngày của em, nhưng có anh thì khác 💌',
    reaction: null,
  },
];

// State
let isPlaying = false;
let currentTime = 0;
let animationFrameId = null;
let lastTimestamp = 0;

// DOM Elements
const videoScreen = document.getElementById('videoScreen');
const currentScene = document.getElementById('currentScene');
const btnPlay = document.getElementById('playBtn');
const btnPause = document.getElementById('pauseBtn');
const btnReset = document.getElementById('resetBtn');
const btnSkip = document.getElementById('skipBtn');
const progressFill = document.querySelector('.progress-fill');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const sceneInfo = document.getElementById('sceneInfo');

// Format time (seconds to MM:SS)
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Get current scene based on time
function getCurrentScene(time) {
  return scenes.find((scene) => time >= scene.startTime && time < scene.endTime);
}

// Create anime character with real face photo
function createAnimeCharacter(faceImage) {
  const animeChar = document.createElement('div');
  animeChar.className = 'anime-character';

  // Face (real photo)
  const face = document.createElement('img');
  face.className = 'character-face';
  face.src = faceImage;
  face.alt = 'Character';

  // Body
  const body = document.createElement('div');
  body.className = 'character-body';

  // Arms
  const arms = document.createElement('div');
  arms.className = 'character-arms';
  const leftArm = document.createElement('div');
  leftArm.className = 'arm left';
  const rightArm = document.createElement('div');
  rightArm.className = 'arm right';
  arms.appendChild(leftArm);
  arms.appendChild(rightArm);
  body.appendChild(arms);

  // Legs
  const legs = document.createElement('div');
  legs.className = 'character-legs';
  const leftLeg = document.createElement('div');
  leftLeg.className = 'leg left';
  const rightLeg = document.createElement('div');
  rightLeg.className = 'leg right';
  legs.appendChild(leftLeg);
  legs.appendChild(rightLeg);

  // Assemble character
  animeChar.appendChild(face);
  animeChar.appendChild(body);
  animeChar.appendChild(legs);

  return animeChar;
}

// Update scene display
function updateScene(scene) {
  if (!scene) return;

  // Set scene type for background
  currentScene.setAttribute('data-scene', scene.sceneType);

  // Clear current scene
  currentScene.innerHTML = '';

  // Add background elements
  if (scene.bgElements) {
    scene.bgElements.forEach((element, index) => {
      const bgElement = document.createElement('div');
      bgElement.className = 'bg-element';
      bgElement.textContent = element;
      bgElement.style.animationDelay = `${index * 0.5}s`;
      currentScene.appendChild(bgElement);
    });
  }

  // Add props (đạo cụ)
  if (scene.props) {
    scene.props.forEach((prop, index) => {
      const propElement = document.createElement('div');
      propElement.className = 'prop';
      propElement.textContent = prop;

      // Position props based on scene type
      if (scene.pose === 'sleeping') {
        if (index === 0) {
          propElement.className += ' bed';
        } else if (index === 1) {
          propElement.className += ' phone';
          propElement.style.top = '20%';
          propElement.style.right = '20%';
        }
      } else if (scene.pose === 'working') {
        if (index === 0) {
          propElement.className += ' laptop';
          propElement.style.bottom = '50px';
          propElement.style.left = '50%';
          propElement.style.transform = 'translateX(-50%)';
        } else if (index === 1) {
          propElement.className += ' phone';
          propElement.style.bottom = '60px';
          propElement.style.right = '20%';
        }
      } else if (scene.pose === 'sitting') {
        if (index === 0) {
          propElement.className += ' food';
          propElement.style.bottom = '80px';
          propElement.style.left = '50%';
          propElement.style.transform = 'translateX(-50%)';
        }
      } else if (scene.pose === 'walking') {
        propElement.style.top = `${30 + index * 40}%`;
        propElement.style.left = `${20 + index * 60}%`;
      }

      currentScene.appendChild(propElement);
    });
  }

  // Create scene elements with character
  const sceneImage = document.createElement('div');
  sceneImage.className = 'scene-image';

  const character = document.createElement('div');
  character.className = `character ${scene.pose}`;

  // Create anime character with real face
  if (scene.pose === 'couple') {
    // Create couple for ending scene
    const couple = document.createElement('div');
    couple.style.display = 'flex';
    couple.style.gap = '30px';

    // Girl character
    const girl = createAnimeCharacter(scene.characterImage);
    // Boy character
    const boy = createAnimeCharacter(scene.characterImage2);

    couple.appendChild(girl);
    couple.appendChild(boy);
    character.appendChild(couple);
  } else {
    const animeChar = createAnimeCharacter(scene.characterImage);
    character.appendChild(animeChar);
  }

  sceneImage.appendChild(character);

  // Add time overlay (except ending)
  if (scene.timeOfDay) {
    const timeOverlay = document.createElement('div');
    timeOverlay.className = 'time-overlay';
    timeOverlay.textContent = scene.timeOfDay;
    currentScene.appendChild(timeOverlay);
  }

  // Add scene text
  const sceneText = document.createElement('div');
  sceneText.className = 'scene-text';
  sceneText.textContent = scene.description;

  currentScene.appendChild(sceneImage);
  currentScene.appendChild(sceneText);

  // Add messenger popup (if message exists)
  if (scene.messengerMessage) {
    setTimeout(() => {
      const messengerPopup = document.createElement('div');
      messengerPopup.className = 'messenger-popup';
      messengerPopup.innerHTML = `
                <div class="messenger-header">
                    <div class="messenger-avatar">📱</div>
                    <div class="messenger-name">${scene.messengerName}</div>
                </div>
                <div class="messenger-message">
                    ${scene.messengerMessage}
                </div>
                <div class="messenger-reaction">
                    <span class="reaction-emoji">😊</span>
                    <span>${scene.reaction}</span>
                </div>
            `;
      currentScene.appendChild(messengerPopup);

      // Add sparkles
      createSparkles(messengerPopup);
    }, 500);
  }

  // Special handling for ending
  if (scene.name === 'Ending') {
    setTimeout(() => {
      sceneText.style.fontSize = '32px';
      sceneText.style.background = 'rgba(102, 126, 234, 0.9)';
      sceneText.textContent = scene.endingText;

      // Add heart rain
      createHeartRain();
    }, 500);
  }

  // Update scene info
  sceneInfo.innerHTML = `<strong>${scene.name}</strong><p>${scene.description}</p>`;
}

// Create sparkle effect
function createSparkles(element) {
  const rect = element.getBoundingClientRect();
  const sparkleCount = 10;

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
    sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
    sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
    sparkle.style.setProperty('--ty', `${-50 - Math.random() * 50}px`);
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Create heart rain effect
function createHeartRain() {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💌'];
  const heartCount = 20;

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'absolute';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = '-50px';
      heart.style.fontSize = '30px';
      heart.style.pointerEvents = 'none';
      heart.style.animation = 'fall 3s linear forwards';
      videoScreen.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }, i * 100);
  }
}

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(600px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Update progress bar
function updateProgress() {
  const progress = (currentTime / VIDEO_DURATION) * 100;
  progressFill.style.width = `${progress}%`;
  currentTimeDisplay.textContent = formatTime(currentTime);
}

// Animation loop
function animate(timestamp) {
  if (!isPlaying) return;

  if (!lastTimestamp) lastTimestamp = timestamp;
  const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
  lastTimestamp = timestamp;

  currentTime += deltaTime;

  // Check if video ended
  if (currentTime >= VIDEO_DURATION) {
    currentTime = VIDEO_DURATION;
    pause();
    updateProgress();
    return;
  }

  // Update scene
  const scene = getCurrentScene(currentTime);
  if (scene) {
    const prevScene = getCurrentScene(currentTime - deltaTime);
    if (!prevScene || prevScene.name !== scene.name) {
      updateScene(scene);
    }
  }

  updateProgress();
  animationFrameId = requestAnimationFrame(animate);
}

// Control functions
function play() {
  if (currentTime >= VIDEO_DURATION) {
    reset();
  }
  isPlaying = true;
  lastTimestamp = 0;
  btnPlay.style.display = 'none';
  btnPause.style.display = 'flex';
  animationFrameId = requestAnimationFrame(animate);
}

function pause() {
  isPlaying = false;
  btnPlay.style.display = 'flex';
  btnPause.style.display = 'none';
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  lastTimestamp = 0;
}

function reset() {
  pause();
  currentTime = 0;
  updateProgress();
  const firstScene = scenes[0];
  updateScene(firstScene);
}

function skip() {
  const currentSceneData = getCurrentScene(currentTime);
  if (currentSceneData) {
    const currentIndex = scenes.indexOf(currentSceneData);
    if (currentIndex < scenes.length - 1) {
      const nextScene = scenes[currentIndex + 1];
      currentTime = nextScene.startTime;
      updateScene(nextScene);
      updateProgress();
    }
  }
}

// Event listeners
btnPlay.addEventListener('click', play);
btnPause.addEventListener('click', pause);
btnReset.addEventListener('click', reset);
btnSkip.addEventListener('click', skip);

// Progress bar click
document.querySelector('.progress-bar').addEventListener('click', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = x / rect.width;
  currentTime = percentage * VIDEO_DURATION;
  updateProgress();
  const scene = getCurrentScene(currentTime);
  if (scene) {
    updateScene(scene);
  }
});

// Initialize
totalTimeDisplay.textContent = formatTime(VIDEO_DURATION);
btnPause.style.display = 'none';
btnPlay.style.display = 'flex';
const firstScene = scenes[0];
updateScene(firstScene);

// Add easter egg - click on emoji 10 times for surprise
let emojiClickCount = 0;
currentScene.addEventListener('click', (e) => {
  if (e.target.classList.contains('scene-image')) {
    emojiClickCount++;
    if (emojiClickCount >= 10) {
      alert(
        '🎉 Chúc mừng Cao Thùy Dương! Bạn đã tìm ra easter egg! 💖✨\n\nAnh Coder muốn nói: "Em là exception duy nhất anh muốn catch mãi mãi! 🥰"'
      );
      emojiClickCount = 0;

      // Create massive heart explosion
      for (let i = 0; i < 50; i++) {
        setTimeout(() => createSparkles(e.target), i * 50);
      }
    }
  }
});

console.log('🎬 Video player loaded! Enjoy the show! 💖');
