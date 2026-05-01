// perfect_day.js - The Add-On Engine for the Perfect Day Meditation

window.AestheticLibrary = {
    "Nature & Climate Vibe": [
        "Moody Pacific Northwest",
        "Tropical Paradise",
        "Arid Desert Sanctuary",
        "Crisp Alpine Mountain",
        "Serene Countryside",
        "Rugged Coastal Cliff",
        "Deep Ancient Forest"
    ],
    "Environment & Architecture": [
        "Ancient Historical",
        "Ultra-Modern Luxury",
        "Cozy Rustic Cabin",
        "Artistic Bohemian Loft",
        "Classic Mediterranean Villa",
        "Metropolis Penthouse",
        "Zen Sanctuary"
    ],
    "Pace & Energy": [
        "Slow & Flowing",
        "High-Energy Hustle",
        "Structured & Disciplined",
        "Spontaneous & Wild",
        "Deeply Creative",
        "Social & Magnetic",
        "Serene & Detached"
    ]
};

// --- AUDIO ALCHEMY ENGINES ---

window.HemiSyncEngine = {
    ctx: null,
    nodes: [],
    isPlaying: false,
    
    init: function() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    
    start: function() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        if (this.isPlaying) return;
        this.isPlaying = true;
        
        const masterGain = this.ctx.createGain();
        masterGain.gain.value = 0.08; // Very gentle, low volume background
        masterGain.connect(this.ctx.destination);
        this.nodes.push(masterGain);
        this.masterGain = masterGain;
        
        // 1. The Hemi-Sync Binaural Beat (136.1Hz OM tone)
        const merger = this.ctx.createChannelMerger(2);
        merger.connect(masterGain);
        
        const oscLeft = this.ctx.createOscillator();
        oscLeft.type = 'sine';
        oscLeft.frequency.value = 136.1;
        oscLeft.connect(merger, 0, 0); // Left ear
        
        const oscRight = this.ctx.createOscillator();
        oscRight.type = 'sine';
        oscRight.frequency.value = 140.1; // 4Hz difference = Theta state
        oscRight.connect(merger, 0, 1); // Right ear
        
        oscLeft.start();
        oscRight.start();
        this.nodes.push(oscLeft, oscRight, merger);
        
        // 2. The Warm, Glowing Drone (A beautiful suspended chord to make it pleasant)
        // Base frequency 136.1 is C#3. Let's add a 5th (G#3 = ~204.1Hz) and an octave (C#4 = 272.2Hz)
        const droneFrequencies = [136.1, 204.15, 272.2];
        const droneGain = this.ctx.createGain();
        droneGain.gain.value = 0.5;
        
        // A slow, sweeping Low Pass Filter to make it "breathe"
        const lpf = this.ctx.createBiquadFilter();
        lpf.type = 'lowpass';
        lpf.frequency.value = 300; // Deep, muffled, warm
        
        droneGain.connect(lpf);
        lpf.connect(masterGain);
        this.nodes.push(droneGain, lpf);
        
        droneFrequencies.forEach(freq => {
            const osc = this.ctx.createOscillator();
            osc.type = 'triangle'; // Warmer than sine, softer than saw
            osc.frequency.value = freq;
            
            // Add a tiny bit of detune for chorus/thickness
            const lfo = this.ctx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 0.1 + (Math.random() * 0.1); // Very slow LFO
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 2; // +/- 2 cents detune
            lfo.connect(lfoGain);
            lfoGain.connect(osc.detune);
            lfo.start();
            
            osc.connect(droneGain);
            osc.start();
            this.nodes.push(osc, lfo, lfoGain);
        });
        
        // Sweep the LPF frequency slowly to simulate ocean waves or breathing
        this.breatheLfo = setInterval(() => {
            if (!this.isPlaying) return;
            const now = this.ctx.currentTime;
            // Sweep from 300Hz to 600Hz and back over 8 seconds
            lpf.frequency.setTargetAtTime(600, now, 4);
            setTimeout(() => {
                if (this.isPlaying && this.ctx) lpf.frequency.setTargetAtTime(300, this.ctx.currentTime, 4);
            }, 4000);
        }, 8000);
        
        // Initial trigger
        lpf.frequency.setTargetAtTime(600, this.ctx.currentTime, 4);
        setTimeout(() => {
            if (this.isPlaying && this.ctx) lpf.frequency.setTargetAtTime(300, this.ctx.currentTime, 4);
        }, 4000);
    },
    
    stop: function() {
        this.isPlaying = false;
        clearInterval(this.breatheLfo);
        this.nodes.forEach(n => {
            try {
                if (n.stop) n.stop();
                if (n.disconnect) n.disconnect();
            } catch(e) {}
        });
        this.nodes = [];
    }
};

// --- AUDIO COMPILER UTILITIES ---
function audioBufferToWav(buffer) {
    const numOfChan = buffer.numberOfChannels;
    const length = buffer.length * numOfChan * 2;
    const bufferArray = new ArrayBuffer(44 + length);
    const view = new DataView(bufferArray);
    const channels = [], sampleRate = buffer.sampleRate;
    let offset = 0, pos = 0;

    function setUint16(data) { view.setUint16(pos, data, true); pos += 2; }
    function setUint32(data) { view.setUint32(pos, data, true); pos += 4; }

    setUint32(0x46464952); // "RIFF"
    setUint32(36 + length);
    setUint32(0x45564157); // "WAVE"
    setUint32(0x20746d66); // "fmt " chunk
    setUint32(16); // length = 16
    setUint16(1); // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(sampleRate);
    setUint32(sampleRate * 2 * numOfChan);
    setUint16(numOfChan * 2);
    setUint16(16);
    setUint32(0x61746164); // "data" chunk
    setUint32(length);

    for (let i = 0; i < buffer.numberOfChannels; i++) channels.push(buffer.getChannelData(i));

    while (pos < 44 + length) {
        for (let i = 0; i < numOfChan; i++) {
            let sample = Math.max(-1, Math.min(1, channels[i][offset])); // clamp
            sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
            view.setInt16(pos, sample, true);
            pos += 2;
        }
        offset++;
    }
    return new Blob([bufferArray], { type: 'audio/wav' });
}

function createNoiseBuffer(ctx, type, duration) {
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        if (type === 'pink') {
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11; 
            b6 = white * 0.115926;
        } else if (type === 'brown') {
            b0 = (b0 + (0.02 * white)) / 1.02;
            output[i] = b0 * 3.5;
        } else {
            output[i] = white;
        }
    }
    return buffer;
}

window.StudioMixer = {
    paragraphs: [],
    segmentBlobs: [],
    segmentUrls: [],
    recordingIndex: -1,
    mediaRecorder: null,
    audioChunks: [],
    micStream: null,
    isCompiling: false,
    masterAudioUrl: null,
    
    soundscape: {
        binaural: true,
        spaceDrone: true,
        ocean: false,
        rain: false,
        thunder: false,
        river: false,
        wind: false,
        birds: false,
        crickets: false,
        chimes: false,
        piano: false,
        bowls: false,
        campfire: false,
        heartbeat: false
    },
    
    toggleSound: function(key) {
        this.soundscape[key] = !this.soundscape[key];
        document.getElementById('main-content').innerHTML = Views.recordingStudio();
        if (window.LiveMixer && window.LiveMixer.isPlaying) {
            window.LiveMixer.fadeNode(key, this.soundscape[key]);
        }
    },
    
    previewSoundscape: async function(id) {
        if (this.isPreviewing) return;
        this.isPreviewing = true;
        
        const btn = document.getElementById('preview-btn-' + id);
        if(btn) btn.innerText = '⏳';
        
        try {
            const sampleRate = 44100;
            const totalDuration = 7.0; // 7 second preview
            const offlineCtx = new OfflineAudioContext(2, sampleRate * totalDuration, sampleRate);
            
            const bgGain = offlineCtx.createGain();
            bgGain.gain.value = 1.0; // Boosted for preview
            bgGain.gain.setValueAtTime(1.0, totalDuration - 1.5);
            bgGain.gain.linearRampToValueAtTime(0, totalDuration);
            bgGain.connect(offlineCtx.destination);
            
            const s = {}; s[id] = true;
            
            window.applySoundscapesToContext(offlineCtx, bgGain, s, totalDuration);
            
            const renderedBuffer = await offlineCtx.startRendering();
            const wavBlob = audioBufferToWav(renderedBuffer);
            const url = URL.createObjectURL(wavBlob);
            
            if (this.previewAudio) {
                this.previewAudio.pause();
                URL.revokeObjectURL(this.previewAudio.src);
            }
            this.previewAudio = new Audio(url);
            this.previewAudio.play();
            
            if(btn) btn.innerText = '🔊';
            
            this.previewAudio.onended = () => {
                if(btn) btn.innerText = '▶️';
                this.isPreviewing = false;
            };
            
        } catch (e) {
            console.error("Preview failed:", e);
            if(btn) btn.innerText = '▶️';
            this.isPreviewing = false;
        }
    },

    previewMix: async function() {
        if (this.isPreviewing) return;
        this.isPreviewing = true;
        
        const btn = document.getElementById('preview-mix-btn');
        if(btn) btn.innerText = '⏳ Compiling Mix...';
        
        try {
            const sampleRate = 44100;
            const totalDuration = 7.0; // 7 second preview
            const offlineCtx = new OfflineAudioContext(2, sampleRate * totalDuration, sampleRate);
            
            const bgGain = offlineCtx.createGain();
            bgGain.gain.value = 1.0; // Boosted for preview
            bgGain.gain.setValueAtTime(1.0, totalDuration - 1.5);
            bgGain.gain.linearRampToValueAtTime(0, totalDuration);
            bgGain.connect(offlineCtx.destination);
            
            const s = this.soundscape; // use all selected sounds
            
            window.applySoundscapesToContext(offlineCtx, bgGain, s, totalDuration);
            
            const renderedBuffer = await offlineCtx.startRendering();
            const wavBlob = audioBufferToWav(renderedBuffer);
            const url = URL.createObjectURL(wavBlob);
            
            if (this.previewAudio) {
                this.previewAudio.pause();
                URL.revokeObjectURL(this.previewAudio.src);
            }
            this.previewAudio = new Audio(url);
            this.previewAudio.play();
            
            if(btn) btn.innerText = '🔊 Playing Mix Preview...';
            
            this.previewAudio.onended = () => {
                if(btn) btn.innerText = '▶️ Preview Current Mix';
                this.isPreviewing = false;
            };
            
        } catch (e) {
            console.error("Preview mix failed:", e);
            if(btn) btn.innerText = '▶️ Preview Current Mix';
            this.isPreviewing = false;
        }
    },

    initStudio: function(text) {
        this.paragraphs = text.split(/\n\n+/).filter(c => c.trim().length > 0);
        this.segmentBlobs = new Array(this.paragraphs.length).fill(null);
        this.segmentUrls = new Array(this.paragraphs.length).fill(null);
        this.masterAudioUrl = null;
    },

    startSegmentRecording: async function(index) {
        if (this.recordingIndex !== -1) return; // already recording
        
        try {
            this.micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: true } });
            this.audioChunks = [];
            
            // Fix mic panning by explicitly setting channel count (Mono to Stereo)
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioCtx.createMediaStreamSource(this.micStream);
            const dest = audioCtx.createMediaStreamDestination();
            source.channelCount = 1;
            source.channelCountMode = 'explicit';
            source.connect(dest);
            
            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
            this.mediaRecorder = new MediaRecorder(dest.stream, { mimeType: mimeType });
            
            this.mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) this.audioChunks.push(e.data);
            };
            
            this.mediaRecorder.onstop = () => {
                const blob = new Blob(this.audioChunks, { type: mimeType });
                this.segmentBlobs[index] = blob;
                if (this.segmentUrls[index]) URL.revokeObjectURL(this.segmentUrls[index]);
                this.segmentUrls[index] = URL.createObjectURL(blob);
                document.getElementById('main-content').innerHTML = Views.recordingStudio();
            };
            
            this.recordingIndex = index;
            this.mediaRecorder.start();
            document.getElementById('main-content').innerHTML = Views.recordingStudio();
            
        } catch (err) {
            console.error(err);
            alert("Microphone access is required to record segments.");
        }
    },
    
    stopSegmentRecording: function() {
        if (this.recordingIndex === -1) return;
        this.mediaRecorder.stop();
        if (this.micStream) {
            this.micStream.getTracks().forEach(t => t.stop());
        }
        this.recordingIndex = -1;
    },
    
    compileMasterpiece: async function() {
        if (this.isCompiling) return;
        this.isCompiling = true;
        document.getElementById('main-content').innerHTML = Views.recordingStudio();
        
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const tempCtx = new AudioContext();
            
            // 1. Decode all recorded blobs
            const decodedBuffers = [];
            for (let blob of this.segmentBlobs) {
                if (!blob) continue;
                const arrayBuffer = await blob.arrayBuffer();
                const audioBuffer = await tempCtx.decodeAudioData(arrayBuffer);
                decodedBuffers.push(audioBuffer);
            }
            
            // 2. Calculate Total Length
            const pauseDuration = 4.5;
            const outroDuration = 12.0;
            let totalDuration = 0;
            decodedBuffers.forEach(b => totalDuration += b.duration);
            totalDuration += (decodedBuffers.length - 1) * pauseDuration;
            totalDuration += outroDuration;
            
            // 3. Create Offline Audio Context
            const sampleRate = 44100;
            const offlineCtx = new OfflineAudioContext(2, sampleRate * totalDuration, sampleRate);
            
            // 4. Schedule Voice Segments sequentially
            let currentTime = 0;
            decodedBuffers.forEach(buffer => {
                const source = offlineCtx.createBufferSource();
                source.buffer = buffer;
                
                // Huge mic volume boost
                const voiceGain = offlineCtx.createGain();
                voiceGain.gain.value = 3.0;
                source.connect(voiceGain);
                voiceGain.connect(offlineCtx.destination);
                
                source.start(currentTime);
                currentTime += buffer.duration + pauseDuration;
            });
            
            // 5. Soundscape Generators
            const bgGain = offlineCtx.createGain();
            bgGain.gain.value = 0.5; // Base mixer level
            bgGain.gain.setValueAtTime(0.5, totalDuration - 5);
            bgGain.gain.linearRampToValueAtTime(0, totalDuration);
            bgGain.connect(offlineCtx.destination);
            
            const s = this.soundscape;
            
            await window.applySoundscapesToContext(offlineCtx, bgGain, s, totalDuration);
            
            // 6. Render final audio
            const renderedBuffer = await offlineCtx.startRendering();
            
            // 7. Export to WAV
            const wavBlob = audioBufferToWav(renderedBuffer);
            this.masterAudioUrl = URL.createObjectURL(wavBlob);
            
            this.isCompiling = false;
            document.getElementById('main-content').innerHTML = Views.recordingStudio();
            
        } catch (e) {
            console.error("Compilation failed:", e);
            alert("Audio compilation failed. Please ensure you are using a modern browser.");
            this.isCompiling = false;
            document.getElementById('main-content').innerHTML = Views.recordingStudio();
        }
    }
};

window.DailyRitualLibrary = {
    "Morning Awakening": [
        "Waking up naturally on my own perfect timing", "Waking up to the sound of the ocean", "Rising early to greet the sunrise",
        "Waking up to a silent, snowy morning", "Waking up in a sun-drenched city penthouse", "Staying in bed for an extra hour of cuddles",
        "Waking up feeling completely restored and energized", "Waking up to the smell of fresh rain", "Waking up in a remote cabin in the woods",
        "Waking up feeling complete physical freedom and vibrant flexibility", "Waking up with a mind that is instantly clear and focused",
        "Waking up next to the love of my life", "Opening my eyes to the sound of birds singing", "Waking up in a luxurious resort villa",
        "Waking up to the smell of freshly brewed coffee", "Feeling the gentle warmth of the sun on my face",
        "Waking up with absolute certainty about my purpose today", "Stretching lazily in cool, crisp linen sheets",
        "Waking up feeling completely clear and present", "Opening my eyes and feeling a rush of deep gratitude",
        "Waking up in an ancient European estate", "Waking up to the sound of a crackling fireplace",
        "Feeling my body perfectly aligned and weightless", "Waking up with a sudden, brilliant idea",
        "Waking up in complete darkness and perfect silence", "Opening my eyes to a panoramic view of the mountains",
        "Waking up with boundless, restorative vitality", "Waking up and immediately smiling for no reason",
        "Waking up to a gentle breeze through an open window", "Feeling totally safe and sovereign the moment I open my eyes",
        "Waking up in a minimalist, light-filled bedroom", "Waking up an hour early just to enjoy the silence",
        "Waking up with a mind full of absolute peace", "Opening my eyes knowing my wealth is automated",
        "Waking up feeling deeply loved and cherished", "Waking up and immediately slipping into meditation",
        "Waking up with the scent of pine and crisp air", "Waking up in a beach house with the doors wide open",
        "Waking up with my pet curled up next to me", "Waking up feeling victorious and powerful",
        "Opening my eyes to fresh flowers by my bedside", "Waking up on a yacht gently rocking on the water",
        "Waking up knowing my entire day is free to design", "Waking up feeling a profound sense of inner peace",
        "Waking up and instantly feeling my connection to the divine"
    ],
    "Morning Fuel & Focus": [
        "Sipping coffee slowly on your private balcony", "Brewing loose-leaf tea in absolute silence",
        "Having a slow, multi-course brunch in your sunny kitchen", "A heavy lifting session in your private, state-of-the-art gym",
        "A long, rhythmic run through the forest", "A private yoga session overlooking the water",
        "A cold plunge and sauna session to shock your system alive", "Eating a fresh, nourishing breakfast prepared by your private chef",
        "Sitting by the fire reading philosophy", "Meditating in a sunlit room", "Walking barefoot on the grass to ground yourself",
        "Taking a long, luxurious shower with eucalyptus steam", "Drinking hot lemon water while watching the sunrise",
        "Writing three pages of stream-of-consciousness journaling", "Reviewing my global vision in perfect stillness",
        "Doing breathwork that entirely shifts my frequency", "Eating fresh, exotic fruit from a local market",
        "Having a deep, intellectual conversation over espresso", "Practicing martial arts or movement flow",
        "Listening to high-frequency classical music", "Walking my dog through a quiet, beautiful neighborhood",
        "Taking a warm Epsom salt bath to start the day", "Reading a chapter of an inspiring biography",
        "Reviewing my financial growth with absolute ease", "Doing mobility work to ensure perfect physical function",
        "Drinking a bespoke green juice made from my garden", "Stretching on a heated floor in my private sanctuary",
        "Sitting in absolute silence for twenty minutes", "Visualizing my legacy coming into fruition",
        "Swimming laps in a private infinity pool", "Tending to a delicate bonsai or indoor garden",
        "Listening to an audiobook while prepping a healthy meal", "Doing a fast-paced HIIT workout that leaves me euphoric",
        "Drinking matcha while looking over the city skyline", "Taking a quiet walk in a misty morning forest",
        "Writing down my absolute truth for the day", "Reviewing my calendar and seeing only things I love",
        "Taking my time selecting my clothes for the day", "Using an infrared sauna for deep cellular repair",
        "Having a peaceful breakfast with my family", "Studying a new language for twenty minutes",
        "Practicing radical gratitude before checking my phone", "Setting a powerful intention that commands my reality",
        "Eating a perfectly engineered macro-balanced meal"
    ],
    "The Core Work (Impact & Creation)": [
        "Working as a visionary CEO with absolute ease", "Making art in your massive, light-filled studio",
        "Writing your next best-selling book in deep focus", "Leading a visionary team meeting where everyone is aligned",
        "Designing new products that change the world", "Reviewing investments that geometrically multiply your wealth",
        "Advising global leaders and making high-level decisions", "Recording content that reaches and heals millions of followers",
        "Curating rare finds and thrifting without a budget", "Building a legacy business from your laptop anywhere in the world",
        "Performing on stage in front of a massive, roaring crowd", "Directing a film or creative project with absolute control",
        "Trading markets with savant-level intuition and zero emotion", "Developing software that revolutionizes an industry",
        "Speaking at a global summit", "Composing music in a state-of-the-art studio",
        "Designing a bespoke architectural masterpiece", "Managing a philanthropic fund that saves lives",
        "Writing code in an uninterrupted flow state", "Coaching high-performers to their next level",
        "Curating a world-class art exhibition", "Hosting an exclusive mastermind in a beautiful location",
        "Designing high-end fashion with no creative limits", "Negotiating massive deals that benefit everyone involved",
        "Producing a documentary that tells an important truth", "Inventing a technology that solves a global crisis",
        "Building a world-class team that executes flawlessly", "Publishing a groundbreaking scientific paper",
        "Cultivating an organic farm that feeds a community", "Running a luxury lifestyle brand",
        "Making strategic acquisitions to build a massive portfolio", "Creating a movement that inspires a generation",
        "Writing poetry that moves people to tears", "Photographing the most beautiful places on Earth",
        "Designing an immersive educational experience", "Investing in brilliant startups and mentoring founders",
        "Crafting a masterclass that distills my genius", "Building an empire in a state of absolute ease and joy",
        "Leading a spiritual retreat in the mountains", "Creating beautiful, functional objects with my hands",
        "Writing a screenplay that gets greenlit immediately", "Scaling a business while working only four hours a day",
        "Consulting for top-tier executives", "Developing a massive real estate project",
        "Operating a high-end culinary experience or restaurant", "Using my voice to advocate for those who cannot"
    ],
    "The Afternoon Adventure": [
        "Traveling spontaneously to a new country", "Sailing on clear blue water with the wind in your hair",
        "Exploring an ancient city with no itinerary", "Hiking a remote mountain trail with breathtaking views",
        "Visiting a world-class art gallery in Paris or Tokyo", "Flying private to a secluded wellness retreat",
        "Driving a vintage sports car along a winding coastal highway", "Spending hours exploring a massive, dusty bookstore",
        "Taking a masterclass to learn a completely new skill", "Skiing down pristine, untouched powder",
        "Scuba diving in a vibrant coral reef", "Attending an exclusive auction for rare artifacts",
        "Taking a helicopter tour over dramatic landscapes", "Wandering through a bustling, foreign spice market",
        "Going on a private safari to see wildlife in its natural habitat", "Exploring hidden ruins in a jungle",
        "Taking a hot air balloon ride at sunset", "Surfing perfect, glassy waves",
        "Riding horses through a sprawling valley", "Taking a private cooking class in Italy",
        "Exploring a massive, futuristic metropolis", "Getting lost in a beautiful botanical garden",
        "Taking a spontaneous road trip with no destination", "Exploring a glacial ice cave",
        "Attending a high-stakes sporting event in VIP seating", "Visiting a remote island accessible only by boat",
        "Taking a scenic train ride through the Swiss Alps", "Exploring a massive underground cave system",
        "Going wine tasting at a centuries-old vineyard", "Taking a private tour of a historical castle",
        "Attending a private, underground music performance", "Learning to fly a small plane or helicopter",
        "Going deep-sea fishing on a luxury charter", "Exploring a dense, ancient forest",
        "Taking a spontaneous trip to the theater in London or NY", "Visiting a modern art installation that challenges the mind",
        "Going paragliding over a breathtaking coastline", "Exploring local artisan markets and buying whatever catches my eye",
        "Taking a specialized photography tour", "Going on a spiritual pilgrimage",
        "Exploring a city's architecture with a local historian", "Going white-water rafting on a wild river",
        "Taking a luxury cruise through a fjord", "Visiting an observatory to look at distant galaxies",
        "Exploring a massive, historic library with rare books"
    ],
    "Afternoon Leisure & Flow": [
        "Taking a peaceful, aimless walk through the trees", "Getting a two-hour, deep tissue massage at home",
        "Reading fiction in absolute quiet", "Napping in a hammock under the shade",
        "Tending to your lush, private garden", "Playing an instrument just for the sheer joy of the sound",
        "Having a deep, two-hour lunch with a brilliant mentor", "Wandering aimlessly through a beautiful, historic neighborhood",
        "Sitting in a cafe people-watching", "Baking or cooking something complex with no time pressure",
        "Painting a massive canvas just to express emotion", "Lying on the floor listening to a vinyl record",
        "Drinking tea while watching a thunderstorm", "Doing restorative yoga in a dim, warm room",
        "Browsing high-end boutiques with infinite financial freedom", "Organizing my sanctuary to perfect aesthetic harmony",
        "Writing letters to people I deeply appreciate", "Sitting by a lake and skipping stones",
        "Doing a complicated puzzle in absolute peace", "Listening to an expansive podcast while walking",
        "Practicing calligraphy or beautiful handwriting", "Taking a slow, luxurious bath with rare oils",
        "Watching an old, classic film in a private home theater", "Doing somatic experiencing exercises to invite deep relaxation",
        "Sitting in a sensory deprivation tank", "Taking a slow, mindful walk through an art museum",
        "Practicing archery or a similar focused discipline", "Having an unhurried conversation with a best friend",
        "Tending to animals on a sprawling property", "Doing a massive brain-dump of all my creative ideas",
        "Sitting in an empty church or temple just to feel the space", "Doing absolutely nothing and feeling perfectly fine about it",
        "Practicing advanced meditation techniques", "Wandering through an antique shop",
        "Restoring a piece of vintage furniture", "Watching clouds move across the sky",
        "Reading philosophy and deeply contemplating reality", "Taking a luxurious mid-day nap in a cool, dark room",
        "Sketching the landscape from my window", "Practicing a flow-state hobby like knitting or pottery",
        "Listening to ambient music while staring at the ocean", "Sorting through old, happy memories and photographs",
        "Taking a slow bike ride through the countryside", "Drinking a glass of fine wine while reading a magazine",
        "Sitting in a greenhouse surrounded by exotic plants"
    ],
    "The Evening Connection": [
        "Hosting a private dinner party with visionaries and artists", "Having deep, entirely honest conversations with your partner",
        "Playing games with your family in a house full of laughter", "Attending an exclusive cultural event or premiere",
        "Having a romantic dinner overlooking the glittering city", "Sitting around a roaring bonfire on the beach",
        "Mentoring the next generation of leaders", "Laughing until your ribs hurt with lifelong friends",
        "Dancing in your living room with the people you love", "Sharing a beautiful bottle of wine and talking about the future",
        "Taking your family on an evening boat ride", "Volunteering or giving back to your community in a massive way",
        "Attending a private, intimate acoustic concert", "Having a philosophical debate that expands my mind",
        "Cooking a massive feast alongside my best friends", "Going to an opening night at an art gallery",
        "Attending a black-tie gala for a cause I believe in", "Sitting on the porch sharing stories with my grandparents",
        "Hosting an expansive mastermind dinner", "Taking a sunset walk with someone I deeply respect",
        "Going to a late-night jazz club", "Attending a poetry reading or spoken word event",
        "Having a heart-to-heart that heals an old wound", "Playing poker or board games in a relaxed, elegant setting",
        "Attending a high-end tasting menu experience", "Going to the ballet or opera",
        "Sitting on a rooftop laughing under the city lights", "Sharing my success with those who helped me get here",
        "Hosting a private film screening for my inner circle", "Attending a beautifully curated networking event",
        "Having an intensely passionate evening with my partner", "Attending a spiritual circle or community gathering",
        "Going to a comedy club and laughing endlessly", "Taking a late-night drive with deep conversation",
        "Attending a private tasting of rare whiskies or wines", "Sitting around a large dining table with three generations of family",
        "Celebrating a massive milestone with my team", "Having a quiet, intimate dinner prepared by a private chef",
        "Attending a thought-provoking lecture or salon", "Going dancing at a high-energy, beautiful venue",
        "Hosting a massive, joyous celebration for no reason at all", "Attending a secret, invite-only cultural event",
        "Sitting with a mentor and absorbing their wisdom", "Sharing a decadent dessert and espresso with a friend",
        "Expressing profound gratitude to the people in my life"
    ],
    "Nighttime Wind Down": [
        "Walking on the beach under the moonlight", "Watching the stars fill the sky from your deck",
        "Soaking in a hot tub in the cool night air", "Listening to classical music with the lights turned low",
        "Reflecting on your massive success and expressing deep gratitude", "Resting in the absolute, unshakeable peace of your secure home",
        "Falling asleep instantly, knowing tomorrow will be perfect", "Reading a few pages of poetry before closing your eyes",
        "Doing a gentle stretching routine to release the day", "Writing in your journal, documenting the magic of your life",
        "Falling asleep with the window open, feeling a cool breeze", "Meditating on the concept of infinite abundance",
        "Taking a hot shower by candlelight", "Drinking a calming herbal tea",
        "Reflecting on the best moment of the day", "Setting an intention to heal while my body sleeps",
        "Falling asleep to the sound of rain", "Reviewing my goals and knowing they are already accomplished",
        "Doing a body scan meditation to invite deep relaxation", "Saying a quiet prayer of absolute thanks",
        "Falling asleep tangled in the arms of my partner", "Listening to a guided sleep meditation",
        "Turning off all screens two hours before bed", "Applying luxurious skincare and feeling deeply cared for",
        "Sleeping in complete, pitch-black silence", "Falling asleep with a smile on my face",
        "Knowing my wealth is growing while I sleep", "Feeling a deep sense of safety and protection",
        "Reading a physical book until my eyes get heavy", "Falling asleep to the sound of ocean waves",
        "Reviewing my 'Do Wants' and feeling them as reality", "Sleeping on the highest quality, most comfortable mattress",
        "Doing a final mental sweep to invite absolute harmony", "Falling asleep under a heavy, comforting weighted blanket",
        "Taking a few deep, cleansing breaths", "Feeling the absolute luxury of my environment",
        "Knowing I have zero obligations tomorrow morning", "Reflecting on how much I have expanded today",
        "Falling asleep in a room that is the perfect cool temperature", "Releasing any attachment to the outcomes of the day",
        "Feeling the presence of God/Source wrapping around me", "Falling asleep with absolute certainty in my identity",
        "Listening to binaural beats for deep sleep", "Saying \"Thank you, thank you, thank you\" out loud",
        "Drifting into a lucid, beautiful dream state"
    ]
};

// Add the Rituals View
Views.rituals = () => {
    // Initialize selected rituals array if it doesn't exist
    if (!State.userData.selectedRituals) {
        State.userData.selectedRituals = [];
    }

    let html = `<div class="glass-card fade-in" style="max-width:1200px; padding: 4rem;">`;
    html += `<h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">The Menu</h4>`;
    html += `<h2 style="font-size:3rem;">Design Your Perfect Day</h2>`;
    html += `<p class="story-text" style="margin-bottom:3rem; font-size:1.2rem;">Select the exact experiences that make up your ideal existence. Do not limit yourself. Treat this like an infinite menu—select everything that resonates across all categories.</p>`;
    
    html += `<div class="rituals-menu">`;
    for(const [category, items] of Object.entries(window.DailyRitualLibrary)) {
        html += `<div class="ritual-category" style="margin-bottom: 3.5rem;">`;
        html += `<h3 style="color:var(--primary); font-size:1.3rem; margin-bottom:1.5rem; text-transform:uppercase; letter-spacing:0.1em; border-bottom: 1px solid var(--glass-border); padding-bottom:0.5rem;">${category}</h3>`;
        html += `<div class="pattern-grid">`;
        items.forEach(item => {
            const isSelected = State.userData.selectedRituals.includes(item);
            // Escape single quotes for JS and double quotes for HTML attribute
            const safeItem = item.replace(/'/g, "\\'").replace(/"/g, "&quot;");
            html += `<div class="pattern-chip ${isSelected ? 'active' : ''}" onclick="window.toggleRitual('${safeItem}')">${item}</div>`;
        });
        html += `</div></div>`;
    }
    html += `</div>`;
    html += `<button class="cta-btn mt-4" style="width:100%; position:sticky; bottom:2rem; z-index:10; box-shadow: 0 -20px 40px var(--bg-dark);" onclick="window.handleNext()">Generate Perfect Day Meditation</button>`;
    html += `</div>`;
    return html;
};

Views.recordingStudio = () => {
    if (!window.currentMeditation) {
        window.switchTo('perfectDay');
        return "";
    }
    
    if (!window.StudioMixer.paragraphs || window.StudioMixer.paragraphs.length === 0) {
        window.StudioMixer.initStudio(window.currentMeditation);
    }
    
    let html = `<div class="glass-card fade-in" style="max-width:1000px; padding: 4rem;">`;
    html += `<button class="secondary-btn" style="margin-bottom:2rem;" onclick="window.switchTo('perfectDay')">← Back to Meditation</button>`;
    html += `<h2 style="font-size:3rem; margin-bottom:1rem;">The Recording Studio</h2>`;
    
    // Explicit Instructions for pacing
    html += `<div style="background:rgba(255,255,255,0.05); padding:2rem; border-left:4px solid var(--accent); border-radius:0 16px 16px 0; margin-bottom: 2rem;">`;
    html += `<h4 style="color:var(--accent); font-size:1.2rem; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.1em;">Critical Instruction</h4>`;
    html += `<p style="font-size:1.2rem; line-height:1.6; color:var(--text-main);">Read the script below <b>slowly and methodically</b>, kind of like you are dreaming. Do not blast through it. We want things to go slowly so that the subconscious mind can fully absorb the imagery. Allow yourself to feel the words as you speak them.</p>`;
    html += `</div>`;
    
    // Soundscape Mixer UI
    html += `<div style="background:rgba(0,0,0,0.4); padding:2rem; border-radius:16px; border:1px solid var(--glass-border); margin-bottom:4rem;">`;
    html += `<h3 style="color:var(--accent); font-size:1.5rem; margin-bottom:1.5rem;">Soundscape Mixer</h3>`;
    html += `<p style="color:var(--text-dim); margin-bottom:2rem;">Select the ambient layers for your background music. The engine will synthesize them live when you hit compile.</p>`;
    html += `<div style="display:flex; flex-wrap:wrap; gap:1rem;">`;
    
    const sounds = [
        {id:'binaural', label:'4Hz Binaural Beats'},
        {id:'spaceDrone', label:'Ethereal Space Drone'},
        {id:'ocean', label:'Ocean Waves'},
        {id:'rain', label:'Gentle Rain'},
        {id:'thunder', label:'Distant Thunder'},
        {id:'river', label:'Flowing River'},
        {id:'wind', label:'Forest Wind'},
        {id:'birds', label:'Morning Birdsong'},
        {id:'crickets', label:'Summer Crickets'},
        {id:'chimes', label:'Wind Chimes'},
        {id:'piano', label:'Ambient Piano'},
        {id:'bowls', label:'Tibetan Singing Bowls'},
        {id:'campfire', label:'Crackling Campfire'},
        {id:'heartbeat', label:'Rhythmic Heartbeat'}
    ];
    
    sounds.forEach(s => {
        const isActive = window.StudioMixer.soundscape[s.id];
        html += `<div style="display:flex; align-items:stretch; background:rgba(255,255,255,0.02); border:1px solid ${isActive ? 'var(--primary)' : 'var(--glass-border)'}; border-radius:30px; overflow:hidden; transition:all 0.3s ease;">`;
        html += `<button onclick="window.StudioMixer.toggleSound('${s.id}')" style="background:${isActive ? 'var(--primary)' : 'transparent'}; color:${isActive ? '#000' : 'var(--text-main)'}; border:none; padding:1rem; cursor:pointer; font-size:1.1rem; flex-grow:1; text-align:center; outline:none; font-weight:${isActive ? 'bold' : 'normal'};">`;
        html += `${isActive ? '✓ ' : ''}${s.label}`;
        html += `</button></div>`;
    });
    
    html += `</div>`;
    
    const isLive = window.LiveMixer && window.LiveMixer.isPlaying;
    const btnText = isLive ? '⏹️ Stop Live Mix' : '▶️ Play Live Mix';
    const btnStyle = isLive ? 'color:#ef4444; border-color:#ef4444;' : 'color:var(--primary); border-color:var(--primary);';
    html += `<button id="preview-mix-btn" onclick="window.LiveMixer.togglePlay()" class="secondary-btn" style="width:100%; margin-top:1.5rem; padding: 1rem; font-weight: bold; transition:all 0.3s ease; ${btnStyle}">${btnText}</button>`;
    
    html += `</div>`;
    
    // Segmented UI
    html += `<div style="display:flex; flex-direction:column; gap:2rem; margin-bottom:4rem;">`;
    
    window.StudioMixer.paragraphs.forEach((p, i) => {
        const isRecorded = window.StudioMixer.segmentBlobs[i] !== null;
        
        html += `<div style="padding:2.5rem; background:rgba(0,0,0,0.2); border:1px solid ${isRecorded ? 'var(--primary)' : 'var(--glass-border)'}; border-radius:16px;">`;
        html += `<p style="font-size:2rem; line-height:1.8; font-weight:300; margin-bottom:2rem; color:${isRecorded ? 'var(--text-dim)' : 'var(--text-main)'};">${p}</p>`;
        
        html += `<div style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:center;">`;
        if (window.StudioMixer.recordingIndex === i) {
            html += `<div style="color:#ef4444; font-weight:bold; font-size:1.2rem; animation: pulse 1.5s infinite; padding:0.5rem 1rem; border:1px solid #ef4444; border-radius:8px;">🔴 RECORDING...</div>`;
            html += `<button class="cta-btn" style="background:#ef4444;" onclick="window.StudioMixer.stopSegmentRecording()">⏹ Stop</button>`;
        } else {
            html += `<button class="${isRecorded ? 'secondary-btn' : 'cta-btn'}" onclick="window.StudioMixer.startSegmentRecording(${i})">🎙️ ${isRecorded ? 'Re-record' : 'Record Segment'}</button>`;
            if (isRecorded) {
                const url = window.StudioMixer.segmentUrls[i];
                html += `<audio src="${url}" controls style="height:45px; flex-grow:1; max-width:400px;"></audio>`;
            }
        }
        html += `</div></div>`;
    });
    html += `</div>`; // end segments
    
    // Compiler Output
    const allRecorded = window.StudioMixer.segmentBlobs.every(b => b !== null);
    
    html += `<div style="text-align:center; padding:4rem; background:rgba(0,0,0,0.4); border-radius:16px; border:1px solid var(--accent);">`;
    html += `<h3 style="color:var(--accent); font-size:2rem; margin-bottom:1rem;">Final Compilation</h3>`;
    
    if (allRecorded && !window.StudioMixer.isCompiling && !window.StudioMixer.masterAudioUrl) {
        html += `<p style="color:var(--text-main); margin-bottom:2rem;">All segments recorded. The compiler will now stitch them together with 4-second meditative pauses and layer the Hemi-Sync background track.</p>`;
        html += `<button class="cta-btn" style="font-size:1.4rem; padding:1.2rem 3rem;" onclick="window.StudioMixer.compileMasterpiece()">✨ Compile Masterpiece</button>`;
    } 
    else if (!allRecorded) {
        html += `<p style="color:var(--text-dim); margin-bottom:1.5rem;">Record all paragraphs above to unlock the offline compiler.</p>`;
    }
    else if (window.StudioMixer.isCompiling) {
        html += `<div style="color:var(--primary); font-weight:bold; font-size:1.5rem; animation: pulse 1.5s infinite;">✨ ALCHEMIZING AUDIO...</div>`;
        html += `<p style="color:var(--text-dim); margin-top:1rem;">Constructing math and blending frequencies. This takes 1-3 seconds.</p>`;
    }
    
    if (window.StudioMixer.masterAudioUrl) {
        html += `<div style="margin-top:2rem;">`;
        html += `<p style="color:var(--text-main); font-weight:bold; font-size:1.2rem; margin-bottom:1rem;">Your meditation is ready.</p>`;
        html += `<audio src="${window.StudioMixer.masterAudioUrl}" controls style="width:100%; margin-bottom:2rem; height:60px;"></audio><br/>`;
        html += `<a class="cta-btn" href="${window.StudioMixer.masterAudioUrl}" download="My_Identity_Alchemy_Meditation.wav" style="display:inline-block; text-decoration:none; background:var(--primary); color:#000; font-size:1.2rem; padding:1rem 2rem;">📥 Download .WAV</a>`;
        html += `</div>`;
    }
    
    html += `</div>`;
    html += `</div>`;
    return html;
};

// Toggle aesthetic function
window.toggleAesthetic = (item) => {
    if (!State.userData.aesthetics) State.userData.aesthetics = [];
    const idx = State.userData.aesthetics.indexOf(item); 
    if (idx > -1) {
        State.userData.aesthetics.splice(idx, 1); 
    } else {
        State.userData.aesthetics.push(item); 
    }
    window.saveData(); 
    document.getElementById('main-content').innerHTML = Views[State.view]();
};

Views.aestheticProfile = () => {
    if (!State.userData.aesthetics) State.userData.aesthetics = [];
    
    let html = `<div class="glass-card fade-in" style="max-width:1200px; padding: 4rem;">`;
    html += `<h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">The Canvas</h4>`;
    html += `<h2 style="font-size:3rem;">Aesthetic Profiling</h2>`;
    html += `<p class="story-text" style="margin-bottom:3rem; font-size:1.2rem;">Before we curate your day, define the aesthetic canvas. Select every vibe that resonates with you. You are a study in opposites—embrace the contradictions.</p>`;
    
    html += `<div class="rituals-menu">`;
    for(const [category, items] of Object.entries(window.AestheticLibrary)) {
        html += `<div class="ritual-category" style="margin-bottom: 3.5rem;">`;
        html += `<h3 style="color:var(--primary); font-size:1.3rem; margin-bottom:1.5rem; text-transform:uppercase; letter-spacing:0.1em; border-bottom: 1px solid var(--glass-border); padding-bottom:0.5rem;">${category}</h3>`;
        html += `<div class="pattern-grid">`;
        
        items.forEach(item => {
            const isSelected = State.userData.aesthetics.includes(item);
            const safeItem = item.replace(/'/g, "\\'").replace(/"/g, "&quot;");
            html += `<div class="pattern-chip ${isSelected ? 'active' : ''}" onclick="window.toggleAesthetic('${safeItem}')">${item}</div>`;
        });
        html += `</div></div>`;
    }
    html += `</div>`;
    html += `<button class="cta-btn mt-4" style="width:100%; position:sticky; bottom:2rem; z-index:10; box-shadow: 0 -20px 40px var(--bg-dark);" onclick="window.handleNext()">Design My Rituals</button>`;
    html += `</div>`;
    return html;
};

// Toggle ritual function (added here in case it wasn't preserved or needs ensuring)
window.toggleRitual = (r) => {
    if (!State.userData.selectedRituals) State.userData.selectedRituals = [];
    const idx = State.userData.selectedRituals.indexOf(r); 
    if (idx > -1) {
        State.userData.selectedRituals.splice(idx, 1); 
    } else {
        State.userData.selectedRituals.push(r); 
    }
    window.saveData(); 
    // Just re-render the current view
    document.getElementById('main-content').innerHTML = Views[State.view]();
    window.scrollTo(0, window.scrollY); // Preserve scroll position for the huge menu
};



/// Global cache for the generated meditation
window.currentMeditation = null;

// --- MEDITATION LIBRARY LOGIC ---
window.saveMeditationToLibrary = () => {
    if (!window.currentMeditation) {
        alert("No meditation generated yet.");
        return;
    }
    const name = prompt("Name this meditation (e.g., Deep Focus Morning):");
    if (!name) return;
    
    let library = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
    library.push({
        id: Date.now().toString(),
        name: name,
        date: new Date().toLocaleDateString(),
        text: window.currentMeditation
    });
    localStorage.setItem('savedMeditations', JSON.stringify(library));
    alert("Meditation saved to your Library!");
};

window.deleteSavedMeditation = (id) => {
    if(!confirm("Delete this saved meditation?")) return;
    let library = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
    library = library.filter(m => m.id !== id);
    localStorage.setItem('savedMeditations', JSON.stringify(library));
    document.getElementById('main-content').innerHTML = Views.meditationLibrary();
};

window.loadSavedMeditation = (id) => {
    let library = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
    const med = library.find(m => m.id === id);
    if(med) {
        window.currentMeditation = med.text;
        window.switchTo('recordingStudio');
    }
};

window.exportLibraryToFile = () => {
    const library = localStorage.getItem('savedMeditations') || '[]';
    const blob = new Blob([library], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'identity_alchemy_meditations.json';
    a.click();
    URL.revokeObjectURL(url);
};

window.importLibraryFromFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                if (!Array.isArray(data)) throw new Error('Invalid format');
                // Merge with existing, avoiding duplicates
                const existing = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
                const existingIds = new Set(existing.map(m => m.id));
                const merged = [...existing, ...data.filter(m => !existingIds.has(m.id))];
                localStorage.setItem('savedMeditations', JSON.stringify(merged));
                document.getElementById('main-content').innerHTML = Views.meditationLibrary();
                alert(`Imported ${data.length} meditation(s) successfully!`);
            } catch(err) {
                alert('Could not read file. Make sure it is a valid meditation backup.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
};

window.importMeditationText = () => {
    const text = prompt('Paste your meditation text here to add it to the library manually:');
    if (!text || text.trim().length < 50) return;
    const name = prompt('Give this meditation a name:');
    if (!name) return;
    let library = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
    library.push({ id: Date.now().toString(), name, date: new Date().toLocaleDateString(), text: text.trim() });
    localStorage.setItem('savedMeditations', JSON.stringify(library));
    document.getElementById('main-content').innerHTML = Views.meditationLibrary();
};

Views.meditationLibrary = () => {
    let html = `<div class="glass-card fade-in" style="max-width:1000px; padding: 4rem;">`;
    html += `<button class="secondary-btn" style="margin-bottom:2rem;" onclick="window.switchTo('welcome')">← Back to Home</button>`;
    html += `<h2 style="font-size:3rem; margin-bottom:1rem;">Meditation Library</h2>`;
    html += `<p style="color:var(--text-dim); margin-bottom:2rem; font-size:1.1rem;">Your personal vault of Alchemical Scripts.</p>`;

    // Toolbar
    html += `<div style="display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:3rem;">`;
    html += `<button class="cta-btn" onclick="window.exportLibraryToFile()">💾 Export Backup</button>`;
    html += `<button class="secondary-btn" onclick="window.importLibraryFromFile()">📂 Import from File</button>`;
    html += `<button class="secondary-btn" onclick="window.importMeditationText()">✏️ Paste Text</button>`;
    html += `</div>`;
    
    let library = JSON.parse(localStorage.getItem('savedMeditations') || '[]');
    
    if (library.length === 0) {
        html += `<div style="text-align:center; padding: 4rem; background:rgba(255,255,255,0.02); border-radius:16px; border:1px dashed var(--glass-border);">`;
        html += `<h3 style="color:var(--text-main); margin-bottom:1rem;">Your library is empty.</h3>`;
        html += `<p style="color:var(--text-dim); margin-bottom:2rem;">Generate a Perfect Day meditation and save it, or import a backup file.</p>`;
        html += `</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:1.5rem;">`;
        library.forEach(m => {
            html += `<div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3); padding:2rem; border-radius:16px; border:1px solid var(--glass-border);">`;
            html += `<div>`;
            html += `<h3 style="color:var(--accent); font-size:1.5rem; margin-bottom:0.5rem;">${m.name}</h3>`;
            html += `<p style="color:var(--text-dim); font-size:0.9rem;">Created: ${m.date}</p>`;
            html += `</div>`;
            html += `<div style="display:flex; gap:1rem; flex-wrap:wrap;">`;
            html += `<button class="cta-btn" onclick="window.loadSavedMeditation('${m.id}')">🎙️ Record</button>`;
            html += `<button class="secondary-btn" style="color:#ef4444; border-color:transparent; background:rgba(239,68,68,0.1);" onclick="window.deleteSavedMeditation('${m.id}')" title="Delete">🗑️</button>`;
            html += `</div>`;
            html += `</div>`;
        });
        html += `</div>`;
    }
    
    html += `</div>`;
    return html;
};


Views.perfectDay = () => {
    let html = `<div class="glass-card fade-in" style="max-width:1000px; padding: 4rem;">`;
    html += `<h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Your Design</h4>`;
    html += `<h2 style="font-size:3rem;">The Perfect Day</h2>`;
    
    html += `<div id="meditation-container" class="story-text" style="font-size:1.3rem; line-height:2; margin-top:3rem; min-height: 300px;">`;
    
    if (window.currentMeditation) {
        const renderMeditationText = (text) => {
            // Pre-process: break up run-on affirmations separated by spaces
            let processed = text.replace(
                /([.!?])\s+(I\s+(?:am|AM|have|feel|see|know|choose|embrace|embody|radiate|claim|trust|release|welcome|invite|allow|breathe|open|step)\b)/g,
                '$1\n$2'
            );
            processed = processed.replace(/\n{3,}/g, '\n\n').trim();

            const rawParagraphs = processed.split('\n\n').map(p => p.trim()).filter(p => p.length > 0);

            // Tag each paragraph: affirmation = mostly short "I ..." lines
            const tagged = rawParagraphs.map(para => {
                const lines = para.split('\n').map(l => l.trim()).filter(l => l.length > 0);
                const affirmCount = lines.filter(l => /^I\s+\w/i.test(l) && l.length < 220).length;
                return { para, lines, isAffirmation: affirmCount >= 1 && affirmCount >= lines.length * 0.5 };
            });

            // Merge consecutive affirmation paragraphs, then chunk into groups of 5
            let out = '';
            let i = 0;
            while (i < tagged.length) {
                if (tagged[i].isAffirmation) {
                    let allLines = [];
                    while (i < tagged.length && tagged[i].isAffirmation) {
                        allLines = allLines.concat(tagged[i].lines);
                        i++;
                    }
                    for (let j = 0; j < allLines.length; j += 5) {
                        const chunk = allLines.slice(j, j + 5).join('<br>');
                        out += `<p style="margin-bottom:2rem; color:var(--accent); font-style:italic; line-height:2.2;">${chunk}</p>`;
                    }
                } else {
                    out += `<p style="margin-bottom:2rem;">${tagged[i].para.replace(/\n/g, '<br>')}</p>`;
                    i++;
                }
            }
            return out;
        };
        html += renderMeditationText(window.currentMeditation);
    } else {
        // Render loading state
        html += `<div style="text-align:center; padding: 4rem 0; opacity: 0.7;">`;
        html += `<h3 class="pulse-text" style="color:var(--primary); font-size:1.5rem; font-weight:300;">Synthesizing your visionary day...</h3>`;
        html += `<p style="font-size:1rem; margin-top:1rem;">The Identity Alchemy engine is weaving your selections into a living narrative.</p>`;
        html += `</div>`;
        
        // Trigger synthesis
        setTimeout(() => {
            synthesizePerfectDayAI().then(meditationText => {
                window.currentMeditation = meditationText;
                if(State.view === 'perfectDay') {
                    document.getElementById('main-content').innerHTML = Views.perfectDay();
                }
            }).catch(err => {
                window.currentMeditation = "An error occurred during synthesis: " + err.message;
                if(State.view === 'perfectDay') {
                    document.getElementById('main-content').innerHTML = Views.perfectDay();
                }
            });
        }, 100);
    }
    
    html += `</div>`;
    
    // Audio Alchemy UI
    html += `<div style="margin-top:4rem; padding: 2rem; background:rgba(0,0,0,0.3); border-radius:16px; border:1px solid var(--glass-border); text-align:center;">`;
    html += `<h3 style="color:var(--accent); font-size:1.5rem; margin-bottom:1rem;">Audio Alchemy Experience</h3>`;
    html += `<p style="color:var(--text-dim); margin-bottom:1.5rem;">The most powerful subconscious programming is delivered in your own voice. Enter the Studio to record your masterpiece over the Hemi-Sync music.</p>`;
    html += `<button class="cta-btn" onclick="window.switchTo('recordingStudio')">🎙️ Enter Recording Studio</button>`;
    html += `</div>`;
    
    html += `<div style="display:flex; justify-content:space-between; margin-top:4rem; flex-wrap:wrap; gap:1rem;">`;
    html += `<button class="secondary-btn" onclick="window.currentMeditation = null; window.switchTo('aestheticProfile')">Adjust Aesthetics</button>`;
    html += `<div>`;
    html += `<button class="cta-btn" style="background:var(--primary); color:#000; margin-right:1rem;" onclick="window.saveMeditationToLibrary()">💾 Save to Library</button>`;
    html += `<button class="secondary-btn" onclick="window.print()">Save to PDF</button>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    
    // Add pulsing CSS if it doesn't exist
    if (!document.getElementById('pulse-style')) {
        const style = document.createElement('style');
        style.id = 'pulse-style';
        style.innerHTML = `
        @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; text-shadow: 0 0 20px var(--primary); }
            100% { opacity: 0.5; }
        }
        .pulse-text {
            animation: pulse 3s infinite ease-in-out;
        }
        `;
        document.head.appendChild(style);
    }
    
    return html;
};

// AI Synthesis Engine
async function synthesizePerfectDayAI() {
    let rawRituals = State.userData.selectedRituals || [];
    
    // Sanitize: Only include rituals that currently exist in the library
    // This prevents old, cached, or renamed rituals from being sent to the AI
    const allValidRituals = Object.values(window.DailyRitualLibrary).flat();
    const rituals = rawRituals.filter(r => allValidRituals.includes(r));
    
    const pillars = State.userData.pillars || [];
    const aesthetics = State.userData.aesthetics || [];
    
    // Gather all user context to feed to the AI
    let userContext = pillars.map(p => `Pillar: ${p.title}\nCurrent State/Venting: ${p.venting || ''}\nLimiting Beliefs: ${p.probeText || ''}\nThe New Truth (Jewel): ${p.jewel || ''}\nActionable Gems: ${(p.selectedGems||[]).join(', ')}`).join('\n\n');
    
    const prompt = `You are a world-class guided meditation writer and identity alchemist. Your goal is to write a breathtaking, flowing, 2nd-person narrative (e.g. "You wake up naturally...") that describes the user's Perfect Day.

CRITICAL SUBCONSCIOUS RULE: 
You must ONLY use positive, affirmative language. The subconscious mind does not process negative words well (e.g. if you say "no pain", the brain focuses on "pain"). 
Instead of "zero pain", say "complete physical freedom and vibrant ease." 
Instead of "without an alarm", say "naturally and peacefully."
Eliminate all words like "no, not, zero, without, stress, pain, anxiety, fear" from the meditation entirely. Frame everything by the presence of the good thing, not the absence of the bad thing.

USER'S 7 PILLAR CONTEXT (Their deeper identity and desires):
${userContext}

USER'S AESTHETIC & ENERGETIC PREFERENCES:
${aesthetics.length > 0 ? aesthetics.join(', ') : 'No specific aesthetics chosen, follow the vibe of their pillars.'}

USER'S SELECTED RITUALS FOR THE DAY:
${rituals.join('\n')}

INSTRUCTIONS:
1. Weave the selected rituals and their pillar identity into a beautiful, seamless, chronological story from Morning to Night.
2. The tone must be highly poetic, dreamy, idyllic, and visionary. It should feel like a profound guided meditation that pulls the user deeply into the emotion of the vision.
3. MAGIC QUESTIONS (AFFORMATIONS): Throughout the story of the perfect day, organically sprinkle "magic questions" (Afformations) into the narrative. For example, as the user is enjoying their morning, they might think, "How did my life get so beautiful?" or "I wonder how it could get even better than this?".
4. AESTHETIC & CONTINUITY RULE: You MUST maintain absolute continuity of place throughout the entire narrative. Do not abruptly teleport the user between disconnected environments. If the user selected seemingly contradictory environments or rituals (e.g., a "luxury villa" and a "cool forest", or "Tropical Paradise" and "Moody Pacific Northwest"), creatively synthesize them into a single, highly congruent world (e.g., a luxurious, modern villa nestled deep within a misty, ancient coastal forest). The environment must feel grounded, real, and physically consistent from morning to night.
5. THE AWAKENING OUTRO: After the vision of the perfect day concludes (as they fall asleep in the vision), you must smoothly transition into an "awakening" phase to bring the user out of the meditation and back into their present reality.
6. MASSIVE AFFIRMATION BLOCK: As they awaken from the vision, you must provide a massive, extensive block of powerful "I AM" affirmations drawn directly from their Actionable Gems and Pillar Manifesto. This section of pure affirmations must be incredibly long—at least equal in length to the story of the perfect day itself. CRITICAL FORMATTING RULE: You MUST break these affirmations into many small paragraphs of 2 to 3 sentences maximum. Do not output a single massive wall of text.
7. FINAL EMPOWERING QUESTIONS: After the massive block of affirmations, end the meditation with 3 or 4 incredibly powerful, high-energy magic questions (Afformations) tailored to their pillars. The final sentence must leave them feeling fully refreshed, on fire, and ready to dominate their day.
8. Output ONLY the meditation text, broken into beautiful paragraphs. No AI intro, no commentary.`;

    const apiKey = window.OPENAI_KEY || "YOUR_OPENAI_API_KEY_HERE";
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Very fast, incredibly cheap, great at prose
                messages: [
                    { role: "system", content: "You are a master meditation script writer." },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
            })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} ${errorText}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (e) {
        console.error(e);
        return "The AI synthesis failed. Error: " + e.message;
    }
}


// Override the handleNext function to route to the new views
window.handleNext = () => {
    if (window.syncInput) window.syncInput(); 
    
    if (State.view === 'discovery') { 
        State.alchemyPhase = 'mirror'; 
        window.switchTo('alchemy'); 
    }
    else if (State.view === 'alchemy') {
        if (State.alchemyPhase === 'mirror') { 
            State.alchemyPhase = 'probe'; 
            window.switchTo('alchemy'); 
        }
        else if (State.alchemyPhase === 'probe') { 
            State.alchemyPhase = 'final'; 
            window.switchTo('alchemy'); 
        }
        else {
            if (State.pillarIndex < 6) { 
                State.pillarIndex++; 
                State.alchemyPhase = 'mirror'; 
                window.switchTo('intro'); 
            }
            else { 
                // INTERCEPTION: Route to Aesthetic Profile instead of Manifesto
                window.switchTo('aestheticProfile'); 
            }
        }
    } 
    else if (State.view === 'aestheticProfile') {
        window.switchTo('rituals');
    }
    else if (State.view === 'rituals') {
        window.switchTo('perfectDay');
    }
    else if (State.view === 'recordingStudio') {
        window.switchTo('perfectDay');
    }
};

// --- ASSET MANAGER & LIVE MIXER ---
window.AssetManager = {
    buffers: {},
    audioCtx: null,
    files: {
        birds: 'assets/audio/birds.mp3',
        campfire: 'assets/audio/fire.mp3',
        bowls: 'assets/audio/bowls.mp3',
        piano: 'assets/audio/piano.mp3',
        chimes: 'assets/audio/chimes.mp3'
    },
    loadViaXHR: function(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = () => {
                if (xhr.status === 200 || xhr.status === 0) { // status 0 = local file success
                    resolve(xhr.response);
                } else {
                    reject(new Error(`XHR failed: ${xhr.status}`));
                }
            };
            xhr.onerror = () => reject(new Error(`XHR network error for ${url}`));
            xhr.send();
        });
    },
    init: async function() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const promises = [];
        for (const [key, url] of Object.entries(this.files)) {
            if (!this.buffers[key]) {
                promises.push(
                    this.loadViaXHR(url)
                        .then(ab => this.audioCtx.decodeAudioData(ab))
                        .then(buffer => { this.buffers[key] = buffer; })
                        .catch(e => console.warn(`Skipping ${key} (could not load):`, e))
                );
            }
        }
        await Promise.all(promises);
    }
};

window.LiveMixer = {
    audioCtx: null,
    isPlaying: false,
    activeNodes: {},
    masterGain: null,
    
    init: async function() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioCtx.createGain();
            this.masterGain.gain.value = 1.0;
            this.masterGain.connect(this.audioCtx.destination);
            await window.AssetManager.init();
        }
    },
    
    togglePlay: async function() {
        const btn = document.getElementById('preview-mix-btn');
        if (this.isPlaying) {
            this.stopAll();
            this.isPlaying = false;
            if(btn) btn.innerText = '▶️ Play Live Mix';
            // re-render to update button state
            document.getElementById('main-content').innerHTML = Views.recordingStudio();
            return;
        }
        
        if(btn) btn.innerText = '⏳ Initializing Mix...';
        await this.init();
        
        if (this.audioCtx.state === 'suspended') {
            await this.audioCtx.resume();
        }
        
        this.isPlaying = true;
        if(btn) btn.innerText = '⏹️ Stop Live Mix';
        document.getElementById('main-content').innerHTML = Views.recordingStudio();
        
        for (const [key, isChecked] of Object.entries(window.StudioMixer.soundscape)) {
            if (isChecked) {
                this.fadeNode(key, true);
            }
        }
    },
    
    fadeNode: async function(key, turnOn) {
        if (!this.isPlaying) return;

        // MP3 files need crossfade-loop to hide restart; procedural noise uses src.loop (seamless)
        const MP3_KEYS = new Set(['birds', 'campfire', 'bowls', 'piano', 'chimes']);

        if (turnOn) {
            if (this.activeNodes[key]) return;

            let buffer = window.AssetManager.buffers[key];
            if (!buffer) buffer = await this.generateProceduralLoop(key);
            if (!buffer) return;

            const ctx = this.audioCtx;
            const targetVol = { ocean:0.8, rain:0.4, bowls:0.7, birds:0.6 }[key] ?? 0.5;

            if (!MP3_KEYS.has(key)) {
                // ── Procedural / noise sounds: loop=true keeps them perfectly continuous ──
                const src = ctx.createBufferSource();
                src.buffer = buffer;
                src.loop = true;
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(targetVol, ctx.currentTime + 1.5);
                src.connect(gain);
                gain.connect(this.masterGain);
                src.start(0);
                this.activeNodes[key] = {
                    stop: () => {
                        gain.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
                        setTimeout(() => { try { src.stop(); src.disconnect(); gain.disconnect(); } catch(e){} }, 800);
                    }
                };

            } else if (key === 'birds') {
                // ── Birds: occasional chirps with random pitch, volume, and long silences ──
                let alive = true;
                let activeSources = [];

                const playChirp = () => {
                    if (!alive) return;
                    const s = ctx.createBufferSource();
                    s.buffer = buffer;
                    // Random pitch: ±200 cents (±2 semitones) — sounds like different birds
                    s.detune.value = (Math.random() - 0.5) * 400;
                    const g = ctx.createGain();
                    g.gain.value = 0.3 + Math.random() * 0.35;
                    s.connect(g); g.connect(this.masterGain);
                    s.start(0);
                    activeSources.push({ s, g });

                    s.onended = () => {
                        try { s.disconnect(); g.disconnect(); } catch(e) {}
                        activeSources = activeSources.filter(n => n.s !== s);
                        // Wait a random gap then chirp again — 10 to 28 seconds of silence
                        const gapMs = (10 + Math.random() * 18) * 1000;
                        setTimeout(() => { if (alive) playChirp(); }, gapMs);
                    };
                };

                // Stagger the first chirp so it doesn't always hit at t=0
                setTimeout(() => { if (alive) playChirp(); }, Math.random() * 4000);

                this.activeNodes[key] = {
                    stop: () => {
                        alive = false;
                        activeSources.forEach(({ s, g }) => {
                            try {
                                g.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
                                setTimeout(() => { try { s.stop(); } catch(e){} }, 500);
                            } catch(e) {}
                        });
                    }
                };

            } else {
                // ── Other MP3 sounds (chimes, bowls, piano, campfire): crossfade scheduler ──
                const XFADE = Math.min(6, buffer.duration * 0.22);
                let alive = true;
                let activeSources = [];

                const scheduleInstance = (startAt, startOffset) => {
                    if (!alive) return;
                    const s = ctx.createBufferSource();
                    s.buffer = buffer;
                    const g = ctx.createGain();
                    g.gain.setValueAtTime(0, startAt);
                    g.gain.linearRampToValueAtTime(targetVol, startAt + XFADE);
                    s.connect(g); g.connect(this.masterGain);
                    s.start(startAt, startOffset);
                    activeSources.push({ s, g });

                    const playDuration = buffer.duration - startOffset;
                    const fadeOutAt = startAt + playDuration - XFADE;
                    g.gain.setTargetAtTime(0, fadeOutAt, XFADE / 4);

                    const msUntilNext = Math.max(0, (fadeOutAt - ctx.currentTime - 0.05) * 1000);
                    setTimeout(() => {
                        scheduleInstance(ctx.currentTime, 0);
                        activeSources = activeSources.filter(n => n.s !== s);
                    }, msUntilNext);

                    s.onended = () => { try { s.disconnect(); g.disconnect(); } catch(e){} };
                };

                scheduleInstance(ctx.currentTime, 0);

                this.activeNodes[key] = {
                    stop: () => {
                        alive = false;
                        const now = ctx.currentTime;
                        activeSources.forEach(({ s, g }) => {
                            try {
                                g.gain.setTargetAtTime(0, now, 0.4);
                                setTimeout(() => { try { s.stop(); } catch(e){} }, 700);
                            } catch(e) {}
                        });
                    }
                };
            }

        } else {
            if (!this.activeNodes[key]) return;
            const node = this.activeNodes[key];
            if (typeof node.stop === 'function') node.stop();
            delete this.activeNodes[key];
        }
    },

    
    stopAll: function() {
        for (const key of Object.keys(this.activeNodes)) {
            this.fadeNode(key, false);
        }
    },
    
    generateProceduralLoop: async function(key) {
        if (window.AssetManager.buffers[key]) return window.AssetManager.buffers[key];
        
        const offlineCtx = new OfflineAudioContext(2, 44100 * 20, 44100);
        const bgGain = offlineCtx.createGain();
        bgGain.connect(offlineCtx.destination);
        
        const s = {}; s[key] = true;
        await window.applySoundscapesToContext(offlineCtx, bgGain, s, 20);
        
        const buffer = await offlineCtx.startRendering();
        window.AssetManager.buffers[key] = buffer;
        return buffer;
    }
};

window.applySoundscapesToContext = async function(offlineCtx, bgGain, s, totalDuration) {
    await window.AssetManager.init();
    let pinkBuffer, brownBuffer, whiteBuffer;
    if (s.ocean || s.rain || s.river || s.wind) pinkBuffer = createNoiseBuffer(offlineCtx, 'pink', totalDuration);
    if (s.thunder) brownBuffer = createNoiseBuffer(offlineCtx, 'brown', totalDuration);
    if (s.campfire) whiteBuffer = createNoiseBuffer(offlineCtx, 'white', totalDuration);
    
    if (s.binaural) {
        // Left channel: 136.1 Hz carrier, Right channel: 140.1 Hz carrier = 4Hz theta beat
        const binGainL = offlineCtx.createGain(); binGainL.gain.value = 0.35;
        const binGainR = offlineCtx.createGain(); binGainR.gain.value = 0.35;
        const splitter = offlineCtx.createChannelSplitter(2);
        const merger = offlineCtx.createChannelMerger(2);
        const oscL = offlineCtx.createOscillator(); oscL.type = 'sine'; oscL.frequency.value = 136.1;
        const oscR = offlineCtx.createOscillator(); oscR.type = 'sine'; oscR.frequency.value = 140.1;
        oscL.connect(binGainL); binGainL.connect(merger, 0, 0);
        oscR.connect(binGainR); binGainR.connect(merger, 0, 1);
        oscL.start(0); oscR.start(0);
        merger.connect(bgGain);
    }
    
    if (s.spaceDrone) {
        const droneGain = offlineCtx.createGain(); droneGain.gain.value = 0.15;
        const lpf = offlineCtx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 300;
        droneGain.connect(lpf); lpf.connect(bgGain);
        [136.1, 204.15, 272.2].forEach(freq => {
            const osc = offlineCtx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = freq;
            const lfo = offlineCtx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 0.15;
            const lfoGain = offlineCtx.createGain(); lfoGain.gain.value = 2;
            lfo.connect(lfoGain); lfoGain.connect(osc.detune);
            lfo.start(0); osc.start(0);
            osc.connect(droneGain);
        });
        let t = 0;
        while(t < totalDuration) {
            lpf.frequency.setTargetAtTime(600, t, 4); t += 4;
            lpf.frequency.setTargetAtTime(300, t, 4); t += 4;
        }
    }
    
    if (s.ocean) {
        const src = offlineCtx.createBufferSource(); src.buffer = pinkBuffer;
        const filter = offlineCtx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 400;
        const gain = offlineCtx.createGain(); gain.gain.value = 0.8;
        src.connect(filter); filter.connect(gain); gain.connect(bgGain);
        src.start(0);
        let t = 0;
        while(t < totalDuration) {
            gain.gain.setTargetAtTime(1.2, t, 2);
            filter.frequency.setTargetAtTime(800, t, 2);
            t += 4;
            gain.gain.setTargetAtTime(0.4, t, 3);
            filter.frequency.setTargetAtTime(300, t, 3);
            t += 4 + Math.random() * 2;
        }
    }
    
    if (s.rain) {
        const src = offlineCtx.createBufferSource(); src.buffer = pinkBuffer;
        const filter = offlineCtx.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = 800;
        const gain = offlineCtx.createGain(); gain.gain.value = 0.4;
        src.connect(filter); filter.connect(gain); gain.connect(bgGain);
        src.start(0);
    }
    
    if (s.thunder) {
        const src = offlineCtx.createBufferSource(); src.buffer = brownBuffer;
        const filter = offlineCtx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 300;
        const gain = offlineCtx.createGain(); gain.gain.value = 0;
        src.connect(filter); filter.connect(gain); gain.connect(bgGain);
        src.start(0);
        let t = Math.random() * 10;
        while(t < totalDuration) {
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(1.5, t + 0.5);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 4);
            gain.gain.setValueAtTime(0, t + 4.1);
            t += 10 + Math.random() * 20;
        }
    }
    
    if (s.river) {
        const src = offlineCtx.createBufferSource(); src.buffer = pinkBuffer;
        const filter = offlineCtx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.value = 600; filter.Q.value = 0.5;
        const gain = offlineCtx.createGain(); gain.gain.value = 1.0;
        src.connect(filter); filter.connect(gain); gain.connect(bgGain);
        src.start(0);
    }
    
    if (s.wind) {
        const src = offlineCtx.createBufferSource(); src.buffer = pinkBuffer;
        const filter = offlineCtx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.value = 500; filter.Q.value = 0.2;
        const gain = offlineCtx.createGain(); gain.gain.value = 0.6;
        src.connect(filter); filter.connect(gain); gain.connect(bgGain);
        src.start(0);
        let t = 0;
        while(t < totalDuration) {
            filter.frequency.setTargetAtTime(800, t, 5); t += 6;
            filter.frequency.setTargetAtTime(400, t, 5); t += 6;
        }
    }

    if (s.crickets) {
        // 3 overlapping cricket layers at different freqs/timings with random gaps
        [[4600, 0.0], [4950, 0.18], [4750, 0.33]].forEach(([freq, startOffset]) => {
            const noise = createNoiseBuffer(offlineCtx, 'white', totalDuration);
            const src = offlineCtx.createBufferSource(); src.buffer = noise;
            const bp = offlineCtx.createBiquadFilter();
            bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 50;
            const gain = offlineCtx.createGain(); gain.gain.value = 0;
            src.connect(bp); bp.connect(gain); gain.connect(bgGain);
            src.start(0);
            let t = startOffset + 0.05;
            while (t < totalDuration - 0.35) {
                const chirpLen = 0.13 + Math.random() * 0.1;
                const gapLen   = 0.22 + Math.random() * 0.25;
                gain.gain.setValueAtTime(0, t);
                gain.gain.linearRampToValueAtTime(0.28, t + 0.018);
                gain.gain.setValueAtTime(0.28, t + chirpLen - 0.02);
                gain.gain.linearRampToValueAtTime(0, t + chirpLen);
                t += chirpLen + gapLen;
            }
        });
    }

    if (s.heartbeat) {
        // Pitch-drop thump: starts high, drops fast to ~30Hz — sounds like a real heartbeat
        const beatInterval = 60 / 62;
        for (let t = 0.2; t < totalDuration - 0.7; t += beatInterval) {
            // LUB
            const osc1 = offlineCtx.createOscillator(); osc1.type = 'sine';
            osc1.frequency.setValueAtTime(90, t);
            osc1.frequency.exponentialRampToValueAtTime(28, t + 0.15);
            const g1 = offlineCtx.createGain();
            g1.gain.setValueAtTime(0, t);
            g1.gain.linearRampToValueAtTime(2.5, t + 0.03);
            g1.gain.exponentialRampToValueAtTime(0.01, t + 0.32);
            g1.gain.setValueAtTime(0, t + 0.33);
            osc1.connect(g1); g1.connect(bgGain);
            osc1.start(t); osc1.stop(t + 0.35);
            // DUB
            const osc2 = offlineCtx.createOscillator(); osc2.type = 'sine';
            osc2.frequency.setValueAtTime(75, t + 0.34);
            osc2.frequency.exponentialRampToValueAtTime(26, t + 0.46);
            const g2 = offlineCtx.createGain();
            g2.gain.setValueAtTime(0, t + 0.34);
            g2.gain.linearRampToValueAtTime(1.5, t + 0.37);
            g2.gain.exponentialRampToValueAtTime(0.01, t + 0.56);
            g2.gain.setValueAtTime(0, t + 0.57);
            osc2.connect(g2); g2.connect(bgGain);
            osc2.start(t + 0.34); osc2.stop(t + 0.6);
        }
    }

    const addAssetBuffer = (bufferKey, volume) => {
        const buffer = window.AssetManager.buffers[bufferKey];
        if (!buffer) return;
        const src = offlineCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;
        const gain = offlineCtx.createGain();
        gain.gain.value = volume;
        src.connect(gain);
        gain.connect(bgGain);
        src.start(0);
        src.stop(totalDuration);
    };

    if (s.birds) addAssetBuffer('birds', 0.6);
    if (s.campfire) addAssetBuffer('campfire', 0.5);
    if (s.bowls) addAssetBuffer('bowls', 0.7);
    if (s.piano) addAssetBuffer('piano', 0.6);
    if (s.chimes) addAssetBuffer('chimes', 0.5);
};
