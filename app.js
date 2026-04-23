// Identity Alchemy - Universal Master Alchemical Engine v4.2
// This engine is generic. Personal data is loaded from demoData.js (Private).

const GlobalLibrary = {
    spiritual: {
        questions: ["Where are you fighting existence?", "What metaphysical principles are you embodying?", "Who are you when you have 'Arrived'?"],
        options: [
            { id: 'sp1', text: "I am the Conscious Architect of my Reality. I no longer 'manifest'; I assume the state of my wish fulfilled with unwavering certainty." },
            { id: 'sp2', text: "I am perfectly aligned with the timing of the universe. My life is a masterpiece of precision and flow, where every action is a ritual of being." },
            { id: 'sp3', text: "I have deconstructed my childhood wounds and stand now in the field of all possibilities. My clarity of vision is my primary currency." },
            { id: 'sp4', text: "I am a soul in transition from effort to ease. I encompassing all that I desire, standing grounded in the knowing that it is already mine." },
            { id: 'sp5', text: "My presence is my power. I occupy the state of completion, letting go of the 'how' and trusting the divine orchestration of my life." }
        ]
    },
    mental: {
        questions: ["Where is your genius blocked?", "Describe the noise distracting your savant ideas.", "What does mental synchronization feel like?"],
        options: [
            { id: 'me1', text: "I am the Master of Mental Synchronicity. My neuro-divergence is my superpower, and I command it with grace and effortless focus." },
            { id: 'me2', text: "I design environments and systems that act as a protective barrier around my focus. My ideas move from inspiration to completion without friction." },
            { id: 'me3', text: "My mind is a high-frequency engine of mastery. I process complex concepts with precision, always knowing exactly what to do next." },
            { id: 'me4', text: "I am the Visionary of Order. I see through the complexity of my ideas into the simple, vital next step. My hyper-focus is my sanctuary." },
            { id: 'me5', text: "I protect my creative energy by automating the mundane. My brain is free to occupy the brilliant, creative edge of existence." }
        ]
    },
    vocational: {
        questions: ["What tasks feel unworthy of your brilliance?", "Where are you 'masking' to fit a professional role?", "Describe effortless leadership."],
        options: [
            { id: 'vo1', text: "I am the Sovereign Leader of Impact. My leadership is an organic extension of my natural resonance and presence." },
            { id: 'vo2', text: "I lead from a place of raw, inspired Presence. 'Masking' is replaced by my authentic authority, which naturally inspires everyone I meet." },
            { id: 'vo3', text: "I handle responsibility with the weightlessness of a master. My systems manage the 'boring' while I occupy the 'brilliant' zone of my genius." },
            { id: 'vo4', text: "My vocational path is one of sustainable influence. I am an inspiration to everyone, leading without effort and resting without guilt." },
            { id: 'vo5', text: "I am a magnet for roles that amplify my brilliance. My daily service is a byproduct of my being, never a performance of duty." }
        ]
    },
    wealth: {
        questions: ["Why does money feel like manual effort?", "Where are you bored with income maintenance?", "What does 0% micromanaged wealth feel like?"],
        options: [
            { id: 'we1', text: "I am a Magnet for Infinite Wealth. I curate streams of value that work with relentless efficiency while I create." },
            { id: 'we2', text: "My financial reality is tied to the potency of my ideas, not the hours of my time. My wealth compounding without my manual intervention." },
            { id: 'we3', text: "I am the Abundance Architect. My money works for me, creating absolute freedom for adventures, travel, and the pursuit of excellence." },
            { id: 'we4', text: "I move from 'trying' to 'following'. Abundance is my natural state, and I accept it with the authority of the financially sovereign." },
            { id: 'we5', text: "I design wealth systems that thrive on my creativity and survive my absence. My financial flow is as natural and constant as my breath." }
        ]
    },
    physical: {
        questions: ["Describe your prime physical state.", "Where is your body signaling old stories?", "What biological sovereignty are you reclaiming?"],
        options: [
            { id: 'ph1', text: "I am Radiantly Vital. My body is a biological masterpiece of regeneration, bypassing history to reclaim the strength of my prime." },
            { id: 'ph2', text: "I move with the stability and fluidity of an athlete in flow. Every cell is vibrating with the frequency of perfect health." },
            { id: 'ph3', text: "My mobility is restored, and my body injury is alchemized into insight. I dance through life with an inexhaustible, restorative energy." },
            { id: 'ph4', text: "I am the Physical Embodiment of Perfection. My discipline is the physical marker of my internal biological sovereignty." },
            { id: 'ph5', text: "I am Vitally Energized. My body is a resilient temple that supports my genius with tireless stamina and high-vibrational recovery." }
        ]
    },
    familial: {
        questions: ["Describe the friction in your most intimate connection.", "How do your kids respond to your new identity?", "What 'household load' are you ready to release?"],
        options: [
            { id: 'fa1', text: "I am a Magnetic Sovereign Partner. I am sexually vibrant and emotionally independent, building a sanctuary of mutual respect." },
            { id: 'fa2', text: "I release the need to regulate others. I trust that my light is enough to lead my family home, where everyone leads themselves." },
            { id: 'fa3', text: "Our home is a sanctuary of mutual regulation and deep connection. I am loved for my presence, not my ability to manage the junk." },
            { id: 'fa4', text: "My children see a model of resonance, which they naturally follow. We create a household of sovereign joy." },
            { id: 'fa5', text: "I stand as the heart of a harmonious home, where my relationships are characterized by deep present connection and shared vision." }
        ]
    },
    social: {
        questions: ["Where are you holding back your voice?", "What does inspiration without burnout look like?", "Who are you without the 'Mask'?"],
        options: [
            { id: 'so1', text: "I am Organically Memorable. My influence is a natural field I carry with me into every room, inspiring others without performance." },
            { id: 'so2', text: "I am Radiantly Bold. I occupy space with confidence and grace, offering my unique frequency freely and without fear of burnout." },
            { id: 'so3', text: "My social impact is sustainable and joyful. I attract a network of 'cool people' who match my high-frequency rhythm." },
            { id: 'so4', text: "I have arrived. I lead without effort and rest without guilt, standing as a beacon of what is possible when a human is truly authentic." },
            { id: 'so5', text: "I am an inspiration that doesn't require an 'on' switch. My simple existence is a catalyst for change in the world." }
        ]
    }
};

const State = {
    view: 'welcome',
    pillarIndex: 0,
    questionIndex: 0,
    isRecording: false,
    userData: null
};

function resetState() {
    State.userData = {
        pillars: Object.keys(GlobalLibrary).map(id => ({
            id, name: id.charAt(0).toUpperCase() + id.slice(1),
            venting: ["", "", ""], selections: []
        }))
    };
    saveData();
}

function saveData() { localStorage.setItem('id_alchemy_v4_2', JSON.stringify(State.userData)); }

if (!localStorage.getItem('id_alchemy_v4_2')) resetState();
else State.userData = JSON.parse(localStorage.getItem('id_alchemy_v4_2'));

// --- Navigation ---
window.switchTo = (v) => { 
    State.view = v; 
    const main = document.getElementById('main-content');
    if (v === 'welcome') State.pillarIndex = 0;
    if (Views[v]) main.innerHTML = Views[v](); 
};

// --- Simulation Mode (Private) ---
window.simulateUserSession = () => {
    if (!window.myPrivateData) return alert("Private Data not found. Ensure demoData.js exists locally.");
    const p = State.userData.pillars;
    p[0].venting = window.myPrivateData.spiritual;
    p[1].venting = window.myPrivateData.mental;
    p[2].venting = window.myPrivateData.vocational;
    p[3].venting = window.myPrivateData.wealth;
    p[4].venting = window.myPrivateData.physical;
    p[5].venting = window.myPrivateData.familial;
    p[6].venting = window.myPrivateData.social;
    saveData(); 
    State.pillarIndex = 0;
    window.switchTo('alchemy');
};

// --- Voice ---
let recognition = null;
const VoiceController = {
    init: () => {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Speech) return;
        recognition = new Speech();
        recognition.continuous = true; recognition.interimResults = true;
        recognition.onresult = (e) => {
            let t = ''; for (let i = e.resultIndex; i < e.results.length; ++i) if (e.results[i].isFinal) t += e.results[i][0].transcript;
            const el = document.getElementById('main-input');
            if (el) { el.value += (el.value ? ' ' : '') + t; el.scrollTop = el.scrollHeight; }
        };
        recognition.onstart = () => { document.getElementById('mic-status-dot').className='online'; document.getElementById('mic-status-text').innerText='Hearing You'; };
        recognition.onend = () => { if (State.isRecording) setTimeout(() => recognition.start(), 250); else { document.getElementById('mic-status-dot').className=''; document.getElementById('mic-status-text').innerText='Idle'; } };
    }
};

window.handleNext = () => {
    const p = State.userData.pillars[State.pillarIndex];
    if (State.view === 'unloading') {
        p.venting[State.questionIndex] = document.getElementById('main-input').value;
        if (State.questionIndex < 2) { State.questionIndex++; }
        else {
            State.questionIndex = 0;
            if (State.pillarIndex < 6) State.pillarIndex++;
            else { State.pillarIndex = 0; window.switchTo('alchemy'); return; }
        }
    } else if (State.view === 'alchemy') {
        if (State.pillarIndex < 6) State.pillarIndex++;
        else { window.switchTo('manifesto'); return; }
    }
    saveData(); window.switchTo(State.view);
};

window.toggleSelection = (id) => {
    const p = State.userData.pillars[State.pillarIndex];
    const idx = p.selections.indexOf(id);
    if (idx === -1) p.selections.push(id); else p.selections.splice(idx, 1);
    saveData(); window.switchTo('alchemy');
};

const Views = {
    welcome: () => `
        <div class="hero">
            <h1>Identity Alchemy</h1>
            <p class="subtitle">A Transformative 7-Pillar Engine.</p>
            <div style="display:flex; gap:1rem; justify-content:center;">
                <button class="cta-btn" onclick="window.switchTo('unloading')">Begin Journey</button>
                <button class="cta-btn" style="background:var(--secondary); display:${window.myPrivateData ? 'block' : 'none'}" onclick="window.simulateUserSession()">Simulate My Session</button>
            </div>
        </div>
    `,
    unloading: () => {
        const pillar = State.userData.pillars[State.pillarIndex];
        return `
            <div class="glass-card">
                <div class="progress-bar-container"><div class="progress-fill" style="width:${((State.pillarIndex * 3 + State.questionIndex + 1) / 21) * 100}%"></div></div>
                <h2>Unloading: ${pillar.name}</h2>
                <p class="form-desc" style="font-size:1.3rem;">${GlobalLibrary[pillar.id].questions[State.questionIndex]}</p>
                <textarea id="main-input" placeholder="Narrate your response...">${pillar.venting[State.questionIndex]}</textarea>
                <div class="voice-controls">
                    <button class="mic-btn ${State.isRecording ? 'recording' : ''}" onclick="State.isRecording = !State.isRecording; VoiceController.init(); State.isRecording ? recognition.start() : recognition.stop(); window.switchTo('unloading');">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    </button>
                    <button class="cta-btn" onclick="handleNext()">Continue</button>
                </div>
            </div>
        `;
    },
    alchemy: () => {
        const pillar = State.userData.pillars[State.pillarIndex];
        const lib = GlobalLibrary[pillar.id];
        return `
            <div class="glass-card">
                <div class="progress-bar-container"><div class="progress-fill" style="width:${(State.pillarIndex + 1) * 14.2}%"></div></div>
                <h2 style="color:var(--accent);">Alchemical Bridge: ${pillar.name}</h2>
                <div style="margin-bottom:2rem;">
                    <b style="color:var(--primary);">Your Unloading Context:</b>
                    <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:12px; font-size:0.9rem; font-style:italic; border:1px dashed var(--glass-border); margin-top:0.5rem; max-height:120px; overflow-y:auto;">
                        "${pillar.venting.join(' ')}"
                    </div>
                </div>
                <div class="marketplace">
                    <b>Select your identity declarations:</b>
                    <div style="display:flex; flex-direction:column; gap:0.8rem; margin-top:1rem;">
                        ${lib.options.map(opt => `
                            <div class="marketplace-item ${pillar.selections.includes(opt.id) ? 'selected' : ''}" 
                                 onclick="window.toggleSelection('${opt.id}')"
                                 style="padding:1rem; border-radius:12px; border:1px solid ${pillar.selections.includes(opt.id) ? 'var(--accent)' : 'var(--glass-border)'}; cursor:pointer; background:${pillar.selections.includes(opt.id) ? 'rgba(45, 212, 191, 0.1)' : 'rgba(0,0,0,0.2)'};">
                                ${opt.text}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="cta-btn mt-4" onclick="handleNext()">${State.pillarIndex < 6 ? 'Next Shift' : 'Review Life Vision'}</button>
            </div>
        `;
    },
    manifesto: () => `
        <div class="glass-card">
            <h2>The Global Identity Manifesto</h2>
            <div class="final-manifesto-display">
                ${State.userData.pillars.map(p => `
                    <div style="margin-bottom: 2rem; border-left: 2px solid var(--accent); padding-left: 1.5rem;">
                        <h4 style="color: var(--accent); text-transform: uppercase;">${p.name} Sovereignty</h4>
                        <div style="line-height: 1.7; margin-top:0.5rem;">
                            ${p.selections.map(sid => {
                                const opt = GlobalLibrary[p.id].options.find(o => o.id === sid);
                                return `<p style="margin-bottom:0.5rem;">${opt ? opt.text : ''}</p>`;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="cta-btn mt-4" onclick="window.print()">Save to PDF</button>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    VoiceController.init();
    window.switchTo('welcome');
});
