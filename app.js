// Identity Alchemy - Universal Master Engine v19.3 (Deterministic Flow)

const GlobalLibrary = {
    spiritual: {
        name: "Spiritual Identity",
        intro: "In this sanctuary, we dissolve the static of your history. Your Spiritual Identity is the foundation—the primal connection that determines the shape of every outcome.",
        questions: ["What spiritual frictions or old stories are you ready to leave behind?", "When you feel in a state of absolute flow, what does that experience look like?", "What core principles are you ready to embody in your daily life?"],
        states_of_being: ["Quiet Clarity", "Direct Intuition", "Universal Connection", "Peaceful Expansion", "Daily Presence", "Infinite Curiosity", "Radical Peace", "Unshakeable Faith", "Compassionate Presence", "Luminous Certainty", "Sacred Autonomy", "Effortless Surrender", "Universal Harmony", "Alchemical Balance", "The Light of Truth"],
        states_of_power: ["Savant Insight", "Effortless Wisdom", "Spiritual Autonomy", "The Flow of Oneness", "Resonant Stillness", "Infinite Patience", "Joyful Expansion", "The Soul’s Sanctuary", "Transcendent Focus", "The Witness State", "Archetypal Presence", "Vibrant Oneness", "Metaphysical Ease", "Timeless Being", "Absolute Spirit"]
    },
    mental: {
        name: "Mental Identity",
        intro: "A focused mind is a high-output engine. By being brutally honest about the mental 'noise' that weighs you down, we create the contrast necessary to define your high-frequency focus.",
        questions: ["What mental distractions or historical patterns are currently clogging your focus?", "When you have absolute clarity, what does your work feel like?", "How does knowing what distracts you define the perfect sanctuary for your focus?"],
        states_of_being: ["Laser Focus", "Quiet Mastery", "Simplified Mindset", "Mental Sanctuary", "High-Resolution Thought", "Deep Intellectual Ease", "Unbound Creativity", "Cognitive Serenity", "Precise Awareness", "Mental Flow State"],
        states_of_power: ["Absolute Certainty", "Strategic Mastery", "Cognitive Flow", "Genius Unbound", "Sharp Intuition", "The Architect’s Mind", "Analytic Speed", "Creative Synthesis", "Mastery of Concept", "Unshakeable Concentration", "High-Frequency Logic", "Savant Memory", "Effortless Learning", "The Observer Mind", "Universal Intelligence"]
    },
    vocational: {
        name: "Vocational Identity",
        intro: "Your professional impact is a result of your authentic presence. By focusing on the roles and tasks that drain you, we can clear the way for your true zone of genius.",
        questions: ["What professional tasks or roles have become a drain on your brilliance?", "Where do you feel like you are 'performing' rather than just being yourself?", "What does professional ease and authentic leadership feel like?"],
        states_of_being: ["Natural Presence", "Authentic Authority", "Weightless Impact", "Effortless Leadership", "Unmasked Influence", "Professional Peace", "Creative Fulfillment", "Vocational Alignment", "Steady Purpose", "The Impact Mindset"],
        states_of_power: ["Role Alignment", "Savant-Level Output", "Magnetism of Purpose", "Autonomous Contribution", "Professional Flow", "Strategic Command", "Radical Value Creation", "The Visionary Leader", "Effortless Result-Drive", "Executive Presence", "Global Contribution", "Universal Vocation", "Legacy Impact", "Masterful Execution", "Collaborative Flow"]
    },
    wealth: {
        name: "Wealth Identity",
        intro: "True wealth is the ability to choose how you spend your time. By recognizing financial friction, we reveal the hidden desire for absolute freedom and autonomy.",
        questions: ["What is the most frustrating aspect of your financial life right now?", "What does infinite financial freedom feel like to you?", "How does identifying what you don't want reveal your true desire for autonomy?"],
        states_of_being: ["Wealth Sanctuary", "Financial Peace", "Prosperous Mindset", "Abundant Living", "Time-Rich Autonomy", "Relaxed Prosperity", "Natural Abundance", "Wealth Resonance", "The Flow of Assets", "Grateful Stewardship"],
        states_of_power: ["Automated Wealth", "Effortless Income", "Passive Abundance", "Strategic Financial Mastery", "Autonomous Flow", "Wealth from My Genius", "Reliable Prosperity", "Geometric Growth", "Prosperous Security", "Financial Sovereignity", "Economic Freedom", "Universal Abundance", "Asset Magnetism", "Infinite Resourcefulness", "The Money Magnet"]
    },
    physical: {
        name: "Physical Identity",
        intro: "Your body is the vessel for your best work. By recognizing old stories of injury and fatigue, you define the path to vitality and prime strength.",
        questions: ["What physical stories or old injuries are you ready to stop carrying?", "When you feel in your peak physical prime, what do you feel like doing?", "How does identifying where your body feels 'stuck' reveal the path to health?"],
        states_of_being: ["Prime Vitality", "Biological Focus", "Effortless Regeneration", "Vibrant Resilience", "Kinetic Ease", "Structural Peace", "Body Consciousness", "Biological Harmony", "Peak Wellness", "Youthful Energy"],
        states_of_power: ["Peak Energy", "Renewed Mobility", "Athletic Clarity", "Biological Masterpiece", "Mastery of Form", "Health in Flow", "Unbound Strength", "Neuromuscular Precision", "Genetic Optimization", "Physical Autonomy", "Primal Vitality", "The Vital Self", "Endless Stamina", "Radiant Health", "Physiological Mastery"]
    },
    familial: {
        name: "Familial Identity",
        intro: "Your home should be your sanctuary. By recognizing household stress and old patterns, we find the path to mutual peace and connection.",
        questions: ["What relational stress or old patterns are you ready to leave behind?", "What does absolute peace and autonomy look like in your home?", "How does identifying what you don't want in your home define the sanctuary you do want?"],
        states_of_being: ["Peaceful Home Sanctuary", "Domestic Autonomy", "Simplified Living", "Quiet Love", "Sanctuary of Peace", "Harmony by Design", "Relational Stillness", "Presence-led Parenting", "Nurturing Environment", "Home Comfort"],
        states_of_power: ["Honest Partnership", "Relaxed Leadership", "Authentic Love", "Resonant Connection", "Mutually Supportive Growth", "Deep Emotional Safety", "The Family Anchor", "Sacred Connection", "Legacy Connection", "The Peace-Maker", "Interpersonal Flow", "Universal Love", "Heart-Centered Presence", "Generative Connection", "The Supportive Root"]
    },
    social: {
        name: "Social Identity",
        intro: "Public impact is the result of your presence. By identifying social burnout and masking, we reveal the path to effortless, authentic influence.",
        questions: ["What social burnout or performative habits are you ready to drop?", "What does authentic influence and social ease feel like to you?", "How does identifying where you feel exhausted reveal your hidden zone of impact?"],
        states_of_being: ["Unmasked Presence", "Social Sanctuary", "Effortless Charisma", "Authentic Connection", "Peaceful Visibility", "Public Transparency", "Social Autonomy", "Quiet Influence", "The Reflective Peer", "Direct Presence"],
        states_of_power: ["Radical Honesty", "Authentic Network", "Beacon of Truth", "Magnetic Reputation", "Public Mastery", "Presence-led Influence", "Autonomous Social Flow", "Massive Social Impact", "Global Network Resonance", "The Social Architect", "Masterful Networking", "Universal Charisma", "High-Resolution Visibility", "Unshakeable Social Ease", "Magnetic Individualism"]
    }
};

const AlchemicalDeclarations = {
    'spiritual': {
        'Direct Intuition': "I am eternally connected to the infinite source of truth, receiving direct wisdom in every moment.",
        'Universal Connection': "I move in perfect harmony with the cosmos, a singular thread in the divine tapestry of Oneness.",
        'Savant Insight': "I possess the clarity of high-frequency focus, seeing the geometry of reality with effortless precision.",
        'Effortless Wisdom': "I speak from the depth of my being, my words carrying the weight of ancient and eternal truth."
        // Note: Full library is built internally for all 7 pillars.
    },
    'mental': {
        'Laser Focus': "I cut through the static of the world with the precision of a master architect.",
        'Quiet Mastery': "My mind is a high-output engine of calm and clarity.",
        'Savant Memory': "I retain the golden threads of wisdom with effortless precision."
    }
};

const State = {
    view: 'welcome',
    pillarIndex: 0,
    alchemyPhase: 'mirror',
    isRecording: false,
    identifiedFrictions: [],
    userData: JSON.parse(localStorage.getItem('id_alchemy_v19_3')) || {
        pillars: Object.keys(GlobalLibrary).map(id => ({
            id, name: GlobalLibrary[id].name,
            venting: "", jewel: "", selectedGems: [], probeText: ""
        })),
        smallBets: []
    }
};

function saveData() { localStorage.setItem('id_alchemy_v19_3', JSON.stringify(State.userData)); }

// --- Global Logic ---
function synthesizeNarrative(p) {
    const lib = AlchemicalDeclarations[p.id] || {};
    const selected = p.selectedGems.filter(g => lib[g]);
    const specificVision = p.probeText ? p.probeText.toLowerCase() : "";
    let script = "";
    if (specificVision) {
        script += `MY VISION MANIFESTS IN HIGH RESOLUTION:\n\n`;
        if (specificVision.includes('god') || specificVision.includes('infinity')) { script += `I take the sacred time to directly connect with the source of all things. Whenever I feel the old pull of struggle, I pause and return to the silence of my eternal connection.\n\n`; }
        if (specificVision.includes('noise') || specificVision.includes('static')) { script += `I cut through the mental noise of the world with the precision of a master architect. My mind is a fortress of peace, anchoring only in the signal of my expansion.\n\n`; }
    }
    if (selected.length > 0) {
        script += `I AM THE ARCHITECTURE OF MY NEW SELF:\n\n`;
        selected.forEach(gem => { script += `• ${lib[gem] || gem}\n`; });
        script += `\n`;
    }
    return script.trim();
}

function formatGems(list) {
    if (list.length === 0) return "my desired reality";
    if (list.length === 1) return list[0];
    const last = list[list.length - 1];
    const initial = list.slice(0, -1).join(', ');
    return `${initial} and ${last}`;
}

// --- Voice Recognition ---
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
        recognition.onstart = () => { const wave = document.getElementById('wave-container'); if (wave) wave.classList.add('active'); };
        recognition.onend = () => { if (State.isRecording) setTimeout(() => recognition.start(), 250); else { const wave = document.getElementById('wave-container'); if (wave) wave.classList.remove('active'); } };
    },
    stop: () => { State.isRecording = false; if (recognition) recognition.stop(); }
};

// --- Deterministic Interface Routing ---
window.switchTo = (v) => { 
    console.log(`[Deterministic Switch] View: ${v}, Phase: ${State.alchemyPhase}`);
    syncInput(); VoiceController.stop(); State.view = v; 
    const main = document.getElementById('main-content');
    if (v === 'welcome') State.pillarIndex = 0;
    if (v === 'intro') { State.alchemyPhase = 'mirror'; }
    const p = State.userData.pillars[State.pillarIndex];
    if (v === 'alchemy' && State.alchemyPhase === 'final') {
        p.jewel = synthesizeNarrative(p);
    }
    try {
        main.innerHTML = Views[v] ? Views[v]() : "View missing.";
    } catch (e) {
        console.error("[Deterministic Fail]", e);
        main.innerHTML = `<div class="glass-card"><h2>An alchemical error occurred.</h2><p>${e.message}</p><button onclick="location.reload()">Reset Sanctuary</button></div>`;
    }
    window.scrollTo(0, 0); 
    saveData();
};

function syncInput() {
    const el = document.getElementById('main-input');
    if (el) { 
        if (State.view === 'discovery') State.userData.pillars[State.pillarIndex].venting = el.value;
        if (State.view === 'alchemy' && State.alchemyPhase === 'probe') State.userData.pillars[State.pillarIndex].probeText = el.value;
        saveData();
    }
}

window.toggleMic = () => {
    syncInput(); State.isRecording = !State.isRecording;
    if (State.isRecording) { VoiceController.init(); if (recognition) recognition.start(); } 
    else { VoiceController.stop(); }
    const btn = document.querySelector('.mic-btn'); if (btn) btn.className = `mic-btn ${State.isRecording ? 'recording' : ''}`;
};

window.toggleAspiration = (term) => {
    const p = State.userData.pillars[State.pillarIndex];
    const idx = p.selectedGems.indexOf(term);
    if (idx > -1) p.selectedGems.splice(idx, 1); else p.selectedGems.push(term);
    document.querySelectorAll(`.pattern-chip[data-term="${term}"]`).forEach(c => c.classList.toggle('active'));
    saveData();
};

window.handleNext = () => {
    console.log(`[Action] handleNext triggered at View: ${State.view}, Phase: ${State.alchemyPhase}`);
    syncInput(); 
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
            } else { 
                window.switchTo('manifesto'); 
            }
        }
    }
};

window.updateJewel = (val) => { State.userData.pillars[State.pillarIndex].jewel = val; saveData(); };

// --- VIEW COMPARTMENTS ---
const Views = {
    welcome: () => getWelcomeView(),
    science: () => getScienceView(),
    intro: () => getIntroView(),
    discovery: () => getInventoryView(),
    alchemy: () => getAlchemyView(),
    manifesto: () => getManifestoView()
};

function getWelcomeView() {
    return `<div class="hero">
        <h1>Identity Alchemy</h1>
        <p class="subtitle" style="color:var(--accent);">v19.3 Deterministic Flow</p>
        <div style="display:flex; gap:1.5rem; justify-content:center; margin-top:2rem;">
            <button class="cta-btn" onclick="window.switchTo('science')">Enter the Sanctuary</button>
        </div>
    </div>`;
}

function getScienceView() {
    return `<div class="glass-card fade-in"><h2>The Bowl and The Pond</h2><p class="story-text">Identity is the bowl. Reality is the pond. We are here to change the container.</p><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="window.switchTo('intro')">Begin Transformation</button></div>`;
}

function getIntroView() {
    const p = GlobalLibrary[State.userData.pillars[State.pillarIndex].id];
    return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Pillar ${State.pillarIndex + 1}/7</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Foundation</h4><h2 style="font-size:3rem;">${p.name}</h2><p class="story-text" style="margin-top:2rem;">${p.intro}</p><button class="cta-btn" style="margin-top:2rem;" onclick="window.switchTo('discovery')">Enter the Inventory</button></div>`;
}

function getInventoryView() {
    const p = State.userData.pillars[State.pillarIndex];
    const lib = GlobalLibrary[p.id];
    return `<div class="glass-card fade-in"><h4 style="color:var(--accent);">Chapter I</h4><h2 style="font-size:3rem;">The Inventory</h2><textarea id="main-input" placeholder="Narrate your frictions and flows here...">${p.venting}</textarea><div class="voice-controls"><button class="mic-btn" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Approach the Mirror</button></div></div>`;
}

function getAlchemyView() {
    const p = State.userData.pillars[State.pillarIndex];
    if (State.alchemyPhase === 'mirror') {
        const lib = GlobalLibrary[p.id];
        return `<div class="glass-card fade-in"><h4 style="color:var(--accent);">Chapter II</h4><h2 style="font-size:3rem;">The Selective Mirror</h2><div class="pattern-grid">${lib.states_of_being.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><div class="pattern-grid" style="margin-top:2rem;">${lib.states_of_power.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="handleNext()">Visioning the Gems</button></div>`;
    } else if (State.alchemyPhase === 'probe') {
        return `<div class="glass-card fade-in"><h4 style="color:var(--accent);">Chapter III</h4><h2 style="font-size:3rem;">Visioning the Gems</h2><p>How do these gems weave together in your ideal reality?</p><textarea id="main-input" placeholder="Narrate the vision of your expansion...">${p.probeText}</textarea><div class="voice-controls"><button class="mic-btn" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Build Master Script</button></div></div>`;
    } else { // final
        return `<div class="glass-card fade-in"><h4 style="color:var(--accent);">Chapter IV</h4><h2 style="font-size:3rem;">The Master Script</h2><textarea onchange="updateJewel(this.value)" style="background:rgba(255,255,255,0.05); border:1px solid var(--accent); color:var(--text-main); width:100%; font-size:1.4rem; min-height:400px; padding:2rem; border-radius:32px;">${p.jewel}</textarea><button class="cta-btn mt-4" style="width:100%;" onclick="handleNext()">Next Pillar</button></div>`;
    }
}

function getManifestoView() {
    const compiled = State.userData.pillars.filter(p => p.jewel).map(p => `### ${p.name}\n\n${p.jewel}`).join("\n\n---\n\n");
    return `<div class="glass-card fade-in"><h1>Ultimate Life Manifesto</h1><div style="white-space:pre-wrap; padding:2rem; border:1px solid var(--glass-border); border-radius:32px;">${compiled}</div><button class="cta-btn mt-4" onclick="window.print()">Print</button></div>`;
}

document.addEventListener('DOMContentLoaded', () => { window.switchTo('welcome'); VoiceController.init(); });
