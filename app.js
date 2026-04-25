// Identity Alchemy - Universal Master Engine v18.2 (Divine Transcription)

const GlobalLibrary = {
    spiritual: {
        name: "Spiritual Identity",
        intro: "In this sanctuary, we dissolve the static of your history. Your Spiritual Identity is the foundation—the primal connection that determines the shape of every outcome. We are here to listen for the subtle signals of your expansion.",
        questions: ["What spiritual frictions or old stories are you ready to leave behind?", "When you feel in a state of absolute flow, what does that experience look like?", "What core principles are you ready to embody in your daily life?"],
        states_of_being: ["Quiet Clarity", "Direct Intuition", "Universal Connection", "Peaceful Expansion", "Daily Presence", "Infinite Curiosity", "Radical Peace", "Unshakeable Faith", "Compassionate Presence", "Luminous Certainty", "Sacred Autonomy", "Effortless Surrender", "Universal Harmony", "The Light of Truth", "Alchemical Balance"],
        states_of_power: ["Savant Insight", "Effortless Wisdom", "Spiritual Autonomy", "The Flow of Oneness", "Joyful Expansion", "Transcendent Focus", "Vibrant Oneness", "Metaphysical Ease", "Timeless Being", "Absolute Spirit"]
    },
    mental: {
        name: "Mental Identity",
        intro: "The savant mind is a high-output engine. By being brutally honest about the mental 'noise' that weighs you down, we create the contrast necessary to define your high-frequency focus.",
        questions: ["What mental distractions or historical patterns are currently clogging your focus?", "When you have absolute clarity, what does your work feel like?", "How does knowing what distracts you define the perfect sanctuary for your focus?"],
        states_of_being: ["Laser Focus", "Quiet Genius", "Simplified Mindset", "Mental Sanctuary", "High-Resolution Thought", "Deep Intellectual Ease", "Unbound Creativity", "Cognitive Serenity", "Precise Awareness", "Mental Flow State"],
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
        states_of_power: ["Automated Wealth", "Effortless Income", "Passive Abundance", "Strategic Financial Mastery", "Autonomous Flow", "Wealth from My 기초", "Reliable Prosperity", "Geometric Growth", "Prosperous Security", "Financial Sovereignity", "Economic Freedom", "Universal Abundance", "Asset Magnetism", "Infinite Resourcefulness", "The Money Magnet"]
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
        questions: ["What social burnout or performative habits are you ready to drop?", "What does authentic influence and social ease feel like to you?", "How does identifying where your feel exhausted reveal your hidden zone of impact?"],
        states_of_being: ["Unmasked Presence", "Social Sanctuary", "Effortless Charisma", "Authentic Connection", "Peaceful Visibility", "Public Transparency", "Social Autonomy", "Quiet Influence", "The Reflective Peer", "Direct Presence"],
        states_of_power: ["Radical Honesty", "Authentic Network", "Beacon of Truth", "Magnetic Reputation", "Public Mastery", "Presence-led Influence", "Autonomous Social Flow", "Massive Social Impact", "Global Network Resonance", "The Social Architect", "Masterful Networking", "Universal Charisma", "High-Resolution Visibility", "Unshakeable Social Ease", "Magnetic Individualism"]
    }
};

const AspirationMap = {
    'noise': 'Quiet Clarity', 'struggle': 'Effortless Momentum', 'clutter': 'Simplified Focus',
    'masking': 'Radical Authenticity', 'performing': 'Natural Presence', 'tire': 'Renewed Vitality',
    'tired': 'Renewed Vitality', 'exhausted': 'Peak Energy', 'stuck': 'Constant Growth',
    'manual': 'Automated Ease', 'performance': 'Real Contibution', 'pressure': 'Relaxed Authority',
    'logistics': 'Strategic Mastery', 'fear': 'Absolute Confidence', 'anxiety': 'Peaceful Certainty',
    'confusion': 'Sharp Intuition', 'mixed': 'Clean Results', 'results': 'Measurable Impact',
    'ceiling': 'Infinite Expansion', 'limiting': 'Unbound Growth', 'historical': 'Fresh Perspective',
    'drain': 'Sustainable Flow', 'friction': 'Perfect Alignment', 'mask': 'Unmasked Honesty'
};

const AlchemicalDeclarations = {
    'spiritual': {
        'Direct Intuition': "I am eternally connected to the infinite source of truth, receiving direct wisdom in every moment.",
        'Universal Connection': "I move in perfect harmony with the cosmos, a singular thread in the divine tapestry of Oneness.",
        'Peaceful Expansion': "My reality expands effortlessly into the vast pond of my potential, free from the glass walls of my history.",
        'Radical Peace': "I am the unshakeable center of my own universe, radiating a peace that transcends all understanding.",
        'Infinite Curiosity': "I approach every experience with the wonder of a savant, finding God in the details of my daily life.",
        'Daily Presence': "I am the Master of Now. Each breath is a conscious act of creation.",
        'Luminous Certainty': "I walk in the light of absolute truth, my path illuminated by the certainty of my own expansion.",
        'Sacred Autonomy': "I claim my divine right to self-determination, leading from my most authentic presence.",
        'Effortless Surrender': "I release the friction of struggle, allowing the tide of infinity to carry me toward my highest good.",
        'Universal Harmony': "My spirit is a symphony of balance, resonating with the frequency of absolute spirit.",
        'The Light of Truth': "I embody the radiance of the source, casting aside all shadows of the old story.",
        'Alchemical Balance': "I have mastered the transmutation of friction into flow, finding the golden mean in every interaction.",
        'Savant Insight': "I possess the clarity of high-frequency focus, seeing the geometry of reality with effortless precision.",
        'Effortless Wisdom': "I speak from the depth of my being, my words carrying the weight of ancient and eternal truth.",
        'Spiritual Autonomy': "I am the architect of my soul, answerable only to the infinite presence within me.",
        'The Flow of Oneness': "I am the river and the ocean, moving in the seamless current of universal energy.",
        'Joyful Expansion': "My growth is an act of celebration, a weightless ascent into the light of my desired reality.",
        'Transcendent Focus': "I rise above the static of the world, anchoring my awareness in the frequency of my expansion.",
        'Vibrant Oneness': "My body and spirit are a single, luminous flame, burning with the intensity of absolute spirit.",
        'Metaphysical Ease': "I navigate the subtle realms of existence with grace, finding sanctuary in the unseen.",
        'Timeless Being': "I exist beyond the limitations of history, a perpetual inhabitant of the eternal now.",
        'Absolute Spirit': "I AM THE SOURCE. I am the primal root of my own reality."
    }
};

const State = {
    view: 'welcome',
    pillarIndex: 0,
    alchemyPhase: 'mirror',
    isRecording: false,
    identifiedFrictions: [],
    userData: JSON.parse(localStorage.getItem('id_alchemy_v18_0')) || {
        pillars: Object.keys(GlobalLibrary).map(id => ({
            id, name: GlobalLibrary[id].name,
            venting: "", jewel: "", selectedGems: [], probeText: ""
        })),
        smallBets: []
    }
};

function saveData() { localStorage.setItem('id_alchemy_v18_0', JSON.stringify(State.userData)); }

// --- Global Logic ---
function generateReflections(text, pillarId) {
    if (!text) return { frictions: [] };
    let words = text.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
    let foundFrictions = [...new Set(words.filter(w => AspirationMap[w]))];
    return { frictions: foundFrictions };
}

function synthesizeNarrative(p) {
    const lib = AlchemicalDeclarations[p.id] || {};
    const selected = p.selectedGems.filter(g => lib[g]);
    const specificVision = p.probeText ? p.probeText.toLowerCase() : "";
    
    let script = `I AM THE CREATOR OF MY DESIRED REALITY.\n\n`;
    script += `I have recognized the glass walls of my historical patterns and I have stepped beyond them. I am no longer the fish in the bowl; I am the expansion of the vast pond.\n\n`;

    if (selected.length > 0) {
        script += `I AM THE ARCHITECTURE OF MY NEW SELF:\n\n`;
        selected.forEach(gem => { script += `• ${lib[gem]}\n`; });
        script += `\n`;
    }

    if (specificVision) {
        script += `MY VISION MANIFESTS IN HIGH RESOLUTION:\n\n`;
        if (specificVision.includes('god') || specificVision.includes('infinity')) {
            script += `I take the sacred time to directly connect with the source of all things. Whenever I feel the old pull of struggle, I pause and return to the silence of my eternal connection.\n\n`;
        }
        if (specificVision.includes('stress') || specificVision.includes('hardship')) {
            script += `I have mastered the art of returning to center. I do not focus on the smoke of external friction; I fall back into the depth of my peaceful expansion, choosing the joy that is always present in the moment.\n\n`;
        }
        if (specificVision.includes('curiosity') || specificVision.includes('work perfectly')) {
            script += `In moments of uncertainty, I rely on the power of infinite curiosity. I ask the savant question: "What if everything were to work perfectly?" and I allow that answer to guide my daily creation.\n\n`;
        }
        if (specificVision.includes('present') || specificVision.includes('certainty')) {
            script += `I am the master of my morning and the architect of my day. I claim the certainty of what I am creating, directing my energy with absolute autonomy and focus.\n\n`;
        }
        if (specificVision.includes('balance') || specificVision.includes('harmony')) {
            script += `I embody the alchemical balance between my spirit's nature and universal harmony. In this perfect resonance, surrender becomes effortless, and I receive the savant insight of the light of truth.\n\n`;
        }
    }

    script += `I move with absolute focus and effortless momentum. I am a Timeless Being living in Absolute Spirit. This is not who I am becoming; this is who I am.\n\n`;
    script += `SO IT IS.`;
    return script;
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

// --- Surgical Interface Routing ---
window.switchTo = (v) => { 
    syncInput(); VoiceController.stop(); State.view = v; 
    const main = document.getElementById('main-content');
    if (v === 'welcome') State.pillarIndex = 0;
    if (v === 'intro') { State.alchemyPhase = 'mirror'; }
    const p = State.userData.pillars[State.pillarIndex];
    if (v === 'alchemy' && State.alchemyPhase === 'mirror') {
        const reflections = generateReflections(p.venting, p.id);
        State.identifiedFrictions = reflections.frictions;
    }
    if (v === 'alchemy' && State.alchemyPhase === 'final') {
        p.jewel = synthesizeNarrative(p);
    }
    main.innerHTML = Views[v] ? Views[v]() : "View missing."; 
    window.scrollTo(0, 0); 
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
    syncInput(); 
    if (State.view === 'discovery') { State.alchemyPhase = 'mirror'; window.switchTo('alchemy'); }
    else if (State.view === 'alchemy') {
        if (State.alchemyPhase === 'mirror') { State.alchemyPhase = 'probe'; window.switchTo('alchemy'); }
        else if (State.alchemyPhase === 'probe') { State.alchemyPhase = 'final'; window.switchTo('alchemy'); }
        else {
            if (State.pillarIndex < 6) { State.pillarIndex++; State.alchemyPhase = 'mirror'; window.switchTo('intro'); }
            else { window.switchTo('manifesto'); }
        }
    }
};

window.updateJewel = (val) => { State.userData.pillars[State.pillarIndex].jewel = val; saveData(); };

// --- SURGICAL VIEW COMPARTMENTS ---
const Views = {
    welcome: () => getWelcomeView(),
    science: () => getScienceView(),
    intro: () => getIntroView(),
    discovery: () => getInventoryView(),
    alchemy: () => getAlchemyView(),
    manifesto: () => getManifestoView()
};

window.purgeSanctuary = () => {
    if (confirm("This will clear all local progress and force a fresh reload. Proceed?")) {
        localStorage.clear();
        location.reload(true);
    }
};

function getWelcomeView() {
    return `<div class="hero">
        <h1>Identity Alchemy</h1>
        <p class="subtitle" style="color:var(--accent);">v18.3 Sovereign Refresh</p>
        <p class="subtitle">A Voyage into the Primal Root of Reality.</p>
        <div style="display:flex; gap:1.5rem; justify-content:center; margin-top:2rem;">
            <button class="cta-btn" onclick="window.switchTo('science')">Enter the Sanctuary</button>
            <button class="cta-btn" style="background:rgba(255,255,255,0.1); color:white; border:1px solid var(--glass-border);" onclick="window.purgeSanctuary()">Force Refresh & Reset</button>
        </div>
    </div>`;
}

function getScienceView() {
    return `<div class="glass-card fade-in"><h2 style="font-size:3rem; margin-bottom:2rem;">The Art of the Shift: From the Bowl to the Pond</h2><div class="story-content" style="line-height:1.9; color:var(--text-main); font-size:1.2rem; display:flex; flex-direction:column; gap:2.5rem;"><p class="story-text">Identity is the single most powerful force in the human psyche. It is the invisible 'Bowl' within which your entire reality is contained. No matter how much effort you put in, your results will only ever grow to the size of that container.</p><div><p class="story-text">There is a story of a goldfish, one whose growth is limited only by the size of the container it inhabits. In a small bowl, it stays three inches long. Not because of its genetics, but because the <b>Glass Walls</b> of its environment signal its biological systems to stop expanding.</p><p class="story-text">If you take that same fish and place it in a vast, open pond, it will expand to meet its environment. You are that fish. Your current identity—the story you tell yourself about who you are—is your bowl. If you want a larger life, you don't need a larger net or more 'processes.' You need a larger container. <b>You need the Pond.</b></p></div><div class="highlight-box"><h4 style="color:var(--accent); font-size:1.4rem; margin-bottom:1rem;">The Foundations of Reality</h4><p class="story-text">Sustainable growth is never found at the surface. It requires a fundamental shift in the 3 Layers of Reality Construction:</p><p style="margin-bottom:1rem;">1. <b>Outcomes (The Smoke):</b> These are the external results—wealth, health, and impact. They are merely the artifacts of who you are, not the cause of it.</p><p style="margin-bottom:1rem;">2. <b>Processes (The Flow):</b> These are your daily habits. They automatically follow the direction of your deepest identity.</p><p>3. <b style="color:var(--primary);">Identity (The Primal Root):</b> This is the 'Bowl'. When you shift the root, the flow and the smoke change automatically. We are here to change the Bowl.</p></div><div><h4 style="color:var(--primary); font-size:1.6rem; margin-bottom:1rem;">Your Journey of Transmutation</h4><p class="story-text"><b>I. The Inner Inventory:</b> We face the glass walls of your history head-on. By dumping the 'frictions' that weigh you down, we clear the space for your expansion.</p><p class="story-text"><b>II. The Selective Mirror:</b> We reflect your story back to you, listening for the 'Do Wants' hidden between the lines of your struggles. You choose the architecture of your new self.</p><p class="story-text"><b>III. The Master Script:</b> We alchemize your choices into your Ultimate Life Manifesto—the definitive blueprint for your expanded life.</p></div></div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="window.switchTo('intro')">Begin My Transformation</button></div>`;
}

function getIntroView() {
    const p = GlobalLibrary[State.userData.pillars[State.pillarIndex].id];
    return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Pillar ${State.pillarIndex + 1}/7</div><div class="progress-container"><div class="progress-fill" style="width:${(State.pillarIndex + 1) * 14.2}%"></div></div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Foundation</h4><h2 style="font-size:3rem;">${p.name}</h2><p class="story-text" style="margin-top:2rem;">${p.intro}</p><button class="cta-btn" style="margin-top:2rem;" onclick="window.switchTo('discovery')">Enter the Inventory</button></div>`;
}

function getInventoryView() {
    const p = State.userData.pillars[State.pillarIndex];
    const lib = GlobalLibrary[p.id];
    return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Inventory</div><div class="progress-container"><div class="progress-fill" style="width:${(State.pillarIndex + 1) * 14.2}%"></div></div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter I</h4><h2 style="font-size:3rem;">The Inventory</h2><div class="instruction-box" style="margin-bottom: 2.5rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">This is your Inventory—a space to narrate both the <b>Friction</b> and the <b>Flow</b> of your ${p.name}. We invite you to share what IS working and what ISN'T working.</p><p style="color:var(--text-dim);">Often, by speaking precisely about the historical patterns that no longer serve you, you will find yourself naturally flowing into the clarity of what you actually desire. Use the sparks below to ignite your inquiry, but let your own truth guide the narrative.</p></div><div style="font-size:1rem; border:1px solid var(--glass-border); padding:2rem; border-radius:24px; margin:2rem 0; background:rgba(0,0,0,0.2);"><ul style="padding-left:1.5rem; line-height: 1.8;">${lib.questions.map(q => `<li style="margin-bottom:0.8rem; color:var(--text-main); opacity:0.8;">${q}</li>`).join('')}</ul></div><textarea id="main-input" placeholder="Narrate your frictions and flows here...">${p.venting}</textarea><div class="voice-controls"><button class="mic-btn ${State.isRecording ? 'recording' : ''}" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Approach the Mirror</button></div></div>`;
}

function getAlchemyView() {
    const p = State.userData.pillars[State.pillarIndex];
    if (State.alchemyPhase === 'mirror') {
        const lib = GlobalLibrary[p.id];
        const frictionText = State.identifiedFrictions.length > 0 ? `I hear the frictions of your history, specifically around <i>${State.identifiedFrictions.join(', ')}</i>.` : "I hear the frictions of your history.";
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Mirror</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter II</h4><h2 style="font-size:3rem;">The Selective Mirror</h2><div class="instruction-box" style="margin-bottom: 2.5rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">${frictionText} Now, we are going to define the geometry of your expansion.</p><p style="color:var(--text-dim);">Below are several states of being—Aspirations—that represent the inverted reality of your struggles. Select <b>multiple</b> Gems you are ready to claim as your new foundation.</p></div><h4 style="color:var(--accent); font-size:0.9rem; text-transform:uppercase; margin-bottom:1rem;">States of Being</h4><div class="pattern-grid" style="margin-bottom:2rem;">${lib.states_of_being.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><h4 style="color:var(--primary); font-size:0.9rem; text-transform:uppercase; margin-bottom:1rem;">States of Power</h4><div class="pattern-grid">${lib.states_of_power.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="handleNext()">Refine My Specifics</button></div>`;
    } else if (State.alchemyPhase === 'probe') {
        const formattedGems = formatGems(p.selectedGems);
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Specification</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter III</h4><h2 style="font-size:3rem;">Mastery of Specification</h2><div class="instruction-box" style="margin-bottom: 2rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">You have claimed your new foundation: <b>${formattedGems}</b>.</p><p style="color:var(--text-dim);">Now, we must articulate the <b>Master Blueprint</b>. How do these gems weave together into a single, luminous way of life? Narrate the vision of your expansion, letting one gem lead naturally into the next.</p></div><textarea id="main-input" placeholder="Narrate the vision of your expansion...">${p.probeText}</textarea><div class="voice-controls"><button class="mic-btn ${State.isRecording ? 'recording' : ''}" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Build Master Script</button></div></div>`;
    } else { // 'final' phase
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Master Script</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter IV</h4><h2 style="font-size:3rem;">The Master Script</h2><div class="alchemical-bridge"><p style="font-size:1.1rem; margin-bottom:2rem; opacity:0.8;">I have alchemized your intentions into this Identity Blueprint. Polish it for perfection:</p><div style="background:rgba(45, 212, 191, 0.05); border:1px solid var(--accent); padding:2rem; border-radius:32px;"><textarea onchange="updateJewel(this.value)" style="background:transparent; border:none; color:var(--text-main); width:100%; font-size:1.4rem; line-height:1.7; padding:0; min-height:400px; font-weight:300; white-space:pre-wrap;">${p.jewel}</textarea></div></div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="handleNext()">${State.pillarIndex < 6 ? 'Next Chapter' : 'Finalize Manifesto'}</button></div>`;
    }
}

function getManifestoView() {
    return `<div class="glass-card fade-in"><h1>Ultimate Life Manifesto</h1><div class="final-manifesto-display">${State.userData.pillars.filter(p => p.jewel).map(p => `<div><h4 class="manifesto-pillar">${p.name}</h4><p class="manifesto-content">${p.jewel}</p></div>`).join('') || '<p>Begin your transformation to build your manifesto.</p>'}</div><button class="cta-btn mt-4" style="width:100%; margin-top:3rem;" onclick="window.print()">Print Master Script</button><button class="cta-btn mt-4" style="width:100%; background:rgba(255,255,255,0.1); color:white; border:1px solid var(--glass-border);" onclick="if(confirm('Clear all progress?')) { localStorage.removeItem('id_alchemy_v18_0'); location.reload(); }">Reset Sanctuary</button></div>`;
}

document.addEventListener('DOMContentLoaded', () => { window.switchTo('welcome'); VoiceController.init(); });
