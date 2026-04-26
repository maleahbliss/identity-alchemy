// Identity Alchemy - Master Sanctuary Engine v46.0.0 (Absolute Restoration)

const GlobalLibrary = {
    spiritual: {
        name: "Spiritual Identity",
        intro: "In this sanctuary, we dissolve the static of your history. Your Spiritual Identity is the foundation—the primal connection that determines the shape of every outcome. We are here to listen for the subtle signals of your expansion.",
        questions: ["What spiritual frictions or old stories are you ready to leave behind?", "When you feel in a state of absolute flow, what does that look like?", "What core principles are you ready to embody in your daily life?"],
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

const AspirationMap = {
    'noise': 'Quiet Clarity', 'struggle': 'Effortless Momentum', 'clutter': 'Simplified Focus', 'masking': 'Radical Authenticity', 'performing': 'Natural Presence', 'tire': 'Renewed Vitality', 'tired': 'Renewed Vitality', 'exhausted': 'Peak Energy', 'stuck': 'Constant Growth', 'manual': 'Automated Ease', 'performance': 'Real Contibution', 'pressure': 'Relaxed Authority', 'logistics': 'Strategic Mastery', 'fear': 'Absolute Confidence', 'anxiety': 'Peaceful Certainty', 'confusion': 'Sharp Intuition', 'mixed': 'Clean Results', 'results': 'Measurable Impact', 'ceiling': 'Infinite Expansion', 'limiting': 'Unbound Growth', 'historical': 'Fresh Perspective', 'drain': 'Sustainable Flow', 'friction': 'Perfect Alignment', 'mask': 'Unmasked Honesty'
};

const STORAGE_KEY = 'identity_alchemy_master_data';
const DefaultState = { view: 'welcome', pillarIndex: 0, alchemyPhase: 'mirror', isRecording: false, identifiedFrictions: [], userData: { selectedRituals: [], pillars: Object.keys(GlobalLibrary).map(id => ({ id, name: GlobalLibrary[id].name, venting: "", jewel: "", selectedGems: [], probeText: "" })) } };
const State = JSON.parse(localStorage.getItem(STORAGE_KEY)) || DefaultState;

window.saveData = () => { localStorage.setItem(STORAGE_KEY, JSON.stringify({...State, isRecording: false})); };

function synthesizeProbe(text) {
    if (!text) return "";
    let cleaned = text.trim();
    const debris = ["okay so", "i think", "you know", "so", "i believe", "the way", "it looks like", "maybe", "i would love to", "i need to", "i must", "i have to", "i just need to", "anytime that i am", "so anytime i'm", "i need to rely on", "i need to take the time", "but as all of those things", "would show up is that", "i got into it as i was dumping my frustrations but"];
    debris.forEach(d => cleaned = cleaned.replace(new RegExp(d, 'gi'), ""));
    cleaned = cleaned.replace(/connecticut/gi, "kinetics").replace(/ablutely/gi, "absolutely").replace(/rt /gi, "").replace(/vereignty/gi, "sovereignty").replace(/cies/gi, "ease");
    cleaned = cleaned.replace(/\bi am\b/gi, "you are").replace(/\bi'm\b/gi, "you are").replace(/\bi\b/gi, "you").replace(/\bmy\b/gi, "your").replace(/\bme\b/gi, "you").replace(/\bmyself\b/gi, "yourself");
    cleaned = cleaned.replace(/\s(because|so that|whenever|anytime|if|which|as you continue to).*/gi, "");
    const truthSentences = cleaned.split(/[.!?]/).map(s => s.trim()).filter(s => s.length > 15 && !/\b(struggle|friction|pain|old|past|hurting|tension|inflammation|no longer|stuck|hardship|difficulty|inability|hard)\b/i.test(s));
    if (truthSentences.length === 0) return "";
    let final = truthSentences[0].replace(/\s+/g, ' ').trim();
    return final.endsWith('.') ? final : final + ".";
}

const DailyRitualLibrary = {
    morning: ["Waking up naturally with no alarm", "Looking out over the water", "A simple, quiet meditation", "Reading a book in the quiet", "A peaceful walk through the trees", "Coffee on your balcony", "Brunch in your sunny kitchen"],
    day: ["Working on things you love", "Having deep, honest conversations", "Creating something meaningful", "Leading your team with ease", "Taking a walk in the sun"],
    evening: ["Walking on the beach under the moon", "Watching the stars fill the sky", "Resting in the absolute peace of your home"]
};

const NarrativeMap = { "Waking up naturally with no alarm": "waking up naturally with no alarm", "Looking out over the water": "looking out over the water", "A simple, quiet meditation": "surrendering to a simple, quiet meditation", "Reading a book in the quiet": "losing yourself in the wisdom of a book", "A peaceful walk through the trees": "taking a peaceful walk through the trees", "Coffee on your balcony": "sipping coffee on your balcony", "Brunch in your sunny kitchen": "having a slow brunch in your sunny kitchen", "Walking on the beach under the moon": "walking on the beach under the moon", "Watching the stars fill the sky": "watching the stars" };

function generateUniversalVision() {
    const rituals = State.userData.selectedRituals || [];
    const pillars = State.userData.pillars || [];
    const p = (id) => pillars.find(x => x.id === id) || { selectedGems: [], probeText: "" };
    const probe = (id) => synthesizeProbe(p(id).probeText);
    const gems = (id) => p(id).selectedGems.slice(0, 2).join(" and ");

    let story = `The mid-morning sun fills your home with a warm, golden glow. You awaken naturally, feeling the deep restoration of a body full of vibrant ease and a mind that is clear and still. As you look around your sanctuary, you think to yourself, "Why is my life so good? Why does everything happen so easily for me?"\n\n`;

    const morning = rituals.filter(r => ["Waking up naturally with no alarm", "Looking out over the water", "A simple, quiet meditation", "Reading a book in the quiet", "A peaceful walk through the trees"].includes(r));
    if (morning.length > 0) {
        const phrases = morning.map(r => NarrativeMap[r] || r.toLowerCase());
        story += `The first hours of your day move with a grace that is entirely your own. You ${phrases[0] || "wake up naturally"}, ${phrases[1] || "looking out over the water"} and ${phrases[2] || "surrendering to a simple, quiet meditation"}. Whether you are ${phrases[3] || "losing yourself in the wisdom of a book"} or ${phrases[4] || "taking a peaceful walk through the trees"}, you find the unshakeable stillness that centers your being. This simple perfection is the foundation of your day.\n\n`;
    }

    story += `This life is built on the foundations of your highest truth. Your spiritual path is one of ${gems('spiritual')}. You move with a direct intuition that guides your every step, knowing that you take the time to directly connect with God and infinity. ${probe('spiritual')} This clarity extends to your mental sanctuary, where you operate with a quiet mastery. Your strategic mastery allows you to maintain a mental flow state and a precise awareness that allows your genius to be unbound. ${probe('mental').replace(/^you/i, "You operate with a level of deep intellectual ease that")} allowing for sharp intuition and absolute certainty.\n\n`;

    story += `As the day moves forward, you step into your purpose with natural authority. You live in a state of Masterful Execution and Executive Presence. You create radical value because you are masterful at execution, creating savant-level output because you know what you are creating and how to make it happen. You lead effortlessly with authentic authority and natural presence, creating radical value for the entire globe. You are rewarded with masses of money because of how impactful a leader you are, creating things the world needs and receives with joy.\n\n`;

    story += `Abundance is your natural state. You experience ${gems('wealth')}. You live an adventurous life that allows the world to surprise you with special moments, knowing that ${probe('wealth').replace(/^you/i, "having economic freedom means you")} and are able to experience as much fun as you ever could want. You are a grateful steward of your wealth, choosing to step into natural abundance and prosperous living with ease. You ask yourself, "Why am I so good at making and multiplying money?"\n\n`;

    story += `Your body reflects this internal order. You move with ${gems('physical')}, achieving a state where you have significant structural integrity so that you can move easily. Your body is full of youthful energy and peak wellness, giving you the ability to move with fluid strength and endless stamina. You optimize your genetics to keep yourself at peak wellness, enjoying the freedom to follow every adventure that comes into your path. You have the physical autonomy to do anything you want, knowing that your mobility and freedom are yours for a lifetime.\n\n`;

    story += `Your social presence is one of ${gems('social')}. People are drawn to your unmasked charisma because you have so much self-love and self-knowledge of who you are. ${probe('social')} You are radically honest and radically kind at the same time, and when people experience your presence, they are changed by the spiritual truths you share. You grow into a quiet influence, where people pay attention to your path and find inspiration in the choices you make.\n\n`;

    const evening = rituals.filter(r => ["Walking on the beach under the moon", "Watching the stars fill the sky"].includes(r));
    story += `When the sun begins to set, you return to the peace of your sanctuary. The evening is a beautiful time of ${evening.map(r => NarrativeMap[r]).join(" and ")}. At home, you have created a ${gems('familial')}. Your family life is a reflection of everyone showing up as a happy, healthy functioning adult who is winning at life. Everyone takes full responsibility for how they are showing up, creating a space of mutual support and resonant connection. When everyone takes full responsibility for their life, there is deep emotional safety and sacred connection. You model what real partnership and love look like, working together to take care of the whole.\n\n`;

    story += `As the day ends, you prepare for a deep, restorative sleep. You think about how safe, loved, and supported you are. You ask yourself, "Why do I always feel so good?"\n\nThis is not just a story; it is your life. You know what you are creating, and you know it is already happening.\n\nSo it is.`;
    return story;
}

function synthesizeNarrative(p) {
    const probe = synthesizeProbe(p.probeText);
    const gems = p.selectedGems.slice(0, 2).join(" and ");
    return `I embody ${gems}. I lead from the depth of my being, my impact a natural byproduct of my authenticity. ${probe.replace(/you are/gi, "I am").replace(/you /gi, "I ")}`;
}

// --- Views ---
function getSidebar() {
    return `<div class="sidebar glass-card">
        <h3 style="color:var(--accent); font-size:0.7rem; text-transform:uppercase; letter-spacing:0.2em; margin-bottom:2rem;">The Sanctuary</h3>
        <button class="nav-item ${State.view === 'welcome' ? 'active' : ''}" onclick="window.switchTo('welcome')">Welcome</button>
        <div class="nav-divider"></div>
        ${State.userData.pillars.map((p, i) => `
            <button class="nav-item ${State.view !== 'welcome' && State.view !== 'ritual' && State.view !== 'manifesto' && State.pillarIndex === i ? 'active' : ''}" onclick="window.jumpToPillar(${i})">
                <span class="nav-dot ${p.jewel ? 'complete' : ''}"></span>
                ${GlobalLibrary[p.id].name}
            </button>
        `).join('')}
        <div class="nav-divider"></div>
        <button class="nav-item ${State.view === 'ritual' ? 'active' : ''}" onclick="window.switchTo('ritual')">Daily Rituals</button>
        <button class="nav-item ${State.view === 'manifesto' ? 'active' : ''}" onclick="window.switchTo('manifesto')" style="color:var(--primary); font-weight:bold;">Master Vision</button>
    </div>`;
}

const Views = {
    welcome: () => `<div class="hero"><h1>Identity Alchemy</h1><p class="subtitle" style="color:var(--accent);">v46.0.0 Structural Restoration</p><div style="display:flex; flex-direction:column; gap:1rem; align-items:center; margin-top:2rem;"><button class="cta-btn" onclick="window.switchTo('science')">Enter Sanctuary</button><button class="cta-btn" onclick="window.resumeJourney()" style="background:rgba(255,255,255,0.1);">Resume Expansion</button></div></div>`,
    science: () => `<div class="glass-card fade-in"><h2>The Art of the Shift</h2><p class="story-text" style="margin-bottom:2rem;">Identity is the 'Bowl' within which your reality is contained. Shift the bowl, and the life follows.</p><button class="cta-btn" onclick="window.switchTo('intro')">Begin Transformation</button></div>`,
    intro: () => { const p = GlobalLibrary[State.userData.pillars[State.pillarIndex].id]; return `<div class="glass-card fade-in"><div style="font-size:0.8rem; color:var(--text-dim);">Pillar ${State.pillarIndex + 1}/7</div><h2>${p.name}</h2><p class="story-text">${p.intro}</p><button class="cta-btn" style="margin-top:2rem;" onclick="window.switchTo('discovery')">Enter the Inventory</button></div>` },
    discovery: () => {
        const p = State.userData.pillars[State.pillarIndex];
        const lib = GlobalLibrary[p.id];
        return `<div class="glass-card fade-in"><h2>The Inventory</h2><p class="story-text" style="margin-bottom:2rem;">${lib.questions[0]}</p><div style="position:relative;"><textarea id="main-input">${p.venting}</textarea><button class="mic-btn" onclick="window.toggleMic()"><i class="fas fa-microphone"></i></button></div><button class="cta-btn mt-4" style="width:100%;" onclick="window.handleNext()">Identify Aspirations</button></div>`;
    },
    alchemy: () => {
        const p = State.userData.pillars[State.pillarIndex];
        if (State.alchemyPhase === 'mirror') return `<div class="glass-card fade-in"><h2>The Mirror</h2><div class="tag-cloud">${GlobalLibrary[p.id].states_of_being.map(s => `<button class="tag-btn ${p.selectedGems.includes(s) ? 'active' : ''}" onclick="window.toggleAspiration('${s}')">${s}</button>`).join('')}</div><button class="cta-btn mt-4" style="width:100%;" onclick="window.handleNext()">Deepen Vision</button></div>`;
        if (State.alchemyPhase === 'probe') return `<div class="glass-card fade-in"><h2>The Deep Probe</h2><div style="position:relative;"><textarea id="main-input" placeholder="What does perfection look like?">${p.probeText}</textarea><button class="mic-btn" onclick="window.toggleMic()"><i class="fas fa-microphone"></i></button></div><button class="cta-btn mt-4" style="width:100%;" onclick="window.handleNext()">Alchemize Jewel</button></div>`;
        if (State.alchemyPhase === 'final') return `<div class="glass-card fade-in"><h2>Your Jewel</h2><div class="jewel-display"><div contenteditable="true" oninput="window.updateJewel(this.innerText)">${p.jewel}</div></div><button class="cta-btn mt-4" style="width:100%;" onclick="window.handleNext()">Next Pillar</button></div>`;
    },
    ritual: () => `<div class="glass-card fade-in"><h2>Rituals</h2><div class="tag-cloud">${Object.keys(NarrativeMap).map(r => `<button class="tag-btn ${State.userData.selectedRituals.includes(r) ? 'active' : ''}" onclick="window.toggleRitual('${r}')">${r}</button>`).join('')}</div><button class="cta-btn mt-4" style="width:100%;" onclick="window.switchTo('manifesto')">Reveal Master Vision</button></div>`,
    manifesto: () => `<div class="glass-card fade-in" style="max-width:1200px;"><h1>My Master Vision</h1><div style="white-space:pre-wrap; font-size:1.2rem; line-height:1.7;">${generateUniversalVision()}</div><button class="cta-btn mt-4" onclick="window.print()">Print Script</button></div>`
};

// --- Controllers ---
let recognition = null;
window.switchTo = (v) => { syncInput(); State.view = v; if (v === 'alchemy' && State.alchemyPhase === 'final') { const p = State.userData.pillars[State.pillarIndex]; p.jewel = synthesizeNarrative(p); } window.render(); window.saveData(); };
window.jumpToPillar = (i) => { State.pillarIndex = i; State.view = 'intro'; window.render(); window.saveData(); };
window.handleNext = () => { syncInput(); if (State.view === 'discovery') { State.alchemyPhase = 'mirror'; window.switchTo('alchemy'); } else if (State.view === 'alchemy') { if (State.alchemyPhase === 'mirror') { State.alchemyPhase = 'probe'; window.switchTo('alchemy'); } else if (State.alchemyPhase === 'probe') { State.alchemyPhase = 'final'; window.switchTo('alchemy'); } else { if (State.pillarIndex < 6) { State.pillarIndex++; State.alchemyPhase = 'mirror'; window.switchTo('intro'); } else { window.switchTo('ritual'); } } } else if (State.view === 'ritual') { window.switchTo('manifesto'); } };
function syncInput() { const el = document.getElementById('main-input'); if (el) { if (State.view === 'discovery') State.userData.pillars[State.pillarIndex].venting = el.value; if (State.view === 'alchemy' && State.alchemyPhase === 'probe') State.userData.pillars[State.pillarIndex].probeText = el.value; saveData(); } }
window.toggleMic = () => { 
    State.isRecording = !State.isRecording;
    if (State.isRecording) {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Speech) return;
        recognition = new Speech(); recognition.continuous = true; recognition.interimResults = true;
        recognition.onresult = (e) => {
            let t = ''; for (let i = e.resultIndex; i < e.results.length; ++i) if (e.results[i].isFinal) t += e.results[i][0].transcript;
            const el = document.getElementById('main-input'); if (el) el.value += (el.value ? ' ' : '') + t;
        };
        recognition.start();
    } else if (recognition) { recognition.stop(); }
    window.render();
};
window.toggleAspiration = (term) => { const p = State.userData.pillars[State.pillarIndex]; const idx = p.selectedGems.indexOf(term); if (idx > -1) p.selectedGems.splice(idx, 1); else p.selectedGems.push(term); saveData(); render(); };
window.toggleRitual = (r) => { const idx = State.userData.selectedRituals.indexOf(r); if (idx > -1) State.userData.selectedRituals.splice(idx, 1); else State.userData.selectedRituals.push(r); saveData(); render(); };
window.updateJewel = (val) => { State.userData.pillars[State.pillarIndex].jewel = val; saveData(); };
window.resumeJourney = () => { const i = State.userData.pillars.findIndex(p => !p.jewel); State.pillarIndex = i > -1 ? i : 0; window.switchTo('intro'); };
window.render = () => { 
    const main = document.getElementById('main-content'); 
    if (main) {
        main.innerHTML = getSidebar() + `<div class="view-container">${Views[State.view]()}</div>`;
    }
};
document.addEventListener('DOMContentLoaded', () => { 
    // Temporary force-reset to clear the "stuck" state from previous broken versions
    if (localStorage.getItem('sanctuary_overhaul_v47') !== 'true') {
        State.view = 'welcome';
        localStorage.setItem('sanctuary_overhaul_v47', 'true');
        saveData();
    }
    window.render(); 
});
